"use client";

import Image from "next/image";
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

const logos = [
  { src: "/amazlogo.svg", alt: "Amaz Logo" },
  { src: "/rockylogo.svg", alt: "Rocky Logo" },
  { src: "/qiblalogo.svg", alt: "Qibla Logo" },
  { src: "/dr-logo.svg", alt: "Dr. Donna Logo" },
  { src: "/p8ball.svg", alt: "P8 Ball Logo" },
  { src: "/pvplogo.svg", alt: "Pvp Logo" },
];

export default function TrustedBrands() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center py-16 w-full px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* ECCLIPSES */}
      <div className="ecclipse size-[240px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute ecclipse -bottom-32 -left-[150px] size-[300px]" />

      {/* Title */}
      <div className="flex items-center space-x-2 md:space-x-4 relative">
        <div className="h-[3px] w-6 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
          TRUSTED BY AMAZING BRANDS
        </p>
        <div className="h-[3px] w-6 md:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Logos Marquee */}
      <motion.div
        className="my-6 w-full max-w-[80%] md:max-w-7xl bg-gray-300/50 dark:bg-gray-700/50 relative backdrop-blur-md
        px-6 md:px-16 lg:px-32 py-8 md:py-4 rounded-2xl shadow-lg overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:25s]">
          <div className="flex items-center gap-16 px-4">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={170}
                height={160}
                className="theme-logo"
              />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </motion.section>
  );
}
