"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  EfficiencyChart,
  ROITimelineChart,
  CostComparisonChart,
  ImplementationTimeline,
  MetricsTable,
} from "@/components/charts";
import { industries, colorMap } from "@/lib/industryData";
import { getCityIndustry, getCity } from "@/lib/cityIndustryData";
import { getIndustryMetrics } from "@/lib/industryMetrics";

interface OdooResultsProps {
  industryKey: keyof typeof industries;
  city: string;
}

export default function OdooResults({ industryKey, city }: OdooResultsProps) {
  const industry = getCityIndustry(city, industryKey as string);
  const cityData = getCity(city);
  const colors = colorMap[industry.color];
  const metrics = getIndustryMetrics(industryKey as string, city);
  const [showSources, setShowSources] = useState(false);

  const researchSources =
    (industry.research?.sources?.length ? industry.research.sources : null) ||
    (metrics.researchSources?.length ? metrics.researchSources : null) ||
    [];

  const keyStatEntries = industry.research?.keyStatistics
    ? Object.entries(industry.research.keyStatistics).slice(0, 5)
    : [];
  const evidenceEntries = industry.research?.evidence?.slice(0, 6) || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${colors.bgDark}20`, color: colors.bgDark.replace("bg-", "").replace("-600", "") }}
          >
            Verified Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Results {cityData?.name || city} {industry.name} Teams Achieve with ICIT-Led Odoo Implementation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Benchmarks and local research signals tied to how ICIT deploys Odoo for this city and industry profile.
          </p>
          <button
            onClick={() => setShowSources(true)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
          >
            View data sources & methodology
          </button>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Efficiency Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Time Savings</h3>
            <EfficiencyChart data={metrics.efficiency} color="#714B67" />
          </motion.div>

          {/* ROI Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">ROI Timeline</h3>
            <ROITimelineChart
              color="#714B67"
              breakevenMonths={metrics.roiBreakeven}
              roiAt12Months={metrics.roiAt12Months}
            />
          </motion.div>

          {/* Cost Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Cost Comparison vs Legacy ERP</h3>
            <CostComparisonChart
              color="#714B67"
              legacyCost={metrics.legacyCost * 1000}
              odooCost={metrics.odooCost * 1000}
            />
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-4">{metrics.implementationWeeks * 7}-Day Implementation</h3>
            <ImplementationTimeline color="#714B67" totalWeeks={metrics.implementationWeeks} />
          </motion.div>
        </div>

        {/* Full Width Metrics Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Before & After Odoo</h3>
          <MetricsTable
            metrics={metrics.tableMetrics}
            color="#714B67"
            source={metrics.tableSource}
          />
        </motion.div>

        {/* Sources Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-slate-100 rounded-xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h4 className="text-sm font-semibold text-slate-700">Data Sources</h4>
            <p className="text-xs text-slate-600">
              City-industry evidence profile{" "}
              {industry.research?.researchDate ? `• Updated ${industry.research.researchDate}` : ""}
            </p>
          </div>
          <button
            onClick={() => setShowSources(true)}
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
          >
            View methodology
          </button>
        </motion.div>
      </div>

      {showSources && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 relative overflow-y-auto max-h-[80vh]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">Data & Methodology</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Sourced from city-industry research profiles and linked references for {cityData?.name || city} {industry.name}.
                </p>
              </div>
              <button
                onClick={() => setShowSources(false)}
                className="text-slate-500 hover:text-slate-700 text-sm font-semibold"
                aria-label="Close sources modal"
              >
                Close
              </button>
            </div>

            {industry.research?.summary && (
              <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h5 className="text-sm font-semibold text-slate-800 mb-1">Research Summary</h5>
                <p className="text-sm text-slate-600">{industry.research.summary}</p>
              </div>
            )}

            {keyStatEntries.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-slate-800 mb-2">Key Statistics</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  {keyStatEntries.map(([label, value]) => (
                    <li key={label} className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800">{label}:</span>
                      <span className="text-slate-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {evidenceEntries.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-slate-800 mb-2">Verification Claims</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  {evidenceEntries.map((item, idx) => (
                    <li key={`${item.source}-${idx}`} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                      <p className="text-slate-800">{item.claim}</p>
                      <a
                        href={item.source}
                        target="_blank"
                        rel="noreferrer"
                        className="text-orange-600 hover:text-orange-700 underline break-all"
                      >
                        {item.source}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-slate-800 mb-2">Sources</h5>
              {researchSources.length === 0 && (
                <p className="text-sm text-slate-600">Sources not available for this combination.</p>
              )}
              <ul className="space-y-2 text-sm text-slate-700 max-h-40 overflow-y-auto pr-1">
                {researchSources.map((src) => (
                  <li key={src}>
                    {src.startsWith("http") ? (
                      <a href={src} target="_blank" rel="noreferrer" className="text-orange-600 hover:text-orange-700 underline">
                        {src}
                      </a>
                    ) : (
                      <span>{src}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Table source: {metrics.tableSource} • ROI source: {metrics.roiSource} • Cost source:{" "}
              {metrics.costSource}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
