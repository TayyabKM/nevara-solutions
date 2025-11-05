"use client";

import { useEffect } from "react";

export default function WebSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nevara - Web Development",
      "url": "https://nevarasolutions.com/services/web-development",
      "description": "Get custom-built, SEO-optimized websites powered by modern frameworks like Next.js, React, and Astro. Nevara Solutions delivers scalable web solutions for startups and enterprises across the US, UK, Europe, and the GCC.",
      "about": {
        "@type": "Thing",
        "name": "Website Development Services"
      },
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Enterprises, and Digital Brands"
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
            "name": "Web Development",
            "item": "https://nevarasolutions.com/services/web-development"
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
