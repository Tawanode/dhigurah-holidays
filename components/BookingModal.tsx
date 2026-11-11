"use client";

import React, { useState, useEffect, useRef } from "react";
import { useBookingModal } from "./BookingModalContext";

// Hotel contact number for Dhigurah Holidays WhatsApp concierge
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9607774749";

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  adults: 1,
  children: 0,
};

export default function BookingModal() {
  const { isOpen, closeBookingModal } = useBookingModal();

  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isFirstRender = useRef(true);

  const modalRef = useRef<HTMLDivElement>(null);
  const checkInInputRef = useRef<HTMLInputElement>(null);
  const checkOutInputRef = useRef<HTMLInputElement>(null);

  const [mounted, setMounted] = useState(false);
  const [todayStr, setTodayStr] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setTodayStr(new Date().toISOString().split("T")[0]);
  }, []);

  const handleClose = () => {
    closeBookingModal();
  };

  // Sync open/close transitions with smooth animation lifecycle
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!isOpen) return;
    }

    let timer: NodeJS.Timeout;

    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 240);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Prevent background scrolling and stop Lenis smooth-scroll while modal is actively open
  useEffect(() => {
    if (shouldRender && !isClosing) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      // Stop Lenis from intercepting wheel/touch events
      const stopLenis = () => {
        const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
        if (lenis && typeof lenis.stop === "function") {
          lenis.stop();
        }
      };
      stopLenis();
      const timer = setTimeout(stopLenis, 30);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener("keydown", handleKeyDown);

        // Resume Lenis smooth scroll
        const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
        if (lenis && typeof lenis.start === "function") {
          lenis.start();
        }
      };
    }
  }, [shouldRender, isClosing]);

  // Reset redirect state when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setRedirectUrl(null);
      setIsSubmitting(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!mounted || !shouldRender) return null;

  const openDatePicker = (inputRef: React.RefObject<HTMLInputElement | null>) => {
    if (inputRef.current) {
      try {
        if (typeof inputRef.current.showPicker === "function") {
          inputRef.current.showPicker();
        } else {
          inputRef.current.focus();
        }
      } catch {
        inputRef.current.focus();
      }
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.checkIn) {
      newErrors.checkIn = "Please select check-in date";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Please select check-out date";
    } else if (formData.checkIn && formData.checkOut < formData.checkIn) {
      newErrors.checkOut = "Check-out must be after check-in";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (modalRef.current && (newErrors.name || newErrors.email || newErrors.phone)) {
        const scrollContainer = modalRef.current.querySelector(".overflow-y-auto");
        scrollContainer?.scrollTo({ top: 0, behavior: "smooth" });
      }
      return false;
    }

    return true;
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const [year, month, day] = dateStr.split("-").map(Number);
      const d = new Date(year, month - 1, day);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const nights = calculateNights();
    const formattedCheckIn = formatDateDisplay(formData.checkIn);
    const formattedCheckOut = formatDateDisplay(formData.checkOut);

    // Build structured, friendly WhatsApp pre-filled message
    const messageLines = [
      "*NEW BOOKING ENQUIRY — DHIGURAH HOLIDAYS*",
      "──────────────────────────────",
      `*Guest Name:* ${formData.name.trim()}`,
      `*Email Address:* ${formData.email.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
      "──────────────────────────────",
      `*Check-In:* ${formattedCheckIn}`,
      `*Check-Out:* ${formattedCheckOut}`,
      `*Duration:* ${nights > 0 ? `${nights} night${nights > 1 ? "s" : ""}` : "Same-day / To be confirmed"}`,
      `*Adults:* ${formData.adults}`,
      `*Children:* ${formData.children}`,
      "──────────────────────────────",
      "Hello Dhigurah Holidays team, I would like to check availability and request a booking with the above details. Thank you!",
    ];

    const messageText = messageLines.join("\n");
    const cleanPhone = WHATSAPP_PHONE.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;

    setRedirectUrl(waUrl);

    // Also dispatch to /api/contact in the background so the hotel keeps a permanent record
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          topic: "Accommodation",
          arrivalDate: formData.checkIn,
          departureDate: formData.checkOut,
          adults: formData.adults,
          children: formData.children,
          message: `WhatsApp direct booking request: ${formData.adults} Adults, ${formData.children} Children, ${nights} nights.`,
        }),
      }).catch(() => {
        // Silently handle backend log errors so user is never blocked
      });
    } catch {
      // ignore background error
    }

    // Redirect to WhatsApp
    try {
      const opened = window.open(waUrl, "_blank", "noopener,noreferrer");
      if (!opened || opened.closed || typeof opened.closed === "undefined") {
        window.location.href = waUrl;
      }
    } catch {
      window.location.href = waUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#12343B]/65 backdrop-blur-md ${
        isClosing ? "booking-backdrop-out" : "booking-backdrop-in"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      onWheel={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
      }}
    >
      <div
        ref={modalRef}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        className={`relative w-full max-w-[460px] bg-[#FCFBF8] border border-[#E5E2DA] rounded-[8px] sm:rounded-[10px] shadow-[0_25px_60px_-15px_rgba(18,52,59,0.35),0_10px_25px_-5px_rgba(0,0,0,0.1)] overflow-hidden max-h-[88vh] flex flex-col ${
          isClosing ? "booking-card-out" : "booking-card-in"
        }`}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Header: Book Your Stay + Close button */}
        <div className="flex items-center justify-between pt-7 sm:pt-8 px-6 sm:px-8 pb-3 bg-[#FCFBF8] shrink-0 select-none border-b border-[#E5E2DA]/60">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#236653] block">
              DHIGURAH HOLIDAYS
            </span>
            <h2
              id="booking-modal-title"
              className="font-serif text-[24px] sm:text-[26px] font-normal text-[#12343B] tracking-tight leading-tight"
            >
              Book Your Stay
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close booking form"
            className="w-9 h-9 rounded-[4px] flex items-center justify-center text-[#6F7773] hover:text-[#12343B] hover:bg-[#F5F0E7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          className="overflow-y-auto overscroll-contain px-6 sm:px-8 pb-7 sm:pb-8 pt-4 flex-1 scrollbar-thin"
          style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Your Name */}
            <div>
              <label
                htmlFor="booking-name"
                className="block text-xs uppercase tracking-wider font-semibold text-[#242B2A] mb-1.5"
              >
                Your Name <span className="text-[#236653]">*</span>
              </label>
              <input
                id="booking-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="John Doe"
                className={`w-full h-[48px] rounded-[4px] border px-4 bg-[#F5F0E7]/60 text-[#242B2A] placeholder:text-[#6F7773]/60 text-sm transition-all focus:outline-none ${
                  errors.name
                    ? "border-red-400 ring-2 ring-red-100 bg-red-50/20"
                    : "border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:ring-1 focus:ring-[#12343B]/20"
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1 animate-in fade-in">{errors.name}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="booking-email"
                className="block text-xs uppercase tracking-wider font-semibold text-[#242B2A] mb-1.5"
              >
                Email Address <span className="text-[#236653]">*</span>
              </label>
              <input
                id="booking-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="john@example.com"
                className={`w-full h-[48px] rounded-[4px] border px-4 bg-[#F5F0E7]/60 text-[#242B2A] placeholder:text-[#6F7773]/60 text-sm transition-all focus:outline-none ${
                  errors.email
                    ? "border-red-400 ring-2 ring-red-100 bg-red-50/20"
                    : "border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:ring-1 focus:ring-[#12343B]/20"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1 animate-in fade-in">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="booking-phone"
                className="block text-xs uppercase tracking-wider font-semibold text-[#242B2A] mb-1.5"
              >
                Phone Number <span className="text-[#236653]">*</span>
              </label>
              <input
                id="booking-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="+1 (555) 000-0000"
                className={`w-full h-[48px] rounded-[4px] border px-4 bg-[#F5F0E7]/60 text-[#242B2A] placeholder:text-[#6F7773]/60 text-sm transition-all focus:outline-none ${
                  errors.phone
                    ? "border-red-400 ring-2 ring-red-100 bg-red-50/20"
                    : "border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:ring-1 focus:ring-[#12343B]/20"
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1 animate-in fade-in">{errors.phone}</p>
              )}
            </div>

            {/* Check In */}
            <div>
              <label
                htmlFor="booking-checkin"
                className="block text-xs uppercase tracking-wider font-semibold text-[#242B2A] mb-1.5"
              >
                Check In <span className="text-[#236653]">*</span>
              </label>
              <div
                onClick={() => openDatePicker(checkInInputRef)}
                className={`relative flex items-center w-full h-[48px] rounded-[4px] border px-4 text-sm cursor-pointer transition-all ${
                  errors.checkIn
                    ? "border-red-400 ring-2 ring-red-100 bg-red-50/20"
                    : "border-[#E5E2DA] bg-[#F5F0E7]/60 hover:bg-[#F5F0E7] focus-within:border-[#12343B] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#12343B]/20"
                }`}
              >
                <span className="material-symbols-outlined text-[19px] text-[#6F7773] mr-2.5 shrink-0 pointer-events-none">
                  calendar_today
                </span>
                <span
                  className={`flex-1 select-none text-sm ${
                    formData.checkIn ? "text-[#242B2A] font-medium" : "text-[#6F7773]/70"
                  }`}
                >
                  {formData.checkIn ? formatDateDisplay(formData.checkIn) : "Select date"}
                </span>
                <input
                  ref={checkInInputRef}
                  id="booking-checkin"
                  type="date"
                  min={todayStr || undefined}
                  max="2035-12-31"
                  value={formData.checkIn}
                  onClick={(e) => {
                    try {
                      (e.target as HTMLInputElement).showPicker?.();
                    } catch {}
                  }}
                  onChange={(e) => {
                    const newCheckIn = e.target.value;
                    let newCheckOut = formData.checkOut;
                    if (newCheckOut && newCheckOut < newCheckIn) {
                      newCheckOut = newCheckIn;
                    }
                    setFormData({ ...formData, checkIn: newCheckIn, checkOut: newCheckOut });
                    if (errors.checkIn) setErrors({ ...errors, checkIn: undefined });
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </div>
              {errors.checkIn && (
                <p className="text-red-600 text-xs mt-1 animate-in fade-in">{errors.checkIn}</p>
              )}
            </div>

            {/* Check Out */}
            <div>
              <label
                htmlFor="booking-checkout"
                className="block text-xs uppercase tracking-wider font-semibold text-[#242B2A] mb-1.5"
              >
                Check Out <span className="text-[#236653]">*</span>
              </label>
              <div
                onClick={() => openDatePicker(checkOutInputRef)}
                className={`relative flex items-center w-full h-[48px] rounded-[4px] border px-4 text-sm cursor-pointer transition-all ${
                  errors.checkOut
                    ? "border-red-400 ring-2 ring-red-100 bg-red-50/20"
                    : "border-[#E5E2DA] bg-[#F5F0E7]/60 hover:bg-[#F5F0E7] focus-within:border-[#12343B] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#12343B]/20"
                }`}
              >
                <span className="material-symbols-outlined text-[19px] text-[#6F7773] mr-2.5 shrink-0 pointer-events-none">
                  calendar_today
                </span>
                <span
                  className={`flex-1 select-none text-sm ${
                    formData.checkOut ? "text-[#242B2A] font-medium" : "text-[#6F7773]/70"
                  }`}
                >
                  {formData.checkOut ? formatDateDisplay(formData.checkOut) : "Select date"}
                </span>
                <input
                  ref={checkOutInputRef}
                  id="booking-checkout"
                  type="date"
                  min={formData.checkIn || todayStr || undefined}
                  max="2035-12-31"
                  value={formData.checkOut}
                  onClick={(e) => {
                    try {
                      (e.target as HTMLInputElement).showPicker?.();
                    } catch {}
                  }}
                  onChange={(e) => {
                    setFormData({ ...formData, checkOut: e.target.value });
                    if (errors.checkOut) setErrors({ ...errors, checkOut: undefined });
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </div>
              {errors.checkOut && (
                <p className="text-red-600 text-xs mt-1 animate-in fade-in">{errors.checkOut}</p>
              )}
            </div>

            {/* Steppers: Adults & Children Row */}
            <div className="pt-1 flex items-center justify-between gap-4">
              {/* Adults Counter */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#242B2A]">
                  Adults
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease adults"
                    disabled={formData.adults <= 1}
                    onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                    className="w-8 h-8 rounded-[4px] border border-[#E5E2DA] bg-white flex items-center justify-center text-[#242B2A] hover:border-[#12343B] hover:bg-[#F5F0E7] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed select-none text-sm"
                  >
                    –
                  </button>
                  <span className="w-5 text-center font-semibold text-[#12343B] text-sm">
                    {formData.adults}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase adults"
                    disabled={formData.adults >= 10}
                    onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                    className="w-8 h-8 rounded-[4px] border border-[#E5E2DA] bg-white flex items-center justify-center text-[#242B2A] hover:border-[#12343B] hover:bg-[#F5F0E7] active:scale-95 transition-all select-none text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#242B2A]">
                  Children
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease children"
                    disabled={formData.children <= 0}
                    onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                    className="w-8 h-8 rounded-[4px] border border-[#E5E2DA] bg-white flex items-center justify-center text-[#242B2A] hover:border-[#12343B] hover:bg-[#F5F0E7] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed select-none text-sm"
                  >
                    –
                  </button>
                  <span className="w-5 text-center font-semibold text-[#12343B] text-sm">
                    {formData.children}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase children"
                    disabled={formData.children >= 8}
                    onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                    className="w-8 h-8 rounded-[4px] border border-[#E5E2DA] bg-white flex items-center justify-center text-[#242B2A] hover:border-[#12343B] hover:bg-[#F5F0E7] active:scale-95 transition-all select-none text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button: Request Booking */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[50px] rounded-[4px] bg-[#12343B] hover:bg-[#236653] active:scale-[0.99] text-white font-semibold text-xs uppercase tracking-[0.14em] shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B]/30 disabled:opacity-80"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Connecting to WhatsApp...</span>
                  </span>
                ) : (
                  <span>Request Booking Inquiry</span>
                )}
              </button>
            </div>

            {/* Redirect fallback info */}
            {redirectUrl && (
              <div className="text-center pt-2">
                <p className="text-xs text-[#6F7773] mb-1">
                  WhatsApp window not opening automatically?
                </p>
                <a
                  href={redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#236653] underline hover:text-[#12343B]"
                >
                  Click here to open WhatsApp directly
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
