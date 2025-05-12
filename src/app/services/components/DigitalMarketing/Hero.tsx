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
          Digital Marketing & Brand Strategy
          <br /> 
          <span className="text-gradient">Amplify Your Brand&apos;s Voice</span>
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
         At <span className="text-gradient">Nevara Solutions</span> , we use data-driven digital marketing strategies — including SEO, Google Ads, social media marketing, and conversion-focused content — to help brands increase visibility and generate qualified leads. Whether you're a startup or an enterprise, we craft campaigns that engage your audience and accelerate growth.
        </motion.p>
      </div>
    </section>
  );
}
