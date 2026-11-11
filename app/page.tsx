import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import MomentsGallerySection from "@/components/MomentsGallerySection";

export const metadata: Metadata = {
  title: "Home | Dhigurah Holidays — Authentic Island Sanctuary Maldives",
  description:
    "Discover Dhigurah Holidays, a boutique guesthouse on Dhigurah Island in South Ari Atoll, Maldives. Find your island rhythm close to powder-soft beaches and whale shark feeding grounds.",
};

const EXPERIENCES_PREVIEW = [
  {
    title: "Beach Days & Shallows",
    desc: "Unwind on one of the longest continuous white sand stretches in the Maldives with dedicated bikini beach areas.",
    tag: "Relaxation",
    image: "/images/img_9f00144c855e.jpg",
    alt: "Pristine white sand shoreline, sun loungers, and turquoise waters on Dhigurah beach",
    href: "/experiences",
  },
  {
    title: "Whale Shark Safaris",
    desc: "Venture into the South Ari Marine Protected Area (SAMPA) for ethical, awe-inspiring encounters with wild whale sharks.",
    tag: "Marine Reserve",
    image: "/images/img_4940e3fc6d26.jpg",
    alt: "Wild whale shark gliding gracefully through sunlit crystal turquoise waters in South Ari Atoll",
    href: "/experiences",
  },
  {
    title: "Snorkelling Adventures",
    desc: "Drift over living coral gardens teeming with reef fish, sea turtles, and kaleidoscopic marine flora in transparent waters.",
    tag: "Inner Reef",
    image: "/images/img_5f6ce5abc432.jpg",
    alt: "Green sea turtle swimming peacefully over vibrant coral reefs and tropical fish",
    href: "/experiences",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* 1. HERO SECTION: FULL-WIDTH IMMERSIVE MALDIVES CANVAS    */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[calc(100svh-64px)] sm:min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-72px)] flex items-end overflow-hidden">
        {/* Parallax background photography: Mobile focused on turquoise lagoon, beach & palm canopy, desktop expansive */}
        <div className="absolute inset-0 w-full h-full">
          <ParallaxImage speed={0.14} className="w-full h-full">
            <Image
              src="/images/dhigurah_hero_maldives.jpg"
              alt="Dhigurah Island Maldives Shoreline, Turquoise Lagoon and Long Sandbank"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[58%_92%] sm:object-[48%_80%] md:object-[25%_center] lg:object-[20%_center] xl:object-[18%_center] transition-transform duration-1000 ease-out"
            />
          </ParallaxImage>
        </div>

        {/* Multi-stage dark gradient: strong at the bottom behind text & CTAs, delicate higher up */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#12343B]/95 via-[#12343B]/60 via-45% to-[#12343B]/15 md:bg-gradient-to-tr md:from-[#12343B]/92 md:via-[#12343B]/40 md:via-45% md:to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Group: Staggered entrance sequence, positioned slightly higher on mobile */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[6.5vw] xl:px-[7.5vw] pt-12 sm:pt-20 md:pt-24 pb-11 sm:pb-10 md:pb-12 lg:pb-14">
          <div className="max-w-[740px] lg:max-w-[780px] xl:max-w-[820px] text-left flex flex-col items-start">
            {/* Location Eyebrow (Desktop only) */}
            <div className="hidden sm:flex items-center gap-2.5 md:gap-3 mb-3.5 lg:mb-4 animate-hero-headline" style={{ animationDelay: "120ms" }}>
              <span className="w-8 h-[1.5px] bg-[#6CAFC4]" aria-hidden="true" />
              <span className="text-[#6CAFC4] text-xs md:text-[13px] font-semibold uppercase tracking-[0.22em]">
                SOUTH ARI ATOLL — MALDIVES
              </span>
            </div>

            {/* Headline: Reduced by 5-10% on mobile (38-42px at 360px) with 1.02 line-height */}
            <h1 className="text-white font-serif text-[clamp(2.35rem,5.2vw+1.2rem,2.7rem)] sm:text-5xl md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[1.02] sm:leading-[1.04] mb-3 sm:mb-4 tracking-tight max-w-[560px] lg:max-w-[800px] animate-hero-headline" style={{ animationDelay: "240ms" }}>
              <span className="block sm:inline md:block">Find Your Island</span>{" "}
              <span className="block sm:inline md:block">
                Escape <span className="whitespace-nowrap italic font-normal">on Dhigurah</span>
              </span>
            </h1>

            {/* Supporting Copy: Shorter tailored copy on mobile, full description on desktop */}
            <p className="text-[#FCFBF8]/95 text-[17px] min-[390px]:text-[18px] md:text-lg lg:text-[19px] max-w-[640px] mb-5 sm:mb-7 md:mb-8 leading-[1.48] font-light animate-hero-sub" style={{ animationDelay: "400ms" }}>
              <span className="sm:hidden">
                Wake to tropical mornings, explore turquoise waters, and experience the quieter side of the Maldives.
              </span>
              <span className="hidden sm:inline">
                Wake to tropical mornings, wander towards turquoise waters, and discover the quieter rhythm of everyday life in the Maldives.
              </span>
            </p>

            {/* Calls to Action: Stacked vertically on mobile with 12px gap, 54-56px height, reduced letter-spacing */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto animate-hero-cta" style={{ animationDelay: "560ms" }}>
              <Link
                href="/contact"
                className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-[54px] px-7 sm:px-8 md:px-9 inline-flex items-center justify-center bg-[#FCFBF8] text-[#12343B] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.11em] sm:tracking-[0.15em] hover:bg-white hover:shadow-[0_6px_20px_rgba(18,52,59,0.2)] active:bg-[#eae3d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 group rounded-[4px] select-none transition-all"
              >
                <span>MAKE AN INQUIRY</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
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
              </Link>
              <Link
                href="/experiences"
                className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-[54px] px-7 sm:px-8 md:px-9 inline-flex items-center justify-center bg-transparent border border-[#FCFBF8]/80 text-[#FCFBF8] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.11em] sm:tracking-[0.15em] hover:bg-white/10 hover:border-white active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 group rounded-[4px] select-none transition-all"
              >
                <span>EXPLORE THE ISLAND</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION 2: INTRODUCTION TO ISLAND LIVING               */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-20 md:py-24 lg:py-28 bg-[#F5F0E7] border-y border-[#E5E2DA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Editorial Text Lockup (5 cols) */}
            <ScrollReveal variant="fade-up" className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[#236653] rounded-full shrink-0"></span>
                <span className="text-[#236653] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-widest">
                  WELCOME TO DHIGURAH
                </span>
              </div>

              {/* Headline: Responsive clamp (38-42px on typical 360-390px mobile screens) */}
              <h2 className="font-serif text-[clamp(2.35rem,4.5vw+1.35rem,2.75rem)] sm:text-4xl md:text-5xl text-[#12343B] leading-[1.06] sm:leading-tight tracking-tight">
                A Little Closer to the Real Maldives
              </h2>

              {/* Body Text: Shorter tailored mobile paragraph, full two paragraphs on desktop */}
              <div className="space-y-4 text-[#242B2A]/85 text-[17px] min-[390px]:text-[17.5px] sm:text-base md:text-[17px] leading-[1.55] sm:leading-relaxed font-light">
                {/* Mobile-only shorter introduction */}
                <p className="sm:hidden">
                  At Dhigurah Holidays, island life unfolds at an easy pace. Settle into a comfortable guest room,
                  wander beneath tropical palms, and discover the beautiful beaches and marine life of South Ari Atoll.
                </p>

                {/* Desktop introduction */}
                <p className="hidden sm:block">
                  At Dhigurah Holidays, island life unfolds at an easy pace. Settle into a comfortable guest
                  room, wander through tropical surroundings, and spend your days discovering the beaches and
                  extraordinary marine world of South Ari Atoll.
                </p>

                {/* Second paragraph: Hidden on mobile so it does not dominate, preserved on desktop */}
                <p className="hidden sm:block">
                  Stretching over three kilometers along the outer rim of the atoll, Dhigurah offers uninterrupted
                  coastal walking, quiet shaded lanes beneath breadfruit and palm trees, and an authentic glimpse into
                  Maldivian hospitality away from resort crowds.
                </p>
              </div>

              {/* CTA Link: Tighter mobile vertical rhythm, aligned SVG arrow */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/about"
                  className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#12343B] hover:text-[#236653] border-b border-[#12343B]/60 hover:border-[#236653] pb-1 group transition-colors"
                >
                  <span>ABOUT OUR GUESTHOUSE</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
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
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Overlapping Layered Prints (7 cols) */}
            <div className="lg:col-span-7 relative flex justify-center items-center">
              {/* Primary Photo: Compact padding on mobile, 4:3 ratio, subtle caption */}
              <ScrollReveal variant="fade-up" delay={150} className="relative w-full max-w-md">
                <div className="bg-white p-2.5 sm:p-3 md:p-4 border border-[#E5E2DA] shadow-sm rounded-[4px] card-hover-lift sm:tilt-left">
                  <ImageReveal delay={100} className="relative aspect-[4/3] bg-[#F5F0E7] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/dhigurah_retreat_courtyard.jpg"
                      alt="Dhigurah Holidays boutique guesthouse retreat and courtyard"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-[center_60%]"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-0.5 px-0.5 flex justify-between items-center text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-[0.14em] font-medium border-t border-[#E5E2DA]/60 mt-2">
                    <span>SOUTH ARI ATOLL</span>
                    <span className="text-[#236653] font-semibold">GUESTHOUSE RETREAT</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Overlapping Secondary Photo: Preserved for tablet and desktop */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 md:right-4 w-60 md:w-72 z-10">
                <ScrollReveal variant="fade-up" delay={300}>
                  <div className="bg-white p-3 border border-[#E5E2DA] passe-partout tilt-right card-hover-lift rounded-[4px]">
                    <ImageReveal delay={250} className="aspect-[4/3] bg-[#F5F0E7]">
                      <Image
                        src="/images/dhigurah_beach_shoreline.jpg"
                        alt="Pristine white sand shoreline and turquoise lagoon on Dhigurah beach"
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                    </ImageReveal>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 3: THE ISLAND EXPERIENCE EDITORIAL GRID        */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2.5">
            ISLAND ADVENTURES &amp; OCEAN PURSUITS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#12343B] tracking-tight">
            The Dhigurah Experience
          </h2>
          <p className="text-[#6F7773] text-sm md:text-base mt-3.5 leading-relaxed font-light">
            From sunlit shores to encounters with gentle giants, discover the experiences that make Dhigurah unforgettable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCES_PREVIEW.map((exp, i) => (
            <ScrollReveal
              key={exp.title}
              variant="fade-up"
              delay={i * 120}
              className="h-full md:last:col-span-2 md:last:max-w-md md:last:w-full md:last:mx-auto lg:last:col-span-1 lg:last:max-w-none"
            >
              <Link
                href={exp.href}
                className="group bg-white border border-[#E5E2DA] shadow-sm hover:shadow-lg hover:border-[#12343B]/60 card-hover-lift flex flex-col h-full overflow-hidden rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] focus-visible:ring-offset-2"
              >
                {/* Photo Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F0E7]">
                  <Image
                    src={exp.image}
                    alt={exp.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover motion-safe:group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#236653]">
                        {exp.tag}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-[#6F7773]">
                        0{i + 1} / 0{EXPERIENCES_PREVIEW.length}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#12343B] mb-2.5 group-hover:text-[#236653] transition-colors duration-200 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6F7773] leading-relaxed line-clamp-3 font-light">
                      {exp.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-5 mt-6 border-t border-[#E5E2DA] flex justify-between items-center text-xs">
                    <span className="text-[#12343B] font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:text-[#236653] transition-colors">
                      <span>Discover Experience</span>
                      <span className="material-symbols-outlined text-sm transition-transform duration-200 motion-safe:group-hover:translate-x-1.5">
                        east
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={200} className="mt-12 text-center">
          <Link
            href="/experiences"
            className="btn-tactile inline-flex items-center justify-center gap-2 bg-[#12343B] text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#236653] shadow-sm rounded-[4px] select-none"
          >
            <span>EXPLORE ALL EXPERIENCES</span>
            <span className="material-symbols-outlined text-sm">east</span>
          </Link>
        </ScrollReveal>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 4: ROOMS PREVIEW                               */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-[#F5F0E7] border-y border-[#E5E2DA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 min-[390px]:gap-[52px] lg:gap-16 items-center">
            {/* Left: Large Room Photo (7 cols) */}
            <div className="lg:col-span-7 relative">
              <ScrollReveal variant="fade-right">
                <div className="bg-white p-2.5 sm:p-3 md:p-4 border border-[#E5E2DA] passe-partout card-hover-lift rounded-[4px] shadow-sm">
                  <ImageReveal delay={150} className="relative aspect-[16/10] bg-[#F5F0E7] rounded-[2px] overflow-hidden">
                    <Image
                      src="/images/dhigurah_deluxe_garden_suite_2k.jpg"
                      alt="Light-filled deluxe bedroom suite at Dhigurah Holidays with oak king bed and open doors to private tropical garden courtyard"
                      fill
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-0.5 px-0.5 flex justify-between items-center text-[10px] min-[360px]:text-[11px] text-[#6F7773] uppercase tracking-[0.08em] min-[360px]:tracking-wider font-medium">
                    <span className="truncate mr-2">DELUXE DOUBLE ROOM</span>
                    <span className="shrink-0 text-right">GARDEN &amp; COURTYARD ASPECT</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Copy & Verified Amenities (5 cols) */}
            <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4">
                <span className="w-2 h-2 bg-[#236653] rounded-full shrink-0"></span>
                <span className="text-[#236653] text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-widest">
                  ACCOMMODATION
                </span>
              </div>
              <h2 className="font-serif text-[clamp(38px,5.5vw+18px,42px)] sm:text-4xl lg:text-[44px] text-[#12343B] leading-[1.12] sm:leading-tight tracking-tight mb-6">
                Your Own Quiet Corner of the Island
              </h2>
              <p className="text-[#242B2A]/85 text-[17px] min-[390px]:text-[17.5px] sm:text-base md:text-base leading-[1.55] sm:leading-relaxed font-light mb-7 sm:mb-6">
                Return from a day in the sun to an air-conditioned room designed for relaxed island living.
                Enjoy garden views, ensuite facilities, and the everyday comforts that make a longer stay feel
                easy.
              </p>

              {/* Confirmed Amenities List: 2-column balanced grid on mobile */}
              <div className="grid grid-cols-2 gap-x-4 min-[390px]:gap-x-5 sm:gap-3 gap-y-6 min-[390px]:gap-y-7 sm:gap-y-3 mb-8 sm:mb-6">
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">mode_fan</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Air Conditioning</span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">wifi</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Free High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">shower</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Private Ensuite Bathroom</span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">local_cafe</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Tea &amp; Coffee Facilities</span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">yard</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Tropical Garden Views</span>
                </div>
                <div className="flex items-start sm:items-center gap-2.5 sm:gap-2 p-0 sm:p-1.5 rounded-[2px] transition-colors sm:hover:bg-white/60">
                  <span className="material-symbols-outlined text-[#236653] text-[20px] sm:text-base shrink-0 select-none mt-0.5 sm:mt-0" aria-hidden="true">pedal_bike</span>
                  <span className="text-[14px] min-[360px]:text-[15px] min-[390px]:text-base sm:text-xs leading-[1.4] sm:leading-normal text-[#242B2A] font-normal">Bicycles for Guest Use</span>
                </div>
              </div>

              {/* Calls to Action: Stacked vertically on mobile, full-width 54-56px buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 min-[390px]:gap-3.5 sm:gap-4 pt-1 sm:pt-4">
                <Link
                  href="/rooms"
                  className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-auto sm:py-3.5 px-6 sm:px-8 flex items-center justify-between sm:justify-center gap-3 bg-[#12343B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#236653] shadow-sm rounded-[4px] group select-none transition-colors border border-[#12343B]"
                >
                  <span>EXPLORE OUR ROOMS</span>
                  <span className="material-symbols-outlined text-base sm:text-sm group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true">east</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-auto sm:py-2 px-6 sm:px-0 flex items-center justify-between sm:justify-start gap-3 bg-white/70 sm:bg-transparent border border-[#12343B]/30 sm:border-0 text-[#12343B] text-xs font-semibold uppercase tracking-wider hover:bg-[#12343B] hover:text-white sm:hover:bg-transparent sm:hover:text-[#236653] rounded-[4px] sm:rounded-none group select-none transition-colors"
                >
                  <span>ASK ABOUT DATES</span>
                  <span className="material-symbols-outlined text-base sm:text-sm group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true">east</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SECTION 5: EDITORIAL GALLERY PREVIEW                   */}
      {/* ========================================================= */}
      <MomentsGallerySection />

      {/* ========================================================= */}
      {/* 6. SECTION 6: LOCATION & ATMOSPHERE                       */}
      {/* ========================================================= */}
      <section id="geography" className="py-12 min-[390px]:py-14 sm:py-20 md:py-24 bg-[#FAF7F2] border-t border-[#E5E2DA] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Copy & Details (5 cols) */}
            <ScrollReveal variant="fade-up" className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-3 sm:mb-4">
                GEOGRAPHY &amp; ATMOSPHERE
              </span>
              <h2 className="font-serif text-[34px] min-[360px]:text-[38px] min-[390px]:text-[40px] min-[430px]:text-[42px] sm:text-4xl lg:text-[44px] text-[#12343B] leading-[1.1] sm:leading-tight mb-5 sm:mb-6">
                On Dhigurah, in the Heart of South Ari Atoll
              </h2>
              <div className="space-y-5 sm:space-y-4 text-[#242B2A]/90 text-[17px] min-[390px]:text-[17.5px] sm:text-base leading-[1.5] sm:leading-relaxed font-light mb-6 sm:mb-8">
                <p>
                  Discover a local Maldivian island where tropical beaches, village life, and ocean adventures
                  are part of the same journey.
                </p>
                <p>
                  Unlike artificial resort islands, Dhigurah is home to a peaceful local community, modest harbor,
                  artisan grocery stores, and quiet lanes shaded by towering palms. It sits on the edge of the
                  celebrated South Ari Marine Protected Area, offering direct access to one of the world&apos;s few
                  year-round whale shark feeding corridors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://maps.google.com/?q=Dhigurah+Holidays+Maldives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full sm:w-auto h-[56px] min-[390px]:h-[58px] sm:h-auto sm:py-3.5 inline-flex items-center justify-center gap-2.5 bg-[#12343B] text-white px-6 text-[15px] min-[390px]:text-[15.5px] sm:text-xs font-semibold uppercase tracking-[0.06em] sm:tracking-wider hover:bg-[#236653] shadow-sm rounded-[4px] select-none transition-colors"
                >
                  <span className="whitespace-nowrap">VIEW MAP ON GOOGLE</span>
                  <span className="material-symbols-outlined text-[19px] sm:text-sm shrink-0" aria-hidden="true">north_east</span>
                </a>
                <Link
                  href="/contact"
                  className="btn-tactile w-full sm:w-auto h-[56px] min-[390px]:h-[58px] sm:h-auto sm:py-3.5 inline-flex items-center justify-center gap-2 border border-[#12343B] text-[#12343B] bg-transparent hover:bg-[#12343B] hover:text-white px-6 text-[15px] min-[390px]:text-[15.5px] sm:text-xs font-semibold uppercase tracking-[0.06em] sm:tracking-wider rounded-[4px] select-none transition-colors"
                >
                  <span className="whitespace-nowrap">HOW TO GET HERE</span>
                  <span className="material-symbols-outlined text-[19px] sm:text-sm shrink-0" aria-hidden="true">east</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Island Panorama Photo (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" delay={150}>
                <div className="bg-white p-2.5 sm:p-3 md:p-4 border border-[#E5E2DA] passe-partout card-hover-lift rounded-[4px]">
                  <ImageReveal delay={100} className="aspect-[4/3] lg:aspect-[16/10] bg-[#F5F0E7]">
                    <Image
                      src="/images/dhigurah_island_corridor.jpg"
                      alt="Pristine white sand coastal path shaded by coconut palms leading to the turquoise lagoon and wooden pier in Dhigurah, Maldives"
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-1 px-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[10.5px] min-[360px]:text-[11px] text-[#6F7773] uppercase tracking-wider">
                    <span className="shrink min-w-0">DHIGURAH ISLAND REEF CORRIDOR</span>
                    <span className="shrink-0 tracking-wider">SOUTH ARI ATOLL</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. SECTION 7: FINAL INQUIRY INVITATION                    */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-[#F5F0E7] border-t border-[#E5E2DA] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 space-y-6">
          <ScrollReveal variant="fade-up">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2.5">
              YOUR MALDIVIAN RETREAT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#12343B] leading-tight">
              Begin Your Stay on Dhigurah
            </h2>
            <p className="text-[#6F7773] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-4 font-light">
              Share your travel dates and any questions about our guest rooms, speedboat transfers, or island excursions. We look forward to welcoming you.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-tactile inline-flex items-center justify-center gap-2 bg-[#12343B] text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#236653] shadow-sm rounded-[4px] select-none"
              >
                <span>MAKE AN INQUIRY</span>
                <span className="material-symbols-outlined text-sm">east</span>
              </Link>
              <Link
                href="/rooms"
                className="btn-tactile inline-flex items-center justify-center gap-2 border border-[#12343B] text-[#12343B] px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#12343B] hover:text-white rounded-[4px] select-none transition-colors"
              >
                <span>VIEW GUEST ROOMS</span>
                <span className="material-symbols-outlined text-sm">east</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
