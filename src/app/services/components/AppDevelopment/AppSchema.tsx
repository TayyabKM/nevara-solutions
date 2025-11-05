"use client";

import { useEffect } from "react";

export default function AppSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nevara - App Development",
      "url": "https://nevarasolutions.com/services/app-development",
      "description": "Nevara Solutions specializes in scalable, cross-platform mobile app development using Flutter and React Native. We deliver high-performance apps for startups and enterprises across the US, UK, Europe, and the GCC.",
      "about": {
        "@type": "Thing",
        "name": "Mobile App Development Services"
      },
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Enterprises, and Tech-Driven Businesses"
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
            "name": "App Development",
            "item": "https://nevarasolutions.com/services/app-development"
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
