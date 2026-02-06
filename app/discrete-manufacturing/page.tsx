import { Metadata } from "next";
import { Settings } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Discrete Manufacturing | ICIT Solutions",
  description:
    "Control shop-floor scheduling, job costing, and revision-managed BOMs with Odoo ERP for discrete manufacturers.",
  keywords: [
    "Discrete Manufacturing ERP",
    "Job Shop ERP",
    "Machine Shop Software",
    "BOM Revision Control",
    "Discrete Production Planning",
  ],
};

export default function DiscreteManufacturingPage() {
  return (
    <IndustryOverviewPage
      industryKey="discreteManufacturing"
      heroTitle="Discrete Manufacturing ERP Solutions"
      heroIcon={Settings}
      accent="indigo"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with discrete manufacturing teams in your area."
    />
  );
}
