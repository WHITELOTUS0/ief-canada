interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-medium uppercase tracking-wider mb-3 ${
            light ? "text-gold-500" : "text-burgundy-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold ${
          light ? "text-white" : "text-charcoal-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-cream-200" : "text-charcoal-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
