"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-[100vh] pt-36 pb-20 md:pt-[11vw] md:pb-[6vw] bg-[#180336] text-white relative overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Violet Glow & Curved Wave Vector Graphics (Matching PDF Page 1) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] md:w-[35vw] h-[500px] md:h-[35vw] bg-[#6b21a8]/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] md:w-[40vw] h-[600px] md:h-[40vw] bg-[#4c1d95]/40 rounded-full blur-[160px]" />
        <div className="absolute top-10 right-1/3 w-[350px] md:w-[25vw] h-[350px] md:h-[25vw] bg-[#ff5914]/15 rounded-full blur-[120px]" />

        {/* Dynamic Curved Ribbon Waves (Vector SVG matching PDF Page 1) */}
        <svg 
          className="absolute right-0 top-0 h-full w-full opacity-35 object-cover" 
          viewBox="0 0 1440 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M900 -100 C 1200 100, 1300 400, 1000 600 C 700 800, 900 1000, 1200 1100" 
            stroke="url(#gradient-ribbon-1)" 
            strokeWidth="110" 
            strokeLinecap="round"
          />
          <path 
            d="M-200 400 C 200 600, 400 800, 100 1000" 
            stroke="url(#gradient-ribbon-2)" 
            strokeWidth="90" 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-ribbon-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#480ed8" />
              <stop offset="50%" stopColor="#6d20e0" />
              <stop offset="100%" stopColor="#1e0242" />
            </linearGradient>
            <linearGradient id="gradient-ribbon-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b0764" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] relative z-10">
        <div className="max-w-3xl md:max-w-[50vw]">
          
          {/* Main Headline (Matching PDF Page 1 Typography) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-[4.2vw] font-semibold text-white tracking-tight leading-[1.08] md:leading-[4.6vw] mb-6 md:mb-[1.8vw]"
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

