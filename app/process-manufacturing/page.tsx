import { Metadata } from "next";
import { Beaker } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Process Manufacturing | ICIT Solutions",
  description:
    "Manage formulas, batch quality, and full lot traceability with Odoo ERP for process manufacturers.",
  keywords: [
    "Process Manufacturing ERP",
    "Batch Manufacturing Software",
    "Formula Management",
    "Lot Traceability",
    "Process Industry ERP",
  ],
};

export default function ProcessManufacturingPage() {
  return (
    <IndustryOverviewPage
      industryKey="processManufacturing"
      heroTitle="Process Manufacturing ERP Solutions"
      heroIcon={Beaker}
      accent="teal"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with process manufacturing operations in your area."
    />
  );
}
