import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Accounting | ICIT Solutions Houston",
  description: "Streamline your finances with Odoo Accounting. Invoicing, AP/AR, bank reconciliation, and financial reports for Houston businesses.",
  keywords: ["Odoo Accounting Houston", "ERP accounting software", "Invoice software Texas", "Bank reconciliation ERP", "Financial reporting Houston"],
};

export default function AccountingPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="accounting" />
      <SolutionFeatures solutionKey="accounting" />
      <SolutionUseCases solutionKey="accounting" />
      <SolutionIntegrations solutionKey="accounting" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
