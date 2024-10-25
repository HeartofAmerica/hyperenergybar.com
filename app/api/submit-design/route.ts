// pages/api/job-application.ts

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
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const position = formData.get('position') as string;
    const resumeFile = formData.get('resumeFile') as File | null;
    const comments = formData.get('comments') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;

    // Validate reCAPTCHA token here if needed
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Ensure required fields are present
    if (!fullName || !email) {
      return NextResponse.json({ error: 'Missing required fields: Full Name and Email are required' }, { status: 400 });
    }

    if (!resumeFile) {
      return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
    }

    // Validate the resume file properties
    if (!resumeFile.name || !resumeFile.type) {
      return NextResponse.json({ error: 'Invalid resume file' }, { status: 400 });
    }

    // Read the resume file as a buffer
    const buffer = await resumeFile.arrayBuffer();
    const resumeContent = Buffer.from(buffer).toString('base64');

    // Set up the email content
    const emailContent = `
      New Job Application Submission:
      
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Address: ${address || 'Not provided'}
      Position Applied For: ${position || 'Not specified'}
      Additional Comments: ${comments || 'None'}
    `;

    // Set up email data
    const emailData = {
      to: 'tcain@hoari.com',
      from: 'sticker-drop@hyperenergybar.com',
      subject: 'New Job Application Submission',
      text: emailContent,
      attachments: [
        {
          content: resumeContent, // Use base64 content for the attachment
          filename: resumeFile.name,
          type: resumeFile.type,
          disposition: 'attachment',
        },
      ],
    };

    // Send email using SendGrid
    await sendgrid.send(emailData);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error during submission or email sending:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
