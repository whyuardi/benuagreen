"use client";

import { useLanguage } from "@/lib/i18n";
import { Building2, Factory, Flame, Sparkles } from "lucide-react";

export function ClientLogoMarquee() {
  const { language } = useLanguage();

  const clients = [
    {
      name: "PT Indorama Polychem Indonesia",
      group: "Indorama Corporation",
      sector: language === "id" ? "Petrokimia & Tekstil" : "Petrochemicals & Polyester",
      location: "Purwakarta, Jawa Barat",
      highlight: "1,200 TR Steam Chiller",
    },
    {
      name: "PT Indah Kiat Pulp & Paper Tbk",
      group: "APP Sinar Mas",
      sector: language === "id" ? "Industri Pulp & Kertas" : "Pulp & Paper Manufacturing",
      location: "Perawang, Riau",
      highlight: "2,400 TR Biomass Steam Chiller",
    },
    {
      name: "PT Riau Andalan Pulp & Paper",
      group: "APRIL Group",
      sector: language === "id" ? "Serat Selulosa & Kertas" : "Cellulose & Paper Mill",
      location: "Pangkalan Kerinci, Riau",
      highlight: "Industrial Cooling & 450 kW Pumps",
    },
    {
      name: "PT Garudafood Putra Putri Jaya Tbk",
      group: "Garudafood Group",
      sector: language === "id" ? "Makanan & Minuman" : "Food & Beverage Processing",
      location: "Gresik, Jawa Timur",
      highlight: "Cleanroom AHU & Glycol Chiller",
    },
    {
      name: "Mall of Indonesia (MOI)",
      group: "Agung Sedayu Group",
      sector: language === "id" ? "Pusat Perbelanjaan & Komersial" : "Mega Commercial & Mall",
      location: "Kelapa Gading, Jakarta",
      highlight: "1,800 TR Chiller & PPR-CT Piping",
    },
    {
      name: "Central Park Mall",
      group: "Agung Podomoro Land",
      sector: language === "id" ? "Superblock & Retail" : "Retail & Commercial Hub",
      location: "Grogol, Jakarta Barat",
      highlight: "Cooling Towers & Dynamic PICV",
    },
  ];

  return (
    <section className="border-b border-neutral-200/80 bg-neutral-50/70 py-10 sm:py-12 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-200/60 gap-3">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-emerald-700 uppercase mb-1 block">
              {language === "id" ? "REFERENSI KLIEN & KREDIBILITAS" : "CLIENT REFERENCES & TRUST"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              {language === "id"
                ? "Dipercaya oleh Korporasi & Konglomerasi Terbesar di Indonesia"
                : "Trusted by Indonesia's Foremost Industrial & Commercial Leaders"}
            </h2>
          </div>
          <p className="text-xs text-neutral-500 max-w-sm font-normal sm:text-right">
            {language === "id"
              ? "Instalasi sistem pendingin uap dan rekayasa energi pada fasilitas beroperasi 24/7."
              : "Mission-critical HVAC & energy engineering operating 24/7 across premier facilities."}
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group relative p-4 rounded-xl bg-white border border-neutral-200/90 hover:border-neutral-900 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono font-semibold text-neutral-400 group-hover:text-emerald-700 transition-colors">
                    {client.group}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-emerald-500 transition-colors" />
                </div>
                <h3 className="font-bold text-xs text-neutral-900 leading-tight mb-1.5 line-clamp-2">
                  {client.name}
                </h3>
                <p className="text-[11px] text-neutral-500 line-clamp-1 mb-2">
                  {client.sector}
                </p>
              </div>

              <div className="pt-2.5 border-t border-neutral-100 mt-2">
                <span className="inline-block text-[10px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {client.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Footnote */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Factory className="w-3.5 h-3.5 text-neutral-400" />
            Pulp & Paper Mill
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-neutral-400" />
            Petrochemical & Chemical
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            Food & Beverage
          </span>
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-neutral-400" />
            Commercial & Mixed-Use Superblock
          </span>
        </div>

      </div>
    </section>
  );
}
