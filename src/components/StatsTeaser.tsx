"use client";

import Link from "next/link";
import { Briefcase, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function StatsTeaser() {
  const { language } = useLanguage();

  const cards = [
    {
      step: "01",
      tag: "ENGINEERING & CCHP",
      title: language === "id" ? "Layanan" : "Services",
      description: language === "id"
        ? "Solusi engineering CCHP komprehensif meliputi konsultasi, desain, instalasi turnkey, dan komisioning untuk aplikasi industri berat."
        : "Comprehensive CCHP solutions engineering consulting, design, turnkey installation, and expert commissioning services tailored for heavy industrial applications.",
      icon: Briefcase,
      iconColor: "text-[#2a1768]",
      bgColor: "bg-[#2a1768]/8",
      borderColor: "group-hover:border-[#2a1768]/40",
      href: "/#services",
    },
    {
      step: "02",
      tag: language === "id" ? "INTEGRITAS OPERASIONAL" : "OPERATIONAL INTEGRITY",
      title: language === "id" ? "Perawatan" : "Maintenance",
      description: language === "id"
        ? "Program perawatan preventif dan korektif untuk memastikan performa termodinamis optimal, keandalan operasional maksimal, dan masa pakai peralatan yang lebih panjang."
        : "Preventive and corrective maintenance programs ensuring optimal thermodynamic performance, maximum operational reliability, and extended equipment longevity.",
      icon: Wrench,
      iconColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-400/40",
      href: "/#services",
    },
    {
      step: "03",
      tag: language === "id" ? "AUTOMASI CERDAS" : "SMART AUTOMATION",
      title: "EMS",
      description: language === "id"
        ? "Sistem manajemen energi canggih untuk monitoring, optimalisasi, dan kontrol digital peralatan CCHP dengan analitik real-time dan diagnostik prediktif."
        : "Advanced energy management systems monitoring, optimizing, and digitally controlling CCHP equipment performance with real-time analytics and predictive diagnostics.",
      icon: ShieldCheck,
      iconColor: "text-sky-700",
      bgColor: "bg-sky-50",
      borderColor: "group-hover:border-sky-400/40",
      href: "/#services",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f4f7fa] to-[#eef2f5] pb-12 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between text-left shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_-8px_rgba(42,23,104,0.12)] border border-neutral-200/80 ${card.borderColor} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div>
                  {/* Top Bar: Step & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${card.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-inner`}>
                      <Icon className={`w-7 h-7 ${card.iconColor} stroke-[1.8]`} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-neutral-300 tracking-wider">
                      {card.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                    {card.tag}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-[#1d1841] mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-8 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1d1841] group-hover:text-[#2a1768] transition-colors"
                  >
                    <span>{language === "id" ? "Pelajari lebih lanjut" : "Learn more"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-[#2a1768] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
