"use client";

import { useEffect } from "react";

export default function ContactSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Nevara - Contact Us | Software & Digital Experts",
      "url": "https://nevarasolutions.com/contact",
      "description": "Reach out to Nevara Solutions for expert help with software development, app design, AI automation, and digital growth strategies.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Nevara Solutions",
        "url": "https://nevarasolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nevarasolutions.com/logo.png"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "tayyabkamboh@nevarasolutions.com",
            "contactType": "Customer Service",
            "areaServed": ["US", "UK", "Europe", "GCC", "Worldwide"],
            "availableLanguage": ["English"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/nevara-solutions",
          "https://wa.me/+923498476179" 
        ]
      }
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
