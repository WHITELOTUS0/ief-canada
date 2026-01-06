import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us | IEF Canada",
  description: "Learn about International Ecumenical Fellowship Canada, our mission, values, and commitment to Christian unity.",
};

const timeline = [
  {
    year: "Foundation",
    title: "Global Movement",
    description: "The International Ecumenical Fellowship began as a global movement bringing Christians together across denominational lines.",
  },
  {
    year: "Growth",
    title: "Canadian Chapter",
    description: "IEF Canada was established to bring the ecumenical vision to Canadian communities, fostering unity in our diverse nation.",
  },
  {
    year: "Today",
    title: "Expanding Impact",
    description: "Under the leadership of Pierre Celestin, we continue to grow our programs and reach more communities across Canada.",
  },
];

const team = [
  {
    name: "Pierre Celestin Niyongere",
    role: "Chapter Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Leading IEF Canada's mission to unite believers across Christian traditions in fellowship, faith, and service.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-burgundy-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80"
            alt="Church community"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-500 font-medium mb-4 tracking-wide">About IEF Canada</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Uniting Believers in Christian Fellowship, Faith & Service
            </h1>
            <p className="mt-6 text-lg text-cream-200 leading-relaxed">
              We are part of a global fellowship committed to building communities grounded in love,
              understanding, and mutual respect across all Christian denominations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title="Building Bridges Across Traditions"
                description="IEF Canada is dedicated to promoting Christian unity as a lived experience where believers from diverse traditions come together in faith, friendship, and service."
              />
              <div className="mt-8 space-y-6">
                <p className="text-charcoal-600 leading-relaxed">
                  We believe that despite our different denominational backgrounds, Christians share
                  a common faith in Jesus Christ that can unite us in powerful ways. Our mission is
                  to create spaces where this unity can be experienced and celebrated.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Through our various programs—from Bible studies to youth ministry, from ESL classes
                  to our Forgiveness Centre—we work to break down barriers and build authentic
                  relationships across the Body of Christ.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
                  alt="Community gathering in prayer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-burgundy-800/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Believe"
            title="Our Core Values"
            centered
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal-900">Faith</h3>
              <p className="mt-2 text-charcoal-600 text-sm">
                Grounded in our shared belief in Jesus Christ and the transformative power of the Gospel.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal-900">Unity</h3>
              <p className="mt-2 text-charcoal-600 text-sm">
                Committed to bringing Christians together across denominational boundaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal-900">Love</h3>
              <p className="mt-2 text-charcoal-600 text-sm">
                Expressing Christ&apos;s love through our relationships and service to others.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal-900">Justice</h3>
              <p className="mt-2 text-charcoal-600 text-sm">
                Working for social justice, reconciliation, and the common good in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 lg:py-28 bg-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="The Journey of IEF Canada"
            centered
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line - visible on all screens */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-burgundy-200 md:-translate-x-1/2" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-burgundy-800 rounded-full border-4 border-sage-50 -translate-x-1/2 mt-6 z-10" />

                    {/* Content card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm">
                        <span className="inline-block px-3 py-1 bg-burgundy-800 text-white text-sm font-medium rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-charcoal-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            description="Dedicated individuals serving our community with passion and purpose."
            centered
          />

          <div className="mt-16 flex justify-center">
            {team.map((member) => (
              <div key={member.name} className="max-w-sm">
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                    {member.name}
                  </h3>
                  <p className="text-burgundy-700 font-medium">{member.role}</p>
                  <p className="mt-3 text-charcoal-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-burgundy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Join Us in Building Unity"
            description="Whether through worship, study, service, or fellowship, there are many ways to be part of our community."
            centered
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/programs" size="lg" variant="primary-light">
              Explore Our Programs
            </Button>
            <Button href="/contact" size="lg" variant="outline-light">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
