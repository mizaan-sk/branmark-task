"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, Calendar } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    goal: "",
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
    <section id="contact" className="py-20 md:py-[6vw] bg-[#F8FAFC] border-b border-[#E7E1FF] select-none">
      <div id="lets-talk-Form" className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl md:max-w-[48vw] mx-auto mb-14 md:mb-[3vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
            Start Scaling Today
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[2.8vw] md:leading-[3.2vw] text-[#0B1B3D] mb-3 md:mb-[0.8vw]">
            Let’s Talk Growth.
          </h2>
          <p className="text-black text-base sm:text-lg md:text-[1.1vw] md:leading-[1.6vw] font-medium">
            Drop your details below. No pushy sales, just strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[3vw] items-start">
          
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6"
          >
            <div className="p-8 md:p-[2.5vw] rounded-2xl md:rounded-[1.5vw] bg-white border border-[#E7E1FF] shadow-xl hover:shadow-2xl transition-shadow duration-300">

              {submitted ? (
                <div className="py-12 md:py-[3vw] text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 md:w-[4vw] md:h-[4vw] rounded-full bg-[#E7E1FF] text-[#0B1B3D] flex items-center justify-center mb-4 md:mb-[1vw]">
                    <ShieldCheck className="w-8 h-8 md:w-[2vw] md:h-[2vw]" />
                  </div>
                  <h3 className="text-xl md:text-[1.3vw] font-semibold text-[#0B1B3D] mb-2 md:mb-[0.5vw]">Strategy Session Requested!</h3>
                  <p className="text-sm md:text-[0.9vw] text-black max-w-sm md:max-w-[24vw] mb-6 md:mb-[1.5vw] font-medium">
                    Thank you, {formData.name || "there"}. We will review your website ({formData.websiteUrl || "details"}) and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", websiteUrl: "", goal: "" });
                    }}
                    className="text-xs md:text-[0.8vw] text-[#FF5914] underline font-bold cursor-pointer"
                  >
                    Book Another Strategy Call
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-[1.2vw]">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-bold text-black mb-1.5 md:mb-[0.4vw]">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-black text-sm md:text-[0.9vw] focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 font-medium transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-bold text-black mb-1.5 md:mb-[0.4vw]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-black text-sm md:text-[0.9vw] focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 font-medium transition-all"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-bold text-black mb-1.5 md:mb-[0.4vw]">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-black text-sm md:text-[0.9vw] focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 font-medium transition-all"
                    />
                  </div>

                  {/* Dropdown Goal */}
                  <div>
                    <label className="block text-xs md:text-[0.8vw] font-bold text-black mb-1.5 md:mb-[0.4vw]">
                      What is your #1 goal right now? *
                    </label>
                    <select
                      required
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 md:px-[1vw] md:py-[0.7vw] rounded-md md:rounded-[0.4vw] bg-white border border-slate-300 text-black text-sm md:text-[0.9vw] focus:outline-none focus:border-[#0B1B3D] focus:ring-2 focus:ring-[#0B1B3D]/10 font-medium cursor-pointer transition-all"
                    >
                      <option value="">Select your growth goal</option>
                      <option value="More Leads">More Leads</option>
                      <option value="More E-Comm Sales">More E-Comm Sales</option>
                      <option value="Better Creative">Better Creative</option>
                      <option value="Brand Awareness">Brand Awareness</option>
                    </select>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="consult-btn w-full mt-3 md:mt-[0.6vw] py-3.5 px-8 md:py-[0.8vw] md:px-[2vw] rounded-[5px] md:rounded-[0.4vw] font-heading font-bold text-sm md:text-[0.95vw] shadow-md cursor-pointer flex items-center justify-center gap-2.5 md:gap-[0.6vw] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {loading ? (
                      <span className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
                        <span>Book A Free Call</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

          {/* Right Offices & Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-2xl md:text-[1.8vw] font-semibold text-[#0B1B3D] mb-2 md:mb-[0.5vw]">
                Global Presence
              </h3>
              <p className="text-black text-sm md:text-[0.9vw] mb-8 md:mb-[2vw] font-medium opacity-90">
                Reach us directly at any of our primary office hubs
              </p>

              <div className="flex flex-col gap-6 md:gap-[1.5vw] mb-10 md:mb-[2.5vw]">
                {/* Bangalore */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] shadow-sm hover:shadow-md hover:border-[#0B1B3D] transition-all duration-300 flex items-start gap-4 md:gap-[1vw]"
                >
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#0B1B3D] text-base md:text-[1.1vw]">Bangalore</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">INDIA HUB</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-black mt-1 md:mt-[0.2vw] font-medium">
                      Vishala Complex, 1st Floor, Sector 7, HSR Layout, Bangalore, Karnataka 560102
                    </p>
                  </div>
                </motion.div>

                {/* Mumbai */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] shadow-sm hover:shadow-md hover:border-[#0B1B3D] transition-all duration-300 flex items-start gap-4 md:gap-[1vw]"
                >
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#0B1B3D] text-base md:text-[1.1vw]">Mumbai</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">WEST INDIA</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-black mt-1 md:mt-[0.2vw] font-medium">
                      10th Floor, RCity Offices, Lal Bahadur Shastri Marg, Ghatkopar West, Mumbai 400086
                    </p>
                  </div>
                </motion.div>

                {/* Virginia */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-white border border-[#E7E1FF] shadow-sm hover:shadow-md hover:border-[#0B1B3D] transition-all duration-300 flex items-start gap-4 md:gap-[1vw]"
                >
                  <div className="p-3 md:p-[0.7vw] rounded-lg md:rounded-[0.5vw] bg-[#E7E1FF] text-[#FF5914] shrink-0">
                    <MapPin className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#0B1B3D] text-base md:text-[1.1vw]">Virginia</h4>
                    <span className="text-[11px] md:text-[0.65vw] font-bold text-[#FF5914] uppercase">USA HQ</span>
                    <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-black mt-1 md:mt-[0.2vw] font-medium">
                      Arbor Creek Drive, Henrico, Virginia 23233
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="p-5 md:p-[1.2vw] rounded-xl md:rounded-[0.9vw] bg-[#0B1B3D] text-white flex flex-wrap items-center justify-between gap-4 md:gap-[1vw] shadow-md">
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
