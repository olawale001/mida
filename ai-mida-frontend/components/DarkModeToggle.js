import { useState, useEffect } from "react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
    }, [isDark]);

    return (
        <button onClick={() => setIsDark(!isDark)} className="mt-4 px-4 py-2bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Toggle Dark Mode
        </button>
    );
}