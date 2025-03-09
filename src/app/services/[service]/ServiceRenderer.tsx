"use client";

import { notFound } from "next/navigation";
import { Suspense } from "react";
import WebDevelopment from "../components/WebDevelopment";
import AppDevelopment from "../components/AppDevelopment";
import DigitalMarketing from "../components/DigitalMarketing";
import SaasDevelopment from "../components/SaasDevelopment";

// ✅ Define all valid service pages
const serviceComponents: Record<string, () => JSX.Element> = {
  "web-development": WebDevelopment,
  "app-development": AppDevelopment,
  "digital-marketing": DigitalMarketing,
  "saas-product-development": SaasDevelopment,
};

// ✅ Client Component to Handle Dynamic Routing
export default function ServiceRenderer({ service }: { service: string }) {
  const ServiceComponent = serviceComponents[service];

  if (!ServiceComponent) return notFound();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceComponent />
    </Suspense>
  );
}
