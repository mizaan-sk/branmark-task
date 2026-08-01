"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function ReelShowcase() {
  const [mutedStates, setMutedStates] = useState({});

  const reels = [
    {
      id: "prestige",
      handle: "@Prestige cookware",
      videoUrl: "https://player.vimeo.com/video/1195258407?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "P",
      bg: "bg-[#480ED8]",
    },
    {
      id: "superyou",
      handle: "@SuperYou",
      videoUrl: "https://player.vimeo.com/video/1195258427?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "S",
      bg: "bg-[#FF5914]",
    },
    {
      id: "eatfit",
      handle: "@Eatfit",
      videoUrl: "https://player.vimeo.com/video/1195258301?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "E",
      bg: "bg-[#480ED8]",
    },
    {
      id: "damro",
      handle: "@Damro",
      videoUrl: "https://player.vimeo.com/video/1195259680?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "D",
      bg: "bg-[#FF5914]",
    },
    {
      id: "iic",
      handle: "@IIC Lakshya",
      videoUrl: "https://player.vimeo.com/video/1195258304?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "I",
      bg: "bg-[#480ED8]",
    },
    {
      id: "krispykreme",
      handle: "@Krispy Kreme India",
      videoUrl: "https://player.vimeo.com/video/1195258363?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "K",
      bg: "bg-[#FF5914]",
    },
    {
      id: "aroleap",
      handle: "@Aroleap",
      videoUrl: "https://player.vimeo.com/video/1195260424?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "A",
      bg: "bg-[#480ED8]",
    },
    {
      id: "mybra",
      handle: "@MyBra",
      videoUrl: "https://player.vimeo.com/video/1195258388?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "M",
      bg: "bg-[#FF5914]",
    },
    {
      id: "rubys",
      handle: "@Rubys organics",
      videoUrl: "https://player.vimeo.com/video/1195262580?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "R",
      bg: "bg-[#480ED8]",
    },
  ];

  const toggleMute = (id) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="reels" className="py-20 md:py-[5vw] bg-[#F8FAFC] border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="text-center max-w-2xl md:max-w-[40vw] mx-auto mb-14 md:mb-[3vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 md:mb-[0.5vw] block">
            Creative Showcase
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#480ED8]">
            High-Performing Social Media Video Reels
          </h2>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-[1.2vw]">
          {reels.map((reel, index) => {
            const isMuted = mutedStates[reel.id] !== false;

            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative rounded-2xl md:rounded-[1vw] overflow-hidden aspect-[9/16] bg-[#1E293B] shadow-md group border border-[#E7E1FF]"
              >
                <iframe
                  src={reel.videoUrl}
                  className="w-full h-full object-cover pointer-events-none scale-[1.05]"
                  allow="autoplay; fullscreen"
                  title={reel.handle}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-transparent to-transparent pointer-events-none" />

                {/* Top Mute Control */}
                <div className="absolute top-3 right-3 md:top-[0.8vw] md:right-[0.8vw] z-10">
                  <button
                    onClick={() => toggleMute(reel.id)}
                    className="p-2 md:p-[0.5vw] rounded-full bg-[#1E293B]/80 hover:bg-[#1E293B] border border-white/20 text-white transition-colors"
                    aria-label="Toggle Sound"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-slate-300" /> : <Volume2 className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#FF5914]" />}
                  </button>
                </div>

                {/* Bottom Handle */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-[1vw] md:left-[1vw] md:right-[1vw] z-10 flex items-center gap-3 md:gap-[0.6vw]">
                  <div className={`w-8 h-8 md:w-[2vw] md:h-[2vw] rounded-full ${reel.bg} text-white font-heading font-extrabold text-xs md:text-[0.7vw] flex items-center justify-center border border-white/30 shrink-0 shadow-md`}>
                    {reel.avatarLetter}
                  </div>
                  <p className="font-heading font-bold text-white text-xs md:text-[0.75vw] tracking-tight truncate">
                    {reel.handle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
