/**
 * Injeta um bloco JSON-LD.
 *
 * O conteúdo vem sempre dos nossos próprios arquivos de conteúdo, nunca de
 * entrada do usuário, e ainda assim escapamos `<` para eliminar qualquer chance
 * de fechar a tag `</script>` a partir dos dados.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
