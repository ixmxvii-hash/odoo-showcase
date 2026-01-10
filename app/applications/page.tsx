"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Layers,
  X,
  Globe,
  ShoppingCart,
  DollarSign,
  Package,
  Users,
  Megaphone,
  Wrench,
  Sparkles,
} from "lucide-react";
import { solutions, solutionColorMap } from "@/lib/solutionData";

// Core apps we implement - these link to solution pages
const coreApps: Record<string, { icon: string; name: string; color: string }> = {
  crm: {
    icon: "https://download.odoocdn.com/icons/crm/static/description/icon.svg",
    name: "CRM",
    color: "from-purple-500 to-purple-600",
  },
  sales: {
    icon: "https://download.odoocdn.com/icons/sale_management/static/description/icon.svg",
    name: "Sales",
    color: "from-orange-500 to-orange-600",
  },
  accounting: {
    icon: "https://download.odoocdn.com/icons/accountant/static/description/icon.svg",
    name: "Accounting",
    color: "from-blue-500 to-blue-600",
  },
  invoicing: {
    icon: "https://download.odoocdn.com/icons/account/static/description/icon.svg",
    name: "Invoicing",
    color: "from-yellow-500 to-yellow-600",
  },
  inventory: {
    icon: "https://download.odoocdn.com/icons/stock/static/description/icon.svg",
    name: "Inventory",
    color: "from-purple-500 to-purple-600",
  },
  purchase: {
    icon: "https://download.odoocdn.com/icons/purchase/static/description/icon.svg",
    name: "Purchase",
    color: "from-teal-500 to-teal-600",
  },
  manufacturing: {
    icon: "https://download.odoocdn.com/icons/mrp/static/description/icon.svg",
    name: "Manufacturing",
    color: "from-orange-500 to-orange-600",
  },
  hr: {
    icon: "https://download.odoocdn.com/icons/hr/static/description/icon.svg",
    name: "HR",
    color: "from-teal-500 to-teal-600",
  },
  projectManagement: {
    icon: "https://download.odoocdn.com/icons/project/static/description/icon.svg",
    name: "Project",
    color: "from-teal-500 to-teal-600",
  },
  ecommerce: {
    icon: "https://download.odoocdn.com/icons/website_sale/static/description/icon.svg",
    name: "eCommerce",
    color: "from-cyan-500 to-cyan-600",
  },
  pointOfSale: {
    icon: "https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg",
    name: "Point of Sale",
    color: "from-orange-500 to-orange-600",
  },
  marketing: {
    icon: "https://download.odoocdn.com/icons/mass_mailing/static/description/icon.svg",
    name: "Email Marketing",
    color: "from-indigo-500 to-indigo-600",
  },
};

// Additional apps organized by category
const appCategories = [
  {
    name: "Website",
    icon: Globe,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/website/static/description/icon.svg", name: "Website" },
      { icon: "https://download.odoocdn.com/icons/website_blog/static/description/icon.svg", name: "Blog" },
      { icon: "https://download.odoocdn.com/icons/website_forum/static/description/icon.svg", name: "Forum" },
      { icon: "https://download.odoocdn.com/icons/website_slides/static/description/icon.svg", name: "eLearning" },
      { icon: "https://download.odoocdn.com/icons/im_livechat/static/description/icon.svg", name: "Live Chat" },
    ],
  },
  {
    name: "Sales",
    icon: ShoppingCart,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/sale_subscription/static/description/icon.svg", name: "Subscriptions" },
      { icon: "https://download.odoocdn.com/icons/sale_renting/static/description/icon.svg", name: "Rental" },
    ],
  },
  {
    name: "Finance",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/hr_expense/static/description/icon.svg", name: "Expenses" },
      { icon: "https://download.odoocdn.com/icons/documents/static/description/icon.svg", name: "Documents" },
      { icon: "https://download.odoocdn.com/icons/documents_spreadsheet/static/description/icon.svg", name: "Spreadsheets" },
      { icon: "https://download.odoocdn.com/icons/sign/static/description/icon.svg", name: "Sign" },
    ],
  },
  {
    name: "Inventory & MFG",
    icon: Package,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/mrp_plm/static/description/icon.svg", name: "PLM" },
      { icon: "https://download.odoocdn.com/icons/maintenance/static/description/icon.svg", name: "Maintenance" },
      { icon: "https://download.odoocdn.com/icons/quality_control/static/description/icon.svg", name: "Quality" },
    ],
  },
  {
    name: "Human Resources",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/hr_recruitment/static/description/icon.svg", name: "Recruitment" },
      { icon: "https://download.odoocdn.com/icons/hr_holidays/static/description/icon.svg", name: "Time Off" },
      { icon: "https://download.odoocdn.com/icons/hr_appraisal/static/description/icon.svg", name: "Appraisals" },
      { icon: "https://download.odoocdn.com/icons/hr_referral/static/description/icon.svg", name: "Referral" },
      { icon: "https://download.odoocdn.com/icons/fleet/static/description/icon.svg", name: "Fleet" },
      { icon: "https://download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg", name: "Timesheets" },
    ],
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/marketing_automation/static/description/icon.svg", name: "Automation" },
      { icon: "https://download.odoocdn.com/icons/sms/static/description/icon.svg", name: "SMS" },
      { icon: "https://download.odoocdn.com/icons/social/static/description/icon.svg", name: "Social" },
      { icon: "https://download.odoocdn.com/icons/event/static/description/icon.svg", name: "Events" },
      { icon: "https://download.odoocdn.com/icons/survey/static/description/icon.svg", name: "Survey" },
    ],
  },
  {
    name: "Services",
    icon: Wrench,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/helpdesk/static/description/icon.svg", name: "Helpdesk" },
      { icon: "https://download.odoocdn.com/icons/industry_fsm/static/description/icon.svg", name: "Field Service" },
      { icon: "https://download.odoocdn.com/icons/planning/static/description/icon.svg", name: "Planning" },
    ],
  },
  {
    name: "Productivity",
    icon: Sparkles,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    apps: [
      { icon: "https://download.odoocdn.com/icons/knowledge/static/description/icon.svg", name: "Knowledge" },
      { icon: "https://download.odoocdn.com/icons/discuss/static/description/icon.svg", name: "Discuss" },
      { icon: "https://download.odoocdn.com/icons/calendar/static/description/icon.svg", name: "Calendar" },
      { icon: "https://download.odoocdn.com/icons/contacts/static/description/icon.svg", name: "Contacts" },
      { icon: "https://download.odoocdn.com/icons/note/static/description/icon.svg", name: "Notes" },
    ],
  },
];

export default function ApplicationsPage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const handleAppClick = (appKey: string) => {
    setSelectedApp(appKey);
  };

  const handleClose = () => {
    setSelectedApp(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Layers className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">
                One Platform, Endless Possibilities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Odoo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Applications
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Over 40 integrated business applications. Click any core app below to see how we can configure it for your Houston business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Apps Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Core Applications</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Business Essentials
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click any app to see how we configure it for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
            {Object.entries(coreApps).map(([key, app], index) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                onClick={() => handleAppClick(key)}
                className="group relative flex flex-col items-center p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="relative text-sm font-semibold text-slate-700 text-center group-hover:text-slate-900">
                  {app.name}
                </span>

                {/* Click indicator */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Apps by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Additional Applications
            </h2>
            <p className="text-slate-600">
              Extend your Odoo system with these specialized modules
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                  className="bg-slate-50 rounded-2xl p-5 hover:bg-slate-100/80 transition-colors duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <CategoryIcon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-slate-800">{category.name}</h3>
                  </div>

                  {/* Apps Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {category.apps.map((app) => (
                      <div
                        key={app.name}
                        className="flex flex-col items-center p-2 bg-white rounded-xl hover:shadow-md transition-all duration-200 group cursor-default"
                      >
                        <div className="w-8 h-8 mb-1.5 flex items-center justify-center">
                          <img
                            src={app.icon}
                            alt={app.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                          />
                        </div>
                        <span className="text-[10px] font-medium text-slate-600 text-center leading-tight">
                          {app.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Detail Modal */}
      <AnimatePresence>
        {selectedApp && solutions[selectedApp] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const solution = solutions[selectedApp];
                const colors = solutionColorMap[solution.color];
                const appIcon = coreApps[selectedApp];

                return (
                  <>
                    {/* Close Button */}
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      {/* Header with Icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg flex items-center justify-center p-2.5`}>
                          <img
                            src={appIcon.icon}
                            alt={appIcon.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            {solution.name}
                          </h2>
                          <p className={`${colors.text} font-medium`}>
                            {solution.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">
                        {solution.heroDescription}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-8 mb-8 pb-6 border-b border-gray-100">
                        {solution.benefits.map((benefit) => (
                          <div key={benefit.label} className="text-center">
                            <div className={`text-3xl font-bold ${colors.text}`}>
                              {benefit.stat}
                            </div>
                            <div className="text-sm text-gray-500">
                              {benefit.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Features */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                            Key Features
                          </h3>
                          <div className="space-y-3">
                            {solution.features.slice(0, 4).map((feature) => (
                              <div key={feature.title} className="flex items-start gap-3">
                                <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                <div>
                                  <span className="font-medium text-gray-900">
                                    {feature.title}
                                  </span>
                                  <p className="text-sm text-gray-500">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Capabilities & Integrations */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                            Capabilities
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {solution.keyCapabilities.map((cap) => (
                              <span
                                key={cap}
                                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>

                          <h3 className="font-semibold text-gray-900 mb-3">
                            Integrates With
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {solution.integrations.map((integration) => (
                              <span
                                key={integration.name}
                                className={`px-3 py-1.5 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                              >
                                {integration.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                        <Link href={`/solutions/${solution.slug}`} className="flex-1">
                          <Button className={`w-full bg-gradient-to-r ${colors.gradientDark} text-white`}>
                            Learn More About {solution.name}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="w-full sm:w-auto">
                            Get a Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Integration Message */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">
                True Integration
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every Module Works Together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Unlike piecing together separate software, Odoo modules share the same database.
              A sales order flows to inventory, triggers manufacturing, generates invoices—automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "No Integration Headaches",
                description: "Forget API connections, data mapping, and sync errors. Everything just works.",
              },
              {
                title: "Single Source of Truth",
                description: "Customer data, inventory levels, financials—all in one place, always accurate.",
              },
              {
                title: "Start Small, Scale Up",
                description: "Begin with what you need. Add modules as your business grows. Same system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let Us Configure Odoo for Your Business
            </h2>
            <p className="text-xl text-orange-100 mb-10">
              Every business is different. We customize each module to match your exact workflows,
              not force you into a one-size-fits-all approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-lg"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/roi-calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold"
                >
                  Calculate Your ROI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
