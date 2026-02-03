"use client";

import { motion } from "framer-motion";
import {
  Database,
  Clock,
  Package,
  Calendar,
  Users,
  AlertTriangle,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/Card";

const painPoints = [
  {
    icon: Database,
    title: "Data Living in 5 Different Places",
    description:
      "QuickBooks, Excel, email, paper, whiteboards — your data is scattered everywhere, making it impossible to get a single source of truth.",
  },
  {
    icon: Clock,
    title: "10+ Hours/Week on Manual Data Entry",
    description:
      "Re-keying orders, updating spreadsheets, copying information between systems. Your team is drowning in busywork instead of building your business.",
  },
  {
    icon: Package,
    title: "Inventory Counts That Never Match",
    description:
      "Perpetual stockouts on hot items, phantom stock in your system. You're either over-ordering or disappointing customers.",
  },
  {
    icon: Calendar,
    title: "Production Schedules on Whiteboards",
    description:
      "No real-time visibility into shop floor capacity. You're making critical decisions based on outdated information.",
  },
  {
    icon: Users,
    title: "The Employee Who 'Knows Everything'",
    description:
      "Critical tribal knowledge locked in one person's head. What happens when they're sick, on vacation, or worse — they leave?",
  },
  {
    icon: AlertTriangle,
    title: "Fear of Implementation Failure",
    description:
      "You've heard the horror stories. Systems that take years to implement, cost overruns, business disruption. The risk feels too high.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function PainPoints() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Software Chaos Killing Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sound familiar? You&apos;re not alone. These are the pain points we hear
            from Houston manufacturers every single day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {painPoints.map((point, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <point.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg text-gray-900 font-semibold mb-2">
                The Implementation Fear is Real
              </p>
              <p className="text-gray-700">
                <span className="font-bold text-orange-600">
                  32% of small and mid-sized businesses
                </span>{" "}
                cite business disruption as their #1 barrier to ERP adoption.
                They want the benefits, but they&apos;re terrified of the risk.
              </p>
              <p className="text-gray-700 mt-2">
                That&apos;s exactly why we built our proven implementation framework
                — to eliminate that fear and deliver results in weeks, not
                years.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
