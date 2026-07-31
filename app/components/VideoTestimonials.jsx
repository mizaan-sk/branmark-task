"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const testimonials = [
    {
      id: "7bw9eyPtCec",
      name: "Ashutosh Kedawat",
      role: "Founder, Riversoft",
      thumbnail: "https://img.youtube.com/vi/7bw9eyPtCec/maxresdefault.jpg",
    },
    {
      id: "bm2FpkQk_D8",
      name: "Vishal Sharma",
      role: "Assistant Manager, TTK Prestige",
      thumbnail: "https://img.youtube.com/vi/bm2FpkQk_D8/maxresdefault.jpg",
    },
    {
      id: "9kjAf5lSIf8",
      name: "Nitin Dixit",
      role: "Head of Sales & Marketing, Kosala",
      thumbnail: "https://img.youtube.com/vi/9kjAf5lSIf8/maxresdefault.jpg",
    },
    {
      id: "8xsqh-9MX4E",
      name: "Bharath Iyer",
      role: "Senior Marketing Manager, GSG",
      thumbnail: "https://img.youtube.com/vi/8xsqh-9MX4E/maxresdefault.jpg",
    },
    {
      id: "OJQljGL-h3w",
      name: "Komal & Ashish",
      role: "Co-founder, Dazzl",
      thumbnail: "https://img.youtube.com/vi/OJQljGL-h3w/maxresdefault.jpg",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-[5vw] bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[3vw] items-end mb-12 md:mb-[2.5vw]">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#2b2058]">
              Proven Results and Lasting Partnerships
            </h2>
          </div>
          <div>
            <p className="text-slate-600 text-sm md:text-[0.9vw] md:leading-[1.4vw]">
              Discover the impact we&apos;ve made through our clients&apos; perspectives. Each testimonial reflects our commitment to excellence, trust, and measurable outcomes. See how our collaborative approach has driven success across diverse industries.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-between gap-4 md:gap-[1vw] mb-6 md:mb-[1.5vw]">
            <div className="flex gap-2 md:gap-[0.5vw]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 md:h-[0.7vw] rounded-full transition-all ${
                    i === activeIndex ? "bg-[#2b2058] w-6 md:w-[1.5vw]" : "bg-slate-300 md:w-[0.7vw]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-[0.6vw]">
              <button
                onClick={handlePrev}
                className="p-3 md:p-[0.7vw] rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#2b2058] hover:text-white transition-all shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 md:p-[0.7vw] rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#2b2058] hover:text-white transition-all shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[1.8vw]">
            {[0, 1, 2].map((offset) => {
              const index = (activeIndex + offset) % testimonials.length;
              const item = testimonials[index];

              return (
                <motion.div
                  key={`${item.id}-${offset}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl md:rounded-[1.2vw] bg-white border border-slate-200 overflow-hidden shadow-md group flex flex-col"
                >
                  <div
                    className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
                    onClick={() => setActiveVideoModal(item.id)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 md:w-[2.8vw] md:h-[2.8vw] rounded-full bg-[#2b2058] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 md:w-[1.2vw] md:h-[1.2vw] fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-[1.2vw] bg-white flex flex-col justify-center flex-1">
                    <h3 className="font-heading font-bold text-[#2b2058] text-base md:text-[1.1vw] md:leading-[1.3vw]">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-[0.8vw] text-slate-500 font-medium mt-0.5 md:mt-[0.2vw]">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-[2vw]"
            onClick={() => setActiveVideoModal(null)}
          >
            <div
              className="relative w-full max-w-4xl md:max-w-[60vw] aspect-video rounded-2xl md:rounded-[1.5vw] bg-black overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 md:top-[1vw] md:right-[1vw] z-10 p-2 md:p-[0.5vw] rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
                aria-label="Close"
              >
                <X className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw]" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Client Video Testimonial"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
