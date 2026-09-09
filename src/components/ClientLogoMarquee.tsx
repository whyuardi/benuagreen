"use client";

import { useLanguage } from "@/lib/i18n";

export function ClientLogoMarquee() {
  const { language } = useLanguage();

  return (
    <section className="border-b border-neutral-100 bg-white py-12 sm:py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Subtle Elegant Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            {language === "id" ? "KLIEN & REFERENSI PROYEK" : "CLIENTS & PROJECT REFERENCES"}
          </p>
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
            {language === "id"
              ? "Dipercaya oleh Konglomerasi Industri & Properti Nasional"
              : "Trusted by Indonesia's Foremost Industrial & Commercial Groups"}
          </h2>
        </div>

        {/* Client Logos Grid: Simple, Clean & Elegant SVG Marks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          
          {/* 1. INDORAMA */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity fill-neutral-900" aria-label="Indorama">
              {/* Indorama Geometric Hex Mark */}
              <g transform="translate(10, 4)">
                <polygon points="18,0 36,10 36,28 18,38 0,28 0,10" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <polygon points="18,7 29,13 29,25 18,31 7,25 7,13" fill="currentColor" fillOpacity="0.8" />
              </g>
              {/* Indorama Wordmark */}
              <text x="56" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="1.5">
                INDORAMA
              </text>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">PT Indorama Polychem</span>
          </div>

          {/* 2. APP SINAR MAS (Indah Kiat) */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity" aria-label="APP Sinar Mas">
              {/* Sinar Mas Red/Sun Emblem */}
              <g transform="translate(10, 7)">
                <circle cx="16" cy="15" r="14" fill="#C92A2A" />
                {/* Segmented S curve in white */}
                <path d="M16,5 A10,10 0 0,1 26,15 A5,5 0 0,1 21,20 A5,5 0 0,0 16,15 A5,5 0 0,0 11,20 A10,10 0 0,1 16,5 Z" fill="#FFFFFF" />
                <path d="M16,25 A10,10 0 0,1 6,15 A5,5 0 0,1 11,10 A5,5 0 0,0 16,15 A5,5 0 0,0 21,10 A10,10 0 0,1 16,25 Z" fill="#FFFFFF" />
              </g>
              <g fill="#1F2937">
                <text x="48" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1">
                  sinarmas
                </text>
                <text x="49" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="9" fill="#6B7280" letterSpacing="0.5">
                  APP INDAH KIAT
                </text>
              </g>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">APP Sinar Mas</span>
          </div>

          {/* 3. APRIL GROUP (RAPP) */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity" aria-label="APRIL Group">
              {/* APRIL Leaf Curve Emblem */}
              <g transform="translate(8, 7)">
                <path d="M14,2 C22,2 28,8 28,16 C28,24 20,30 14,30 C8,30 2,24 2,16 C2,8 8,2 14,2 Z" fill="#2B8A3E" fillOpacity="0.9" />
                <path d="M14,6 C19,6 23,10 23,16 C23,21 18,25 14,25 C10,25 6,21 6,16 C6,11 9,6 14,6 Z" fill="#FFFFFF" />
                <circle cx="14" cy="16" r="4.5" fill="#2B8A3E" />
              </g>
              <g fill="#1F2937">
                <text x="45" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="2">
                  APRIL
                </text>
                <text x="46" y="33" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="8.5" fill="#6B7280" letterSpacing="0.8">
                  RAPP MILL
                </text>
              </g>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">PT Riau Andalan Pulp</span>
          </div>

          {/* 4. GARUDAFOOD */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity" aria-label="Garudafood">
              {/* Garuda Wings Icon */}
              <g transform="translate(6, 6)" fill="#D9480F">
                <path d="M18,3 C12,9 6,14 0,16 C7,17 13,16 18,13 C23,16 29,17 36,16 C30,14 24,9 18,3 Z" />
                <path d="M18,12 C13,16 8,19 3,21 C8,22 13,21 18,19 C23,21 28,22 33,21 C28,19 23,16 18,12 Z" opacity="0.8" />
                <circle cx="18" cy="8" r="2.5" fill="#F08C00" />
              </g>
              <g fill="#1F2937">
                <text x="48" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.5">
                  Garudafood
                </text>
                <text x="49" y="33" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="8" fill="#6B7280">
                  PUTRA PUTRI JAYA
                </text>
              </g>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">Garudafood Group</span>
          </div>

          {/* 5. MALL OF INDONESIA (Agung Sedayu) */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity" aria-label="Mall of Indonesia">
              {/* ASG Monogram Mark */}
              <g transform="translate(10, 8)">
                <rect x="0" y="4" width="12" height="12" fill="#1864AB" rx="1.5" />
                <rect x="14" y="4" width="12" height="12" fill="#1C7ED6" rx="1.5" />
                <rect x="7" y="18" width="12" height="12" fill="#339AF0" rx="1.5" />
              </g>
              <g fill="#1F2937">
                <text x="46" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" letterSpacing="2">
                  MOI
                </text>
                <text x="47" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" fill="#6B7280" letterSpacing="0.5">
                  AGUNG SEDAYU
                </text>
              </g>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">Mall of Indonesia</span>
          </div>

          {/* 6. CENTRAL PARK (Agung Podomoro) */}
          <div className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-neutral-150/80 hover:border-neutral-300 bg-neutral-50/40 hover:bg-white transition-all duration-300 group">
            <svg viewBox="0 0 160 45" className="h-9 w-auto opacity-70 group-hover:opacity-100 transition-opacity" aria-label="Central Park Mall">
              {/* APL Crest / Tree Mark */}
              <g transform="translate(8, 7)">
                <path d="M16,2 L26,12 L22,26 L10,26 L6,12 Z" fill="#2B8A3E" />
                <path d="M16,6 L22,13 L19,23 L13,23 L10,13 Z" fill="#FFFFFF" />
                <circle cx="16" cy="15" r="3" fill="#2B8A3E" />
              </g>
              <g fill="#1F2937">
                <text x="44" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" letterSpacing="1">
                  CENTRAL PARK
                </text>
                <text x="45" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="7.5" fill="#6B7280" letterSpacing="0.5">
                  AGUNG PODOMORO
                </text>
              </g>
            </svg>
            <span className="text-[10px] text-neutral-400 font-normal mt-2">Central Park Mall</span>
          </div>

        </div>

      </div>
    </section>
  );
}
