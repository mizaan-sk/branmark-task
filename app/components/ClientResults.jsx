"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Zap } from "lucide-react";

export default function ClientResults() {
  const resultsData = [
    {
      id: "card-1",
      metric: "4,514%",
      metricLabel: "Search Click Growth",
      brand: "Third Wave Coffee",
      service: "Website Development & Organic SEO Engine",
      highlights: [
        { label: "SERP Keywords", value: "+1,736% Ranking Growth" },
        { label: "Primary Objective", value: "National Search Dominance" },
      ],
      badge: "Organic Growth",
      accentColor: "#0B1B3D",
      icon: TrendingUp,
    },
    {
      id: "card-2",
      metric: "7.5x",
      metricLabel: "Meta Ads ROAS",
      brand: "Kosala Silk Sarees",
      service: "Social Media & Full-Funnel Performance Ads",
      highlights: [
        { label: "Engagement", value: "+50% IG Engagement Rate" },
        { label: "Primary Objective", value: "DTC Revenue Scaling" },
      ],
      badge: "Performance ROI",
      accentColor: "#FF5914",
      icon: Target,
    },
    {
      id: "card-3",
      metric: "23M+",
      metricLabel: "Campaign Impressions",
      brand: "Krispy Kreme",
      service: "Digital Video Commercials & High-Impact Ads",
      highlights: [
        { label: "Festive Scale", value: "+1.2M rakhi & donut campaign reach" },
        { label: "Primary Objective", value: "Mass Brand Visibility" },
      ],
      badge: "Viral Scale",
      accentColor: "#0B1B3D",
      icon: Zap,
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-[6vw] bg-white text-black select-none overflow-hidden border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-[3.5vw] gap-4 md:gap-[2vw]">
          <div>
            <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
              Proven Performance
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-semibold text-3xl sm:text-4xl md:text-[2.8vw] md:leading-[3.2vw] text-[#0B1B3D] tracking-tight"
            >
              Proof, Not Promises.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base sm:text-lg md:text-[1.1vw] md:leading-[1.6vw] text-black font-semibold md:max-w-[28vw]"
          >
            The math behind our marketing.
          </motion.p>
        </div>

        {/* 3 Hard Data Cards Grid (Clean Massive Dark Blue Typography - Zero Image Creatives) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2vw]">
          {resultsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 md:p-[2.2vw] rounded-2xl md:rounded-[1.4vw] bg-[#F8FAFC] border border-[#E7E1FF] shadow-md hover:shadow-2xl hover:border-[#0B1B3D] transition-all duration-300 flex flex-col justify-between relative group cursor-pointer"
              >
                {/* Decorative Subtle Corner Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FF5914]/5 rounded-full blur-2xl group-hover:bg-[#FF5914]/15 transition-all" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8 md:mb-[2vw]">
                    <span 
                      className="px-3.5 py-1 rounded-full text-xs md:text-[0.75vw] font-bold uppercase tracking-wider text-white shadow-sm"
                      style={{ backgroundColor: card.accentColor }}
                    >
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 md:w-[2.2vw] md:h-[2.2vw] rounded-full bg-[#E7E1FF] flex items-center justify-center text-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-5 h-5 md:w-[1.1vw] md:h-[1.1vw]" />
                    </div>
                  </div>

                  {/* MASSIVE TYPOGRAPHY NUMERICAL DATA */}
                  <div className="mb-6 md:mb-[1.5vw]">
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="font-heading font-black text-5xl sm:text-6xl md:text-[4vw] leading-none text-[#0B1B3D] tracking-tight mb-2 group-hover:text-[#FF5914] transition-colors duration-300"
                    >
                      {card.metric}
                    </motion.div>
                    <div className="text-xs sm:text-sm md:text-[0.85vw] uppercase tracking-widest text-black/70 font-bold">
                      {card.metricLabel}
                    </div>
                  </div>

                  {/* Brand & Service Details */}
                  <div className="pt-4 border-t border-[#E7E1FF] mb-6 md:mb-[1.5vw]">
                    <h3 className="font-heading font-semibold text-xl md:text-[1.3vw] text-[#0B1B3D] mb-1 group-hover:text-[#FF5914] transition-colors">
                      {card.brand}
                    </h3>
                    <p className="text-xs md:text-[0.8vw] text-black/80 font-medium">
                      {card.service}
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 md:space-y-[0.5vw] bg-white p-4 md:p-[1vw] rounded-xl border border-[#E7E1FF] shadow-inner">
                  {card.highlights.map((h, i) => (
                    <div key={i} className="flex items-center justify-between text-xs md:text-[0.78vw] font-semibold text-black">
                      <span className="text-black/70">{h.label}</span>
                      <span className="text-[#0B1B3D] font-bold">{h.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
