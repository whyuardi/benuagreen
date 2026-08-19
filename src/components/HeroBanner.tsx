"use client";

import { Search } from "lucide-react";
import { CATEGORIES_DATA } from "@/lib/products";
import { useLanguage, TranslationKey } from "@/lib/i18n";
import { motion } from "framer-motion";

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
}

export function HeroBanner({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}: HeroBannerProps) {
  const { t } = useLanguage();
  const totalCount = CATEGORIES_DATA.reduce((acc, c) => acc + c.products.length, 0);

  const getCategoryName = (slug: string, fallback: string) => {
    const keyMap: Record<string, TranslationKey> = {
      pumps: "cat.pumps",
      "solar-drives": "cat.solarDrives",
      ppr: "cat.ppr",
      inverter: "cat.inverter",
      "starters-and-controllers": "cat.starters",
      "rms-dongle": "cat.rms",
    };
    const key = keyMap[slug];
    return key ? t(key) : fallback;
  };

  return (
    <section className="mt-[4.25rem] pt-14 pb-10 sm:pt-20 sm:pb-14 px-6 sm:px-8 border-b border-neutral-100 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4"
        >
          {t("hero.badge")}
        </motion.span>

        {/* Minimalist Heading with smooth reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 mb-5 leading-[1.15]"
        >
          {t("hero.title1")} <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-neutral-800">
            {t("hero.title2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed mb-10 font-light"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Minimalist Search Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md relative mb-8"
          id="catalog"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-12 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-neutral-400 transition-all duration-300 shadow-none"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onSearchChange("")}
                className="absolute right-3 text-[11px] font-medium text-neutral-400 hover:text-neutral-900 px-2 py-0.5 rounded transition-colors"
              >
                {t("hero.clear")}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Minimalist Clean Category Tabs with Smooth Active State */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <button
            onClick={() => onSelectCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
              selectedCategory === "all"
                ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                : "bg-white text-neutral-600 hover:text-neutral-950 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
            }`}
          >
            {t("hero.all")} ({totalCount})
          </button>
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-white text-neutral-600 hover:text-neutral-950 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                }`}
              >
                {getCategoryName(cat.slug, cat.name)}
              </button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}





