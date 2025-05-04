'use client';


import { useState } from "react";
import Navbar from "../components/navbar";
import '../app/globals.css';
import api from "../lib/api";
import { useRouter } from "next/navigation";


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const login = async () => {
        try {
            const res = await api.post('/auth/login/', {
                username,
                password,
            });
            localStorage.setItem('token', res.data.access);
            console.log('Login successful:', res.data);
            router.push('/dashboard')

        }
        catch (error) {
            console.error('Error during login:', error);
        }

    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen p-6 flex flex-col items-center justify-center ">
        <input placeholder="username" onChange={e => setUsername(e.target.value)} style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }} />
        <input placeholder="password" onChange={e => setPassword(e.target.value)} style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }} />
        <button onClick={login} style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'
         } >Login</button>
        </div>

        </>
    );
}