import { cx } from "@/lib/cx";

const tones = {
  ivory: "bg-ivory",
  sand: "bg-sand",
  white: "bg-white",
  ink: "bg-ink text-white",
};

export function Section({
  children,
  id,
  tone = "ivory",
  className,
  as: Tag = "section",
  labelledBy,
}: {
  children: React.ReactNode;
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  as?: "section" | "div";
  labelledBy?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cx("py-20 sm:py-24 lg:py-32", tones[tone], className)}
    >
      {children}
    </Tag>
  );
}
