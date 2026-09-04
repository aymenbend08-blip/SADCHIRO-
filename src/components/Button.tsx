import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: Variant;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-clay text-ivory hover:bg-clay-dark border border-clay",
  secondary:
    "bg-transparent text-pine border border-pine hover:bg-pine hover:text-ivory",
  ghost:
    "bg-transparent text-charcoal border border-transparent hover:border-charcoal/30",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap";

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
