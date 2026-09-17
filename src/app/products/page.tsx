"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Search, SlidersHorizontal, ArrowRight, Check } from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  specs: string[];
  capacity?: string;
  description: string;
}

const CATEGORIES = [
  { name: "All Products", slug: "all" },
  { name: "Chiller", slug: "chiller" },
  { name: "Cooling Tower", slug: "cooling-tower" },
  { name: "Steam Accessories", slug: "steam-accessories" },
  { name: "Solar Panel", slug: "solar-panel" },
  { name: "High Efficiency Pump", slug: "high-efficiency-pump" },
  { name: "PPR Pipe & Fittings", slug: "ppr-pipe-fittings" },
  { name: "Solar Inverter Optimizer", slug: "solar-inverter-optimizer" },
  { name: "Alkaline Water Ionizer", slug: "alkaline-water-ionizer" },
  { name: "Mini Chiller YCAE", slug: "mini-chiller-ycae" },
  { name: "Mini Chiller YCWE", slug: "mini-chiller-ycwe" },
  { name: "Magnetic Centrifugal Chiller", slug: "magnetic-chiller" },
  { name: "Absorption Chiller", slug: "absorption-chiller" },
];

const ALL_PRODUCTS: ProductItem[] = [
  // Mini Chiller YCAE
  {
    id: "ycae-185",
    name: "Mini Chiller YCAE 18,5 TR",
    category: "Mini Chiller YCAE",
    categorySlug: "mini-chiller-ycae",
    image: "/images/products/prod_1.png",
    specs: ["R-410A Eco Refrigerant", "High COP Efficiency", "Air-Cooled Scroll Compressor"],
    capacity: "18.5 TR (65 kW)",
    description: "Chiller modular air-cooled efisiensi tinggi berstandar YORK Johnson Controls, dirancang untuk pendinginan gedung komersial dengan instalasi cepat.",
  },
  {
    id: "ycae-284",
    name: "Mini Chiller YCAE 28,4 TR",
    category: "Mini Chiller YCAE",
    categorySlug: "mini-chiller-ycae",
    image: "/images/products/prod_1.png",
    specs: ["Modular Stacking Capability", "Low Noise Fan Design", "Microcomputer Control System"],
    capacity: "28.4 TR (100 kW)",
    description: "Sistem chiller modular berkapasitas 28,4 TR yang dapat dihubungkan hingga belasan modul untuk memenuhi fluktuasi beban gedung.",
  },
  {
    id: "ycae-37",
    name: "Mini Chiller YCAE 37 TR",
    category: "Mini Chiller YCAE",
    categorySlug: "mini-chiller-ycae",
    image: "/images/products/prod_1.png",
    specs: ["Dual Refrigerant Circuit", "Smart Defrosting Logic", "High EER Rating"],
    capacity: "37 TR (130 kW)",
    description: "Kapasitas terbesar di seri YCAE, memberikan pendinginan optimal untuk pabrik, rumah sakit, dan pusat perbelanjaan.",
  },

  // Mini Chiller YCWE
  {
    id: "ycwe-21",
    name: "Mini Chiller YCWE 21 TR",
    category: "Mini Chiller YCWE",
    categorySlug: "mini-chiller-ycwe",
    image: "/images/products/prod_2.png",
    specs: ["Water-Cooled Shell & Tube", "Modular Design", "Ultra High COP 5.6"],
    capacity: "21 TR",
    description: "Water-cooled modular chiller YORK YCWE dengan efisiensi energi terdepan untuk fasilitas yang menggunakan cooling tower.",
  },
  {
    id: "ycwe-32",
    name: "Mini Chiller YCWE 32 TR",
    category: "Mini Chiller YCWE",
    categorySlug: "mini-chiller-ycwe",
    image: "/images/products/prod_2.png",
    specs: ["Compact Footprint", "Independent Dual Compressor", "Smart BACnet Integration"],
    capacity: "32 TR",
    description: "Chiller air berkinerja tinggi yang fleksibel untuk proyek retrofit ruang mekanikal terbatas.",
  },
  {
    id: "ycwe-42",
    name: "Mini Chiller YCWE 42 TR",
    category: "Mini Chiller YCWE",
    categorySlug: "mini-chiller-ycwe",
    image: "/images/products/prod_2.png",
    specs: ["Maximum Modular Capacity", "Zero Vibration Isolation", "AHRI Certified Performance"],
    capacity: "42 TR",
    description: "Kapasitas 42 TR dengan keandalan kompresor scroll ganda dan kontrol cerdas terintegrasi.",
  },

  // Magnetic Centrifugal Chiller
  {
    id: "yms-magnetic",
    name: "YMS Magnetic Centrifugal Chiller",
    category: "Magnetic Centrifugal Chiller",
    categorySlug: "magnetic-chiller",
    image: "/images/products/prod_14.png",
    specs: ["Oil-Free Magnetic Bearing", "Ultra High IPLV > 10.0", "Zero Mechanical Friction"],
    capacity: "150 - 1,000 TR",
    description: "Chiller sentrifugal berteknologi magnetic levitation tanpa oli, menghemat konsumsi energi listrik hingga 45% dibanding chiller konvensional.",
  },

  // Absorption Chiller
  {
    id: "libr-direct-fired",
    name: "Double Effect Direct Fired Absorption Chiller",
    category: "Absorption Chiller",
    categorySlug: "absorption-chiller",
    image: "/images/products/prod_2.png",
    specs: ["Direct Gas / Diesel Fired", "Non-Electric Cooling Cycle", "LiBr Eco Solution"],
    capacity: "100 - 2,000 TR",
    description: "Chiller absorpsi berbahan bakar gas alam atau diesel, meniadakan lonjakan beban listrik puncak pada gedung besar.",
  },
  {
    id: "libr-steam-fired",
    name: "Double Effect Steam Fired Absorption Chiller",
    category: "Absorption Chiller",
    categorySlug: "absorption-chiller",
    image: "/images/products/prod_2.png",
    specs: ["Steam Powered (0.4 - 0.8 MPa)", "Recovers Factory Waste Steam", "Zero Greenhouse GWP"],
    capacity: "150 - 2,500 TR",
    description: "Memanfaatkan uap buangan boiler pabrik untuk memproduksi air pendingin dingin 7°C secara gratis tanpa biaya listrik tambahan.",
  },

  // High Efficiency Pumps
  {
    id: "svx-pump",
    name: "SVX Waste Water Submersible Pump",
    category: "High Efficiency Pump",
    categorySlug: "high-efficiency-pump",
    image: "/images/products/prod_4.png",
    specs: ["Vortex Impeller", "Passage up to 80mm", "Dual Silicon Carbide Mechanical Seal"],
    capacity: "Discharge 50 - 200 mm",
    description: "Pompa celup air limbah heavy-duty untuk pengolahan limbah gedung bertingkat, industri kimia, dan instalasi STP/WWTP.",
  },
  {
    id: "sdw-pump",
    name: "SDW Sewage & Drainage Pump",
    category: "High Efficiency Pump",
    categorySlug: "high-efficiency-pump",
    image: "/images/products/prod_5.png",
    specs: ["Non-Clog Cutter / Channel Impeller", "IP68 Submersible Motor", "Thermal Overload Protection"],
    capacity: "Power 1.5 - 75 kW",
    description: "Pompa pengolah limbah pekat dengan kemampuan non-clogging untuk stasiun pompa kota dan kawasan industri.",
  },
  {
    id: "sseg-pump",
    name: "SSEG Stainless Steel End-Suction Pump",
    category: "High Efficiency Pump",
    categorySlug: "high-efficiency-pump",
    image: "/images/products/prod_6.png",
    specs: ["SS304 / SS316 Wetted Material", "ISO 2858 Standard", "Corrosion Resistant"],
    capacity: "Flow to 400 m³/h, Head to 125m",
    description: "Pompa sanitari berbahan stainless steel penuh untuk industri farmasi, air minum, dan sirkulasi air kimia.",
  },
  {
    id: "split-case-pump",
    name: "Horizontal Split Case Centrifugal Pump",
    category: "High Efficiency Pump",
    categorySlug: "high-efficiency-pump",
    image: "/images/products/prod_3.png",
    specs: ["Double Suction Impeller", "Heavy Duty Cast Iron / Bronze", "Easy In-Line Maintenance"],
    capacity: "Flow up to 4,500 m³/h",
    description: "Pompa sirkulasi air kondensor chiller dan jaringan distribusi utama gedung dengan efisiensi hidrolik prima.",
  },
  {
    id: "crp-pump",
    name: "CRP Chemical Self-Priming Pump",
    category: "High Efficiency Pump",
    categorySlug: "high-efficiency-pump",
    image: "/images/products/prod_7.png",
    specs: ["Self-Priming Lift up to 6.5m", "Semi-Open Anti-Clog Impeller", "Corrosion Resistant"],
    capacity: "Flow up to 250 m³/h",
    description: "Pompa self-priming untuk cairan korosif, bahan bakar, dan cairan yang mengandung partikel padat.",
  },

  // PPR Pipe & Fittings
  {
    id: "ppr-pn20",
    name: "PPR Hot & Cold Water Pipe PN20 / PN25",
    category: "PPR Pipe & Fittings",
    categorySlug: "ppr-pipe-fittings",
    image: "/images/products/prod_8.png",
    specs: ["PP-R 100 Virgin Raw Material", "Operating Temp up to 95°C", "Lifespan > 50 Years"],
    capacity: "20mm - 160mm",
    description: "Pipa PPR food grade bebas karat dan anti kerak untuk sistem distribusi air panas hotel, rumah sakit, dan kondominium.",
  },
  {
    id: "ppr-electrofusion",
    name: "PPR Electrofusion & Butt Welding Fittings",
    category: "PPR Pipe & Fittings",
    categorySlug: "ppr-pipe-fittings",
    image: "/images/products/prod_9.png",
    specs: ["Precision Heating Elements", "Zero Leak Monolithic Joint", "Pressure Rating PN25"],
    capacity: "63mm - 250mm",
    description: "Sambungan fitting elektrofusi bertekanan tinggi untuk penyambungan pipa berdiameter besar dengan keandalan maksimal.",
  },

  // Solar Panel
  {
    id: "solar-pv-modules",
    name: "Tier-1 High Efficiency Monocrystalline Solar PV Modules",
    category: "Solar Panel",
    categorySlug: "solar-panel",
    image: "/images/products/prod_1.png",
    specs: ["Module Efficiency 22.5%+", "N-Type TOPCon Cells", "Anti-PID & Salt Mist Certified"],
    capacity: "550W - 670W",
    description: "Modul surya fotovoltaik monokristalin efisiensi tinggi bergaransi performa 25 tahun untuk aplikasi industri dan PLTS atap komersial.",
  },

  // Solar Inverter Optimizer
  {
    id: "solar-drive-vfd",
    name: "Solar VFD Inverter Pump Optimizer",
    category: "Solar Inverter Optimizer",
    categorySlug: "solar-inverter-optimizer",
    image: "/images/products/prod_13.png",
    specs: ["MPPT Tracking 99.2%", "Battery-Free Direct Solar Drive", "Automatic Grid Switching"],
    capacity: "0.75 - 110 kW",
    description: "Inverter surya penggerak motor pompa langsung dari energi panel surya untuk penghematan listrik berkelanjutan.",
  },

  // Cooling Tower
  {
    id: "cooling-tower-frp",
    name: "Closed Circuit Cooling Tower FRP",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    image: "/images/products/prod_14.png",
    specs: ["Non-Corrosive FRP Casing", "Low Noise Aerofoil Fan", "Water Saving Coil System"],
    capacity: "50 - 1,000 TR",
    description: "Menara pendingin sirkuit tertutup untuk memastikan air kondenser chiller tetap bersih dari kotoran udara.",
  },
  {
    id: "cooling-tower-crossflow",
    name: "Industrial Cross-Flow Evaporative Cooling Tower",
    category: "Cooling Tower",
    categorySlug: "cooling-tower",
    image: "/images/products/prod_1.png",
    specs: ["High Efficiency PVC Film Fill", "Low Drift Loss Design", "Axial Aero Fan"],
    capacity: "100 - 1,500 TR",
    description: "Menara pendingin cross-flow evaporatif dengan efisiensi pertukaran kalor optimal untuk fasilitas pabrik dan pendingin chiller.",
  },

  // Steam Accessories
  {
    id: "steam-trap-biomass",
    name: "Thermodynamic & Float Steam Traps / Heat Exchangers",
    category: "Steam Accessories",
    categorySlug: "steam-accessories",
    image: "/images/products/prod_3.png",
    specs: ["Zero Live Steam Loss", "Stainless Steel SS316 Disc", "Rating PN16 - PN40"],
    capacity: "Max Temp 350°C",
    description: "Steam trap presisi dan penukar panas uap untuk boiler biomassa, steam drum, dan siklus chiller absorpsi hemat energi.",
  },

  // Alkaline Water Ionizer
  {
    id: "alkaline-water-ionizer",
    name: "Industrial Alkaline Water Ionizer & Electrolysis System",
    category: "Alkaline Water Ionizer",
    categorySlug: "alkaline-water-ionizer",
    image: "/images/products/prod_7.png",
    specs: ["Platinum Titanium Electrodes", "Continuous Flow Electrolysis", "High ORP Reduction"],
    capacity: "Flow 500 - 5,000 L/h",
    description: "Sistem elektrolisis air ionisasi alkali industri untuk netralisasi keasaman, sanitasi ramah lingkungan, dan efisiensi pengolahan air proses.",
  },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const productParam = searchParams.get("product");

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState<string>(searchParam || "");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParam]);

  useEffect(() => {
    if (productParam) {
      const found = ALL_PRODUCTS.find((p) => p.id === productParam);
      if (found) {
        setActiveModalProduct(found);
      }
    }
  }, [productParam]);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      let matchCategory = selectedCategory === "all";
      if (!matchCategory) {
        if (selectedCategory === "chiller" || selectedCategory === "chillers") {
          matchCategory = item.categorySlug.includes("chiller");
        } else if (selectedCategory === "pumps") {
          matchCategory = item.categorySlug === "high-efficiency-pump";
        } else if (selectedCategory === "ppr") {
          matchCategory = item.categorySlug === "ppr-pipe-fittings";
        } else if (selectedCategory === "cooling-air") {
          matchCategory = item.categorySlug === "cooling-tower";
        } else if (selectedCategory === "heating-power") {
          matchCategory = item.categorySlug === "steam-accessories";
        } else if (selectedCategory === "solar-drives") {
          matchCategory = item.categorySlug === "solar-panel" || item.categorySlug === "solar-inverter-optimizer";
        } else {
          matchCategory = item.categorySlug === selectedCategory;
        }
      }
      const matchSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryCount = (slug: string) => {
    if (slug === "all") return ALL_PRODUCTS.length;
    if (slug === "chiller" || slug === "chillers") {
      return ALL_PRODUCTS.filter((p) => p.categorySlug.includes("chiller")).length;
    }
    if (slug === "solar-panel" || slug === "solar-drives") {
      return ALL_PRODUCTS.filter((p) => p.categorySlug === "solar-panel" || p.categorySlug === "solar-inverter-optimizer").length;
    }
    return ALL_PRODUCTS.filter((p) => p.categorySlug === slug).length;
  };

  return (
    <main className="flex-grow bg-[#fcfdfc] text-neutral-800 font-sans pb-24">
      {/* ── BREADCRUMB & HEADER ── */}
      <section className="mt-[4.25rem] bg-[#f4f6f8] border-b border-neutral-200/70 py-6 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
              <Link href="/" className="hover:text-[#2a1768]">Home</Link>
              <span>/</span>
              <span className="text-[#2a1768] font-bold">Products</span>
              {selectedCategory !== "all" && (
                <>
                  <span>/</span>
                  <span className="text-neutral-700 capitalize font-medium">
                    {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1d1841]">
              Products
            </h1>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-[#2a1768]"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN SHOP CONTENT: SIDEBAR + PRODUCT GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT SIDEBAR: PRODUCT CATEGORIES ── */}
          <aside className="lg:col-span-3 bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs space-y-6 sticky top-24">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1d1841] mb-4 pb-2 border-b border-neutral-200 flex items-center justify-between">
                <span>Product Categories</span>
                <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
              </h3>

              <ul className="space-y-1.5 text-xs">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.slug;
                  return (
                    <li key={cat.slug}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between transition-all ${
                          isActive
                            ? "bg-[#2a1768] text-white font-bold shadow-xs"
                            : "text-neutral-700 hover:bg-neutral-50 hover:text-[#2a1768]"
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                        }`}>
                          {getCategoryCount(cat.slug)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Contact Badge */}
            <div className="pt-4 border-t border-neutral-200">
              <div className="bg-[#eef3f8] p-4 rounded-xl text-center space-y-2">
                <p className="text-xs font-bold text-[#1d1841]">Need Custom Engineered Capacity?</p>
                <p className="text-[11px] text-neutral-600">Consult with our licensed HVAC &amp; Pump engineers.</p>
                <Link
                  href="/contact"
                  className="inline-block mt-2 text-xs font-bold text-white bg-[#2a1768] px-4 py-2 rounded-full hover:bg-[#3b218f] transition-colors"
                >
                  Contact Engineering
                </Link>
              </div>
            </div>
          </aside>

          {/* ── RIGHT COLUMN: SHOP GRID ── */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Bar: Results Count */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 text-xs text-neutral-500">
              <p>
                Showing all <strong>{filteredProducts.length}</strong> results
              </p>
              <span className="text-neutral-400">Authorized Distributor Johnson Controls &amp; YORK</span>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
                <p className="text-sm font-bold text-neutral-600">No products found matching your search.</p>
                <button
                  onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                  className="px-4 py-2 text-xs bg-[#2a1768] text-white font-bold rounded-lg"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-5 group hover:-translate-y-1"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative w-full h-48 rounded-xl bg-[#fafafa] flex items-center justify-center p-3 mb-4 overflow-hidden border border-neutral-100">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          width={220}
                          height={180}
                          className="object-contain max-h-40 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Category */}
                      <span className="text-[11px] font-semibold text-neutral-400 block mb-1">
                        {prod.category}
                      </span>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-[#1d1841] leading-snug mb-2 group-hover:text-[#2a1768] transition-colors line-clamp-2">
                        {prod.name}
                      </h4>

                      {/* Capacity */}
                      {prod.capacity && (
                        <p className="text-[11px] text-emerald-700 font-mono font-semibold bg-emerald-50 px-2 py-0.5 rounded w-fit mb-3 border border-emerald-100">
                          {prod.capacity}
                        </p>
                      )}

                      {/* Specs */}
                      <ul className="space-y-1 mb-4 text-[11px] text-neutral-500">
                        {prod.specs.slice(0, 2).map((s, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="truncate">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions matching real site */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProduct(prod)}
                        className="text-xs font-semibold text-neutral-600 hover:text-[#2a1768] py-1.5 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        Details
                      </button>

                      <Link
                        href={`/contact?subject=Inquiry Product: ${encodeURIComponent(prod.name)}`}
                        className="text-xs font-bold text-white bg-[#2a1768] hover:bg-[#3d2391] px-4 py-2 rounded-full transition-colors shadow-xs inline-flex items-center gap-1"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ── DETAIL MODAL ── */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-[2000] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-24 h-24 bg-neutral-50 rounded-2xl border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">
                  {activeModalProduct.category}
                </span>
                <h3 className="text-lg font-bold text-[#1d1841] leading-snug">
                  {activeModalProduct.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div>
                <h4 className="font-bold text-[#1d1841] mb-1">Product Description:</h4>
                <p className="text-neutral-600 leading-relaxed text-justify">
                  {activeModalProduct.description}
                </p>
              </div>

              {activeModalProduct.capacity && (
                <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-mono text-xs">
                  <span className="font-bold text-neutral-900">Capacity / Sizing: </span>
                  <span className="text-emerald-700 font-bold">{activeModalProduct.capacity}</span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-[#1d1841] mb-2">Key Specifications:</h4>
                <ul className="space-y-1.5">
                  {activeModalProduct.specs.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-5 py-2.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-50"
              >
                Close
              </button>
              <Link
                href={`/contact?subject=Inquiry Product: ${encodeURIComponent(activeModalProduct.name)}`}
                className="px-6 py-2.5 rounded-full bg-[#2a1768] hover:bg-[#3d2391] text-white text-xs font-bold transition-colors shadow-md"
              >
                Inquire Product
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-28 text-center text-neutral-500 font-medium">
          Memuat katalog produk...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
