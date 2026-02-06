import { Metadata } from "next";
import { Factory } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Manufacturing | ICIT Solutions",
  description:
    "Streamline discrete, process, and job shop production with Odoo ERP. Complete manufacturing management from job costing to inventory control.",
  keywords: [
    "Manufacturing ERP",
    "Odoo Manufacturing",
    "Production Management Software",
    "Job Shop Software",
    "Manufacturing Software Texas",
  ],
};

export default function ManufacturingPage() {
  return (
    <IndustryOverviewPage
      industryKey="manufacturing"
      heroTitle="Manufacturing ERP Solutions"
      heroIcon={Factory}
      accent="blue"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with manufacturing businesses in your area."
    />
  );
}
