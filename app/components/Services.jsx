"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, ShoppingBag, Eye, Video, Layout, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const goalServices = [
    {
      num: "01",
      icon: Users,
      goal: "Lead Generation",
      description: "Need to fill your sales pipeline? We build targeted funnels that capture high-intent prospects who are actually ready to buy your service.",
      tag: "High-Intent Funnels",
    },
    {
      num: "02",
      icon: ShoppingBag,
      goal: "E-Commerce Sales",
      description: "Ready to scale your store? We combine aggressive media buying with fresh creative to lower your acquisition costs and maximize your return on ad spend.",
      tag: "Store Growth & ROAS",
    },
    {
      num: "03",
      icon: Eye,
      goal: "Brand Awareness & Views",
      description: "Want to dominate your industry? We push your brand in front of millions of the right eyes using viral-style video and strategic ad placements.",
      tag: "Viral Reach & Scale",
    },
    {
      num: "04",
      icon: Video,
      goal: "High-Converting Creative",
      description: "Need better assets? Our team designs the graphics and shoots the videos that make your ads impossible to ignore.",
      tag: "Thumb-Stopping Visuals",
    },
    {
      num: "05",
      icon: Layout,
      goal: "Landing Pages That Convert",
      description: "Losing sales after the click? We build sharp, fast-loading pages designed to do one thing turn casual browsers into paying customers.",
      tag: "Post-Click Conversion",
    },
  ];

  // Mobile Swiper State
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + goalServices.length) % goalServices.length);
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % goalServices.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Desktop Pinned Horizontal Scroll Trigger Ref
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Slide cards right-to-left horizontally as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section id="services" className="bg-[#F8FAFC] border-b border-[#E7E1FF] select-none relative">
      
      {/* --- DESKTOP GSAP HORIZONTAL PIN SCROLL (md and up) --- */}
      <div ref={targetRef} className="hidden md:block relative h-[250vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-[4vw]">
          
          {/* Header Section */}
          <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] mb-[2vw]">
            <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
              Goal-Driven Solutions
            </span>
            <div className="flex items-end justify-between">
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[2.6vw] md:leading-[3vw] text-[#0B1B3D]">
                Choose Your Growth Goal.
              </h2>
              <p className="text-black text-base sm:text-lg md:text-[1.05vw] md:leading-[1.6vw] font-medium max-w-[28vw]">
                Tell us the result you want. We’ll build the engine to get you there.
              </p>
            </div>
          </div>

          {/* Cards Track (GSAP Horizontal Scroll Slide) */}
          <div className="w-full pl-[10vw]">
            <motion.div style={{ x }} className="flex gap-[2vw] w-max pr-[10vw]">
              {goalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.goal}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="w-[26vw] min-h-[24vw] p-[2vw] rounded-[1.4vw] bg-white border border-[#E7E1FF] shadow-lg hover:shadow-2xl hover:border-[#FF5914] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shrink-0 cursor-pointer"
                  >
                    {/* Watermark Number */}
                    <div className="absolute top-2 right-4 text-[4.5vw] font-black text-[#0B1B3D]/[0.04] group-hover:text-[#FF5914]/[0.08] transition-colors pointer-events-none">
                      {service.num}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-[1.5vw]">
                        <div className="w-[3.2vw] h-[3.2vw] rounded-[0.9vw] bg-[#E7E1FF] text-[#0B1B3D] flex items-center justify-center group-hover:bg-[#0B1B3D] group-hover:text-white transition-colors duration-300 shadow-sm">
                          <Icon className="w-[1.6vw] h-[1.6vw]" />
                        </div>
                        <span className="text-[0.7vw] font-bold text-[#FF5914] bg-[#FF5914]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-[1.35vw] text-[#0B1B3D] mb-[0.8vw] group-hover:text-[#FF5914] transition-colors">
                        {service.goal}
                      </h3>

                      <p className="text-[0.9vw] leading-[1.5vw] text-black font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-[2vw] pt-4 border-t border-slate-100 flex items-center gap-2 text-[0.8vw] font-bold text-[#0B1B3D] group-hover:text-[#FF5914] transition-colors relative z-10">
                      <a href="#contact" className="inline-flex items-center gap-1.5">
                        <span>Select this goal</span>
                        <ArrowRight className="w-[1vw] h-[1vw] group-hover:translate-x-1.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>


      {/* --- MOBILE SWIPER SLIDER (< md) --- */}
      <div className="block md:hidden py-16 px-4">
        {/* Mobile Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
            Goal-Driven Solutions
          </span>
          <h2 className="font-heading font-semibold text-2xl text-[#0B1B3D] mb-2">
            Choose Your Growth Goal.
          </h2>
          <p className="text-black text-sm font-medium">
            Tell us the result you want. We’ll build the engine to get you there.
          </p>
        </div>

        {/* Swiper Track */}
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${mobileIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            {goalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.goal} className="w-full shrink-0 px-1">
                  <div className="p-6 rounded-2xl bg-white border border-[#E7E1FF] shadow-lg flex flex-col justify-between relative overflow-hidden min-h-[320px]">
                    <div className="absolute top-2 right-4 text-5xl font-black text-[#0B1B3D]/[0.05] pointer-events-none">
                      {service.num}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#E7E1FF] text-[#0B1B3D] flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-[#FF5914] bg-[#FF5914]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-[#0B1B3D] mb-2">
                        {service.goal}
                      </h3>

                      <p className="text-xs text-black leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0B1B3D] relative z-10">
                      <a href="#contact" className="inline-flex items-center gap-1.5 text-[#FF5914]">
                        <span>Select this goal</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Swiper Navigation Controls */}
        <div className="flex justify-between items-center mt-6 px-1">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#E7E1FF] hover:bg-[#0B1B3D] hover:text-white text-[#0B1B3D] active:scale-95 transition-all shadow-md cursor-pointer"
            aria-label="Previous Goal"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Swiper Dots */}
          <div className="flex justify-center items-center gap-2">
            {goalServices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to goal ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  mobileIndex === idx ? "w-7 bg-[#0B1B3D]" : "w-2.5 bg-[#E7E1FF]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[#E7E1FF] hover:bg-[#0B1B3D] hover:text-white text-[#0B1B3D] active:scale-95 transition-all shadow-md cursor-pointer"
            aria-label="Next Goal"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}
