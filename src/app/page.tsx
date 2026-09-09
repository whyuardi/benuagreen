"use client";

import { useState, useMemo } from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ProductSlider } from "@/components/ProductSlider";
import { ProductModal } from "@/components/ProductModal";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES_DATA, Product } from "@/lib/products";
import { ArrowRight, LayoutGrid, SlidersHorizontal, Search, SearchX, Sparkles, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";
import { useLanguage, TranslationKey } from "@/lib/i18n";
import { motion } from "framer-motion";

import { TechnologyInsights } from "@/components/TechnologyInsights";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const { t, language } = useLanguage();

  const getCategoryName = (slug: string, fallback: string) => {
    const keyMap: Record<string, TranslationKey> = {
      chillers: "cat.chillers",
      "cooling-air": "cat.coolingAir",
      "piping-valves": "cat.pipingValves",
      pumps: "cat.pumps",
      "heating-power": "cat.heatingPower",
      "solar-drives": "cat.solarDrives",
      ppr: "cat.ppr",
      inverter: "cat.inverter",
      "starters-and-controllers": "cat.starters",
      "rms-dongle": "cat.rms",
      dongle: "cat.rms",
    };
    const key = keyMap[slug];
    return key ? t(key) : fallback;
  };

  // Filtered categories based on selected category tab
  const displayedCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return CATEGORIES_DATA;
    }
    return CATEGORIES_DATA.filter((cat) => cat.slug === selectedCategory);
  }, [selectedCategory]);

  // Global search results across all products
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const allProducts = CATEGORIES_DATA.flatMap((cat) => cat.products);
    return allProducts.filter(
      (prod) =>
        prod.name.toLowerCase().includes(query) ||
        prod.category.toLowerCase().includes(query) ||
        (prod.description && prod.description.toLowerCase().includes(query)) ||
        (prod.features && prod.features.some((f) => f.toLowerCase().includes(query)))
    );
  }, [searchQuery]);

  // All products for grid view mode
  const allDisplayedProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return CATEGORIES_DATA.flatMap((c) => c.products);
    }
    const cat = CATEGORIES_DATA.find((c) => c.slug === selectedCategory);
    return cat ? cat.products : [];
  }, [selectedCategory]);

  return (
    <main className="flex-grow pb-20 bg-white">
      
      {/* 1. High-Impact Corporate Industrial Hero Banner */}
      <HeroBanner />

      {/* 2. Customer Logos Besar Marquee (Dipercaya Klien Industri Terbesar) */}
      <ClientLogoMarquee />

      {/* 3. Main Industrial Catalog Section */}
      <div className="max-w-7xl mx-auto pt-16 sm:pt-20 px-6 sm:px-8" id="catalog">
        
        {/* Catalog Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200/80 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase block mb-1">
              {language === "id" ? "PORTFOLIO SISTEM & PERALATAN" : "PRODUCTS & ENGINEERING SYSTEMS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {language === "id"
                ? "Katalog Produk & Solusi Industri"
                : "Industrial Product Line & Solutions"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-normal leading-relaxed md:text-right">
            {language === "id"
              ? "Chiller, Cooling Tower, AHU/FCU, Pipa & Fitting PPR-CT, Valve Kontrol, Pompa Industri, dan Inverter Tenaga Surya."
              : "Chillers, Cooling Towers, AHU/FCU, PPR-CT Piping, Control Valves, Industrial Pumps, and Solar Inverters."}
          </p>
        </div>

        {/* Filter Controls: Category Tabs, Search Bar, and View Mode Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-100">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                  : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 hover:bg-white"
              }`}
            >
              {language === "id" ? "Semua Sistem" : "All Systems"}
            </button>
            {CATEGORIES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.slug
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 hover:bg-white"
                }`}
              >
                {getCategoryName(cat.slug, cat.name)}
              </button>
            ))}
          </div>

          {/* Right: Search Box + View Mode Toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder={language === "id" ? "Cari spesifikasi / produk..." : "Search specs or products..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-xs focus:outline-none focus:bg-white focus:border-neutral-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-neutral-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 shrink-0">
              <button
                onClick={() => setViewMode("slider")}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === "slider"
                    ? "bg-white text-neutral-900 shadow-xs"
                    : "hover:text-neutral-900"
                }`}
                title="Slider View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-neutral-900 shadow-xs"
                    : "hover:text-neutral-900"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* If user is actively searching */}
        {searchQuery.trim() ? (
          <div className="py-2">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-100">
              <div>
                <h2 className="text-base font-bold text-neutral-900">
                  {t("catalog.searchResults")} &ldquo;{searchQuery}&rdquo;
                </h2>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {searchResults.length} {t("catalog.productsFound")}
                </p>
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-3 py-1 rounded-full transition-colors"
              >
                {t("catalog.clearSearch")}
              </button>
            </div>

            {searchResults.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {searchResults.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
              >
                <SearchX className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-sm font-medium text-neutral-800 mb-1">
                  {t("catalog.noProducts")}
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-5 font-light">
                  {t("catalog.noProductsDesc")}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors"
                >
                  {t("catalog.viewAll")}
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          /* Normal View: Category Sliders or Grid */
          <>
            {viewMode === "slider" ? (
              <div className="space-y-16">
                {displayedCategories.map((category) => (
                  <div key={category.id} className="relative">
                    <ProductSlider
                      category={category}
                      onSelectProduct={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Flat Grid View across active categories */
              <div className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allDisplayedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>

      {/* 4. Interactive Technology Insights Section (Cara Kerja Chiller, Cooling Tower, Biomass & CO2) */}
      <TechnologyInsights />

      {/* 5. Major Client Project Showcase (Indorama, APP, APRIL, Garudafood, MOI, Central Park) */}
      <ProjectShowcase />

      {/* 6. Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </main>
  );
}
