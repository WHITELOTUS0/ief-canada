import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ProgramCard({
  title,
  description,
  image,
  href,
  icon,
}: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-200"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
        {icon && (
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-burgundy-800">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-charcoal-900 group-hover:text-burgundy-800 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-charcoal-600 text-sm line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center text-burgundy-800 font-medium text-sm">
          Learn more
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
