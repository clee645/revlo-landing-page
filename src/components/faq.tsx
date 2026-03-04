"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "How does the AI work for carriers?",
    answer:
      "Revlo's AI agents handle inbound and outbound communication across voice, SMS, and email. They can quote loads, negotiate rates, book freight, schedule appointments, screen driver recruits, handle customer calls, and more. The AI learns your specific processes, integrates with your TMS, and follows your business rules.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer:
      "Revlo uses state-of-the-art voice technology that sounds natural and human. Most callers can't tell the difference. You can choose to disclose AI usage or not, depending on your preference and regulatory requirements.",
  },
  {
    question: "Can the AI handle multiple calls at once?",
    answer:
      "Yes — unlike human dispatchers, Revlo can handle hundreds of simultaneous conversations across calls, texts, and emails. This means no more missed calls, no hold times, and no voicemail boxes that never get checked.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "Carriers typically see 30-50 hours saved per week in dispatch and admin time, increased load bookings from faster response times, reduced missed calls, and improved driver retention through better communication. Most customers see ROI within the first month.",
  },
  {
    question: "Is this secure and compliant?",
    answer:
      "Absolutely. Revlo uses enterprise-grade encryption, SOC 2 compliance, and follows all FMCSA regulations. Your data never leaves our secure infrastructure, and all conversations are logged for compliance.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/rain-on-car.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for slight contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-8 py-40 lg:grid-cols-5">
        {/* Left side */}
        <div className="lg:col-span-2 self-start lg:sticky lg:top-40">
          <p className="text-4xl font-bold text-white lg:text-5xl">
            Have any questions?
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-white/70 transition-colors hover:text-white"
          >
            Contact Us
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

        {/* Right side - FAQ accordion */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-navy">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-lg text-text-secondary">
              Everything you need to know about Revlo
            </p>
            <div className="mt-10 space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-navy/5">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-navy"
                  >
                    {faq.question}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openIndex === i && (
                    <p className="pb-6 text-lg leading-relaxed text-black">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
