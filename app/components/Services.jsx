"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, ShoppingCart, Video, Megaphone, TrendingUp } from "lucide-react";

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
      icon: Users,
      buttonText: "Choose Goal",
    },
    {
      title: "E-Commerce Sales",
      question: "Ready to scale your store?",
      description: "Aggressive media buying & creative that lower CPL and maximize your return on ad spend.",
      icon: ShoppingCart,
      buttonText: "Choose Goal",
    },
    {
      title: "Ad Creative & Video",
      question: "Need better assets?",
      description: "High-converting graphics & videos that demand immediate audience attention and engagement.",
      icon: Video,
      buttonText: "Choose Goal",
    },
    {
      title: "Brand Awareness",
      question: "Want market dominance?",
      description: "Viral short-form content campaigns across Meta, TikTok, and YouTube Shorts to maximize reach.",
      icon: Megaphone,
      buttonText: "Choose Goal",
    },
    {
      title: "Full-Funnel Scaling",
      question: "Ready for exponential growth?",
      description: "End-to-end performance strategy combining AI optimization with multi-channel acquisition.",
      icon: TrendingUp,
      buttonText: "Choose Goal",
    },
  ];

  return (
    <section 
      ref={targetRef}
      id="goals" 
      className="relative h-[250vh] bg-gradient-to-r from-[#480ed8] via-[#5c1ce6] to-[#6d20e0] text-white select-none border-b border-purple-900/30"
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
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-[85vw] sm:w-[460px] md:w-[32vw] bg-white text-[#180336] rounded-3xl md:rounded-[2vw] p-6 sm:p-8 md:p-[2vw] shadow-2xl flex items-stretch justify-between gap-6 md:gap-[1.5vw] shrink-0 border border-white/20 cursor-pointer group"
                >
                  {/* Left Column: Big Title, Question, Description & Choose Button */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      {/* Big Heading Matching Reference Image */}
                      <h3 className="text-3xl sm:text-4xl md:text-[2.2vw] font-bold text-[#480ed8] leading-tight mb-2 md:mb-[0.5vw]">
                        {goal.title}
                      </h3>

                      {/* Italic Orange Question Subtitle */}
                      <p className="text-sm sm:text-base md:text-[0.95vw] font-bold text-[#FF5914] italic mb-2 md:mb-[0.5vw]">
                        {goal.question}
                      </p>

                      {/* Description Text */}
                      <p className="text-xs sm:text-sm md:text-[0.82vw] text-slate-700 font-medium leading-relaxed md:leading-[1.25vw] mb-4 md:mb-[1.2vw]">
                        {goal.description}
                      </p>
                    </div>

                    {/* Orange Choose Button */}
                    <div>
                      <a
                        href="#contact"
                        className="px-7 py-2.5 md:px-[1.8vw] md:py-[0.6vw] rounded-full text-sm md:text-[0.9vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md hover:shadow-orange-500/30 hover:scale-105 active:scale-95 inline-block"
                      >
                        Choose
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Tall Arch/Pill Shaped Purple Icon Container matching Reference Image */}
                  <div className="w-28 sm:w-32 md:w-[8.5vw] h-auto self-stretch rounded-t-full rounded-b-3xl md:rounded-b-[1.5vw] bg-[#ede9fe] text-[#480ed8] flex items-center justify-center shrink-0 p-4 md:p-[1.2vw] group-hover:bg-[#480ed8] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-11 h-11 md:w-[3.2vw] md:h-[3.2vw] stroke-[2]" />
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



