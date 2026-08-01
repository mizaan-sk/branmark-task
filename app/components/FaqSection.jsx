"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How is Rivreach different from other agencies?",
      answer: "Most agencies are strictly media buyers or strictly creative designers. We are both. By combining high-converting video and graphics with AI-driven ad strategies, we remove the friction and get you better results, faster.",
    },
    {
      question: "How do you actually use AI in your process?",
      answer: "We don't use AI to get lazy; we use it to get lethal. We use advanced AI tools to analyze data trends faster, split-test creatives aggressively, and optimize your ad budgets in real-time. It’s about working smarter so your money goes further.",
    },
    {
      question: "Do you work with a specific industry?",
      answer: "We care more about the goal than the industry. Whether you are a local service business needing leads or a DTC brand needing e-commerce sales, the core principles of capturing attention and driving conversions remain the same.",
    },
    {
      question: "What platforms do you run ads on?",
      answer: "We run campaigns wherever your customers' attention is underpriced. For most clients, this is a mix of Google, Meta, TikTok, and market-specific ad networks. We audit your audience first, then pick the channels that yield the highest ROI.",
    },
    {
      question: "How fast can I expect to see results?",
      answer: "You’ll see traffic hitting your site within 48 hours of launch. While every brand is unique, give us 3 to 4 weeks to run creative tests, dial in your target audiences, and lock down a consistent, profitable ROI.",
    },
    {
      question: "What should my monthly ad spend budget be?",
      answer: "We usually recommend starting at around ₹60,000/month in ad spend (which goes straight to Google or Meta, not us). That’s the sweet spot where the algorithms get enough real data to optimize quickly without wasting a single rupee of your cash.",
    },
    {
      question: "Is there a minimum contract period?",
      answer: "We recommend at least a 3-month commitment for ads to show real, compounding results, but we'll always be upfront with you if we think something isn't working.",
    },
    {
      question: "How do I track what's working?",
      answer: "You'll get regular performance reports and full transparency on ad spend, results, and what we're optimizing next. No black boxes.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-[6vw] bg-white border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[70vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl md:max-w-[48vw] mx-auto mb-14 md:mb-[3vw]">
          <span className="text-xs md:text-[0.8vw] uppercase tracking-widest text-[#FF5914] font-bold mb-2 block">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6vw] md:leading-[3vw] font-semibold text-[#0B1B3D]">
            You’ve Got Questions. We’ve Got Answers.
          </h2>
        </div>

        {/* 8 Accordion Q&A List */}
        <div className="max-w-3xl md:max-w-[52vw] mx-auto flex flex-col gap-4 md:gap-[1vw]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-xl md:rounded-[0.9vw] bg-[#F8FAFC] border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-[#0B1B3D] shadow-md bg-white" : "border-[#E7E1FF] shadow-sm hover:border-[#0B1B3D]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 md:p-[1.3vw] text-left flex items-center justify-between gap-4 md:gap-[1vw] text-[#0B1B3D] font-heading font-bold text-base sm:text-lg md:text-[1.1vw] md:leading-[1.4vw] hover:text-[#FF5914] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#FF5914] font-extrabold text-sm md:text-[0.9vw]">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 md:p-[0.4vw] rounded-full bg-[#E7E1FF] text-[#0B1B3D] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#0B1B3D] text-white" : ""}`}>
                    {isOpen ? <Minus className="w-4 h-4 md:w-[1vw] md:h-[1vw]" /> : <Plus className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-black text-sm sm:text-base md:text-[0.9vw] md:leading-[1.5vw] border-t border-[#E7E1FF] pt-4 md:px-[1.3vw] md:pb-[1.3vw] md:pt-[0.9vw] font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
