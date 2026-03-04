export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-bg-light">
      {/* Faint blue circle behind the dashboard */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-accent-blue/[0.04]" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 pt-28 pb-16 sm:gap-12 sm:px-8 sm:pt-40 sm:pb-24 lg:grid-cols-[1fr_1.6fr] lg:pt-48 lg:pb-32">
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm sm:mb-8 sm:px-5 sm:py-2.5 sm:text-base text-navy">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
            AI-powered carrier automation
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl">
            Move more freight with less effort
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:mt-8 sm:text-xl">
            Use AI to handle calls, texts, and emails — the way your best
            dispatcher would. Available 24/7, across every channel.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-medium text-white transition-colors hover:bg-navy-light"
            >
              Book a Demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
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
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-8 py-4 text-base font-medium text-navy transition-colors hover:bg-navy/5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.5 11.2v1.8a1.2 1.2 0 01-1.3 1.2 11.88 11.88 0 01-5.18-1.84 11.7 11.7 0 01-3.6-3.6A11.88 11.88 0 012.6 3.56 1.2 1.2 0 013.78 2.3h1.8a1.2 1.2 0 011.2 1.03c.08.56.22 1.1.42 1.62a1.2 1.2 0 01-.27 1.27l-.76.76a9.6 9.6 0 003.6 3.6l.76-.76a1.2 1.2 0 011.27-.27c.52.2 1.06.34 1.62.42a1.2 1.2 0 011.06 1.23z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Talk to Revlo
            </a>
          </div>
        </div>

        {/* Right: Dashboard mockup — oversized and bleeding right on desktop */}
        <div className="relative overflow-hidden rounded-2xl lg:overflow-visible lg:-mr-32 xl:-mr-48">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl bg-[#F0F1F3] p-3 shadow-xl shadow-navy/10 ring-1 ring-navy/[0.06]">
      {/* Top section: 3-column grid with Total Calls spanning 2 rows */}
      <div className="grid grid-cols-[1.2fr_1fr_1fr] grid-rows-2 gap-3">
        {/* Total Calls - spans 2 rows */}
        <div className="row-span-2 rounded-xl bg-white p-5 ring-1 ring-navy/[0.04]">
          <p className="text-sm font-semibold text-navy">Total Calls</p>
          <div className="mt-1 flex items-center justify-between text-[11px] text-text-secondary">
            <span>November</span>
            <span>December</span>
          </div>
          <svg viewBox="0 0 220 100" className="mt-3 w-full">
            <polyline
              points="0,85 30,78 60,65 80,70 100,55 130,62 160,40 190,25 220,15"
              fill="none"
              stroke="#0C1C2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="220" cy="15" r="3.5" fill="#0C1C2B" />
          </svg>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-navy">651</span>
            <span className="text-[11px] text-accent-green">
              +2{" "}
              <span className="text-text-secondary">from previous period</span>
            </span>
          </div>
        </div>

        <StatCard label="Loads Booked" value="441" change="+22%" />
        <StatCard label="Quote Win Rate" value="70%" change="+1.5%" />
        <StatCard label="Dispatch Rate" value="90%" change="+1.1%" />
        <StatCard label="Detention Fees Recovered" value="$15,520" sub="View Calculation" />
      </div>

      {/* Bottom section: Call Flow + After Hours */}
      <div className="mt-3 grid grid-cols-[1.8fr_1fr] gap-3">
        <div className="rounded-xl bg-white p-5 ring-1 ring-navy/[0.04]">
          <p className="text-sm font-semibold text-navy">Call Flow</p>
          <div className="mt-4">
            <svg viewBox="0 0 420 160" className="w-full">
              {/* Total bar */}
              <rect x="15" y="15" width="14" height="90" rx="3" fill="#3B82F6" />
              <text x="22" y="120" fontSize="9" fontWeight="600" fill="#6B7280" textAnchor="middle">Total</text>
              <text x="22" y="132" fontSize="9" fontWeight="600" fill="#0C1C2B" textAnchor="middle">372 calls</text>

              {/* Sankey flow paths */}
              <path d="M29,30 C100,30 100,25 180,25" fill="none" stroke="#D1D5DB" strokeWidth="30" opacity="0.3" />
              <path d="M29,65 C100,65 100,85 180,85" fill="none" stroke="#D1D5DB" strokeWidth="12" opacity="0.3" />
              <path d="M29,85 C100,85 100,125 180,125" fill="none" stroke="#D1D5DB" strokeWidth="8" opacity="0.3" />

              {/* Handled by AI bar */}
              <rect x="180" y="10" width="14" height="55" rx="3" fill="#10B981" />
              <text x="200" y="28" fontSize="9" fontWeight="600" fill="#0C1C2B">Handled by AI</text>
              <text x="200" y="42" fontSize="9" fill="#0C1C2B">321 calls</text>

              {/* Transferred */}
              <rect x="180" y="78" width="10" height="16" rx="3" fill="#10B981" />
              <text x="196" y="88" fontSize="9" fontWeight="600" fill="#0C1C2B">Transferred</text>
              <text x="196" y="100" fontSize="9" fill="#0C1C2B">51 calls</text>

              {/* Missed */}
              <rect x="180" y="118" width="10" height="12" rx="3" fill="#F59E0B" />
              <text x="196" y="127" fontSize="9" fontWeight="600" fill="#0C1C2B">Missed</text>
              <text x="196" y="139" fontSize="9" fill="#0C1C2B">30 calls</text>

              {/* Right side flows from Handled by AI */}
              <path d="M194,30 C260,30 260,60 310,60" fill="none" stroke="#D1D5DB" strokeWidth="8" opacity="0.3" />
              <path d="M194,45 C260,45 260,95 310,95" fill="none" stroke="#D1D5DB" strokeWidth="8" opacity="0.3" />

              {/* Answered */}
              <rect x="310" y="53" width="10" height="14" rx="3" fill="#10B981" />
              <text x="326" y="62" fontSize="9" fontWeight="600" fill="#0C1C2B">Answered</text>
              <text x="326" y="74" fontSize="9" fill="#0C1C2B">21 calls</text>

              {/* Lost */}
              <rect x="310" y="88" width="10" height="14" rx="3" fill="#EF4444" />
              <text x="326" y="97" fontSize="9" fontWeight="600" fill="#0C1C2B">Lost</text>
              <text x="326" y="109" fontSize="9" fill="#0C1C2B">30 calls</text>
            </svg>
          </div>
        </div>

        {/* After Hours / Store Hours */}
        <div className="rounded-xl bg-white p-5 ring-1 ring-navy/[0.04]">
          <p className="text-sm font-semibold text-navy">After Hours / Business Hours</p>
          <svg viewBox="0 0 140 70" className="mt-4 w-full">
            <polyline
              points="0,55 18,45 36,38 54,42 72,25 90,30 108,18 126,22 140,10"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="0,50 18,48 36,42 54,45 72,35 90,38 108,28 126,32 140,22"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
          </svg>
          <div className="mt-4 flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
              After Hours
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              Business Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  change,
  sub,
}: {
  label: string;
  value: string;
  change?: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-navy/[0.04]">
      <p className="text-[11px] font-semibold text-text-secondary">{label}</p>
      <p className="mt-1 text-xl font-bold text-navy">{value}</p>
      {change && (
        <p className="mt-0.5 text-[11px] text-accent-green">
          {change}{" "}
          <span className="text-text-secondary">from previous period</span>
        </p>
      )}
      {sub && (
        <p className="mt-0.5 text-[11px] text-accent-blue cursor-pointer">{sub}</p>
      )}
    </div>
  );
}
