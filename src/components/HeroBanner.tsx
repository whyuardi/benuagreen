"use client";

import { Search } from "lucide-react";
import { CATEGORIES_DATA } from "@/lib/products";

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
  const totalCount = CATEGORIES_DATA.reduce((acc, c) => acc + c.products.length, 0);

  return (
    <section className="mt-[4.25rem] pt-14 pb-10 sm:pt-20 sm:pb-14 px-6 sm:px-8 border-b border-neutral-100 bg-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Subtle Label */}
        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          Sustainable Pumping & Energy Systems
        </span>

        {/* Minimalist Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-900 mb-5 leading-[1.15]">
          Simplicity in engineering, <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-neutral-800">
            reliability in energy.
          </span>
        </h1>

        <p className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed mb-10">
          Curated catalog of high-efficiency solar submersible pumps, intelligent variable speed drives, pure sine inverters, and certified PPR infrastructure.
        </p>

        {/* Minimalist Search Input */}
        <div className="w-full max-w-md relative mb-8" id="catalog">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products or equipment series..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-12 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-neutral-400 transition-all shadow-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 text-[11px] font-medium text-neutral-400 hover:text-neutral-900 px-2 py-0.5 rounded transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Clean Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onSelectCategory("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
              selectedCategory === "all"
                ? "bg-neutral-900 text-white font-medium shadow-sm"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            All ({totalCount})
          </button>
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                selectedCategory === cat.slug
                  ? "bg-neutral-900 text-white font-medium shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}



