"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    const [theme, setTheme] = useState("light");

    // Detect user's system theme preference
    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <header
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
            bg-gradient-to-r ${
                theme === "light" ? "from-gray-500 to-gray-600" : "from-gray-700 to-gray-700"
            } text-lightText dark:from-gray-700 dark:to-gray-800 dark:text-darkText 
            shadow-lg rounded-full px-8 py-4 flex justify-between items-center 
            w-[90%] max-w-[1400px] transition-all duration-500`}
        >
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
                        alt="Nevara Solutions Logo"
                        width={100}
                        height={40}
                    />
                </Link>
            </div>

            {/* Right Section: Navigation, CTA, and Theme Switcher */}
            <div className="flex items-center space-x-6">
                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <Link
                        href="/"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/blog"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
                    >
                        Blog
                    </Link>
                </nav>

                {/* Get in Touch Button */}
                <Link
                    href="/contact"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:opacity-90"
                >
                    Get in Touch
                </Link>

                {/* Theme Toggle Button */}
                <div className="flex items-center space-x-6">
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}
