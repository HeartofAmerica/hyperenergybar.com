import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, merge_fields } = await request.json();

  if (!email || !merge_fields?.MMERGE7) {
    return NextResponse.json({ error: 'Email and location are required' }, { status: 400 });
  }

  try {
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        MMERGE7: merge_fields.MMERGE7 // Include the correct merge field value
      }
    };

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const response = await fetch(`https://us22.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();
    console.log('Mailchimp response:', responseBody);

    if (response.ok) {
      return NextResponse.json({ message: 'Successfully subscribed' }, { status: 200 });
    } else {
      return NextResponse.json({ error: responseBody.detail || 'Subscription failed' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again later.' }, { status: 500 });
  }
}
