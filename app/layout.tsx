import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import { BookingModalProvider } from "@/components/BookingModalContext";
import BookingModal from "@/components/BookingModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dhigurah Holidays",
    default: "Dhigurah Holidays — Boutique Island Guesthouse, South Ari Atoll Maldives",
  },
  description:
    "An intimate Maldivian island sanctuary on Dhigurah, South Ari Atoll. Authentic island living, tranquil beach retreats, whale shark encounters, and unspoiled coral reefs.",
  keywords: [
    "Dhigurah Holidays",
    "Dhigurah Maldives",
    "South Ari Atoll",
    "Maldives Guesthouse",
    "Whale Shark Excursions",
    "SAMPA Marine Protected Area",
    "Maldives Local Island",
  ],
  openGraph: {
    title: "Dhigurah Holidays — Boutique Island Guesthouse, Maldives",
    description:
      "Stay close to the beach, discover the beauty beneath the waves, and experience the quieter side of the Maldives on the local island of Dhigurah.",
    siteName: "Dhigurah Holidays",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#FCFBF8] text-[#242B2A] antialiased selection:bg-[#6CAFC4]/25 selection:text-[#12343B]"
      >
        <BookingModalProvider>
          <SmoothScroll />
          <PageTransition />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
