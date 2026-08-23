"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const clientResultsData = [
  {
    id: "stoxbox",
    brandName: "StoxBox",
    category: "Financial Service",
    logoSrc: "/assets/stoxbox_logo.svg",
    type: "App Installs",
    totalLeads: "3.99L Installs",
    metricLabel: "TOTAL INSTALLS",
    spends: "11.9L",
    cpl: "3",
    costLabel: "CPI",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/8.png" },
      { name: "Meta Logo", iconSrc: "/assets/3.png" },
    ],
    adImageSrc: "/cs/cd3.png",
    adAlt: "StoxBox Financial Service Ad Creative",
  },
  {
    id: "classic-paramount",
    brandName: "Classic Paramount Real Estate",
    category: "Real Estate",
    logoSrc: "/assets/paramount_logo.svg",
    type: "Lead Generation",
    totalLeads: "2972 Leads",
    metricLabel: "TOTAL LEADS",
    spends: "179.8K",
    cpl: "60.5",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/8.png" },
      { name: "Meta Logo", iconSrc: "/assets/3.png" },
    ],
    adImageSrc: "/cs/cd2.png",
    adAlt: "Classic Paramount Real Estate Ad Creative",
  },
  {
    id: "beshak",
    brandName: "Beshak",
    category: "Insurance",
    logoSrc: "/assets/beshak_logo.svg",
    type: "Lead Generation",
    totalLeads: "1476 Leads",
    metricLabel: "TOTAL LEADS",
    spends: "4.84L",
    cpl: "304",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/8.png" },
      { name: "Meta Logo", iconSrc: "/assets/3.png" },
    ],
    adImageSrc: "/cs/c5.png",
    adAlt: "Beshak Insurance Ad Creative",
  },
];

export default function ClientResults() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientResultsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientResultsData.length) % clientResultsData.length);
  };

  const renderCard = (card) => (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-8 shadow-xl hover:shadow-2xl border border-purple-100/80 flex flex-col sm:flex-row gap-6 items-center justify-between transition-all duration-300 group h-full relative overflow-hidden">
      {/* Left Details & Metrics */}
      <div className="flex-1 space-y-4 w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        
        {/* Top Brand Header */}
        <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
          <img
            src={card.logoSrc}
            alt={`${card.brandName} Logo`}
            className="h-8 sm:h-9 max-w-[140px] object-contain"
          />
          <div className="h-5 w-[2px] bg-[#480ed8] shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-[#480ed8] bg-purple-50/90 px-3 py-1 rounded-full border border-purple-100 uppercase tracking-wider">
            {card.category}
          </span>
        </div>

        {/* Campaign Service Subheading */}
        <h3 className="text-lg sm:text-2xl font-extrabold text-[#180336] tracking-tight">
          {card.type}
        </h3>

        {/* Main Big Result Stat */}
        <div className="flex flex-col items-center sm:items-start my-1">
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#480ed8] tracking-tight leading-none">
            {card.totalLeads}
          </div>
          <div className="text-xs font-bold uppercase text-[#FF5914] mt-1.5 tracking-wider">
            {card.metricLabel}
          </div>
        </div>

        {/* Metrics Pill (Spend & CPI/CPL) */}
        <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-sm inline-flex items-center justify-center gap-6 sm:gap-8 text-center w-full max-w-[280px] sm:max-w-none">
          <div className="text-center sm:text-left">
            <div className="text-lg sm:text-2xl font-bold text-[#480ed8]">{card.spends}</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">SPEND</div>
          </div>
          <div className="h-7 w-[1px] bg-slate-200" />
          <div className="text-center sm:text-left">
            <div className="text-lg sm:text-2xl font-bold text-[#480ed8] leading-tight">{card.cpl}</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{card.costLabel}</div>
          </div>
        </div>

        {/* Multi Channel Platform Logos */}
        <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
          <span className="text-xs font-semibold text-slate-400">Platforms:</span>
          {card.channels.map((channel, idx) => (
            <img
              key={idx}
              src={channel.iconSrc}
              alt={channel.name}
              className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-110"
            />
          ))}
        </div>

      </div>

      {/* Right Side Real Ad Creative Image */}
      <div className="max-md:hidden w-full sm:w-[180px] md:w-[200px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-purple-100 bg-slate-50 group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0 flex items-center justify-center p-1.5">
        <img
          src={card.adImageSrc}
          alt={card.adAlt}
          className="w-full h-auto max-h-[260px] object-contain rounded-xl"
        />
      </div>
    </div>
  );

  return (
    <section id="proof" className="py-12 sm:py-20 md:py-[6vw] bg-gradient-to-b from-white via-[#f3ecff] to-[#eadfff] text-[#180336] relative overflow-hidden select-none">
      <div className="w-full max-w-7xl md:max-w-[85vw] mx-auto px-6 md:px-[3vw] relative z-10">

        {/* Header */}
        <div className="text-center mx-auto mb-8 sm:mb-16 md:mb-[4vw]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-[3.5vw] font-semibold text-[#180336] mb-2 sm:mb-4 md:mb-[1vw] tracking-tight"
            >
              Proof, Not Promises
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-[1.25vw] text-[#480ed8] font-semibold mb-4 sm:mb-8 md:mb-[2vw] md:leading-[1.8vw]"
            >
              The math behind our marketing. Download the full performance reports to see how we did it.
            </motion.p>
          </div>
        </div>

        {/* Desktop Grid View (2 Cards per Row) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {clientResultsData.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={idx === 2 ? "lg:col-span-2 lg:max-w-[calc(50%-1rem)] lg:mx-auto w-full" : "w-full"}
            >
              {renderCard(card)}
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper Slider View */}
        <div className="block lg:hidden relative w-full px-2">
          <div className="overflow-hidden relative rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -40) {
                    nextSlide();
                  } else if (swipe > 40) {
                    prevSlide();
                  }
                }}
                className="w-full touch-pan-y"
              >
                {renderCard(clientResultsData[currentIndex])}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swiper Controls: Prev & Next Loop Buttons + Indicators */}
          <div className="flex items-center justify-between mt-6 px-4">
            <button
              onClick={prevSlide}
              aria-label="Previous Card"
              className="p-3 rounded-full bg-white border border-purple-200 text-[#480ed8] shadow-md hover:bg-purple-50 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {clientResultsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#480ed8]"
                      : "w-2.5 bg-purple-300 hover:bg-purple-400"
                  }`}
                  aria-label={`Go to card ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Card"
              className="p-3 rounded-full bg-white border border-purple-200 text-[#480ed8] shadow-md hover:bg-purple-50 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="flex items-center w-full md:pt-[5vw] pt-6 sm:pt-10 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 md:gap-[0.5vw] px-8 py-3.5 md:px-[2.2vw] md:py-[0.9vw] rounded-full text-base md:text-[1vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
              <span>Download PDF</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
