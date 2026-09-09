"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Droplets, Wind, Leaf, Activity, ArrowUpRight, Check, Zap } from "lucide-react";

export function TechnologyInsights() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"absorption" | "coolingtower" | "biomass" | "carbon">("absorption");

  const topics = [
    {
      id: "absorption",
      title: language === "id" ? "Cara Kerja Absorption Chiller" : "Absorption Chiller Technology",
      subtitle: language === "id" ? "Pendingin Termal Bebas Freon Listrik" : "Fluorocarbon-Free Thermal Cooling",
      icon: Flame,
    },
    {
      id: "coolingtower",
      title: language === "id" ? "Termodinamika Cooling Tower" : "Cooling Tower Thermodynamics",
      subtitle: language === "id" ? "Evaporatif Efisiensi Tinggi" : "High-Efficiency Heat Rejection",
      icon: Wind,
    },
    {
      id: "biomass",
      title: language === "id" ? "Biomass Boiler & Heat Recovery" : "Biomass Boiler & Heat Recovery",
      subtitle: language === "id" ? "Pemanfaatan Energi Limbah Panas" : "Waste Steam to Clean Power",
      icon: Droplets,
    },
    {
      id: "carbon",
      title: language === "id" ? "Mitigasi Emisi CO2 & ESG" : "CO2 Mitigation & ESG Impact",
      subtitle: language === "id" ? "Standar Gedung Hijau Ramah Lingkungan" : "Net-Zero & Green Building",
      icon: Leaf,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto my-8" id="technology">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-100">
        <div>
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
            {language === "id" ? "Wawasan Rekayasa & Teknologi" : "Engineering & Technology Insights"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-900 leading-tight">
            {language === "id"
              ? "Prinsip Kerja & Efisiensi Energi Berkelanjutan"
              : "Working Principles & Sustainable Energy Efficiency"}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-light leading-relaxed">
          {language === "id"
            ? "Membahas secara mendalam cara kerja sistem termal Absorption Chiller, sirkulasi Cooling Tower, boiler biomassa, serta reduksi emisi gas rumah kaca."
            : "Deep-dive technical breakdown of thermal absorption chiller cycles, cooling tower heat exchange, biomass steam recovery, and greenhouse gas mitigation."}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isActive = activeTab === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-lg shadow-neutral-900/10"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-900"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold leading-snug mb-0.5">{topic.title}</h4>
                <p className={`text-[11px] font-light ${isActive ? "text-neutral-300" : "text-neutral-400"}`}>{topic.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Area */}
      <AnimatePresence mode="wait">
        
        {/* TAB 1: Absorption Chiller */}
        {activeTab === "absorption" && (
          <motion.div
            key="absorption"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                {language === "id" ? "Siklus Termodinamika Lithium Bromide" : "Lithium Bromide (LiBr-H2O) Cycle"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                {language === "id"
                  ? "Bagaimana Absorption Chiller Menghasilkan Air Dingin (7°C) Tanpa Kompresor Listrik?"
                  : "How Absorption Chillers Produce 7°C Chilled Water Without Electric Compressors"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Berbeda dengan chiller sentrifugal listrik konvensional, Absorption Chiller memanfaatkan energi termal (uap panas pabrik, gas alam, atau air panas buangan) sebagai sumber energi utama. Air murni berfungsi sebagai refrigeran (R718) dan larutan Lithium Bromide (LiBr) sebagai penyerap (absorbent) dalam kondisi vakum absolut (6 mmHg)."
                  : "Unlike conventional electric centrifugal chillers, Absorption Chillers utilize thermal energy (industrial waste steam, natural gas, or jacket water) as the primary driving force. Pure distilled water acts as refrigerant (R718) while non-toxic Lithium Bromide (LiBr) solution acts as the absorbent under deep vacuum (6 mmHg)."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="text-xs font-bold text-neutral-900 block mb-1">
                    {language === "id" ? "1. Evaporator (Penguapan Dingin)" : "1. Evaporation Stage"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Air menyemprot pada tekanan vakum 6 mmHg dan mendidih pada suhu 4°C, menyerap panas dari chilled water loop."
                      : "Refrigerant water boils at 4°C under high vacuum, drawing latent heat from the building's chilled water circuit."}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="text-xs font-bold text-neutral-900 block mb-1">
                    {language === "id" ? "2. Absorber & Generator (Regenerasi)" : "2. Absorption & Regeneration"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Uap diserap larutan LiBr pekat, kemudian dipanaskan oleh steam/gas di generator untuk memisahkan uap kembali."
                      : "Vapor is absorbed by concentrated LiBr, pumped to the generator, heated by steam/gas, and condensed back into liquid."}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-neutral-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {language === "id" ? "Keunggulan Kunci Absorption Chiller" : "Key Absorption Chiller Advantages"}
              </h4>

              <div className="space-y-3">
                {[
                  {
                    title: language === "id" ? "Penghematan Listrik > 90%" : "> 90% Electricity Load Reduction",
                    desc: language === "id" ? "Hanya memerlukan daya pompa kecil (5-15 kW) tanpa kompresor sentrifugal besar." : "Requires only small solution pumps without heavy megawatt compressor draws."
                  },
                  {
                    title: language === "id" ? "Ramah Lingkungan (Zero ODP)" : "Zero Ozone Depletion Potential (ODP 0)",
                    desc: language === "id" ? "Bebas dari freon sintetis HCFC/HFC yang berpotensi merusak ozon." : "Operates with 100% natural distilled water refrigerant with zero global warming chemicals."
                  },
                  {
                    title: language === "id" ? "Tingkat Kebisingan Sangat Rendah" : "Ultra-Low Noise & Vibration",
                    desc: language === "id" ? "Tidak ada getaran mekanis berat, memperpanjang usia pakai unit hingga > 25 tahun." : "Smooth vibration-free operation ensuring long equipment service life > 25 years."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900">{item.title}</p>
                      <p className="text-[11px] text-neutral-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Cooling Tower */}
        {activeTab === "coolingtower" && (
          <motion.div
            key="coolingtower"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                {language === "id" ? "Pembuangan Panas Evaporatif" : "Evaporative Heat Rejection Dynamics"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                {language === "id"
                  ? "Optimalisasi Sirkulasi Cooling Tower & Pengendalian Suhu Wet Bulb"
                  : "Cooling Tower Closed-Circuit Optimization & Wet Bulb Approach"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Cooling tower berfungsi membuang kalor panas dari kondensor Chiller ke atmosfer melalui kontak langsung antara air sirkulasi dan aliran udara ambien. Desain Cross-Flow & Counter-Flow berteknologi FRP tahan korosi memastikan suhu air kondenser tetap stabil (± 32°C masuk, 28°C keluar) bahkan di iklim tropis berkelembapan tinggi."
                  : "Cooling towers reject heat from chiller condensers to the atmosphere via optimized air-water direct contact. Advanced FRP corrosion-proof cross-flow and counter-flow architectures maintain reliable water delivery temperatures even in tropical high-humidity climates."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="text-lg font-bold text-neutral-900 block">3 - 4°C</span>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">{language === "id" ? "Approach Suhu" : "Design Approach"}</span>
                  <p className="text-[10px] text-neutral-500 font-light">{language === "id" ? "Mendekati temperatur bola basah (Wet-bulb)" : "Tight approach to ambient wet bulb"}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="text-lg font-bold text-neutral-900 block">&lt; 0.005%</span>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">{language === "id" ? "Drift Loss Rendah" : "Drift Loss Elimination"}</span>
                  <p className="text-[10px] text-neutral-500 font-light">{language === "id" ? "Eliminator PVC mencegah semprotan air terbuang" : "PVC cellular drift eliminators"}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="text-lg font-bold text-neutral-900 block">IE3 / VFD</span>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">{language === "id" ? "Motor Kipas Hemat Listrik" : "Variable Speed Fans"}</span>
                  <p className="text-[10px] text-neutral-500 font-light">{language === "id" ? "Otomatis modulasi kecepatan sesuai beban termal" : "Modulates speed to match cooling load"}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-neutral-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {language === "id" ? "Penerapan Industri" : "Industrial Applications"}
              </h4>
              <p className="text-xs text-neutral-600 font-light">
                {language === "id"
                  ? "Dipasangkan secara terintegrasi pada sistem Chiller Mall of Indonesia, Central Park, serta sistem pendingin proses pabrik Indorama dan Indah Kiat."
                  : "Integrated across major chiller facilities including Mall of Indonesia, Central Park Mall, and manufacturing plants at Indorama and Indah Kiat."}
              </p>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Biomass */}
        {activeTab === "biomass" && (
          <motion.div
            key="biomass"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                {language === "id" ? "Sirkularitas Energi Panas" : "Circular Thermal Energy"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                {language === "id"
                  ? "Pemanfaatan Biomassa & Pemulihan Uap Panas (Heat Recovery)"
                  : "Biomass Steam Generation & Thermal Energy Recovery"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Sektor industri pulp & paper, perkebunan kelapa sawit, dan pengolahan kayu menghasilkan limbah padat biomassa (cangkang sawit, serbuk kayu, sekam padi). Dengan mengintegrasikan boiler biomassa bersama sistem steam trap berefisiensi tinggi dan Absorption Chiller, energi uap dapat digunakan kembali untuk proses pengeringan maupun pendinginan gedung tanpa biaya bahan bakar fosil."
                  : "Agricultural and pulp processing produces renewable biomass waste (palm kernel shells, wood residue, rice husks). Integrating biomass boilers with high-enthalpy steam traps and Absorption Chillers turns waste heat into chilled water without fossil fuel expenses."}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-neutral-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {language === "id" ? "Kombinasi CCHP (Tri-Generation)" : "CCHP Tri-Generation Model"}
              </h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Combined Cooling, Heating, and Power (CCHP) memberikan efisiensi termal total hingga 85%, jauh melampaui pembangkit listrik konvensional yang hanya 35%."
                  : "Tri-Generation achieves combined thermal-electrical efficiencies up to 85%, dramatically outperforming conventional 35% grid power."}
              </p>
            </div>
          </motion.div>
        )}

        {/* TAB 4: Carbon Mitigation */}
        {activeTab === "carbon" && (
          <motion.div
            key="carbon"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                {language === "id" ? "ESG & Sertifikasi Gedung Hijau" : "ESG & Green Building Standards"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                {language === "id"
                  ? "Pengurangan Emisi Karbon CO2 & Kontribusi Net-Zero Indonesia"
                  : "Measurable CO2 Emissions Reduction & Net-Zero Trajectory"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Setiap instalasi pompa tenaga surya, chiller pemulih panas, dan sistem pipa hidrolik efisiensi tinggi Benua Green Energy telah berkontribusi menghindarkan lebih dari 112 juta pon emisi gas CO2 ke atmosfer. Solusi kami memenuhi kriteria penilaian Greenship GBCI, LEED Gold/Platinum, dan Green Mark."
                  : "Every solar pump installation, waste-heat absorption chiller, and high-efficiency hydraulic pipe loop deployed by Benua Green Energy has contributed to avoiding over 112M+ lbs of CO2 emissions. Solutions comply with Greenship GBCI, LEED, and Green Mark ratings."}
              </p>
            </div>

            <div className="lg:col-span-5 bg-neutral-900 text-white rounded-2xl p-6 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block">
                {language === "id" ? "Metrik Dampak Kumulatif" : "Cumulative Environmental Metric"}
              </span>
              <p className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                112,845,311+ <span className="text-sm font-normal text-emerald-400">lbs CO2</span>
              </p>
              <p className="text-xs text-neutral-400 font-light">
                {language === "id" ? "Emisi karbon yang berhasil dihindarkan sejak 2009 melalui efisiensi termal dan energi surya." : "Carbon emissions avoided since 2009 through solar pumping & thermal recovery."}
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}
