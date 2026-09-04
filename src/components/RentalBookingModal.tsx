"use client";

import { useState, useEffect } from "react";
import { RentalUnit } from "@/lib/rental";
import { useLanguage } from "@/lib/i18n";
import { X, Check, Calendar, MapPin, Clock, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeProductImage } from "@/components/SafeProductImage";

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
  defaultLocation,
  defaultDuration
}: RentalBookingModalProps) {
  const { t, language } = useLanguage();
  
  const initialLocation = defaultLocation || (language === "id" ? "Jabodetabek / Jawa Barat" : "Greater Jakarta / West Java");
  const initialDuration = defaultDuration || (language === "id" ? "Bulanan (30 Hari)" : "Monthly (30 Days)");

  const [location, setLocation] = useState(initialLocation);
  const [duration, setDuration] = useState(initialDuration);
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [companyName, setCompanyName] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (defaultLocation) setLocation(defaultLocation);
    if (defaultDuration) setDuration(defaultDuration);
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
        `• *Kategori:* ${unit?.categoryName.id}\n` +
        `• *Lokasi Proyek:* ${location}\n` +
        `• *Rencana Mulai:* ${startDate}\n` +
        `• *Estimasi Durasi:* ${duration}\n` +
        (companyName ? `• *Perusahaan / Klien:* ${companyName}\n` : "") +
        (notes ? `• *Catatan Tambahan:* ${notes}\n` : "") +
        `\nMohon konfirmasi ketersediaan unit dan pengiriman proposal penawaran resminya. Terima kasih.`
      : `Hello Benua Green Energy,\nI would like to request DIRECT RENTAL for:\n\n` +
        `• *Unit:* ${unit?.name}\n` +
        `• *Category:* ${unit?.categoryName.en}\n` +
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
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              
              {/* Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-100">
                <div className="relative w-20 h-20 bg-neutral-50 rounded-2xl shrink-0 p-2 border border-neutral-100 overflow-hidden">
                  <SafeProductImage
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800">
                      {unit.categoryName[language]}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      unit.status === "available"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-amber-50 text-amber-800 border border-amber-200"
                    }`}>
                      {unit.status === "available"
                        ? (language === "id" ? "🟢 Siap Kirim" : "🟢 Ready to Dispatch")
                        : (language === "id" ? "🟡 Sedang Disewa" : "🟡 On Rent")}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    {language === "id" ? "Tarif:" : "Rate:"} <span className="font-semibold text-neutral-900">{unit.rateMonthly[language]}</span> • {unit.rateDaily[language]}
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
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
                  >
                    <option value={language === "id" ? "Jabodetabek / Jawa Barat" : "Greater Jakarta / West Java"}>
                      {language === "id" ? "Jabodetabek / Jawa Barat" : "Greater Jakarta / West Java"}
                    </option>
                    <option value={language === "id" ? "Jawa Tengah & DI Yogyakarta" : "Central Java & DI Yogyakarta"}>
                      {language === "id" ? "Jawa Tengah & DI Yogyakarta" : "Central Java & DI Yogyakarta"}
                    </option>
                    <option value={language === "id" ? "Jawa Timur (Surabaya Hub)" : "East Java (Surabaya Hub)"}>
                      {language === "id" ? "Jawa Timur (Surabaya Hub)" : "East Java (Surabaya Hub)"}
                    </option>
                    <option value={language === "id" ? "Sumatera (Medan / Palembang)" : "Sumatra (Medan / Palembang Hub)"}>
                      {language === "id" ? "Sumatera (Medan / Palembang)" : "Sumatra (Medan / Palembang Hub)"}
                    </option>
                    <option value={language === "id" ? "Kalimantan (Balikpapan Hub)" : "Kalimantan (Balikpapan Hub)"}>
                      {language === "id" ? "Kalimantan (Balikpapan Hub)" : "Kalimantan (Balikpapan Hub)"}
                    </option>
                    <option value={language === "id" ? "Sulawesi & Indonesia Timur" : "Sulawesi & Eastern Indonesia"}>
                      {language === "id" ? "Sulawesi & Indonesia Timur" : "Sulawesi & Eastern Indonesia"}
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
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
                  >
                    <option value={language === "id" ? "Harian (3 - 6 Hari)" : "Daily (3 - 6 Days)"}>
                      {language === "id" ? "Harian (3 - 6 Hari)" : "Daily (3 - 6 Days)"}
                    </option>
                    <option value={language === "id" ? "Mingguan (1 - 3 Minggu)" : "Weekly (1 - 3 Weeks)"}>
                      {language === "id" ? "Mingguan (1 - 3 Minggu)" : "Weekly (1 - 3 Weeks)"}
                    </option>
                    <option value={language === "id" ? "Bulanan (30 Hari)" : "Monthly (30 Days)"}>
                      {language === "id" ? "Bulanan (30 Hari)" : "Monthly (30 Days)"}
                    </option>
                    <option value={language === "id" ? "Proyek Panjang (3 - 12 Bulan)" : "Long-term Project (3 - 12 Months)"}>
                      {language === "id" ? "Proyek Panjang (3 - 12 Bulan)" : "Long-term Project (3 - 12 Months)"}
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
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
                  />
                </div>

                {/* Company / Client Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">
                    {language === "id" ? "Nama Perusahaan / PIC Proyek" : "Company Name / Project PIC"}
                  </label>
                  <input
                    type="text"
                    placeholder={language === "id" ? "PT / CV / Nama Kontraktor" : "Company / Contractor / PIC Name"}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">
                    {language === "id" ? "Catatan Kebutuhan Khusus / Target Debit (Opsional)" : "Special Requirements / Flow Target (Optional)"}
                  </label>
                  <input
                    type="text"
                    placeholder={language === "id" ? "Contoh: Butuh kabel tambahan 50m, instalasi panel di lokasi" : "e.g., Need 50m extra cable, on-site panel setup"}
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
                  {unit.includes[language].map((inc, i) => (
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
                  <span>{language === "id" ? "Kirim Pengajuan Sewa via WhatsApp" : "Submit Rental Inquiry via WhatsApp"}</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 text-xs font-medium transition-colors cursor-pointer"
                >
                  {language === "id" ? "Batal" : "Cancel"}
                </button>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

