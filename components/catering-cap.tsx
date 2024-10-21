'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import CateringForm from '@/components/catering-form';

export default function CateringCap() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdqnDgqAAAAAJ4Y7G7R4XbK-zFiSn_AgDW-SOsM">
      <CateringForm />
    </GoogleReCaptchaProvider>
  );
}
