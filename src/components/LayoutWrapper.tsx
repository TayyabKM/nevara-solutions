"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if route starts with /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {/* Show header only if NOT admin */}
      {!isAdminRoute && <Header />}

      <main>{children}</main>

      {/* Show WhatsApp button only if NOT admin */}
      {!isAdminRoute && (
        <a
          href="https://wa.me/923498476179?text=Hello%20Nevara%20Solutions!"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      )}

      {/* Show footer only if NOT admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}
