import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Odoo Sales | ICIT Solutions Houston",
  description: "Streamline your sales process with Odoo Sales. Professional quotes, order management, and delivery tracking for Houston businesses.",
  keywords: ["Odoo Sales Houston", "Sales order software", "Quote management Texas", "Order tracking ERP", "Sales automation Houston"],
};

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionHero solutionKey="sales" />
      <SolutionFeatures solutionKey="sales" />
      <SolutionUseCases solutionKey="sales" />
      <SolutionIntegrations solutionKey="sales" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
