"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      try {
        const url = new URL(window.location.href);
        let changed = false;
        if (url.searchParams.has("book")) {
          url.searchParams.delete("book");
          changed = true;
        }
        if (url.hash === "#book") {
          url.hash = "";
          changed = true;
        }
        if (changed) {
          window.history.replaceState({}, "", url.pathname + url.search + url.hash);
        }
      } catch {}
    }
  };

  // Allow opening via global custom event or URL query param / hash
  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpenEvent);

    // Check URL search param (?book=true or #book) on initial load
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("book") === "true" || window.location.hash === "#book") {
        setIsOpen(true);
      }
    }

    return () => {
      window.removeEventListener("open-booking-modal", handleOpenEvent);
    };
  }, []);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
