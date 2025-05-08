'use client';
import Navbar from '../components/navbar';
import '../app/styles/globals.css';

import { useState, useEffect } from 'react';

export default function SettingsPage() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch('/profile/');
            const data = await res.json();
            setUsername(data.name);
        }
        fetchUser();
    }, []);


    const handleSave = async () => {
        
        const res = await fetch('/profile/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:username}),
        });
        
        if (res.ok) {
            alert('Username updated successfully!');
            
        }else {
            alert('Updated failed');
        }
    };

    return (
        <>
        <Navbar />
        <div className='max-w-3x1 mx-auto p-6'>
            <h1 className='text-3x1 font-bold mb-4 text-blue-600 dark:text-blue-400'>Settins</h1>
            <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
                <label className='block mb-2 text-sm font-medium'>Change Username</label>
                <input 
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600'
                 />
                 <button 
                 onClick={handleSave}
                 className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                 >
                    Save Changes
                 </button>
            </div>
        </div>
        </>
    )
}