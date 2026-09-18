import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, action } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.INDEXING_API_SECRET || 'dev_secret'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse service account from env, or gracefully exit if not configured
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      return NextResponse.json({ error: 'Google Service Account not configured in environment.' }, { status: 500 });
    }
    const key = JSON.parse(serviceAccountJson);

    // Configure the JWT client for Google Indexing API
    const jwtClient = new google.auth.JWT({
      email: key.client_email,
      key: key.private_key,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    // Authorize the client
    await jwtClient.authorize();
    
    const indexing = google.indexing({ version: 'v3', auth: jwtClient });
    
    // Ping Google
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: action || 'URL_UPDATED',
      },
    });

    console.log(`[Google Indexing API] Successfully pinged Google for URL: ${url}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Pinged Google Indexing API successfully',
      url: url,
      googleResponse: response.data
    });

  } catch (error: any) {
    console.error('Google Indexing API Error:', error.message || error);
    
    // Check if it's a 403 Forbidden error (means GSC isn't linked yet)
    if (error.code === 403) {
      return NextResponse.json({ 
        error: 'Forbidden. Have you added the service account email as an Owner in Google Search Console?',
        details: error.message
      }, { status: 403 });
    }

    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
