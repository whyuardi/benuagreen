"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function ProductsCarousel() {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Waste Water Pump",
      image: "/images/benua/39-SSEG-Waste-Water-Pumps.png",
    },
    {
      id: 2,
      name: "Slow Speed Pump (SSS Series)",
      image: "/images/benua/45-Slow-Speed-Pumps.png",
    },
    {
      id: 3,
      name: "Shallow Well Pump (SSW Series)",
      image: "/images/benua/44-Shallow-Well-Pumps.png",
    },
    {
      id: 4,
      name: "Horizontal Split Case Pump (SHS Series)",
      image: "/images/benua/43-Horizontal-Split-Case-Pumps.png",
    },
    {
      id: 5,
      name: "Self-Priming Pumps (MEGH Series)",
      image: "/images/benua/42-Megh-Self-Priming-Pumps.png",
    },
    {
      id: 6,
      name: "Self-Priming Pumps (CRP Series)",
      image: "/images/benua/41-CRP-Self-Priming-Pumps.png",
    },
    {
      id: 7,
      name: "Non Self-Priming Pumps (NSP Series)",
      image: "/images/benua/40-NSP-Non-Self-Priming-Pumps.png",
    },
    {
      id: 8,
      name: "SSEG Waste Water Pump",
      image: "/images/benua/38-SDW-Waste-Water-Pumps.png",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#87a7c8] via-[#a2bfdc] to-[#c1d6ea]"
      id="catalog"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.4) 0%, rgba(135,167,200,0.8) 70%, rgba(110,145,185,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase drop-shadow-md mb-2">
            {language === "id" ? "PRODUK KAMI" : "OUR PRODUCTS"}
          </h2>
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/95 drop-shadow-sm">
            {language === "id"
              ? "TEMUKAN SOLUSI RAMAH LINGKUNGAN TERBARU DARI BENUA GREEN ENERGY. MEMBENTUK HARI ESOK YANG BERKELANJUTAN."
              : "DISCOVER BENUA GREEN ENERGY'S NEWEST ECO-FRIENDLY SOLUTIONS. SHAPING A SUSTAINABLE TOMORROW."}
          </p>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-700 hover:text-[#2a1768] hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-700 hover:text-[#2a1768] hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-2 py-4"
          >
            {products.map((prod) => (
              <div
                key={prod.id}
                className="w-64 sm:w-72 shrink-0 bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Image Box */}
                <div className="relative w-full h-48 sm:h-52 mb-4 flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-center font-bold text-[#1d1841] text-xs sm:text-sm mt-2 leading-tight">
                  {prod.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
