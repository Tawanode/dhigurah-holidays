"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  threshold?: number;
  className?: string;
  id?: string;
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.12,
  className = "",
  id,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

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
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    // Fallback: guarantee visibility if observer doesn't fire within 3s
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [threshold]);

  // Transform styles based on variant
  const getInitialTransform = () => {
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 24px, 0)";
      case "fade-down":
        return "translate3d(0, -20px, 0)";
      case "fade-left":
        return "translate3d(24px, 0, 0)";
      case "fade-right":
        return "translate3d(-24px, 0, 0)";
      case "scale":
        return "scale(0.97)";
      case "fade":
      default:
        return "none";
    }
  };

  const style: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      };

  const DynamicComponent = Component as any;

  return (
    <DynamicComponent id={id} ref={ref} style={style} className={className}>
      {children}
    </DynamicComponent>
  );
}
