import { Metadata } from "next";
import { Zap } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Energy Services | ICIT Solutions",
  description:
    "Streamline oilfield and equipment services operations with Odoo ERP. Complete project management, equipment tracking, and field service management.",
  keywords: [
    "Energy Services ERP",
    "Oilfield Software",
    "Equipment Services Management",
    "Field Service Software Texas",
    "Energy ERP",
  ],
};

export default function EnergyServicesPage() {
  return (
    <IndustryOverviewPage
      industryKey="energyServices"
      heroTitle="Energy Services ERP Solutions"
      heroIcon={Zap}
      accent="amber"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with energy services businesses in your area."
    />
  );
}
