"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Rivreach the best digital marketing agency in Bangalore?",
      answer: "Rivreach was started 9 years ago by alumni of IIT Kanpur & IIM Calcutta with a mission to bring data-backed creative results in digital marketing. We focus purely on measurable revenue growth and high ROI.",
    },
    {
      question: "How fast can we expect results from our marketing campaigns?",
      answer: "PPC ad campaigns on Google & Meta start generating qualified leads and sales within 48 to 72 hours of launch. For organic SEO and content strategies, ranking improvements take 60 to 90 days.",
    },
    {
      question: "Do you require long-term lock-in contracts?",
      answer: "No! We operate on flexible month-to-month retainers. We believe in earning your trust every month through transparent performance, high ROAS, and continuous business growth.",
    },
    {
      question: "What monthly ad budget do you recommend for scaling?",
      answer: "We typically work with brands that have a monthly marketing budget starting from 2-5 Lakhs/month up to 20 Lakhs+/month.",
    },
    {
      question: "What digital marketing services do you handle in-house?",
      answer: "Everything is handled in-house! Our team includes senior performance marketers, short-form reel video creators, copywriters, SEO specialists, and web developers.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-[5vw] bg-[#F8FAFC] border-b border-[#E7E1FF]">
      <div className="w-full max-w-full md:max-w-[70vw] mx-auto px-4 md:px-[2vw]">
        
        <div className="text-center max-w-3xl md:max-w-[45vw] mx-auto mb-14 md:mb-[3vw]">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#480ED8]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#1E293B] text-sm md:text-[0.9vw] md:leading-[1.3vw] mt-2 md:mt-[0.5vw]">
            Everything you need to know about partnering with Rivreach
          </p>

        </div>

        <div className="max-w-3xl md:max-w-[50vw] mx-auto flex flex-col gap-4 md:gap-[1vw]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-xl md:rounded-[0.8vw] bg-white border border-[#E7E1FF] overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 md:p-[1.2vw] text-left flex items-center justify-between gap-4 md:gap-[1vw] text-[#480ED8] font-heading font-bold text-base sm:text-lg md:text-[1.1vw] md:leading-[1.4vw] hover:text-[#FF5914] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 md:p-[0.4vw] rounded-full bg-[#E7E1FF] text-[#480ED8] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
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
                      <div className="px-5 pb-5 text-[#1E293B] text-xs sm:text-sm md:text-[0.85vw] md:leading-[1.4vw] border-t border-[#E7E1FF] pt-3 md:px-[1.2vw] md:pb-[1.2vw] md:pt-[0.8vw]">
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
