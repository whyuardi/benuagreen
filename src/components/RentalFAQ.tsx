"use client";

import { useState } from "react";
import { RENTAL_FAQS, RentalFAQItem } from "@/lib/rental";
import { useLanguage, TranslationKey } from "@/lib/i18n";
import { ChevronDown, HelpCircle, Shield, Clock, Truck, Wrench, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RentalFAQ() {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(RENTAL_FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "liability":
        return <Shield className="w-4 h-4 text-neutral-800" />;
      case "extension":
        return <Clock className="w-4 h-4 text-neutral-800" />;
      case "logistics":
        return <Truck className="w-4 h-4 text-neutral-800" />;
      case "installation":
        return <Wrench className="w-4 h-4 text-neutral-800" />;
      case "terms":
        return <FileText className="w-4 h-4 text-neutral-800" />;
      default:
        return <HelpCircle className="w-4 h-4 text-neutral-800" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 bg-neutral-50/60 border-t border-neutral-100" id="faq-rental">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase inline-flex items-center gap-1.5 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-800" />
            <span>{language === "id" ? "Tanya Jawab & Ketentuan" : "FAQ & Rental Terms"}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-neutral-900 mb-3">
            {t("faq.title")}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {RENTAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden transition-all shadow-none hover:border-neutral-400"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0 border border-neutral-100">
                      {getCategoryIcon(faq.category)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                      {t(faq.questionKey as TranslationKey)}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-neutral-900" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 leading-relaxed font-light pl-16 border-t border-neutral-50">
                        {t(faq.answerKey as TranslationKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-neutral-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold text-neutral-900">
              {language === "id" ? "Punya Pertanyaan Spesifik Terkait Proyek Anda?" : "Have Specific Questions for Your Project?"}
            </h4>
            <p className="text-[11px] text-neutral-500 font-light mt-0.5">
              {language === "id"
                ? "Konsultasikan kebutuhan debit, survei lokasi, dan estimasi biaya bersama tim teknis Benua Green."
                : "Consult flow requirements, site assessments, and cost estimates directly with Benua Green engineers."}
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Benua%20Green,%20saya%20ingin%20konsultasi%20mengenai%20sewa%20pompa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium shrink-0 transition-colors shadow-sm"
          >
            {language === "id" ? "Hubungi Tim Rental" : "Contact Rental Team"}
          </a>
        </div>

      </div>
    </section>
  );
}

