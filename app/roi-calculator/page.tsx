"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <ROICalculator />
      </main>
      <Footer />
    </div>
  );
}
