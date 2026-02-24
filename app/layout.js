import "./globals.css";

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

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
