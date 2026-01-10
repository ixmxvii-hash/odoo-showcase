export interface SolutionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionUseCase {
  industry: string;
  scenario: string;
  benefit: string;
}

export interface SolutionIntegration {
  name: string;
  icon: string;
  description: string;
}

export interface SolutionConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroVideo?: string;
  color: "orange" | "blue" | "purple" | "green" | "red" | "yellow" | "indigo" | "pink" | "teal";
  features: SolutionFeature[];
  useCases: SolutionUseCase[];
  integrations: SolutionIntegration[];
  benefits: {
    stat: string;
    label: string;
  }[];
  keyCapabilities: string[];
}

export const solutions: Record<string, SolutionConfig> = {
  sales: {
    id: "sales",
    name: "Sales",
    slug: "sales",
    tagline: "Quote to Cash, Simplified",
    heroTitle: "Sales Orders Made Easy",
    heroSubtitle: "Quotes, Orders & Fulfillment",
    heroDescription: "Create professional quotes, convert to orders, and track fulfillment—all in one seamless flow.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/sales/manage_01.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_sales.webm",
    color: "orange",
    features: [
      {
        icon: "FileText",
        title: "Professional Quotes",
        description: "Beautiful quote templates. Add products, apply discounts, send for approval.",
      },
      {
        icon: "ShoppingCart",
        title: "Order Management",
        description: "Convert quotes to orders with one click. Track status through fulfillment.",
      },
      {
        icon: "DollarSign",
        title: "Flexible Pricing",
        description: "Pricelists, discounts, promotions. Customer-specific pricing made easy.",
      },
      {
        icon: "Package",
        title: "Delivery Tracking",
        description: "See order status. Know what's shipped, what's pending.",
      },
      {
        icon: "FileSignature",
        title: "E-Signature",
        description: "Get quotes signed online. Close deals faster.",
      },
      {
        icon: "Repeat",
        title: "Recurring Sales",
        description: "Subscription orders and recurring invoicing automated.",
      },
    ],
    useCases: [
      {
        industry: "Distribution",
        scenario: "High-volume order processing with custom pricing",
        benefit: "Process 10x more orders with same team",
      },
      {
        industry: "Manufacturing",
        scenario: "Configure-to-order with BOM variants",
        benefit: "Quote complex products in minutes",
      },
      {
        industry: "Services",
        scenario: "Proposal to project workflow",
        benefit: "Won deals become projects automatically",
      },
    ],
    integrations: [
      { name: "Inventory", icon: "Package", description: "Check stock while quoting" },
      { name: "Accounting", icon: "Calculator", description: "Orders flow to invoices" },
      { name: "Manufacturing", icon: "Factory", description: "Orders trigger production" },
    ],
    benefits: [
      { stat: "40%", label: "Faster Quotes" },
      { stat: "25%", label: "Higher Close Rate" },
      { stat: "100%", label: "Order Visibility" },
    ],
    keyCapabilities: [
      "Quote templates",
      "Discount rules",
      "Product configurator",
      "Upselling suggestions",
      "Margin analysis",
      "Sales targets",
    ],
  },

  crm: {
    id: "crm",
    name: "CRM",
    slug: "crm",
    tagline: "Close More Deals",
    heroTitle: "Turn Leads into Revenue",
    heroSubtitle: "Pipeline & Relationship Management",
    heroDescription: "Track every lead, nurture relationships, and close deals faster with visual pipeline management.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/crm/hero_image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_CRM.webm",
    color: "purple",
    features: [
      {
        icon: "Users",
        title: "Lead Management",
        description: "Capture leads from web, email, and events. Score and route automatically.",
      },
      {
        icon: "TrendingUp",
        title: "Visual Pipeline",
        description: "Kanban boards for every stage. Drag deals, see progress at a glance.",
      },
      {
        icon: "Mail",
        title: "Email Integration",
        description: "Gmail & Outlook sync. Log every conversation automatically.",
      },
      {
        icon: "Calendar",
        title: "Activity Scheduling",
        description: "Plan calls, meetings, tasks. Get reminders. Hit every deadline.",
      },
      {
        icon: "BarChart",
        title: "Sales Forecasting",
        description: "Predict revenue by stage, rep, or period. Data-driven decisions.",
      },
      {
        icon: "Phone",
        title: "VoIP Integration",
        description: "Click-to-call from any record. Log calls automatically.",
      },
    ],
    useCases: [
      {
        industry: "Professional Services",
        scenario: "Track retainer renewals and upsell opportunities",
        benefit: "30% increase in account expansion",
      },
      {
        industry: "Manufacturing",
        scenario: "Long sales cycles with multiple stakeholders",
        benefit: "Never lose track of complex deals",
      },
      {
        industry: "Technology",
        scenario: "Lead scoring and automated nurturing",
        benefit: "Sales focuses on hot leads only",
      },
    ],
    integrations: [
      { name: "Sales", icon: "ShoppingCart", description: "Opportunities become quotes" },
      { name: "Email Marketing", icon: "Mail", description: "Nurture leads at scale" },
      { name: "Calendar", icon: "Calendar", description: "Sync meetings and calls" },
    ],
    benefits: [
      { stat: "35%", label: "More Closed Deals" },
      { stat: "100%", label: "Pipeline Visibility" },
      { stat: "50%", label: "Faster Follow-ups" },
    ],
    keyCapabilities: [
      "Lead scoring",
      "Custom pipelines",
      "Email templates",
      "Mobile CRM app",
      "Activity tracking",
      "Lost reason analysis",
    ],
  },

  invoicing: {
    id: "invoicing",
    name: "Invoicing",
    slug: "invoicing",
    tagline: "Get Paid Faster",
    heroTitle: "Invoicing That Works",
    heroSubtitle: "Professional Invoices & Payment Tracking",
    heroDescription: "Create and send invoices in seconds. Track payments, automate reminders, and get paid on time.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/invoicing/hero_image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_invoicing.webm",
    color: "yellow",
    features: [
      {
        icon: "FileText",
        title: "Quick Invoicing",
        description: "Create invoices in seconds. From sales, timesheets, or scratch.",
      },
      {
        icon: "Send",
        title: "One-Click Send",
        description: "Email invoices directly. Track when they're opened.",
      },
      {
        icon: "CreditCard",
        title: "Online Payments",
        description: "Accept cards, PayPal, bank transfers. Customers pay from the invoice.",
      },
      {
        icon: "Bell",
        title: "Payment Reminders",
        description: "Automatic follow-ups for overdue invoices. No awkward emails.",
      },
      {
        icon: "RefreshCw",
        title: "Recurring Invoices",
        description: "Set up subscriptions. Invoices go out automatically.",
      },
      {
        icon: "FileSpreadsheet",
        title: "Payment Reports",
        description: "Aging reports, cash flow forecasts. Know your receivables.",
      },
    ],
    useCases: [
      {
        industry: "Services",
        scenario: "Time-based billing with project tracking",
        benefit: "Bill every hour worked automatically",
      },
      {
        industry: "Subscriptions",
        scenario: "Recurring billing with auto-charge",
        benefit: "Set it and forget it billing",
      },
      {
        industry: "Freelancers",
        scenario: "Simple invoicing with expense tracking",
        benefit: "Professional invoices in minutes",
      },
    ],
    integrations: [
      { name: "Sales", icon: "ShoppingCart", description: "Orders become invoices" },
      { name: "Project", icon: "Briefcase", description: "Time tracked to invoiced" },
      { name: "Accounting", icon: "Calculator", description: "Full financial integration" },
    ],
    benefits: [
      { stat: "60%", label: "Faster Payments" },
      { stat: "80%", label: "Less Follow-up" },
      { stat: "99%", label: "Invoice Accuracy" },
    ],
    keyCapabilities: [
      "Multiple currencies",
      "Tax automation",
      "Payment terms",
      "Credit notes",
      "Deposit invoices",
      "Invoice templates",
    ],
  },

  hr: {
    id: "hr",
    name: "Human Resources",
    slug: "hr",
    tagline: "People First",
    heroTitle: "HR Management Simplified",
    heroSubtitle: "Employee Data, Documents & More",
    heroDescription: "Centralize employee information, manage documents, and streamline HR processes.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/employees/hero_image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_employees.webm",
    color: "teal",
    features: [
      {
        icon: "Users",
        title: "Employee Directory",
        description: "All employee data in one place. Org charts, contacts, skills.",
      },
      {
        icon: "FileText",
        title: "Document Management",
        description: "Contracts, IDs, certifications. Expiration alerts included.",
      },
      {
        icon: "Calendar",
        title: "Time Off Tracking",
        description: "Request and approve leave. See team availability.",
      },
      {
        icon: "Clock",
        title: "Attendance",
        description: "Check in/out tracking. Overtime calculations.",
      },
      {
        icon: "Award",
        title: "Skills & Appraisals",
        description: "Track competencies. Run performance reviews.",
      },
      {
        icon: "Building",
        title: "Departments & Reporting",
        description: "Org structure. Manager hierarchies. Team views.",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        scenario: "Shift scheduling with attendance tracking",
        benefit: "Know who's on the floor, always",
      },
      {
        industry: "Services",
        scenario: "Skills matrix for project staffing",
        benefit: "Right people on right projects",
      },
      {
        industry: "Growing Companies",
        scenario: "Onboarding checklists and document collection",
        benefit: "New hires productive faster",
      },
    ],
    integrations: [
      { name: "Payroll", icon: "DollarSign", description: "Attendance flows to payroll" },
      { name: "Project", icon: "Briefcase", description: "Resource planning integration" },
      { name: "Recruitment", icon: "UserPlus", description: "New hires become employees" },
    ],
    benefits: [
      { stat: "50%", label: "Less Admin Time" },
      { stat: "100%", label: "Data Centralized" },
      { stat: "95%", label: "Document Compliance" },
    ],
    keyCapabilities: [
      "Custom employee fields",
      "Org chart visualization",
      "Document expiry alerts",
      "Employee self-service",
      "Department management",
      "Reporting dashboards",
    ],
  },

  salesCrm: {
    id: "sales-crm",
    name: "Sales & CRM",
    slug: "sales-crm",
    tagline: "Close More Deals, Faster",
    heroTitle: "Turn Leads into Revenue",
    heroSubtitle: "Complete Sales Pipeline Management",
    heroDescription: "From first contact to closed deal—track every opportunity, automate follow-ups, and forecast with confidence.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/crm/hero_image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_CRM.webm",
    color: "orange",
    features: [
      {
        icon: "Users",
        title: "Lead Management",
        description: "Capture leads from web, email, and events. Score and route automatically.",
      },
      {
        icon: "TrendingUp",
        title: "Pipeline Tracking",
        description: "Visual kanban pipeline. Drag deals between stages. Never lose track.",
      },
      {
        icon: "FileText",
        title: "Quote Builder",
        description: "Professional quotes in minutes. Templates, pricing rules, e-signatures.",
      },
      {
        icon: "Mail",
        title: "Email Integration",
        description: "Gmail & Outlook sync. Log every conversation automatically.",
      },
      {
        icon: "Calendar",
        title: "Activity Scheduling",
        description: "Plan calls, meetings, tasks. Get reminders. Hit every deadline.",
      },
      {
        icon: "BarChart",
        title: "Sales Forecasting",
        description: "Predict revenue by stage, rep, or period. Data-driven decisions.",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        scenario: "Quote complex custom products with BOMs",
        benefit: "50% faster quoting with configured products",
      },
      {
        industry: "Professional Services",
        scenario: "Track retainer renewals and upsells",
        benefit: "30% increase in account expansion",
      },
      {
        industry: "Distribution",
        scenario: "Manage B2B accounts with custom pricing",
        benefit: "Per-customer pricing in seconds",
      },
    ],
    integrations: [
      { name: "Accounting", icon: "Calculator", description: "Quotes become invoices automatically" },
      { name: "Inventory", icon: "Package", description: "Real-time stock in quotes" },
      { name: "Email Marketing", icon: "Mail", description: "Nurture leads at scale" },
    ],
    benefits: [
      { stat: "35%", label: "More Closed Deals" },
      { stat: "50%", label: "Faster Quoting" },
      { stat: "100%", label: "Pipeline Visibility" },
    ],
    keyCapabilities: [
      "Lead scoring & routing",
      "Multi-currency quotes",
      "E-signature integration",
      "Mobile CRM app",
      "Custom sales stages",
      "Commission tracking",
    ],
  },

  accounting: {
    id: "accounting",
    name: "Accounting",
    slug: "accounting",
    tagline: "Books That Balance Themselves",
    heroTitle: "Accounting Made Simple",
    heroSubtitle: "Invoicing, AP/AR & Financial Reports",
    heroDescription: "Real-time financials without the spreadsheet chaos. Automate invoicing, track payments, and close books faster.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-hero-image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_accounting.webm",
    color: "blue",
    features: [
      {
        icon: "Receipt",
        title: "Smart Invoicing",
        description: "Create, send, and track invoices. Auto-reminders for overdue payments.",
      },
      {
        icon: "Wallet",
        title: "Bill Management",
        description: "Capture vendor bills. Match to POs. Schedule payments.",
      },
      {
        icon: "Building",
        title: "Bank Reconciliation",
        description: "Connect your bank. Auto-match transactions. Minutes, not hours.",
      },
      {
        icon: "FileSpreadsheet",
        title: "Financial Reports",
        description: "P&L, balance sheet, cash flow. Real-time, always accurate.",
      },
      {
        icon: "Globe",
        title: "Multi-Currency",
        description: "Auto exchange rates. Foreign invoices handled seamlessly.",
      },
      {
        icon: "Calculator",
        title: "Tax Management",
        description: "Sales tax, VAT, GST. Auto-calculate and track by jurisdiction.",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        scenario: "Job costing with labor, materials, overhead",
        benefit: "True cost visibility per project",
      },
      {
        industry: "Distribution",
        scenario: "High-volume invoicing with custom terms",
        benefit: "Batch invoices in one click",
      },
      {
        industry: "Services",
        scenario: "Time & expense billing with approvals",
        benefit: "Billable time straight to invoice",
      },
    ],
    integrations: [
      { name: "Sales", icon: "Users", description: "Orders flow to invoices" },
      { name: "Purchase", icon: "ShoppingCart", description: "POs match to bills" },
      { name: "Inventory", icon: "Package", description: "COGS calculated automatically" },
    ],
    benefits: [
      { stat: "80%", label: "Faster Month-End" },
      { stat: "99%", label: "Invoice Accuracy" },
      { stat: "50%", label: "Less Manual Entry" },
    ],
    keyCapabilities: [
      "Double-entry accounting",
      "Automated bank feeds",
      "Recurring invoices",
      "Payment gateways",
      "Audit trail",
      "Budget management",
    ],
  },

  inventory: {
    id: "inventory",
    name: "Inventory",
    slug: "inventory",
    tagline: "Right Stock. Right Place. Right Time.",
    heroTitle: "Inventory Under Control",
    heroSubtitle: "Multi-Warehouse Stock Management",
    heroDescription: "See every unit across every location. Automate reordering. Eliminate stockouts and overstock.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/inventory/optimize_warehouse.webp",
    color: "purple",
    features: [
      {
        icon: "Layers",
        title: "Multi-Warehouse",
        description: "Manage unlimited locations. Track stock in real-time.",
      },
      {
        icon: "Scan",
        title: "Barcode Scanning",
        description: "Receive, pick, pack with barcode guns or phones. No typing.",
      },
      {
        icon: "RefreshCw",
        title: "Auto Reordering",
        description: "Set min/max rules. POs generated when stock is low.",
      },
      {
        icon: "GitBranch",
        title: "Lot & Serial Tracking",
        description: "Full traceability. Know where every unit came from and went.",
      },
      {
        icon: "Route",
        title: "Putaway Rules",
        description: "Smart storage locations. Products go where they belong.",
      },
      {
        icon: "Clock",
        title: "Expiration Dates",
        description: "FIFO/FEFO enforcement. Never ship expired product.",
      },
    ],
    useCases: [
      {
        industry: "Food & Beverage",
        scenario: "Manage expiration dates and lot tracking",
        benefit: "Zero expired shipments, instant recalls",
      },
      {
        industry: "Distribution",
        scenario: "Multi-warehouse with inter-location transfers",
        benefit: "Optimize stock across all locations",
      },
      {
        industry: "E-commerce",
        scenario: "Real-time stock sync across channels",
        benefit: "No overselling, ever",
      },
    ],
    integrations: [
      { name: "Sales", icon: "Users", description: "Stock reserved on order" },
      { name: "Purchase", icon: "ShoppingCart", description: "Receipts update inventory" },
      { name: "Manufacturing", icon: "Factory", description: "Components consumed, finished goods added" },
    ],
    benefits: [
      { stat: "99%", label: "Inventory Accuracy" },
      { stat: "40%", label: "Reduced Stockouts" },
      { stat: "25%", label: "Less Overstock" },
    ],
    keyCapabilities: [
      "Cycle counting",
      "Inventory valuation",
      "Warehouse zones",
      "Cross-docking",
      "Dropshipping",
      "Consignment",
    ],
  },

  purchase: {
    id: "purchase",
    name: "Purchase",
    slug: "purchase",
    tagline: "Smarter Procurement",
    heroTitle: "Procurement on Autopilot",
    heroSubtitle: "Vendor Management & PO Automation",
    heroDescription: "From requisition to receipt—streamline purchasing, compare vendors, and control spend.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/purchase/hero_image.webp",
    color: "green",
    features: [
      {
        icon: "FileText",
        title: "Purchase Orders",
        description: "Create POs from requests, rules, or reorder points. One click.",
      },
      {
        icon: "Users",
        title: "Vendor Management",
        description: "Track performance, lead times, pricing. Choose the best vendor.",
      },
      {
        icon: "CheckCircle",
        title: "Approval Workflows",
        description: "Route POs for approval by amount, category, or department.",
      },
      {
        icon: "Scale",
        title: "RFQ Management",
        description: "Request quotes from multiple vendors. Compare and select.",
      },
      {
        icon: "Package",
        title: "3-Way Matching",
        description: "Match PO, receipt, and invoice. Pay only for what you got.",
      },
      {
        icon: "TrendingDown",
        title: "Spend Analysis",
        description: "See where money goes. Find savings opportunities.",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        scenario: "Auto-generate POs from MRP demand",
        benefit: "Materials arrive just in time",
      },
      {
        industry: "Retail",
        scenario: "Seasonal buying with vendor negotiations",
        benefit: "Best prices, right quantities",
      },
      {
        industry: "Services",
        scenario: "Subcontractor and supplies management",
        benefit: "Full project cost visibility",
      },
    ],
    integrations: [
      { name: "Inventory", icon: "Package", description: "Auto-reorder at min levels" },
      { name: "Accounting", icon: "Calculator", description: "Bills matched and ready to pay" },
      { name: "Manufacturing", icon: "Factory", description: "MRP drives procurement" },
    ],
    benefits: [
      { stat: "30%", label: "Procurement Time Saved" },
      { stat: "15%", label: "Cost Reduction" },
      { stat: "100%", label: "Spend Visibility" },
    ],
    keyCapabilities: [
      "Blanket orders",
      "Dropship handling",
      "Landed costs",
      "Vendor pricelists",
      "Purchase agreements",
      "Receipt management",
    ],
  },

  manufacturing: {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    tagline: "Shop Floor to Top Floor",
    heroTitle: "Production Under Control",
    heroSubtitle: "MRP, Work Orders & BOMs",
    heroDescription: "Plan production, track work orders, manage BOMs. See your shop floor in real-time.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp",
    color: "red",
    features: [
      {
        icon: "Layers",
        title: "Bill of Materials",
        description: "Multi-level BOMs with routing. Version control built-in.",
      },
      {
        icon: "Calendar",
        title: "Production Planning",
        description: "Visual scheduling. Drag-drop work orders. See capacity.",
      },
      {
        icon: "ClipboardList",
        title: "Work Orders",
        description: "Step-by-step instructions. Track time. Log materials.",
      },
      {
        icon: "Scan",
        title: "Shop Floor Control",
        description: "Barcode scanning for operations. Real-time WIP tracking.",
      },
      {
        icon: "AlertTriangle",
        title: "Quality Control",
        description: "Inspection points. Pass/fail tracking. Non-conformance handling.",
      },
      {
        icon: "RefreshCw",
        title: "MRP",
        description: "Auto-generate work orders and POs based on demand.",
      },
    ],
    useCases: [
      {
        industry: "Discrete Manufacturing",
        scenario: "Complex assemblies with nested BOMs",
        benefit: "Full component visibility and costing",
      },
      {
        industry: "Process Manufacturing",
        scenario: "Batch production with formula scaling",
        benefit: "Consistent recipes, tracked lots",
      },
      {
        industry: "Make-to-Order",
        scenario: "Custom products with configurable options",
        benefit: "Quote and produce variants easily",
      },
    ],
    integrations: [
      { name: "Inventory", icon: "Package", description: "Components consumed, goods received" },
      { name: "Purchase", icon: "ShoppingCart", description: "MRP triggers procurement" },
      { name: "Sales", icon: "Users", description: "Orders drive production" },
    ],
    benefits: [
      { stat: "25%", label: "Production Efficiency" },
      { stat: "40%", label: "Less WIP" },
      { stat: "100%", label: "Job Visibility" },
    ],
    keyCapabilities: [
      "Subcontracting",
      "By-products",
      "Scrap tracking",
      "Maintenance scheduling",
      "OEE tracking",
      "Capacity planning",
    ],
  },

  projectManagement: {
    id: "project-management",
    name: "Project Management",
    slug: "project-management",
    tagline: "Deliver On Time, On Budget",
    heroTitle: "Projects That Profit",
    heroSubtitle: "Tasks, Timesheets & Profitability",
    heroDescription: "Plan projects, track time, bill clients. See profitability before it's too late.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/project/project-hero-image.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_project.webm",
    color: "yellow",
    features: [
      {
        icon: "LayoutDashboard",
        title: "Kanban & Gantt",
        description: "Visualize projects your way. Drag tasks, set dependencies.",
      },
      {
        icon: "Clock",
        title: "Timesheet Tracking",
        description: "Log time from anywhere. Timer, manual, or calendar.",
      },
      {
        icon: "DollarSign",
        title: "Project Costing",
        description: "Track labor, expenses, purchases. Know margins in real-time.",
      },
      {
        icon: "Users",
        title: "Resource Planning",
        description: "See who's available. Prevent overbooking.",
      },
      {
        icon: "Receipt",
        title: "Expense Tracking",
        description: "Capture receipts. Attach to projects. Bill or reimburse.",
      },
      {
        icon: "Zap",
        title: "Automated Billing",
        description: "Time approved → invoice created. One click.",
      },
    ],
    useCases: [
      {
        industry: "Professional Services",
        scenario: "Client retainers with hourly tracking",
        benefit: "Bill every hour, automatically",
      },
      {
        industry: "Energy Services",
        scenario: "Field projects with mobile time entry",
        benefit: "Accurate timesheets, faster billing",
      },
      {
        industry: "Marketing Agencies",
        scenario: "Creative projects with budget alerts",
        benefit: "Stop scope creep before it hurts",
      },
    ],
    integrations: [
      { name: "Sales", icon: "Users", description: "Won deals become projects" },
      { name: "Accounting", icon: "Calculator", description: "Time flows to invoices" },
      { name: "HR", icon: "UserCheck", description: "Team availability and leave" },
    ],
    benefits: [
      { stat: "20%", label: "Higher Margins" },
      { stat: "95%", label: "Billable Capture" },
      { stat: "50%", label: "Faster Invoicing" },
    ],
    keyCapabilities: [
      "Task dependencies",
      "Milestone billing",
      "Budget alerts",
      "Client portal",
      "Document sharing",
      "Recurring tasks",
    ],
  },

  ecommerce: {
    id: "ecommerce",
    name: "E-commerce",
    slug: "ecommerce",
    tagline: "Sell Online, Seamlessly",
    heroTitle: "Your Online Store, Integrated",
    heroSubtitle: "Website Builder & Online Sales",
    heroDescription: "Launch a beautiful store connected to your inventory, accounting, and fulfillment. No integrations needed.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/ecommerce/products-grid.webp",
    heroVideo: "https://download.odoocdn.com/videos/odoo_com/video_ecommerce.webm",
    color: "indigo",
    features: [
      {
        icon: "Layout",
        title: "Drag-Drop Builder",
        description: "Build pages without code. Beautiful themes included.",
      },
      {
        icon: "Package",
        title: "Real-Time Inventory",
        description: "Stock synced automatically. Never oversell.",
      },
      {
        icon: "CreditCard",
        title: "Payment Processing",
        description: "Stripe, PayPal, and more. Secure checkout.",
      },
      {
        icon: "Truck",
        title: "Shipping Integration",
        description: "Live rates. Print labels. Track packages.",
      },
      {
        icon: "Users",
        title: "Customer Accounts",
        description: "Order history, saved addresses, wishlists.",
      },
      {
        icon: "BarChart",
        title: "Analytics",
        description: "Track conversions, abandoned carts, top products.",
      },
    ],
    useCases: [
      {
        industry: "Retail",
        scenario: "Omnichannel: online + physical stores",
        benefit: "One inventory, all channels",
      },
      {
        industry: "Distribution",
        scenario: "B2B portal with customer-specific pricing",
        benefit: "24/7 ordering for your accounts",
      },
      {
        industry: "Manufacturing",
        scenario: "Direct-to-consumer product sales",
        benefit: "Skip the middleman, own the customer",
      },
    ],
    integrations: [
      { name: "Inventory", icon: "Package", description: "Stock updates in real-time" },
      { name: "Accounting", icon: "Calculator", description: "Orders become invoices" },
      { name: "CRM", icon: "Users", description: "Customer data flows both ways" },
    ],
    benefits: [
      { stat: "30%", label: "Higher Conversion" },
      { stat: "100%", label: "Inventory Sync" },
      { stat: "0", label: "Integration Fees" },
    ],
    keyCapabilities: [
      "SEO tools",
      "Promotional pricing",
      "Product variants",
      "Gift cards",
      "Abandoned cart emails",
      "Multi-language",
    ],
  },

  pointOfSale: {
    id: "point-of-sale",
    name: "Point of Sale",
    slug: "point-of-sale",
    tagline: "Fast. Flexible. Connected.",
    heroTitle: "POS That Works Everywhere",
    heroSubtitle: "Retail & Restaurant Point of Sale",
    heroDescription: "Ring up sales anywhere—even offline. Inventory, loyalty, and accounting all connected.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/apps/pos/interface.webp",
    color: "pink",
    features: [
      {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Intuitive interface. Scan, tap, done. Training in minutes.",
      },
      {
        icon: "WifiOff",
        title: "Offline Mode",
        description: "Keep selling when internet drops. Syncs when back online.",
      },
      {
        icon: "Gift",
        title: "Loyalty Programs",
        description: "Points, rewards, tiers. Keep customers coming back.",
      },
      {
        icon: "Scan",
        title: "Barcode Support",
        description: "Scan products, apply discounts, lookup customers.",
      },
      {
        icon: "CreditCard",
        title: "Payment Flexibility",
        description: "Cash, card, split payments, gift cards. Your choice.",
      },
      {
        icon: "Receipt",
        title: "Digital Receipts",
        description: "Email or print. Capture customer info at checkout.",
      },
    ],
    useCases: [
      {
        industry: "Retail",
        scenario: "Multi-store with centralized inventory",
        benefit: "Same stock, any register",
      },
      {
        industry: "Restaurants",
        scenario: "Table management and kitchen printing",
        benefit: "Orders straight to the kitchen",
      },
      {
        industry: "Pop-ups & Events",
        scenario: "Mobile POS with offline capability",
        benefit: "Sell anywhere, sync later",
      },
    ],
    integrations: [
      { name: "Inventory", icon: "Package", description: "Stock updates with every sale" },
      { name: "Accounting", icon: "Calculator", description: "Revenue recorded automatically" },
      { name: "E-commerce", icon: "Globe", description: "Same products, same prices" },
    ],
    benefits: [
      { stat: "50%", label: "Faster Checkout" },
      { stat: "25%", label: "Repeat Customers" },
      { stat: "100%", label: "Inventory Accuracy" },
    ],
    keyCapabilities: [
      "Restaurant mode",
      "Floor plans",
      "Kitchen display",
      "Cash management",
      "Employee access levels",
      "Multi-terminal",
    ],
  },

  marketing: {
    id: "marketing",
    name: "Marketing",
    slug: "marketing",
    tagline: "Reach. Engage. Convert.",
    heroTitle: "Marketing That Moves Needles",
    heroSubtitle: "Email, Automation & Social",
    heroDescription: "Reach customers where they are. Automate campaigns. Track what works.",
    heroImage: "https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_03.jpg",
    color: "teal",
    features: [
      {
        icon: "Mail",
        title: "Email Marketing",
        description: "Beautiful templates. Drag-drop builder. A/B testing.",
      },
      {
        icon: "RefreshCw",
        title: "Marketing Automation",
        description: "Trigger campaigns based on behavior. Set and forget.",
      },
      {
        icon: "Share2",
        title: "Social Media",
        description: "Schedule posts. Track engagement. Manage comments.",
      },
      {
        icon: "Target",
        title: "Segmentation",
        description: "Target by purchase history, location, engagement.",
      },
      {
        icon: "BarChart",
        title: "Campaign Analytics",
        description: "Opens, clicks, conversions. Know your ROI.",
      },
      {
        icon: "MessageSquare",
        title: "SMS Marketing",
        description: "Text campaigns for time-sensitive offers.",
      },
    ],
    useCases: [
      {
        industry: "E-commerce",
        scenario: "Abandoned cart recovery emails",
        benefit: "Recover 15% of lost sales",
      },
      {
        industry: "Services",
        scenario: "Appointment reminders and follow-ups",
        benefit: "80% fewer no-shows",
      },
      {
        industry: "B2B",
        scenario: "Lead nurturing drip campaigns",
        benefit: "Warm leads before sales calls",
      },
    ],
    integrations: [
      { name: "CRM", icon: "Users", description: "Segment by deal stage and history" },
      { name: "E-commerce", icon: "Globe", description: "Product recommendations" },
      { name: "Events", icon: "Calendar", description: "Event invites and follow-ups" },
    ],
    benefits: [
      { stat: "40%", label: "Higher Open Rates" },
      { stat: "25%", label: "More Conversions" },
      { stat: "3x", label: "Marketing ROI" },
    ],
    keyCapabilities: [
      "Landing pages",
      "Lead scoring",
      "UTM tracking",
      "Unsubscribe management",
      "Template library",
      "Push notifications",
    ],
  },
};

// Helper function to get solution by slug
export function getSolutionBySlug(slug: string): SolutionConfig | undefined {
  return Object.values(solutions).find((solution) => solution.slug === slug);
}

// Color mapping for solution theming
export const solutionColorMap = {
  orange: {
    bg: "bg-orange-50",
    bgDark: "bg-orange-500",
    border: "border-orange-500",
    text: "text-orange-600",
    textLight: "text-orange-400",
    gradient: "from-orange-500 to-amber-500",
    gradientDark: "from-orange-600 to-red-600",
    shadow: "shadow-orange-500/25",
  },
  blue: {
    bg: "bg-blue-50",
    bgDark: "bg-blue-500",
    border: "border-blue-500",
    text: "text-blue-600",
    textLight: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
    gradientDark: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/25",
  },
  purple: {
    bg: "bg-purple-50",
    bgDark: "bg-purple-500",
    border: "border-purple-500",
    text: "text-purple-600",
    textLight: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    gradientDark: "from-purple-600 to-fuchsia-600",
    shadow: "shadow-purple-500/25",
  },
  green: {
    bg: "bg-green-50",
    bgDark: "bg-green-500",
    border: "border-green-500",
    text: "text-green-600",
    textLight: "text-green-400",
    gradient: "from-green-500 to-emerald-500",
    gradientDark: "from-green-600 to-teal-600",
    shadow: "shadow-green-500/25",
  },
  red: {
    bg: "bg-red-50",
    bgDark: "bg-red-500",
    border: "border-red-500",
    text: "text-red-600",
    textLight: "text-red-400",
    gradient: "from-red-500 to-orange-500",
    gradientDark: "from-red-600 to-rose-600",
    shadow: "shadow-red-500/25",
  },
  yellow: {
    bg: "bg-yellow-50",
    bgDark: "bg-yellow-500",
    border: "border-yellow-500",
    text: "text-yellow-600",
    textLight: "text-yellow-400",
    gradient: "from-yellow-500 to-amber-500",
    gradientDark: "from-yellow-600 to-orange-600",
    shadow: "shadow-yellow-500/25",
  },
  indigo: {
    bg: "bg-indigo-50",
    bgDark: "bg-indigo-500",
    border: "border-indigo-500",
    text: "text-indigo-600",
    textLight: "text-indigo-400",
    gradient: "from-indigo-500 to-purple-500",
    gradientDark: "from-indigo-600 to-violet-600",
    shadow: "shadow-indigo-500/25",
  },
  pink: {
    bg: "bg-pink-50",
    bgDark: "bg-pink-500",
    border: "border-pink-500",
    text: "text-pink-600",
    textLight: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
    gradientDark: "from-pink-600 to-fuchsia-600",
    shadow: "shadow-pink-500/25",
  },
  teal: {
    bg: "bg-teal-50",
    bgDark: "bg-teal-500",
    border: "border-teal-500",
    text: "text-teal-600",
    textLight: "text-teal-400",
    gradient: "from-teal-500 to-cyan-500",
    gradientDark: "from-teal-600 to-emerald-600",
    shadow: "shadow-teal-500/25",
  },
};
