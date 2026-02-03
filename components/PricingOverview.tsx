"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BadgeDollarSign, ShieldCheck, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

const includedItems = [
  "Discovery and implementation planning",
  "Phase-based setup and rollout",
  "Team training and documentation",
  "Go-live support and post-launch optimization",
] as const;

export default function PricingOverview() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-wide uppercase text-orange-600 mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clear Pricing, Built for Real-World Rollouts
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We keep pricing simple: Odoo licensing + implementation. Fixed flat-rate implementation scope is defined up front.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
              <BadgeDollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Odoo Licensing</h3>
            <p className="text-slate-600 leading-relaxed">
              Licensing cost is based on your selected apps and users, so you only pay for what your team needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
              <Handshake className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Implementation</h3>
            <p className="text-slate-600 leading-relaxed">
              Implementation is fixed flat rate and guaranteed up front. Support and training are included in the implementation package.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl border border-slate-200 p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-slate-900">What is included</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            onClick={() => trackEvent("cta_click", { location: "pricing", cta: "request_pricing_breakdown" })}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-xl group">
              Request a Pricing Breakdown
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Final pricing depends on user count, selected modules, and migration complexity.
        </p>
      </div>
    </section>
  );
}
