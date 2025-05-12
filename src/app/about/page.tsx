export const metadata = {
  title: "Nevara - About Us | Remote Software House & Growth Partner",
  description: "Learn more about Nevara and how we drive business success.",
};

import Hero from "./components/Hero";
import Ethos from "./components/Ethos";
import Counter from "./components/Counter";
import Journey from "./components/Journey";
import Clients from "./components/Clients";
import CTA from "./components/CTA";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Ethos />
      <Counter />
      <Journey />
      <Clients />
      <CTA />
    </>
  );
}
