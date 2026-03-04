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

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-8">
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
    </section>
  );
}

function LogoItem({ name, src, className }: { name: string; src: string; className?: string }) {
  return (
    <div className="flex shrink-0 items-center">
      <Image
        src={src}
        alt={name}
        width={200}
        height={60}
        className={className || "h-[4.5rem] w-auto min-w-[140px] max-w-[220px] object-contain"}
        unoptimized
      />
    </div>
  );
}
