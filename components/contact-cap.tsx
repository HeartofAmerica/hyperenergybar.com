'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from '@/components/contact-form';

export default function ContactComponent() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdqnDgqAAAAAJ4Y7G7R4XbK-zFiSn_AgDW-SOsM">
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
