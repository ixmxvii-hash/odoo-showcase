import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo CRM | ICIT Solutions Houston",
  description: "Close more deals with Odoo CRM. Visual pipeline management, lead scoring, and sales forecasting for Houston businesses.",
  keywords: ["Odoo CRM Houston", "CRM software Texas", "Sales pipeline ERP", "Lead management", "CRM Houston"],
};

export default function CRMPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="crm" />
      <SolutionFeatures solutionKey="crm" />
      <SolutionUseCases solutionKey="crm" />
      <SolutionIntegrations solutionKey="crm" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
