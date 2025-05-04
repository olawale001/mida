'use client';
import Navbar from "../components/navbar";
import '../app/globals.css';

export default function ContactSuccess() {
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Thank You for Contacting Us!
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                We appreciate your message and will get back to you as soon as possible.
            </p>
            </div>
        </div>
        </>
    );
}