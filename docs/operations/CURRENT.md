# CURRENT — Portal Caminho da Consciência
> Documento operacional vivo. Atualizar sempre que o estado mudar.
> Não contrariar documentos canônicos 01–05.

---

## GATE ATUAL

### GATE R3 — Validação Comercial do Mapeamento Padrão Interrompido — ABERTO (2026-08-31)

**Objetivo:** Gerar as primeiras conversas reais com potenciais clientes, validar se a linguagem da página gera interesse qualificado, e fechar a primeira compra do Mapeamento Padrão Interrompido.

**Pergunta do gate:** A página de conversão produz conversas via WhatsApp com pessoas que se encaixam no perfil e estão dispostas a investir R$ 197?

**Branch:** `main`

**Etapa atual:** R3 — Aberto. Página em produção. Aguardando primeiras conversas.

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
