import { GeneralHero } from "@/components/GeneralHero";
import GeneralPainPoints from "@/components/GeneralPainPoints";
import GeneralIndustries from "@/components/GeneralIndustries";
import ProcessFlows from "@/components/ProcessFlows";
import GeneralSolutions from "@/components/GeneralSolutions";
import WhyLocal from "@/components/WhyLocal";
import Comparison from "@/components/Comparison";
import GeneralTestimonials from "@/components/GeneralTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Dark gradient with CTAs */}
      <GeneralHero />

      {/* Pain Points - White background */}
      <GeneralPainPoints />

      {/* O2C & P2P Process Flows - Light gray background */}
      <ProcessFlows />

      {/* Industries We Serve - White background */}
      <GeneralIndustries />

      {/* Solutions/Apps - White background */}
      <section id="solutions">
        <GeneralSolutions />
      </section>

      {/* Why Local - Light gray background */}
      <WhyLocal />

      {/* Comparison Table - White background */}
      <Comparison />

      {/* Testimonials - Light gray background */}
      <GeneralTestimonials />

      {/* Footer - Dark background */}
      <Footer />
    </main>
  );
}
