"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Package,
  ShoppingCart,
  TrendingUp,
  Calculator,
  CheckSquare,
  FolderKanban,
  Clock,
  MapPin,
  ArrowRight,
  Zap,
  Globe,
  Receipt,
} from "lucide-react";
import Link from "next/link";
import { industries, colorMap } from "@/lib/industryData";
import { getCityIndustry } from "@/lib/cityIndustryData";

// Icon mapping from string to component
const iconMap: Record<string, React.ElementType> = {
  Factory,
  Package,
  ShoppingCart,
  TrendingUp,
  Calculator,
  CheckSquare,
  FolderKanban,
  Clock,
  MapPin,
  Globe,
  Receipt,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface IndustryModulesProps {
  industryKey: keyof typeof industries;
  city?: string;
}

export default function IndustryModules({ industryKey, city }: IndustryModulesProps) {
  const industry = city ? getCityIndustry(city, industryKey as string) : industries[industryKey];
  const colors = colorMap[industry.color];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${colors.bg} rounded-full blur-3xl opacity-50`} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
            <Zap className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              Core Modules for {industry.name}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Odoo Apps That{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientDark}`}>
              Transform
            </span>{" "}
            {industry.tagline}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with these five essential modules. Add more as you grow. All apps work together seamlessly from day one.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {industry.keyModules.map((module, index) => {
            const Icon = iconMap[module.icon] || Factory;
            const isFeature = index < 3; // First 3 are featured/larger

            return (
              <motion.div
                key={module.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                }}
                className={`relative group ${isFeature ? "" : "lg:col-span-1"}`}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                  {/* Module Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Module Name */}
                  <h4 className={`text-xl font-bold text-gray-900 mb-2 group-hover:${colors.text} transition-colors duration-300`}>
                    {module.name}
                  </h4>

                  {/* Industry-Specific Use Case */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {module.useCase}
                  </p>

                  {/* Module Tag */}
                  <div className={`inline-flex items-center gap-1 px-3 py-1 ${colors.bg} rounded-full`}>
                    <span className={`text-xs font-medium ${colors.text}`}>
                      {industry.tagline} Ready
                    </span>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-6 right-6 w-8 h-8 ${colors.bgDark} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center"
        >
          <div className={`inline-flex flex-col items-center gap-4 bg-gradient-to-br ${colors.bg} to-white rounded-3xl p-8 border-2 border-gray-200`}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {industry.keyModules.slice(0, 5).map((module, idx) => {
                  const Icon = iconMap[module.icon] || Factory;
                  return (
                    <div
                      key={idx}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 shadow-sm"
                    >
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                  );
                })}
                <div className={`w-10 h-10 ${colors.bgDark} rounded-full flex items-center justify-center border-2 border-white shadow-sm`}>
                  <span className="text-xs font-bold text-white">40+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to transform your {industry.tagline.toLowerCase()} operations?
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Start with the modules you need today. Add more as your {industry.name.toLowerCase()} business grows.
                All apps work together seamlessly.
              </p>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${colors.gradientDark} text-white font-semibold rounded-xl shadow-lg ${colors.shadow} hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
              >
                Get Your {industry.name} Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
