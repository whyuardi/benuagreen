"use client";

import { useState, useMemo } from "react";
import { RENTAL_UNITS, RentalUnit, RentalCategory, RentalStatus } from "@/lib/rental";
import { useLanguage } from "@/lib/i18n";
import { AvailabilityChecker } from "@/components/AvailabilityChecker";
import { UnitSelectionWizard } from "@/components/UnitSelectionWizard";
import { RentalFAQ } from "@/components/RentalFAQ";
import { RentalBookingModal } from "@/components/RentalBookingModal";
import { ShieldCheck, Truck, RefreshCw, Wrench, Sparkles, ArrowRight, Check, Search, Filter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RentalPage() {
  const { t } = useLanguage();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedUnitForBooking, setSelectedUnitForBooking] = useState<RentalUnit | null>(null);

  // Filtered units
  const displayedUnits = useMemo(() => {
    return RENTAL_UNITS.filter((unit) => {
      // Status filter
      if (statusFilter !== "all" && unit.status !== statusFilter) {
        return false;
      }
      // Category filter
      if (categoryFilter !== "all" && unit.category !== categoryFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          unit.name.toLowerCase().includes(q) ||
          unit.categoryName.toLowerCase().includes(q) ||
          unit.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [statusFilter, categoryFilter, searchQuery]);

  return (
    <main className="flex-grow bg-white pb-20">
      
      {/* Hero Section */}
      <section className="mt-[4.25rem] pt-14 pb-12 sm:pt-20 sm:pb-16 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            <span>Layanan Rental Industri & Tenaga Surya</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 mb-5 leading-[1.15]">
            Solusi Sewa Pompa Cepat, <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-neutral-800">
              andal tanpa downtime proyek.
            </span>
          </h1>

          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl leading-relaxed mb-10 font-light">
            {t("rental.subtitle")}
          </p>

          {/* 4 Key Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <ShieldCheck className="w-4 h-4 text-neutral-900 mb-1.5" />
              <p className="text-xs font-bold text-neutral-900 leading-tight">Garansi Unit &lt; 24 Jam</p>
              <p className="text-[10px] text-neutral-400 font-light mt-0.5">Penggantian unit cepat jika ada kendala</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <Truck className="w-4 h-4 text-neutral-900 mb-1.5" />
              <p className="text-xs font-bold text-neutral-900 leading-tight">Siap Kirim Nasional</p>
              <p className="text-[10px] text-neutral-400 font-light mt-0.5">Depo Jakarta, Surabaya, Balikpapan</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <Wrench className="w-4 h-4 text-neutral-900 mb-1.5" />
              <p className="text-xs font-bold text-neutral-900 leading-tight">Paket Siap Pakai</p>
              <p className="text-[10px] text-neutral-400 font-light mt-0.5">Kabel, panel kontrol, sensor lengkap</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <RefreshCw className="w-4 h-4 text-neutral-900 mb-1.5" />
              <p className="text-xs font-bold text-neutral-900 leading-tight">Durasi Fleksibel</p>
              <p className="text-[10px] text-neutral-400 font-light mt-0.5">Harian, bulanan, kontrak proyek</p>
            </div>
          </div>

        </div>
      </section>

      {/* Feature 1: Availability Checker */}
      <div id="availability-checker">
        <AvailabilityChecker embedded={false} />
      </div>

      {/* Feature 2: Unit Selection Wizard */}
      <div id="unit-wizard">
        <UnitSelectionWizard />
      </div>

      {/* Feature 3: Rental Catalog Grid */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white border-b border-neutral-100" id="katalog-rental">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-1">
                Katalog Armada Sewa
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-900">
                {t("rental.title")}
              </h2>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Cari tipe unit rental..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-neutral-100">
            {/* Status Filter */}
            {[
              { id: "all", label: "Semua Unit" },
              { id: "available", label: "🟢 Siap Kirim (Tersedia)" },
              { id: "rented", label: "🟡 Sedang Beroperasi" },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusFilter(st.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  statusFilter === st.id
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                }`}
              >
                {st.label}
              </button>
            ))}

            <div className="w-[1px] h-5 bg-neutral-200 mx-2 hidden sm:block" />

            {/* Category Filter */}
            {[
              { id: "all", label: "Semua Kategori" },
              { id: "submersible", label: "Sumur Dalam" },
              { id: "solar-package", label: "Paket Tenaga Surya" },
              { id: "booster", label: "Booster Multistage" },
              { id: "drainage", label: "Drainase Dewatering" },
              { id: "ppr-rig", label: "Alat Pipa PPR" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  categoryFilter === cat.id
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Unit Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedUnits.map((unit) => {
              const isAvailable = unit.status === "available";
              return (
                <div
                  key={unit.id}
                  className="bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 p-6 flex flex-col justify-between transition-all shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Top Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                        {unit.categoryName}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                          isAvailable
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}
                      >
                        {isAvailable ? "🟢 Siap Kirim" : "🟡 Sedang Disewa"}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-48 w-full bg-[#F8F9FA] rounded-xl flex items-center justify-center p-4 mb-4">
                      <Image
                        src={unit.image}
                        alt={unit.name}
                        fill
                        className="object-contain p-2"
                        unoptimized
                      />
                    </div>

                    {/* Name & Desc */}
                    <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light line-clamp-2 mb-4 leading-relaxed">
                      {unit.description}
                    </p>

                    {/* Specs Table */}
                    <div className="bg-neutral-50 rounded-xl p-3.5 space-y-1.5 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Debit Aliran:</span>
                        <span className="font-semibold text-neutral-800">{unit.flowRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Head Tekanan Max:</span>
                        <span className="font-semibold text-neutral-800">{unit.headMax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Daya Motor:</span>
                        <span className="font-semibold text-neutral-800">{unit.powerKw} kW ({unit.powerHp} HP)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Catu Daya:</span>
                        <span className="font-semibold text-neutral-800">{unit.powerType}</span>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1.5">
                        Kelengkapan Sewa:
                      </span>
                      <ul className="space-y-1">
                        {unit.includes.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] text-neutral-600">
                            <Check className="w-3 h-3 text-neutral-900 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3 mt-2">
                    <div>
                      <span className="text-[10px] text-neutral-400 block">Mulai Dari</span>
                      <p className="text-sm font-bold text-neutral-900">
                        {unit.rateMonthly.split("/")[0]}
                        <span className="text-[10px] font-normal text-neutral-500">/bln</span>
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedUnitForBooking(unit)}
                      className="px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm hover:shadow cursor-pointer"
                    >
                      <span>{t("rental.rentDirect")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Feature 4: Rental FAQ */}
      <RentalFAQ />

      {/* Booking Modal */}
      <RentalBookingModal
        unit={selectedUnitForBooking}
        isOpen={Boolean(selectedUnitForBooking)}
        onClose={() => setSelectedUnitForBooking(null)}
      />

    </main>
  );
}
