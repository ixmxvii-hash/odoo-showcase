import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose ICIT Solutions | Houston's Local Odoo Partner",
  description: "Discover why Houston manufacturers choose ICIT Solutions for Odoo ERP implementation. Local on-site support, 90-day implementation, and 20+ years of Texas experience.",
  keywords: [
    "Why ICIT Solutions",
    "Odoo Partner Houston",
    "Local ERP Consultant Texas",
    "Houston Odoo Implementation",
    "On-Site ERP Support Houston",
    "Manufacturing Consultant Houston",
    "90 Day ERP Implementation",
  ],
  openGraph: {
    title: "Why Choose ICIT Solutions | Houston's Local Odoo Partner",
    description: "Discover why Houston manufacturers choose ICIT Solutions for Odoo ERP implementation. Local support, fast implementation, 20+ years experience.",
    url: "https://icitsolutions.com/why-icit",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose ICIT Solutions | Houston's Local Odoo Partner",
    description: "Discover why Houston manufacturers choose ICIT Solutions for Odoo ERP implementation.",
  },
};

export default function WhyICITLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
