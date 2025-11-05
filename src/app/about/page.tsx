export const metadata = {
  metadataBase: new URL("https://www.nevarasolutions.com"),
  title: "Nevara - About Us | Remote Software House & Growth Partner",
  description: "Learn more about Nevara and how we drive business success.",
  alternates: {
    canonical: "/about",
  },
};


import AboutSchema from "./components/AboutSchema";
import Hero from "./components/Hero";
import Ethos from "./components/Ethos";
import Counter from "./components/Counter";
import Journey from "./components/Journey";
import Clients from "./components/Clients";
import CTA from "./components/CTA";

export default function AboutPage() {
  return (
    <>
     <AboutSchema />
      <Hero />
      <Ethos />
      <Counter />
      <Journey />
      <Clients />
      <CTA />
    </>
  );
}
