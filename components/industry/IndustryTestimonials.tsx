"use client";

import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";
import { industries, colorMap, cities } from "@/lib/industryData";
import { getCityIndustry } from "@/lib/cityIndustryData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface IndustryTestimonialsProps {
  industryKey: keyof typeof industries;
  city?: string;
}

export default function IndustryTestimonials({ industryKey, city }: IndustryTestimonialsProps) {
  // Use city-specific data if city is provided
  const industry = city
    ? getCityIndustry(city, industryKey as string)
    : industries[industryKey];
  const colors = colorMap[industry.color];
  const cityName = city ? cities[city.toUpperCase()]?.name || "Houston" : "Houston";

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-0 w-96 h-96 ${colors.bg} rounded-full blur-3xl opacity-30`} />
        <div className={`absolute bottom-1/4 right-0 w-96 h-96 ${colors.bg} rounded-full blur-3xl opacity-30`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`}>
            <Star className={`w-4 h-4 ${colors.text}`} fill="currentColor" />
            <span className={`text-sm font-medium ${colors.text}`}>
              {industry.name} Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {cityName} {industry.tagline}{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradientDark}`}>
              Trust ICIT
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real {industry.houstonZones[0]} businesses. See why local companies choose ICIT Solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {industry.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full`}>
                {/* Quote Icon */}
                <div className={`absolute -top-4 left-8 w-8 h-8 ${colors.bgDark} rounded-full flex items-center justify-center shadow-lg`}>
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${colors.text}`}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                    <span className={`text-lg font-bold ${colors.text}`}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-16 bg-gradient-to-r ${colors.gradientDark} rounded-2xl p-8 md:p-12 text-white`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {industry.name} Results That Speak for Themselves
            </h3>
            <p className="text-white/80">
              Average improvements reported by our {industry.houstonZones[0]} clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Serving {industry.houstonZones[0]} zip codes: {industry.zipCodes.join(", ")}
          </p>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colors.bgDark}`} />
              <span className="text-sm font-medium text-gray-600">Local On-Site Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colors.bgDark}`} />
              <span className="text-sm font-medium text-gray-600">90-Day Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colors.bgDark}`} />
              <span className="text-sm font-medium text-gray-600">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
