"use client";

import { motion } from "framer-motion";

export default function PlatformExpertise() {
  const platforms = [
    { name: "Google Ads", tag: "Paid Search & Display", color: "#4285F4" },
    { name: "Meta", tag: "Instagram & Facebook Ads", color: "#0668E1" },
    { name: "SnapChat Ads", tag: "Gen-Z Social Ads", color: "#FFFC00", darkText: true },
    { name: "YouTube Ads", tag: "High-Impact Video Ads", color: "#FF0000" },
    { name: "LinkedIn", tag: "B2B Lead Generation", color: "#0A66C2" },
    { name: "Shopify", tag: "E-Commerce Scaling", color: "#95BF47" },
    { name: "Amazon", tag: "Marketplace Ads", color: "#FF9900", darkText: true },
    { name: "ZeptoAds", tag: "Quick-Commerce Ads", color: "#7B2CBF" },
    { name: "Bing", tag: "Microsoft Search Network", color: "#008373" },
    { name: "Microsoft", tag: "Enterprise Network", color: "#00A4EF" },
    { name: "Google", tag: "SEO & Search Engine Ecosystem", color: "#EA4335" },
  ];

  return (
    <section id="partners" className="py-16 md:py-[4vw] bg-white border-b border-[#E7E1FF] overflow-hidden select-none">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] mb-8 md:mb-[2vw] text-center">
        <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
          Platform Mastery
        </span>
        <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] text-[#0B1B3D]">
          Our Partners.
        </h2>
      </div>

      {/* Sleek Visual Bar showing Dominated Platforms */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1vw]">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[9vw] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[9vw] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-fast-scroll flex items-center gap-6 md:gap-[1.8vw]">
          {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              className="px-6 py-3 md:px-[1.5vw] md:py-[0.8vw] rounded-xl md:rounded-[0.8vw] bg-[#F8FAFC] border border-[#E7E1FF] shadow-sm flex items-center gap-3 shrink-0 hover:border-[#0B1B3D] hover:shadow-md transition-all group"
            >
              <div 
                className="w-3 h-3 md:w-[0.7vw] md:h-[0.7vw] rounded-full shrink-0" 
                style={{ backgroundColor: platform.color }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm md:text-[0.95vw] text-[#0B1B3D] group-hover:text-[#FF5914] transition-colors">
                  {platform.name}
                </span>
                <span className="text-[10px] md:text-[0.65vw] text-black/70 font-semibold uppercase tracking-wider">
                  {platform.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
