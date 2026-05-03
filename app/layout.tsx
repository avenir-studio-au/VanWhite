import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "VanWhite Property Group | Sydney Real Estate",
  description:
    "Boutique real estate agency specialising in Sydney's inner eastern suburbs — Potts Point, Elizabeth Bay & beyond. 20+ years of experience with Vanessa White.",
  openGraph: {
    title: "VanWhite Property Group",
    description: "Your trusted inner Sydney property expert.",
    url: "https://www.vanwhitepropertygroup.com.au",
    siteName: "VanWhite Property Group",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
