"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

export const dictionary = {
  // Navbar
  "nav.products": {
    id: "Produk",
    en: "Products",
  },
  "nav.pumps": {
    id: "Pompa",
    en: "Pumps",
  },
  "nav.ppr": {
    id: "Pipa PPR & Irigasi",
    en: "PPR & Piping",
  },
  "nav.about": {
    id: "Tentang Kami",
    en: "About",
  },
  "nav.contact": {
    id: "Kontak",
    en: "Contact",
  },
  "nav.inquire": {
    id: "Konsultasi",
    en: "Inquire",
  },
  "nav.requestQuote": {
    id: "Minta Penawaran",
    en: "Request Quote",
  },
  "nav.tagline": {
    id: "Energi & Sistem Air",
    en: "Energy & Water",
  },

  // Hero Banner
  "hero.badge": {
    id: "Sistem Pompa Tenaga Surya & Pengolahan Air",
    en: "Sustainable Pumping & Energy Systems",
  },
  "hero.title1": {
    id: "Kesederhanaan dalam rekayasa,",
    en: "Simplicity in engineering,",
  },
  "hero.title2": {
    id: "keandalan dalam energi.",
    en: "reliability in energy.",
  },
  "hero.subtitle": {
    id: "Katalog pilihan pompa celup tenaga surya berefisiensi tinggi, variable frequency drive pintar, inverter gelombang sinus murni, dan pipa PPR bersertifikasi.",
    en: "Curated catalog of high-efficiency solar submersible pumps, intelligent variable speed drives, pure sine inverters, and certified PPR infrastructure.",
  },
  "hero.searchPlaceholder": {
    id: "Cari model pompa atau seri produk...",
    en: "Search products or equipment series...",
  },
  "hero.clear": {
    id: "Hapus",
    en: "Clear",
  },
  "hero.all": {
    id: "Semua",
    en: "All",
  },

  // Categories
  "cat.pumps": {
    id: "Pompa Air Efisiensi Tinggi",
    en: "High Efficiency Pumps",
  },
  "cat.solarDrives": {
    id: "Solar Drive & Inverter Pompa",
    en: "Solar Pump Inverter Drives",
  },
  "cat.ppr": {
    id: "Pipa PPR & Drip Irigasi",
    en: "PPR Piping & Drip Irrigation",
  },
  "cat.inverter": {
    id: "Inverter Hybrid & Storage",
    en: "Pure Sine Hybrid Inverters",
  },
  "cat.starters": {
    id: "Soft Starter & Kontroler Motor",
    en: "Motor Starters & Control Panels",
  },
  "cat.rms": {
    id: "Telemetri RMS & IoT Pintar",
    en: "RMS Telemetry & IoT Cloud",
  },

  // Catalog Section
  "catalog.collection": {
    id: "Koleksi",
    en: "Collection",
  },
  "catalog.allProducts": {
    id: "Katalog Lengkap",
    en: "Complete Catalog",
  },
  "catalog.carousel": {
    id: "Carousel",
    en: "Carousel",
  },
  "catalog.grid": {
    id: "Grid",
    en: "Grid",
  },
  "catalog.viewDetails": {
    id: "Lihat Detail",
    en: "View Details",
  },
  "catalog.searchResults": {
    id: "Hasil pencarian untuk",
    en: "Search results for",
  },
  "catalog.productsFound": {
    id: "produk ditemukan",
    en: "products found",
  },
  "catalog.clearSearch": {
    id: "Hapus Pencarian",
    en: "Clear Search",
  },
  "catalog.noProducts": {
    id: "Tidak ada produk yang cocok",
    en: "No products matched",
  },
  "catalog.noProductsDesc": {
    id: "Kami tidak menemukan produk yang sesuai dengan kata kunci pencarian Anda.",
    en: "We couldn't find any items matching your search query.",
  },
  "catalog.viewAll": {
    id: "Lihat Semua Produk",
    en: "View All Products",
  },

  // Story & Philosophy
  "story.label": {
    id: "Filosofi Kami",
    en: "Our Philosophy",
  },
  "story.title": {
    id: "Dirancang untuk daya tahan panjang, dibangun untuk masa depan.",
    en: "Designed for longevity, built for the future.",
  },
  "story.p1": {
    id: "PT Benua Green Energy menyediakan solusi pompa air tenaga surya berkualitas tinggi, variable frequency drive, dan sistem perpipaan irigasi PPR presisi yang dirancang tangguh untuk operasional berat.",
    en: "PT Benua Green Energy delivers high-performance solar water pumping solutions, variable frequency drives, and precision PPR irrigation infrastructure engineered to thrive in demanding environments.",
  },
  "story.p2": {
    id: "Setiap peralatan dirancang untuk efisiensi hidrolik maksimal, integrasi tenaga surya tanpa hambatan, dan keandalan jangka panjang untuk sektor pertanian, industri, dan fasilitas komersial.",
    en: "Every system is curated for maximum hydraulic efficiency, seamless hybrid solar integration, and long-term durability across agricultural, municipal, and commercial installations.",
  },
  "story.readMore": {
    id: "Baca profil perusahaan",
    en: "Read company story",
  },
  "metrics.models": {
    id: "Model Produk",
    en: "Product Models",
  },
  "metrics.mppt": {
    id: "Efisiensi MPPT",
    en: "MPPT Tracking",
  },
  "metrics.life": {
    id: "Masa Pakai PPR",
    en: "PPR Material Life",
  },
  "metrics.support": {
    id: "Layanan Teknis",
    en: "Dedicated Support",
  },

  // Inquiry Callout
  "inquiry.title": {
    id: "Butuh bantuan perhitungan head pompa atau penawaran harga?",
    en: "Need customized system sizing or quotation?",
  },
  "inquiry.desc": {
    id: "Tim teknis kami siap memberikan estimasi kebutuhan kapasitas, perhitungan gesekan pipa, dan spesifikasi produk.",
    en: "Our application engineers provide head calculations, pipe friction loss audits, and product estimates.",
  },
  "inquiry.btn": {
    id: "Hubungi Tim Teknis",
    en: "Contact Engineering Team",
  },

  // Modal
  "modal.specs": {
    id: "Spesifikasi & Fitur",
    en: "Specifications & Features",
  },
  "modal.requestQuote": {
    id: "Minta Penawaran Harga",
    en: "Request Price Quotation",
  },
  "modal.close": {
    id: "Tutup",
    en: "Close",
  },

  // Pumps Page
  "pumps.division": {
    id: "Divisi Sistem Pompa",
    en: "Pumping Systems Division",
  },
  "pumps.title": {
    id: "Pompa Efisiensi Tinggi",
    en: "High-Efficiency Pumps",
  },
  "pumps.desc": {
    id: "Rangkaian lengkap pompa air limbah, pompa tenaga surya, pompa multistage vertikal, booster tekan, dan pompa celup sumur dalam.",
    en: "Comprehensive range of wastewater, solar surface, multistage, booster, and deep well pumping systems.",
  },
  "pumps.search": {
    id: "Cari model pompa...",
    en: "Search pump models...",
  },
  "pumps.allPumps": {
    id: "Semua Pompa",
    en: "All Pumps",
  },
  "pumps.solar": {
    id: "Tenaga Surya & DC",
    en: "Solar & DC",
  },
  "pumps.booster": {
    id: "Booster",
    en: "Booster",
  },
  "pumps.multistage": {
    id: "Multistage",
    en: "Multistage",
  },
  "pumps.waste": {
    id: "Air Limbah / Drainase",
    en: "Wastewater",
  },
  "pumps.submersible": {
    id: "Pompa Celup",
    en: "Submersible",
  },
  "pumps.showing": {
    id: "Menampilkan",
    en: "Showing",
  },
  "pumps.of": {
    id: "dari",
    en: "of",
  },
  "pumps.models": {
    id: "model pompa",
    en: "pump models",
  },
  "pumps.noResult": {
    id: "Tidak ada model pompa yang sesuai dengan pencarian Anda.",
    en: "No pump models match the current search criteria.",
  },
  "pumps.reset": {
    id: "Reset Filter",
    en: "Reset Filters",
  },

  // PPR Page
  "ppr.division": {
    id: "Divisi Pipa & Irigasi Presisi",
    en: "Piping & Irrigation Division",
  },
  "ppr.title": {
    id: "Pipa PPR & Irigasi Tetes",
    en: "PPR Pipes & Precision Irrigation",
  },
  "ppr.desc": {
    id: "Pipa Polypropylene Random Copolymer food-grade standar internasional, selang drip tetes flat/round, dan jalur mikro-irigasi modern.",
    en: "Food-grade Polypropylene Random Copolymer pipes, flat and round drip tapes, and precision micro-irrigation lines.",
  },
  "ppr.feat1.title": {
    id: "Masa Pakai 50+ Tahun",
    en: "50+ Years Lifespan",
  },
  "ppr.feat1.desc": {
    id: "Bebas kerak, tidak beracun, dan tahan terhadap korosi serta suhu cairan tinggi.",
    en: "Zero scaling, non-toxic, and resistant to corrosion even under extreme fluid temperatures.",
  },
  "ppr.feat2.title": {
    id: "Tahan Sinar UV",
    en: "UV Stabilized",
  },
  "ppr.feat2.desc": {
    id: "Dirancang untuk pemasangan luar ruangan di area pertanian dengan ketahanan tekanan tinggi.",
    en: "Engineered for outdoor agricultural exposure with high burst pressure limits.",
  },
  "ppr.feat3.title": {
    id: "Emitter Tetes Presisi",
    en: "Precision Drippers",
  },
  "ppr.feat3.desc": {
    id: "Saluran labirin anti-sumbat yang memastikan distribusi debit air merata ke setiap tanaman.",
    en: "Anti-clogging labyrinth flow channels maximize uniform water delivery across row crops.",
  },
  "ppr.collection": {
    id: "Koleksi Produk Pipa & Irigasi",
    en: "Product Collection",
  },

  // About Page
  "about.overview": {
    id: "Profil Perusahaan",
    en: "Company Overview",
  },
  "about.title": {
    id: "Tentang Benua Green Energy",
    en: "About Benua Green Energy",
  },
  "about.desc": {
    id: "Spesialis penyedia sistem energi bersih berkelanjutan, teknologi pompa tenaga surya, dan jaringan perpipaan PPR berkualitas tinggi.",
    en: "Specializing in sustainable clean-tech energy systems, solar pumping technology, and high-density PPR water networks.",
  },
  "about.whoWeAre": {
    id: "Siapa Kami",
    en: "Who We Are",
  },
  "about.headline": {
    id: "Pelopor Teknologi Tenaga Bersih & Pengelolaan Air",
    en: "Pioneering Clean Power & Water Technology",
  },
  "about.p1": {
    id: "PT Benua Green Energy berkomitmen menghadirkan produk pompa industri, inverter hybrid, solar drive, dan jaringan irigasi presisi untuk mendukung sektor pertanian, komunitas daerah, dan fasilitas industri di seluruh Indonesia.",
    en: "PT Benua Green Energy is dedicated to providing industrial-grade pumping systems, hybrid inverters, solar drives, and precision irrigation networks that empower communities, agricultural enterprises, and industrial facilities.",
  },
  "about.p2": {
    id: "Semua peralatan kami dirancang dengan material metalurgi tangguh, telemetri canggih, dan drive MPPT hemat energi untuk performa stabil di berbagai kondisi iklim tropis.",
    en: "Our products are engineered with robust metallurgy, intelligent telemetry, and energy-conserving MPPT drives to guarantee relentless performance under the most challenging tropical climates.",
  },
  "about.mpptLabel": {
    id: "Efisiensi MPPT",
    en: "MPPT Tracking",
  },
  "about.monitoringLabel": {
    id: "Monitoring Sistem",
    en: "System Monitoring",
  },
  "about.lifespanLabel": {
    id: "Masa Pakai Pipa",
    en: "PPR Pipe Lifespan",
  },
  "about.cleanEnergyLabel": {
    id: "Fokus Energi Bersih",
    en: "Clean Energy Focus",
  },
  "about.ctaTitle": {
    id: "Siap menemukan solusi untuk proyek Anda?",
    en: "Ready to explore our solutions?",
  },
  "about.ctaDesc": {
    id: "Jelajahi katalog lengkap pompa, inverter, dan produk perpipaan kami.",
    en: "Browse our complete catalog of pumps, inverters, and irrigation products.",
  },
  "about.ctaProducts": {
    id: "Jelajahi Semua Produk",
    en: "Browse All Products",
  },
  "about.ctaContact": {
    id: "Hubungi Kami",
    en: "Contact Us",
  },

  // Contact Page
  "contact.direct": {
    id: "Bantuan Langsung",
    en: "Direct Assistance",
  },
  "contact.title": {
    id: "Kontak & Layanan Teknis",
    en: "Contact & Inquiries",
  },
  "contact.desc": {
    id: "Butuh konsultasi sizing sistem, penawaran harga, pengiriman suku cadang, atau garansi? Tim spesialis kami siap membantu.",
    en: "Need system sizing assistance, quotation, spare parts dispatch, or warranty support? Our engineers are ready to help.",
  },
  "contact.officeInfo": {
    id: "Informasi Kantor",
    en: "Office Information",
  },
  "contact.headquarters": {
    id: "Kantor Pusat",
    en: "Headquarters",
  },
  "contact.location": {
    id: "Jakarta, Indonesia",
    en: "Jakarta, Indonesia",
  },
  "contact.emailInquiry": {
    id: "Email Pertanyaan",
    en: "Email Inquiry",
  },
  "contact.officialPortal": {
    id: "Portal Resmi",
    en: "Official Portal",
  },
  "contact.operatingHours": {
    id: "Jam Operasional",
    en: "Operating Hours",
  },
  "contact.hours": {
    id: "Senin – Jumat: 08:00 – 17:00 WIB",
    en: "Monday – Friday: 08:00 – 17:00",
  },
  "contact.waTitle": {
    id: "Layanan WhatsApp Langsung",
    en: "Direct WhatsApp Channel",
  },
  "contact.waDesc": {
    id: "Terhubung langsung dengan tim aplikasi rekayasa kami untuk konsultasi teknis instan.",
    en: "Connect directly with our applications engineering department for instant technical sizing.",
  },
  "contact.waBtn": {
    id: "Buka Chat WhatsApp →",
    en: "Start WhatsApp Chat →",
  },
  "contact.formTitle": {
    id: "Kirim Pesan",
    en: "Send a Message",
  },
  "contact.formDesc": {
    id: "Isi detail kebutuhan proyek Anda di bawah ini dan tim kami akan segera merespons.",
    en: "Fill in your project details below and we will respond promptly.",
  },
  "contact.receivedTitle": {
    id: "Pesan Berhasil Terkirim",
    en: "Message Received",
  },
  "contact.receivedDesc": {
    id: "Terima kasih telah menghubungi kami. Tim Benua Green Energy akan segera meninjau kebutuhan Anda.",
    en: "Thank you for reaching out. We will review your specifications and contact you shortly.",
  },
  "contact.sendAnother": {
    id: "Kirim Pesan Lain",
    en: "Send Another Message",
  },
  "contact.nameLabel": {
    id: "Nama Lengkap *",
    en: "Full Name *",
  },
  "contact.emailLabel": {
    id: "Alamat Email *",
    en: "Email Address *",
  },
  "contact.phoneLabel": {
    id: "No. Telepon / WhatsApp",
    en: "Phone / WhatsApp",
  },
  "contact.categoryLabel": {
    id: "Kategori Produk",
    en: "Equipment Category",
  },
  "contact.messageLabel": {
    id: "Detail Kebutuhan / Pesan *",
    en: "Message / Project Details *",
  },
  "contact.messagePlaceholder": {
    id: "Jelaskan debit air (m3/jam), total head (m), daya panel surya, atau model spesifik yang dicari...",
    en: "Please specify flow rate (m3/h), total head (m), or specific equipment requirements...",
  },
  "contact.submitBtn": {
    id: "Kirim Pertanyaan",
    en: "Submit Inquiry",
  },

  // Footer
  "footer.desc": {
    id: "Pompa tenaga surya berefisiensi tinggi, variable frequency drive, dan sistem irigasi PPR presisi untuk keandalan jangka panjang.",
    en: "High-efficiency solar pumping, variable frequency drives, and precision PPR irrigation infrastructure built for long-term reliability.",
  },
  "footer.navigation": {
    id: "Navigasi",
    en: "Navigation",
  },
  "footer.allProducts": {
    id: "Semua Produk",
    en: "All Products",
  },
  "footer.pumpsCatalog": {
    id: "Katalog Pompa",
    en: "Pumps Catalog",
  },
  "footer.pprSolutions": {
    id: "Pipa PPR & Irigasi",
    en: "PPR & Piping Solutions",
  },
  "footer.aboutCompany": {
    id: "Tentang Perusahaan",
    en: "About the Company",
  },
  "footer.contactInquiries": {
    id: "Kontak & Konsultasi",
    en: "Contact & Inquiries",
  },
  "footer.categories": {
    id: "Kategori Produk",
    en: "Product Categories",
  },
  "footer.assistance": {
    id: "Bantuan",
    en: "Assistance",
  },
  "footer.assistanceDesc": {
    id: "Punya pertanyaan teknis atau butuh penawaran harga resmi?",
    en: "Have technical questions or need a quotation?",
  },
  "footer.chatWa": {
    id: "Chat via WhatsApp →",
    en: "Chat on WhatsApp →",
  },
  "footer.privacy": {
    id: "Privasi",
    en: "Privacy",
  },
  "footer.terms": {
    id: "Ketentuan",
    en: "Terms",
  },
  "footer.support": {
    id: "Dukungan",
    en: "Support",
  },
  "footer.rights": {
    id: "Hak cipta dilindungi undang-undang.",
    en: "All rights reserved.",
  },
};

export type TranslationKey = keyof typeof dictionary;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key as string,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("benuagreen_lang") as Language;
      if (saved === "id" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // ignore SSR/localStorage exceptions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("benuagreen_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === "id" ? "en" : "id";
    setLanguage(next);
  };

  const t = (key: TranslationKey): string => {
    const item = dictionary[key];
    if (!item) return key as string;
    return item[language] || item.id || (key as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
