import Image from "next/image";

const integrations = [
  { name: "DAT", src: "/logos/dat-logo.webp" },
  { name: "Truckstop", src: "/logos/truckstop-logo.png" },
  { name: "McLeod", src: "/logos/mcleod-logo.png" },
  { name: "Trimble", src: "/logos/trimble-logo.png" },
  { name: "PCS", src: "/logos/pcs-logo.webp", className: "h-24 w-auto min-w-[180px] max-w-[260px] object-contain" },
  { name: "Samsara", src: "/logos/samsara-logo.png" },
  { name: "Alvys", src: "/logos/alvys-logo.png" },
  { name: "Twilio", src: "/logos/twilio-logo.gif" },
  { name: "Motive", src: "/logos/motive-logo.jpg" },
  { name: "Geotab", src: "/logos/geotab-logo.gif", className: "h-24 w-auto min-w-[180px] max-w-[260px] object-contain" },
];

const row1 = integrations.slice(0, 5);
const row2 = integrations.slice(5);

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-8">
        {/* Mobile: heading + two carousels */}
        <div className="lg:hidden">
          <div className="text-center mb-10 px-2">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Seamless system integration
            </h2>
            <p className="mt-4 text-base text-text-secondary sm:text-lg">
              We integrate with your existing carrier technology stack,
              including your TMS, load boards, and ELD systems.
            </p>
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-base font-medium text-navy transition-colors hover:bg-navy/5"
            >
              Schedule a call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Carousel row 1 - scrolls left */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="animate-scroll-left flex w-max gap-12 items-center">
              {[...row1, ...row1, ...row1].map((logo, i) => (
                <LogoItem key={`r1-${i}`} {...logo} mobile />
              ))}
            </div>
          </div>

          {/* Carousel row 2 - scrolls right */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="animate-scroll-right flex w-max gap-12 items-center">
              {[...row2, ...row2, ...row2].map((logo, i) => (
                <LogoItem key={`r2-${i}`} {...logo} mobile />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: original scattered layout */}
        <div className="hidden lg:block">
          {/* Row 1: top 2 logos */}
          <div className="flex items-center justify-center gap-32">
            <LogoItem {...integrations[0]} />
            <LogoItem {...integrations[1]} />
          </div>

          {/* Row 2: left logo — gap — right logo */}
          <div className="mt-10 flex items-center justify-between px-8">
            <LogoItem {...integrations[2]} />
            <LogoItem {...integrations[3]} />
          </div>

          {/* Row 3: far left — center content — far right */}
          <div className="mt-6 flex items-center justify-between">
            <LogoItem {...integrations[4]} />

            <div className="max-w-xl text-center">
              <h2 className="text-4xl font-bold text-navy sm:text-5xl">
                Seamless system integration
              </h2>
              <p className="mt-6 text-lg text-text-secondary">
                We integrate with your existing carrier technology stack,
                including your TMS, load boards, and ELD systems.
              </p>
              <a
                href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/15 px-8 py-4 text-base font-medium text-navy transition-colors hover:bg-navy/5"
              >
                Schedule a call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <LogoItem {...integrations[5]} />
          </div>

          {/* Row 4: lower left — lower right */}
          <div className="mt-6 flex items-center justify-between px-16">
            <LogoItem {...integrations[6]} />
            <LogoItem {...integrations[7]} />
          </div>

          {/* Row 5: bottom 2 logos */}
          <div className="mt-10 flex items-center justify-center gap-40">
            <LogoItem {...integrations[8]} />
            <LogoItem {...integrations[9]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ name, src, className, mobile }: { name: string; src: string; className?: string; mobile?: boolean }) {
  const mobileClass = "h-12 w-auto min-w-[100px] max-w-[160px] object-contain";
  return (
    <div className="flex shrink-0 items-center">
      <Image
        src={src}
        alt={name}
        width={200}
        height={60}
        className={mobile ? mobileClass : (className || "h-[4.5rem] w-auto min-w-[140px] max-w-[220px] object-contain")}
        unoptimized
      />
    </div>
  );
}
