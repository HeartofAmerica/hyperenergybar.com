'use client';

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminMenu from '@/components/admin-menu';

export default function AdminAbout() {
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/admin/sign-in');
      }
    };

    fetchSession();
  }, [router]);

  return (
    <>
      <AdminMenu currentPath="/admin/about" />
      <div className="bg-black/5 h-screen">
        <div className="admin-content py-10 sm:py-20">
          <h1 className="mb-6 text-3xl font-semibold text-center">About</h1>
        </div>
      </div>
    </>
  );
}
