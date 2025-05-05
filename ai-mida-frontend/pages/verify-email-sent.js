'use client';

import Link from 'next/link';

export default function VerifyEmailSent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4">Verify Your Email</h1>
            <p className="mb-6 text-gray-700">
                We've sent a verification link to your email. Please check your inbox and click the link to activate your account.
            </p>
            <Link href="/email-verified">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Go to Login
                </button>
            </Link>
            <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or&nbsp;
          <Link href="/resend-verification" className="text-blue-600 hover:underline">resend it</Link>.
        </p>
        </div>
    );
}
