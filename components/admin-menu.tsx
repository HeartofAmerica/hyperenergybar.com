'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type AdminMenuProps = {
  currentPath: string;
};

export default function AdminMenu({ currentPath }: AdminMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="admin-menu">
      <a
        onClick={() => router.push('/admin')}
      >
        <Image
          src="/assets/img/Hyper-Energy-Bar-Logo.svg"
          quality={100}
          width={177}
          height={72}
          alt="Hyper Energy Bar Logo"
          className="py-4 sm:py-16 mx-auto"
        />
      </a>
      <a
        onClick={() => router.push('/admin/home')}
        className={`obvi-sm block mx-4 sm:mx-8 py-2 px-8 mb-2 rounded-full ${
          pathname === '/admin/home' ? 'bg-black/5' : 'hover:bg-black/5'
        }`}
      >
        Home
      </a>
      <a
        onClick={() => router.push('/admin/about')}
        className={`obvi-sm block mx-4 sm:mx-8 py-2 px-8 mb-2 rounded-full ${
          pathname === '/admin/about' ? 'bg-black/5' : 'hover:bg-black/5'
        }`}
      >
        About
      </a>
      <a
        onClick={() => signOut({ callbackUrl: '/admin/sign-in' })}
        className="obvi-sm block mx-4 sm:mx-8 py-2 px-8 mb-2 rounded-full hover:bg-black/5"
      >
        Logout
      </a>
    </div>
  );
}
