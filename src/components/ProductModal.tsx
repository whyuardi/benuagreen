"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Product } from "@/lib/products";
import { Check, MessageSquare, X } from "lucide-react";
import Image from "next/image";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-2xl p-0 border-neutral-200 shadow-2xl bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image Area */}
          <div className="relative bg-[#F8F9FA] p-8 flex items-center justify-center min-h-[260px] md:min-h-[360px] border-b md:border-b-0 md:border-r border-neutral-100">
            <div className="relative w-full h-56 md:h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Details Area */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <DialogHeader className="text-left space-y-1 mb-4">
                <DialogTitle className="text-xl font-semibold text-neutral-900 leading-tight">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-neutral-500 leading-relaxed pt-2">
                  {product.description || "High-performance energy and water management equipment engineered for reliability."}
                </DialogDescription>
              </DialogHeader>

              {product.features && product.features.length > 0 && (
                <div className="space-y-2 mt-5">
                  <h4 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider">
                    Specifications & Features
                  </h4>
                  <ul className="space-y-1.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Hello Benua Green, I would like to request a quotation for: ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full py-2.5 px-4 transition-colors flex items-center justify-center gap-2 text-xs text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Request Price Quotation</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}



