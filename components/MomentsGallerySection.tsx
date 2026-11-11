"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryMoment {
  id: string;
  src: string;
  alt: string;
  caption: string;
  number: string;
  description: string;
  objectPosition: string;
}

const MOMENTS: GalleryMoment[] = [
  {
    id: "moment-01",
    src: "/images/img_940631fe27ec.jpg",
    alt: "Tropical garden pathway at Dhigurah Holidays with coconut palms and traditional guesthouse porch",
    caption: "Lush Island Pathways",
    number: "01",
    description: "Sun-dappled sand lanes weaving through native coconut palms, hibiscus flowers, and bicycle-friendly paths.",
    objectPosition: "object-center",
  },
  {
    id: "moment-02",
    src: "/images/img_3159d9d54a3b.jpg",
    alt: "Deluxe guest room with crisp white linen and teak furnishings",
    caption: "Quiet Guest Rooms",
    number: "02",
    description: "Serene bedroom sanctuaries adorned in organic linens, woven rugs, and breezy sheer drapery overlooking garden greenery.",
    objectPosition: "object-center",
  },
  {
    id: "moment-03",
    src: "/images/img_88f7d91e8d1e.jpg",
    alt: "Dhigurah southern sandbank with turquoise shallows",
    caption: "The Southern Sandbank",
    number: "03",
    description: "A breathtaking three-kilometer natural white sandbar gently tapering into the transparent turquoise shallows of South Ari Atoll.",
    objectPosition: "object-center",
  },
  {
    id: "moment-04",
    src: "/images/img_aa5e62c816c0.jpg",
    alt: "Wild whale shark swimming gracefully in South Ari Atoll alongside respectful snorkeler",
    caption: "SAMPA Whale Sharks",
    number: "04",
    description: "Awe-inspiring, ethical encounters with gentle wild whale sharks thriving year-round in the marine protected corridor.",
    objectPosition: "object-center",
  },
];

import ScrollReveal from "@/components/motion/ScrollReveal";

export default function MomentsGallerySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % MOMENTS.length));
  }, []);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev === null ? null : (prev - 1 + MOMENTS.length) % MOMENTS.length));
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIdx, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <section
        aria-labelledby="moments-heading"
        className="pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 max-w-7xl mx-auto px-5 sm:px-8 md:px-12"
      >
        {/* Header row: Eyebrow + Title aligned on common visual row with Link */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-4 pb-2 border-b border-[#c0c8c5]/30">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#176B55] font-semibold block mb-2">
                CURATED ISLAND ARCHIVE
              </span>
              <h2
                id="moments-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#002620] leading-tight"
              >
                Moments from Dhigurah
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group/link text-xs uppercase tracking-widest text-[#103D35] hover:text-[#176B55] font-semibold inline-flex items-center gap-1.5 pb-1 transition-colors self-start sm:self-end btn-tactile"
            >
              <span>VIEW THE FULL GALLERY</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover/link:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover/link:translate-x-0">
                east
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* 4 Standardized Equal Cards (1-col mobile, 2-col tablet, 4-col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {MOMENTS.map((item, idx) => (
            <ScrollReveal key={item.id} variant="fade-up" delay={idx * 100}>
              <div
                className="group relative bg-white p-3 md:p-3.5 border border-[#c0c8c5]/40 passe-partout transition-all duration-300 hover:border-[#176B55]/50 card-hover-lift flex flex-col"
              >
                {/* Image Frame with Uniform 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ebefe9]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${item.objectPosition} transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                  />

                  {/* Subtle Lightbox Preview Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveIdx(idx);
                    }}
                    aria-label={`Open "${item.caption}" in lightbox view`}
                    className="absolute bottom-2.5 right-2.5 z-20 bg-white/90 hover:bg-white text-[#002620] w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm backdrop-blur-sm focus:opacity-100"
                  >
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                  </button>
                </div>

                {/* Caption Row with Consistent Spacing & Baseline Alignment */}
                <div className="pt-3 pb-0.5 px-0.5 flex justify-between items-baseline gap-2">
                  <h3 className="font-serif text-sm sm:text-[15px] text-[#002620] group-hover:text-[#176B55] transition-colors font-medium">
                    {/* Primary click target covering the full card for gallery navigation */}
                    <Link
                      href="/gallery"
                      className="focus:outline-none after:absolute after:inset-0 after:z-10"
                      aria-label={`View ${item.caption} in the full gallery archive`}
                    >
                      {item.caption}
                    </Link>
                  </h3>
                  <div className="inline-flex items-center gap-1 text-[11px] text-[#717976] group-hover:text-[#103D35] transition-colors uppercase tracking-wider tabular-nums font-mono flex-shrink-0">
                    <span>{item.number}</span>
                    <span className="material-symbols-outlined text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 motion-reduce:transition-none motion-reduce:translate-x-0">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Accessible Fullscreen Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo Lightbox: ${MOMENTS[activeIdx].caption}`}
          className="fixed inset-0 z-50 bg-[#002620]/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar: Plate Label + Close Control */}
          <div
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3 text-xs uppercase tracking-widest text-[#d8e5df]">
              <span className="font-mono font-semibold text-white">PLATE {MOMENTS[activeIdx].number}</span>
              <span>•</span>
              <span>MOMENTS FROM DHIGURAH</span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Center Stage: Image Display with Previous / Next Controls */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous photograph"
              className="absolute left-2 sm:-left-12 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 sm:bg-transparent sm:hover:bg-transparent p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="material-symbols-outlined text-3xl">chevron_left</span>
            </button>

            {/* Main Lightbox Image Frame */}
            <div className="relative w-full max-h-[70vh] aspect-[4/3] max-w-4xl overflow-hidden rounded-sm shadow-2xl bg-black">
              <Image
                src={MOMENTS[activeIdx].src}
                alt={MOMENTS[activeIdx].alt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next photograph"
              className="absolute right-2 sm:-right-12 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 sm:bg-transparent sm:hover:bg-transparent p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="material-symbols-outlined text-3xl">chevron_right</span>
            </button>
          </div>

          {/* Bottom Bar: Caption Details & Full Gallery Action */}
          <div
            className="max-w-4xl w-full mx-auto pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
                {MOMENTS[activeIdx].caption}
              </h4>
              <p className="text-xs sm:text-sm text-[#c0d0cb] max-w-xl font-light">
                {MOMENTS[activeIdx].description}
              </p>
            </div>
            <Link
              href="/gallery"
              onClick={closeLightbox}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white bg-[#176B55] hover:bg-[#1a7f65] px-4 py-2 font-medium transition-colors rounded-sm flex-shrink-0"
            >
              <span>VIEW IN FULL ARCHIVE</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
