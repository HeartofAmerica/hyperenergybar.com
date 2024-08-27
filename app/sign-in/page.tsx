'use client';

import { signIn, getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session) {
        router.push('/admin');
      }
    };

    fetchSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      router.push('/admin');
    } else {
      // Handle error
      console.error('Failed to sign in');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/5">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-3xl shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-center">Howdy</h1>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="obvi-sm w-full px-4 py-2 text-white bg-green rounded-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
