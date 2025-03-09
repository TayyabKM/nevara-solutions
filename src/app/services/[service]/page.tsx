import { notFound } from "next/navigation";
import WebDevelopment from "../components/WebDevelopment";
import AppDevelopment from "../components/AppDevelopment";
import DigitalMarketing from "../components/DigitalMarketing";
import SaasDevelopment from "../components/SaasDevelopment";
import ServiceRenderer from "./ServiceRenderer"; // ✅ Move `useParams()` logic to a client component

// ✅ Define all valid service pages
const serviceComponents: Record<string, () => JSX.Element> = {
  "web-development": WebDevelopment,
  "app-development": AppDevelopment,
  "digital-marketing": DigitalMarketing,
  "saas-product-development": SaasDevelopment,
};

// ✅ Required for static export
export function generateStaticParams() {
  return Object.keys(serviceComponents).map((service) => ({ service }));
}

// ✅ Server Component (Now Delegates Rendering to Client Component)
export default function ServicePage({ params }: { params: { service: string } }) {
  if (!params?.service || !serviceComponents[params.service]) return notFound(); // Show 404 if invalid service

  return <ServiceRenderer service={params.service} />;
}
