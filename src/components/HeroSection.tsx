"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onSelectCategory?: (category: string) => void;
}

export function HeroSection({ onSelectCategory }: HeroSectionProps) {
  const categories = [
    { name: "Chiller / HVAC", active: true, slug: "chillers" },
    { name: "Cooling Tower", slug: "cooling-air" },
    { name: "Steam Accessories", slug: "heating-power" },
    { name: "Solar Panel", slug: "solar-drives" },
    { name: "BMS", slug: "starters-and-controllers" },
    { name: "Green Solution", slug: "cooling-air" },
    { name: "High Efficiency Pump", slug: "pumps" },
    { name: "PPR Pipe & Fittings", slug: "ppr" },
    { name: "Solar Inverter Optimizer", slug: "inverter" },
    { name: "Alkaline Water Ionizer", slug: "piping-valves" },
  ];

  return (
    <section className="bg-[#eef2f5] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: 10 Product Categories Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden flex flex-col justify-between py-2">
            {categories.map((cat, idx) => (
              <Link
                key={cat.name}
                href="/#catalog"
                onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
                className={`flex items-center justify-between px-5 py-2.5 text-xs sm:text-[13px] font-medium transition-colors duration-150 ${
                  idx === 0
                    ? "text-[#281b66] font-semibold bg-neutral-50/70"
                    : "text-neutral-700 hover:text-[#281b66] hover:bg-neutral-50/80"
                }`}
              >
                <span>{cat.name}</span>
                {cat.active && <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />}
              </Link>
            ))}
          </div>

          {/* Right Column: Hero Banner Image Card */}
          <div className="lg:col-span-9 relative min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-center items-center text-center p-6 sm:p-12">
            {/* Background Image: Industrial steam power plant */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/benua/iStock-1369464704-1.jpg"
                alt="Connecting The Green Energy Future"
                fill
                priority
                className="object-cover"
              />
              {/* Subtle dark gradient overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-900/30 to-neutral-900/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-white">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                Connecting The Green Energy Future
              </h1>
              <p className="text-xs sm:text-base text-neutral-100/90 font-light mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
                At Benua Green Energy, we provide a full spectrum of services, ensuring your energy needs are met efficiently and sustainably.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#services"
                  className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#2a1768] hover:bg-[#38208a] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Explore Services
                </Link>
                <Link
                  href="/#catalog"
                  className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-transparent border border-white/80 hover:bg-white/15 transition-all duration-200"
                >
                  Explore Products
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
