import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo HR | ICIT Solutions Houston",
  description: "Simplify HR management with Odoo. Employee directory, document management, time off tracking, and attendance for Houston businesses.",
  keywords: ["Odoo HR Houston", "HR software Texas", "Employee management ERP", "Time off tracking", "HR management Houston"],
};

export default function HRPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="hr" />
      <SolutionFeatures solutionKey="hr" />
      <SolutionUseCases solutionKey="hr" />
      <SolutionIntegrations solutionKey="hr" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
