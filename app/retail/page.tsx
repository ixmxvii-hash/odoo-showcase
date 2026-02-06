import { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Retail & E-commerce | ICIT Solutions",
  description:
    "Streamline retail and e-commerce operations with Odoo ERP. Complete POS, inventory management, and online store integration.",
  keywords: [
    "Retail ERP",
    "E-commerce Software",
    "Point of Sale System",
    "Retail Management Software",
    "Retail Software Texas",
  ],
};

export default function RetailPage() {
  return (
    <IndustryOverviewPage
      industryKey="retail"
      heroTitle="Retail & E-commerce ERP Solutions"
      heroIcon={ShoppingBag}
      accent="rose"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with retail businesses in your area."
    />
  );
}
