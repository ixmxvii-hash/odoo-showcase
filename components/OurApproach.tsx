"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, Search, Layers, GraduationCap, Rocket, ArrowRight, Route } from "lucide-react";
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

function StepCard({ step, index }: { step: typeof approachSteps[number]; index: number }) {
  const Icon = step.icon;
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full">
      <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-sm font-semibold text-orange-700 mb-2">Step {index + 1}</p>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
    </article>
  );
}

export default function OurApproach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / approachSteps.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, approachSteps.length - 1));
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / approachSteps.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <Route className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Our Approach</span>
          </div>
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

        {/* Desktop: Roadmap with overlaid step cards */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-14">
          <div className="relative py-28">
            {/* Image centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-[70%]"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/approach-roadmap.png"
                  alt="5-step Odoo implementation roadmap - Assess, Discover, Implement, Train, and Go Live"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Floating step cards positioned along the roadmap path */}
            {approachSteps.map((step, index) => {
              /*
               * Steps 1,3,5 (even indices 0,2,4) → below the image
               * Steps 2,4 (odd indices 1,3) → above the image
               * Spread horizontally to match the 5 stages left→right
               */
              const positions = [
                "left-[0%] bottom-0",           // Step 1: far left, below
                "left-[12%] top-0",             // Step 2: left-center, above
                "left-[38%] bottom-0",          // Step 3: center, below
                "right-[12%] top-0",            // Step 4: right-center, above
                "right-[0%] bottom-0",          // Step 5: far right, below
              ];
              const animY = index % 2 === 0 ? 20 : -20;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: animY }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                  className={`absolute ${positions[index]} w-[190px] z-10`}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg p-3.5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                      {(() => { const Icon = step.icon; return <Icon className="w-4 h-4" />; })()}
                    </div>
                    <p className="text-xs font-semibold text-orange-700 mb-0.5">Step {index + 1}</p>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">{step.title}</h3>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 mb-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/approach-roadmap.png"
                alt="5-step Odoo implementation roadmap"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <StepCard step={step} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {approachSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex-shrink-0 w-[80vw] max-w-[300px] snap-center"
              >
                <StepCard step={step} index={index} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {approachSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2.5 bg-orange-500"
                    : "w-2.5 h-2.5 bg-orange-200"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
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
