#!/usr/bin/env bash
#
# Gera links de busca do Google "como se você estivesse" numa das cidades
# atendidas, para conferir o resultado local sem estar na Califórnia.
#
# Uso:
#   pnpm serp "house cleaning"                 todas as cidades principais
#   pnpm serp "deep cleaning" --city concord   só uma cidade
#   pnpm serp "house cleaning" --open          abre no navegador
#   pnpm serp --brand                          checa as buscas pelo nome da empresa
#   pnpm serp --index                          checa o que já foi indexado
#   pnpm serp --list                           lista as cidades disponíveis
#
# COMO FUNCIONA
#
# O parâmetro `uule` da busca do Google carrega uma localização codificada. É o
# mesmo mecanismo que as ferramentas de rank tracking usam. Não é documentado
# pelo Google e pode parar de funcionar sem aviso, então trate como indicação,
# não como verdade absoluta.
#
# O resultado mais confiável vem de duas outras fontes, ambas explicadas no
# SEO.md: o Ad Preview do Google Ads (oficial e gratuito) e o Search Console
# depois que o site estiver no ar.
#
# O script apenas MONTA a URL para você abrir no navegador. Ele não faz
# scraping do Google, que além de bloqueado violaria os termos de uso.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Domínio lido de content/site.ts, para não duplicar a informação.
DOMAIN="$(grep -oE 'url: "https?://[^"]+"' "$ROOT/content/site.ts" | head -1 | sed -E 's|.*https?://||; s|"||')"
[ -z "$DOMAIN" ] && DOMAIN="sabrinacleaningservice.com.br"

# Nomes canônicos no formato que o Google espera: Cidade,Estado,País.
CITIES="concord:Concord,California,United States
walnut-creek:Walnut Creek,California,United States
danville:Danville,California,United States
lafayette:Lafayette,California,United States
orinda:Orinda,California,United States
martinez:Martinez,California,United States
san-ramon:San Ramon,California,United States
pittsburg:Pittsburg,California,United States
oakland:Oakland,California,United States
berkeley:Berkeley,California,United States
vallejo:Vallejo,California,United States
napa:Napa,California,United States
san-francisco:San Francisco,California,United States"

# Subconjunto usado quando você não escolhe cidade: os mercados que mais importam.
DEFAULT_CITIES="concord walnut-creek danville oakland berkeley"

QUERY=""
CITY=""
OPEN=false
MODE="serp"

while [ $# -gt 0 ]; do
  case "$1" in
    --city) CITY="${2:-}"; shift 2 ;;
    --open) OPEN=true; shift ;;
    --brand) MODE="brand"; shift ;;
    --index) MODE="index"; shift ;;
    --list) MODE="list"; shift ;;
    -h|--help) sed -n '2,27p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    -*) echo "Opção desconhecida: $1 (use --help)" >&2; exit 1 ;;
    *) QUERY="$1"; shift ;;
  esac
done

if [ -t 1 ]; then
  BOLD=$'\033[1m'; DIM=$'\033[2m'; BLUE=$'\033[34m'; RESET=$'\033[0m'
else
  BOLD=""; DIM=""; BLUE=""; RESET=""
fi

# ---------------------------------------------------------------------------
# uule: prefixo fixo + um caractere que codifica o comprimento + base64 do nome
# ---------------------------------------------------------------------------
uule_for() {
  python3 - "$1" <<'PY'
import base64, sys
name = sys.argv[1]
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
key = alphabet[len(name) % len(alphabet)]
print("w+CAIQICI" + key + base64.b64encode(name.encode("utf-8")).decode("ascii"))
PY
}

urlencode() {
  python3 -c 'import sys,urllib.parse; print(urllib.parse.quote_plus(sys.argv[1]))' "$1"
}

open_url() { command -v open >/dev/null 2>&1 && open "$1" || true; }

# ---------------------------------------------------------------------------
case "$MODE" in
  list)
    echo
    echo "${BOLD}Cidades disponíveis${RESET}"
    echo "$CITIES" | while IFS=: read -r slug name; do
      printf "  %-16s %s\n" "$slug" "$name"
    done
    echo
    echo "${DIM}Sem --city, o script usa: $DEFAULT_CITIES${RESET}"
    echo
    exit 0
    ;;

  brand)
    BRAND="$(grep -oE 'name: "[^"]+"' "$ROOT/content/site.ts" | head -1 | sed -E 's/name: "//; s/"//')"
    [ -z "$BRAND" ] && BRAND="Sabrina Cleaning Service"
    echo
    echo "${BOLD}Busca pela marca: \"$BRAND\"${RESET}"
    echo "${DIM}É a meta mais fácil e a primeira que deve cair. Sem concorrência pela"
    echo "string exata, e o domínio contém o nome. Depois de indexado, é 1º lugar.${RESET}"
    echo
    for variant in "$BRAND" "$BRAND Concord" "Sabrina cleaning Contra Costa"; do
      canonical="Concord,California,United States"
      url="https://www.google.com/search?q=$(urlencode "$variant")&uule=$(urlencode "$(uule_for "$canonical")")&pws=0&gl=us&hl=en"
      printf "  %s%s%s\n  %s%s%s\n\n" "$BOLD" "$variant" "$RESET" "$BLUE" "$url" "$RESET"
      $OPEN && open_url "$url"
    done
    echo "${DIM}Se o site não aparece em 1º pela marca depois de indexado, algo está"
    echo "errado: verifique indexação com --index e o canonical das páginas.${RESET}"
    echo
    exit 0
    ;;

  index)
    echo
    echo "${BOLD}Indexação de $DOMAIN${RESET}"
    echo "${DIM}Abra cada link e veja quantas páginas o Google já conhece.${RESET}"
    echo
    for q in "site:$DOMAIN" "site:$DOMAIN/areas" "site:$DOMAIN/services"; do
      url="https://www.google.com/search?q=$(urlencode "$q")"
      printf "  %s%s%s\n  %s%s%s\n\n" "$BOLD" "$q" "$RESET" "$BLUE" "$url" "$RESET"
      $OPEN && open_url "$url"
    done
    echo "${DIM}Zero resultados no primeiro é normal antes de o site ser publicado e"
    echo "enviado no Search Console. Ver SEO.md, passo 2.${RESET}"
    echo
    exit 0
    ;;
esac

if [ -z "$QUERY" ]; then
  echo "Falta o termo de busca. Exemplo: pnpm serp \"house cleaning\"" >&2
  echo "Use --help para ver as opções." >&2
  exit 1
fi

if [ -n "$CITY" ]; then
  TARGETS="$CITY"
else
  TARGETS="$DEFAULT_CITIES"
fi

echo
echo "${BOLD}Busca: \"$QUERY\"${RESET}"
echo "${DIM}Abra os links num navegador anônimo e deslogado da conta Google.${RESET}"
echo

found_any=false
for slug in $TARGETS; do
  canonical="$(echo "$CITIES" | grep "^${slug}:" | cut -d: -f2- || true)"
  if [ -z "$canonical" ]; then
    echo "  Cidade desconhecida: $slug (use --list)" >&2
    continue
  fi
  found_any=true

  # O uule precisa ir codificado: ele contém `+` e `=`, e numa query string
  # um `+` cru é lido como espaço, o que invalidaria a localização.
  # `pws=0` desliga personalização, `gl=us` e `hl=en` fixam país e idioma.
  url="https://www.google.com/search?q=$(urlencode "$QUERY $(echo "$canonical" | cut -d, -f1)")&uule=$(urlencode "$(uule_for "$canonical")")&pws=0&gl=us&hl=en"

  printf "  %s%s%s\n  %s%s%s\n\n" "$BOLD" "$canonical" "$RESET" "$BLUE" "$url" "$RESET"
  $OPEN && open_url "$url"
done

[ "$found_any" = false ] && exit 1

cat <<EOF
${DIM}O que olhar:
  1. O bloco do mapa no topo (3 resultados). É onde o serviço local é decidido,
     e quem manda ali é o Google Business Profile, não o site.
  2. Os resultados orgânicos abaixo. É onde as páginas de cidade competem.
  3. Quem já está ranqueando: são os concorrentes reais dela.

O uule não é documentado pelo Google. Para confirmar, use o Ad Preview
(oficial e gratuito) ou o Search Console. Os dois estão no SEO.md, passo 8.${RESET}

EOF
