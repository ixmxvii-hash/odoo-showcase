"use client";

import { FormEvent, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileText, Loader2, X } from "lucide-react";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

interface GateFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
}

interface GateErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
}

const CASE_STUDY_URL = "/case-studies/restaurant-case-study.html";
const SCROLL_THRESHOLD = 600; // Show after scrolling 600px
const STORAGE_KEY = "case_study_notification_dismissed";

export default function HomeCaseStudyGate() {
  const [showNotification, setShowNotification] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<GateErrors>({});
  const [form, setForm] = useState<GateFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  // Check if notification was previously dismissed
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (dismissed) {
        setIsDismissed(true);
      }
    }
  }, []);

  // Show notification on scroll
  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD && !showNotification) {
        setShowNotification(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, showNotification]);

  const dismissNotification = () => {
    setShowNotification(false);
    setIsDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const openForm = () => {
    trackEvent("cta_click", { location: "homepage_case_study_notification", cta: "open_gate" });
    setIsFormOpen(true);
  };

  const closeForm = () => {
    if (isSubmitting) return;
    setIsFormOpen(false);
    setSubmitError(null);
  };

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const validate = (): boolean => {
    const nextErrors: GateErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!form.company.trim()) {
      nextErrors.company = "Company is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone is required";
    } else if (phoneDigits.length !== 10) {
      nextErrors.phone = "Please enter a valid 10-digit phone";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        contactName: form.name.trim(),
        name: form.name.trim(),
        companyName: form.company.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        hearAboutUs: "Homepage Case Study Notification",
        biggestChallenge: "Restaurant Case Study Access",
        message:
          "Source: homepage_case_study_notification\\nRequested asset: Restaurant Chain Case Study\\nIntent: Learn how ICIT + Odoo transformed restaurant operations.",
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to submit form");
      }

      trackEvent("lead_submit", { form: "homepage-case-study-notification" });
      window.location.href = CASE_STUDY_URL;
    } catch {
      trackEvent("lead_submit_error", { form: "homepage-case-study-notification" });
      setSubmitError("We could not unlock the case study right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Notification */}
      <AnimatePresence>
        {showNotification && !isDismissed && !isFormOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-40 max-w-sm"
          >
            <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              {/* Close button */}
              <button
                onClick={dismissNotification}
                className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors z-10"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 mb-3">
                  <FileText className="w-3 h-3 text-orange-300" />
                  <span className="text-xs font-medium text-orange-200">Case Study</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 pr-6">
                  See Odoo in Action
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Learn how ICIT helped a Lagos restaurant chain achieve 30% revenue growth with Odoo.
                </p>

                {/* CTA Button */}
                <Button
                  onClick={openForm}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm py-2.5 rounded-lg"
                >
                  Get the Case Study
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeForm}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-white shadow-2xl p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Unlock the Case Study</h3>
                  <p className="text-slate-600 mt-1">
                    Fill out this short form and we will take you straight to the download page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeForm}
                  className="text-slate-500 hover:text-slate-700"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="case-study-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Name *
                  </label>
                  <input
                    id="case-study-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="case-study-company" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    id="case-study-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, company: e.target.value }));
                      if (errors.company) setErrors((prev) => ({ ...prev, company: undefined }));
                    }}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                    placeholder="Acme Restaurants"
                  />
                  {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="case-study-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="case-study-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="case-study-phone" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Phone *
                    </label>
                    <input
                      id="case-study-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: formatPhoneNumber(e.target.value) }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                      placeholder="(832) 555-0123"
                      maxLength={14}
                    />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {submitError && <p className="text-sm text-red-600">{submitError}</p>}

                <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Unlocking...
                    </>
                  ) : (
                    <>
                      Get the Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
