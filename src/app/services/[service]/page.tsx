import { notFound } from "next/navigation";
import WebDevelopment from "../components/WebDevelopment";
import AppDevelopment from "../components/AppDevelopment";
import DigitalMarketing from "../components/DigitalMarketing";
import SaasDevelopment from "../components/SaasDevelopment";
import ServiceRenderer from "./ServiceRenderer";
import type { Metadata } from "next";

interface Params {
  service: string;
}

const serviceData: Record<
  string,
  { component: () => JSX.Element; title: string; description: string }
> = {
  "web-development": {
    component: WebDevelopment,
    title: "Nevara - Web Development",
    description: "Build high-performance, scalable websites with Nevara's expert development services.",
  },
  "app-development": {
    component: AppDevelopment,
    title: "Nevara - App Development",
    description: "Craft powerful mobile apps for iOS and Android with our expert development team.",
  },
  "digital-marketing": {
    component: DigitalMarketing,
    title: "Nevara - Digital Marketing",
    description: "Boost your brand visibility and drive conversions with Nevara's data-driven marketing strategies.",
  },
  "saas-product-development": {
    component: SaasDevelopment,
    title: "Nevara - SaaS Development",
    description: "Develop scalable and secure SaaS solutions tailored to your business needs.",
  },
};

// ✅ Generate static params
export function generateStaticParams(): Array<{ service: string }> {
  return Object.keys(serviceData).map((service) => ({ service }));
}

// ✅ Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const serviceInfo = serviceData[params.service];
  if (!serviceInfo) return notFound();

  return {
    title: serviceInfo.title,
    description: serviceInfo.description,
  };
}

// ✅ Page component
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  if (!params?.service || !serviceData[params.service]) {
    return notFound();
  }

  return <ServiceRenderer service={params.service} />;
}
