// job-application-cap.tsx
'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import JobApplicationForm from '@/components/job-application-form';

export default function JobApplicationComponent() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdqnDgqAAAAAJ4Y7G7R4XbK-zFiSn_AgDW-SOsM">
      <JobApplicationForm />
    </GoogleReCaptchaProvider>
  );
}
