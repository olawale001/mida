'use client';

import Link from 'next/link';

export default function EmailVerificationFailed() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Verification Failed</h1>
            <p className="mb-6 text-gray-700">
                The verification link is invalid or has expired. Please try registering again or request a new verification email.
            </p>
            <Link href="/signup">
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                    Go to Signup
                </button>
            </Link>
        </div>
    );
}
