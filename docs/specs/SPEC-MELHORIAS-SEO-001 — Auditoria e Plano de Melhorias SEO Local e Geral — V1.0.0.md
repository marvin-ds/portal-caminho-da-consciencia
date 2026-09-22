# SPEC-MELHORIAS-SEO-001 — Auditoria e Plano de Melhorias SEO Local e Geral — V1.0.0

**Projeto:** Portal Caminho da Consciência  
**Domínio auditado:** `https://portalcaminhodaconsciencia.com.br`  
**Data:** 22/09/2026  
**Status:** APROVADA / SEO-01 EXECUTADO EM BRANCH  
**Workstream:** INSTITUTIONAL  
**Natureza:** documentação de auditoria e plano de melhorias futuras  

---

# 1. Objetivo

Este documento confronta a implementação atual do site institucional do Portal Caminho da Consciência com o guia:

> "Seu site existe e o Google não sabe: 20 ajustes que a IA resolve numa tarde"

O objetivo é registrar:

- o que já está implementado;
- o que está parcialmente implementado;
- o que ainda não está implementado;
- o que vale a pena implementar;
- a ordem recomendada para um próximo gate técnico de SEO.

Este documento também passa a funcionar como contrato mínimo de SEO para toda nova página pública criada no Portal.

---

# 1.1 Contrato SEO obrigatório para novas páginas

Toda página pública nova criada no site institucional deve cumprir este contrato antes de ir ao ar.

## 1.1.1 Entrada e indexação

- A página só pode entrar em produção com decisão explícita de indexação: `indexável` ou `noindex`.
- Páginas comerciais, institucionais e editoriais públicas devem ser indexáveis por padrão.
- Páginas legais, páginas de teste, previews e rotas internas devem usar `noindex` quando não houver objetivo orgânico.
- Nenhuma página pública relevante pode receber `noindex` por padrão de ferramenta, template ou cópia.
- O `robots.txt` não deve bloquear páginas públicas indexáveis.
- Toda página pública indexável deve estar acessível por HTTPS.

## 1.1.2 Entendimento semântico

- Cada página indexável deve ter exatamente 1 `H1`.
- O `H1` deve dizer claramente o que a página é.
- Cada página deve ter `title` único.
- Cada página deve ter `meta description` própria e escrita para pessoas.
- Cada página deve ter canonical absoluto.
- A hierarquia de headings deve seguir ordem compreensível: `H1` → `H2` → `H3`.
- Dados estruturados devem ser usados quando fizerem sentido para o tipo da página.

## 1.1.3 Compartilhamento e apresentação

- Cada página pública indexável deve ter Open Graph mínimo:
  - `og:title`;
  - `og:description`;
  - `og:url`;
  - `og:image`.
- Cada página pública indexável deve ter Twitter Card correspondente.
- A imagem de compartilhamento deve ser validada antes de publicação quando a página tiver função comercial ou institucional relevante.

## 1.1.4 Sitemap

- Toda nova página pública indexável deve entrar no `sitemap.xml` somente quando estiver `live`.
- Páginas `noindex` não devem entrar no sitemap.
- `lastmod` deve refletir a última alteração significativa da página.

## 1.1.5 Rastreadores de IA

- A política vigente é permitir rastreamento das páginas públicas indexáveis por buscadores e modelos de IA, salvo decisão explícita em contrário.
- Bloqueios específicos em `robots.txt` só podem ser adicionados com decisão registrada.
- Conteúdo claro, estruturado e com headings consistentes é requisito tanto para buscadores quanto para modelos de IA.

## 1.1.6 SEO local

- Schema local (`LocalBusiness`, `ProfessionalService` ou equivalente) só deve ser implementado após decisão sobre:
  - endereço público;
  - área de atendimento;
  - telefone público;
  - horário de atendimento;
  - Google Perfil da Empresa.

Sem essas decisões, novas páginas não devem inventar NAP local.

---

# 2. Escopo da auditoria

Foram considerados:

- Home institucional: `/`
- Página do Mapeamento: `/mapeamento/`
- `robots.txt`
- `sitemap.xml`
- metadados SEO e Open Graph
- dados estruturados
- redirecionamento HTTP para HTTPS
- estrutura básica de headings
- camada nova de rastreadores de IA
- SEO local em sentido estratégico

Fora do escopo da auditoria inicial:

- alteração de código;
- alteração de copy publicada;
- alteração de `robots.txt`;
- alteração de `sitemap.xml`;
- execução de Lighthouse/PageSpeed;
- acesso ao Google Search Console;
- configuração ou auditoria real do Google Perfil da Empresa.

Observação: o gate SEO-01, executado posteriormente neste mesmo documento, implementou ajustes pontuais em `/mapeamento/`, `sitemap.xml` e verificador institucional.

---

# 3. Evidências verificadas

## 3.1 Estado técnico público

O domínio oficial respondeu:

| URL | Estado observado |
|---|---|
| `https://portalcaminhodaconsciencia.com.br/` | `200` |
| `https://portalcaminhodaconsciencia.com.br/mapeamento/` | `200` |
| `https://portalcaminhodaconsciencia.com.br/robots.txt` | `200` |
| `https://portalcaminhodaconsciencia.com.br/sitemap.xml` | `200` |
| `http://portalcaminhodaconsciencia.com.br/` | `301` para HTTPS |

## 3.2 Arquivos auditados na implementação

| Arquivo | Observação |
|---|---|
| `index.html` | Home indexável, com `title`, `description`, canonical, OG, Twitter Card, JSON-LD e 1 `H1`. |
| `mapeamento/index.html` | Página indexável, com `title`, `description`, canonical, OG, Twitter Card e JSON-LD, mas sem `H1` detectado. |
| `termos-de-uso.html` | Página legal com `noindex, follow`, comportamento considerado intencional. |
| `politica-de-privacidade.html` | Página legal com `noindex, follow`, comportamento considerado intencional. |
| `robots.txt` | Permite rastreamento geral e aponta para o sitemap. |
| `sitemap.xml` | Existe e lista `/` e `/mapeamento/`. |

---

# 4. Auditoria por blocos do guia

## 4.1 Bloco 1 — Deixar entrar

Critério: o buscador precisa conseguir entrar, rastrear e indexar as páginas públicas relevantes.

| Item | Estado atual | Veredito | Vale implementar? |
|---|---|---|---|
| Remover `noindex` indevido das páginas públicas | Home e Mapeamento não têm `noindex`. | IMPLEMENTADO | Não. Manter. |
| `noindex` em páginas legais | Termos e Privacidade usam `noindex, follow`. | IMPLEMENTADO / INTENCIONAL | Não, salvo decisão estratégica contrária. |
| `sitemap.xml` existe | Existe e responde `200`. | IMPLEMENTADO | Sim, apenas manutenção. |
| Sitemap lista páginas reais | Lista `/` e `/mapeamento/`. | IMPLEMENTADO | Sim, atualizar `lastmod` e incluir futuras rotas quando existirem. |
| `robots.txt` existe | Existe e responde `200`. | IMPLEMENTADO | Sim, documentar política para rastreadores de IA. |
| `robots.txt` não bloqueia tudo | `User-agent: *` com `Allow: /`. | IMPLEMENTADO | Não. Manter. |
| HTTPS forçado | HTTP responde `301`. | IMPLEMENTADO | Não. Manter. |

### Conclusão do Bloco 1

O bloco de entrada está bem implementado. Não há sinal de bloqueio acidental para Google ou buscadores tradicionais.

Melhorias recomendadas:

1. atualizar `lastmod` do sitemap em cada publicação relevante;
2. documentar explicitamente a política de rastreadores de IA;
3. manter páginas legais fora do índice, salvo decisão futura.

---

## 4.2 Bloco 2 — Deixar entender

Critério: o buscador precisa compreender o tema, função e hierarquia de cada página.

| Item | Estado atual | Veredito | Vale implementar? |
|---|---|---|---|
| Um `H1` por página indexável | Home tem 1 `H1`; Mapeamento tem 0 `H1`. | PARCIAL | Sim. Alta prioridade. |
| `title` por página | Home, Mapeamento, Termos e Privacidade possuem `title`. | IMPLEMENTADO | Manter. |
| `description` por página | Todas as páginas auditadas possuem `description`. | IMPLEMENTADO | Refinar somente se houver estratégia de busca específica. |
| Canonical | Presente nas páginas auditadas. | IMPLEMENTADO | Manter. |
| URLs limpas | `/` e `/mapeamento/` são limpas. Legais usam `.html`. | IMPLEMENTADO / ACEITÁVEL | Não é prioridade. |
| Links internos | Home liga para Mapeamento e legais; rodapés ligam páginas principais. | IMPLEMENTADO | Manter. |
| Dados estruturados | Home tem Organization/WebSite/Person; Mapeamento tem Service/Offer. | IMPLEMENTADO | Sim, possível ampliar depois. |
| Schema para SEO local | Não há LocalBusiness/ProfessionalService com NAP completo. | NÃO IMPLEMENTADO | Depende de decisão de SEO local. |

### Achado principal

A página `/mapeamento/` não apresenta `H1` detectável no HTML atual. Isso é o ponto mais claro de melhoria técnica dentro do guia.

Recomendação futura:

- transformar o título principal visual da página do Mapeamento em `h1`, preservando layout, copy, tracking e design.

---

## 4.3 Bloco 3 — Deixar rápido e apresentável

Critério: o site precisa carregar bem, funcionar no celular e exibir link profissional ao ser compartilhado.

| Item | Estado atual | Veredito | Vale implementar? |
|---|---|---|---|
| Imagens em formato comprimido | Imagens principais usam `.webp`. | IMPLEMENTADO | Manter. |
| Cache de assets | `netlify.toml` define cache longo para `/assets/*`. | IMPLEMENTADO | Manter. |
| Mobile-first | Site já foi construído e validado em mobile nos gates anteriores. | IMPLEMENTADO | Revalidar em cada mudança. |
| `og:image` | Home e Mapeamento possuem imagem de compartilhamento. | IMPLEMENTADO | Sim, validar dimensões/peso. |
| Twitter Card | Home e Mapeamento possuem `twitter:image`. | IMPLEMENTADO | Manter. |
| Performance real em rede lenta | Não auditada neste documento. | NÃO VERIFICADO | Sim, via Lighthouse/PageSpeed. |
| Imagem de compartilhamento dedicada | Usa imagens existentes do site. | PARCIAL | Vale criar imagem dedicada se houver ganho visual. |

### Conclusão do Bloco 3

A base está boa: imagens em WebP, OG/Twitter Card, cache de assets e site mobile. O próximo ganho não é estrutural, mas de refinamento:

1. validar dimensões de `og:image`;
2. avaliar se vale criar imagem OG dedicada 1200x630;
3. rodar PageSpeed/Lighthouse mobile antes de novos ajustes.

---

## 4.4 Camada nova — Aparecer nas respostas de IA

Critério: o site não deve sumir de buscadores e modelos de IA por bloqueio acidental.

| Item | Estado atual | Veredito | Vale implementar? |
|---|---|---|---|
| `robots.txt` bloqueia rastreadores de IA? | Não há bloqueio explícito. `User-agent: *` permite `/`. | IMPLEMENTADO POR ABERTURA GERAL | Sim, documentar decisão. |
| Política explícita para GPTBot, ClaudeBot, Perplexity, etc. | Não há. | NÃO IMPLEMENTADO | Talvez. Baixa urgência técnica, média urgência estratégica. |
| Conteúdo claro e estruturado | Home e Mapeamento estão bem estruturados em seções. | IMPLEMENTADO | Manter. |
| Páginas explicativas profundas para IA | Ainda limitado a Home e Mapeamento. | PARCIAL | Sim, quando houver estratégia editorial. |

### Decisão recomendada

Não é necessário adicionar regras específicas para cada robô de IA agora, porque o `robots.txt` atual já permite rastreamento geral.

Mas vale registrar uma decisão consciente:

> O Portal permite rastreamento por buscadores e modelos de IA em páginas públicas indexáveis, mantendo páginas legais e áreas privadas fora do índice quando aplicável.

Essa decisão pode virar um ADR ou seção dentro de uma SPEC técnica de SEO.

---

# 5. SEO local

O guia destaca que, para negócios locais no Brasil, o item de maior retorno costuma ser o Google Perfil da Empresa.

## 5.1 Estado atual no repositório

Não foi encontrado, nesta auditoria, um bloco público completo de SEO local com:

- endereço físico público;
- horário de atendimento;
- área de atendimento;
- telefone local com NAP estruturado;
- schema `LocalBusiness` ou `ProfessionalService`;
- link ou integração com Google Perfil da Empresa.

Isso não é necessariamente erro. Pode ser uma escolha correta se o Portal não deseja se posicionar como negócio local com endereço físico.

## 5.2 Vale implementar?

Depende da estratégia:

| Cenário | Recomendação |
|---|---|
| O Portal atende nacionalmente/online, sem endereço físico público | Não priorizar `LocalBusiness`; focar SEO institucional e de produto. |
| Marcos deseja captar buscas locais por cidade/região | Criar Google Perfil da Empresa e estruturar NAP. |
| Haverá atendimento presencial ou regional | Implementar schema local e página/trecho institucional local. |

## 5.3 Recomendação

Antes de implementar SEO local no site, decidir:

1. haverá endereço público?
2. haverá horário público de atendimento?
3. o Portal quer disputar buscas locais ou apenas nacionais/online?
4. qual telefone público deve ser usado como NAP?
5. o Google Perfil da Empresa será criado/otimizado?

Sem essas decisões, não implementar schema local para evitar informação artificial ou desalinhada.

---

# 6. Lista priorizada de melhorias recomendadas

## P0 — Alta prioridade

### SEO-001 — Corrigir ausência de `H1` em `/mapeamento/`

**Estado:** IMPLEMENTADO EM BRANCH NO SEO-01  
**Valor:** alto  
**Risco:** baixo, se mantiver layout e copy  

Critério de aceite:

- `/mapeamento/` deve ter exatamente 1 `H1`;
- o `H1` deve representar claramente a página;
- não alterar CTA, preço, tracking, copy comercial sensível ou estrutura visual sem gate do produto;
- verificador institucional deve passar.

---

## P1 — Prioridade média

### SEO-002 — Atualizar disciplina de `sitemap.xml`

**Estado:** IMPLEMENTADO EM BRANCH NO SEO-01  
**Valor:** médio  
**Risco:** baixo  

Critério de aceite:

- `sitemap.xml` mantém apenas páginas indexáveis relevantes;
- `lastmod` reflete a última mudança significativa;
- novas páginas públicas entram no sitemap somente quando estiverem `live`;
- páginas `noindex` não entram no sitemap.

---

### SEO-003 — Registrar política de rastreadores de IA

**Estado:** IMPLEMENTADO NESTA SPEC  
**Valor:** médio  
**Risco:** baixo  

Critério de aceite:

- definir se o Portal permite rastreadores de IA em páginas públicas;
- registrar decisão em documento técnico;
- alterar `robots.txt` somente se houver decisão explícita.

---

### SEO-004 — Validar `og:image` e imagem de compartilhamento

**Estado:** VALIDADO NO SEO-01  
**Valor:** médio  
**Risco:** baixo  

Critério de aceite:

- Home e Mapeamento exibem imagem correta ao compartilhar;
- imagem tem proporção recomendada para compartilhamento;
- peso não prejudica carregamento;
- WhatsApp, Facebook e LinkedIn devem ser testados quando possível.

Validação técnica realizada em 22/09/2026:

| Página | Imagem | Dimensão | Peso | Veredito |
|---|---|---:|---:|---|
| Home | `assets/images/home/hero-cenario-v2.webp` | `1600x900` | `84468 bytes` | OK |
| Mapeamento | `assets/images/prova-processo-16x9.webp` | `1200x675` | `103138 bytes` | OK |

---

## P2 — Prioridade condicionada

### SEO-005 — SEO local / Google Perfil da Empresa

**Estado:** fora do site atual  
**Valor:** alto se houver estratégia local; baixo se o Portal for apenas online/nacional  
**Risco:** médio se informações locais forem inventadas ou inconsistentes  

Critério de decisão:

- definir se haverá posicionamento local;
- decidir NAP público;
- criar ou otimizar Google Perfil da Empresa antes de implementar schema local no site.

---

### SEO-006 — Ampliar dados estruturados institucionais

**Estado:** parcialmente implementado  
**Valor:** médio  
**Risco:** baixo/médio  

Possíveis ampliações futuras:

- `FAQPage` para perguntas frequentes;
- `BreadcrumbList` quando houver mais rotas;
- `Service` mais detalhado para o Mapeamento;
- `Organization` com `sameAs`, se houver redes oficiais consolidadas;
- `LocalBusiness` apenas se houver decisão local.

---

### SEO-007 — Auditoria PageSpeed/Lighthouse mobile

**Estado:** não executada nesta SPEC  
**Valor:** médio  
**Risco:** baixo  

Critério de aceite:

- rodar Lighthouse/PageSpeed mobile;
- registrar métricas;
- propor correções apenas se houver gargalo real;
- não alterar design por micro-otimização sem ganho verificável.

---

# 7. O que não vale implementar agora

## 7.1 Remover `noindex` das páginas legais

Não recomendado neste momento. Termos e Privacidade não precisam disputar busca orgânica e podem permanecer com `noindex, follow`.

## 7.2 Criar muitas páginas apenas para SEO

Não recomendado. O Portal deve evitar páginas vazias, genéricas ou criadas apenas para capturar palavra-chave.

## 7.3 Adicionar schema local sem decisão local

Não recomendado. SEO local exige dados consistentes, especialmente endereço, telefone, horário e área de atendimento.

## 7.4 Bloquear rastreadores de IA por padrão

Não recomendado sem decisão estratégica. O site atual está aberto; bloquear poderia reduzir descoberta em canais emergentes.

---

# 8. Gate SEO-01 — Correções técnicas leves

**Status:** EXECUTADO EM BRANCH  
**Data:** 22/09/2026  

Escopo executado:

1. adicionar exatamente 1 `H1` em `/mapeamento/`;
2. atualizar `sitemap.xml` e política de `lastmod`;
3. registrar contrato SEO obrigatório para páginas futuras;
4. registrar decisão sobre rastreadores de IA;
5. validar dimensões e peso das imagens de compartilhamento da Home e do Mapeamento;
6. atualizar verificador institucional com checks mínimos de SEO;
7. rodar verificador institucional.

Arquivos possivelmente permitidos no gate:

- `mapeamento/index.html`
- `sitemap.xml`
- `robots.txt` somente se houver decisão explícita
- `docs/specs/SPEC-MELHORIAS-SEO-001 — Auditoria e Plano de Melhorias SEO Local e Geral — V1.0.0.md`
- `scripts/verify-institutional-baseline.ps1`, se necessário

Arquivos protegidos que exigem cuidado:

- `mapeamento/index.html`, por ser página de produto live;
- `robots.txt`, por impacto SEO transversal;
- `sitemap.xml`, por impacto SEO transversal.

Critério de aprovação:

- nenhuma rota pública relevante deve ganhar `noindex` por engano;
- `/mapeamento/` deve ter 1 `H1`;
- sitemap deve listar apenas rotas indexáveis;
- `robots.txt` deve continuar permitindo rastreamento público, salvo decisão contrária;
- Home, Mapeamento, Termos, Privacidade, `robots.txt`, `sitemap.xml` e `favicon.ico` devem responder `200`;
- HTTP deve continuar redirecionando para HTTPS;
- verificador institucional deve passar.

---

# 9. Veredito

O site institucional já implementa a maior parte do guia nos pontos essenciais:

- buscadores conseguem entrar;
- Home e Mapeamento não estão bloqueados por `noindex`;
- existe `robots.txt`;
- existe `sitemap.xml`;
- HTTPS redireciona;
- Home tem metadados, `H1`, OG e JSON-LD;
- Mapeamento tem metadados, OG e schema de serviço/oferta;
- páginas legais estão corretamente protegidas de indexação ampla.

A principal melhoria objetiva é:

> corrigir a ausência de `H1` em `/mapeamento/`.

As melhorias seguintes são de governança e refinamento:

- atualizar disciplina de sitemap;
- documentar política de rastreadores de IA;
- validar imagem de compartilhamento;
- decidir se SEO local faz sentido para a estratégia do Portal.

---

# 10. Próximo passo recomendado

Abrir um gate futuro:

> **SEO-01 — Correções técnicas leves e política de rastreamento**

Esse gate deve ser pequeno, técnico e auditável. Não deve virar redesign, reescrita comercial ou criação de novas páginas.

---

**FIM DO DOCUMENTO — SPEC-MELHORIAS-SEO-001 — V1.0.0**
