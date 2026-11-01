"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { upcomingEvent, isEventOver } from "@/lib/events";

export default function EventBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isEventOver(upcomingEvent)) return;
    try {
      if (sessionStorage.getItem(`banner-dismissed:${upcomingEvent.slug}`)) return;
    } catch {
      /* storage unavailable: still show the banner */
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(`banner-dismissed:${upcomingEvent.slug}`, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="bg-burgundy-900 text-cream-200 border-b border-burgundy-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3">
        <p className="flex-1 text-sm sm:text-[15px] leading-snug">
          <span className="inline-block mr-2 rounded-full bg-gold-500 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-charcoal-900">
            Upcoming
          </span>
          You are warmly welcome to our seminar on{" "}
          <span className="font-semibold text-white">{upcomingEvent.title}</span> on{" "}
          <span className="font-semibold text-white">{upcomingEvent.dateLabel}</span>,{" "}
          {upcomingEvent.timeLabel} at {upcomingEvent.venue}, {upcomingEvent.city}.{" "}
          <Link
            href="/#event"
            className="underline decoration-gold-500 underline-offset-4 font-medium text-white hover:text-gold-500 transition-colors whitespace-nowrap"
          >
            Learn more &amp; register
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 p-1.5 rounded-md text-cream-200/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
