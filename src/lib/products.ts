export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  features?: string[];
  specs?: Record<string, string>;
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
    id: "chillers",
    name: "Chiller & HVAC Systems",
    slug: "chillers",
    description: "Industrial absorption chillers, magnetic centrifugal chillers, and compact modular chillers for commercial & manufacturing facilities.",
    products: [
      {
        id: "abs-chiller-steam-fired",
        name: "Double Effect Steam Fired Absorption Chiller",
        category: "Chillers & HVAC",
        image: "/images/products/prod_1.png",
        description: "High-efficiency thermal absorption chiller powered by industrial waste steam or boiler steam (0.4 - 0.8 MPa). Delivers high COP up to 1.45 with zero fluorocarbon refrigerants (natural LiBr-H2O cycle).",
        features: ["Capacities from 150 TR to 900+ TR", "Zero Electric Compressor (Minimal Power Load)", "High COP 1.42 - 1.48 with Waste Heat", "Ozone Friendly (Zero ODP, GWP < 1)", "Intelligent PLC Microprocessor Control"],
        specs: { "Cooling Capacity": "150 - 900 TR", "Steam Pressure": "0.4 - 0.8 MPa", "Refrigerant": "Distilled Water (R718)", "Absorbent": "Lithium Bromide (LiBr)" },
        tag: "Industrial Grade"
      },
      {
        id: "abs-chiller-direct-fired",
        name: "Double Effect Direct Fired Absorption Chiller",
        category: "Chillers & HVAC",
        image: "/images/products/prod_2.png",
        description: "Direct-fired absorption chiller operating on natural gas, biogas, or diesel. Eliminates peak electrical demand for large shopping malls, hospitals, and manufacturing complexes.",
        features: ["Natural Gas / Biogas / Dual Fuel Burner", "Simultaneous Cooling & Heating Capability", "Ultra-Low Noise & Zero Vibration", "Automatic Solution Concentration Control"],
        specs: { "Cooling Capacity": "150 - 900 TR", "Fuel Type": "Natural Gas / Biogas / Diesel", "COP": "1.38 - 1.44" },
        tag: "Industrial Grade"
      },
      {
        id: "abs-chiller-hot-water",
        name: "Single Effect Hot Water Absorption Chiller",
        category: "Chillers & HVAC",
        image: "/images/products/prod_3.png",
        description: "Harnesses low-grade industrial waste hot water (85°C - 98°C) from cogeneration or jacket water to produce chilled water for air conditioning.",
        features: ["Operates on Low-Grade Waste Hot Water (85°C - 98°C)", "Excellent Part-Load Modulation", "No Compressor Replacement Needed", "Long Service Life > 25 Years"],
        specs: { "Hot Water Inlet": "85°C - 98°C", "Chilled Water Output": "7°C", "COP": "0.72 - 0.78" },
        tag: "Waste Heat Recovery"
      },
      {
        id: "yms-magnetic-centrifugal-chiller",
        name: "YMS Magnetic Bearing Centrifugal Chiller",
        category: "Chillers & HVAC",
        image: "/images/products/prod_4.png",
        description: "Friction-free magnetic levitation centrifugal chiller delivering ultra-high IPLV and lowest sound levels. 100% oil-free design eliminates oil contamination.",
        features: ["Oil-Free Magnetic Levitation Bearings", "IPLV up to 10.5+ at Part Load", "Ultra-low Acoustic Signature (< 72 dBA)", "Rapid Restart in < 30 Seconds"],
        specs: { "Capacity": "100 - 600 TR", "Bearing Type": "Active Magnetic", "Refrigerant": "Eco-friendly R134a / R1234ze" },
        tag: "Ultra High Efficiency"
      },
      {
        id: "mini-chiller-ycae",
        name: "Mini Chiller YCAE Series (Air-Cooled)",
        category: "Chillers & HVAC",
        image: "/images/products/prod_5.png",
        description: "Compact modular air-cooled scroll water chiller for light commercial buildings, clean rooms, and localized industrial cooling.",
        features: ["Modular Master-Slave Combination (Up to 8 Units)", "High-Efficiency Scroll Compressors", "Built-in Hydraulic Pump & Expansion Tank Option", "Weatherproof Heavy Powder-Coated Casing"],
        specs: { "Available Sizes": "18.5 TR, 28.4 TR, 37 TR", "Condenser": "Air-Cooled Aluminum Fins", "Refrigerant": "R410A" },
        tag: "Modular Series"
      },
      {
        id: "mini-chiller-ycwe",
        name: "Mini Chiller YCWE Series (Water-Cooled)",
        category: "Chillers & HVAC",
        image: "/images/products/prod_6.png",
        description: "Water-cooled compact scroll chiller delivering consistent COP year-round paired with cooling towers.",
        features: ["High Full-Load EER", "Shell-and-Tube Condenser for Easy Maintenance", "Compact Mechanical Room Footprint"],
        specs: { "Available Sizes": "21 TR, 32 TR, 42 TR", "Condenser": "Water-Cooled Shell & Tube", "Refrigerant": "R410A" },
        tag: "Modular Series"
      }
    ]
  },
  {
    id: "cooling-air",
    name: "Cooling Towers & Air Distribution (AHU / FCU)",
    slug: "cooling-air",
    description: "High-performance evaporative cooling towers, Air Handling Units (AHU), and Fan Coil Units (FCU).",
    products: [
      {
        id: "crossflow-cooling-tower",
        name: "Industrial Cross-Flow Evaporative Cooling Tower",
        category: "Cooling Towers & AHU/FCU",
        image: "/images/products/prod_1.png",
        description: "Engineered FRP cross-flow cooling towers with high-efficiency PVC film fill and low-noise axial fans for industrial and chiller condenser circuits.",
        features: ["Heavy Corrosion-Resistant FRP Casing", "Low-Drift PVC Infill Honeycomb", "Energy-Saving Direct-Drive / Belt-Drive Fans", "Easy Access Internal Walkway"],
        specs: { "Water Flow Rate": "50 - 2000 m³/hr", "Design Wet Bulb": "28°C", "Material": "UV-Stabilized FRP" },
        tag: "Condenser Cooling"
      },
      {
        id: "closed-circuit-cooling-tower",
        name: "Closed-Circuit Fluid Cooler (Counter-Flow)",
        category: "Cooling Towers & AHU/FCU",
        image: "/images/products/prod_2.png",
        description: "Closed loop cooling tower protecting process water and chillers from airborne debris, scale, and atmospheric contamination.",
        features: ["100% Contamination-Free Closed Loop", "Stainless Steel / HDG Cooling Coils", "Water Saving Hybrid Evaporative Operation"],
        specs: { "Coil Material": "304/316 Stainless Steel", "Application": "Process & Chiller Cooling" },
        tag: "Process Cooling"
      },
      {
        id: "industrial-ahu",
        name: "Modular Air Handling Unit (AHU)",
        category: "Cooling Towers & AHU/FCU",
        image: "/images/products/prod_7.png",
        description: "Double-skin thermal break Air Handling Units engineered for shopping malls, hospital operating theaters, and cleanrooms.",
        features: ["Thermal Break Aluminum Profile (TB2/T2)", "Double-Skin PU Foam Injected Panels (25/50mm)", "Plug Fan with EC Motor / VFD", "Multi-stage Air Filtration (G4, F7, HEPA)"],
        specs: { "Airflow": "2,000 - 60,000 CFM", "Cooling Coil": "Chilled Water 4/6/8 Rows" },
        tag: "Air Quality"
      },
      {
        id: "chilled-water-fcu",
        name: "Ceiling Concealed Chilled Water Fan Coil Unit (FCU)",
        category: "Cooling Towers & AHU/FCU",
        image: "/images/products/prod_8.png",
        description: "Low-profile, whisper-quiet chilled water ceiling concealed FCU for office suites, hotel rooms, and commercial retail stores.",
        features: ["Ultra-Quiet Centrifugal Blower", "3-Speed / EC Inverter Motor Control", "Integrated Condensate Drain Pan with Insulation", "High External Static Pressure Options"],
        specs: { "Airflow": "300 - 2,200 CFM", "Cooling Capacity": "1.5 - 12 kW" },
        tag: "Commercial HVAC"
      }
    ]
  },
  {
    id: "piping-valves",
    name: "PPR Piping, Valves & Insulation Accessories",
    slug: "piping-valves",
    description: "Certified food-grade PPR pipes, electrofusion fittings, dynamic balancing valves, and closed-cell insulation materials.",
    products: [
      {
        id: "ppr-pipe-industrial-series",
        name: "PPR-CT Industrial High-Pressure Pipe (PN16 / PN20)",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_9.png",
        description: "German-engineered PPR-CT pipes with fiberglass composite core (Faser). Minimal thermal expansion, 100% rust-free, designed for 50+ year operational life.",
        features: ["Faser-Glass Composite Layer (Low Thermal Expansion)", "Certified Non-Toxic & Food-Grade (Lead Free)", "Working Pressure up to 20 Bar (PN20)", "Temperature Range -20°C to +95°C"],
        specs: { "Sizes Available": "DN20 (1/2\") up to DN315 (12\")", "Lifespan": "> 50 Years", "Joining Method": "Socket Fusion / Electrofusion / Flange" },
        tag: "50+ Year Life"
      },
      {
        id: "ppr-electrofusion-fittings",
        name: "PPR Electrofusion & Socket Fittings & Flanges",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_10.png",
        description: "Complete line of high-pressure PPR elbows, tees, reducers, electrofusion couplers, and brass transition adaptors for leak-free installations.",
        features: ["Seamless Molecular Weld (Homogeneous Fusion)", "Zero Leak Risk at Joints", "Brass Threaded Inserts with Anti-Rotation Ribs"],
        specs: { "Types": "Elbows 90°/45°, Equal/Reducing Tees, Couplers, Flange Adaptors", "Rating": "PN20 / PN25" },
        tag: "Leak-Free Fusion"
      },
      {
        id: "motorized-control-valve",
        name: "Motorized 2-Way & 3-Way Modulating Control Valves",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_11.png",
        description: "Precision electric modulating valves with 0-10V / 4-20mA proportional actuators for AHU and chiller chilled water flow control.",
        features: ["High Rangeability Equal Percentage Characteristic", "Tight Shut-Off Class IV/VI", "Manual Override Lever with Position Indicator", "IP54 / IP65 Protected Actuator"],
        specs: { "Signal": "0-10V DC / 4-20mA", "Body Material": "Cast Iron / Bronze / Stainless Steel", "Pressure": "PN16 / PN25" },
        tag: "HVAC Control"
      },
      {
        id: "dynamic-balancing-valve",
        name: "Dynamic Automatic Hydraulic Balancing Valve (PICV)",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_12.png",
        description: "Pressure Independent Control Valve (PICV) combining automatic differential balancing and temperature control in one compact valve.",
        features: ["Eliminates Flow Over-Supply in Chiller Networks", "Maintains Design ΔT (Delta T) in Chiller Plants", "Built-in Pressure Test Ports (P/T Plugs)"],
        specs: { "Sizes": "DN15 to DN250", "Max ΔP": "400 kPa", "Accuracy": "± 5%" },
        tag: "Energy Optimization"
      },
      {
        id: "industrial-butterfly-valve",
        name: "Industrial Wafer Butterfly & Gate Valves",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_13.png",
        description: "Ductile iron epoxy-coated butterfly and resilient seated gate valves for pump isolation and cooling tower headers.",
        features: ["EPDM / NBR Resilient Liner", "Stainless Steel SS316 Disc", "Epoxy Coated Inside & Out (Anti-Corrosion)"],
        specs: { "Standard": "DIN / ANSI / JIS", "Rating": "PN10 / PN16 / Class 150" },
        tag: "Isolation"
      },
      {
        id: "elastomeric-pipe-insulation",
        name: "Closed-Cell Elastomeric Thermal Pipe & Duct Insulation",
        category: "PPR & Installation Accessories",
        image: "/images/products/prod_14.png",
        description: "Flexible closed-cell synthetic rubber foam insulation preventing condensation on chilled water pipes and ducting.",
        features: ["Built-in Vapor Barrier (μ ≥ 10,000)", "Class 0 / Class 1 Fire Rated (Self-Extinguishing)", "Dust-free & Fiber-free (Safe for Hospitals & Cleanrooms)"],
        specs: { "Thickness": "9mm to 50mm", "Thermal Conductivity": "λ ≤ 0.034 W/m·K at 0°C" },
        tag: "Thermal Protection"
      }
    ]
  },
  {
    id: "pumps",
    name: "High Efficiency Industrial & Solar Pumps",
    slug: "pumps",
    description: "Deep well solar submersibles, horizontal split case, multistage boosters, and heavy-duty wastewater pumping systems.",
    products: [
      {
        id: "sdw-waste-water-pumps",
        name: "SDW Waste Water Pumps",
        category: "Pumps",
        image: "/images/products/prod_15.png",
        description: "Heavy-duty submersible wastewater and sewage handling pump with high solids passage capability.",
        features: ["Non-clogging Impeller", "Corrosion Resistant", "High Flow Rate", "Thermal Overload Protection"],
        tag: "Product Info"
      },
      {
        id: "end-suction-lon-coupled-pumps",
        name: "End-Suction Long Coupled Pumps",
        category: "Pumps",
        image: "/images/products/prod_4.png",
        description: "Robust back pull-out end-suction centrifugal pumps for industrial circulation and water supply.",
        features: ["Back Pull-Out Design", "Cast Iron / Bronze Construction", "High Hydraulic Efficiency"],
        tag: "Product Info"
      },
      {
        id: "sero-vertical-multistage-pumps",
        name: "Sero Vertical Multistage Pumps",
        category: "Pumps",
        image: "/images/products/prod_5.png",
        description: "Vertical multistage stainless steel centrifugal pumps for high-pressure boost applications.",
        features: ["Stainless Steel Impellers", "Space Saving Footprint", "High Pressure Output"],
        tag: "Product Info"
      },
      {
        id: "sseg-waste-water-pumps",
        name: "SSEG Waste Water Pumps",
        category: "Pumps",
        image: "/images/products/prod_3.png",
        description: "Submersible drainage and wastewater pump engineered for municipal and building effluent management.",
        features: ["Dual Mechanical Seal", "Auto-cut Thermal Protector", "Continuous Duty Rated"],
        tag: "Product Info"
      },
      {
        id: "horizontal-split-case-pumps",
        name: "Horizontal Split Case Pumps",
        category: "Pumps",
        image: "/images/products/prod_1.png",
        description: "Large capacity single stage double suction split case pumps for municipal waterworks and cooling towers.",
        features: ["Double Suction Impeller", "Axially Split Casing", "Minimal Vibration & Noise"],
        tag: "Product Info"
      },
      {
        id: "hydropneumatic-booster-systems",
        name: "Hydropneumatic Booster Systems",
        category: "Pumps",
        image: "/images/products/prod_7.png",
        description: "Automated constant pressure booster system with intelligent VFD inverter controls and pressure tank.",
        features: ["Energy Saving VFD", "Constant Pressure Supply", "Automatic Cascade Sequencing"],
        tag: "Product Info"
      }
    ]
  },
  {
    id: "heating-power",
    name: "Solar Power, Heating & Telemetry",
    slug: "heating-power",
    description: "Tier-1 solar PV modules, MPPT solar pump drives, cloud RMS telemetry dongles, and biomass steam accessories.",
    products: [
      {
        id: "rms-dongle",
        name: "RMS Telemetry Cloud Dongle",
        category: "Solar & Telemetry",
        image: "/images/products/prod_16.png",
        description: "Remote Monitoring System (RMS) Dongle designed for real-time telemetry, energy logging, and cloud synchronization for solar pump and chiller installations.",
        features: ["Plug & Play Connectivity", "Cloud Telemetry & Mobile App Access", "Real-time Flow & Power Logging", "IP65 Weather Resistance"],
        tag: "IoT & Cloud"
      },
      {
        id: "mppt-solar-pump-inverter",
        name: "Smart MPPT Solar Pump Inverter IP65",
        category: "Solar & Telemetry",
        image: "/images/products/prod_9.png",
        description: "Heavy-duty outdoor IP65 solar variable frequency drive with 99% dynamic MPPT tracking. Automatically drives AC 3-Phase submersible and surface pumps directly from solar PV.",
        features: ["99% Dynamic MPPT Tracking Efficiency", "IP65 Waterproof Outdoor Enclosure", "Automatic AC Grid / Genset Hybrid Backup", "Dry-Run & Water Level Sensor Controls"],
        specs: { "Power Range": "0.75 kW to 75 kW", "Input Voltage": "DC 250V - 800V", "Output": "3-Phase 380V AC" },
        tag: "Solar VFD"
      },
      {
        id: "solar-pv-modules",
        name: "Tier-1 High Efficiency Monocrystalline Solar PV Modules",
        category: "Solar & Telemetry",
        image: "/images/products/prod_17.png",
        description: "Tier-1 half-cut cell PERC & TOPCon solar photovoltaic modules engineered for tropical high-humidity reliability with 25-year linear performance warranty.",
        features: ["Module Efficiency up to 22.5%+", "Anti-PID & Anti-Salt Corrosion Certified", "High Hail & Wind Load Resistance (5400 Pa)", "25-Year Performance Warranty"],
        specs: { "Power Rating": "550W - 670W", "Cell Type": "N-Type TOPCon / Monocrystalline" },
        tag: "Tier-1 Solar"
      },
      {
        id: "biomass-steam-trap",
        name: "Thermodynamic & Float Steam Traps / Heat Exchangers",
        category: "Solar & Telemetry",
        image: "/images/products/prod_18.png",
        description: "High-enthalpy steam traps, strainers, and plate heat exchangers for biomass boilers and steam-fired absorption chiller circuits.",
        features: ["Instant Condensate Discharge without Live Steam Loss", "Hardened Stainless Steel Disc & Seat", "Inline Renewable Components"],
        specs: { "Pressure Rating": "PN16 to PN40", "Max Temperature": "350°C" },
        tag: "Steam Recovery"
      }
    ]
  }
];
