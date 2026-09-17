"use client";

import { Zap, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function CO2ImpactBanner() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#eef2f5] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated CO2 Impact Card - Separated & Positioned Down */}
        <div className="relative bg-[#2a1768] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Decorative Rings */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

          {/* Left Column: Icon & Headline */}
          <div className="flex items-center gap-5 text-center md:text-left z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/70 flex items-center justify-center shrink-0 bg-white/10 shadow-inner">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#43b02a] uppercase block mb-1">
                {language === "id"
                  ? "Dampak Lingkungan & Keberlanjutan"
                  : "Environmental & Sustainability Impact"}
              </span>
              <p className="text-base sm:text-xl text-neutral-100 font-medium leading-snug">
                {language === "id"
                  ? "Sejak 2009, pelanggan kami telah mereduksi emisi"
                  : "Since 2009, our customers have avoided"}
              </p>
            </div>
          </div>

          {/* Right Column: Giant CO2 Metric */}
          <div className="text-center md:text-right z-10">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-1.5 drop-shadow-sm">
              112,845,311+
            </div>
            <p className="text-sm sm:text-base font-semibold text-neutral-200 uppercase tracking-wider flex items-center justify-center md:justify-end gap-2">
              <Leaf className="w-4 h-4 text-[#43b02a]" />
              <span>{language === "id" ? "pon emisi CO2." : "pounds of CO2."}</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
