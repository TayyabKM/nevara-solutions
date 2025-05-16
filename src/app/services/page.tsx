export const metadata = {
  title: "Nevara - Services | Web, App & AI Development",
  description:
    "Nevara Solutions delivers scalable web, SaaS, mobile, and AI solutions to clients across the US, UK, Europe, and Middle East — driving business growth through expert development and marketing services.",
};

import ServicesSchema from "./components/ServicesSchema"; 
import Services from "./Services";

export default function ServicesPage() {
  return (
    <>
      <ServicesSchema />
      <Services />
    </>
  );
}
