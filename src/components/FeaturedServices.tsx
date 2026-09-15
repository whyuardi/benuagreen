"use client";

import Image from "next/image";
import Link from "next/link";

export function FeaturedServices() {
  const services = [
    {
      id: 1,
      title: "Installation Services",
      description:
        "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable installation services.",
      image: "/images/benua/29dc5558-f547-4e8b-8c66-9ff06f25ebe1.jpg",
    },
    {
      id: 2,
      title: "Energy Audit Services",
      description:
        "At Benua Green Energy, we provide accurate, efficient, and affordable diagnostics services to ensure your systems operate at peak performance.",
      image: "/images/benua/8f6d8be9-6602-4ca3-814c-84fca53eeee8.jpg",
    },
    {
      id: 3,
      title: "Repair & Maintenance Services",
      description:
        "At Benua Green Energy, our dedication to professionalism, reliability, and cost-effectiveness is evident in our comprehensive diagnostics services.",
      image: "/images/benua/086aa691-8f8c-43a3-a157-4371f254f6b6.jpg",
    },
    {
      id: 4,
      title: "Cleaning & Optimization",
      description:
        "At Benua Green Energy, we pride ourselves on being your trusted partner for professional, reliable, and affordable Cleaning & Optimization.",
      image: "/images/benua/96992df8-8fac-4834-b746-14a443b9caa0.jpg",
    },
    {
      id: 5,
      title: "Diagnostics Services",
      description:
        "At Benua Green Energy, we are driven by our commitment to professionalism, reliability, and affordability, even in our energy audit services.",
      image: "/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg",
    },
    {
      id: 6,
      title: "Warranty Replacement Services",
      description:
        "At Benua Green Energy, our commitment to professionalism, reliability, and affordability extends to our warranty replacement services.",
      image: "/images/benua/d7a6c163-dd27-44a8-9f7c-1dbc82faba37.jpg",
    },
  ];

  return (
    <section className="bg-[#eef2f5] py-16 sm:py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1d1841] tracking-tight mb-3">
            Our Featured Services
          </h2>
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-500 font-semibold leading-relaxed">
            WE DELIVER TOP-TIER SERVICES TO DRIVE YOUR SUCCESS. WITH OUR EXPERTISE, WE ARE YOUR PARTNERS IN ACHIEVING YOUR GOALS.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative h-[340px] sm:h-[360px] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-6 sm:p-7 group"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/60 to-neutral-900/30" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Green Highlight Pill */}
                <div className="w-10 h-1.5 bg-[#43b02a] rounded-full mb-3" />

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-200/90 font-light leading-relaxed mb-5">
                  {item.description}
                </p>

                <div>
                  <Link
                    href="/contact"
                    className="inline-block px-5 py-2 rounded-md text-xs font-semibold text-white bg-[#2a1768] hover:bg-[#38208a] transition-all duration-200 shadow-sm"
                  >
                    Learn more
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
