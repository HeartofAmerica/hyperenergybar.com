import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const position = formData.get('position') as string;
    const dob = formData.get('dob') as string;
    const availability = formData.get('availability') as string;
    const startDate = formData.get('startDate') as string;
    const transportation = formData.get('transportation') as string;
    const workEligibility = formData.get('workEligibility') as string;
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const resumeFile = formData.get('resume') as File;
    const coverLetterFile = formData.get('coverLetter') as File;

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    if (!resumeFile || !coverLetterFile) {
      return NextResponse.json({ error: 'Resume and cover letter are required' }, { status: 400 });
    }

    // Mapping positions to recipient email addresses
    const emailRecipients: { [key: string]: string[] } = {
      'Energista - Grimes': ['tcain@hoari.com', 'kgustin@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com'],
      'Energista - Waukee': ['tcain@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com', 'aeslick@hoari.com'],
      'Energista - West Des Moines': ['tcain@hoari.com', 'sengle@hoari.com', 'cwood@hoari.com', 'cwhalen@hoari.com'],
      'Energista - Urbandale': ['tcain@hoari.com', 'cwhalen@hoari.com', 'cwood@hoari.com', 'jhance@hoari.com'],
      'Energista - Altoona': ['tcain@hoari.com', 'sengle@hoari.com', 'cwhalen@hoari.com', 'cwood@hoari.com', 'acory@hoari.com'],
      'Energista - Ankeny': ['tcain@hoari.com', 'jhance@hoari.com'],
      'Energista - Iowa City': ['tcain@hoari.com', 'hmartin@hoari.com'],
    };

    // Determine the recipient(s) based on the selected position
    const recipients = emailRecipients[position] || ['tcain@hoari.com']; // Default recipient if position is not listed

    const resumeContent = Buffer.from(await resumeFile.arrayBuffer()).toString('base64');
    const coverLetterContent = Buffer.from(await coverLetterFile.arrayBuffer()).toString('base64');

    const emailData = {
      to: recipients,
      from: 'careers@hyperenergybar.com',
      subject: `New Job Application from ${firstName} ${lastName} for ${position}`,
      text: `First Name: ${firstName}\n` +
            `Last Name: ${lastName}\n` +
            `Email: ${email}\n` +
            `Phone Number: ${phoneNumber}\n` +
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
