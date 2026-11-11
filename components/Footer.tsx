import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import HotelLogo from "./HotelLogo";

export default function Footer() {
  return (
    <footer className="bg-[#12343B] text-white pt-16 md:pt-24 pb-12 border-t border-[#1b4952]">
      {/* Top Pre-Footer Editorial Banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mb-16 md:mb-20">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="bg-[#1b4952] p-8 md:p-14 border border-[#236653]/60 flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-[4px] transition-all duration-300 hover:border-[#6CAFC4]/40">
            <div className="max-w-2xl">
              <span className="text-[#6CAFC4] text-xs uppercase tracking-widest block mb-2 font-medium">
                BEGIN YOUR JOURNEY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white mb-3">
                Your Island Escape Starts with a Conversation
              </h2>
              <p className="text-[#E5E2DA] text-sm md:text-base leading-relaxed font-light">
                Tell us when you hope to visit and what kind of island experience you have in mind.
                We&apos;ll help you make an inquiry about your stay.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FCFBF8] text-[#12343B] px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#6CAFC4] hover:text-white transition-all duration-200 btn-tactile group rounded-[4px]"
              >
                <span>PLAN YOUR STAY</span>
                <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform duration-200">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 border-b border-[#1b4952]">
          {/* Column 1: Brand & Atoll Context (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <HotelLogo className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 text-[#6CAFC4] shrink-0" />
              <span className="font-serif text-xl font-medium tracking-wider text-white">
                DHIGURAH HOLIDAYS
              </span>
            </div>
            <p className="text-[#E5E2DA]/80 text-sm leading-relaxed max-w-sm font-light">
              An intimate guesthouse retreat on the slender island of Dhigurah, nestled within South Ari Atoll.
              Authentic Maldivian island living, gentle rhythms, and direct access to world-renowned marine sanctuaries.
            </p>
            <div className="pt-2 text-xs text-[#6CAFC4] tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#236653]"></span>
              <span>SAMPA Zone • Whale Shark Sanctuary</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6CAFC4]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E5E2DA]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Guest Rooms &amp; Amenities
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Island Experiences &amp; Diving
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Visual Gallery &amp; Archive
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Guesthouse
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Stay Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Property Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6CAFC4]">
              Verified Contact
            </h3>
            <div className="text-sm text-[#E5E2DA] space-y-3">
              <div>
                <span className="text-xs text-[#9fb3b0] block uppercase tracking-wider">Location</span>
                <p className="text-white">Kaluhoh koaru hingun, Dhigurah 00070</p>
                <p className="text-xs text-[#E5E2DA]/70">South Ari Atoll, Republic of Maldives</p>
              </div>
              <div>
                <span className="text-xs text-[#9fb3b0] block uppercase tracking-wider">Telephone</span>
                <a
                  href="tel:+9607774749"
                  className="text-white hover:text-[#6CAFC4] transition-colors font-medium text-base inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm text-[#6CAFC4]">call</span>
                  +960 777-4749
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Dhigurah+Holidays+Maldives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-[#6CAFC4] hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <span className="material-symbols-outlined text-xs">north_east</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9fb3b0]">
          <p>© 2026 Dhigurah Holidays. Registered Maldivian Guesthouse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Inhabited Island Respect</span>
            <span>•</span>
            <span>Marine Life Protection</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Make An Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
