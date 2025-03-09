import Hero from "./WebDevelopment/Hero";
import Features from "./WebDevelopment/Features";
import Process from "./WebDevelopment/Process";
import TestimonialCTA from "./WebDevelopment/TestimonialCTA";

export default function WebDevelopment() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-16">
      <Hero />
      <Features />
      <Process />
      <TestimonialCTA />
    </div>
  );
}
