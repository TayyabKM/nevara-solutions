"use client";

import { navlinks } from "@/constants/navlinks";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------
   Fixed: Framer Motion v11-compatible variants
------------------------------------------- */
const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,   // <-- FIXED HERE
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative py-6">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <Header />
          <Socials />
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.3, delay: 0.5 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-gradBlue to-gradPurple rounded-full" />

          <div className="flex items-center justify-center md:justify-between py-1 md:py-2">
            <div className="hidden md:flex items-center gap-4">
              <NavLinks />
            </div>

            <motion.div variants={textVariants}>
              © 2026 Nevara Solutions. All Rights Reserved.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

/* -------------------------------------------
   Header Section
------------------------------------------- */
function Header() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants}>
        <Image
          src="/logo-dark.png"
          alt="Nevara Solutions Logo"
          width={100}
          height={40}
          className="dark:flex hidden"
        />
        <Image
          src="/logo-light.png"
          alt="Nevara Solutions Logo"
          width={100}
          height={40}
          className="dark:hidden flex"
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        className="md:max-w-sm dark:text-gray-300 text-gray-600"
      >
        Nevara Solutions – a growing software house in Pakistan, collaborating
        with startups to enterprises worldwide. Proud member of the{" "}
        <Link href="/mmt-group" className="text-gradient font-semibold">
          MMT Group
        </Link>
        , with MMT Consulting as our parent company.
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------
   Social Links
------------------------------------------- */
function Socials() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants}>
        <Link href="mailto:info@nevarasolutions.com">
          <div className="flex items-center gap-4 cursor-pointer">
            <Image src="/icons/email.svg" alt="Email Icon" width={28} height={28} className="dark:invert" />
            <div>info@nevarasolutions.com</div>
          </div>
        </Link>
      </motion.div>

      <motion.div variants={textVariants}>
        <Link
          href="https://www.linkedin.com/company/nevara-solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-4 cursor-pointer">
            <Image src="/icons/linkedin.svg" alt="LinkedIn Icon" width={28} height={28} className="dark:invert" />
            <div>Connect with us on LinkedIn</div>
          </div>
        </Link>
      </motion.div>

      <motion.div variants={textVariants}>
        <Link href="https://wa.me/923498476179" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-4 cursor-pointer">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp Icon" width={28} height={28} className="dark:invert" />
            <div>Chat with us on WhatsApp</div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------
   Nav Links
------------------------------------------- */
const NavLinks = () => (
  <>
    {navlinks.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="hover:bg-gradient-to-r dark:text-white text-black hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:!text-transparent transition-all duration-300"
      >
        <motion.div variants={textVariants}>{link.name}</motion.div>
      </Link>
    ))}
  </>
);
