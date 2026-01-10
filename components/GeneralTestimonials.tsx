"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Odoo transformed how we run our entire business. Sales, inventory, accounting - all in one place.",
    author: "Rachel M.",
    role: "Operations Director",
    company: "Distribution Company, Houston",
    rating: 5
  },
  {
    quote: "ICIT Solutions understood our unique needs. The implementation was smooth and on schedule.",
    author: "James T.",
    role: "CEO",
    company: "Professional Services Firm",
    rating: 5
  },
  {
    quote: "We finally have real-time visibility into our business. No more spreadsheet chaos.",
    author: "Maria S.",
    role: "Controller",
    company: "Retail Chain, Houston",
    rating: 5
  },
  {
    quote: "The ROI was clear within 6 months. Wish we had done this years ago.",
    author: "David K.",
    role: "Owner",
    company: "E-commerce Business",
    rating: 5
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const
    }
  }
}

export default function GeneralTestimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by businesses across industries throughout Houston and beyond
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-100" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-900">
                  {testimonial.author}
                </div>
                <div className="text-orange-600 text-sm font-medium">
                  {testimonial.role}
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg">
            Join hundreds of businesses that have transformed their operations with Odoo
          </p>
        </motion.div>
      </div>
    </section>
  )
}
