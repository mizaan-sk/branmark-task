"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  // 3D Perspective Tilt on Mouse Move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pt-32 pb-20 md:pt-[9vw] md:pb-[6vw] bg-[#F8FAFC] text-black relative overflow-hidden select-none"
    >
      {/* Dynamic Floating Glass Ambient Spheres */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#0B1B3D]/15 via-[#FF5914]/15 to-[#E7E1FF]/20 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-[3vw] items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col items-start"
          >
            {/* Pill Tag */}
            <motion.div 
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 md:px-[1.1vw] md:py-[0.45vw] rounded-full bg-[#E7E1FF]/80 backdrop-blur-md border border-[#0B1B3D]/20 text-[#0B1B3D] font-bold text-xs md:text-[0.8vw] mb-6 md:mb-[1.2vw] shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw] text-[#FF5914]" />
              <span>AI-Powered Digital Growth Agency</span>
            </motion.div>

            {/* Main Headline (Dark Blue Heading) */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.8vw] font-semibold text-[#0B1B3D] tracking-tight leading-[1.12] md:leading-[4.2vw] mb-6 md:mb-[1.5vw]">
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
                className="consult-btn inline-flex items-center gap-2.5 md:gap-[0.6vw] px-7 py-3 md:px-[1.6vw] md:py-[0.7vw] rounded-[6px] md:rounded-[0.4vw] text-sm sm:text-base md:text-[0.95vw] font-heading font-bold shadow-lg cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span>See Our Work</span>
                <ArrowRight className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
              </a>

              {/* Secondary CTA Button */}
              <a
                href="#contact"
                className="outline-btn inline-flex items-center gap-2 px-7 py-3 md:px-[1.6vw] md:py-[0.7vw] rounded-[6px] md:rounded-[0.4vw] text-sm sm:text-base md:text-[0.95vw] font-heading font-bold shadow-md cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all"
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

          {/* Right Column: 3D Tilt 9-Grid Showcase Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="md:col-span-5 flex justify-center md:justify-end mt-10 md:mt-0 perspective-1000"
          >
            <div className="relative max-w-md md:max-w-[29vw] w-full rounded-2xl md:rounded-[1.4vw] overflow-hidden shadow-2xl border border-[#E7E1FF] bg-white p-3 md:p-[0.7vw] group transition-all duration-300 hover:border-[#0B1B3D] hover:shadow-[0_20px_50px_rgba(11,27,61,0.15)]">
              <img
                src="/assets/9grid.webp"
                alt="Rivreach portfolio work grid"
                className="w-full h-auto object-cover rounded-xl md:rounded-[0.9vw] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
