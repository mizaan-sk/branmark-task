"use client";

import { motion } from "framer-motion";
import { SearchCheck, Layers, Rocket, TrendingUp } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: SearchCheck,
      title: "Comprehensive Growth Audit",
      description: "We conduct an in-depth analysis of your ad accounts, pixel data, conversion funnels, and competitors to identify immediate low-hanging ROI opportunities.",
    },
    {
      num: "02",
      icon: Layers,
      title: "Strategic Funnel Architecture",
      description: "Our strategists build a custom growth roadmap, defining high-converting ad hooks, audience segments, creative angles, and landing page wireframes.",
    },
    {
      num: "03",
      icon: Rocket,
      title: "High-Velocity Execution",
      description: "We launch multi-channel ad campaigns across Google, Meta, and LinkedIn while deploying optimized landing pages with real-time conversion tracking.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Iterative Scaling & Optimization",
      description: "Through daily bid management, creative refresh cycles, and A/B split testing, we continuously drive down Customer Acquisition Cost (CAC) while scaling volume.",
    },
  ];

  return (
    <section className="py-24 md:py-[6vw] bg-slate-900 relative overflow-hidden">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="text-center max-w-3xl md:max-w-[45vw] mx-auto mb-20 md:mb-[4vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-blue-400 font-extrabold mb-3 md:mb-[0.5vw] block">
            Our Proven Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[3vw] md:leading-[3.5vw] font-black text-white tracking-tight">
            A 4-Step Framework Built for Predictable Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[1.8vw] relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-8 md:p-[1.8vw] rounded-2xl md:rounded-[1.2vw] bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 md:mb-[1.2vw]">
                    <span className="font-heading font-black text-3xl md:text-[2vw] text-blue-500/40 group-hover:text-blue-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 md:w-[2.5vw] md:h-[2.5vw] rounded-xl md:rounded-[0.6vw] bg-blue-600/10 text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl md:text-[1.2vw] md:leading-[1.5vw] font-bold text-white mb-3 md:mb-[0.8vw]">
                    {step.title}
                  </h3>

                  <p className="text-xs md:text-[0.8vw] md:leading-[1.3vw] text-slate-400">
                    {step.description}
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
