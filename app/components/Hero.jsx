"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-[8vw] md:pb-[5vw] bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-[3vw] items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-start"
          >
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.6vw] font-black text-[#480ED8] tracking-tight leading-[1.15] md:leading-[4vw] mb-6 md:mb-[1.5vw]">
              Combining <span className="text-[#FF5914]">growth</span> and{" "}
              <span className="text-[#FF5914]">creativity</span> for impactful results
            </h1>

            {/* Paragraph Subtext */}
            <p className="text-[#1E293B] text-base sm:text-lg md:text-[1.1vw] md:leading-[1.6vw] mb-8 md:mb-[2vw] max-w-xl md:max-w-[34vw] font-medium">
              For nearly a decade, 500+ businesses have trusted us to do one thing &ndash; drive real growth. Through creative thinking, data-backed strategy, and marketing that doesn&apos;t blend in.
            </p>

            {/* Partner Badges Image */}
            <div className="mb-8 md:mb-[2vw] py-1 md:py-[0.3vw]">
              <img
                src="/assets/partners.webp"
                alt="Google Partner, Shopify Partners, Meta Business Partners, Klaviyo Partner"
                className="h-10 sm:h-12 md:h-[2.5vw] w-auto object-contain"
              />
            </div>

            {/* CTA Button */}
            <a
              href="#lets-talk-Form"
              className="consult-btn inline-flex items-center gap-2.5 md:gap-[0.6vw] px-6 py-2.5 md:px-[1.5vw] md:py-[0.6vw] rounded-[5px] md:rounded-[0.3vw] text-sm sm:text-base md:text-[0.95vw] font-heading font-semibold shadow-md cursor-pointer"
            >
              <span>Book Consultation</span>
              <span className="text-[10px] md:text-[0.6vw] leading-none ml-0.5">►</span>
            </a>
          </motion.div>

          {/* Right Column: 9-Grid Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <div className="relative max-w-md md:max-w-[28vw] w-full rounded-2xl md:rounded-[1.2vw] overflow-hidden shadow-2xl border border-[#E7E1FF] bg-white p-2 md:p-[0.5vw]">
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
