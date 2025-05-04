'use client';

import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
// import api from "../lib/api";
import '../app/globals.css';


export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            const res = await fetch('api/profile/');
            const data = await res.json();
            setUser(data);
            
        }
        fetchProfile();
    }, []);

    return (
        <>
        <Navbar />
        <div className="max-w-3x1 mx-auto p-6">
            <h1 className="text-3x1 font-bold mb-4 text-blue-600 dark:text-blue-400">Your Profile</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <p><strong>Name:</strong>{user?.name}</p>
                <p><strong>Email:</strong>{user?.email}</p>
            </div>
        </div>
        </>
    );
}