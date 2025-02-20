"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLLabelElement | null>(null); // Ref for the hamburger icon

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

    // Close menu when clicking outside, but ignore clicks on the hamburger icon
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
            bg-gradient-to-r from-gray-500 to-gray-600 dark:from-gray-700 dark:to-gray-800
            text-lightText dark:text-darkText shadow-lg rounded-full px-8 py-4 
            flex justify-between items-center w-[90%] max-w-[1400px] transition-all duration-500">
            
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 ml-[9%]">
                <NavLinks />
            </nav>

            {/* CTA & Theme Switcher */}
            <div className="hidden md:flex items-center space-x-6">
                <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:opacity-90">
                    Get in Touch
                </Link>
                <ThemeSwitcher />
            </div>

            {/* Mobile Menu Button (Animated Hamburger) */}
            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonRef={buttonRef} />

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[100%] left-0 w-full bg-gray-900 text-white 
                        shadow-lg rounded-lg py-6 px-6 mt-2 flex flex-col items-center space-y-6"
                    >
                        <NavLinks />
                        <ThemeSwitcher />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

/* ✅ Navigation Links Component (Reusable for Desktop & Mobile) */
const NavLinks = () => (
    <>
        <Link href="/" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300">
            Home
        </Link>
        <Link href="/services" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300">
            Services
        </Link>
        <Link href="/about" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300">
            About
        </Link>
        <Link href="/contact" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300">
            Contact
        </Link>
        <Link href="/blog" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300">
            Blog
        </Link>
    </>
);

/* ✅ Animated Hamburger Component (Preserving Your Icon Styling) */
const Hamburger: React.FC<{ menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; buttonRef: React.RefObject<HTMLLabelElement> }> = ({
    menuOpen,
    setMenuOpen,
    buttonRef,
}) => {
    return (
        <label ref={buttonRef} className="hamburger md:hidden cursor-pointer">
            <input
                type="checkbox"
                checked={menuOpen}
                onChange={() => setMenuOpen((prev) => !prev)}
                className="hidden"
            />
            <svg viewBox="0 0 32 32" className="w-10 h-10">
                <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className="line"
                    d="M7 16 27 16"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </label>
    );
};
