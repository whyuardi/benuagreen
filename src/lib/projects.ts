export interface ProjectReference {
  id: string;
  clientName: string;
  category: "industrial" | "commercial" | "pulp-paper" | "food-beverage";
  categoryLabel: {
    id: string;
    en: string;
  };
  location: string;
  image: string;
  scopeOfWork: {
    id: string;
    en: string;
  };
  keyHighlights: {
    id: string[];
    en: string[];
  };
  impact: {
    id: string;
    en: string;
  };
}

export const MAJOR_PROJECTS: ProjectReference[] = [
  {
    id: "indorama",
    clientName: "PT. Indorama Polychem Indonesia",
    category: "industrial",
    categoryLabel: {
      id: "Industri Manufaktur & Polimer",
      en: "Industrial Polymer & Chemical"
    },
    location: "Purwakarta, Jawa Barat",
    image: "https://benuagreen.com/storage/img/produk/1769004131_6970dc6351a99.png",
    scopeOfWork: {
      id: "Sistem Pendingin Sentral & Pompa Sirkulasi Split Case Kapasitas Tinggi",
      en: "Central Cooling & High-Capacity Split Case Water Circulation System"
    },
    keyHighlights: {
      id: [
        "Instalasi Pompa Horizontal Split-Case Double Suction",
        "Sistem Perpipaan PPR Industri Tahan Tekanan & Korosi",
        "Supervisi Teknis & Monitoring Efisiensi Aliran Air 24/7"
      ],
      en: [
        "High-Capacity Horizontal Split-Case Double Suction Pumps",
        "Industrial Heavy-Duty PPR Piping & Valves",
        "Technical Supervision & 24/7 Hydraulic Flow Optimization"
      ]
    },
    impact: {
      id: "Penghematan konsumsi daya sirkulasi air industri hingga 28% dan uptime operasi 99.9%.",
      en: "28% reduction in industrial water circulation power with 99.9% operational uptime."
    }
  },
  {
    id: "indah-kiat",
    clientName: "PT. Indah Kiat Pulp & Paper Tbk",
    category: "pulp-paper",
    categoryLabel: {
      id: "Industri Pulp & Kertas Terbesar",
      en: "Major Pulp & Paper Mill"
    },
    location: "Perawang (Riau) & Serang (Banten)",
    image: "https://benuagreen.com/storage/img/produk/1769004038_6970dc067a051.png",
    scopeOfWork: {
      id: "Sistem Pompa Dewatering, Pengolahan Air Limbah & Jalur Perpipaan PPR",
      en: "Heavy Dewatering, Effluent Handling & Industrial Piping Infrastructure"
    },
    keyHighlights: {
      id: [
        "Pompa Submersible Limbah Berat (SDW & SSEG Series)",
        "Jaringan Pipa PPR Tahan Asam & Kimia Ringan",
        "Katup Kontrol Balancing & Motorized Valve Terintegrasi"
      ],
      en: [
        "Heavy-Duty Submersible Slurry & Wastewater Pumps",
        "Chemical-Resistant Food-Grade PPR Pipeline",
        "Integrated Flow Balancing & Motorized Control Valves"
      ]
    },
    impact: {
      id: "Kapasitas pengolahan air sirkulasi mill mencapai 500+ m³/jam dengan keandalan continuous-duty.",
      en: "Over 500+ m³/hr mill water circulation capacity with continuous heavy-duty reliability."
    }
  },
  {
    id: "rapp",
    clientName: "PT. Riau Andalan Pulp & Paper (RAPP)",
    category: "pulp-paper",
    categoryLabel: {
      id: "Industri Pulp, Kertas & Bio-Energi",
      en: "Pulp, Paper & Bio-Energy"
    },
    location: "Pangkalan Kerinci, Riau",
    image: "https://benuagreen.com/storage/img/produk/1769003131_6970d87bf23a6.png",
    scopeOfWork: {
      id: "Pemanfaatan Waste Heat, Steam Recovery & Pompa Multistage Tekanan Tinggi",
      en: "Waste Heat Steam Recovery & High-Pressure Multistage Booster Systems"
    },
    keyHighlights: {
      id: [
        "Sistem Multistage Stainless Steel High-Pressure (Sero Series)",
        "Integrasi Steam Trap & Heat Exchanger Efisiensi Termal",
        "Sensor Proteksi Overload & Dry-Run Cerdas"
      ],
      en: [
        "High-Pressure Stainless Steel Multistage Booster Arrays",
        "High-Enthalpy Steam Trap & Heat Recovery Integration",
        "Smart Dry-Run & Thermal Overload Protection"
      ]
    },
    impact: {
      id: "Reduksi kehilangan energi panas dan peningkatan efisiensi pembangkitan uap mill.",
      en: "Significant thermal energy recovery and optimized steam generation efficiency."
    }
  },
  {
    id: "garudafood",
    clientName: "PT. Garudafood Putra Putri Jaya Tbk",
    category: "food-beverage",
    categoryLabel: {
      id: "Industri Makanan & Minuman (F&B)",
      en: "Food & Beverage Manufacturing"
    },
    location: "Gresik & Pati, Indonesia",
    image: "https://benuagreen.com/storage/img/produk/1769003281_6970d91149775.png",
    scopeOfWork: {
      id: "Sistem Suplai Air Bersih Higienis Food-Grade & Hydropneumatic Booster",
      en: "Hygienic Food-Grade Water Distribution & VFD Booster Systems"
    },
    keyHighlights: {
      id: [
        "Pipa PPR Higienis Bebas Timbal & Korosi Standar Food-Grade",
        "Paket Pompa Booster Multi-VFD Tekanan Konstan Otomatis",
        "Isolasi Termal Pipa Dingin untuk Mencegah Kondensasi"
      ],
      en: [
        "Certified Lead-Free & Corrosion-Free Food-Grade PPR System",
        "Automated Multi-VFD Constant Pressure Booster Station",
        "Closed-Cell Anti-Condensation Thermal Pipe Insulation"
      ]
    },
    impact: {
      id: "Kualitas air sanitasi terjaga 100% steril dan tekanan air konstan di seluruh lini produksi.",
      en: "100% sterile sanitary water quality with unwavering constant pressure across all production lines."
    }
  },
  {
    id: "moi",
    clientName: "Mall of Indonesia (MOI)",
    category: "commercial",
    categoryLabel: {
      id: "Pusat Perbelanjaan & Komersial",
      en: "Mega Commercial Shopping Mall"
    },
    location: "Kelapa Gading, Jakarta Utara",
    image: "https://benuagreen.com/storage/img/produk/1769004074_6970dc2adbef9.png",
    scopeOfWork: {
      id: "Sistem Tata Udara HVAC, Chiller Central & Cooling Tower Circulation",
      en: "Commercial Central HVAC, Chiller Plant & Cooling Tower Circulation"
    },
    keyHighlights: {
      id: [
        "Pompa Sirkulasi Chilled Water & Condenser Water Kapasitas Besar",
        "Jaringan Valve Keseimbangan Tekanan (Dynamic Balancing Valve)",
        "Monitoring Telemetri Suhu & Tekanan Real-Time"
      ],
      en: [
        "Large-Scale Chilled Water & Condenser Circulation Pumps",
        "Dynamic Hydraulic Balancing & Motorized Control Valves",
        "Real-Time Thermal & Flow Telemetry Monitoring"
      ]
    },
    impact: {
      id: "Efisiensi sirkulasi HVAC gedung meningkat 22% dengan distribusi udara sejuk yang merata.",
      en: "22% improvement in central HVAC circulation efficiency with uniform cooling comfort."
    }
  },
  {
    id: "central-park",
    clientName: "Central Park Mall",
    category: "commercial",
    categoryLabel: {
      id: "Superblock & Kawasan Komersial Terpadu",
      en: "Commercial Superblock & Shopping Hub"
    },
    location: "Grogol Petamburan, Jakarta Barat",
    image: "https://benuagreen.com/storage/img/produk/1769002815_6970d73f449db.png",
    scopeOfWork: {
      id: "Optimalisasi Sirkulasi Cooling Tower, Air Handling Units & Pipa PPR Chiller",
      en: "Cooling Tower Circulation Optimization, AHU Systems & Chiller Piping"
    },
    keyHighlights: {
      id: [
        "Pompa End-Suction Efisiensi Tinggi dengan Efisiensi Motor IE3",
        "Pipa PPR Cold-Water Tahan Tekanan Tinggi dengan Sambungan Fusion",
        "Insulasi Termal Elastomerik Bebas Debu & Higienis"
      ],
      en: [
        "Premium IE3 Efficiency End-Suction Centrifugal Pumps",
        "High-Pressure PPR Chilled Water Lines with Fusion Welds",
        "Dust-Free Elastomeric Rubber Foam Insulation"
      ]
    },
    impact: {
      id: "Mengurangi risiko kebocoran pipa hingga 0% dan menghemat biaya listrik operasional bulanan.",
      en: "Zero pipe leak risk with substantial monthly cooling operational power savings."
    }
  }
];
