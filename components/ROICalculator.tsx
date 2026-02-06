"use client";

import { useState, useEffect } from "react";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Calculator, DollarSign, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

interface CalculatorInputs {
  annualRevenue: number;
  numberOfEmployees: number;
  hoursPerWeek: number;
  disconnectedSystems: number;
}

interface CalculationResults {
  annualSavings: number;
  paybackMonths: number;
  threeYearROI: number;
  hoursSavedPerWeek: number;
  implementationCost: number;
}

const HOURLY_RATE = 38; // Avg admin/operations hourly cost with benefits
const EFFICIENCY_GAIN = 0.35; // Conservative 35% efficiency improvement
const ERROR_REDUCTION = 0.008; // 0.8% of revenue saved from fewer errors
const ERROR_SAVINGS_CAP = 150000;
const MIN_IMPLEMENTATION = 25000;
const MAX_IMPLEMENTATION = 150000;

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  return <>{Math.round(displayValue).toLocaleString()}</>;
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    annualRevenue: 5000000,
    numberOfEmployees: 25,
    hoursPerWeek: 15,
    disconnectedSystems: 4,
  });

  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);
  const [email, setEmail] = useState("");

  const researchFiles = [
    "lib/researchData.ts (24 city-industry implementation profiles)",
    "BLS metro employment releases (Houston, Austin, DFW)",
    "Dallas Fed metro indicators and Texas forecast releases",
    "Port Houston, Houston Airports, AUS, and DFW airport market signals",
    "FDA FSMA traceability guidance and Census trade datasets",
    "EIA and Texas RRC energy production data",
  ];

  const calculateROI = (): CalculationResults => {
    // Calculate annual manual labor cost
    const annualManualLaborCost = inputs.hoursPerWeek * 52 * HOURLY_RATE * (inputs.numberOfEmployees / 10);

    // Calculate efficiency savings
    const efficiencySavings = annualManualLaborCost * EFFICIENCY_GAIN;

    // Calculate error reduction savings (scales with revenue but capped reasonably)
    const errorSavings = Math.min(inputs.annualRevenue * ERROR_REDUCTION, ERROR_SAVINGS_CAP);

    // Total annual savings
    const annualSavings = efficiencySavings + errorSavings;

    // Implementation cost based on company size and complexity
    // More realistic: $25K base + scaling factors
    const baseImplementationCost = MIN_IMPLEMENTATION;
    const employeeFactor = inputs.numberOfEmployees * 800; // ~$800 per user
    const systemFactor = inputs.disconnectedSystems * 5000; // $5K per integration
    const revenueFactor = (inputs.annualRevenue / 10000000) * 15000; // Scales with complexity
    const implementationCost = Math.min(
      Math.max(
        baseImplementationCost + employeeFactor + systemFactor + revenueFactor,
        MIN_IMPLEMENTATION
      ),
      MAX_IMPLEMENTATION
    );

    // Payback period in months
    const paybackMonths = (implementationCost / annualSavings) * 12;

    // 3-year ROI
    const threeYearSavings = annualSavings * 3;
    const threeYearROI =
      ((threeYearSavings - implementationCost) / implementationCost) * 100;

    // Hours saved per week (across all affected employees)
    const hoursSavedPerWeek = inputs.hoursPerWeek * EFFICIENCY_GAIN * Math.min(inputs.numberOfEmployees / 5, 3);

    return {
      annualSavings,
      paybackMonths,
      threeYearROI,
      hoursSavedPerWeek,
      implementationCost,
    };
  };

  const results = calculateROI();

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGetReport = () => {
    setShowEmailCapture(true);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Submit lead to CRM with ROI calculator data
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          contactName: "",
          companyName: "",
          companySize: `${inputs.numberOfEmployees} employees`,
          currentSystems: [`${inputs.disconnectedSystems} disconnected systems`],
          biggestChallenge: "ROI Calculator Lead",
          hearAboutUs: "ROI Calculator",
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
          // Include ROI data in notes
          message: `ROI Calculator Submission:\n- Annual Revenue: $${inputs.annualRevenue.toLocaleString()}\n- Employees: ${inputs.numberOfEmployees}\n- Hours/week on manual entry: ${inputs.hoursPerWeek}\n- Disconnected systems: ${inputs.disconnectedSystems}\n\nEstimated Results:\n- Annual Savings: $${Math.round(results.annualSavings).toLocaleString()}\n- Payback Period: ${Math.round(results.paybackMonths)} months\n- 3-Year ROI: ${Math.round(results.threeYearROI)}%\n- Implementation Cost: $${Math.round(results.implementationCost).toLocaleString()}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      // Google Ads conversion tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-16884728503/C9DPCIXr2ugbELeFovM-",
          value: 1.0,
          currency: "USD",
        });
      }

      alert("Thank you! Your custom report will be sent to " + email);
      setShowEmailCapture(false);
      setEmail("");
    } catch (error) {
      console.error("Error submitting ROI lead:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-4">
            <Calculator className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how much time and money you could save with Odoo ERP
          </p>
          <button
            onClick={() => setShowMethodology(true)}
            className="mt-4 text-sm font-semibold text-orange-200 hover:text-white underline"
          >
            View methodology & assumptions
          </button>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Input Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Your Business Details
              </h3>

              {/* Annual Revenue */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Annual Revenue
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {inputs.annualRevenue >= 1000000
                      ? `$${(inputs.annualRevenue / 1000000).toFixed(1)}M`
                      : `$${(inputs.annualRevenue / 1000).toFixed(0)}K`}
                  </span>
                </label>
                <input
                  type="range"
                  min="250000"
                  max="50000000"
                  step="250000"
                  value={inputs.annualRevenue}
                  onChange={(e) =>
                    handleInputChange("annualRevenue", Number(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$250K</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Number of Employees */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Number of Employees
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {inputs.numberOfEmployees}
                  </span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="200"
                  step="1"
                  value={inputs.numberOfEmployees}
                  onChange={(e) =>
                    handleInputChange("numberOfEmployees", Number(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>3</span>
                  <span>200</span>
                </div>
              </div>

              {/* Hours per Week on Manual Data Entry */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Hours/Week on Manual Data Entry
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {inputs.hoursPerWeek}h
                  </span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={inputs.hoursPerWeek}
                  onChange={(e) =>
                    handleInputChange("hoursPerWeek", Number(e.target.value))
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Number of Disconnected Systems */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Number of Disconnected Systems
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {inputs.disconnectedSystems}
                  </span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="1"
                  value={inputs.disconnectedSystems}
                  onChange={(e) =>
                    handleInputChange(
                      "disconnectedSystems",
                      Number(e.target.value)
                    )
                  }
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>2</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-orange-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Your Potential Savings
              </h3>

              {/* Annual Savings - Featured */}
              <motion.div
                key={results.annualSavings}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 mb-6 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white/90">
                    Estimated Annual Savings
                  </span>
                </div>
                <div className="text-5xl font-bold text-white">
                  $<AnimatedNumber value={results.annualSavings} />
                </div>
              </motion.div>

              {/* Other Metrics */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-semibold text-slate-600">
                      Payback Period
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedNumber value={results.paybackMonths} /> months
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-semibold text-slate-600">
                      3-Year ROI
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedNumber value={results.threeYearROI} />%
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-semibold text-slate-600">
                      Hours Saved Per Week
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    <AnimatedNumber value={results.hoursSavedPerWeek} />h
                  </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-4 mt-6">
                  <div className="text-xs text-slate-600 mb-1">
                    Estimated Implementation Cost
                  </div>
                  <div className="text-lg font-bold text-slate-700">
                    ${results.implementationCost.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Capture Modal Overlay */}
          {showEmailCapture && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-20"
              onClick={() => setShowEmailCapture(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  Get Your Custom Report
                </h4>
                <p className="text-slate-600 mb-6">
                  Enter your email to receive a detailed ROI analysis and
                  personalized recommendations.
                </p>
                <form onSubmit={handleSubmitEmail}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="flex gap-3">
                    <Button type="submit" variant="primary" className="flex-1">
                      Send Report
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setShowEmailCapture(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Methodology Overlay */}
          {showMethodology && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-30"
              onClick={() => setShowMethodology(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">ROI Methodology</h4>
                    <p className="text-sm text-slate-600">Assumptions and sources for the calculator.</p>
                  </div>
                  <button
                    onClick={() => setShowMethodology(false)}
                    className="text-slate-500 hover:text-slate-700 text-sm font-semibold"
                    aria-label="Close methodology modal"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="text-sm font-semibold text-slate-900 mb-1">Key Assumptions</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Hourly rate: ${HOURLY_RATE.toFixed(0)} fully loaded admin/operations labor.</li>
                      <li>Efficiency gain: {(EFFICIENCY_GAIN * 100).toFixed(0)}% of manual time automated.</li>
                      <li>Error reduction: {(ERROR_REDUCTION * 100).toFixed(1)}% of revenue protected from rework; capped at $150K.</li>
                      <li>Implementation cost scales with headcount, integrations, and revenue complexity; floor $25K, ceiling $150K.</li>
                      <li>Payback months = implementation cost / annual savings * 12.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="text-sm font-semibold text-slate-900 mb-1">Data Sources (repo)</h5>
                    <p className="text-slate-600 mb-2">
                      Figures are grounded in the research JSON files bundled with this project. Review the files for citations and detailed stats.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {researchFiles.map((file) => (
                        <li key={file} className="text-slate-700">
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-slate-500">
                    These estimates are directional. For validated ROI, replace assumptions with your own rates, integration counts, and baseline error costs.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* CTA Section */}
          <div className="bg-slate-50 px-8 md:px-12 py-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Ready to Transform Your Business?
                </h4>
                <p className="text-sm text-slate-600">
                  Get a detailed analysis customized for your company
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button variant="primary" onClick={handleGetReport}>
                  Get Your Custom Report
                </Button>
                <Link href="/contact">
                  <Button variant="secondary">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-8 max-w-3xl mx-auto"
        >
          * Results are estimates based on industry averages and typical Odoo
          implementations. Actual savings may vary based on your specific
          business processes, implementation scope, and organizational factors.
        </motion.p>
      </div>
    </section>
  );
}
