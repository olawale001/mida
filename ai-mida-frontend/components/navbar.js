'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (

    <>
    <header className="bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MIDA AI
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        >
          ☰
        </button>

        {/* Nav Items */}
        <nav className={`md:flex gap-6 items-center ${menuOpen ? 'flex flex-col mt-4' : 'hidden'} md:flex-row md:mt-0`}>
          <Link href="/dashboard" className="text-gray-800 dark:text-white hover:text-blue-500">Dashboard</Link>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</Link>
          <Link href="/signup" className="text-gray-800 dark:text-white hover:text-blue-500">Sign Up</Link>
          <Link href="/login" className="text-gray-800 dark:text-white hover:text-blue-500">Login</Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-800 dark:text-white hover:text-blue-500"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
              <Image
                src={user?.profileImage || '/default-avatar.png'}
                width={36}
                height={36}
                className="rounded-full border cursor-pointer"
                alt="User Avatar"
                priority
                />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}
