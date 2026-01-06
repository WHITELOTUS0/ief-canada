import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Support Us | IEF Canada",
  description: "Support IEF Canada's mission to build Christian unity. Join our Friends of the Kingdom program or make a donation.",
};

const impactAreas = [
  {
    title: "Bible Studies",
    description: "Support biblical education and spiritual formation in our community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Youth Programs",
    description: "Invest in the next generation through education, mentorship, and support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "ESL & Integration",
    description: "Help newcomers learn English and integrate into Canadian community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Forgiveness Centre",
    description: "Fund healing and reconciliation initiatives in our community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const givingLevels = [
  {
    name: "Friend",
    amount: "$25",
    period: "/month",
    description: "Help cover basic operational costs and supplies for our programs.",
    features: [
      "Monthly newsletter updates",
      "Program impact reports",
      "Prayer partnership",
    ],
  },
  {
    name: "Partner",
    amount: "$50",
    period: "/month",
    description: "Support ongoing programming and community events.",
    features: [
      "All Friend benefits",
      "Invitation to special events",
      "Recognition in annual report",
    ],
    highlighted: true,
  },
  {
    name: "Champion",
    amount: "$100",
    period: "/month",
    description: "Make a significant impact on our mission and reach.",
    features: [
      "All Partner benefits",
      "Quarterly leadership updates",
      "Direct impact reporting",
    ],
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-burgundy-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
            alt="Support our mission"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-500 font-medium mb-4 tracking-wide">Friends of the Kingdom</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Partner With Us in Building Unity
            </h1>
            <p className="mt-6 text-lg text-cream-200 leading-relaxed">
              Your generous support enables us to continue fostering Christian unity,
              serving our community, and empowering the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Your Impact"
                title="Where Your Gift Goes"
                description="Every donation directly supports our programs and community initiatives. Here's how your generosity makes a difference."
              />

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {impactAreas.map((area) => (
                  <div key={area.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-charcoal-900">
                        {area.title}
                      </h3>
                      <p className="text-sm text-charcoal-600 mt-1">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Giving Levels */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Monthly Giving"
            title="Join Friends of the Kingdom"
            description="Become a monthly partner and provide sustainable support for our mission. Choose a giving level that works for you."
            centered
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {givingLevels.map((level) => (
              <div
                key={level.name}
                className={`rounded-2xl p-8 ${
                  level.highlighted
                    ? "bg-burgundy-800 text-white ring-4 ring-burgundy-800 ring-offset-4"
                    : "bg-cream-50 border border-cream-200"
                }`}
              >
                <h3
                  className={`font-serif text-xl font-semibold ${
                    level.highlighted ? "text-white" : "text-charcoal-900"
                  }`}
                >
                  {level.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span
                    className={`font-serif text-4xl font-bold ${
                      level.highlighted ? "text-white" : "text-burgundy-800"
                    }`}
                  >
                    {level.amount}
                  </span>
                  <span
                    className={`ml-1 ${
                      level.highlighted ? "text-cream-200" : "text-charcoal-500"
                    }`}
                  >
                    {level.period}
                  </span>
                </div>
                <p
                  className={`mt-4 ${
                    level.highlighted ? "text-cream-200" : "text-charcoal-600"
                  }`}
                >
                  {level.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          level.highlighted ? "text-gold-500" : "text-burgundy-700"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span
                        className={
                          level.highlighted ? "text-cream-100" : "text-charcoal-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  className={`w-full mt-8 ${
                    level.highlighted
                      ? "bg-white text-burgundy-800 hover:bg-cream-100"
                      : ""
                  }`}
                  variant={level.highlighted ? "primary" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Gift Section */}
      <section className="py-20 lg:py-28 bg-sage-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="One-Time Gift"
            title="Make a Single Donation"
            description="Can't commit to monthly giving? One-time gifts of any amount are deeply appreciated and make a real difference."
            centered
          />

          <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-cream-200">
            <p className="text-charcoal-600 mb-6">
              To make a one-time donation, please contact us directly. We accept various
              forms of payment and can provide tax receipts for your contribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Contact Us to Donate
              </Button>
              <Button href="mailto:iefcecumenica@gmail.com" variant="outline" size="lg">
                Email Us Directly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Other Ways to Support"
            title="Beyond Financial Giving"
            description="There are many ways to support our mission beyond financial contributions."
            centered
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-cream-200">
              <div className="w-14 h-14 bg-burgundy-800/10 rounded-xl flex items-center justify-center text-burgundy-800 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                Volunteer Your Time
              </h3>
              <p className="mt-3 text-charcoal-600">
                Share your skills and time by volunteering with our programs.
                From teaching to administration, there&apos;s a role for everyone.
              </p>
              <Button href="/contact" variant="ghost" className="mt-6 -ml-4">
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-cream-200">
              <div className="w-14 h-14 bg-burgundy-800/10 rounded-xl flex items-center justify-center text-burgundy-800 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                Spread the Word
              </h3>
              <p className="mt-3 text-charcoal-600">
                Help us reach more people by sharing our mission with your church,
                friends, and community. Your voice matters.
              </p>
              <Button href="/about" variant="ghost" className="mt-6 -ml-4">
                Get Resources
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-cream-200">
              <div className="w-14 h-14 bg-burgundy-800/10 rounded-xl flex items-center justify-center text-burgundy-800 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                Pray With Us
              </h3>
              <p className="mt-3 text-charcoal-600">
                Join us in prayer for our community, programs, and the broader
                work of Christian unity across Canada.
              </p>
              <Button href="/contact" variant="ghost" className="mt-6 -ml-4">
                Prayer Requests
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 lg:py-28 bg-burgundy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 mx-auto text-gold-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl sm:text-3xl text-white leading-relaxed">
            Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver.
          </blockquote>
          <p className="mt-6 text-gold-500 font-medium">— 2 Corinthians 9:7</p>
        </div>
      </section>
    </>
  );
}
