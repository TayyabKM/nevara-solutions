import "../styles/globals.css"; // Global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include weights you need
  variable: "--font-outfit", // Define a custom CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
