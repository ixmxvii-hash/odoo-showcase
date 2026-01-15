// City configuration
import { ResearchData } from "./researchData";

export interface CityConfig {
  abbr: string;        // "HTX", "ATX", "DFW"
  name: string;        // "Houston", "Austin", "Dallas-Fort Worth"
  state: string;       // "Texas"
}

export const cities: Record<string, CityConfig> = {
  HTX: { abbr: "HTX", name: "Houston", state: "Texas" },
  ATX: { abbr: "ATX", name: "Austin", state: "Texas" },
  DFW: { abbr: "DFW", name: "Dallas-Fort Worth", state: "Texas" },
};

// Industry slug to key mapping for URL routing
export const industrySlugMap: Record<string, string> = {
  "manufacturing": "manufacturing",
  "discrete-manufacturing": "discreteManufacturing",
  "process-manufacturing": "processManufacturing",
  "energy-services": "energyServices",
  "food-beverage": "foodBeverage",
  "distribution": "distribution",
  "retail": "retail",
  "professional-services": "professionalServices",
};

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Solution {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface IndustryConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  houstonZones: string[];
  zipCodes: string[];
  targetRevenue: string;
  targetEmployees: string;
  color: "orange" | "blue" | "emerald" | "purple" | "green" | "cyan";
  heroImage: string;
  painPoints: PainPoint[];
  solutions: Solution[];
  keyModules: {
    name: string;
    icon: string;
    useCase: string;
  }[];
  testimonials: Testimonial[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  research?: ResearchData | null;
}

export const industries: Record<string, IndustryConfig> = {
  discreteManufacturing: {
    id: "discrete",
    name: "Discrete Manufacturing",
    slug: "discrete-manufacturing",
    tagline: "Machine Shops & Fabrication",
    heroTitle: "Odoo ERP for Houston Machine Shops",
    heroSubtitle: "End Shop Floor Chaos in 90 Days",
    heroDescription: "Job costing, scheduling, and inventory—finally in one system.",
    houstonZones: ["Northwest Industrial Corridor"],
    zipCodes: ["77040", "77041", "77064", "77065", "77066"],
    targetRevenue: "$2M-$15M",
    targetEmployees: "10-75",
    color: "blue",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp",
    painPoints: [
      {
        icon: "Calendar",
        title: "Scheduling Lives on a Whiteboard",
        description: "One person out = total chaos.",
      },
      {
        icon: "DollarSign",
        title: "Job Costing is a Guess",
        description: "Margins vanish before you see them.",
      },
      {
        icon: "Package",
        title: "Inventory Counts Never Match",
        description: "Over-ordering or stockouts. Pick one.",
      },
      {
        icon: "Users",
        title: "Tribal Knowledge Risk",
        description: "Key employee leaves = knowledge gone.",
      },
      {
        icon: "FileText",
        title: "Paper Travelers Everywhere",
        description: "Lost, damaged, or wrong. Every day.",
      },
      {
        icon: "AlertTriangle",
        title: "Scrap Tracking is Manual",
        description: "Margins bleeding. Can't find the leak.",
      },
    ],
    solutions: [
      {
        icon: "LayoutDashboard",
        title: "Visual Production Planning",
        description: "Drag-and-drop scheduling. See bottlenecks instantly.",
      },
      {
        icon: "Calculator",
        title: "Real-Time Job Costing",
        description: "Know your margins before the job ships.",
      },
      {
        icon: "Scan",
        title: "Barcode Shop Floor Control",
        description: "Scan jobs. Track WIP automatically.",
      },
      {
        icon: "Database",
        title: "Multi-Level BOM Management",
        description: "Complex assemblies with revision control.",
      },
      {
        icon: "TrendingUp",
        title: "Scrap & Quality Tracking",
        description: "Find waste patterns. Reduce scrap.",
      },
      {
        icon: "RefreshCw",
        title: "Automated Reordering",
        description: "Low stock? PO generated automatically.",
      },
    ],
    keyModules: [
      { name: "Manufacturing (MRP)", icon: "Factory", useCase: "Work orders, routings, and capacity planning" },
      { name: "Inventory", icon: "Package", useCase: "Real-time stock with barcode scanning" },
      { name: "Purchase", icon: "ShoppingCart", useCase: "Vendor management and automated POs" },
      { name: "Sales", icon: "TrendingUp", useCase: "Quote-to-order with customer portal" },
      { name: "Accounting", icon: "Calculator", useCase: "Job costing integration and financials" },
    ],
    testimonials: [],
    stats: [
      { label: "Faster Quoting", value: "50%", description: "Average improvement in quote turnaround" },
      { label: "Inventory Accuracy", value: "99%", description: "With barcode scanning implementation" },
      { label: "Job Visibility", value: "100%", description: "Real-time WIP tracking on every job" },
    ],
  },

  processManufacturing: {
    id: "process",
    name: "Process Manufacturing",
    slug: "process-manufacturing",
    tagline: "Chemical & Petrochemical",
    heroTitle: "Odoo ERP for Houston Process Manufacturers",
    heroSubtitle: "Batch Traceability & Compliance Built-In",
    heroDescription: "Formula management, lot tracking, and audit-ready compliance.",
    houstonZones: ["East Houston / Port Region"],
    zipCodes: ["77029", "77015", "77571", "77547", "77530"],
    targetRevenue: "$2M-$15M",
    targetEmployees: "10-75",
    color: "emerald",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/quality/hero_image.webp",
    painPoints: [
      {
        icon: "Beaker",
        title: "Formula Versioning Nightmare",
        description: "Wrong recipe used. Nobody noticed.",
      },
      {
        icon: "Search",
        title: "Lot Traceability Gaps",
        description: "Hours to trace one batch. Unacceptable.",
      },
      {
        icon: "ClipboardCheck",
        title: "Quality Documentation Scattered",
        description: "Paper QC. Email COAs. Audit panic.",
      },
      {
        icon: "Scale",
        title: "Scale Integration Missing",
        description: "Manual weights = inventory errors.",
      },
      {
        icon: "AlertOctagon",
        title: "Compliance Anxiety",
        description: "Audits keep you up at night.",
      },
      {
        icon: "Layers",
        title: "Yield Tracking is Manual",
        description: "Yield varies. No idea why.",
      },
    ],
    solutions: [
      {
        icon: "FileCode",
        title: "Formula & Recipe Management",
        description: "Version-controlled. Approval required.",
      },
      {
        icon: "GitBranch",
        title: "Full Lot Genealogy",
        description: "Trace any batch in seconds.",
      },
      {
        icon: "CheckSquare",
        title: "Integrated Quality Control",
        description: "QC built-in. COAs automatic.",
      },
      {
        icon: "Scale",
        title: "Scale & Equipment Integration",
        description: "Scales connected. No manual entry.",
      },
      {
        icon: "Shield",
        title: "Audit-Ready Documentation",
        description: "Every action logged. One-click reports.",
      },
      {
        icon: "BarChart",
        title: "Yield Analysis",
        description: "Actual vs. expected. Find variances.",
      },
    ],
    keyModules: [
      { name: "Manufacturing (MRP)", icon: "Factory", useCase: "Batch production with formula management" },
      { name: "Quality", icon: "CheckSquare", useCase: "QC checkpoints and COA generation" },
      { name: "Inventory", icon: "Package", useCase: "Lot tracking and expiration management" },
      { name: "Purchase", icon: "ShoppingCart", useCase: "Vendor qualification and raw material tracking" },
      { name: "Accounting", icon: "Calculator", useCase: "Batch costing and margin analysis" },
    ],
    testimonials: [],
    stats: [
      { label: "Trace Time", value: "30s", description: "Full lot genealogy lookup" },
      { label: "Audit Prep", value: "80%", description: "Reduction in compliance prep time" },
      { label: "Yield Visibility", value: "100%", description: "Batch-by-batch tracking" },
    ],
  },

  energyServices: {
    id: "energy",
    name: "Energy Services",
    slug: "energy-services",
    tagline: "Oilfield & Equipment Services",
    heroTitle: "Odoo ERP for Houston Energy Services",
    heroSubtitle: "Project Costing & Field Service in One System",
    heroDescription: "Timesheets, projects, and field service—unified.",
    houstonZones: ["Energy Corridor / West Houston"],
    zipCodes: ["77079", "77077", "77084", "77094", "77041", "77043"],
    targetRevenue: "$2M-$15M",
    targetEmployees: "10-75",
    color: "orange",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/project/project-hero-image.webp",
    painPoints: [
      {
        icon: "Clock",
        title: "Timesheet Chaos",
        description: "Billable hours lost in spreadsheets.",
      },
      {
        icon: "DollarSign",
        title: "Project Profitability Blind Spot",
        description: "Profit? Loss? Find out too late.",
      },
      {
        icon: "Truck",
        title: "Field Service Disconnect",
        description: "Field techs can't see inventory.",
      },
      {
        icon: "FileText",
        title: "Quote-to-Project Gap",
        description: "Scope creep goes untracked.",
      },
      {
        icon: "Wrench",
        title: "Equipment Tracking Gaps",
        description: "Where's that equipment? Phone calls.",
      },
      {
        icon: "Receipt",
        title: "Billing Delays",
        description: "Slow invoices = slow cash.",
      },
    ],
    solutions: [
      {
        icon: "Clock",
        title: "Mobile Timesheet Entry",
        description: "Log time anywhere. Bill instantly.",
      },
      {
        icon: "TrendingUp",
        title: "Real-Time Project Costing",
        description: "Live budget vs. actual. No surprises.",
      },
      {
        icon: "MapPin",
        title: "Field Service Integration",
        description: "Mobile schedules, work logs, inventory.",
      },
      {
        icon: "Link",
        title: "Quote-to-Project Flow",
        description: "Quote won → project created automatically.",
      },
      {
        icon: "QrCode",
        title: "Serialized Equipment Tracking",
        description: "Where's that equipment? One click.",
      },
      {
        icon: "Zap",
        title: "Accelerated Billing",
        description: "Approved time → invoice. One click.",
      },
    ],
    keyModules: [
      { name: "Project", icon: "FolderKanban", useCase: "Budgets, tasks, profitability" },
      { name: "Timesheets", icon: "Clock", useCase: "Mobile time entry" },
      { name: "Field Service", icon: "MapPin", useCase: "Technician scheduling" },
      { name: "Sales", icon: "TrendingUp", useCase: "Quote-to-project" },
      { name: "Accounting", icon: "Calculator", useCase: "Project billing" },
    ],
    testimonials: [
    ],
    stats: [
      { label: "Billing Cycle", value: "3 days", description: "From 3 weeks average" },
      { label: "Project Visibility", value: "Real-time", description: "Live cost vs. budget tracking" },
      { label: "Timesheet Accuracy", value: "95%+", description: "With mobile entry" },
    ],
  },

  foodBeverage: {
    id: "food",
    name: "Food & Beverage",
    slug: "food-beverage",
    tagline: "Food Processing & Distribution",
    heroTitle: "Odoo ERP for Houston Food Manufacturers",
    heroSubtitle: "Recipe Management & FDA Compliance Ready",
    heroDescription: "Lot tracking, FEFO automation, and recall-ready traceability.",
    houstonZones: ["Fort Bend / Southwest Houston"],
    zipCodes: ["77477", "77478", "77489", "77053"],
    targetRevenue: "$2M-$15M",
    targetEmployees: "10-75",
    color: "purple",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/hero_image.webp",
    painPoints: [
      {
        icon: "Calendar",
        title: "Expiration Date Nightmares",
        description: "Expired product shipped. Again.",
      },
      {
        icon: "Search",
        title: "Recall Readiness Gaps",
        description: "Recall today? Hours to find customers.",
      },
      {
        icon: "Utensils",
        title: "Recipe Scaling Challenges",
        description: "Scale up = proportions drift.",
      },
      {
        icon: "ShoppingCart",
        title: "Multi-Channel Complexity",
        description: "3 channels. 3 pricing nightmares.",
      },
      {
        icon: "Thermometer",
        title: "Temperature Logging Gaps",
        description: "Paper logs. Auditor headaches.",
      },
      {
        icon: "Truck",
        title: "Delivery Route Chaos",
        description: "Drivers backtrack. Windows missed.",
      },
    ],
    solutions: [
      {
        icon: "Clock",
        title: "FEFO Inventory Management",
        description: "System enforces rotation. Automatic.",
      },
      {
        icon: "GitBranch",
        title: "One-Click Recall Tracing",
        description: "Trace lot → all customers. Seconds.",
      },
      {
        icon: "Beaker",
        title: "Scalable Recipe Management",
        description: "Scale up/down. Proportions locked.",
      },
      {
        icon: "Layers",
        title: "Multi-Channel Order Management",
        description: "Retail, wholesale, online. One system.",
      },
      {
        icon: "Thermometer",
        title: "Digital Temperature Logging",
        description: "Sensors connected. Audit-ready.",
      },
      {
        icon: "Route",
        title: "Delivery Route Optimization",
        description: "Smart routes. Real-time tracking.",
      },
    ],
    keyModules: [
      { name: "Manufacturing (MRP)", icon: "Factory", useCase: "Recipe and batch production" },
      { name: "Inventory", icon: "Package", useCase: "FEFO and lot tracking" },
      { name: "Sales", icon: "TrendingUp", useCase: "Multi-channel orders" },
      { name: "Purchase", icon: "ShoppingCart", useCase: "Vendor management" },
      { name: "Accounting", icon: "Calculator", useCase: "Product costing" },
    ],
    testimonials: [],
    stats: [
      { label: "Recall Trace", value: "<1 hour", description: "Full forward/backward tracing" },
      { label: "FIFO Compliance", value: "100%", description: "System-enforced rotation" },
      { label: "Channel Management", value: "Unified", description: "One system for all channels" },
    ],
  },

  distribution: {
    id: "distribution",
    name: "Distribution & Wholesale",
    slug: "distribution",
    tagline: "Warehousing & B2B Distribution",
    heroTitle: "Odoo ERP for Houston Distributors",
    heroSubtitle: "Warehouse to Delivery, Fully Connected",
    heroDescription: "Multi-warehouse visibility, route optimization, and B2B portals.",
    houstonZones: ["Greater Houston Area"],
    zipCodes: ["77001", "77002", "77003", "77004", "77005"],
    targetRevenue: "$2M-$15M",
    targetEmployees: "10-75",
    color: "green",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/barcode_scanning.webp",
    painPoints: [
      {
        icon: "Package",
        title: "Inventory Across Multiple Warehouses",
        description: "One warehouse empty. Another overstocked.",
      },
      {
        icon: "Truck",
        title: "Route Planning is Manual",
        description: "Drivers backtrack. Fuel costs soar.",
      },
      {
        icon: "FileText",
        title: "Order Entry Bottlenecks",
        description: "Email orders → re-key → errors.",
      },
      {
        icon: "DollarSign",
        title: "Pricing Complexity",
        description: "100 customers. 100 price lists. Chaos.",
      },
      {
        icon: "Users",
        title: "No Customer Self-Service",
        description: "Phone rings all day. Orders, status, quotes.",
      },
      {
        icon: "Clock",
        title: "Slow Order-to-Cash Cycle",
        description: "Ship Monday. Invoice Friday. Why?",
      },
    ],
    solutions: [
      {
        icon: "Layers",
        title: "Multi-Warehouse Visibility",
        description: "All locations. Real-time. One click transfers.",
      },
      {
        icon: "Route",
        title: "Route Optimization",
        description: "Smart routes. Live tracking. POD capture.",
      },
      {
        icon: "Zap",
        title: "EDI & Order Automation",
        description: "EDI, email, portal. Zero manual entry.",
      },
      {
        icon: "Calculator",
        title: "Advanced Pricing Engine",
        description: "Per-customer pricing. Automated.",
      },
      {
        icon: "Globe",
        title: "B2B Customer Portal",
        description: "Self-service ordering 24/7.",
      },
      {
        icon: "Receipt",
        title: "Automated Invoicing",
        description: "Ship → invoice → collect. Faster.",
      },
    ],
    keyModules: [
      { name: "Inventory", icon: "Package", useCase: "Multi-warehouse, barcodes" },
      { name: "Sales", icon: "TrendingUp", useCase: "B2B orders" },
      { name: "Purchase", icon: "ShoppingCart", useCase: "Vendor management" },
      { name: "Accounting", icon: "Calculator", useCase: "AR/AP automation" },
      { name: "Website", icon: "Globe", useCase: "Customer portal" },
    ],
    testimonials: [],
    stats: [
      { label: "Order Processing", value: "70%", description: "Faster with automation" },
      { label: "Inventory Accuracy", value: "99%", description: "Across all warehouses" },
      { label: "Delivery Efficiency", value: "25%", description: "Route optimization savings" },
    ],
  },
  retail: {
    id: "retail",
    name: "Retail & E-commerce",
    slug: "retail",
    tagline: "Omnichannel Retail",
    heroTitle: "Odoo ERP for Houston Retailers",
    heroSubtitle: "Unified POS, Inventory & E-commerce",
    heroDescription: "POS, e-commerce, and inventory—one system, real-time sync.",
    houstonZones: ["Greater Houston Area"],
    zipCodes: ["77001", "77002", "77019", "77024", "77056"],
    targetRevenue: "$1M-$10M",
    targetEmployees: "5-50",
    color: "purple",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp",
    painPoints: [
      {
        icon: "Layers",
        title: "Inventory Doesn't Match Reality",
        description: "Online: in stock. Shelf: empty.",
      },
      {
        icon: "ShoppingCart",
        title: "Disconnected Sales Channels",
        description: "POS and website don't talk.",
      },
      {
        icon: "Users",
        title: "No Customer 360 View",
        description: "Who's this customer? No idea.",
      },
      {
        icon: "DollarSign",
        title: "Pricing & Promotions Chaos",
        description: "Online price ≠ store price.",
      },
      {
        icon: "Package",
        title: "Fulfillment Headaches",
        description: "BOPIS? Ship-from-store? Impossible.",
      },
      {
        icon: "FileText",
        title: "Reporting Takes Days",
        description: "Stale data by the time you see it.",
      },
    ],
    solutions: [
      {
        icon: "RefreshCw",
        title: "Real-Time Inventory Sync",
        description: "All channels. One stock count. No overselling.",
      },
      {
        icon: "Globe",
        title: "Unified Commerce Platform",
        description: "POS + e-commerce + back-office. One system.",
      },
      {
        icon: "Users",
        title: "360° Customer Profiles",
        description: "Every purchase. Every channel. One profile.",
      },
      {
        icon: "Calculator",
        title: "Centralized Pricing Engine",
        description: "Set once. Apply everywhere. Promotions included.",
      },
      {
        icon: "Truck",
        title: "Flexible Fulfillment",
        description: "BOPIS, ship-from-store, curbside. All built-in.",
      },
      {
        icon: "BarChart",
        title: "Real-Time Analytics",
        description: "What's selling, where, to whom. Live.",
      },
    ],
    keyModules: [
      { name: "Point of Sale", icon: "ShoppingCart", useCase: "Fast checkout with offline mode" },
      { name: "E-commerce", icon: "Globe", useCase: "Integrated online store" },
      { name: "Inventory", icon: "Package", useCase: "Multi-location stock management" },
      { name: "Sales", icon: "TrendingUp", useCase: "CRM and customer management" },
      { name: "Accounting", icon: "Calculator", useCase: "Automated reconciliation" },
    ],
    testimonials: [],
    stats: [
      { label: "Inventory Accuracy", value: "99%", description: "Across all channels" },
      { label: "Checkout Speed", value: "40%", description: "Faster transactions" },
      { label: "Customer Retention", value: "25%", description: "Increase with loyalty program" },
    ],
  },
  professionalServices: {
    id: "professional",
    name: "Professional Services",
    slug: "professional-services",
    tagline: "Consulting & Business Services",
    heroTitle: "Odoo ERP for Houston Professional Services",
    heroSubtitle: "Project Profitability & Resource Management",
    heroDescription: "Time tracking, project costing, and billing—automated.",
    houstonZones: ["Greater Houston Area"],
    zipCodes: ["77002", "77010", "77019", "77024", "77056"],
    targetRevenue: "$1M-$15M",
    targetEmployees: "10-100",
    color: "cyan",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/timesheet-hero-image.webp",
    painPoints: [
      {
        icon: "Clock",
        title: "Time Tracking is Painful",
        description: "Billable hours vanish weekly.",
      },
      {
        icon: "DollarSign",
        title: "Project Profitability is a Mystery",
        description: "Profitable project? Find out later.",
      },
      {
        icon: "Users",
        title: "Resource Scheduling Chaos",
        description: "Double-booked or underutilized.",
      },
      {
        icon: "FileText",
        title: "Proposals Take Too Long",
        description: "Scratch every time. Hours wasted.",
      },
      {
        icon: "Receipt",
        title: "Billing Delays Hurt Cash Flow",
        description: "Slow invoices. Slow payments.",
      },
      {
        icon: "BarChart",
        title: "Utilization Guesswork",
        description: "Think you know. Data says otherwise.",
      },
    ],
    solutions: [
      {
        icon: "Clock",
        title: "Effortless Time Capture",
        description: "Mobile. Browser. Calendar. Log time anywhere.",
      },
      {
        icon: "TrendingUp",
        title: "Real-Time Project Costing",
        description: "Live budget vs. actual. No surprises.",
      },
      {
        icon: "LayoutDashboard",
        title: "Visual Resource Planning",
        description: "Drag-drop scheduling. See availability instantly.",
      },
      {
        icon: "FileCode",
        title: "Proposal Automation",
        description: "Templates + rates. Minutes, not hours.",
      },
      {
        icon: "Zap",
        title: "Automated Billing",
        description: "Approved time → invoice. One click.",
      },
      {
        icon: "BarChart",
        title: "Utilization Dashboards",
        description: "Real-time by person, team, or practice.",
      },
    ],
    keyModules: [
      { name: "Project", icon: "FolderKanban", useCase: "Project budgets, tasks, and milestones" },
      { name: "Timesheets", icon: "Clock", useCase: "Mobile time entry with approval workflows" },
      { name: "Sales", icon: "TrendingUp", useCase: "CRM and proposal management" },
      { name: "Expenses", icon: "Receipt", useCase: "Expense capture and reimbursement" },
      { name: "Accounting", icon: "Calculator", useCase: "Project billing and revenue recognition" },
    ],
    testimonials: [],
    stats: [
      { label: "Utilization Increase", value: "17%", description: "Average improvement" },
      { label: "Billing Cycle", value: "3 days", description: "From 2+ weeks" },
      { label: "Proposal Time", value: "75%", description: "Faster with templates" },
    ],
  },

  manufacturing: {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    tagline: "Houston's Manufacturing ERP Partner",
    heroTitle: "Odoo ERP for Houston Manufacturers",
    heroSubtitle: "Sync Inventory, Sales & Production in 90 Days",
    heroDescription: "From shop floor to top floor—one integrated system for all your manufacturing operations.",
    houstonZones: ["Greater Houston Area"],
    zipCodes: ["77040", "77041", "77064", "77029", "77015"],
    targetRevenue: "$2M-$50M",
    targetEmployees: "10-250",
    color: "orange",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp",
    painPoints: [
      {
        icon: "Layers",
        title: "Disconnected Systems",
        description: "Sales doesn't talk to production. Production doesn't talk to inventory.",
      },
      {
        icon: "Clock",
        title: "Manual Data Entry",
        description: "Same info entered 3-4 times across different systems.",
      },
      {
        icon: "DollarSign",
        title: "No Real-Time Costing",
        description: "Job margins are a guess until months later.",
      },
      {
        icon: "Package",
        title: "Inventory Chaos",
        description: "Stockouts and overstock happening simultaneously.",
      },
      {
        icon: "AlertTriangle",
        title: "Quality Issues",
        description: "No traceability. Recalls are nightmares.",
      },
      {
        icon: "TrendingDown",
        title: "Scaling Problems",
        description: "Growth breaks existing processes.",
      },
    ],
    solutions: [
      {
        icon: "Layers",
        title: "Unified Platform",
        description: "Sales, inventory, production, and accounting—one database.",
      },
      {
        icon: "Zap",
        title: "Automated Workflows",
        description: "Sales order triggers production. Completion triggers invoicing.",
      },
      {
        icon: "BarChart",
        title: "Real-Time Visibility",
        description: "Live dashboards for every department.",
      },
      {
        icon: "Scan",
        title: "Barcode Everything",
        description: "Receiving, WIP, shipping—all scanned and tracked.",
      },
      {
        icon: "GitBranch",
        title: "Full Traceability",
        description: "Lot tracking from raw material to finished goods.",
      },
      {
        icon: "TrendingUp",
        title: "Built to Scale",
        description: "Add modules as you grow. Same core system.",
      },
    ],
    keyModules: [
      { name: "Manufacturing (MRP)", icon: "Factory", useCase: "BOMs, work orders, routing, and scheduling" },
      { name: "Inventory", icon: "Package", useCase: "Multi-warehouse with barcode scanning" },
      { name: "Sales", icon: "TrendingUp", useCase: "Quote-to-order with customer portal" },
      { name: "Purchase", icon: "ShoppingCart", useCase: "Vendor management and auto-reordering" },
      { name: "Accounting", icon: "Calculator", useCase: "Job costing and full financials" },
    ],
    testimonials: [],
    stats: [
      { label: "Faster Implementation", value: "90 Days", description: "Typical go-live timeline" },
      { label: "Inventory Accuracy", value: "99%+", description: "With barcode scanning" },
      { label: "Order-to-Cash", value: "40%", description: "Cycle time reduction" },
    ],
  },
};

// Helper function to get industry by slug
export function getIndustryBySlug(slug: string): IndustryConfig | undefined {
  return Object.values(industries).find((industry) => industry.slug === slug);
}

// Helper function to get industry by ID
export function getIndustryById(id: string): IndustryConfig | undefined {
  return Object.values(industries).find((industry) => industry.id === id);
}

// Color mapping for consistent theming
export const colorMap = {
  orange: {
    bg: "bg-orange-50",
    bgDark: "bg-orange-500",
    border: "border-orange-500",
    text: "text-orange-600",
    textLight: "text-orange-400",
    hover: "hover:bg-orange-100",
    gradient: "from-orange-500 to-amber-500",
    gradientDark: "from-orange-600 to-red-600",
    ring: "ring-orange-500",
    shadow: "shadow-orange-500/25",
  },
  blue: {
    bg: "bg-blue-50",
    bgDark: "bg-blue-500",
    border: "border-blue-500",
    text: "text-blue-600",
    textLight: "text-blue-400",
    hover: "hover:bg-blue-100",
    gradient: "from-blue-500 to-cyan-500",
    gradientDark: "from-blue-600 to-indigo-600",
    ring: "ring-blue-500",
    shadow: "shadow-blue-500/25",
  },
  emerald: {
    bg: "bg-emerald-50",
    bgDark: "bg-emerald-500",
    border: "border-emerald-500",
    text: "text-emerald-600",
    textLight: "text-emerald-400",
    hover: "hover:bg-emerald-100",
    gradient: "from-emerald-500 to-teal-500",
    gradientDark: "from-emerald-600 to-green-600",
    ring: "ring-emerald-500",
    shadow: "shadow-emerald-500/25",
  },
  purple: {
    bg: "bg-purple-50",
    bgDark: "bg-purple-500",
    border: "border-purple-500",
    text: "text-purple-600",
    textLight: "text-purple-400",
    hover: "hover:bg-purple-100",
    gradient: "from-purple-500 to-pink-500",
    gradientDark: "from-purple-600 to-fuchsia-600",
    ring: "ring-purple-500",
    shadow: "shadow-purple-500/25",
  },
  green: {
    bg: "bg-green-50",
    bgDark: "bg-green-500",
    border: "border-green-500",
    text: "text-green-600",
    textLight: "text-green-400",
    hover: "hover:bg-green-100",
    gradient: "from-green-500 to-teal-500",
    gradientDark: "from-green-600 to-emerald-600",
    ring: "ring-green-500",
    shadow: "shadow-green-500/25",
  },
  cyan: {
    bg: "bg-cyan-50",
    bgDark: "bg-cyan-500",
    border: "border-cyan-500",
    text: "text-cyan-600",
    textLight: "text-cyan-400",
    hover: "hover:bg-cyan-100",
    gradient: "from-cyan-500 to-blue-500",
    gradientDark: "from-cyan-600 to-teal-600",
    ring: "ring-cyan-500",
    shadow: "shadow-cyan-500/25",
  },
};
