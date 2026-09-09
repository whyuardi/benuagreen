"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Award, Zap, ShieldCheck, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HeroBanner() {
  const { language, t } = useLanguage();

  return (
    <section className="relative mt-[4rem] pt-16 pb-14 sm:pt-24 sm:pb-20 px-6 sm:px-8 border-b border-neutral-200/80 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white overflow-hidden">
      
      {/* Background Subtle Industrial Tech Grid Effect */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Engineering Authority Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {language === "id"
              ? "Sistem Pendingin & Energi Industri Berkelanjutan"
              : "Industrial Cooling & Sustainable Clean Energy"}
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
        >
          {language === "id" ? (
            <>
              Rekayasa Pendingin Industri & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Solusi Efisiensi Energi Bersih
              </span>
            </>
          ) : (
            <>
              Industrial Cooling Engineering & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Clean Energy Efficiency Solutions
              </span>
            </>
          )}
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-10 font-normal"
        >
          {language === "id"
            ? "Penyedia terintegrasi sistem Absorption Chiller berbasis limbah uap/panas, Cooling Tower industri, sistem perpipaan PPR-CT, balancing valve, dan pompa efisiensi tinggi untuk manufaktur, pulp & paper, petrokimia, serta gedung komersial."
            : "Integrated solutions provider for waste steam/heat Absorption Chillers, industrial Cooling Towers, PPR-CT piping systems, balancing valves, and high-efficiency pumps for manufacturing, pulp & paper, petrochemicals, and commercial facilities."}
        </motion.p>

        {/* Dual Corporate B2B CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3.5 mb-14 w-full sm:w-auto"
        >
          <a
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 transition-all duration-200 shadow-lg shadow-black/20"
          >
            <span>{language === "id" ? "Jelajahi Produk & Solusi" : "Explore Products & Systems"}</span>
            <ChevronDown className="w-4 h-4 text-neutral-600" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/50 transition-all duration-200 shadow-lg shadow-emerald-950/30"
          >
            <span>{language === "id" ? "Konsultasi Proyek Teknik" : "Project Engineering Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Authority / Key Metrics Bar (Johnson Controls & Hitachi Aircon Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">15+ Thn</span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              {language === "id" ? "Pengalaman Rekayasa Industri" : "Industrial Engineering Experience"}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">1,200+ TR</span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              {language === "id" ? "Kapasitas Terpasang Per Unit" : "Installed Capacity Per System"}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Leaf className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">112M+ lbs</span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              {language === "id" ? "Pengurangan Emisi CO2" : "CO2 Emissions Mitigated"}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">Zero ODP</span>
            </div>
            <p className="text-xs text-neutral-400 font-normal">
              {language === "id" ? "Refrigerant Alami (H2O)" : "Natural Eco Refrigerant (H2O)"}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
