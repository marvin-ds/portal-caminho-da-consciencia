# PORTAL CAMINHO DA CONSCIÊNCIA
## CURRENT — Estado Operacional Transversal do Projeto — V3.0.0

**Status:** VIVO / OPERACIONAL
**Data:** 14/09/2026
**Função:** snapshot transversal do projeto após refundação documental, integração das SPECs transversais e conclusão do NS-01.
**Substitui:** CURRENT V2.11

---

# 0. Função

Este CURRENT geral registra somente o estado transversal verificável do Portal Caminho da Consciência.

Ele não substitui CANONs, não substitui SPECs, não substitui ADRs e não deve funcionar como CURRENT interno de produtos ou de Meu Caminho.

A documentação geral sabe que uma trilha existe, qual documento a governa e quando uma dependência precisa voltar para governança transversal. Ela não deve duplicar preço, backlog, cronograma, migrations, previews ou estado interno de produto.

---

# 1. Fonte da verdade

| Documento | Versão | Status | Função |
|---|---:|---|---|
| `CANON-00` a `CANON-07` | `1.0.0` | VIGENTE | Núcleo normativo do Portal |
| `MAPA-00` | `1.1.0` | VIGENTE | Índice, navegação e estado documental |
| `SPEC-PORTFOLIO-00` | `1.0.0` | APROVADO | Portfólio, esteira e arquitetura comercial |
| `SPEC-MEU-CAMINHO-001` | `2.0.0` | APROVADO | Área pessoal, continuidade e auditoria MC-00 |
| `SPEC-STACK-00` | `1.0.0` | APROVADO | Stack, infraestrutura e arquitetura técnica transversal |

Hierarquia operacional:

```text
Decisão explícita posterior de Marcos Vinicius
↓
CANON-00
↓
CANON especializado aplicável
↓
SPEC transversal ou SPEC de domínio aplicável
↓
ADR / contrato / runbook / documentação operacional
↓
implementação
```

`MAPA-00` é o ponto de navegação. Ele não é autoridade normativa superior aos CANONs.

---

# 2. Estrutura conceitual atual

**Portal Caminho da Consciência:** ecossistema institucional e caminho maior.

**Método Padrão Interrompido:** método criado por Marcos Vinicius para reconhecer, mapear e trabalhar padrões recorrentes.

Arquitetura oficial do Método:

```text
RECONHECER
→ MAPEAR
→ LOCALIZAR
→ TRABALHAR
→ ALINHAR
→ EXPERIMENTAR
→ INTEGRAR
→ REAVALIAR
```

Conceito estruturante:

```text
Ponto de Interrupção
```

Jornada oficial do Portal:

```text
DESCOBRIR
→ RECONHECER
→ MAPEAR
→ TRABALHAR
→ INTEGRAR
→ APROFUNDAR
```

Quando a identificação profissional de Marcos for necessária, usar: praticante/facilitador e criador do Método Padrão Interrompido. Não usar identidade pública de terapeuta.

---

# 3. Portfólio transversal

Arquitetura aprovada de portfólio:

| Camada | Experiência | Governança |
|---|---|---|
| Conteúdo público | Conteúdos institucionais e editoriais | CANON-04, CANON-06, CANON-07 |
| Gratuito / entrada | O Minuto Anterior | Trilha e SPEC próprias |
| Entrada comercial | Antes do Aperto | Trilha e SPEC próprias |
| Personalização | Mapeamento Padrão Interrompido | Trilha e SPEC próprias |
| Técnica / intervenção | Sessão Individual Sintonize Prosperidade | Trilha e SPEC próprias; material de terceiros protegido |
| Flagship | Ciclo Padrão Interrompido — 21 dias | Trilha e SPEC próprias quando aberta |
| Premium | Acompanhamento Premium — nome final aberto | Trilha e SPEC próprias quando aberta |
| Continuidade | Meu Caminho | Camada transversal de continuidade; não é SKU |

Para modelo econômico, critérios de esteira, hipóteses, preços de teste e prioridades, consultar `docs/specs/SPEC-PORTFOLIO-00 — Esteira de Produtos, Arquitetura Comercial e Integração com Meu Caminho — V1.0.0.md`.

---

# 4. Objetivo econômico

Objetivo transversal aprovado:

```text
R$ 30.000 de lucro mensal até 31/12/2026
```

O modelo econômico, hipóteses e critérios de validação pertencem à `SPEC-PORTFOLIO-00`. Este CURRENT não fixa preços de produtos específicos.

---

# 5. Arquitetura técnica transversal

| Superfície | Repositório | Host | Função |
|---|---|---|---|
| Portal público | `marvin-ds/portal-caminho-da-consciencia` | Netlify | Site institucional, páginas públicas, SEO, legais e documentação transversal |
| Plataforma | `marvin-ds/portal-caminho-da-consciencia-app` | Vercel | Aplicação autenticada, experiências interativas e Meu Caminho |
| Backend | Supabase | Supabase | Banco, Auth, Storage, RLS e serviços de dados |

Stack transversal aprovada:

- Portal público: HTML/CSS/JS estático conforme implementação atual.
- Plataforma: Next.js, MakerKit Lite e Turborepo.
- Produção: um projeto Supabase canônico de produção.
- Auth V1: Magic Link/passwordless.

Para detalhes técnicos, decisões abertas, estado de Eduzz, providers, RLS, Storage, entitlements e arquitetura de app, consultar `docs/specs/SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.0.0.md`.

---

# 6. Estado documental concluído

| Gate | Estado | Resultado |
|---|---|---|
| DOC-01 + DOC-02 | APROVADO | Reset da fonte canônica e reclassificação do legado |
| DOC-02.3 | APROVADO | PR #7 mergeado em `main` |
| NS-01 | APROVADO | Namespace técnico migrado para `PORTAL` / `portal` |
| NS-01C | APROVADO | PR #8 mergeado em `main` |
| DOC-SPEC-01 | APROVADO | Três SPECs transversais incorporadas |
| DOC-SPEC-02 | APROVADO | PR #9 mergeado em `main` por squash |

Estado pós-DOC-SPEC:

- `main`: `21a73087ba537818367bf0d5170eca8e9f65409b`
- Netlify automático: `6aa81d124682150008671f5e`
- Estado do deploy: `ready`
- Tipo de mudança: documental, sem alteração funcional manual.

---

# 7. Trilhas independentes

Regra operacional vigente:

- Meu Caminho possui trilha, chat/sessão e checkpoints próprios.
- Cada produto possui trilha, chat/sessão, SPEC e checkpoints próprios.
- Este contexto transversal não implementa silenciosamente mudanças internas de produtos ou de Meu Caminho.
- Uma trilha não altera outra sem dependência aprovada.
- Mudança que atravessa domínios volta para gate transversal explícito.

Documento operacional de referência: `docs/operations/WORKSTREAM_ISOLATION_AND_HANDOFF.md`.

---

# 8. Estado transversal atual

Após DOC-OPS-01, não há refundação documental geral pendente conhecida.

As próximas atividades pertencem às trilhas específicas, salvo nova decisão ou dependência transversal explícita.

---

# 9. Pendências transversais

Nenhuma pendência transversal bloqueadora conhecida após este gate.

Itens de produto, Meu Caminho, app, checkout, páginas, pilotos, preço, readiness e produção devem ser tratados nos contextos próprios.

---

# 10. Riscos e guardrails

- O namespace proibido não pode retornar para identificar o Portal.
- Branches e worktrees antigas exigem auditoria antes de reintegração.
- Documentação em `docs/reference/pending-review/` não possui autoridade canônica.
- Hipótese não vira decisão fechada por repetição.
- Produto não altera Home automaticamente.
- Técnica de terceiros exige respeito a propriedade intelectual e escopo autorizado.
- Production exige gate próprio.
- CURRENT transversal não deve voltar a virar documento monolítico de produto.

---

# 11. Próxima ação transversal

Nenhum gate transversal deve ser iniciado automaticamente.

Aguardar necessidade transversal real ou decisão explícita de Marcos Vinicius.

---

# 12. Controle de versão

| Versão | Data | Alteração | Responsável |
|---|---|---|---|
| `3.0.0` | 14/09/2026 | Reescrita do CURRENT como snapshot transversal pós-refundação; formalização de isolamento de trilhas; remoção de estados internos obsoletos de produtos e app. | Marcos Vinicius / Codex |

**Fim — CURRENT — Estado Operacional Transversal do Projeto — V3.0.0**
