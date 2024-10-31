import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with your API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const { 
    firstName, 
    lastName, 
    email, 
    phoneNumber, 
    company, 
    address, 
    dateOfEvent, 
    attendees, 
    purposeOfEvent, 
    timeOfDay, 
    specialRequests, 
    recaptchaToken 
  } = await request.json();

  if (
    !firstName || 
    !lastName || 
    !email || 
    !phoneNumber || 
    !address || 
    !dateOfEvent || 
    !attendees || 
    !purposeOfEvent || 
    !timeOfDay
  ) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    // Verify the reCAPTCHA token
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

    // Prepare multiple recipients
    const recipients = [
      'tcain@hoari.com',
      'iwhalen@hoari.com'
    ];

    // Send the email using SendGrid
    await sendgrid.send({
      to: recipients,  // Multiple recipients as an array
      from: 'catering@hyperenergybar.com',  // Sender address
      subject: `Catering Request from ${firstName} ${lastName}`,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date of Event:</strong> ${dateOfEvent}</p>
        <p><strong>Attendees:</strong> ${attendees}</p>
        <p><strong>Purpose of Event:</strong> ${purposeOfEvent}</p>
        <p><strong>Time of Day:</strong> ${timeOfDay}</p>
        <p><strong>Special Requests/Notes:</strong><br>${specialRequests || 'None'}</p>
      `,
    });

    return NextResponse.json({ message: 'Catering request submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error during reCAPTCHA verification or email sending:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again later.' }, { status: 500 });
  }
}
