"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import TrustedBrands from "./TrustedBrands";
import Modal from "@/components/Modal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center backdrop-blur-md">
        {/** ECCLIPSES */}
        <motion.div
          className="ecclipse size-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* ⭐ Animated Stars */}
        <Image src="/star.svg" alt="Glowing Star" width={40} height={40} className="absolute top-40 left-36 opacity-70 animate-glimmer max-[390px]:top-28 max-[360px]:left-20"/>
        <Image src="/star.svg" alt="Glowing Star" width={32} height={32} className="absolute bottom-16 right-24 opacity-50 animate-glimmer" />

        {/* Text Container */}
        <motion.div
          className="relative bg-no-repeat bg-center 
            bg-cover w-full h-full flex flex-col items-center justify-center p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="sr-only">
            Custom Web Development, App Development, SaaS Solutions & AI Automation Services — Nevara Solutions
          </h1>
          {/* Title with Arrow Icon */}
          <motion.div
            className="text-4xl md:text-7xl font-bold text-black dark:text-white flex flex-col items-center text-center md:text-left"
            variants={itemVariants}
          >
            {/* Line 1: "Building your vision" */}
            <div className="flex items-center gap-2 md:gap-2 lg:gap-4 md:flex-nowrap">
              Building your <span className="text-gradient drop-shadow-lg">vision</span>
              <motion.span
                className="hidden md:block lg:block"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Image src="/arrow-icon.png" alt="Growth Arrow Icon" width={95} height={95} className="w-16 md:w-24" />
              </motion.span>
            </div>

            {/* Line 2: "One byte at a time" */}
            <motion.span className="text-4xl md:text-7xl md:whitespace-nowrap" variants={itemVariants}>
              One{" "}
              <motion.span className="text-gradient drop-shadow-lg" variants={itemVariants}>
                byte
              </motion.span>{" "}
              at a time
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl" variants={itemVariants}>
            At Nevara Solutions, we build custom websites, SaaS platforms, mobile apps, and digital marketing systems that increase revenue and drive sustainable business growth.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div className="mt-8 flex space-x-4" variants={itemVariants}>
            {/* Get Started Today Button (Opens Modal) */}
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-sm sm:text-base
                rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpen(true)}
            >
              Get Started Today
            </motion.button>

            {/* Discover More Button */}
            <motion.button
              className="px-6 py-3 text-black dark:text-white border border-black text-sm sm:text-base
                dark:border-white rounded-lg hover:bg-black hover:text-white 
                dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/about">Discover More</Link>
            </motion.button>
          </motion.div>
          <motion.p
            className="text-m text-black dark:text-gray-400 mt-8"
            variants={itemVariants}
          >
            Now offering{" "}
            <span className="text-gradient font-semibold">
              interest-free installment plans
            </span>{" "}
            on select services.
          </motion.p>


        </motion.div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands />

      {/* Modal Component */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
