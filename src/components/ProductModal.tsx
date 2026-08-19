"use client";

import { Product } from "@/lib/products";
import { Check, MessageSquare, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product && !isOpen) return null;

  const waMessage = language === "id"
    ? `Halo Benua Green, saya ingin meminta penawaran harga untuk produk: ${product?.name}`
    : `Hello Benua Green, I would like to request a quotation for: ${product?.name}`;

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 z-10"
          >
            {/* Close button top right */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100/80 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

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
                  <div className="text-left space-y-1 mb-4">
                    <h3 className="text-xl font-semibold text-neutral-900 leading-tight pr-6">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed pt-2 font-light">
                      {product.description || "High-performance energy and water management equipment engineered for reliability."}
                    </p>
                  </div>

                  {product.features && product.features.length > 0 && (
                    <div className="space-y-2 mt-5">
                      <h4 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider">
                        {t("modal.specs")}
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
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-full py-2.5 px-4 transition-colors flex items-center justify-center gap-2 text-xs text-center shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t("modal.requestQuote")}</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 text-xs font-medium transition-colors"
                  >
                    {t("modal.close")}
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}





