import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Programs | IEF Canada",
  description: "Explore IEF Canada's programs including Bible Studies, ESL, Youth Ministry, and the Toronto Forgiveness Centre.",
};

const programs = [
  {
    id: "bible-studies",
    title: "Bible Studies",
    subtitle: "Deepen Your Faith Through Scripture",
    description: "Our Bible study program offers structured biblical education in a welcoming, community-focused environment. Whether you're new to Scripture or a lifelong student, you'll find opportunities to grow in understanding and faith.",
    features: [
      "Weekly group studies on various books of the Bible",
      "Discussion-based learning that welcomes all perspectives",
      "Resources for personal study and reflection",
      "Special seasonal studies during Advent and Lent",
    ],
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "esl",
    title: "ESL Program & Events",
    subtitle: "Language Learning in Community",
    description: "Our English as a Second Language program combines language instruction with community building. Newcomers to Canada find not only language skills but lasting friendships and support.",
    features: [
      "Conversational English classes for all levels",
      "Cultural integration support and guidance",
      "Community events and social gatherings",
      "One-on-one conversation practice opportunities",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: "youth",
    title: "Youth Ministry",
    subtitle: "Empowering the Next Generation",
    description: "Our comprehensive youth programs address the spiritual, educational, mental health, and social needs of young people. We believe in nurturing whole-person development through faith-based community.",
    features: [
      "Youth education and mentorship programs",
      "Mental health awareness and support initiatives",
      "Climate justice and environmental stewardship",
      "Sunday school, youth groups, and summer camps",
    ],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "forgiveness",
    title: "Toronto Forgiveness Centre",
    subtitle: "Healing Through Grace and Reconciliation",
    description: "The Toronto Forgiveness Centre provides a sacred space for healing, reconciliation, and community conflict resolution. Grounded in the transformative power of forgiveness, we help individuals and communities find paths to peace.",
    features: [
      "Individual and group forgiveness counseling",
      "Community conflict mediation services",
      "Workshops on healing and reconciliation",
      "Support groups for those processing hurt and trauma",
    ],
    image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: "theological-research",
    title: "Theological Research",
    subtitle: "Exploring Faith Through Study",
    description: "Our theological research program supports academic exploration of ecumenical themes, interfaith dialogue, and practical theology. We believe rigorous study strengthens our collective understanding and witness.",
    features: [
      "Research initiatives on ecumenical themes",
      "Guest lectures and academic presentations",
      "Resources for theological education",
      "Collaborative projects with academic institutions",
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-burgundy-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80"
            alt="Community programs"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-500 font-medium mb-4 tracking-wide">Our Programs</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Growing Together in Faith & Service
            </h1>
            <p className="mt-6 text-lg text-cream-200 leading-relaxed">
              From Bible studies to youth ministry, from language learning to healing and reconciliation,
              our programs offer diverse pathways to grow, serve, and connect.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-12 bg-cream-50 border-b border-cream-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-4 py-2 bg-white rounded-full border border-cream-200 text-charcoal-700 hover:border-burgundy-700 hover:text-burgundy-800 transition-colors text-sm font-medium"
              >
                {program.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? "bg-cream-50" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-16 h-16 bg-burgundy-800 rounded-2xl flex items-center justify-center text-white mb-6">
                  {program.icon}
                </div>
                <p className="text-burgundy-700 font-medium mb-2">{program.subtitle}</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal-900">
                  {program.title}
                </h2>
                <p className="mt-4 text-charcoal-600 leading-relaxed">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-burgundy-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-charcoal-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact">Learn More</Button>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className={`absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} w-24 h-24 bg-gold-500/20 rounded-xl -z-10`} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-burgundy-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Get Involved?"
            description="We'd love to welcome you to any of our programs. Reach out to learn more about how you can participate."
            centered
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary-light">
              Contact Us
            </Button>
            <Button href="/donate" size="lg" variant="outline-light">
              Support Our Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
