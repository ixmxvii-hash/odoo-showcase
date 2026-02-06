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
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    title: "Disconnected Tools Everywhere",
    description:
      "QuickBooks for accounting, spreadsheets for inventory, and separate tools for CRM create daily data silos.",
  },
  {
    icon: Clock,
    title: "Manual Work Steals Time",
    description:
      "Re-entering data, reconciling spreadsheets, and chasing updates slows your team down every day.",
  },
  {
    icon: Eye,
    title: "No Real-Time Visibility",
    description:
      "Leaders make critical decisions using stale reports and delayed updates.",
  },
  {
    icon: DollarSign,
    title: "Failed Implementation Risk",
    description:
      "Many teams worry about costly projects, weak adoption, and going live with a system that does not fit.",
  },
  {
    icon: TrendingUp,
    title: "Odoo Feels Hard to Customize",
    description:
      "Without a partner, it is hard to map Odoo to your exact workflows and priorities.",
  },
  {
    icon: Users,
    title: "Support Gaps After Go-Live",
    description:
      "Teams are often left without local guidance, structured training, or fast support after launch.",
  },
] as const;

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

/* Desktop positions: 3 left, 3 right — staggered around the image */
const cardPositions = [
  // Left column (top, middle, bottom)
  "lg:absolute lg:left-0 lg:top-[2%] lg:w-[280px] xl:w-[300px]",
  "lg:absolute lg:left-[-20px] lg:top-[35%] lg:w-[280px] xl:w-[300px]",
  "lg:absolute lg:left-[10px] lg:bottom-[2%] lg:w-[280px] xl:w-[300px]",
  // Right column (top, middle, bottom)
  "lg:absolute lg:right-0 lg:top-[2%] lg:w-[280px] xl:w-[300px]",
  "lg:absolute lg:right-[-20px] lg:top-[35%] lg:w-[280px] xl:w-[300px]",
  "lg:absolute lg:right-[10px] lg:bottom-[2%] lg:w-[280px] xl:w-[300px]",
];

const cardAnimations = [
  { x: -60, y: -20 },
  { x: -80, y: 0 },
  { x: -60, y: 20 },
  { x: 60, y: -20 },
  { x: 80, y: 0 },
  { x: 60, y: 20 },
];

export default function GeneralPainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">
              Common Challenges
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Is your business facing this?
          </h2>
        </motion.div>

        {/* --- Desktop: image + floating cards --- */}
        <div className="hidden lg:block relative mb-16" style={{ minHeight: 700 }}>
          {/* Centered image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] z-0"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pain-points-illustration.png"
                alt="Business challenges - disconnected tools, manual processes, and data silos versus a unified ERP solution"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Floating cards */}
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const anim = cardAnimations[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: anim.x, y: anim.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`z-10 ${cardPositions[index]}`}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-tight pt-1">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Mobile / Tablet: stacked layout --- */}
        <div className="lg:hidden mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pain-points-illustration.png"
                alt="Business challenges - disconnected tools, manual processes, and data silos versus a unified ERP solution"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-tight pt-1">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200 shadow-lg p-6 sm:p-8">
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                &quot;A successful Odoo rollout connects your sales, inventory,
                and finance workflows into one automated system - with
                end-to-end support from ICIT.&quot;
              </p>
              <div className="w-16 h-1 bg-orange-500 mx-auto" />
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
