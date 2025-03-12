"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>

      {/* Hero Content - Absolute Centering */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 pb-20">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-lightText dark:text-darkText leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Digital Marketing & Brand Building
          <br /> 
          <span className="text-gradient">Amplify Your Brand's Voice</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="mt-4 text-2xl md:text-3xl font-semibold text-lightText dark:text-darkText"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Stand Out.  
          <span className="text-gradient"> Get Noticed. </span> 
          Grow Faster.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
         In today’s digital world, having a strong brand and marketing strategy is essential. At <span className="text-gradient"><b>Nevara Solutions</b></span>, we use data-driven strategies, creative storytelling, and innovative marketing techniques to help businesses achieve their goals. 
          Whether you're a startup, an e-commerce brand, or a corporate giant, we build websites that deliver tangible results.
        </motion.p>
      </div>
    </section>
  );
}
