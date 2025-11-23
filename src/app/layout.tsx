import "../styles/globals.css";
import FirebaseAnalytics from "../components/FirebaseAnalytic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata = {
  title: "Nevara - Homepage",
  description: "Welcome to Nevara Solutions - Your go-to web solutions partner.",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${outfit.className} bg-lightBg text-lightText dark:bg-black dark:text-darkText`}>
        <FirebaseAnalytics />
        <Analytics />
        <SpeedInsights />

        {/* Wrapper handles admin logic */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}
