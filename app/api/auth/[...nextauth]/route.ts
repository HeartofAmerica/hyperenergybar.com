import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

// Define your NextAuth options
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: 'admin', name: 'Admin User' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/sign-in',
    error: '/api/auth/error', // Ensure this path is correct
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};

// Named exports for each HTTP method
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
