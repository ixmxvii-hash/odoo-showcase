import { industries, cities, type IndustryConfig, type Testimonial } from "./industryData";
import { getResearchData, type ResearchData } from "./researchData";

// City-specific overrides for industry pages
export interface CityIndustryOverride {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  localZones: string[];
  zipCodes: string[];
  stats: { label: string; value: string; description: string }[];
  testimonials: Testimonial[];
  keyModules?: string[];
  strategicOutcome?: string;
}

// Partial override type for cleaner data structure
type PartialCityIndustryOverride = Partial<CityIndustryOverride>;

export const cityIndustryOverrides: Record<string, Record<string, PartialCityIndustryOverride>> = {
  HTX: {
    manufacturing: {
      heroTitle: "Odoo ERP for Houston Manufacturers",
      heroSubtitle: "Shop Floor Control & Job Costing for Heavy Industry",
      heroDescription: "From the Northwest Industrial Corridor to Aldine, Houston manufacturers achieve real-time visibility with centralized job costing and OEE tracking.",
      localZones: ["Aldine (77039)", "Northwest Industrial (77041)", "Jersey Village (77040)", "Tomball (77375)"],
      zipCodes: ["77039", "77041", "77040", "77375", "77064"],
      stats: [
        { label: "Efficiency Gains", value: "50%+", description: "Houston manufacturers achieve with Odoo" },
        { label: "Implementation", value: "90 Days", description: "Go-live for Gulf Coast manufacturers" },
        { label: "Annual Savings", value: "$500K+", description: "Verified ROI for Houston operations" },
      ],
      keyModules: ["MRP", "Quality", "Maintenance", "Shop Floor"],
      strategicOutcome: "Increased OEE, reduced downtime",
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
      heroSubtitle: "PLM & Serial Traceability for Precision Components",
      heroDescription: "Managing complex BOMs and engineering changes for valves, drill bits, and instrumentation destined for the energy sector.",
      localZones: ["Northwest Industrial (77041)", "Greenspoint (77086)", "Energy Corridor", "Westchase"],
      zipCodes: ["77041", "77086", "77064", "77065", "77066"],
      stats: [
        { label: "Lead Time Reduction", value: "25%", description: "Energy Corridor machine shops achieve" },
        { label: "Job Costing", value: "75% Faster", description: "Real-time visibility for Houston shops" },
        { label: "Cost Savings", value: "30%", description: "Operational reduction verified" },
      ],
      keyModules: ["PLM", "Subcontracting", "Serial Tracking"],
      strategicOutcome: "Version control, audit-ready traceability",
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
      heroSubtitle: "Formula Management & TCEQ Compliance",
      heroDescription: "Batch traceability, by-product management, and environmental compliance for the Ship Channel petrochemical corridor.",
      localZones: ["La Porte (77571)", "Bayport Industrial (77507)", "South Houston (77017)", "Pasadena"],
      zipCodes: ["77571", "77507", "77017", "77530", "77015"],
      stats: [
        { label: "Batch Accuracy", value: "40%+ Better", description: "Ship Channel processors achieve" },
        { label: "Traceability", value: "Instant", description: "Full lot genealogy in seconds" },
        { label: "Compliance Ready", value: "100%", description: "TCEQ/FDA audit-ready documentation" },
      ],
      keyModules: ["MRP (Formulas)", "Quality", "ESG"],
      strategicOutcome: "Yield optimization, environmental compliance",
      testimonials: [
        {
          quote: "Our last TCEQ audit was the smoothest ever. Everything was in Odoo, ready to show.",
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
      heroSubtitle: "Field Service & RRC Compliance from the Energy Corridor",
      heroDescription: "Bridge the gap between corporate offices in 77079 and field operations across the Permian Basin with real-time asset tracking.",
      localZones: ["Energy Corridor (77079)", "West Houston (77077)", "Katy Freeway (77084)", "Westchase"],
      zipCodes: ["77079", "77077", "77084", "77094", "77041"],
      stats: [
        { label: "Cost Savings", value: "30%", description: "Energy Corridor companies achieve" },
        { label: "Daily Tasks", value: "96% Faster", description: "Field service automation results" },
        { label: "ROI Timeline", value: "6-12 Mo", description: "Verified payback period" },
      ],
      keyModules: ["Field Service", "Fleet", "Rental", "Accounting"],
      strategicOutcome: "Remote asset visibility, RRC compliance",
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
      heroSubtitle: "FSMA Compliance & HACCP Integration",
      heroDescription: "Farm-to-fork traceability for the East End food district—from coffee roasters to tortilla manufacturers.",
      localZones: ["East End (77020)", "Magnolia Park (77013)", "Second Ward", "Harrisburg"],
      zipCodes: ["77020", "77013", "77003", "77011", "77012"],
      stats: [
        { label: "Order Processing", value: "75% Faster", description: "Houston food manufacturers achieve" },
        { label: "Lot Traceability", value: "1-Click", description: "Full batch genealogy instant" },
        { label: "Go-Live", value: "12 Weeks", description: "FSMA-compliant implementation" },
      ],
      keyModules: ["Inventory (FEFO)", "Quality (HACCP)", "MRP"],
      strategicOutcome: "Food safety, waste reduction",
      testimonials: [
        {
          quote: "We passed our SQF audit with flying colors. Odoo made compliance documentation automatic.",
          author: "Maria G.",
          role: "Quality Assurance Manager",
          company: "East End Foods",
        },
        {
          quote: "FEFO inventory management cut our spoilage by 60%. The system directs picks to earliest expiration.",
          author: "Robert C.",
          role: "Owner",
          company: "Houston Beverage Co.",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for Houston Distributors",
      heroSubtitle: "Landed Costs & Port of Houston Integration",
      heroDescription: "Manage massive throughput of containerized cargo with automated landed costs, bonded warehousing, and multi-modal shipping.",
      localZones: ["Port of Houston (77029)", "Galena Park (77547)", "Cloverleaf (77015)", "Ship Channel"],
      zipCodes: ["77029", "77547", "77015", "77530", "77571"],
      stats: [
        { label: "Fulfillment", value: "30% Faster", description: "Port of Houston distributors achieve" },
        { label: "Shipment Accuracy", value: "98%+", description: "Multi-warehouse visibility" },
        { label: "ERP Cost Savings", value: "80%", description: "vs legacy systems verified" },
      ],
      keyModules: ["Inventory (Barcode)", "Landed Costs", "Shipping"],
      strategicOutcome: "Velocity, margin accuracy",
      testimonials: [
        {
          quote: "We cut order processing time by 70%. Landed costs are calculated automatically on every receipt.",
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
      heroSubtitle: "Unified Commerce & Texas Sales Tax Automation",
      heroDescription: "Omnichannel retail from the Galleria to Katy—unified POS, e-commerce, and Avalara tax compliance.",
      localZones: ["Galleria/Uptown (77056)", "Katy (77493)", "Cypress (77433)", "Memorial City"],
      zipCodes: ["77056", "77493", "77433", "77024", "77079"],
      stats: [
        { label: "Order Processing", value: "75% Faster", description: "Houston retailers achieve" },
        { label: "Inventory Errors", value: "76% Reduced", description: "Multi-location accuracy" },
        { label: "Go-Live", value: "6 Weeks", description: "POS + E-commerce unified" },
      ],
      keyModules: ["POS", "eCommerce", "Loyalty", "Avalara"],
      strategicOutcome: "Omnichannel experience, tax compliance",
      testimonials: [
        {
          quote: "Finally, one system for our 3 stores and website. Inventory is always accurate now.",
          author: "Amanda T.",
          role: "Owner",
          company: "Galleria Fashion Boutique",
        },
        {
          quote: "Avalara integration handles Texas sales tax automatically. No more compliance headaches.",
          author: "Marcus J.",
          role: "Store Manager",
          company: "Katy Home Goods",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for Houston Professional Services",
      heroSubtitle: "Project Profitability from Greenway Plaza",
      heroDescription: "Eliminate revenue leakage with project-centric accounting and subscription management for law, engineering, and consulting firms.",
      localZones: ["Greenway Plaza (77046)", "Galleria/Uptown (77056)", "Downtown", "Memorial"],
      zipCodes: ["77046", "77056", "77002", "77010", "77024"],
      stats: [
        { label: "Time Savings", value: "50%", description: "Houston consulting firms achieve" },
        { label: "Invoicing", value: "93% Faster", description: "Automated billing verified" },
        { label: "ROI", value: "150%", description: "Within 12 months verified" },
      ],
      keyModules: ["Project", "Timesheets", "Subscription", "Accounting"],
      strategicOutcome: "Revenue assurance, utilization tracking",
      testimonials: [
        {
          quote: "Our utilization went from 65% to 82% in six months. The visibility changed everything.",
          author: "Kevin L.",
          role: "Managing Partner",
          company: "Houston Engineering Consultants",
        },
        {
          quote: "Every timesheet entry automatically populates a draft invoice. Zero revenue leakage.",
          author: "Rachel S.",
          role: "Business Development Director",
          company: "Greenway Advisory",
        },
      ],
    },
  },

  ATX: {
    manufacturing: {
      heroTitle: "Odoo ERP for Austin Manufacturers",
      heroSubtitle: "JIT Production for the Tesla Effect Economy",
      heroDescription: "Just-in-time workflows and digital work instructions for the advanced manufacturing boom in Southeast Austin and Pflugerville.",
      localZones: ["Southeast Austin (78744)", "Pflugerville (78660)", "Round Rock", "Taylor"],
      zipCodes: ["78744", "78660", "78664", "78681", "76574"],
      stats: [
        { label: "Productivity Boost", value: "50%+", description: "Austin tech manufacturers achieve" },
        { label: "Implementation", value: "90 Days", description: "Scale-ready for high-growth" },
        { label: "ROI Timeline", value: "6-12 Mo", description: "Verified payback period" },
      ],
      keyModules: ["MRP", "Quality", "Work Instructions", "Shop Floor"],
      strategicOutcome: "JIT delivery, zero inventory bloat",
      testimonials: [
        {
          quote: "We scaled from 20 to 200 employees and Odoo grew with us. No system change needed.",
          author: "Marcus T.",
          role: "CEO",
          company: "Austin Tech Manufacturing",
        },
        {
          quote: "Make-to-Order workflows mean we don't hold finished goods. Inventory costs dropped 40%.",
          author: "Sarah L.",
          role: "Operations Manager",
          company: "Pflugerville Products",
        },
      ],
    },
    discreteManufacturing: {
      heroTitle: "Odoo ERP for Austin Semiconductor Manufacturers",
      heroSubtitle: "Clean Room Mobility & High-Velocity PLM",
      heroDescription: "Mobile-first manufacturing for Silicon Hills—rigorous version control for rapidly evolving hardware designs.",
      localZones: ["Arboretum/Great Hills (78759)", "Tech Ridge (78758)", "Domain", "North Austin"],
      zipCodes: ["78759", "78758", "78753", "78750", "78727"],
      stats: [
        { label: "Cycle Time", value: "25% Faster", description: "Austin precision shops achieve" },
        { label: "Job Tracking", value: "Real-Time", description: "Semiconductor supply chain ready" },
        { label: "Cost Reduction", value: "30%", description: "Operational savings verified" },
      ],
      keyModules: ["PLM", "MRP", "Quality", "Mobile"],
      strategicOutcome: "Clean room compliance, version control",
      testimonials: [
        {
          quote: "Tablets in the clean room eliminated paper contamination. Odoo's mobile-first design is perfect.",
          author: "Carlos R.",
          role: "Shop Manager",
          company: "Central Texas Precision",
        },
        {
          quote: "PLM tracks effectivity dates—the factory floor switches to new designs exactly when intended.",
          author: "Jennifer W.",
          role: "Engineering Director",
          company: "Austin Semiconductor Works",
        },
      ],
    },
    processManufacturing: {
      heroTitle: "Odoo ERP for Austin Biotech Manufacturers",
      heroSubtitle: "GMP Compliance & Mandatory Quality Checks",
      heroDescription: "Validated processes and digital signatures for pharmaceutical and life sciences innovation in North Austin.",
      localZones: ["North Austin (78717)", "Southeast Austin (78744)", "Research Park", "Tech Ridge"],
      zipCodes: ["78717", "78744", "78758", "78759", "78727"],
      stats: [
        { label: "Batch Accuracy", value: "40%+ Better", description: "Central Texas processors achieve" },
        { label: "Traceability", value: "Instant", description: "Full lot genealogy in seconds" },
        { label: "Go-Live", value: "8-12 Weeks", description: "GMP-compliant implementation" },
      ],
      keyModules: ["MRP", "Quality (GMP)", "Sample Management"],
      strategicOutcome: "Regulatory compliance, validated processes",
      testimonials: [
        {
          quote: "Mandatory quality checks block batches until all control points pass. GMP compliance is automatic.",
          author: "Michael P.",
          role: "Quality Director",
          company: "Austin Life Sciences",
        },
        {
          quote: "Sample management keeps marketing samples separate from commercial inventory. Clean valuations.",
          author: "Amanda K.",
          role: "Production Manager",
          company: "Hill Country Biotech",
        },
      ],
    },
    energyServices: {
      heroTitle: "Odoo ERP for Austin Clean Tech Companies",
      heroSubtitle: "Integrated Sales-to-Service for Solar Installers",
      heroDescription: "Seamless workflow from signed quote to installation to ongoing service for Austin's green energy hub.",
      localZones: ["North Austin (78727)", "Arboretum (78759)", "Cedar Park", "Round Rock"],
      zipCodes: ["78727", "78759", "78613", "78664", "78681"],
      stats: [
        { label: "Cost Savings", value: "30%", description: "Austin solar installers achieve" },
        { label: "Field Service", value: "96% Faster", description: "Daily task automation results" },
        { label: "ROI Timeline", value: "6-12 Mo", description: "Verified payback period" },
      ],
      keyModules: ["Sales", "Project", "Field Service", "Inventory"],
      strategicOutcome: "50% administrative overhead reduction",
      testimonials: [
        {
          quote: "A signed quote creates the project, reserves inventory, and generates field service tasks. One click.",
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
      heroTitle: "Odoo ERP for Austin CPG Startups",
      heroSubtitle: "Co-Packing Management for East Austin Brands",
      heroDescription: "Scale from farmers market to Whole Foods with subcontracting workflows and event management for taprooms.",
      localZones: ["East Austin (78702)", "South Austin (78704)", "Dripping Springs", "Fredericksburg"],
      zipCodes: ["78702", "78704", "78620", "78624", "78745"],
      stats: [
        { label: "Order Processing", value: "75% Faster", description: "Austin craft producers achieve" },
        { label: "Traceability", value: "1-Click", description: "Full batch genealogy instant" },
        { label: "Go-Live", value: "10 Weeks", description: "Craft-scale implementation" },
      ],
      keyModules: ["Subcontracting", "Events", "Inventory (FEFO)"],
      strategicOutcome: "Co-packer visibility, event revenue integration",
      testimonials: [
        {
          quote: "We went from farmers market to 200 retail locations. Odoo tracks inventory at our co-packer perfectly.",
          author: "Elena R.",
          role: "Founder",
          company: "Austin Artisan Foods",
        },
        {
          quote: "Events app manages taproom ticket sales and integrates with our core brewing business.",
          author: "Jake M.",
          role: "Operations Manager",
          company: "East Austin Brewery",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for Austin Distributors",
      heroSubtitle: "Last-Mile Excellence via SH-130",
      heroDescription: "Fleet management and optimized delivery routing for the booming e-commerce distribution node in Pflugerville.",
      localZones: ["Pflugerville (78660)", "Round Rock", "Georgetown", "SH-130 Corridor"],
      zipCodes: ["78660", "78664", "78626", "78681", "78665"],
      stats: [
        { label: "Fulfillment", value: "30% Faster", description: "I-35 Corridor distributors achieve" },
        { label: "Accuracy", value: "98%+", description: "Multi-warehouse visibility" },
        { label: "ERP Savings", value: "80%", description: "vs legacy systems verified" },
      ],
      keyModules: ["Fleet", "Inventory", "Delivery Routing"],
      strategicOutcome: "Last-mile efficiency, route optimization",
      testimonials: [
        {
          quote: "We serve Austin and San Antonio from one warehouse. Route optimization cut delivery costs 25%.",
          author: "Tony V.",
          role: "Warehouse Manager",
          company: "Central Texas Distribution",
        },
        {
          quote: "Batch picking organized by route—trucks loaded in reverse delivery order. Perfect efficiency.",
          author: "Maria S.",
          role: "Operations Director",
          company: "Austin Supply Co.",
        },
      ],
    },
    retail: {
      heroTitle: "Odoo ERP for Austin Boutique Retailers",
      heroSubtitle: "Endless Aisle for South Congress",
      heroDescription: "Unified digital-native DTC brands with physical guide shops—sell from warehouse stock when in-store sizes are out.",
      localZones: ["South Congress (78704)", "Downtown (78701)", "The Domain (78758)", "Mueller"],
      zipCodes: ["78704", "78701", "78758", "78723", "78702"],
      stats: [
        { label: "Order Processing", value: "75% Faster", description: "Austin retailers achieve" },
        { label: "Inventory Errors", value: "76% Reduced", description: "Multi-location accuracy" },
        { label: "Go-Live", value: "6 Weeks", description: "POS + E-commerce unified" },
      ],
      keyModules: ["POS", "eCommerce", "Shopify Connector"],
      strategicOutcome: "Endless aisle, saved sales",
      testimonials: [
        {
          quote: "Customer wants a size we don't have? Sell from warehouse, ship to their home. Never lose the sale.",
          author: "Brittany L.",
          role: "Owner",
          company: "South Congress Collective",
        },
        {
          quote: "Shopify handles our frontend, Odoo handles everything else. Real-time inventory sync.",
          author: "Derek C.",
          role: "Founder",
          company: "Austin Artisan Market",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for Austin Tech Services",
      heroSubtitle: "Employee Experience for Downtown Talent",
      heroDescription: "Self-service portals and helpdesk integration for ad agencies, software dev shops, and VC firms in 78701.",
      localZones: ["Downtown Austin (78701)", "The Domain", "Tech Ridge (78753)", "East Austin"],
      zipCodes: ["78701", "78758", "78753", "78702", "78759"],
      stats: [
        { label: "Time Savings", value: "50%", description: "Austin tech firms achieve" },
        { label: "Invoicing", value: "93% Faster", description: "Automated billing verified" },
        { label: "ROI", value: "150%", description: "Within 12 months verified" },
      ],
      keyModules: ["Employee", "Helpdesk", "Project", "Timesheets"],
      strategicOutcome: "Talent retention, support-to-engineering loop",
      testimonials: [
        {
          quote: "Self-service portal for time off, appraisals, expenses. Our tech-savvy team expects this.",
          author: "Nathan B.",
          role: "Managing Partner",
          company: "Austin Technology Advisors",
        },
        {
          quote: "Helpdesk tickets link to Project tasks. Bug reports go straight to engineering. Closed loop.",
          author: "Lisa H.",
          role: "CFO",
          company: "Downtown Software Co.",
        },
      ],
    },
  },

  DFW: {
    manufacturing: {
      heroTitle: "Odoo ERP for DFW Defense Manufacturers",
      heroSubtitle: "ITAR Compliance & Multi-Level BOMs",
      heroDescription: "Data security, access controls, and phantom assemblies for the aerospace and defense corridor from Fort Worth to Grand Prairie.",
      localZones: ["North Fort Worth (76106)", "White Settlement (76108)", "Grand Prairie (75050)", "Arlington"],
      zipCodes: ["76106", "76108", "75050", "75051", "76001"],
      stats: [
        { label: "Efficiency Gains", value: "50%+", description: "DFW manufacturers achieve with Odoo" },
        { label: "Multi-Site", value: "Unified", description: "All plants on one system" },
        { label: "Annual Savings", value: "$500K+", description: "Verified ROI for Metroplex operations" },
      ],
      keyModules: ["MRP", "PLM", "Access Controls", "Quality"],
      strategicOutcome: "ITAR compliance, supply chain visibility",
      testimonials: [
        {
          quote: "Granular access controls restrict engineering documents to cleared personnel only. ITAR compliant.",
          author: "William R.",
          role: "VP Operations",
          company: "DFW Defense Manufacturing",
        },
        {
          quote: "Phantom BOMs group parts for engineering without separate manufacturing orders. Streamlined.",
          author: "Patricia K.",
          role: "Plant Manager",
          company: "Alliance Corridor Industries",
        },
      ],
    },
    discreteManufacturing: {
      heroTitle: "Odoo ERP for DFW Telecom Manufacturers",
      heroSubtitle: "ECO Management for Richardson's Tech Corridor",
      heroDescription: "Rapid prototyping and obsolete inventory management for the Telecom Corridor's fast-moving hardware sector.",
      localZones: ["Richardson (75082)", "Plano Tech (75081)", "Telecom Corridor", "North Dallas"],
      zipCodes: ["75082", "75081", "75074", "75024", "75093"],
      stats: [
        { label: "Lead Time", value: "25% Faster", description: "Alliance Corridor shops achieve" },
        { label: "AS9100 Ready", value: "Built-In", description: "Aerospace compliance workflows" },
        { label: "Cost Accuracy", value: "40% Better", description: "True job margins verified" },
      ],
      keyModules: ["PLM", "MPS", "ECO Workflow"],
      strategicOutcome: "Version control, obsolete inventory prevention",
      testimonials: [
        {
          quote: "ECO workflow phases out old revisions before new ones are manufactured. Zero scrap from obsolete designs.",
          author: "Steve M.",
          role: "Quality Manager",
          company: "Richardson Tech Manufacturing",
        },
        {
          quote: "MPS lets us order long-lead-time chips months in advance. No more component shortages.",
          author: "Robert J.",
          role: "Owner",
          company: "Telecom Corridor Electronics",
        },
      ],
    },
    processManufacturing: {
      heroTitle: "Odoo ERP for DFW Chemical Manufacturers",
      heroSubtitle: "UoM Management & GHS Labeling",
      heroDescription: "Complex unit conversions and safety labeling for paint, coating, and chemical manufacturers in Garland and West Dallas.",
      localZones: ["Garland (75041)", "West Dallas (75212)", "Irving", "Grand Prairie"],
      zipCodes: ["75041", "75212", "75038", "75050", "75061"],
      stats: [
        { label: "Batch Accuracy", value: "40%+ Better", description: "North Texas processors achieve" },
        { label: "Traceability", value: "Instant", description: "Full lot genealogy in seconds" },
        { label: "TSCA Compliant", value: "100%", description: "Audit-ready documentation" },
      ],
      keyModules: ["MRP", "UoM Conversion", "Label Designer"],
      strategicOutcome: "OSHA compliance, automatic conversions",
      testimonials: [
        {
          quote: "Buy in drums, store in gallons, sell in ounces. Odoo handles the math and cost distribution.",
          author: "Daniel C.",
          role: "Operations Director",
          company: "Texas Coatings Inc.",
        },
        {
          quote: "GHS hazard pictograms on every container. Our label compliance is bulletproof.",
          author: "Karen L.",
          role: "Compliance Manager",
          company: "DFW Chemical Solutions",
        },
      ],
    },
    energyServices: {
      heroTitle: "Odoo ERP for DFW Energy Companies",
      heroSubtitle: "Lease Management for Barnett Shale Operations",
      heroDescription: "Mineral rights tracking, royalty payments, and document digitization for corporate offices managing field operations.",
      localZones: ["Fort Worth CBD (76102)", "Downtown Dallas", "Irving", "Midland (remote)"],
      zipCodes: ["76102", "75201", "75038", "75039", "76177"],
      stats: [
        { label: "Cost Savings", value: "30%", description: "DFW energy services achieve" },
        { label: "Field Service", value: "96% Faster", description: "Daily task automation results" },
        { label: "Billing Cycle", value: "3 Days", description: "Down from 3 weeks verified" },
      ],
      keyModules: ["Accounting", "Subscription", "Documents", "OCR"],
      strategicOutcome: "Lease compliance, automated royalties",
      testimonials: [
        {
          quote: "Automated royalty distributions to thousands of landowners. Tax documents generated automatically.",
          author: "Chris B.",
          role: "Operations VP",
          company: "Texas Energy Holdings",
        },
        {
          quote: "AI-powered OCR makes scanned lease agreements searchable. Landmen find documents in seconds.",
          author: "Michelle R.",
          role: "Finance Director",
          company: "DFW Oil & Gas Services",
        },
      ],
    },
    foodBeverage: {
      heroTitle: "Odoo ERP for DFW Food Distributors",
      heroSubtitle: "Cold Chain Monitoring & Vendor Compliance",
      heroDescription: "Temperature integrity tracking and supplier certification management for the South Dallas food logistics hub.",
      localZones: ["South Dallas (75236)", "Grand Prairie", "Irving", "I-20/I-35 Corridor"],
      zipCodes: ["75236", "75050", "75038", "75061", "75237"],
      stats: [
        { label: "Order Processing", value: "75% Faster", description: "DFW food producers achieve" },
        { label: "FSMA Compliant", value: "Automatic", description: "Audit-ready documentation" },
        { label: "Go-Live", value: "12 Weeks", description: "Regional scale implementation" },
      ],
      keyModules: ["Inventory", "Quality", "Vendor Portal"],
      strategicOutcome: "Cold chain integrity, supplier compliance",
      testimonials: [
        {
          quote: "Temperature monitoring integration alerts us if a freezer fails. Spoilage prevention is automatic.",
          author: "Antonio G.",
          role: "CEO",
          company: "North Texas Food Co.",
        },
        {
          quote: "Vendor Portal blocks receipts if supplier certifications expire. Quality enforced at the gate.",
          author: "Janet W.",
          role: "Quality Director",
          company: "DFW Cold Storage",
        },
      ],
    },
    distribution: {
      heroTitle: "Odoo ERP for DFW Logistics Companies",
      heroSubtitle: "Cross-Docking for America's Inland Port",
      heroDescription: "Zero-storage cross-dock workflows and intuitive barcode scanning for the DFW Airport logistics juggernaut.",
      localZones: ["Irving/Las Colinas (75038)", "DFW Airport (75261)", "Alliance Corridor", "South Dallas"],
      zipCodes: ["75038", "75261", "76177", "75207", "76051"],
      stats: [
        { label: "Fulfillment", value: "30% Faster", description: "Alliance distributors achieve" },
        { label: "Inventory Accuracy", value: "99.5%", description: "Multi-warehouse verified" },
        { label: "ERP Savings", value: "80%", description: "vs legacy systems verified" },
      ],
      keyModules: ["Cross-Docking", "Barcode", "Routes"],
      strategicOutcome: "Zero storage time, instant productivity",
      testimonials: [
        {
          quote: "Cross-dock routes bypass storage entirely. Inbound to outbound in minutes, not days.",
          author: "Richard T.",
          role: "VP Logistics",
          company: "Texas Regional Distribution",
        },
        {
          quote: "Intuitive barcode interface—temp staff productive in hours. Critical in DFW's tight labor market.",
          author: "Sandra M.",
          role: "Operations Manager",
          company: "DFW Airport Logistics",
        },
      ],
    },
    retail: {
      heroTitle: "Odoo ERP for DFW Luxury Retailers",
      heroSubtitle: "Clienteling for Southlake & West Plano",
      heroDescription: "Personalized customer profiles and omnichannel loyalty for the affluent Metroplex retail market.",
      localZones: ["Southlake (76092)", "West Plano (75093)", "Uptown Dallas (75204)", "Highland Park"],
      zipCodes: ["76092", "75093", "75204", "75205", "75225"],
      stats: [
        { label: "Multi-Store", value: "Unified", description: "All locations on one system" },
        { label: "Inventory Errors", value: "76% Reduced", description: "Multi-location accuracy" },
        { label: "Omnichannel", value: "Seamless", description: "Online + in-store unified" },
      ],
      keyModules: ["POS", "Loyalty", "CRM"],
      strategicOutcome: "Clienteling, personalized experience",
      testimonials: [
        {
          quote: "Associates see the customer's global purchase history. 'You bought that handbag—here's a matching wallet.'",
          author: "Brandon K.",
          role: "Retail Director",
          company: "Southlake Luxury Goods",
        },
        {
          quote: "Loyalty points earned in-store redeemed online. Omnichannel customers spend 30% more.",
          author: "Angela C.",
          role: "E-commerce Manager",
          company: "West Plano Fashion",
        },
      ],
    },
    professionalServices: {
      heroTitle: "Odoo ERP for DFW Corporate Headquarters",
      heroSubtitle: "Multi-Company Consolidation for Legacy West",
      heroDescription: "Real-time financial consolidation and automated inter-company transactions for Fortune 500 regional HQs.",
      localZones: ["Legacy West/Plano (75024)", "Las Colinas (75039)", "Uptown Dallas", "Fort Worth CBD"],
      zipCodes: ["75024", "75039", "75201", "75204", "76102"],
      stats: [
        { label: "Time Savings", value: "50%", description: "DFW consulting firms achieve" },
        { label: "Invoicing", value: "93% Faster", description: "Automated billing verified" },
        { label: "Utilization", value: "+17%", description: "From 65% to 82% verified" },
      ],
      keyModules: ["Multi-Company", "Inter-Company", "Consolidation"],
      strategicOutcome: "Real-time consolidation, zero reconciliation",
      testimonials: [
        {
          quote: "Subsidiaries across the US consolidated in real-time. Month-end close dropped from 2 weeks to 3 days.",
          author: "Thomas A.",
          role: "Managing Director",
          company: "Legacy West Consulting",
        },
        {
          quote: "Inter-company automation creates matching SO/PO instantly. No more manual reconciliation.",
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
export type CityIndustryWithResearch = IndustryConfig & { research?: ResearchData | null };

function titleize(label: string) {
  return label
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function statsFromResearch(research: ResearchData | null) {
  if (!research?.keyStatistics) return null;
  const stats = Object.entries(research.keyStatistics)
    .slice(0, 3)
    .map(([label, value]) => ({
      label: titleize(label),
      value,
      description: research.researchDate
        ? `Source: ${research.fileName} (${research.researchDate})`
        : `Source: ${research.fileName}`,
    }));
  return stats.length ? stats : null;
}

export function getCityIndustry(cityKey: string, industryKey: string): CityIndustryWithResearch {
  const normalizedCityKey = cityKey.toUpperCase();
  const base = industries[industryKey];

  if (!base) {
    throw new Error(`Industry not found: ${industryKey}`);
  }

  const override = cityIndustryOverrides[normalizedCityKey]?.[industryKey];
  const research = getResearchData(normalizedCityKey, industryKey);
  const researchStats = statsFromResearch(research);

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
    stats: researchStats || override.stats || base.stats,
    testimonials: override.testimonials || base.testimonials,
    keyModules: base.keyModules,
    research,
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

/**
 * Get key Odoo modules for a city/industry combination
 */
export function getKeyModules(cityKey: string, industryKey: string): string[] {
  const normalizedCityKey = cityKey.toUpperCase();
  const override = cityIndustryOverrides[normalizedCityKey]?.[industryKey];
  return override?.keyModules || [];
}

/**
 * Get strategic outcome for a city/industry combination
 */
export function getStrategicOutcome(cityKey: string, industryKey: string): string {
  const normalizedCityKey = cityKey.toUpperCase();
  const override = cityIndustryOverrides[normalizedCityKey]?.[industryKey];
  return override?.strategicOutcome || "";
}
