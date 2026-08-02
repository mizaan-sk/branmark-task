"use client";

import { motion } from "framer-motion";

export default function TrustedBrands() {
  const logos = [
    "/assets/Clients/Web LOGOS-01.png",
    "/assets/Clients/Web LOGOS-02.png",
    "/assets/Clients/Web LOGOS-03.png",
    "/assets/Clients/Web LOGOS-04.png",
    "/assets/Clients/Web LOGOS-05.png",
    "/assets/Clients/Web LOGOS-06.png",
    "/assets/Clients/Web LOGOS-07.png",
    "/assets/Clients/Web LOGOS-08.png",
    "/assets/Clients/Web LOGOS-09.png",
    "/assets/Clients/Web LOGOS-10.png",
    "/assets/Clients/Web LOGOS-11.png",
    "/assets/Clients/Web LOGOS-12.png",
    "/assets/Clients/Web LOGOS-13.png",
    "/assets/Clients/Web LOGOS-14.png",
    "/assets/Clients/Web LOGOS-15.png",
    "/assets/Clients/Web LOGOS-16.png",
    "/assets/Clients/Web LOGOS-17.png",
  ];

  return (
    <section id="brands" className="py-16 md:py-[4vw] bg-[#ffffff] border-b border-purple-100 overflow-hidden relative select-none">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-4 md:px-[2vw] mb-8 md:mb-[2.5vw] text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-[2.6vw] font-semibold text-[#180336] tracking-tight"
        >
          Trusted by brands ready to scale.
        </motion.h2>
      </div>

      {/* Infinite Fast-Moving Horizontal Marquee of Client Logos */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1vw]">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-fast-scroll flex items-center gap-10 md:gap-[3.5vw]">
          {[...logos, ...logos, ...logos].map((src, idx) => (
            <motion.div
              key={`${src}-${idx}`}
              whileHover={{ scale: 1.08 }}
              className="h-12 w-28 md:h-[3.5vw] md:w-[9vw] flex items-center justify-center shrink-0"
            >
              <img
                src={src}
                alt="Client Brand Logo"
                className="max-h-10 md:max-h-[3.2vw] w-auto max-w-full object-contain transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


