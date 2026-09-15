"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, Store, Hotel, Hospital, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function EMSPage() {
  const { language } = useLanguage();

  const industries = [
    {
      title: "Offices",
      desc: "A comfortable office space where light, air and sound work in perfect harmony improves productivity.",
      image: "/images/benua/086aa691-8f8c-43a3-a157-4371f254f6b6.jpg",
      icon: Building2,
    },
    {
      title: "Schools",
      desc: "In classrooms, good air quality improves the engagement and concentration of students.",
      image: "/images/benua/29dc5558-f547-4e8b-8c66-9ff06f25ebe1.jpg",
      icon: GraduationCap,
    },
    {
      title: "Retail Malls",
      desc: "A pleasant, enjoyable, clean, and safe environment encourages customers to stay and keeps shop assistants motivated.",
      image: "/images/benua/8f6d8be9-6602-4ca3-814c-84fca53eeee8.jpg",
      icon: Store,
    },
    {
      title: "Hotels",
      desc: "Improve your hotel environment.",
      image: "/images/benua/96992df8-8fac-4834-b746-14a443b9caa0.jpg",
      icon: Hotel,
    },
    {
      title: "Hospitals",
      desc: "A clean, healthy, and comfortable hospital environment has a positive effect on patient satisfaction levels.",
      image: "/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg",
      icon: Hospital,
    },
    {
      title: "Elderly Homes",
      desc: "In elderly homes, the well-being of the residents and their guests is a constant concern.",
      image: "/images/benua/d7a6c163-dd27-44a8-9f7c-1dbc82faba37.jpg",
      icon: HeartHandshake,
    },
  ];

  const emsProducts = [
    {
      name: "Home Smart Switch",
      category: "EMS",
      image: "/images/products/prod_10.png",
      link: "/contact?subject=Inquiry Home Smart Switch",
    },
    {
      name: "Home Load Controller",
      category: "EMS",
      image: "/images/products/prod_11.png",
      link: "/contact?subject=Inquiry Home Load Controller",
    },
    {
      name: "Hot Water Controller",
      category: "EMS",
      image: "/images/products/prod_12.png",
      link: "/contact?subject=Inquiry Hot Water Controller",
    },
    {
      name: "ONE Controller",
      category: "EMS",
      image: "/images/products/prod_13.png",
      link: "/contact?subject=Inquiry ONE Controller",
    },
    {
      name: "EasyIO FD-20i Input Modbus IO EXPANSION MODULE",
      category: "EMS",
      image: "/images/products/prod_10.png",
      link: "/contact?subject=Inquiry EasyIO FD-20i",
    },
    {
      name: "EasyIO FW-8 WiFi Controller EASYIO-FW-08",
      category: "EMS",
      image: "/images/products/prod_11.png",
      link: "/contact?subject=Inquiry EasyIO FW-8",
    },
    {
      name: "EasyIO FW-8V WiFi VAV CONTROLLER FOR VAV",
      category: "EMS",
      image: "/images/products/prod_12.png",
      link: "/contact?subject=Inquiry EasyIO FW-8V",
    },
    {
      name: "EasyIO FS-32 Controller IP Controller",
      category: "EMS",
      image: "/images/products/prod_13.png",
      link: "/contact?subject=Inquiry EasyIO FS-32",
    },
  ];

  return (
    <main className="flex-grow bg-white text-neutral-800 font-sans">
      {/* ── TOP SPACER & HEADING ── */}
      <section className="mt-[4.25rem] pt-16 pb-12 px-6 sm:px-10 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1841] tracking-tight leading-tight max-w-4xl mx-auto">
          Energy Management System untuk Bangunan Cerdas &amp; Efisien Energi
        </h1>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
      </section>

      {/* ── SECTION 1: WHAT IS EMS & WHY IS IT IMPORTANT ── */}
      <section className="py-12 px-6 sm:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Box 1: Apa itu EMS */}
          <div className="bg-[#f9fafb] p-8 sm:p-10 rounded-3xl border border-neutral-200/80 flex flex-col justify-between h-full">
            <div>
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <Image
                  src="/images/benua/086aa691-8f8c-43a3-a157-4371f254f6b6.jpg"
                  alt="Apa itu Energy Management System"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1d1841] mb-3">
                Apa itu Energy Management System (EMS)?
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed text-justify">
                Energy Management System (EMS) adalah platform cerdas yang digunakan untuk memantau, menganalisis, dan mengoptimalkan penggunaan energi secara real-time di gedung, pabrik, atau fasilitas industri. Melalui sistem ini, seluruh konsumsi listrik, air, gas, maupun pendingin dapat terpadu dalam satu dashboard digital, sehingga manajemen energi menjadi lebih mudah, akurat, dan efisien.
              </p>
            </div>
          </div>

          {/* Box 2: Mengapa Penting */}
          <div className="bg-[#f9fafb] p-8 sm:p-10 rounded-3xl border border-neutral-200/80 flex flex-col justify-between h-full">
            <div>
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <Image
                  src="/images/benua/d06d392f-e781-450e-a32b-c19f6dc41156.jpg"
                  alt="Mengapa EMS Penting"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1d1841] mb-3">
                Mengapa Penting?
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed text-justify">
                Tanpa sistem yang terintegrasi, pemantauan energi sering kali bersifat manual dan tidak efisien. EMS membantu organisasi mengidentifikasi pemborosan energi sejak dini, menurunkan biaya operasional, dan mendukung penerapan konsep bangunan hijau (green building) serta target keberlanjutan energi (sustainability goals).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: KENAPA MENGGUNAKAN EASYIO ── */}
      <section className="py-20 px-6 sm:px-10 bg-[#f4f7f4] border-y border-neutral-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1d1841] tracking-tight">
              Kenapa menggunakan EasyIO sebagai platform EMS
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed text-justify">
                EasyIO merupakan platform kontrol dan otomasi berbasis IoT yang banyak digunakan pada sistem energi modern karena memiliki fleksibilitas tinggi dan kemudahan integrasi dengan perangkat existing. EasyIO bukan hanya berfungsi sebagai gateway, tetapi sebagai edge controller yang mampu memproses data langsung di level perangkat sehingga lebih stabil dan responsif.
              </p>

              {/* Brand Logos Row */}
              <div className="flex items-center gap-6 pt-4 border-t border-neutral-200">
                <div className="bg-white px-6 py-3 rounded-xl border border-neutral-200 shadow-xs flex items-center gap-2">
                  <span className="font-extrabold text-[#1a3a6e] text-lg">EasyIO</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-xl border border-neutral-200 shadow-xs flex items-center gap-2">
                  <span className="font-extrabold text-neutral-800 text-sm">Johnson Controls</span>
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-md">
              <h3 className="text-lg font-bold text-[#1d1841] mb-4">
                Keunggulan Utama EasyIO:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Native IoT platform dengan dukungan MQTT dan REST API</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mendukung BACnet dan Modbus tanpa tambahan converter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pengolahan data langsung di controller (edge computing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dashboard berbasis web tanpa software tambahan lisensi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Skalabilitas untuk single building hingga multi-site</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Remote maintenance sehingga meminimalkan kunjungan onsite</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INDUSTRIES ── */}
      <section className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight">
            Industries
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#2a1768] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1d1841] mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 4: PRODUK EMS ── */}
      <section className="py-20 px-6 sm:px-10 bg-[#f9fafb] border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1841] tracking-tight">
              Produk
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {emsProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-50 mb-4 flex items-center justify-center p-3 border border-neutral-100">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase mb-1 block">
                    {prod.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#1d1841] leading-snug line-clamp-2">
                    {prod.name}
                  </h3>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-100">
                  <Link
                    href={prod.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2a1768] hover:text-emerald-600 transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
