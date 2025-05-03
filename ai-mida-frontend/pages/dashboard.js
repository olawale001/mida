'use client';
import withAuth from '../lib/withAuth';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import ChartWidget from '../components/chartWidget';
import DarkModeToggle from '../components/DarkModeToggle';
import '../app/globals.css';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4x1 mx-auto bg-white dark:bg-gray-800 p-8 rounded-x1 shadow-md">
        <h1 className="text-3x1 font-bold text-blue-600 dark:text-blue-400 mb-4">
          Welcome, {user?.name || 'Loading'}
        </h1>
        <p className='text-gray-700 dark:text-gray-300'>Email: {user?.username}</p>

        <DarkModeToggle />
        <div className='mt-8'>
          <ChartWidget />
        </div>
      </div>
    </div>
    </>
  );
}

export default withAuth(Dashboard);
