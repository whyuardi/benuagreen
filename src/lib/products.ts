export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  features?: string[];
  tag?: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const CATEGORIES_DATA: CategoryGroup[] = [
  {
    id: "dongle",
    name: "Dongle",
    slug: "dongle",
    description: "Advanced monitoring and remote management dongles for solar and pump systems.",
    products: [
      {
        id: "rms-dongle",
        name: "RMS Dongle",
        category: "Dongle",
        image: "https://benuagreen.com/storage/img/produk/1769003848_6970db48ed186.png",
        description: "Remote Monitoring System (RMS) Dongle designed for real-time telemetry, data logging, and cloud synchronization for solar pump installations.",
        features: ["Plug & Play Connectivity", "Cloud Synchronization", "Real-time Telemetry", "IP65 Weather Resistance"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "pumps",
    name: "Pumps",
    slug: "pumps",
    description: "High-efficiency commercial, industrial, solar, and residential water pumping systems.",
    products: [
      {
        id: "sdw-waste-water-pumps",
        name: "SDW Waste Water Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004038_6970dc067a051.png",
        description: "Heavy-duty submersible wastewater and sewage handling pump with high solids passage capability.",
        features: ["Non-clogging Impeller", "Corrosion Resistant", "High Flow Rate", "Thermal Overload Protection"],
        tag: "Product Info"
      },
      {
        id: "end-suction-lon-coupled-pumps",
        name: "End-Suction Long Coupled Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769002815_6970d73f449db.png",
        description: "Robust back pull-out end-suction centrifugal pumps for industrial circulation and water supply.",
        features: ["Back Pull-Out Design", "Cast Iron / Bronze Construction", "High Hydraulic Efficiency"],
        tag: "Product Info"
      },
      {
        id: "sero-vertical-multistage-pumps",
        name: "Sero Vertical Multistage Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003131_6970d87bf23a6.png",
        description: "Vertical multistage stainless steel centrifugal pumps for high-pressure boost applications.",
        features: ["Stainless Steel Impellers", "Space Saving Footprint", "High Pressure Output"],
        tag: "Product Info"
      },
      {
        id: "sseg-waste-water-pumps",
        name: "SSEG Waste Water Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004051_6970dc135eeea.png",
        description: "Submersible drainage and wastewater pump engineered for municipal and building effluent management.",
        features: ["Dual Mechanical Seal", "Auto-cut Thermal Protector", "Continuous Duty Rated"],
        tag: "Product Info"
      },
      {
        id: "nsp-non-self-priming-pumps",
        name: "NSP Non Self-Priming Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004074_6970dc2adbef9.png",
        description: "Inline non self-priming centrifugal pumps designed for clean liquid distribution and HVAC systems.",
        features: ["Quiet Operation", "Low Maintenance", "Compact In-line Mount"],
        tag: "Product Info"
      },
      {
        id: "svx-waste-water-pumps",
        name: "SVX Waste Water Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004026_6970dbfa82969.png",
        description: "Vortex impeller submersible pumps for liquids containing abrasive solids and fibrous materials.",
        features: ["Vortex Impeller", "Hardened Stainless Steel Shaft", "Oil-lubricated Seals"],
        tag: "Product Info"
      },
      {
        id: "horizontal-split-case-pumps",
        name: "Horizontal Split Case Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004131_6970dc6351a99.png",
        description: "Large capacity single stage double suction split case pumps for municipal waterworks and cooling towers.",
        features: ["Double Suction Impeller", "Axially Split Casing", "Minimal Vibration & Noise"],
        tag: "Product Info"
      },
      {
        id: "hydropneumatic-booster-systems",
        name: "Hydropneumatic Booster Systems",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003281_6970d91149775.png",
        description: "Automated constant pressure booster system with intelligent VFD inverter controls and pressure tank.",
        features: ["Energy Saving VFD", "Constant Pressure Supply", "Automatic Cascade Sequencing"],
        tag: "Product Info"
      },
      {
        id: "openwell-pumps",
        name: "Openwell Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769002844_6970d75c49e04.png",
        description: "Submersible openwell pumps designed for open wells, sumps, lakes, and river lifting.",
        features: ["Water Cooled Motor", "Wide Voltage Band Operation", "Anti-Fouling Coating"],
        tag: "Product Info"
      },
      {
        id: "openwell-shos-ca-sa-series",
        name: "Openwell SHOS CA_SA Series",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003023_6970d80f9e736.png",
        description: "Specialized horizontal openwell submersible pumps for agriculture and farm irrigation.",
        features: ["High Discharge Capacity", "Easy Maintenance", "Durable Cast Iron Construction"],
        tag: "Product Info"
      },
      {
        id: "megh-self-priming-pumps",
        name: "Megh Self-Priming Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004105_6970dc4970278.png",
        description: "Self-priming regenerative mono-block pumps suitable for domestic overhead tanks and gardens.",
        features: ["Fast Self-Priming", "Brass Impeller", "Thermal Overload Protection"],
        tag: "Product Info"
      },
      {
        id: "pressure-booster-pumps-sh-shi-shin",
        name: "Pressure Booster Pumps SH_SHI_SHIN",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003281_6970d91146ac1.png",
        description: "Multi-stage horizontal pressure boosting pump units for residential and light commercial use.",
        features: ["All Wetted Parts Stainless Steel", "Quiet Operation", "Dry-run Protection"],
        tag: "Product Info"
      },
      {
        id: "crp-self-priming-pumps",
        name: "CRP Self-Priming Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004097_6970dc41eea76.png",
        description: "Centrifugal self-priming pumps for transfer of muddy water, dewatering, and general circulation.",
        features: ["Semi-open Impeller", "Easy Inspection Cover", "Wear Resistant Materials"],
        tag: "Product Info"
      },
      {
        id: "solar-open-well-pumps",
        name: "Solar Open Well pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769001830_6970d36600698.png",
        description: "High-efficiency DC/AC solar compatible submersible openwell pumps optimized for solar arrays.",
        features: ["High Solar Tracking Efficiency", "MPPT Compatible", "Rugged Stainless Steel Build"],
        tag: "Product Info"
      },
      {
        id: "4-inch-premium-plug-play-pumps",
        name: "4 inch Premium Plug & Play Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769001948_6970d3dc0f4ab.png",
        description: "Deep well submersible borehole pump kit with integrated controller for rapid deployment.",
        features: ["Plug & Play Integrated Drive", "Built-in Surge Protection", "Corrosion Resistant NEMA Mount"],
        tag: "Product Info"
      },
      {
        id: "ro-pumps",
        name: "RO Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003542_6970da16e2e66.png",
        description: "High pressure reverse osmosis booster pumps designed for commercial water purification.",
        features: ["High Operating Pressure", "Food-grade Materials", "Extended Duty Cycle"],
        tag: "Product Info"
      },
      {
        id: "positive-displacement-pumps",
        name: "Positive Displacement Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769001902_6970d3ae07f6c.png",
        description: "High head low volume progressive cavity positive displacement pumps for deep water extraction.",
        features: ["Deep Lift Capability", "Low Solar Power Starting", "Stainless Rotor"],
        tag: "Product Info"
      },
      {
        id: "domestic-water-pressure-booster-pumps",
        name: "Domestic Water Pressure Booster Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003218_6970d8d27a840.png",
        description: "Compact smart automated booster pump with automatic start/stop and leak protection for homes.",
        features: ["Smart Flow Sensor Control", "Super Quiet Operation", "Integrated Pressure Switch"],
        tag: "Product Info"
      },
      {
        id: "vertical-multi-stage-centrifugal-pumps",
        name: "Vertical Multi Stage Centrifugal Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003114_6970d86a03fe5.png",
        description: "Stainless steel inline vertical multistage pumps for boiler feed, reverse osmosis, and booster skids.",
        features: ["DIN Flange Standard", "Cartridge Seal Design", "High Temperature Resistance"],
        tag: "Product Info"
      },
      {
        id: "solar-dc-pump",
        name: "Solar DC Pump",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004162_6970dc8285b20.jpg",
        description: "Direct-drive brushless DC solar submersible water pump with integrated MPPT logic.",
        features: ["Brushless DC Motor (BLDC)", "High Energy Conversion Rate", "Zero Grid Power Needed"],
        tag: "Product Info"
      },
      {
        id: "immersible-pumps-smtr",
        name: "Immersible Pumps SMTR",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003212_6970d8ccb03d2.png",
        description: "Multistage immersible pump designed for machine tool coolant, filtration, and washing systems.",
        features: ["Top Mount Immersible", "High Wear Resistance", "Compatible with Coolant & Oils"],
        tag: "Product Info"
      },
      {
        id: "shallow-well-pumps",
        name: "Shallow Well Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769004148_6970dc74a032b.png",
        description: "Jet ejector type shallow well water pump with heavy duty motor for domestic and farm use.",
        features: ["Built-in Jet Ejector", "High Suction Lift", "Thermal Protection"],
        tag: "Product Info"
      },
      {
        id: "micro-surface-pumpset",
        name: "Micro Surface Pumpset",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769002020_6970d424db78d.png",
        description: "Compact micro surface pump set for localized irrigation, drip lines, and small scale solar pumping.",
        features: ["Compact Portable Design", "Low Energy Consumption", "High Efficiency"],
        tag: "Product Info"
      },
      {
        id: "end-section-closed-couple-pumps",
        name: "End-Section Closed Couple Pumps",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769002957_6970d7cd1ec83.png",
        description: "Monobloc close-coupled centrifugal pump with standard electric motor for clean liquid transport.",
        features: ["Close Coupled Design", "Space Efficient", "Low Maintenance"],
        tag: "Product Info"
      },
      {
        id: "ro-pumps-v2",
        name: "RO Pumps (High Capacity)",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003869_6970db5d488cb.png",
        description: "Industrial grade Reverse Osmosis membrane booster pump engineered for high salinity seawater & brackish water.",
        features: ["High Pressure Rated", "SS316 Stainless Steel Components", "Continuous Operation"],
        tag: "Product Info"
      },
      {
        id: "pressure-booster",
        name: "Pressure Booster",
        category: "Pumps",
        image: "https://benuagreen.com/storage/img/produk/1769003146_6970d88ab32d2.png",
        description: "Variable frequency drive automated water pressure booster pump unit.",
        features: ["Constant Pressure Control", "Digital Touch Interface", "Energy Efficient"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "others",
    name: "Others",
    slug: "others",
    description: "VFD drives, line filters, and power conversion equipment for solar pump control.",
    products: [
      {
        id: "nandi-universal-drive",
        name: "Nandi Universal Drive",
        category: "Others",
        image: "https://benuagreen.com/storage/img/produk/1769003584_6970da40b616a.png",
        description: "Heavy duty universal Variable Frequency Drive (VFD) supporting both solar PV input and AC grid power.",
        features: ["Dual Power Input (Solar/Grid)", "Built-in MPPT Algorithm", "LCD Display", "Dry Run Protection"],
        tag: "Product Info"
      },
      {
        id: "solar-simha-drive",
        name: "Solar SIMHA Drive",
        category: "Others",
        image: "https://benuagreen.com/storage/img/produk/1769003545_6970da198595e.png",
        description: "Next generation intelligent solar water pump inverter with high speed MPPT and remote monitoring readiness.",
        features: ["99% MPPT Efficiency", "Wide DC Voltage Range", "Automatic Sleep and Wake-up Mode"],
        tag: "Product Info"
      },
      {
        id: "lotus-universal-drive",
        name: "Lotus Universal Drive",
        category: "Others",
        image: "https://benuagreen.com/storage/img/produk/1769003567_6970da2f8d93e.png",
        description: "Compact VFD solar pump inverter optimized for agricultural irrigation and rural water supply.",
        features: ["IP54 Protection Rated", "Simple Keypad Setup", "Multi-pump Control Support"],
        tag: "Product Info"
      },
      {
        id: "du-dt-filter",
        name: "DU_DT Filter",
        category: "Others",
        image: "https://benuagreen.com/storage/img/produk/1769003721_6970dac977107.png",
        description: "High performance output dU/dt filter for protecting motor insulation against voltage spikes and long cable reflections.",
        features: ["Reduces Peak Voltage Spikes", "Protects Motor Windings", "Extends Pump Lifespan"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "ppr",
    name: "PPR",
    slug: "ppr",
    description: "Premium Polypropylene Random Copolymer (PPR) pipes, drip irrigation lines, and plumbing solutions.",
    products: [
      {
        id: "flat-drip-irrigation",
        name: "Flat Drip Irrigation",
        category: "PPR",
        image: "https://benuagreen.com/storage/img/produk/1769003094_6970d856db59e.png",
        description: "Precision engineered flat emitter drip tape for row crops, vineyards, and agricultural water saving.",
        features: ["Clog Resistant Emitters", "UV Protected Polyethylene", "Uniform Water Distribution"],
        tag: "Product Info"
      },
      {
        id: "pipes",
        name: "Pipes",
        category: "PPR",
        image: "https://benuagreen.com/storage/img/produk/1769002917_6970d7a57a775.png",
        description: "High pressure PPR hot & cold water piping systems with antimicrobial internal finish.",
        features: ["Non-toxic & Food Grade", "High Temperature Resistance (up to 95°C)", "50+ Years Service Life"],
        tag: "Product Info"
      },
      {
        id: "plain-drip-irrigation",
        name: "Plain Drip Irrigation",
        category: "PPR",
        image: "https://benuagreen.com/storage/img/produk/1769003056_6970d8309ee33.png",
        description: "Durable unpunched LDPE lateral tubes for custom emitter insertion in micro irrigation installations.",
        features: ["Virgin LDPE Material", "High Burst Pressure", "Flexible & Crack Resistant"],
        tag: "Product Info"
      },
      {
        id: "round-drip-irrigation",
        name: "Round Drip Irrigation",
        category: "PPR",
        image: "https://benuagreen.com/storage/img/produk/1769003077_6970d845a5254.png",
        description: "Cylindrical round emitter integrated drip line for multi-season irrigation and orchards.",
        features: ["Self-cleaning Mechanism", "High Tensile Strength", "Wide Flow Path Emitter"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "inverter",
    name: "Inverter",
    slug: "inverter",
    description: "Grid-tie, hybrid, and off-grid solar inverters for residential, commercial, and agricultural electrification.",
    products: [
      {
        id: "grid-tie-inverter",
        name: "Grid Tie Inverter",
        category: "Inverter",
        image: "https://benuagreen.com/storage/img/produk/1769003951_6970dbafc4394.png",
        description: "High efficiency pure sine wave grid-tied solar inverter with dual MPPT and WiFi connectivity.",
        features: ["Up to 98.6% Efficiency", "Dual MPPT Trackers", "Smart App Monitoring", "Export Power Limitation"],
        tag: "Product Info"
      },
      {
        id: "hybrid-inverter",
        name: "Hybrid Inverter",
        category: "Inverter",
        image: "https://benuagreen.com/storage/img/produk/1769003865_6970db5913056.png",
        description: "All-in-one solar energy storage hybrid inverter with UPS seamless switching and lithium battery support.",
        features: ["Supports Lithium & Lead-Acid Batteries", "< 10ms Fast Transfer", "Integrated MPPT Charger"],
        tag: "Product Info"
      },
      {
        id: "home-inverter-s1000",
        name: "Home Inverter s1000",
        category: "Inverter",
        image: "https://benuagreen.com/storage/img/produk/1766214515_69464b7389888.png",
        description: "Compact domestic backup inverter with pure sine wave output for household appliances and sensitive electronics.",
        features: ["Pure Sine Wave Output", "Smart Battery Management", "Silent Operation"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "starter",
    name: "Starter",
    slug: "starter",
    description: "Smart digital motor starters and soft starters with comprehensive electrical protections.",
    products: [
      {
        id: "a1-smart-starter",
        name: "A1 Smart Starter",
        category: "Starter",
        image: "https://benuagreen.com/storage/img/produk/1769003973_6970dbc572274.png",
        description: "Microcontroller based smart motor starter with phase reversal, dry run, and overload protections.",
        features: ["Digital Voltage & Amp Display", "Auto Start Timer", "Dry Run & Overload Protection"],
        tag: "Product Info"
      },
      {
        id: "elite-soft-starter",
        name: "Elite Soft Starter",
        category: "Starter",
        image: "https://benuagreen.com/storage/img/produk/1769003996_6970dbdcc71ae.png",
        description: "Advanced solid-state electronic soft starter eliminating mechanical shock and water hammer effects.",
        features: ["Smooth Acceleration / Deceleration Ramp", "Bypass Contactor Built-in", "Reduces Starting Current Surge"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "controller",
    name: "Controller",
    slug: "controller",
    description: "Intelligent solar pump controllers and automation systems.",
    products: [
      {
        id: "universal-solar-pump-controller",
        name: "Universal Solar Pump Controller",
        category: "Controller",
        image: "https://benuagreen.com/storage/img/produk/1769003936_6970dba025939.png",
        description: "Universal solar pump controller with dynamic MPPT tracking, tank level sensing, and remote monitoring.",
        features: ["Dynamic MPPT Tracking", "Water Level Sensor Inputs", "IP65 Weatherproof Enclosure"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "cable",
    name: "Cable",
    slug: "cable",
    description: "High-grade submersible cables, solar DC cables, and power distribution wiring.",
    products: [
      {
        id: "cable-submersible",
        name: "Flat & Round Submersible Cable",
        category: "Cable",
        image: "https://benuagreen.com/storage/img/produk/1769002917_6970d7a5ef081.png",
        description: "3-core and 4-core waterproof copper submersible cables resistant to moisture, oil, and continuous water immersion.",
        features: ["100% Electrolytic Copper Conductors", "Double Sheathed Waterproof PVC", "High Flexibility & Tear Resistance"],
        tag: "Product Info"
      }
    ]
  }
];
