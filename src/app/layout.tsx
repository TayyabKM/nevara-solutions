import "../styles/globals.css"; // Global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outfit } from "next/font/google";

export const metadata = {
  title: "Nevara - Homepage",  // Default Title
  description: "Welcome to Nevara Solutions - Your go-to web solutions partner.",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include weights you need
  variable: "--font-outfit", // Define a custom CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${outfit.className} bg-lightBg text-lightText dark:bg-black dark:text-darkText`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
