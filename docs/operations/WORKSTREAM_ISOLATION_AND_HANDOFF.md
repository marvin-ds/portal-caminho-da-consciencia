# WORKSTREAM ISOLATION AND HANDOFF
## Isolamento de Trilhas, Dependências Transversais e Continuidade entre Agentes

**Data:** 14/09/2026
**Status:** VIGENTE OPERACIONAL

---

# 1. Finalidade

Este documento evita mistura de produtos, regressão documental, perda de contexto, atuação em repositório errado e uso de SPEC errada para governar domínio errado.

Regra final:

```text
Uma trilha, um contexto, um escopo, um estado conhecido.
```

Não usar a sigla proibida para identificar ou abreviar o Portal Caminho da Consciência. Quando namespace for necessário, usar `PORTAL` / `portal`.

---

# 2. Unidade de Trabalho

Todo trabalho pertence a uma trilha primária:

| Tipo | Uso |
|---|---|
| `TRANSVERSAL` | Governança, CANON, MAPA, portfólio, stack global e decisões entre trilhas |
| `PRODUCT` | Produto, oferta, página, operação, entrega e SPEC de produto específico |
| `MEU_CAMINHO` | Área pessoal, continuidade, MC-00, gates MC-* e implementação própria |
| `INSTITUTIONAL` | Site público, Home, SEO, legais, páginas públicas e integração institucional |

Antes de editar, registrar:

```text
WORKSTREAM:
DOMAIN:
OWNER_SPEC:
BRANCH:
```

---

# 3. Produtos

Cada produto deve ter:

- chat/contexto próprio;
- sessão própria de Claude Code e/ou Codex;
- owner SPEC;
- branch/worktree própria quando aplicável;
- checkpoint próprio;
- estado próprio.

Produto não altera produto vizinho. Produto não altera Home automaticamente. Produto não altera infraestrutura compartilhada sem dependência aprovada.

---

# 4. Meu Caminho

Meu Caminho possui trilha própria e é governado por `SPEC-MEU-CAMINHO-001`.

Essa trilha inclui implementação, auditoria MC-00, gates MC-*, checkpoints próprios e decisões internas da área.

Não usar a sessão de Meu Caminho como lugar genérico para implementar produto.

---

# 5. Transversal

A trilha transversal cuida de:

- governança global;
- CANONs;
- MAPA;
- portfólio;
- stack global;
- documentação geral;
- dependências compartilhadas;
- decisões que atravessem mais de uma trilha.

Ela não deve virar sessão de implementação específica.

---

# 6. Institucional

A trilha institucional cuida de:

- site público;
- Home;
- páginas públicas;
- SEO;
- legais;
- assets institucionais;
- integração explícita de ofertas aprovadas.

Rotas protegidas exigem gate institucional quando forem alteradas por necessidade de produto.

---

# 7. Dependências

Se um produto precisar de Plataforma, registrar:

```text
PLATFORM_DEPENDENCY
necessidade:
motivo:
impacto:
trilhas afetadas:
mudança proposta:
blocker:
```

Se uma mudança atravessar domínios, registrar:

```text
TRANSVERSAL_DEPENDENCY
necessidade:
motivo:
impacto:
trilhas afetadas:
mudança proposta:
blocker:
```

Não implementar silenciosamente dependências compartilhadas.

---

# 8. Alternância Claude Code / Codex

Claude Code e Codex são coimplementadores. Dentro da mesma trilha, um pode continuar o trabalho do outro.

Antes da troca, quando houver trabalho em andamento, registrar um checkpoint de continuidade.

Não tratar automaticamente um agente como auditor do outro; auditoria precisa estar no gate ou ser solicitada.

---

# 9. Checkpoint

Um checkpoint deve registrar:

- repo;
- branch;
- HEAD;
- objetivo;
- feito;
- arquivos;
- migrations;
- testes;
- pendências;
- próximo passo;
- riscos.

O checkpoint pertence à trilha. O CURRENT transversal só muda quando o estado geral muda.

---

# 10. Merge

Uma trilha só integra outra por gate explícito.

Merges devem preservar:

- rastreabilidade;
- escopo;
- owner documental;
- validação;
- rollback quando aplicável.

---

# 11. Production

Production nunca deve ser alterada como efeito colateral.

Qualquer mudança de produção exige gate próprio, precheck, autorização, validação e relatório.

---

# 12. CURRENT

CURRENT global não é product current.

- Sessão transversal atualiza `docs/operations/CURRENT.md` apenas quando houver mudança global.
- Sessão de produto atualiza checkpoint/current próprio do produto.
- Sessão de Meu Caminho atualiza checkpoint próprio de Meu Caminho.

---

# 13. Stop Conditions

Parar antes de editar se:

- o repo estiver errado;
- a branch não corresponder à trilha;
- o owner documental não estiver claro;
- a mudança invadir outra trilha;
- houver conflito com CANON;
- a decisão depender de Marcos;
- Production estiver envolvida sem gate;
- surgir requisito transversal dentro de produto;
- a tarefa exigir app/Vercel/Supabase dentro do repo institucional;
- houver risco de reintroduzir namespace proibido.

---

# 14. Regra Final

```text
Uma trilha, um contexto, um escopo, um estado conhecido.
```

Quando a fronteira não estiver clara, parar e documentar a dúvida antes de agir.
