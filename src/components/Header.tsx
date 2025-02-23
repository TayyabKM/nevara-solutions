"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLLabelElement | null>(null); // Ref for the hamburger icon

  // Close menu when clicking outside, but ignore clicks on the hamburger icon
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
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

  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Show header when scrolling up or near the top, otherwise hide it.
      if (currentScrollPos < prevScrollPos || currentScrollPos < 10) {
        setVisible(true);
        setMenuOpen(false);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const headerVariants = {
    hidden: { x: "-50%", y: "-130%", transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { x: "-50%", y: "0%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={visible ? "visible" : "hidden"}
        initial="visible"
        className="fixed top-4 left-1/2 z-50
      bg-gray-400/50 dark:bg-gray-600/50 backdrop-blur-md
      text-lightText dark:text-darkText shadow-lg rounded-full px-8 py-2 md:py-4 
      flex justify-between items-center w-[90%] xl:w-full max-w-screen-xl"
      >
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={"/logo-dark.png"} alt="Nevara Solutions Logo" width={100} height={40} className="dark:flex hidden" />
            <Image src={"/logo-light.png"} alt="Nevara Solutions Logo" width={100} height={40} className="dark:hidden flex" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 ml-[9%]">
          <NavLinks />
        </nav>

        {/* CTA & Theme Switcher */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:opacity-90">
            Get in Touch
          </Link>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button (Animated Hamburger) */}
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} buttonRef={buttonRef} />
      </motion.header>
      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, x: "-50%", height: 0 }}
            animate={{ opacity: 1, y: 0, x: "-50%", height: "auto" }}
            exit={{ opacity: 0, y: -20, x: "-50%", height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed w-[90%] top-20 md:top-24 left-1/2 -translate-x-1/2 bg-gray-300/80 dark:bg-gray-800/80 backdrop-blur-md text-white z-[1000]
                      shadow-lg rounded-lg py-6 px-6 mt-2 flex flex-col items-center space-y-6 overflow-hidden"
          >
            <NavLinks />
            <ThemeSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ✅ Navigation Links Component (Reusable for Desktop & Mobile) */
const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
const NavLinks = () => (
  <>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="hover:bg-gradient-to-r text-black dark:text-white hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition duration-300"
      >
        {link.name}
      </Link>
    ))}
  </>
);

/* ✅ Animated Hamburger Component (Preserving Your Icon Styling) */
const Hamburger: React.FC<{ menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; buttonRef: React.RefObject<HTMLLabelElement> }> = ({
  menuOpen,
  setMenuOpen,
  buttonRef,
}) => {
  return (
    <label ref={buttonRef} className="hamburger lg:hidden cursor-pointer">
      <input type="checkbox" checked={menuOpen} onChange={() => setMenuOpen(prev => !prev)} className="hidden" />
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
        <path className="line" d="M7 16 27 16" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
};
