"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const clientResultsData = [
  {
    id: "stoxbox",
    brandName: "StoxBox",
    category: "Financial Service",
    logoSrc: "/assets/clients/stoxbox-logo.webp",
    logoClass: "h-10 sm:h-12 w-auto max-w-[140px] object-contain shrink-0",
    type: "App Installs",
    totalLeads: "3.99L Installs",
    metricLabel: "TOTAL INSTALLS",
    spends: "11.9L",
    cpl: "3", 
    costLabel: "CPI",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/platforms/google-ads-icon.webp" },
      { name: "Meta Logo", iconSrc: "/assets/platforms/meta-icon.webp" },
      { name: "Microsoft Logo", iconSrc: "/assets/platforms/microsoft-icon.webp" },
    ],
  },
  {
    id: "beshak",
    brandName: "Beshak",
    category: "Insurance",
    logoSrc: "/assets/clients/beshak-logo.webp",
    logoClass: "h-10 sm:h-12 w-auto max-w-[140px] object-contain shrink-0",
    type: "Lead Generation",
    totalLeads: "1476 Leads",
    metricLabel: "TOTAL LEADS",
    spends: "4.84L",
    cpl: "304",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/platforms/google-ads-icon.webp" },
      { name: "Meta Logo", iconSrc: "/assets/platforms/meta-icon.webp" },
      { name: "Microsoft Logo", iconSrc: "/assets/platforms/microsoft-icon.webp" },
    ],
  },
  {
    id: "classic-paramount",
    brandName: "Classic Paramount Real Estate",
    category: "Real Estate",
    logoSrc: "/assets/clients/classic-paramount-logo.webp",
    logoClass: "h-10 sm:h-12 w-auto max-w-[140px] object-contain shrink-0",
    type: "Lead Generation",
    totalLeads: "2972 Leads",
    metricLabel: "TOTAL LEADS",
    spends: "179.8K",
    cpl: "60.5",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/platforms/google-ads-icon.webp" },
      { name: "Meta Logo", iconSrc: "/assets/platforms/meta-icon.webp" },
      { name: "Microsoft Logo", iconSrc: "/assets/platforms/microsoft-icon.webp" },
    ],
  },
  {
    id: "kotak-home-loan",
    brandName: "Kotak Home Loan",
    category: "Home Loan",
    logoSrc: "/assets/clients/kotak-home-loan-logo.webp",
    logoClass: "h-10 sm:h-12 w-auto max-w-[140px] object-contain shrink-0",
    type: "Lead Generation",
    totalLeads: "4225 Leads",
    metricLabel: "TOTAL LEADS",
    spends: "6.9L",
    cpl: "164",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/platforms/google-ads-icon.webp" },
      { name: "Meta Logo", iconSrc: "/assets/platforms/meta-icon.webp" },
      { name: "Microsoft Logo", iconSrc: "/assets/platforms/microsoft-icon.webp" },
    ],
  },
  {
    id: "radcliffe-education",
    brandName: "Radcliffe Education",
    category: "Education",
    logoSrc: "/assets/clients/radcliffe-education-logo.webp",
    logoClass: "h-10 sm:h-12 w-auto max-w-[140px] object-contain shrink-0",
    type: "Lead Generation",
    totalLeads: "16,172 LEADS",
    metricLabel: "TOTAL LEADS",
    spends: "1.50cr",
    cpl: "925",
    costLabel: "CPL",
    channels: [
      { name: "Google Ads", iconSrc: "/assets/platforms/google-ads-icon.webp" },
      { name: "Meta Logo", iconSrc: "/assets/platforms/meta-icon.webp" },
      { name: "Microsoft Logo", iconSrc: "/assets/platforms/microsoft-icon.webp" },
    ],
  },
];

export default function ClientResults() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCard = (card) => (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-purple-100/90 flex flex-col justify-between transition-all duration-300 group w-full h-full min-h-[340px] md:min-h-[380px] relative overflow-hidden font-sans">
      {/* Subtle background decorative gradient blur */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-purple-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      <div className="w-full h-full flex flex-col items-center text-center md:items-start md:text-left">
        {/* Brand Header: Logo | Category */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-3 md:mb-5 flex-wrap md:flex-nowrap">
          <img
            src={card.logoSrc}
            alt={`${card.brandName} Logo`}
            width={480}
            height={113}
            loading="lazy"
            decoding="async"
            className={card.logoClass}
          />
          <div className="h-6 md:h-5 w-[2px] bg-purple-200 md:bg-[#480ed8]/20 shrink-0" />
          <span className="text-base font-bold text-[#180336] md:text-sm md:text-[#480ed8] md:bg-purple-50/90 md:px-3 md:py-1 md:rounded-full md:border md:border-purple-100 md:uppercase md:tracking-wider md:whitespace-nowrap md:shrink-0 font-sans">
            {card.category}
          </span>
        </div>

        {/* Campaign Type */}
        <h3 className="text-[19px] md:text-2xl font-semibold md:font-bold text-[#180336] tracking-tight font-sans mb-4 md:mb-3">
          {card.type}
        </h3>

        {/* Result, Spend and Cost: side by side on mobile, stacked on desktop */}
        <div className="flex items-center justify-center gap-4 flex-wrap w-full my-2 md:block md:my-0">
          <div className="flex flex-col items-center md:items-start md:my-3">
            <div className="text-3xl md:text-5xl font-extrabold text-[#480ed8] tracking-tight leading-none font-sans">
              {card.totalLeads}
            </div>
            <div className="text-xs md:text-sm font-bold uppercase text-[#FF5914] mt-1.5 md:mt-2 tracking-wider font-sans">
              {card.metricLabel}
            </div>
          </div>

          <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl px-4 py-2.5 md:p-4 shadow-sm inline-flex md:flex items-center gap-4 md:justify-around text-center md:w-full md:my-4">
            <div className="md:text-left">
              <div className="text-[20px] md:text-2xl font-bold text-[#480ed8] font-sans leading-snug">{card.spends}</div>
              <div className="text-[10px] md:text-xs font-bold md:font-semibold text-slate-500 uppercase tracking-wider font-sans">SPEND</div>
            </div>
            <div className="h-7 md:h-8 w-[1px] bg-slate-200" />
            <div className="md:text-left">
              <div className="text-lg md:text-2xl font-bold text-[#480ed8] leading-snug md:leading-tight font-sans">{card.cpl}</div>
              <div className="text-[10px] md:text-xs font-bold md:font-semibold text-slate-500 uppercase tracking-wider font-sans">{card.costLabel}</div>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="flex items-center justify-center md:justify-between gap-3 mt-4 pt-1 md:pt-4 md:border-t md:border-slate-100 md:mt-auto w-full">
          <span className="hidden md:inline text-xs font-semibold text-slate-400 font-sans">Platforms:</span>
          <div className="flex items-center gap-3 md:gap-2.5">
            {card.channels.map((channel) => (
              <img
                key={channel.name}
                src={channel.iconSrc}
                alt={channel.name}
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
                className="h-5 md:h-6 w-auto object-contain transition-transform md:group-hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="proof" className="py-12 sm:py-20 md:py-[6vw] bg-gradient-to-b from-white via-[#f3ecff] to-[#eadfff] text-[#180336] relative overflow-hidden select-none font-sans">
      <div className="w-full max-w-7xl md:max-w-[85vw] mx-auto px-6 md:px-[3vw] relative z-10">

        {/* Header */}
        <div className="text-center mx-auto mb-8 sm:mb-12 md:mb-[3vw]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-[2.8vw] font-semibold text-[#180336] mb-2 sm:mb-4 md:mb-[1vw] tracking-tight font-sans"
            >
              Performance Marketing Results: Leads and App Installs at Scale
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-[1.25vw] text-[#480ed8] font-semibold mb-4 sm:mb-8 md:mb-[2vw] md:leading-[1.8vw] font-sans"
            >
              Proof, not promises. The math behind our marketing. Download the full performance reports to see how we did it.
            </motion.p>
          </div>
        </div>

        {/* Swiper Cards Carousel */}
        <div className="relative w-full py-2">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 24 },
              1024: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 28 },
            }}
            className="w-full !py-4 flex items-stretch"
          >
            {clientResultsData.map((card) => (
              <SwiperSlide key={card.id} className="!h-auto flex w-full">
                {renderCard(card)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls: Prev / Next Buttons & Pagination Indicators */}
          <div className="flex items-center justify-between mt-6 px-2 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Slide"
              className="p-3.5 rounded-full bg-white border border-purple-200 text-[#480ed8] shadow-md hover:bg-[#480ed8] hover:text-white active:scale-95 transition-all cursor-pointer font-sans group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {clientResultsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 bg-[#480ed8]"
                      : "w-2.5 bg-purple-300 hover:bg-purple-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Slide"
              className="p-3.5 rounded-full bg-white border border-purple-200 text-[#480ed8] shadow-md hover:bg-[#480ed8] hover:text-white active:scale-95 transition-all cursor-pointer font-sans group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="flex items-center w-full md:pt-[4vw] pt-8 justify-center font-sans">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 md:gap-[0.5vw] px-8 py-3.5 md:px-[2.2vw] md:py-[0.9vw] rounded-full text-base md:text-[1vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 cursor-pointer font-sans"
            >
              <Download className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
              <span className="font-sans">Download PDF</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

