"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { industries, colorMap, type IndustryConfig } from "@/lib/industryData";
import { getCityIndustry } from "@/lib/cityIndustryData";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface IndustryHeroProps {
  industryKey: keyof typeof industries;
  city?: string;
}

export default function IndustryHero({ industryKey, city }: IndustryHeroProps) {
  // Use city-specific data if city is provided, otherwise use base industry data
  const industry = city
    ? getCityIndustry(city, industryKey as string)
    : industries[industryKey];
  const colors = colorMap[industry.color];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs - Color matched to industry */}
      <motion.div
        className={`absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br ${colors.gradient} opacity-20 rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeOut,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeOut,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center space-y-8">
          {/* Industry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.bgDark} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${colors.bgDark}`} />
            </span>
            <span className={`text-sm font-medium ${colors.textLight}`}>
              {industry.tagline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {industry.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                {industry.heroTitle.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-white/90">
              {industry.heroSubtitle}
            </p>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              {industry.heroDescription}
            </p>
            {industry.research && (
              <p className="text-sm text-slate-400 max-w-3xl mx-auto">
                Research: {industry.research.fileName}
                {industry.research.researchDate ? ` • ${industry.research.researchDate}` : ""}
              </p>
            )}
          </motion.div>

          {/* Stats Bar - Prominent Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6"
          >
            {industry.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: easeOut }}
                className="text-center"
              >
                <div className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${colors.gradientDark} text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl ${colors.shadow} hover:shadow-2xl transition-all duration-300 group`}
              >
                Start Your 90-Day Implementation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/roi-calculator">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 hover:border-white/50 text-slate-300 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                Calculate Your ROI
              </Button>
            </Link>
          </motion.div>

          {/* Odoo Screenshot Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
            className="pt-12 max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient} opacity-20 rounded-3xl blur-2xl`} />

              {/* Browser Chrome */}
              <div className="relative bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-slate-800 rounded-md text-sm text-slate-400 font-mono">
                      yourbusiness.odoo.com
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <img
                  src={industry.heroImage}
                  alt={`${industry.name} - Odoo Screenshot`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </section>
  );
}
