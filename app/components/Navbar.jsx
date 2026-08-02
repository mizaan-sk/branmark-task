"use client";

export default function Navbar() {
  return (
    <header className="fixed top-4 md:top-[1.2vw] left-0 right-0 z-50 px-4 md:px-[4vw] max-w-7xl md:max-w-[78vw] mx-auto pointer-events-none">
      <div className="w-full mx-auto px-6 py-4 sm:px-8 sm:py-5 md:px-[2.5vw] md:py-[1.2vw] rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between bg-[#180336]/40 backdrop-blur-3xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_15px_40px_rgba(0,0,0,0.4)]">
        
        {/* Official Rivreach Logo */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/assets/Rivreach LOGO 184 x 43 px-08.webp"
            alt="Rivreach Logo"
            className="h-8 sm:h-9 md:h-[2.4vw] w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Action Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-[1.8vw] md:py-[0.7vw] rounded-full text-xs sm:text-sm md:text-[0.95vw] font-bold text-white bg-[#FF5914] hover:bg-[#e04705] transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Let’s Talk Growth
          </a>
        </div>

      </div>
    </header>
  );
}

