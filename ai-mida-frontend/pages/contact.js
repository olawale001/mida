'use client';
import Navbar from "../components/navbar";
import '../app/globals.css';


export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form 
        action="https://formspree.io/f/xnndpkpk"
        method="POST"
         className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md" rows="5" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md cursor-poiter hover:bg-blue-700">Send Message</button>
          <input type="hidden" name="_redirect" value="/pages/contact/success/" />
        </form>
      </div>
    </div>
    </>
  );
}

