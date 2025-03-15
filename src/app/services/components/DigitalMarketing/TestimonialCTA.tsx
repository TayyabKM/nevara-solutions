"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

// Testimonial Data (You can dynamically fetch this)
const testimonial = {
  name: "Dr Donna",
  company: "Psychologist based in Utah",
  feedback:
    "Nevara's Team have been so wonderful to work with. They are progressive with their ideas, timely in responsiveness, and growth oriented to help my site be more visible.",
};

export default function TestimonialCTA() {
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
        &quot;Every app is a living innovation, constantly evolving to deliver new possibilities and seamless experiences.&quot;
      </motion.blockquote>

      {/* ✅ Testimonial Card */}
      <motion.div
        className="mt-12 bg-gray-800/50 border border-gray-700 p-6 md:p-8 rounded-xl shadow-lg max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* ⭐ Client Image */}
        {/* <div className="size-20 md:size-24 rounded-full overflow-hidden border-2 border-gradient">
          <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} />
        </div> */}

        {/* ⭐ Client Testimonial */}
        <div className="text-left">
          <p className="text-lg text-lightText dark:text-darkText">&quot;{testimonial.feedback}&quot;</p>
          <p className="mt-3 font-bold text-lightText dark:text-gray-400">{testimonial.name}</p>
          <p className="text-sm text-lightText dark:text-gray-400">{testimonial.company}</p>
        </div>
      </motion.div>

      {/* ✅ CTA Button */}
      <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 text-sm sm:text-base
            rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl mt-12"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch with Us!
            </motion.button>

    </section>
  );
}
