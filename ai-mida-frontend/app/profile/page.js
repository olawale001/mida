'use client';


import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios'


export default function Profile() {
    const [user, setUser] = useState(null)
    const router = useRouter

    useEffect (() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                router.push('/login');
                return;
            }
            try {
                const res = await axios.get('http://localhost:8000/api/profile/', {
                    headers: {Authorization: `Bearer ${token}`},
                });
                setUser(res.data);
            } catch (err) {
                console.error(err);
                router.push('/login')
            }
        };
        fetchProfile()
    }, []);

    if (!user) return <p>Loading Profile......</p>

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>ID:</strong>{user.id}</p>
            <p><strong>USERNAME:</strong>{user.username}</p>
            <p><strong>EMAIL:</strong>{user.email}</p>
        </div>
    )
}