import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odoo Applications | ICIT Solutions - Houston Odoo Partner",
  description: "Explore Odoo's integrated business applications. Sales & CRM, Accounting, Inventory, Manufacturing, E-commerce, and more—all configured for your Houston business.",
  keywords: [
    "Odoo Applications",
    "Odoo Modules Houston",
    "Odoo CRM",
    "Odoo Accounting",
    "Odoo Inventory",
    "Odoo Manufacturing",
    "Houston ERP Partner",
  ],
  openGraph: {
    title: "Odoo Applications | ICIT Solutions - Houston Odoo Partner",
    description: "Explore Odoo's integrated business applications configured for your Houston business.",
    url: "https://icitsolutions.com/applications",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
