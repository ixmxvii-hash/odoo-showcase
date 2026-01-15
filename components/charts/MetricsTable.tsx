"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

interface Metric {
  name: string;
  before: string;
  after: string;
  improvement: string;
  isReduction?: boolean;
}

interface MetricsTableProps {
  metrics: Metric[];
  color?: string;
  source?: string;
}

const defaultMetrics: Metric[] = [
  { name: "Order Processing Time", before: "40 min", after: "10 min", improvement: "75% faster", isReduction: true },
  { name: "Inventory Accuracy", before: "59%", after: "90%+", improvement: "31% gain", isReduction: false },
  { name: "Manual Data Entry", before: "100%", after: "30%", improvement: "70% reduced", isReduction: true },
  { name: "Inventory Discrepancies", before: "41%", after: "10%", improvement: "76% reduced", isReduction: true },
];

export default function MetricsTable({
  metrics = defaultMetrics,
  color = "#714B67",
  source = "ResearchGate Academic Study 2024"
}: MetricsTableProps) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50 border-b border-slate-200">
          <div className="text-sm font-semibold text-slate-600">Metric</div>
          <div className="text-sm font-semibold text-slate-400 text-center">Before</div>
          <div className="text-sm font-semibold text-center" style={{ color }}>After Odoo</div>
          <div className="text-sm font-semibold text-green-600 text-right">Improvement</div>
        </div>

        {/* Rows */}
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
          >
            <div className="text-sm font-medium text-slate-700">{metric.name}</div>
            <div className="text-sm text-slate-400 text-center">{metric.before}</div>
            <div className="text-sm font-semibold text-center" style={{ color }}>{metric.after}</div>
            <div className="flex items-center justify-end gap-1">
              {metric.isReduction ? (
                <TrendingDown className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingUp className="w-4 h-4 text-green-500" />
              )}
              <span className="text-sm font-semibold text-green-600">{metric.improvement}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Source Citation */}
      <div className="mt-3 text-xs text-slate-400 text-right">
        Source: {source}
      </div>
    </div>
  );
}
