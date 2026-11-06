"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

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

        {/* All answers stay in the HTML; closed ones are only collapsed visually */}
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
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 md:px-[2vw] md:py-[1.2vw] flex items-center justify-between gap-4 md:gap-[1vw] text-left font-bold text-base sm:text-xl md:text-[1.15vw] text-[#480ed8] hover:text-[#FF5914] transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-[1vw]">
                    <span className="text-base sm:text-xl md:text-[1.25vw] font-semibold text-[#480ed8]">{idx + 1}.</span>
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

                {/* Answer */}
                <div
                  id={`faq-answer-${idx}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-6 pt-4 text-sm sm:text-base md:text-[0.95vw] text-black font-medium leading-relaxed md:leading-[1.4vw] border-t border-slate-100 md:px-[2vw] md:pb-[1.5vw] md:pt-[1vw]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

