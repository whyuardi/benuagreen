export type RentalStatus = "available" | "rented" | "reserved";
export type RentalCategory = "submersible" | "booster" | "solar-package" | "drainage" | "ppr-rig";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface LocalizedList {
  id: string[];
  en: string[];
}

export interface RentalUnit {
  id: string;
  name: string;
  category: RentalCategory;
  categoryName: LocalizedText;
  image: string;
  status: RentalStatus;
  availableFrom?: LocalizedText;
  locationHub: LocalizedText;
  
  // Specifications
  flowRate: LocalizedText;
  headMax: LocalizedText;
  powerKw: number;
  powerHp: number;
  powerType: LocalizedText;
  minDepth: number; // for wizard matching (meter)
  maxDepth: number;
  minFlow: number;  // for wizard matching (m3/h)
  maxFlow: number;

  // Rental Pricing
  rateDaily: LocalizedText;
  rateMonthly: LocalizedText;
  minDays: number;
  
  // Features & Package Includes
  includes: LocalizedList;
  description: LocalizedText;
}

export interface RentalFAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  category: "liability" | "extension" | "logistics" | "installation" | "terms";
}

export const RENTAL_UNITS: RentalUnit[] = [
  {
    id: "rent-deepwell-55",
    name: "Submersible Deep Well Solar Pump 5.5kW",
    category: "submersible",
    categoryName: {
      id: "Pompa Sumur Dalam",
      en: "Deep Well Submersible Pump"
    },
    image: "https://benuagreen.com/storage/img/produk/1769003114_6970d86a03fe5.png",
    status: "available",
    availableFrom: {
      id: "Ready Stock (Siap Kirim)",
      en: "Ready Stock (Ready to Dispatch)"
    },
    locationHub: {
      id: "Jakarta & Surabaya Hub",
      en: "Jakarta & Surabaya Hub"
    },
    flowRate: {
      id: "10 - 25 m³/jam",
      en: "10 - 25 m³/hr"
    },
    headMax: {
      id: "140 meter",
      en: "140 meters"
    },
    powerKw: 5.5,
    powerHp: 7.5,
    powerType: {
      id: "Solar PV / 3-Phase 380V",
      en: "Solar PV / 3-Phase 380V"
    },
    minDepth: 40,
    maxDepth: 140,
    minFlow: 10,
    maxFlow: 25,
    rateDaily: {
      id: "Rp 550.000 / hari",
      en: "IDR 550,000 / day"
    },
    rateMonthly: {
      id: "Rp 9.800.000 / bulan",
      en: "IDR 9,800,000 / month"
    },
    minDays: 3,
    includes: {
      id: [
        "Kabel Submersible Tahan Air 100m",
        "Panel Smart Controller / VFD Inverter",
        "Sensor Level Air Dry-Run Protection",
        "Garansi Unit Pengganti < 24 Jam"
      ],
      en: [
        "100m Waterproof Submersible Cable",
        "Smart Controller / VFD Inverter Panel",
        "Dry-Run Water Level Sensors",
        "< 24h Replacement Unit Guarantee"
      ]
    },
    description: {
      id: "Pompa sumur dalam kapasitas tinggi tahan pasir halus untuk kebutuhan irigasi perkebunan dan suplai air bersih proyek konstruksi.",
      en: "High-capacity deep well borehole pump engineered for agricultural irrigation and construction clean water supply."
    }
  },
  {
    id: "rent-solar-pkg-75",
    name: "Paket Mobile Solar Pumping Rig 7.5kW",
    category: "solar-package",
    categoryName: {
      id: "Paket Pompa Tenaga Surya",
      en: "Solar Pumping Package"
    },
    image: "https://benuagreen.com/storage/img/produk/1769003584_6970da40b616a.png",
    status: "available",
    availableFrom: {
      id: "Ready Stock (Siap Kirim)",
      en: "Ready Stock (Ready to Dispatch)"
    },
    locationHub: {
      id: "Jakarta Hub",
      en: "Jakarta Hub"
    },
    flowRate: {
      id: "20 - 45 m³/jam",
      en: "20 - 45 m³/hr"
    },
    headMax: {
      id: "110 meter",
      en: "110 meters"
    },
    powerKw: 7.5,
    powerHp: 10,
    powerType: {
      id: "100% Off-Grid Solar PV + Hybrid Inverter",
      en: "100% Off-Grid Solar PV + Hybrid Inverter"
    },
    minDepth: 30,
    maxDepth: 110,
    minFlow: 20,
    maxFlow: 45,
    rateDaily: {
      id: "Rp 950.000 / hari",
      en: "IDR 950,000 / day"
    },
    rateMonthly: {
      id: "Rp 17.500.000 / bulan",
      en: "IDR 17,500,000 / month"
    },
    minDays: 7,
    includes: {
      id: [
        "Rig Panel Surya Lipat Portabel 8 kWp",
        "Hybrid Inverter & MPPT Controller IP65",
        "Kabel & Selang Distribusi 100m",
        "Supervisi & Pemasangan Awal oleh Teknisi"
      ],
      en: [
        "8 kWp Portable Foldable Solar PV Rig",
        "Hybrid Inverter & MPPT Controller IP65",
        "100m Cable & Layflat Distribution Hose",
        "On-Site Setup Supervision by Certified Technician"
      ]
    },
    description: {
      id: "Sistem pompa mandiri 100% tanpa listrik PLN / bahan bakar minyak, sangat ideal untuk eksplorasi tambang dan lahan pertanian terpencil.",
      en: "100% autonomous pumping system without fuel or grid electricity, ideal for remote exploration and agricultural sites."
    }
  },
  {
    id: "rent-booster-multi-11",
    name: "Sero Vertical Multistage Booster Pump 11kW",
    category: "booster",
    categoryName: {
      id: "Booster Tekanan Tinggi",
      en: "High-Pressure Booster"
    },
    image: "https://benuagreen.com/storage/img/produk/1769003131_6970d87bf23a6.png",
    status: "rented",
    availableFrom: {
      id: "Tersedia 18 Sep 2026 (Bookable)",
      en: "Available 18 Sep 2026 (Bookable)"
    },
    locationHub: {
      id: "Surabaya Hub",
      en: "Surabaya Hub"
    },
    flowRate: {
      id: "30 - 60 m³/jam",
      en: "30 - 60 m³/hr"
    },
    headMax: {
      id: "180 meter",
      en: "180 meters"
    },
    powerKw: 11,
    powerHp: 15,
    powerType: {
      id: "380V 3-Phase",
      en: "380V 3-Phase"
    },
    minDepth: 0,
    maxDepth: 30,
    minFlow: 30,
    maxFlow: 60,
    rateDaily: {
      id: "Rp 750.000 / hari",
      en: "IDR 750,000 / day"
    },
    rateMonthly: {
      id: "Rp 13.500.000 / bulan",
      en: "IDR 13,500,000 / month"
    },
    minDays: 3,
    includes: {
      id: [
        "Impeller Stainless Steel SS304",
        "Panel Soft Starter & Overload Relay",
        "Manifold & Pressure Gauge Kit",
        "Layanan Maintenance Berkala Gratis"
      ],
      en: [
        "Stainless Steel SS304 Impellers",
        "Soft Starter Panel & Overload Relay",
        "Manifold & High Pressure Gauge Kit",
        "Free Monthly Scheduled Maintenance"
      ]
    },
    description: {
      id: "Pompa booster tekanan tinggi multistage vertikal untuk hydro-testing pipa, transfer air gedung bertingkat, dan suplai industri.",
      en: "Vertical multistage high-pressure booster pump for pipeline hydro-testing, high-rise transfer, and industrial processing."
    }
  },
  {
    id: "rent-dewatering-sdw-4",
    name: "SDW Heavy-Duty Submersible Dewatering 4kW",
    category: "drainage",
    categoryName: {
      id: "Drainase & Dewatering",
      en: "Drainage & Dewatering"
    },
    image: "https://benuagreen.com/storage/img/produk/1769004038_6970dc067a051.png",
    status: "available",
    availableFrom: {
      id: "Ready Stock (Siap Kirim)",
      en: "Ready Stock (Ready to Dispatch)"
    },
    locationHub: {
      id: "Jakarta & Balikpapan Hub",
      en: "Jakarta & Balikpapan Hub"
    },
    flowRate: {
      id: "40 - 90 m³/jam",
      en: "40 - 90 m³/hr"
    },
    headMax: {
      id: "35 meter",
      en: "35 meters"
    },
    powerKw: 4,
    powerHp: 5.5,
    powerType: {
      id: "380V 3-Phase / Genset Ready",
      en: "380V 3-Phase / Genset Ready"
    },
    minDepth: 0,
    maxDepth: 25,
    minFlow: 40,
    maxFlow: 90,
    rateDaily: {
      id: "Rp 400.000 / hari",
      en: "IDR 400,000 / day"
    },
    rateMonthly: {
      id: "Rp 7.200.000 / bulan",
      en: "IDR 7,200,000 / month"
    },
    minDays: 2,
    includes: {
      id: [
        "Impeller Anti-Sumbat (Vortex Type)",
        "Selang Buang Layflat Heavy Duty 50m",
        "Panel Starter Portabel IP65",
        "Unit Cadangan Standby"
      ],
      en: [
        "Non-Clogging Vortex Impeller",
        "50m Heavy-Duty Layflat Discharge Hose",
        "Portable IP65 Starter Panel",
        "Standby Replacement Unit"
      ]
    },
    description: {
      id: "Pompa dewatering lumpur dan air kotor proyek galian basement, saluran tambang, serta penanganan banjir konstruksi.",
      en: "Sludge and dirty water dewatering pump for basement excavation, mine drainage, and civil flood management."
    }
  },
  {
    id: "rent-ppr-welding-rig",
    name: "Mesin Penyambung Pipa PPR & Electrofusion Rig",
    category: "ppr-rig",
    categoryName: {
      id: "Alat Instalasi PPR",
      en: "PPR Piping Rig"
    },
    image: "https://benuagreen.com/storage/img/produk/1769003848_6970db48ed186.png",
    status: "available",
    availableFrom: {
      id: "Ready Stock (Siap Kirim)",
      en: "Ready Stock (Ready to Dispatch)"
    },
    locationHub: {
      id: "Jakarta, Surabaya, Medan",
      en: "Jakarta, Surabaya, Medan"
    },
    flowRate: {
      id: "Diameter 20mm - 160mm",
      en: "Pipe OD 20mm - 160mm"
    },
    headMax: {
      id: "PN 10 / PN 16 / PN 20",
      en: "PN 10 / PN 16 / PN 20"
    },
    powerKw: 2.2,
    powerHp: 3,
    powerType: {
      id: "220V 1-Phase / Genset",
      en: "220V 1-Phase / Genset"
    },
    minDepth: 0,
    maxDepth: 0,
    minFlow: 0,
    maxFlow: 0,
    rateDaily: {
      id: "Rp 250.000 / hari",
      en: "IDR 250,000 / day"
    },
    rateMonthly: {
      id: "Rp 4.500.000 / bulan",
      en: "IDR 4,500,000 / month"
    },
    minDays: 2,
    includes: {
      id: [
        "Heating Plate Digital 20mm - 160mm",
        "Pemotong Pipa Presisi & Scraper",
        "Manual Book & Safety Kit",
        "Training Singkat Pengoperasian"
      ],
      en: [
        "20mm - 160mm Digital Heating Plate",
        "Precision Pipe Cutter & Pipe Scraper",
        "Operation Manual & Safety Gear",
        "Brief Operator Briefing & Training"
      ]
    },
    description: {
      id: "Perangkat pemanas butt-fusion & socket welding standar internasional untuk instalasi jaringan pipa air bersih dan air panas.",
      en: "Butt-fusion and socket welding rig for professional potable water and industrial hot water pipeline installations."
    }
  },
  {
    id: "rent-deepwell-solar-3",
    name: "Submersible Borehole Solar Pump 3.0kW",
    category: "submersible",
    categoryName: {
      id: "Pompa Sumur Dalam",
      en: "Deep Well Submersible Pump"
    },
    image: "https://benuagreen.com/storage/img/produk/1769002917_6970d7a5ef081.png",
    status: "available",
    availableFrom: {
      id: "Ready Stock (Siap Kirim)",
      en: "Ready Stock (Ready to Dispatch)"
    },
    locationHub: {
      id: "Jakarta & Makassar Hub",
      en: "Jakarta & Makassar Hub"
    },
    flowRate: {
      id: "5 - 15 m³/jam",
      en: "5 - 15 m³/hr"
    },
    headMax: {
      id: "90 meter",
      en: "90 meters"
    },
    powerKw: 3.0,
    powerHp: 4.0,
    powerType: {
      id: "Solar DC Brushless / Solar Inverter",
      en: "Solar DC Brushless / Solar Inverter"
    },
    minDepth: 20,
    maxDepth: 90,
    minFlow: 5,
    maxFlow: 15,
    rateDaily: {
      id: "Rp 380.000 / hari",
      en: "IDR 380,000 / day"
    },
    rateMonthly: {
      id: "Rp 6.800.000 / bulan",
      en: "IDR 6,800,000 / month"
    },
    minDays: 3,
    includes: {
      id: [
        "Kabel Submersible 70m",
        "Solar Pump Drive / Inverter MPPT",
        "Water Level Probe Kit",
        "Konsultasi Setting Tekanan"
      ],
      en: [
        "70m Submersible Cable",
        "Solar Pump MPPT Drive Inverter",
        "Water Level Sensor Probe Kit",
        "Pressure Calibration Consultation"
      ]
    },
    description: {
      id: "Solusi hemat energi untuk sumur bor menengah perkebunan, peternakan, dan irigasi tetes.",
      en: "Cost-effective solar pumping solution for medium boreholes, livestock farming, and drip irrigation."
    }
  }
];

export const RENTAL_FAQS: RentalFAQItem[] = [
  {
    id: "faq-damage",
    questionKey: "faq.damage.q",
    answerKey: "faq.damage.a",
    category: "liability"
  },
  {
    id: "faq-extension",
    questionKey: "faq.extension.q",
    answerKey: "faq.extension.a",
    category: "extension"
  },
  {
    id: "faq-delivery",
    questionKey: "faq.delivery.q",
    answerKey: "faq.delivery.a",
    category: "logistics"
  },
  {
    id: "faq-installation",
    questionKey: "faq.installation.q",
    answerKey: "faq.installation.a",
    category: "installation"
  },
  {
    id: "faq-documents",
    questionKey: "faq.documents.q",
    answerKey: "faq.documents.a",
    category: "terms"
  },
  {
    id: "faq-maintenance",
    questionKey: "faq.maintenance.q",
    answerKey: "faq.maintenance.a",
    category: "installation"
  }
];

export interface WizardInputs {
  waterSource: "deepwell" | "river-lake" | "groundtank";
  depthMeters: number;
  flowRequirement: "low" | "medium" | "high" | "commercial";
  powerSource: "solar" | "hybrid" | "grid";
}

export interface WizardRecommendation {
  recommendedHead: number; // in meters
  estimatedKw: number;
  recommendedUnits: RentalUnit[];
  explanation: { id: string; en: string };
}

export function calculateWizardRecommendation(inputs: WizardInputs): WizardRecommendation {
  let headEstimate = inputs.depthMeters + 15; // static head + friction loss
  if (inputs.waterSource === "groundtank") {
    headEstimate = 25;
  } else if (inputs.waterSource === "river-lake") {
    headEstimate = 35;
  }

  let requiredFlowMin = 5;
  let requiredFlowMax = 15;
  if (inputs.flowRequirement === "medium") {
    requiredFlowMin = 15;
    requiredFlowMax = 35;
  } else if (inputs.flowRequirement === "high") {
    requiredFlowMin = 35;
    requiredFlowMax = 70;
  } else if (inputs.flowRequirement === "commercial") {
    requiredFlowMin = 50;
    requiredFlowMax = 100;
  }

  // Calculate approximate hydraulic kW = (Flow * Head) / (367 * efficiency)
  const approxKw = Math.max(
    2.2,
    Math.round(((requiredFlowMax * headEstimate) / (367 * 0.6)) * 10) / 10
  );

  // Match best rental units
  const matched = RENTAL_UNITS.filter((unit) => {
    if (inputs.waterSource === "deepwell") {
      return unit.category === "submersible" || unit.category === "solar-package";
    }
    if (inputs.waterSource === "groundtank") {
      return unit.category === "booster" || unit.category === "drainage";
    }
    return true;
  });

  return {
    recommendedHead: Math.round(headEstimate),
    estimatedKw: approxKw,
    recommendedUnits: matched.length > 0 ? matched.slice(0, 3) : RENTAL_UNITS.slice(0, 2),
    explanation: {
      id: `Berdasarkan kedalaman ${inputs.depthMeters}m dan kebutuhan debit ${inputs.flowRequirement}, sistem memerlukan pompa dengan kapasitas Head minimal ${Math.round(headEstimate)}m dan estimasi daya motor ±${approxKw} kW.`,
      en: `Based on depth ${inputs.depthMeters}m and flow demand ${inputs.flowRequirement}, your system requires a minimum Head of ${Math.round(headEstimate)}m and an estimated motor power of ±${approxKw} kW.`
    }
  };
}
