"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { calculateWizardRecommendation, WizardInputs, RentalUnit } from "@/lib/rental";
import { Compass, Waves, Gauge, SunMedium, ArrowRight, ArrowLeft, Check, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RentalBookingModal } from "@/components/RentalBookingModal";

export function UnitSelectionWizard() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedUnitForBooking, setSelectedUnitForBooking] = useState<RentalUnit | null>(null);

  const [inputs, setInputs] = useState<WizardInputs>({
    waterSource: "deepwell",
    depthMeters: 60,
    flowRequirement: "medium",
    powerSource: "solar",
  });

  const recommendation = calculateWizardRecommendation(inputs);

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase inline-flex items-center gap-1.5 mb-3">
            <Compass className="w-3.5 h-3.5 text-neutral-900" />
            <span>{t("wizard.badge")}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-900 mb-3">
            {t("wizard.title")}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
            {t("wizard.subtitle")}
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-10 shadow-sm">
          
          {/* Step Progress Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 pb-6 border-b border-neutral-200/70">
            {[
              { num: 1, label: t("wizard.step1") },
              { num: 2, label: t("wizard.step2") },
              { num: 3, label: t("wizard.step3") },
            ].map((step) => {
              const isActive = currentStep === step.num;
              const isCompleted = currentStep > step.num;
              return (
                <button
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className={`text-left p-2 sm:p-3 rounded-2xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-white shadow-sm border border-neutral-200"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                        isCompleted
                          ? "bg-emerald-600 text-white"
                          : isActive
                          ? "bg-neutral-900 text-white"
                          : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {isCompleted ? <Check className="w-3 h-3" /> : step.num}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-900 hidden sm:inline">
                      Langkah {step.num}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium truncate">
                    {step.label.split(".")[1] || step.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Wizard Step Body */}
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                    <Waves className="w-4 h-4 text-neutral-700" />
                    <span>Pilih Sumber Air Utama:</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Tentukan titik intake atau jenis sumber air yang akan dipompa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "deepwell", label: t("wizard.sourceDeepwell"), desc: "Sumur bor dalam, casing 4-8 inch" },
                    { id: "river-lake", label: t("wizard.sourceRiver"), desc: "Pengambilan permukaan / intake terbuka" },
                    { id: "groundtank", label: t("wizard.sourceTank"), desc: "Bak penampung / booster transfer" },
                  ].map((src) => {
                    const isSelected = inputs.waterSource === src.id;
                    return (
                      <div
                        key={src.id}
                        onClick={() => setInputs({ ...inputs, waterSource: src.id as any })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-white border-neutral-900 shadow-sm"
                            : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-neutral-900">{src.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300"}`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-neutral-500 font-light">{src.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {inputs.waterSource === "deepwell" && (
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-3 mt-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-neutral-800">
                        {t("wizard.depthLabel")}
                      </label>
                      <span className="text-sm font-bold text-neutral-900 px-3 py-1 bg-neutral-100 rounded-full">
                        {inputs.depthMeters} Meter
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={180}
                      step={5}
                      value={inputs.depthMeters}
                      onChange={(e) => setInputs({ ...inputs, depthMeters: Number(e.target.value) })}
                      className="w-full accent-neutral-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 font-medium">
                      <span>10m (Dangkal)</span>
                      <span>60m (Standar)</span>
                      <span>120m (Dalam)</span>
                      <span>180m (Sangat Dalam)</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-neutral-700" />
                    <span>Tentukan Kebutuhan Volume / Debit Air:</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Kapasitas aliran air yang dibutuhkan per jam untuk aplikasi Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "low", title: "Kecil (5 - 15 m³/jam)", desc: "Kebun holtikultura, perumahan, peternakan kecil" },
                    { id: "medium", title: "Menengah (15 - 35 m³/jam)", desc: "Irigasi kebun sawit/jagung, suplai proyek konstruksi" },
                    { id: "high", title: "Besar (35 - 70 m³/jam)", desc: "Dewatering galian, pengurasan tambang, intake perkebunan luas" },
                    { id: "commercial", title: "Komersial (50 - 100+ m³/jam)", desc: "Pabrik, kawasan industri, PDAM & municipal water" },
                  ].map((fl) => {
                    const isSelected = inputs.flowRequirement === fl.id;
                    return (
                      <div
                        key={fl.id}
                        onClick={() => setInputs({ ...inputs, flowRequirement: fl.id as any })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between ${
                          isSelected
                            ? "bg-white border-neutral-900 shadow-sm"
                            : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <div className="pr-2">
                          <p className="text-xs font-bold text-neutral-900 mb-1">{fl.title}</p>
                          <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{fl.desc}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${isSelected ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300"}`}>
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                    <SunMedium className="w-4 h-4 text-neutral-700" />
                    <span>Pilih Sumber Energi Penggerak:</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Metode pasokan daya yang tersedia di lokasi proyek Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "solar", title: "100% Tenaga Surya (Solar PV)", desc: "Tanpa biaya BBM/listrik, off-grid mandiri 100%" },
                    { id: "hybrid", title: "Hybrid (Solar + PLN/Genset)", desc: "Siang tenaga surya, malam beralih otomatis ke PLN/Genset" },
                    { id: "grid", title: "Listrik PLN 3-Phase / Genset", desc: "Tegangan industri 380V konvensional" },
                  ].map((pw) => {
                    const isSelected = inputs.powerSource === pw.id;
                    return (
                      <div
                        key={pw.id}
                        onClick={() => setInputs({ ...inputs, powerSource: pw.id as any })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-white border-neutral-900 shadow-sm"
                            : "bg-white/60 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-neutral-900">{pw.title}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300"}`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-neutral-500 font-light">{pw.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Step Buttons */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-neutral-200/80">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t("wizard.prevStep")}</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <span>{t("wizard.nextStep")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                <Check className="w-4 h-4" />
                Kalkulasi Selesai
              </span>
            )}
          </div>

        </div>

        {/* Live Recommendation Result Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-neutral-900" />
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              {t("wizard.calcResult")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                {t("wizard.estHead")}
              </span>
              <p className="text-2xl font-bold text-neutral-900">
                ± {recommendation.recommendedHead} <span className="text-sm font-normal text-neutral-500">Meter</span>
              </p>
              <p className="text-[10px] text-neutral-400 mt-1">Termasuk friksi pipa & tekanan kerja</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                {t("wizard.estPower")}
              </span>
              <p className="text-2xl font-bold text-neutral-900">
                {recommendation.estimatedKw} <span className="text-sm font-normal text-neutral-500">kW</span>
                <span className="text-xs text-neutral-400 font-normal ml-1">({Math.round(recommendation.estimatedKw * 1.34)} HP)</span>
              </p>
              <p className="text-[10px] text-neutral-400 mt-1">Daya motor pompa minimal</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                Sistem Penggerak
              </span>
              <p className="text-sm font-bold text-neutral-900 mt-1">
                {inputs.powerSource === "solar" ? "Solar MPPT Inverter IP65" : inputs.powerSource === "hybrid" ? "Hybrid Auto-Switching VFD" : "Direct On-Line / Soft Starter"}
              </p>
              <p className="text-[10px] text-neutral-400 mt-1">100% Proteksi Overload & Dry-Run</p>
            </div>
          </div>

          {/* Matched Rental Units */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 mb-4">
              {t("wizard.matchedUnits")}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendation.recommendedUnits.map((unit) => (
                <div
                  key={unit.id}
                  className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 flex items-center justify-between gap-4"
                >
                  <div className="relative w-16 h-16 bg-white rounded-xl shrink-0 p-1 border border-neutral-100">
                    <Image
                      src={unit.image}
                      alt={unit.name}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 pr-2">
                    <span className="text-[9px] uppercase font-bold text-neutral-400 block">
                      {unit.categoryName}
                    </span>
                    <h5 className="text-xs font-bold text-neutral-900 leading-snug">
                      {unit.name}
                    </h5>
                    <p className="text-[11px] text-neutral-500 mt-0.5 font-light">
                      {unit.flowRate} • Head {unit.headMax}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedUnitForBooking(unit)}
                    className="px-3.5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium shrink-0 transition-colors cursor-pointer"
                  >
                    {t("wizard.rentNow")}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>

      {/* Booking Modal */}
      <RentalBookingModal
        unit={selectedUnitForBooking}
        isOpen={Boolean(selectedUnitForBooking)}
        onClose={() => setSelectedUnitForBooking(null)}
      />
    </section>
  );
}
