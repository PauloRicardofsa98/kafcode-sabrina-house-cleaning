# Assets do Sabrina Cleaning Service

Lista completa das imagens que o site referencia. **O código já aponta para os caminhos finais**, então tudo o que estiver faltando aparece quebrado até o arquivo existir. Isso é esperado, não é bug.

As páginas de cidade **não têm foto**: são 18 cidades, e gerar uma imagem crível para cada uma custaria mais do que entrega. O que sustenta essas páginas é o texto local.

Cada entrada tem nome, caminho exato, dimensões e um **prompt autossuficiente** pronto para colar no ChatGPT. Os prompts repetem estilo, paleta e iluminação de propósito: cada um funciona sozinho, sem você precisar ler o resto do arquivo.

## Índice

| # | Asset | Caminho | Status |
| --- | --- | --- | --- |
| 1 | Hero da home | `public/images/hero-sabrina-house-cleaning-bay-area.webp` | ✅ pronto |
| 2 | Serviço: Recurring | `public/images/services/recurring-cleaning-bay-area-home.webp` | ✅ pronto |
| 3 | Serviço: Deep | `public/images/services/deep-cleaning-kitchen-san-francisco.webp` | ✅ pronto |
| 4 | Serviço: Move in/out | `public/images/services/move-out-cleaning-empty-apartment.webp` | ✅ pronto |
| 5 | Serviço: Post-construction | `public/images/services/post-construction-cleaning-remodel.webp` | ✅ pronto |
| 6 | Open Graph | `public/images/og/sabrina-house-cleaning-og.jpg` | ✅ pronto |
| · | Logo completa | `public/images/sabrina-house-cleaning-logo-full.png` | ✅ pronto |
| · | Mascote recortada | `public/images/sabrina-house-cleaning-mascot.webp` | ✅ pronto |
| · | Favicon SVG | `app/icon.svg` | ✅ pronto |
| · | Ícones PNG (180/192/512) | `public/images/icons/` | ✅ pronto |
| · | Foto da Sabrina | a definir | 🔴 pendência da cliente |
| · | Fotos de trabalhos reais | a definir | 🔴 pendência da cliente |
| · | Antes e depois | a definir | 🔴 pendência da cliente |

## Como salvar

O ChatGPT devolve PNG e você **não precisa converter à mão**. Salve o PNG na pasta certa, com o nome final da tabela acima (só trocando a extensão para `.png`), e rode:

```bash
pnpm images
```

O script varre `public/`, descobre pelo diretório qual formato, tamanho e qualidade cada imagem deve ter, e converte. Rodar de novo não faz nada: o que já está em dia é pulado.

| Onde você salvou | O que o script faz |
| --- | --- |
| `public/images/*.png` | WebP, máx. 2400px de largura, q82 |
| `public/images/services/*.png` | WebP, máx. 1600px, q82 |
| `public/images/og/*.png` | JPEG **exatamente** 1200×630 (corta pelo centro), q86 |
| `public/images/icons/*` | não toca, porque o PWA exige PNG |
| `sabrina-house-cleaning-logo-full.png` | não toca, porque o JSON-LD referencia esse PNG |

Imagens menores que o teto **não são ampliadas**, então salvar em resolução alta é sempre melhor que salvar pequeno.

Opções:

```bash
pnpm images --dry-run    # mostra o que faria, sem escrever nada
pnpm images --clean      # apaga o PNG original depois de converter
pnpm images --force      # reconverte mesmo o que já está em dia
```

Depois de conferir o resultado, `--clean` evita deixar os PNGs pesados no repositório. A única dependência é o ImageMagick (`brew install imagemagick`); o script avisa se não achar.

---

## 1. Hero: foto principal da home

- **Caminho:** `public/images/hero-sabrina-house-cleaning-bay-area.webp`
- **Dimensões:** 2400×3000 (4:5 vertical; no desktop aparece em retrato, no mobile é cortada)
- **Formato:** WebP, qualidade 82
- **Uso:** coluna direita do hero da home. É a primeira imagem que o visitante vê.

```
Photorealistic interior photography of a bright, freshly cleaned living room in a San Francisco Bay Area home. Vertical 4:5 composition. Large bay window on the left letting in soft, diffused natural daylight; no direct sun, no harsh shadows. Light oak floor with a visible clean sheen, a pale linen sofa with two neatly arranged cushions, a low wooden coffee table with a single small ceramic vase holding one branch of eucalyptus, and a folded throw blanket. Surfaces completely clear and uncluttered, with no clutter, no papers, no electronics, no cleaning product bottles, no mops or buckets. Warm neutral palette: ivory walls (#FAF7F2), warm sand textiles, natural oak, with one small accent of deep navy blue. No people in frame. No text, no logos, no watermarks. Shot on a 35mm lens at f/4, slight natural depth of field, editorial real-estate photography, calm and airy mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, fisheye, staged stock-photo look, visible brands, text overlays.
```

## 2. Serviço: Recurring Cleaning

- **Caminho:** `public/images/services/recurring-cleaning-bay-area-home.webp`
- **Dimensões:** 1600×1200 (4:3)
- **Formato:** WebP, qualidade 82
- **Uso:** card de serviço na home e no hub, e imagem principal de `/services/recurring-cleaning`

```
Photorealistic interior photography of a tidy kitchen counter and clean hardwood floor in a Bay Area home after a routine cleaning visit. Horizontal 4:3 composition. Soft, diffused natural daylight from a window out of frame; no direct sun, no harsh shadows. Clear stone or butcher-block counter with a clean sink, a single wooden cutting board leaning upright, and a small bowl of lemons. Light oak floor with a fresh sheen. Everything put away and uncluttered, with no clutter, no dishes, no appliances crowding the counter, no cleaning product bottles, no mops or buckets. Warm neutral palette: ivory walls (#FAF7F2), warm sand, natural oak, with one small accent of deep navy blue. No people in frame. No text, no logos, no watermarks. Shot on a 35mm lens at f/4, slight natural depth of field, editorial real-estate photography, calm and airy mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, staged stock-photo look, visible brands, text overlays.
```

## 3. Serviço: Deep Cleaning

- **Caminho:** `public/images/services/deep-cleaning-kitchen-san-francisco.webp`
- **Dimensões:** 1600×1200 (4:3)
- **Formato:** WebP, qualidade 82
- **Uso:** card de serviço e imagem principal de `/services/deep-cleaning`

```
Photorealistic close-up interior photography of a spotless oven interior with clean racks and clear door glass, next to freshly scrubbed white tile grout, in a San Francisco kitchen. Horizontal 4:3 composition. Soft, diffused natural daylight from a window out of frame; no direct sun, no harsh shadows. The oven door is open, the interior is genuinely clean with no grease or burn marks; the surrounding tile backsplash has bright, even grout lines. Everything else in frame is clear and uncluttered, with no cleaning product bottles, no sponges, no gloves, no mops or buckets. Warm neutral palette: ivory (#FAF7F2), warm sand, brushed steel, with one small accent of deep navy blue. No people in frame. No text, no logos, no watermarks. Shot on a 35mm lens at f/4, slight natural depth of field, editorial real-estate photography, calm mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, staged stock-photo look, visible brands, text overlays.
```

## 4. Serviço: Move-In / Move-Out Cleaning

- **Caminho:** `public/images/services/move-out-cleaning-empty-apartment.webp`
- **Dimensões:** 1600×1200 (4:3)
- **Formato:** WebP, qualidade 82
- **Uso:** card de serviço e imagem principal de `/services/move-in-move-out`

```
Photorealistic interior photography of a completely empty apartment with bare floors and open, empty closets, cleaned and ready for a move-out inspection. Horizontal 4:3 composition. Soft, diffused natural daylight from a large window; no direct sun, no harsh shadows. Bare light oak or pale laminate floor with a clean sheen, white walls, a built-in closet with its doors open showing empty shelves and a bare hanging rod, clean white baseboards, and a clean window sill. Absolutely no furniture, no boxes, no people, no cleaning product bottles, no mops or buckets. Warm neutral palette: ivory walls (#FAF7F2), warm sand light, natural oak. No text, no logos, no watermarks. Shot on a 35mm lens at f/4, slight natural depth of field, editorial real-estate photography, calm and airy mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, fisheye, staged stock-photo look, visible brands, text overlays.
```

## 5. Serviço: Post-Construction Cleaning

- **Caminho:** `public/images/services/post-construction-cleaning-remodel.webp`
- **Dimensões:** 1600×1200 (4:3)
- **Formato:** WebP, qualidade 82
- **Uso:** card de serviço e imagem principal de `/services/post-construction`

```
Photorealistic interior photography of a freshly remodeled room, newly finished and cleaned after construction. Horizontal 4:3 composition. Soft, diffused natural daylight from a new window; no direct sun, no harsh shadows. Brand-new white window frame and sill with a spotless track, crisp new baseboards, new light oak flooring with protective covering already removed, freshly painted white walls, and a new recessed ceiling light. The room reads as new and completely clean, with no construction dust, no debris, no tools, no ladders, no paint cans, no plastic sheeting, no people, no cleaning product bottles. Warm neutral palette: ivory walls (#FAF7F2), warm sand light, natural oak. No text, no logos, no watermarks. Shot on a 35mm lens at f/4, slight natural depth of field, editorial architectural photography, calm mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, staged stock-photo look, visible brands, text overlays.
```

## 6. Open Graph: imagem de compartilhamento

- **Caminho:** `public/images/og/sabrina-house-cleaning-og.jpg`
- **Dimensões:** 1200×630 exatos
- **Formato:** JPEG, qualidade 86
- **Uso:** prévia ao compartilhar qualquer página no WhatsApp, iMessage, Facebook, LinkedIn e X

Esta é a única imagem que precisa de texto legível. Como texto gerado por IA costuma sair torto, o caminho mais seguro é gerar **só o fundo** com o prompt abaixo e depois sobrepor o texto no Canva ou Figma. A alternativa é pedir o texto ao ChatGPT e revisar caractere por caractere.

```
Photorealistic wide horizontal image, exactly 1200x630 pixels, of a bright, freshly cleaned living room in a San Francisco Bay Area home, composed with the entire left half deliberately empty and uncluttered so that text can be placed over it. Soft, diffused natural daylight from a large window on the right; no direct sun, no harsh shadows. On the right side: a pale linen sofa with two neatly arranged cushions, a light oak floor with a clean sheen, and a small ceramic vase with a single eucalyptus branch. On the left side: a plain, softly lit ivory wall with nothing on it. Warm neutral palette: ivory (#FAF7F2), warm sand, natural oak, with a small accent of deep navy blue. No people in frame, no clutter, no cleaning product bottles, no mops or buckets. No text, no lettering, no logos, no watermarks anywhere in the image. Shot on a 35mm lens at f/4, editorial real-estate photography, calm and airy mood, high resolution. Avoid: HDR effect, oversaturated colors, wide-angle distortion, staged stock-photo look, any written characters.
```

**Texto para sobrepor** (metade esquerda, tipografia Fraunces para o título e Inter para o resto):

- Título: `House cleaning in the Bay Area`
- Subtítulo: `Recurring · Deep · Move-in/out`
- Rodapé: `Sabrina Cleaning Service` + o telefone real
- Cores: título em `#0B2545`, subtítulo em `#3A5171`, marca em `#8C1D3F`

---

## Assets já prontos

Estes não precisam de nada. Foram produzidos a partir da logo que a cliente aprovou.

| Asset | Caminho | Observação |
| --- | --- | --- |
| Logo completa | `public/images/sabrina-house-cleaning-logo-full.png` | 512×512, baixada do site antigo e otimizada. Usada no JSON-LD (`logo` e `image`). |
| **Mascote recortada** | `public/images/sabrina-house-cleaning-mascot.webp` | 718×900 com fundo transparente, recortada da logo original. **É a marca do site**: aparece no header, no rodapé, no CTA final e na página "Sobre". |
| Favicon | `app/icon.svg` | Telhado + brilho em azul `#1565C0`, desenhado em vetor a partir da logo. |
| Ícones PNG | `public/images/icons/apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Gerados a partir do `icon.svg`. |
| Telhado vetorial | inline em `components/brand/roof-mark.tsx` | SVG desenhado à mão com os elementos da logo (telhado, janela, chaminé, brilhos). Usado pequeno, ao lado de "House Cleaning" no lockup, e como base do favicon. |

O lockup do header e do rodapé é **mascote + "Sabrina" + telhado + "House Cleaning"**, montado em arranjo horizontal (`components/brand/logo.tsx`). O arquivo original é quadrado; num header de 96px a versão quadrada deixaria o wordmark ilegível, então os mesmos elementos foram reorganizados na horizontal.

### Melhoria opcional na logo

A mascote no site vem de um recorte da PNG original (1024×1024), então ela é imagem, não vetor. Fica nítida até uns 400px de altura, que é bem mais do que o site usa. Se um dia precisar de material impresso grande, aí vale pedir a um designer a vetorização da ilustração. **Não é bloqueio para o site.**

---

## 🔴 Pendências da cliente (não têm prompt)

Foto real converte mais que imagem gerada, especialmente em serviço doméstico, onde a decisão é sobre confiar numa pessoa dentro de casa. Estas três valem mais que todas as imagens geradas acima juntas.

### Foto da Sabrina

- **Onde entra:** página `/about`, coluna direita (hoje ocupada pela mascote)
- **Como configurar:** preencher `aboutPhoto` em `content/about.ts` com o caminho do arquivo
- **O que pedir:** foto vertical (4:5), luz natural, de preferência trabalhando numa casa real ou em pé numa sala clara. Sem fundo de estúdio. Sorrindo, olhando para a câmera.

### Fotos de trabalhos reais

- **Onde entram:** podem substituir qualquer uma das imagens geradas dos serviços
- **O que pedir:** cozinha, banheiro e sala de clientes reais depois da limpeza, com autorização de uso. Celular moderno com boa luz natural já resolve.

### Antes e depois

- **Onde entram:** hoje o site não tem essa seção. O concorrente `paixaocleaning.com` tem mais de 30 fotos e isso é uma vantagem real dele
- **O que pedir:** pares do mesmo ângulo, mesma luz, antes e depois. Forno, box, rejunte e trilho de janela são os que mais impressionam
- **Se conseguirmos os pares, eu monto a seção.** É meia hora de trabalho e provavelmente o maior ganho de conversão disponível

### História da Sabrina

Não é imagem, mas é do mesmo lote: `content/about.ts` tem um campo `aboutStory` vazio esperando 2 ou 3 parágrafos em primeira pessoa dela: de onde é, há quanto tempo limpa casas na Bay Area, por que abriu o próprio negócio. Enquanto estiver vazio, a seção simplesmente não aparece. Não inventei essa parte de propósito.
