"use client";

import { useRef } from "react";
import { CategoryGroup, Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage, TranslationKey } from "@/lib/i18n";

interface ProductSliderProps {
  category: CategoryGroup;
  onSelectProduct: (product: Product) => void;
}

export function ProductSlider({ category, onSelectProduct }: ProductSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
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

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id={`cat-${category.slug}`} className="mb-14 sm:mb-18 px-6 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Category Header */}
      <div className="flex items-end justify-between mb-5 pb-3 border-b border-neutral-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900">
              {getCategoryName(category.slug, category.name)}
            </h2>
            <span className="text-xs text-neutral-400 font-normal">
              ({category.products.length})
            </span>
          </div>
          {category.description && (
            <p className="text-xs text-neutral-500 mt-1 max-w-md font-light">
              {category.description}
            </p>
          )}
        </div>

        {/* Minimalist Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={slideLeft}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-full border border-neutral-200 text-neutral-600 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={slideRight}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-full border border-neutral-200 text-neutral-600 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Slider Carousel Container */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth hide-scrollbar w-full py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {category.products.map((product) => (
            <div key={product.id} className="min-w-[260px] sm:min-w-[280px] max-w-[280px] shrink-0">
              <ProductCard
                product={product}
                onSelect={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


