"use client";

import { useState, useMemo } from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductSlider } from "@/components/ProductSlider";
import { ProductModal } from "@/components/ProductModal";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES_DATA, Product } from "@/lib/products";
import { ArrowRight, LayoutGrid, SlidersHorizontal, SearchX } from "lucide-react";
import Link from "next/link";
import { useLanguage, TranslationKey } from "@/lib/i18n";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const { t } = useLanguage();

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
      {/* Minimalist Hero */}
      <HeroBanner
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto pt-8">
        
        {/* If user is actively searching */}
        {searchQuery.trim() ? (
          <div className="px-6 sm:px-8 py-4">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-100">
              <div>
                <h2 className="text-lg font-medium text-neutral-900">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                <SearchX className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-sm font-medium text-neutral-800 mb-1">
                  {t("catalog.noProducts")}
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-5 font-light">
                  {t("catalog.noProductsDesc")}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-5 py-2 text-xs font-medium transition-colors"
                >
                  {t("catalog.viewAll")}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Catalog View Mode Switcher */
          <div>
            <div className="px-6 sm:px-8 mb-8 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block">
                  {t("catalog.collection")}
                </span>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900">
                  {selectedCategory === "all"
                    ? t("catalog.allProducts")
                    : getCategoryName(displayedCategories[0]?.slug, displayedCategories[0]?.name)}
                </h2>
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full">
                <button
                  onClick={() => setViewMode("slider")}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                    viewMode === "slider"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span className="hidden sm:inline">{t("catalog.carousel")}</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span className="hidden sm:inline">{t("catalog.grid")}</span>
                </button>
              </div>
            </div>

            {/* Slider View Mode */}
            {viewMode === "slider" ? (
              <div className="space-y-4">
                {displayedCategories.map((category) => (
                  <ProductSlider
                    key={category.id}
                    category={category}
                    onSelectProduct={setSelectedProduct}
                  />
                ))}
              </div>
            ) : (
              /* Grid View Mode */
              <div className="px-6 sm:px-8">
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
          </div>
        )}

        {/* Minimalist Editorial Story Section */}
        <section className="my-20 sm:my-28 px-6 sm:px-8 border-t border-neutral-100 pt-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              
              <div className="md:col-span-5">
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider block mb-2">
                  {t("story.label")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight leading-snug">
                  {t("story.title")}
                </h3>
              </div>

              <div className="md:col-span-7 space-y-4 text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  {t("story.p1")}
                </p>
                <p>
                  {t("story.p2")}
                </p>
                <div className="pt-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>{t("story.readMore")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Clean Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 mt-16 border-t border-neutral-100">
              <div>
                <p className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">40+</p>
                <p className="text-xs text-neutral-400 mt-1">{t("metrics.models")}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">99%</p>
                <p className="text-xs text-neutral-400 mt-1">{t("metrics.mppt")}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">50+ Yrs</p>
                <p className="text-xs text-neutral-400 mt-1">{t("metrics.life")}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">24/7</p>
                <p className="text-xs text-neutral-400 mt-1">{t("metrics.support")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimalist Inquiry Callout */}
        <section className="my-12 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto bg-neutral-50 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-100">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-medium text-neutral-900">
                {t("inquiry.title")}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-light">
                {t("inquiry.desc")}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-full transition-all shadow-sm"
              >
                <span>{t("inquiry.btn")}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}




