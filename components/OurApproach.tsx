"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck, Search, Layers, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const approachSteps = [
  {
    title: "Assess",
    description:
      "We evaluate your current systems, bottlenecks, and goals so we can map Odoo to how your team actually works.",
    icon: ClipboardCheck,
  },
  {
    title: "Discovery & Planning",
    description:
      "Together we define priorities, rollout phases, and success metrics before any build starts.",
    icon: Search,
  },
  {
    title: "Implement in Phases",
    description:
      "We launch one workflow at a time so your team gets value quickly without a disruptive big-bang switch.",
    icon: Layers,
  },
  {
    title: "Train Your Team",
    description:
      "Hands-on training is included in each phase so users know what to do from day one.",
    icon: GraduationCap,
  },
  {
    title: "Go Live + Ongoing Support",
    description:
      "After go-live, we stay with you for optimization, support, and future phase planning.",
    icon: Rocket,
  },
] as const;

export default function OurApproach() {
  return (
    <section id="our-approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-wide uppercase text-orange-600 mb-3">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A Clear Odoo Implementation Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We guide your team from strategy to adoption with a phased process built for Houston businesses.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Each rollout phase includes implementation, team training, and go-live support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {approachSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-orange-700 mb-2">Step {index + 1}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base font-semibold rounded-xl group">
              Book a Free Odoo Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
