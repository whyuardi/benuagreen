import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Benua Green Energy - Connecting The Green Energy Future",
  description: "At Benua Green Energy, we provide a full spectrum of services, ensuring your energy needs are met efficiently and sustainably.",
  icons: {
    icon: "/images/benua/logo-benuagreenenergy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#eef2f5] text-neutral-900 flex flex-col min-h-screen antialiased">
        <LanguageProvider>
          <Navbar />
          <div className="flex-grow flex flex-col">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
