"use client";

import Link from "next/link";
import { Leaf, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Header Banner */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            {t("about.overview")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            {t("about.title")}
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t("about.desc")}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 space-y-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider block">
              {t("about.whoWeAre")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 leading-snug tracking-tight">
              {t("about.headline")}
            </h2>
            <p className="text-neutral-500 leading-relaxed text-sm font-light">
              {t("about.p1")}
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm font-light">
              {t("about.p2")}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Zap className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">99%</h3>
              <p className="text-xs text-neutral-400">{t("about.mpptLabel")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Globe2 className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">24/7</h3>
              <p className="text-xs text-neutral-400">{t("about.monitoringLabel")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <ShieldCheck className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">50+ Yrs</h3>
              <p className="text-xs text-neutral-400">{t("about.lifespanLabel")}</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Leaf className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">100%</h3>
              <p className="text-xs text-neutral-400">{t("about.cleanEnergyLabel")}</p>
            </div>
          </div>
        </div>

        {/* Minimalist CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900 text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-normal">{t("about.ctaTitle")}</h3>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto font-light">
            {t("about.ctaDesc")}
          </p>
          <div className="pt-3 flex justify-center gap-3">
            <Link
              href="/"
              className="bg-white text-neutral-900 hover:bg-neutral-100 font-medium rounded-full px-6 py-2.5 inline-flex items-center justify-center text-xs transition-colors"
            >
              {t("about.ctaProducts")}
            </Link>
            <Link
              href="/contact"
              className="border border-neutral-700 text-white hover:bg-neutral-800 font-medium rounded-full px-6 py-2.5 inline-flex items-center justify-center text-xs transition-colors"
            >
              {t("about.ctaContact")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}



