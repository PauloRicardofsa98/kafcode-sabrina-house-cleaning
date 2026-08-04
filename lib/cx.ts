/**
 * Concatenador de classes.
 *
 * Substitui `clsx`/`classnames` com uma dependência a menos. Não precisamos de
 * objetos condicionais nem de merge de classes do Tailwind neste projeto.
 */
export function cx(...values: (string | false | null | undefined)[]): string {
  return values.filter(Boolean).join(" ");
}
