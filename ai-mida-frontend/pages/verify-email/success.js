'use client';

import Link from 'next/link';

export default function EmailVerifiedSuccess() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold text-green-600 mb-4">Email Verified!</h1>
            <p className="mb-6 text-gray-700">
                Your email has been successfully verified. You can now log in to your account.
            </p>
            <Link href="/login">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                    Go to Login
                </button>
            </Link>
        </div>
    );
}
