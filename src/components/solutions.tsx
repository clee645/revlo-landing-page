"use client";

import { useState } from "react";

interface SubTab {
  name: string;
  title: string;
  description: string;
  bullets: string[];
  messages: { sender: string; role?: string; text: string }[];
}

interface Tab {
  name: string;
  tagline: string;
  subTabs: SubTab[];
}

const tabs: Tab[] = [
  {
    name: "Revenue Operations",
    tagline: "Win more loads and quote faster.",
    subTabs: [
      {
        name: "Load Quoting",
        title: "Quote loads instantly",
        description:
          "AI agents reach out to brokers to get rate quotes for available lanes, comparing against your target rates in real time.",
        bullets: [
          "Automatically pull available loads from load boards",
          "Contact brokers via call or text for rate quotes",
          "Compare rates against your lane history and targets",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Hi, this is Revlo calling on behalf of ABC Trucking. We have a 53' dry van available in Dallas next Tuesday. What's your best rate for the lane to Chicago?",
          },
          {
            sender: "Broker",
            role: "Broker",
            text: "For Dallas to Chicago, I can offer $2.60 per mile. That's 780 miles, so about $2,028 all-in.",
          },
        ],
      },
      {
        name: "Rate Negotiation",
        title: "Negotiate better rates automatically",
        description:
          "Revlo negotiates rates on your behalf using your lane history, market data, and target margins.",
        bullets: [
          "Set target rates and let AI negotiate within your parameters",
          "Leverage historical lane data for stronger positioning",
          "Automatically counter-offer based on your rules",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Our target rate for this lane is $2.85/mile based on current market conditions. Can you do $2.75?",
          },
          {
            sender: "Broker",
            role: "Broker",
            text: "Best I can do is $2.70/mile.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "We can meet at $2.80/mile with quick pay. Does that work?",
          },
        ],
      },
      {
        name: "Load Booking",
        title: "Book loads without lifting a finger",
        description:
          "AI agents call brokerages about loads on load boards, negotiate rates, and book loads on your behalf.",
        bullets: [
          "Call brokers directly from load board postings",
          "Confirm pickup/delivery details and requirements",
          "Send rate confirmations and update your TMS",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "I'd like to book Load #4521. We can confirm a 53' dry van for pickup in Dallas, TX on 03/10 with delivery to Chicago, IL by 03/12.",
          },
          {
            sender: "Broker",
            role: "Broker",
            text: "Confirmed at $2.80/mile. I'll send over the rate con now.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Perfect. Rate confirmation received. Load #4521 is booked and updated in our system. Thank you.",
          },
        ],
      },
    ],
  },
  {
    name: "Dispatch Operations",
    tagline: "Coordinate freight movements.",
    subTabs: [
      {
        name: "Dispatch Calls",
        title: "Keep drivers informed automatically",
        description:
          "AI handles routine dispatch calls — load assignments, directions, schedule updates — so your team focuses on exceptions.",
        bullets: [
          "Automatically relay load details to drivers",
          "Handle driver check-calls and status updates",
          "Escalate issues to dispatchers in real time",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Hi Mike, this is Revlo from ABC Trucking. Your next load picks up at 2pm at the Walmart DC in Bentonville. Do you need updated directions?",
          },
          {
            sender: "Driver",
            role: "Driver",
            text: "Yeah, send me the address. Also, is there a lumper fee?",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Sending directions now. No lumper fee on this load — it's driver unload. I'll update your ETA in the system.",
          },
        ],
      },
      {
        name: "Appointment Scheduling",
        title: "Schedule appointments effortlessly",
        description:
          "Revlo calls shippers and receivers to schedule pickup and delivery appointments, eliminating phone tag.",
        bullets: [
          "Call facilities to book dock appointments",
          "Handle rescheduling and cancellations",
          "Update your TMS with confirmed times",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "I'd like to schedule a delivery appointment for Load #4521 arriving Thursday morning. Do you have a dock available between 8-10am?",
          },
          {
            sender: "Receiver",
            role: "Receiver",
            text: "We can do 9am at Dock 7.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "9am at Dock 7 confirmed. I'll update the driver and our system. Thank you.",
          },
        ],
      },
      {
        name: "Detention Detection",
        title: "Catch detention before it costs you",
        description:
          "Automatically detect when drivers exceed free time at facilities and trigger detention notifications and claims.",
        bullets: [
          "Monitor driver dwell time at every stop",
          "Auto-notify brokers when detention thresholds are hit",
          "Generate detention claims with timestamps and documentation",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "Alert",
            text: "⚠ Driver Mike Johnson has been at shipper for 2hr 15min. Detention threshold reached.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Auto-notifying broker: Detention accruing on Load #4521 at Dallas shipper. Driver arrived 10:00am, free time expired at 12:00pm. Current wait: 2hr 15min.",
          },
        ],
      },
    ],
  },
  {
    name: "Driver Operations",
    tagline: "Hire and manage drivers.",
    subTabs: [
      {
        name: "Driver Recruiting",
        title: "Recruit drivers around the clock",
        description:
          "AI agents proactively reach out to driver leads via call and text, qualifying interest and selling your fleet.",
        bullets: [
          "Outbound calls and texts to driver leads",
          "Pitch your fleet's benefits and compensation",
          "Qualify candidates against your requirements",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Hi, this is Revlo from ABC Trucking. We're hiring OTR drivers — $0.65/mile, home weekends, 2023+ equipment. Are you currently looking?",
          },
          {
            sender: "Driver Lead",
            role: "Applicant",
            text: "Yeah, I might be interested. What's the home time like?",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Our OTR drivers are home every weekend. We run mostly Midwest to Southeast lanes, 2,500-3,000 miles per week. Would you like to schedule a call with our recruiter?",
          },
        ],
      },
      {
        name: "Call Screening",
        title: "Screen recruits before they reach your team",
        description:
          "Revlo handles initial screening calls — verifying CDL status, experience, and violations — before passing qualified leads to your recruiters.",
        bullets: [
          "Verify CDL-A status, endorsements, and experience",
          "Check for accidents and violations",
          "Score and prioritize leads for your recruiting team",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Great! How many years of CDL-A experience do you have?",
          },
          {
            sender: "Driver Lead",
            role: "Applicant",
            text: "About 5 years. Clean record.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Excellent. Do you have any accidents or violations in the last 3 years? And do you have hazmat or tanker endorsements?",
          },
        ],
      },
      {
        name: "Interview Scheduling",
        title: "Fill your interview calendar",
        description:
          "Once a driver lead is qualified, Revlo automatically schedules an interview with your recruiting team.",
        bullets: [
          "Check recruiter availability in real time",
          "Send calendar invites and confirmation texts",
          "Handle rescheduling and reminders",
        ],
        messages: [
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "You look like a great fit. I have openings for Thursday at 10am or Friday at 2pm. Which works better?",
          },
          {
            sender: "Driver Lead",
            role: "Applicant",
            text: "Thursday at 10 works.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Perfect, I've scheduled your interview for Thursday at 10am with our fleet manager. I'll send you a confirmation text with the details.",
          },
        ],
      },
    ],
  },
  {
    name: "Customer Support",
    tagline: "Handle inbound communication.",
    subTabs: [
      {
        name: "Shipment Status",
        title: "Answer status calls instantly",
        description:
          "When customers call asking about their shipments, Revlo pulls real-time tracking data and provides updates immediately.",
        bullets: [
          "Instant access to GPS and ELD tracking data",
          "Provide accurate ETAs based on current location",
          "Escalate exceptions to your team automatically",
        ],
        messages: [
          {
            sender: "Customer",
            role: "Client",
            text: "Hi, can I get a status update on our shipment? PO number 88421.",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Of course. Your shipment #8842 is currently in transit on I-35 southbound. The driver is 45 miles from the delivery location with an ETA of 2:30pm today.",
          },
        ],
      },
      {
        name: "Customer Inquiries",
        title: "Handle billing and general inquiries",
        description:
          "Revlo fields common customer questions about invoices, payment status, PODs, and more — without tying up your office staff.",
        bullets: [
          "Answer invoice and payment status questions",
          "Provide proof of delivery documentation",
          "Route complex issues to the right team member",
        ],
        messages: [
          {
            sender: "Customer",
            role: "Client",
            text: "I'm calling about invoice #1204. Has it been processed yet?",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "I can help with that. Your invoice #1204 was processed yesterday and payment will be issued within 30 days per our terms. Would you like me to email you a copy?",
          },
        ],
      },
      {
        name: "Load Tracking",
        title: "Real-time tracking on demand",
        description:
          "Customers can call or text anytime to get live updates on their loads — no hold times, no callbacks needed.",
        bullets: [
          "24/7 tracking updates via call, text, or email",
          "Proactive delay notifications",
          "Integration with your TMS and ELD for live data",
        ],
        messages: [
          {
            sender: "Customer",
            role: "Client",
            text: "Where is load 6610 right now?",
          },
          {
            sender: "Revlo",
            role: "AI Agent",
            text: "Load #6610 picked up on time at 8am this morning. Current location is I-40 westbound near Amarillo, TX. On schedule for delivery tomorrow by 2pm.",
          },
        ],
      },
    ],
  },
];

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const currentTab = tabs[activeTab];
  const currentSubTab = currentTab.subTabs[activeSubTab];

  return (
    <section id="solutions" className="bg-white py-32">
      <div className="mx-auto max-w-[1400px] px-8">
        <h2 className="text-center text-5xl font-bold text-navy lg:text-6xl">
          Solutions
        </h2>

        {/* Main tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => {
                setActiveTab(i);
                setActiveSubTab(0);
              }}
              className={`rounded-full px-7 py-3 text-base font-medium transition-colors ${
                activeTab === i
                  ? "bg-navy text-white"
                  : "bg-bg-light text-navy hover:bg-navy/10"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-8 text-center text-xl text-text-secondary">
          {currentTab.tagline}
        </p>

        {/* Sub-tabs */}
        <div className="mt-10 flex justify-center">
          <div className="flex gap-0 border-b border-navy/10">
            {currentTab.subTabs.map((sub, i) => (
              <button
                key={sub.name}
                onClick={() => setActiveSubTab(i)}
                className={`relative px-8 py-4 text-base font-medium transition-colors ${
                  activeSubTab === i
                    ? "text-navy"
                    : "text-text-secondary hover:text-navy"
                }`}
              >
                {sub.name}
                {activeSubTab === i && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-navy" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content: Phone mockup + description */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup messages={currentSubTab.messages} />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-navy lg:text-4xl">
              {currentSubTab.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary lg:text-xl">
              {currentSubTab.description}
            </p>
            <ul className="mt-8 space-y-4">
              {currentSubTab.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 border-b border-navy/5 pb-4 text-base text-navy"
                >
                  <span className="mt-0.5 text-accent-green">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              href="https://cal.com/curtis-lee-1175/revlo-systems-demo"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-navy/15 px-8 py-4 text-base font-medium text-navy transition-colors hover:bg-navy/5"
            >
              Schedule a call
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
    </section>
  );
}

function PhoneMockup({
  messages,
}: {
  messages: { sender: string; role?: string; text: string }[];
}) {
  const isRevlo = (sender: string) =>
    sender === "Revlo";

  return (
    <div className="w-full max-w-md">
      {/* Phone frame — realistic iPhone style */}
      <div className="relative overflow-hidden rounded-[3rem] border-[6px] border-[#C0C0C0] bg-white shadow-2xl ring-1 ring-black/5">
        {/* Side buttons (cosmetic) */}
        <div className="absolute left-[-8px] top-28 h-8 w-1.5 rounded-l-sm bg-[#B0B0B0]" />
        <div className="absolute left-[-8px] top-40 h-12 w-1.5 rounded-l-sm bg-[#B0B0B0]" />
        <div className="absolute left-[-8px] top-56 h-12 w-1.5 rounded-l-sm bg-[#B0B0B0]" />
        <div className="absolute right-[-8px] top-36 h-14 w-1.5 rounded-r-sm bg-[#B0B0B0]" />

        {/* Dynamic Island */}
        <div className="flex justify-center bg-white pt-4 pb-2">
          <div className="h-[22px] w-[90px] rounded-full bg-black" />
        </div>

        {/* Screen */}
        <div className="bg-white px-5 pb-10 pt-6">
          <h4 className="text-2xl font-bold text-navy">Messages</h4>
          <div className="mt-6 space-y-5">
            {messages.map((msg, i) => {
              const fromRevlo = isRevlo(msg.sender);
              return (
                <div
                  key={i}
                  className={`flex items-end gap-3 ${fromRevlo ? "" : "flex-row-reverse"}`}
                >
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${
                        fromRevlo ? "bg-navy" : "bg-[#8B7355]"
                      }`}
                    >
                      {msg.sender[0]}
                    </div>
                    {/* Online dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#22D3EE]" />
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3.5 text-sm leading-relaxed ${
                      fromRevlo
                        ? "bg-navy text-white"
                        : "bg-[#F3F4F6] text-navy ring-1 ring-navy/[0.06]"
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span
                        className={`text-xs font-bold ${fromRevlo ? "text-white" : "text-navy"}`}
                      >
                        {msg.sender}
                      </span>
                      {msg.role && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                            fromRevlo
                              ? "bg-white/20 text-white"
                              : "bg-navy/10 text-navy"
                          }`}
                        >
                          {msg.role}
                        </span>
                      )}
                    </div>
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
