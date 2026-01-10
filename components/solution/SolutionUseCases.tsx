"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Factory, Building2, Truck, ShoppingBag, Wrench, Utensils, Briefcase, Zap as ZapIcon } from "lucide-react";
import { solutions, solutionColorMap, type SolutionConfig } from "@/lib/solutionData";

const industryIcons: Record<string, React.ElementType> = {
  "Manufacturing": Factory,
  "Discrete Manufacturing": Factory,
  "Process Manufacturing": Factory,
  "Professional Services": Briefcase,
  "Distribution": Truck,
  "Retail": ShoppingBag,
  "E-commerce": ShoppingBag,
  "Energy Services": ZapIcon,
  "Food & Beverage": Utensils,
  "Services": Briefcase,
  "Restaurants": Utensils,
  "Pop-ups & Events": ShoppingBag,
  "Marketing Agencies": Building2,
  "B2B": Building2,
  "Make-to-Order": Factory,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface SolutionUseCasesProps {
  solutionKey: keyof typeof solutions;
}

export default function SolutionUseCases({ solutionKey }: SolutionUseCasesProps) {
  const solution = solutions[solutionKey];
  const colors = solutionColorMap[solution.color];

  return (
    <section className="py-24 bg-gray-50">
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
            <Building2 className={`w-4 h-4 ${colors.text}`} />
            <span className={`text-sm font-medium ${colors.text}`}>
              Industry Use Cases
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
              Your Industry
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how {solution.name} solves real problems for businesses like yours.
          </p>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {solution.useCases.map((useCase, index) => {
            const Icon = industryIcons[useCase.industry] || Building2;

            return (
              <motion.div
                key={useCase.industry}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Industry Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {useCase.industry}
                          </h3>
                          <p className="text-gray-600">
                            {useCase.scenario}
                          </p>
                        </div>

                        {/* Benefit Badge */}
                        <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.gradient} rounded-full flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span className="text-sm font-semibold text-white whitespace-nowrap">
                            {useCase.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
