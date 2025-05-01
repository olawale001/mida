
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });

      const token = res.data.access;
      localStorage.setItem('token', token);

    
      await fetch('/api/set-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      router.push('/home');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
       <div className= 'justify-center items-center flex flex-col h-screen' style={{ backgroundColor: 'gray' }}>
          <h1 className='text-3xl font-bold mb-4'>AI-Mida</h1>
          <h1 className='text-2xl mb-4'>Login</h1>
          <h3>Username</h3>
          <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} 
          style={{
            marginTop: '10px',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          /><br />
          <br />
          <h3>Password</h3>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} 
          style={{
            marginTop: '10px',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          />
          <button type='submit' onClick={login} style={{
            marginTop: '10px',
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
           }}>Login</button>
       </div>
  );
}
