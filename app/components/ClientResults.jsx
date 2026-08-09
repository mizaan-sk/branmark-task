"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const clientResultsData = [
  {
    id: "kotak",
    brandName: "kotak",
    category: "Home Loan",
    logoSrc: "/assets/5.png",
    type: "Lead Generation",
    totalLeads: "4225",
    spends: "6.9L",
    cpl: "164",
    channels: [
      { name: "Meta Logo", iconSrc: "/assets/3.png" },
    ],
    adImageSrc: "/assets/2.png",
    adAlt: "Kotak Home Loan Ad Creative",
  },
  {
    id: "radcliffe",
    brandName: "Radcliffe",
    category: "Education",
    logoSrc: "/assets/6.png",
    type: "Lead Generation",
    totalLeads: "16,172",
    spends: "1.50cr",
    cpl: "925",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/8.png" },
      { name: "Meta Logo", iconSrc: "/assets/3.png" },
      { name: "Microsoft Logo", iconSrc: "/assets/7.png" },
    ],
    adImageSrc: "/assets/4.png",
    adAlt: "Radcliffe Education Ad Creative",
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
    <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[2vw] p-5 sm:p-8 md:p-[2.2vw] shadow-lg border border-purple-100/80 flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-[2vw] items-center justify-between hover:shadow-2xl transition-all duration-300 group h-full">
      {/* Left Metrics & Details */}
      <div className="flex-1 space-y-3.5 sm:space-y-5 md:space-y-[1.2vw] w-full flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Top Brand Header */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 md:gap-[0.8vw]">
          <img
            src={card.logoSrc}
            alt={`${card.brandName} Logo`}
            className="h-9 sm:h-7 md:h-[2vw] w-auto object-contain"
          />
          <div className="h-4 sm:h-6 md:h-[2.5vw] w-[2px] bg-[#480ed8] shrink-0" />
          <span className="text-base sm:text-xl whitespace-nowrap md:text-[1.5vw] font-bold text-[#180336]">
            {card.category}
          </span>
        </div>

        {/* Category Subheading */}
        <h3 className="text-base sm:text-2xl md:text-[1.8vw] font-bold text-[#180336] tracking-tight text-center md:text-left">
          {card.type}
        </h3>

        {/* Main Big Metric Stat */}
    <div className="max-md:flex max-md:gap-3 max-md:items-center max-md:justify-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-3xl sm:text-5xl md:text-[4vw] font-bold text-[#480ed8] tracking-tight leading-none">
            {card.totalLeads}
          </div>
          <div className="text-[10px] sm:text-xs md:text-[1vw] font-bold uppercase text-[#FF5914] mt-1 md:mt-[0.4vw]">
            TOTAL LEADS
          </div>
        </div>

        {/* White Rounded Metrics Pill Container */}
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl sm:rounded-2xl md:rounded-[1.2vw] p-3 sm:p-4 md:p-[0.9vw] shadow-sm inline-flex items-center justify-center gap-6 sm:gap-8 md:gap-[2vw] text-center">
          <div className="text-center md:text-left">
            <div className="text-lg sm:text-2xl md:text-[1.6vw] font-bold text-[#480ed8]">{card.spends}</div>
            <div className="text-[9px] sm:text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase">SPENDS</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-lg sm:text-2xl md:text-[1.6vw] font-bold text-[#480ed8] leading-tight">{card.cpl}</div>
            <div className="text-[9px] sm:text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase">CPL</div>
          </div>
        </div>
    </div>

        {/* Multi Channel Platform Logos */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 pt-0.5">
          {card.channels.map((channel, idx) => (
            <img
              key={idx}
              src={channel.iconSrc}
              alt={channel.name}
              className="h-5 sm:h-6 md:h-[1.8vw] w-auto object-contain"
            />
          ))}
        </div>

      </div>

      {/* Right Side Image Only */}
      <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-none md:w-[12vw] md:mt-[4vw] shrink-0 rounded-xl sm:rounded-2xl md:rounded-[1.2vw] overflow-hidden shadow-md border border-slate-200 group-hover:scale-105 transition-transform duration-300 mx-auto md:mx-0">
        <img
          src={card.adImageSrc}
          alt={card.adAlt}
          className="w-full h-auto sm:h-40 md:h-auto object-cover"
        />
      </div>
    </div>
  );

  return (
    <section id="proof" className="py-12 sm:py-20 md:py-[6vw] bg-gradient-to-b from-white via-[#f3ecff] to-[#eadfff] text-[#180336] relative overflow-hidden select-none">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] relative z-10">

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

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 md:gap-12">
          {clientResultsData.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
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

