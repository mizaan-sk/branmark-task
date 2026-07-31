"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, Award } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: DollarSign,
      value: "₹150Cr+",
      label: "Client Revenue Generated",
      description: "Measured across e-commerce & D2C brand campaigns.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
    },
    {
      icon: TrendingUp,
      value: "3.5x - 5x",
      label: "Average Campaign ROI",
      description: "Consistent ROAS across Meta & Google ad spend.",
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Users,
      value: "99.2%",
      label: "Client Retention Rate",
      description: "Long-term partnership focus with zero lock-in contracts.",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: Award,
      value: "9+ Years",
      label: "IIT & IIM Leadership",
      description: "Proven marketing frameworks refined since 2016.",
      gradient: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section className="py-20 md:py-[5vw] bg-slate-900 relative">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="text-center max-w-3xl md:max-w-[45vw] mx-auto mb-16 md:mb-[3vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-blue-400 font-extrabold mb-2 md:mb-[0.5vw] block">
            Impact in Numbers
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6vw] md:leading-[3.1vw] font-extrabold text-white tracking-tight">
            Data-Backed Results That Speak For Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[1.5vw]">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-6 md:p-[1.5vw] rounded-2xl md:rounded-[1.2vw] bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/40 transition-all shadow-xl group"
              >
                <div
                  className={`w-12 h-12 md:w-[2.8vw] md:h-[2.8vw] rounded-xl md:rounded-[0.7vw] bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-5 md:mb-[1.2vw] group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 md:w-[1.4vw] md:h-[1.4vw] ${stat.iconColor}`} />
                </div>
                <div className="font-heading text-3xl sm:text-4xl md:text-[2.2vw] md:leading-[2.6vw] font-black text-white mb-2 md:mb-[0.5vw] tracking-tight">
                  {stat.value}
                </div>
                <h3 className="text-sm md:text-[0.9vw] md:leading-[1.2vw] font-bold text-slate-200 mb-1 md:mb-[0.3vw]">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-[0.8vw] md:leading-[1.2vw] text-slate-400">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
