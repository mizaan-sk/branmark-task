"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Services() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll into horizontal movement from right to left (0% to -65%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const goals = [
    {
      title: "Lead Generation",
      question: "Need to fill your sales pipeline?",
      description: "We build targeted funnels that capture high-intent prospects ready to buy your service.",
      iconSrc: "/assets/cl/Asset 5.png",
      buttonText: "Choose Goal",
    },
    {
      title: "E-Commerce Sales",
      question: "Ready to scale your store?",
      description: "Aggressive media buying & creative that lower CPL and maximize your return on ad spend.",
      iconSrc: "/assets/cl/Asset 4.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Ad Creative & Video",
      question: "Need better assets?",
      description: "High-converting graphics & videos that demand immediate audience attention and engagement.",
      iconSrc: "/assets/cl/Asset 2.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Brand Awareness",
      question: "Want market dominance?",
      description: "Viral short-form content campaigns across Meta, TikTok, and YouTube Shorts to maximize reach.",
      iconSrc: "/assets/cl/Asset 3.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Full-Funnel Scaling",
      question: "Ready for exponential growth?",
      description: "End-to-end performance strategy combining AI optimization with multi-channel acquisition.",
      iconSrc: "/assets/cl/Asset 1.png",
      buttonText: "Choose Goal",
    },
  ];

  return (
    <section 
      ref={targetRef}
      id="goals" 
      className="relative h-[250vh] bg-gradient-to-b from-[#480ed8] via-[#3c09b8] to-[#310599] text-white select-none"
    >
      {/* Sticky Container pinning the section in viewport during scroll */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        
        {/* Header Matching PDF Page 6 */}
        <div className="w-full max-w-7xl md:max-w-[82vw] mx-auto px-6 md:px-[2.5vw] mb-10 md:mb-[2.5vw] z-10 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-white mb-3 md:mb-[0.8vw] tracking-tight"
          >
            Choose Your Growth Goal.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-[1.25vw] text-white font-medium"
          >
            Tell us the result you want. We’ll build the engine to get you there.
          </motion.p>
        </div>

        {/* Scroll-Driven Horizontal Cards Container (Shifting Right to Left) */}
        <div className="w-full pl-6 md:pl-[9vw] z-10 overflow-visible py-6 md:py-[1.8vw]">
          <motion.div style={{ x }} className="flex gap-6 md:gap-[2vw] w-max pr-12 md:pr-[9vw] items-stretch">
            {goals.map((goal, index) => {
              return (
                <motion.div
                  key={goal.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-[85vw] sm:w-[460px] md:w-[30vw] bg-white text-[#180336] rounded-[2.2rem] md:rounded-[2.4vw] p-6 sm:p-8 md:p-[3vw] shadow-2xl flex items-stretch justify-between gap-6 md:gap-[1.5vw] shrink-0 border border-white/20 cursor-pointer group"
                >
                  {/* Left Column: Big Title, Question, Description & Choose Button */}
                  <div className="flex flex-col justify-between flex-1 pr-2">
                    <div>
                      {/* Big Heading Matching Reference Image */}
                      <h3 className="text-3xl sm:text-4xl md:text-[1.8vw] font-bold text-[#480ed8] leading-[1.05] mb-3 md:mb-[0.8vw] tracking-tight max-w-[10ch] md:max-w-[12vw]">
                        {goal.title}
                      </h3>

                      {/* Italic Orange Question Subtitle */}
                      <p className="text-sm sm:text-base md:text-[0.95vw] font-bold text-[#FF5914] italic mb-2 md:mb-[0.4vw]">
                        {goal.question}
                      </p>

                      {/* Description Text */}
                      <p className="text-xs sm:text-sm md:text-[0.85vw] text-[#180336] font-medium leading-snug md:leading-[1.25vw] mb-6 md:mb-[1.5vw]">
                        {goal.description}
                      </p>
                    </div>

                    {/* Orange Choose Button */}
                    <div>
                      <a
                        href="#contact"
                        className="px-7 py-2.5 md:px-[1.8vw] md:py-[0.55vw] rounded-full text-sm md:text-[0.9vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md hover:shadow-orange-500/30 hover:scale-105 active:scale-95 inline-block"
                      >
                        Choose
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Soft Lavender Arch Pill Shaped Icon Container matching Reference Image */}
                  <div className="w-28 sm:w-36 md:w-[9.5vw] h-auto my-5 self-stretch rounded-t-[2.7vw] rounded-br-[3vw]    bg-[#EAE4FF] flex items-center justify-center shrink-0 p-4 md:p-[1.5vw] group-hover:bg-[#480ed8] transition-colors duration-300 shadow-sm">
                    <img
                      src={goal.iconSrc}
                      alt={goal.title}
                      className="w-12 h-12 md:w-[3.6vw] md:h-[3.6vw] object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}



