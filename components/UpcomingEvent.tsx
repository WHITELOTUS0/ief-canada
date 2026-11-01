import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { upcomingEvent as event } from "@/lib/events";

const detailIcon = "w-5 h-5 shrink-0 text-gold-600";

export default function UpcomingEvent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.title}: ${event.subtitle}`,
    description: `${event.kind} presented by International Ecumenical Fellowship Canada. ${event.subtitle}.`,
    startDate: event.start,
    endDate: event.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: `https://www.iefcanada.org${event.poster}`,
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.address,
        addressLocality: "London",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "IEF Canada",
      url: "https://www.iefcanada.org",
    },
  };

  return (
    <section id="event" className="py-20 lg:py-28 bg-white scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow={`Upcoming ${event.kind}`}
              title={event.title}
              description={event.subtitle}
            />
            <p className="mt-6 text-lg text-charcoal-700 leading-relaxed">
              You are warmly welcome to join us on{" "}
              <span className="font-semibold text-burgundy-800">{event.dateLabel}</span> for a
              day of reflection, fellowship, and renewal with believers from across Christian
              traditions.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg className={detailIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">When</dt>
                  <dd className="text-charcoal-900 font-medium">
                    {event.dateLabel} · {event.timeLabel}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className={detailIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">Where</dt>
                  <dd className="text-charcoal-900 font-medium">
                    {event.venue}, {event.address}, {event.city}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className={detailIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
                    Information &amp; Registration
                  </dt>
                  <dd className="text-charcoal-900 font-medium">
                    Contact {event.contactName}{" "}
                    <a href={`tel:${event.contactPhone.replace(/\D/g, "")}`} className="hover:text-burgundy-700">
                      {event.contactPhone}
                    </a>
                    {" · "}
                    <a href={`mailto:${event.contactEmail}`} className="hover:text-burgundy-700">
                      {event.contactEmail}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href={event.registerHref} size="lg">
                Register Now
              </Button>
              <Button href={event.poster} variant="outline" size="lg">
                View Poster
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <a href={event.poster} target="_blank" rel="noopener" className="block max-w-md mx-auto">
              <Image
                src={event.poster}
                alt={`${event.title} seminar poster: ${event.dateLabel}, ${event.timeLabel}, ${event.venue}, ${event.city}`}
                width={event.posterWidth}
                height={event.posterHeight}
                className="w-full h-auto rounded-2xl shadow-xl border border-cream-200"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
