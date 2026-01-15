"use client";

import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <ROICalculator />
      </main>
      <Footer />
    </div>
  );
}
