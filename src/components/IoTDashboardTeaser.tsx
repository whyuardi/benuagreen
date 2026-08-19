"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Zap,
  Droplets,
  Sun,
  Radio,
  Gauge,
  Power,
  TrendingUp,
} from "lucide-react";

export function IoTDashboardTeaser() {
  const [isRunning, setIsRunning] = useState(true);
  const [powerMode, setPowerMode] = useState<"solar" | "hybrid">("solar");

  return (
    <section className="my-16 px-4 sm:px-8 lg:px-16" id="iot-telemetry">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              Telemetry SCADA Module
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              RMS Dongle Remote Monitoring Console
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
              Real-time cellular/cloud telemetry for discharge velocity, motor RPM, MPPT solar voltage, and automated dry-run prevention.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 w-fit">
            <button
              onClick={() => setPowerMode("solar")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                powerMode === "solar"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              Direct Solar PV
            </button>
            <button
              onClick={() => setPowerMode("hybrid")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                powerMode === "hybrid"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              Hybrid AC/DC
            </button>
          </div>
        </div>

        {/* Console Box */}
        <div className="bg-slate-950 text-slate-100 rounded-xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-white">RMS Station #BG-4091</span>
                  <Badge className="bg-emerald-950 text-emerald-400 text-[10px] border border-emerald-800 font-mono">
                    CONNECTED • 4G LTE
                  </Badge>
                </div>
                <p className="text-[11px] text-slate-400">Submersible Pump Installation • Lombok Central Site</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-2 transition-all ${
                  isRunning
                    ? "bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900"
                    : "bg-red-950 text-red-400 border border-red-800 hover:bg-red-900"
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                {isRunning ? "STATUS: ACTIVE" : "STATUS: STANDBY"}
              </button>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider">PV Array Power</span>
                <Sun className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-2xl font-bold font-mono text-white">
                {isRunning ? (powerMode === "solar" ? "3.85" : "2.40") : "0.00"} <span className="text-xs text-slate-400">kW</span>
              </p>
              <p className="text-[10px] text-emerald-400 mt-1 font-mono flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> 890 W/m² Irradiance
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider">Flow Velocity</span>
                <Droplets className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-2xl font-bold font-mono text-white">
                {isRunning ? "14.2" : "0.0"} <span className="text-xs text-slate-400">m³/h</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">
                236.6 Liters / min
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider">VFD Frequency</span>
                <Gauge className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-bold font-mono text-white">
                {isRunning ? "48.5" : "0.0"} <span className="text-xs text-slate-400">Hz</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">
                2,850 RPM Nominal
              </p>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider">Daily Water Total</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-bold font-mono text-white">
                {isRunning ? "84.6" : "72.1"} <span className="text-xs text-slate-400">m³</span>
              </p>
              <p className="text-[10px] text-slate-400 mt-1 font-mono">
                Target: 100 m³ (84.6%)
              </p>
            </div>
          </div>

          {/* Graphical Yield Curve */}
          <div className="bg-slate-900/70 rounded-lg p-5 border border-slate-800 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5 font-mono">
                <Activity className="w-4 h-4 text-emerald-400" />
                Hourly Solar Generation & Yield Curve (06:00 - 18:00 WIB)
              </span>
              <span className="text-slate-500 font-mono text-[10px]">Sampling Rate: 60s</span>
            </div>

            {/* Bars */}
            <div className="flex items-end gap-2 h-24 pt-4 w-full">
              {[15, 30, 60, 85, 95, 100, 92, 80, 65, 40, 20, 5].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div
                    style={{ height: isRunning ? `${val}%` : "8%" }}
                    className={`w-full rounded-t transition-all duration-500 ${
                      val > 75
                        ? "bg-emerald-500"
                        : "bg-slate-700 group-hover:bg-slate-600"
                    }`}
                  />
                  <span className="text-[9px] text-slate-500 font-mono">{6 + idx}h</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

