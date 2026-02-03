"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Wrench,
  Clock,
  Shield,
  Users,
  Phone,
  CheckCircle2,
  Zap,
  Handshake,
  Target,
  TrendingUp,
  HeartHandshake,
  Factory,
  Flame,
  Truck,
  UtensilsCrossed,
  ArrowRight
} from "lucide-react";

import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";

const WhyICITPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const differentiators = [
    {
      icon: MapPin,
      title: "Houston-Based Team",
      description: "Not a 1-800 number. We're in your time zone, in your city, and we speak your language.",
    },
    {
      icon: Wrench,
      title: "On-Site Support",
      description: "When your systems go down, we drive to your plant. Same day. Real help when you need it most.",
    },
    {
      icon: Clock,
      title: "90-Day Implementation",
      description: "No 12-month enterprise nightmares. We use agile methodologies to get you live and profitable fast.",
    },
    {
      icon: Shield,
      title: "No Vendor Lock-In",
      description: "Odoo is open source. Your data stays yours, and your platform is flexible for the long haul.",
    },
    {
      icon: Users,
      title: "We Walk Your Floor",
      description: "We understand manufacturing and logistics because we've seen the chaos firsthand in the field.",
    },
    {
      icon: Phone,
      title: "Local Direct Line",
      description: "(832) 290-7185 - Talk to a real person immediately. No automated queues or ticket delays.",
    },
  ];

  const timelinePhases = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      weeks: "Week 1-2",
      details: "Process mapping, gap analysis, and defining your 'North Star' objectives.",
      color: "bg-slate-100"
    },
    {
      phase: "Phase 2",
      title: "Configuration & Setup",
      weeks: "Week 3-6",
      details: "Building your Odoo instance, importing data, and automating core workflows.",
      color: "bg-slate-200"
    },
    {
      phase: "Phase 3",
      title: "Training & Testing",
      weeks: "Week 7-10",
      details: "Hands-on team workshops, UAT, and refining the user experience.",
      color: "bg-orange-100"
    },
    {
      phase: "Phase 4",
      title: "Go-Live & Support",
      weeks: "Week 11-12",
      details: "The big switch, on-site go-live support, and hyper-care monitoring.",
      color: "bg-orange-500 text-white"
    }
  ];

  const values = [
    { icon: Handshake, title: "Partnership First", desc: "We don't just sell software; we join your team to solve problems." },
    { icon: Target, title: "Results Driven", desc: "Metrics matter. We focus on ROI, efficiency gains, and cost reduction." },
    { icon: HeartHandshake, title: "Long-Term Commitment", desc: "We're here for the 5-year plan, not just the initial deployment." },
    { icon: TrendingUp, title: "Excellence Always", desc: "Crafting clean, efficient systems that empower your people to do more." }
  ];

  const industries = [
    { icon: Factory, label: "Manufacturing" },
    { icon: Flame, label: "Energy Services" },
    { icon: Truck, label: "Distribution" },
    { icon: UtensilsCrossed, label: "Food & Beverage" }
  ];


  return (
    <div className="min-h-screen bg-white selection:bg-orange-200 selection:text-orange-900">
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-end justify-center">
            {/* Simple Skyline Silhouette SVG Placeholder */}
            <svg viewBox="0 0 1440 320" className="w-full h-auto fill-slate-900">
              <path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              <rect x="100" y="100" width="40" height="188" />
              <rect x="160" y="60" width="50" height="228" />
              <rect x="230" y="140" width="30" height="148" />
              <rect x="800" y="40" width="60" height="248" />
              <rect x="900" y="80" width="45" height="208" />
              <rect x="1100" y="120" width="55" height="168" />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-6 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-lg mb-8 tracking-wide"
              >
                THE HOUSTON ERP ADVANTAGE
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tight"
              >
                Why Choose <br />
                <span className="text-orange-500">ICIT Solutions?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-medium"
              >
                We are more than consultants. We are your local boots-on-the-ground partners dedicated to making your Houston business run like clockwork.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 items-center"
              >
                <Link
                  href="/contact"
                  className="px-10 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-xl font-bold shadow-2xl shadow-orange-200 transition-all flex items-center gap-3 active:scale-95"
                >
                  Start Your Project <ArrowRight size={24} />
                </Link>
                <a
                  href="tel:8322907185"
                  className="px-10 py-6 bg-white border-4 border-slate-200 hover:border-orange-500 text-slate-900 rounded-2xl text-xl font-bold transition-all flex items-center gap-3"
                >
                  <Phone size={24} className="text-orange-500" />
                  (832) 290-7185
                </a>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              {[
                { label: "Go-Live Time", val: "90 Days" },
                { label: "Experience", val: "20+ Years" },
                { label: "Technology", val: "100% Open" },
                { label: "HQ Location", val: "Houston, TX" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-slate-500 text-lg font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-4xl md:text-5xl font-black text-slate-900">{stat.val}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Built Different. Built Local.</h2>
              <p className="text-2xl text-slate-600 max-w-2xl mx-auto">We&apos;ve spent two decades fixing broken ERP implementations. Here&apos;s why we&apos;re the last consultants you&apos;ll ever need.</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group p-12 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:bg-white"
                >
                  <div className="bg-orange-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 90-Day Timeline */}
        <section className="py-24 md:py-40 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-black mb-6">Your 90-Day <br /><span className="text-orange-500">Fast Track</span></h2>
                <p className="text-2xl text-slate-400 font-medium">No 12-month enterprise delays. We deploy Odoo in phases to deliver value immediately.</p>
              </div>
              <div className="hidden lg:block">
                <Zap size={120} className="text-orange-500/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0" />

              {timelinePhases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative z-10"
                >
                  <div className={`p-10 rounded-[2rem] h-full ${phase.color} shadow-xl flex flex-col`}>
                    <span className={`text-sm font-black uppercase tracking-widest mb-4 inline-block ${idx === 3 ? 'text-orange-200' : 'text-orange-600'}`}>
                      {phase.phase}
                    </span>
                    <h3 className={`text-3xl font-black mb-2 ${idx === 3 ? 'text-white' : 'text-slate-900'}`}>
                      {phase.title}
                    </h3>
                    <p className={`text-xl font-bold mb-6 ${idx === 3 ? 'text-white/80' : 'text-slate-500'}`}>
                      {phase.weeks}
                    </p>
                    <p className={`text-lg font-medium leading-relaxed mt-auto ${idx === 3 ? 'text-white/90' : 'text-slate-600'}`}>
                      {phase.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">Our Core <br />Values.</h2>
                <p className="text-2xl text-slate-600 font-medium">
                  We built ICIT Solutions on a simple foundation: honesty, technical excellence, and a relentless focus on our clients&apos; bottom line.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((val, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-orange-600">
                      <val.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900">{val.title}</h4>
                    <p className="text-lg text-slate-500 leading-snug">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 md:py-40 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-16">Industries We Mastered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border-b-8 border-orange-500/0 hover:border-orange-500 group">
                  <div className="text-orange-500 mb-8 flex justify-center group-hover:scale-110 transition-transform">
                    <ind.icon size={64} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{ind.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-40 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">Ready to Shake Hands?</h2>
              <p className="text-2xl text-orange-100 mb-12 font-medium max-w-3xl mx-auto">
                Let&apos;s discuss your manufacturing or distribution challenges over coffee. We&apos;ll give you a straight-forward assessment of how Odoo can fix the gaps.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-xl px-10 py-6"
                  >
                    Get Started
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </Link>
                <a href="tel:8322907185" className="text-white text-2xl font-bold hover:text-orange-200 transition-colors flex items-center gap-3">
                  <Phone size={28} />
                  (832) 290-7185
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyICITPage;
