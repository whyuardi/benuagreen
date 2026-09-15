"use client";

import Link from "next/link";
import { Briefcase, Wrench, ShieldCheck } from "lucide-react";

export function StatsTeaser() {
  return (
    <section className="bg-[#eef2f5] pb-10 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Service Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
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

          {/* Card 2: Maintenance */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
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

          {/* Card 3: EMS */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" id="ems">
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
