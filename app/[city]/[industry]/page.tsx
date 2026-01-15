import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, industrySlugMap, industries } from "@/lib/industryData";
import { getCityIndustry, isValidCity } from "@/lib/cityIndustryData";
import {
  IndustryHero,
  IndustryPainPoints,
  IndustrySolutions,
  IndustryModules,
  IndustryTestimonials,
  OdooResults,
} from "@/components/industry";
import WhyLocal from "@/components/WhyLocal";
import Comparison from "@/components/Comparison";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ city: string; industry: string }>;
}

// Generate static paths for all city/industry combinations
export function generateStaticParams() {
  const cityKeys = Object.keys(cities);
  const industryKeys = Object.keys(industrySlugMap);

  return cityKeys.flatMap((city) =>
    industryKeys.map((industry) => ({
      city: city,
      industry: industry,
    }))
  );
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, industry } = await params;
  const normalizedCity = city.toUpperCase();

  if (!isValidCity(normalizedCity)) {
    return { title: "Not Found" };
  }

  const industryKey = industrySlugMap[industry];
  if (!industryKey) {
    return { title: "Not Found" };
  }

  const cityData = cities[normalizedCity];
  const industryData = getCityIndustry(normalizedCity, industryKey);
  const description = industryData.research?.summary || industryData.heroDescription;

  return {
    title: `Odoo ERP for ${cityData.name} ${industryData.name} | ICIT Solutions`,
    description,
    keywords: [
      `Odoo ${industryData.name} ${cityData.name}`,
      `ERP ${cityData.name} ${industryData.name}`,
      `${industryData.name} Software Texas`,
      `Odoo Partner ${cityData.name}`,
      `${industryData.name} ERP Implementation`,
    ],
    openGraph: {
      title: `Odoo ERP for ${cityData.name} ${industryData.name} | ICIT Solutions`,
      description,
      url: `https://icitsolutions.com/${city}/${industry}`,
      siteName: "ICIT Solutions",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function CityIndustryPage({ params }: PageProps) {
  const { city, industry } = await params;
  const normalizedCity = city.toUpperCase();

  // Validate city
  if (!isValidCity(normalizedCity)) {
    notFound();
  }

  // Validate industry and get the key
  const industryKey = industrySlugMap[industry];
  if (!industryKey || !(industryKey in industries)) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* 1. Hook with value proposition */}
      <IndustryHero industryKey={industryKey as keyof typeof industries} city={normalizedCity} />

      {/* 2. Identify with their problems */}
      <IndustryPainPoints industryKey={industryKey as keyof typeof industries} />

      {/* 3. Show how Odoo solves problems */}
      <IndustrySolutions industryKey={industryKey as keyof typeof industries} />

      {/* 4. Show what modules they get */}
      <IndustryModules industryKey={industryKey as keyof typeof industries} city={normalizedCity} />

      {/* 5. Proof those modules deliver results */}
      <OdooResults industryKey={industryKey as keyof typeof industries} city={normalizedCity} />

      {/* 6. Social proof from similar businesses */}
      <IndustryTestimonials industryKey={industryKey as keyof typeof industries} city={normalizedCity} />

      {/* 7. How Odoo beats competitors */}
      <Comparison />

      {/* 8. Why choose ICIT specifically */}
      <WhyLocal city={normalizedCity} />

      {/* 9. Calculate their savings (conversion) */}
      <section id="roi-calculator">
        <ROICalculator />
      </section>

      {/* 10. Final CTAs */}
      <Footer />
    </main>
  );
}
