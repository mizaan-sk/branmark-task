"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

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
    { name: "Results", href: "#portfolio" },
    { name: "Creative", href: "#creative" },
    { name: "Partners", href: "#partners" },
    { name: "Goals", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E1FF] py-3 lg:py-[0.6vw]"
          : "bg-white/90 backdrop-blur-sm border-b border-[#F8FAFC] py-4 lg:py-[0.9vw]"
      }`}
    >
      <div className="w-full max-w-full md:max-w-[80vw] mx-auto px-4 md:px-[2vw] flex items-center justify-between">
        
        {/* Official Rivreach WebP Logo */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/assets/Rivreach LOGO 184 x 43 px-08.webp"
            alt="Rivreach Logo"
            className="h-9 sm:h-10 md:h-[2.4vw] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center lg:gap-[2vw]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm lg:text-[0.9vw] font-bold text-black hover:text-[#0B1B3D] transition-colors relative py-1 lg:py-[0.2vw]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Contact & CTA Button */}
        <div className="hidden lg:flex items-center lg:gap-[1.5vw]">
          <a
            href="tel:+917827113855"
            className="flex items-center lg:gap-[0.4vw] text-xs lg:text-[0.8vw] font-bold text-black hover:text-[#0B1B3D] transition-colors"
          >
            <Phone className="w-4 h-4 lg:w-[1vw] lg:h-[1vw] text-[#FF5914]" />
            <span>+91 7827113855</span>
          </a>

          <a
            href="#contact"
            className="consult-btn inline-flex items-center justify-center px-6 py-2.5 lg:px-[1.4vw] lg:py-[0.5vw] lg:rounded-[0.3vw] text-sm lg:text-[0.85vw] font-heading font-bold shadow-md cursor-pointer"
          >
            <span>Let’s Talk Growth</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+917827113855"
            className="p-2 rounded-lg bg-[#E7E1FF] text-[#0B1B3D]"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#F8FAFC] text-black hover:text-[#0B1B3D] focus:outline-none"
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
                  className="text-base font-semibold text-black hover:text-[#0B1B3D] py-2 border-b border-[#F8FAFC] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="consult-btn w-full inline-flex items-center justify-center py-3 rounded-[5px] font-bold shadow-md mt-2 cursor-pointer"
              >
                <span>Let’s Talk Growth</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
