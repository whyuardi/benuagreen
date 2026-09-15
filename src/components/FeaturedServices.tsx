"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FeaturedServices() {
  const services = [
    {
      id: 1,
      tag: "Certified Engineering",
      title: "Installation Services",
      description:
        "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable installation services.",
      image: "/images/benua/29dc5558-f547-4e8b-8c66-9ff06f25ebe1.jpg",
    },
    {
      id: 2,
      tag: "Thermodynamic Audit",
      title: "Energy Audit Services",
      description:
        "At Benua Green Energy, we provide accurate, efficient, and affordable diagnostics services to ensure your systems operate at peak performance.",
      image: "/images/benua/8f6d8be9-6602-4ca3-814c-84fca53eeee8.jpg",
    },
    {
      id: 3,
      tag: "24/7 O&M SLA",
      title: "Repair & Maintenance Services",
      description:
        "At Benua Green Energy, our dedication to professionalism, reliability, and cost-effectiveness is evident in our comprehensive diagnostics services.",
      image: "/images/benua/086aa691-8f8c-43a3-a157-4371f254f6b6.jpg",
    },
    {
      id: 4,
      tag: "Eco Efficiency",
      title: "Cleaning & Optimization",
      description:
        "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable Cleaning & Optimization.",
      image: "/images/benua/96992df8-8fac-4834-b746-14a443b9caa0.jpg",
    },
    {
      id: 5,
      tag: "Advanced Telemetry",
      title: "Diagnostics Services",
      description:
        "At Benua Green Energy, we are driven by our commitment to professionalism, reliability, and affordability, even in our energy audit services.",
      image: "/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg",
    },
    {
      id: 6,
      tag: "OEM Standard Warranty",
      title: "Warranty Replacement Services",
      description:
        "At Benua Green Energy, our commitment to professionalism, reliability, and affordability extends to our warranty replacement services.",
      image: "/images/benua/d7a6c163-dd27-44a8-9f7c-1dbc82faba37.jpg",
    },
  ];

  return (
    <section className="bg-[#eef2f5] py-20 sm:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1768]/8 text-[#2a1768] text-[11px] font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#43b02a]" />
            <span>Turnkey Engineering & Lifecycle Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#1d1841] tracking-tight mb-4">
            Our Featured Services
          </h2>
          
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-500 font-semibold leading-relaxed max-w-2xl mx-auto">
            WE DELIVER TOP-TIER SERVICES TO DRIVE YOUR SUCCESS. WITH OUR EXPERTISE, WE ARE YOUR PARTNERS IN ACHIEVING YOUR GOALS.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative h-[360px] sm:h-[390px] rounded-3xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_40px_-10px_rgba(42,23,104,0.3)] flex flex-col justify-between p-7 sm:p-8 group border border-white/20 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Card Background Image with Smooth Zoom */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Refined gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/65 to-neutral-900/30 group-hover:from-neutral-950/95 group-hover:via-neutral-900/60 transition-colors" />
              </div>

              {/* Top Card Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-1.5 bg-[#43b02a] rounded-full shadow-sm group-hover:w-16 transition-all duration-300" />
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-snug group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-neutral-200/90 font-light leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2a1768] to-[#3a1d94] hover:from-[#38208a] hover:to-[#4e27c7] transition-all duration-300 shadow-md group/btn"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
