"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { IndonesiaProjectMap } from "@/components/IndonesiaProjectMap";

interface HeroSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function HeroSection({ onSelectCategory }: HeroSectionProps) {
  const categories = [
    { name: "Chiller", active: true, slug: "chillers" },
    { name: "Cooling Tower", slug: "cooling-air" },
    { name: "Steam Accessories", slug: "heating-power" },
    { name: "Solar Panel", slug: "solar-drives" },
    { name: "High Efficiency Pump", slug: "pumps" },
    { name: "PPR Pipe & Fittings", slug: "ppr" },
    { name: "Solar Inverter Optimizer", slug: "inverter" },
    { name: "Alkaline Water Ionizer", slug: "piping-valves" },
  ];

  return (
    <section className="bg-[#eef2f5] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Product Categories Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden flex flex-col py-2.5">
            <div className="px-5 py-2 border-b border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Product Categories
              </span>
              <span className="text-[10px] bg-[#2a1768]/10 text-[#2a1768] font-bold px-2 py-0.5 rounded-full">
                {categories.length} Solutions
              </span>
            </div>

            <div className="flex flex-col flex-1 divide-y divide-neutral-50 justify-between">
              {categories.map((cat, idx) => (
                <Link
                  key={cat.name}
                  href="/#catalog"
                  onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
                  className={`flex items-center justify-between px-5 flex-1 text-xs sm:text-[13px] font-medium transition-colors duration-150 ${
                    idx === 0
                      ? "text-[#281b66] font-bold bg-neutral-50/80"
                      : "text-neutral-700 hover:text-[#281b66] hover:bg-neutral-50/60"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.active && <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />}
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
