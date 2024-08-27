'use client';

import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AdminMenu from '@/components/admin-menu';

export default function AdminHome() {
  const [heroTitle, setHeroTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/sign-in'); // Adjust path as needed
      }
    };

    fetchSession();
  }, [router]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/assets/content/content.json');
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        console.log('Fetched content:', data); // Debugging line
        setHeroTitle(data.home.heroTitle || ''); // Default to empty string if not available
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedContent = {
      home: {
        heroTitle,
      },
    };

    try {
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedContent),
      });

      if (!response.ok) {
        throw new Error('Failed to update content');
      }

      alert('Content updated successfully');
      // Optionally, you might want to refresh the page or state here
      router.refresh(); // If using Next.js 14
    } catch (error) {
      alert('Failed to update content');
      console.error('Error updating content:', error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <AdminMenu currentPath="/admin/home" />
      <div className="bg-black/5 h-screen">
        <div className="admin-content py-10 sm:py-20">
          <h1 className="obvi-lg text-center mb-5 lg:mb-10">Home</h1>
          <form onSubmit={handleSave} className="max-w-lg mx-auto p-6 bg-white rounded-3xl">
            <div className="mb-4">
              <label className="obvi-md block mb-5">Hero Title</label>
              <input
                type="text"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
