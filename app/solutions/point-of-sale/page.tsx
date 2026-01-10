import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Odoo Point of Sale | ICIT Solutions Houston",
  description: "Fast, flexible POS with Odoo. Retail and restaurant modes, offline capability, loyalty programs for Houston businesses.",
  keywords: ["Odoo POS Houston", "Point of sale software Texas", "Retail POS system", "Restaurant POS Houston", "Loyalty program software"],
};

export default function PointOfSalePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionHero solutionKey="pointOfSale" />
      <SolutionFeatures solutionKey="pointOfSale" />
      <SolutionUseCases solutionKey="pointOfSale" />
      <SolutionIntegrations solutionKey="pointOfSale" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
