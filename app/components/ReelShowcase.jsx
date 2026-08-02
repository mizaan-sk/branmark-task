"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";

export default function ReelShowcase() {
  const [mutedStates, setMutedStates] = useState({});
  const [showAll, setShowAll] = useState(false);

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
    {
      id: "cultfit",
      handle: "@CultFit",
      videoUrl: "https://player.vimeo.com/video/1195258407?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "C",
      bg: "bg-[#FF5914]",
    },
    {
      id: "mamaearth",
      handle: "@Mamaearth",
      videoUrl: "https://player.vimeo.com/video/1195258427?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "M",
      bg: "bg-[#480ED8]",
    },
    {
      id: "licious",
      handle: "@Licious",
      videoUrl: "https://player.vimeo.com/video/1195258301?autoplay=1&muted=1&loop=1&autopause=0&api=1&controls=0",
      avatarLetter: "L",
      bg: "bg-[#FF5914]",
    },
  ];

  const toggleMute = (id) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="creative" className="py-20 md:py-[5vw] bg-gradient-to-b from-[#eadfff] via-[#cfb3f9] to-[#6d20e0]">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">

        {/* Section Header */}
        <div className="flex flex-col items-center md:pb-[3vw] pb-3 justify-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-[#180336] mb-4 md:mb-[1vw] tracking-tight"
          >
            Scroll-Stopping Creative.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-[1.25vw] text-[#480ed8] font-semibold mb-8 md:mb-[2vw] md:leading-[1.8vw]"
          >
            We design videos and graphics that demand attention and drive action.
          </motion.p>
        </div>

        {/* Clean Auto-Playing Video Snippet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-[1.2vw] mb-8 md:mb-[2vw]">
          <AnimatePresence>
            {reels.map((reel, index) => {
              const isMuted = mutedStates[reel.id] !== false;

              // Visibility rules:
              // - If showAll: all items visible.
              // - If !showAll:
              //   - Index 0..3 (first 4 reels): visible on all screens (mobile shows 4 reels).
              //   - Index 4..7 (reels 5-8): hidden on mobile, visible on desktop (md+).
              //   - Index 8..11 (reels 9-12): hidden on all screens until View More is clicked.
              let visibilityClass = "block";
              if (!showAll) {
                if (index >= 8) {
                  visibilityClass = "hidden";
                } else if (index >= 4) {
                  visibilityClass = "hidden md:block";
                }
              }

              return (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
                  className={`relative rounded-2xl md:rounded-[1vw] overflow-hidden aspect-[9/16] bg-[#1E293B] shadow-md group border border-[#E7E1FF] ${visibilityClass}`}
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
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-slate-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#FF5914]" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Handle */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-[1vw] md:left-[1vw] md:right-[1vw] z-10 flex items-center gap-3 md:gap-[0.6vw]">
                    <div
                      className={`w-8 h-8 md:w-[2vw] md:h-[2vw] rounded-full ${reel.bg} text-white font-heading font-extrabold text-xs md:text-[0.7vw] flex items-center justify-center border border-white/30 shrink-0 shadow-md`}
                    >
                      {reel.avatarLetter}
                    </div>
                    <p className="font-heading font-bold text-white text-xs md:text-[0.75vw] tracking-tight truncate">
                      {reel.handle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-white  hover:text-[#370aa9] font-heading font-medium text-sm sm:text-base md:text-[0.95vw] transition-colors cursor-pointer"
          >
            <span>{showAll ? "View Less" : "View More"}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
            ) : (
              <ChevronDown className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
