import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";

export const metadata: Metadata = {
  title: "About Us & Island Living | Dhigurah Holidays Maldives",
  description:
    "Learn about Dhigurah Holidays guesthouse on Dhigurah Island, South Ari Atoll. Authentic local Maldivian living, responsible tourism, and tranquil hospitality.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FCFBF8]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-12">
          {/* Left Column: Heading, Introduction & Actions */}
          <ScrollReveal variant="fade-up" className="lg:col-span-8 space-y-4 sm:space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#236653]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#236653]">
                OUR ISLAND HOME &amp; PHILOSOPHY
              </span>
            </div>

            {/* Headline: Editorial typography */}
            <h1 className="font-serif text-page-title-fluid text-[#12343B] leading-[1.08] tracking-tight max-w-2xl">
              A Little Closer to the <br className="hidden md:inline" />
              <span className="italic font-normal whitespace-nowrap">Real Maldives.</span>
            </h1>

            {/* Introduction paragraph */}
            <p className="text-[#242B2A] text-base sm:text-lg md:text-[18px] leading-relaxed max-w-xl font-light">
              A welcoming island stay shaped by the natural beauty, warm hospitality, and everyday
              rhythms of Dhigurah.
            </p>

            {/* Calls to Action */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/rooms"
                className="btn-tactile inline-flex items-center justify-center gap-2 h-[50px] px-8 rounded-[4px] bg-[#12343B] text-white text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#236653] shadow-sm select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] group transition-colors"
              >
                <span>Explore Our Rooms</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
              </Link>
              <Link
                href="#our-story"
                className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#236653] hover:text-[#12343B] transition-colors py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#236653]"
              >
                <span>Our Story</span>
                <span className="material-symbols-outlined text-[17px] transition-transform group-hover:translate-y-1" aria-hidden="true">
                  arrow_downward
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Featured Media Frame */}
        <ScrollReveal variant="fade-up" delay={150} className="relative">
          <div className="bg-[#FCFBF8] p-3 sm:p-4 border border-[#E5E2DA] shadow-sm rounded-[4px] card-hover-lift">
            <ImageReveal delay={100} className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7.5] bg-[#F5F0E7] rounded-[2px]">
              <Image
                src="/images/img_940631fe27ec.jpg"
                alt="Dhigurah Holidays guesthouse surrounded by coconut palms and tropical foliage"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[center_36%]"
              />
            </ImageReveal>
            <div className="pt-3 pb-1 px-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[11px] text-[#6F7773] uppercase tracking-[0.14em]">
              <span className="font-medium text-[#242B2A]">Dhigurah Holidays — Our Island Home</span>
              <span className="text-[#6F7773]">South Ari Atoll, Maldives</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR STORY & LOCAL ISLAND LIVING                        */}
      {/* ========================================================= */}
      <section id="our-story" className="py-20 md:py-28 bg-[#F5F0E7]/50 border-y border-[#E5E2DA] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <ScrollReveal variant="fade-right" className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block">
                AUTHENTIC RETREAT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#12343B] leading-tight">
                An Intimate Guesthouse on South Ari Atoll
              </h2>
              <div className="space-y-4 text-[#242B2A] text-sm md:text-base leading-relaxed font-light">
                <p>
                  Dhigurah Holidays was created to offer travelers an authentic alternative to the
                  insulated resort bubble. Located on the inhabited island of Dhigurah, our guesthouse
                  balances restful modern conveniences with true Maldivian island life.
                </p>
                <p className="hidden sm:block">
                  Here, the sound of the ocean breeze in the coconut palms sets the daily tempo. Step out
                  of your room into sandy pathways lined with breadfruit trees, head to the island&apos;s
                  designated Bikini Beach in just two minutes, or bicycle down to the southern sandbank
                  at low tide.
                </p>
                <p className="hidden sm:block">
                  Our dedicated on-island hosts take personal pride in welcoming you, organizing boat
                  transfers from Malé, assisting with excursion bookings, and sharing genuine recommendations
                  for exploring the surrounding reefs.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Asymmetric Photo Spread */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="fade-left" delay={150}>
                <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm tilt-right card-hover-lift">
                  <ImageReveal delay={100} className="aspect-[4/3] bg-[#F5F0E7] rounded-[2px]">
                    <Image
                      src="/images/img_f1833703f81e.jpg"
                      alt="Evening lighting and courtyard at Dhigurah Holidays"
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </ImageReveal>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. LOCAL ISLAND CHARM VS PRIVATE RESORT                   */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Photo (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ScrollReveal variant="fade-right">
              <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm card-hover-lift">
                <ImageReveal delay={100} className="aspect-[4/3] bg-[#F5F0E7] rounded-[2px]">
                  <Image
                    src="/images/img_8cd6afe3784e.jpg"
                    alt="Dhigurah shoreline where white sand meets turquoise water"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </ImageReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Copy (6 cols) */}
          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block">
              THE VALUE OF LOCAL TRAVEL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#12343B] leading-tight">
              A Deeper Connection to the Maldives
            </h2>
            <div className="space-y-4 text-[#242B2A] text-sm md:text-base leading-relaxed font-light">
              <p>
                Staying on an inhabited island provides a dimension of travel that commercial resort
                islands simply cannot offer:
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#242B2A]">
                <li className="flex items-start gap-3 p-3 rounded-[4px] bg-[#F5F0E7]/40 border border-[#E5E2DA]/60">
                  <span className="material-symbols-outlined text-[#236653] text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>
                    <strong className="font-semibold text-[#12343B]">Direct Local Economy Support:</strong> Your stay directly benefits Maldivian
                    families, boat crews, village cafes, and local entrepreneurs.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-[4px] bg-[#F5F0E7]/40 border border-[#E5E2DA]/60">
                  <span className="material-symbols-outlined text-[#236653] text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>
                    <strong className="font-semibold text-[#12343B]">World-Class Marine Access:</strong> You share the exact same South Ari waters,
                    whale shark feeding zones, and manta thilas as luxury resorts without artificial markups.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-[4px] bg-[#F5F0E7]/40 border border-[#E5E2DA]/60">
                  <span className="material-symbols-outlined text-[#236653] text-lg shrink-0 mt-0.5">check_circle</span>
                  <span>
                    <strong className="font-semibold text-[#12343B]">Genuine Cultural Exchange:</strong> Stroll through village lanes, hear the gentle
                    island rhythms drift over the palms, and learn about maritime traditions directly from islanders.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. RESPONSIBLE TRAVEL & ISLAND GUIDANCE                   */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-[#F5F0E7]/50 border-t border-[#E5E2DA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <ScrollReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2">
              RESPECTFUL TRAVEL ETHOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">
              Responsible Living on Dhigurah
            </h2>
            <p className="text-[#6F7773] text-sm md:text-base mt-3 leading-relaxed font-light">
              As Dhigurah is an inhabited Maldivian island, we encourage visitors to embrace a respectful
              and mindful travel culture:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal variant="fade-up" delay={100} className="h-full">
              <div className="bg-[#FCFBF8] p-6 md:p-8 border border-[#E5E2DA] rounded-[4px] shadow-sm space-y-3 h-full card-hover-lift">
                <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                  <span className="material-symbols-outlined">pedal_bike</span>
                </div>
                <h3 className="font-serif text-xl text-[#12343B]">Island Life &amp; Living Style</h3>
                <p className="text-xs sm:text-sm text-[#242B2A] leading-relaxed font-light">
                  Life on Dhigurah moves at a peaceful, natural tempo. Sandy pathways replace paved
                  roads, bicycles are the favorite way to explore, and days unfold between shaded palm
                  groves, warm community smiles, and quiet turquoise shores.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200} className="h-full">
              <div className="bg-[#FCFBF8] p-6 md:p-8 border border-[#E5E2DA] rounded-[4px] shadow-sm space-y-3 h-full card-hover-lift">
                <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <h3 className="font-serif text-xl text-[#12343B]">Coral &amp; Marine Ethics</h3>
                <p className="text-xs sm:text-sm text-[#242B2A] leading-relaxed font-light">
                  Please wear reef-safe sunscreen, never stand on living coral formations, and maintain a
                  respectful 3–4 meter distance when swimming alongside whale sharks and sea turtles.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={300} className="h-full">
              <div className="bg-[#FCFBF8] p-6 md:p-8 border border-[#E5E2DA] rounded-[4px] shadow-sm space-y-3 h-full card-hover-lift">
                <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                  <span className="material-symbols-outlined">local_bar</span>
                </div>
                <h3 className="font-serif text-xl text-[#12343B]">Local Island Laws</h3>
                <p className="text-xs sm:text-sm text-[#242B2A] leading-relaxed font-light">
                  In accordance with Maldivian national law, alcohol and pork products are not permitted on
                  inhabited local islands, fostering a peaceful, family-friendly sanctuary.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
