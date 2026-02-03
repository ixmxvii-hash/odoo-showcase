"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
  const testimonials = [
    {
      author: "Shelly Lewis",
      title: "Owner",
      company: "Owings Lewis",
      quote:
        "We chose ICIT Solutions as our IT Solutions Provider 5 years ago because we wanted a one stop shop for all our IT needs whether it be hardware, software, cloud, etc. The ICIT Team is very friendly, accessible and responds whenever there’s a problem, they always get us back up and running in as little time as possible.",
    },
    {
      author: "Joe Brown",
      title: "Owner",
      company: "Carpet One",
      quote:
        "Partnering with ICIT was one of the best decisions we’ve made for our business. They’ve saved us valuable time by automating tasks we once handled manually, making our operations much more efficient and less stressful.",
    },
    {
      author: "Saleh Cambias",
      title: "Operations Manager",
      company: "Cambias Insurance, LLC",
      quote:
        "We chose ICIT Solutions 10 years ago and the biggest benefit we’ve derived from the relationship is minimal downtime. Having the peace of mind that ICIT Solutions is there with us all the way to help us make the best decisions regarding technology to help us be more productive and grow our business. They always deliver out of the box solutions to fit our business needs, keeping us on the cutting edge.",
    },
    {
      author: "Lori Yeager",
      title: "IT Manager",
      company: "Paulson Enterprises",
      quote:
        "ICIT Solutions has been our IT Solutions Provider for over 2 years. We chose ICIT because we wanted to just go to a single provider for all our technology needs & since partnering with them, we no longer spend hours researching or coordinating with multiple vendors to solve problems.",
    },
    {
      author: "Joe Bodine",
      title: "",
      company: "",
      quote:
        "As a long-standing client of ICIT, our relationship with them has remained constant, professional, and—more importantly—constantly improving.",
    },
    {
      author: "Craig S",
      title: "CEO",
      company: "Montage Community Services",
      quote:
        "Having ICIT as our managed service provider has allowed us to concentrate on other business-related activities since we know that our data is secure and that our network infrastructure is protected.",
    },
  ];

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
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="border-t border-slate-200 pt-4 flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(testimonial.author)}`}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                  <div className="text-sm text-slate-500 mt-1">
                    {testimonial.company}
                  </div>
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
            Want to speak with a client? Ask for a reference call in your industry.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Request a reference
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
