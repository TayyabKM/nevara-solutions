import "../styles/globals.css"; // Global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import FirebaseAnalytics from "../components/FirebaseAnalytic"; // ✅ Import Client Component
import { Outfit } from "next/font/google";

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
        <FirebaseAnalytics /> {/* ✅ Client Component to Handle Analytics */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
