import React from "react";

interface HotelLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  size?: number | string;
  badge?: boolean;
}

/**
 * Dhigurah Holidays Luxury Monogram Logo
 * Exact interlocking "DH" serif monogram from brand identity specifications.
 * Inherits currentColor (e.g. text-[#12343B] with hover to forest green in Navbar,
 * lagoon aqua #6CAFC4 in Footer).
 */
export default function HotelLogo({
  className = "w-10 h-10",
  size,
  badge = false,
  style,
  ...props
}: HotelLogoProps) {
  if (badge) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-xl bg-[#0b382a] p-1.5 shadow-sm shrink-0 ${className}`}
        style={style}
        {...props}
      >
        <span
          className="w-full h-full inline-block"
          style={{
            backgroundColor: "#FAF7F2",
            WebkitMask: 'url("/images/dh_monogram.png") center / contain no-repeat',
            mask: 'url("/images/dh_monogram.png") center / contain no-repeat',
          }}
          aria-hidden="true"
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        backgroundColor: "currentColor",
        WebkitMask: 'url("/images/dh_monogram.png") center / contain no-repeat',
        mask: 'url("/images/dh_monogram.png") center / contain no-repeat',
        ...(size ? { width: size, height: size } : {}),
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
