"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowRight, Check, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

interface CarouselProduct {
  id: number;
  name: string;
  image: string;
  category: { id: string; en: string };
  description: { id: string; en: string };
  specs: { id: string[]; en: string[] };
}

export function ProductsCarousel() {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<CarouselProduct | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const products: CarouselProduct[] = [
    {
      id: 1,
      name: "Waste Water Pump",
      image: "/images/benua/39-SSEG-Waste-Water-Pumps.png",
      category: { id: "Pompa Air Limbah", en: "Wastewater Pump" },
      description: {
        id: "Pompa celup air limbah heavy-duty dirancang untuk pembuangan limbah industri, saluran drainase kota, dan pengolahan limbah tanpa risiko penyumbatan.",
        en: "Heavy-duty submersible wastewater pump engineered for industrial effluent, municipal drainage, and sewage treatment with anti-clogging performance.",
      },
      specs: {
        id: [
          "Konstruksi besi tuang tahan korosi & abrasi",
          "Impeller vortex anti-clogging berdaya tahan tinggi",
          "Proteksi motor tahan air standar IP68",
        ],
        en: [
          "Corrosion & abrasion-resistant cast iron construction",
          "High-durability anti-clogging vortex impeller",
          "IP68 submersible heavy-duty motor protection",
        ],
      },
    },
    {
      id: 2,
      name: "Slow Speed Pump (SSS Series)",
      image: "/images/benua/45-Slow-Speed-Pumps.png",
      category: { id: "Pompa Industri RPM Rendah", en: "Slow Speed Pump" },
      description: {
        id: "Pompa berkecepatan rendah (low-RPM) dengan getaran minimal dan tingkat kebisingan sangat rendah, ideal untuk sirkulasi air kontinu berumur panjang.",
        en: "Low-RPM industrial pump delivering ultra-low vibration and minimal noise, designed for continuous duty and extended operational lifespan.",
      },
      specs: {
        id: [
          "Desain RPM rendah minim getaran & keausan",
          "Dapat beroperasi 24/7 non-stop secara efisien",
          "Efisiensi energi tinggi dengan motor standar IE3",
        ],
        en: [
          "Low-RPM design minimizing vibration and wear",
          "Continuous 24/7 duty cycle reliability",
          "High energy efficiency with premium IE3 motor",
        ],
      },
    },
    {
      id: 3,
      name: "Shallow Well Pump (SSW Series)",
      image: "/images/benua/44-Shallow-Well-Pumps.png",
      category: { id: "Pompa Sumur Dangkal", en: "Shallow Well Pump" },
      description: {
        id: "Pompa hisap dangkal otomatis berkinerja tinggi untuk pasokan air bersih gedung, perumahan, dan fasilitas komersial dengan daya dorong kuat.",
        en: "High-performance automatic shallow well suction pump for clean water distribution in commercial buildings and facilities with strong head pressure.",
      },
      specs: {
        id: [
          "Daya hisap kuat hingga kedalaman standar industri",
          "Dilengkapi proteksi termal otomatis motor",
          "Tekanan stabil dengan konsumsi daya hemat",
        ],
        en: [
          "Powerful suction lift with high flow delivery",
          "Built-in automatic thermal motor protection",
          "Consistent pressure output with low wattage",
        ],
      },
    },
    {
      id: 4,
      name: "Horizontal Split Case Pump (SHS Series)",
      image: "/images/benua/43-Horizontal-Split-Case-Pumps.png",
      category: { id: "Pompa Split Case Horisontal", en: "Horizontal Split Case Pump" },
      description: {
        id: "Pompa split case double suction berkapasitas debit ekstra besar untuk sistem pendingin HVAC gedung bertingkat, pabrik, dan jaringan hidran proteksi kebakaran.",
        en: "Double-suction axially split case pump engineered for massive flow capacities in HVAC chiller loops, industrial waterworks, and fire hydrant networks.",
      },
      specs: {
        id: [
          "Casing split aksial memudahkan servis tanpa melepas pipa",
          "Debit aliran sangat besar hingga ribuan m³/jam",
          "Balancing hidraulik sempurna minim gaya aksial",
        ],
        en: [
          "Axially split casing for quick maintenance in place",
          "Extra high volumetric flow rate up to thousands m³/h",
          "Hydraulic double suction balancing axial thrust",
        ],
      },
    },
    {
      id: 5,
      name: "Self-Priming Pumps (MEGH Series)",
      image: "/images/benua/42-Megh-Self-Priming-Pumps.png",
      category: { id: "Pompa Self-Priming", en: "Self-Priming Pump" },
      description: {
        id: "Pompa sentrifugal self-priming berdaya hisap mandiri cepat tanpa perlu pancingan air berulang, andal untuk transfer cairan industri dan irigasi.",
        en: "Self-priming centrifugal pump offering rapid automatic re-priming without foot valves, optimal for industrial fluid transfer and plant drainage.",
      },
      specs: {
        id: [
          "Mekanisme self-priming otomatis tanpa foot-valve",
          "Konstruksi back pull-out memudahkan inspeksi",
          "Tahan partikel padat tersuspensi ringan",
        ],
        en: [
          "Rapid self-priming capability without foot-valve",
          "Back pull-out construction for effortless overhaul",
          "Tolerates light suspended solids and debris",
        ],
      },
    },
    {
      id: 6,
      name: "Self-Priming Pumps (CRP Series)",
      image: "/images/benua/41-CRP-Self-Priming-Pumps.png",
      category: { id: "Pompa Self-Priming Kompak", en: "Compact Self-Priming Pump" },
      description: {
        id: "Solusi pompa self-priming kompak dan efisien untuk utilitas sirkulasi pabrik, booster air bersih, dan pemindahan cairan kimia ringan.",
        en: "Compact and robust self-priming pump ideal for factory utility loops, clean water boosting, and non-corrosive chemical fluid transfer.",
      },
      specs: {
        id: [
          "Dimensi ringkas hemat ruang instalasi pipa",
          "Mechanical seal berkualitas tinggi anti bocor",
          "Perawatan sangat mudah dan suku cadang terjamin",
        ],
        en: [
          "Space-saving compact footprint for tight skids",
          "Premium leak-proof mechanical shaft seal",
          "Simple maintenance with readily available parts",
        ],
      },
    },
    {
      id: 7,
      name: "Non Self-Priming Pumps (NSP Series)",
      image: "/images/benua/40-NSP-Non-Self-Priming-Pumps.png",
      category: { id: "Pompa Sentrifugal Standar", en: "Non Self-Priming Pump" },
      description: {
        id: "Pompa sentrifugal efisiensi tinggi standar ISO/DIN untuk sirkulasi air pendingin chiller, menara pendingin (cooling tower), dan sirkulasi air proses.",
        en: "High-efficiency ISO/DIN end-suction centrifugal pump built for cooling tower recirculation, chiller condenser water, and plant process cooling.",
      },
      specs: {
        id: [
          "Efisiensi hidraulik optimal dengan motor hemat listrik",
          "Kompatibel dengan sistem perpipaan standar internasional",
          "Tahan temperatur cairan tinggi dan operasional berat",
        ],
        en: [
          "Optimal hydraulic efficiency lowering electricity bills",
          "Full compliance with international piping standards",
          "High operating temperature and pressure endurance",
        ],
      },
    },
    {
      id: 8,
      name: "SSEG Waste Water Pump",
      image: "/images/benua/38-SDW-Waste-Water-Pumps.png",
      category: { id: "Pompa Celup Penggiling Limbah", en: "Grinder Waste Water Pump" },
      description: {
        id: "Pompa limbah submersible dengan mekanisme pemotong dan penggiling (grinder) untuk menghancurkan partikel padat keras pada saluran pembuangan.",
        en: "Submersible wastewater pump equipped with heavy-duty grinder and shredder mechanism to macerate solids and prevent pipe clogging.",
      },
      specs: {
        id: [
          "Pisau pemotong baja keras anti-macet",
          "Mampu menghancurkan serat dan padatan organik limbah",
          "Segel ganda (double mechanical seal) berpelumas oli",
        ],
        en: [
          "Hardened steel cutting blade prevents clogging",
          "Macerates rags, fibers, and organic solids",
          "Oil-lubricated dual mechanical shaft seals",
        ],
      },
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#87a7c8] via-[#a2bfdc] to-[#c1d6ea]"
      id="catalog"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.4) 0%, rgba(135,167,200,0.8) 70%, rgba(110,145,185,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase drop-shadow-md mb-2">
            {language === "id" ? "PRODUK KAMI" : "OUR PRODUCTS"}
          </h2>
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/95 drop-shadow-sm">
            {language === "id"
              ? "TEMUKAN SOLUSI RAMAH LINGKUNGAN TERBARU DARI BENUA GREEN ENERGY. MEMBENTUK HARI ESOK YANG BERKELANJUTAN."
              : "DISCOVER BENUA GREEN ENERGY'S NEWEST ECO-FRIENDLY SOLUTIONS. SHAPING A SUSTAINABLE TOMORROW."}
          </p>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-700 hover:text-[#2a1768] hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-700 hover:text-[#2a1768] hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scroll-smooth hide-scrollbar px-2 py-4"
          >
            {products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="w-64 sm:w-72 shrink-0 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-transparent hover:border-emerald-400 group/card relative"
              >
                {/* Badge Category */}
                <span className="self-start text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 mb-2">
                  {language === "id" ? prod.category.id : prod.category.en}
                </span>

                {/* Product Image Box */}
                <div className="relative w-full h-48 sm:h-52 mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain p-2 group-hover/card:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-center font-bold text-[#1d1841] text-xs sm:text-sm mb-4 leading-tight group-hover/card:text-[#2a1768] transition-colors line-clamp-2">
                  {prod.name}
                </h3>

                {/* Detail Action Button */}
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-xl bg-neutral-50 group-hover/card:bg-[#2a1768] text-neutral-700 group-hover/card:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{language === "id" ? "Lihat Detail" : "View Details"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── DETAIL MODAL POPUP ── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header / Image info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-24 h-24 bg-neutral-50 rounded-2xl border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="pr-6">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  {language === "id" ? selectedProduct.category.id : selectedProduct.category.en}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d1841] leading-snug">
                  {selectedProduct.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                {language === "id" ? "Deskripsi Produk:" : "Product Description:"}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                {language === "id" ? selectedProduct.description.id : selectedProduct.description.en}
              </p>
            </div>

            {/* Key Specs */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                {language === "id" ? "Spesifikasi Utama:" : "Key Specifications:"}
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700">
                {(language === "id" ? selectedProduct.specs.id : selectedProduct.specs.en).map(
                  (spec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{spec}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-200 text-xs font-bold text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                {language === "id" ? "Tutup" : "Close"}
              </button>

              <a
                href={`https://wa.me/+628176779719?text=${encodeURIComponent(
                  language === "id"
                    ? `Halo Benua Green Energy, saya tertarik untuk konsultasi & penawaran harga produk: ${selectedProduct.name}`
                    : `Hello Benua Green Energy, I would like to inquire about the product: ${selectedProduct.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 px-6 rounded-full bg-[#2a1768] hover:bg-[#3d2391] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === "id" ? "Konsultasi via WhatsApp" : "Inquire via WhatsApp"}</span>
              </a>

              <Link
                href="/products?category=high-efficiency-pump"
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors inline-flex items-center justify-center gap-1"
              >
                <span>{language === "id" ? "Katalog Pompa" : "Pump Catalog"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
