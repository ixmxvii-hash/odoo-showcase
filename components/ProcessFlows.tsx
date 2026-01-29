"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Truck,
  Receipt,
  Banknote,
  ClipboardList,
  FileCheck,
  PackageCheck,
  Wallet,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Zap,
  Search,
  BookOpen,
  Calculator,
  FileSpreadsheet,
  PieChart,
  CheckSquare,
  LineChart,
} from "lucide-react";

const orderToCashSteps = [
  {
    icon: FileText,
    step: "1",
    title: "Quote",
    description: "Customer requests quote, create proposal, negotiate pricing",
    painPoints: [
      "Manual quote creation in Word/Excel",
      "No visibility into quote status",
      "Lost follow-ups on pending quotes",
    ],
    odooSolution: [
      "Auto-generate professional quotes from CRM",
      "Real-time quote tracking & approval workflows",
      "Automated follow-up reminders",
    ],
    metric: "50% faster quote turnaround",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Sales Order",
    description: "Convert quote to order, confirm terms, schedule fulfillment",
    painPoints: [
      "Manual re-entry from quote to order",
      "Order confirmation delays",
      "Miscommunication on delivery dates",
    ],
    odooSolution: [
      "One-click quote to sales order conversion",
      "Automated order confirmation emails",
      "Integrated delivery scheduling",
    ],
    metric: "Zero data re-entry",
  },
  {
    icon: PackageCheck,
    step: "3",
    title: "Order Fulfillment",
    description: "Pick, pack, and prepare goods for shipment",
    painPoints: [
      "Paper-based picking lists",
      "Inventory discrepancies",
      "Manual stock allocation",
    ],
    odooSolution: [
      "Barcode scanning & mobile picking",
      "Real-time inventory updates",
      "Automatic reservation & wave picking",
    ],
    metric: "30% reduction in picking errors",
  },
  {
    icon: Truck,
    step: "4",
    title: "Delivery & Shipping",
    description: "Ship to customer, track delivery, confirm receipt",
    painPoints: [
      "No shipment visibility",
      "Manual carrier selection",
      "Delayed delivery notifications",
    ],
    odooSolution: [
      "Integrated carrier tracking",
      "Automated shipping label generation",
      "Customer delivery notifications",
    ],
    metric: "Real-time delivery tracking",
  },
  {
    icon: Receipt,
    step: "5",
    title: "Invoicing",
    description: "Generate invoice, send to customer, track payment terms",
    painPoints: [
      "Delayed invoicing after shipment",
      "Invoice errors & disputes",
      "Manual data entry from orders",
    ],
    odooSolution: [
      "Auto-invoice on delivery confirmation",
      "Zero re-keying - flows from sales order",
      "Electronic invoice delivery",
    ],
    metric: "Invoice same day as shipment",
  },
  {
    icon: Banknote,
    step: "6",
    title: "Payment Collection",
    description: "Receive payment, reconcile, close the order",
    painPoints: [
      "Chasing overdue payments manually",
      "Bank reconciliation headaches",
      "No visibility into cash flow",
    ],
    odooSolution: [
      "Automated payment reminders",
      "Bank feed integration & auto-reconciliation",
      "Real-time AR aging reports",
    ],
    metric: "Reduce DSO by 15+ days",
  },
];

const procureToPaySteps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Purchase Request",
    description: "Identify need, create requisition, get approval",
    painPoints: [
      "Email/verbal purchase requests",
      "No spending visibility",
      "Maverick buying",
    ],
    odooSolution: [
      "Digital purchase requisitions",
      "Budget controls & approval workflows",
      "Preferred vendor enforcement",
    ],
    metric: "Full spend visibility",
  },
  {
    icon: Search,
    step: "2",
    title: "RFQ",
    description: "Request quotes from vendors, compare pricing and terms",
    painPoints: [
      "Manual vendor outreach via email",
      "No standardized quote comparison",
      "Missed better pricing opportunities",
    ],
    odooSolution: [
      "Automated RFQ to multiple vendors",
      "Side-by-side quote comparison",
      "Vendor response tracking & reminders",
    ],
    metric: "Compare 3+ vendors in minutes",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Purchase Order",
    description: "Select vendor, negotiate, confirm order",
    painPoints: [
      "Manual PO creation",
      "No vendor price history",
      "Duplicate orders",
    ],
    odooSolution: [
      "Auto-generate PO from winning quote",
      "Vendor price comparison",
      "Blanket orders & contracts",
    ],
    metric: "5-10% procurement savings",
  },
  {
    icon: PackageCheck,
    step: "4",
    title: "Goods Receipt",
    description: "Receive goods, quality check, update inventory",
    painPoints: [
      "Paper receiving logs",
      "Inventory count mismatches",
      "No quality tracking",
    ],
    odooSolution: [
      "Mobile receiving with barcode",
      "3-way match (PO, receipt, invoice)",
      "Quality control checkpoints",
    ],
    metric: "99%+ receiving accuracy",
  },
  {
    icon: Receipt,
    step: "5",
    title: "Invoice Matching",
    description: "Receive vendor invoice, match to PO & receipt",
    painPoints: [
      "Manual invoice matching",
      "Price/quantity discrepancies",
      "Lost invoices",
    ],
    odooSolution: [
      "Automatic 3-way matching",
      "Exception handling workflows",
      "Vendor portal for invoice submission",
    ],
    metric: "80% touchless invoice processing",
  },
  {
    icon: Wallet,
    step: "6",
    title: "Payment",
    description: "Approve payment, execute, reconcile",
    painPoints: [
      "Missed early payment discounts",
      "Manual check runs",
      "No payment scheduling",
    ],
    odooSolution: [
      "Payment term optimization",
      "Batch payment processing",
      "Cash flow forecasting",
    ],
    metric: "Capture all early pay discounts",
  },
];

const recordToReportSteps = [
  {
    icon: BookOpen,
    step: "1",
    title: "Journal Entries",
    description: "Record transactions, adjustments, and accruals",
    painPoints: [
      "Manual journal entry in spreadsheets",
      "No audit trail for changes",
      "Delayed transaction recording",
    ],
    odooSolution: [
      "Automated journal entries from operations",
      "Full audit trail with user tracking",
      "Real-time transaction posting",
    ],
    metric: "90% automated entries",
  },
  {
    icon: CheckSquare,
    step: "2",
    title: "Reconciliation",
    description: "Match and reconcile accounts, bank statements, intercompany",
    painPoints: [
      "Manual bank reconciliation",
      "Unidentified discrepancies",
      "Time-consuming account matching",
    ],
    odooSolution: [
      "Automated bank feed reconciliation",
      "AI-powered transaction matching",
      "Intercompany auto-reconciliation",
    ],
    metric: "80% faster reconciliation",
  },
  {
    icon: Calculator,
    step: "3",
    title: "Period Close",
    description: "Close sub-ledgers, run validations, lock periods",
    painPoints: [
      "Manual close checklists",
      "Missed close tasks",
      "No period locking controls",
    ],
    odooSolution: [
      "Automated close task workflows",
      "Pre-close validation checks",
      "Period lock with override controls",
    ],
    metric: "Close books 5 days faster",
  },
  {
    icon: FileSpreadsheet,
    step: "4",
    title: "Consolidation",
    description: "Consolidate entities, eliminate intercompany, currency translation",
    painPoints: [
      "Manual consolidation spreadsheets",
      "Intercompany elimination errors",
      "Currency translation mistakes",
    ],
    odooSolution: [
      "Automated multi-entity consolidation",
      "Auto intercompany eliminations",
      "Real-time currency translation",
    ],
    metric: "One-click consolidation",
  },
  {
    icon: PieChart,
    step: "5",
    title: "Financial Reporting",
    description: "Generate financial statements, management reports, compliance",
    painPoints: [
      "Manual report building in Excel",
      "Version control nightmares",
      "Inconsistent report formats",
    ],
    odooSolution: [
      "Real-time financial dashboards",
      "Standardized report templates",
      "Drill-down to transaction detail",
    ],
    metric: "Reports in minutes, not days",
  },
  {
    icon: LineChart,
    step: "6",
    title: "Analysis & Review",
    description: "Variance analysis, KPIs, executive review and sign-off",
    painPoints: [
      "Ad-hoc variance analysis",
      "No standardized KPI tracking",
      "Delayed executive insights",
    ],
    odooSolution: [
      "Automated variance reporting",
      "Configurable KPI dashboards",
      "Mobile executive summaries",
    ],
    metric: "Real-time business insights",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface ProcessDiagramProps {
  title: string;
  subtitle: string;
  description: string;
  steps: typeof orderToCashSteps;
  accentColor: "orange" | "blue" | "green";
  icon: React.ElementType;
}

function ProcessDiagram({
  title,
  subtitle,
  description,
  steps,
  accentColor,
  icon: TitleIcon,
}: ProcessDiagramProps) {
  const colors = {
    orange: {
      badge: "bg-orange-500",
      badgeLight: "bg-orange-50 text-orange-700 border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      border: "border-orange-200",
      line: "bg-orange-300",
      highlight: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
      lightBg: "bg-orange-50",
    },
    blue: {
      badge: "bg-blue-500",
      badgeLight: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-200",
      line: "bg-blue-300",
      highlight: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
    },
    green: {
      badge: "bg-green-500",
      badgeLight: "bg-green-50 text-green-700 border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-200",
      line: "bg-green-300",
      highlight: "bg-green-500",
      gradient: "from-green-500 to-green-600",
      lightBg: "bg-green-50",
    },
  };

  const c = colors[accentColor];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className={`inline-flex items-center gap-2 px-4 py-2 ${c.badgeLight} border rounded-full mb-4`}>
          <TitleIcon className="w-4 h-4" />
          <span className="text-sm font-semibold">{subtitle}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      {/* Process Flow Diagram */}
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200 z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
            className={`h-full ${c.line} origin-left`}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl border-2 border-gray-100 p-5 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${c.iconColor}`} />
                    </div>
                    <div className={`w-8 h-8 bg-gradient-to-br ${c.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{step.description}</p>

                  {/* Odoo Solution - Simplified */}
                  <div className="mb-4">
                    <ul className="space-y-1.5">
                      {step.odooSolution.map((solution, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metric */}
                  <div className={`${c.lightBg} rounded-lg px-3 py-2 mt-auto`}>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className={`w-3.5 h-3.5 ${c.iconColor}`} />
                      <span className={`text-xs font-semibold ${c.iconColor}`}>{step.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow (between cards on mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className={`w-6 h-6 ${c.iconBg} rounded-full flex items-center justify-center`}>
                      <ArrowRight className={`w-3 h-3 ${c.iconColor}`} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <motion.div
        variants={itemVariants}
        className={`mt-12 ${c.lightBg} rounded-2xl p-6 border-2 ${c.border}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 text-lg mb-1">
              ICIT Solutions {title} Implementation
            </h4>
            <p className="text-gray-600 text-sm">
              We configure Odoo to automate your entire {title.toLowerCase()} process, eliminating manual work and reducing errors.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className={`text-2xl font-bold ${c.iconColor}`}>60%</div>
              <div className="text-xs text-gray-500">Less Manual Work</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${c.iconColor}`}>99%</div>
              <div className="text-xs text-gray-500">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${c.iconColor}`}>2x</div>
              <div className="text-xs text-gray-500">Faster Cycle</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProcessFlows() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">End-to-End Process Automation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Streamline Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              Core Business Processes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ICIT Solutions implements Odoo to transform your Quote to Cash, Procure to Pay, and Record to Report cycles from manual chaos to automated efficiency.
          </p>
        </motion.div>

        {/* Quote to Cash */}
        <ProcessDiagram
          title="Quote to Cash"
          subtitle="Q2C Revenue Cycle"
          description="From customer quote to cash in the bank — ICIT streamlines your entire revenue cycle"
          steps={orderToCashSteps}
          accentColor="orange"
          icon={DollarSign}
        />

        {/* Procure to Pay */}
        <ProcessDiagram
          title="Procure to Pay"
          subtitle="P2P Spend Cycle"
          description="From purchase request to vendor payment — ICIT makes it easy"
          steps={procureToPaySteps}
          accentColor="blue"
          icon={BarChart3}
        />

        {/* Record to Report */}
        <ProcessDiagram
          title="Record to Report"
          subtitle="R2R Financial Close"
          description="Get real time insights — from transaction to financial statements"
          steps={recordToReportSteps}
          accentColor="green"
          icon={BookOpen}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business Processes?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              ICIT Solutions specializes in implementing Odoo to streamline your Q2C, P2P, and R2R cycles. Let us show you how much time and money you can save.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg transition-colors flex items-center gap-2"
              >
                <Clock className="w-5 h-5" />
                Schedule Process Review
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-2"
              >
                Download Process Guide
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
