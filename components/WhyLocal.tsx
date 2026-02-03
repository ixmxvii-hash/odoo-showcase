"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Users, Shield, Wrench } from "lucide-react";
import { cities } from "@/lib/industryData";

interface CityContent {
  teamTitle: string;
  trustBadges: string[];
  mapEmbed: string;
  officeLocation: string;
  officeArea: string;
  promoTitle: string;
  promoDescription: string;
}

const cityContent: Record<string, CityContent> = {
  HTX: {
    teamTitle: "ICIT Solutions - Houston-Based Team",
    trustBadges: ["Serving Energy Corridor", "Port of Houston", "Katy"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.38385252807!2d-95.66315324999999!3d29.817178999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123",
    officeLocation: "Houston Office",
    officeArea: "Energy Corridor",
    promoTitle: "ICIT Solutions - Proudly Serving Houston",
    promoDescription: "From the Ship Channel to Sugar Land, we know the landscape.",
  },
  ATX: {
    teamTitle: "ICIT Solutions - Austin-Based Team",
    trustBadges: ["Serving East Austin", "Round Rock", "Cedar Park"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220698.56959387833!2d-97.94272129999999!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123",
    officeLocation: "Austin Office",
    officeArea: "Tech Corridor",
    promoTitle: "ICIT Solutions - Proudly Serving Austin",
    promoDescription: "From South Congress to Round Rock, we know the landscape.",
  },
  DFW: {
    teamTitle: "ICIT Solutions - Dallas-Fort Worth Team",
    trustBadges: ["Serving Alliance Corridor", "Downtown Dallas", "Fort Worth"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428226.3777061028!2d-97.19477379999999!3d32.8208751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647571f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123",
    officeLocation: "Dallas Office",
    officeArea: "Las Colinas",
    promoTitle: "ICIT Solutions - Proudly Serving DFW",
    promoDescription: "From Southlake to South Dallas, we know the landscape.",
  },
};

const getFeatures = (cityName: string) => [
  {
    icon: MapPin,
    title: `ICIT Solutions - ${cityName}-Based Team`,
    description: "Not a 1-800 number. We're in your time zone, in your city.",
  },
  {
    icon: Wrench,
    title: "We Come to You",
    description: "When your systems go down, we drive to your plant. Same day.",
  },
  {
    icon: Clock,
    title: "90-Day Implementation",
    description: "We help you go live quickly and efficiently.",
  },
  {
    icon: Shield,
    title: "No Vendor Lock-In",
    description: "We provide open source flexibility. Your data, your control.",
  },
  {
    icon: Users,
    title: "We Understand Your Business",
    description: "We work with you to understand your business process.",
  },
  {
    icon: Phone,
    title: "Local Number: (832) 290-7185",
    description: "Call us. Talk to a real person at ICIT Solutions.",
  },
];

interface WhyLocalProps {
  city?: string;
}

export default function WhyLocal({ city }: WhyLocalProps) {
  const normalizedCity = city?.toUpperCase() || "HTX";
  const cityData = cities[normalizedCity] || cities.HTX;
  const content = cityContent[normalizedCity] || cityContent.HTX;
  const features = getFeatures(cityData.name);
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your ERP Partner Should Know Your Zip Code
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise software doesn&apos;t have to feel like dealing with a faceless corporation.
            We&apos;re your neighbors at ICIT Solutions.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-200 h-80">
              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-full relative">
                <iframe
                  src={content.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />

                {/* Location Pin Overlay */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{content.officeLocation}</p>
                    <p className="text-xs text-slate-600">{content.officeArea}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Photo Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold mb-2">Meet Our ICIT Solutions Team</p>
                  <p className="text-sm opacity-90">
                    {cityData.name} locals who understand your business
                  </p>
                </div>
              </div>

              {/* Industrial Overlay Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>

            {/* City Skyline Accent */}
            <div className="bg-slate-900 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Skyline Silhouette SVG */}
              <div className="absolute bottom-0 left-0 right-0 opacity-20">
                <svg viewBox="0 0 1000 200" className="w-full h-32" preserveAspectRatio="none">
                  <polygon points="0,200 0,120 50,120 50,80 100,80 100,120 150,120 150,60 200,60 200,120 250,120 250,100 300,100 300,120 350,120 350,40 400,40 400,120 450,120 450,90 500,90 500,120 550,120 550,70 600,70 600,120 650,120 650,110 700,110 700,120 750,120 750,50 800,50 800,120 850,120 850,100 900,100 900,120 1000,120 1000,200" fill="currentColor" className="text-orange-500"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content.promoTitle}
                </h3>
                <p className="text-slate-300 mb-4">
                  {content.promoDescription}
                </p>
                <a
                  href="tel:8322907185"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (832) 290-7185
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex-1 text-left">
              <p className="text-lg font-semibold text-slate-900 mb-1">
                Ready to work with ICIT Solutions as your local partner?
              </p>
              <p className="text-slate-600">
                Schedule a 30-minute consultation at our {cityData.name} office or yours.
              </p>
            </div>
            <button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-sm hover:shadow-md">
              Book a Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
