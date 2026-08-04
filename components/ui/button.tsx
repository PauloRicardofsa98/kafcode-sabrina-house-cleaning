import Link from "next/link";

import { cx } from "@/lib/cx";

const variants = {
  /** CTA principal, no bordô da logo. Reservado para "Text us". */
  primary:
    "bg-wine text-white shadow-[var(--shadow-soft)] hover:bg-wine-deep active:translate-y-px",
  /** Ação secundária em fundo claro. */
  secondary:
    "bg-white text-ink ring-1 ring-line hover:ring-blue/40 hover:text-blue active:translate-y-px",
  /** Ação secundária sobre fundo escuro. */
  onDark: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20",
  /** Link com peso de botão, sem caixa. */
  ghost: "text-blue hover:text-blue-deep underline-offset-4 hover:underline px-0",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  /** Rótulo acessível quando o conteúdo visível não basta. */
  ariaLabel?: string;
};

/**
 * Renderiza `<Link>` para rotas internas, `<a>` para `sms:`/`tel:`/externos
 * e `<button>` quando não há destino.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  fullWidth,
  ariaLabel,
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold",
    "transition-[background-color,color,box-shadow,transform] duration-200",
    variants[variant],
    variant === "ghost" ? "h-auto" : sizes[size],
    fullWidth && "w-full",
    className,
  );

  if (!href) {
    return (
      <button type={type} className={classes} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
