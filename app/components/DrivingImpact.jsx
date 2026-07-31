"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DrivingImpact() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Exact image assets mapped from /public/card/
  const cardData = [
    {
      id: "third-wave-coffee",
      title: "Third Wave Coffee",
      subtitle: "Website development and SEO",
      bgColor: "#f4f3f0",
      imageSrc: "/card/im (1).png",
      metrics: [
        { bold: "4514% increase", text: " in clicks on Google" },
        { bold: "1736% growth", text: " in keywords ranking in SERP" },
      ],
      isBullet: false,
    },
    {
      id: "kosala-silk-sarees",
      title: "Kosala silk sarees",
      subtitle: "Social media and performance marketing",
      bgColor: "#e7e4d8",
      imageSrc: "/card/im (3).webp",
      metrics: [
        { bold: "7.5 ROAS", text: " on Meta ads" },
        { bold: "50% increase", text: " in engagement rate on Instagram" },
      ],
      isBullet: false,
    },
    {
      id: "mymuse",
      title: "MyMuse",
      subtitle: "Website development and SEO",
      bgColor: "#ea580c",
      imageSrc: "/card/im (1).jpg",
      metrics: [
        { bold: "567% increase", text: " clicks on Google search" },
        { bold: "1st page ranking", text: " for s*x toys in India" },
      ],
      isBullet: false,
    },
    {
      id: "krispy-kreme",
      title: "Krispy Kreme",
      subtitle: "Digital video commercials",
      bgColor: "#e2d5f8",
      imageSrc: "/card/im (4).webp",
      metrics: [
        { bold: "23M+ impressions", text: " on Diwali campaign" },
        { bold: "1.2M+ impressions", text: " across: Raksha Bandhan & DC donughts campaigns" },
      ],
      isBullet: false,
    },
    {
      id: "damro",
      title: "Damro",
      subtitle: "Social media, SEO, Performance",
      bgColor: "#e4e2dc",
      imageSrc: "/card/im (2).webp",
      metrics: [
        { bold: "Top 3 SERP ranking", text: " for keywords with SV>2,50,000" },
        { bold: "340 INR CPL", text: " with 15% conversion rate" },
      ],
      isBullet: false,
    },
    {
      id: "eat-fit",
      title: "Eat Fit",
      subtitle: "Celebrity-Led Launch & Multi-Vertical Influencer Amplification",
      bgColor: "#dad4a5",
      imageSrc: "/card/im (1).webp",
      metrics: [
        { bold: "5 ad films films", text: " with 5 Macro Creators" },
        { bold: "12M+ impressions", text: " in 7 days" },
      ],
      isBullet: true,
    },
  ];

  // Infinite Loop Handlers for Mobile Slider
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };

  // Mobile Touch Swipe Handlers with Infinite Loop
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

  return (
    <section className="py-12 md:py-[4vw] bg-white text-slate-800 select-none overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Header Section: Title on Left, Subtitle on Right on Desktop with Scroll Reveal using pure vw units above md */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-[2.5vw] gap-4 md:gap-[2vw]">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-sans font-bold text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] text-[#1f1a40] tracking-tight"
          >
            Driving impact
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base md:text-[0.95vw] md:leading-[1.4vw] text-slate-600 md:max-w-[34vw]"
          >
            Every engagement starts with ambition and ends with proof. Explore how we&apos;ve turned creative strategy into measurable business outcomes &ndash; across industries, at scale.
          </motion.p>
        </div>

        {/* --- DESKTOP GRID VIEW (md and up) - ALL SIZES, GAP, PADDING, RADII USE VW UNITS --- */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-[2vw]">
          {cardData.map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Card Image Container */}
              <div 
                className="relative w-full aspect-[4/3] md:aspect-[1.38/1] md:rounded-[1.2vw] overflow-hidden border border-slate-100 shadow-sm"
                style={{ backgroundColor: card.bgColor }}
              >
                <motion.div 
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>

              {/* Card Details */}
              <div className="pt-4 md:pt-[1vw] flex flex-col">
                <h3 className="font-sans font-bold text-lg md:text-[1.15vw] md:leading-[1.4vw] text-[#1f1a40] tracking-tight md:mb-[0.2vw] group-hover:text-[#2563eb] transition-colors duration-200">
                  {card.title}
                </h3>
                
                <p className="font-sans text-xs md:text-[0.85vw] md:leading-[1.1vw] text-slate-500 font-medium md:mt-[0.1vw] md:mb-[0.8vw]">
                  {card.subtitle}
                </p>

                {/* Metrics */}
                <div className="space-y-1 md:space-y-[0.3vw]">
                  {card.metrics.map((m, idx) => (
                    <div 
                      key={idx} 
                      className="font-sans text-xs md:text-[0.85vw] md:leading-[1.1vw] text-slate-700 flex items-start"
                    >
                      {card.isBullet && (
                        <span className="text-amber-500 font-bold mr-1.5 md:mr-[0.4vw]">•</span>
                      )}
                      <div>
                        <strong className="font-bold text-[#1f1a40]">{m.bold}</strong>
                        <span>{m.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE SLIDER VIEW (< md) --- */}
        <div className="block md:hidden relative">
          <div
            className="w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              {cardData.map((card) => (
                <div key={card.id} className="w-full shrink-0 px-1">
                  <div className="flex flex-col">
                    {/* Card Image Box */}
                    <div 
                      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content */}
                    <div className="pt-4 flex flex-col">
                      <h3 className="font-sans font-bold text-xl text-[#1f1a40] tracking-tight">
                        {card.title}
                      </h3>
                      
                      <p className="font-sans text-xs text-slate-500 font-medium mt-1 mb-3">
                        {card.subtitle}
                      </p>

                      {/* Metrics */}
                      <div className="space-y-1.5">
                        {card.metrics.map((m, idx) => (
                          <div key={idx} className="font-sans text-xs text-slate-700 leading-relaxed flex items-start">
                            {card.isBullet && (
                              <span className="text-amber-500 font-bold mr-2">•</span>
                            )}
                            <div>
                              <strong className="font-bold text-[#1f1a40]">{m.bold}</strong>
                              <span>{m.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Slider Controls: Prev Button, Pagination Dots, Next Button */}
          <div className="flex justify-between items-center mt-6 px-1">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1f1a40] active:scale-95 transition-all shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Pagination Dots */}
            <div className="flex justify-center items-center gap-2">
              {cardData.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  animate={{ width: activeIndex === idx ? 28 : 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`h-2.5 rounded-full transition-colors duration-300 ${
                    activeIndex === idx ? "bg-[#1f1a40]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1f1a40] active:scale-95 transition-all shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
