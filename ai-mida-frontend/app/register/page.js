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
      await axios.post('http://localhost:8000/auth/registration/', {
        username,
        email,
        password,
      });
      router.push('/login'); // Redirect to login after successful registration
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please check your details.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}
