"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SmoothScroll({ children }) {
  const initLenis = () => {
    if (typeof window !== "undefined" && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Connect Lenis to internal anchor links (#reels, #expertise, etc.)
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          if (href && href !== "#") {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -60 });
            }
          }
        });
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.Lenis) {
      initLenis();
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"
        strategy="afterInteractive"
        onLoad={initLenis}
      />
      {children}
    </>
  );
}
