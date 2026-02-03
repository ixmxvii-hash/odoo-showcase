"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Loader2, CalendarCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

interface HomeLeadState {
  name: string;
  email: string;
  company: string;
  phone: string;
  primaryNeed: string;
}

interface HomeLeadErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
}

const needOptions = [
  "Implementation Planning",
  "Migration from QuickBooks/Legacy",
  "Process Automation",
  "Training & Ongoing Support",
  "Not Sure Yet",
] as const;

export default function HomeLeadForm() {
  const [form, setForm] = useState<HomeLeadState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    primaryNeed: "",
  });
  const [errors, setErrors] = useState<HomeLeadErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: HomeLeadErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.company.trim()) nextErrors.company = "Company is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (form.phone.trim() && phoneDigits.length !== 10) {
      nextErrors.phone = "Phone must be 10 digits";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        contactName: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        companyName: form.company.trim(),
        phone: form.phone.trim() || undefined,
        source: "homepage_inline_form",
        intent: "odoo_landing_update_v1",
        primaryNeed: form.primaryNeed || undefined,
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

      trackEvent("lead_submit", { form: "homepage-inline" });
      setIsSuccess(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        primaryNeed: "",
      });
    } catch {
      trackEvent("lead_submit_error", { form: "homepage-inline" });
      setSubmitError("We could not submit the form right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 text-center">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Thanks - we got your request.</h2>
            <p className="text-slate-600 mb-6">
              Our team will reply within 24 business hours with next steps for your Odoo rollout.
            </p>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="free-consultation" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <CalendarCheck className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Free Consultation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tell Us What You Need Most
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Share a few details and we will map a practical Odoo implementation plan for your team.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          onSubmit={onSubmit}
          className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="home-name" className="block text-sm font-semibold text-slate-900 mb-2">
                Name *
              </label>
              <input
                id="home-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                placeholder="Jane Doe"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="home-company" className="block text-sm font-semibold text-slate-900 mb-2">
                Company *
              </label>
              <input
                id="home-company"
                type="text"
                value={form.company}
                onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                placeholder="Acme Manufacturing"
              />
              {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="home-email" className="block text-sm font-semibold text-slate-900 mb-2">
                Work Email *
              </label>
              <input
                id="home-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                placeholder="you@company.com"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="home-phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone (optional)
              </label>
              <input
                id="home-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
                placeholder="(832) 555-0123"
              />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="home-need" className="block text-sm font-semibold text-slate-900 mb-2">
              Primary Need (optional)
            </label>
            <select
              id="home-need"
              value={form.primaryNeed}
              onChange={(e) => setForm((prev) => ({ ...prev, primaryNeed: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
            >
              <option value="">Select one</option>
              {needOptions.map((need) => (
                <option key={need} value={need}>
                  {need}
                </option>
              ))}
            </select>
          </div>

          {submitError && <p className="text-sm text-red-600">{submitError}</p>}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <p className="text-sm text-slate-500">
              Need a full requirements session? Use the complete form on{" "}
              <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">
                the contact page
              </Link>
              .
            </p>
            <Button type="submit" disabled={isSubmitting} className="min-w-[220px]">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Get My Free Consultation"
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
