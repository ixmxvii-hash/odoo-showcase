import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator | ICIT Solutions - Odoo ERP Savings",
  description: "Calculate your potential ROI with Odoo ERP. See how much time and money your Houston business could save with a modern manufacturing ERP system.",
  keywords: [
    "Odoo ROI Calculator",
    "ERP ROI Calculator",
    "Manufacturing Software Savings",
    "Odoo Cost Savings",
    "ERP Implementation ROI",
    "Houston ERP Savings",
  ],
  openGraph: {
    title: "ROI Calculator | ICIT Solutions - Odoo ERP Savings",
    description: "Calculate your potential ROI with Odoo ERP. See how much your Houston business could save.",
    url: "https://icitsolutions.com/roi-calculator",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
