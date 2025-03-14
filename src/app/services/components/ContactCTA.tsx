"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <div className="relative w-full py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
            {/* Background Glow (Hidden on Mobile) */}
            <div className="absolute ecclipse -top-20 -left-[150px] size-[300px] hidden sm:block" />
            <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />



            {/* ✅ Call-to-Action Text */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Ready to <span className="text-gradient">Empower Your Vision?</span>
                <br className="hidden md:block" />
                <span className="text-gradient">Let&apos;s Talk Now!</span>
            </motion.h2>

            {/* ✅ CTA Button */}
            <motion.button
                className="mt-6 px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 
        text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact Us
            </motion.button>
        </div>
    );
}
