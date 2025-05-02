'use client';


import { useState } from "react";
import api from '../lib/api';


export default function Signup() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await api.post('/register/', form);
            alert('Click your email to verify!');
        } catch (err) {
            console.error(err.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="Username" required />
            <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Signup</button>
        </form>
    )
}