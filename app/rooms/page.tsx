import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";

export const metadata: Metadata = {
  title: "Rooms & Accommodation | Dhigurah Holidays Maldives",
  description:
    "Rest easy in our quiet, air-conditioned guest rooms at Dhigurah Holidays. Featuring garden courtyard views, private ensuite bathrooms, king beds, and free Wi-Fi.",
};

const CONFIRMED_AMENITIES = [
  {
    icon: "mode_fan",
    name: "Air Conditioning",
    desc: "Quiet individual climate control plus silent overhead ceiling fans for peaceful rest.",
  },
  {
    icon: "shower",
    name: "Private Ensuite Bathroom",
    desc: "Ensuite bathroom featuring heated freshwater rainfall shower and organic island soaps.",
  },
  {
    icon: "wifi",
    name: "Free High-Speed Wi-Fi",
    desc: "Reliable fiber connectivity throughout the guest rooms and peaceful garden areas.",
  },
  {
    icon: "local_cafe",
    name: "Tea & Coffee Amenities",
    desc: "Electric kettle with complimentary tea selections, coffee, and fresh daily drinking water.",
  },
  {
    icon: "kitchen",
    name: "In-Room Refrigerator",
    desc: "Compact mini refrigerator for chilling tropical fruit, personal snacks, and beverages.",
  },
  {
    icon: "lock",
    name: "Safety Deposit Box",
    desc: "Secure electronic safe in the wardrobe for passports, diving logbooks, and valuables.",
    hideOnMobile: true,
  },
  {
    icon: "yard",
    name: "Private Patio & Garden Views",
    desc: "Ground-level verandah overlooking lush tropical foliage, palms, and flowering plants.",
    hideOnMobile: true,
  },
  {
    icon: "pedal_bike",
    name: "Complimentary Bicycles",
    desc: "Traditional cruiser bikes available for leisurely island rides down shaded sandy lanes.",
    hideOnMobile: true,
  },
];

export default function RoomsPage() {
  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-14 sm:pb-16 md:pb-20 lg:pb-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Typography & Actions Column (5 cols) */}
          <ScrollReveal variant="fade-up" className="lg:col-span-5 order-1 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="inline-block w-8 h-px bg-[#236653]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#236653]">
                LOCAL ISLAND GUESTHOUSE
              </span>
            </div>

            {/* Editorial Heading */}
            <h1 className="font-serif text-[32px] sm:text-[42px] md:text-5xl lg:text-[54px] xl:text-[58px] text-[#12343B] leading-[1.08] tracking-tight max-w-lg">
              Rest Easy,<br />
              <span className="italic font-normal">Island Style</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#6F7773] text-sm sm:text-[15px] md:text-base leading-relaxed max-w-md sm:max-w-lg font-light">
              Settle into a comfortable island guesthouse, wake to tropical surroundings, and enjoy an easygoing stay just moments from Dhigurah&apos;s white-sand beach.
            </p>

            {/* Aligned Actions */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="btn-tactile h-12 px-7 inline-flex items-center justify-center bg-[#12343B] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#236653] active:bg-[#12343B] shadow-sm rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] focus-visible:ring-offset-2 shrink-0 group select-none"
              >
                <span>ASK ABOUT YOUR STAY</span>
                <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">east</span>
              </Link>
              <a
                href="#specs"
                className="btn-tactile h-12 px-3 inline-flex items-center justify-center self-center sm:self-auto gap-2 text-xs font-semibold uppercase tracking-widest text-[#12343B] hover:text-[#236653] border-b border-[#12343B]/30 hover:border-[#236653] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12343B] focus-visible:ring-offset-2 group shrink-0 select-none"
              >
                <span>VIEW ROOM SPECIFICATIONS</span>
                <span className="material-symbols-outlined text-base group-hover:translate-y-1 transition-transform duration-200" aria-hidden="true">
                  arrow_downward
                </span>
              </a>
            </div>

            {/* Polished Statistics */}
            <div className="pt-6 sm:pt-7 border-t border-[#E5E2DA] flex items-center gap-6 sm:gap-8 text-[#242B2A]">
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#12343B] leading-none mb-1.5">
                  04
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6F7773] font-medium leading-tight">
                  Exclusive Guest Rooms
                </span>
              </div>
              <div className="h-9 w-px bg-[#E5E2DA] self-center" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl text-[#12343B] leading-none mb-1.5">
                  2 Min
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6F7773] font-medium leading-tight">
                  Stroll to White Sand Beach
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Imagery Column (7 cols) */}
          <div className="lg:col-span-7 order-2 relative">
            <ScrollReveal variant="fade-left" delay={150}>
              <div className="relative bg-white p-2.5 sm:p-3 md:p-3.5 border border-[#E5E2DA] passe-partout shadow-sm card-hover-lift rounded-[4px]">
                <ImageReveal delay={100} className="aspect-[16/10] sm:aspect-[4/3] bg-[#F5F0E7]">
                  <Image
                    src="/images/Bedroom_with_garden_courtyard_view_2K_20261011204034.jpg"
                    alt="Deluxe guest bedroom at Dhigurah Holidays with king bed, macrame decor, and open veranda doors overlooking tropical garden courtyard"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-center"
                  />
                </ImageReveal>

                {/* Caption Bar */}
                <div className="pt-2.5 pb-1 px-1 flex justify-between items-center text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-wider">
                  <span>SOUTH ARI ATOLL ARCHITECTURE</span>
                  <span>FIGURE 01 — MORNING LIGHT</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ROOM SHOWCASE & SPECIFICATIONS                         */}
      {/* ========================================================= */}
      <section id="specs" className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 md:py-24 bg-[#F5F0E7] border-y border-[#E5E2DA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up" className="max-w-2xl mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2 sm:mb-2.5">
              SANCTUARY SHOWCASE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#12343B] leading-tight">
              Deluxe Double Room with Garden View
            </h2>
            <div className="w-14 h-px bg-[#236653]/60 mt-3 sm:mt-3.5 mb-4 sm:mb-5" aria-hidden="true" />
            <p className="max-w-xl text-[#242B2A]/85 text-sm md:text-[15px] leading-relaxed font-light">
              Thoughtfully crafted for deep rest after full days spent snorkeling along outer reefs.
              Constructed with high ceilings to encourage airflow, cool tiled floors, and immediate
              connections to the lush tropical garden courtyard.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
            {/* Left: Room Specifications Panel (5 cols) */}
            <ScrollReveal variant="fade-right" className="lg:col-span-5 bg-white p-6 sm:p-7 md:p-8 border border-[#E5E2DA] shadow-sm flex flex-col justify-between card-hover-lift rounded-[4px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6F7773] font-semibold block mb-1">
                  SPECIFICATIONS
                </span>
                <h3 className="font-serif text-xl text-[#12343B] mb-5">Room Specifications</h3>
                <dl className="divide-y divide-[#E5E2DA]/60 text-xs sm:text-[13px]">
                  <div className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6F7773] shrink-0">Bedding Configuration</dt>
                    <dd className="font-medium text-[#12343B] text-right">1 Extra-Comfort King Bed</dd>
                  </div>
                  <div className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6F7773] shrink-0">Confirmed Occupancy</dt>
                    <dd className="font-medium text-[#12343B] text-right">2 Adults (+1 Child on request)</dd>
                  </div>
                  <div className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6F7773] shrink-0">Room Aspect</dt>
                    <dd className="font-medium text-[#12343B] text-right">Direct Tropical Garden Courtyard</dd>
                  </div>
                  <div className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6F7773] shrink-0">Flooring</dt>
                    <dd className="font-medium text-[#12343B] text-right">Cool Polished Sand-Stone Tile</dd>
                  </div>
                  <div className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4">
                    <dt className="text-[#6F7773] shrink-0">Climate</dt>
                    <dd className="font-medium text-[#12343B] text-right">Air Conditioning + Ceiling Fan</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-6 mt-5 sm:mt-6 border-t border-[#E5E2DA]">

                <Link
                  href="/contact?topic=Accommodation"
                  className="btn-tactile w-full h-12 inline-flex items-center justify-center gap-2 bg-[#12343B] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#236653] active:bg-[#12343B] transition-colors duration-200 rounded-[4px] select-none group"
                >
                  <span>INQUIRE FOR THIS ROOM</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">east</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Cohesive Photo Gallery Composition (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Upper Left: Authentic Ensuite Rain Shower */}
              <ScrollReveal variant="fade-up" delay={100}>
                <div className="bg-white p-2.5 sm:p-3 border border-[#E5E2DA] shadow-sm card-hover-lift rounded-[4px]">
                  <ImageReveal delay={50} className="aspect-[16/10] sm:aspect-[4/3] bg-[#F5F0E7]">
                    <Image
                      src="/images/img_83cf4984ab0d.jpg"
                      alt="Ensuite freshwater rain shower and stone vanity with natural courtyard daylight"
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-0.5 text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-wider text-center">
                    ENSUITE FRESHWATER RAIN SHOWER
                  </div>
                </div>
              </ScrollReveal>

              {/* Upper Right: Garden Courtyard Patio */}
              <ScrollReveal variant="fade-up" delay={200}>
                <div className="bg-white p-2.5 sm:p-3 border border-[#E5E2DA] shadow-sm card-hover-lift rounded-[4px]">
                  <ImageReveal delay={100} className="aspect-[16/10] sm:aspect-[4/3] bg-[#F5F0E7]">
                    <Image
                      src="/images/img_7ce8d476daf0.jpg"
                      alt="Tropical garden courtyard patio outside guest rooms with wooden sun loungers"
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-0.5 text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-wider text-center">
                    GARDEN COURTYARD PATIO
                  </div>
                </div>
              </ScrollReveal>

              {/* Lower Wide: Exterior Pathway */}
              <ScrollReveal variant="fade-up" delay={300} className="sm:col-span-2">
                <div className="bg-white p-2.5 sm:p-3 border border-[#E5E2DA] shadow-sm card-hover-lift rounded-[4px]">
                  <ImageReveal delay={150} className="aspect-[16/9] bg-[#F5F0E7]">
                    <Image
                      src="/images/img_940631fe27ec.jpg"
                      alt="Shaded garden path approaching Dhigurah Holidays guest accommodation"
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover object-center"
                    />
                  </ImageReveal>
                  <div className="pt-2.5 pb-0.5 text-[10px] sm:text-[11px] text-[#6F7773] uppercase tracking-wider text-center">
                    PALM-CANOPY ACCESS PATH TO ROOMS
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Confirmed Amenities Grid */}
          <ScrollReveal variant="fade-up" className="bg-transparent sm:bg-white p-0 sm:p-8 md:p-12 border-0 sm:border sm:border-[#E5E2DA] shadow-none sm:shadow-sm rounded-none sm:rounded-[4px]">
            <span className="text-[11px] uppercase tracking-wider text-[#236653] font-semibold block mb-1.5 sm:mb-2">
              CAREFULLY APPOINTED
            </span>
            <h3 className="font-serif text-[32px] sm:text-2xl text-[#12343B] leading-[1.1] sm:leading-tight mb-5 sm:mb-8">
              Confirmed In-Room Amenities
            </h3>
            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 min-[390px]:gap-3.5 sm:gap-6 lg:gap-8">
              {CONFIRMED_AMENITIES.map((amenity) => (
                <div
                  key={amenity.name}
                  className={`group bg-white sm:bg-transparent p-4 border border-[#E5E2DA] sm:border-transparent sm:hover:border-[#E5E2DA] sm:hover:bg-[#F5F0E7]/40 rounded-[8px] sm:rounded-[4px] shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:shadow-none transition-all duration-300 flex-col h-full ${
                    amenity.hideOnMobile ? "hidden sm:flex" : "flex"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[#236653] text-[26px] sm:text-3xl transition-transform duration-300 group-hover:scale-110 inline-block mb-2.5 select-none"
                    aria-hidden="true"
                  >
                    {amenity.icon}
                  </span>
                  <h4 className="font-serif text-[17px] sm:text-base text-[#12343B] font-medium leading-snug group-hover:text-[#236653] transition-colors mb-1.5 sm:mb-2">
                    {amenity.name}
                  </h4>
                  <p className="text-[14px] sm:text-xs text-[#6F7773] leading-[1.5] sm:leading-relaxed font-light flex-1">
                    {amenity.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SHARED SPACES & GARDEN COURTYARD                       */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal variant="fade-right" className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block">
              GUEST EXPERIENCES &amp; SPACES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B] leading-tight">
              A Quiet Oasis Between Beach Walks
            </h2>
            <div className="space-y-4 text-[#242B2A]/85 text-sm md:text-base leading-relaxed font-light">
              <p>
                Outside the comfort of your private room, our landscaped garden courtyard offers an open-air
                sanctuary surrounded by native Maldivian flora, breadfruit trees, and flowering frangipani.
              </p>
              <p>
                Sip freshly brewed coffee in shaded outdoor seating areas, rinse off salt after an ocean swim,
                or grab one of our complimentary bicycles to explore the narrow sandy pathways of Dhigurah
                village.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/about"
                className="btn-tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#12343B] hover:text-[#236653] border-b border-[#12343B] pb-1 group"
              >
                <span>LEARN MORE ABOUT OUR GUESTHOUSE</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">east</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-left" delay={150}>
              <div className="bg-white p-3 md:p-4 border border-[#E5E2DA] passe-partout tilt-right card-hover-lift rounded-[4px]">
                <ImageReveal delay={100} className="aspect-[4/3] bg-[#F5F0E7]">
                  <Image
                    src="/images/img_f1833703f81e.jpg"
                    alt="Dusk courtyard at Dhigurah Holidays guesthouse"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="pt-3 pb-1 px-1 flex justify-between items-center text-[11px] text-[#6F7773] uppercase tracking-wider">
                  <span>TERRACE &amp; COURTYARD GARDENS</span>
                  <span>WARM AMBER EVENINGS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ACCOMMODATION INQUIRY SECTION                          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#FAF7F2] border-t border-[#E5E2DA] overflow-hidden">
        <ScrollReveal variant="fade-up" className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block">
            PLAN YOUR DATES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#12343B]">
            Looking for Your Dates?
          </h2>
          <p className="text-[#6F7773] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Send us your preferred dates and guest details, and contact the property to ask about room
            options, current seasonal rates, and seamless transfer assistance.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?topic=Accommodation"
              className="btn-tactile inline-flex items-center gap-2 bg-[#12343B] text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#236653] shadow-sm rounded-[4px] select-none group"
            >
              <span>MAKE AN INQUIRY</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-200">east</span>
            </Link>
            <a
              href="tel:+9607774749"
              className="btn-tactile border border-[#12343B] text-[#12343B] px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#12343B] hover:text-white rounded-[4px] select-none inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">phone_in_talk</span>
              CALL +960 777-4749
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
