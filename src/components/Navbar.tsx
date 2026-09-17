"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, PhoneCall } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    { name: "Chiller", href: "/products?category=chiller" },
    { name: "Cooling Tower", href: "/products?category=cooling-tower" },
    { name: "Steam Accessories", href: "/products?category=steam-accessories" },
    { name: "Solar Panel", href: "/products?category=solar-panel" },
    { name: "High Efficiency Pump", href: "/products?category=high-efficiency-pump" },
    { name: "PPR Pipe & Fittings", href: "/products?category=ppr-pipe-fittings" },
    { name: "Solar Inverter Optimizer", href: "/products?category=solar-inverter-optimizer" },
    { name: "Alkaline Water Ionizer", href: "/products?category=alkaline-water-ionizer" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-[1001] transition-all duration-300 bg-white ${
        scrolled
          ? "shadow-sm py-2.5 border-b border-neutral-200/70"
          : "py-3.5 border-b border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src="/images/benua/logo-benuagreenenergy.png"
              alt="PT Benua Green Energy"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[14px]">
          <Link
            href="/"
            className={`font-semibold transition-colors duration-150 ${
              pathname === "/" ? "text-[#281b66] font-bold" : "text-neutral-700 hover:text-[#281b66]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-[#281b66] font-medium transition-colors duration-150"
          >
            About
          </Link>

          {/* Products Link & Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1 font-medium py-2 transition-colors duration-150 ${
                pathname === "/products" ? "text-[#281b66] font-bold" : "text-neutral-700 hover:text-[#281b66]"
              }`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-0 w-60 bg-white border border-neutral-150 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link
                  href="/products"
                  className="block px-4 py-2 text-xs font-bold text-[#1a3a6e] hover:bg-neutral-50 border-b border-neutral-100"
                >
                  All Products Catalog →
                </Link>
                {productCategories.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-[#281b66] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`font-medium transition-colors duration-150 ${
              pathname === "/contact" ? "text-[#281b66] font-bold" : "text-neutral-700 hover:text-[#281b66]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button & Language Switcher */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-neutral-100 p-0.5 rounded-full border border-neutral-200 text-[11px] font-medium">
            <button
              onClick={() => setLanguage("id")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "id"
                  ? "bg-white text-[#281b66] shadow-xs font-bold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "en"
                  ? "bg-white text-[#281b66] shadow-xs font-bold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Pill WhatsApp CTA Button "Get A Qoute" */}
          <a
            href="https://wa.me/+628176779719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#2a1768] hover:bg-[#38208a] transition-all duration-200 shadow-sm hover:shadow"
          >
            Get A Qoute
          </a>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="w-9 h-9 border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-700">
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-xs bg-white p-6">
                <SheetHeader className="text-left pb-4 border-b border-neutral-100">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/images/benua/logo-benuagreenenergy.png"
                        alt="Benua Green"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-3 pt-6 text-sm">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="font-semibold text-[#281b66] py-1"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="text-neutral-700 py-1"
                  >
                    About
                  </Link>
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="text-neutral-700 py-1"
                  >
                    Products
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="text-neutral-700 py-1"
                  >
                    Contact
                  </Link>
                </div>

                <div className="pt-8 border-t border-neutral-100 mt-6">
                  <a
                    href="https://wa.me/+628176779719"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-[#2a1768] shadow-sm"
                  >
                    Get A Qoute
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
