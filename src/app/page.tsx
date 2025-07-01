export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Nevara Solutions | Custom Web, App & AI Development Company",
  description:
    "We help startups and enterprises scale globally — with powerful custom software, mobile apps, SaaS platforms, and AI solutions tailored for clients across the US, UK, Europe, and the Emirates.",
  alternates: {
    canonical: "/",
  },
};


import HomepageSchema from "@/components/HomepageSchema";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks/index";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <HomepageSchema />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
