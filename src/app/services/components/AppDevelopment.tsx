import Hero from "./AppDevelopment/Hero";
import Features from "./AppDevelopment/Features";
import Process from "./AppDevelopment/Process";
import TestimonialCTA from "./AppDevelopment/TestimonialCTA";

export default function AppDevelopment() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <Hero />
      <Features />
      <Process />
      <TestimonialCTA />
    </div>
  );
}
