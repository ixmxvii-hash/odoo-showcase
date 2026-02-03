"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Settings, Beaker, Cpu, MapPin, AlertCircle, CheckCircle2, type LucideIcon } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  zipCodes: string[];
  industries: string[];
  painPoints: string[];
  solutions: string[];
  color: string;
}

const industries: Industry[] = [
  {
    id: "energy",
    name: "Energy Corridor",
    icon: Zap,
    zipCodes: ["77079", "77084", "77041"],
    industries: ["Energy Services", "Equipment Manufacturing", "Engineering"],
    painPoints: [
      "Project cost overruns",
      "Timesheet chaos",
      "Disconnected project management"
    ],
    solutions: [
      "Project-Based ERP",
      "Integrated Timesheets",
      "Job Costing"
    ],
    color: "orange"
  },
  {
    id: "northwest",
    name: "Northwest Industrial",
    icon: Settings,
    zipCodes: ["77040", "77041", "77064"],
    industries: ["Machine Shops", "Fabrication", "Precision Engineering"],
    painPoints: [
      "Job shop scheduling chaos",
      "Scrap tracking",
      "Multi-level BOMs"
    ],
    solutions: [
      "Shop Floor Control",
      "Visual Production Planning",
      "Real-Time Inventory"
    ],
    color: "blue"
  },
  {
    id: "port",
    name: "East/Port Region",
    icon: Beaker,
    zipCodes: ["77029", "77015", "77571"],
    industries: ["Petrochemical", "Process Manufacturing", "Chemical Blending"],
    painPoints: [
      "Batch traceability",
      "Compliance tracking",
      "Formula management"
    ],
    solutions: [
      "Quality Control",
      "Batch Tracking",
      "FDA/EPA Compliance"
    ],
    color: "emerald"
  },
  {
    id: "southwest",
    name: "Fort Bend/Southwest",
    icon: Cpu,
    zipCodes: ["77477", "77478"],
    industries: ["Light Industrial", "Electronics", "Food & Beverage"],
    painPoints: [
      "Inventory turnover",
      "E-commerce integration",
      "Barcode scanning"
    ],
    solutions: [
      "Multi-Channel Sales",
      "Barcode Scanning",
      "Inventory Optimization"
    ],
    color: "purple"
  }
];

const colorMap = {
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-500",
    text: "text-orange-600",
    hover: "hover:bg-orange-100",
    gradient: "from-orange-500 to-amber-500"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-600",
    hover: "hover:bg-blue-100",
    gradient: "from-blue-500 to-cyan-500"
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    text: "text-emerald-600",
    hover: "hover:bg-emerald-100",
    gradient: "from-emerald-500 to-teal-500"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-500",
    text: "text-purple-600",
    hover: "hover:bg-purple-100",
    gradient: "from-purple-500 to-pink-500"
  }
};

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("energy");

  const activeIndustry = industries.find(ind => ind.id === selectedIndustry);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            We Know Houston Manufacturing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep expertise in the industries that power Houston&apos;s economy. Select your region to see how Odoo transforms your operations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const colors = colorMap[industry.color as keyof typeof colorMap];
            const isActive = selectedIndustry === industry.id;

            return (
              <motion.button
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`
                  relative px-6 py-4 rounded-xl border-2 transition-all duration-300
                  ${isActive
                    ? `${colors.bg} ${colors.border} shadow-lg scale-105`
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    p-2 rounded-lg
                    ${isActive
                      ? `bg-gradient-to-br ${colors.gradient} text-white`
                      : 'bg-slate-100 text-slate-600'
                    }
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className={`font-semibold ${isActive ? colors.text : 'text-slate-900'}`}>
                      {industry.name}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {industry.zipCodes.join(", ")}
                    </div>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 border-2 ${colors.border} rounded-xl`}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeIndustry && (
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Industries Served */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${colorMap[activeIndustry.color as keyof typeof colorMap].gradient}`}>
                      <activeIndustry.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Industries Served
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {activeIndustry.industries.map((ind, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${colorMap[activeIndustry.color as keyof typeof colorMap].text}`} />
                        <span className="text-slate-700">{ind}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Zip Code Badges */}
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-slate-600 mb-2">Coverage Area</div>
                    <div className="flex flex-wrap gap-2">
                      {activeIndustry.zipCodes.map((zip, idx) => (
                        <motion.span
                          key={zip}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className={`
                            px-3 py-1 rounded-full text-sm font-medium
                            ${colorMap[activeIndustry.color as keyof typeof colorMap].bg}
                            ${colorMap[activeIndustry.color as keyof typeof colorMap].text}
                          `}
                        >
                          {zip}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pain Points */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Common Pain Points
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {activeIndustry.painPoints.map((pain, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-3"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-slate-700">{pain}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Odoo Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Odoo Solutions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {activeIndustry.solutions.map((solution, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className={`
                          border-2 rounded-lg p-3
                          ${colorMap[activeIndustry.color as keyof typeof colorMap].bg}
                          ${colorMap[activeIndustry.color as keyof typeof colorMap].border}
                        `}
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className={`w-5 h-5 mt-0.5 ${colorMap[activeIndustry.color as keyof typeof colorMap].text}`} />
                          <span className="font-medium text-slate-900">{solution}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <button className={`
                  px-8 py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${colorMap[activeIndustry.color as keyof typeof colorMap].gradient}
                  hover:shadow-lg transition-all duration-300 transform hover:scale-105
                `}>
                  Schedule Your {activeIndustry.name} Demo
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
