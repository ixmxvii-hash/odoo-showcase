import { Metadata } from "next";
import Link from "next/link";
import { Factory, MapPin, ArrowRight } from "lucide-react";
import { industries } from "@/lib/industryData";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo ERP for Manufacturing | ICIT Solutions",
  description: "Streamline discrete, process, and job shop production with Odoo ERP. Complete manufacturing management from job costing to inventory control.",
  keywords: [
    "Manufacturing ERP",
    "Odoo Manufacturing",
    "Production Management Software",
    "Job Shop Software",
    "Manufacturing Software Texas",
  ],
};

export default function ManufacturingPage() {
  const industry = industries.manufacturing;

  const cities = [
    { name: "Austin", slug: "austin", region: "Central Texas" },
    { name: "Houston", slug: "houston", region: "Greater Houston" },
    { name: "Dallas-Fort Worth", slug: "dfw", region: "North Texas" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Factory className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Manufacturing ERP Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {industry.heroDescription}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {industry.painPoints.slice(0, 3).map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Solutions Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How Odoo Solves These Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.solutions.slice(0, 4).map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{solution.title}</h3>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City Selection CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <MapPin className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Select Your Location</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get city-specific insights, local case studies, and connect with manufacturing businesses in your area.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/manufacturing`}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-white/40 group"
                >
                  <div className="text-2xl font-bold mb-2">{city.name}</div>
                  <div className="text-sm text-blue-100 mb-4">{city.region}</div>
                  <div className="flex items-center justify-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Key Modules Preview */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Odoo Modules for Manufacturing</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {industry.keyModules.slice(0, 4).map((module, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold text-sm">{module.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
