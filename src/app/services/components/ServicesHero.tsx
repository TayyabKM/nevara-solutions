"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal"; // Import the modal

export default function ServicesHero() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center h-screen text-center backdrop-blur-md">
                {/* ECCLIPSES */}
                <motion.div
                    className="ecclipse size-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Text Container */}
                <motion.div
                    className="relative bg-no-repeat bg-center 
                        bg-cover w-full h-full flex flex-col items-center justify-center p-4 
                        pt-0 md:pt-[130px]" // ✅ Added top padding for larger screens
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Title */}
                    <motion.div className="text-center font-bold text-black dark:text-white leading-tight">
                        {/* First Line */}
                        <motion.div className="flex flex-wrap justify-center gap-2 text-2xl md:text-5xl lg:text-7xl whitespace-nowrap">
                            <span>Your</span>
                            <span className="text-gradient drop-shadow-lg">Vision</span>,
                            <span>Our</span>
                            <span className="text-gradient drop-shadow-lg">Technology</span>
                        </motion.div>

                        {/* Second Line */}
                        <motion.div className="text-2xl md:text-5xl lg:text-7xl whitespace-nowrap mt-2">
                            – <span className="text-gradient drop-shadow-lg">Limitless</span> Possibilities
                        </motion.div>
                    </motion.div>

                    {/* Subheading */}
                    <motion.h2 className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-black dark:text-white text-center whitespace-nowrap">
                        Innovate, Scale, and Dominate with <span className="text-gradient">Nevara</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
                        At <b>Nevara Solutions</b>, we help businesses <b>turn ideas into reality</b> with innovative technology,
                        strategic marketing, and scalable solutions. Whether you need a strong online presence,
                        a high-performing mobile app, a robust SaaS product, or an elevated digital brand,
                        our expertise ensures exceptional results.
                    </motion.p>

                    {/* Call-to-Action Button (Now Opens Modal) */}
                    <motion.div className="mt-8">
                        <motion.button
                            className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-sm sm:text-base
                            rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setModalOpen(true)} // Open modal on click
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Modal Component */}
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
