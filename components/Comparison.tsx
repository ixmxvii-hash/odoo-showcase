"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { Check, X, Minus, Scale } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface ComparisonCell {
  value: string;
  status: "check" | "x" | "minus";
  note?: string;
}

interface ComparisonRow {
  criteria: string;
  odoo: ComparisonCell;
  netsuite: ComparisonCell;
  quickbooks: ComparisonCell;
}

const comparisonData: ComparisonRow[] = [
  {
    criteria: "Customization for Your Workflows",
    odoo: { value: "Tailored", status: "check" },
    netsuite: { value: "Limited", status: "minus" },
    quickbooks: { value: "Limited", status: "minus" },
  },
  {
    criteria: "Local + On-Prem Support",
    odoo: { value: "Included", status: "check" },
    netsuite: { value: "No", status: "x" },
    quickbooks: { value: "No", status: "x" },
  },
  {
    criteria: "Ongoing Support",
    odoo: { value: "Continuous", status: "check" },
    netsuite: { value: "No", status: "x" },
    quickbooks: { value: "No", status: "x" },
  },
  {
    criteria: "Implementation Affordability",
    odoo: { value: "Guaranteed Up Front", status: "check" },
    netsuite: { value: "Expensive", status: "x" },
    quickbooks: { value: "Lower Entry Cost", status: "minus", note: "often needs add-ons" },
  },
  {
    criteria: "Training Included",
    odoo: { value: "Personalized", status: "check" },
    netsuite: { value: "Generic", status: "minus" },
    quickbooks: { value: "Generic", status: "minus" },
  },
  {
    criteria: "Dedicated Odoo Expertise",
    odoo: { value: "Yes", status: "check" },
    netsuite: { value: "No", status: "x" },
    quickbooks: { value: "No", status: "x" },
  },
];

const calloutBoxes = [
  { text: "Dedicated Odoo Expertise", color: "from-green-500 to-emerald-600" },
  { text: "Personalized Implementation", color: "from-blue-500 to-indigo-600" },
  { text: "Local Support You Can Trust", color: "from-orange-500 to-red-600" },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / comparisonData.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, comparisonData.length - 1));
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / comparisonData.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <Scale className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Benefits of Choosing ICIT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare Your Implementation Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ICIT stacks up against Odoo direct and disconnected accounting stacks.
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
          <div className="grid grid-cols-4 bg-gray-900 text-white sticky top-0 z-20">
            <div className="p-6 font-bold text-lg border-r border-gray-700">Criteria</div>
            <div className="p-6 font-bold text-lg text-center bg-orange-600 border-r border-orange-700">
              ICIT
            </div>
            <div className="p-6 font-bold text-lg text-center border-r border-gray-700">
              Odoo Direct
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
              className={`grid grid-cols-4 border-b border-gray-200 last:border-b-0 ${
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
              <div>
                <ComparisonCell cell={row.quickbooks} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {comparisonData.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full">
                  <div className="bg-gray-900 text-white p-4">
                    <h3 className="font-bold text-lg">{row.criteria}</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="bg-orange-50 p-4 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">ICIT</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{row.odoo.value}</span>
                        <StatusIcon status={row.odoo.status} />
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Odoo Direct</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{row.netsuite.value}</span>
                        <StatusIcon status={row.netsuite.status} />
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
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {comparisonData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2.5 bg-orange-500"
                    : "w-2.5 h-2.5 bg-orange-200"
                }`}
                aria-label={`Go to comparison ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to move forward with a local Odoo partner?
          </p>
          <Link
            href="/contact"
            onClick={() => trackEvent("cta_click", { location: "comparison", cta: "book_consultation" })}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Book Your Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
