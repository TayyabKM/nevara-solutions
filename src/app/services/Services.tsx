"use client";
import dynamic from "next/dynamic";

// Lazy load sections for better performance
const ServicesHero = dynamic(() => import("./components/ServicesHero"));
const NevaraAdvantage = dynamic(() => import("./components/NevaraAdvantge"));
const NevaraGrowthEngine = dynamic (() => import("./components/NevaraGrowthEngine"));
const FAQSection = dynamic(() => import("./components/FAQ"));
const ContactCTA = dynamic(() => import("./components/ContactCTA"));

export default function Services() {
  return (
    <div className="min-h-screen px-6 md:px-16">
      <ServicesHero />
      <NevaraAdvantage />
      <NevaraGrowthEngine />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
