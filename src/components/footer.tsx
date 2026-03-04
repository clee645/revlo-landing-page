import Image from "next/image";

const linkColumns = [
  {
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    links: [
      { label: "Solutions", href: "#solutions" },
      { label: "Platform", href: "#platform" },
      { label: "Integrations", href: "#integrations" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    links: [] as { label: string; href: string }[],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-4 pb-10 sm:px-8">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-3xl bg-navy">
        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 px-12 py-14 sm:grid-cols-4">
          {linkColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          <div className="flex items-start justify-end">
            <Image
              src="/revlo-logo.svg"
              alt="Revlo"
              width={110}
              height={36}
              className="brightness-0 invert opacity-60"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-12 py-8">
          <p className="text-sm text-white/40">
            &copy; 2026 Revlo Technologies Inc. All rights reserved.
          </p>
          <a
            href="#"
            className="text-white/40 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.477 6.018H.334v12.27h4.143V6.018zM2.405 4.342c1.325 0 2.399-1.078 2.399-2.408A2.402 2.402 0 002.405 0 2.408 2.408 0 00.002 2.41c0 1.33 1.074 2.408 2.403 2.408zM10.864 12.22c0-1.837.347-3.613 2.622-3.613 2.243 0 2.275 2.097 2.275 3.73v5.95h4.14v-6.71c0-3.79-.818-6.705-5.243-6.705-2.128 0-3.555 1.168-4.138 2.273h-.06V6.017H6.86v12.27h4.143v-6.069h-.139z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
