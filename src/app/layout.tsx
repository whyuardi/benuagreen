import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Home - Benua Green Energy",
  description: "Benua Green Energy - Pioneering sustainable energy solutions for a greener, brighter future. Quality pumps, solar drives, inverters, and PPR piping systems.",
  icons: {
    icon: "https://benuagreen.com/storage/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-neutral-900 flex flex-col min-h-screen antialiased selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

