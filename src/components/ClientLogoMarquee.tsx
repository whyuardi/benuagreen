"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function ClientLogoMarquee() {
  const { language } = useLanguage();

  const clients = [
    {
      name: "PT. Indorama Polychem Indonesia",
      group: "Indorama Corporation",
      logo: "/images/clients/indorama.svg",
      heightClass: "h-8 sm:h-9",
    },
    {
      name: "PT. Indah Kiat Pulp & Paper Tbk",
      group: "APP Sinar Mas",
      logo: "/images/clients/app-sinarmas.svg",
      heightClass: "h-9 sm:h-10",
    },
    {
      name: "PT. Riau Andalan Pulp & Paper",
      group: "APRIL Group",
      logo: "/images/clients/april.png",
      heightClass: "h-8 sm:h-9",
    },
    {
      name: "PT. Garudafood Putra Putri Jaya Tbk",
      group: "Garudafood Group",
      logo: "/images/clients/garudafood.png",
      heightClass: "h-8 sm:h-9",
    },
    {
      name: "Mall of Indonesia (MOI)",
      group: "Agung Sedayu Group",
      logo: "/images/clients/moi.png",
      heightClass: "h-9 sm:h-10",
    },
    {
      name: "Central Park Mall",
      group: "Agung Podomoro Land",
      logo: "/images/clients/agung-podomoro.svg",
      heightClass: "h-8 sm:h-9",
    },
  ];

  return (
    <section className="border-b border-neutral-100 bg-white py-12 sm:py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle Elegant Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            {language === "id" ? "KLIEN & REFERENSI PROYEK" : "CLIENTS & PROJECT REFERENCES"}
          </p>
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
            {language === "id"
              ? "Dipercaya oleh Konglomerasi Industri & Properti Nasional"
              : "Trusted by Indonesia's Foremost Industrial & Commercial Groups"}
          </h2>
        </div>

        {/* Client Logos Grid: Official Logos from Internet */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border border-neutral-200/70 hover:border-neutral-900 bg-white hover:shadow-sm transition-all duration-300 group h-32"
            >
              <div className="relative w-full flex items-center justify-center flex-1">
                {/* Official Logo Image with grayscale effect that subtly transitions to color on hover */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.heightClass} w-auto max-w-[130px] object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] text-neutral-400 font-medium group-hover:text-neutral-700 transition-colors text-center line-clamp-1 mt-2">
                {client.group}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
