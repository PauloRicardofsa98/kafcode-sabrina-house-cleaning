import { Container } from "@/components/ui/container";
import { CheckIcon, ShieldIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

/**
 * Faixa de selos de confiança.
 *
 * "Licensed & insured" e "background-checked" são afirmações legais: só entram
 * quando a flag correspondente em `content/site.ts` for confirmada pela cliente.
 * Se nenhuma estiver ligada, a faixa inteira desaparece, o que é preferível a
 * publicar algo que não podemos sustentar.
 */
export function TrustStrip({ dict }: { dict: Dictionary }) {
  const claims = [
    site.claims.licensedAndInsured ? dict.trust.licensedAndInsured : null,
    site.claims.backgroundChecked ? dict.trust.backgroundChecked : null,
    dict.trust.supplies,
    dict.trust.guarantee,
  ].filter((claim): claim is string => Boolean(claim));

  if (claims.length === 0) return null;

  return (
    <div className="border-y border-line bg-blue-tint/60">
      <Container width="wide">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5">
          {claims.map((claim, index) => (
            <li key={claim} className="flex items-center gap-2 text-sm font-medium text-ink">
              {index === 0 && site.claims.licensedAndInsured ? (
                <ShieldIcon className="h-4 w-4 text-blue" />
              ) : (
                <CheckIcon className="h-4 w-4 text-blue" />
              )}
              {claim}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
