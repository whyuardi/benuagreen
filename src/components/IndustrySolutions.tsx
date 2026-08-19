"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Sprout,
  Building2,
  Factory,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      icon: Sprout,
      title: "Agricultural Solar Irrigation Systems",
      badge: "Agriculture",
      tagline: "Direct solar DC pumping connected with precision drip networks.",
      description:
        "Zero-emission, off-grid irrigation architecture replacing costly diesel gen-sets. Integrates Benua Green Flat & Round Drip piping with anti-clogging emitter channels.",
      benefits: [
        "100% elimination of fuel and recurring generator maintenance",
        "Uniform moisture distribution directly to root zones",
        "RMS Dongle remote scheduling and flow velocity logs",
      ],
      recommended: ["Solar SIMHA Drive (MPPT)", "Flat Drip Irrigation Pipe", "4 inch Submersible Plug & Play"],
    },
    {
      icon: Building2,
      title: "Commercial & High-Rise Pressure Boosting",
      badge: "Commercial Infrastructure",
      tagline: "Variable speed multi-pump booster sets for constant pressure.",
      description:
        "Multi-stage vertical booster skids controlled via VFD drives to deliver smooth, water-hammer-free pressure across multi-storey residential and commercial buildings.",
      benefits: [
        "VFD inverter speed modulation reduces energy draw by up to 40%",
        "Eliminates line surges, cavitation, and plumbing pipe stress",
        "Duty/standby automated pump alternation",
      ],
      recommended: ["Hydropneumatic Booster", "Sero Vertical Multistage", "PN20 Certified PPR Pipes"],
    },
    {
      icon: Factory,
      title: "Industrial Effluent & Municipal Wastewater",
      badge: "Industrial & Municipal",
      tagline: "Vortex non-clog impellers for heavy suspended solids passage.",
      description:
        "Heavy-duty cast iron and SS316 submersible sewage pumps engineered for continuous raw effluent and stormwater lift stations.",
      benefits: [
        "Dual mechanical seals in isolated lubricating oil chamber",
        "Thermal overload detection & dry-run automatic trip protection",
        "Heavy solids handling capability up to 50mm sphere diameter",
      ],
      recommended: ["SDW Wastewater Pumps", "SSEG Vortex Drainage Pumps", "Elite Industrial Soft Starter"],
    },
    {
      icon: Home,
      title: "Residential Solar Water & Energy Backup",
      badge: "Residential & Villa",
      tagline: "Pure sine wave solar storage with silent booster pumps.",
      description:
        "Integrated clean energy rooftop setups combining high-efficiency hybrid inverters with silent multi-stage domestic pressure pumps.",
      benefits: [
        "Ultra-fast <10ms power transfer during utility grid outages",
        "Whisper-quiet multi-stage operation for luxury villas",
        "Full mobile telemetry via smart cloud app",
      ],
      recommended: ["Hybrid Inverter 5kW", "Home Inverter s1000", "Domestic Booster SHIN"],
    },
  ];

  const current = solutions[activeTab];

  return (
    <section className="my-16 px-4 sm:px-8 lg:px-16" id="solutions">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
            Sector Applications
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Engineered Industry Solutions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
            Explore standard equipment architectures customized for specific operating environments.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-3">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={sol.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-slate-500"}`} />
                <span>{sol.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Container */}
        <div className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                {current.badge} Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {current.title}
              </h3>
            </div>

            <p className="text-slate-700 font-semibold text-xs sm:text-sm">
              {current.tagline}
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-1">
              {current.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Consult Application Engineer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Recommended Equipment */}
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Bill of Materials
            </h4>
            <p className="text-xs font-bold text-slate-900">
              Key Components in this Setup
            </p>

            <div className="space-y-2 pt-1">
              {current.recommended.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold flex items-center justify-center border border-slate-200">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] border-slate-300 text-slate-600">
                    Standard Spec
                  </Badge>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

