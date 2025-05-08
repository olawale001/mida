'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import './styles/globals.css';
import Navbar from '../components/navbar';

import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <html lang='eng'>
      <body>
        {isClient }
        <Navbar />
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <ThemeProvider attribute="class">
        <main>
          {children}
          {/* <Component {...pageProps} /> */}
        </main>
      </ThemeProvider>
    </div>
      </body>
    </html>
  );
}
