import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Bangalore Chauffeur | Professional Driver on Hire Services",
  description: "Bangalore Chauffeur offers reliable, background-verified drivers for personal and commercial vehicles. Hire professional drivers for daily commutes, outstation trips, corporate needs, and special occasions.",
  keywords: "driver on hire, bangalore chauffeur, hire driver bangalore, rent a driver, acting driver near me, monthly driver bangalore",
  openGraph: {
    title: "Bangalore Chauffeur | Professional Driver on Hire Services",
    description: "Hire professional, background-verified drivers in Bangalore. Safe, reliable, and hassle-free travel.",
    url: "https://bangalorechauffeur.com",
    siteName: "Bangalore Chauffeur",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

