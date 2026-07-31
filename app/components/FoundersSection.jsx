"use client";

import { motion } from "framer-motion";

export default function FoundersSection() {
  const founders = [
    {
      name: "Ankur Sharma",
      degree: "IIT Kanpur",
      role: "Director, Sales & Marketing",
      avatarLetter: "AS",
      image: "https://brandshark.com/wp-content/uploads/2025/10/ankur-img.jpg",
    },
    {
      name: "Shekhar Suman",
      degree: "IIT Kanpur, IIM Calcutta",
      role: "Director, Design & Development",
      avatarLetter: "SS",
      image: "https://brandshark.com/wp-content/uploads/2025/10/shekhar-img.jpg",
    },
  ];

  return (
    <section id="founders" className="py-20 md:py-[5vw] bg-white border-b border-slate-200">
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw]">
        
        {/* Header */}
        <div className="text-center max-w-3xl md:max-w-[45vw] mx-auto mb-16 md:mb-[3vw]">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.2vw] md:leading-[2.6vw] font-extrabold text-[#2b2058] mb-3 md:mb-[0.8vw]">
            The Best in the business
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-[0.95vw] md:leading-[1.4vw]">
            Started 9 years ago by alumni of IIT and IIM with a mission to bring data backed creative results in digital marketing
          </p>
        </div>

        {/* 2 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[2vw] max-w-3xl md:max-w-[48vw] mx-auto">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-8 md:p-[2vw] rounded-2xl md:rounded-[1.2vw] bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-[6vw] md:h-[6vw] rounded-full bg-[#2b2058] text-white flex items-center justify-center font-heading font-extrabold text-2xl md:text-[1.5vw] mb-5 md:mb-[1.2vw] shadow-md overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span className="fallback-text">{founder.avatarLetter}</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl md:text-[1.3vw] md:leading-[1.6vw] text-[#2b2058] mb-1 md:mb-[0.3vw]">
                {founder.name}
              </h3>

              <p className="text-xs md:text-[0.75vw] font-bold text-[#2ea3f2] uppercase tracking-wider mb-2 md:mb-[0.5vw]">
                {founder.degree}
              </p>

              <p className="text-sm md:text-[0.85vw] md:leading-[1.2vw] font-semibold text-slate-700">
                {founder.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
