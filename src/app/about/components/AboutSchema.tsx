"use client";

import { useEffect } from "react";

export default function AboutSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Nevara - About Us | Remote Software House & Growth Partner",
      "url": "https://nevarasolutions.com/about",
      "description": "Learn more about Nevara and how we drive business success through digital innovation, strategic growth, and long-term partnerships.",
      "publisher": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nevarasolutions.com/logo.png"
        }
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "founder": {
          "@type": "Person",
          "name": "Tayyab Kamboh"
        },
        "foundingDate": "2024",
        "url": "https://nevarasolutions.com",
        "sameAs": [
          "https://www.linkedin.com/company/nevara-solutions"
        ],
        "description": "A remote-first software house providing web development, SaaS, mobile apps, AI solutions, and digital marketing services to global clients.",
        "areaServed": ["US", "UK", "Europe", "Middle East", "Worldwide"],
        "brand": "Nevara",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "tayyabkamboh@nevarasolutions.com",
          "contactType": "Customer Service"
        }
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
