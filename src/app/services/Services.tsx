"use client";
import dynamic from "next/dynamic";

// Lazy load sections for better performance
const ServicesHero = dynamic(() => import("./components/ServicesHero"));
const NevaraAdvantage = dynamic(() => import("./components/NevaraAdvantge"));
const NevaraGrowthEngine = dynamic (() => import("./components/NevaraGrowthEngine"));
// const FAQ = dynamic(() => import("./Services/FAQ"));
// const ContactCTA = dynamic(() => import("./Services/ContactCTA"));

export default function Services() {
  return (
    <div className="min-h-screen px-6 md:px-16">
      <ServicesHero />
      <NevaraAdvantage />
      <NevaraGrowthEngine />
      {/* <FAQ /> */}
      {/* <ContactCTA /> */}
    </div>
  );
}
