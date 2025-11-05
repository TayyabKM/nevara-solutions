"use client";

import { useEffect } from "react";

export default function MarketingSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nevara - Digital Marketing & Brand Building",
      "url": "https://nevarasolutions.com/services/digital-marketing",
      "description": "Nevara Solutions provides results-driven digital marketing strategies including SEO, PPC campaigns, and social media management. We help brands grow across the US, UK, Europe, and the GCC with tailored, data-backed solutions.",
      "about": {
        "@type": "Thing",
        "name": "Digital Marketing and Brand Building Services"
      },
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small Businesses, Startups, and Enterprises"
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
            "name": "Digital Marketing",
            "item": "https://nevarasolutions.com/services/digital-marketing"
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
