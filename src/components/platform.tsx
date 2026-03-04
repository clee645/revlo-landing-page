const features = [
  {
    icon: (
      /* Sounds human — face profile with sound waves */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M18 28c-3.3 0-6-2.7-6-6v-4c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 18c1.2 1.5 2 3.4 2 5.5s-.8 4-2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 14c2 2.5 3.2 5.6 3.2 9s-1.2 6.5-3.2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28v3c0 1.7 1.3 3 3 3h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Sounds human",
  },
  {
    icon: (
      /* Speaks any language — speech bubbles with A and characters */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="6" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 19l3-8 3 8M11 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="20" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 33l3-3m0 0l3-3m-3 3l-3-3m3 3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Speaks any language",
  },
  {
    icon: (
      /* Always on — power button icon */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 8v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 12.5a12 12 0 107.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Always on",
  },
  {
    icon: (
      /* Warm transfers — two curved swap arrows */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M8 16h20c4 0 8 3 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 28H16c-4 0-8-3-8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 34l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Warm transfers",
  },
  {
    icon: (
      /* Smart callback assignments — phone with routing */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M16 8c-2 0-4 2-4 4v2c0 6 4 14 10 18l2-2c1-1 2.5-1 3.5 0l3 3c1 1 1 2.5 0 3.5l-1.5 1.5c-2 2-5.5 1.5-9-1s-7-6-9.5-10-3.5-8-2-10L10 16c1-1 2.5-1 3.5 0l3 3c1 1 1 2.5 0 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 9v3l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Smart callback\nassignments",
  },
  {
    icon: (
      /* Callback alerts — triangle with exclamation */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 8L6 36h32L22 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 18v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="30" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Callback alerts",
  },
  {
    icon: (
      /* No full voicemail boxes — circle with diagonal line */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 32L32 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "No full voicemail\nboxes",
  },
  {
    icon: (
      /* Advanced analytics — vertical equalizer bars */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="18" width="4" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="10" width="4" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="24" y="14" width="4" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="32" y="8" width="4" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Advanced\nanalytics",
  },
  {
    icon: (
      /* No missed leads — dollar sign */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 6v32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 14c0-3.3-3.6-6-8-6s-8 2.7-8 6 3.6 6 8 6 8 2.7 8 6-3.6 6-8 6-8-2.7-8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "No missed calls",
  },
  {
    icon: (
      /* Customizable — horizontal slider controls */
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M6 12h32M6 22h32M6 32h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="12" r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="22" r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="32" r="3" fill="white" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "Customizable",
  },
];

export function Platform() {
  return (
    <section id="platform" className="bg-bg-light">
      {/* Voice demo block */}
      <div className="mx-auto max-w-[1400px] px-8 py-32">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-24 shadow-2xl">
          {/* Waveform SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <svg
              viewBox="0 0 800 200"
              className="w-full"
              preserveAspectRatio="none"
            >
              {/* Multiple waveform lines */}
              <path
                d="M0,100 Q50,60 100,100 T200,100 T300,100 T400,100 T500,100 T600,100 T700,100 T800,100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
              />
              <path
                d="M0,100 Q50,40 100,100 T200,100 T300,100 T400,100 T500,100 T600,100 T700,100 T800,100"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1"
              />
              <path
                d="M0,100 Q50,140 100,100 T200,100 T300,100 T400,100 T500,100 T600,100 T700,100 T800,100"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="0.75"
              />
              <path
                d="M0,100 Q75,20 150,100 T300,100 T450,100 T600,100 T750,100 T800,100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
              />
              <path
                d="M0,100 Q75,160 150,100 T300,100 T450,100 T600,100 T750,100 T800,100"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="0.75"
              />
            </svg>
          </div>

          {/* Play button */}
          <div className="relative flex flex-col items-center">
            <button className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 transition-colors hover:bg-white/10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <h3 className="text-4xl font-bold text-white sm:text-5xl">
              Listen to Revlo
            </h3>
            <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/70">
              Revlo delivers natural, human-like conversations — always
              available, endlessly patient, and able to reason, predict, and act
              in real time.
            </p>
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
            >
              Get started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
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
        </div>
      </div>

      {/* Features grid */}
      <div className="mx-auto max-w-[1400px] px-8 pb-32">
        <h3 className="text-center text-4xl font-bold text-navy italic sm:text-5xl">
          Turn every load into revenue
        </h3>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-text-secondary">
          The only AI communications platform built for carriers from the ground
          up — deeply integrated with your TMS, load boards, and ELD to
          reliably automate every operational workflow.
        </p>
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:grid-cols-5">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-5">
              <div className="text-[#93AECD]">{f.icon}</div>
              <span className="whitespace-pre-line text-center text-base font-medium text-navy">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
