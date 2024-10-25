import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;  // Updated here
    const position = formData.get('position') as string;
    const dob = formData.get('dob') as string;
    const availability = formData.get('availability') as string;
    const startDate = formData.get('startDate') as string;
    const transportation = formData.get('transportation') as string;
    const workEligibility = formData.get('workEligibility') as string;  // Updated here
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const resumeFile = formData.get('resume') as File;
    const coverLetterFile = formData.get('coverLetter') as File;

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    if (!resumeFile || !coverLetterFile) {
      return NextResponse.json({ error: 'Resume and cover letter are required' }, { status: 400 });
    }

    const resumeContent = Buffer.from(await resumeFile.arrayBuffer()).toString('base64');
    const coverLetterContent = Buffer.from(await coverLetterFile.arrayBuffer()).toString('base64');

    const emailData = {
      to: 'tcain@hoari.com',
      from: 'tcain@hoari.com',
      subject: `New Job Application from ${firstName} ${lastName} for ${position}`,
      text: `First Name: ${firstName}\n` +
            `Last Name: ${lastName}\n` +
            `Email: ${email}\n` +
            `Phone Number: ${phoneNumber}\n` +  // Updated here
            `Position: ${position}\n` +
            `Date of Birth: ${dob}\n` +
            `Availability: ${availability}\n` +
            `Start Date: ${startDate}\n` +
            `Transportation: ${transportation}\n` +
            `Work Eligibility: ${workEligibility}\n\n`,
      attachments: [
        {
          content: resumeContent,
          filename: resumeFile.name,
          type: resumeFile.type,
          disposition: 'attachment',
        },
        {
          content: coverLetterContent,
          filename: coverLetterFile.name,
          type: coverLetterFile.type,
          disposition: 'attachment',
        },
      ],
    };

    await sendgrid.send(emailData);
    return NextResponse.json({ message: 'Application submitted successfully' });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error processing application' }, { status: 500 });
  }
}
