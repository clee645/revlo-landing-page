"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav className="mx-auto max-w-[1600px] rounded-2xl bg-navy shadow-lg shadow-navy/20">
        <div className="flex items-center justify-between px-10 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/revlo-logo.svg"
              alt="Revlo"
              width={130}
              height={42}
              className="brightness-0 invert"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-medium text-navy transition-colors hover:bg-white/90"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 px-8 pb-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="mt-3 inline-block rounded-full border border-white/20 bg-white px-6 py-3 text-base font-medium text-navy"
            >
              Book a Demo
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
