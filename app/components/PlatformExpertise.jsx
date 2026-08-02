"use client";

import { motion } from "framer-motion";

export default function PlatformExpertise() {
  const platforms = [
    { name: "Meta Ads", subtitle: "Facebook & IG", icon: "♾️", badgeColor: "text-blue-600" },
    { name: "Google Ads", subtitle: "Search & Display", icon: "🔍", badgeColor: "text-amber-500" },
    { name: "TikTok Ads", subtitle: "Viral Short Video", icon: "🎵", badgeColor: "text-rose-500" },
    { name: "LinkedIn Ads", subtitle: "B2B Lead Funnels", icon: "💼", badgeColor: "text-blue-700" },
    { name: "YouTube Ads", subtitle: "High Impact Video", icon: "▶️", badgeColor: "text-red-600" },
  ];

  return (
    <section id="expertise" className="py-20 md:py-[6vw] bg-gradient-to-r from-[#6b21a8] via-[#480ed8] to-[#7c3aed] text-white select-none border-b border-purple-900/30">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] text-center">
        
        {/* Title Matching PDF Page 5 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-white mb-14 md:mb-[3.5vw] tracking-tight"
        >
          Our Expertise
        </motion.h2>

        {/* 5 White Card Boxes (Matching PDF Page 5 Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-[1.8vw]">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="h-28 md:h-[9vw] rounded-2xl md:rounded-[1.2vw] bg-white text-[#180336] p-6 md:p-[1.5vw] shadow-xl border border-white/40 flex flex-col items-center justify-center gap-2 md:gap-[0.5vw] group cursor-pointer"
            >
              <span className="text-2xl md:text-[2vw] group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </span>
              <h3 className="text-base sm:text-lg md:text-[1.1vw] font-bold text-[#180336] tracking-tight">
                {platform.name}
              </h3>
              <p className="text-[11px] md:text-[0.7vw] font-semibold text-slate-500 uppercase tracking-wider">
                {platform.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

