# AGENTS.md — Portal Caminho da Consciência
## Guardrails para Codex, OpenAI API e demais agentes de código

**Vigência:** a partir de 04/09/2026

---

## ETAPA 0 — VERIFICAÇÃO DE CONTEXTO OBRIGATÓRIA (CTX-00)

**Antes de qualquer edição**, execute e imprima:

```bash
git -C . rev-parse --show-toplevel
git -C . remote get-url origin
git -C . branch --show-current
git -C . rev-parse HEAD
git -C . status -sb
git -C . log --oneline --decorate -5
```

Preencha o bloco abaixo e inclua-o no início de toda resposta de implementação:

```
# EXECUTION CONTEXT
repo_root:
remote_origin:
branch:
HEAD:
surface_type:
deployment_target:
target_route:
allowed_paths:
protected_paths:
institutional_impact:
```

**Se não puder confirmar inequivocamente:**
- `remote_origin` contém `marvin-ds/portal-caminho-da-consciencia`
- `surface_type` é `INSTITUTIONAL_NETLIFY`

**→ PARAR. Não implementar.**

---

## ARQUITETURA

| Camada | Stack | Host |
|---|---|---|
| Site institucional | HTML/CSS/JS estático | Netlify |
| Aplicações / auth | SvelteKit ou Next.js | Vercel |
| Banco de dados | Supabase (PostgreSQL) | Supabase |

**O site institucional Netlify e as aplicações Vercel são superfícies separadas.**  
Não misturar código de aplicação dentro do repositório estático e vice-versa.

---

## ARQUIVOS PROTEGIDOS

| Arquivo | Proteção |
|---|---|
| `index.html` | **IMUTÁVEL** — Home V1.1.1 congelada |
| `mapeamento/index.html` | Produto LIVE — não alterar sem gate explícito |
| `termos-de-uso.html` | Legal — não alterar cláusulas sem instrução de Marcos |
| `politica-de-privacidade.html` | Legal |
| `netlify.toml` | Infra — não alterar sem instrução de Marcos |
| `robots.txt` | SEO |
| `sitemap.xml` | SEO |
| `assets/brand/` | Identidade visual |

**Qualquer alteração nesses arquivos exige instrução explícita de Marcos.**

---

## REGRAS ABSOLUTAS

### Staging
- NÃO usar `git add .` ou `git add -A`
- Adicionar somente os arquivos aprovados por nome: `git add caminho/arquivo.ext`

### Sintonize
- A Mesa Radiônica Sintonize Prosperidade é **metodologia específica de terceiros**
- A Sessão Individual Sintonize Prosperidade é **oferta distinta** do Mapeamento
- Status: `DESIGN_READY / PILOT_PENDING` — NÃO transformar em `live` sem gate explícito
- NÃO adicionar ao repositório nenhum material proprietário Sintonize

### Identidade de Marcos
- NÃO usar "terapeuta" como identidade profissional pública
- NÃO apresentar Marcos como certificado/formado pela Sintonize antes do certificado formal
- NÃO apresentar o Mapeamento como diagnóstico ou medição científica

### Preços
- Preço atual do Mapeamento: R$197
- NÃO publicar R$297 ou R$397 nos Termos ou em qualquer página pública até gate explícito

### Novos produtos
Construir um produto NÃO autoriza alterar a Home automaticamente.

```
PRODUCT BUILD
↓
PRODUCT PRODUCTION READY
↓
INSTITUTIONAL INTEGRATION GATE  ← aprovação explícita de Marcos
↓
alterar card / status / link da Home
```

---

## DOCUMENTOS DE REFERÊNCIA

- `CLAUDE.md` — instruções para Claude Code
- `docs/operations/CURRENT.md` — estado operacional
- `docs/operations/SITE_INSTITUCIONAL_BASELINE.md` — baseline protegida
- `docs/operations/EXECUTION_CONTEXT_AND_SITE_GUARDRAILS.md` — guardrails completos
- `docs/canonical/` — documentos canônicos 00–05
