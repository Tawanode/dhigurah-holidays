"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [supportsViewTransition, setSupportsViewTransition] = useState(false);
  const pendingTransitionRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setSupportsViewTransition(
      typeof document !== "undefined" && "startViewTransition" in document
    );
  }, []);

  // When pathname changes, resolve view transition and complete progress
  useEffect(() => {
    if (pendingTransitionRef.current) {
      pendingTransitionRef.current();
      pendingTransitionRef.current = null;
    }
    // Complete the progress bar smoothly
    setProgress(100);
    const timeout = setTimeout(() => {
      setIsNavigating(false);
      setProgress(0);
    }, 350);

    return () => clearTimeout(timeout);
  }, [pathname]);

  // Global click listener for internal links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, anchor hashes, mailto, tel, target="_blank", or modifier clicks
      if (
        (href.startsWith("http") && !href.startsWith(window.location.origin)) ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      // Check if navigating to the same URL
      try {
        const targetUrl = new URL(href, window.location.origin);
        if (
          targetUrl.pathname === window.location.pathname &&
          targetUrl.search === window.location.search
        ) {
          return;
        }
      } catch {
        return;
      }

      // Intercept internal page navigation for silky smooth transition
      e.preventDefault();
      setIsNavigating(true);
      setProgress(70);

      if (typeof document !== "undefined" && "startViewTransition" in document) {
        const transitionPromise = new Promise<void>((resolve) => {
          pendingTransitionRef.current = resolve;
          // Fallback timeout in case navigation stalls
          setTimeout(resolve, 2000);
        });

        (document as any).startViewTransition(async () => {
          router.push(href);
          await transitionPromise;
        });
      } else {
        // Fallback for browsers without View Transitions
        setTimeout(() => {
          router.push(href);
        }, 120);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [router]);

  return (
    <>
      {/* Luxury Emerald & Lagoon Top Route Progress Bar */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2.5px] z-[9999] pointer-events-none transition-all duration-300 ${
          isNavigating ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, #103D35 0%, #176B55 45%, #a4f2d6 85%, #9DD9E5 100%)",
          transformOrigin: "left",
          transform: `scaleX(${progress / 100})`,
          transition: isNavigating
            ? "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease"
            : "transform 0.2s ease-out, opacity 0.35s ease-out",
          boxShadow: isNavigating
            ? "0 1px 8px rgba(164, 242, 214, 0.5), 0 0 2px rgba(16, 61, 53, 0.8)"
            : "none",
        }}
        aria-hidden="true"
      />

      {/* Gentle Warm Ivory Veil Fallback (for non-View-Transition browsers) */}
      {!supportsViewTransition && (
        <div
          className={`fixed inset-0 bg-[#F8F6F0] z-[9990] pointer-events-none transition-opacity duration-200 ${
            isNavigating ? "opacity-60" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      )}
    </>
  );
}
