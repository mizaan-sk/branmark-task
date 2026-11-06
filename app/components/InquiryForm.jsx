"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { WHATSAPP_URL } from "../lib/site";

const GENERIC_ERROR = "We couldn't send your details. Please try again, or message us on WhatsApp.";
const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

// The live site is a static export, so there is no /api/contact there and the
// browser posts straight to the Google Apps Script web app. text/plain keeps it
// a simple CORS request. /api/contact is the fallback when a server is running.
async function sendLead(lead) {
  const res = await fetch(SCRIPT_URL || "/api/contact/", {
    method: "POST",
    headers: SCRIPT_URL
      ? { "Content-Type": "text/plain;charset=utf-8" }
      : { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  const data = await res.json();
  const result = SCRIPT_URL ? data : data.data;
  if (!res.ok || result?.result === "error" || (!SCRIPT_URL && !data.success)) {
    throw new Error("Lead not accepted");
  }
}

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot: hidden from people, so only bots fill it in.
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (website) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      await sendLead(formData);
      trackEvent("generate_lead", { service: formData.service });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-[6vw] bg-[#180336] text-white select-none relative overflow-hidden">

      {/* Ambient background glowing orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 right-1/4 w-[600px] md:w-[40vw] h-[600px] md:h-[40vw] bg-[#480ed8]/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-10 w-[400px] md:w-[28vw] h-[400px] md:h-[28vw] bg-[#ff5914]/15 rounded-full blur-[140px]" />
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-4 sm:px-6 md:px-[3vw] relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-[3vw] items-center justify-center">

          {/* Left Column Content (Matching PDF Page 8 Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left w-full"
          >
            <h2 className="text-4xl sm:text-6xl md:text-[4.2vw] font-semibold text-white tracking-tight leading-[1.08] md:leading-[4.6vw] mb-4 md:mb-[1.8vw]">
              Let’s Talk<br className="hidden sm:inline" /> Growth.
            </h2>

            <p className="text-base sm:text-xl md:text-[1.3vw] text-purple-200/90 font-medium mb-6 md:mb-[2.5vw] leading-relaxed md:leading-[2vw] max-w-md md:max-w-[30vw] mx-auto lg:mx-0">
              Drop your details below. No pushy sales, just strategy.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-[0.8vw] mb-2 lg:mb-0">
              {/* Orange See Our Work Button (Matching PDF Page 8 Button) */}
              <a
                href="#proof"
                className="px-8 py-3.5 md:px-[2.2vw] md:py-[1vw] rounded-full text-sm sm:text-base md:text-[1vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 active:scale-95 cursor-pointer"
              >
                See Our Work
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-[0.5vw] px-8 py-3.5 md:px-[2.2vw] md:py-[1vw] rounded-full text-sm sm:text-base md:text-[1vw] font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 md:w-[1.1vw] md:h-[1.1vw]" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Column Form (Matching PDF Page 8 Right Side Box) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full max-w-lg lg:max-w-none mx-auto"
          >
            {/* Glowing outer purple container matching PDF Page 8 */}
            <div className="rounded-3xl md:rounded-[1.8vw] bg-gradient-to-tr from-[#480ed8] via-[#6d20e0] to-[#9333ea] p-2.5 sm:p-3 md:p-[0.8vw] shadow-2xl">

              {/* White Form Card Inner Container */}
              <div className="bg-white rounded-2xl md:rounded-[1.4vw] p-6 sm:p-10 md:p-[2.2vw] text-[#180336]">
                {submitted ? (
                  <div role="status" className="py-12 md:py-[3vw] text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 md:w-[4vw] md:h-[4vw] text-[#FF5914] mb-4 md:mb-[1vw] animate-bounce" />
                    <h3 className="text-2xl md:text-[1.5vw] font-semibold text-[#180336] mb-2 md:mb-[0.5vw]">Strategy Request Received!</h3>
                    <p className="text-sm md:text-[0.9vw] text-slate-600 font-medium max-w-sm md:max-w-[24vw] mb-6 md:mb-[1.5vw]">
                      Thank you, {formData.name || "there"}. Our performance team will analyze your brand and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="text-sm md:text-[0.85vw] text-[#FF5914] font-bold underline cursor-pointer hover:text-[#e04705]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-[1vw]">
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="inquiry-website">Website</label>
                      <input
                        id="inquiry-website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>

                    <div className="text-center mb-2 md:mb-[0.5vw]">
                      <h3 className="text-xl md:text-[1.3vw] font-bold text-[#180336]">Request Strategy Proposal</h3>
                    </div>

                    {errorMessage && (
                      <div role="alert" className="p-3 md:p-[0.7vw] rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-[0.8vw] flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[1vw]">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="inquiry-name" className="block text-xs md:text-[0.75vw] font-bold text-slate-700 uppercase tracking-wider mb-1 md:mb-[0.3vw]">
                          Full Name *
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-xl md:rounded-[0.6vw] bg-slate-50 border border-slate-200 text-slate-900 text-sm md:text-[0.85vw] focus:outline-none focus:border-[#480ed8] focus:bg-white transition-all font-medium"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label htmlFor="inquiry-email" className="block text-xs md:text-[0.75vw] font-bold text-slate-700 uppercase tracking-wider mb-1 md:mb-[0.3vw]">
                          Work Email *
                        </label>
                        <input
                          id="inquiry-email"
                          type="email"
                          required
                          placeholder="yourname@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-xl md:rounded-[0.6vw] bg-slate-50 border border-slate-200 text-slate-900 text-sm md:text-[0.85vw] focus:outline-none focus:border-[#480ed8] focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[1vw]">
                      {/* Phone Number */}
                      <div>
                        <label htmlFor="inquiry-phone" className="block text-xs md:text-[0.75vw] font-bold text-slate-700 uppercase tracking-wider mb-1 md:mb-[0.3vw]">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="inquiry-phone"
                          type="tel"
                          required
                          maxLength={10}
                          pattern="[0-9]{10}"
                          title="Please enter a 10-digit mobile number"
                          placeholder="10-digit Mobile Number"
                          value={formData.phone}
                          onChange={(e) => {
                            const numericVal = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData({ ...formData, phone: numericVal });
                          }}
                          className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-xl md:rounded-[0.6vw] bg-slate-50 border border-slate-200 text-slate-900 text-sm md:text-[0.85vw] focus:outline-none focus:border-[#480ed8] focus:bg-white transition-all font-medium"
                        />
                      </div>

                      {/* Service Goal */}
                      <div>
                        <label htmlFor="inquiry-goal" className="block text-xs md:text-[0.75vw] font-bold text-slate-700 uppercase tracking-wider mb-1 md:mb-[0.3vw]">
                          Primary Goal *
                        </label>
                        <select
                          id="inquiry-goal"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-xl md:rounded-[0.6vw] bg-slate-50 border border-slate-200 text-slate-900 text-sm md:text-[0.85vw] focus:outline-none focus:border-[#480ed8] focus:bg-white transition-all font-medium cursor-pointer"
                        >
                          <option value="">Select Growth Goal</option>
                          <option value="Lead Generation">Lead Generation</option>
                          <option value="E-Commerce Sales">E-Commerce Sales</option>
                          <option value="Ad Creative & Video">Ad Creative & Video</option>
                          <option value="Brand Awareness">Brand Awareness</option>
                          <option value="Full-Funnel Scaling">Full-Funnel Scaling</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label htmlFor="inquiry-message" className="block text-xs md:text-[0.75vw] font-bold text-slate-700 uppercase tracking-wider mb-1 md:mb-[0.3vw]">
                        Message / Business Details
                      </label>
                      <textarea
                          id="inquiry-message"
                        rows={3}
                        placeholder="Tell us about your brand and growth goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-xl md:rounded-[0.6vw] bg-slate-50 border border-slate-200 text-slate-900 text-sm md:text-[0.85vw] focus:outline-none focus:border-[#480ed8] focus:bg-white transition-all font-medium resize-none"
                      />
                    </div>

                    <p className="text-xs md:text-[0.75vw] text-slate-600 font-medium">
                      By submitting, you agree that we may contact you about your enquiry. See our{" "}
                      <Link href="/privacy/" className="text-[#480ed8] underline">Privacy Policy</Link>.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 md:py-[0.9vw] rounded-full font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 md:gap-[0.5vw] text-base md:text-[1vw] mt-2 md:mt-[0.5vw]"
                    >
                      {loading ? (
                        <span className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Get Growth Strategy</span>
                          <Send className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

