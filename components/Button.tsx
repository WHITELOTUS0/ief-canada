import Link from "next/link";

type ButtonVariant = "primary" | "primary-light" | "secondary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy-800 text-white hover:bg-burgundy-700 active:bg-burgundy-900",
  "primary-light":
    "bg-white text-burgundy-800 hover:bg-cream-100 active:bg-cream-200",
  secondary:
    "bg-gold-500 text-charcoal-900 hover:bg-gold-600 active:bg-gold-700",
  outline:
    "border-2 border-burgundy-800 text-burgundy-800 hover:bg-burgundy-800 hover:text-white",
  "outline-light":
    "border-2 border-white text-white hover:bg-white hover:text-burgundy-800 bg-transparent",
  ghost:
    "text-burgundy-800 hover:bg-burgundy-800/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-700 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
