"use client";

import { useState, useMemo } from "react";
import { RENTAL_UNITS, RentalUnit, RentalCategory } from "@/lib/rental";
import { useLanguage } from "@/lib/i18n";
import { Search, MapPin, Calendar, Clock, CheckCircle2, ArrowRight, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RentalBookingModal } from "@/components/RentalBookingModal";
import { SafeProductImage } from "@/components/SafeProductImage";

interface AvailabilityCheckerProps {
  embedded?: boolean;
}

export function AvailabilityChecker({ embedded = false }: AvailabilityCheckerProps) {
  const { t, language } = useLanguage();
  
  const [category, setCategory] = useState<string>("all");
  const [locationHub, setLocationHub] = useState<string>("all");
  const [duration, setDuration] = useState<string>("monthly");
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectedUnitForBooking, setSelectedUnitForBooking] = useState<RentalUnit | null>(null);

  // Filtered available units based on parameters
  const availableUnits = useMemo(() => {
    return RENTAL_UNITS.filter((unit) => {
      // Category filter
      if (category !== "all" && unit.category !== category) {
        return false;
      }
      // Location Hub filter
      if (locationHub !== "all") {
        const hubStr = `${unit.locationHub.id} ${unit.locationHub.en}`.toLowerCase();
        if (locationHub === "jakarta" && !hubStr.includes("jakarta")) {
          return false;
        }
        if (locationHub === "surabaya" && !hubStr.includes("surabaya")) {
          return false;
        }
        if (locationHub === "balikpapan" && !hubStr.includes("balikpapan")) {
          return false;
        }
      }
      return true;
    });
  }, [category, locationHub]);

  return (
    <section className={`w-full ${embedded ? "py-8" : "py-16 sm:py-24 px-6 sm:px-8 border-b border-neutral-100 bg-neutral-50/50"}`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
            <span>{t("checker.badge")}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-900 mb-3">
            {t("checker.title")}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
            {t("checker.subtitle")}
          </p>
        </div>

        {/* Interactive Search Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t("checker.category")}</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="all">
                  {language === "id" ? "Semua Tipe Peralatan" : "All Equipment Types"}
                </option>
                <option value="submersible">
                  {language === "id" ? "Pompa Sumur Dalam (Borehole Submersible)" : "Deep Well Submersible Pump"}
                </option>
                <option value="solar-package">
                  {language === "id" ? "Paket Pompa Tenaga Surya Off-Grid" : "Off-Grid Solar Pumping Package"}
                </option>
                <option value="booster">
                  {language === "id" ? "Booster Multistage Tekanan Tinggi" : "High-Pressure Booster Pump"}
                </option>
                <option value="drainage">
                  {language === "id" ? "Drainase & Dewatering Proyek" : "Drainage & Dewatering Pump"}
                </option>
                <option value="ppr-rig">
                  {language === "id" ? "Mesin Penyambung Pipa PPR" : "PPR Pipe Welding Rig"}
                </option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t("checker.location")}</span>
              </label>
              <select
                value={locationHub}
                onChange={(e) => setLocationHub(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="all">
                  {language === "id" ? "Semua Depo / Seluruh Indonesia" : "All Hubs / Nationwide"}
                </option>
                <option value="jakarta">
                  {language === "id" ? "Jabodetabek / Jawa Barat (Jakarta Hub)" : "Greater Jakarta / West Java (Jakarta Hub)"}
                </option>
                <option value="surabaya">
                  {language === "id" ? "Jawa Timur & Tengah (Surabaya Hub)" : "East & Central Java (Surabaya Hub)"}
                </option>
                <option value="balikpapan">
                  {language === "id" ? "Kalimantan (Balikpapan Hub)" : "Kalimantan (Balikpapan Hub)"}
                </option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t("checker.duration")}</span>
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="daily">
                  {language === "id" ? "Sewa Harian (3 - 6 Hari)" : "Daily Rental (3 - 6 Days)"}
                </option>
                <option value="weekly">
                  {language === "id" ? "Sewa Mingguan (1 - 3 Minggu)" : "Weekly Rental (1 - 3 Weeks)"}
                </option>
                <option value="monthly">
                  {language === "id" ? "Sewa Bulanan (Proyek 30+ Hari)" : "Monthly Rental (30+ Days)"}
                </option>
                <option value="annual">
                  {language === "id" ? "Kontrak Tahunan Proyek" : "Annual Project Contract"}
                </option>
              </select>
            </div>

            {/* Start Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{t("checker.startDate")}</span>
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              />
            </div>

          </div>
        </div>

        {/* Live Status Bar */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-neutral-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-semibold text-neutral-900">
              {availableUnits.length} {t("checker.unitsFound")}
            </p>
          </div>
          <span className="text-xs text-neutral-400 font-light">
            {language === "id" ? "Depo Aktif: Jakarta, Surabaya, Balikpapan" : "Active Depots: Jakarta, Surabaya, Balikpapan"}
          </span>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableUnits.map((unit) => {
            const isReady = unit.status === "available";
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 p-5 flex flex-col justify-between transition-all shadow-sm hover:shadow-md group"
              >
                <div>
                  {/* Status & Category Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      {unit.categoryName[language]}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                        isReady
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-800 border border-amber-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isReady ? "bg-emerald-500" : "bg-amber-500"}`} />
                      <span>{isReady ? t("checker.availableNow") : t("checker.rentedNow")}</span>
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-44 w-full bg-[#F8F9FA] rounded-xl flex items-center justify-center p-4 mb-4 overflow-hidden">
                    <SafeProductImage
                      src={unit.image}
                      alt={unit.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-2">
                    {unit.name}
                  </h3>

                  {/* Key specs */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-600 bg-neutral-50 rounded-xl p-3 mb-4">
                    <div>
                      <span className="text-neutral-400 block text-[10px]">
                        {language === "id" ? "Kapasitas Debit" : "Flow Rate"}
                      </span>
                      <span className="font-medium text-neutral-900">{unit.flowRate[language]}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">
                        {language === "id" ? "Head Max" : "Max Head"}
                      </span>
                      <span className="font-medium text-neutral-900">{unit.headMax[language]}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">
                        {language === "id" ? "Daya Motor" : "Motor Power"}
                      </span>
                      <span className="font-medium text-neutral-900">{unit.powerKw} kW ({unit.powerHp} HP)</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">
                        {language === "id" ? "Hub Penugasan" : "Deployment Hub"}
                      </span>
                      <span className="font-medium text-neutral-900">{unit.locationHub[language].split("&")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-medium">
                      {language === "id" ? "Tarif Sewa" : "Rental Rate"}
                    </span>
                    <p className="text-xs font-bold text-neutral-900">
                      {unit.rateMonthly[language].split("/")[0]}
                      <span className="text-[10px] font-normal text-neutral-400">
                        {language === "id" ? "/bln" : "/mo"}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedUnitForBooking(unit)}
                    className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>{t("rental.rentDirect")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

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

