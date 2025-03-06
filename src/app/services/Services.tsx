"use client";
import dynamic from "next/dynamic";

// Lazy load sections for better performance
const ServicesHero = dynamic(() => import("./components/ServicesHero"));
// const ServiceCards = dynamic(() => import("./Services/ServiceCards"));
const NevaraAdvantage = dynamic(() => import("./components/NevaraAdvantge"));
// const FAQ = dynamic(() => import("./Services/FAQ"));
// const ContactCTA = dynamic(() => import("./Services/ContactCTA"));

export default function Services() {
  return (
    <div className="min-h-screen px-6 md:px-16">
      <ServicesHero />
      {/* <ServiceCards /> */}
      {/* <NevaraAdvantage /> */}
      {/* <FAQ /> */}
      {/* <ContactCTA /> */}
    </div>
  );
}
