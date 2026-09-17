"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export interface ProjectLocation {
  id: string;
  name: string;
  clientGroup: string;
  logo: string;
  category: "Industrial Manufacturing" | "Pulp & Paper Mill" | "Food & Beverage" | "Commercial Superblock";
  locationName: string;
  province: string;
  lat: number;
  lng: number;
  scope: string;
  specs: string[];
  impact: string;
}

export const PROJECT_LOCATIONS: ProjectLocation[] = [
  {
    id: "rapp",
    name: "PT. Riau Andalan Pulp & Paper",
    clientGroup: "APRIL Group",
    logo: "/images/clients/april.png",
    category: "Pulp & Paper Mill",
    locationName: "Pangkalan Kerinci",
    province: "Riau",
    lat: 0.3167,
    lng: 101.9333,
    scope: "Waste Heat Recovery, Steam Trap Integration & High-Pressure Multistage Pumps",
    specs: ["Stainless Steel High-Pressure Booster Arrays", "High-Enthalpy Steam Trap & Thermal Recovery", "Integrated Dry-Run & Overload Protection"],
    impact: "Reduksi kehilangan panas termal & optimalisasi efisiensi uap mill.",
  },
  {
    id: "indah-kiat-riau",
    name: "PT. Indah Kiat Pulp & Paper",
    clientGroup: "APP Sinar Mas",
    logo: "/images/clients/app-sinarmas.svg",
    category: "Pulp & Paper Mill",
    locationName: "Perawang Mill",
    province: "Riau",
    lat: 0.66,
    lng: 101.63,
    scope: "Heavy Industrial Dewatering, Wastewater Pump & Acid-Resistant Piping",
    specs: ["Submersible Slurry & Wastewater (SDW/SSEG Series)", "Chemical-Resistant Industrial PPR Pipelines", "Dynamic Balancing & Motorized Valve Control"],
    impact: "Sirkulasi air mill 500+ m³/jam dengan keandalan continuous duty.",
  },
  {
    id: "moi",
    name: "Mall of Indonesia (MOI)",
    clientGroup: "Mall of Indonesia",
    logo: "/images/clients/moi.png",
    category: "Commercial Superblock",
    locationName: "Kelapa Gading",
    province: "Jakarta",
    lat: -6.1584,
    lng: 106.9011,
    scope: "Central HVAC Chiller Plant & Cooling Tower Circulation Optimization",
    specs: ["Large-Scale Chilled & Condenser Water Pumps", "Dynamic Pressure Balancing Control Valves", "Real-Time Thermal Telemetry & Flow Monitoring"],
    impact: "Efisiensi sirkulasi HVAC gedung meningkat 22% secara merata.",
  },
  {
    id: "central-park",
    name: "Central Park Jakarta",
    clientGroup: "Central Park Jakarta",
    logo: "/images/clients/moi.png",
    category: "Commercial Superblock",
    locationName: "Grogol Petamburan",
    province: "Jakarta",
    lat: -6.1751,
    lng: 106.7899,
    scope: "Central Cooling Tower Circulation, Chiller Piping & AHU Systems",
    specs: ["Premium IE3 End-Suction Centrifugal Pumps", "High-Pressure Fusion-Welded PPR Lines", "Closed-Cell Elastomeric Thermal Insulation"],
    impact: "0% risiko kebocoran pipa dan penghematan biaya listrik pendingin bulanan.",
  },
  {
    id: "indorama",
    name: "PT. Indorama Polychem Indonesia",
    clientGroup: "Indorama Corporation",
    logo: "/images/clients/indorama.svg",
    category: "Industrial Manufacturing",
    locationName: "Purwakarta",
    province: "Jawa Barat",
    lat: -6.5564,
    lng: 107.4441,
    scope: "Central Cooling System & High-Capacity Double Suction Split-Case Pumps",
    specs: ["Horizontal Split-Case Double Suction Pumps (SHS Series)", "High-Capacity Pressure-Resistant Industrial Piping", "24/7 Hydraulic Flow & Thermal Supervision"],
    impact: "Hemat daya sirkulasi air industri 28% dengan uptime 99.9%.",
  },
  {
    id: "garudafood",
    name: "PT. Garudafood Putra Putri Jaya Tbk",
    clientGroup: "Garudafood Group",
    logo: "/images/clients/garudafood.png",
    category: "Food & Beverage",
    locationName: "Pati & Gresik",
    province: "Jawa Tengah & Jawa Timur",
    lat: -7.39,
    lng: 112.59,
    scope: "Food-Grade Hygienic Clean Water Distribution & Automated VFD Booster",
    specs: ["Lead-Free & Corrosion-Free Food-Grade Certified PPR", "Automated Multi-VFD Constant Pressure Booster Station", "Anti-Condensation Hygienic Insulation"],
    impact: "Kualitas air sanitasi 100% higienis & tekanan konstan di semua lini.",
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  "Pulp & Paper Mill": "#16a34a",
  "Commercial Superblock": "#2563eb",
  "Industrial Manufacturing": "#d97706",
  "Food & Beverage": "#db2777",
};

export function IndonesiaProjectMap() {
  const { language } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>("indorama");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cardKey, setCardKey] = useState(0); // triggers card fade-in on change
  const [MapComponent, setMapComponent] = useState<React.ComponentType<{
    selectedId: string;
    hoveredId: string | null;
    onSelect: (id: string) => void;
  }> | null>(null);

  const selected = PROJECT_LOCATIONS.find((p) => p.id === selectedId) || PROJECT_LOCATIONS[0];
  const selectedIndex = PROJECT_LOCATIONS.findIndex((p) => p.id === selectedId);

  useEffect(() => {
    import("./LeafletMap").then((mod) => {
      setMapComponent(() => mod.LeafletMap);
    });
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setCardKey((k) => k + 1);
  }, []);

  const goNext = () => {
    const next = PROJECT_LOCATIONS[(selectedIndex + 1) % PROJECT_LOCATIONS.length];
    handleSelect(next.id);
  };

  const goPrev = () => {
    const prev = PROJECT_LOCATIONS[(selectedIndex - 1 + PROJECT_LOCATIONS.length) % PROJECT_LOCATIONS.length];
    handleSelect(prev.id);
  };

  const color = CATEGORY_COLORS[selected.category] || "#2a1768";

  return (
    <>
      <style>{`
        @keyframes card-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .project-card-animate {
          animation: card-in 0.22s ease-out both;
        }
        .sidebar-row { transition: background 0.15s ease; }
        .sidebar-row:hover { background: #f9fafb; }
        .sidebar-row.active { background: #f9fafb; }
      `}</style>

      <div className="w-full h-full flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden relative isolate z-0" style={{ minHeight: 480 }}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 pt-4 pb-3.5 border-b border-neutral-100">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">{language === "id" ? "Jejak Proyek" : "Project Footprint"}</p>
            <h2 className="text-[15px] sm:text-[16px] font-bold text-neutral-900 leading-tight">{language === "id" ? "Peta Proyek Nasional" : "National Project Map"}</h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[11px] text-neutral-400">{PROJECT_LOCATIONS.length} {language === "id" ? "lokasi aktif" : "active sites"}</span>
            </div>
            {/* Prev / Next */}
            <div className="flex items-center gap-1">
              <button
                onClick={goPrev}
                className="w-7 h-7 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-neutral-400 w-8 text-center tabular-nums">
                {selectedIndex + 1}/{PROJECT_LOCATIONS.length}
              </span>
              <button
                onClick={goNext}
                className="w-7 h-7 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-300 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: scrollable tab pills */}
        <div
          className="flex sm:hidden items-center gap-1.5 px-4 py-2.5 overflow-x-auto border-b border-neutral-100"
          style={{ scrollbarWidth: "none" }}
        >
          {PROJECT_LOCATIONS.map((proj) => {
            const isActive = proj.id === selectedId;
            const c = CATEGORY_COLORS[proj.category] || "#6b7280";
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(proj.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap cursor-pointer border transition-all"
                style={{
                  backgroundColor: isActive ? c + "15" : "transparent",
                  borderColor: isActive ? c : "#e5e7eb",
                  color: isActive ? c : "#6b7280",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c }} />
                {proj.clientGroup}
              </button>
            );
          })}
        </div>

        {/* Body: sidebar (desktop) + map */}
        <div className="flex flex-1 min-h-0">

          {/* Sidebar — desktop only */}
          <div
            className="hidden sm:flex w-[200px] shrink-0 border-r border-neutral-100 overflow-y-auto flex-col"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#e5e7eb transparent" }}
          >
            {PROJECT_LOCATIONS.map((proj) => {
              const isActive = proj.id === selectedId;
              const isHovered = proj.id === hoveredId;
              const c = CATEGORY_COLORS[proj.category] || "#6b7280";
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(proj.id)}
                  onMouseEnter={() => setHoveredId(proj.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`sidebar-row w-full text-left px-3.5 py-3 border-b border-neutral-50 cursor-pointer ${isActive ? "active" : ""}`}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className="w-[3px] rounded-full shrink-0 self-stretch transition-all duration-200"
                      style={{
                        backgroundColor: isActive ? c : isHovered ? c + "60" : "#f0f0f0",
                        minHeight: 38,
                      }}
                    />
                    <div className="min-w-0">
                      <p className={`text-[12px] font-semibold leading-tight mb-0.5 transition-colors ${isActive ? "text-neutral-900" : "text-neutral-600"}`}>
                        {proj.clientGroup}
                      </p>
                      <p className="text-[11px] text-neutral-400 truncate">
                        {proj.locationName}, {proj.province}
                      </p>
                      <span
                        className="inline-block mt-1.5 text-[10px] px-1.5 py-[2px] rounded font-medium transition-all"
                        style={{
                          backgroundColor: isActive ? c + "15" : "#f3f4f6",
                          color: isActive ? c : "#9ca3af",
                        }}
                      >
                        {proj.category}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map */}
          <div className="flex-1 relative min-h-[280px] sm:min-h-0">
            {MapComponent ? (
              <MapComponent selectedId={selectedId} hoveredId={hoveredId} onSelect={handleSelect} />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
                {language === "id" ? "Memuat peta..." : "Loading map..."}
              </div>
            )}

            {/* Floating project card — desktop only */}
            <div
              key={cardKey}
              className="project-card-animate hidden sm:block absolute bottom-4 right-4 z-[999] bg-white rounded-xl border border-neutral-200 overflow-hidden w-60"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <div className="h-[3px] w-full" style={{ backgroundColor: color }} />
              <div className="p-3.5">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg border border-neutral-100 p-1 shrink-0 bg-white">
                    <img src={selected.logo} alt={selected.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-neutral-400 truncate">{selected.locationName}, {selected.province}</p>
                    <p className="text-[12px] font-semibold text-neutral-900 leading-tight truncate">{selected.clientGroup}</p>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed line-clamp-2 mb-2.5">
                  {selected.scope}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: color + "15", color }}
                  >
                    {selected.category}
                  </span>
                  <Link
                    href="/contact"
                    className="ml-auto text-[11px] font-semibold hover:opacity-75 transition-opacity"
                    style={{ color }}
                  >
                    {language === "id" ? "Konsultasi →" : "Inquire →"}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile bottom info bar */}
        <div
          key={cardKey}
          className="project-card-animate flex sm:hidden items-center gap-3 px-4 py-3 border-t border-neutral-100"
        >
          <div className="w-8 h-8 rounded-lg border border-neutral-100 p-1 shrink-0 bg-white">
            <img src={selected.logo} alt={selected.name} className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-neutral-400 truncate">{selected.locationName}</p>
            <p className="text-[12px] font-semibold text-neutral-900 truncate">{selected.clientGroup}</p>
          </div>
          <Link
            href="/contact"
            className="text-[11px] font-semibold shrink-0 hover:opacity-75 transition-opacity"
            style={{ color }}
          >
            {language === "id" ? "Konsultasi →" : "Inquire →"}
          </Link>
        </div>

      </div>
    </>
  );
}
