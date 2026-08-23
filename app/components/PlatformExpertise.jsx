"use client";

import { motion } from "framer-motion";

export default function PlatformExpertise() {
  const partnerLogos = [
    { name: "Google Ads", src: "/Our Partners/Web LOGOS-47.png" },
    { name: "Meta", src: "/Our Partners/Web LOGOS-48.png" },
    { name: "YouTube", src: "/Our Partners/Web LOGOS-42.png" },
    { name: "Amazon Ads", src: "/Our Partners/Web LOGOS-41.png" },
    { name: "Bing Ads", src: "/Our Partners/Web LOGOS-49.png" },
    { name: "Taboola", src: "/Our Partners/Web LOGOS-46.png" },
    { name: "Adobe", src: "/Our Partners/Web LOGOS-50.png" },
  ];

  // Repeat logos 4 times for a smooth, continuous infinite marquee scroll
  const marqueeLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <section id="expertise" className="py-12 sm:py-20 md:py-[6vw] bg-gradient-to-b from-[#6d20e0] via-[#5c1ce6] to-[#480ed8] text-white select-none relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[45vw] h-[300px] md:h-[20vw] bg-[#6d20e0]/40 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] text-center relative z-10 mb-8 sm:mb-12 md:mb-[3vw]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[3.5vw] font-semibold text-white tracking-tight"
        >
          Our Expertise
        </motion.h2>
      </div>

      {/* Infinite Fast-Moving Horizontal Marquee of Partner Logos */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1.5vw] z-10">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[10vw] bg-gradient-to-r from-[#5c1ce6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[10vw] bg-gradient-to-l from-[#5c1ce6] to-transparent z-10 pointer-events-none" />

        <div className="animate-fast-scroll flex items-center gap-10 sm:gap-14 md:gap-[4.5vw]">
          {marqueeLogos.map((partner, idx) => (
            <motion.div
              key={`${partner.name}-${idx}`}
              whileHover={{ scale: 1.1 }}
              className="h-16 w-32 sm:h-20 sm:w-40 md:h-[5vw] md:w-[11vw] flex items-center justify-center shrink-0 cursor-pointer"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-12 sm:max-h-14 md:max-h-[3.6vw] w-auto max-w-full object-contain transition-all duration-300 hover:brightness-110 drop-shadow-md"
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




