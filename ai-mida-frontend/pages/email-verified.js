// app/email-verified/page.tsx or pages/email-verified.tsx
'use client';

import Link from 'next/link';
import Navbar from '../components/navbar';

export default function EmailVerified() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">✅ Email Verified!</h1>
        <p className="mb-4">Your email address has been successfully verified. You can now log in to your account.</p>
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to Login
        </Link>
      </div>
    </>
  );
}
