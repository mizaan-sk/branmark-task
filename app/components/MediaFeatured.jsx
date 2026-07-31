"use client";

import { motion } from "framer-motion";

export default function MediaFeatured() {
  const mediaList = [
    {
      name: "Built In",
      src: "https://brandshark.com/wp-content/uploads/2025/12/Built_In_Logo.webp",
    },
    {
      name: "The Financial Express (India)",
      src: "https://brandshark.com/wp-content/uploads/2025/12/The_Financial_Express_India_Logo.webp",
    },
    {
      name: "Inc42 / Digital Spotlight",
      src: "https://brandshark.com/wp-content/uploads/2025/12/logo-new.webp",
    },
    {
      name: "Tech in Asia",
      src: "https://brandshark.com/wp-content/uploads/2025/12/lxTFNDe_400x400.webp",
    },
  ];

  return (
    <section className="py-16 md:py-[4vw] bg-white border-b border-slate-200">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="text-center mb-10 md:mb-[2.5vw]">
          <h2 className="font-heading text-2xl md:text-[2vw] font-extrabold text-[#2b2058]">
            Featured In
          </h2>
          <p className="text-xs sm:text-sm md:text-[0.9vw] text-slate-500 mt-1 md:mt-[0.3vw]">
            Recognized by leading media platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[2vw] items-center max-w-4xl md:max-w-[55vw] mx-auto">
          {mediaList.map((media, idx) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 md:p-[1vw] rounded-xl md:rounded-[0.8vw] bg-slate-50 border border-slate-200 flex items-center justify-center h-24 md:h-[6vw] hover:border-[#2b2058]/30 transition-all"
            >
              <img
                src={media.src}
                alt={media.name}
                className="max-h-12 md:max-h-[3vw] w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-heading font-bold text-slate-700 text-sm md:text-[0.85vw] text-center">
                {media.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
