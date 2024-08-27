import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Allow access to the sign-in page without authentication
  if (pathname === '/sign-in') {
    return NextResponse.next();
  }

  // Get the token from the request
  const token = await getToken({ req, secret });

  // If not authenticated and trying to access admin pages, redirect to sign-in page
  if (pathname.startsWith('/admin') && !token) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  // Allow access to other pages
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/sign-in'],
};
