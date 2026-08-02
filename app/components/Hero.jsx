"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-[100vh] pt-36 pb-20 md:pt-[11vw] md:pb-[6vw] bg-[#180336] text-white relative overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/assets/Rivreach - Hero Banner-01.png"
          alt="Hero Background Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] relative z-10">
        <div className="max-w-3xl md:max-w-[50vw]">
          
          {/* Main Headline (Matching PDF Page 1 Typography) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-[4.2vw] font-semibold text-white tracking-tight leading-[1.08] md:leading-[4.6vw] mb-6 md:mb-[1.8vw]"
          >
            Stop Blending In.<br />
            Start Breaking<br />
            Through.
          </motion.h1>

          {/* Subtitle Text */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-[1.35vw] text-white font-medium mb-10 md:mb-[2.5vw] max-w-2xl md:max-w-[42vw] leading-relaxed md:leading-[2vw]"
          >
            Data-driven ads, thumb-stopping visuals, and AI-powered strategies that turn clicks into revenue.
          </motion.p>

          {/* CTA Buttons (Matching PDF Page 1 Pill Buttons) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 md:gap-[1vw]"
          >
            {/* Primary Orange Pill Button */}
            <a
              href="#proof"
              className="px-8 py-4 md:px-[2.2vw] md:py-[1vw] rounded-full text-base md:text-[1vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
            >
              See Our Work
            </a>

            {/* Secondary Translucent Glass Outline Pill Button */}
            <a
              href="#contact"
              className="px-8 py-4 md:px-[2.2vw] md:py-[1vw] rounded-full text-base md:text-[1vw] font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
            >
              Let’s Talk Growth
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

