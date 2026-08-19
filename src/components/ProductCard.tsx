"use client";

import { Product } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-300 transition-all duration-300 p-3 sm:p-4"
    >
      {/* Product Image Frame */}
      <div className="relative h-60 sm:h-64 w-full bg-[#F8F9FA] rounded-xl flex items-center justify-center p-6 mb-4 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            unoptimized
          />
        </div>
      </div>

      {/* Product Meta */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block mb-1">
            {product.category}
          </span>
          <h3
            className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2 leading-snug"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        <div className="pt-4 mt-auto flex items-center justify-between border-t border-neutral-100">
          <span className="text-xs text-neutral-500 font-medium group-hover:text-neutral-900 transition-colors">
            View Details
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </div>
  );
}



