"use client";

import { motion } from "framer-motion";

// Timeline Data
const journeySteps = [
  {
    year: "2024",
    title: "The Beginning of Nevara",
    description:
      "Founded by Tayyab Kamboh, Nevara started with a vision to bridge the gap between digital solutions and real business growth.",
  },
  {
    year: "2024-Present",
    title: "Building Genuine Client Relationships",
    description:
      "Nevara focused on creating meaningful partnerships, ensuring clients receive not just digital products but actual growth strategies.",
  },
  {
    year: "Future",
    title: "Innovating for the Next Decade",
    description:
      "Nevara continues to push the boundaries, helping businesses achieve long-term success with cutting-edge solutions.",
  },
];

export default function Journey() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="absolute ecclipse -top-32 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        The <span className="text-gradient">Nevara Journey</span>
      </motion.h2>
      <div className="sr-only">
        <h3>The Story of Nevara Solutions</h3>
        <p>
          Nevara Solutions was founded in 2024 by Tayyab Kamboh with a mission to bridge the gap between digital products and business growth.
          From launching high-performance websites and scalable SaaS platforms to building long-term client partnerships in the US, UK, Europe, and GCC — Nevara has become a strategic tech partner for startups and enterprises alike.
        </p>
        <p>
          Looking ahead, Nevara continues innovating in app development, AI automation, and performance marketing to help businesses thrive in a digital-first world.
        </p>
      </div>


      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* ✅ Vertical Line - Moves to Left on Mobile & Center on Desktop */}
        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

        {/* ✅ Process Steps */}
        <div className="flex flex-col space-y-16">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* ✅ Timeline Dot - Fully Left on Mobile, Centered on Desktop */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 size-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md"></div>

              {/* ✅ Step Content - Adjusted Spacing to Avoid Overlapping */}
              <div className="w-[85%] md:w-[45%] bg-gray-800/50 border border-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 ml-10 md:ml-0">
                <h3 className="text-xl font-bold text-lightText dark:text-darkText">{step.year}</h3>
                <h4 className="text-lg font-semibold text-gradient dark:text-blue-400 mt-1">{step.title}</h4>
                <p className="mt-2 text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
