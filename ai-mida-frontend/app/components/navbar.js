'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const logout = async () => {
    localStorage.removeItem('token');
    await fetch('/api/logout', { method: 'POST' });
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <nav className="p-4 border-b flex justify-between items-center">
  <div className="text-xl font-bold">AI MIDA</div>
  <div className="space-x-4">
    <a href="/" className="text-blue-600">Home</a>
    {isAuthenticated ? (
      <>
        <a href="/profile" className="text-blue-600">Profile</a>
        <button onClick={logout} className="text-red-500">Logout</button>
      </>
    ) : (
      <>
        <a href="/login" className="text-blue-600">Login</a>
        <a href="/register" className="text-blue-600">Register</a>
      </>
    )}
  </div>
</nav>

  );
}
