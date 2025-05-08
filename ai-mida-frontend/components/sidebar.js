import Image from "next/image";
import { useState, useEffect } from "react";

export default function Sidebar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            const res = await fetch('/profile/')
            const data = await res.json();
            setUser(data);
        }
        fetchProfile();
    }, []);
    return  (
        <div className="h-screen w-64 bg-white dark:bg-gray-800 p-6 shadow-lg flex flex-col" >
            <div className="flex flex-col items-center">
                <Image 
                src={user?.profilImage || '/default-avatar.png'} 
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"/>
                <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                    {user?.name || 'Loading'}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email || 'Loading'}</p>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
                <a href="/dashboard" className="text-gray-700 dark:textgray-200 hover:text-blue-500">
                Dashboard</a>
                <a href="/profile" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
                Profile</a>
                <a href="/settings" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
                Setting</a>
                <a href="/logout" className="text-red-600 hover:text-red-400">Logout</a>
            </nav>
        </div> 
    )
}