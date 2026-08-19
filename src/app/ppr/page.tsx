"use client";

import { useState } from "react";
import { CATEGORIES_DATA, Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Droplets, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function PPRPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useLanguage();

  const pprCategory = CATEGORIES_DATA.find((cat) => cat.id === "ppr");
  const pprProducts = pprCategory ? pprCategory.products : [];

  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Editorial Header */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            {t("ppr.division")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            {t("ppr.title")}
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t("ppr.desc")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12">
        {/* Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">{t("ppr.feat1.title")}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                {t("ppr.feat1.desc")}
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">{t("ppr.feat2.title")}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                {t("ppr.feat2.desc")}
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">{t("ppr.feat3.title")}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                {t("ppr.feat3.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-100">
            <h2 className="text-xl font-medium text-neutral-900">
              {t("ppr.collection")} ({pprProducts.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pprProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}


