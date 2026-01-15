import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://icit.local";
const defaultOgImage = `${siteUrl}/og-default.svg`;

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
    url: siteUrl,
    siteName: "ICIT Solutions",
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICIT Solutions | Houston's #1 Odoo Implementation Partner",
    description: "Transform your manufacturing operations in 90 days. Local on-site Odoo ERP support for Houston manufacturers.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
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
        <Providers>
          <SmoothScroll>
            <Header />
            {children}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    name: "ICIT Solutions",
                    url: siteUrl,
                    logo: `${siteUrl}/favicon.svg`,
                    sameAs: [
                      "https://www.linkedin.com/company/icit-solutions/",
                      "https://www.facebook.com/ICITSolutionsTX",
                    ],
                    contactPoint: [
                      {
                        "@type": "ContactPoint",
                        telephone: "+1-832-290-7185",
                        contactType: "sales",
                        areaServed: "US",
                        availableLanguage: ["English"],
                      },
                    ],
                  },
                  {
                    "@type": "LocalBusiness",
                    name: "ICIT Solutions",
                    url: siteUrl,
                    image: defaultOgImage,
                    telephone: "+1-832-290-7185",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Houston",
                      addressRegion: "TX",
                      addressCountry: "US",
                    },
                    areaServed: ["Houston", "Austin", "Dallas-Fort Worth"],
                    priceRange: "$$$",
                  },
                  {
                    "@type": "WebSite",
                    name: "ICIT Solutions",
                    url: siteUrl,
                    potentialAction: {
                      "@type": "SearchAction",
                      target: `${siteUrl}/?q={search_term_string}`,
                      "query-input": "required name=search_term_string",
                    },
                  },
                ],
              }),
            }}
          />
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `}
              </Script>
            </>
          )}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
