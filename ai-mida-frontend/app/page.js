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
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  title :{
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#111827',
  },
  subtitle :{
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#4b5563',
  },
}

