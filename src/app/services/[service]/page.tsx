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
const serviceData: Record<string, { component: () => JSX.Element; title: string; description: string }> = {
  "web-development": {
    component: WebDevelopment,
    title: "Nevara - Web Development",
    description: "Get custom-built, SEO-optimized websites powered by modern frameworks like Next.js, React and Astro. We deliver scalable solutions for startups and enterprises.",
  },
  "app-development": {
    component: AppDevelopment,
    title: "Nevara - App Development",
    description: "Design and develop cross-platform mobile apps for iOS and Android using cutting-edge tools like React Native and Firebase. Perfect for MVPs and enterprise apps.",
  },
  "digital-marketing": {
    component: DigitalMarketing,
    title: "Nevara - Digital Marketing",
    description: "Scale your business with data-driven SEO, paid ads, and social media strategies tailored to your goals. Let Nevara drive qualified traffic and real conversions.",
  },
  "saas-product-development": {
    component: SaasDevelopment,
    title: "Nevara - SaaS Development",
    description: "Launch secure and scalable SaaS platforms using Firebase, custom APIs, and clean UI/UX. From MVP to full-scale systems, we build SaaS that performs.",
  },
};

// ✅ Correctly generate static params
export function generateStaticParams(): Array<{ service: string }> {
  return Object.keys(serviceData).map(service => ({ service }));
}

// ✅ Fix: Correct `generateMetadata` typing
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.service;

  if (!slug) return notFound();

  const serviceInfo = serviceData[slug];
  if (!serviceInfo) return notFound();

  return {
    title: serviceInfo.title,
    description: serviceInfo.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    metadataBase: new URL("https://www.nevarasolutions.com"),
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
