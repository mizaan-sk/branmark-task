"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ClientResults() {
  return (
    <section id="proof" className="py-20 md:py-[6vw] bg-[#f5f3ff] text-[#180336] relative overflow-hidden select-none border-b border-purple-100">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-6 md:px-[3vw] relative z-10">

        {/* Header matching PDF Page 3 */}
        <div className="text-center     mx-auto mb-16 md:mb-[4vw]">
          <div className="flex flex-col items-start justify-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-[3.5vw] font-semibold text-[#180336] mb-4 md:mb-[1vw] tracking-tight"
            >
              Proof, Not Promises
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl md:text-[1.25vw] text-[#480ed8] font-semibold mb-8 md:mb-[2vw] md:leading-[1.8vw]"
            >
              The math behind our marketing. Download the full performance reports to see how we did it.
            </motion.p>
          </div>

       
        </div>

        {/* 2 Main Performance Cards (Kotak & Radcliffe - Matching PDF Page 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Card 1: Kotak Home Loan (Matching Reference Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl md:rounded-[2vw] p-8 sm:p-10 md:p-[2.2vw] shadow-xl border border-purple-100/80 flex flex-col md:flex-row gap-8 md:gap-[2vw] items-center justify-between hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Left Metrics & Details */}
            <div className="flex-1 space-y-5 md:space-y-[1.2vw] w-full">
              
              {/* Top Brand Header: Kotak Logo + Divider + Home Loan */}
              <div className="flex items-center gap-3 md:gap-[0.8vw]">
                {/* Kotak Emblem Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 md:w-[2.4vw] md:h-[2.4vw] rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs md:text-[0.8vw] shadow-sm">
                    <span className="text-[#FF5914] font-black">c</span><span className="text-white font-black">c</span>
                  </div>
                  <span className="text-2xl md:text-[1.8vw] font-black text-[#e31837] tracking-tighter">
                    kotak
                  </span>
                </div>
                <div className="h-6 md:h-[1.5vw] w-0.5 bg-[#480ed8]" />
                <span className="text-xl md:text-[1.5vw] font-bold text-[#180336]">
                  Home Loan
                </span>
              </div>

              {/* Category Subheading */}
              <h3 className="text-2xl md:text-[1.8vw] font-bold text-[#180336] tracking-tight">
                Lead Generation
              </h3>

              {/* Main Big Metric Stat */}
              <div>
                <div className="text-5xl sm:text-6xl md:text-[4vw] font-bold text-[#480ed8] tracking-tight leading-none">
                  4225
                </div>
                <div className="text-xs md:text-[0.75vw] font-bold uppercase tracking-widest text-[#FF5914] mt-1.5 md:mt-[0.4vw]">
                  TOTAL LEADS
                </div>
              </div>

              {/* White Rounded Metrics Pill Container */}
              <div className="bg-white border border-slate-200/80 rounded-2xl md:rounded-[1.2vw] p-4 md:p-[0.9vw] shadow-sm inline-flex items-center gap-8 md:gap-[2vw]">
                <div>
                  <div className="text-2xl md:text-[1.6vw] font-bold text-[#480ed8] leading-tight">6.9L</div>
                  <div className="text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase tracking-wider">SPENDS</div>
                </div>
                <div>
                  <div className="text-2xl md:text-[1.6vw] font-bold text-[#480ed8] leading-tight">164</div>
                  <div className="text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase tracking-wider">CPL</div>
                </div>
              </div>

              {/* Meta Blue Channel Icon */}
              <div className="pt-1">
                <svg className="w-8 h-8 md:w-[2.2vw] md:h-[2.2vw] text-[#0064e0] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>

            </div>

            {/* Right Side Image Only (Matching Reference Image) */}
            <div className="w-full md:w-[15vw] shrink-0 rounded-2xl md:rounded-[1.2vw] overflow-hidden shadow-md border border-slate-200 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/card/im (1).png"
                alt="Kotak Home Loan Ad Creative"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Card 2: Radcliffe Education (Matching Reference Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl md:rounded-[2vw] p-8 sm:p-10 md:p-[2.2vw] shadow-xl border border-purple-100/80 flex flex-col md:flex-row gap-8 md:gap-[2vw] items-center justify-between hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Left Metrics & Details */}
            <div className="flex-1 space-y-5 md:space-y-[1.2vw] w-full">
              
              {/* Top Brand Header: Radcliffe Logo + Divider + Education */}
              <div className="flex items-center gap-3 md:gap-[0.8vw]">
                <div className="w-9 h-9 md:w-[2.4vw] md:h-[2.4vw] rounded-full bg-[#dc2626] text-white flex items-center justify-center font-black text-sm md:text-[1vw] shadow-sm">
                  R
                </div>
                <span className="text-2xl md:text-[1.8vw] font-bold text-[#180336] tracking-tight">
                  Radcliffe
                </span>
                <div className="h-6 md:h-[1.5vw] w-0.5 bg-[#480ed8]" />
                <span className="text-xl md:text-[1.5vw] font-bold text-[#180336]">
                  Education
                </span>
              </div>

              {/* Category Subheading */}
              <h3 className="text-2xl md:text-[1.8vw] font-bold text-[#180336] tracking-tight">
                Lead Generation
              </h3>

              {/* Main Big Metric Stat */}
              <div>
                <div className="text-5xl sm:text-6xl md:text-[4vw] font-bold text-[#480ed8] tracking-tight leading-none">
                  16,172
                </div>
                <div className="text-xs md:text-[0.75vw] font-bold uppercase tracking-widest text-[#FF5914] mt-1.5 md:mt-[0.4vw]">
                  TOTAL LEADS
                </div>
              </div>

              {/* White Rounded Metrics Pill Container */}
              <div className="bg-white border border-slate-200/80 rounded-2xl md:rounded-[1.2vw] p-4 md:p-[0.9vw] shadow-sm inline-flex items-center gap-8 md:gap-[2vw]">
                <div>
                  <div className="text-2xl md:text-[1.6vw] font-bold text-[#480ed8] leading-tight">1.50cr</div>
                  <div className="text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase tracking-wider">SPENDS</div>
                </div>
                <div>
                  <div className="text-2xl md:text-[1.6vw] font-bold text-[#480ed8] leading-tight">925</div>
                  <div className="text-[10px] md:text-[0.6vw] font-bold text-slate-700 uppercase tracking-wider">CPL</div>
                </div>
              </div>

              {/* Multi Channel Badges */}
              <div className="flex items-center gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 text-xs md:text-[0.75vw] font-bold">Meta</span>
                <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 text-xs md:text-[0.75vw] font-bold">Google</span>
                <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-700 text-[0.75vw] font-bold hidden md:inline-block">Microsoft</span>
              </div>

            </div>

            {/* Right Side Image Only (Matching Reference Image) */}
            <div className="w-full md:w-[15vw] shrink-0 rounded-2xl md:rounded-[1.2vw] overflow-hidden shadow-md border border-slate-200 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/card/im (1).webp"
                alt="Radcliffe Education Ad Creative"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
 <div className="flex items-center w-full md:pt-[5vw] pt-5 justify-center">
    <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 md:gap-[0.5vw] px-8 py-3.5 md:px-[2.2vw] md:py-[0.9vw] rounded-full text-base md:text-[1vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
              <span>Download PDF</span>
            </a>
          </motion.div>
 </div>
      </div>
    </section>
  );
}

