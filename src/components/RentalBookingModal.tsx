"use client";

import { useState, useEffect } from "react";
import { RentalUnit } from "@/lib/rental";
import { useLanguage } from "@/lib/i18n";
import { X, Check, Calendar, MapPin, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface RentalBookingModalProps {
  unit: RentalUnit | null;
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: string;
  defaultDuration?: string;
}

export function RentalBookingModal({
  unit,
  isOpen,
  onClose,
  defaultLocation = "Jabodetabek / Jawa Barat",
  defaultDuration = "Bulanan (30 Hari)"
}: RentalBookingModalProps) {
  const { t, language } = useLanguage();
  const [location, setLocation] = useState(defaultLocation);
  const [duration, setDuration] = useState(defaultDuration);
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [companyName, setCompanyName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setLocation(defaultLocation);
    setDuration(defaultDuration);
  }, [defaultLocation, defaultDuration, unit]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!unit && !isOpen) return null;

  const handleWhatsAppBooking = () => {
    const text = language === "id"
      ? `Halo Benua Green Energy,\nSaya ingin melakukan SEWA LANGSUNG untuk unit rental:\n\n` +
        `• *Unit:* ${unit?.name}\n` +
        `• *Kategori:* ${unit?.categoryName}\n` +
        `• *Lokasi Proyek:* ${location}\n` +
        `• *Rencana Mulai:* ${startDate}\n` +
        `• *Estimasi Durasi:* ${duration}\n` +
        (companyName ? `• *Perusahaan / Klien:* ${companyName}\n` : "") +
        (notes ? `• *Catatan Tambahan:* ${notes}\n` : "") +
        `\nMohon konfirmasi ketersediaan unit dan pengiriman proposal penawaran resminya. Terima kasih.`
      : `Hello Benua Green Energy,\nI would like to request DIRECT RENTAL for:\n\n` +
        `• *Unit:* ${unit?.name}\n` +
        `• *Category:* ${unit?.categoryName}\n` +
        `• *Project Hub / Location:* ${location}\n` +
        `• *Start Date:* ${startDate}\n` +
        `• *Duration:* ${duration}\n` +
        (companyName ? `• *Company / Client:* ${companyName}\n` : "") +
        (notes ? `• *Notes:* ${notes}\n` : "") +
        `\nPlease confirm unit availability and send the official rental proposal. Thank you.`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && unit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              
              {/* Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-100">
                <div className="relative w-20 h-20 bg-neutral-50 rounded-2xl shrink-0 p-2 border border-neutral-100">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-contain p-1"
                    unoptimized
                  />
                </div>
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800">
                      {unit.categoryName}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      unit.status === "available"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}>
                      {unit.status === "available" ? "🟢 Siap Kirim" : "🟡 Sedang Disewa"}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Tarif: <span className="font-semibold text-neutral-900">{unit.rateMonthly}</span> • {unit.rateDaily}
                  </p>
                </div>
              </div>

              {/* Form Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                
                {/* Location Hub */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t("checker.location")}</span>
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="Jabodetabek / Jawa Barat">Jabodetabek / Jawa Barat</option>
                    <option value="Jawa Tengah & DI Yogyakarta">Jawa Tengah & DI Yogyakarta</option>
                    <option value="Jawa Timur (Surabaya Hub)">Jawa Timur (Surabaya Hub)</option>
                    <option value="Sumatera (Medan / Palembang)">Sumatera (Medan / Palembang)</option>
                    <option value="Kalimantan (Balikpapan Hub)">Kalimantan (Balikpapan Hub)</option>
                    <option value="Sulawesi & Indonesia Timur">Sulawesi & Indonesia Timur</option>
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
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="Harian (3 - 6 Hari)">Harian (3 - 6 Hari)</option>
                    <option value="Mingguan (1 - 3 Minggu)">Mingguan (1 - 3 Minggu)</option>
                    <option value="Bulanan (30 Hari)">Bulanan (30 Hari)</option>
                    <option value="Proyek Panjang (3 - 12 Bulan)">Proyek Panjang (3 - 12 Bulan)</option>
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
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                {/* Company / Client Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">
                    Nama Perusahaan / PIC Proyek
                  </label>
                  <input
                    type="text"
                    placeholder="PT / CV / Nama Kontraktor"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">
                    Catatan Kebutuhan Khusus / Target Debit (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Butuh kabel tambahan 50m, instalasi panel di lokasi"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

              </div>

              {/* Package Inclusion summary */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 mb-6">
                <p className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  {t("rental.includedAccessories")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {unit.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 px-6 rounded-full text-xs flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pengajuan Sewa via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 text-xs font-medium transition-colors cursor-pointer"
                >
                  Batal
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
