import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import FloatingContact from "@/components/site/FloatingContact";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Vitoshia PH — Tech-Driven Agri Solutions",
  description:
    "Modern farming services in the Philippines: land surveying, drone fertilizer & pesticide application, solar water systems, harvesting, hauling, and drying.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-brand-paper text-brand-ink"
      >
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
