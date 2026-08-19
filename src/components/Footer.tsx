"use client";

import Link from "next/link";
import Image from "next/image";
import { CATEGORIES_DATA } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 text-neutral-500 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-100">
          
          {/* Brand Col (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <Image
                  src="https://benuagreen.com/storage/img/logo.png"
                  alt="Benua Green"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-semibold text-sm text-neutral-900 tracking-tight">
                Benua Green Energy
              </span>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-light">
              High-efficiency solar pumping, variable frequency drives, and precision PPR irrigation infrastructure built for long-term reliability.
            </p>

            <p className="text-xs text-neutral-400 pt-1">
              Jakarta, Indonesia • info@benuagreen.com
            </p>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "All Products", href: "/" },
                { name: "Pumps Catalog", href: "/pumps" },
                { name: "PPR & Piping Solutions", href: "/ppr" },
                { name: "About the Company", href: "/about" },
                { name: "Contact & Inquiries", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_DATA.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/?category=${cat.slug}#catalog`}
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiry (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Assistance
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Have technical questions or need a quotation?
            </p>
            <a
              href="https://wa.me/6281234567890?text=Hello%20Benua%20Green,%20I%20would%20like%20to%20inquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 pb-0.5"
            >
              Chat on WhatsApp →
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} PT Benua Green Energy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-neutral-700 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-neutral-700 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-neutral-700 transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}


