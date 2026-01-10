import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Solutions | ICIT Solutions Houston",
  description: "Explore Odoo ERP modules for your Houston business. Manufacturing, Inventory, Accounting, Sales & CRM, E-commerce, and more. Integrated solutions from your local Odoo partner.",
  keywords: [
    "Odoo Solutions Houston",
    "Odoo Modules",
    "ERP Solutions Texas",
    "Business Software Houston",
    "Odoo Apps",
    "Integrated ERP Solutions",
  ],
  openGraph: {
    title: "Odoo Solutions | ICIT Solutions Houston",
    description: "Explore Odoo ERP modules for your Houston business from your local Odoo partner.",
    url: "https://icitsolutions.com/solutions",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
