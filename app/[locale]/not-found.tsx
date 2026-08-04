import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MessageIcon } from "@/components/ui/icons";
import { smsHref } from "@/content/site";
import { defaultLocale, localizedHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Página 404.
 *
 * Componentes de `not-found` não recebem `params`, então usamos o inglês, que
 * é o idioma canônico do site. Cobre o caso mais comum: alguém tentando abrir
 * `/pt/areas/san-francisco`, que existe só em inglês.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <Container>
      <div className="flex flex-col items-start gap-6 py-24 sm:py-32">
        <p className="font-display text-6xl text-line">404</p>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{dict.notFound.title}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{dict.notFound.body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={localizedHref(defaultLocale, "/")} variant="secondary" size="lg">
            {dict.notFound.cta}
          </Button>
          <Button href={smsHref(dict.cta.smsBody)} size="lg">
            <MessageIcon className="h-5 w-5" />
            {dict.cta.text}
          </Button>
        </div>
      </div>
    </Container>
  );
}
