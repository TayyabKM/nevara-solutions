"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiDatabase,
  FiCpu,
  FiBookOpen,
  FiCloud,
  FiTarget,
  FiShield,
  FiUsers,
} from "react-icons/fi";

interface IMMTService {
  heading: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

const mmtServicesData: IMMTService[] = [
  {
    heading: "BI Architecture & Strategy",
    description:
      "Enterprise BI frameworks aligned to business objectives — KPI dictionaries, governance policies, RACI models, and executive reporting ecosystems.",
    icon: FiBarChart2,
    tags: ["Power BI", "Looker Studio", "Tableau"],
  },
  {
    heading: "Data Engineering & Warehousing",
    description:
      "Cloud-native ETL/ELT pipelines and modern data warehouses built for scale, with full data lake architecture and automated quality checks.",
    icon: FiDatabase,
    tags: ["Snowflake", "BigQuery", "dbt", "Airflow"],
  },
  {
    heading: "AI & Predictive Analytics",
    description:
      "Intelligent systems that surface insights before your team thinks to ask — ML models to AI-powered dashboards.",
    icon: FiCpu,
    tags: ["Python", "scikit-learn", "ML Pipelines"],
  },
  {
    heading: "EdTech Analytics Platforms",
    description:
      "Specialist analytics for schools and universities, delivered at scale for major education networks.",
    icon: FiBookOpen,
    tags: ["Academics", "Student Lifecycle", "Operations"],
  },
  {
    heading: "Cloud Data Platforms",
    description:
      "Cloud-native platforms that are fast, scalable, and cost-efficient — with real-time streaming and full observability.",
    icon: FiCloud,
    tags: ["GCP", "AWS", "Azure", "Kafka"],
  },
  {
    heading: "Decision Intelligence",
    description:
      "AI surfaces recommendations in real time — connecting analytics directly to the decisions that drive your business forward.",
    icon: FiTarget,
    tags: ["Decision AI", "KPI Automation", "Real-Time Insights"],
  },
  {
    heading: "Data Governance & Quality",
    description:
      "Enterprise-grade governance covering cataloguing, master data management, access controls, and compliance-ready audit trails.",
    icon: FiShield,
    tags: ["Data Catalogue", "MDM", "Compliance"],
  },
  {
    heading: "Corporate AI & Data Training",
    description:
      "Upskilling teams on Power BI, ChatGPT, and the data modelling concepts that make AI tools useful in a business context.",
    icon: FiUsers,
    tags: ["Workshops", "Executive Briefings"],
  },
];

export default function MMTServices() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute ecclipse -bottom-32 -left-[150px] size-[300px] -z-10" />

      <div className="flex flex-col container max-w-screen-xl mx-auto p-4 gap-10">
        <Header />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {mmtServicesData.map((service, index) => (
            <ServiceBox key={service.heading} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Header() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex flex-col w-full items-center text-center gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={textVariants} className="text-textGradPurple dark:text-textGradBlue font-medium text-lg md:text-xl uppercase tracking-widest">
        From Our Parent Company
      </motion.div>
      <motion.div variants={textVariants} className="text-gradient font-bold text-4xl md:text-5xl">
        MMT Consulting Services
      </motion.div>
      <motion.div variants={textVariants} className="font-medium text-lg md:text-xl leading-relaxed max-w-2xl text-gray-700 dark:text-gray-400">
        Backed by 20+ years of industry experience, MMT Consulting helps organisations
        design, build, and scale modern data systems — from BI dashboards to AI-powered
        intelligence layers. Now available to Nevara clients as part of the MMT Group.
      </motion.div>
    </motion.div>
  );
}

function ServiceBox({ service, index }: { service: IMMTService; index: number }) {
  const Icon = service.icon;

  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (index % 3) * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative flex flex-col items-start justify-between gap-4 py-6 px-6 bg-gray-200/50 dark:bg-gray-700/50
      border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md rounded-xl overflow-hidden w-full
      group"
    >
      <div className="size-16 bg-background-gradient rounded-full flex items-center justify-center">
        <Icon className="size-7 text-white" />
      </div>

      <div className="font-bold text-xl">{service.heading}</div>
      <div className="dark:text-gray-400 text-gray-500 text-sm">{service.description}</div>

      <div className="flex flex-wrap gap-2 mt-1">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function MMTServicesCTA() {
  return (
    <div className="flex justify-center">
      <Link
        href="https://mmt-consulting.com/services"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gradient font-semibold hover:opacity-80 transition-opacity"
      >
        See the full MMT Consulting service catalogue →
      </Link>
    </div>
  );
}
