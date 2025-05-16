"use client";

import MarketingSchema from "./DigitalMarketing/MarketingSchema";
import Hero from "./DigitalMarketing/Hero";
import MarketingServices from "./DigitalMarketing/MarketingServices";
import MarketingProcess from "./DigitalMarketing/MarketingProcess";
import WhyChooseUs from "./DigitalMarketing/WhyChooseUs";
import TestimonialCTA from "./DigitalMarketing/TestimonialCTA";
export default function DigitalMarketing() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-20 space-y-16">
      <MarketingSchema />
      <Hero />
      <MarketingServices />
      <MarketingProcess />
      <WhyChooseUs />
      <TestimonialCTA />
    </div>
  );
}
