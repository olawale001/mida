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

    const register = async () => {
        try {
            const res = await api.post('/register/', {
                username,
                email,
                password,
            });
            localStorage.setItem('token', res.data.access);
            console.log('Registration successful:', res.data);
            alert('Regitration successfully');
            router.push('/dashboard')

        } catch (error) {
            console.error('Error during registration:', error);
        }
    }


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
        <input placeholder="email" onChange={e => setEmail(e.target.value)} style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }} />
        <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }} />
        <button onClick={register} style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        }} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor
        } >Register</button>
        </div>
        </>
    )
}

const styles = {
    input: {
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },

};