import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import ParallaxImage from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "Experiences & Marine Safaris | Dhigurah Holidays Maldives",
  description:
    "Discover whale shark excursions in South Ari Atoll, reef snorkelling, the 3km southern sandbank, and traditional Dhoni boat trips on Dhigurah island.",
};

export default function ExperiencesPage() {
  return (
    <div className="w-full bg-[#FCFBF8]">
      {/* ========================================================= */}
      {/* 1. CINEMATIC EXPERIENCES HERO                             */}
      {/* ========================================================= */}
      <section className="relative w-full min-h-[calc(100svh-64px)] sm:min-h-[580px] sm:max-h-[880px] sm:h-[calc(100vh-68px)] md:h-[calc(100vh-72px)] sm:h-[calc(100dvh-68px)] md:h-[calc(100dvh-72px)] flex items-end overflow-hidden">
        {/* Full-width High-Resolution Aerial Photography with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <ParallaxImage speed={0.14} className="w-full h-full">
            <Image
              src="/images/dhigurah_hero_maldives.jpg"
              alt="Aerial panorama of Dhigurah island sand spit, turquoise lagoon and coral reefs in South Ari Atoll"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[58%_92%] sm:object-[22%_center] md:object-center transition-transform duration-1000 ease-out"
            />
          </ParallaxImage>
        </div>

        {/* Multi-stage dark gradient: strong at the bottom behind text & CTAs, delicate higher up */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#12343B]/95 via-[#12343B]/60 via-45% to-[#12343B]/15 sm:bg-gradient-to-tr sm:from-[#12343B]/95 sm:via-[#12343B]/55 sm:via-50% sm:to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Editorial Content Group: Staggered entrance sequence, positioned cleanly on mobile */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-12 sm:pt-20 md:pt-24 pb-11 sm:pb-12 md:pb-16">
          <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start w-full">
            {/* Eyebrow Label with subtle accent marker */}
            {/* Eyebrow Label with subtle accent marker (Desktop only, hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2.5 mb-2.5 sm:mb-4 animate-hero-headline" style={{ animationDelay: "120ms" }}>
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#6CAFC4] shrink-0" aria-hidden="true" />
              <span className="text-[#6CAFC4] text-[11px] sm:text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] leading-none">
                ISLAND ADVENTURES &amp; OCEAN PURSUITS
              </span>
            </div>

            {/* Main Headline: Matching Home page responsive clamp & leading */}
            <h1 className="w-full text-white font-serif text-[clamp(2.35rem,5.2vw+1.2rem,2.7rem)] sm:text-hero-fluid leading-[1.02] sm:leading-[1.04] mb-3 sm:mb-4 tracking-tight max-w-[560px] lg:max-w-[800px] animate-hero-headline" style={{ animationDelay: "240ms" }}>
              <span className="block sm:inline md:block">A World of Blue,</span>{" "}
              <span className="block sm:inline md:block">
                <span className="italic font-normal">Beyond Your<br className="sm:hidden" /> Doorstep</span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[#FCFBF8]/95 text-[16px] min-[390px]:text-[17px] sm:text-lg md:text-[19px] max-w-xl mb-5 sm:mb-7 md:mb-8 font-light leading-[1.48] animate-hero-sub" style={{ animationDelay: "380ms" }}>
              Discover quiet beaches, extraordinary marine life, and unforgettable island adventures from Dhigurah.
            </p>

            {/* Calls to Action: Matching Home page mobile stacked CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto animate-hero-cta" style={{ animationDelay: "520ms" }}>
              <a
                href="#lagoon-days"
                className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-[52px] px-7 sm:px-8 inline-flex items-center justify-center bg-[#FCFBF8] text-[#12343B] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.11em] sm:tracking-[0.15em] hover:bg-white hover:shadow-[0_6px_20px_rgba(18,52,59,0.2)] active:bg-[#eae3d6] focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 group rounded-[4px] select-none transition-all box-border"
              >
                <span>EXPLORE EXPERIENCES</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-y-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <Link
                href="/about"
                className="btn-tactile w-full sm:w-auto h-[54px] min-[390px]:h-[56px] sm:h-[52px] px-7 sm:px-8 inline-flex items-center justify-center bg-transparent border border-[#FCFBF8]/80 text-[#FCFBF8] text-xs sm:text-[13px] font-semibold uppercase tracking-[0.11em] sm:tracking-[0.15em] hover:bg-white/10 hover:border-white active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0 group rounded-[4px] select-none transition-all box-border"
              >
                <span>DISCOVER THE ISLAND</span>
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
      {/* 2. SECTION 01: BEACH & LAGOON DAYS                       */}
      {/* ========================================================= */}
      <section id="lagoon-days" className="pt-12 sm:pt-20 md:pt-24 pb-12 sm:pb-20 md:pb-24 bg-[#F5F0E7]/50 border-t border-[#E5E2DA] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 min-[360px]:px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            {/* Left Content Column */}
            <ScrollReveal variant="fade-up" className="lg:col-span-5 flex flex-col items-start">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[#236653] font-semibold">
                  01 / SHORELINE SANCTUARY
                </span>
                <span className="w-7 h-px bg-[#236653]/60" aria-hidden="true" />
              </div>

              {/* Section Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#12343B] leading-[1.12] tracking-tight mb-3.5 sm:mb-4">
                Beach and Lagoon Days
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-[#242B2A] text-sm sm:text-base leading-relaxed max-w-lg mb-5 sm:mb-6 font-light">
                Dhigurah is celebrated for having one of the longest continuous white sand beaches in the
                Maldives. Bask in crystal-clear shallows that stretch as far as the eye can see, with
                dedicated bikini beach areas reserved for sunbathing in serene privacy.
              </p>

              {/* Refined Feature Panel */}
              <div className="w-full max-w-lg bg-[#FCFBF8] border border-[#E5E2DA] p-[18px] min-[360px]:p-5 rounded-[4px] shadow-[0_2px_12px_rgba(18,52,59,0.04)] mb-6 sm:mb-7">
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#236653] text-[20px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    wb_sunny
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#242B2A] leading-relaxed">
                    <strong className="font-semibold text-[#12343B]">Shaded Shoreline</strong> — Soft sands and natural palm cover along dedicated beach areas.
                  </p>
                </div>
                <div className="h-px bg-[#E5E2DA]/80 w-full my-3 sm:my-3.5" aria-hidden="true" />
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#236653] text-[20px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    water_drop
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#242B2A] leading-relaxed">
                    <strong className="font-semibold text-[#12343B]">Protected Inner Lagoon</strong> — Calm turquoise shallows with mild currents, ideal for swimming.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <Link
                href="/contact?topic=Ocean%20Excursions"
                className="btn-tactile inline-flex items-center gap-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#12343B] hover:text-[#236653] border-b border-[#12343B]/60 hover:border-[#236653] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#236653]"
              >
                <span>ASK ABOUT THIS EXPERIENCE</span>
                <span
                  className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200"
                  aria-hidden="true"
                >
                  east
                </span>
              </Link>
            </ScrollReveal>

            {/* Right Image Composition */}
            <div className="lg:col-span-7 relative w-full mt-0 lg:mt-0">
              <ScrollReveal variant="fade-left" delay={150}>
                <div className="relative max-w-xl mx-auto lg:ml-auto w-full">
                  {/* Dominant Main Beach Photograph */}
                  <div className="bg-[#FCFBF8] p-2.5 sm:p-3 md:p-3.5 border border-[#E5E2DA] shadow-sm rounded-[4px] card-hover-lift">
                    <ImageReveal delay={100} className="aspect-[4/3] w-full bg-[#F5F0E7]">
                      <Image
                        src="/images/dhigurah_beach_loungers_sanctuary.jpg"
                        alt="Pristine white sand beach loungers under coconut palms overlooking turquoise lagoon on Dhigurah"
                        fill
                        sizes="(max-width: 1024px) 100vw, 620px"
                        className="object-cover object-[center_60%]"
                      />
                    </ImageReveal>

                    {/* Main Image Caption */}
                    <div className="pt-2.5 pb-0.5 px-1 flex justify-between items-center text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-[0.12em] font-medium border-t border-[#E5E2DA] mt-2.5">
                      <span>WEST COAST BIKINI BEACH</span>
                    </div>
                  </div>

                  {/* Smaller Overlapping Detail Image: Stacked on narrow screens, restrained overlap on >=380px, desktop intact */}
                  <div className="max-[374px]:relative max-[374px]:mt-3 max-[374px]:max-w-[210px] max-[374px]:ml-auto max-[374px]:rotate-0 min-[375px]:absolute min-[375px]:bottom-9 min-[375px]:right-2.5 min-[375px]:w-32 min-[420px]:w-36 min-[375px]:rotate-1 sm:rotate-2 sm:-bottom-4 md:-bottom-5 sm:-right-4 md:-right-6 sm:w-52 md:w-56 lg:w-60 bg-[#FCFBF8] p-1.5 min-[375px]:p-2 sm:p-2.5 border border-[#E5E2DA] shadow-[0_6px_20px_rgba(18,52,59,0.12)] sm:shadow-[0_8px_28px_rgba(18,52,59,0.14)] rounded-[4px] hover:rotate-0 hover:scale-[1.02] transition-transform duration-300 z-10 origin-bottom-right">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F0E7]">
                      <Image
                        src="/images/dhigurah_lagoon_clarity_detail.jpg"
                        alt="Sunlit crystal clear turquoise water ripples in Dhigurah shallow lagoon"
                        fill
                        sizes="(max-width: 640px) 150px, (max-width: 1024px) 230px, 250px"
                        className="object-cover object-center"
                      />
                    </div>
                    <p className="text-[9.5px] min-[375px]:text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-[0.14em] font-medium mt-1 min-[375px]:mt-1.5 text-center">
                      LAGOON CLARITY
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 02: WHALE SHARK EXCURSIONS                     */}
      {/* ========================================================= */}
      <section id="whale-sharks" className="py-20 md:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-right">
              <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm tilt-left card-hover-lift">
                <ImageReveal delay={100} className="aspect-[16/10] bg-[#12343B]">
                  <Image
                    src="/images/img_aa5e62c816c0.jpg"
                    alt="Wild whale shark swimming gently alongside snorkelers in South Ari Atoll"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#12343B]/85 text-white px-3 py-1 text-[11px] uppercase tracking-wider backdrop-blur-sm z-10 rounded-[2px]">
                    SAMPA MARINE HABITAT
                  </div>
                </ImageReveal>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-wider text-[#236653] font-semibold">
                02 / OCEAN GIANTS
              </span>
              <span className="w-8 h-px bg-[#236653]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">
              Whale Shark Excursions
            </h2>
            <div className="space-y-4 text-[#242B2A] text-sm md:text-base leading-relaxed">
              <p>
                Dhigurah lies immediately adjacent to the South Ari Marine Protected Area (SAMPA), one of
                the world&apos;s few coastal zones where juvenile and adult whale sharks aggregate throughout
                the entire year.
              </p>
              <p className="hidden sm:block">
                Join locally organized boat excursions led by experienced Maldivian captains. While sightings
                are never guaranteed in open wild waters, Dhigurah offers one of the highest encounter
                frequencies on the planet.
              </p>
            </div>
            <Link
              href="/contact?topic=Ocean%20Excursions"
              className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#12343B] hover:text-[#236653] border-b border-[#12343B] pb-1 group"
            >
              <span>INQUIRE ABOUT SAFARIS</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">
                east
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 03: SNORKELLING & CORAL DIVING                 */}
      {/* ========================================================= */}
      <section id="coral-reefs" className="py-20 md:py-28 bg-[#F5F0E7]/50 border-y border-[#E5E2DA] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fade-right" className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-wider text-[#236653] font-semibold">
                  03 / LIVING REEFS
                </span>
                <span className="w-8 h-px bg-[#236653]"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">
                Snorkelling &amp; Diving
              </h2>
              <div className="space-y-4 text-[#242B2A] text-sm md:text-base leading-relaxed">
                <p>
                  The warm waters around Dhigurah conceal a thriving marine ecosystem. Swim alongside hawksbill
                  turtles, watch manta rays hover gracefully over cleaning stations, and admire colorful
                  anthias fluttering over staghorn corals.
                </p>
                <p className="hidden sm:block">
                  Certified local dive centers on the island offer PADI courses and daily boat departures to
                  celebrated thilas (submerged coral pinnacles) including Kudarah Thila and Broken Rock.
                </p>
              </div>
              <Link
                href="/contact?topic=Ocean%20Excursions"
                className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#12343B] hover:text-[#236653] border-b border-[#12343B] pb-1 group"
              >
                <span>ASK ABOUT REEF DIVE PARTNERS</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">
                  east
                </span>
              </Link>
            </ScrollReveal>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <ScrollReveal variant="fade-left" delay={150}>
                <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm tilt-right card-hover-lift">
                  <ImageReveal delay={100} className="aspect-[16/10] bg-[#12343B]">
                    <Image
                      src="/images/Sea_turtle_swimming_over_reef_2K_20261012064637.jpg"
                      alt="Sea turtle swimming gracefully over vibrant coral reef surrounded by tropical anthias fish in South Ari Atoll"
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
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
      {/* 5. SECTION 04: THE SOUTHERN SANDBANK                      */}
      {/* ========================================================= */}
      <section id="the-sandbank" className="py-20 md:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-right">
              <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm card-hover-lift">
                <ImageReveal delay={100} className="aspect-[16/10] bg-[#F5F0E7]">
                  <Image
                    src="/images/img_88f7d91e8d1e.jpg"
                    alt="Dhigurah elongated sandbank reaching toward distant lagoon waters"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="pt-3 pb-1 px-1 flex justify-between items-center text-[11px] text-[#6F7773] uppercase tracking-wider">
                  <span>NATURAL CORAL FORMATION</span>
                  <span>SOUTHERN TIP OF DHIGURAH</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-left" delay={150} className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-wider text-[#236653] font-semibold">
                04 / ISLAND EXTENSION
              </span>
              <span className="w-8 h-px bg-[#236653]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">The Southern Sandbank</h2>
            <div className="space-y-4 text-[#242B2A] text-sm md:text-base leading-relaxed">
              <p>
                At the southern extremity of Dhigurah, the jungle canopy tapers into an immense, unbroken
                finger of powdery coral sand that tapers into turquoise shallows towards LUX* South Ari Atoll.
              </p>
              <p className="hidden sm:block">
                Walking to the tip is one of the island&apos;s signature meditative journeys — an uninterrupted
                stroll accompanied only by rustling palm fronds, gentle tide water, and coastal sea birds.
              </p>
            </div>

            <Link
              href="/contact?topic=General%20Inquiries"
              className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#12343B] hover:text-[#236653] border-b border-[#12343B] pb-1 group"
            >
              <span>INQUIRE ABOUT TIDES &amp; ACCESS</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">
                east
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SECTION 05 & 06: CYCLING & SUNSET CHARTERS             */}
      {/* ========================================================= */}
      <section id="island-paths" className="py-20 md:py-28 bg-[#F5F0E7]/50 border-t border-[#E5E2DA] overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2">
              ISLAND RHYTHMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">
              Cycling Paths &amp; Traditional Charters
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Cycling */}
            <ScrollReveal variant="fade-up" delay={100} className="h-full">
              <div className="bg-[#FCFBF8] p-6 md:p-8 border border-[#E5E2DA] rounded-[4px] shadow-sm flex flex-col justify-between h-full card-hover-lift">
                <div>
                  <ImageReveal delay={50} className="aspect-[16/10] mb-6 bg-[#F5F0E7] rounded-[2px]">
                    <Image
                      src="/images/img_940631fe27ec.jpg"
                      alt="Bicycle leaning against palm tree on shaded sand lane"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover"
                    />
                  </ImageReveal>
                  <span className="text-xs uppercase tracking-wider text-[#236653] font-semibold block mb-2">
                    EXP. 05 — VILLAGE PATHWAYS
                  </span>
                  <h3 className="font-serif text-2xl text-[#12343B] mb-3">Island Walks &amp; Cycling</h3>
                  <p className="text-sm text-[#242B2A] leading-relaxed mb-6 font-light">
                    Experience everyday Maldivian life at your own pace. Wander along sandy village streets lined
                    with traditional coral-stone homes, browse small local grocery stores, taste freshly harvested
                    coconuts, and stop at quiet harbor benches to watch the ocean breeze.
                  </p>
                </div>
                <Link
                  href="/contact?topic=General%20Inquiries"
                  className="btn-tactile text-xs font-semibold uppercase tracking-wider text-[#12343B] hover:text-[#236653] inline-flex items-center gap-1.5 py-1 group"
                >
                  <span>Ask About Complimentary Bicycles</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">east</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Sunset Dhoni Boat */}
            <ScrollReveal id="sunset-charters" variant="fade-up" delay={200} className="h-full scroll-mt-20">
              <div className="bg-[#FCFBF8] p-6 md:p-8 border border-[#E5E2DA] rounded-[4px] shadow-sm flex flex-col justify-between h-full card-hover-lift">
                <div>
                  <ImageReveal delay={100} className="aspect-[16/10] mb-6 bg-[#F5F0E7] rounded-[2px]">
                    <Image
                      src="/images/Aerial_view_of_Dhigurah_Island_2K_20261012065139.jpg"
                      alt="Panoramic aerial drone view of Dhigurah island, sand spit, and turquoise lagoon in South Ari Atoll"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className="object-cover"
                    />
                  </ImageReveal>
                  <span className="text-xs uppercase tracking-wider text-[#236653] font-semibold block mb-2">
                    EXP. 06 — LAGOON SUNSET
                  </span>
                  <h3 className="font-serif text-2xl text-[#12343B] mb-3">Traditional Sunset Charters</h3>
                  <p className="text-sm text-[#242B2A] leading-relaxed mb-6 font-light">
                    Set sail on a traditional handcrafted wooden Dhoni as the equatorial sun dips below the
                    horizon, painting the Indian Ocean in shades of amber, violet, and rose. Inquire with our
                    hosts about private or shared evening boat rides subject to weather.
                  </p>
                </div>
                <Link
                  href="/contact?topic=Ocean%20Excursions"
                  className="btn-tactile text-xs font-semibold uppercase tracking-wider text-[#12343B] hover:text-[#236653] inline-flex items-center gap-1.5 py-1 group"
                >
                  <span>Ask About Sunset Charters</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">east</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
