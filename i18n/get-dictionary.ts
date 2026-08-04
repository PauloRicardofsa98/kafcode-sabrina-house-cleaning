import type { Locale } from "./config";
import type { Dictionary } from "./types";
import en from "./dictionaries/en";
import es from "./dictionaries/es";
import pt from "./dictionaries/pt";

/**
 * Imports estáticos de propósito: as três traduções cabem em poucos KB e tudo
 * é renderizado no servidor em build time, então `import()` dinâmico só
 * adicionaria complexidade sem economizar nada no cliente.
 */
const dictionaries: Record<Locale, Dictionary> = { en, es, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
