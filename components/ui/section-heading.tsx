import { cx } from "@/lib/cx";

import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone === "dark" ? "blue" : "light"}>{eyebrow}</Eyebrow> : null}
      <Tag
        id={id}
        className={cx(
          "font-display text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cx(
            "max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-ink-soft" : "text-white/75",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
