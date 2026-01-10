"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  FileText,
  Mail,
  Calendar,
  BarChart,
  Receipt,
  Wallet,
  Building,
  FileSpreadsheet,
  Globe,
  Calculator,
  Layers,
  Scan,
  RefreshCw,
  GitBranch,
  Route,
  Clock,
  CheckCircle,
  Scale,
  Package,
  TrendingDown,
  Factory,
  ClipboardList,
  AlertTriangle,
  LayoutDashboard,
  DollarSign,
  Zap,
  Layout,
  CreditCard,
  Truck,
  WifiOff,
  Gift,
  Share2,
  Target,
  MessageSquare,
} from "lucide-react";
import { solutions, solutionColorMap, type SolutionConfig } from "@/lib/solutionData";

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  FileText,
  Mail,
  Calendar,
  BarChart,
  Receipt,
  Wallet,
  Building,
  FileSpreadsheet,
  Globe,
  Calculator,
  Layers,
  Scan,
  RefreshCw,
  GitBranch,
  Route,
  Clock,
  CheckCircle,
  Scale,
  Package,
  TrendingDown,
  Factory,
  ClipboardList,
  AlertTriangle,
  LayoutDashboard,
  DollarSign,
  Zap,
  Layout,
  CreditCard,
  Truck,
  WifiOff,
  Gift,
  Share2,
  Target,
  MessageSquare,
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

interface SolutionFeaturesProps {
  solutionKey: keyof typeof solutions;
}

export default function SolutionFeatures({ solutionKey }: SolutionFeaturesProps) {
  const solution = solutions[solutionKey];
  const colors = solutionColorMap[solution.color];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
            <Zap className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              Key Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
              Succeed
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that work together seamlessly. No more disconnected tools.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solution.features.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle;

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
