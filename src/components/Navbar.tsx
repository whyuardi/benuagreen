"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User, LogIn, UserPlus, Menu, ArrowRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/" },
    { name: "Pumps", href: "/pumps" },
    { name: "PPR & Piping", href: "/ppr" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]"
          : "bg-white border-b border-neutral-100 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
            <Image
              src="https://benuagreen.com/storage/img/logo.png"
              alt="Benua Green Energy"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-neutral-900 leading-none">
              Benua Green
            </span>
            <span className="text-[10px] text-neutral-400 tracking-wider font-medium uppercase mt-0.5">
              Energy & Water
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-normal transition-colors ${
                  isActive
                    ? "text-neutral-950 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900 font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-400 transition-all"
          >
            Inquire
          </Link>

          <Link
            href="/contact?type=quote"
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-all"
          >
            Request Quote
          </Link>

          {/* Account */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 transition-colors cursor-pointer">
                <User className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-white rounded-xl p-1 shadow-lg border border-neutral-100"
              >
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/login"
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors font-medium"
                  >
                    <LogIn className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Sign In</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/login?tab=register"
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors font-medium"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Create Account</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="w-8 h-8 border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-700">
                <Menu className="w-4 h-4" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80vw] max-w-xs bg-white border-l border-neutral-100 p-6 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="text-left pb-4 border-b border-neutral-100">
                    <SheetTitle className="flex items-center gap-2.5">
                      <div className="relative w-7 h-7">
                        <Image
                          src="https://benuagreen.com/storage/img/logo.png"
                          alt="Benua Green"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="font-semibold text-sm text-neutral-900">
                        Benua Green
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-2 pt-6">
                    {navLinks.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(link.href);
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "bg-neutral-900 text-white font-medium"
                              : "text-neutral-600 hover:text-neutral-900"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-neutral-100">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white text-xs font-medium rounded-lg"
                  >
                    Customer Sign In
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-200 text-neutral-700 text-xs font-medium rounded-lg"
                  >
                    Contact Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}



