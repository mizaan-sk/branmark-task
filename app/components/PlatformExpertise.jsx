"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlatformExpertise() {
  const swiperRef = useRef(null);

  const partnerLogos = [
    { name: "Google Ads", src: "/Our Partners/Web LOGOS-47.png" },
    { name: "Meta", src: "/Our Partners/Web LOGOS-48.png" },
    { name: "YouTube", src: "/Our Partners/Web LOGOS-42.png" },
    { name: "Amazon Ads", src: "/Our Partners/Web LOGOS-41.png" },
    { name: "Bing Ads", src: "/Our Partners/Web LOGOS-49.png" },
    { name: "Taboola", src: "/Our Partners/Web LOGOS-46.png" },
    { name: "Adobe", src: "/Our Partners/Web LOGOS-50.png" },
  ];

  return (
    <section id="expertise" className="py-16 sm:py-20 md:py-[6vw] bg-gradient-to-b from-[#6d20e0] via-[#5c1ce6] to-[#480ed8] text-white select-none relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[45vw] h-[300px] md:h-[20vw] bg-[#6d20e0]/40 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] text-center relative z-10">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[3.5vw] font-semibold text-white mb-8 sm:mb-12 md:mb-[4vw] tracking-tight"
        >
          Our Expertise
        </motion.h2>

        {/* Unified Swiper Slider for Mobile & Desktop */}
        <div className="relative px-4 md:px-12">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 36,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 52,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 68,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 84,
                centeredSlides: false,
              },
            }}
            className="w-full !pb-14 custom-swiper-bullets"
          >
            {partnerLogos.map((partner) => (
              <SwiperSlide key={partner.name} className="h-auto flex items-center justify-center">
                <div className="flex items-center justify-center p-2 h-24 sm:h-28 md:h-[6vw] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-12 sm:h-14 md:h-[3.6vw] w-auto object-contain max-w-[140px] sm:max-w-[170px] md:max-w-[12vw] transition-all duration-300 hover:brightness-110 drop-shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Side Floating Navigation Buttons for Desktop */}
          <div className="hidden md:flex absolute top-[3vw] -translate-y-1/2 left-[-5vw] right-[-5vw] justify-between pointer-events-none px-2 z-20">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous partner logo"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next partner logo"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Centered Slider Control Buttons (Mobile & Tablet) */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous partner logo"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next partner logo"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-90 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>

      {/* Style overrides for custom Swiper pagination bullets */}
      <style jsx global>{`
        .custom-swiper-bullets .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .custom-swiper-bullets .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 20px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
}



