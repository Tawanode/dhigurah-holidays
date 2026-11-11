"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxImageProps {
  children: ReactNode;
  speed?: number; // 0.1 to 0.25 is best for subtle editorial movement
  className?: string;
}

export default function ParallaxImage({
  children,
  speed = 0.12,
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable on reduced motion preference or small mobile devices (<768px)
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReduced) {
      setIsDisabled(true);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const container = containerRef.current;
          if (!container) return;

          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Only calculate when container is in or near viewport
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
            const targetOffset = centerDistance * speed;
            // Clamp offset so it never exposes edges
            const clamped = Math.max(-50, Math.min(50, targetOffset));
            setOffsetY(clamped);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: isDisabled ? "none" : `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
          transition: "transform 0.1s linear",
          willChange: isDisabled ? "auto" : "transform",
        }}
        className="absolute inset-0 w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}
