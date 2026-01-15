"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

interface Phase {
  week: string;
  title: string;
  description: string;
}

interface ImplementationTimelineProps {
  phases?: Phase[];
  color?: string;
  totalWeeks?: number;
}

function generatePhases(totalWeeks: number): Phase[] {
  // Scale phases based on total weeks
  const discoveryEnd = Math.ceil(totalWeeks * 0.17);
  const configEnd = Math.ceil(totalWeeks * 0.5);
  const trainingEnd = Math.ceil(totalWeeks * 0.83);

  return [
    { week: `Week 1-${discoveryEnd}`, title: "Discovery & Planning", description: "Requirements gathering, process mapping, data audit" },
    { week: `Week ${discoveryEnd + 1}-${configEnd}`, title: "Configuration & Migration", description: "System setup, data migration, custom workflows" },
    { week: `Week ${configEnd + 1}-${trainingEnd}`, title: "Training & Testing", description: "User training, UAT, process validation" },
    { week: `Week ${trainingEnd + 1}-${totalWeeks}`, title: "Go-Live & Support", description: "Production deployment, hypercare support" },
  ];
}

export default function ImplementationTimeline({
  phases,
  color = "#714B67",
  totalWeeks = 12
}: ImplementationTimelineProps) {
  const displayPhases = phases || generatePhases(totalWeeks);
  const displayDays = totalWeeks * 7;
  return (
    <div className="w-full">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
        <motion.div
          className="absolute left-6 top-0 w-0.5"
          style={{ backgroundColor: color }}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Phases */}
        <div className="space-y-6">
          {displayPhases.map((phase, index) => (
            <motion.div
              key={phase.week}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-4 pl-12"
            >
              {/* Icon */}
              <div
                className="absolute left-4 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center"
                style={{ borderColor: color }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {phase.week}
                  </span>
                  <h4 className="font-semibold text-slate-800">{phase.title}</h4>
                </div>
                <p className="text-sm text-slate-500">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Total Duration */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl text-center">
        <span className="text-sm text-slate-500">Total Implementation Time: </span>
        <span className="font-bold" style={{ color }}>{displayDays} Days or Less</span>
      </div>
    </div>
  );
}
