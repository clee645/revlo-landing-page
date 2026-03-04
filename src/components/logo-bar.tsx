"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/ats-logo.webp", alt: "ATS" },
  { src: "/logos/bound-logo.png", alt: "Bound Logistics" },
  { src: "/logos/hogland-logo.png", alt: "Hogland's" },
  { src: "/logos/act2-logo.png", alt: "ACT 2 Services" },
  { src: "/logos/sb-log-dark.png", alt: "Service Bros Transport" },
  { src: "/logos/teocal-logo.png", alt: "Teocal Transport" },
];

export function LogoBar() {
  return (
    <section className="border-y border-navy/5 bg-white py-12 overflow-hidden">
      <p className="text-center text-xl font-bold text-text-secondary">
        Join leading carriers at the forefront of AI automation
      </p>
      <div className="relative mt-8">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling track */}
        <div className="flex items-center animate-scroll">
          {/* Duplicate the list for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="mx-12 shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
