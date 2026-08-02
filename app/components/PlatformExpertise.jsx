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

  return (
    <section id="expertise" className="py-20 md:py-[6vw] bg-gradient-to-b from-[#6d20e0] via-[#5c1ce6] to-[#480ed8] text-white select-none relative overflow-hidden">
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
          className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-white mb-12 md:mb-[4vw] tracking-tight"
        >
          Our Expertise
        </motion.h2>

        {/* Partner Logos - Clean layout without block containers */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-[3.5vw]">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform duration-300"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 sm:h-14 md:h-[3.6vw] w-auto object-contain max-w-[140px] sm:max-w-[170px] md:max-w-[12vw] transition-all duration-300 hover:brightness-110 drop-shadow-md"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


