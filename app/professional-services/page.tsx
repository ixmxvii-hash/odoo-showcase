import { Metadata } from "next";
import { Briefcase } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Professional Services | ICIT Solutions",
  description:
    "Streamline professional services operations with Odoo ERP. Complete project management, time tracking, and billing for service firms.",
  keywords: [
    "Professional Services ERP",
    "Project Management Software",
    "Time Tracking Software",
    "Professional Services Automation",
    "PSA Software Texas",
  ],
};

export default function ProfessionalServicesPage() {
  return (
    <IndustryOverviewPage
      industryKey="professionalServices"
      heroTitle="Professional Services ERP Solutions"
      heroIcon={Briefcase}
      accent="cyan"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with professional services firms in your area."
    />
  );
}
