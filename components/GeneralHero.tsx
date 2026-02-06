"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, Headphones, Workflow, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

const easeOut = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    icon: Clock,
    title: "90 Day Rollout",
    subtitle: "Typical SMB go-live",
  },
  {
    icon: Headphones,
    title: "Support Onsite & Remote",
    subtitle: "Texas-based team",
  },
  {
    icon: Workflow,
    title: "End-to-End Implementation",
    subtitle: "Discovery through go-live",
  },
  {
    icon: GraduationCap,
    title: "Training Included",
    subtitle: "Adoption for your team",
  },
] as const;

export function GeneralHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeOut,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-sm font-medium text-orange-400">
              Houston Odoo Implementation Partner
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
              Streamline Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                with Odoo ERP
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Trusted Odoo partner for Houston businesses with local support and measurable results.
              <span className="text-orange-400 font-medium"> We deliver end-to-end implementation, training, and ongoing support.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/contact"
              onClick={() => trackEvent("cta_click", { location: "hero", cta: "free_consultation" })}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
              >
                Get a Free Odoo Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              href="/#our-approach"
              onClick={() => trackEvent("cta_click", { location: "hero", cta: "see_implementation_plan" })}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 hover:border-orange-400 text-slate-300 hover:text-orange-400 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
              >
                See Implementation Plan
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            className="pt-8"
          >
            <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-orange-400" />
              Local support for manufacturing, distribution, and service teams across Texas
            </p>
          </motion.div>

          {/* Odoo Platform Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
            className="pt-12 max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                >
                  <source
                    src="https://download.odoocdn.com/videos/odoo_com/video_homepage.webm"
                    type="video/webm"
                  />
                </video>
                {/* Subtle overlay gradient for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: easeOut }}
                  className="relative group h-full"
                >
                  <div className="relative h-full bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex flex-col items-center justify-center text-center space-y-2 h-full">
                      <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-white leading-tight">{stat.title}</div>
                      <div className="text-xs text-slate-400">{stat.subtitle}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
