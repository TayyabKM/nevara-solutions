"use client";

import { useEffect } from "react";

export default function HomepageSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nevara Solutions | Custom Web, App & AI Development Company",
      "url": "https://nevarasolutions.com",
      "description": "We help startups and enterprises scale globally — with powerful custom software, mobile apps, SaaS platforms, and AI solutions tailored for clients across the US, UK, Europe, and the Emirates.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Website Development",
            "url": "https://nevarasolutions.com/services/web-development"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "App Development",
            "url": "https://nevarasolutions.com/services/app-development"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SaaS Product Development",
            "url": "https://nevarasolutions.com/services/saas-product-development"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Digital Marketing & Brand Building",
            "url": "https://nevarasolutions.com/services/digital-marketing"
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
