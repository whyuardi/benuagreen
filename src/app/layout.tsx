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
  title: "Benua Green Energy - Sustainable Water & Clean Energy Systems",
  description: "Official catalog of high-efficiency solar submersible pumps, intelligent VFD drives, pure sine wave inverters, and certified PPR piping infrastructure in Indonesia.",
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
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-neutral-900 flex flex-col min-h-screen antialiased selection:bg-neutral-900 selection:text-white">
        <LanguageProvider>
          <Navbar />
          <div className="flex-grow flex flex-col">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

