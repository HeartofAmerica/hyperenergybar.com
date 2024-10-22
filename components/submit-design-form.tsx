// submit-design-form.tsx
'use client';

import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function SubmitDesignForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [comments, setComments] = useState('');
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDesignFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!executeRecaptcha) {
      setStatus('error');
      alert('reCAPTCHA not ready.');
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha('submit_design_form');

      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      if (designFile) {
        formData.append('designFile', designFile);
      }
      formData.append('comments', comments);
      formData.append('recaptchaToken', recaptchaToken);

      const response = await fetch('/api/submit-design', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setFullName('');
        setEmail('');
        setDesignFile(null);
        setComments('');
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
      <div className="col-span-2 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Full Name</p>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-2 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-2 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Upload a Design</p>
        <input
          type="file"
          onChange={handleFileChange}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-2">
        <p className="obvi-sm mb-2">Comments</p>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        ></textarea>
      </div>
      <div className="col-span-2 mt-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-10 py-3 rounded-lg ${status === 'loading' ? '' : 'btn'}`}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Design'}
        </button>
        {status === 'success' && <p className="text-green-600 mt-2">Design submitted successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-2">Error submitting design. Please try again.</p>}
      </div>
    </form>
  );
}
