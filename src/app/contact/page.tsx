"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-grow bg-white text-neutral-800 font-sans">
      {/* ── HEADER BANNER ── */}
      <section className="relative mt-[4.25rem] h-[360px] sm:h-[400px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/benua/29dc5558-f547-4e8b-8c66-9ff06f25ebe1.jpg"
          alt="Contact Header Banner"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Floating Centered White Card */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md px-12 py-10 rounded-2xl shadow-2xl text-center max-w-lg mx-4 border border-white/60">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight mb-2">
            {language === "id" ? "Kontak Kami" : "Contact"}
          </h1>
          <h4 className="text-sm sm:text-base font-semibold text-neutral-500 tracking-wide">
            {language === "id"
              ? "Hubungi kami dan beri tahu bagaimana kami dapat membantu solusi energi Anda."
              : "Get in touch and let us know how we can help."}
          </h4>
        </div>
      </section>

      {/* ── GET IN TOUCH & MAP SECTION ── */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Get in Touch & 3 Circle Icon Items */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight mb-4">
                {language === "id" ? "Hubungi Kami" : "Get in touch"}
              </h2>
              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2a1768] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1d1841] mb-1">
                    {language === "id" ? "Lokasi Kantor" : "Location"}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                    Head Office PT. Benua Green Energy, Jl. Trocadero Office Park, Ruko Piazza De Europe, Garnier No. 82 Lippo Karawaci, Tangerang, 15139
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2a1768] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1d1841] mb-1">
                    {language === "id" ? "Kirim Email" : "Email us"}
                  </h4>
                  <a
                    href="mailto:sales@benuagreen.com"
                    className="text-neutral-600 hover:text-emerald-600 text-sm font-semibold transition-colors block"
                  >
                    sales@benuagreen.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2a1768] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1d1841] mb-1">
                    {language === "id" ? "Hubungi Telepon" : "Call us"}
                  </h4>
                  <a
                    href="tel:+622120022012"
                    className="text-neutral-600 hover:text-emerald-600 text-sm font-semibold transition-colors block"
                  >
                    +62 2120022012
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-6 w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.9304649090764!2d106.61683810396924!3d-6.221679078649678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fea877978433%3A0x5250ee758872e465!2sPT.Benua%20Green%20Energy!5e0!3m2!1sid!2sid!4v1740663119925!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT. Benua Green Energy Google Maps"
            />
          </div>

        </div>
      </section>

      {/* ── SEND US A MESSAGE SECTION ── */}
      <section className="py-20 px-6 sm:px-10 bg-[#f9fafb] border-t border-neutral-200/80">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight">
              {language === "id" ? "Kirim Pesan Kepada Kami" : "Send us a message"}
            </h2>
          </div>

          {submitted ? (
            <div className="p-10 bg-white rounded-3xl border border-neutral-200 text-center space-y-4 shadow-lg">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-[#1d1841]">
                {language === "id" ? "Pesan Anda Berhasil Terkirim" : "Your Message Has Been Sent"}
              </h3>
              <p className="text-neutral-600 text-sm max-w-md mx-auto">
                {language === "id"
                  ? "Terima kasih telah menghubungi PT Benua Green Energy. Tim kami akan segera menindaklanjuti pesan Anda."
                  : "Thank you for reaching out to PT Benua Green Energy. Our team will get back to you shortly."}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                }}
                className="mt-4 px-6 py-2.5 bg-[#2a1768] text-white text-xs font-bold rounded-full hover:bg-[#3d2391] transition-colors"
              >
                {language === "id" ? "Kirim Pesan Lain" : "Send Another Message"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/90 shadow-xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 tracking-wide">
                    {language === "id" ? "Nama Lengkap" : "Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === "id" ? "Nama Anda" : "Name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#2a1768] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 tracking-wide">
                    {language === "id" ? "Nomor Telepon / WhatsApp" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    placeholder={language === "id" ? "+62 8..." : "Phone"}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#2a1768] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#2a1768] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 tracking-wide">
                  {language === "id" ? "Subjek" : "Subject"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === "id" ? "Subjek konsultasi atau produk..." : "Subject"}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#2a1768] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 tracking-wide">
                  {language === "id" ? "Pesan" : "Message"}
                </label>
                <textarea
                  rows={4}
                  placeholder={language === "id" ? "Tuliskan kebutuhan atau pertanyaan Anda..." : "Message"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#2a1768] transition-colors"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2a1768] hover:bg-[#3d2391] text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md uppercase tracking-wider"
                >
                  {language === "id" ? "Kirim Pesan" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
