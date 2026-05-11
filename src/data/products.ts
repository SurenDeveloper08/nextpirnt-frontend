import { Product } from "@/types/product";

export const products: Product[] = [
  // =====================================
  // PRINTERS
  // =====================================

  {
    id: 1,
    name: "HP LaserJet Pro M404dn",
    slug: "hp-laserjet-pro-m404dn",
    brand: "HP",
    category: "printers",
    type: "laser",
    color: "white",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 899,
    description:
      "High-performance monochrome laser printer ideal for office environments.",
    features: [
      "Fast printing speed",
      "Automatic duplex printing",
      "Energy efficient",
    ],
    specs: {
      printSpeed: "38 ppm",
      connectivity: "USB, LAN",
      paperSize: "A4",
      warranty: "1 Year",
    },
  },

  {
    id: 2,
    name: "Canon imageRUNNER 2425",
    slug: "canon-imagerunner-2425",
    brand: "Canon",
    category: "printers",
    type: "multifunction",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 1499,
    description:
      "Reliable multifunction office printer with scanning and copying support.",
    features: [
      "Print, Scan, Copy",
      "Network ready",
      "Compact design",
    ],
    specs: {
      printSpeed: "25 ppm",
      connectivity: "WiFi, LAN",
      paperSize: "A3",
      warranty: "1 Year",
    },
  },

  {
    id: 3,
    name: "Epson EcoTank L3250",
    slug: "epson-ecotank-l3250",
    brand: "Epson",
    category: "printers",
    type: "ink-tank",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 799,
    description:
      "Wireless EcoTank printer with ultra-low-cost printing solution.",
    features: [
      "WiFi printing",
      "Refillable ink tank",
      "High yield",
    ],
    specs: {
      printSpeed: "15 ppm",
      connectivity: "WiFi, USB",
      paperSize: "A4",
      warranty: "1 Year",
    },
  },

  {
    id: 4,
    name: "Brother HL-L2350DW",
    slug: "brother-hl-l2350dw",
    brand: "Brother",
    category: "printers",
    type: "laser",
    color: "gray",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 649,
    description:
      "Compact monochrome laser printer with wireless printing support.",
    features: [
      "Wireless printing",
      "Compact design",
      "Fast output",
    ],
    specs: {
      printSpeed: "30 ppm",
      connectivity: "WiFi, USB",
      paperSize: "A4",
      warranty: "1 Year",
    },
  },

  {
    id: 5,
    name: "HP Color LaserJet Pro MFP M283fdw",
    slug: "hp-m283fdw",
    brand: "HP",
    category: "printers",
    type: "color",
    color: "white",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 1099,
    description:
      "Professional color multifunction laser printer for office use.",
    features: [
      "Color printing",
      "Automatic duplex",
      "Touchscreen display",
    ],
    specs: {
      printSpeed: "22 ppm",
      connectivity: "WiFi, LAN, USB",
      paperSize: "A4",
      warranty: "1 Year",
    },
  },

  // =====================================
  // CONSUMABLES
  // =====================================

  {
    id: 6,
    name: "HP 05A Black Toner Cartridge",
    slug: "hp-05a-toner",
    brand: "HP",
    category: "consumables",
    type: "toner",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 89,
    description:
      "Original HP toner cartridge delivering sharp black prints.",
    features: [
      "Original HP",
      "High yield",
      "Easy installation",
    ],
    specs: {
      compatibility: "HP LaserJet Series",
      color: "Black",
      yield: "2300 Pages",
      warranty: "6 Months",
    },
  },

  {
    id: 7,
    name: "Canon C-EXV 54 Toner",
    slug: "canon-cexv-54",
    brand: "Canon",
    category: "consumables",
    type: "toner",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 120,
    description:
      "High-quality Canon toner for professional printing.",
    features: [
      "Sharp output",
      "Long lasting",
      "Original product",
    ],
    specs: {
      compatibility: "Canon imageRUNNER",
      color: "Black",
      yield: "15000 Pages",
      warranty: "6 Months",
    },
  },

  {
    id: 8,
    name: "Epson 103 Ink Bottle Set",
    slug: "epson-103-ink",
    brand: "Epson",
    category: "consumables",
    type: "ink",
    color: "multi",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 45,
    description:
      "Original Epson ink bottle set for EcoTank printers.",
    features: [
      "Vivid colors",
      "Easy refill",
      "Smudge resistant",
    ],
    specs: {
      compatibility: "Epson EcoTank",
      color: "CMYK",
      yield: "7500 Pages",
      warranty: "6 Months",
    },
  },

  {
    id: 9,
    name: "Brother DR-240 Drum Unit",
    slug: "brother-dr240",
    brand: "Brother",
    category: "consumables",
    type: "drum",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 150,
    description:
      "Reliable drum unit designed for Brother laser printers.",
    features: [
      "High durability",
      "Original Brother",
      "Easy replacement",
    ],
    specs: {
      compatibility: "Brother HL Series",
      yield: "12000 Pages",
      warranty: "6 Months",
    },
  },

  {
    id: 10,
    name: "Kyocera Waste Toner Box",
    slug: "kyocera-waste-box",
    brand: "Kyocera",
    category: "consumables",
    type: "waste-box",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 60,
    description:
      "Genuine Kyocera waste toner container for clean operation.",
    features: [
      "Original part",
      "Long life",
      "Easy fit",
    ],
    specs: {
      compatibility: "Kyocera ECOSYS",
      capacity: "50000 Pages",
      warranty: "6 Months",
    },
  },

  // =====================================
  // OFFICE EQUIPMENT
  // =====================================

  {
    id: 11,
    name: "Epson Full HD Projector EB-X06",
    slug: "epson-projector-ebx06",
    brand: "Epson",
    category: "office-equipment",
    type: "projector",
    color: "white",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 499,
    description:
      "Portable Full HD projector ideal for offices and classrooms.",
    features: [
      "Full HD display",
      "Portable",
      "HDMI support",
    ],
    specs: {
      resolution: "1920x1080",
      brightness: "3600 Lumens",
      connectivity: "HDMI, USB",
      warranty: "1 Year",
    },
  },

  {
    id: 12,
    name: "Fellowes Powershred 12C",
    slug: "fellowes-shredder-12c",
    brand: "Fellowes",
    category: "office-equipment",
    type: "shredder",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 199,
    description:
      "Professional cross-cut paper shredder for office security.",
    features: [
      "Cross-cut shredding",
      "Quiet operation",
      "Jam prevention",
    ],
    specs: {
      type: "Paper Shredder",
      capacity: "12 Sheets",
      binSize: "18L",
      warranty: "1 Year",
    },
  },

  {
    id: 13,
    name: "GBC Fusion 3000L Laminator",
    slug: "gbc-laminator-3000l",
    brand: "GBC",
    category: "office-equipment",
    type: "laminator",
    color: "gray",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 149,
    description:
      "Fast warm-up laminator for professional office documents.",
    features: [
      "Quick warm-up",
      "Jam alert",
      "Compact design",
    ],
    specs: {
      speed: "500 mm/min",
      paperSize: "A4",
      warmUpTime: "1 Minute",
      warranty: "1 Year",
    },
  },

  {
    id: 14,
    name: "Rhin-O-Tuff Binding Machine",
    slug: "rhin-o-tuff-binding",
    brand: "Rhin-O-Tuff",
    category: "office-equipment",
    type: "binding-machine",
    color: "blue",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 299,
    description:
      "Heavy-duty binding machine for professional document finishing.",
    features: [
      "Heavy-duty build",
      "Easy operation",
      "Large capacity",
    ],
    specs: {
      punchCapacity: "20 Sheets",
      bindingCapacity: "300 Sheets",
      warranty: "1 Year",
    },
  },

  {
    id: 15,
    name: "ZKTeco Attendance Machine K40",
    slug: "zkteco-k40",
    brand: "ZKTeco",
    category: "office-equipment",
    type: "attendance",
    color: "black",
    image: "/products/product.png",
    images: ["/products/product.png"],
    price: 129,
    description:
      "Biometric attendance machine with fingerprint recognition.",
    features: [
      "Fingerprint sensor",
      "USB support",
      "Easy setup",
    ],
    specs: {
      display: "2.8 Inch TFT",
      users: "1000 Users",
      connectivity: "USB",
      warranty: "1 Year",
    },
  },
];