"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-[9vw] md:pb-[6vw] bg-[#F8FAFC] text-black relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0B1B3D]/10 to-[#FF5914]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-[3vw] items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-start"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-[1vw] md:py-[0.4vw] rounded-full bg-[#E7E1FF] border border-[#0B1B3D]/20 text-[#0B1B3D] font-bold text-xs md:text-[0.8vw] mb-6 md:mb-[1.2vw]">
              <Sparkles className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw] text-[#FF5914]" />
              <span>AI-Powered Digital Growth Agency</span>
            </div>

            {/* Main Headline (Dark Blue Heading) */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.8vw] font-black text-[#0B1B3D] tracking-tight leading-[1.12] md:leading-[4.2vw] mb-6 md:mb-[1.5vw]">
              Stop Blending In. <br className="hidden sm:inline" />
              <span className="text-[#FF5914]">Start Breaking Through.</span>
            </h1>

            {/* Sub-heading (Black Body Text) */}
            <p className="text-black text-lg sm:text-xl md:text-[1.15vw] md:leading-[1.7vw] mb-8 md:mb-[2.2vw] max-w-xl md:max-w-[35vw] font-medium">
              Data-driven ads, thumb-stopping visuals, and AI-powered strategies that turn clicks into revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 md:gap-[1vw] mb-8 md:mb-[2vw]">
              {/* Primary CTA Button */}
              <a
                href="#portfolio"
                className="consult-btn inline-flex items-center gap-2.5 md:gap-[0.6vw] px-7 py-3 md:px-[1.6vw] md:py-[0.7vw] rounded-[6px] md:rounded-[0.4vw] text-sm sm:text-base md:text-[0.95vw] font-heading font-bold shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>See Our Work</span>
                <ArrowRight className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
              </a>

              {/* Secondary CTA Button */}
              <a
                href="#contact"
                className="outline-btn inline-flex items-center gap-2 px-7 py-3 md:px-[1.6vw] md:py-[0.7vw] rounded-[6px] md:rounded-[0.4vw] text-sm sm:text-base md:text-[0.95vw] font-heading font-bold shadow-md cursor-pointer"
              >
                <span>Let’s Talk Growth</span>
              </a>
            </div>

            {/* Partner Badges Image */}
            <div className="py-1 md:py-[0.3vw]">
              <p className="text-[11px] md:text-[0.65vw] uppercase tracking-widest text-slate-600 font-bold mb-2">
                Certified Partner Ecosystem
              </p>
              <img
                src="/assets/partners.webp"
                alt="Google Partner, Shopify Partners, Meta Business Partners, Klaviyo Partner"
                className="h-9 sm:h-11 md:h-[2.4vw] w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: 9-Grid Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <div className="relative max-w-md md:max-w-[29vw] w-full rounded-2xl md:rounded-[1.3vw] overflow-hidden shadow-2xl border border-[#E7E1FF] bg-white p-2.5 md:p-[0.6vw]">
              <img
                src="/assets/9grid.webp"
                alt="Rivreach portfolio work grid"
                className="w-full h-auto object-cover rounded-xl md:rounded-[0.9vw]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
