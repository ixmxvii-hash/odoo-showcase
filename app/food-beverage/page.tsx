import { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";
import IndustryOverviewPage from "@/components/industry/IndustryOverviewPage";

export const metadata: Metadata = {
  title: "Odoo ERP for Food & Beverage | ICIT Solutions",
  description:
    "Streamline food and beverage operations with Odoo ERP. Complete traceability, lot tracking, and production management for food manufacturers.",
  keywords: [
    "Food Manufacturing ERP",
    "Beverage Production Software",
    "Food Traceability Software",
    "Food Safety Compliance",
    "Food ERP Texas",
  ],
};

export default function FoodBeveragePage() {
  return (
    <IndustryOverviewPage
      industryKey="foodBeverage"
      heroTitle="Food & Beverage ERP Solutions"
      heroIcon={UtensilsCrossed}
      accent="emerald"
      cityCtaDescription="Get city-specific insights, local case studies, and connect with food and beverage businesses in your area."
    />
  );
}
