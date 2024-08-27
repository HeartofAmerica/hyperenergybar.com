import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Update this to match your secret from environment variables
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  // Adjust the path check based on your routing setup
  if (req.nextUrl.pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(new URL('/admin/sign-in', req.url));
  }

  return NextResponse.next();
}

// Update the matcher to specify the routes you want to protect
export const config = {
  matcher: ['/admin/:path*'],
};
