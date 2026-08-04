#!/usr/bin/env bash
#
# Converte e otimiza as imagens de public/.
#
# Fluxo esperado: você gera as imagens no ChatGPT (que devolve PNG), joga os
# arquivos na pasta certa dentro de public/images/ com o nome final, e roda:
#
#   pnpm images
#
# O script descobre sozinho o formato, o tamanho máximo e a qualidade de cada
# pasta, converte e (opcionalmente) apaga os originais.
#
# Uso:
#   pnpm images                 converte o que estiver desatualizado
#   pnpm images --dry-run       mostra o que faria, sem escrever nada
#   pnpm images --clean         apaga o arquivo de origem após converter
#   pnpm images --force         reconverte mesmo que a saída esteja atualizada
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_DIR="$ROOT/public"

DRY_RUN=false
CLEAN=false
FORCE=false

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --clean) CLEAN=true ;;
    --force) FORCE=true ;;
    -h|--help)
      sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "Opção desconhecida: $arg (use --help)" >&2
      exit 1
      ;;
  esac
done

# ---------------------------------------------------------------------------
# ImageMagick
# ---------------------------------------------------------------------------
if command -v magick >/dev/null 2>&1; then
  IM=(magick)
elif command -v convert >/dev/null 2>&1; then
  # ImageMagick 6 usa `convert` em vez de `magick`.
  IM=(convert)
else
  cat >&2 <<'EOF'
ImageMagick não encontrado.

  macOS:  brew install imagemagick
  Ubuntu: sudo apt install imagemagick

É a única dependência do script. Não entra no package.json porque é uma
ferramenta de sistema, não do projeto.
EOF
  exit 1
fi

# Cores só quando a saída é um terminal (num pipe ou CI, texto puro).
if [ -t 1 ]; then
  BOLD=$'\033[1m'; DIM=$'\033[2m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'
  BLUE=$'\033[34m'; RED=$'\033[31m'; RESET=$'\033[0m'
else
  BOLD=""; DIM=""; GREEN=""; YELLOW=""; BLUE=""; RED=""; RESET=""
fi

# ---------------------------------------------------------------------------
# Arquivos que NÃO podem ser convertidos
#
# A logo completa é referenciada como PNG no JSON-LD (`logo` e `image` do
# LocalBusiness) e os ícones do PWA precisam ser PNG por especificação.
# Converter qualquer um dos dois quebraria algo silenciosamente.
# ---------------------------------------------------------------------------
keep_as_is() {
  case "$1" in
    images/icons/*) return 0 ;;
    images/sabrina-house-cleaning-logo-full.png) return 0 ;;
    *) return 1 ;;
  esac
}

# ---------------------------------------------------------------------------
# Regras por pasta: formato, largura máxima, altura fixa (0 = proporcional),
# qualidade. Devolve "skip" para o que não deve ser tocado.
#
# Os valores batem com as dimensões declaradas em ASSETS.md.
# ---------------------------------------------------------------------------
rule_for() {
  case "$1" in
    images/og/*)                      echo "jpg 1200 630 86" ;;
    images/services/*|images/areas/*) echo "webp 1600 0 82" ;;
    images/*)                         echo "webp 2400 0 82" ;;
    *)                                echo "skip" ;;
  esac
}

human_size() {
  # `du -h` sem depender do GNU coreutils.
  du -h "$1" 2>/dev/null | awk '{print $1}'
}

# ---------------------------------------------------------------------------
# Conversão
# ---------------------------------------------------------------------------
converted=0
skipped=0
kept=0
failed=0

echo
echo "${BOLD}Otimizando imagens em public/${RESET}"
$DRY_RUN && echo "${YELLOW}modo --dry-run: nada será escrito${RESET}"
echo

# `-print0` + `read -d ''` para sobreviver a nomes com espaço.
while IFS= read -r -d '' src; do
  rel="${src#"$PUBLIC_DIR"/}"

  if keep_as_is "$rel"; then
    echo "  ${DIM}mantém  ${rel}${RESET}"
    kept=$((kept + 1))
    continue
  fi

  read -r fmt max_w fixed_h quality <<<"$(rule_for "$rel")"

  if [ "$fmt" = "skip" ]; then
    echo "  ${DIM}ignora  ${rel}${RESET}"
    kept=$((kept + 1))
    continue
  fi

  out="${src%.*}.${fmt}"
  out_rel="${out#"$PUBLIC_DIR"/}"
  in_place=false

  if [ "$out" = "$src" ]; then
    # O arquivo já está no formato final e no caminho final. É o caso do
    # JPEG do Open Graph, que o `find` também recolhe como entrada.
    # Sem este ramo ele se reconverteria a cada rodada, perdendo qualidade a
    # cada geração. Só reprocessamos se dimensão ou formato estiverem fora.
    cur_w="$("${IM[@]}" identify -format "%w" "$src" 2>/dev/null || echo 0)"
    cur_h="$("${IM[@]}" identify -format "%h" "$src" 2>/dev/null || echo 0)"
    cur_fmt="$("${IM[@]}" identify -format "%m" "$src" 2>/dev/null | tr '[:upper:]' '[:lower:]' || echo "")"

    if [ "$fixed_h" != "0" ]; then
      [ "$cur_w" = "$max_w" ] && [ "$cur_h" = "$fixed_h" ] && needs_work=false || needs_work=true
    else
      [ "$cur_w" -le "$max_w" ] 2>/dev/null && needs_work=false || needs_work=true
    fi

    # Extensão certa não garante formato certo: dá para ter um PNG chamado
    # `.jpg`, que abre em qualquer visualizador e pesa várias vezes mais.
    expected_fmt="$fmt"
    [ "$fmt" = "jpg" ] && expected_fmt="jpeg"
    if [ "$cur_fmt" != "$expected_fmt" ]; then
      needs_work=true
      echo "  ${YELLOW}formato ${RESET}${out_rel} ${DIM}(é ${cur_fmt} com extensão .${fmt}, reconvertendo)${RESET}"
    fi

    if [ "$needs_work" = false ] && [ "$FORCE" = false ]; then
      echo "  ${DIM}em dia  ${out_rel} ${DIM}(${cur_w}x${cur_h})${RESET}"
      skipped=$((skipped + 1))
      continue
    fi

    in_place=true
  elif [ "$FORCE" = false ] && [ -f "$out" ] && [ "$out" -nt "$src" ]; then
    # Já convertido e a origem não mudou desde então.
    echo "  ${DIM}em dia  ${out_rel}${RESET}"
    skipped=$((skipped + 1))
    continue
  fi

  before="$(human_size "$src")"

  if $DRY_RUN; then
    echo "  ${BLUE}faria   ${RESET}${rel} ${DIM}→${RESET} ${out_rel} ${DIM}(${fmt}, ${max_w}px, q${quality})${RESET}"
    converted=$((converted + 1))
    continue
  fi

  if [ "$fixed_h" != "0" ]; then
    # Enquadramento exato (Open Graph): preenche e corta pelo centro.
    args=(-resize "${max_w}x${fixed_h}^" -gravity center -extent "${max_w}x${fixed_h}")
  else
    # `>` só reduz: uma imagem menor que o teto não é ampliada.
    args=(-resize "${max_w}x>")
  fi

  extra=()
  if [ "$fmt" = "webp" ]; then
    extra=(-define webp:method=6)
  else
    # JPEG progressivo com subamostragem de croma: padrão da web e bem menor.
    extra=(-sampling-factor 4:2:0 -interlace JPEG)
  fi

  # Reescrever em cima da própria origem corromperia o arquivo no meio do
  # caminho, então o trabalho in-place passa por um temporário.
  if $in_place; then
    dest="${out}.tmp.$$"
  else
    dest="$out"
  fi

  # O prefixo `fmt:` força o formato de saída.
  #
  # Sem ele o ImageMagick decide pela extensão do arquivo, e no caminho
  # in-place o destino termina em `.tmp.1234`, que ele não reconhece. O
  # resultado era gravar o formato de ENTRADA com o nome de saída: um PNG de
  # 912KB chamado `og.jpg`, que abre normalmente e passa despercebido.
  #
  # `${arr[@]+"${arr[@]}"}` é para o bash 3.2 (padrão do macOS), que trata a
  # expansão de array vazio como variável não definida sob `set -u`.
  if ! "${IM[@]}" "$src" -auto-orient -strip "${args[@]}" \
      -quality "$quality" ${extra[@]+"${extra[@]}"} "${fmt}:${dest}" 2>/dev/null; then
    echo "  ${RED}falhou  ${rel}${RESET}"
    rm -f "$dest"
    failed=$((failed + 1))
    continue
  fi

  $in_place && mv -f "$dest" "$out"

  after="$(human_size "$out")"
  echo "  ${GREEN}ok      ${RESET}${out_rel} ${DIM}(${before} → ${after})${RESET}"
  converted=$((converted + 1))

  if $CLEAN && [ "$src" != "$out" ]; then
    rm -f "$src"
    echo "          ${DIM}removido o original ${rel}${RESET}"
  fi
done < <(find "$PUBLIC_DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0 | sort -z)

# ---------------------------------------------------------------------------
# Avisos sobre o resultado final
#
# 1. WebP acima do teto da pasta (veio pronto, grande demais).
# 2. Imagem que o código não referencia. Normalmente é um arquivo salvo com o
#    nome padrão do ChatGPT (`image.png`) e nunca renomeado. Sem este aviso ele
#    fica no repositório sem aparecer em lugar nenhum do site.
# ---------------------------------------------------------------------------
orphans=0

while IFS= read -r -d '' existing; do
  rel="${existing#"$PUBLIC_DIR"/}"
  read -r fmt max_w _ _ <<<"$(rule_for "$rel")"
  [ "$fmt" = "skip" ] && continue
  keep_as_is "$rel" && continue

  width="$("${IM[@]}" identify -format "%w" "$existing" 2>/dev/null || echo 0)"
  if [ "$width" -gt "$max_w" ] 2>/dev/null; then
    echo "  ${YELLOW}largo   ${RESET}${rel} ${DIM}(${width}px, teto ${max_w}px, rode com --force sobre o original)${RESET}"
  fi

  if ! grep -rqF "/$rel" "$ROOT/app" "$ROOT/components" "$ROOT/content" "$ROOT/lib" 2>/dev/null; then
    echo "  ${YELLOW}órfã    ${RESET}${rel} ${DIM}(nenhum arquivo do código aponta para ela, falta renomear?)${RESET}"
    orphans=$((orphans + 1))
  fi
  # Os parênteses são obrigatórios: sem eles o `-print0` valeria só para o
  # último ramo do `-o`, e os `.webp` sairiam separados por newline.
done < <(find "$PUBLIC_DIR" -type f \( -iname '*.webp' -o -iname '*.jpg' \) -print0 | sort -z)

if [ "$orphans" -gt 0 ]; then
  echo
  echo "  ${DIM}Os caminhos esperados estão na tabela de ASSETS.md.${RESET}"
fi

echo
printf '%s%d convertida(s)%s · %d em dia · %d mantida(s)' \
  "$GREEN" "$converted" "$RESET" "$skipped" "$kept"
[ "$failed" -gt 0 ] && printf ' · %s%d falha(s)%s' "$RED" "$failed" "$RESET"
echo
echo

if [ "$converted" -gt 0 ] && [ "$CLEAN" = false ] && [ "$DRY_RUN" = false ]; then
  echo "${DIM}Os arquivos de origem foram mantidos. Use --clean para apagá-los.${RESET}"
  echo
fi

[ "$failed" -gt 0 ] && exit 1
exit 0
