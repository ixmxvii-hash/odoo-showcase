import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ICIT Solutions | Houston's #1 Odoo Implementation Partner",
  description: "ICIT Solutions is Houston's leading Odoo ERP implementation partner. Transform your manufacturing operations in 90 days with local on-site support for Energy Corridor, Port of Houston, and Northwest Industrial manufacturers.",
  keywords: [
    "ICIT Solutions",
    "Odoo Houston",
    "Odoo Partner Houston",
    "ERP Implementation Houston",
    "Manufacturing Software Houston",
    "Inventory Management Houston",
    "Houston Manufacturing ERP",
    "Odoo Consultant Texas",
    "Shop Floor Control",
    "Production Scheduling Software",
    "NetSuite Alternative",
  ],
  authors: [{ name: "ICIT Solutions" }],
  openGraph: {
    title: "ICIT Solutions | Houston's #1 Odoo Implementation Partner",
    description: "Transform your manufacturing operations in 90 days. ICIT Solutions provides local on-site Odoo ERP support for Houston manufacturers.",
    url: "https://icitsolutions.com",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICIT Solutions | Houston's #1 Odoo Implementation Partner",
    description: "Transform your manufacturing operations in 90 days. Local on-site Odoo ERP support for Houston manufacturers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
