"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

// Testimonial Data (You can dynamically fetch this)
const testimonial = {
  name: "Mr. Aslam Sharif",
  company: "Qibla Schools",
  feedback:
  "Nevara Solutions has been instrumental in transforming our online presence. Their innovative approach, seamless communication, and dedication to delivering top-tier solutions have made a significant impact on our school's digital growth. Highly recommended!",
};

export default function TestimonialCTA() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 text-center">
       {/* ✅ Section Heading */}
       <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Let&apos;s Team Up amd <span className="text-gradient">Build Software </span> that makes <span className="text-gradient">History !</span>
      </motion.h2>

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
              Let&apos;s Innovate Together!
            </motion.button>

    </section>
  );
}
