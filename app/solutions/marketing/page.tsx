import { Metadata } from "next";
import SolutionHero from "@/components/solution/SolutionHero";
import SolutionFeatures from "@/components/solution/SolutionFeatures";
import SolutionUseCases from "@/components/solution/SolutionUseCases";
import SolutionIntegrations from "@/components/solution/SolutionIntegrations";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo Marketing | ICIT Solutions Houston",
  description: "Reach and convert customers with Odoo Marketing. Email campaigns, automation, social media management for Houston businesses.",
  keywords: ["Odoo Marketing Houston", "Email marketing software Texas", "Marketing automation ERP", "Social media management", "Campaign analytics Houston"],
};

export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <SolutionHero solutionKey="marketing" />
      <SolutionFeatures solutionKey="marketing" />
      <SolutionUseCases solutionKey="marketing" />
      <SolutionIntegrations solutionKey="marketing" />
      <section id="roi-calculator">
        <ROICalculator />
      </section>
      <Footer />
    </main>
  );
}
