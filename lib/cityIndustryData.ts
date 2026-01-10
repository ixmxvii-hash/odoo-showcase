import { industries, cities, type IndustryConfig, type Testimonial } from "./industryData";

// City-specific overrides for industry pages
export interface CityIndustryOverride {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  localZones: string[];
  zipCodes: string[];
  stats: { label: string; value: string; description: string }[];
  testimonials: Testimonial[];
}

// Partial override type for cleaner data structure
type PartialCityIndustryOverride = Partial<CityIndustryOverride>;

export const cityIndustryOverrides: Record<string, Record<string, PartialCityIndustryOverride>> = {
  HTX: {
    manufacturing: {
      heroTitle: "Odoo ERP for Houston Manufacturers",
      heroSubtitle: "Sync Inventory, Sales & Production in 90 Days",
      heroDescription: "From shop floor to top floor—one integrated system for all your manufacturing operations.",
      localZones: ["Greater Houston Area", "Energy Corridor", "Northwest Industrial Corridor", "Port of Houston"],
      zipCodes: ["77040", "77041", "77064", "77029", "77015"],
      testimonials: [
        {
          quote: "We finally have one source of truth. Production, sales, and accounting all looking at the same data.",
          author: "James M.",
          role: "COO",
          company: "Gulf Coast Manufacturing",
        },
        {
          quote: "ICIT understood our manufacturing challenges. They configured Odoo to match how we actually work.",
          author: "David H.",
          role: "Operations Director",
          company: "Houston Industrial Products",
        },
      ],
    },
    discreteManufacturing: {
      heroTitle: "Odoo ERP for Houston Machine Shops",
      heroSubtitle: "End Shop Floor Chaos in 90 Days",
      heroDescription: "Job costing, scheduling, and inventory—finally in one system.",
      localZones: ["Northwest Industrial Corridor", "Westchase", "Energy Corridor"],
      zipCodes: ["77040", "77041", "77064", "77065", "77066"],
      testimonials: [
        {
          quote: "We went from Excel chaos to knowing exactly where every job is and what it costs. Game changer.",
          author: "Mike R.",
          role: "Operations Manager",
          company: "Houston Precision Machining",
        },
        {
          quote: "ICIT had us live in 10 weeks. Their team actually understands job shops.",
          author: "Tom S.",
          role: "Owner",
          company: "Northwest Fabricators",
        },
      ],
    },
    processManufacturing: {
      heroTitle: "Odoo ERP for Houston Process Manufacturers",
      heroSubtitle: "Batch Traceability & Compliance Built-In",
      heroDescription: "Formula management, lot tracking, and audit-ready compliance.",
      localZones: ["East Houston / Port Region", "Ship Channel", "La Porte"],
      zipCodes: ["77029", "77015", "77571", "77547", "77530"],
      testimonials: [
        {
          quote: "Our last FDA audit was the smoothest ever. Everything was in Odoo, ready to show.",
          author: "Sarah K.",
          role: "Quality Manager",
          company: "Gulf Coast Chemicals",
        },
        {
          quote: "Lot traceability used to take hours. Now it's 30 seconds. That's not an exaggeration.",
          author: "James P.",
          role: "Plant Manager",
          company: "Port Houston Processing",
        },
      ],
    },
    energyServices: {
      heroTitle: "Odoo ERP for Houston Energy Services",
      heroSubtitle: "Project Costing & Field Service in One System",
      heroDescription: "Timesheets, projects, and field service—unified.",
      localZones: ["Energy Corridor", "West Houston", "Katy Freeway"],
      zipCodes: ["77079", "77077", "77084", "77094", "77041", "77043"],
      testimonials: [
        {
          quote: "We cut our billing cycle from 3 weeks to 3 days. Cash flow transformed overnight.",
          author: "David M.",
          role: "CFO",
          company: "Energy Corridor Services",
        },
        {
          quote: "Finally, one system for timesheets, projects, and inventory. No more spreadsheet hell.",
          author: "Lisa T.",
          role: "Operations Director",
          company: "West Houston Equipment",
        },
      ],
    },
    foodBeverage: {
      heroTitle: "Odoo ERP for Houston Food Manufacturers",
      heroSubtitle: "Recipe Management & FDA Compliance Ready",
      heroDescription: "Lot tracking, FEFO automation, and recall-ready traceability.",
      localZones: ["Fort Bend / Southwest Houston", "Sugar Land", "Missouri City"],
      zipCodes: ["77477", "77478", "77489", "77053"],
      testimonials: [
        {
          quote: "We passed our SQF audit with flying colors. Odoo made compliance documentation automatic.",
          author: "Maria G.",
          role: "Quality Assurance Manager",
          company: "Sugar Land Foods",
        },
        {
          quote: "Managing retail, wholesale, and online orders from one system saved us two FTEs.",
          author: "Robert C.",
          role: "Owner",
          company: "Fort Bend Beverages",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for Houston Distributors",
      heroSubtitle: "Warehouse to Delivery, Fully Connected",
      heroDescription: "Multi-warehouse visibility, route optimization, and B2B portals.",
      localZones: ["Greater Houston Area", "Port of Houston", "Northwest Industrial"],
      zipCodes: ["77001", "77002", "77003", "77004", "77005"],
      testimonials: [
        {
          quote: "We cut order processing time by 70%. Customers now place orders themselves through the portal.",
          author: "Carlos M.",
          role: "Operations Manager",
          company: "Houston Industrial Supply",
        },
        {
          quote: "Real-time inventory across 3 warehouses finally. No more surprise stockouts.",
          author: "Jennifer H.",
          role: "Warehouse Director",
          company: "Gulf Coast Distributors",
        },
      ],
    },
    retail: {
      heroTitle: "Odoo ERP for Houston Retailers",
      heroSubtitle: "Unified POS, Inventory & E-commerce",
      heroDescription: "POS, e-commerce, and inventory—one system, real-time sync.",
      localZones: ["Greater Houston Area", "Galleria", "Memorial City", "The Woodlands"],
      zipCodes: ["77001", "77002", "77019", "77024", "77056"],
      testimonials: [
        {
          quote: "Finally, one system for our 3 stores and website. Inventory is always accurate now.",
          author: "Amanda T.",
          role: "Owner",
          company: "Houston Home Goods",
        },
        {
          quote: "Our loyalty program runs itself. Customers love it and we see them more often.",
          author: "Marcus J.",
          role: "Store Manager",
          company: "Galleria Fashion Boutique",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for Houston Professional Services",
      heroSubtitle: "Project Profitability & Resource Management",
      heroDescription: "Time tracking, project costing, and billing—automated.",
      localZones: ["Greater Houston Area", "Downtown", "Galleria", "Energy Corridor"],
      zipCodes: ["77002", "77010", "77019", "77024", "77056"],
      testimonials: [
        {
          quote: "Our utilization went from 65% to 82% in six months. The visibility changed everything.",
          author: "Kevin L.",
          role: "Managing Partner",
          company: "Houston Engineering Consultants",
        },
        {
          quote: "Proposal turnaround dropped from 2 days to 2 hours. We're winning more work faster.",
          author: "Rachel S.",
          role: "Business Development Director",
          company: "Energy Corridor Advisory",
        },
      ],
    },
  },

  ATX: {
    manufacturing: {
      heroTitle: "Odoo ERP for Austin Manufacturers",
      heroSubtitle: "Scale Your Production, Keep Your Agility",
      heroDescription: "Modern ERP built for Austin's innovative manufacturing sector.",
      localZones: ["East Austin", "Tech Ridge", "Round Rock", "Cedar Park"],
      zipCodes: ["78701", "78702", "78753", "78664", "78613"],
      stats: [
        { label: "Faster Implementation", value: "90 Days", description: "Typical go-live timeline" },
        { label: "Inventory Accuracy", value: "99%+", description: "With barcode scanning" },
        { label: "Order-to-Cash", value: "35%", description: "Cycle time reduction" },
      ],
      testimonials: [
        {
          quote: "We scaled from 20 to 200 employees and Odoo grew with us. No system change needed.",
          author: "Marcus T.",
          role: "CEO",
          company: "Austin Tech Manufacturing",
        },
        {
          quote: "ICIT helped us integrate our manufacturing with our e-commerce. Game changer for D2C.",
          author: "Sarah L.",
          role: "Operations Manager",
          company: "Round Rock Products",
        },
      ],
    },
    discreteManufacturing: {
      heroTitle: "Odoo ERP for Austin Machine Shops",
      heroSubtitle: "Precision Manufacturing, Precision Software",
      heroDescription: "Job costing, scheduling, and real-time shop floor visibility.",
      localZones: ["East Austin Industrial", "Tech Ridge", "Pflugerville"],
      zipCodes: ["78702", "78753", "78660", "78664"],
      testimonials: [
        {
          quote: "Our job shop now runs like a well-oiled machine. Every work order tracked in real-time.",
          author: "Carlos R.",
          role: "Shop Manager",
          company: "Central Texas Precision",
        },
        {
          quote: "Barcode scanning eliminated our inventory discrepancies. Finally accurate counts.",
          author: "Jennifer W.",
          role: "Operations Director",
          company: "Austin Fabrication Works",
        },
      ],
    },
    processManufacturing: {
      heroTitle: "Odoo ERP for Austin Process Manufacturers",
      heroSubtitle: "Batch Traceability for Growing Companies",
      heroDescription: "Formula management and compliance tracking that scales with you.",
      localZones: ["East Austin", "Manor", "Del Valle"],
      zipCodes: ["78702", "78653", "78617"],
      testimonials: [
        {
          quote: "We passed our third-party audit on the first try. Odoo had everything documented.",
          author: "Michael P.",
          role: "Quality Director",
          company: "Hill Country Processing",
        },
        {
          quote: "Recipe versioning saved us from a major quality issue. Worth every penny.",
          author: "Amanda K.",
          role: "Production Manager",
          company: "Austin Specialty Chemicals",
        },
      ],
    },
    energyServices: {
      heroTitle: "Odoo ERP for Austin Energy Services",
      heroSubtitle: "Solar, Wind & Clean Energy Project Management",
      heroDescription: "Track projects, technicians, and profitability in one system.",
      localZones: ["Greater Austin", "Georgetown", "Taylor"],
      zipCodes: ["78701", "78626", "76574"],
      testimonials: [
        {
          quote: "Managing 50+ solar installation projects from one dashboard. Visibility we never had before.",
          author: "Ryan M.",
          role: "Project Director",
          company: "Austin Solar Solutions",
        },
        {
          quote: "Field service scheduling went from chaos to clockwork. Technicians love the mobile app.",
          author: "Kim T.",
          role: "Service Manager",
          company: "Central Texas Energy Services",
        },
      ],
    },
    foodBeverage: {
      heroTitle: "Odoo ERP for Austin Food Manufacturers",
      heroSubtitle: "Craft Production with Enterprise Control",
      heroDescription: "From food trucks to food factories—scalable recipe management.",
      localZones: ["East Austin", "South Austin", "Dripping Springs"],
      zipCodes: ["78702", "78704", "78620"],
      testimonials: [
        {
          quote: "We went from farmers market to 200 retail locations. Odoo scaled with every step.",
          author: "Elena R.",
          role: "Founder",
          company: "Austin Artisan Foods",
        },
        {
          quote: "Lot traceability was a nightmare before Odoo. Now it's one click.",
          author: "Jake M.",
          role: "Operations Manager",
          company: "Hill Country Beverages",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for Austin Distributors",
      heroSubtitle: "Fast-Growing Market, Fast-Moving Inventory",
      heroDescription: "Multi-location inventory and same-day delivery operations.",
      localZones: ["East Austin", "Round Rock", "San Marcos"],
      zipCodes: ["78702", "78664", "78666"],
      testimonials: [
        {
          quote: "We serve Austin and San Antonio from one warehouse. Inventory visibility is everything.",
          author: "Tony V.",
          role: "Warehouse Manager",
          company: "Central Texas Distribution",
        },
        {
          quote: "B2B portal reduced phone orders by 80%. Customers love the convenience.",
          author: "Maria S.",
          role: "Sales Director",
          company: "Austin Supply Co.",
        },
      ],
    },
    retail: {
      heroTitle: "Odoo ERP for Austin Retailers",
      heroSubtitle: "Keep Austin Weird, Keep Inventory Accurate",
      heroDescription: "Multi-channel retail that fits Austin's unique retail scene.",
      localZones: ["South Congress", "Downtown", "The Domain", "Mueller"],
      zipCodes: ["78704", "78701", "78758", "78723"],
      testimonials: [
        {
          quote: "Our SoCo boutique and online store finally sync perfectly. No more overselling.",
          author: "Brittany L.",
          role: "Owner",
          company: "South Congress Collective",
        },
        {
          quote: "Pop-up to permanent in 6 months. Odoo POS made the transition seamless.",
          author: "Derek C.",
          role: "Founder",
          company: "Austin Artisan Market",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for Austin Professional Services",
      heroSubtitle: "Tech-Forward Firms Need Tech-Forward Tools",
      heroDescription: "Resource planning and project profitability for growing firms.",
      localZones: ["Downtown Austin", "The Domain", "Tech Ridge"],
      zipCodes: ["78701", "78758", "78753"],
      testimonials: [
        {
          quote: "We grew from 15 to 60 consultants. Odoo's resource planning kept us profitable.",
          author: "Nathan B.",
          role: "Managing Partner",
          company: "Austin Technology Advisors",
        },
        {
          quote: "Project profitability reports that used to take days now take seconds.",
          author: "Lisa H.",
          role: "CFO",
          company: "Central Texas Consulting Group",
        },
      ],
    },
  },

  DFW: {
    manufacturing: {
      heroTitle: "Odoo ERP for Dallas-Fort Worth Manufacturers",
      heroSubtitle: "Scale Production Across the Metroplex",
      heroDescription: "Enterprise-grade manufacturing ERP at mid-market pricing.",
      localZones: ["DFW Metroplex", "Alliance Corridor", "South Dallas Industrial"],
      zipCodes: ["75201", "75207", "76177", "75038", "76001"],
      stats: [
        { label: "Faster Implementation", value: "90 Days", description: "Typical go-live timeline" },
        { label: "Inventory Accuracy", value: "99%+", description: "With barcode scanning" },
        { label: "Order-to-Cash", value: "45%", description: "Cycle time reduction" },
      ],
      testimonials: [
        {
          quote: "Three plants across DFW, all on one system. Finally real-time visibility everywhere.",
          author: "William R.",
          role: "VP Operations",
          company: "DFW Manufacturing Group",
        },
        {
          quote: "ICIT understood our multi-site challenges. They configured Odoo to handle our complexity.",
          author: "Patricia K.",
          role: "Plant Manager",
          company: "Alliance Corridor Industries",
        },
      ],
    },
    discreteManufacturing: {
      heroTitle: "Odoo ERP for DFW Machine Shops",
      heroSubtitle: "Aerospace & Defense Grade Job Tracking",
      heroDescription: "Meet compliance requirements while maximizing shop efficiency.",
      localZones: ["Alliance Corridor", "Arlington", "Grand Prairie"],
      zipCodes: ["76177", "76001", "75050", "75051"],
      testimonials: [
        {
          quote: "AS9100 compliance is built into our Odoo workflows. Audits are stress-free now.",
          author: "Steve M.",
          role: "Quality Manager",
          company: "North Texas Aerospace",
        },
        {
          quote: "Job costing accuracy improved 40%. We finally know our true margins.",
          author: "Robert J.",
          role: "Owner",
          company: "DFW Precision Machining",
        },
      ],
    },
    processManufacturing: {
      heroTitle: "Odoo ERP for DFW Process Manufacturers",
      heroSubtitle: "Chemical & Plastics Industry Ready",
      heroDescription: "Formula management with full regulatory compliance tracking.",
      localZones: ["South Dallas Industrial", "Grand Prairie", "Midlothian"],
      zipCodes: ["75207", "75050", "76065"],
      testimonials: [
        {
          quote: "Batch genealogy from raw material to final product. Total traceability in seconds.",
          author: "Daniel C.",
          role: "Operations Director",
          company: "Texas Plastics Processing",
        },
        {
          quote: "TSCA compliance documentation that used to take days now generates automatically.",
          author: "Karen L.",
          role: "Compliance Manager",
          company: "DFW Chemical Solutions",
        },
      ],
    },
    energyServices: {
      heroTitle: "Odoo ERP for DFW Energy Services",
      heroSubtitle: "Field Service Excellence Across the Metroplex",
      heroDescription: "Manage technicians, equipment, and billing from one platform.",
      localZones: ["Greater DFW", "Midland-Odessa (remote)", "Permian Basin"],
      zipCodes: ["75201", "76101", "79701"],
      testimonials: [
        {
          quote: "We manage crews across DFW and West Texas from one system. Real-time, always.",
          author: "Chris B.",
          role: "Operations VP",
          company: "Texas Energy Field Services",
        },
        {
          quote: "Mobile timesheet entry from the field. Billing cycle cut from weeks to days.",
          author: "Michelle R.",
          role: "Finance Director",
          company: "DFW Oilfield Services",
        },
      ],
    },
    foodBeverage: {
      heroTitle: "Odoo ERP for DFW Food Manufacturers",
      heroSubtitle: "From Local Favorite to Regional Leader",
      heroDescription: "Scale your food business with enterprise-grade traceability.",
      localZones: ["Dallas", "Fort Worth", "Plano", "Irving"],
      zipCodes: ["75201", "76102", "75024", "75038"],
      testimonials: [
        {
          quote: "Supplying 500+ restaurants across Texas. Odoo handles every order perfectly.",
          author: "Antonio G.",
          role: "CEO",
          company: "North Texas Food Co.",
        },
        {
          quote: "FSMA compliance is automatic now. Auditors are impressed every time.",
          author: "Janet W.",
          role: "Quality Director",
          company: "DFW Specialty Foods",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for DFW Distributors",
      heroSubtitle: "The Logistics Hub Needs Logistics Power",
      heroDescription: "Multi-warehouse operations for America's distribution capital.",
      localZones: ["Alliance Corridor", "South Dallas", "DFW Airport Area"],
      zipCodes: ["76177", "75207", "75261"],
      testimonials: [
        {
          quote: "Five warehouses, 10,000+ SKUs, one system. Inventory accuracy at 99.5%.",
          author: "Richard T.",
          role: "VP Logistics",
          company: "Texas Regional Distribution",
        },
        {
          quote: "Same-day shipping went from impossible to standard. Customers notice the difference.",
          author: "Sandra M.",
          role: "Operations Manager",
          company: "DFW Supply Chain Solutions",
        },
      ],
    },
    retail: {
      heroTitle: "Odoo ERP for DFW Retailers",
      heroSubtitle: "Multi-Location Retail Across the Metroplex",
      heroDescription: "Unified commerce for retail chains throughout DFW.",
      localZones: ["Dallas", "Fort Worth", "Plano", "Frisco", "Southlake"],
      zipCodes: ["75201", "76102", "75024", "75034", "76092"],
      testimonials: [
        {
          quote: "12 locations from Southlake to South Dallas. One inventory, one customer database.",
          author: "Brandon K.",
          role: "Retail Director",
          company: "DFW Lifestyle Stores",
        },
        {
          quote: "Buy online, pick up anywhere. Customers love the flexibility.",
          author: "Angela C.",
          role: "E-commerce Manager",
          company: "North Texas Home & Garden",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for DFW Professional Services",
      heroSubtitle: "Corporate Headquarters Demand Corporate Tools",
      heroDescription: "Enterprise service management at mid-market pricing.",
      localZones: ["Downtown Dallas", "Uptown", "Las Colinas", "Fort Worth"],
      zipCodes: ["75201", "75204", "75039", "76102"],
      testimonials: [
        {
          quote: "Fortune 500 clients expect enterprise-grade reporting. Odoo delivers it.",
          author: "Thomas A.",
          role: "Managing Director",
          company: "Dallas Business Consulting",
        },
        {
          quote: "Multi-office resource planning across DFW and Houston. Finally unified.",
          author: "Catherine M.",
          role: "COO",
          company: "Texas Professional Group",
        },
      ],
    },
  },
};

/**
 * Get industry data merged with city-specific overrides
 */
export function getCityIndustry(cityKey: string, industryKey: string): IndustryConfig {
  const normalizedCityKey = cityKey.toUpperCase();
  const base = industries[industryKey];

  if (!base) {
    throw new Error(`Industry not found: ${industryKey}`);
  }

  const override = cityIndustryOverrides[normalizedCityKey]?.[industryKey];

  if (!override) {
    // Return base industry with city name in title
    const cityName = cities[normalizedCityKey]?.name || cityKey;
    return {
      ...base,
      heroTitle: base.heroTitle.replace(/Houston|Austin|Dallas-Fort Worth|DFW/gi, cityName),
      houstonZones: base.houstonZones,
    };
  }

  // Merge override with base
  return {
    ...base,
    heroTitle: override.heroTitle || base.heroTitle,
    heroSubtitle: override.heroSubtitle || base.heroSubtitle,
    heroDescription: override.heroDescription || base.heroDescription,
    houstonZones: override.localZones || base.houstonZones,
    zipCodes: override.zipCodes || base.zipCodes,
    stats: override.stats || base.stats,
    testimonials: override.testimonials || base.testimonials,
  };
}

/**
 * Get city config by abbreviation
 */
export function getCity(cityKey: string) {
  return cities[cityKey.toUpperCase()];
}

/**
 * Check if a city key is valid
 */
export function isValidCity(cityKey: string): boolean {
  return cityKey.toUpperCase() in cities;
}
