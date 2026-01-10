"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  Package,
  ShoppingCart,
  Factory,
  Globe,
  Mail,
  Calendar,
  UserCheck,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { solutions, solutionColorMap, type SolutionConfig } from "@/lib/solutionData";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Calculator,
  Package,
  ShoppingCart,
  Factory,
  Globe,
  Mail,
  Calendar,
  UserCheck,
  CRM: Users,
  Accounting: Calculator,
  Inventory: Package,
  Purchase: ShoppingCart,
  Manufacturing: Factory,
  "E-commerce": Globe,
  "Email Marketing": Mail,
  HR: UserCheck,
  Sales: Users,
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface SolutionIntegrationsProps {
  solutionKey: keyof typeof solutions;
}

export default function SolutionIntegrations({ solutionKey }: SolutionIntegrationsProps) {
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
            <LinkIcon className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              Seamless Integrations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Works With{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
              Everything
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.name} connects natively with other Odoo apps. No middleware. No sync issues.
          </p>
        </motion.div>

        {/* Integrations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {solution.integrations.map((integration) => {
            const Icon = iconMap[integration.icon] || iconMap[integration.name] || Package;

            return (
              <motion.div
                key={integration.name}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {integration.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className={`inline-flex flex-col items-center gap-4 bg-gradient-to-br ${colors.bg} rounded-3xl p-8 border-2 ${colors.border}`}>
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to see {solution.name} in action?
            </h3>
            <p className="text-gray-600 max-w-xl">
              Get a personalized demo showing how {solution.name} can transform your business operations.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${colors.gradientDark} text-white font-semibold rounded-xl shadow-lg ${colors.shadow} hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
              >
                Schedule Your Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
