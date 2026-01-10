import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Odoo Manufacturing (MRP) | ICIT Solutions Houston",
  description: "Control your production with Odoo Manufacturing. BOMs, work orders, MRP planning, and shop floor control for Houston manufacturers.",
  keywords: ["Odoo Manufacturing Houston", "MRP software Texas", "Production planning ERP", "BOM management system", "Shop floor control Houston"],
};

export default function ManufacturingSolutionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionHero solutionKey="manufacturing" />
      <SolutionFeatures solutionKey="manufacturing" />
      <SolutionUseCases solutionKey="manufacturing" />
      <SolutionIntegrations solutionKey="manufacturing" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
