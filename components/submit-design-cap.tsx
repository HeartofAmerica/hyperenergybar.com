// submit-design-cap.tsx
'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import SubmitDesignForm from '@/components/submit-design-form';

export default function SubmitDesignComponent() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdqnDgqAAAAAJ4Y7G7R4XbK-zFiSn_AgDW-SOsM">
      <SubmitDesignForm />
    </GoogleReCaptchaProvider>
  );
}
