"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  Search,
  Layers,
  GraduationCap,
  Rocket,
  ArrowRight,
  Route,
} from "lucide-react";
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

// Conveyor belt stop positions (% of image width/height)
const STOPS = [
  { x: 15, y: 55 },  // Step 1: moved down and to the right
  { x: 24, y: 25 },  // Step 2: moved down and to the left
  { x: 49, y: 30 },
  { x: 65, y: 69 },  // Step 4: moved down further
  { x: 87, y: 47 },  // Step 5: moved down further
];

// Where each step card sits on the image (% of image dimensions)
// Matches the dark empty spaces near each conveyor stop
const CARD_POSITIONS = [
  { left: -4, top: 64 },   // 1: bottom-left, extends off left edge (moved down)
  { left: 8, top: -3 },     // 2: between stops 1 & 2, left area (moved up)
  { left: 58, top: -5 },   // 3: below boxes, center-left (moved right)
  { left: 40, top: 72 },   // 4: below grad cap, extends past bottom (moved left)
  { left: 85, top: 65 },   // 5: right of rocket, extends off right edge (moved down more)
];

function StepCard({
  step,
  index,
}: {
  step: (typeof approachSteps)[number];
  index: number;
}) {
  const Icon = step.icon;
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full">
      <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-sm font-semibold text-orange-700 mb-2">
        Step {index + 1}
      </p>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {step.description}
      </p>
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
    <section id="our-approach" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full mb-6">
            <Route className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Our Approach
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Clear Odoo Implementation Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We guide your team from strategy to adoption with a phased process
            built for Houston businesses.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Each rollout phase includes implementation, team training, and
            go-live support.
          </p>
        </motion.div>

        {/* ─── Desktop: Image with step cards placed at each stop ─── */}
        <div className="hidden lg:block max-w-6xl mx-auto mb-14">
          <div className="relative px-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-visible"
            >
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 16px -2px rgba(249,115,22,0.15), 0 20px 40px -8px rgba(249,115,22,0.2), 0 40px 64px -12px rgba(249,115,22,0.1)" }}>
                <Image
                  src="/images/approach-roadmap.png"
                  alt="5-step Odoo implementation roadmap - Assess, Discover, Implement, Train, and Go Live"
                  width={1400}
                  height={788}
                  className="w-full h-auto"
                />
              </div>

              {/* Numbered dots + connector lines + cards for each stop */}
              {approachSteps.map((step, i) => {
                const stop = STOPS[i];
                const card = CARD_POSITIONS[i];
                const Icon = step.icon;
                // For Step 4 (index 3), connect to the middle of the right side
                const cardCenterX = i === 3 ? card.left + 17 : card.left + 8;
                const cardTopY = i === 3 ? card.top + 12 : card.top; // Lower on the right side

                return (
                  <div key={step.title}>
                    {/* Pulsing numbered dot */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                      className="absolute z-30"
                      style={{
                        left: `${stop.x}%`,
                        top: `${stop.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-25" />
                        <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-sm flex items-center justify-center shadow-xl ring-4 ring-orange-400/30">
                          {i + 1}
                        </div>
                      </div>
                    </motion.div>

                    {/* Connector line from dot to card */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      aria-hidden="true"
                    >
                      <line
                        x1={`${stop.x}%`}
                        y1={`${stop.y + 3}%`}
                        x2={`${cardCenterX}%`}
                        y2={`${cardTopY}%`}
                        stroke="#f97316"
                        strokeWidth="2"
                        opacity="0.7"
                      />
                      <circle
                        cx={`${cardCenterX}%`}
                        cy={`${cardTopY}%`}
                        r="4"
                        fill="#f97316"
                      />
                    </svg>

                    {/* Step card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + i * 0.12,
                      }}
                      className="absolute z-20"
                      style={{
                        left: `${card.left}%`,
                        top: `${card.top}%`,
                        width: "17%",
                        minWidth: 160,
                      }}
                    >
                      <div
                        className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 p-3.5 hover:-translate-y-1 transition-all duration-300"
                        style={{
                          boxShadow: "0 4px 8px -1px rgba(249,115,22,0.15), 0 12px 28px -4px rgba(249,115,22,0.2), 0 24px 48px -8px rgba(249,115,22,0.1)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 12px -1px rgba(249,115,22,0.2), 0 16px 36px -4px rgba(249,115,22,0.25), 0 32px 56px -8px rgba(249,115,22,0.15)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 8px -1px rgba(249,115,22,0.15), 0 12px 28px -4px rgba(249,115,22,0.2), 0 24px 48px -8px rgba(249,115,22,0.1)"; }}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                            Step {i + 1}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-slate-900 mb-0.5 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-[10px] text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ─── Tablet: Image + Grid ─── */}
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

        {/* ─── Mobile: Carousel ─── */}
        <div className="md:hidden">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
            <Image
              src="/images/approach-roadmap.png"
              alt="5-step Odoo implementation roadmap"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
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

        {/* CTA */}
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
