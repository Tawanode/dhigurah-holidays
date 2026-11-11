"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface GalleryPlate {
  id: string;
  plateNumber: string;
  title: string;
  category: "guesthouse" | "rooms" | "beaches" | "island-life" | "marine-experiences";
  categoryLabel: string;
  caption: string;
  alt: string;
  src: string;
  aspectClass: string;
  desktopSpan: string;
  objectPosition?: string;
}

const GALLERY_ITEMS: GalleryPlate[] = [
  // --- ROW 1 (8 + 4 = 12 cols on desktop) ---
  {
    id: "g-01",
    plateNumber: "Plate 01",
    title: "Twilight Sanctuary Exterior",
    category: "guesthouse",
    categoryLabel: "Guesthouse",
    caption:
      "Contemporary whitewashed coral architecture bathed in gentle amber lanterns against an indigo twilight sky.",
    alt: "Dusk photograph of Dhigurah Holidays boutique retreat exterior in the Maldives with warm amber lantern lighting amid banana palms.",
    src: "/images/img_f1833703f81e.jpg",
    aspectClass: "aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]",
    desktopSpan: "lg:col-span-8",
    objectPosition: "object-center",
  },
  {
    id: "g-02",
    plateNumber: "Plate 02",
    title: "Deluxe Bedroom with Pure Linen",
    category: "rooms",
    categoryLabel: "Rooms",
    caption:
      "Washed sand-toned organic linen and breezy garden shadows filtering through timber louvers.",
    alt: "Artisanal king bed draped in crisp unbleached linen with tropical daylight and slatted leaf shadows.",
    src: "/images/img_3159d9d54a3b.jpg",
    aspectClass: "aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]",
    desktopSpan: "lg:col-span-4",
    objectPosition: "object-center",
  },

  // --- ROW 2 (7 + 5 = 12 cols on desktop) ---
  {
    id: "g-03",
    plateNumber: "Plate 03",
    title: "The South Ari Sandbank",
    category: "beaches",
    categoryLabel: "Beaches",
    caption:
      "Three kilometers of endless powdery white coral sand meeting the vast turquoise lagoon.",
    alt: "Expansive panoramic photograph of Dhigurah southern sandbank reaching into cyan Indian Ocean shallows.",
    src: "/images/img_88f7d91e8d1e.jpg",
    aspectClass: "aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]",
    desktopSpan: "lg:col-span-7",
    objectPosition: "object-center",
  },
  {
    id: "g-04",
    plateNumber: "Plate 04",
    title: "SAMPA Whale Shark Encounter",
    category: "marine-experiences",
    categoryLabel: "Marine Experiences",
    caption:
      "Wild whale sharks gliding serenely along the outer drop-off of South Ari Atoll reef.",
    alt: "Underwater photograph of a gentle wild whale shark swimming in deep turquoise waters of South Ari Atoll.",
    src: "/images/img_aa5e62c816c0.jpg",
    aspectClass: "aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]",
    desktopSpan: "lg:col-span-5",
    objectPosition: "object-center",
  },

  // --- ROW 3 (4 + 8 = 12 cols on desktop) ---
  {
    id: "g-05",
    plateNumber: "Plate 05",
    title: "Tropical Garden Path",
    category: "island-life",
    categoryLabel: "Island Life",
    caption:
      "Sunlit sandy village lane flanked by leaning coconut palms and vibrant hibiscus flora.",
    alt: "Narrow sand path lined with coconut palm fronds and flowering bougainvillea on Dhigurah island.",
    src: "/images/img_940631fe27ec.jpg",
    aspectClass: "aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]",
    desktopSpan: "lg:col-span-4",
    objectPosition: "object-center",
  },
  {
    id: "g-06",
    plateNumber: "Plate 06",
    title: "Pristine Bikini Beach Shallows",
    category: "beaches",
    categoryLabel: "Beaches",
    caption:
      "Translucent calm waters protected by the inner atoll coral barrier, ideal for peaceful wading.",
    alt: "Crystal clear turquoise water rippling gently over fine white coral sand ripples on Dhigurah beach.",
    src: "/images/img_9f00144c855e.jpg",
    aspectClass: "aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]",
    desktopSpan: "lg:col-span-8",
    objectPosition: "object-center",
  },

  // --- ROW 4 (6 + 6 = 12 cols on desktop) ---
  {
    id: "g-07",
    plateNumber: "Plate 07",
    title: "Atelier Courtyard & Guest Garden",
    category: "guesthouse",
    categoryLabel: "Guesthouse",
    caption:
      "Quiet shaded garden terrace with handcrafted teak outdoor seating under breadfruit trees.",
    alt: "Tropical garden courtyard at Dhigurah Holidays with lush green leaves and natural wood benches.",
    src: "/images/img_7ce8d476daf0.jpg",
    aspectClass: "aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]",
    desktopSpan: "lg:col-span-6",
    objectPosition: "object-center",
  },
  {
    id: "g-08",
    plateNumber: "Plate 08",
    title: "Manta Ray Coral Cleaning Station",
    category: "marine-experiences",
    categoryLabel: "Marine Experiences",
    caption:
      "Graceful ocean mantas hovering effortlessly above reef coral pinnacles in crystal-clear visibility.",
    alt: "Majestic manta ray gliding over sunlit reef garden in South Ari Atoll marine reserve.",
    src: "/images/img_37e1a85a4c65.jpg",
    aspectClass: "aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]",
    desktopSpan: "lg:col-span-6",
    objectPosition: "object-center",
  },

  // --- ROW 5 (7 + 5 = 12 cols on desktop) ---
  {
    id: "g-09",
    plateNumber: "Plate 09",
    title: "Local Harbor at Golden Hour",
    category: "island-life",
    categoryLabel: "Island Life",
    caption:
      "Traditional wooden Dhoni boats swaying quietly in the emerald harbor as fishermen return.",
    alt: "Traditional wooden Maldivian Dhoni boats anchored in the tranquil lagoon during soft golden sunset.",
    src: "/images/img_76f01c7b77e7.jpg",
    aspectClass: "aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10]",
    desktopSpan: "lg:col-span-7",
    objectPosition: "object-center",
  },
  {
    id: "g-10",
    plateNumber: "Plate 10",
    title: "Ensuite Freshwater Rain Shower",
    category: "rooms",
    categoryLabel: "Rooms",
    caption:
      "High ceilings, polished sand-stone tiles, heated freshwater showers, and organic island botanicals.",
    alt: "Minimalist ensuite private bathroom with open stone finishes and warm tropical daylight.",
    src: "/images/img_8885e90ac2ce.jpg",
    aspectClass: "aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]",
    desktopSpan: "lg:col-span-5",
    objectPosition: "object-center",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Photos" },
  { key: "guesthouse", label: "Guesthouse" },
  { key: "rooms", label: "Rooms" },
  { key: "beaches", label: "Beaches" },
  { key: "island-life", label: "Island Life" },
  { key: "marine-experiences", label: "Marine Experiences" },
];

export default function GalleryLightbox() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

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

  // Resolve responsive column span
  const getItemColSpan = (item: GalleryPlate) => {
    if (selectedCategory !== "all") {
      return "col-span-1 md:col-span-1 lg:col-span-6";
    }
    return `col-span-1 md:col-span-1 ${item.desktopSpan}`;
  };

  const currentItem = activeIdx !== null ? filteredItems[activeIdx] : null;

  return (
    <div>
      {/* ========================================================= */}
      {/* STICKY FILTER TOOLBAR                                     */}
      {/* ========================================================= */}
      <div className="sticky top-[68px] md:top-[72px] z-30 bg-[#FCFBF8]/95 backdrop-blur-md border-y border-[#E5E2DA] py-3 sm:py-3.5 mb-8 sm:mb-10 lg:mb-12 transition-all">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-4">
          {/* Scrollable Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto -mx-5 px-5 sm:-mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setActiveIdx(null);
                  }}
                  className={`btn-tactile h-[38px] px-3.5 sm:px-4 rounded-[4px] text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-200 shrink-0 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] ${
                    isActive
                      ? "bg-[#12343B] text-white shadow-sm border border-[#12343B]"
                      : "bg-[#FCFBF8] text-[#242B2A] hover:text-[#12343B] hover:bg-[#F5F0E7] border border-[#E5E2DA]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-[#6F7773] tracking-wider uppercase font-medium">
            <span>Showing {filteredItems.length} Plates</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* EDITORIAL MASONRY-STYLE GRID (CLICKABLE CARDS)           */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-20 md:pb-24">
        <div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 animate-in fade-in duration-300"
        >
          {filteredItems.map((item, idx) => {
            const spanClass = getItemColSpan(item);

            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                delay={Math.min(idx * 50, 300)}
                className={spanClass}
              >
                <article
                  onClick={() => setActiveIdx(idx)}
                  className="group bg-[#FCFBF8] p-3 sm:p-4 border border-[#E5E2DA] shadow-sm hover:shadow-md hover:border-[#236653]/50 transition-all duration-300 rounded-[4px] flex flex-col justify-between cursor-pointer card-hover-lift h-full select-none"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  aria-label={`View ${item.title} in lightbox`}
                >
                  {/* Image Frame with zoom on hover */}
                  <div
                    className={`relative overflow-hidden bg-[#F5F0E7] rounded-[2px] ${item.aspectClass}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 66vw, 800px"
                      className={`object-cover ${
                        item.objectPosition || "object-center"
                      } transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                    />

                    {/* Subtle Magnify Indicator */}
                    <div className="absolute inset-0 bg-[#12343B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#12343B] shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <span className="material-symbols-outlined text-xl">fullscreen</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption Structure */}
                  <div className="pt-3.5 sm:pt-4 pb-0.5 px-0.5">
                    <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em]">
                      <span className="font-semibold text-[#236653]">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[#6F7773] font-medium tracking-widest">
                        {item.plateNumber}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-[19px] lg:text-[20px] text-[#12343B] leading-snug mt-1.5 group-hover:text-[#236653] transition-colors">
                      {item.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-[#6F7773] line-clamp-2 mt-1 leading-relaxed font-light">
                      {item.caption}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE LIGHTBOX MODAL DIALOG                         */}
      {/* ========================================================= */}
      {currentItem && activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo Lightbox: ${currentItem.title}`}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#12343B]/97 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
        >
          {/* Top Header Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto pb-3 border-b border-white/15"
          >
            <div className="flex items-center gap-2 sm:gap-3 text-xs uppercase tracking-widest text-[#F5F0E7]">
              <span className="font-mono font-semibold text-white">{currentItem.plateNumber}</span>
              <span>•</span>
              <span className="text-[#6CAFC4] font-semibold">{currentItem.categoryLabel}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-white/80">DHIGURAH ARCHIVE</span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="btn-tactile text-white/80 hover:text-white flex items-center gap-1.5 text-xs uppercase tracking-widest p-2 min-h-[44px] min-w-[44px] justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px]"
              aria-label="Close Lightbox"
            >
              <span className="hidden sm:inline">CLOSE [ESC]</span>
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Central Image Canvas with Prev / Next Navigation */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-4 max-w-5xl w-full mx-auto"
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevImage}
              className="btn-tactile absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous photograph"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="btn-tactile absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next photograph"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>

            {/* Active Image */}
            <div className="relative w-full h-[64vh] max-h-[720px] flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="(max-width: 1024px) 95vw, 1200px"
                className="object-contain animate-in zoom-in-95 duration-200"
                priority
              />
            </div>
          </div>

          {/* Bottom Caption Drawer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full mx-auto pt-3 border-t border-white/15 text-center sm:text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-white"
          >
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-white">{currentItem.title}</h2>
              <p className="text-xs sm:text-sm text-[#F5F0E7]/90 font-light max-w-2xl mt-1 leading-relaxed">
                {currentItem.caption}
              </p>
            </div>
            <div className="text-[11px] font-mono tracking-widest text-[#6CAFC4] uppercase shrink-0">
              {activeIdx + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
