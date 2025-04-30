
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:8000/auth/login/', {
        email,
        password,
      });

      const token = res.data.access;
      localStorage.setItem('token', token);

    
      await fetch('/api/set-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      router.push('/profile');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
       <div>
          <h1>Login</h1>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
       </div>
  );
}
