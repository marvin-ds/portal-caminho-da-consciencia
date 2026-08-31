# CURRENT — Portal Caminho da Consciência
> Documento operacional vivo. Atualizar sempre que o estado mudar.
> Não contrariar documentos canônicos 01–05.

---

## GATE ATUAL

### GATE R3 — Validação Comercial do Mapeamento Padrão Interrompido — ABERTO (2026-08-31)

**Objetivo:** Gerar as primeiras conversas reais com potenciais clientes, validar se a linguagem da página gera interesse qualificado, e fechar a primeira compra do Mapeamento Padrão Interrompido.

**Pergunta do gate:** A página de conversão produz conversas via WhatsApp com pessoas que se encaixam no perfil e estão dispostas a investir R$ 197?

**Branch:** `main`

**Etapa atual:** R3B — APROVADO ✅. Aguardando R3C — Validação da campanha Search (criação e configuração inicial).

---

## GATE R3B — Configuração de Conversões no Google Ads — ✅ APROVADO (2026-08-31)

### O que foi feito

| Item | Estado |
|---|---|
| Ação de conversão `whatsapp_click` criada no Google Ads | ✅ |
| Origem: Google Analytics (GA4) — propriedade Portal Caminho da Consciência | ✅ |
| Categoria: Contatos | ✅ |
| Valor: Não usar valor | ✅ |
| Contagem: Uma conversão (deduplicada por sessão) | ✅ |
| Janela de conversão de clique: 90 dias (padrão) | ✅ |
| Otimização: Ação secundária — não incluída em "Conversões", apenas em "Todas as conversões" | ✅ |
| `offer_cta_click`: NÃO criado como conversão no Ads (GA4 only, conforme especificado) | ✅ |

### Configuração verificada

| Campo | Valor |
|---|---|
| Nome | Portal Caminho da Consciência (web) whatsapp_click |
| Código do tipo de conversão | 7741395980 |
| Data de criação | 31/08/2026 |
| Otimização de ações | Contatos, Ação secundária |
| Valor | Não usar valor |
| Origem | Google Analytics (GA4) |
| Evento do GA4 | whatsapp_click |
| Propriedade GA4 | Portal Caminho da Consciência |
| Contagem | Uma conversão |
| Janela de conversão de clique | 90 dias |
| Conta Google Ads | 918-471-6756 Reconexão Terapias |

### Decisões registradas

- `purchase` e `close_convert_lead`: NÃO configurados — aguardam integração real de pagamento
- Ação secundária = aparece apenas em "Todas as conversões", nunca em "Conversões" (não afeta otimização de lances)

---

## GATE R3C — Validação da Campanha Search — ABERTO (2026-08-31)

**Objetivo:** Criar e configurar a primeira campanha Search no Google Ads, validar estrutura, segmentação e orçamento inicial.

**Critério de aprovação:** Campanha criada, revisada e aprovada por Marcos antes de ativar.

**Branch:** `main`

---

## GATE R3A — Camada de Mensuração GTM + GA4 — ✅ CONCLUÍDO (2026-08-31)

### O que foi feito

| Item | Estado |
|---|---|
| GTM instalado no `index.html` (GTM-WC2C397G) | ✅ |
| Consent Mode v2 — defaults negados antes de qualquer tag | ✅ |
| GTM noscript no `<body>` | ✅ |
| `getUtms()` captura UTMs + gclid/gbraid/wbraid | ✅ |
| `session_context` push ao carregar página | ✅ |
| `section_view` — IntersectionObserver 9 seções (30% threshold) | ✅ |
| `scroll_depth` — thresholds 25/50/75/90 | ✅ |
| `offer_cta_click` — dataLayer.push nos CTAs | ✅ |
| `whatsapp_click` — dataLayer.push nos links WA | ✅ |
| Commit e push para `main` (HEAD: dc89c76) | ✅ |

### GTM Container — Versão 2 (publicada 31/08/2026)

| Item | Valor |
|---|---|
| Container ID | GTM-WC2C397G |
| GA4 Measurement ID | G-2C2WWT3ZQG |
| Versão publicada | 2 — Ativa |
| Tags | GA4 Configuration, offer_cta_click, scroll_depth, section_view, whatsapp_click, Conversion Linker |
| Acionadores | Custom Event para cada evento (4 total) |
| Variável | dlv - cta_local (Data Layer Variable) |

---

## DECISÕES FECHADAS (Gate R3)

| Decisão | Valor |
|---|---|
| Canal de validação | WhatsApp direto (sem checkout automatizado) |
| Preço de teste | R$ 197 |
| Critério mínimo de sucesso | Pelo menos 1 conversa qualificada + 1 compra confirmada |
| Próximo passo após aprovação | Gate R4 — definir a jornada pós-compra |

---

## ESTADO DO GATE R3

| Item | Estado |
|---|---|
| Página em produção | ✅ — https://portalcaminhodaconsciencia.com.br |
| Camada GTM + GA4 publicada (R3A) | ✅ — GTM-WC2C397G Versão 2 ativa |
| Conversão `whatsapp_click` configurada no Ads (R3B) | ✅ — Código 7741395980, Ação secundária |
| Campanha Search criada e validada (R3C) | ABERTO |
| Primeiro tráfego orgânico/direto | PENDENTE |
| Primeira conversa via WhatsApp | PENDENTE |
| Primeira compra confirmada | PENDENTE |
| Avaliação de copy e ajustes | PENDENTE |

---

## BLOCKERS

Nenhum blocker ativo.

---

## GATE R2 — Oferta Inicial e Página de Conversão — ✅ APROVADO (2026-08-31)

**Aprovação:** Marcos — "R2B — PREVIEW APPROVED ✅" → R2C validado em produção.

### Checklist de produção (R2C) — todos aprovados

| Item | Resultado |
|---|---|
| Nova página servida em produção | ✅ |
| HTTPS válido | ✅ |
| Título: "Mapeamento Padrão Interrompido \| Portal Caminho da Consciência" | ✅ |
| Canonical: https://portalcaminhodaconsciencia.com.br | ✅ |
| OG title e OG URL corretos | ✅ |
| JSON-LD presente | ✅ |
| Meta Pixel 1566666134485463 ativo | ✅ |
| Meta Pixel 4659045990859789 ativo | ✅ |
| ViewContent disparando no page load | ✅ |
| offer_cta_click implementado | ✅ |
| whatsapp_click implementado | ✅ |
| Número WhatsApp 55013996083913 correto | ✅ |
| Zero referência a SEU_NUMERO | ✅ |
| Zero referência a "Anjos da Prosperidade" | ✅ |
| 9 seções presentes (hero→cta-final) | ✅ |
| Footer presente | ✅ |
| Zero erros críticos de console | ✅ |
| Overflow horizontal | ✅ (falso positivo no sandbox — mobile validado em R2B) |
| main local/remoto sincronizados | ✅ (HEAD: 8a9aac6) |

### Deploy de produção

| Item | Valor |
|---|---|
| Deploy ID | 6a95bbb85b045b000863b705 |
| Estado | ready |
| Branch | main |
| HEAD no deploy | 8a9aac6 |
| Domínio | https://portalcaminhodaconsciencia.com.br |

### Estado final do Gate R2

| Item | Estado |
|---|---|
| R2A — Auditoria da página atual | ✅ |
| R2A — Aprovação do plano de mudança | ✅ |
| Branch `feat/gate-r2-*` criada | ✅ |
| R2B — Nova copy implementada | ✅ |
| R2B — Identidade visual aplicada | ✅ |
| R2B — CTA + WhatsApp funcionando | ✅ |
| R2B — Tracking implementado | ✅ |
| R2B — SEO completo | ✅ |
| R2B — Mobile validado | ✅ |
| R2B — Deploy Preview gerado e aprovado | ✅ |
| Merge em `main` (--ff-only) | ✅ |
| R2C — Deploy de produção validado | ✅ |
| CURRENT.md atualizado | ✅ |

---

## GATE R1 — Rename Foundation — ✅ APROVADO (2026-08-31)

| Item | Estado |
|---|---|
| GitHub renomeado para `portal-caminho-da-consciencia` | ✅ |
| Pasta local renomeada | ✅ |
| Remote local atualizado | ✅ |
| Branch de migração criada e mergeada | ✅ |
| `index.html` — título, OG, navbar, footer, copyright | ✅ |
| `README.md` — conteúdo canônico | ✅ |
| Netlify vinculado ao repo correto | ✅ |
| Docs canônicos 01–05 em `/docs/canonical/` | ✅ |
| Assets de marca em `/assets/brand/` | ✅ |
| `CLAUDE.md` criado na raiz | ✅ |
| Merge PR #1 em `main` | ✅ |
| Domínio `portalcaminhodaconsciencia.com.br` ativo | ✅ |

---

## LINKS E REFERÊNCIAS

- Repositório: https://github.com/marvin-ds/portal-caminho-da-consciencia
- Netlify project: https://app.netlify.com/projects/portal-caminho-da-consciencia
- Produção: https://portalcaminhodaconsciencia.com.br (ativo, DNS propagado 2026-08-31)
- Domínio antigo: https://portalanjosdaprosperidade.com.br (em desativação)
- Deploy Preview R2B: https://6a9594058a0be08aa0146e88--portal-caminho-da-consciencia.netlify.app
- GTM: https://tagmanager.google.com/#/container/accounts/6374341210/containers/262801474
- GA4 Property: G-2C2WWT3ZQG (Stream ID: 15534016121)
