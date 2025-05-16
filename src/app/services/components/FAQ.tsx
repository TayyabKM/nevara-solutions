"use client";

import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";


// FAQ Data
const faqs = [
  {
    question: "What services does Nevara Solutions offer?",
    answer:
      "We specialize in website development, app development, digital marketing & brand building, and SaaS product development. Whether you need a website, a mobile app, or a cloud-based solution, we provide tailored digital solutions.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "If you're unsure which solution suits your business best, our experts are here to help. We offer free consultations to understand your goals and recommend the best strategy to drive growth.",
  },
  {
    question: "Do you offer custom solutions for businesses?",
    answer:
      "Absolutely! Every business is unique, so we offer customized development and marketing solutions tailored to your specific needs, industry, and objectives.",
  },
  {
    question: "Where do you provide your services?",
    answer:
      "We work with clients globally, including the US, UK, Europe, and the Middle East. Whether you're based in the Emirates, North America, or anywhere in between, Nevara Solutions delivers custom digital solutions tailored to your region and industry.",
  },
  {
    question: "How much do your services cost, and do you offer installment plans?",
    answer:
      "Our pricing varies based on project scope and complexity. We provide flexible pricing options to fit different budgets as well as interest free installment plans!  Contact us for a personalized quote.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the service and project size. A website may take a few weeks, while a custom SaaS product or mobile app can take several months. We ensure efficient project management to meet deadlines.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes! We offer ongoing support, maintenance, and updates to keep your website, app, or SaaS platform running smoothly and up-to-date.",
  },
  {
    question: "How do I get started with Nevara Solutions?",
    answer:
      "Getting started is easy! Simply contact us through our website, and our team will schedule a consultation to discuss your project needs and develop a roadmap for success.",
  },
];

export default function FAQExpandingBoxes() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle Expand/Collapse
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full py-20 px-6 md:px-12 lg:px-24">
      {/* Background Glow */}
      <div className="absolute ecclipse -top-40 -left-[150px] size-[300px]" />
      <div className="absolute ecclipse -bottom-32 right-0 sm:-right-[-20px] size-[300px]" />


      {/* ✅ Section Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Questions We&apos;re Often Asked
        <br className="hidden md:block" />
        <span className="text-gradient">Frequently Asked Questions</span>
      </motion.h2>
      <div className="sr-only">
        <h3>Common questions about Nevara’s digital services</h3>
        <p>From website and app development to SaaS and digital marketing, here are answers to frequently asked questions about working with Nevara Solutions globally.</p>
      </div>


      {/* ✅ FAQ Expanding Cards */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer border border-gray-300 dark:border-gray-700/40 backdrop-blur-lg
            p-4 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${expandedIndex === index
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-gray-200 dark:bg-gray-800"
              }`}
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
              <motion.span
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold"
              >
                ▼
              </motion.span>
            </div>

            {/* ✅ Answer (Expands with Animation) */}
            <motion.p
              className="mt-3 text-gray-700 dark:text-gray-300"
              initial={{ height: 0, opacity: 0 }}
              animate={expandedIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
