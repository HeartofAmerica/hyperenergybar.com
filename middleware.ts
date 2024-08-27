import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow access to the sign-in page
  if (pathname === '/admin/sign-in') {
    return NextResponse.next();
  }

  // Check if the user is authenticated
  const sessionToken = req.cookies.get('next-auth.session-token');

  // If not authenticated and accessing other /admin pages, redirect to sign-in page
  if (pathname.startsWith('/admin') && !sessionToken) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/sign-in';
    return NextResponse.redirect(url);
  }

  // Allow access to other pages
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
