"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  ShoppingBag,
  Truck,
  Briefcase,
  UtensilsCrossed,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const EASE = [0.6, 0.05, 0.01, 0.9] as const;

interface Industry {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  link: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

const industries: Industry[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description: "Discrete, process, and job shop production",
    features: [
      "Production planning & scheduling",
      "Real-time job costing",
      "Quality control & traceability",
      "Multi-level BOM management",
    ],
    link: "/manufacturing",
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "energy",
    title: "Energy Services",
    icon: Zap,
    description: "Oilfield equipment and field service operations",
    features: [
      "Mobile timesheet entry",
      "Real-time project costing",
      "Field service integration",
      "Serialized equipment tracking",
    ],
    link: "/energy-services",
    gradient: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "food",
    title: "Food & Beverage",
    icon: UtensilsCrossed,
    description: "Food processing, distribution, and compliance",
    features: [
      "FEFO inventory management",
      "One-click recall tracing",
      "Scalable recipe management",
      "Multi-channel distribution",
    ],
    link: "/food-beverage",
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "distribution",
    title: "Distribution & Wholesale",
    icon: Truck,
    description: "Optimize warehousing, logistics, and B2B sales",
    features: [
      "Order management & fulfillment",
      "Route planning & optimization",
      "Vendor management",
      "Multi-warehouse operations",
    ],
    link: "/distribution",
    gradient: "from-green-500 to-green-600",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "professional",
    title: "Professional Services",
    icon: Briefcase,
    description: "Consulting, agencies, and business services",
    features: [
      "Project profitability tracking",
      "Time & expense management",
      "Resource scheduling",
      "Automated billing",
    ],
    link: "/professional-services",
    gradient: "from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    icon: Globe,
    description: "Omnichannel retail and online sales",
    features: [
      "Unified POS & e-commerce",
      "Real-time inventory sync",
      "Customer loyalty programs",
      "Multi-channel fulfillment",
    ],
    link: "/retail",
    gradient: "from-pink-500 to-pink-600",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function GeneralIndustries() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ICIT Solutions delivers tailored Odoo implementations across diverse
            industries, bringing operational excellence to businesses of all sizes
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry === industry.id;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: index * 0.1,
                }}
                onHoverStart={() => setSelectedIndustry(industry.id)}
                onHoverEnd={() => setSelectedIndustry(null)}
                className="group"
              >
                <Link href={industry.link} className="block h-full">
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col relative overflow-hidden border-2 border-transparent hover:border-orange-200"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    {/* Decorative top gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${industry.gradient}`} />

                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <pattern id={`grid-${industry.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="5" cy="5" r="1" fill="currentColor" />
                        </pattern>
                        <rect width="100" height="100" fill={`url(#grid-${industry.id})`} />
                      </svg>
                    </div>

                    {/* Background Gradient (appears on hover) */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Card Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      {/* Icon Container */}
                      <motion.div
                        className="relative mb-6"
                        animate={
                          isSelected
                            ? { scale: 1.1, rotate: 5 }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.3, ease: EASE }}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl ${industry.iconBg} flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md`}
                        >
                          <Icon className={`w-8 h-8 ${industry.iconColor}`} />
                        </div>
                        {/* Icon glow effect */}
                        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {industry.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2.5 mb-6">
                          {industry.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                ease: EASE,
                                delay: index * 0.1 + idx * 0.05,
                              }}
                              className="flex items-start text-sm text-slate-700"
                            >
                              <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient} mt-1.5 mr-3 flex-shrink-0`} />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300 relative z-10 mt-auto pt-4 border-t border-slate-100">
                        <span>Learn more</span>
                        <motion.div
                          animate={isSelected ? { x: 5 } : { x: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                        >
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.div>
                      </div>

                      {/* Decorative Corner Element */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at top right, currentColor 0%, transparent 70%)`,
                        }}
                        animate={
                          isSelected ? { scale: 1.2 } : { scale: 1 }
                        }
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <div className={`text-gradient bg-gradient-to-br ${industry.gradient}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Discuss Your Industry Needs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
