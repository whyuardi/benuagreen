"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Droplets, Wind, Leaf, ArrowRight, Gauge, ShieldCheck, Zap } from "lucide-react";

export function TechnologyInsights() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"absorption" | "coolingtower" | "biomass" | "carbon">("absorption");

  const topics = [
    {
      id: "absorption",
      title: language === "id" ? "Cara Kerja Absorption Chiller" : "Absorption Chiller Working Principle",
      subtitle: language === "id" ? "Siklus Termal Tanpa Kompresor Listrik" : "Fluorocarbon-Free Thermal Cooling",
      icon: Flame,
    },
    {
      id: "coolingtower",
      title: language === "id" ? "Termodinamika Cooling Tower" : "Cooling Tower Thermodynamics",
      subtitle: language === "id" ? "Pembuangan Kalor Evaporatif" : "High-Efficiency Heat Rejection",
      icon: Wind,
    },
    {
      id: "biomass",
      title: language === "id" ? "Biomass Boiler & Waste Steam" : "Biomass Boiler & Waste Steam",
      subtitle: language === "id" ? "Pemanfaatan Energi Limbah Panas" : "Waste Steam to Clean Cooling",
      icon: Droplets,
    },
    {
      id: "carbon",
      title: language === "id" ? "Global Warming & Reduksi CO2" : "Global Warming & CO2 Reduction",
      subtitle: language === "id" ? "Dekarbonisasi & Green Building" : "Net-Zero & Green Standards",
      icon: Leaf,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 max-w-7xl mx-auto my-4" id="technology">
      
      {/* Top Header: Simple & Elegant */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-4 border-b border-neutral-100">
        <div>
          <span className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
            {language === "id" ? "REKAYASA TEKNIK & EFISIENSI TERMAL" : "THERMAL ENGINEERING & EFFICIENCY"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 leading-tight">
            {language === "id"
              ? "Prinsip Kerja Teknologi Pendingin & Energi"
              : "Working Principles: Cooling & Clean Energy Engineering"}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-light leading-relaxed">
          {language === "id"
            ? "Membahas secara mendalam siklus termal Absorption Chiller, sirkulasi Cooling Tower, pemulihan uap biomassa, serta reduksi emisi karbon."
            : "Deep-dive technical breakdown of Absorption Chiller cycles, cooling tower heat transfer, biomass steam recovery, and carbon mitigation."}
        </p>
      </div>

      {/* Tabs Navigation: Clean & Minimal */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isActive = activeTab === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id as any)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                  : "bg-white text-neutral-700 border-neutral-200/80 hover:border-neutral-300 hover:bg-neutral-50/50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isActive ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-700"}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold leading-snug mb-0.5">{topic.title}</h4>
                <p className={`text-[11px] font-light ${isActive ? "text-neutral-300" : "text-neutral-400"}`}>{topic.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Area: Clean Architectural White Card */}
      <AnimatePresence mode="wait">
        
        {/* TAB 1: Absorption Chiller */}
        {activeTab === "absorption" && (
          <motion.div
            key="absorption"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-neutral-50/60 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-700 bg-white border border-neutral-200 px-3 py-0.5 rounded-full inline-block">
                {language === "id" ? "Siklus Termal Lithium Bromide (LiBr - H2O)" : "Lithium Bromide (LiBr-H2O) Cycle"}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900">
                {language === "id"
                  ? "Bagaimana Absorption Chiller Menghasilkan Air Dingin (7°C) Tanpa Kompresor Listrik?"
                  : "How Absorption Chillers Produce 7°C Chilled Water Without Electric Compressors"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Absorption Chiller memanfaatkan uap panas buangan pabrik (waste steam), gas alam, atau air panas sebagai sumber energi utama. Air murni bertindak sebagai refrigeran alami (R718), sedangkan larutan garam Lithium Bromide (LiBr) bertindak sebagai penyerap dalam ruang bertekanan vakum absolut tinggi (6 mmHg)."
                  : "Absorption Chillers harness industrial waste steam, natural gas, or hot water as the primary driving force. Pure distilled water acts as an eco-friendly natural refrigerant (R718), while Lithium Bromide (LiBr) solution acts as the absorbent in a deep vacuum vessel (6 mmHg)."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "1. Evaporator (Penguapan Dingin 4°C)" : "1. Evaporation Stage (4°C)"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    {language === "id"
                      ? "Pada tekanan vakum 6 mmHg, air mendidih pada suhu 4°C dan menyerap panas laten dari sirkuit air dingin gedung (menghasilkan Chilled Water 7°C)."
                      : "Under 6 mmHg vacuum, refrigerant water boils at 4°C, absorbing latent heat from building chilled water to yield 7°C supply."}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "2. Absorber & Generator (Regenerasi LiBr)" : "2. Absorption & Regeneration Stage"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    {language === "id"
                      ? "Uap air diserap LiBr pekat di absorber. Larutan encer dipompa ke generator dan dipanaskan oleh steam boiler untuk memisahkan uap air kembali."
                      : "Vapor is absorbed by LiBr in the absorber. Diluted solution is pumped to the generator and heated by steam/gas to regenerate concentrated LiBr."}
                  </p>
                </div>
              </div>

              {/* Technical Data Highlights: Clean Minimalist Style */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-bold text-neutral-900 block">COP 1.45</span>
                  <span className="text-[10px] text-neutral-400">{language === "id" ? "Efisiensi Double-Effect" : "Double-Effect COP"}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-bold text-neutral-900 block">&gt; 90% Hemat</span>
                  <span className="text-[10px] text-neutral-400">{language === "id" ? "Daya Listrik Operasional" : "Power Draw Savings"}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-bold text-neutral-900 block">6 mmHg</span>
                  <span className="text-[10px] text-neutral-400">{language === "id" ? "Tekanan Vakum Absolut" : "Deep Vacuum Chamber"}</span>
                </div>
              </div>
            </div>

            {/* Visual Flow Schematic Card: Monochromatic & Elegant */}
            <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                  {language === "id" ? "Skematik Alur Siklus LiBr" : "LiBr Thermodynamic Flow"}
                </span>
                <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                  Zero Compressor
                </span>
              </div>

              {/* Flow Steps Diagram */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "1. Sumber Panas / Steam Masuk" : "1. Heat Source (Steam/Gas)"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Uap limbah boiler (0.4 - 0.8 MPa)" : "Waste steam from plant boilers"}</span>
                  </div>
                  <Flame className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "2. High-Pressure Generator" : "2. High-Pressure Generator"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Mendidihkan LiBr encer memisahkan uap" : "Separates refrigerant vapor from LiBr"}</span>
                  </div>
                  <Gauge className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "3. Kondensor & Evaporator (7°C)" : "3. Condenser & Evaporator (7°C)"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Keluaran air dingin dialirkan ke AHU/FCU" : "Supplies chilled water to facility"}</span>
                  </div>
                  <Droplets className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "4. Absorber & Pompa Larutan" : "4. Absorber & Solution Pump"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Hanya perlu daya pompa kecil (5-15 kW)" : "Only low-power solution pump draw"}</span>
                  </div>
                  <Zap className="w-4 h-4 text-neutral-600" />
                </div>
              </div>

              {/* Power Comparison Strip */}
              <div className="pt-2.5 border-t border-neutral-100 text-xs">
                <div className="flex justify-between items-center bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/80">
                  <span className="text-neutral-500">Chiller Listrik: ~650 kW</span>
                  <span className="text-neutral-300">|</span>
                  <span className="font-semibold text-neutral-900">Abs Chiller: ~12 kW</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Cooling Tower */}
        {activeTab === "coolingtower" && (
          <motion.div
            key="coolingtower"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-neutral-50/60 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-700 bg-white border border-neutral-200 px-3 py-0.5 rounded-full inline-block">
                {language === "id" ? "Termodinamika Kontak Langsung Air-Udara" : "Air-Water Direct Contact Thermodynamics"}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900">
                {language === "id"
                  ? "Sirkulasi Kalor Evaporatif & Pengendalian Suhu Wet-Bulb"
                  : "Evaporative Heat Rejection & Wet-Bulb Approach Control"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Cooling tower membuang kalor panas dari kondensor Chiller ke atmosfer melalui penguapan sebagian kecil air sirkulasi. Konstruksi FRP tahan korosi dan kisi pengisi PVC berprofil gelombang memaksimalkan bidang kontak antara air hangat (37°C) dan udara dingin ambien untuk menghasilkan air dingin kondenser (32°C)."
                  : "Cooling towers reject heat from chiller condensers by evaporating a minimal fraction of circulating water. Corrosion-resistant FRP casing and cross-fluted PVC film fill maximize contact surface between incoming hot water (37°C) and ambient air, delivering cooled water (32°C) back to chillers."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xl font-semibold text-neutral-900 block">3.0 - 4.0°C</span>
                  <span className="text-[10px] uppercase text-neutral-400 block mb-1">{language === "id" ? "Approach Suhu" : "Design Approach"}</span>
                  <p className="text-[11px] text-neutral-500 font-light">{language === "id" ? "Mendekati temperatur bola basah" : "Tight approach to ambient wet bulb"}</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xl font-semibold text-neutral-900 block">&lt; 0.005%</span>
                  <span className="text-[10px] uppercase text-neutral-400 block mb-1">{language === "id" ? "Drift Loss Rendah" : "Drift Loss Elimination"}</span>
                  <p className="text-[11px] text-neutral-500 font-light">{language === "id" ? "Eliminator selular mencegah air terbuang" : "PVC cellular drift eliminators"}</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xl font-semibold text-neutral-900 block">VFD / IE3</span>
                  <span className="text-[10px] uppercase text-neutral-400 block mb-1">{language === "id" ? "Motor Kipas Inverter" : "Inverter Fan Drive"}</span>
                  <p className="text-[11px] text-neutral-500 font-light">{language === "id" ? "Otomatis modulasi putaran sesuai cuaca" : "Modulates RPM to thermal load"}</p>
                </div>
              </div>
            </div>

            {/* Cooling Tower Visual Circuit */}
            <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                  {language === "id" ? "Sirkulasi Air Kondenser" : "Condenser Circuit Steps"}
                </span>
                <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                  Cross-Flow
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "1. Air Panas dari Chiller (37°C)" : "1. Hot Water Inflow (37°C)"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Membawa beban kalor kondensor gedung/pabrik" : "Carrying condenser rejection heat"}</span>
                  </div>
                  <Flame className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "2. Distribusi Gravitasi & Nozel" : "2. Gravity Distribution Basin"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Menyemprotkan air secara merata ke permukaan fill" : "Even dispersal across PVC packings"}</span>
                  </div>
                  <Droplets className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "3. Pertukaran Kalor Film Fill & Fan" : "3. Film Fill & Axial Exhaust Fan"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Udara ambien meniup menyerap panas laten" : "Induced airflow draws latent heat upwards"}</span>
                  </div>
                  <Wind className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "4. Basin Air Dingin (32°C Kembali ke Chiller)" : "4. Cold Basin Outflow (32°C Return)"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Air dingin bersih siap menyerap panas lagi" : "Cooled water re-circulates to chiller"}</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-neutral-600" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Biomass */}
        {activeTab === "biomass" && (
          <motion.div
            key="biomass"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-neutral-50/60 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-700 bg-white border border-neutral-200 px-3 py-0.5 rounded-full inline-block">
                {language === "id" ? "Konsep CCHP (Combined Cooling, Heating & Power)" : "Biomass Tri-Generation Model"}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900">
                {language === "id"
                  ? "Pemanfaatan Boiler Biomassa & Pemulihan Uap Panas (Waste Steam)"
                  : "Biomass Boiler Integration & Waste Heat Steam Recovery"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Pabrik kelapa sawit, pulp & paper, dan pengolahan kayu menghasilkan limbah organik padat (cangkang sawit, serbuk gergaji, tandan kosong). Membakar limbah ini pada boiler biomassa bertekanan tinggi menghasilkan uap berharga yang dapat dialirkan ke turbin generator listrik, lalu uap buangnya (exhaust steam) disalurkan ke Absorption Chiller untuk pendinginan ruangan atau proses."
                  : "Agricultural, palm oil, and pulp mills produce solid biomass waste. Combustion in high-pressure biomass boilers generates clean steam that first powers electric turbines, while downstream exhaust steam directly powers Absorption Chillers for plant air conditioning and process cooling."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "Bahan Bakar Nol Emisi Fosil" : "Zero Fossil Fuel Expense"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Menggantikan solar/batu bara dengan cangkang sawit dan sekam padi lokal."
                      : "Replaces diesel and coal with abundant local palm kernel shells and rice husks."}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "Efisiensi Termal > 85%" : "Thermal Efficiency > 85%"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Jauh melampaui PLTU konvensional yang hanya mencapai efisiensi ~35%."
                      : "Far exceeds conventional thermal power plants which operate around only 35%."}
                  </p>
                </div>
              </div>
            </div>

            {/* Biomass Cycle Visual */}
            <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                  {language === "id" ? "Alur Sirkular Biomassa" : "Circular Waste Flow"}
                </span>
                <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                  Tri-Generation
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "1. Limbah Biomassa Padat" : "1. Biomass Fuel Feed"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Cangkang sawit, sekam padi, serbuk kayu" : "Palm kernel shells, wood residue"}</span>
                  </div>
                  <Leaf className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "2. Biomass Boiler (Uap Tekanan Tinggi)" : "2. Biomass High-Pressure Boiler"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Menghasilkan steam superheated" : "Generates superheated steam"}</span>
                  </div>
                  <Flame className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="flex justify-center text-neutral-300">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                </div>

                <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-neutral-900 block">{language === "id" ? "3. Steam Absorption Chiller" : "3. Steam Absorption Chiller"}</span>
                    <span className="text-[11px] text-neutral-500">{language === "id" ? "Mengubah uap limbah menjadi Chilled Water 7°C" : "Converts exhaust steam into chilled water"}</span>
                  </div>
                  <Zap className="w-4 h-4 text-neutral-600" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: Carbon Mitigation */}
        {activeTab === "carbon" && (
          <motion.div
            key="carbon"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-neutral-50/60 rounded-2xl p-6 sm:p-8 border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-700 bg-white border border-neutral-200 px-3 py-0.5 rounded-full inline-block">
                {language === "id" ? "Mitigasi Pemanasan Global & ESG" : "Global Warming Mitigation & ESG"}
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900">
                {language === "id"
                  ? "Pengurangan Emisi Karbon CO2 & Kontribusi Menuju Net-Zero Indonesia"
                  : "Measurable CO2 Reductions & Indonesian Net-Zero Trajectory"}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {language === "id"
                  ? "Sistem HVAC komersial dan industri menyumbang hingga 40-50% dari total konsumsi energi fasilitas. Dengan mengganti chiller kompresor listrik berbahan bakar PLTU batu bara dengan Absorption Chiller berbasis limbah panas, perusahaan menghemat megawatt beban listrik dan langsung memangkas ribuan ton emisi gas CO2 setiap tahun."
                  : "Commercial and industrial HVAC consumes 40-50% of a facility's electrical load. Replacing coal-grid powered electric chillers with waste-heat absorption chillers saves megawatts of peak electricity and directly slashes thousands of metric tons of CO2 emissions annually."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "Zero Ozone Depletion (ODP = 0)" : "Zero Ozone Depletion (ODP = 0)"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Menggunakan air murni (H2O), bukan gas freon sintesis HCFC/HFC perusak lapisan ozon."
                      : "Uses pure distilled water (R718), eliminating synthetic HCFC/HFC fluorocarbons."}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200/80">
                  <span className="text-xs font-semibold text-neutral-900 block mb-1">
                    {language === "id" ? "Sertifikasi Green Building" : "Green Building Rating Points"}
                  </span>
                  <p className="text-[11px] text-neutral-500 font-light">
                    {language === "id"
                      ? "Memenuhi poin efisiensi energi untuk sertifikasi Greenship GBCI, LEED Platinum/Gold, dan BCA Green Mark."
                      : "Delivers maximum energy credits for Greenship GBCI, LEED Platinum/Gold, and BCA Green Mark."}
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metric & Rating Badges */}
            <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-neutral-200 shadow-xs space-y-4">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 block">
                {language === "id" ? "Dampak Nyata Dekarbonisasi" : "Measurable Decarbonization Impact"}
              </span>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <p className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
                  112,845,311+
                </p>
                <p className="text-xs text-neutral-600 font-medium mt-1">
                  {language === "id" ? "Pon Emisi CO2 Berhasil Dihindarkan" : "Pounds of CO2 Emissions Avoided"}
                </p>
                <p className="text-[11px] text-neutral-400 mt-2 font-light">
                  {language === "id"
                    ? "Setara dengan penanaman 1.800.000+ pohon atau penghentian ribuan ton pembakaran batu bara."
                    : "Equivalent to planting 1.8M+ trees or avoiding thousands of tons of coal combustion."}
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[10px] uppercase font-semibold text-neutral-400 block mb-2">
                  {language === "id" ? "Kepatuhan Regulasi & Standar" : "Standard Compliance"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-600 bg-neutral-50">
                    GBCI Greenship
                  </span>
                  <span className="px-2 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-600 bg-neutral-50">
                    USGBC LEED
                  </span>
                  <span className="px-2 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-600 bg-neutral-50">
                    BCA Green Mark
                  </span>
                  <span className="px-2 py-0.5 rounded border border-neutral-200 text-[10px] font-medium text-neutral-600 bg-neutral-50">
                    ISO 50001
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}
