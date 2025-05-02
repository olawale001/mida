"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Milas() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const generate = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:8000/api/mida_ai/generate/',
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data.result);
    } catch (err) {
      console.error('Error generating:', err);
      alert("Please login again.");
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  return (
    <div className='justify-center items-center flex flex-col h-screen '>
      <h2 className='justify-center'>Text Generator</h2>
      <div>
        <h3>Result</h3>
        <p>{result}</p>
      </div>  
      <textarea
        placeholder="Enter your prompt"
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        cols={50}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <br />
      <button onClick={generate}>Generate</button>
    </div>
  );
}