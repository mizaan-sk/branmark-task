"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Reels", href: "#reels" },
    { name: "Expertise", href: "#expertise" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Founders", href: "#founders" },
    { name: "Contact Us", href: "#lets-talk-Form" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E1FF] py-3 lg:py-[0.7vw]"
          : "bg-white/90 backdrop-blur-sm border-b border-[#F8FAFC] py-4 lg:py-[1vw]"
      }`}
    >
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] flex items-center justify-between">
        
        {/* Rivreach Logo */}
        <a href="#" className="flex items-center gap-2.5 lg:gap-[0.7vw] group">
          {/* Custom Rivreach SVG Icon */}
          <div className="w-9 h-9 md:w-[2.2vw] md:h-[2.2vw] rounded-xl md:rounded-[0.6vw] bg-gradient-to-br from-[#480ED8] via-[#1E293B] to-[#FF5914] p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#480ED8] rounded-[10px] md:rounded-[0.5vw] flex items-center justify-center">
              <svg 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-[1.3vw] md:h-[1.3vw]"
              >
                {/* River Wave & Upward Reach Peak */}
                <path 
                  d="M6 22C10 22 12 14 17 14C22 14 23 20 26 20" 
                  stroke="#FF5914" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
                <path 
                  d="M17 14L24 7M24 7H18M24 7V13" 
                  stroke="#FF5914" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <span className="font-heading font-black text-2xl lg:text-[1.5vw] tracking-tight text-[#480ED8]">
            RIV<span className="text-[#FF5914]">REACH</span>
          </span>
        </a>


        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center lg:gap-[2vw]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lg:text-[0.9vw] font-semibold text-[#1E293B] hover:text-[#480ED8] transition-colors relative py-1 lg:py-[0.2vw]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Contact & CTA Button */}
        <div className="hidden lg:flex items-center lg:gap-[1.5vw]">
          <a
            href="tel:+917827113855"
            className="flex items-center lg:gap-[0.4vw] text-xs lg:text-[0.8vw] font-bold text-[#1E293B] hover:text-[#480ED8] transition-colors"
          >
            <Phone className="w-4 h-4 lg:w-[1vw] lg:h-[1vw] text-[#FF5914]" />
            <span>+91 7827113855</span>
          </a>

          <a
            href="#lets-talk-Form"
            className="consult-btn inline-flex items-center justify-center px-6 py-2.5 lg:px-[1.4vw] lg:py-[0.5vw] lg:rounded-[0.3vw] text-sm lg:text-[0.85vw] font-heading font-bold shadow-md cursor-pointer"
          >
            <span>Talk to Experts</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+917827113855"
            className="p-2 rounded-lg bg-[#E7E1FF] text-[#480ED8]"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#F8FAFC] text-[#1E293B] hover:text-[#480ED8] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E7E1FF] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#1E293B] hover:text-[#480ED8] py-2 border-b border-[#F8FAFC] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <a
                href="#lets-talk-Form"
                onClick={() => setMobileMenuOpen(false)}
                className="consult-btn w-full inline-flex items-center justify-center py-3 rounded-[5px] font-bold shadow-md mt-2 cursor-pointer"
              >
                <span>Talk to Experts</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
