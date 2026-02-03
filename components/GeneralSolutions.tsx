"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Calculator,
  Package,
  ShoppingCart,
  Factory,
  Kanban,
  Globe,
  CreditCard,
  Megaphone,
  ArrowRight,
  Zap,
} from "lucide-react";

const solutions = [
  {
    category: "Core Business",
    apps: [
      {
        name: "Automate Sales Workflow",
        icon: Users,
        description: "Track leads, quotes, and follow-up in one place",
        color: "bg-orange-50",
        iconColor: "text-orange-600",
        href: "/solutions/sales-crm",
      },
      {
        name: "Manage Accounting",
        icon: Calculator,
        description: "Handle invoicing, bills, and financial reporting",
        color: "bg-blue-50",
        iconColor: "text-blue-600",
        href: "/solutions/accounting",
      },
      {
        name: "Manage Inventory",
        icon: Package,
        description: "Control stock, warehousing, and replenishment",
        color: "bg-purple-50",
        iconColor: "text-purple-600",
        href: "/solutions/inventory",
      },
    ],
  },
  {
    category: "Operations",
    apps: [
      {
        name: "Automate Purchasing",
        icon: ShoppingCart,
        description: "Create POs, manage vendors, and track spend",
        color: "bg-green-50",
        iconColor: "text-green-600",
        href: "/solutions/purchase",
      },
      {
        name: "Run Production",
        icon: Factory,
        description: "Plan work orders, BOMs, and shop-floor execution",
        color: "bg-red-50",
        iconColor: "text-red-600",
        href: "/solutions/manufacturing",
      },
      {
        name: "Track Projects",
        icon: Kanban,
        description: "Manage tasks, milestones, and team timelines",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600",
        href: "/solutions/project-management",
      },
    ],
  },
  {
    category: "Growth",
    apps: [
      {
        name: "Sell Online",
        icon: Globe,
        description: "Run e-commerce storefronts and collect payments",
        color: "bg-indigo-50",
        iconColor: "text-indigo-600",
        href: "/solutions/ecommerce",
      },
      {
        name: "Run Point of Sale",
        icon: CreditCard,
        description: "Support retail and restaurant in-store operations",
        color: "bg-pink-50",
        iconColor: "text-pink-600",
        href: "/solutions/point-of-sale",
      },
      {
        name: "Automate Marketing",
        icon: Megaphone,
        description: "Launch campaigns, automate outreach, and measure",
        color: "bg-teal-50",
        iconColor: "text-teal-600",
        href: "/solutions/marketing",
      },
    ],
  },
] as const;

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

export default function GeneralSolutions() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 rounded-full mb-4 sm:mb-6">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
            <span className="text-xs sm:text-sm font-medium text-orange-900">
              Automated Workflows with Odoo
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Automate What Matters.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Scale with Confidence.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Start with the workflows you need now, then add modules as your business grows.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {solutions.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={itemVariants}>
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-orange-500/30">
                  {categoryIndex + 1}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mt-1" />
                </div>
              </div>

              {/* Apps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {category.apps.map((app) => {
                  const Icon = app.icon;

                  return (
                    <Link key={app.name} href={app.href}>
                      <motion.div
                        variants={cardVariants}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                        }}
                        className="relative group h-full"
                      >
                        <div className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full">
                          {/* App Icon */}
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${app.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${app.iconColor}`} />
                          </div>

                          {/* App Name */}
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                            {app.name}
                          </h4>

                          {/* App Description */}
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            {app.description}
                          </p>

                          {/* Hover indicator */}
                          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-8 border-2 border-orange-200">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[Users, Calculator, Package, Globe, Factory].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-orange-100 shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                  )
                )}
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center border-2 border-orange-100 shadow-sm">
                  <span className="text-xs font-bold text-white">40+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to map Odoo to your workflows?
              </h3>
              <p className="text-gray-600 max-w-2xl">
                We help you prioritize the right apps, phase your rollout, and train your team for adoption.
              </p>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 flex items-center gap-2"
              >
                Plan My Odoo Rollout
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
