import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ICIT Solutions - Houston Odoo Partner",
  description: "Get in touch with ICIT Solutions, Houston's trusted Odoo implementation partner. Call (832) 290-7185 or send a message. Local on-site support for Houston manufacturers.",
  keywords: [
    "Contact ICIT Solutions",
    "Houston Odoo Consultant",
    "ERP Consultation Houston",
    "Odoo Demo Houston",
    "Manufacturing Software Consultation",
    "Houston ERP Support",
  ],
  openGraph: {
    title: "Contact Us | ICIT Solutions - Houston Odoo Partner",
    description: "Get in touch with ICIT Solutions. Call (832) 290-7185 or send a message for a free Odoo ERP consultation.",
    url: "https://icitsolutions.com/contact",
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ICIT Solutions - Houston Odoo Partner",
    description: "Get in touch with Houston's trusted Odoo implementation partner.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
