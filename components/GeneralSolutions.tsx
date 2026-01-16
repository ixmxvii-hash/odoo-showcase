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
  FileText,
  Truck,
  Receipt,
  Banknote,
  ClipboardList,
  PackageCheck,
  FileCheck,
  Wallet,
  ChevronRight,
} from "lucide-react";

const solutions = [
  {
    category: "Core Business",
    apps: [
      {
        name: "Sales & CRM",
        icon: Users,
        description: "Lead management, quotes, pipeline",
        color: "bg-orange-50",
        iconColor: "text-orange-600",
        href: "/solutions/sales-crm",
      },
      {
        name: "Accounting",
        icon: Calculator,
        description: "Invoicing, bills, reports",
        color: "bg-blue-50",
        iconColor: "text-blue-600",
        href: "/solutions/accounting",
      },
      {
        name: "Inventory",
        icon: Package,
        description: "Stock management, warehousing",
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
        name: "Purchase",
        icon: ShoppingCart,
        description: "Vendor management, procurement",
        color: "bg-green-50",
        iconColor: "text-green-600",
        href: "/solutions/purchase",
      },
      {
        name: "Manufacturing",
        icon: Factory,
        description: "MRP, work orders, BOMs",
        color: "bg-red-50",
        iconColor: "text-red-600",
        href: "/solutions/manufacturing",
      },
      {
        name: "Project Management",
        icon: Kanban,
        description: "Tasks, timesheets, planning",
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
        name: "E-commerce",
        icon: Globe,
        description: "Online store, payments",
        color: "bg-indigo-50",
        iconColor: "text-indigo-600",
        href: "/solutions/ecommerce",
      },
      {
        name: "Point of Sale",
        icon: CreditCard,
        description: "Retail, restaurant POS",
        color: "bg-pink-50",
        iconColor: "text-pink-600",
        href: "/solutions/point-of-sale",
      },
      {
        name: "Marketing",
        icon: Megaphone,
        description: "Email, automation, social",
        color: "bg-teal-50",
        iconColor: "text-teal-600",
        href: "/solutions/marketing",
      },
    ],
  },
] as const;

// Process flows
const orderToCash = [
  { icon: FileText, label: "Sales Order", description: "Quote & confirm" },
  { icon: Truck, label: "Delivery", description: "Ship to customer" },
  { icon: Receipt, label: "Invoice", description: "Bill customer" },
  { icon: Banknote, label: "Payment", description: "Collect payment" },
];

const procureToPay = [
  { icon: ClipboardList, label: "Purchase Request", description: "Request goods" },
  { icon: FileCheck, label: "Purchase Order", description: "Confirm with vendor" },
  { icon: PackageCheck, label: "Receipt", description: "Receive goods" },
  { icon: Wallet, label: "Payment", description: "Pay vendor" },
];

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

interface ProcessFlowProps {
  title: string;
  subtitle: string;
  steps: { icon: React.ElementType; label: string; description: string }[];
  color: "orange" | "blue";
}

function ProcessFlow({ title, subtitle, steps, color }: ProcessFlowProps) {
  const colors = {
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      lineBg: "bg-orange-300",
      titleColor: "text-orange-900",
      badgeBg: "bg-orange-500",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      lineBg: "bg-blue-300",
      titleColor: "text-blue-900",
      badgeBg: "bg-blue-500",
    },
  };

  const c = colors[color];

  return (
    <motion.div
      variants={itemVariants}
      className={`${c.bg} ${c.border} border-2 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className={`${c.badgeBg} text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit`}>
          {subtitle}
        </div>
        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${c.titleColor} leading-tight`}>{title}</h3>
      </div>

      {/* Flow Diagram */}
      <div className="relative">
        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:flex items-center justify-between gap-2 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center flex-1">
                {/* Step */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                  className="flex flex-col items-center text-center w-full"
                >
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 ${c.iconBg} rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 lg:mb-3 shadow-sm`}>
                    <Icon className={`w-7 h-7 lg:w-8 lg:h-8 ${c.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-900 text-xs lg:text-sm leading-tight px-1">{step.label}</span>
                  <span className="text-xs text-gray-500 mt-1 leading-tight px-1">{step.description}</span>
                </motion.div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1, duration: 0.3 }}
                    className="flex items-center mx-2 lg:mx-4 flex-shrink-0"
                  >
                    <div className={`w-8 lg:w-12 h-1 ${c.lineBg} rounded-full`} />
                    <ChevronRight className={`w-4 h-4 lg:w-5 lg:h-5 ${c.iconColor} -ml-1 flex-shrink-0`} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet: Compact Horizontal Flow */}
        <div className="hidden sm:flex md:hidden items-center justify-between gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex flex-col items-center text-center w-full"
                >
                  <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center mb-2 shadow-sm`}>
                    <Icon className={`w-6 h-6 ${c.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-900 text-xs leading-tight">{step.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5 leading-tight line-clamp-1">{step.description}</span>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="flex items-center mx-1 flex-shrink-0">
                    <ChevronRight className={`w-4 h-4 ${c.iconColor}`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="sm:hidden space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-10 h-10 ${c.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${c.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span className="font-semibold text-gray-900 text-sm block leading-tight">{step.label}</span>
                    <span className="text-xs text-gray-500 block mt-0.5 leading-relaxed">{step.description}</span>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`w-0.5 h-3 ${c.lineBg} ml-5 mt-1 mb-1`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

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
              Complete Business Suite
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            One Platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Endless Possibilities.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Start with what you need. Add more as you grow. All apps work together seamlessly.
          </p>
        </motion.div>

        {/* Process Flow Diagrams */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16"
        >
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
                Ready to transform your business?
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Join thousands of companies running their entire business on
                Odoo. Modular, affordable, and built to scale with you.
              </p>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
