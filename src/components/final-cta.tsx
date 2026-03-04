export function FinalCTA() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <h2 className="text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
          Ready to automate your carrier operations?
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-10 py-5 text-base font-medium text-white transition-colors hover:bg-navy-light"
          >
            Book a demo
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
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-10 py-5 text-base font-medium text-navy transition-colors hover:bg-navy/5"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
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
    </section>
  );
}
