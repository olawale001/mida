'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:8000/api/register/', {
        username,
        email,
        password,
      });
      router.push('/login'); 
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please check your details.');
    }
  };

  return (
    <div className='justify-center items-center flex flex-col h-screen' style={{ backgroundColor: 'gray' }}>
      <h1 className='text-3xl font-bold mb-4'>AI-Mida</h1>
      <h1 className='text-2xl mb-4'>Register Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Username</h3>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <h3>Email</h3>
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <h3>Password</h3>
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      /><br />
      <button  onClick={register} style={{
        marginTop: '10px',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
         }} >Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}
