export const metadata = {
  title:  "Nevara Solutions | Custom Web, App & AI Development Company",
  description: "We help startups and enterprises scale with powerful custom software, mobile apps, SaaS platforms, digital marketing and AI automation solutions.",
};

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks/index";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
