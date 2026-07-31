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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3 lg:py-[0.7vw]"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 lg:py-[1vw]"
      }`}
    >
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] flex items-center justify-between">
        
        {/* Brandshark Logo */}
        <a href="#" className="flex items-center gap-3 lg:gap-[0.8vw]">
          <div className="flex items-center gap-2 lg:gap-[0.5vw]">
            <span className="font-heading font-black text-2xl lg:text-[1.5vw] tracking-tight text-[#2b2058]">
              BRAND<span className="text-[#2ea3f2]">SHARK</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center lg:gap-[2vw]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lg:text-[0.9vw] font-semibold text-slate-700 hover:text-[#2b2058] transition-colors relative py-1 lg:py-[0.2vw]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Contact & CTA Button */}
        <div className="hidden lg:flex items-center lg:gap-[1.5vw]">
          <a
            href="tel:+917827113855"
            className="flex items-center lg:gap-[0.4vw] text-xs lg:text-[0.8vw] font-bold text-slate-700 hover:text-[#2b2058] transition-colors"
          >
            <Phone className="w-4 h-4 lg:w-[1vw] lg:h-[1vw] text-[#2ea3f2]" />
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
            className="p-2 rounded-lg bg-slate-100 text-[#2b2058]"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:text-[#2b2058] focus:outline-none"
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
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-[#2b2058] py-2 border-b border-slate-100 flex items-center justify-between"
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
