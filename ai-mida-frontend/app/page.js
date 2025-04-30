"use client";

import Milas from "./components/home";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('token'));
  }, []);


  const logout = async () => {
    localStorage.removeItem('token');
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  };
  

  return (
    <div>
      <h1>AI MIDA</h1>
      {loggedIn ? (
        <>
          <Milas />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>
          <Link href="/login">Login</Link> | <Link href="/register">Register</Link>
        </p>
      )}
    </div>
  )
};
