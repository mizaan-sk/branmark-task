"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const platforms = [
  { name: "Google Ads", src: "/assets/platforms/google-ads-logo.webp" },
  { name: "Meta", src: "/assets/platforms/meta-logo.webp" },
  { name: "ChatGPT Ads", src: "/assets/platforms/chatgpt-ads-logo.webp" },
  { name: "YouTube", src: "/assets/platforms/youtube-logo.webp" },
  { name: "Amazon Ads", src: "/assets/platforms/amazon-ads-logo.webp" },
  { name: "Bing Ads", src: "/assets/platforms/bing-ads-logo.webp" },
  { name: "Taboola", src: "/assets/platforms/taboola-logo.webp" },
  { name: "Adobe", src: "/assets/platforms/adobe-logo.webp" },
];

export default function PlatformExpertise() {
  return (
    <section id="partners" className="py-12 sm:py-20 md:py-[3vw] bg-gradient-to-b from-[#6d20e0] via-[#5c1ce6] to-[#480ed8] text-white select-none relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[45vw] h-[300px] md:h-[20vw] bg-[#6d20e0]/40 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] text-center relative z-10 mb-8 sm:mb-12 md:mb-[3vw]">
        <p className="text-sm md:text-[1.25vw] font-medium text-white mb-2 md:mb-[0.5vw]">Our Expertise</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[3.5vw] font-semibold text-white tracking-tight"
        >
          Platforms We Run Ads On
        </motion.h2>
      </div>

      {/* Infinite Fast-Moving Horizontal Marquee of Partner Logos */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1.5vw] z-10">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[10vw] bg-gradient-to-r from-[#5c1ce6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[10vw] bg-gradient-to-l from-[#5c1ce6] to-transparent z-10 pointer-events-none" />

        <Marquee
          items={platforms}
          label="ad platform logos"
          duration="9s"
          listClassName="gap-10 pr-10 sm:gap-14 sm:pr-14 md:gap-[4.5vw] md:pr-[4.5vw]"
          controlClassName="bg-white/15 text-white hover:bg-white/30"
          renderItem={(platform, isClone) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-16 w-32 sm:h-20 sm:w-40 md:h-[5vw] md:w-[11vw] flex items-center justify-center"
            >
              <img
                src={platform.src}
                alt={isClone ? "" : `${platform.name} logo`}
                width={480}
                height={113}
                loading="lazy"
                decoding="async"
                className="max-h-12 sm:max-h-14 md:max-h-[3.6vw] w-auto max-w-full object-contain transition-all duration-300 hover:brightness-110 drop-shadow-md"
              />
            </motion.div>
          )}
        />
      </div>
    </section>
  );
}




