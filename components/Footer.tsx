import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              ICIT Solutions
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming Texas businesses with world-class ERP solutions.
              On-site support, local expertise, global technology.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Houston · Austin · Dallas
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:8322907185"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  (832) 290-7185
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@icitsolutions.com"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  info@icitsolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/why-icit"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  Why ICIT
                </Link>
              </li>
              <li>
                <Link
                  href="/roi-calculator"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Badge */}
          <div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-3 mb-4">
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/assets/png/odoo_logo.png"
                  alt="Odoo"
                  className="h-7"
                />
              </div>
              <div className="text-white font-semibold text-base mb-1">
                Official Partner
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Certified to deliver enterprise-grade solutions
              </div>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              Proudly serving Texas businesses since 2015
            </p>
            <p className="text-sm text-slate-500">
              © 2024 ICIT Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
