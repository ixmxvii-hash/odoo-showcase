"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  Scan,
  Database,
  TrendingUp,
  RefreshCw,
  FileCode,
  GitBranch,
  CheckSquare,
  Scale,
  Shield,
  BarChart,
  Clock,
  MapPin,
  Link,
  QrCode,
  Zap,
  Beaker,
  Layers,
  Thermometer,
  Route,
  CheckCircle,
  ArrowRight,
  Globe,
  Receipt,
} from "lucide-react";
import NextLink from "next/link";
import { industries, colorMap } from "@/lib/industryData";
import { getCity, getCityIndustry } from "@/lib/cityIndustryData";

// Icon mapping from string to component
const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Calculator,
  Scan,
  Database,
  TrendingUp,
  RefreshCw,
  FileCode,
  GitBranch,
  CheckSquare,
  Scale,
  Shield,
  BarChart,
  Clock,
  MapPin,
  Link,
  QrCode,
  Zap,
  Beaker,
  Layers,
  Thermometer,
  Route,
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

interface IndustrySolutionsProps {
  industryKey: keyof typeof industries;
  city?: string;
}

export default function IndustrySolutions({ industryKey, city }: IndustrySolutionsProps) {
  const industry = city ? getCityIndustry(city, industryKey as string) : industries[industryKey];
  const cityData = city ? getCity(city) : null;
  const colors = colorMap[industry.color];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 ${colors.bg} rounded-full blur-3xl opacity-30`} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50" />
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
            <CheckCircle className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              How Odoo Solves It
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientDark}`}>
              {industry.name}
            </span>{" "}
            Solution
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every pain point has a solution. Here&apos;s how ICIT implements Odoo to transform{" "}
            {industry.tagline.toLowerCase()} operations in {cityData?.name || "Texas"}.
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
              src="/images/section-solutions.png"
              alt="Unified ERP solution connecting sales, inventory, accounting, and CRM"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {industry.solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] || CheckCircle;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                }}
                className="group"
              >
                <div className={`bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full`}>
                  {/* Solution Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Solution Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h4>

                  {/* Solution Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className={`bg-gradient-to-r ${colors.gradientDark} rounded-2xl p-8 md:p-12`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Fix the Root Operational Bottlenecks?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s map these workflows to your business and define a phased go-live plan with ICIT.
              Schedule a consultation for your {cityData?.name || "Texas"} team.
            </p>
            <NextLink href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </NextLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
