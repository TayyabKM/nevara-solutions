"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>

            {/* ✅ Heading */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-lightText dark:text-darkText text-center 
             leading-[1.2] md:leading-tight mb-4 md:mb-6 space-y-1 md:space-y-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div>Nevara:</div>
                <div>Your Growth Partner</div>
                <div className="text-gradient">In The Digital Age</div>
            </motion.h1>

            {/* ✅ Subheading */}
            <motion.p
                className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                We&apos;re more than a tech agency; we&apos;re dedicated to building lasting relationships and driving your business&apos;s digital success.
            </motion.p>

            {/* ✅ CTA Button */}
            <motion.button
                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                Connect with Us
            </motion.button>
        </section>
    );
}
