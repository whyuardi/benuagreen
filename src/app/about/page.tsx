"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar, Users, Layers, Eye, Target, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { IndonesiaProjectMap } from "@/components/IndonesiaProjectMap";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main className="flex-grow bg-white font-sans text-neutral-800">
      {/* ── TOP HERO HEADER BANNER ── */}
      <section className="relative mt-[4.25rem] bg-[#1a2942] text-white py-14 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            PT Benua Green Energy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            About Us
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl">
            Empowering green energy solutions, sustainability, and technological innovation.
          </p>
        </div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      </section>

      {/* ── SECTION 1: WHO WE ARE & WHAT WE DO ── */}
      <section className="py-20 px-6 sm:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1841] tracking-tight mb-4">
                Who We Are
              </h2>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed text-justify">
                BG Group, established in 2000 with HQ in Singapore and Jakarta, is a leading advocate for green energy investment and sustainability. They allocate 10% of annual sales revenue to R&amp;D, embodying a strong commitment to a greener society and social responsibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1841] tracking-tight mb-4">
                What We Do
              </h2>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed text-justify">
                To assist governments in developing economic, energy, and environmental sustainability, PT. Benua Green Energy is pleased to announce Non-Electric Air Conditioning System (LiBr Absorption Chiller) powered by clean and recyclable energies. Our absorption chillers also use non-polluting refrigerant. The company has a continual goal of enhancing energy efficiency and minimizing pollution, reducing investment in dozens of power stations.
              </p>
            </div>
          </div>

          {/* Right: Real Map of Indonesia with Capacity & 23+ Years Experience */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[540px] h-[360px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-neutral-50 flex items-center justify-center p-2">
              <Image
                src="/images/benua/about-us-bgm.jpg"
                alt="Peta Kapasitas Energi Regional Indonesia - Benua Green Energy"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1d1841] tracking-wider mt-6 text-center">
              23+ Years Experience
            </h3>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE INDONESIA PROJECT MAP ── */}
      <section className="py-16 px-4 sm:px-8 bg-[#f4f7f5] border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-1.5 block">
              National Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1841] tracking-tight">
              Peta Sebaran Proyek di Seluruh Indonesia
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Jelajahi instalasi chiller, sistem pompa, dan pemulihan energi kami di berbagai kawasan industri nasional.
            </p>
          </div>
          <IndonesiaProjectMap />
        </div>
      </section>

      {/* ── SECTION 2: 4 ICON BOXES & WIND TURBINE IMAGE ── */}
      <section className="py-20 px-6 sm:px-10 bg-[#f9fafb] border-y border-neutral-200/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 4 Icon Boxes */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Business fields */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d1841] mb-1">
                  Business fields
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  PT Benua Green Energy specializes in CCHP (Combined cooling heating and power).
                </p>
              </div>
            </div>

            {/* 2. Year registered */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a3a6e] flex items-center justify-center shrink-0 border border-blue-100">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d1841] mb-1">
                  Year registered
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  PT Benua Green Energy has been registered in 2009.
                </p>
              </div>
            </div>

            {/* 3. Motto */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#2a1768] flex items-center justify-center shrink-0 border border-purple-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d1841] mb-1">
                  Motto
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  55+ Minds, One Vision: Empowering Green Energy Solutions with Our Dedicated Team at Benua Green Energy.
                </p>
              </div>
            </div>

            {/* 4. Our Products */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-emerald-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1d1841] mb-1">
                  Our Products
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Benua Green Energy&apos;s Absorption, Industrial, Centrifugal Chillers, Air Handling Units, and Cooling Towers for Your Cooling Needs.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Wind Turbine Closeup */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
              <Image
                src="/images/benua/iStock-1369464704-1.jpg"
                alt="Wind Turbine - Benua Green Energy"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: VISION, MISSION, VALUE ── */}
      <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Our Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center items-center group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1841] mb-4">
              Our Vision
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              PT. Benua Green Energy as a company that provides trade in machinery and equipment. Our company is advanced, modern and independent by developing its competencies based on customer satisfaction.
            </p>
          </div>

          {/* Card 2: Our Mision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center items-center group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1a3a6e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1841] mb-4">
              Our Mision
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Improve the company for employees and develop the strength and competitiveness of the company by improving organizational performance and human resources.
            </p>
          </div>

          {/* Card 3: Our Value */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center items-center group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1841] mb-4">
              Our Value
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Our values at PT. Benua Green Energy encompass excellence, innovation, integrity, and a strong customer-centric focus. We foster a culture of empowerment, diversity, environmental responsibility, and community engagement, underpinned by our commitment to independence.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: GRADIENT CTA BANNER ── */}
      <section className="relative py-16 px-6 sm:px-10 bg-gradient-to-r from-[#2a1768] via-[#1a3a6e] to-[#0f4d38] text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              Let&apos;s practice environmental awareness to get our globe clean.
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-emerald-500/25 text-sm inline-flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
