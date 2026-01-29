"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, Users, Phone, Building2 } from "lucide-react";
import { Button } from "./ui/Button";

const Hero = () => {
  const trustBadges = [
    "All-in-One Platform",
    "90-Day Implementation",
    "Local Support",
    "Certified Partner"
  ];

  const stats = [
    { icon: Clock, label: "90 Days", sublabel: "Average Implementation" },
    { icon: Users, label: "100%", sublabel: "Client Satisfaction" },
    { icon: Building2, label: "50+", sublabel: "Successful Projects" },
    { icon: Phone, label: "24/7", sublabel: "Support Available" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 rounded-full text-sm font-medium text-orange-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Certified Odoo Partner</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Streamline Your Business{" "}
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-transparent bg-clip-text">
              with Odoo ERP
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            One platform for CRM, Sales, Inventory, Manufacturing & more.
            <br className="hidden sm:block" />
            <span className="text-orange-400 font-semibold">Go live in 90 days with local support.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
            >
              View Our Services
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="pt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400"
          >
            <span className="font-medium text-slate-300">Why Choose Us:</span>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl blur-xl group-hover:from-orange-500/20 transition-all duration-300" />
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-400">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Screenshot Preview */}
          <motion.div
            variants={itemVariants}
            className="pt-16 max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 opacity-20 rounded-3xl blur-2xl" />

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
                  src="https://www.mhcautomation.com/wp-content/uploads/2021/08/The-Procure-to-Pay-Process-What-It-Is-Best-Practices-and-More-SM-Banner.png"
                  alt="Odoo ERP - Procure to Pay Process"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 8C120 16 240 32 360 42.7C480 53 600 59 720 58.7C840 59 960 53 1080 48C1200 43 1320 37 1380 34.7L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
            className="opacity-100"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
