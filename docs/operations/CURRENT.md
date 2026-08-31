# CURRENT — Portal Caminho da Consciência
> Documento operacional vivo. Atualizar sempre que o estado mudar.
> Não contrariar documentos canônicos 01–05.

---

## GATE ATUAL

### GATE R2 — Oferta Inicial e Página de Conversão — ABERTO (2026-08-31)

**Objetivo:** Transformar o site atual em uma página coerente com a nova marca e preparada para validar comercialmente a primeira oferta do ecossistema.

**Pergunta do gate:** Conseguimos apresentar com clareza o Portal, o Método Padrão Interrompido e uma primeira oferta concreta capaz de gerar interesse, conversa e compra?

**Branch:** `feat/gate-r2-oferta-pagina-conversao`
**Base:** `main`

**Etapa atual:** R2B — Implementação em andamento (branch criada, index.html reescrito)

---

## DECISÕES FECHADAS (Gate R2)

| Decisão | Valor |
|---|---|
| Oferta principal | Mapeamento Padrão Interrompido — Individual |
| Formato | Assíncrono |
| Preço hipótese inicial | R$ 197 |
| CTA principal | WhatsApp (validação de linguagem antes de checkout direto) |
| Domínio de produção | portalcaminhodaconsciencia.com.br |
| Mensagem CTA WhatsApp | "Olá, vi o Mapeamento Padrão Interrompido no Portal Caminho da Consciência e gostaria de entender se ele faz sentido para o meu caso." |

---

## ESCOPO DO GATE R2

**Entra:**
- Reescrita completa da página atual
- Substituição da antiga identidade pública
- Aplicação da nova marca (paleta, tipografia, logo)
- Estrutura da oferta: Mapeamento Padrão Interrompido
- CTA → WhatsApp com UTMs preservadas
- Tracking: `page_view`, `offer_cta_click`, `whatsapp_click`
- SEO: `<title>`, meta description, canonical, Open Graph, JSON-LD, sitemap, robots
- Versão mobile validada
- Deploy Preview aprovado antes de produção

**Não entra:**
- Radar completo, área logada, comunidade, app
- Plataforma complexa, automações grandes, dezenas de protocolos
- Reformulação técnica desnecessária
- Checkout direto (Gate R3 ou posterior)

---

## ESTRUTURA DA PÁGINA (Gate R2)

| Bloco | Conteúdo |
|---|---|
| Hero | Reconhecimento do padrão + headline + subheadline + CTA |
| Cenas | 5 exemplos de reconhecimento sem jargão |
| Virada | Introdução do método via pergunta |
| Método | Jornada: Perceber → Mapear → Intervir → Praticar → Reavaliar → Aprofundar |
| O Caminho | Posicionamento do ecossistema maior |
| Entregáveis | Lista objetiva do que a pessoa recebe |
| Limites | O que não é (compliance e confiança) |
| Quem conduz | Marcos — apresentação humana e honesta |
| CTA final | Repetição do CTA principal |

---

## ESTADO DO GATE R2

| Item | Estado |
|---|---|
| R2A — Auditoria da página atual | ✅ |
| R2A — Aprovação do plano de mudança | ✅ |
| Branch `feat/gate-r2-*` criada | ✅ |
| R2B — Nova copy implementada | ✅ |
| R2B — Identidade visual aplicada | ✅ |
| R2B — CTA + WhatsApp funcionando | ✅ |
| R2B — Tracking implementado | ✅ (Pixel, ViewContent, offer_cta_click, whatsapp_click, UTM) |
| R2B — SEO completo | ✅ (title, description, canonical, OG, JSON-LD) |
| R2B — Mobile validado | ✅ (360/375/430/768px — sem overflow) |
| R2B — Deploy Preview gerado | ✅ — https://6a9594058a0be08aa0146e88--portal-caminho-da-consciencia.netlify.app |
| R2B — Deploy Preview aprovado | PENDENTE — aguardando decisão de Marcos |
| Merge em `main` | PENDENTE |

---

## CRITÉRIOS DE APROVAÇÃO DO GATE R2

- [ ] Nova marca aplicada integralmente
- [ ] Nenhuma referência pública a "Portal Anjos da Prosperidade"
- [ ] Promessa coerente com Doc 01
- [ ] Mapeamento compreensível para leigo
- [ ] CTA funcionando
- [ ] WhatsApp funcionando com mensagem pré-preenchida
- [ ] UTMs preservadas no clique
- [ ] Tracking: `page_view`, `offer_cta_click`, `whatsapp_click` disparando
- [ ] Metadata correta (title, description, OG, canonical)
- [ ] Mobile validado (sem overflow relevante)
- [ ] Desktop validado
- [ ] Zero erro crítico de console
- [ ] Build aprovado no Netlify (Deploy Preview)
- [ ] `CURRENT.md` atualizado
- [ ] Merge controlado em `main`

---

## BLOCKERS

- Nenhum blocker ativo. Aguardando autorização explícita de Marcos para Deploy Preview.

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

**Decisões fechadas no R1:**
- Nome: Portal Caminho da Consciência
- Repo: `marvin-ds/portal-caminho-da-consciencia`
- Netlify: `portal-caminho-da-consciencia`
- Branch de produção: `main`
- Estrutura docs: `/docs/canonical/` + `/docs/operations/CURRENT.md`
- Governança IA: `CLAUDE.md` na raiz

---

## LINKS E REFERÊNCIAS

- Repositório: https://github.com/marvin-ds/portal-caminho-da-consciencia
- Netlify project: https://app.netlify.com/projects/portal-caminho-da-consciencia
- Produção: https://portalcaminhodaconsciencia.com.br (ativo, DNS propagado 2026-08-31)
- Domínio antigo: https://portalanjosdaprosperidade.com.br (em desativação)
