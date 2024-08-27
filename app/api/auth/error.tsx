import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Authentication Error</h1>
        <p className="mb-4">There was an issue with your login. Please try again.</p>
        <button
          onClick={() => router.push('/admin/sign-in')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go Back to Sign In
        </button>
      </div>
    </div>
  );
}
