"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

// Real testimonials from icitsolutions.com
const testimonials = [
  {
    quote: "We chose ICIT Solutions as our IT Solutions Provider 5 years ago because we wanted a one stop shop for all our IT needs whether it be hardware, software, cloud, etc. The ICIT Team is very friendly, accessible and responds whenever there's a problem, they always get us back up and running in as little time as possible.",
    author: "Shelly Lewis",
    role: "Owner",
    company: "Owings Lewis",
    rating: 5
  },
  {
    quote: "Partnering with ICIT was one of the best decisions we've made for our business. They've saved us valuable time by automating tasks we once handled manually, making our operations much more efficient and less stressful.",
    author: "Joe Brown",
    role: "Owner",
    company: "Carpet One",
    rating: 5
  },
  {
    quote: "We chose ICIT Solutions 10 years ago and the biggest benefit we've derived from the relationship is minimal downtime. Having the peace of mind that ICIT Solutions is there with us all the way to help us make the best decisions regarding technology to help us be more productive and grow our business. They always deliver out of the box solutions to fit our business needs, keeping us on the cutting edge.",
    author: "Saleh Cambias",
    role: "Operations Manager",
    company: "Cambias Insurance",
    rating: 5
  },
  {
    quote: "ICIT Solutions has been our IT Solutions Provider for over 2 years. We chose ICIT because we wanted to just go to a single provider for all our technology needs & since partnering with them, we no longer spend hours researching or coordinating with multiple vendors to solve problems.",
    author: "Lori Yeager",
    role: "IT Manager",
    company: "Paulson Enterprises",
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
            Real feedback from Houston-area teams that implemented Odoo with ICIT
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
                &quot;{testimonial.quote}&quot;
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
            You do not have to figure out implementation alone. We guide every phase.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
