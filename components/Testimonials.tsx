"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finally, our inventory actually matches reality. We saved 20 hours a week on data entry alone.",
    author: "Mike R.",
    title: "Operations Manager",
    company: "Machine Shop, Northwest Houston",
    location: "77041",
    rating: 5,
  },
  {
    quote: "The on-site support made all the difference. They understood our shop floor challenges.",
    author: "Sarah T.",
    title: "Plant Manager",
    company: "Chemical Processing, La Porte",
    location: "77571",
    rating: 5,
  },
  {
    quote: "We went from 5 disconnected systems to one. Best decision we've made in 10 years.",
    author: "David L.",
    title: "CEO",
    company: "Equipment Manufacturer, Energy Corridor",
    location: "77079",
    rating: 5,
  },
  {
    quote: "90 days from kickoff to go-live. No downtime, no chaos. Just results.",
    author: "Jennifer K.",
    title: "Controller",
    company: "Fabrication Shop, Katy",
    location: "77494",
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Houston Manufacturers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real results from real Houston businesses
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-center gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-slate-200 pt-4">
                <div className="font-semibold text-slate-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-slate-600">{testimonial.title}</div>
                <div className="text-sm text-slate-500 mt-1">
                  {testimonial.company}{" "}
                  <span className="text-orange-600 font-medium">
                    ({testimonial.location})
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg mb-6">
            Join dozens of Houston manufacturers transforming their operations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
