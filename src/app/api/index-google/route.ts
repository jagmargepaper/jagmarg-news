import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import key from '../../../../service-account.json'; // Adjust path depending on deployment

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, action } = body; // action should be 'URL_UPDATED' or 'URL_DELETED'

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // SECURITY CHECK: Add a secret token check here to prevent unauthorized pinging
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.INDEXING_API_SECRET || 'dev_secret'}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
