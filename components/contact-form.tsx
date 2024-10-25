'use client';

import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!executeRecaptcha) {
      setStatus('error');
      alert('reCAPTCHA not ready.');
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha('contact_form');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          location,
          message,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setLocation('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:grid sm:grid-cols-2 gap-5 bg-white shadow-xl rounded-3xl p-5 sm:p-10">
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">First Name</p>
        <input
          type="text"
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Last Name</p>
        <input
          type="text"
          placeholder=""
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Email</p>
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Location</p>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value="" disabled></option>
          <option value="Altoona">Altoona</option>
          <option value="Ankeny">Ankeny</option>
          <option value="Grimes">Grimes</option>
          <option value="Iowa City">Iowa City</option>
          <option value="Urbandale">Urbandale</option>
          <option value="Waukee">Waukee</option>
          <option value="West Des Moines">West Des Moines</option>
          <option value="Corporate">Corporate</option>
          <option value="Partnership/Donation Request">Partnership/Donation Request</option>
        </select>
      </div>
      <div className="col-span-2">
        <p className="obvi-sm mb-2">Message</p>
        <textarea
          placeholder=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="btn mt-3 sm:mt-0"
        >
          Send
        </button>
      </div>
      {status === 'loading' && <p className="col-span-2 text-gray-500">Sending...</p>}
      {status === 'success' && <p className="col-span-2 text-green-500">Message sent!</p>}
      {status === 'error' && <p className="col-span-2 text-red-500">Error, message not sent.</p>}
    </form>
  );
}
