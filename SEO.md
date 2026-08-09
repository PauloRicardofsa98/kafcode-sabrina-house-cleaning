# Do zero até aparecer no Google de Contra Costa

Tutorial de ponta a ponta: o que fazer, em que ordem, e como testar daqui do Brasil sem estar na Califórnia.

Leia a seção 0 antes de tudo. Ela evita a decepção mais comum desse tipo de projeto.

---

## 0. Como isso funciona de verdade

Quando alguém em Concord pesquisa "house cleaning near me", a tela tem **duas competições separadas** acontecendo:

```
┌─────────────────────────────────────────┐
│  Anúncios                               │  ← dinheiro
├─────────────────────────────────────────┤
│  🗺  MAPA (3 resultados)                 │  ← Google Business Profile
│     Nome · ★4,9 (87) · Concord          │     É AQUI que o cliente clica
│     Nome · ★4,8 (142) · Walnut Creek    │
│     Nome · ★5,0 (31) · Concord          │
├─────────────────────────────────────────┤
│  Resultados orgânicos                   │  ← o site
│  1. concorrente.com                     │
│  2. yelp.com/...                        │
│  3. sabrinacleaningservice.com  ←──────────  onde as páginas de cidade competem
└─────────────────────────────────────────┘
```

### Antes: são três buscas diferentes, não uma

Vale separar, porque a dificuldade e o prazo mudam completamente.

| Busca | Dificuldade | Quanto tempo | Quem chega assim |
| --- | --- | --- | --- |
| `Sabrina Cleaning Service` | Fácil | Dias | Quem já ouviu o nome |
| `cleaning service Concord` | Média a difícil | Meses | Quem está procurando alguém |
| `cleaning service` (sem cidade) | Não vale perseguir | Nunca | Ninguém útil |

**Busca de marca é praticamente garantida.** Ninguém disputa a string "Sabrina Cleaning Service", o domínio contém o nome e o site inteiro fala dele. Assim que o Google indexar, é primeiro lugar. Isso resolve o caso de quem recebeu um cartão, viu o carro, ouviu de uma vizinha e foi pesquisar para conferir se a empresa existe.

Só que **busca de marca só captura quem já conhece o nome.** Para um negócio novo, isso é quase ninguém. O cliente que ainda não sabe que ela existe digita `house cleaning near me` ou `cleaning service Walnut Creek`, e aí a disputa é outra.

**`cleaning service` sozinho não vale perseguir.** Quem digita isso sem cidade recebe resultado local pelo IP de qualquer jeito, e disputar o termo genérico no país inteiro contra franquias nacionais não é realista nem útil. O termo que traz cliente é sempre o que tem cidade ou intenção local junto.

### O mapa é onde o dinheiro está

**Para serviço local, o bloco do mapa é o que decide.** A maioria dos cliques em busca de serviço doméstico para nesses três resultados. E quem entra ali não é o site: é o **Google Business Profile** (o antigo Google Meu Negócio), com peso enorme para **quantidade e frequência de avaliações** e para a **distância** entre o endereço cadastrado e quem pesquisa.

Então a ordem de importância é, sem meio-termo:

| Peso | O quê |
| --- | --- |
| 🥇 | Google Business Profile verificado, completo e com avaliações chegando toda semana |
| 🥈 | Consistência de nome, endereço e telefone em todo lugar da internet |
| 🥉 | O site: páginas de cidade, JSON-LD, velocidade |

O site não é o motor. Ele é o que confirma para o Google que o negócio é real, sustenta as buscas de cauda longa ("move out cleaning Walnut Creek deposit") e converte quem chega. Sem ele o Business Profile rende menos. Só com ele, quase nada acontece.

### Quanto tempo leva

Não existe atalho honesto aqui.

| Prazo | O que esperar |
| --- | --- |
| Semana 1 | Site no ar e indexado. Buscas pelo nome da empresa já acham. |
| Semanas 2 a 6 | Business Profile verificado e aparecendo em buscas pouco disputadas |
| Meses 2 a 4 | Páginas de cidade começam a pegar cauda longa. Mapa depende das avaliações. |
| Meses 4 a 8 | Com avaliações constantes, disputa real no mapa das cidades vizinhas à base |
| Mês 12+ | Posição consolidada nas cidades onde ela de fato trabalha |

Quem promete primeira página em 30 dias está vendendo anúncio ou mentindo.

### O domínio é `.com.br`, e o que isso custa

Decisão tomada: a cliente fica com `sabrinacleaningservice.com.br`.

`.br` é um ccTLD, e a documentação do Google diz que ccTLD é *"um sinal forte, tanto para usuários quanto para buscadores, de que o site é destinado explicitamente a um determinado país"*. Ele trata alguns como genéricos (`.tv`, `.me`), mas `.br` não é um deles. E os métodos de sobrescrever o país valem, nas palavras do próprio Google, *"se o seu site tem um domínio de topo genérico como `.com` ou `.org`"*. Para ccTLD, não há como.

O impacto, distribuído pelos três tipos de busca acima:

| | Impacto do `.com.br` |
| --- | --- |
| Busca de marca | Praticamente nenhum. É o objetivo declarado, e ele está preservado. |
| Bloco do mapa | Baixo. Quem responde ali é o Business Profile, não o domínio. |
| Orgânico com intenção local | Real. É onde as 19 páginas de cidade competem. |

**Todo o resto que sinaliza os EUA já está no site:** `hreflang` `en-US`, endereço e telefone americanos no `LocalBusiness`, `areaServed` com as 19 cidades, conteúdo em inglês. Isso é exatamente a lista que o Google descreve como sinais de segmentação. O único item que falta é o TLD, e é o único que não dá para mudar sem trocar de domínio.

Se um dia ela mudar de ideia, um `.com` custa cerca de US$ 12 por ano e o `.br` vira redirect 301. O ranqueamento de marca acompanha, e nada do trabalho feito se perde.

### O que a concorrência já tem

`paixaocleaning.com` é o concorrente direto mapeado no briefing. Ele tem licença municipal, credenciamento BBB, mais de 30 fotos de antes e depois e anos de operação. Não dá para empatar em autoridade no primeiro mês. Dá para ganhar em **especificidade**: ele tem uma página listando 34 cidades; a Sabrina tem 19 páginas, uma por cidade, cada uma falando do que muda naquela cidade.

---

## 1. Antes de publicar: o que ainda bloqueia

Estes três campos vão para o JSON-LD, o canonical e o sitemap. Publicar com placeholder e corrigir depois faz o Google indexar informação errada e leva semanas para desfazer.

Tudo em **`content/site.ts`**:

```ts
url:     "https://sabrinacleaningservice.com.br"      // ✅ confirmado
email:   "hello@sabrinacleaningservice.com.br"        // ← e-mail real, ainda placeholder
address: { locality: "Concord", postalCode: "94520" } // ← precisa bater com o Business Profile
```

Domínio e telefone `(407) 853-9402` já estão confirmados. Faltam o e-mail e o endereço.

⚠️ **O endereço é o campo mais delicado.** Ele precisa ser **exatamente igual** ao que for cadastrado no Google Business Profile. Divergência entre o site e o perfil é um dos motivos mais comuns de o negócio não ranquear no mapa.

Se ela atende na casa do cliente e não recebe ninguém no endereço dela, isso tem nome no Google: **service-area business**. O endereço fica oculto no perfil, mas ainda precisa ser cadastrado e verificado.

### Duas alegações que estão desligadas

Em `content/site.ts`:

```ts
claims: {
  licensedAndInsured: false,   // vira true quando ela confirmar o seguro
  backgroundChecked: false,
}
```

"Licensed & insured" converte muito no mercado americano e o texto já está pronto e traduzido. Mas é afirmação legal: publicar sem ter é risco real, não detalhe.

---

## 2. Publicar

```bash
# 1. Vercel: importe o repositório. O framework é detectado sozinho.
# 2. Aponte o domínio nas configurações do projeto.
# 3. Confirme que a versão com www e a sem www resolvem para a mesma
#    (a Vercel faz o redirect automaticamente, mas confira).
```

Não há variável de ambiente para configurar. O formulário não usa backend.

**Depois do deploy, confira:**

```bash
curl -sI https://sabrinacleaningservice.com.br | head -3          # 200
curl -s  https://sabrinacleaningservice.com.br/robots.txt          # aponta o sitemap
curl -s  https://sabrinacleaningservice.com.br/sitemap.xml | head  # 54 URLs
```

---

## 3. Google Search Console

É a ferramenta oficial e gratuita. Sem ela você fica no escuro.

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade como **Domain** (não como URL prefix): cobre http, https, www e subdomínios de uma vez
3. Verifique pelo registro TXT no DNS
4. **Sitemaps** → envie `sitemap.xml`
5. **Inspeção de URL** → cole a home → **Solicitar indexação**. Repita para as 3 ou 4 cidades mais importantes.

O resto entra sozinho pelo sitemap, em dias ou semanas.

> Enviar o sitemap não garante indexação. O Google decide o que vale indexar. Página com conteúdo próprio (que é o caso das 19) tem chance muito maior do que página gerada em massa.

---

## 4. Google Business Profile, o passo que mais importa

Se você só puder fazer uma coisa desta lista, faça esta.

1. [business.google.com](https://business.google.com) → criar perfil
2. **Nome:** `Sabrina Cleaning Service`, exatamente como no site. Sem adicionar palavra-chave ("Sabrina Cleaning Service Concord" é violação de diretriz e pode suspender o perfil).
3. **Categoria principal:** `House cleaning service`
   **Categorias secundárias:** `Cleaning service`, `Deep cleaning service`
4. **Tipo:** marque que atende na casa do cliente → vira service-area business, o endereço fica oculto
5. **Áreas atendidas:** cadastre as 19 cidades. O Google aceita até 20, então cabe exatamente.
6. **Verificação:** hoje costuma ser por vídeo (mostrar equipamentos, veículo, materiais impressos e o entorno do endereço). Pode levar de dias a algumas semanas. É a etapa mais lenta do processo inteiro, então **comece por ela**.
7. **Preencher tudo:** horário, telefone (o mesmo do site), site (a home), serviços com descrição, atributos (identificada como negócio de mulher, se ela quiser)
8. **Fotos:** o item mais subestimado. Perfis com foto recebem sensivelmente mais clique. Antes e depois de trabalhos reais valem mais do que qualquer imagem gerada.
9. **Ative as mensagens** no perfil. Combina com a estratégia de SMS do site.

### O motor de avaliações

É a alavanca mais forte que existe para o mapa, e a mais fácil de negligenciar.

- Pegue o link curto de avaliação no próprio perfil
- Peça **no dia da limpeza**, pessoalmente ou por SMS, enquanto o resultado está fresco
- Peça sempre, para todo cliente, não em campanhas esporádicas. Cinco avaliações por mês constantes valem mais que trinta de uma vez, que ainda parecem compradas.
- Responda todas, inclusive as ruins. Resposta é sinal de perfil ativo.
- **Nunca compre avaliação.** O Google detecta e a punição é a suspensão do perfil, que é o ativo mais valioso dela.

Modelo de SMS para pedir:

```
Hi [nome], thanks again for having us today!
If the house feels right, a quick Google review helps us a lot: [link]
Takes about 30 seconds. Either way, see you in two weeks!
```

---

## 5. Presença fora do Google

O Google cruza informação de outras fontes para confirmar que o negócio existe. O que importa aqui é **NAP consistente**: nome, endereço e telefone idênticos, caractere por caractere, em todo lugar.

Prioridade:

| Onde | Por quê |
| --- | --- |
| **Yelp** | Muito forte para serviço doméstico nos EUA, e aparece na busca do Google |
| **Nextdoor** | Onde vizinhos de Contra Costa realmente pedem indicação de faxina |
| **Bing Places** | Importa mais do que parece: é a base do Copilot e do DuckDuckGo |
| **Apple Business Connect** | Coloca o negócio no Apple Maps, gratuito |
| **Facebook e Instagram** | Preencha e linke no site (`site.socials`) |

Depois de criar cada um, volte em `content/site.ts` e preencha:

```ts
socials: {
  instagram: "https://instagram.com/...",   // null vira ícone escondido
  yelp: "https://yelp.com/biz/...",
  google: "https://g.page/...",
}
```

Link nulo não é renderizado, então não sobra ícone morto no rodapé.

---

## 6. Ligar a prova social no site

Assim que existirem avaliações reais, cole em **`content/reviews.ts`**:

```ts
export const reviews: Review[] = [
  {
    author: "Megan R.",
    location: "Walnut Creek",
    rating: 5,
    body: "texto literal da avaliação, sem editar",
    date: "2026-09-14",
    source: "google",
  },
];
```

E confirme os números em `content/site.ts`:

```ts
stats: { confirmed: true, yearsExperience: 8, homesCleaned: 500, rating: 4.9, reviewCount: 87 },
```

Duas coisas acontecem sozinhas: a seção de depoimentos troca do estado vazio para os cards, e o `aggregateRating` passa a ser emitido no JSON-LD, que é o que gera as estrelinhas no resultado de busca.

> O `aggregateRating` fica desligado de propósito enquanto não houver avaliação real. Nota inventada viola diretriz do Google e derruba o rich snippet inteiro, além de ser motivo de ação manual.

---

## 7. Manutenção

O que move o ponteiro depois dos primeiros meses, em ordem de retorno:

1. **Avaliações novas toda semana.** Nada chega perto disso.
2. **Fotos de antes e depois.** O concorrente tem 30+, o site ainda não tem a seção. Com os pares em mãos, é meia hora de trabalho.
3. **A história da Sabrina** em `content/about.ts`. Página "Sobre" com pessoa real converte mais e o Google valoriza sinal de autoria.
4. **Posts no Business Profile.** Um por semana, mesmo curto, mantém o perfil ativo.
5. **Cidade nova = página nova.** Se ela passar a atender Pleasant Hill, adicione em `content/cities.ts` com ângulo próprio. Página, sitemap, rodapé e JSON-LD se atualizam sozinhos.

---

## 8. Como testar daqui do Brasil

Aqui está o problema: pesquisar "house cleaning Concord" do Brasil devolve um resultado **diferente** do que um morador de Concord vê. O Google usa o IP, o histórico da conta e a localização do aparelho.

Estas são as formas de contornar, da mais prática para a mais confiável.

### 8.1 O script do repositório

```bash
pnpm serp --brand                             # buscas pelo nome da empresa
pnpm serp "house cleaning"                    # cidades principais
pnpm serp "deep cleaning" --city orinda       # uma cidade
pnpm serp "move out cleaning" --open          # abre no navegador
pnpm serp --index                             # o que já foi indexado
pnpm serp --list                              # cidades disponíveis
```

Ele monta URLs do Google com o parâmetro `uule`, que carrega uma localização codificada. É o mesmo mecanismo que as ferramentas de rank tracking usam.

```
https://www.google.com/search?q=house+cleaning+Concord
  &uule=w%2BCAIQICIgQ29uY29yZCxDYWxpZm9ybmlhLFVuaXRlZCBTdGF0ZXM%3D
  &pws=0&gl=us&hl=en
```

`uule` = localização · `pws=0` = sem personalização · `gl=us` = país · `hl=en` = idioma

**Abra sempre em janela anônima e deslogado da conta Google**, senão seu histórico contamina o resultado.

O script só monta a URL. Ele não faz scraping do Google, que além de bloqueado violaria os termos de uso.

⚠️ O `uule` **não é documentado** pelo Google e pode mudar sem aviso. Trate como indicação, não como verdade. Para confirmar, use 8.2 ou 8.4.

### 8.2 Ad Preview do Google Ads, o método oficial

O mais confiável dos que funcionam antes do site estar ranqueando.

1. Crie uma conta em [ads.google.com](https://ads.google.com). **É gratuito e não precisa gastar nada**, basta não ativar campanha.
2. Abra **Tools → Planning → Ad Preview and Diagnosis**
3. Defina Location = `Concord, California`, Language = English, Device = Mobile
4. Pesquise o termo

Mostra a página de resultados como um morador de lá veria, incluindo o bloco do mapa. É a ferramenta que o próprio Google oferece para isso.

### 8.3 VPN

Um servidor de saída na Califórnia devolve o resultado mais próximo do real, porque muda o IP de verdade. Qualquer VPN paga com saída em San Francisco serve. Use junto com janela anônima.

Mais fiel que o `uule`, e mais trabalhoso.

### 8.4 Search Console, a única verdade

Depois que o site estiver no ar, esqueça simulação. O Search Console mostra dados reais de gente real.

**Performance → Search results**, e então:

- Filtre por **Country = United States**
- Aba **Queries**: o que as pessoas digitaram para chegar ao site
- Aba **Pages**: quais páginas de cidade estão puxando impressão
- Coluna **Average position**: sua posição de fato

O que olhar nos primeiros meses:

| Sinal | Leitura |
| --- | --- |
| Impressões subindo, cliques em zero | Aparece, mas em posição ruim. Normal no começo. |
| Posição média entre 8 e 20 | Está na segunda página. Melhorar conteúdo dessas páginas rende. |
| Uma cidade indo bem, outras não | Reforce o conteúdo das que ficaram para trás. |
| Zero impressão depois de 6 semanas | Verifique indexação com `pnpm serp --index` |

### 8.5 O que dá para testar hoje, antes de publicar

Isso não depende de nada externo e o site já passa:

```bash
# Build e qualidade de código
pnpm build && pnpm lint

# Lighthouse sobre o build de produção
pnpm build && pnpm start &
npx lighthouse http://localhost:3002 --view                    # mobile
npx lighthouse http://localhost:3002 --preset=desktop --view   # desktop

# Cada página tem um único h1, title e canonical próprios?
curl -s http://localhost:3002/areas/concord | grep -oE '<title>[^<]*|<h1[^>]*>|rel="canonical" href="[^"]*"'

# O JSON-LD está saindo?
curl -s http://localhost:3002/areas/concord | grep -c 'application/ld+json'   # 3
```

E nestes validadores oficiais, colando o HTML gerado:

| Ferramenta | O que valida |
| --- | --- |
| [Rich Results Test](https://search.google.com/test/rich-results) | JSON-LD: LocalBusiness, FAQPage, BreadcrumbList |
| [Schema Validator](https://validator.schema.org) | Erros de estrutura no schema |
| [PageSpeed Insights](https://pagespeed.web.dev) | Core Web Vitals (só depois de publicado) |
| [Mobile-Friendly](https://search.google.com/test/mobile-friendly) | Usabilidade no celular |

---

## 9. Resumo executável

```
□  Preencher e-mail e endereço em content/site.ts (domínio e telefone já OK)
□  Confirmar seguro e ligar claims.licensedAndInsured, se for o caso
□  Deploy na Vercel + domínio apontado
□  Search Console: verificar + enviar sitemap + solicitar indexação da home
□  Conferir a busca de marca com pnpm serp --brand (deve cair em 1º em dias)
□  Google Business Profile: criar e INICIAR A VERIFICAÇÃO (é o passo mais lento)
□  Business Profile: categorias, 19 áreas, horário, serviços, fotos
□  Yelp, Nextdoor, Bing Places, Apple Business Connect, com NAP idêntico
□  Preencher socials em content/site.ts
□  Montar a rotina de pedir avaliação no dia da limpeza
□  Ao chegar as primeiras: preencher content/reviews.ts e site.stats
□  Coletar antes e depois → me chamar para montar a seção
□  Sabrina escrever a história dela → content/about.ts
□  Acompanhar semanalmente no Search Console
```

**Se der para fazer só três:** verificar o Business Profile, pedir avaliação para todo cliente, e publicar o site com o endereço batendo com o perfil. O resto é otimização em cima disso.
