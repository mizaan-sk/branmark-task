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
          className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-white mb-12 md:mb-[3vw] tracking-tight"
        >
          Our Expertise
        </motion.h2>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-[1.2vw] items-center justify-center">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="h-24 md:h-[7vw] rounded-2xl md:rounded-[1.2vw] bg-[#24084c]/80 border border-purple-500/20 backdrop-blur-md p-4 md:p-[1.2vw] shadow-xl flex items-center justify-center group cursor-pointer hover:border-purple-400/60 hover:bg-[#2e0b61] transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-10 md:max-h-[2.8vw] w-auto max-w-[85%] object-contain group-hover:scale-108 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

