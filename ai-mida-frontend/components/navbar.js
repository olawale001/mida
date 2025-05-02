'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => setDropdownOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  return (
    <>
    <header className="bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyApp
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 dark:text-gray-200">
          ☰
        </button>

        {/* Nav Items */}
        <nav className={`flex-col md:flex md:flex-row md:items-center gap-6 ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/dashboard" className="text-gray-800 dark:text-white hover:text-blue-500">Dashboard</Link>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-800 dark:text-white hover:text-blue-500"
            >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Profile Dropdown */}
          <div className="relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <Image
                src={user?.profileImage || '/default-avatar.png'}
                width={36}
                height={36}
                className="rounded-full border cursor-pointer"
                alt="Profile"
                />
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow rounded">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  </>
  );
}
