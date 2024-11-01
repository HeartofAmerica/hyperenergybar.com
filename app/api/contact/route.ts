import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with your API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

// Mapping of locations to email recipients
const locationEmailMap: { [key: string]: string[] } = {
  'Altoona': ['cwood@hoari.com', 'bwillson@hoari.com', 'tcain@hoari.com'],
  'Ankeny': ['jhance@hoari.com', 'tcain@hoari.com'],
  'Grimes': ['kgustin@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com', 'tcain@hoari.com'],
  'Iowa City': ['hmartin@hoari.com', 'tcain@hoari.com'],
  'Urbandale': ['cwhalen@hoari.com', 'cwood@hoari.com', 'jhance@hoari.com', 'tcain@hoari.com'],
  'Waukee': ['aeslick@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com', 'sengle@hoari.com', 'tcain@hoari.com'],
  'West Des Moines': ['sengle@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com', 'tcain@hoari.com'],
  'Corporate': ['cwhalen@hoari.com', 'cwood@hoari.com', 'tcain@hoari.com'],
  'Partnership/Donation Request': ['iwhalen@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com', 'tcain@hoari.com'],
};

export async function POST(request: Request) {
  const { firstName, lastName, email, location, message, recaptchaToken } = await request.json();

  if (!firstName || !lastName || !email || !location || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Verify the reCAPTCHA token
  try {
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY as string,
        response: recaptchaToken,
      }).toString(),
    });

    const recaptchaResult = await recaptchaResponse.json();
    console.log('Recaptcha Verification Result:', recaptchaResult);

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return NextResponse.json({ error: 'Failed reCAPTCHA verification', details: recaptchaResult }, { status: 400 });
    }

    // Get email recipients based on location
    const recipients = locationEmailMap[location];
    if (!recipients) {
      return NextResponse.json({ error: 'Invalid location' }, { status: 400 });
    }

    // Send the email using SendGrid
    await sendgrid.sendMultiple({
      to: recipients,
      from: 'contact-form@hyperenergybar.com',
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: message,
      html: `<p><strong>First Name:</strong> ${firstName}</p>
             <p><strong>Last Name:</strong> ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Location:</strong> ${location}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error during reCAPTCHA verification or email sending:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again later.' }, { status: 500 });
  }
}
