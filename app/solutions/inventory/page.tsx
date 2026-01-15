import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Inventory | ICIT Solutions Houston",
  description: "Take control of your inventory with Odoo. Multi-warehouse management, barcode scanning, lot tracking, and auto-reordering for Houston businesses.",
  keywords: ["Odoo Inventory Houston", "Warehouse management software", "Inventory tracking Texas", "Barcode inventory system", "Stock management Houston"],
};

export default function InventoryPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="inventory" />
      <SolutionFeatures solutionKey="inventory" />
      <SolutionUseCases solutionKey="inventory" />
      <SolutionIntegrations solutionKey="inventory" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
