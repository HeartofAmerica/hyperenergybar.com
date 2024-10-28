// pages/api/submit-design.ts

import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    // Parse the FormData from the request
    const formData = await request.formData();

    // Extract all fields from FormData
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const designFile = formData.get('designFile') as File | null;
    const comments = formData.get('comments') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Ensure required fields are present
    if (!fullName || !email || !designFile) {
      return NextResponse.json({ error: 'Full Name, Email, and Design File are required' }, { status: 400 });
    }

    // Validate the design file properties
    if (!designFile.name || !designFile.type) {
      return NextResponse.json({ error: 'Invalid design file' }, { status: 400 });
    }

    // Read the design file as a buffer
    const buffer = await designFile.arrayBuffer();
    const designContent = Buffer.from(buffer).toString('base64');

    // Set up the email content
    const emailContent = `
      New Sticker Design Submission:
      
      Full Name: ${fullName}
      Email: ${email}
      Additional Comments: ${comments || 'None'}
    `;

    // Set up email data
    const emailData = {
      to: 'tcain@hoari.com',
      from: 'sticker-drop@hyperenergybar.com',
      subject: 'New Sticker Design Submission',
      text: emailContent,
      attachments: [
        {
          content: designContent, // Use base64 content for the attachment
          filename: designFile.name,
          type: designFile.type,
          disposition: 'attachment',
        },
      ],
    };

    // Send email using SendGrid
    await sendgrid.send(emailData);

    return NextResponse.json({ message: 'Design submitted successfully' });
  } catch (error: any) {
    console.error('Error during submission or email sending:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
