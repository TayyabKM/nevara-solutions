"use client";

import { motion } from "framer-motion";

// Process Steps Data
const processSteps = [
  { role: "user", title: "How does Nevara develop SaaS products?", description: "Our SaaS product development process follows agile methodologies, enabling flexibility, faster iterations, and continuous delivery of value." },
  { role: "ai", title: "Discovery & Validation", description: "We begin with in-depth research to define your product’s goals, validate assumptions, and outline key SaaS features and MVP scope." },
  { role: "user", title: "What about design and user experience?", description: "We build intuitive UI/UX prototypes using tools like Figma — ensuring a seamless user journey, tested and refined through real feedback." },
  { role: "ai", title: "Agile Development & Iteration", description: "Our developers work in agile sprints, leveraging CI/CD pipelines and feedback loops to stay aligned with evolving user needs." },
  { role: "user", title: "How do you ensure quality and security?", description: "We implement continuous testing, secure coding practices, and performance monitoring to deliver stable and compliant SaaS platforms." },
  { role: "ai", title: "Deployment & Scaling", description: "Your SaaS product is deployed on cloud platforms like Firebase, Vercel, or AWS — optimized for performance, uptime, and growth." },
  { role: "user", title: "What happens after launch?", description: "We provide post-launch support, analytics, updates, and iteration cycles to evolve your product based on user behavior and market trends." },
];

export default function Process() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24">
         <div className="absolute ecclipse -bottom-32 left-0 sm:-right-[150px] size-[300px]" />
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-lightText dark:text-darkText"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our SaaS <span className="text-gradient">Development Process</span>
      </motion.h2>

      {/* Chat Container */}
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex items-start ${step.role === "user" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`max-w-[75%] p-4 md:p-5 rounded-lg shadow-md ${
                step.role === "user"
                  ? "bg-blue-500 text-white text-right"
                  : "bg-gray-800 text-gray-300 text-left"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm md:text-base">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
