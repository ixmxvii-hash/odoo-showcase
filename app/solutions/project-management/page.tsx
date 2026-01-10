import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Odoo Project Management | ICIT Solutions Houston",
  description: "Deliver projects profitably with Odoo Project. Task management, timesheets, resource planning, and project costing for Houston businesses.",
  keywords: ["Odoo Project Management Houston", "Timesheet software Texas", "Project costing ERP", "Resource planning system", "Task management Houston"],
};

export default function ProjectManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionHero solutionKey="projectManagement" />
      <SolutionFeatures solutionKey="projectManagement" />
      <SolutionUseCases solutionKey="projectManagement" />
      <SolutionIntegrations solutionKey="projectManagement" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
