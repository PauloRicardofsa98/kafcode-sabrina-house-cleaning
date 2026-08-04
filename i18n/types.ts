import type en from "./dictionaries/en";

/**
 * Alarga os literais de string de `en` para `string`, preservando a forma do objeto.
 *
 * Sem isso, `typeof en` (declarado com `as const`) exigiria que `pt` e `es`
 * repetissem os mesmos textos em inglês. Com isso, o TypeScript continua
 * exigindo **exatamente as mesmas chaves**, o que faz o build quebrar quando
 * uma tradução é esquecida, mas aceita qualquer conteúdo.
 */
type Widen<T> = T extends string ? string : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
