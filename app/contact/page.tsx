import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";

export const metadata: Metadata = {
  title: "Contact & Stay Inquiries | Dhigurah Holidays Maldives",
  description:
    "Get in touch with Dhigurah Holidays. Inquire about room options, whale shark excursions, and domestic speedboat transfers to Dhigurah Island in South Ari Atoll.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FCFBF8]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-12 md:pb-16 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <ScrollReveal variant="fade-up" className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#236653]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#236653] font-semibold">
                DIRECT GUESTHOUSE COMMUNICATION
              </span>
            </div>
            <h1 className="font-serif text-page-title-fluid text-[#12343B] tracking-tight leading-[1.08]">
              Let&apos;s Talk About Your Island Stay
            </h1>
            <p className="text-[#242B2A] text-base md:text-[18px] leading-relaxed max-w-xl font-light">
              Planning a visit to Dhigurah? Share your preferred dates and any questions you have. Get in
              touch to ask about accommodation, facilities, and local experiences.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs uppercase tracking-wider text-[#6F7773]">
              <span className="flex items-center gap-1.5 text-[#236653] font-semibold">
                <span className="material-symbols-outlined text-sm">verified</span> Verified Direct Channel
              </span>
              <span>•</span>
              <span>South Ari Atoll Biosphere</span>
              <span>•</span>
              <span>Local Island Hospitality</span>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-left" delay={150}>
              <div className="bg-[#FCFBF8] p-3 md:p-4 border border-[#E5E2DA] rounded-[4px] shadow-sm tilt-right card-hover-lift">
                <ImageReveal delay={100} className="aspect-[4/3] bg-[#F5F0E7] rounded-[2px]">
                  <Image
                    src="/images/img_88f7d91e8d1e.jpg"
                    alt="Dhigurah sandbank meeting pristine aquamarine waters"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                  />
                </ImageReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TWO-COLUMN CONTACT & INQUIRY SECTION                   */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-[#F5F0E7]/50 border-y border-[#E5E2DA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Verified Property Details (5 cols) */}
            <ScrollReveal variant="fade-right" className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2">
                  LOCAL ANCHORAGE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#12343B]">
                  Island Location &amp; Reach
                </h2>

              </div>

              {/* Property Details Card */}
              <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-6 md:p-8 space-y-6 rounded-[4px] shadow-sm card-hover-lift">
                {/* Property Name */}
                <div className="border-b border-[#E5E2DA] pb-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#6F7773] block">
                    PROPERTY IDENTIFIER
                  </span>
                  <span className="font-serif text-lg text-[#12343B] mt-1 block font-medium">
                    Dhigurah Holidays
                  </span>
                  <span className="text-xs text-[#6F7773]">Registered Boutique Island Guesthouse</span>
                </div>

                {/* Address */}
                <div className="border-b border-[#E5E2DA] pb-4 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#6F7773] block">
                    OFFICIAL ADDRESS
                  </span>
                  <p className="text-sm font-medium text-[#12343B]">
                    Kaluhoh koaru hingun, Dhigurah 00070
                  </p>
                  <p className="text-xs text-[#6F7773]">South Ari Atoll, Republic of Maldives</p>
                </div>

                {/* Verified Telephone */}
                <div className="border-b border-[#E5E2DA] pb-4 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#6F7773] block">
                    VERIFIED DIRECT TELEPHONE
                  </span>
                  <a
                    href="tel:+9607774749"
                    className="btn-tactile font-serif text-xl text-[#12343B] hover:text-[#236653] transition-colors inline-flex items-center gap-2 mt-1"
                  >
                    <span className="material-symbols-outlined text-[#236653] text-xl">
                      phone_in_talk
                    </span>
                    +960 777-4749
                  </a>

                </div>

                {/* Location Map Container */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#236653] block font-semibold">
                        LOCATION &amp; ATOLL MAP
                      </span>
                      <span className="text-xs text-[#6F7773]">Dhigurah Island, South Ari Atoll</span>
                    </div>

                  </div>

                  {/* Google Maps Embed Frame */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[260px] bg-[#F5F0E7] border border-[#E5E2DA] rounded-[4px] overflow-hidden">
                    <iframe
                      title="Dhigurah Holidays Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.232355609266!2d72.9228687286377!3d3.533745881242668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4733001e12d62b%3A0xc9e2e405200e082e!2sDhigurah%20Holidays!5e0!3m2!1sen!2sin!4v1791771559008!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" delay={150}>
                <Suspense
                  fallback={
                    <div className="p-12 bg-[#FCFBF8] border border-[#E5E2DA] rounded-[4px] text-center text-xs uppercase tracking-widest text-[#6F7773]">
                      Loading Inquiry Form...
                    </div>
                  }
                >
                  <InquiryForm />
                </Suspense>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ESSENTIAL ISLAND LOGISTICS & FAQ                       */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
        <ScrollReveal variant="fade-up" className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2">
            ESSENTIAL ISLAND LOGISTICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#12343B]">
            Helpful Notes &amp; Island Guidance
          </h2>
          <p className="text-[#6F7773] text-sm md:text-base mt-2 leading-relaxed font-light">
            From arrival transfers to exploring the sandbank and settling into island life, here is
            practical guidance for your stay on Dhigurah.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal variant="fade-up" delay={100} className="h-full">
            <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-6 md:p-8 space-y-3 h-full rounded-[4px] shadow-sm card-hover-lift">
              <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                <span className="material-symbols-outlined">pedal_bike</span>
              </div>
              <h3 className="font-serif text-lg text-[#12343B]">Island Mobility &amp; Bicycles</h3>
              <p className="text-xs text-[#242B2A] leading-relaxed font-light">
                Dhigurah is delightfully vehicle-free with peaceful sandy lanes flanked by coconut palms.
                The island is effortless to explore on foot or by bicycle, leading directly to secluded
                beaches and the famous southern sandbank.
              </p>
              <div className="pt-2 text-[11px] text-[#236653] uppercase tracking-wider font-semibold">
                Vehicle-Free &amp; Walkable
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} className="h-full">
            <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-6 md:p-8 space-y-3 h-full rounded-[4px] shadow-sm card-hover-lift">
              <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3 className="font-serif text-lg text-[#12343B]">Transfer Scheduling</h3>
              <p className="text-xs text-[#242B2A] leading-relaxed font-light">
                Scheduled speedboats operate on set timetables (morning and afternoon runs from Malé). To secure
                transfers seamlessly, we recommend sharing international arrival flight details at least 3 days in
                advance.
              </p>
              <div className="pt-2 text-[11px] text-[#236653] uppercase tracking-wider font-semibold">
                Pre-Arrival Coordination
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300} className="h-full">
            <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-6 md:p-8 space-y-3 h-full rounded-[4px] shadow-sm card-hover-lift">
              <div className="w-11 h-11 flex items-center justify-center bg-[#F5F0E7] text-[#236653] rounded-[4px]">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="font-serif text-lg text-[#12343B]">Currency &amp; Payments</h3>
              <p className="text-xs text-[#242B2A] leading-relaxed font-light">
                US Dollars (crisp bills without tears or marks) and Maldivian Rufiyaa (MVR) are widely accepted
                on the island. Card facilities are available for room settlement and major dive excursions.
              </p>
              <div className="pt-2 text-[11px] text-[#236653] uppercase tracking-wider font-semibold">
                USD &amp; MVR Accepted
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
