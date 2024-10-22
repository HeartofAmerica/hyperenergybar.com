import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    // Parse the FormData from the request
    const formData = await request.formData();
    
    // Extract the fields from FormData
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const comments = formData.get('comments') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const file = formData.get('designFile') as File;

    // Validate reCAPTCHA token here if needed
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Ensure required fields are present
    if (!fullName || !email || !file || !file.name || !file.type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Read the file as a buffer
    const buffer = await file.arrayBuffer();
    const fileContent = Buffer.from(buffer).toString('base64');

    // Set up email data
    const emailData = {
      to: 'tcain@hoari.com',
      from: 'tcain@hoari.com',
      subject: 'New Sticker Drop Submission',
      text: `${fullName} (${email}) sent a message: ${comments}`,
      attachments: [
        {
          content: fileContent, // Use base64 content
          filename: file.name,
          type: file.type,
          disposition: 'attachment',
        },
      ],
    };

    // Send email using SendGrid
    await sendgrid.send(emailData);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error during reCAPTCHA verification or email sending:', error);
    return NextResponse.json({ error: 'Error during reCAPTCHA verification or email sending' }, { status: 500 });
  }
}
