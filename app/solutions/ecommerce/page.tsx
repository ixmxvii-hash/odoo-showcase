import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo E-commerce | ICIT Solutions Houston",
  description: "Launch an integrated online store with Odoo E-commerce. Website builder, real-time inventory, shipping integration for Houston businesses.",
  keywords: ["Odoo E-commerce Houston", "Online store software Texas", "Integrated ecommerce ERP", "B2B portal system", "Shopping cart Houston"],
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="ecommerce" />
      <SolutionFeatures solutionKey="ecommerce" />
      <SolutionUseCases solutionKey="ecommerce" />
      <SolutionIntegrations solutionKey="ecommerce" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
