import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

/** Cabeçalho padrão das páginas internas. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-glow border-b border-line/60">
      <Container width="wide">
        <div className="flex max-w-3xl flex-col gap-6 py-14 sm:py-20 lg:py-24">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="font-display text-[2.3rem] leading-[1.08] text-balance text-ink sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {lead ? (
            <p className="text-lg leading-relaxed text-pretty text-ink-soft">{lead}</p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
