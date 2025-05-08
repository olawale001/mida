import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [theme, setTheme] = useState('ligth');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    return (
        <button 
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-sm"
        >
            {theme === 'dark' ? 'Ligth Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;