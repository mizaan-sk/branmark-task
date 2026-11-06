"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const logos = [
  { name: "Classic Paramount Real Estate", src: "/assets/clients/classic-paramount-logo.webp" },
  { name: "Radcliffe Education", src: "/assets/clients/radcliffe-education-logo.webp" },
  { name: "Kotak Home Loan", src: "/assets/clients/kotak-home-loan-logo.webp" },
  { name: "Beshak", src: "/assets/clients/beshak-logo.webp" },
  { name: "StoxBox", src: "/assets/clients/stoxbox-logo.webp" },
  // Names below were read from the logo artwork; owner to confirm.
  { name: "Makons Kids Unplugged", src: "/assets/clients/makons-logo.webp" },
  { name: "Doriaana", src: "/assets/clients/doriaana-logo.webp" },
  { name: "Birch", src: "/assets/clients/birch-logo.webp" },
  { name: "The Manali Bungee", src: "/assets/clients/manali-bungee-logo.webp" },
  { name: "AirVear", src: "/assets/clients/airvear-logo.webp" },
  { name: "KOA", src: "/assets/clients/koa-logo.webp" },
  { name: "Bungalow 21", src: "/assets/clients/bungalow-21-logo.webp" },
  { name: "NSD", src: "/assets/clients/nsd-logo.webp" },
  { name: "Pack O Mat Industries", src: "/assets/clients/pack-o-mat-logo.webp" },
  { name: "Bumpers The Baby Co.", src: "/assets/clients/bumpers-logo.webp" },
  { name: "Cocoland Toys", src: "/assets/clients/cocoland-toys-logo.webp" },
  { name: "GC", src: "/assets/clients/gc-logo.webp" },
];

export default function TrustedBrands() {

  return (
    <section id="brands" className="py-16 md:py-[4vw] bg-[#ffffff] border-b border-purple-100 overflow-hidden relative select-none">
      <div className="w-full max-w-7xl md:max-w-[78vw] mx-auto px-4 md:px-[2vw] mb-8 md:mb-[2.5vw] text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-[2.6vw] font-semibold text-[#180336] tracking-tight"
        >
          Trusted by brands ready to scale.
        </motion.h2>
      </div>

      {/* Infinite Fast-Moving Horizontal Marquee of Client Logos */}
      <div className="flex overflow-hidden relative w-full items-center py-4 md:py-[1vw]">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-[8vw] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee
          items={logos}
          label="client logos"
          duration="11s"
          listClassName="gap-10 pr-10 md:gap-[3.5vw] md:pr-[3.5vw]"
          controlClassName="bg-[#180336]/10 text-[#180336] hover:bg-[#180336]/20"
          renderItem={(logo, isClone) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="h-12 w-28 md:h-[3.5vw] md:w-[9vw] flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={isClone ? "" : `${logo.name} logo`}
                width={480}
                height={113}
                loading="lazy"
                decoding="async"
                className="max-h-10 md:max-h-[3.2vw] w-auto max-w-full object-contain transition-all duration-300"
              />
            </motion.div>
          )}
        />
      </div>
    </section>
  );
}


