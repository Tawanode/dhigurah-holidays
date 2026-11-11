import type { Metadata } from "next";
import Link from "next/link";
import GalleryLightbox from "@/components/GalleryLightbox";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery & Visual Archive | Dhigurah Holidays Maldives",
  description:
    "An editorial visual archive of Dhigurah Holidays. Explore guest rooms, tropical flora, powdery beaches, and marine life across South Ari Atoll.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-[#FCFBF8]">
      {/* ========================================================= */}
      {/* 1. EDITORIAL TEXT-BASED HERO INTRODUCTION                 */}
      {/* ========================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-[1.5px] bg-[#236653]" aria-hidden="true" />
            <span className="text-[#236653] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
              VISUAL ARCHIVE &amp; ISLAND JOURNAL
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-page-title-fluid text-[#12343B] leading-[1.1] tracking-tight mb-4 sm:mb-5">
            Dhigurah, Through Our Eyes
          </h1>

          {/* Supporting Description */}
          <p className="text-[#242B2A] text-base sm:text-lg md:text-[18px] leading-relaxed max-w-2xl font-light">
            A closer look at the rooms, tropical surroundings, beaches, and ocean encounters that shape a stay on Dhigurah.
          </p>
        </ScrollReveal>
      </section>

      {/* ========================================================= */}
      {/* 2. INTERACTIVE FILTERABLE GALLERY & LIGHTBOX              */}
      {/* ========================================================= */}
      <GalleryLightbox />

      {/* ========================================================= */}
      {/* 3. INQUIRY BANNER                                         */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-[#F5F0E7]/60 border-t border-[#E5E2DA] overflow-hidden">
        <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block">
            JOIN US IN SOUTH ARI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#12343B]">
            Experience These Moments in Person
          </h2>
          <p className="text-[#6F7773] text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            From sunrise over the coral lagoon to evening strolls along the white sandbank, Dhigurah
            offers an unhurried perspective on the Maldives.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-tactile w-full sm:w-auto h-[50px] px-8 rounded-[4px] bg-[#12343B] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#236653] inline-flex items-center justify-center gap-2 select-none shadow-sm transition-colors"
            >
              <span>Enquire About a Stay</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
            <Link
              href="/rooms"
              className="btn-tactile w-full sm:w-auto h-[50px] px-8 rounded-[4px] border border-[#12343B] text-[#12343B] hover:bg-[#12343B] hover:text-white text-xs font-semibold uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2 select-none transition-colors"
            >
              <span>View Rooms &amp; Amenities</span>
              <span className="material-symbols-outlined text-sm">hotel</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
