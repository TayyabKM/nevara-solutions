"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GroupStructure() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative py-16 px-4">
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-10">
        <motion.div
          className="flex flex-col items-center text-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={textVariants} className="text-textGradPurple dark:text-textGradBlue font-medium text-lg md:text-xl uppercase tracking-widest">
            One Group. Two Specialisms.
          </motion.div>
          <motion.div variants={textVariants} className="text-gradient font-bold text-3xl md:text-4xl max-w-2xl">
            Strategy &amp; Intelligence, Meet Digital Execution.
          </motion.div>
          <motion.p variants={textVariants} className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
            MMT Consulting is the parent company of the MMT Group, focused on data strategy
            and business intelligence. Nevara Solutions is its digital execution arm, building
            the websites, apps, and platforms that bring that intelligence to life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* MMT Consulting card */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col gap-4 p-8 rounded-2xl bg-[#0b1e3d] text-white border border-white/10 overflow-hidden"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Parent Company
            </div>
            <div className="text-2xl font-bold">MMT Consulting</div>
            <p className="text-gray-300">
              Strategy, data engineering, BI, and AI &mdash; the intelligence layer behind
              better decisions.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-gray-200">
              {["BI & Reporting", "Data Engineering & Warehousing", "AI & Predictive Analytics", "Decision Intelligence"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://mmt-consulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors w-fit"
            >
              Visit mmt-consulting.com →
            </Link>
          </motion.div>

          {/* Nevara Solutions card */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border border-white/10 overflow-hidden"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
              Digital Execution Partner
            </div>
            <div className="text-2xl font-bold">Nevara Solutions</div>
            <p className="text-emerald-50">
              Custom websites, mobile apps, SaaS products, digital marketing, and AI
              automation &mdash; built to bring the group&apos;s intelligence to your users.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-emerald-50">
              {["Website Development", "App Development", "SaaS Product Development", "Digital Marketing & AI Automation"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-200" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-2 inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors w-fit"
            >
              Explore Nevara Services →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
