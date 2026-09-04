export type RentalStatus = "available" | "rented" | "reserved";
export type RentalCategory = "submersible" | "booster" | "solar-package" | "drainage" | "ppr-rig";

export interface RentalUnit {
  id: string;
  name: string;
  category: RentalCategory;
  categoryName: string;
  image: string;
  status: RentalStatus;
  availableFrom?: string; // e.g. "Ready Today" or "15 Sep 2026"
  locationHub: string;
  
  // Specifications
  flowRate: string; // e.g. "15 - 35 m³/jam"
  headMax: string;  // e.g. "120 meter"
  powerKw: number;  // e.g. 5.5
  powerHp: number;  // e.g. 7.5
  powerType: string; // e.g. "Solar PV / 380V 3-Phase"
  minDepth: number; // for wizard matching (meter)
  maxDepth: number;
  minFlow: number;  // for wizard matching (m3/h)
  maxFlow: number;

  // Rental Pricing
  rateDaily: string;
  rateMonthly: string;
  minDays: number;
  
  // Features & Package Includes
  includes: string[];
  description: string;
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
    categoryName: "Pompa Sumur Dalam",
    image: "https://benuagreen.com/storage/img/produk/1769003114_6970d86a03fe5.png",
    status: "available",
    availableFrom: "Ready Stock (Siap Kirim)",
    locationHub: "Jakarta & Surabaya Hub",
    flowRate: "10 - 25 m³/jam",
    headMax: "140 meter",
    powerKw: 5.5,
    powerHp: 7.5,
    powerType: "Solar PV / 3-Phase 380V",
    minDepth: 40,
    maxDepth: 140,
    minFlow: 10,
    maxFlow: 25,
    rateDaily: "Rp 550.000 / hari",
    rateMonthly: "Rp 9.800.000 / bulan",
    minDays: 3,
    includes: [
      "Kabel Submersible Tahan Air 100m",
      "Panel Smart Controller / VFD Inverter",
      "Sensor Level Air Dry-Run Protection",
      "Garansi Unit Pengganti < 24 Jam"
    ],
    description: "Pompa sumur dalam kapasitas tinggi tahan pasir halus untuk kebutuhan irigasi perkebunan dan suplai air bersih proyek konstruksi."
  },
  {
    id: "rent-solar-pkg-75",
    name: "Paket Mobile Solar Pumping Rig 7.5kW",
    category: "solar-package",
    categoryName: "Paket Pompa Tenaga Surya",
    image: "https://benuagreen.com/storage/img/produk/1769003584_6970da40b616a.png",
    status: "available",
    availableFrom: "Ready Stock (Siap Kirim)",
    locationHub: "Jakarta Hub",
    flowRate: "20 - 45 m³/jam",
    headMax: "110 meter",
    powerKw: 7.5,
    powerHp: 10,
    powerType: "100% Off-Grid Solar PV + Hybrid Inverter",
    minDepth: 30,
    maxDepth: 110,
    minFlow: 20,
    maxFlow: 45,
    rateDaily: "Rp 950.000 / hari",
    rateMonthly: "Rp 17.500.000 / bulan",
    minDays: 7,
    includes: [
      "Rig Panel Surya Lipat Portabel 8 kWp",
      "Hybrid Inverter & MPPT Controller IP65",
      "Kabel & Selang Distribusi 100m",
      "Supervisi & Pemasangan Awal oleh Teknisi"
    ],
    description: "Sistem pompa mandiri 100% tanpa listrik PLN / bahan bakar minyak, sangat ideal untuk eksplorasi tambang dan lahan pertanian terpencil."
  },
  {
    id: "rent-booster-multi-11",
    name: "Sero Vertical Multistage Booster Pump 11kW",
    category: "booster",
    categoryName: "Booster Tekanan Tinggi",
    image: "https://benuagreen.com/storage/img/produk/1769003131_6970d87bf23a6.png",
    status: "rented",
    availableFrom: "Tersedia 18 Sep 2026 (Bookable)",
    locationHub: "Surabaya Hub",
    flowRate: "30 - 60 m³/jam",
    headMax: "180 meter",
    powerKw: 11,
    powerHp: 15,
    powerType: "380V 3-Phase",
    minDepth: 0,
    maxDepth: 30,
    minFlow: 30,
    maxFlow: 60,
    rateDaily: "Rp 750.000 / hari",
    rateMonthly: "Rp 13.500.000 / bulan",
    minDays: 3,
    includes: [
      "Impeller Stainless Steel SS304",
      "Panel Soft Starter & Overload Relay",
      "Manifold & Pressure Gauge Kit",
      "Layanan Maintenance Berkala Gratis"
    ],
    description: "Pompa booster tekanan tinggi multistage vertikal untuk hydro-testing pipa, transfer air gedung bertingkat, dan suplai industri."
  },
  {
    id: "rent-dewatering-sdw-4",
    name: "SDW Heavy-Duty Submersible Dewatering 4kW",
    category: "drainage",
    categoryName: "Drainase & Dewatering",
    image: "https://benuagreen.com/storage/img/produk/1769004038_6970dc067a051.png",
    status: "available",
    availableFrom: "Ready Stock (Siap Kirim)",
    locationHub: "Jakarta & Balikpapan Hub",
    flowRate: "40 - 90 m³/jam",
    headMax: "35 meter",
    powerKw: 4,
    powerHp: 5.5,
    powerType: "380V 3-Phase / Genset Ready",
    minDepth: 0,
    maxDepth: 25,
    minFlow: 40,
    maxFlow: 90,
    rateDaily: "Rp 400.000 / hari",
    rateMonthly: "Rp 7.200.000 / bulan",
    minDays: 2,
    includes: [
      "Impeller Anti-Sumbat (Vortex Type)",
      "Selang Buang Layflat Heavy Duty 50m",
      "Panel Starter Portabel IP65",
      "Unit Cadangan Standby"
    ],
    description: "Pompa dewatering lumpur dan air kotor proyek galian basement, saluran tambang, serta penanganan banjir konstruksi."
  },
  {
    id: "rent-ppr-welding-rig",
    name: "Mesin Penyambung Pipa PPR & Electrofusion Rig",
    category: "ppr-rig",
    categoryName: "Alat Instalasi PPR",
    image: "https://benuagreen.com/storage/img/produk/1769003848_6970db48ed186.png",
    status: "available",
    availableFrom: "Ready Stock (Siap Kirim)",
    locationHub: "Jakarta, Surabaya, Medan",
    flowRate: "Diameter 20mm - 160mm",
    headMax: "PN 10 / PN 16 / PN 20",
    powerKw: 2.2,
    powerHp: 3,
    powerType: "220V 1-Phase / Genset",
    minDepth: 0,
    maxDepth: 0,
    minFlow: 0,
    maxFlow: 0,
    rateDaily: "Rp 250.000 / hari",
    rateMonthly: "Rp 4.500.000 / bulan",
    minDays: 2,
    includes: [
      "Heating Plate Digital 20mm - 160mm",
      "Pemotong Pipa Presisi & Scraper",
      "Manual Book & Safety Kit",
      "Training Singkat Pengoperasian"
    ],
    description: "Perangkat pemanas butt-fusion & socket welding standar internasional untuk instalasi jaringan pipa air bersih dan air panas."
  },
  {
    id: "rent-deepwell-solar-3",
    name: "Submersible Borehole Solar Pump 3.0kW",
    category: "submersible",
    categoryName: "Pompa Sumur Dalam",
    image: "https://benuagreen.com/storage/img/produk/1769002917_6970d7a5ef081.png",
    status: "available",
    availableFrom: "Ready Stock (Siap Kirim)",
    locationHub: "Jakarta & Makassar Hub",
    flowRate: "5 - 15 m³/jam",
    headMax: "90 meter",
    powerKw: 3.0,
    powerHp: 4.0,
    powerType: "Solar DC Brushless / Solar Inverter",
    minDepth: 20,
    maxDepth: 90,
    minFlow: 5,
    maxFlow: 15,
    rateDaily: "Rp 380.000 / hari",
    rateMonthly: "Rp 6.800.000 / bulan",
    minDays: 3,
    includes: [
      "Kabel Submersible 70m",
      "Solar Pump Drive / Inverter MPPT",
      "Water Level Probe Kit",
      "Konsultasi Setting Tekanan"
    ],
    description: "Solusi hemat energi untuk sumur bor menengah perkebunan, peternakan, dan irigasi tetes."
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
  explanation: string;
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
    explanation: `Berdasarkan kedalaman ${inputs.depthMeters}m dan kebutuhan debit ${inputs.flowRequirement}, sistem memerlukan pompa dengan kapasitas Head minimal ${Math.round(headEstimate)}m dan estimasi daya motor ±${approxKw} kW.`
  };
}
