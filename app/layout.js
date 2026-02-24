import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
