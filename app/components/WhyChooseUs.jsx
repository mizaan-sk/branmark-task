"use client";

import { motion } from "framer-motion";
import { GraduationCap, LineChart, Users2, ShieldCheck, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "IIT & IIM Alumni Leadership",
      description: "Founded and led by alumni from IIT Kanpur & IIM Calcutta who bring rigorous analytical frameworks and business acumen to your digital growth strategy.",
    },
    {
      icon: LineChart,
      title: "Data-Backed Creative Execution",
      description: "We don't guess—we test. Every ad format, copy variant, and landing page design undergoes continuous quantitative A/B testing for peak conversion.",
    },
    {
      icon: Users2,
      title: "100% In-House Dedicated Team",
      description: "You work directly with senior performance marketers, designers, and developers. No middle managers, no junior freelancers, and zero outsourcing.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Lock-In Flexible Contracts",
      description: "We believe in earning your trust month after month through transparent performance reports, high ROAS, and clear revenue growth.",
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-[6vw] bg-slate-950 relative overflow-hidden">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[3vw] items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="inline-flex items-center gap-2 md:gap-[0.5vw] px-3.5 py-1.5 md:px-[0.9vw] md:py-[0.4vw] rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-[0.75vw] font-bold mb-4 md:mb-[1vw]">
              <Sparkles className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw]" />
              <span>The Rivreach Advantage</span>
            </div>


            <h2 className="font-heading text-3xl sm:text-4xl md:text-[3vw] md:leading-[3.5vw] font-black text-white tracking-tight leading-tight mb-6 md:mb-[1.5vw]">
              Why Premier Brands Partner With Us
            </h2>

            <p className="text-slate-300 text-base md:text-[1vw] md:leading-[1.5vw] leading-relaxed mb-8 md:mb-[2vw]">
              We combine elite analytical rigor with cutting-edge creative production to deliver predictable, profitable revenue growth for leading Indian &amp; global brands.
            </p>

            <div className="p-6 md:p-[1.5vw] rounded-2xl md:rounded-[1.2vw] bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 backdrop-blur-md">
              <div className="font-heading text-2xl md:text-[1.6vw] md:leading-[2vw] font-black text-white mb-1 md:mb-[0.3vw]">
                99.2% Retention Rate
              </div>
              <p className="text-xs md:text-[0.8vw] text-slate-300">
                Our clients stay with us for an average of 3.2+ years because we consistently beat ROI benchmarks.
              </p>
            </div>
          </motion.div>

          {/* Right Column 4-Card Pillar Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[1.5vw]">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 md:p-[1.5vw] rounded-2xl md:rounded-[1.2vw] bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl"
                >
                  <div className="w-12 h-12 md:w-[2.8vw] md:h-[2.8vw] rounded-xl md:rounded-[0.7vw] bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 md:mb-[1vw]">
                    <Icon className="w-6 h-6 md:w-[1.4vw] md:h-[1.4vw]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-[1.1vw] md:leading-[1.4vw] text-white mb-2 md:mb-[0.5vw]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-[0.8vw] md:leading-[1.3vw] text-slate-400">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
