import { cx } from "@/lib/cx";

/** Rótulo curto acima do título de seção, com uma régua fina à esquerda. */
export function Eyebrow({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "light";
}) {
  return (
    <p
      className={cx(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "blue" ? "text-blue" : "text-white/70",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          "h-px w-8 shrink-0",
          tone === "blue" ? "bg-blue/40" : "bg-white/30",
        )}
      />
      {children}
    </p>
  );
}
