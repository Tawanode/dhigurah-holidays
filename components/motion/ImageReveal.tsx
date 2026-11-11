"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  zoomOnHover?: boolean;
}

export default function ImageReveal({
  children,
  delay = 0,
  duration = 1100,
  className = "",
  zoomOnHover = true,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    const fallback = setTimeout(() => setIsVisible(true), 2500);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const containerStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(8% 0% 8% 0%)",
        transitionProperty: "opacity, clip-path",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      };

  const scaleStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        transform: isVisible ? "scale(1)" : "scale(1.06)",
        transitionProperty: "transform",
        transitionDuration: `${duration + 200}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      };

  return (
    <div
      ref={ref}
      style={containerStyle}
      className={`relative overflow-hidden ${zoomOnHover ? "group" : ""} ${className}`}
    >
      <div style={scaleStyle} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
