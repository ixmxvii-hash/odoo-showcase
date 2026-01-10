"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

interface ComparisonCell {
  value: string;
  status: "check" | "x" | "minus";
  note?: string;
}

interface ComparisonRow {
  criteria: string;
  odoo: ComparisonCell;
  netsuite: ComparisonCell;
  sap: ComparisonCell;
  quickbooks: ComparisonCell;
}

const comparisonData: ComparisonRow[] = [
  {
    criteria: "Implementation Time",
    odoo: { value: "60-90 days", status: "check" },
    netsuite: { value: "6-12 months", status: "x" },
    sap: { value: "9-18 months", status: "x" },
    quickbooks: { value: "30-60 days", status: "check" },
  },
  {
    criteria: "Total Cost of Ownership (3-year)",
    odoo: { value: "$50K-$100K", status: "check" },
    netsuite: { value: "$150K-$300K", status: "x" },
    sap: { value: "$200K-$500K", status: "x" },
    quickbooks: { value: "$30K-$60K", status: "minus", note: "but limited" },
  },
  {
    criteria: "Local On-Site Support",
    odoo: { value: "Yes", status: "check" },
    netsuite: { value: "Remote only", status: "x" },
    sap: { value: "Remote only", status: "x" },
    quickbooks: { value: "Varies", status: "minus" },
  },
  {
    criteria: "Manufacturing/MRP",
    odoo: { value: "Full", status: "check" },
    netsuite: { value: "Full", status: "check" },
    sap: { value: "Full", status: "check" },
    quickbooks: { value: "Limited", status: "x" },
  },
  {
    criteria: "Modular/Phased Rollout",
    odoo: { value: "Yes", status: "check" },
    netsuite: { value: "Difficult", status: "minus" },
    sap: { value: "Difficult", status: "minus" },
    quickbooks: { value: "N/A", status: "x" },
  },
  {
    criteria: "Open Source/No Lock-in",
    odoo: { value: "Yes", status: "check" },
    netsuite: { value: "No", status: "x" },
    sap: { value: "No", status: "x" },
    quickbooks: { value: "No", status: "x" },
  },
];

const calloutBoxes = [
  { text: "40% lower TCO than NetSuite", color: "from-green-500 to-emerald-600" },
  { text: "Go live in 90 days, not 12 months", color: "from-blue-500 to-indigo-600" },
  { text: "No vendor lock-in", color: "from-orange-500 to-red-600" },
];

const StatusIcon = ({ status }: { status: "check" | "x" | "minus" }) => {
  switch (status) {
    case "check":
      return <Check className="w-5 h-5 text-green-600" strokeWidth={3} />;
    case "x":
      return <X className="w-5 h-5 text-red-600" strokeWidth={3} />;
    case "minus":
      return <Minus className="w-5 h-5 text-yellow-600" strokeWidth={3} />;
  }
};

const ComparisonCell = ({ cell, isOdoo = false }: { cell: ComparisonCell; isOdoo?: boolean }) => (
  <div
    className={`p-4 flex flex-col items-center justify-center min-h-[100px] ${
      isOdoo ? "bg-orange-50" : "bg-white"
    }`}
  >
    <StatusIcon status={cell.status} />
    <p className="mt-2 text-sm font-medium text-gray-900 text-center">{cell.value}</p>
    {cell.note && <p className="mt-1 text-xs text-gray-500 italic">{cell.note}</p>}
  </div>
);

export default function Comparison() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(243 244 246 / 0.5) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(243 244 246 / 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Smart Alternative
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Odoo compares to enterprise ERP solutions. Lower cost, faster implementation,
            better support.
          </p>
        </motion.div>

        {/* Callout Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {calloutBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${box.color} p-6 rounded-2xl shadow-lg`}
            >
              <p className="text-white text-lg font-bold text-center">{box.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:block bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Header Row */}
          <div className="grid grid-cols-5 bg-gray-900 text-white sticky top-0 z-20">
            <div className="p-6 font-bold text-lg border-r border-gray-700">Criteria</div>
            <div className="p-6 font-bold text-lg text-center bg-orange-600 border-r border-orange-700">
              Odoo
            </div>
            <div className="p-6 font-bold text-lg text-center border-r border-gray-700">
              NetSuite
            </div>
            <div className="p-6 font-bold text-lg text-center border-r border-gray-700">
              SAP Business One
            </div>
            <div className="p-6 font-bold text-lg text-center">QuickBooks + Fishbowl</div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className={`grid grid-cols-5 border-b border-gray-200 last:border-b-0 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="p-6 font-semibold text-gray-900 border-r border-gray-200 flex items-center">
                {row.criteria}
              </div>
              <div className="border-r border-gray-200">
                <ComparisonCell cell={row.odoo} isOdoo />
              </div>
              <div className="border-r border-gray-200">
                <ComparisonCell cell={row.netsuite} />
              </div>
              <div className="border-r border-gray-200">
                <ComparisonCell cell={row.sap} />
              </div>
              <div>
                <ComparisonCell cell={row.quickbooks} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Card View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden space-y-8"
        >
          {comparisonData.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + rowIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="bg-gray-900 text-white p-4">
                <h3 className="font-bold text-lg">{row.criteria}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="bg-orange-50 p-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Odoo</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{row.odoo.value}</span>
                    <StatusIcon status={row.odoo.status} />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">NetSuite</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{row.netsuite.value}</span>
                    <StatusIcon status={row.netsuite.status} />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">SAP Business One</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{row.sap.value}</span>
                    <StatusIcon status={row.sap.status} />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">QuickBooks + Fishbowl</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{row.quickbooks.value}</span>
                    <StatusIcon status={row.quickbooks.status} />
                  </div>
                </div>
              </div>
              {row.quickbooks.note && (
                <div className="bg-yellow-50 p-3 text-center">
                  <p className="text-xs text-yellow-800 italic">{row.quickbooks.note}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to see Odoo in action for your Houston business?
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Schedule Your Demo
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
