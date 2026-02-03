"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2,
  Building2,
  CalendarCheck
} from "lucide-react";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40 bg-white border-b-4 border-slate-100">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
            <Building2 size={600} className="text-slate-900" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-lg mb-8 tracking-wide uppercase">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                Houston&apos;s Trusted Odoo Partner
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Let&apos;s <span className="text-orange-600">Talk</span> Business.
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                Whether you&apos;re scaling up or just getting started with ERP,
                our local Houston team is here to guide your digital transformation
                with a handshake and a plan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTACT GRID */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* LEFT COLUMN: THE FORM */}
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>

                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Send us a message</h2>
                    <p className="text-xl text-slate-500">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <ContactForm />
                </div>
              </motion.div>

              {/* RIGHT COLUMN: CONTACT INFO & CARDS */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-8"
              >
                {/* OFFICE HOURS CARD */}
                <motion.div
                  variants={fadeIn}
                  className="bg-orange-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-orange-200"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 bg-orange-500 rounded-2xl">
                      <Clock size={40} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Office Hours</h3>
                      <p className="text-orange-100 text-lg">Central Standard Time</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-4 border-b border-orange-500/50">
                      <span className="text-xl font-medium">Monday - Friday</span>
                      <span className="text-xl font-bold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-4 opacity-70">
                      <span className="text-xl font-medium">Saturday - Sunday</span>
                      <span className="text-xl font-bold italic">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* CONTACT INFO CARDS */}
                <div className="grid grid-cols-1 gap-6">
                  {/* PHONE CARD */}
                  <motion.a
                    variants={fadeIn}
                    href="tel:8322907185"
                    className="group bg-white p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm flex items-center gap-8 hover:border-orange-500 transition-all duration-300"
                  >
                    <div className="p-5 bg-slate-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <Phone size={36} />
                    </div>
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-1">Call Us Directly</p>
                      <h4 className="text-3xl font-black text-slate-900">(832) 290-7185</h4>
                    </div>
                    <ChevronRight className="ml-auto text-slate-300 group-hover:text-orange-600 transition-transform group-hover:translate-x-2" size={32} />
                  </motion.a>

                  {/* EMAIL CARD */}
                  <motion.a
                    variants={fadeIn}
                    href="mailto:info@icitsolutions.com"
                    className="group bg-white p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm flex items-center gap-8 hover:border-orange-500 transition-all duration-300"
                  >
                    <div className="p-5 bg-slate-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <Mail size={36} />
                    </div>
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-1">Email Support</p>
                      <h4 className="text-2xl font-black text-slate-900">info@icitsolutions.com</h4>
                    </div>
                    <ChevronRight className="ml-auto text-slate-300 group-hover:text-orange-600 transition-transform group-hover:translate-x-2" size={32} />
                  </motion.a>

                  {/* ADDRESS CARD */}
                  <motion.div
                    variants={fadeIn}
                    className="bg-white p-8 rounded-[2rem] border-2 border-slate-100 shadow-sm flex items-center gap-8"
                  >
                    <div className="p-5 bg-slate-50 rounded-2xl text-orange-600">
                      <MapPin size={36} />
                    </div>
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-1">Our Location</p>
                      <h4 className="text-3xl font-black text-slate-900">Houston, Texas</h4>
                      <p className="text-lg text-slate-500">Serving the greater Gulf Coast area</p>
                    </div>
                  </motion.div>
                </div>

                {/* PROMISE BADGE */}
                <motion.div
                  variants={fadeIn}
                  className="bg-slate-900 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
                >
                  <div className="bg-orange-500 p-6 rounded-full">
                    <CalendarCheck size={48} className="text-white" />
                  </div>
                  <div>
                    <h5 className="text-white text-2xl font-bold mb-2">The ICIT Response Promise</h5>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      We value your time as much as you do. Our team guarantees a personalized response within <span className="text-white font-bold">24 business hours</span>. No bots, just local experts.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-24 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              <div className="flex items-center gap-4">
                <CheckCircle2 size={40} className="text-orange-500" />
                <span className="text-white text-2xl font-bold">Local Support</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 size={40} className="text-orange-500" />
                <span className="text-white text-2xl font-bold">Odoo Certified</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 size={40} className="text-orange-500" />
                <span className="text-white text-2xl font-bold">24hr Response</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 size={40} className="text-orange-500" />
                <span className="text-white text-2xl font-bold">Texas Owned</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
