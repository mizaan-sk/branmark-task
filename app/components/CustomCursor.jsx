"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery smooth trailing spring physics for outer ring
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 26, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 26, mass: 0.2 });

  // Instant response spring for precision dot
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest(".group") ||
        target.closest("iframe");

      setIsPointer(!!isInteractive);
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY]);

  // Only show on desktop screens (>= 1024px)
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Smaller, Silky Smooth Outer Magnetic Ring (20px x 20px) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full border border-[#0B1B3D]/40 pointer-events-none z-[9999] transition-colors duration-200"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.4 : isPointer ? 1.3 : 1,
          borderColor: isPointer ? "#FF5914" : "rgba(11, 27, 61, 0.4)",
          backgroundColor: isPointer ? "rgba(255, 89, 20, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Compact Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FF5914] pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : isPointer ? 1.4 : 1,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </>
  );
}
