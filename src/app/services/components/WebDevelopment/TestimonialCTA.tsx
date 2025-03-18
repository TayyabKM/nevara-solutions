"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal"; 

// Testimonial Data (You can dynamically fetch this)
const testimonial = {
  name: "Teddy",
  company: "Rocky's Worldwide Chauffeured Transportaion",
  feedback:
    "Working with Nevara's team has been a game-changer for my business. Their expertise, creativity, and commitment to excellence helped turn my vision into reality. From development to digital strategy, they exceeded expectations at every step."
};

export default function TestimonialCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 text-center">
      {/* ✅ Inspirational Quote */}
      <motion.blockquote
        className="italic text-2xl md:text-3xl text-lightText dark:text-gray-400 font-medium max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        &quot;Every website is a work in progress, a constant evolution.&quot;
      </motion.blockquote>

      {/* ✅ Testimonial Card */}
      <motion.div
        className="mt-12 bg-gray-800/50 border border-gray-700 p-6 md:p-8 rounded-xl shadow-lg max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* ⭐ Client Testimonial */}
        <div className="text-left">
          <p className="text-lg text-lightText dark:text-darkText">&quot;{testimonial.feedback}&quot;</p>
          <p className="mt-3 font-bold text-lightText dark:text-gray-400">{testimonial.name}</p>
          <p className="text-sm text-lightText dark:text-gray-400">{testimonial.company}</p>
        </div>
      </motion.div>

      {/* ✅ CTA Button (Opens Modal) */}
      <motion.button
        className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-sm sm:text-base
          rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl mt-12"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setModalOpen(true)}
      >
        Get in Touch with Us!
      </motion.button>

      {/* ✅ Modal Component */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
