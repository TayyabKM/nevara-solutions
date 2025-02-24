"use client";

import { navlinks } from "@/constants/navlinks";
import { textVariants } from "@/motion-variants/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-6">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <Header />
          <Socials />
        </div>

        <motion.div
          className="flex flex-col gap-4"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } } }}
          initial="hidden"
          animate="visible"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-gradBlue to-gradPurple rounded-full" />

          <div className="flex items-center justify-center md:justify-between py-1 md:py-2">
            <div className="hidden md:flex items-center gap-4">
              <NavLinks />
            </div>

            <motion.div variants={textVariants}>© 2024 Nevara Solutions. All Rights Reserved.</motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants}>
        <Image src={"/logo-dark.png"} alt="Nevara Solutions Logo" width={100} height={40} className="dark:flex hidden" />
        <Image src={"/logo-light.png"} alt="Nevara Solutions Logo" width={100} height={40} className="dark:hidden flex" />
      </motion.div>
      <motion.div variants={textVariants} className="md:max-w-sm dark:text-gray-300 text-gray-600">
        Nevara Solutions - the leading digital agency based in the PK, working with top-tier clients, from start-ups to enterprises.
      </motion.div>
    </motion.div>
  );
}

function Socials() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants}>
        <div className="flex items-center gap-4">
          <img src="/icons/email.svg" className="size-7 dark:invert" />
          <div>info@nevarasolutions.com</div>
        </div>
      </motion.div>
      <motion.div variants={textVariants}>
        <div className="flex items-center gap-4">
          <img src="/icons/phone.svg" className="size-7 dark:invert" />
          <div>(+92) 300-1234567</div>
        </div>
      </motion.div>

      <motion.div variants={textVariants} className="md:max-w-sm"></motion.div>
    </motion.div>
  );
}

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
