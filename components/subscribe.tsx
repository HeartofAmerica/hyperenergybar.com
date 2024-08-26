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
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="obvi-input px-4 lg:px-6 py-2 lg:py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green bg-ltgreen block w-full mb-2"
      />
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="obvi-xs text-green obvi-input px-4 lg:px-6 py-2 lg:py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green bg-ltgreen block w-full"
      >
        <option value="">Select a location</option>
        <option value="Altoona">Altoona</option>
        <option value="Grimes">Grimes</option>
        <option value="Urbandale">Urbandale</option>
        <option value="Waukee">Waukee</option>
        <option value="West Des Moines">West Des Moines</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded-r-md flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216" fill="none" strokeWidth={27} stroke="currentColor" className="w-6 h-6"><path d="M99,18L189,108L99,198M189,108L9,108"/></svg>
      </button>
      {status === 'loading' && <p className="ml-4 text-gray-500">Sending...</p>}
      {status === 'success' && <p className="ml-4 text-green-500">Subscribed!</p>}
      {status === 'error' && <p className="ml-4 text-red-500">Error, try again.</p>}
    </form>
  );
};

export default Subscribe;
