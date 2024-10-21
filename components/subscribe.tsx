'use client';

import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          merge_fields: { MMERGE7: location }
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setLocation('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="block">
      <div className="bg-white/10 rounded-full flex items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="obvi-xs obvi-input px-6 pt-2 pb-3 rounded-3xl bg-transparent w-full text-white"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="obvi-xs text-green obvi-input mt--1 px-6 pt-2 pb-3 rounded-3xl bg-transparent w-full mr-5"
        >
          <option value="">Location</option>
          <option value="Altoona">Altoona</option>
          <option value="Grimes">Grimes</option>
          <option value="Urbandale">Urbandale</option>
          <option value="Waukee">Waukee</option>
          <option value="West Des Moines">West Des Moines</option>
        </select>
        <button
          type="submit"
          className=""
        >
          <div className="bg-green text-white p-3 rounded-full hover:bg-xdarkgreen border-2 border-green hover:border-xdarkgreen transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="none" strokeWidth={27} stroke="currentColor" className="w-5 h-5">
              <path d="M99,18L189,108L99,198M189,108L9,108"/>
            </svg>
          </div>
        </button>
      </div>
      <div className="block">
        {status === 'loading' && <p className="mt-4 text-white">Sending...</p>}
        {status === 'success' && <p className="mt-4 text-white">Subscribed!</p>}
        {status === 'error' && <p className="mt-4 text-white">Error, try again.</p>}
      </div>
    </form>
  );
};

export default Subscribe;
