'use client';

import Navbar from "../components/navbar";
import '../app/globals.css';


export default function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          About MIDA AI
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          MIDA AI is a cutting-edge platform designed to enhance your productivity and creativity. Our mission is to provide you with the tools and resources you need to succeed in the digital age.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Whether you're a developer, designer, or entrepreneur, MIDA AI has something for everyone. Join us on this exciting journey and unlock your full potential!
        </p>
      </div>
    </div>
    </>
  );
}