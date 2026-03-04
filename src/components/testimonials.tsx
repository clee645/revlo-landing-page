const testimonials = [
  {
    company: "Midwest Freight Co.",
    quote: "The support has been absolutely stellar. Revlo handles 80% of our inbound calls now.",
    person: "Sarah Mitchell, VP Operations",
    stat: "40 hrs",
    statLabel: "Saved Per Week",
  },
  {
    company: "Summit Logistics",
    stat: "$200k",
    statLabel: "Revenue Impact",
    isBigStat: true,
  },
  {
    company: "Pacific Coast Carriers",
    quote:
      "Our dispatch team went from 12 hours a day on the phone to focusing on the loads that actually need attention.",
    person: "James Rodriguez, Fleet Manager",
    stat: "+300",
    statLabel: "Loads Booked",
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy/[0.03]">
      <div className="bg-bg-light py-4" />
      <div className="mx-auto max-w-[1400px] px-8 py-32">
        <p className="text-base font-medium uppercase tracking-wider text-text-secondary">
          Case studies
        </p>
        <h2 className="mt-3 text-4xl font-bold text-navy lg:text-5xl">
          Trusted by industry leaders
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="flex flex-col justify-between rounded-2xl bg-white p-10 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-tight text-navy/40">
                    {t.company}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 10h10m0 0L11 6m4 4l-4 4"
                      stroke="#0C1C2B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {t.isBigStat ? (
                  <div className="mt-10">
                    <p className="text-7xl font-bold text-navy">{t.stat}</p>
                    <p className="mt-3 text-base text-text-secondary">
                      {t.statLabel}
                    </p>
                  </div>
                ) : (
                  <p className="mt-10 text-2xl font-medium leading-relaxed text-navy">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                )}
              </div>
              <div className="mt-8">
                {t.person && (
                  <p className="text-sm text-text-secondary">{t.person}</p>
                )}
                {!t.isBigStat && (
                  <div className="mt-4 text-right">
                    <p className="text-3xl font-bold text-navy">{t.stat}</p>
                    <p className="text-xs text-text-secondary">{t.statLabel}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
