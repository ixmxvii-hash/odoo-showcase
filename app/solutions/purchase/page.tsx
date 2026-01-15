import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Purchase | ICIT Solutions Houston",
  description: "Streamline procurement with Odoo Purchase. Vendor management, PO automation, approval workflows, and spend analysis for Houston businesses.",
  keywords: ["Odoo Purchase Houston", "Procurement software", "Purchase order system Texas", "Vendor management ERP", "Spend analysis Houston"],
};

export default function PurchasePage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="purchase" />
      <SolutionFeatures solutionKey="purchase" />
      <SolutionUseCases solutionKey="purchase" />
      <SolutionIntegrations solutionKey="purchase" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
