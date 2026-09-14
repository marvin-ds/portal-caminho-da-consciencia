# EXECUTION CONTEXT AND SITE GUARDRAILS
## Portal Caminho da Consciência

**Vigência:** a partir de 04/09/2026
**Última sincronização operacional:** 14/09/2026
**Lido por:** Claude Code, Codex e qualquer agente que atue neste repositório

---

## CTX-00 — Verificação Obrigatória Antes de Qualquer Edição

Antes de editar qualquer arquivo, todo agente deve executar e imprimir:

```powershell
Set-Location "C:\Projetos\portal-caminho-da-consciencia"
git rev-parse --show-toplevel
git remote get-url origin
git branch --show-current
git rev-parse HEAD
git fetch origin --prune
git rev-parse origin/main
git status -sb
git log --oneline --decorate -5
```

E imprimir obrigatoriamente:

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

Valores possíveis para `workstream_type`:

- `TRANSVERSAL`
- `PRODUCT`
- `MEU_CAMINHO`
- `INSTITUTIONAL`

Se qualquer campo crítico for desconhecido, usar `STOP` e não editar.

Se não for possível confirmar inequivocamente o repo `marvin-ds/portal-caminho-da-consciencia` e a superfície correta, parar e reportar `WRONG_REPOSITORY_FOR_SCOPE`.

---

## Classificação Obrigatória de Superfície

Toda tarefa deve ser classificada em uma categoria antes de qualquer edição.

### A — INSTITUTIONAL_NETLIFY

Para Home, páginas institucionais, páginas legais, páginas públicas estáticas, SEO, sitemap, robots e integrações públicas explicitamente aprovadas.

- Repo: `marvin-ds/portal-caminho-da-consciencia`
- Host: Netlify
- Stack: HTML/CSS/JS estático conforme implementação atual

### B — PRODUCT_PAGE_NETLIFY

Para página pública de produto quando a decisão arquitetural for Netlify.

Regra: alteração restrita à rota do produto. Não modificar Home, SEO global, legais ou assets institucionais sem gate institucional explícito.

### C — PRODUCT_APP_VERCEL

Para aplicações web, autenticação, Supabase, APIs, server functions, e-mail transacional, entitlement, dashboards, áreas autenticadas e experiências interativas complexas.

- Repo esperado: `marvin-ds/portal-caminho-da-consciencia-app`
- Host: Vercel
- Stack: Next.js + MakerKit Lite + Turborepo

Regra: não implementar dentro do site institucional Netlify.

### D — DOCS_ONLY

Para documentação. Nenhum deploy funcional manual necessário.

### E — UNKNOWN

Parar, não editar e informar o contexto ausente.

---

## Boundary Netlify / Vercel / Supabase

| Camada | Onde vive | Observação |
|---|---|---|
| Site institucional | Este repo / Netlify | Conteúdo público, páginas, SEO, legais e documentação transversal |
| Plataforma | Repo app / Vercel | App autenticado, Meu Caminho, experiências interativas e APIs |
| Backend | Supabase | Banco, Auth, Storage, RLS e dados |

`SPEC-STACK-00` governa detalhes técnicos transversais. Este documento não duplica migrations, providers, env vars ou estado interno do app.

---

## Arquivos Protegidos do Site Institucional

Estes arquivos são protegidos em qualquer workstream:

| Arquivo | Tipo |
|---|---|
| `index.html` | Home V1.1.1 congelada |
| `mapeamento/index.html` | Página de produto LIVE |
| `termos-de-uso.html` | Legal |
| `politica-de-privacidade.html` | Legal |
| `netlify.toml` | Infra Netlify |
| `robots.txt` | SEO |
| `sitemap.xml` | SEO |
| `favicon.ico` | Brand |
| `assets/brand/` | Assets institucionais |

Nenhuma trilha recebe autorização implícita para alterar estes arquivos.

Qualquer alteração exige escopo e gate explícitos compatíveis com o domínio afetado:

- Home e integração de ofertas: gate institucional explícito.
- Página de produto live: gate da página/produto e integração institucional quando aplicável.
- Termos e privacidade: autorização/gate legal ou privacidade explícito.
- `netlify.toml`: gate técnico/infra explícito.
- `robots.txt` e `sitemap.xml`: gate SEO/institucional explícito.
- `assets/brand/`: gate de identidade/institucional explícito.

Para uma trilha `PRODUCT`, qualquer alteração nesses arquivos exige `INSTITUTIONAL INTEGRATION GATE` explícito.

---

## Regra Para Novos Produtos

Construir um produto não autoriza alterar a Home automaticamente.

```text
PRODUCT BUILD
↓
PRODUCT PRODUCTION READY
↓
INSTITUTIONAL INTEGRATION GATE
↓
alterar card/status/link da Home, se aprovado
↓
regression test institucional
```

---

## Isolamento de Trilhas

Produtos, técnicas e experiências possuem SPECs, chats/sessões e checkpoints próprios.

Este documento não é fonte de status, preço ou readiness de produto.

Antes de editar:

```text
WORKSTREAM:
DOMAIN:
OWNER_SPEC:
BRANCH:
```

Regras:

- Produto não altera produto vizinho.
- Meu Caminho não é sessão genérica para implementação de produto.
- Trilha transversal não implementa internals específicos.
- Site institucional só recebe produto por gate de integração institucional.

Se produto precisar da Plataforma, registrar `PLATFORM_DEPENDENCY`.

Se mudança atravessar domínios, registrar `TRANSVERSAL_DEPENDENCY`.

Não implementar silenciosamente dependências compartilhadas.

---

## Regra de Staging

Antes de staging, sempre executar:

```bash
git status --short
git diff --stat
git diff
git ls-files --others --exclude-standard
```

Nunca usar `git add .` ou `git add -A`.

Nunca versionar:

- `.claude/settings.local.json`
- screenshots locais
- secrets / `.env`
- materiais proprietários de terceiros
- dados de clientes
- dumps / arquivos temporários

---

## Guardrails Globais de Produto, Técnica e Comunicação

- Marcos não deve ser apresentado publicamente como terapeuta.
- Não apresentar o Mapeamento como diagnóstico ou medição científica.
- Não publicar promessas clínicas, financeiras ou espirituais indevidas.
- Não incluir material proprietário de terceiros sem direito claro.
- Técnica de terceiros deve permanecer distinta de produto autoral do Portal.
- Preço, readiness, piloto e operação de produto pertencem à SPEC e ao checkpoint da trilha própria.

---

## Namespace

A sigla proibida não deve ser usada para identificar ou abreviar o Portal Caminho da Consciência.

Quando namespace for necessário, usar `PORTAL` / `portal`.

---

## Documentos de Referência

- `docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md` — navegação documental.
- `docs/canonical/CANON-00` a `docs/canonical/CANON-07` — fonte normativa vigente.
- `docs/specs/SPEC-PORTFOLIO-00 — Esteira de Produtos, Arquitetura Comercial e Integração com Meu Caminho — V1.0.0.md` — portfólio e esteira.
- `docs/specs/SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.0.0.md` — stack transversal.
- `docs/specs/SPEC-MEU-CAMINHO-001 — Área Pessoal de Continuidade “Meu Caminho” — V2.0.0.md` — Meu Caminho.
- `docs/operations/CURRENT.md` — estado operacional transversal.
- `docs/operations/WORKSTREAM_ISOLATION_AND_HANDOFF.md` — isolamento e handoff.
- `docs/operations/SITE_INSTITUCIONAL_BASELINE.md` — baseline protegida do site institucional.
- `CLAUDE.md` — instruções para Claude Code.
- `AGENTS.md` — instruções para Codex e demais agentes.
