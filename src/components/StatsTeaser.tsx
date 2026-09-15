"use client";

import Link from "next/link";
import { Zap, Briefcase, Wrench, ShieldCheck } from "lucide-react";

export function StatsTeaser() {
  return (
    <section className="bg-[#eef2f5] pb-12 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Purple Stat Card */}
          <div className="bg-[#2a1768] text-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 font-medium mb-3">
              Since 2009, our customers have avoided
            </p>
            <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight mb-2">
              112,845,311+
            </div>
            <p className="text-xs sm:text-sm text-neutral-200 font-medium">
              pounds of CO2.
            </p>
          </div>

          {/* Card 2: Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#1d1841]">
                <Briefcase className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#1d1841] mb-2.5">
                Services
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Comprehensive CCHP solutions engineering consulting design installation commissioning services.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/#services"
                className="inline-block px-5 py-2 rounded-md text-xs font-semibold text-[#1d1841] border border-[#1d1841] hover:bg-[#1d1841] hover:text-white transition-all duration-200"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Card 3: Maintenance */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#1d1841]">
                <Wrench className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#1d1841] mb-2.5">
                Maintenance
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Preventive corrective maintenance programs ensuring optimal performance reliability longevity.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/#services"
                className="inline-block px-5 py-2 rounded-md text-xs font-semibold text-[#1d1841] border border-[#1d1841] hover:bg-[#1d1841] hover:text-white transition-all duration-200"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Card 4: EMS */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100" id="ems">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#1d1841]">
                <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-[#1d1841] mb-2.5">
                EMS
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                Advanced energy management systems monitoring optimizing controlling CCHP equipment performance.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/#services"
                className="inline-block px-5 py-2 rounded-md text-xs font-semibold text-[#1d1841] border border-[#1d1841] hover:bg-[#1d1841] hover:text-white transition-all duration-200"
              >
                Learn more
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
