export interface SiteEvent {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  /** ISO start/end used for date gating and structured data */
  start: string;
  end: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  city: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
  registerHref: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

export const upcomingEvent: SiteEvent = {
  slug: "healing-unity-peace-2026",
  title: "Healing, Unity and Peace",
  subtitle: "A Day of Reflection, Fellowship, and Renewal",
  kind: "Seminar",
  start: "2026-11-07T10:00:00-05:00",
  end: "2026-11-07T16:00:00-05:00",
  dateLabel: "Saturday, November 7, 2026",
  timeLabel: "10:00 AM – 4:00 PM",
  venue: "Christ the King Church",
  address: "707 Nelson St",
  city: "London, Ontario",
  poster: "/events/healing-unity-peace-2026.jpeg",
  posterWidth: 1148,
  posterHeight: 1371,
  registerHref:
    "mailto:info@iefcanada.org?subject=Registration%3A%20Healing%2C%20Unity%20and%20Peace%20Seminar%20(Nov%207)",
  contactName: "Rev. Pierre",
  contactPhone: "(647) 862-5144",
  contactEmail: "info@iefcanada.org",
};

/** True once the event's end time has passed (checked in the browser). */
export function isEventOver(event: SiteEvent, now: Date = new Date()): boolean {
  return now.getTime() > new Date(event.end).getTime();
}
