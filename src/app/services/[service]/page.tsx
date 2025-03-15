import { notFound } from "next/navigation";
import WebDevelopment from "../components/WebDevelopment";
import AppDevelopment from "../components/AppDevelopment";
import DigitalMarketing from "../components/DigitalMarketing";
import SaasDevelopment from "../components/SaasDevelopment";
import ServiceRenderer from "./ServiceRenderer";
import type { Metadata } from "next";

// ✅ Define the correct type for `params`
interface Params {
  service: string;
}

// ✅ Define all valid service pages & metadata
const serviceData: Record<
  string,
  { component: () => JSX.Element; title: string; description: string }
> = {
  "web-development": {
    component: WebDevelopment,
    title: "Nevara - Web Development",
    description:
      "Build high-performance, scalable websites with Nevara's expert development services.",
  },
  "app-development": {
    component: AppDevelopment,
    title: "Nevara - App Development",
    description:
      "Craft powerful mobile apps for iOS and Android with our expert development team.",
  },
  "digital-marketing": {
    component: DigitalMarketing,
    title: "Nevara - Digital Marketing",
    description:
      "Boost your brand visibility and drive conversions with Nevara's data-driven marketing strategies.",
  },
  "saas-product-development": {
    component: SaasDevelopment,
    title: "Nevara - SaaS Development",
    description:
      "Develop scalable and secure SaaS solutions tailored to your business needs.",
  },
};

// ✅ Correctly generate static params
export function generateStaticParams(): Array<{ service: string }> {
  return Object.keys(serviceData).map((service) => ({ service }));
}

// ✅ Fix: Correct `generateMetadata` typing
export async function generateMetadata({
  params,
}: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!resolvedParams?.service) return notFound();

  const serviceInfo = serviceData[resolvedParams.service];
  if (!serviceInfo) return notFound();

  return {
    title: serviceInfo.title,
    description: serviceInfo.description,
  };
}

// ✅ Fix: Explicitly define `params` as async to match Next.js behavior
export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;

  if (!resolvedParams?.service || !serviceData[resolvedParams.service]) {
    return notFound();
  }

  return <ServiceRenderer service={resolvedParams.service} />;
}
