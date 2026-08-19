import Link from "next/link";
import { Leaf, ShieldCheck, Zap, Globe2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-grow pb-24 bg-white">
      {/* Monochrome Header Banner */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3 block">
            Company Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900 mb-4">
            About Benua Green Energy
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Specializing in sustainable clean-tech energy systems, solar pumping technology, and high-density PPR water networks.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 space-y-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 leading-snug tracking-tight">
              Pioneering Clean Power & Water Technology
            </h2>
            <p className="text-neutral-500 leading-relaxed text-sm font-light">
              PT Benua Green Energy is dedicated to providing industrial-grade pumping systems, hybrid inverters, solar drives, and precision irrigation networks that empower communities, agricultural enterprises, and industrial facilities.
            </p>
            <p className="text-neutral-500 leading-relaxed text-sm font-light">
              Our products are engineered with robust metallurgy, intelligent telemetry, and energy-conserving MPPT drives to guarantee relentless performance under the most challenging tropical climates.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Zap className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">99%</h3>
              <p className="text-xs text-neutral-400">MPPT Tracking</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Globe2 className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">24/7</h3>
              <p className="text-xs text-neutral-400">System Monitoring</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <ShieldCheck className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">50+ Yrs</h3>
              <p className="text-xs text-neutral-400">PPR Pipe Lifespan</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
              <Leaf className="w-5 h-5 text-neutral-900" />
              <h3 className="text-2xl font-light text-neutral-900">100%</h3>
              <p className="text-xs text-neutral-400">Clean Energy Focus</p>
            </div>
          </div>
        </div>

        {/* Minimalist CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900 text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-normal">Ready to explore our solutions?</h3>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto font-light">
            Browse our complete catalog of pumps, inverters, and irrigation products.
          </p>
          <div className="pt-3 flex justify-center gap-3">
            <Link
              href="/"
              className="bg-white text-neutral-900 hover:bg-neutral-100 font-medium rounded-full px-6 py-2.5 inline-flex items-center justify-center text-xs transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="border border-neutral-700 text-white hover:bg-neutral-800 font-medium rounded-full px-6 py-2.5 inline-flex items-center justify-center text-xs transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


