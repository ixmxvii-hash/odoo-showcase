import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Invoicing | ICIT Solutions Houston",
  description: "Get paid faster with Odoo Invoicing. Professional invoices, online payments, and automated reminders for Houston businesses.",
  keywords: ["Odoo Invoicing Houston", "Invoice software Texas", "Online payments ERP", "Billing automation", "Invoice management Houston"],
};

export default function InvoicingPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="invoicing" />
      <SolutionFeatures solutionKey="invoicing" />
      <SolutionUseCases solutionKey="invoicing" />
      <SolutionIntegrations solutionKey="invoicing" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
