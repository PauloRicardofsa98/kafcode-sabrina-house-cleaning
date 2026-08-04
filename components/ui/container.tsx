import { cx } from "@/lib/cx";

export function Container({
  children,
  className,
  width = "default",
}: {
  children: React.ReactNode;
  className?: string;
  /** `narrow` para blocos de leitura longa, `wide` para grids de card. */
  width?: "narrow" | "default" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div className={cx("mx-auto w-full px-5 sm:px-8", widths[width], className)}>{children}</div>
  );
}
