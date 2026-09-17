"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ServicesPage() {
  const { language } = useLanguage();

  const services = [
    {
      title: language === "id" ? "Layanan Instalasi" : "Installation Services",
      desc:
        language === "id"
          ? "Di Benua Green Energy, kami bangga menjadi mitra terpercaya Anda untuk layanan instalasi yang profesional, andal, dan efisien."
          : "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable installation services.",
      image: "/images/benua/086aa691-8f8c-43a3-a157-4371f254f6b6.jpg",
    },
    {
      title: language === "id" ? "Layanan Perawatan" : "Maintenance Services",
      desc:
        language === "id"
          ? "Di Benua Green Energy, kami mengutamakan profesionalisme, keandalan, dan efisiensi biaya dalam layanan perbaikan serta perawatan berkala."
          : "At Benua Green Energy, we bring professionalism, reliability, and affordability to the forefront of our repair and maintenance services.",
      image: "/images/benua/29dc5558-f547-4e8b-8c66-9ff06f25ebe1.jpg",
    },
    {
      title: language === "id" ? "Diagnostik Sistem" : "Diagnostics",
      desc:
        language === "id"
          ? "Di Benua Green Energy, komitmen kami terhadap presisi tinggi tercermin dalam layanan pengujian dan diagnostik sistem termal."
          : "At Benua Green Energy, our commitment to professionalism, reliability, and affordability extends to our diagnostics services.",
      image: "/images/benua/8f6d8be9-6602-4ca3-814c-84fca53eeee8.jpg",
    },
    {
      title: language === "id" ? "Pembersihan & Optimalisasi" : "Cleaning & Optimization",
      desc:
        language === "id"
          ? "Di Benua Green Energy, kami bangga menjadi mitra terpercaya Anda untuk layanan pembersihan dan optimalisasi sistem secara menyeluruh."
          : "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable Cleaning & Optimization.",
      image: "/images/benua/96992df8-8fac-4834-b746-14a443b9caa0.jpg",
    },
    {
      title: language === "id" ? "Pengujian & Komisioning" : "Commissioning",
      desc:
        language === "id"
          ? "Di Benua Green Energy, kami menerapkan standar ketat profesionalisme dalam komisioning unit sebelum operasional penuh."
          : "At Benua Green Energy, we uphold our core values of professionalism, reliability, and affordability, even in our commissioning services.",
      image: "/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg",
    },
    {
      title: language === "id" ? "Layanan Audit Energi" : "Energy Audit Services",
      desc:
        language === "id"
          ? "Di Benua Green Energy, kami didorong oleh komitmen untuk mengidentifikasi potensi penghematan daya melalui audit termodinamika mendalam."
          : "At Benua Green Energy, we are driven by our commitment to professionalism, reliability, and affordability, even in our energy audit services.",
      image: "/images/benua/d7a6c163-dd27-44a8-9f7c-1dbc82faba37.jpg",
    },
    {
      title: language === "id" ? "Layanan Garansi & Suku Cadang" : "Warranty Replacement Services",
      desc:
        language === "id"
          ? "Di Benua Green Energy, perlindungan suku cadang asli OEM dan penjaminan garansi resmi memastikan keandalan jangka panjang investasi Anda."
          : "At Benua Green Energy, our commitment to professionalism, reliability, and affordability extends to our warranty replacement services.",
      image: "/images/benua/iStock-1369464704-1.jpg",
    },
  ];

  return (
    <main className="flex-grow bg-white text-neutral-800 font-sans">
      {/* ── HEADER BANNER ── */}
      <section className="relative mt-[4.25rem] h-[360px] sm:h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg"
          alt="Benua Green Energy Services Banner"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Floating White Card */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md px-12 py-10 rounded-2xl shadow-2xl text-center max-w-lg mx-4 border border-white/60">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight mb-2">
            {language === "id" ? "Layanan" : "Services"}
          </h1>
          <h4 className="text-sm sm:text-base font-semibold text-neutral-500 tracking-wide">
            {language === "id" ? "Jelajahi Seluruh Layanan Kami" : "Explore All of Our Services"}
          </h4>
        </div>
      </section>

      {/* ── MAIN HEADING ── */}
      <section className="pt-20 pb-12 px-6 sm:px-10 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1d1841] leading-snug tracking-tight">
          {language === "id"
            ? "Pilihlah energi yang tepat demi bisnis Anda — dan kelestarian bumi."
            : "Make the energy choice that's good for business — and the planet."}
        </h2>
      </section>

      {/* ── 7 SERVICES ELEMENTOR-STYLE CARDS ── */}
      <section className="pb-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-8 border border-neutral-200"
            >
              {/* Background image */}
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/98 transition-colors" />

              {/* Content on bottom */}
              <div className="relative z-10 text-white flex flex-col items-start">
                <div className="text-emerald-400 mb-2">
                  <Minus className="w-8 h-8 stroke-[3]" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight text-white leading-snug">
                  {svc.title}
                </h3>
                
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {svc.desc}
                </p>

                <Link
                  href={`/contact?subject=Service: ${encodeURIComponent(svc.title)}`}
                  className="inline-flex items-center gap-2 bg-[#2a1768] hover:bg-[#3d2391] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md"
                >
                  <span>{language === "id" ? "Pelajari lebih lanjut" : "Learn more"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GREEN ENERGY SUSTAINABILITY SECTION ── */}
      <section className="py-20 px-6 sm:px-10 bg-gradient-to-r from-[#1d1841] to-[#0f4d38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
            {language === "id" ? "Energi Hijau" : "Green energy"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug max-w-3xl mx-auto">
            {language === "id"
              ? "Angin, air, dan matahari adalah sumber daya terbarukan yang berkelanjutan bagi masa depan."
              : "Wind water sun are all sustainable power sources that are enjoyable"}
          </h2>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1d1841] hover:bg-neutral-100 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg"
            >
              <span>{language === "id" ? "Pelajari Lebih Lanjut" : "Discover more"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH SALES SECTION ── */}
      <section className="py-20 px-6 sm:px-10 max-w-6xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-2 block">
          {language === "id" ? "Hubungi Kami" : "Get in touch"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] mb-6">
          {language === "id" ? "Hubungi Tim Penjualan Kami" : "Contact our sales"}
        </h2>
        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-8 rounded-full" />
        <p className="text-neutral-600 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
          {language === "id"
            ? "Siap meningkatkan efisiensi energi sistem pendingin dan menekan biaya operasional Anda? Konsultasikan langsung bersama spesialis rekayasa kami sekarang."
            : "Ready to enhance your energy efficiency and minimize operational expenses? Talk directly to our engineering specialists today."}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#2a1768] hover:bg-[#3d2391] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md"
        >
          <span>{language === "id" ? "Hubungi Kami" : "Contact Us"}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
