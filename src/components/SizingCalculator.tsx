"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  Sun,
  Droplets,
  ArrowRight,
  Zap,
  CheckCircle2,
  Sliders,
  Settings2,
} from "lucide-react";
import Link from "next/link";

export function SizingCalculator() {
  const [waterSource, setWaterSource] = useState<"deepwell" | "openwell" | "surface">("deepwell");
  const [dailyVolume, setDailyVolume] = useState<number>(30); // m3 per day
  const [wellDepth, setWellDepth] = useState<number>(50); // meters
  const [pipeDistance, setPipeDistance] = useState<number>(100); // meters

  // Calculation estimates
  const calculation = useMemo(() => {
    const tdh = Math.round(wellDepth + pipeDistance * 0.05 + 10);
    const flowRate = (dailyVolume / 6).toFixed(1);
    const hydraulicPowerKw = ((parseFloat(flowRate) * tdh * 2.725) / (0.55 * 1000)).toFixed(2);
    const recommendedKw = Math.max(0.75, Math.ceil(parseFloat(hydraulicPowerKw) * 1.3 * 2) / 2);
    const recommendedSolarWp = Math.round(recommendedKw * 1400);

    let recommendedPump = "4 inch Premium Plug & Play Pumps";
    let recommendedDrive = "Solar SIMHA Drive (MPPT VFD)";

    if (waterSource === "openwell") {
      recommendedPump = "Solar Open Well Pumps";
    } else if (waterSource === "surface") {
      recommendedPump = "Micro Surface Pumpset / Booster SHIN";
    }

    return {
      tdh,
      flowRate,
      recommendedKw,
      recommendedHp: (recommendedKw * 1.34).toFixed(1),
      recommendedSolarWp,
      recommendedPump,
      recommendedDrive,
      solarPanels: Math.ceil(recommendedSolarWp / 550),
    };
  }, [waterSource, dailyVolume, wellDepth, pipeDistance]);

  return (
    <section className="my-16 px-4 sm:px-8 lg:px-16" id="calculator">
      <div className="max-w-7xl mx-auto bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Hydraulic & Solar Engineering Tool
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Solar Pump System Sizing Calculator
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Calculate Total Dynamic Head (TDH), motor kilowatt requirements, and recommended PV panel arrays based on solar insolation averages.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Settings2 className="w-4 h-4 text-emerald-400" />
            <span>Standard DIN/ISO Flow Standard</span>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/60 rounded-xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              1. Site Hydraulic Inputs
            </h3>

            {/* Water Source Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                Water Source Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "deepwell", label: "Deep Borehole" },
                  { id: "openwell", label: "Open Well / Sump" },
                  { id: "surface", label: "River / Lake" },
                ].map((src) => (
                  <button
                    key={src.id}
                    type="button"
                    onClick={() => setWaterSource(src.id as any)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                      waterSource === src.id
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                        : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {src.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-6 pt-2">
              {/* Daily Water Requirement */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">
                    Daily Water Demand
                  </span>
                  <span className="font-bold text-emerald-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-700 font-mono">
                    {dailyVolume} m³/day ({dailyVolume * 1000} L)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={dailyVolume}
                  onChange={(e) => setDailyVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 m³ (Small Farm)</span>
                  <span>100 m³</span>
                  <span>200 m³ (Municipal)</span>
                </div>
              </div>

              {/* Well Depth / Suction Lift */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">
                    Static Water Depth / Vertical Lift
                  </span>
                  <span className="font-bold text-white bg-slate-900 px-2.5 py-1 rounded border border-slate-700 font-mono">
                    {wellDepth} Meters
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={wellDepth}
                  onChange={(e) => setWellDepth(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>10 m</span>
                  <span>120 m</span>
                  <span>250 m</span>
                </div>
              </div>

              {/* Delivery Pipe Distance */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">
                    Horizontal Pipe Distance to Storage Tank
                  </span>
                  <span className="font-bold text-white bg-slate-900 px-2.5 py-1 rounded border border-slate-700 font-mono">
                    {pipeDistance} Meters
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="20"
                  value={pipeDistance}
                  onChange={(e) => setPipeDistance(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950/90 rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-0.5">
                  Calculation Output
                </Badge>
                <span className="text-[11px] text-slate-400 font-mono">
                  6.0 Peak Sun Hours
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Recommended Specification
              </h3>

              {/* Tabular Output Metrics */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Total Head (TDH)</p>
                  <p className="text-lg font-bold text-white mt-0.5 font-mono">~{calculation.tdh} m</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Required Flow Rate</p>
                  <p className="text-lg font-bold text-white mt-0.5 font-mono">{calculation.flowRate} m³/h</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Motor Power</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5 font-mono">{calculation.recommendedKw} kW / {calculation.recommendedHp} HP</p>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">Solar PV Array</p>
                  <p className="text-lg font-bold text-amber-400 mt-0.5 font-mono">{calculation.recommendedSolarWp} Wp</p>
                </div>
              </div>

              {/* Recommended Items */}
              <div className="space-y-2.5 bg-slate-900/60 rounded-lg p-4 border border-slate-800 text-xs">
                <div className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px]">Recommended Pump Model: </span>
                    <strong className="text-white">{calculation.recommendedPump}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px]">VFD Inverter Drive: </span>
                    <strong className="text-white">{calculation.recommendedDrive}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px]">Recommended PV Modules: </span>
                    <strong className="text-white">{calculation.solarPanels} × 550W Tier-1 Mono PERC</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={`/contact?source=calculator&pump=${encodeURIComponent(calculation.recommendedPump)}&tdh=${calculation.tdh}&kw=${calculation.recommendedKw}&volume=${dailyVolume}`}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg py-3 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Request Formal Engineering Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

