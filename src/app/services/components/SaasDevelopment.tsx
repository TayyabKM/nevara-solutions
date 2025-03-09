import Hero from "./SaasDevelopment/Hero";
import Features from "./SaasDevelopment/Features";
import Process from "./SaasDevelopment/Process";
import SuccessMetrics from "./SaasDevelopment/SuccessMetrics";
import TestimonialCTA from "./SaasDevelopment/TestimonialCTA";

export default function SaasDevelopment() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <Hero />
      <Features />
      <Process />
      <SuccessMetrics />
      <TestimonialCTA />
    </div>
  );
}
