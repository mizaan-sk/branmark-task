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
      iconSrc: "/assets/services/lead-generation-icon.webp",
      iconAlt: "Lead generation funnels for sales pipelines",
    },
    {
      title: "E-Commerce Sales",
      question: "Ready to scale your store?",
      description: "We combine aggressive media buying with fresh creative to lower your acquisition costs and maximize your return on ad spend.",
      iconSrc: "/assets/services/ecommerce-sales-icon.webp",
      iconAlt: "E-commerce sales campaigns",
    },
    {
      title: "Brand Awareness",
      question: "Want unstoppable visibility?",
      description: "We scale your brand's presence fast, putting you in front of the exact audience ready to engage.",
      iconSrc: "/assets/services/brand-awareness-icon.webp",
      iconAlt: "Brand awareness campaigns",
    },
    {
      title: "Ad Creative & Video",
      question: "Need better assets?",
      description: "Our team designs the graphics and shoots the videos that make your ads impossible to ignore.",
      iconSrc: "/assets/services/ad-creative-video-icon.webp",
      iconAlt: "Ad creative and video production",
    },
    {
      title: "Landing Pages",
      question: "Losing sales after the click?",
      description: "We build sharp, fast-loading pages designed to do one thing: turn casual browsers into paying customers.",
      iconSrc: "/assets/services/landing-pages-icon.webp",
      iconAlt: "Landing page design for ad campaigns",
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
      id="services"
      className="relative md:h-[250vh] py-16 md:py-0 bg-gradient-to-b from-[#480ed8] via-[#3c09b8] to-[#310599] text-white select-none font-sans"
    >
      {/* One track: sticky and scroll-driven on desktop, swipeable on mobile */}
      <div className="px-4 md:px-0 md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-center md:overflow-hidden font-sans">

        {/* Header */}
        <div className="w-full md:max-w-[82vw] mx-auto md:px-[2.5vw] mb-6 md:mb-[2.5vw] z-10 shrink-0 text-center md:text-left font-sans">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-[2.6vw] md:leading-[3.2vw] font-semibold text-white mb-2 md:mb-[0.8vw] tracking-tight font-sans"
          >
            Our Services: Lead Generation, E-Commerce, Video, Landing Pages and AI SEO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-[1.25vw] text-white/90 md:text-white font-medium font-sans"
          >
            Choose your growth goal. Tell us the result you want. We’ll build the engine to get you there.
          </motion.p>
        </div>

        {/* Cards Track */}
        <div className="w-full md:pl-[9vw] z-10 md:py-[1.8vw] font-sans">
          <motion.div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            style={{ x }}
            className="flex gap-4 md:gap-[2vw] items-stretch font-sans max-md:transform-none! max-md:w-full max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scroll-smooth max-md:touch-pan-x no-scrollbar max-md:py-3 md:w-max md:pr-[9vw]"
          >
            {goals.map((goal) => (
              <motion.div
                key={goal.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-full md:w-[30vw] shrink-0 snap-center bg-white text-[#180336] rounded-[40px] sm:rounded-[55px] md:rounded-[2.4vw] p-6 sm:p-8 md:p-[3vw] shadow-2xl grid grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr_auto] md:grid-rows-[auto_auto_auto_1fr] gap-x-3 md:gap-x-[1.5vw] border border-white/20 md:cursor-pointer group font-sans"
              >
                <h3 className="col-start-1 row-start-1 self-center md:self-auto text-2xl md:text-[1.8vw] font-semibold md:font-bold text-[#480ed8] leading-tight md:leading-[1.05] mb-2 md:mb-[0.8vw] tracking-tight md:max-w-[12vw] font-sans">
                  {goal.title}
                </h3>

                <div className="col-start-2 row-start-1 md:row-span-4 md:self-stretch md:w-[9.5vw] md:my-5 p-4 md:p-[1.5vw] rounded-3xl md:rounded-none md:rounded-t-[2.7vw] md:rounded-br-[3vw] bg-[#EAE4FF] flex items-center justify-center md:group-hover:bg-[#480ed8] transition-colors duration-300 md:shadow-sm">
                  <img
                    src={goal.iconSrc}
                    alt={goal.iconAlt}
                    width={60}
                    height={60}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 md:w-[3.6vw] md:h-[3.6vw] object-contain md:group-hover:brightness-0 md:group-hover:invert transition-all duration-300"
                  />
                </div>

                <p className="col-span-2 md:col-span-1 md:col-start-1 pt-[15px] md:pt-0 text-[17px] md:text-[0.95vw] font-semibold md:font-bold text-[#FF5914] italic mb-2 md:mb-[0.4vw] font-sans">
                  {goal.question}
                </p>

                <p className="col-span-2 md:col-span-1 md:col-start-1 text-[18px] md:text-[0.85vw] text-[#180336] font-medium leading-relaxed md:leading-[1.25vw] mb-6 md:mb-[1.5vw] font-sans">
                  {goal.description}
                </p>

                <div className="col-span-2 md:col-span-1 md:col-start-1 md:self-end">
                  <a
                    href="#contact"
                    aria-label={`Choose ${goal.title}`}
                    className="px-6 py-2 md:px-[1.8vw] md:py-[0.55vw] rounded-full text-[18px] md:text-[0.9vw] font-semibold md:font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md hover:shadow-orange-500/30 md:hover:scale-105 active:scale-95 inline-block font-sans"
                  >
                    Choose
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="block md:hidden px-4 font-sans">
        {/* Mobile Controls: Left / Right Arrows + Dots */}
        <div className="flex items-center justify-between mt-6 px-2 font-sans">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition-all shadow-lg active:scale-95 font-sans"
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
            className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-md transition-all shadow-lg active:scale-95 font-sans"
            aria-label="Next Goal"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}



