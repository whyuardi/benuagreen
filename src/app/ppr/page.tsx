"use client";

import { useState } from "react";
import { CATEGORIES_DATA, Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Droplets, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PPRPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const pprCategory = CATEGORIES_DATA.find((cat) => cat.id === "ppr");
  const pprProducts = pprCategory ? pprCategory.products : [];

  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Editorial Header */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            Piping & Irrigation Division
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            PPR Pipes & Precision Irrigation
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Food-grade Polypropylene Random Copolymer pipes, flat and round drip tapes, and precision micro-irrigation lines.
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
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">50+ Years Lifespan</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Zero scaling, non-toxic, and resistant to corrosion even under extreme fluid temperatures.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">UV Stabilized</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Engineered for outdoor agricultural exposure with high burst pressure limits.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">Precision Drippers</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                Anti-clogging labyrinth flow channels maximize uniform water delivery across row crops.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-100">
            <h2 className="text-xl font-medium text-neutral-900">
              Product Collection ({pprProducts.length})
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

