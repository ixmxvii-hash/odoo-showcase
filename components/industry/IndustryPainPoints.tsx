"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  Package,
  Users,
  FileText,
  AlertTriangle,
  Beaker,
  Search,
  ClipboardCheck,
  Scale,
  AlertOctagon,
  Layers,
  Clock,
  Truck,
  Wrench,
  Receipt,
  Utensils,
  ShoppingCart,
  Thermometer,
  BarChart,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { industries, colorMap } from "@/lib/industryData";

// Icon mapping from string to component
const iconMap: Record<string, React.ElementType> = {
  Calendar,
  DollarSign,
  Package,
  Users,
  FileText,
  AlertTriangle,
  Beaker,
  Search,
  ClipboardCheck,
  Scale,
  AlertOctagon,
  Layers,
  Clock,
  Truck,
  Wrench,
  Receipt,
  Utensils,
  ShoppingCart,
  Thermometer,
  BarChart,
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

interface IndustryPainPointsProps {
  industryKey: keyof typeof industries;
}

export default function IndustryPainPoints({ industryKey }: IndustryPainPointsProps) {
  const industry = industries[industryKey];
  const colors = colorMap[industry.color];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
            <AlertTriangle className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              {industry.name} Challenges
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Chaos Killing Your{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientDark}`}>
              Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sound familiar? These are the pain points we hear from {industry.houstonZones[0]} {industry.tagline.toLowerCase()} businesses every day.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industry.painPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || AlertTriangle;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {point.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industry-Specific Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-r-lg`}
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
            <div>
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The Implementation Fear is Real
              </p>
              <p className="text-gray-700">
                <span className={`font-bold ${colors.text}`}>
                  32% of small and mid-sized businesses
                </span>{" "}
                cite business disruption as their #1 barrier to ERP adoption.
                They want the benefits, but they&apos;re terrified of the risk.
              </p>
              <p className="text-gray-700 mt-2">
                That&apos;s exactly why ICIT Solutions built our proven 90-day implementation framework for {industry.name.toLowerCase()} companies
                &mdash; to eliminate that fear and deliver results in weeks, not years.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
