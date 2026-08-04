import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/** Idiomas que aparecem na URL. O inglês é servido na raiz, sem prefixo. */
const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

function hasPrefix(pathname: string, locale: string): boolean {
  return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // `/en/services` seria uma duplicata indexável de `/services`.
  // Redirecionamento permanente para consolidar tudo na URL canônica.
  if (hasPrefix(pathname, defaultLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  // `/pt/...` e `/es/...` já batem direto na árvore de rotas.
  if (prefixedLocales.some((locale) => hasPrefix(pathname, locale))) {
    return NextResponse.next();
  }

  // Todo o resto é inglês: reescrevemos para `/en/...` mantendo a URL limpa
  // na barra de endereços. Rewrite, não redirect: `/` continua sendo `/`.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /**
   * Fora do proxy: assets do Next, arquivos com extensão
   * (`robots.txt`, `sitemap.xml`, imagens, `favicon.ico`) e as rotas internas.
   */
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
