"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="lets-talk-Form" className="py-20 md:py-[5vw] bg-[#F8FAFC] border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[3vw]">
          
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6"
          >
            <div className="p-8 md:p-[2.5vw] rounded-2xl md:rounded-[1.5vw] bg-white border border-[#E7E1FF] shadow-lg">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#480ED8] mb-6 md:mb-[1.5vw]">
                Let&apos;s Get Started
              </h2>

              {submitted ? (
                <div className="py-12 md:py-[3vw] text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-[4vw] md:h-[4vw] rounded-full bg-[#E7E1FF] text-[#480ED8] flex items-center justify-center mb-4 md:mb-[1vw]">
                    <ShieldCheck className="w-8 h-8 md:w-[2vw] md:h-[2vw]" />
                  </div>
                  <h3 className="text-xl md:text-[1.3vw] font-bold text-[#480ED8] mb-2 md:mb-[0.5vw]">Form Submitted Successfully!</h3>
                  <p className="text-sm md:text-[0.9vw] text-[#1E293B] max-w-sm md:max-w-[24vw] mb-4 md:mb-[1vw]">
                    Thank you, {formData.name || "there"}. Our team will review your project details and reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", company: "", budget: "" });
                    }}
                    className="text-xs md:text-[0.8vw] text-[#FF5914] underline font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-[1vw]">
                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-semibold text-[#1E293B] mb-1 md:mb-[0.3vw]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-[#1E293B] text-sm md:text-[0.9vw] focus:outline-none focus:border-[#480ED8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-semibold text-[#1E293B] mb-1 md:mb-[0.3vw]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-[#1E293B] text-sm md:text-[0.9vw] focus:outline-none focus:border-[#480ED8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-semibold text-[#1E293B] mb-1 md:mb-[0.3vw]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-[#1E293B] text-sm md:text-[0.9vw] focus:outline-none focus:border-[#480ED8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-semibold text-[#1E293B] mb-1 md:mb-[0.3vw]">
                      Company / Project Details
                    </label>
                    <input
                      type="text"
                      placeholder="Company or project brief"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-[#1E293B] text-sm md:text-[0.9vw] focus:outline-none focus:border-[#480ED8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-semibold text-[#1E293B] mb-1 md:mb-[0.3vw]">
                      What is your marketing budget? *
                    </label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-[#1E293B] text-sm md:text-[0.9vw] focus:outline-none focus:border-[#480ED8] cursor-pointer"
                    >
                      <option value="">Select your marketing budget</option>
                      <option value="2-5 Lakhs/month">2-5 Lakhs/month</option>
                      <option value="5-10 Lakhs/month">5-10 Lakhs/month</option>
                      <option value="10-20 Lakhs/month">10-20 Lakhs/month</option>
                      <option value="20 Lakhs +">20 Lakhs +</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="consult-btn w-full mt-2 md:mt-[0.5vw] py-3 px-8 md:py-[0.8vw] md:px-[2vw] rounded-[5px] md:rounded-[0.4vw] font-heading font-bold text-sm md:text-[0.95vw] shadow-md cursor-pointer flex items-center justify-center gap-2 md:gap-[0.5vw]"
                  >
                    {loading ? (
                      <span className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

          {/* Right Offices & Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-2xl md:text-[1.8vw] font-extrabold text-[#480ED8] mb-2 md:mb-[0.5vw]">
                Our Offices
              </h3>
              <p className="text-[#1E293B] text-sm md:text-[0.9vw] mb-8 md:mb-[2vw]">
                Reach us at any of our global locations
              </p>

              <div className="flex flex-col gap-6 md:gap-[1.5vw] mb-10 md:mb-[2.5vw]">
                {/* Bangalore */}
                <div className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] flex items-start gap-4 md:gap-[1vw]">
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#480ED8] text-base md:text-[1.1vw]">Bangalore</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">INDIA</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-[#1E293B] mt-1 md:mt-[0.2vw]">
                      Vishala Complex, 1st Floor, Sector 7, HSR Layout, Bangalore, Karnataka 560102
                    </p>
                  </div>
                </div>

                {/* Mumbai */}
                <div className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] flex items-start gap-4 md:gap-[1vw]">
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#480ED8] text-base md:text-[1.1vw]">Mumbai</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">INDIA</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-[#1E293B] mt-1 md:mt-[0.2vw]">
                      10th Floor, RCity Offices, Lal Bahadur Shastri Marg, Ghatkopar West, Mumbai 400086
                    </p>
                  </div>
                </div>

                {/* Virginia */}
                <div className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] flex items-start gap-4 md:gap-[1vw]">
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#480ED8] text-base md:text-[1.1vw]">Virginia</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">USA</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-[#1E293B] mt-1 md:mt-[0.2vw]">
                      Arbor Creek Drive, Henrico, Virginia 23233
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-[#480ED8] text-white flex flex-wrap items-center justify-between gap-4 md:gap-[1vw]">
              <a href="tel:+917827113855" className="flex items-center gap-3 md:gap-[0.6vw] hover:text-[#FF5914] transition-colors">
                <Phone className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#FF5914]" />
                <span className="text-sm md:text-[0.85vw] font-bold">+91 7827113855</span>
              </a>
              <a href="mailto:contact@rivreach.com" className="flex items-center gap-3 md:gap-[0.6vw] hover:text-[#FF5914] transition-colors">
                <Mail className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#FF5914]" />
                <span className="text-sm md:text-[0.85vw] font-bold">contact@rivreach.com</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
