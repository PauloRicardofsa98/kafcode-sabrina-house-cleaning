#!/usr/bin/env bash
#
# Gera links de busca do Google "como se você estivesse" numa das cidades
# atendidas, para conferir o resultado local sem estar na Califórnia.
#
# Uso:
#   pnpm serp "house cleaning"                 todas as cidades principais
#   pnpm serp "deep cleaning" --city concord   só uma cidade
#   pnpm serp "house cleaning" --open          abre no navegador
#   pnpm serp --health                         checa o site publicado (canonical, sitemap, robots)
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
    --health) MODE="health"; shift ;;
    --brand) MODE="brand"; shift ;;
    --index) MODE="index"; shift ;;
    --list) MODE="list"; shift ;;
    -h|--help) sed -n '2,28p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    -*) echo "Opção desconhecida: $1 (use --help)" >&2; exit 1 ;;
    *) QUERY="$1"; shift ;;
  esac
done

if [ -t 1 ]; then
  BOLD=$'\033[1m'; DIM=$'\033[2m'; BLUE=$'\033[34m'
  GREEN=$'\033[32m'; RED=$'\033[31m'; RESET=$'\033[0m'
else
  BOLD=""; DIM=""; BLUE=""; GREEN=""; RED=""; RESET=""
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

  health)
    BASE="https://$DOMAIN"
    pass=0; fail=0
    ok()   { printf "  ${GREEN}ok  ${RESET} %s\n" "$1"; pass=$((pass+1)); }
    bad()  { printf "  ${RED}FALHA${RESET} %s\n" "$1"; fail=$((fail+1)); }

    echo
    echo "${BOLD}Saúde de $BASE${RESET}"
    echo "${DIM}Tudo aqui está sob nosso controle. Se algo falhar, é bug, não espera.${RESET}"
    echo

    code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$BASE/" || echo 000)"
    [ "$code" = "200" ] && ok "home responde 200" || bad "home respondeu $code"

    home="$(curl -s --max-time 25 "$BASE/?cb=$$" || true)"
    canon="$(printf '%s' "$home" | grep -oE '<link rel="canonical" href="[^"]*"' | head -1 | sed -E 's/.*href="//; s/"//')"
    case "$canon" in
      "$BASE"|"$BASE/") ok "canonical da home aponta para o domínio certo" ;;
      "") bad "home sem canonical" ;;
      *) bad "canonical da home aponta para $canon" ;;
    esac

    city="$(curl -s --max-time 25 "$BASE/areas/concord?cb=$$" || true)"
    ccanon="$(printf '%s' "$city" | grep -oE '<link rel="canonical" href="[^"]*"' | head -1 | sed -E 's/.*href="//; s/"//')"
    [ "$ccanon" = "$BASE/areas/concord" ] && ok "canonical de página de cidade correto" || bad "canonical de cidade: $ccanon"

    if printf '%s' "$home" | grep -qiE '<meta name="robots"[^>]*noindex'; then
      bad "home tem meta robots noindex"
    else
      ok "sem meta noindex"
    fi

    if curl -sI --max-time 20 "$BASE/" | grep -qi "x-robots-tag.*noindex"; then
      bad "header X-Robots-Tag bloqueia indexação"
    else
      ok "sem X-Robots-Tag bloqueando"
    fi

    robots="$(curl -s --max-time 20 "$BASE/robots.txt" || true)"
    printf '%s' "$robots" | grep -q "Sitemap: $BASE/sitemap.xml" \
      && ok "robots.txt aponta o sitemap certo" \
      || bad "robots.txt com sitemap errado ou ausente"

    sm="$(curl -s --max-time 30 "$BASE/sitemap.xml" || true)"
    n="$(printf '%s' "$sm" | grep -c '<loc>' || echo 0)"
    [ "$n" -gt 0 ] && ok "sitemap com $n URLs" || bad "sitemap vazio ou inacessível"

    outside="$(printf '%s' "$sm" | grep -oE '<loc>[^<]*</loc>' | grep -cv "$BASE" || true)"
    [ "${outside:-0}" = "0" ] && ok "todas as URLs do sitemap no domínio certo" \
      || bad "$outside URL(s) do sitemap em outro domínio"

    printf '%s' "$home" | grep -q 'hrefLang="en-US"' \
      && ok "hreflang en-US presente" || bad "hreflang ausente"

    printf '%s' "$home" | grep -q 'application/ld+json' \
      && ok "JSON-LD presente" || bad "JSON-LD ausente"

    for path in "/" "/pt" "/es" "/services" "/areas" "/areas/concord" "/services/deep-cleaning" "/quote"; do
      c="$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$BASE$path" || echo 000)"
      [ "$c" = "200" ] || bad "$path respondeu $c"
    done
    ok "amostra de 8 rotas responde 200"

    echo
    if [ "$fail" -eq 0 ]; then
      echo "  ${GREEN}${pass} verificações passaram.${RESET} O que depende de nós está pronto."
      echo "  ${DIM}O resto é o Google levar o tempo dele. Use --index e --brand.${RESET}"
    else
      echo "  ${RED}${fail} falha(s)${RESET} e ${pass} ok. Corrija antes de esperar resultado de busca."
    fi
    echo
    [ "$fail" -eq 0 ] || exit 1
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
