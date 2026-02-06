export interface ImplementationStep {
  phase: string;
  objective: string;
  icitActions: string;
  expectedImpact: string;
}

export interface ResearchEvidence {
  claim: string;
  source: string;
}

export interface ResearchData {
  title: string;
  researchDate?: string;
  summary?: string;
  headlineStats?: Record<string, string>;
  keyStatistics?: Record<string, string>;
  evidence?: ResearchEvidence[];
  implementationFocus?: string[];
  implementationSteps?: ImplementationStep[];
  sources: string[];
  fileName: string;
}

type CityKey = "HTX" | "ATX" | "DFW";
type IndustryKey =
  | "manufacturing"
  | "discreteManufacturing"
  | "processManufacturing"
  | "foodBeverage"
  | "energyServices"
  | "distribution"
  | "retail"
  | "professionalServices";

const RESEARCH_DATE = "2026-02-06";

const sources = {
  houstonAirports:
    "https://www.fly2houston.com/airport-business/newsroom/press-releases/item/houston-airports-shatters-passenger-record-with-631-million-travelers-in-2024/",
  houstonDallasFed:
    "https://www.dallasfed.org/research/indicators/hou/2025/hou2504",
  portHoustonStats: "https://porthouston.com/about/our-port/statistics/",

  austinAdvancedManufacturing:
    "https://opportunityaustin.com/economic-development/key-industries/advanced-manufacturing/",
  austinSemiconductors:
    "https://opportunityaustin.com/economic-development/key-industries/semiconductors/",
  austinCleanTech:
    "https://opportunityaustin.com/economic-development/key-industries/clean-technology/",
  austinLifeSciences:
    "https://opportunityaustin.com/economic-development/key-industries/life-sciences/",
  austinCorporateHq:
    "https://opportunityaustin.com/economic-development/key-industries/corporate-headquarters/",
  austinAirportCargo:
    "https://www.austintexas.gov/news/november-2024-passenger-cargo-traffic-austin-bergstrom-international-airport",
  austinDallasFed:
    "https://www.dallasfed.org/research/indicators/aus/2025/aus2504",

  dfwAirportPassengers:
    "https://www.dfwairport.com/dfwnewsroom/dfw-remains-worlds-third-busiest-airport-for-passenger-traffic/",
  fwSiemens:
    "https://fortworthedp.com/siemens-opens-new-190m-manufacturing-hub-in-fort-worth/",
  fwEmbraer:
    "https://fortworthedp.com/new-embraer-facility-in-fort-worth-wins-2024-impact-award/",
  fwDrinkpak:
    "https://fortworthedp.com/drinkpak-expands-with-two-new-facilities-in-the-dfw-area-bringing-1000-jobs-and-452m-capital-investment/",
  fwPanthera:
    "https://fortworthedp.com/panthera-biosolutions-opens-good-manufacturing-practices-facility-in-fort-worth/",
  fwIts:
    "https://fortworthedp.com/its-logistics-announces-new-transportation-center-in-fort-worth-texas-begins-hiring-immediately/",
  fwDicks:
    "https://fortworthedp.com/dicks-sporting-goods-to-build-advanced-distribution-center-in-fort-worth/",

  rrcRecords:
    "https://rrc.texas.gov/news/032625-production-records-press-release/",
  rrcMonthly:
    "https://www.rrc.texas.gov/oil-and-gas/research-and-statistics/production-data/texas-monthly-oil-gas-production/",
  eiaTexasElectricity:
    "https://www.eia.gov/electricity/state/texas/index.php",

  fdaTraceability:
    "https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods",
  fdaTraceabilityUpdate:
    "https://www.fda.gov/food/hfp-constituent-updates/fda-intends-extend-compliance-date-food-traceability-rule",

  censusRetail:
    "https://www.census.gov/newsroom/press-releases/2024/annual-retail-trade-survey.html",
  censusWholesale:
    "https://www.census.gov/newsroom/press-releases/2024/annual-wholesale-trade-survey.html",
  censusMonthlyRetail: "https://www.census.gov/retail/sales.html",

  beaMetroGdp:
    "https://www.bea.gov/index.php/news/2024/gross-domestic-product-county-and-metropolitan-area-2023",
  texasJobsRecord:
    "https://gov.texas.gov/news/post/texas-breaks-record-for-total-jobs-working-texans-size-of-labor-force",
  texasForecast:
    "https://www.dallasfed.org/news/releases/2025/nr250331forecast",
};

const cityProfiles: Record<
  CityKey,
  {
    name: string;
    contextSignal: string;
    executionRisk: string;
    baseSources: string[];
  }
> = {
  HTX: {
    name: "Houston",
    contextSignal:
      "Houston remains a global freight and energy gateway with record airport passenger traffic and top-tier port tonnage.",
    executionRisk:
      "Teams frequently run heavy operations with disconnected planning, warehouse, field, and accounting tools.",
    baseSources: [sources.houstonDallasFed, sources.houstonAirports, sources.portHoustonStats, sources.texasForecast],
  },
  ATX: {
    name: "Austin",
    contextSignal:
      "Austin combines advanced manufacturing growth with strong high-tech employment and continued airport cargo throughput.",
    executionRisk:
      "Rapid scaling often outpaces process discipline, creating gaps between demand planning, fulfillment, and finance.",
    baseSources: [
      sources.austinDallasFed,
      sources.austinAirportCargo,
      sources.austinAdvancedManufacturing,
      sources.austinCorporateHq,
    ],
  },
  DFW: {
    name: "Dallas-Fort Worth",
    contextSignal:
      "DFW pairs one of the world's busiest airports with dense corporate, logistics, and industrial investment activity.",
    executionRisk:
      "Multi-entity growth creates fragmented processes, delayed reporting, and inconsistent execution across sites.",
    baseSources: [sources.dfwAirportPassengers, sources.beaMetroGdp, sources.texasForecast, sources.texasJobsRecord],
  },
};

const industryProfiles: Record<
  IndustryKey,
  {
    name: string;
    sourceSignal: string;
    implementationFocus: string[];
    headlineStats: Record<string, string>;
    keyRisk: string;
    baselineSteps: ImplementationStep[];
    baseSources: string[];
  }
> = {
  manufacturing: {
    name: "Manufacturing",
    sourceSignal: "Texas jobs and metro GDP publications show continued industrial scale and output concentration.",
    implementationFocus: [
      "Connect demand planning, MRP, and purchasing in one scheduling cadence.",
      "Deploy barcode transactions to stabilize inventory accuracy and WIP visibility.",
      "Tie production costs directly to financial reporting for margin control.",
    ],
    headlineStats: {
      implementation_window: "10-14 weeks",
      first_wave_scope: "MRP + inventory + purchasing",
      target_operational_gain: "20-35% faster planning cycle",
    },
    keyRisk: "Late margin visibility from disconnected production and accounting systems.",
    baselineSteps: [
      {
        phase: "Phase 1 - Diagnostic",
        objective: "Baseline planning, inventory, and costing bottlenecks.",
        icitActions: "ICIT maps current-state workflows and defines a cutover-safe data model.",
        expectedImpact: "Clear implementation scope tied to delivery and margin KPIs.",
      },
      {
        phase: "Phase 2 - Core Build",
        objective: "Deploy MRP, inventory controls, and purchasing automation.",
        icitActions: "ICIT configures routings, replenishment, and role-based dashboards.",
        expectedImpact: "Faster schedule commits and lower stock imbalance risk.",
      },
      {
        phase: "Phase 3 - Floor Adoption",
        objective: "Digitize shop-floor execution and data capture.",
        icitActions: "ICIT rolls out barcode steps, operator training, and exception handling.",
        expectedImpact: "Higher inventory confidence and real-time WIP status.",
      },
      {
        phase: "Phase 4 - Financial Control",
        objective: "Close the loop on job costing and profitability reporting.",
        icitActions: "ICIT links manufacturing events to accounting and management reporting.",
        expectedImpact: "Improved pricing discipline and earlier correction of margin erosion.",
      },
    ],
    baseSources: [sources.texasJobsRecord, sources.beaMetroGdp],
  },
  discreteManufacturing: {
    name: "Discrete Manufacturing",
    sourceSignal: "Regional manufacturing and aerospace investment releases point to ongoing high-mix production demand.",
    implementationFocus: [
      "Enforce BOM revision control and engineering change governance.",
      "Track serialized components and subcontracted steps end-to-end.",
      "Improve quote-to-job handoff with actual labor and material feedback.",
    ],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "PLM + MRP + quality",
      target_operational_gain: "15-30% rework reduction target",
    },
    keyRisk: "Engineering and production drift creates scrap, rework, and missed due dates.",
    baselineSteps: [
      {
        phase: "Phase 1 - Engineering Control",
        objective: "Standardize item master, BOMs, and ECO approvals.",
        icitActions: "ICIT configures revision governance and effectivity rules.",
        expectedImpact: "Fewer obsolete builds and stronger design-to-floor consistency.",
      },
      {
        phase: "Phase 2 - Production Flow",
        objective: "Activate discrete work orders with routing checkpoints.",
        icitActions: "ICIT implements workstation logic and production status boards.",
        expectedImpact: "Higher schedule reliability and cleaner resource utilization.",
      },
      {
        phase: "Phase 3 - Traceability",
        objective: "Capture serial and lot data across operations and vendors.",
        icitActions: "ICIT enables scanning at issue, build, test, and shipment steps.",
        expectedImpact: "Faster root-cause analysis and warranty response.",
      },
      {
        phase: "Phase 4 - Margin Loop",
        objective: "Feed actuals back into quote and planning assumptions.",
        icitActions: "ICIT aligns quoting, purchasing, and accounting controls.",
        expectedImpact: "Stronger quote accuracy and predictable gross margins.",
      },
    ],
    baseSources: [sources.texasJobsRecord, sources.beaMetroGdp],
  },
  processManufacturing: {
    name: "Process Manufacturing",
    sourceSignal: "FDA traceability rules and Texas production reporting reinforce process control and documentation requirements.",
    implementationFocus: [
      "Control formulas and batch instructions with governed approvals.",
      "Enable lot genealogy and quality gate traceability across the process chain.",
      "Automate compliance records and deviation management.",
    ],
    headlineStats: {
      implementation_window: "10-14 weeks",
      first_wave_scope: "formulas + quality + traceability",
      target_operational_gain: "audit prep cycle materially reduced",
    },
    keyRisk: "Compliance exposure and yield loss from manual batch and quality documentation.",
    baselineSteps: [
      {
        phase: "Phase 1 - Formula Governance",
        objective: "Define approved recipes, UoM conversions, and versioning.",
        icitActions: "ICIT configures controlled formula lifecycle and role permissions.",
        expectedImpact: "Reduced batch variability and stronger process repeatability.",
      },
      {
        phase: "Phase 2 - Batch Execution",
        objective: "Digitize production orders, checkpoints, and holds.",
        icitActions: "ICIT implements in-process quality checks and exception workflows.",
        expectedImpact: "Faster deviation detection and reduced nonconformance cost.",
      },
      {
        phase: "Phase 3 - Traceability",
        objective: "Provide full genealogy for inputs, intermediates, and outputs.",
        icitActions: "ICIT configures lot tracing and recall-ready query paths.",
        expectedImpact: "Faster investigations and stronger customer assurance.",
      },
      {
        phase: "Phase 4 - Compliance Automation",
        objective: "Automate records for audits and customer requirements.",
        icitActions: "ICIT links quality, production, and document control in Odoo.",
        expectedImpact: "Lower audit risk and less manual compliance overhead.",
      },
    ],
    baseSources: [sources.fdaTraceability, sources.fdaTraceabilityUpdate],
  },
  foodBeverage: {
    name: "Food & Beverage",
    sourceSignal: "FDA food traceability guidance and updates continue to elevate lot-level recordkeeping expectations.",
    implementationFocus: [
      "Implement FEFO inventory and cold-chain-sensitive handling rules.",
      "Operationalize lot-level traceability for rapid recall response.",
      "Align procurement, production, and fulfillment to reduce spoilage and shortages.",
    ],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "inventory + quality + lots",
      target_operational_gain: "faster recall and lower spoilage risk",
    },
    keyRisk: "Food safety and margin pressure rise quickly when traceability and inventory discipline are weak.",
    baselineSteps: [
      {
        phase: "Phase 1 - Safety Baseline",
        objective: "Document traceability-critical events and lot policies.",
        icitActions: "ICIT maps receiving, production, and shipping controls for FTL items.",
        expectedImpact: "Clear compliance baseline and lower recall response uncertainty.",
      },
      {
        phase: "Phase 2 - Warehouse Discipline",
        objective: "Deploy FEFO/lot controls across warehouse and production picks.",
        icitActions: "ICIT configures expiry rules, locations, and mobile execution.",
        expectedImpact: "Lower spoilage and better service-level consistency.",
      },
      {
        phase: "Phase 3 - Quality Integration",
        objective: "Move HACCP and QC checks into live operations.",
        icitActions: "ICIT ties quality holds and releases directly to stock availability.",
        expectedImpact: "Reduced quality escapes and faster disposition cycles.",
      },
      {
        phase: "Phase 4 - Recall Readiness",
        objective: "Establish rapid lot tracing and incident workflows.",
        icitActions: "ICIT validates mock recalls and dashboard reporting with stakeholders.",
        expectedImpact: "Improved response speed and stronger customer trust.",
      },
    ],
    baseSources: [sources.fdaTraceability, sources.fdaTraceabilityUpdate],
  },
  energyServices: {
    name: "Energy Services",
    sourceSignal: "Texas RRC and EIA datasets continue to show high energy output and infrastructure scale.",
    implementationFocus: [
      "Connect field execution, parts usage, and billing in one operating model.",
      "Track high-value equipment lifecycle across jobs and locations.",
      "Improve project-level profitability with near real-time cost capture.",
    ],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "field service + projects + finance",
      target_operational_gain: "faster field-to-invoice cycle",
    },
    keyRisk: "Cash flow and margin suffer when field work and invoicing remain disconnected.",
    baselineSteps: [
      {
        phase: "Phase 1 - Service Model",
        objective: "Define work order, dispatch, and asset data standards.",
        icitActions: "ICIT configures service templates and mobile field capture.",
        expectedImpact: "Cleaner execution data and fewer billing disputes.",
      },
      {
        phase: "Phase 2 - Project Costing",
        objective: "Link labor, materials, and subcontract costs to jobs.",
        icitActions: "ICIT aligns field transactions to analytic accounting structures.",
        expectedImpact: "Timely profitability visibility by crew and contract.",
      },
      {
        phase: "Phase 3 - Asset Control",
        objective: "Track fleet/equipment status and preventive maintenance windows.",
        icitActions: "ICIT deploys lifecycle workflows and exception alerts.",
        expectedImpact: "Lower downtime and improved equipment utilization.",
      },
      {
        phase: "Phase 4 - Revenue Assurance",
        objective: "Automate invoicing triggers from completed field activity.",
        icitActions: "ICIT implements approval gates and billing automation rules.",
        expectedImpact: "Shorter DSO and stronger cash conversion.",
      },
    ],
    baseSources: [sources.rrcRecords, sources.rrcMonthly, sources.eiaTexasElectricity],
  },
  distribution: {
    name: "Distribution",
    sourceSignal: "Census wholesale reporting and major Texas logistics hubs indicate sustained throughput pressure.",
    implementationFocus: [
      "Run multi-site inventory with barcode-driven execution accuracy.",
      "Automate inbound landed cost and outbound fulfillment workflows.",
      "Improve dock-to-stock and order-to-ship velocity.",
    ],
    headlineStats: {
      implementation_window: "8-10 weeks",
      first_wave_scope: "inventory + warehouse + shipping",
      target_operational_gain: "higher pick accuracy and throughput",
    },
    keyRisk: "Throughput volatility and margin leaks increase when warehouse, purchasing, and freight data are fragmented.",
    baselineSteps: [
      {
        phase: "Phase 1 - Warehouse Blueprint",
        objective: "Model locations, putaway rules, and order profiles.",
        icitActions: "ICIT configures warehouse logic and role-based workflows.",
        expectedImpact: "More predictable pick paths and labor utilization.",
      },
      {
        phase: "Phase 2 - Inbound Control",
        objective: "Digitize receiving, landed costs, and replenishment signals.",
        icitActions: "ICIT links procurement, receiving, and valuation rules.",
        expectedImpact: "Improved margin visibility at receipt.",
      },
      {
        phase: "Phase 3 - Outbound Automation",
        objective: "Standardize pick-pack-ship and route assignment.",
        icitActions: "ICIT enables scanning, shipment validation, and carrier integrations.",
        expectedImpact: "Higher shipment accuracy and lower service exceptions.",
      },
      {
        phase: "Phase 4 - Control Tower",
        objective: "Provide live dashboards for inventory, SLA, and fill-rate performance.",
        icitActions: "ICIT delivers management KPIs and exception-based alerts.",
        expectedImpact: "Faster intervention on bottlenecks and service risk.",
      },
    ],
    baseSources: [sources.censusWholesale, sources.portHoustonStats, sources.dfwAirportPassengers],
  },
  retail: {
    name: "Retail",
    sourceSignal: "Census annual and monthly retail releases show large, fast-moving demand that requires tighter stock control.",
    implementationFocus: [
      "Unify POS, ecommerce, and inventory to prevent channel conflicts.",
      "Strengthen replenishment and markdown decisions with clean margin data.",
      "Improve customer lifetime value through integrated CRM and loyalty workflows.",
    ],
    headlineStats: {
      implementation_window: "6-10 weeks",
      first_wave_scope: "POS + ecommerce + inventory",
      target_operational_gain: "faster stock sync and lower stockout risk",
    },
    keyRisk: "Omnichannel growth underperforms when stock, pricing, and customer data are inconsistent.",
    baselineSteps: [
      {
        phase: "Phase 1 - Commerce Baseline",
        objective: "Align product, pricing, and tax logic across channels.",
        icitActions: "ICIT standardizes catalog governance and channel policies.",
        expectedImpact: "Consistent customer experience and fewer order defects.",
      },
      {
        phase: "Phase 2 - Inventory Unification",
        objective: "Implement centralized stock truth for store and online demand.",
        icitActions: "ICIT deploys transfer rules, reorder logic, and cycle count controls.",
        expectedImpact: "Lower oversell/stockout incidents and better availability.",
      },
      {
        phase: "Phase 3 - Frontline Adoption",
        objective: "Enable fast POS workflows and assisted selling insights.",
        icitActions: "ICIT delivers role-based store training and operational playbooks.",
        expectedImpact: "Improved conversion and checkout productivity.",
      },
      {
        phase: "Phase 4 - Commercial Analytics",
        objective: "Operationalize margin and basket analytics for merchandising decisions.",
        icitActions: "ICIT configures KPI dashboards for store, channel, and product views.",
        expectedImpact: "Higher gross margin discipline and stronger replenishment quality.",
      },
    ],
    baseSources: [sources.censusRetail, sources.censusMonthlyRetail],
  },
  professionalServices: {
    name: "Professional Services",
    sourceSignal: "Metro GDP and statewide labor records support continued growth in high-skill service activity.",
    implementationFocus: [
      "Link project delivery, timesheets, and billing to eliminate revenue leakage.",
      "Improve resource planning and utilization across teams and business units.",
      "Shorten close cycles with integrated project accounting.",
    ],
    headlineStats: {
      implementation_window: "6-10 weeks",
      first_wave_scope: "projects + timesheets + invoicing",
      target_operational_gain: "faster billing and utilization visibility",
    },
    keyRisk: "Delayed invoicing and low utilization transparency erode profit in high-labor businesses.",
    baselineSteps: [
      {
        phase: "Phase 1 - Commercial Model",
        objective: "Define billable rules, engagement structures, and approval gates.",
        icitActions: "ICIT configures project templates and contract-to-bill workflows.",
        expectedImpact: "Reduced scope leakage and clearer engagement economics.",
      },
      {
        phase: "Phase 2 - Delivery Operations",
        objective: "Standardize time capture, milestones, and task governance.",
        icitActions: "ICIT deploys role-specific delivery workflows and alerts.",
        expectedImpact: "Better utilization control and delivery predictability.",
      },
      {
        phase: "Phase 3 - Revenue Capture",
        objective: "Automate billing events and supporting documentation.",
        icitActions: "ICIT links approved work to invoice generation and review steps.",
        expectedImpact: "Shorter invoice cycle times and fewer write-offs.",
      },
      {
        phase: "Phase 4 - Portfolio Visibility",
        objective: "Provide real-time profitability and pipeline-to-delivery analytics.",
        icitActions: "ICIT builds executive dashboards and governance cadences.",
        expectedImpact: "Stronger pricing, staffing, and growth decisions.",
      },
    ],
    baseSources: [sources.beaMetroGdp, sources.texasJobsRecord],
  },
};

interface ComboInsight {
  summary: string;
  localSignal: string;
  problemAtHand: string;
  icitOutcome: string;
  localSources: string[];
  implementationFocus?: string[];
  headlineStats?: Record<string, string>;
}

const comboInsights: Record<`${CityKey}:${IndustryKey}`, ComboInsight> = {
  "HTX:manufacturing": {
    summary:
      "Houston manufacturers face high-volume demand tied to port and energy activity. ICIT can implement Odoo in controlled phases so planning, inventory, and costing run as one operating system instead of disconnected spreadsheets.",
    localSignal:
      "Houston Airports reported 63.1 million passengers and 552,330 metric tons of cargo in 2024, while Port Houston remains the top U.S. port in foreign waterborne tonnage.",
    problemAtHand:
      "Production commitments are often made before true material and labor availability are visible.",
    icitOutcome:
      "ICIT deployment of MRP, barcode inventory, and finance integration improves schedule confidence and protects margin at shipment.",
    localSources: [sources.houstonAirports, sources.portHoustonStats, sources.houstonDallasFed],
  },
  "HTX:discreteManufacturing": {
    summary:
      "Houston discrete manufacturers must coordinate engineering changes and serialized builds under tight lead-time pressure. ICIT uses Odoo to enforce BOM governance and real-time floor traceability so revisions do not translate into rework.",
    localSignal:
      "Dallas Fed data shows mixed sector momentum in Houston, raising the cost of execution errors in fabrication and component production.",
    problemAtHand:
      "ECO decisions and shop-floor instructions are frequently out of sync across teams.",
    icitOutcome:
      "ICIT implements PLM-to-production controls, serialized tracking, and margin feedback loops that reduce scrap and quote variance.",
    localSources: [sources.houstonDallasFed, sources.portHoustonStats, sources.texasJobsRecord],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "PLM + ECO + traceability",
      target_operational_gain: "lower revision-driven rework",
    },
  },
  "HTX:processManufacturing": {
    summary:
      "Houston process operators work in a compliance-heavy environment where traceability gaps can become major financial events. ICIT configures Odoo for formula control, lot genealogy, and exception-driven quality workflows.",
    localSignal:
      "Texas set new oil and gas production records in 2024, reinforcing Gulf Coast process throughput and reporting complexity.",
    problemAtHand:
      "Batch records, quality checks, and release decisions are often fragmented between documents and spreadsheets.",
    icitOutcome:
      "ICIT implementation reduces compliance exposure by unifying batch execution, quality holds, and audit evidence in one platform.",
    localSources: [sources.rrcRecords, sources.rrcMonthly, sources.houstonDallasFed],
  },
  "HTX:foodBeverage": {
    summary:
      "Houston food and beverage operators depend on fast, accurate lot movement across production and distribution channels. ICIT uses Odoo to build FEFO discipline and recall-ready traceability into daily execution.",
    localSignal:
      "Houston's port and airport cargo footprint amplifies the need for robust inventory and traceability controls in perishable supply chains.",
    problemAtHand:
      "Manual lot tracking increases recall risk and spoilage cost as order velocity rises.",
    icitOutcome:
      "ICIT can deploy lot/expiry workflows, quality checkpoints, and recall drill reporting to improve readiness and reduce waste.",
    localSources: [sources.fdaTraceability, sources.houstonAirports, sources.portHoustonStats],
  },
  "HTX:energyServices": {
    summary:
      "Houston energy service firms need tighter connection between field work, equipment usage, and invoicing. ICIT implements Odoo so dispatch, projects, inventory, and billing share the same operational truth.",
    localSignal:
      "Texas crossed 2.0 billion barrels of annual oil production in 2024 and remains the nation's largest electricity producer.",
    problemAtHand:
      "Service execution data is frequently posted late to finance, delaying billing and masking project profitability.",
    icitOutcome:
      "ICIT can shorten the field-to-cash cycle by automating service completion, cost capture, and invoice triggers.",
    localSources: [sources.rrcRecords, sources.eiaTexasElectricity, sources.houstonDallasFed],
  },
  "HTX:distribution": {
    summary:
      "Houston distribution teams operate in a high-throughput multimodal network tied to port and airport flows. ICIT configures Odoo warehouse and shipping operations to improve dock-to-stock speed and shipment accuracy.",
    localSignal:
      "Port Houston and Houston Airports continue to report major freight activity, creating both opportunity and execution pressure.",
    problemAtHand:
      "Receiving, landed costs, and fulfillment are often managed in disconnected systems with delayed exception visibility.",
    icitOutcome:
      "ICIT implementation unifies receiving, valuation, and outbound controls to protect margin and service levels.",
    localSources: [sources.portHoustonStats, sources.houstonAirports, sources.censusWholesale],
  },
  "HTX:retail": {
    summary:
      "Houston retailers need synchronized store and digital operations to protect margin in a large, dynamic consumer market. ICIT implements Odoo POS, inventory, and ecommerce workflows to eliminate channel conflict.",
    localSignal:
      "National retail sales and monthly trade data show continued scale and volatility, requiring disciplined inventory and pricing controls.",
    problemAtHand:
      "Teams often cannot reconcile channel inventory, markdown actions, and true product profitability quickly enough.",
    icitOutcome:
      "ICIT can centralize stock truth and automate replenishment/transfer logic so sales opportunities are not lost to data lag.",
    localSources: [sources.censusRetail, sources.censusMonthlyRetail, sources.houstonDallasFed],
  },
  "HTX:professionalServices": {
    summary:
      "Houston professional services firms often manage utilization and billing in fragmented systems that hide leakage. ICIT deploys Odoo project accounting to connect delivery activity directly to invoicing and profitability.",
    localSignal:
      "Houston labor indicators show uneven sector performance, increasing the cost of low utilization and delayed collections.",
    problemAtHand:
      "Billable work is captured late, approvals stall, and month-end reporting arrives after corrective action windows.",
    icitOutcome:
      "ICIT implementation creates real-time visibility into utilization, WIP, and billing backlog for faster management action.",
    localSources: [sources.houstonDallasFed, sources.beaMetroGdp, sources.texasJobsRecord],
  },

  "ATX:manufacturing": {
    summary:
      "Austin manufacturing growth rewards teams that can scale operations without process debt. ICIT implements Odoo to connect planning, supply, and financial control before complexity overwhelms execution.",
    localSignal:
      "Opportunity Austin reports 240+ advanced manufacturing companies and 50,000+ related employees in the region.",
    problemAtHand:
      "High-growth plants outpace their planning and inventory controls, creating avoidable expedite and quality costs.",
    icitOutcome:
      "ICIT can stand up a phased operating model that keeps production decisions aligned with inventory truth and margin targets.",
    localSources: [sources.austinAdvancedManufacturing, sources.austinDallasFed, sources.austinAirportCargo],
  },
  "ATX:discreteManufacturing": {
    summary:
      "Austin's semiconductor and electronics ecosystem requires disciplined revision control and high-velocity execution. ICIT uses Odoo to align PLM, MRP, and quality workflows around actual floor constraints.",
    localSignal:
      "Opportunity Austin highlights 180+ semiconductor-related companies and 63,000+ employees in the ecosystem.",
    problemAtHand:
      "Engineering changes and procurement decisions are often disconnected from live capacity and component risk.",
    icitOutcome:
      "ICIT implementation improves ECO governance and serialized tracking so design updates move safely into production.",
    localSources: [sources.austinSemiconductors, sources.austinAdvancedManufacturing, sources.austinDallasFed],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "PLM + MRP + quality",
      target_operational_gain: "stronger revision discipline",
    },
  },
  "ATX:processManufacturing": {
    summary:
      "Austin process manufacturers in biotech and health-adjacent operations need robust batch and quality governance. ICIT deploys Odoo to formalize formula control, lot genealogy, and compliant release workflows.",
    localSignal:
      "Opportunity Austin reports 300+ life sciences companies and 24,000+ life sciences employees in the region.",
    problemAtHand:
      "Quality and production records are difficult to reconcile quickly during customer or regulator reviews.",
    icitOutcome:
      "ICIT implementation creates traceable, auditable process execution with faster deviation response.",
    localSources: [sources.austinLifeSciences, sources.fdaTraceability, sources.austinDallasFed],
  },
  "ATX:foodBeverage": {
    summary:
      "Austin food and beverage brands scaling from local to regional channels must preserve traceability and freshness. ICIT configures Odoo for FEFO, quality checkpoints, and lot-level recall readiness.",
    localSignal:
      "Austin airport cargo volumes and regional growth patterns increase pressure on fulfillment speed and product integrity.",
    problemAtHand:
      "Manual handoffs between production, warehouse, and order fulfillment introduce quality and expiry risk.",
    icitOutcome:
      "ICIT can implement lot-driven workflows and exception dashboards that reduce spoilage and accelerate response.",
    localSources: [sources.austinAirportCargo, sources.fdaTraceability, sources.austinDallasFed],
  },
  "ATX:energyServices": {
    summary:
      "Austin energy service firms in clean-tech and distributed systems need tighter quote-to-service execution. ICIT implements Odoo to unify sales, projects, field work, inventory, and billing.",
    localSignal:
      "Opportunity Austin reports 250+ clean technology companies and 60,000+ clean-tech employees, with Austin Energy's carbon-free mix highlighted at 65%.",
    problemAtHand:
      "Project, crew, and parts data are often fragmented, slowing install cycles and delaying invoicing.",
    icitOutcome:
      "ICIT deployment improves schedule reliability and shortens cash conversion through integrated field and finance workflows.",
    localSources: [sources.austinCleanTech, sources.eiaTexasElectricity, sources.austinDallasFed],
  },
  "ATX:distribution": {
    summary:
      "Austin distribution teams supporting rapid regional delivery need tighter warehouse and transport orchestration. ICIT configures Odoo to synchronize inventory, routing, and order release decisions.",
    localSignal:
      "Austin airport cargo throughput and regional growth continue to support higher order velocity expectations.",
    problemAtHand:
      "Inventory and route planning decisions are often based on stale data from multiple systems.",
    icitOutcome:
      "ICIT implementation enables real-time stock and fulfillment visibility, improving throughput and service consistency.",
    localSources: [sources.austinAirportCargo, sources.censusWholesale, sources.austinDallasFed],
  },
  "ATX:retail": {
    summary:
      "Austin retailers competing across storefront and digital channels need one operational truth for stock and customer data. ICIT implements Odoo to unify omnichannel execution and profitability reporting.",
    localSignal:
      "U.S. retail trade data and Austin's growth profile reinforce the need for disciplined inventory and demand orchestration.",
    problemAtHand:
      "Merchandising and store operations often react too slowly because channel data is fragmented.",
    icitOutcome:
      "ICIT can deploy connected POS, ecommerce, and replenishment controls that improve availability and markdown decisions.",
    localSources: [sources.censusRetail, sources.censusMonthlyRetail, sources.austinCorporateHq],
  },
  "ATX:professionalServices": {
    summary:
      "Austin professional services firms scale quickly but often outgrow manual utilization and billing workflows. ICIT implements Odoo project operations to tighten delivery-to-cash control.",
    localSignal:
      "Opportunity Austin reports 80+ HQ relocations and 45 publicly traded companies headquartered in the region.",
    problemAtHand:
      "Rapid growth creates inconsistent project governance and delayed invoice cycles across teams.",
    icitOutcome:
      "ICIT deployment aligns project execution, timesheets, approvals, and invoicing for more predictable revenue capture.",
    localSources: [sources.austinCorporateHq, sources.austinDallasFed, sources.beaMetroGdp],
  },

  "DFW:manufacturing": {
    summary:
      "DFW manufacturing leaders are scaling advanced production capacity across the metroplex. ICIT implements Odoo to standardize planning, execution, and financial control across multi-site operations.",
    localSignal:
      "Fort Worth announced major manufacturing expansions including Siemens' $190M hub with substantial new job creation.",
    problemAtHand:
      "Site-level systems and manual reporting delay cross-plant decisions and hide emerging constraints.",
    icitOutcome:
      "ICIT can unify production and costing workflows so leaders manage capacity, quality, and margin from one platform.",
    localSources: [sources.fwSiemens, sources.dfwAirportPassengers, sources.texasForecast],
  },
  "DFW:discreteManufacturing": {
    summary:
      "DFW discrete manufacturers in aerospace and complex equipment operate under tight quality and revision requirements. ICIT deploys Odoo to govern engineering changes, serialized execution, and supplier coordination.",
    localSignal:
      "Regional aerospace momentum includes Embraer facility investment and continued industrial expansion in Fort Worth.",
    problemAtHand:
      "Revision and compliance controls are frequently disconnected from daily shop-floor execution.",
    icitOutcome:
      "ICIT implementation links PLM, quality checkpoints, and production traceability to reduce rework and audit risk.",
    localSources: [sources.fwEmbraer, sources.fwSiemens, sources.texasForecast],
    headlineStats: {
      implementation_window: "8-12 weeks",
      first_wave_scope: "ECO + serial traceability",
      target_operational_gain: "lower compliance rework",
    },
  },
  "DFW:processManufacturing": {
    summary:
      "DFW process manufacturers in chemicals and life-science-adjacent production require resilient compliance operations. ICIT configures Odoo to control batch records, quality holds, and traceability evidence.",
    localSignal:
      "Fort Worth's GMP infrastructure growth, including Panthera's facility launch, signals increasing process and quality sophistication.",
    problemAtHand:
      "Process and quality data fragmentation slows deviation resolution and increases release risk.",
    icitOutcome:
      "ICIT deployment provides governed formula execution and audit-ready documentation at the lot level.",
    localSources: [sources.fwPanthera, sources.fdaTraceability, sources.texasForecast],
  },
  "DFW:foodBeverage": {
    summary:
      "DFW food and beverage operations are expanding with larger contract manufacturing and distribution footprints. ICIT implements Odoo to enforce lot integrity, FEFO execution, and supplier quality compliance.",
    localSignal:
      "DrinkPAK's multi-facility DFW expansion highlights ongoing regional growth in packaged beverage production.",
    problemAtHand:
      "As output scales, manual lot and quality processes create unacceptable recall and service risk.",
    icitOutcome:
      "ICIT can operationalize traceability and quality workflows that keep growth aligned with food safety performance.",
    localSources: [sources.fwDrinkpak, sources.fdaTraceability, sources.texasForecast],
  },
  "DFW:energyServices": {
    summary:
      "DFW energy services organizations coordinating corporate and field execution need stronger cost-to-cash visibility. ICIT uses Odoo to connect projects, assets, service delivery, and invoicing.",
    localSignal:
      "Texas energy output remains at record levels while DFW continues to add major employment and business infrastructure.",
    problemAtHand:
      "Operational and financial systems often diverge, delaying billing and obscuring contract profitability.",
    icitOutcome:
      "ICIT implementation builds a single operational ledger from dispatch through invoice, improving cash and margin control.",
    localSources: [sources.rrcRecords, sources.eiaTexasElectricity, sources.texasForecast],
  },
  "DFW:distribution": {
    summary:
      "DFW distribution networks operate at national scale and require high-speed, low-error execution. ICIT implements Odoo warehouse, inventory, and transport workflows to improve throughput without losing control.",
    localSignal:
      "DFW remains the world's No. 3 airport for passenger traffic and continues to add major distribution and 3PL infrastructure.",
    problemAtHand:
      "Cross-dock, fulfillment, and inventory processes are often managed across tools that do not share real-time exceptions.",
    icitOutcome:
      "ICIT can deploy a unified warehouse operating model that improves fill rates, accuracy, and labor productivity.",
    localSources: [sources.dfwAirportPassengers, sources.fwIts, sources.fwDicks],
  },
  "DFW:retail": {
    summary:
      "DFW retailers serving complex metro demand need unified stock, pricing, and customer operations across channels. ICIT implements Odoo to coordinate store operations and digital commerce from one data model.",
    localSignal:
      "Regional logistics strength and national retail demand patterns increase the value of real-time inventory and margin control.",
    problemAtHand:
      "Store teams and ecommerce teams frequently act on different inventory and promotion data.",
    icitOutcome:
      "ICIT deployment can reduce channel conflicts and improve conversion by synchronizing inventory, POS, and fulfillment logic.",
    localSources: [sources.censusRetail, sources.censusMonthlyRetail, sources.dfwAirportPassengers],
  },
  "DFW:professionalServices": {
    summary:
      "DFW professional services and headquarters organizations need tighter governance across projects, entities, and finance. ICIT implements Odoo to consolidate operations and accelerate decision-quality reporting.",
    localSignal:
      "Regional labor and forecast publications point to continued growth pressure on DFW professional service operations.",
    problemAtHand:
      "Multi-office delivery organizations often rely on delayed consolidations and manual reconciliation.",
    icitOutcome:
      "ICIT can implement multi-company project accounting and billing controls to improve utilization and close speed.",
    localSources: [sources.beaMetroGdp, sources.texasForecast, sources.texasJobsRecord],
  },
};

const cityKeys: CityKey[] = ["HTX", "ATX", "DFW"];
const industryKeys: IndustryKey[] = [
  "manufacturing",
  "discreteManufacturing",
  "processManufacturing",
  "foodBeverage",
  "energyServices",
  "distribution",
  "retail",
  "professionalServices",
];

function dedupeSources(sourceList: string[]): string[] {
  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const src of sourceList) {
    if (!seen.has(src)) {
      seen.add(src);
      deduped.push(src);
    }
  }
  return deduped;
}

function buildResearchProfile(cityKey: CityKey, industryKey: IndustryKey): ResearchData {
  const city = cityProfiles[cityKey];
  const industry = industryProfiles[industryKey];
  const insight = comboInsights[`${cityKey}:${industryKey}`];
  const verificationEvidence: ResearchEvidence[] = [
    { claim: insight.localSignal, source: insight.localSources[0] },
    { claim: city.contextSignal, source: city.baseSources[0] },
    { claim: industry.sourceSignal, source: industry.baseSources[0] },
  ];

  return {
    title: `${city.name} ${industry.name} Implementation Research Profile`,
    researchDate: RESEARCH_DATE,
    summary: insight.summary,
    headlineStats: {
      local_evidence_links: `${insight.localSources.length} local sources`,
      city_evidence_links: `${city.baseSources.length} city sources`,
      industry_evidence_links: `${industry.baseSources.length} industry sources`,
    },
    keyStatistics: {
      city_market_signal: insight.localSignal,
      city_execution_context: city.contextSignal,
      industry_source_signal: industry.sourceSignal,
    },
    evidence: verificationEvidence,
    implementationFocus: insight.implementationFocus || industry.implementationFocus,
    implementationSteps: industry.baselineSteps,
    sources: dedupeSources([
      ...insight.localSources,
      ...city.baseSources,
      ...industry.baseSources,
      sources.texasJobsRecord,
    ]),
    fileName: `research-${cityKey.toLowerCase()}-${industryKey}.json`,
  };
}

const researchMap: Record<string, ResearchData> = {};
for (const cityKey of cityKeys) {
  for (const industryKey of industryKeys) {
    researchMap[`${cityKey}:${industryKey}`] = buildResearchProfile(cityKey, industryKey);
  }
}

export function isGeneratedResearch(research: ResearchData | null | undefined): boolean {
  return Boolean(research?.fileName?.startsWith("generated-"));
}

export function getResearchData(cityKey: string, industryKey: string): ResearchData | null {
  const normalizedCity = cityKey.toUpperCase();
  const key = `${normalizedCity}:${industryKey}`;
  return researchMap[key] || null;
}
