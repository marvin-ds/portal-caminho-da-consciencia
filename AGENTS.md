# AGENTS.md — Portal Caminho da Consciência
## Guardrails para Codex, OpenAI API e demais agentes de código

**Vigência:** a partir de 04/09/2026
**Última sincronização operacional:** 14/09/2026

---

## ETAPA 0 — VERIFICAÇÃO DE CONTEXTO OBRIGATÓRIA (CTX-00)

Antes de qualquer edição, execute e imprima:

```bash
git -C . rev-parse --show-toplevel
git -C . remote get-url origin
git -C . branch --show-current
git -C . rev-parse HEAD
git -C . fetch origin --prune
git -C . rev-parse origin/main
git -C . status -sb
git -C . log --oneline --decorate -5
```

Preencha o bloco abaixo e inclua-o no início de toda resposta de implementação:

```text
# EXECUTION CONTEXT
repo_root:
remote_origin:
branch:
HEAD:
origin_main:
surface_type:
workstream_type:
workstream_domain:
owner_spec:
deployment_target:
target_route:
allowed_paths:
protected_paths:
institutional_impact:
production_impact:
cross_workstream_dependency:
```

Valores válidos para `workstream_type`:

- `TRANSVERSAL`
- `PRODUCT`
- `MEU_CAMINHO`
- `INSTITUTIONAL`

Se `workstream_type`, domínio ou `owner_spec` não estiverem claros, parar antes de editar.

Se não puder confirmar inequivocamente que `remote_origin` contém `marvin-ds/portal-caminho-da-consciencia` e que a tarefa pertence ao site institucional ou documentação transversal deste repo, parar e reportar `WRONG_REPOSITORY_FOR_SCOPE`.

---

## ARQUITETURA

| Superfície | Repo | Stack | Host |
|---|---|---|---|
| Portal público | `marvin-ds/portal-caminho-da-consciencia` | HTML/CSS/JS estático conforme implementação atual | Netlify |
| Plataforma / app | `marvin-ds/portal-caminho-da-consciencia-app` | Next.js + MakerKit Lite + Turborepo | Vercel |
| Backend | Supabase | Auth, Postgres, Storage, RLS e serviços de dados | Supabase |

O site institucional Netlify e a aplicação Vercel são superfícies separadas.

Se a tarefa exigir `PRODUCT_APP_VERCEL` e o agente estiver neste repo institucional, parar e reportar `WRONG_REPOSITORY_FOR_SCOPE`. Não implementar app, autenticação, APIs ou Supabase dentro do repo estático.

---

## HIERARQUIA DOCUMENTAL

Ponto de navegação:

- `docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md`

Autoridade operacional:

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

Owners principais:

| Assunto | Owner documental |
|---|---|
| Governança e fonte da verdade | `CANON-00` |
| Identidade, essência e posicionamento | `CANON-01` |
| Método Padrão Interrompido | `CANON-02` |
| Público e transformação | `CANON-03` |
| Comunicação e editorial | `CANON-04` |
| Jornada e ecossistema | `CANON-05` |
| Ética, segurança e promessas | `CANON-06` |
| Operação e qualidade | `CANON-07` |
| Portfólio e esteira | `SPEC-PORTFOLIO-00` |
| Stack transversal | `SPEC-STACK-00` |
| Meu Caminho | `SPEC-MEU-CAMINHO-001` |
| Produto específico | SPEC própria da trilha |

---

## ARQUIVOS PROTEGIDOS

| Arquivo | Proteção |
|---|---|
| `index.html` | Home V1.1.1 congelada |
| `mapeamento/index.html` | Produto LIVE; não alterar sem gate explícito |
| `termos-de-uso.html` | Legal |
| `politica-de-privacidade.html` | Legal |
| `netlify.toml` | Infra |
| `robots.txt` | SEO |
| `sitemap.xml` | SEO |
| `assets/brand/` | Identidade visual |

Qualquer alteração nesses arquivos por uma trilha de produto exige `INSTITUTIONAL INTEGRATION GATE` explícito.

---

## ISOLAMENTO DE TRILHAS

Antes de editar produto, Meu Caminho ou documentação relacionada, identificar:

```text
WORKSTREAM:
DOMAIN:
OWNER_SPEC:
BRANCH:
```

Regras:

- Em `PRODUCT`, não alterar outro produto, outra SPEC ou infraestrutura compartilhada sem dependência aprovada.
- Em `MEU_CAMINHO`, não alterar domínio de produto sem dependência aprovada.
- Em `TRANSVERSAL`, não implementar internals específicos de produto ou Meu Caminho.
- Em `INSTITUTIONAL`, limitar-se ao site público, SEO, legais, documentação institucional ou integração explicitamente aprovada.

Se uma trilha exigir mudança compartilhada, classificar como `TRANSVERSAL_DEPENDENCY` ou `PLATFORM_DEPENDENCY` e voltar para gate transversal antes de implementar.

Documento operacional: `docs/operations/WORKSTREAM_ISOLATION_AND_HANDOFF.md`.

---

## REGRAS ABSOLUTAS

### Staging

- Não usar `git add .` ou `git add -A`.
- Adicionar somente arquivos aprovados por nome.
- Antes de staging, revisar `git status --short`, `git diff --stat`, `git diff` e arquivos não rastreados.

### Namespace

A sigla proibida não deve ser usada para identificar ou abreviar o Portal Caminho da Consciência. Quando namespace for necessário, usar `PORTAL` / `portal`.

### Produtos e técnicas

Produtos, técnicas e experiências possuem SPECs e trilhas próprias. Este arquivo não é fonte de status, preço ou readiness de produto.

Para qualquer decisão de produto, consultar a SPEC aprovada e o checkpoint/current da trilha daquele produto.

Guardrails gerais que permanecem:

- Marcos não deve ser apresentado publicamente como terapeuta.
- Não apresentar o Mapeamento como diagnóstico ou medição científica.
- Não publicar promessa clínica, financeira ou espiritual indevida.
- Não incluir material proprietário de terceiros sem direito claro.
- Produto não altera Home automaticamente.
- Integração institucional exige gate explícito.

### Conclusão de gate

Ao concluir um gate:

1. registrar resultado;
2. recomendar próximo passo quando útil;
3. parar.

Nunca iniciar automaticamente o próximo gate sem autorização humana.

---

## DOCUMENTOS DE REFERÊNCIA

- `CLAUDE.md` — instruções para Claude Code e agentes cooperativos.
- `docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md` — ponto inicial de navegação.
- `docs/canonical/CANON-00` a `docs/canonical/CANON-07` — fonte normativa vigente.
- `docs/specs/` — especificações oficiais subordinadas aos CANONs.
- `docs/operations/CURRENT.md` — estado operacional transversal.
- `docs/operations/WORKSTREAM_ISOLATION_AND_HANDOFF.md` — isolamento de trilhas e handoff.
- `docs/operations/SITE_INSTITUCIONAL_BASELINE.md` — baseline protegida do site institucional.
- `docs/operations/EXECUTION_CONTEXT_AND_SITE_GUARDRAILS.md` — guardrails completos de contexto e superfície.
- `docs/reference/pending-review/` — legado sem autoridade canônica, preservado para auditoria futura.
