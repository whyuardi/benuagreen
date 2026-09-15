"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Building2, 
  Factory, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  X,
  Layers,
  ChevronRight
} from "lucide-react";

export interface ProjectLocation {
  id: string;
  name: string;
  clientGroup: string;
  logo: string;
  category: "Industrial Manufacturing" | "Pulp & Paper Mill" | "Food & Beverage" | "Commercial Superblock";
  locationName: string;
  province: string;
  coords: { x: number; y: number }; // Percentage relative to map container
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
    province: "Riau, Sumatera",
    coords: { x: 21, y: 44 },
    scope: "Waste Heat Recovery, Steam Trap Integration & High-Pressure Multistage Pumps",
    specs: [
      "Stainless Steel High-Pressure Booster Arrays",
      "High-Enthalpy Steam Trap & Thermal Recovery",
      "Integrated Dry-Run & Overload Protection"
    ],
    impact: "Reduksi kehilangan panas termal & optimalisasi efisiensi uap mill."
  },
  {
    id: "indah-kiat-riau",
    name: "PT. Indah Kiat Pulp & Paper",
    clientGroup: "APP Sinar Mas",
    logo: "/images/clients/app-sinarmas.svg",
    category: "Pulp & Paper Mill",
    locationName: "Perawang Mill",
    province: "Riau, Sumatera",
    coords: { x: 19, y: 39 },
    scope: "Heavy Industrial Dewatering, Wastewater Pump & Acid-Resistant Piping",
    specs: [
      "Submersible Slurry & Wastewater (SDW/SSEG Series)",
      "Chemical-Resistant Industrial PPR Pipelines",
      "Dynamic Balancing & Motorized Valve Control"
    ],
    impact: "Sirkulasi air mill 500+ m³/jam dengan keandalan continuous duty."
  },
  {
    id: "moi",
    name: "Mall of Indonesia (MOI)",
    clientGroup: "Agung Sedayu Group",
    logo: "/images/clients/moi.png",
    category: "Commercial Superblock",
    locationName: "Kelapa Gading",
    province: "DKI Jakarta Utara",
    coords: { x: 31, y: 78 },
    scope: "Central HVAC Chiller Plant & Cooling Tower Circulation Optimization",
    specs: [
      "Large-Scale Chilled & Condenser Water Pumps",
      "Dynamic Pressure Balancing Control Valves",
      "Real-Time Thermal Telemetry & Flow Monitoring"
    ],
    impact: "Efisiensi sirkulasi HVAC gedung meningkat 22% secara merata."
  },
  {
    id: "central-park",
    name: "Central Park Mall",
    clientGroup: "Agung Podomoro Land",
    logo: "/images/clients/agung-podomoro.svg",
    category: "Commercial Superblock",
    locationName: "Grogol Petamburan",
    province: "DKI Jakarta Barat",
    coords: { x: 29.5, y: 80 },
    scope: "Central Cooling Tower Circulation, Chiller Piping & AHU Systems",
    specs: [
      "Premium IE3 End-Suction Centrifugal Pumps",
      "High-Pressure Fusion-Welded PPR Lines",
      "Closed-Cell Elastomeric Thermal Insulation"
    ],
    impact: "0% risiko kebocoran pipa dan penghematan biaya listrik pendingin bulanan."
  },
  {
    id: "indorama",
    name: "PT. Indorama Polychem Indonesia",
    clientGroup: "Indorama Corporation",
    logo: "/images/clients/indorama.svg",
    category: "Industrial Manufacturing",
    locationName: "Purwakarta",
    province: "Jawa Barat",
    coords: { x: 34, y: 81 },
    scope: "Central Cooling System & High-Capacity Double Suction Split-Case Pumps",
    specs: [
      "Horizontal Split-Case Double Suction Pumps (SHS Series)",
      "High-Capacity Pressure-Resistant Industrial Piping",
      "24/7 Hydraulic Flow & Thermal Supervision"
    ],
    impact: "Hemat daya sirkulasi air industri 28% dengan uptime 99.9%."
  },
  {
    id: "garudafood",
    name: "PT. Garudafood Putra Putri Jaya Tbk",
    clientGroup: "Garudafood Group",
    logo: "/images/clients/garudafood.png",
    category: "Food & Beverage",
    locationName: "Pati & Gresik",
    province: "Jawa Tengah & Jawa Timur",
    coords: { x: 44, y: 82 },
    scope: "Food-Grade Hygienic Clean Water Distribution & Automated VFD Booster",
    specs: [
      "Lead-Free & Corrosion-Free Food-Grade Certified PPR",
      "Automated Multi-VFD Constant Pressure Booster Station",
      "Anti-Condensation Hygienic Insulation"
    ],
    impact: "Kualitas air sanitasi 100% higienis & tekanan konstan di semua lini."
  }
];

export function IndonesiaProjectMap() {
  const [selectedId, setSelectedId] = useState<string>("indorama");
  const selectedProject = PROJECT_LOCATIONS.find((p) => p.id === selectedId) || PROJECT_LOCATIONS[0];

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[540px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#12082b] via-[#1a0f3d] to-[#0c051f] border border-white/15 shadow-[0_12px_40px_-8px_rgba(42,23,104,0.35)] flex flex-col justify-between p-5 sm:p-7 text-white">
      
      {/* Background Decorative Tech Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#43b02a]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-[#2a1768]/40 blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#43b02a] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#43b02a] -ml-3.5" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              Interactive Project Footprint
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white mt-0.5">
            Peta Instalasi & Proyek Nasional
          </h2>
        </div>

        {/* Project Quick Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-1">
          {PROJECT_LOCATIONS.map((proj) => {
            const isSelected = proj.id === selectedId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-[#43b02a] text-[#0c051f] border-[#43b02a] shadow-[0_0_12px_rgba(67,176,42,0.5)] font-bold"
                    : "bg-white/10 text-neutral-300 border-white/15 hover:bg-white/20 hover:text-white"
                }`}
              >
                {proj.clientGroup}
              </button>
            );
          })}
        </div>
      </div>

      {/* Center Interactive Map Area */}
      <div className="relative z-10 flex-1 my-3 flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
        {/* SVG Indonesia Map Outline Graphic */}
        <div className="relative w-full h-full max-h-[320px] sm:max-h-[360px] flex items-center justify-center">
          
          <svg
            viewBox="0 0 1000 420"
            className="w-full h-full max-h-[340px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ambient Water Latitude Lines */}
            <path d="M 50 120 L 950 120" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 6" />
            <path d="M 50 210 L 950 210" stroke="rgba(67,176,42,0.15)" strokeDasharray="6 8" /> {/* Equator */}
            <text x="60" y="205" fill="rgba(67,176,42,0.4)" fontSize="9" fontFamily="monospace">EQUATOR 0°00&apos;</text>
            <path d="M 50 310 L 950 310" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 6" />

            {/* SUMATRA ISLAND */}
            <path
              d="M 120 70 C 145 75, 175 105, 195 130 C 215 155, 235 180, 245 220 C 255 260, 275 285, 280 300 C 275 315, 255 310, 240 290 C 220 270, 195 240, 180 205 C 160 165, 130 120, 115 90 Z"
              fill="#22144d"
              stroke="#43b02a"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              className="transition-colors hover:fill-[#2d1b64]"
            />
            {/* Sumatra Islands Small */}
            <circle cx="105" cy="80" r="4" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" />
            <circle cx="145" cy="180" r="5" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" />
            <circle cx="165" cy="220" r="6" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" />
            <circle cx="285" cy="245" r="10" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Bangka */}
            <circle cx="305" cy="265" r="6" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" />  {/* Belitung */}

            {/* JAVA ISLAND */}
            <path
              d="M 285 340 C 320 340, 360 345, 410 348 C 450 350, 500 352, 540 355 C 545 362, 530 368, 490 366 C 440 363, 380 362, 330 360 C 295 358, 280 350, 285 340 Z"
              fill="#22144d"
              stroke="#43b02a"
              strokeWidth="1.5"
              strokeOpacity="0.5"
              className="transition-colors hover:fill-[#2d1b64]"
            />
            <ellipse cx="560" cy="358" rx="8" ry="4" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Madura */}

            {/* KALIMANTAN (BORNEO) */}
            <path
              d="M 360 160 C 380 130, 430 110, 480 115 C 520 120, 550 145, 545 185 C 540 225, 525 260, 495 270 C 450 275, 400 270, 370 240 C 350 215, 350 185, 360 160 Z"
              fill="#22144d"
              stroke="#43b02a"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              className="transition-colors hover:fill-[#2d1b64]"
            />

            {/* SULAWESI */}
            <path
              d="M 620 140 C 645 135, 680 140, 710 145 C 690 160, 660 170, 645 190 C 635 210, 665 225, 690 240 C 670 255, 650 270, 640 295 C 630 315, 615 310, 615 280 C 615 245, 630 220, 620 190 C 610 160, 610 145, 620 140 Z"
              fill="#22144d"
              stroke="#43b02a"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              className="transition-colors hover:fill-[#2d1b64]"
            />

            {/* BALI, LOMBOK, FLORES, TIMOR (NUSA TENGGARA) */}
            <ellipse cx="575" cy="365" rx="6" ry="4" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Bali */}
            <ellipse cx="595" cy="367" rx="7" ry="4" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Lombok */}
            <ellipse cx="620" cy="368" rx="12" ry="5" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Sumbawa */}
            <ellipse cx="660" cy="368" rx="20" ry="5" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Flores */}
            <ellipse cx="715" cy="375" rx="18" ry="6" fill="#22144d" stroke="#43b02a" strokeOpacity="0.3" /> {/* Timor */}

            {/* MALUKU */}
            <circle cx="730" cy="180" r="10" fill="#22144d" stroke="#43b02a" strokeOpacity="0.25" /> {/* Halmahera */}
            <circle cx="740" cy="260" r="9" fill="#22144d" stroke="#43b02a" strokeOpacity="0.25" /> {/* Seram */}
            <circle cx="715" cy="270" r="7" fill="#22144d" stroke="#43b02a" strokeOpacity="0.25" /> {/* Buru */}

            {/* PAPUA */}
            <path
              d="M 780 200 C 805 180, 845 195, 875 205 C 920 220, 960 230, 970 260 C 960 300, 930 330, 890 320 C 860 315, 830 290, 800 270 C 785 240, 770 220, 780 200 Z"
              fill="#22144d"
              stroke="#43b02a"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              className="transition-colors hover:fill-[#2d1b64]"
            />

            {/* Island Label Watermarks */}
            <text x="170" y="125" fill="rgba(255,255,255,0.15)" fontSize="12" fontWeight="bold" letterSpacing="2">SUMATERA</text>
            <text x="420" y="180" fill="rgba(255,255,255,0.15)" fontSize="12" fontWeight="bold" letterSpacing="2">KALIMANTAN</text>
            <text x="635" y="170" fill="rgba(255,255,255,0.15)" fontSize="11" fontWeight="bold" letterSpacing="2">SULAWESI</text>
            <text x="360" y="380" fill="rgba(255,255,255,0.15)" fontSize="11" fontWeight="bold" letterSpacing="2">JAWA</text>
            <text x="840" y="245" fill="rgba(255,255,255,0.15)" fontSize="12" fontWeight="bold" letterSpacing="2">PAPUA</text>
          </svg>

          {/* Interactive HTML Project Pins Layer */}
          {PROJECT_LOCATIONS.map((proj) => {
            const isSelected = proj.id === selectedId;
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                style={{
                  left: `${proj.coords.x}%`,
                  top: `${proj.coords.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
              >
                {/* Radar Ring when selected */}
                {isSelected && (
                  <span className="absolute -inset-2.5 rounded-full bg-[#43b02a]/30 animate-ping" />
                )}

                {/* Outer Glow Pin */}
                <div
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? "w-7 h-7 bg-[#43b02a] text-[#12082b] shadow-[0_0_20px_#43b02a] scale-125 ring-4 ring-white/30"
                      : "w-5 h-5 bg-[#2a1768] text-white border-2 border-white/70 hover:scale-115 hover:bg-[#43b02a] hover:border-[#43b02a]"
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${isSelected ? "text-[#12082b]" : "text-white"}`} />
                </div>

                {/* Floating Pin Label Pill */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200 ${
                    isSelected
                      ? "bg-[#43b02a] text-[#12082b] opacity-100 scale-100"
                      : "bg-[#1d1841]/90 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                  }`}
                >
                  {proj.clientGroup}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Bottom Selected Project Detail Preview Card */}
      <div className="relative z-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 shadow-lg animate-in fade-in duration-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Project Details Left */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src={selectedProject.logo}
                alt={selectedProject.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#43b02a] text-[#0c051f]">
                  {selectedProject.clientGroup}
                </span>
                <span className="text-[11px] text-neutral-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#43b02a]" />
                  <span>{selectedProject.locationName}, {selectedProject.province}</span>
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
                {selectedProject.name}
              </h3>
              
              <p className="text-xs text-neutral-300 font-light line-clamp-1 mt-0.5">
                {selectedProject.scope}
              </p>
            </div>
          </div>

          {/* Quick Action Link */}
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2a1768] to-[#43b02a] hover:brightness-110 transition-all shadow-md"
            >
              <span>Konsultasi Proyek Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
