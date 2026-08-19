"use client";

import { useState, useMemo } from "react";
import { CATEGORIES_DATA, Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Search } from "lucide-react";

export default function PumpsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const pumpsCategory = CATEGORIES_DATA.find((cat) => cat.id === "pumps");
  const allPumps = pumpsCategory ? pumpsCategory.products : [];

  const filterKeywords: Record<string, string[]> = {
    waste: ["waste", "sewage", "drainage", "sseg", "sdw", "svx"],
    solar: ["solar", "dc", "open well", "mppt"],
    booster: ["booster", "pressure", "hydropneumatic", "shin"],
    multistage: ["multistage", "vertical", "centrifugal", "smtr"],
    submersible: ["submersible", "openwell", "4 inch", "deep"],
  };

  const filteredPumps = useMemo(() => {
    return allPumps.filter((pump) => {
      const matchesSearch =
        pump.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (pump.description && pump.description.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      if (filterType === "all") return true;

      const keywords = filterKeywords[filterType] || [];
      const text = `${pump.name} ${pump.description || ""}`.toLowerCase();
      return keywords.some((kw) => text.includes(kw));
    });
  }, [allPumps, searchTerm, filterType]);

  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Editorial Header */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            Pumping Systems Division
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            High-Efficiency Pumps
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive range of wastewater, solar surface, multistage, booster, and deep well pumping systems.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-10">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-100">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search pump models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:border-neutral-400"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: "all", label: "All Pumps" },
              { id: "solar", label: "Solar & DC" },
              { id: "booster", label: "Booster" },
              { id: "multistage", label: "Multistage" },
              { id: "waste", label: "Wastewater" },
              { id: "submersible", label: "Submersible" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filterType === tab.id
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs text-neutral-400 font-medium">
            Showing {filteredPumps.length} of {allPumps.length} pump models
          </p>
        </div>

        {filteredPumps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPumps.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-100 p-8">
            <p className="text-neutral-500 text-xs mb-4">No pump models match the current search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterType("all");
              }}
              className="bg-neutral-900 text-white rounded-full px-4 py-2 text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

