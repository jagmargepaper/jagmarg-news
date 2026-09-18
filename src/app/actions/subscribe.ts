'use server';

export async function subscribeToNewsletter(email: string) {
  if (!email || !email.includes('@')) {
    return { success: false, error: 'Invalid email address' };
  }

  try {
    const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace('/graphql', '');
    if (!wpUrl) throw new Error('WP URL not configured');

    // Default MailPoet REST API endpoint for subscribing (List ID 1 is usually the default list)
    // Note: Some WP setups require authentication for this endpoint. 
    // If it fails, we will implement the Brevo (Sendinblue) API instead.
    const response = await fetch(`${wpUrl}/wp-json/jagmarg/v1/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('MailPoet Subscription Error:', errorData);
      
      return { success: false, error: errorData.message || 'Failed to subscribe' };
    }

    return { success: true };
  } catch (error) {
    console.error('Subscription exception:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
