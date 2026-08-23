"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll into horizontal movement on desktop (0% to -62%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const goals = [
    {
      title: "Lead Generation",
      question: "Need to fill your sales pipeline?",
      description: "We build targeted funnels that capture high-intent prospects who are actually ready to buy your service.",
      iconSrc: "/assets/cl/Asset 5.png",
      buttonText: "Choose Goal",
    },
    {
      title: "E-Commerce Sales",
      question: "Ready to scale your store?",
      description: "We combine aggressive media buying with fresh creative to lower your acquisition costs and maximize your return on ad spend.",
      iconSrc: "/assets/cl/Asset 4.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Brand Awareness",
      question: "Want unstoppable visibility??",
      description: "We scale your brand's presence fast, putting you in front of the exact audience ready to engage.",
      iconSrc: "/assets/cl/Asset 3.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Ad Creative & Video",
      question: "Need better assets?",
      description: "Our team designs the graphics and shoots the videos that make your ads impossible to ignore.",
      iconSrc: "/assets/cl/Asset 2.png",
      buttonText: "Choose Goal",
    },
    {
      title: "Landing Pages",
      question: "Losing sales after the click",
      description: "We build sharp, fast-loading pages designed to do one thing: turn casual browsers into paying customers.",
      iconSrc: "/assets/cl/Asset 1.png",
      buttonText: "Choose Goal",
    },
  ];

  const handleMobileScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild?.offsetWidth || 1;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    if (index >= 0 && index < goals.length && index !== mobileIndex) {
      setMobileIndex(index);
    }
  };

  const scrollToMobileIndex = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 1;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setMobileIndex(index);
  };

  const prevSlide = () => {
    const newIdx = mobileIndex === 0 ? goals.length - 1 : mobileIndex - 1;
    scrollToMobileIndex(newIdx);
  };

  const nextSlide = () => {
    const newIdx = mobileIndex === goals.length - 1 ? 0 : mobileIndex + 1;
    scrollToMobileIndex(newIdx);
  };

  return (
    <section
      ref={targetRef}
      id="goals"
      className="relative md:h-[250vh] py-16 md:py-0 bg-gradient-to-b from-[#480ed8] via-[#3c09b8] to-[#310599] text-white select-none"
    >
      {/* Desktop View: Sticky Scroll-Driven Horizontal Track */}
      <div className="hidden md:flex sticky top-0 h-screen flex-col justify-center overflow-hidden">

        {/* Desktop Header */}
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

        {/* Scroll-Driven Horizontal Cards Track */}
        <div className="w-full pl-6 md:pl-[9vw] z-10 overflow-visible py-6 md:py-[1.8vw]">
          <motion.div style={{ x }} className="flex gap-6 md:gap-[2vw] w-max pr-12 md:pr-[9vw] items-stretch">
            {goals.map((goal) => {
              return (
                <motion.div
                  key={goal.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-[85vw] sm:w-[460px] md:w-[30vw] bg-white text-[#180336] rounded-[2.2rem] md:rounded-[2.4vw] p-6 sm:p-8 md:p-[3vw] shadow-2xl flex items-stretch justify-between gap-6 md:gap-[1.5vw] shrink-0 border border-white/20 cursor-pointer group"
                >
                  <div className="flex flex-col justify-between flex-1 pr-2">
                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-[1.8vw] font-bold text-[#480ed8] leading-[1.05] mb-3 md:mb-[0.8vw] tracking-tight max-w-[10ch] md:max-w-[12vw]">
                        {goal.title}
                      </h3>

                      <p className="text-sm sm:text-base md:text-[0.95vw] font-bold text-[#FF5914] italic mb-2 md:mb-[0.4vw]">
                        {goal.question}
                      </p>

                      <p className="text-xs sm:text-sm md:text-[0.85vw] text-[#180336] font-medium leading-snug md:leading-[1.25vw] mb-6 md:mb-[1.5vw]">
                        {goal.description}
                      </p>
                    </div>

                    <div>
                      <a
                        href="#contact"
                        className="px-7 py-2.5 md:px-[1.8vw] md:py-[0.55vw] rounded-full text-sm md:text-[0.9vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md hover:shadow-orange-500/30 hover:scale-105 active:scale-95 inline-block"
                      >
                        Choose
                      </a>
                    </div>
                  </div>

                  <div className="w-28 sm:w-36 md:w-[9.5vw] h-auto my-5 self-stretch rounded-t-[2.7vw] rounded-br-[3vw] bg-[#EAE4FF] flex items-center justify-center shrink-0 p-4 md:p-[1.5vw] group-hover:bg-[#480ed8] transition-colors duration-300 shadow-sm">
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

      {/* Mobile View: Hand-Scrollable Horizontal Track */}
      <div className="block md:hidden px-4">
        {/* Mobile Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Choose Your Growth Goal.
          </h2>
          <p className="text-sm text-white/90 font-medium">
            Tell us the result you want. We’ll build the engine to get you there.
          </p>
        </div>

        {/* Mobile Scrollable Cards Track */}
        <div
          ref={scrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-3 w-full touch-pan-x"
        >
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="w-full shrink-0 snap-center bg-white text-[#180336] rounded-[40px] sm:rounded-[55px] p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-white/20"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-2xl font-black max-md:font-semibold text-[#480ed8] leading-tight">
                    {goal.title}
                  </h3>
                  <div className="p-4 rounded-t-3xl rounded-bl-3xl rounded-br-3xl bg-[#EAE4FF] flex items-center justify-center shrink-0">
                    <img
                      src={goal.iconSrc}
                      alt={goal.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <p className="text-xs max-md:font-semibold max-md:pt-[15px] font-bold max-md:text-[17px] text-[#FF5914] italic mb-2">
                  {goal.question}
                </p>

                <p className="text-xs text-[#180336] max-md:text-[18px] font-medium leading-relaxed mb-6">
                  {goal.description}
                </p>
              </div>

              <div>
                <a
                  href="#contact"
                  className="max-md:text-[18px] px-6 py-2 rounded-full text-xs font-semibold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md inline-block"
                >
                  Choose
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Controls: Left / Right Arrows + Dots */}
        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition-all shadow-lg active:scale-95"
            aria-label="Previous Goal"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {goals.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToMobileIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "w-7 bg-[#FF5914]" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition-all shadow-lg active:scale-95"
            aria-label="Next Goal"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}



