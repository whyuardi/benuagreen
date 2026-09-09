"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HeroBanner() {
  const { language } = useLanguage();

  return (
    <section className="relative mt-[4rem] pt-16 pb-14 sm:pt-24 sm:pb-20 px-6 sm:px-8 border-b border-neutral-100 bg-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-600 text-[11px] font-medium tracking-wider uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
          <span>
            {language === "id"
              ? "Sistem Pendingin & Efisiensi Energi Industri"
              : "Industrial Cooling & Clean Energy Engineering"}
          </span>
        </motion.div>

        {/* Hero Title: Clean, Monochromatic, Elegant */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 mb-6 leading-[1.15]"
        >
          {language === "id" ? (
            <>
              Rekayasa Pendingin Industri & <br className="hidden sm:inline" />
              <span className="font-serif italic text-neutral-800">
                Solusi Efisiensi Energi Bersih.
              </span>
            </>
          ) : (
            <>
              Industrial Cooling Engineering & <br className="hidden sm:inline" />
              <span className="font-serif italic text-neutral-800">
                Sustainable Clean Energy Systems.
              </span>
            </>
          )}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-500 text-sm sm:text-base max-w-2xl leading-relaxed mb-10 font-light"
        >
          {language === "id"
            ? "Penyedia terintegrasi sistem Absorption Chiller berbasis limbah panas uap, Cooling Tower industri, sistem perpipaan PPR-CT higienis, dan pompa efisiensi tinggi untuk manufaktur, pabrik kertas, petrokimia, serta gedung komersial."
            : "Integrated solutions provider for waste steam/heat Absorption Chillers, industrial Cooling Towers, PPR-CT piping systems, and high-efficiency pumps for manufacturing, pulp & paper, petrochemicals, and commercial facilities."}
        </motion.p>

        {/* Dual Simple & Elegant B2B CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-14 w-full sm:w-auto"
        >
          <a
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 shadow-sm"
          >
            <span>{language === "id" ? "Jelajahi Produk & Solusi" : "Explore Products & Systems"}</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-300 hover:border-neutral-900 transition-all duration-200"
          >
            <span>{language === "id" ? "Konsultasi Proyek Teknik" : "Project Engineering Consultation"}</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </Link>
        </motion.div>

        {/* Authority / Key Metrics Bar: Simple, Clean Bordered Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-neutral-100"
        >
          <div className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70 text-left">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 block mb-0.5">15+ Thn</span>
            <p className="text-[11px] text-neutral-500 font-normal">
              {language === "id" ? "Pengalaman Rekayasa Industri" : "Engineering Experience"}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70 text-left">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 block mb-0.5">1,200+ TR</span>
            <p className="text-[11px] text-neutral-500 font-normal">
              {language === "id" ? "Kapasitas Unit Terpasang" : "Installed Capacity Per Unit"}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70 text-left">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 block mb-0.5">112M+ lbs</span>
            <p className="text-[11px] text-neutral-500 font-normal">
              {language === "id" ? "Pengurangan Emisi CO2" : "CO2 Emissions Mitigated"}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/70 text-left">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 block mb-0.5">Zero ODP</span>
            <p className="text-[11px] text-neutral-500 font-normal">
              {language === "id" ? "Refrigerant Alami (H2O)" : "Natural Eco Refrigerant"}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
