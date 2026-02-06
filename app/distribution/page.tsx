import { Metadata } from "next";
import { Truck } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Distribution & Wholesale | ICIT Solutions",
  description:
    "Streamline distribution and wholesale operations with Odoo ERP. Complete inventory management, order processing, and logistics tracking.",
  keywords: [
    "Distribution ERP",
    "Wholesale Management Software",
    "Inventory Management System",
    "Order Fulfillment Software",
    "Distribution Software Texas",
  ],
};

export default function DistributionPage() {
  return (
    <IndustryOverviewPage
      industryKey="distribution"
      heroTitle="Distribution & Wholesale ERP Solutions"
      heroIcon={Truck}
      accent="purple"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with distribution businesses in your area."
    />
  );
}
