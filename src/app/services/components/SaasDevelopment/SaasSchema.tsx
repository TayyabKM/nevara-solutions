"use client";

import { useEffect } from "react";

export default function SaasSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nevara - SaaS Product Development",
      "url": "https://nevarasolutions.com/services/saas-product-development",
      "description": "Launch secure, scalable SaaS products with Nevara Solutions. From MVP to enterprise-ready platforms, we build cloud-based systems with custom dashboards, APIs, and automation—trusted by businesses in the US, UK, Europe, and GCC.",
      "about": {
        "@type": "Thing",
        "name": "SaaS Product Development Services"
      },
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Tech Startups, Product Companies, and Enterprises"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Services",
            "item": "https://nevarasolutions.com/services"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "SaaS Product Development",
            "item": "https://nevarasolutions.com/services/saas-product-development"
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
