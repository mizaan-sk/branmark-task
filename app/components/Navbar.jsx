"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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
    { name: "Brands", href: "#brands" },
    { name: "Proof", href: "#proof" },
    { name: "Creative", href: "#creative" },
    { name: "Expertise", href: "#expertise" },
    { name: "Goals", href: "#goals" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 md:top-[1.2vw] left-0 right-0 z-50 px-4 md:px-[4vw] max-w-7xl md:max-w-[78vw] mx-auto pointer-events-none">
      <div
        className={`w-full mx-auto px-5 py-3 md:px-[2vw] md:py-[0.8vw] rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between shadow-xl ${
          scrolled
            ? "bg-[#180336]/90 backdrop-blur-xl border border-white/20 shadow-purple-900/30"
            : "bg-white/10 backdrop-blur-lg border border-white/25 shadow-black/20"
        }`}
      >
        {/* Official Rivreach Logo */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/assets/Rivreach LOGO 184 x 43 px-08.webp"
            alt="Rivreach Logo"
            className="h-7 sm:h-8 md:h-[2.2vw] w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center md:gap-[1.8vw]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-[0.9vw] font-semibold text-white/90 hover:text-white transition-colors relative py-1 hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Action Buttons */}
        <div className="hidden lg:flex items-center md:gap-[0.8vw]">
          <a
            href="#contact"
            className="px-5 py-2 md:px-[1.4vw] md:py-[0.55vw] rounded-full text-xs lg:text-[0.85vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-md hover:shadow-orange-500/30 hover:scale-105 active:scale-95"
          >
            Let’s Talk Growth
          </a>
        </div>

        {/* Hamburger Menu Icon (matching PDF slide top right menu) */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden mt-3 bg-[#180336]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-white/90 hover:text-white py-2 border-b border-white/10 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF5914]" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-bold text-white bg-[#FF5914] shadow-lg mt-2 cursor-pointer"
              >
                Let’s Talk Growth
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

