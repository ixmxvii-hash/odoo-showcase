"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Clock,
  Eye,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/Card";

const painPoints = [
  {
    icon: Layers,
    title: "Too Many Disconnected Systems",
    description:
      "QuickBooks for accounting, spreadsheets for inventory, another tool for CRM. Data silos everywhere.",
  },
  {
    icon: Clock,
    title: "Hours Lost to Manual Work",
    description:
      "Re-entering data, reconciling spreadsheets, chasing down information. Your team deserves better.",
  },
  {
    icon: Eye,
    title: "No Real-Time Visibility",
    description:
      "Month-end surprises, outdated reports, decisions based on stale data.",
  },
  {
    icon: DollarSign,
    title: "Revenue Leaking Through Cracks",
    description:
      "Missed invoices, billing errors, inventory discrepancies eating into your margins.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Feels Impossible",
    description:
      "Your current systems worked when you were smaller. Now they're holding you back.",
  },
  {
    icon: Users,
    title: "Knowledge Trapped in People",
    description:
      "Key processes live in someone's head. What happens when they're gone?",
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
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function GeneralPainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sound Familiar?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-orange-500" />
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

        <motion.div
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-200 shadow-lg">
            <CardContent className="py-8">
              <blockquote className="text-center">
                <p className="text-2xl font-medium text-gray-900 mb-4">
                  "The average SMB uses 5+ disconnected tools. It doesn't have
                  to be this way."
                </p>
                <div className="w-16 h-1 bg-orange-500 mx-auto" />
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
