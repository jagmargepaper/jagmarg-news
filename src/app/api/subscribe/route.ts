import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, value } = body;

    if (!type || !value) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // TODO: Connect this to a real database (MySQL, PostgreSQL, MongoDB, or a CRM like Mailchimp/Brevo)
    // For now, we simulate saving the subscription.
    console.log(`[SUBSCRIBE API] New subscriber saved: [${type.toUpperCase()}] ${value}`);

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
