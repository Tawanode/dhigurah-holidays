"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useBookingModal } from "./BookingModalContext";
import HotelLogo from "./HotelLogo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openBookingModal } = useBookingModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#FCFBF8]/95 backdrop-blur-md border-b ${
        scrolled
          ? "border-[#E5E2DA] shadow-[0_4px_20px_-4px_rgba(18,52,59,0.06)] bg-[#FCFBF8]/98"
          : "border-[#E5E2DA]/80"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "h-[64px]" : "h-[64px] sm:h-[68px] md:h-[72px]"
        }`}
      >
        {/* Brand Wordmark & Emblem Unit (Compact & resilient on mobile) */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group shrink-0 min-w-0 max-w-[calc(100%-110px)] min-[360px]:max-w-[calc(100%-120px)] min-[1000px]:max-w-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] rounded-sm py-1 transition-transform duration-200 active:scale-[0.99]"
          aria-label="Dhigurah Holidays Home"
        >
          {/* DH Luxury Monogram Logo */}
          <HotelLogo
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-[#12343B] group-hover:text-[#236653] transition-colors duration-200 shrink-0"
          />

          <div className="flex flex-col text-left truncate">
            <span className="font-serif text-[15px] sm:text-[17px] md:text-[18px] xl:text-[19px] font-semibold tracking-[0.09em] sm:tracking-[0.14em] xl:tracking-[0.16em] text-[#12343B] leading-tight group-hover:text-[#236653] transition-colors truncate">
              DHIGURAH HOLIDAYS
            </span>
            <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.12em] sm:tracking-[0.22em] text-[#6F7773] font-medium leading-none mt-0.5 sm:mt-1 truncate">
              BOUTIQUE ISLAND GUESTHOUSE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links & Action Cluster */}
        <div className="hidden min-[1000px]:flex items-center gap-7 lg:gap-8 xl:gap-10">
          <nav
            className="flex items-center gap-5 lg:gap-6 xl:gap-7"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-xs uppercase tracking-[0.15em] xl:tracking-[0.17em] font-medium transition-colors duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] ${
                    isActive
                      ? "text-[#12343B] font-semibold"
                      : "text-[#6F7773] hover:text-[#12343B] nav-link-indicator"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#236653] rounded-full animate-in fade-in zoom-in-95 duration-200"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Sleek Pill CTA with tactile hover */}
          <button
            type="button"
            onClick={openBookingModal}
            className="inline-flex items-center justify-center gap-1.5 h-[42px] px-6 xl:px-7 bg-[#12343B] text-white text-xs font-semibold uppercase tracking-[0.14em] xl:tracking-[0.16em] rounded-full hover:bg-[#236653] hover:shadow-[0_4px_16px_rgba(18,52,59,0.18)] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#12343B] shrink-0 btn-tactile group cursor-pointer"
          >
            <span>BOOK NOW</span>
            <svg
              className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all duration-200 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Action Controls: 44x44px Touch Target Hamburger perfectly aligned */}
        <div className="min-[1000px]:hidden flex items-center shrink-0">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#12343B] hover:bg-[#F5F0E7] active:bg-[#eae3d6] transition-colors duration-150 rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] cursor-pointer"
          >
            {/* Crisp inline SVG to avoid webfont ligature text bleeding */}
            <svg
              className="w-6 h-6 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Background Overlay & Staggered Links */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 top-[64px] bg-[#12343B]/40 backdrop-blur-xs min-[1000px]:hidden z-40 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Panel */}
          <div className="relative min-[1000px]:hidden z-50 px-5 pt-3 pb-6 bg-[#FCFBF8] border-t border-[#E5E2DA] shadow-xl flex flex-col space-y-1 animate-in slide-in-from-top-2 fade-in duration-200 max-h-[calc(100svh-64px)] overflow-y-auto">
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[44px] flex items-center text-xs uppercase tracking-[0.16em] py-3 px-3.5 border-b border-[#E5E2DA]/60 transition-all duration-150 rounded-[4px] ${
                      isActive
                        ? "text-[#12343B] font-semibold bg-[#F5F0E7] pl-4 border-l-3 border-[#236653]"
                        : "text-[#6F7773] hover:text-[#12343B] hover:bg-[#F5F0E7]/40 hover:pl-4"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="ml-auto text-[10px] text-[#236653] font-semibold tracking-wider">
                        ACTIVE
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Drawer Booking CTA */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full h-[50px] inline-flex items-center justify-center gap-2 bg-[#12343B] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-[4px] hover:bg-[#236653] active:scale-[0.99] transition-all shadow-sm cursor-pointer select-none"
              >
                <span>BOOK YOUR STAY</span>
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Direct Telephone Assistance */}
              <div className="text-center pt-1">
                <a
                  href="tel:+9607774749"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#6F7773] hover:text-[#12343B] uppercase tracking-wider font-medium py-1"
                >
                  <span>Direct Inquiries:</span>
                  <span className="font-semibold text-[#12343B] underline underline-offset-2">
                    +960 777-4749
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
