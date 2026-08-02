"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      num: "1.",
      question: "How is Rivreach different from other agencies?",
      answer: "Most agencies are strictly media buyers or strictly creative designers. We are both. By combining high-converting video and graphics with AI-driven ad strategies, we remove the friction and get you better results, faster.",
    },
    {
      num: "2.",
      question: "How do you actually use AI in your process?",
      answer: "We don't use AI to get lazy; we use it to get lethal. We use advanced AI tools to analyze data trends faster, split-test creatives aggressively, and optimize your ad budgets in real-time. It’s about working smarter so your money goes further.",
    },
    {
      num: "3.",
      question: "Do you work with a specific industry?",
      answer: "We care more about the goal than the industry. Whether you are a local service business needing leads or a DTC brand needing e-commerce sales, the core principles of capturing attention and driving conversions remain the same.",
    },
    {
      num: "4.",
      question: "What platforms do you run ads on?",
      answer: "We run campaigns wherever your customers' attention is underpriced. For most clients, this is a mix of Google, Meta, TikTok, and market-specific ad networks. We audit your audience first, then pick the channels that yield the highest ROI.",
    },
    {
      num: "5.",
      question: "How fast can I expect to see results?",
      answer: "You’ll see traffic hitting your site within 48 hours of launch. While every brand is unique, give us 3 to 4 weeks to run creative tests, dial in your target audiences, and lock down a consistent, profitable ROI.",
    },
    {
      num: "6.",
      question: "What should my monthly ad spend budget be?",
      answer: "We usually recommend starting at around ₹60,000/month in ad spend (which goes straight to Google or Meta, not us). That’s the sweet spot where the algorithms get enough real data to optimize quickly without wasting a single rupee of your cash.",
    },
    {
      num: "7.",
      question: "Is there a minimum contract period?",
      answer: "We recommend at least a 3-month commitment for ads to show real, compounding results, but we'll always be upfront with you if we think something isn't working.",
    },
    {
      num: "8.",
      question: "How do I track what's working?",
      answer: "You'll get regular performance reports and full transparency on ad spend, results, and what we're optimizing next. No black boxes.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:pt-[2vw] md:pb-[4vw] bg-gradient-to-b from-[#310599] to-[#180336] text-white select-none relative overflow-hidden">
      <div className="w-full max-w-4xl md:max-w-[60vw] mx-auto px-6 md:px-[3vw] relative z-10">
        
        {/* Header Matching PDF Page 7 */}
        <div className="text-center mb-16 md:mb-[4vw]">
          <p className="text-sm md:text-[1.3vw] font-medium uppercase   text-white mb-3 md:mb-[0.8vw]">
            FAQ
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-[2.8vw] font-semibold text-white tracking-tight leading-tight md:leading-[4vw]"
          >
            You’ve Got Questions. We’ve Got<br className="hidden sm:inline" /> Answers.
          </motion.h2>
        </div>

        {/* 6 White Pill Accordion Items (Matching PDF Page 7) */}
        <div className="flex flex-col gap-4 md:gap-[1.2vw]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white text-[#180336] rounded-2xl sm:rounded-3xl md:rounded-[1.5vw] shadow-lg border border-purple-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 md:px-[2vw] md:py-[1.2vw] flex items-center justify-between gap-4 md:gap-[1vw] text-left font-bold text-base sm:text-xl md:text-[1.15vw] text-[#480ed8] hover:text-[#FF5914] transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-[1vw]">
                    <span className="text-base sm:text-xl md:text-[1.25vw] font-semibold text-[#480ed8]">{faq.num}</span>
                    <span className="font-medium md:text-[1.5vw] text-[#480ed8]">{faq.question}</span>
                  </div>

                  {/* Circle Plus/Minus Icon Button Matching PDF Page 7 */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-[2.2vw] md:h-[2.2vw] rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-orange-100 text-[#FF5914]" : "bg-purple-100 text-[#480ed8]"}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 md:w-[1.1vw] md:h-[1.1vw] stroke-[3]" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-[1.1vw] md:h-[1.1vw] stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-sm sm:text-base md:pt-[1vw] pt-2  md:text-[0.95vw] text-black font-medium leading-relaxed md:leading-[1.4vw] border-t border-slate-100 pt-4 md:px-[2vw] md:pb-[1.5vw] md:pt-[0vw]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

