"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Pumps",
    message: "",
  });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Editorial Header */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            {t("contact.direct")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t("contact.desc")}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 space-y-6">
              <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <Headphones className="w-4 h-4 text-neutral-900" />
                {t("contact.officeInfo")}
              </h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{t("contact.headquarters")}</p>
                    <p className="text-neutral-500">{t("contact.location")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{t("contact.emailInquiry")}</p>
                    <a href="mailto:info@benuagreen.com" className="text-neutral-500 hover:text-neutral-900">
                      info@benuagreen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{t("contact.officialPortal")}</p>
                    <a href="https://benuagreen.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900">
                      benuagreen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-900">{t("contact.operatingHours")}</p>
                    <p className="text-neutral-500">{t("contact.hours")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 text-white p-8 rounded-2xl space-y-2">
              <h4 className="font-medium text-sm">{t("contact.waTitle")}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {t("contact.waDesc")}
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/6281234567890?text=Hello%20Benua%20Green,%20I%20would%20like%20to%20consult%20on%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-medium text-white border-b border-white pb-0.5 hover:text-neutral-300 transition-colors"
                >
                  {t("contact.waBtn")}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-100">
              <h3 className="text-lg font-medium text-neutral-900 mb-1">{t("contact.formTitle")}</h3>
              <p className="text-xs text-neutral-400 mb-8 font-light">
                {t("contact.formDesc")}
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-neutral-50 rounded-2xl border border-neutral-100 space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-neutral-900 mx-auto" />
                  <h4 className="text-base font-medium text-neutral-900">{t("contact.receivedTitle")}</h4>
                  <p className="text-xs text-neutral-500 max-w-sm mx-auto font-light">
                    {t("contact.receivedDesc")}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", category: "Pumps", message: "" });
                    }}
                    className="mt-4 bg-neutral-900 text-white rounded-full px-5 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors"
                  >
                    {t("contact.sendAnother")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                        {t("contact.nameLabel")}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                        {t("contact.emailLabel")}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. budi@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                        {t("contact.phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +62 812-3456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                        {t("contact.categoryLabel")}
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400 bg-white"
                      >
                        <option value="Pumps">Pumps Division</option>
                        <option value="Solar Drives">Solar Drives & VFD</option>
                        <option value="PPR & Irrigation">PPR & Irrigation</option>
                        <option value="Inverter">Inverters & Power Storage</option>
                        <option value="Starters & Controllers">Starters & Controllers</option>
                        <option value="Service Zone">Technical Service & Repair</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider">
                      {t("contact.messageLabel")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t("contact.messagePlaceholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-xs focus:outline-none focus:border-neutral-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("contact.submitBtn")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}


