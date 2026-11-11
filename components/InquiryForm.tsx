"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  arrivalDate: string;
  departureDate: string;
  adults: number;
  children: number;
  message: string;
}

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") || searchParams.get("intent") || "Accommodation";

  const resolveTopic = (param: string) => {
    const lower = param.toLowerCase();
    if (lower.includes("beach") || lower.includes("excursion") || lower.includes("whale")) return "Ocean Excursions";
    if (lower.includes("transfer")) return "Island Transfers";
    return "Accommodation";
  };

  const [formData, setFormData] = useState<FormState>(() => ({
    fullName: "",
    email: "",
    phone: "",
    topic: resolveTopic(initialTopic),
    arrivalDate: "",
    departureDate: "",
    adults: 2,
    children: 0,
    message: "",
  }));

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    reference: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit inquiry");
      }

      setSuccessResult({
        reference: json.reference,
        message: json.message,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResult(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      topic: "Accommodation",
      arrivalDate: "",
      departureDate: "",
      adults: 2,
      children: 0,
      message: "",
    });
  };

  if (successResult) {
    return (
      <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-8 md:p-12 shadow-sm rounded-[4px] animate-in fade-in duration-300">
        <div className="flex items-center gap-3 text-[#236653] mb-4">
          <span className="material-symbols-outlined text-3xl">verified</span>
          <span className="text-xs uppercase tracking-widest font-semibold">
            INQUIRY REGISTERED
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-[#12343B] mb-3">
          Thank You, {formData.fullName.split(" ")[0]}
        </h3>
        <p className="text-[#242B2A] text-sm md:text-base leading-relaxed mb-6 font-light">
          {successResult.message}
        </p>

        <div className="bg-[#F5F0E7]/70 border-l-4 border-[#236653] p-5 mb-8 space-y-2 rounded-r-[4px]">
          <div className="flex justify-between items-center text-xs tracking-wider uppercase text-[#6F7773]">
            <span>Reference Identifier</span>
            <span className="font-semibold text-[#12343B] text-sm">{successResult.reference}</span>
          </div>
          {formData.arrivalDate && formData.departureDate && (
            <div className="flex justify-between items-center text-xs text-[#242B2A]">
              <span>Dates:</span>
              <span>
                {formData.arrivalDate} → {formData.departureDate}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center text-xs text-[#242B2A]">
            <span>Guests:</span>
            <span>
              {formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ""}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs text-[#242B2A]">
            <span>Topic:</span>
            <span>{formData.topic}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="btn-tactile h-[50px] px-7 border border-[#12343B] text-[#12343B] text-xs font-semibold uppercase tracking-wider hover:bg-[#12343B] hover:text-white transition-colors rounded-[4px]"
          >
            SEND ANOTHER INQUIRY
          </button>
          <a
            href="tel:+9607774749"
            className="btn-tactile h-[50px] px-7 inline-flex items-center justify-center gap-2 bg-[#F5F0E7] text-[#12343B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E5E2DA] transition-colors rounded-[4px]"
          >
            <span className="material-symbols-outlined text-sm text-[#236653]">phone_in_talk</span>
            CALL DIRECT (+960 777-4749)
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFBF8] border border-[#E5E2DA] p-6 sm:p-8 md:p-10 shadow-sm rounded-[4px]">
      <div className="mb-7">
        <span className="text-xs uppercase tracking-widest text-[#236653] font-semibold block mb-2">
          CURATED STAY INQUIRY
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-[#12343B]">
          Request Stay Details &amp; Rates
        </h3>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 rounded-[4px] animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="material-symbols-outlined text-base text-red-600">error</span>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium"
            >
              FULL NAME <span className="text-[#236653]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full h-[50px] bg-[#F5F0E7]/60 border border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12343B]/30 text-[#242B2A] px-4 text-sm placeholder:text-[#6F7773]/60 transition-all duration-200 rounded-[4px]"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium"
            >
              EMAIL ADDRESS <span className="text-[#236653]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="name@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-[50px] bg-[#F5F0E7]/60 border border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12343B]/30 text-[#242B2A] px-4 text-sm placeholder:text-[#6F7773]/60 transition-all duration-200 rounded-[4px]"
            />
          </div>
        </div>

        {/* Row 2: Phone & Topic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium"
            >
              PHONE NUMBER (OPTIONAL)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 019-2834"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-[50px] bg-[#F5F0E7]/60 border border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12343B]/30 text-[#242B2A] px-4 text-sm placeholder:text-[#6F7773]/60 transition-all duration-200 rounded-[4px]"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="topic"
              className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium"
            >
              PRIMARY INQUIRY TOPIC <span className="text-[#236653]">*</span>
            </label>
            <select
              id="topic"
              required
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full h-[50px] bg-[#F5F0E7]/60 border border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12343B]/30 text-[#242B2A] px-4 text-sm transition-all duration-200 rounded-[4px] cursor-pointer"
            >
              <option value="Accommodation">Accommodation &amp; Room Suites</option>
              <option value="Ocean Excursions">Ocean Excursions &amp; Whale Shark Safaris</option>
              <option value="Island Transfers">Island Transfers &amp; Speedboat Logistics</option>
              <option value="General Inquiries">General Inquiries &amp; Island Lifestyle</option>
            </select>
          </div>
        </div>


        {/* Row 4: Party Size Steppers */}
        <div className="space-y-2">
          <label className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium">
            PARTY SIZE &amp; GUESTS
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Adults */}
            <div className="flex items-center justify-between p-3.5 bg-[#F5F0E7]/50 border border-[#E5E2DA] rounded-[4px] transition-colors hover:border-[#236653]/40">
              <div>
                <div className="text-xs font-semibold uppercase text-[#12343B]">Adults</div>
                <div className="text-[11px] text-[#6F7773]">Age 12 and above</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#E5E2DA] bg-white text-[#12343B] hover:bg-[#F5F0E7] hover:border-[#12343B] active:scale-95 transition-all duration-150 select-none rounded-[4px]"
                  aria-label="Decrease Adults"
                >
                  −
                </button>
                <span className="font-semibold text-[#12343B] w-5 text-center select-none">{formData.adults}</span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, adults: Math.min(10, prev.adults + 1) }))
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#E5E2DA] bg-white text-[#12343B] hover:bg-[#F5F0E7] hover:border-[#12343B] active:scale-95 transition-all duration-150 select-none rounded-[4px]"
                  aria-label="Increase Adults"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between p-3.5 bg-[#F5F0E7]/50 border border-[#E5E2DA] rounded-[4px] transition-colors hover:border-[#236653]/40">
              <div>
                <div className="text-xs font-semibold uppercase text-[#12343B]">Children</div>
                <div className="text-[11px] text-[#6F7773]">Under 12 years</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, children: Math.max(0, prev.children - 1) }))
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#E5E2DA] bg-white text-[#12343B] hover:bg-[#F5F0E7] hover:border-[#12343B] active:scale-95 transition-all duration-150 select-none rounded-[4px]"
                  aria-label="Decrease Children"
                >
                  −
                </button>
                <span className="font-semibold text-[#12343B] w-5 text-center select-none">{formData.children}</span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, children: Math.min(6, prev.children + 1) }))
                  }
                  className="w-9 h-9 flex items-center justify-center border border-[#E5E2DA] bg-white text-[#12343B] hover:bg-[#F5F0E7] hover:border-[#12343B] active:scale-95 transition-all duration-150 select-none rounded-[4px]"
                  aria-label="Increase Children"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider text-[#6F7773] font-medium"
          >
            SPECIAL REQUESTS &amp; INQUIRY NOTES
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your flight timings, dietary preferences, diving ambitions, or any questions regarding transfer schedules..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#F5F0E7]/60 border border-[#E5E2DA] focus:border-[#12343B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#12343B]/30 text-[#242B2A] p-4 text-sm placeholder:text-[#6F7773]/60 transition-all duration-200 rounded-[4px]"
          ></textarea>
        </div>

        {/* Form Notice */}


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn-tactile w-full md:w-auto h-[52px] inline-flex items-center justify-center gap-2.5 bg-[#12343B] text-white hover:bg-[#236653] px-10 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 shadow-sm select-none disabled:opacity-60 rounded-[4px] group"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>SENDING INQUIRY...</span>
              </>
            ) : (
              <>
                <span>SEND INQUIRY</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
