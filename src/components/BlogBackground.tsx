"use client";

import { motion } from "framer-motion";

export default function BlogBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Left */}
            <motion.div
                className="ecclipse size-[300px] md:size-[500px] absolute -left-20 -top-20 opacity-80 dark:opacity-60"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Middle Right */}
            <motion.div
                className="ecclipse size-[250px] md:size-[450px] absolute -right-10 top-1/3 opacity-75 dark:opacity-55"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />

            {/* Bottom Left */}
            <motion.div
                className="ecclipse size-[200px] md:size-[400px] absolute left-10 bottom-10 opacity-70 dark:opacity-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
            />
        </div>
    );
}
