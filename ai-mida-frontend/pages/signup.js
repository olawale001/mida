'use client';

import { useState } from "react";
import Navbar from "../components/navbar";
import '../app/globals.css';
import api from '../lib/api';
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    const isPasswordValid = password.length >= 6;

    const register = async () => {
        if (!isPasswordValid) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        setError(""); 
        try {
            const res = await api.post('/register/', {
                username,
                email,
                password,
            });
            localStorage.setItem('token', res.data.access);
            console.log('Registration successful:', res.data);
            alert('Registration successful');
            setUsername(''); 
            setEmail('');
            setPassword('');
            router.push('/verify-email-sent');

        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            alert(error.response?.data?.detail || "Registration failed. Check console for details.");
        }
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen p-6 flex flex-col items-center justify-center ">
            <input 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)} 
                style={{
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }} 
            />
            <input 
                placeholder="Email" 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                style={{
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }} 
            />
            <input 
                placeholder="Password" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} 
                style={{
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }} 
            />
            {error && (
                <div style={{
                    color: 'red',
                    marginBottom: '10px',
                    fontSize: '14px',
                }}>
                    {error}
                </div>
            )}
            <button 
                onClick={register} 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }} 
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'} 
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}
            >
                Register
            </button>
        </div>
        </>
    );
}
