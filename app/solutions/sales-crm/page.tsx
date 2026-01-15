import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Sales & CRM | ICIT Solutions Houston",
  description: "Turn leads into revenue with Odoo CRM. Pipeline management, quote builder, email integration, and sales forecasting for Houston businesses.",
  keywords: ["Odoo CRM Houston", "Sales pipeline software", "Lead management Texas", "Quote software Houston", "Sales forecasting ERP"],
};

export default function SalesCrmPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="salesCrm" />
      <SolutionFeatures solutionKey="salesCrm" />
      <SolutionUseCases solutionKey="salesCrm" />
      <SolutionIntegrations solutionKey="salesCrm" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
