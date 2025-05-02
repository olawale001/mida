'use client';


import { useState } from "react";
import api from '../lib/api'


export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await api.post('/login/', form);
            localStorage.setItem('token', res.data.token);
            alert('Logged in!');
        } catch (err) {
            console.error(err.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="Username" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}