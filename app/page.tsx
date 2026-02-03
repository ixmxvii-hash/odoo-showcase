import { GeneralHero } from "@/components/GeneralHero";
import GeneralPainPoints from "@/components/GeneralPainPoints";
import GeneralIndustries from "@/components/GeneralIndustries";
import ProcessFlows from "@/components/ProcessFlows";
import GeneralSolutions from "@/components/GeneralSolutions";
import OurApproach from "@/components/OurApproach";
import Comparison from "@/components/Comparison";
import HomeLeadForm from "@/components/HomeLeadForm";
import PricingOverview from "@/components/PricingOverview";
import GeneralTestimonials from "@/components/GeneralTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Dark gradient with CTAs */}
      <GeneralHero />

      {/* Pain Points - White background */}
      <GeneralPainPoints />

      {/* Solutions/Apps - White background */}
      <section id="solutions">
        <GeneralSolutions />
      </section>

      {/* Proof: O2C & P2P Process Flows + Comparison */}
      <ProcessFlows />
      <OurApproach />
      <Comparison />
      <HomeLeadForm />
      <PricingOverview />

      {/* Industries We Serve - White background */}
      <GeneralIndustries />

      {/* Testimonials - Light gray background */}
      <GeneralTestimonials />

      {/* Footer - Dark background */}
      <Footer />
    </main>
  );
}
