export const metadata = {
  title: "Nevara - Homepage",
  description: "Nevara Solutions - Innovating for the Future",
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
