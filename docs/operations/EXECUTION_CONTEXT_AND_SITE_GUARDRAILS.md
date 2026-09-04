# EXECUTION CONTEXT AND SITE GUARDRAILS
## Portal Caminho da Consciência

**Vigência:** a partir de 04/09/2026  
**Lido por:** Claude Code, Codex e qualquer agente que atue neste repositório

---

## CTX-00 — VERIFICAÇÃO OBRIGATÓRIA ANTES DE QUALQUER EDIÇÃO

Antes de editar qualquer arquivo, todo agente deve executar e imprimir:

```powershell
Set-Location "C:\Projetos\portal-caminho-da-consciencia"
git rev-parse --show-toplevel
git remote -v
git branch --show-current
git rev-parse HEAD
git fetch origin
git rev-parse origin/main
git status -sb
git log --oneline --decorate -5
```

E imprimir obrigatoriamente:

```
# EXECUTION CONTEXT
repo_root:
remote_origin:
branch:
HEAD:
origin_main:
surface_type:
deployment_target:
target_route:
allowed_paths:
protected_paths:
institutional_impact:
production_impact:
```

**Se não for possível confirmar inequivocamente:**
- repo: `marvin-ds/portal-caminho-da-consciencia`
- surface: `INSTITUTIONAL_NETLIFY`

**→ PARAR. Não implementar.**

---

## Classificação obrigatória de superfície

Toda tarefa deve ser classificada em UMA categoria antes de qualquer edição:

### A — INSTITUTIONAL_NETLIFY
**Para:** Home, páginas institucionais, páginas legais, páginas públicas estáticas, SEO, sitemap, robots.  
**Repo:** `marvin-ds/portal-caminho-da-consciencia`  
**Host:** Netlify

### B — PRODUCT_PAGE_NETLIFY
**Para:** página pública de produto quando a decisão arquitetural for Netlify.  
**Regra:** alteração restrita à rota do produto. Não modificar Home/global silenciosamente.

### C — PRODUCT_APP_VERCEL
**Para:** aplicações web, autenticação, Supabase, APIs, server functions, e-mail transacional, entitlement, dashboards, áreas autenticadas, experiências interativas complexas.  
**Host:** Vercel.  
**Regra:** NÃO implementar dentro do site institucional Netlify.

### D — DOCS_ONLY
**Para:** somente documentação. Nenhum deploy funcional necessário.

### E — UNKNOWN
**→ PARAR. NÃO EDITAR. Informar o contexto ausente.**

---

## Arquivos protegidos do Site Institucional

Estes arquivos são `PROTECTED = TRUE` para qualquer tarefa de produto:

| Arquivo | Tipo |
|---|---|
| `index.html` | Home V1.1.1 — CONGELADA |
| `mapeamento/index.html` | Página de produto LIVE |
| `termos-de-uso.html` | Legal |
| `politica-de-privacidade.html` | Legal |
| `netlify.toml` | Infra Netlify |
| `robots.txt` | SEO |
| `sitemap.xml` | SEO |
| `favicon.ico` | Brand |
| `assets/brand/` | Assets institucionais |

**Qualquer alteração nesses arquivos por tarefa de produto exige `INSTITUTIONAL INTEGRATION GATE` explícito.**

---

## Regra para novos produtos

Construir um produto **NÃO autoriza alterar a Home** automaticamente.

Fluxo obrigatório:

```
PRODUCT BUILD
↓
PRODUCT PRODUCTION READY
↓
INSTITUTIONAL INTEGRATION GATE  ← aprovação explícita de Marcos
↓
alterar card/status/link da Home
↓
regression test institucional
```

---

## Regra de staging — NÃO usar `git add .` cegamente

Antes de staging, sempre executar:

```bash
git status --short
git diff --stat
git diff
git ls-files --others --exclude-standard
```

Nunca versionar:
- `.claude/settings.local.json`
- screenshots locais
- secrets / `.env`
- materiais proprietários Sintonize (apostilas, fichas, protocolos, símbolos)
- dados de clientes
- dumps / arquivos temporários

---

## Regra Sintonize

- A Mesa Radiônica Sintonize Prosperidade é **metodologia específica de terceiros**.
- A Sessão Individual Sintonize Prosperidade é **oferta distinta** do Mapeamento.
- Status atual: `DESIGN_READY / PILOT_PENDING`
- NÃO transformar em `live` sem gate explícito e aprovação de Marcos.
- NÃO adicionar material proprietário Sintonize ao repositório.
- NÃO apresentar como diagnóstico ou medição científica.
- NÃO apresentar Marcos como certificado/formado antes do certificado formal.
- NÃO usar "terapeuta" como identidade profissional pública de Marcos.

---

## Documentos de referência

- `docs/operations/SITE_INSTITUCIONAL_BASELINE.md` — estado baseline protegido
- `docs/operations/CURRENT.md` — estado operacional vivo
- `CLAUDE.md` — instruções para Claude Code
- `AGENTS.md` — instruções para Codex e demais agentes
