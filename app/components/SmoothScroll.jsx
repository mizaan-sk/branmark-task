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

      // Smooth-scroll in-page links (#x, or /#x from the shared navbar and footer).
      // Capture phase, so next/link sees preventDefault and doesn't navigate too.
      document.addEventListener(
        "click",
        (e) => {
          const href = e.target
            .closest?.('a[href^="#"], a[href^="/#"]')
            ?.getAttribute("href")
            ?.replace(/^\//, "");
          const target = href && href !== "#" && document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -60 });
          }
        },
        true
      );
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
