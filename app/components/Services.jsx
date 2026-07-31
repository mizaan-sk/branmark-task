"use client";

import { motion } from "framer-motion";
import { Share2, Search, TrendingUp, Users } from "lucide-react";

export default function Services() {
  const expertiseList = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media management that transforms platforms into powerful brand-building and revenue-driving channels.",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "SEO that goes beyond keywords. We build organic growth engines designed to dominate search, capture high-intent traffic, and deliver ROI that lasts.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Full-funnel performance marketing &ndash; from paid search to programmatic &ndash; designed to reach the right audience, at the right moment, at the right cost.",
    },
    {
      icon: Users,
      title: "Influencer Collaboration",
      description: "We identify, activate, and manage the right creator partnerships &ndash; turning influence into measurable brand growth and audience trust.",
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-[5vw] bg-slate-50 border-y border-slate-200">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl md:max-w-[45vw] mx-auto mb-16 md:mb-[3vw]">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#2b2058] mb-4 md:mb-[1vw]">
            Delivering measurable and impactful results through our expertise
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-[0.95vw] md:leading-[1.4vw]">
            Focused on delivering strategic solutions that drive growth and maximize brand impact. Our approach combines expertise with insight, helping you reach your goals with clarity and measurable success.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[1.8vw]">
          {expertiseList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 md:p-[1.8vw] rounded-2xl md:rounded-[1.2vw] bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#2b2058]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 md:w-[2.8vw] md:h-[2.8vw] rounded-xl md:rounded-[0.7vw] bg-purple-50 text-[#2b2058] flex items-center justify-center mb-5 md:mb-[1.2vw]">
                    <Icon className="w-6 h-6 md:w-[1.4vw] md:h-[1.4vw]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-[1.2vw] md:leading-[1.5vw] text-[#2b2058] mb-3 md:mb-[0.8vw]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-[0.85vw] md:leading-[1.3vw] text-slate-600">
                    {item.description}
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
