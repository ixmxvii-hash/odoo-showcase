"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  currentSystems: string[];
  biggestChallenge: string;
  hearAboutUs: string;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  companySize?: string;
  currentSystems?: string;
  biggestChallenge?: string;
  hearAboutUs?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    currentSystems: [],
    biggestChallenge: "",
    hearAboutUs: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.length <= 3) return `(${phoneNumber}`;
    if (phoneNumber.length <= 6)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const currentSystems = prev.currentSystems.includes(value)
        ? prev.currentSystems.filter((system) => system !== value)
        : [...prev.currentSystems, value];
      return { ...prev, currentSystems };
    });

    // Clear error for currentSystems
    if (errors.currentSystems) {
      setErrors((prev) => ({ ...prev, currentSystems: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    // Contact Name validation
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Company Size validation
    if (!formData.companySize) {
      newErrors.companySize = "Please select company size";
    }

    // Current Systems validation
    if (formData.currentSystems.length === 0) {
      newErrors.currentSystems = "Please select at least one system";
    }

    // Biggest Challenge validation
    if (!formData.biggestChallenge) {
      newErrors.biggestChallenge = "Please select your biggest challenge";
    }

    // Hear About Us validation
    if (!formData.hearAboutUs) {
      newErrors.hearAboutUs = "Please tell us how you heard about us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      console.log("Submitting form:", payload);

      // Submit to ICIT CRM via local API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      trackEvent("lead_submit", { form: "contact" });

      // Success state
      setIsSuccess(true);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        companySize: "",
        currentSystems: [],
        biggestChallenge: "",
        hearAboutUs: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      trackEvent("lead_submit_error", { form: "contact" });
      setSubmitError(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for reaching out!
        </h3>
        <p className="text-xl text-gray-600 mb-8">
          The ICIT Solutions team will be in touch within 24 hours to discuss your Odoo implementation.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mx-auto"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get Your Free Consultation
        </h2>
        <p className="text-lg text-gray-600">
          Tell us about your business and we'll show you how Odoo can transform
          your operations.
        </p>
        <p className="text-sm text-gray-500 mt-3">
          We keep your details private and use them only to respond to your request.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name & Contact Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Company Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              aria-required="true"
              autoComplete="organization"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
                errors.companyName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              } focus:ring-2 focus:outline-none transition-colors`}
              placeholder="Acme Manufacturing"
            />
            <AnimatePresence>
              {errors.companyName && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.companyName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label
              htmlFor="contactName"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Contact Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              aria-required="true"
              autoComplete="name"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
                errors.contactName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              } focus:ring-2 focus:outline-none transition-colors`}
              placeholder="John Smith"
            />
            <AnimatePresence>
              {errors.contactName && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.contactName}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-required="true"
              autoComplete="email"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              } focus:ring-2 focus:outline-none transition-colors`}
              placeholder="john@acme.com"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900 mb-2"
            >
              Phone <span className="text-orange-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              aria-required="true"
              autoComplete="tel"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              } focus:ring-2 focus:outline-none transition-colors`}
              placeholder="(555) 123-4567"
              maxLength={14}
            />
            <AnimatePresence>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Company Size */}
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Company Size <span className="text-orange-500">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            aria-required="true"
            className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
              errors.companySize
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-orange-500"
            } focus:ring-2 focus:outline-none transition-colors bg-white`}
          >
            <option value="">Select company size</option>
            <option value="10-25">10-25 employees</option>
            <option value="26-50">26-50 employees</option>
            <option value="51-100">51-100 employees</option>
            <option value="100+">100+ employees</option>
          </select>
          <AnimatePresence>
            {errors.companySize && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-red-500 mt-1"
              >
                {errors.companySize}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Current Systems */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Current Systems <span className="text-orange-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "QuickBooks",
              "Excel/Spreadsheets",
              "NetSuite",
              "SAP",
              "Fishbowl",
              "Other Legacy System",
            ].map((system) => (
              <label
                key={system}
                className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:border-orange-500 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={formData.currentSystems.includes(system)}
                  onChange={() => handleCheckboxChange(system)}
                  className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-gray-900">{system}</span>
              </label>
            ))}
          </div>
          <AnimatePresence>
            {errors.currentSystems && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-red-500 mt-1"
              >
                {errors.currentSystems}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Biggest Challenge */}
        <div>
          <label
            htmlFor="biggestChallenge"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Biggest Challenge <span className="text-orange-500">*</span>
          </label>
          <select
            id="biggestChallenge"
            name="biggestChallenge"
            value={formData.biggestChallenge}
            onChange={handleInputChange}
            aria-required="true"
            className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
              errors.biggestChallenge
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-orange-500"
            } focus:ring-2 focus:outline-none transition-colors bg-white`}
          >
            <option value="">Select your biggest challenge</option>
            <option value="Inventory Accuracy">Inventory Accuracy</option>
            <option value="Production Scheduling">Production Scheduling</option>
            <option value="Data Entry Overhead">Data Entry Overhead</option>
            <option value="System Integration">System Integration</option>
            <option value="Scaling for Growth">Scaling for Growth</option>
            <option value="Compliance/Traceability">
              Compliance/Traceability
            </option>
          </select>
          <AnimatePresence>
            {errors.biggestChallenge && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-red-500 mt-1"
              >
                {errors.biggestChallenge}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* How Did You Hear About Us */}
        <div>
          <label
            htmlFor="hearAboutUs"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            How did you hear about us? <span className="text-orange-500">*</span>
          </label>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            aria-required="true"
            className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 ${
              errors.hearAboutUs
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-orange-500"
            } focus:ring-2 focus:outline-none transition-colors bg-white`}
          >
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Trade Show">Trade Show</option>
            <option value="Other">Other</option>
          </select>
          <AnimatePresence>
            {errors.hearAboutUs && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-red-500 mt-1"
              >
                {errors.hearAboutUs}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Error */}
        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-sm text-red-600">{submitError}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Request Consultation
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
