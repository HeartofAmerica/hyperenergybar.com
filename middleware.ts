import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const url = req.nextUrl.clone();

  // Check if the user is authenticated
  if (url.pathname.startsWith('/admin') && !token) {
    // Redirect to sign-in page if not authenticated
    return NextResponse.redirect(new URL('/admin/sign-in', req.url));
  }

  // Allow authenticated users to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
