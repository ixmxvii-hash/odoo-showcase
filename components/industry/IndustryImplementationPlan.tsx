"use client";

import { motion } from "framer-motion";
import { SearchCheck, Settings2, Wrench, LineChart, CheckCircle2 } from "lucide-react";
import { industries, colorMap } from "@/lib/industryData";
import { getCity, getCityIndustry } from "@/lib/cityIndustryData";

interface IndustryImplementationPlanProps {
  industryKey: keyof typeof industries;
  city: string;
}

const phaseIcons = [SearchCheck, Settings2, Wrench, LineChart];

export default function IndustryImplementationPlan({ industryKey, city }: IndustryImplementationPlanProps) {
  const industry = getCityIndustry(city, industryKey as string);
  const cityData = getCity(city);
  const colors = colorMap[industry.color];

  const implementationSteps = industry.research?.implementationSteps || [];
  const implementationFocus = industry.research?.implementationFocus || [];

  if (!implementationSteps.length && !implementationFocus.length) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
            <CheckCircle2 className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              ICIT Implementation Blueprint
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How ICIT Improves {cityData?.name || city} {industry.name} Operations with Odoo
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            ICIT applies a phased deployment so your team gets operational control quickly without a disruptive big-bang cutover.
          </p>
        </motion.div>

        {/* Section Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/section-implementation.png"
              alt="4-phase implementation roadmap - research, configure, execute, validate"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {implementationFocus.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-4 mb-10"
          >
            {implementationFocus.slice(0, 3).map((focusItem) => (
              <div key={focusItem} className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-slate-800">{focusItem}</p>
              </div>
            ))}
          </motion.div>
        )}

        {implementationSteps.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {implementationSteps.map((step, index) => {
              const Icon = phaseIcons[index] || LineChart;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{step.phase}</p>
                      <h3 className="text-lg font-bold text-slate-900 mt-1">{step.objective}</h3>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-4">
                    <span className="font-semibold text-slate-900">ICIT action:</span> {step.icitActions}
                  </p>
                  <p className="text-slate-700 mt-2">
                    <span className="font-semibold text-slate-900">Business impact:</span> {step.expectedImpact}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
