"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IndonesiaProjectMap } from "@/components/IndonesiaProjectMap";
import { useLanguage } from "@/lib/i18n";

interface HeroSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function HeroSection({ onSelectCategory }: HeroSectionProps) {
  const { language } = useLanguage();

  const categories = [
    { name: "Chiller", slug: "chiller", href: "/products?category=chiller" },
    { name: "Cooling Tower", slug: "cooling-tower", href: "/products?category=cooling-tower" },
    { name: language === "id" ? "Aksesoris Steam & Boiler" : "Steam Accessories", slug: "steam-accessories", href: "/products?category=steam-accessories" },
    { name: language === "id" ? "Panel Surya" : "Solar Panel", slug: "solar-panel", href: "/products?category=solar-panel" },
    { name: language === "id" ? "Pompa Efisiensi Tinggi" : "High Efficiency Pump", slug: "high-efficiency-pump", href: "/products?category=high-efficiency-pump" },
    { name: language === "id" ? "Pipa PPR & Fitting" : "PPR Pipe & Fittings", slug: "ppr-pipe-fittings", href: "/products?category=ppr-pipe-fittings" },
    { name: language === "id" ? "Inverter Pompa Surya" : "Solar Inverter Optimizer", slug: "solar-inverter-optimizer", href: "/products?category=solar-inverter-optimizer" },
    { name: language === "id" ? "Ionizer Air Alkali" : "Alkaline Water Ionizer", slug: "alkaline-water-ionizer", href: "/products?category=alkaline-water-ionizer" },
  ];

  return (
    <section className="bg-[#eef2f5] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Product Categories Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden flex flex-col py-2.5">
            <div className="px-5 py-2 border-b border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                {language === "id" ? "Kategori Produk" : "Product Categories"}
              </span>
              <span className="text-[10px] bg-[#2a1768]/10 text-[#2a1768] font-bold px-2 py-0.5 rounded-full">
                {language === "id" ? `${categories.length} Solusi` : `${categories.length} Solutions`}
              </span>
            </div>

            <div className="flex flex-col flex-1 divide-y divide-neutral-50 justify-between">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
                  className="group flex items-center justify-between px-5 flex-1 text-xs sm:text-[13px] font-medium text-neutral-700 hover:text-[#281b66] hover:bg-neutral-50/80 transition-colors duration-150 py-2.5"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">{cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#281b66] group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Indonesia Project Map */}
          <div className="lg:col-span-9 flex">
            <IndonesiaProjectMap />
          </div>

        </div>
      </div>
    </section>
  );
}
