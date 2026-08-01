"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, Eye, Video, Layout, ArrowRight } from "lucide-react";

export default function Services() {
  const goalServices = [
    {
      icon: Users,
      goal: "Lead Generation",
      description: "Need to fill your sales pipeline? We build targeted funnels that capture high-intent prospects who are actually ready to buy your service.",
      tag: "High-Intent Funnels",
    },
    {
      icon: ShoppingBag,
      goal: "E-Commerce Sales",
      description: "Ready to scale your store? We combine aggressive media buying with fresh creative to lower your acquisition costs and maximize your return on ad spend.",
      tag: "Store Growth & ROAS",
    },
    {
      icon: Eye,
      goal: "Brand Awareness & Views",
      description: "Want to dominate your industry? We push your brand in front of millions of the right eyes using viral-style video and strategic ad placements.",
      tag: "Viral Reach & Scale",
    },
    {
      icon: Video,
      goal: "High-Converting Creative",
      description: "Need better assets? Our team designs the graphics and shoots the videos that make your ads impossible to ignore.",
      tag: "Thumb-Stopping Visuals",
    },
    {
      icon: Layout,
      goal: "Landing Pages That Convert",
      description: "Losing sales after the click? We build sharp, fast-loading pages designed to do one thing turn casual browsers into paying customers.",
      tag: "Post-Click Conversion",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-[6vw] bg-[#F8FAFC] border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl md:max-w-[48vw] mx-auto mb-16 md:mb-[3.5vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
            Goal-Driven Solutions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6vw] md:leading-[3vw] font-black text-[#0B1B3D] mb-4 md:mb-[1vw]">
            Choose Your Growth Goal.
          </h2>
          <p className="text-black text-base sm:text-lg md:text-[1.05vw] md:leading-[1.6vw] font-medium">
            Tell us the result you want. We’ll build the engine to get you there.
          </p>
        </div>

        {/* 5 Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[2vw]">
          {goalServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.goal}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 md:p-[2.2vw] rounded-2xl md:rounded-[1.4vw] bg-white border border-[#E7E1FF] shadow-md hover:shadow-xl hover:border-[#FF5914] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 md:mb-[1.5vw]">
                    <div className="w-14 h-14 md:w-[3.2vw] md:h-[3.2vw] rounded-xl md:rounded-[0.9vw] bg-[#E7E1FF] text-[#0B1B3D] flex items-center justify-center group-hover:bg-[#0B1B3D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7 md:w-[1.6vw] md:h-[1.6vw]" />
                    </div>
                    <span className="text-[11px] md:text-[0.7vw] font-bold text-[#FF5914] bg-[#FF5914]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl md:text-[1.35vw] text-[#0B1B3D] mb-3 md:mb-[0.8vw] group-hover:text-[#FF5914] transition-colors">
                    {service.goal}
                  </h3>

                  <p className="text-sm md:text-[0.9vw] md:leading-[1.5vw] text-black font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 md:mt-[2vw] pt-4 border-t border-slate-100 flex items-center gap-2 text-xs md:text-[0.8vw] font-bold text-[#0B1B3D] group-hover:text-[#FF5914] transition-colors">
                  <a href="#contact" className="inline-flex items-center gap-1.5">
                    <span>Select this goal</span>
                    <ArrowRight className="w-4 h-4 md:w-[1vw] md:h-[1vw] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
