# ADR-PLATAFORMA-JORNADA-001
## Arquitetura Definitiva da Plataforma da Jornada / Meu Caminho

**Tipo:** Architecture Decision Record  
**Data:** 2026-09-05  
**Status:** APROVADO — auditoria ChatGPT concluída em 05/09/2026; gate PJ-02 encerrado  
**Gate:** PJ-02  
**Autor:** Claude Code (Sonnet 4.6) com base nos gates PJ-00 a PJ-01V.1  
**Documentos superiores:** Doc 00 V1.3 / Doc 01 V4.5 / Doc 02 V2.5 / Doc 05 V2.2 / CURRENT V2.5

---

## 1. Status

```
APROVADO — 05/09/2026
```

Desencadeou:
- Atualização documental (Doc 05 V2.2, CURRENT, SPECs dos quatro produtos)
- PJ-03A — Bootstrap local do repositório

---

## 2. Contexto

O Portal Caminho da Consciência possui hoje um site institucional estático (Netlify) e quatro produtos com SPECs escritas mas **zero código de aplicação**. A decisão transversal de 04/09/2026 aprovou a criação da **Plataforma da Jornada** como camada digital de continuidade, acesso, histórico, entregas e reavaliação. A experiência autenticada recebeu o nome **Meu Caminho** — aprovado como nome canônico da V1. Rebranding futuro não reabre a arquitetura.

A série de gates PJ-00/PJ-01/PJ-01V/PJ-01V.1 comprovou a viabilidade técnica local de MakerKit Lite como fundação. Este ADR transforma essas descobertas em arquitetura oficial e executável.

---

## 3. Problema

Sem uma arquitetura fechada, cada produto poderia criar:
- repo próprio
- Vercel próprio
- Supabase próprio
- Auth próprio
- sistema de entitlement próprio

Resultando em duplicação, fragmentação de dados, risco de segurança e impossibilidade de experiência coerente (Meu Caminho).

---

## 4. Evidências dos gates anteriores

| Gate | Status | Achado relevante |
|---|---|---|
| PJ-00Δ | ✅ | GREENFIELD ABSOLUTO em todos os repos — nenhuma app existe para a Plataforma |
| PJ-01 | ✅ PASS WITH CONDITIONS | MakerKit Lite MIT, MODO A **recomendado** por auditoria estática; RLS descrita como "excellent" com qualificação (execução pendente) |
| PJ-01V | ✅ PASS WITH RISKS | Toolchain completo (install, lint, typecheck, build, unit tests); lockfile preview.10 → regenerado estável |
| PJ-01V.1 | ✅ PASS WITH CONDITIONS | Auth/RLS/trigger comprovados localmente; Magic Link funcionando via API; E2E upstream incompatível com Magic Link (não é defeito do MakerKit); **Modo A consolidado como definitivo** |

Versões comprovadas após regeneração do lockfile:
```
next                  16.3.0
@next/bundle-analyzer 16.3.0
```

---

## 5. Decisão

> **A Plataforma da Jornada será construída como uma única aplicação Next.js/Turborepo, em um repositório próprio, servida por um único projeto Vercel, utilizando um único projeto Supabase de produção, com MakerKit Lite como fundação (Modo A — Fundação Direta), com Auth via Magic Link e sem password na V1.**

Esta decisão é **definitiva** dentro do escopo desta V1.

Nenhum produto criará repositório, Vercel ou Supabase próprios.

---

## 6. Topologia

```
PORTAL CAMINHO DA CONSCIÊNCIA
│
├── SITE PÚBLICO
│   ├── repo:    portal-caminho-da-consciencia
│   ├── host:    Netlify
│   └── domain:  portalcaminhodaconsciencia.com.br
│
└── PLATAFORMA DA JORNADA
    ├── repo:    portal-caminho-da-consciencia-app
    ├── host:    Vercel
    └── domain:  app.portalcaminhodaconsciencia.com.br
```

**Princípio:** 1 Portal público + 1 Plataforma da Jornada. Sem exceções na V1.

---

## 7. Repositórios

### Repositório institucional (existente)
```
marvin-ds/portal-caminho-da-consciencia
local: C:\Projetos\portal-caminho-da-consciencia
conteúdo: site estático, docs canônicos, ADRs
host: Netlify
```

### Repositório da Plataforma (a criar)
```
marvin-ds/portal-caminho-da-consciencia-app
local: C:\Projetos\portal-caminho-da-consciencia-app
conteúdo: app Next.js/Turborepo (toda a Plataforma)
host: Vercel
```

**O repositório da Plataforma não existe ainda.** Será criado no PJ-03A.

**Repositórios excluídos como referência:**
- `vdf-apps` / `daqui-pra-frente` / `radar-da-nova-fase` — projeto diferente
- `quiz-padrao-interrompido` — marca anterior, excluído por auditoria
- `padrao-interrompido-site` — legado

---

## 8. MakerKit Lite

```
MODE:         A — Fundação Direta (Modo A)
SOURCE:       makerkit/nextjs-saas-starter-kit-lite
BASE_COMMIT:  c5cba64391a80620309c4178163dc2df42568d1b
LICENSE:      MIT (gratuito, sem vínculo comercial com upstream)
STRATEGY:     Template Copy controlado
```

**Não será mantida dependência operacional do upstream após o bootstrap.**

### Processo de bootstrap (PJ-03A)

**Fase 1 — Local (PJ-03A completo antes de qualquer ação externa):**
1. Copiar/importar o commit auditado localmente
2. Preservar `LICENSE` MIT e criar `UPSTREAM.md` com origem
3. Remover remote original do MakerKit
4. Regenerar lockfile com `pnpm install` (sem `--frozen-lockfile`)
5. Remover marketing/demo MakerKit
6. Validar toolchain completo localmente

**Fase 2 — Remoto (somente após baseline local aprovada + autorização explícita):**
- Criar repositório `marvin-ds/portal-caminho-da-consciencia-app` no GitHub
- Adicionar remote e fazer push da baseline aprovada
- **Criação do repo remoto é ação externa — requer gate/aprovação explícita**

**O `pnpm-lock.yaml` original do commit MakerKit auditado é inconsistente com `pnpm-workspace.yaml` e NÃO será usado como baseline.** O lockfile do Portal será regenerado a partir das specs estáveis.

---

## 9. Runtime

```
Node.js:  24.x (LTS — MakerKit aceita >=22.13; Node 24 testado localmente no PJ-01V)
pnpm:     11.18.0
```

Compatibilidade `pnpm 11.18.0 + Vercel` deverá ser comprovada no primeiro Preview (PJ-03C).

**Nota:** `npm install -g pnpm@11.18.0` foi executado no ambiente local durante PJ-01V. Isso é uma mudança de toolchain local, não cloud.

---

## 10. Monorepo / Turborepo / Packages

**Turborepo permanece.** Não converter em repo Next.js simples.

Motivação: shared kernel, domínios de produto, packages reutilizáveis, testes e crescimento futuro.

### Packages existentes (MakerKit — preservar como `@kit/*`)
```
@kit/supabase
@kit/auth
@kit/accounts
@kit/ui
@kit/shared
@kit/next
@kit/i18n
```

### Packages Portal (novos — usar `@portal/*`)
```
@portal/identity      → contacts, accounts, identity_links
@portal/privacy       → consents, privacy_requests
@portal/commerce      → products, offers, orders, payments
@portal/access        → entitlements, enrollments
@portal/deliveries    → deliveries, delivery_assets, signed URLs
@portal/journey       → journey state derivado, agregação de produto
@portal/communications → dispatches
@portal/audit         → audit_events

Domínios de produto:
@portal/minute-before
@portal/before-the-squeeze
@portal/mapping
@portal/sintonize
```

**Regra:** packages representam responsabilidades coesas, não tabelas individuais.

> **Esta lista representa a arquitetura-alvo, não um scaffold imediato.** Cada package será materializado somente quando o gate correspondente precisar daquela responsabilidade. Não criar packages `@portal/*` vazios antecipadamente.

---

## 11. Rotas

### Site público (Netlify — não alterar)
```
portalcaminhodaconsciencia.com.br/                      ← LIVE
portalcaminhodaconsciencia.com.br/mapeamento/           ← LIVE
portalcaminhodaconsciencia.com.br/minuto-anterior/      ← route-target (quando oferta live)
portalcaminhodaconsciencia.com.br/antes-do-aperto/      ← route-target (quando oferta live)
portalcaminhodaconsciencia.com.br/sintonize/            ← route-target (quando oferta live)
```
Rotas marcadas como "route-target" são alvos arquiteturais condicionais ao estado comercial da oferta; não precisam existir hoje e não devem ser publicadas antes do gate de lançamento da oferta correspondente.

### Aplicação (Vercel)
```
app.portalcaminhodaconsciencia.com.br/

/entrar                  ← rota pública canônica de autenticação (Magic Link)
                           MakerKit /auth/sign-in será adaptado/redirectado para /entrar
                           preservar parâmetro next/returnTo
/auth/*                  ← callbacks internos (confirm, update-password)
                           sem duas experiências concorrentes de sign-in

/minuto-anterior         ← público (sem login obrigatório antes do valor)

/meu-caminho/            ← dashboard central (autenticado)
/meu-caminho/experiencias
/meu-caminho/registros
/meu-caminho/entregas
/meu-caminho/conta

/meu-caminho/antes-do-aperto
/meu-caminho/mapeamento
/meu-caminho/sintonize
```

**O `/home` do MakerKit será convertido para `/meu-caminho`.** O shell técnico pode ser reutilizado; o dashboard demo será removido.

**Ao remover páginas legais do MakerKit:** qualquer checkbox, link de Terms ou Privacy presente na autenticação ou no app deve apontar para as páginas canônicas hospedadas no Netlify (`portalcaminhodaconsciencia.com.br/termos-de-uso` e `portalcaminhodaconsciencia.com.br/politica-de-privacidade`). Nenhum link legal pode ficar quebrado ou apontar para páginas MakerKit removidas.

**O Minuto Anterior permanece público** antes do login — sem exigir entitlement.

---

## 12. Supabase

```
QUANTIDADE: 1 projeto de produção para toda a Plataforma
```

Este único projeto será fonte de:
- Auth
- PostgreSQL / RLS
- Storage
- Shared Kernel
- Domínios dos produtos

**Nenhum produto cria projeto Supabase próprio.**

"Um único Supabase" significa uma única arquitetura e um projeto canônico de produção — não reutilizar dados reais de produção de forma insegura em ambientes de Preview.

### Nota sobre quiz-padrao-interrompido
O projeto Supabase existente do quiz (marca anterior) **não será o Supabase da Plataforma**. São projetos separados, conforme confirmado no PJ-00.

---

## 13. Auth

```
Magic Link / passwordless:  ON  (padrão)
Password Auth:              OFF na V1
Google OAuth:               OUT — fora do escopo da V1
MFA:                        disponível (MakerKit), não obrigatório na V1
```

MakerKit Auth permanece a base. Supabase Auth é a identidade canônica.

**Consequências obrigatórias de Password Auth OFF (implementar no PJ-03D):**
- Não expor password reset, password change nem sign-up baseado em senha
- Remover ou ocultar todos os componentes/telas MakerKit incompatíveis com passwordless
- Nenhum CTA ou link de "esqueci minha senha" acessível
- E2E reescrito para fluxo Magic Link (não habilitar password em produção para satisfazer testes herdados)

### CAPTCHA
- Local/Test: OFF
- Preview: opcional
- Production: proteção anti-abuso obrigatória quando formulário/auth estiver publicamente exposto

MakerKit já possui suporte a Cloudflare Turnstile. A interferência do form UI de Magic Link observada no PJ-01V.1 (chunk CAPTCHA carregado sem chave definida) deve ser investigada e resolvida no PJ-03D antes de produção. O fluxo de sessão foi comprovado via API.

---

## 14. Identity / Contact / Identity Claiming

### Entidades de identidade
```sql
auth.users          ← identidade Supabase Auth (canônica)
public.accounts     ← perfil autenticado (trigger on_auth_user_created — comprovado em PJ-01V.1)
public.contacts     ← pode existir antes da autenticação
public.identity_links ← associação contact ↔ account
```

### Fluxo Identity Claiming (O Minuto Anterior)
```
experiência pública
↓
registro pré-auth (contact sem auth.users)
↓
opaque claim token (aleatório forte — armazenar HASH, não token puro)
↓
e-mail com Magic Link
↓
identidade verificada
↓
claim server-side idempotente
↓
histórico associado ao usuário autenticado
↓
claim token invalidado (uso único, TTL)
```

**Requisitos críticos:**
- token aleatório criptograficamente forte
- armazenar hash no banco, não o token puro
- TTL obrigatório
- uso único (marcar como consumido)
- operação server-side
- idempotente (reenvio não cria duplicata)
- auditado
- nunca vincular histórico sensível apenas por coincidência de e-mail sem comprovação de ownership

---

## 15. Shared Kernel — Contratos de Entidade

### Identity
```
auth.users, accounts, contacts, identity_links
```

### Privacy
```
consents        (tipo, versão, status, timestamp, fonte)
privacy_requests
```

### Commerce
```
products
offers
orders
payments
payment_events
webhook_receipts
```

**Regra:** `order ≠ payment`

### Access
```
entitlements
enrollments
```

**Regra:** `payment ≠ entitlement ≠ enrollment ≠ progress ≠ completion`

### Delivery
```
deliveries
delivery_assets
```
Signed URLs nunca são persistidas como URL permanente. Persistir `object_path + metadata`.

### Communication
```
communication_dispatches
```

### Audit
```
audit_events
```

---

## 16. Domínios de Produto

Cada produto receberá um Integration Contract específico depois da fundação.

| Produto | Rota base | Auth? | Entitlement? | Nota |
|---|---|---|---|---|
| O Minuto Anterior | `/minuto-anterior` | Não (público) | Não | Identity claim opcional pós-experiência |
| Antes do Aperto | `/meu-caminho/antes-do-aperto` | Sim | Sim | Progresso por domínio |
| Mapeamento 2.0 | `/meu-caminho/mapeamento` | Sim | Sim | Intake privado + trabalho humano |
| Sintonize | `/meu-caminho/sintonize` | Sim | Sim | Intake + consentimento + trabalho humano + entrega |

---

## 17. Commerce

Checkout continua externo. O ADR não especifica o provider — o Shared Kernel depende de adapter.

### Fluxo obrigatório
```
checkout externo
↓
webhook (assinatura validada)
↓
webhook_receipt (idempotente, event_id)
↓
payment_event
↓
payment
↓
entitlement
↓
enrollment quando aplicável
```

### Webhook — contrato obrigatório
- Validar assinatura antes de processar
- Preservar raw body quando provider exigir
- `event_id` + idempotência
- `webhook_receipt` registrado
- Retry-safe
- Acknowledge tão rápido quanto possível e dentro do SLA/requisitos do provider escolhido
- Processamento pesado desacoplado do request (não bloquear o acknowledge)
- Nunca gerar compra por CTA click, thank-you page, WhatsApp ou redirect

---

## 18. Entitlements / Enrollments

### Entitlement
```
product_id
user / account / contact
status
source_order
granted_at
revoked_at
expires_at (opcional)
```
Acesso pago validado server-side. Nunca apenas pelo client.

**Entitlement e contact:** entitlement pode ser registrado inicialmente contra `contact_id` após fluxo comercial/webhook (ex.: compra antes de autenticação). Isso **não concede acesso autenticado por si só**. Acesso pago requer identidade/account autenticada com ownership resolvido server-side — nunca inferir ownership apenas por coincidência de e-mail sem comprovação explícita.

### Enrollment
```
entitlement_id
product_id
user
started_at
progress
completed_at
```
Enrollment representa participação/execução, não autorização.

---

## 19. Deliveries / Storage

### Política de Storage
- Privado por padrão
- Caminho persistido no banco (`object_path`)
- Signed URL gerada sob demanda (curta, com TTL)
- Ownership verificado server-side antes de gerar URL
- Sem URL pública permanente para dados Classe C/D

### Signed URL Helper
MakerKit Lite não possui abstração pronta para signed URLs privadas. **O Portal construirá helper próprio** na camada shared/delivery. Esse helper não pertence a nenhum produto individualmente.

### Buckets previstos
```
account_image      (MakerKit — manter — nome real do baseline auditado)
private-deliveries (a criar no PJ-03/PJ-04)
private-uploads    (a criar quando necessário)
```
Qualquer renomeação de `account_image` requer migration deliberada.

---

## 20. Email

### Auth Email (Supabase → Resend SMTP)
```
Supabase Auth
↓
Resend SMTP (custom SMTP)
```
Templates obrigatórios antes de produção:
- Magic Link (`Sign in to Makerkit` → branding Portal)
- Email confirmation
- Email change

### Transacional de produto
```
Resend SDK / API
```

### Marketing
```
Brevo
```
Marketing depende de consentimento próprio. Resend transacional não implica consentimento de marketing.

---

## 21. Privacy / RLS

### Classificação de dados

| Classe | Descrição | Exemplos |
|---|---|---|
| A | Público | conteúdo de marketing, preços |
| B | Interno operacional | status de pedidos, métricas |
| C | Pessoal identificável | nome, email, telefone |
| D | Íntimo / sensível | respostas do Mapeamento, intenção Sintonize, Registro da Sessão, notas radiestésicas, D7 |

### RLS — regras obrigatórias
- RLS ativado em todas as tabelas de dados de usuário
- Testes negativos obrigatórios (User A não acessa User B) — comprovados no PJ-01V.1
- `anon` não acessa dados pessoais (comprovado: 42501)
- `service_role` somente server-side
- Nenhuma policy ampla por conveniência

### LGPD / Consentimento
- `consents` registra tipo, versão, status, timestamp e fonte
- Conteúdo privado (Classe D) não vai para GTM, GA4, Meta, Ads ou CRM de marketing
- Não logar conteúdo de Mapeamento/Sintonize

---

## 22. Analytics

### Site público (Netlify)
Manter GTM/GA4/Ads conforme governança existente (Docs 03/05).

### Plataforma autenticada (Vercel)
- Allowlist de eventos (só o que foi explicitamente aprovado)
- Sem ad pixels em áreas sensíveis por padrão
- Nunca enviar respostas, reflexões ou intake

**Eventos aceitáveis:**
```
experience_started
step_completed
delivery_viewed
experience_completed
login_completed
```

**Eventos proibidos:**
```
reflection_text
mapping_content
sintonize_intention
private_audio_content
intake_answers
```

---

## 23. Environments

```
LOCAL
├── Supabase CLI + Docker (portas isoladas, ex.: 57321-57326 para lab)
├── dados fictícios
└── .env.local (não versionado)

PREVIEW
├── Vercel Preview (por branch/PR)
├── banco isolado — não usar production service_role
└── Supabase Branching quando plano justificar; alternativa: staging isolado

PRODUCTION
├── Vercel Production
├── Supabase Production (único projeto canônico)
└── secrets separados de Preview/Local
```

Secrets separados entre ambientes. `SUPABASE_SERVICE_ROLE_KEY` de produção nunca em Preview por padrão.

---

## 24. Vercel

### Configuração-alvo
```
Projeto:     portal-caminho-da-consciencia-app
Framework:   Next.js
Monorepo:    Turborepo
App root:    apps/web
Domain:      app.portalcaminhodaconsciencia.com.br (configurar após Preview aprovado)
```

### Build command candidato
```bash
cd ../.. && turbo build --filter=web
```
Não considerar definitivo até validação real no PJ-03C.

### pnpm + Vercel
Compatibilidade real de `pnpm 11.18.0` com Vercel deverá ser comprovada no PJ-03C. Não alterar versão por hipótese antes do teste.

---

## 25. DNS

**Destino futuro:**
```
app.portalcaminhodaconsciencia.com.br → Vercel
```

DNS só será configurado depois de Preview Vercel aprovado (PJ-03C).

**Este ADR não autoriza nenhuma alteração de DNS.**

---

## 26. Testing

### Suíte obrigatória por responsabilidade
```
lint
typecheck
build
unit (Vitest)
integration (com Supabase local)
RLS positive tests
RLS negative tests  ← obrigatório, comprovado localmente no PJ-01V.1
auth flow (Magic Link)
entitlement validation
webhook idempotency
signed URL helper
```

### E2E (Playwright)
Os testes E2E upstream do MakerKit assumem `NEXT_PUBLIC_AUTH_PASSWORD=true`. **Deverão ser adaptados para Magic Link** no Portal. Não habilitar password em produção apenas para fazer testes herdados passarem.

### Seeds
`seed.sql` original é vazio. O Portal criará fixtures próprias fictícias suficientes para testar auth, entitlement e produtos.

---

## 27. Logging

Manter Pino (já presente no MakerKit).

**Antes de qualquer produção com usuário real: PII redaction obrigatória.**

```ts
// pino.ts — adicionar antes de produção
redact: [
  'req.headers.authorization',
  'req.headers.cookie',
  'body.email',
  'body.phone',
  'body.password',
  'body.otp',
  '*.token',
  '*.access_token',
  '*.refresh_token',
]
```

**Nunca logar:**
- conteúdo de Mapeamento
- intenção ou resultado de Sintonize
- dados Classe D de qualquer produto

---

## 28. Migrations

- Toda alteração de banco via migration versionada no Supabase CLI
- Nunca editar produção manualmente como fonte principal
- Aplicar local primeiro → review → Preview/staging → produção
- Testes negativos antes de aplicar em produção
- Para alterações destrutivas futuras: preferir `expand → migrate → contract`

---

## 29. Rollback

### Aplicação
Deployment anterior no Vercel (instant rollback).

### Banco
- Sem dependência de migrations destrutivas de downgrade
- Preferir migration corretiva ou expansão compatível
- Backup antes de mudança de alto risco
- Código e migration coordenados no mesmo PR

---

## 30. Out of Scope — V1

```
Não implementar na V1:
× comunidade / feed / chat
× LMS genérico / certificados
× gamificação / badges / ranking
× marketplace
× app nativo / PWA sofisticada
× subscriptions da Plataforma
× automação da leitura Sintonize
× engine radiestésica
× IA como motor interpretativo de produtos
× super-admin genérico
× Google OAuth (fora da V1)
× Sentry ou observabilidade avançada (hipótese futura)
× checkout embutido
```

---

## 31. Contratos de Integração por Produto

Os contratos completos serão especificados após a fundação. Resumo executivo:

### O Minuto Anterior
```
landing Netlify → /minuto-anterior (Vercel, público) →
sem login → primeiro valor → resultado →
opção de salvar → Magic Link → identity claim → Meu Caminho
```
Sem entitlement. Identity claim opcional.

### Antes do Aperto
```
payment → entitlement → enrollment →
/meu-caminho/antes-do-aperto → Dia 1–7 → completion
```
Progresso pertence ao domínio do produto.

### Mapeamento 2.0
```
payment → entitlement → mapping_case →
intake privado (Classe D) → trabalho humano →
status → delivery → observação/reavaliação
```
Não automatizar interpretação.

### Sintonize
```
payment → entitlement → intake + consent (Classe D) →
trabalho humano/manual → status →
Registro da Sua Sessão → áudio → integração → D7
```
Nenhuma engine radiestésica. Nenhum protocolo Sintonize como motor de software.

---

## 32. Sequência de Execução Pós-ADR

**Sequência obrigatória imediatamente após PJ-02 aprovado:**

```
PJ-02 APROVADO
↓
DOC-SYNC CANÔNICO (Doc 05 V2.2, CURRENT, Docs 01/02, SPECs)
↓
auditoria das novas versões documentais
↓
commit/push documental
↓
PJ-03A
```

O DOC-SYNC precede PJ-03A porque Doc 05 V2.1 está explicitamente aguardando esta decisão arquitetural. Não iniciar bootstrap antes do DOC-SYNC aprovado.

---

```
PJ-03A  Bootstrap local
        → repo a partir do MakerKit c5cba64
        → LICENSE + UPSTREAM.md
        → regenerar lockfile
        → remover marketing/demo
        → local tests
        ↓
PJ-03B  Supabase Foundation
        → criar projeto Supabase canônico
        → baseline migrations
        → Auth + Magic Link + SMTP Resend
        → RLS suite
        → negative tests
        ↓
PJ-03C  Vercel Preview
        → criar projeto Vercel
        → conectar repo
        → provar pnpm 11 + Node 24 + Turborepo
        → Preview funcional
        → SEM custom domain ainda
        ↓
PJ-03D  Identity / Auth Core
        → Magic Link UI (CAPTCHA configurado corretamente)
        → contacts + identity_links
        → identity claiming
        → account/profile
        → consent
        → testes completos
        ↓
PJ-04   Security / Shared Kernel
        → commerce + access + deliveries + audit
        → Storage + signed URL helper
        → Pino redaction
        → RLS negative suite completa
        ↓
(Produtos — Integration Contracts individuais)
        O Minuto Anterior
        Antes do Aperto
        Mapeamento 2.0
        Sintonize
```

---

## 33. Riscos de Implementação

| # | Risco | Mitigação |
|---|---|---|
| R1 | `pnpm 11.18.0` incompatível com Vercel em alguma configuração | Testar no primeiro Preview (PJ-03C) antes de assumir |
| R2 | CAPTCHA bloqueando form Magic Link sem chave definida | Investigar e corrigir no PJ-03D; não assumir causa definitiva ainda |
| R3 | E2E upstream incompatível com Magic Link | Escrever novos testes E2E para o Portal; não habilitar password |
| R4 | Supabase Branching para Preview pode ter custo no plano atual | Definir estratégia de Preview antes do PJ-03C |
| R5 | Node 24 pode ter comportamentos distintos de Node 22 em Edge | Monitorar no primeiro Preview; MakerKit aceita >=22.13 |
| R6 | Dados reais de quiz-padrao-interrompido em conta Vercel compartilhada | Novos projetos Vercel/Supabase são isolados; sem risco de mistura |
| R7 | Marketing/demo MakerKit exposto se não removido no bootstrap | Checklist explícito no PJ-03A |

---

## 34. Decisões Ainda Abertas

Estas questões **não reabrem** a arquitetura-mãe deste ADR:

1. Provider exato de checkout (Kiwify, Hotmart, Stripe ou outro)
2. TTL específico de signed URLs por tipo de entrega
3. TTL específico de identity claim tokens
4. Política de retenção de dados Classe D por produto
5. Supabase Branching vs. staging isolado para Preview (depende de plano)
6. Futura ativação de Google OAuth (out V1)
7. Futura observabilidade avançada (Sentry ou equivalente)
8. UI admin para operação interna (quando necessidade real justificar)
9. Segundo idioma na Plataforma (arquitetura `next-intl` já preparada)

---

## 35. Consequências

### Positivas
1. Todos os produtos compartilham Auth, RLS, entitlement e storage — sem duplicação
2. Meu Caminho pode agregar estado de todos os produtos sem acesso cruzado indevido
3. Identity claiming resolve O Minuto Anterior sem forçar login antes do valor
4. Uma única Supabase simplifica segurança, backup e conformidade LGPD
5. Turborepo permite separação de responsabilidades sem proliferação de repos

### Negativas / Trade-offs
1. Maior complexidade inicial de setup do que um Next.js simples
2. A fundação deve ser robusta antes de qualquer produto — mais gates antes de features
3. pnpm 11 + Vercel precisa ser testado explicitamente (risco R1)
4. Adaptação dos E2E é trabalho adicional não resolvido pelo upstream

---

## 36. Impacto Documental Pós-Aprovação

Após aprovação pelo ChatGPT, os seguintes documentos deverão ser atualizados:

| Documento | Atualização necessária |
|---|---|
| **Doc 05 → V2.2** | Incorporar: repo app, Vercel, Supabase single, Auth Magic Link, shared kernel, privacy/RLS, ambientes, sequência pós-ADR |
| **CURRENT → V2.5** | Registrar PJ-02 APROVADO, abrir PJ-03A, decisões fechadas |
| **SPEC O Minuto Anterior** | Adicionar Integration Contract (identity claim, rotas Vercel) |
| **SPEC Antes do Aperto** | Adicionar Integration Contract (entitlement, enrollment, progresso) |
| **SPEC Mapeamento 2.0** | Adicionar Integration Contract (mapping_case, intake Classe D, delivery) |
| **SPEC + Addendum Sintonize** | Adicionar Integration Contract (consentimento, Classe D, delivery, D7) |
| **Doc 01** | Remover "MakerKit A/B/C como aberta" — registrar fechada como Modo A |
| **Doc 02** | Remover estados transitórios de arquitetura como "não fechada" |

---

## 37. Matriz de Decisões Finais

| Decisão | Resultado | Evidência | Estado |
|---|---|---|---|
| MakerKit | Lite — Modo A | PJ-01 + PJ-01V.1 | **FECHADO** |
| Base commit | c5cba64 | PJ-01 | **FECHADO** |
| Licença | MIT (gratuito) | PJ-01 | **FECHADO** |
| Lockfile original | NÃO usar — regenerar | PJ-01V + PJ-01V.1 | **FECHADO** |
| Repositórios | 2 (institucional + app) | PJ-00 + ADR | **FECHADO** |
| App repo | portal-caminho-da-consciencia-app | ADR | **FECHADO** |
| Host público | Netlify | Existente | **FECHADO** |
| Host app | Vercel (1 projeto) | ADR | **FECHADO** |
| Domínio app | app.portalcaminhodaconsciencia.com.br | ADR | **FECHADO** |
| Supabase | 1 projeto de produção | PJ-01V.1 + ADR | **FECHADO** |
| Auth | Magic Link / passwordless | PJ-01V.1 | **FECHADO** |
| Password V1 | Desabilitado | ADR | **FECHADO** |
| Google OAuth V1 | Fora do escopo | ADR | **FECHADO** |
| Node.js | 24.x | PJ-01V + ADR | **FECHADO** |
| pnpm | 11.18.0 | PJ-01V + ADR | **FECHADO** |
| Turborepo | Manter | ADR | **FECHADO** |
| Namespace @kit | Preservar | ADR | **FECHADO** |
| Namespace @portal | Novos packages | ADR | **FECHADO** |
| RLS | Obrigatório + negative tests | PJ-01V.1 | **FECHADO** |
| Trigger auth→accounts | MakerKit padrão mantido | PJ-01V.1 | **FECHADO** |
| Storage | Privado por padrão | ADR | **FECHADO** |
| Signed URL | Helper próprio a construir | ADR | **FECHADO** |
| Logging | Pino + redaction obrigatória | PJ-01V + ADR | **FECHADO** |
| Checkout | Adapter externo | ADR | **FECHADO** |
| Email auth | Supabase + Resend SMTP | ADR | **FECHADO** |
| Email transacional | Resend SDK | ADR | **FECHADO** |
| Email marketing | Brevo (consentimento separado) | ADR | **FECHADO** |
| Analytics plataforma | Allowlist de eventos | ADR | **FECHADO** |
| Dados Classe D | Proteção elevada, sem analytics | Doc 05 + ADR | **FECHADO** |
| Marketing MakerKit | Remover no bootstrap | ADR | **FECHADO** |
| Dashboard demo | Remover | ADR | **FECHADO** |
| i18n | next-intl, pt-BR primário | ADR | **FECHADO** |
| E2E upstream | Adaptar para Magic Link | ADR | **FECHADO** |
| CAPTCHA | Investigar e configurar no PJ-03D | ADR | ABERTO IMPLEMENTAÇÃO |
| pnpm 11 + Vercel | Validar no PJ-03C | ADR | ABERTO IMPLEMENTAÇÃO |
| Provider checkout | Adapter — não definido | ADR | ABERTO PRODUTO |
| Supabase Branching | Avaliar por plano | ADR | ABERTO OPERAÇÃO |
| TTL signed URLs | Por produto | Product gates | ABERTO PRODUTO |
| TTL identity claim | A definir no PJ-03D | ADR | ABERTO IMPLEMENTAÇÃO |
| Retenção Classe D | Por produto | Product gates | ABERTO PRODUTO |
| Google OAuth | Fora V1 | ADR | ABERTO FUTURO |
| Observabilidade avançada | Fora V1 | ADR | ABERTO FUTURO |
| Admin UI | Quando necessidade real | ADR | ABERTO FUTURO |

---

## Verificação dos 26 critérios de aceite

1. **Quantos repos?** → 2: institucional (Netlify) + app (Vercel)
2. **Qual repo contém o app?** → `portal-caminho-da-consciencia-app`
3. **Netlify faz o quê?** → Site público, páginas de produto/marketing, docs canônicos
4. **Vercel faz o quê?** → Toda a experiência autenticada + O Minuto Anterior público
5. **Qual domínio do app?** → `app.portalcaminhodaconsciencia.com.br`
6. **Qual baseline MakerKit?** → Lite, commit `c5cba64`, MIT, Modo A
7. **Como será importado?** → Template copy controlado; regenerar lockfile; criar UPSTREAM.md
8. **Qual Node?** → 24.x
9. **Qual pnpm?** → 11.18.0
10. **Qual Supabase?** → 1 projeto canônico de produção para toda a Plataforma
11. **Como ambientes se separam?** → Local (CLI/Docker) / Preview (banco isolado) / Production (Supabase canônico)
12. **Qual Auth?** → Magic Link; password OFF; OAuth OUT V1
13. **Como contato vira identidade?** → Identity claim token (hash, TTL, uso único) → Magic Link → claim server-side idempotente
14. **Como funciona entitlement?** → payment → webhook → payment_event → entitlement → enrollment quando aplicável
15. **Como produtos entram na Plataforma?** → Integration Contract individual por produto; rotas sob `/meu-caminho/`
16. **Onde ficam dados íntimos?** → Classe D: banco (RLS), storage privado (signed URL), sem analytics
17. **Como RLS funciona?** → Ativado em todas as tabelas de usuário; testes positivos e negativos obrigatórios
18. **Como Storage privado funciona?** → bucket privado; `object_path` no banco; signed URL curta gerada server-side
19. **Como e-mail se divide?** → Auth: Supabase+Resend SMTP / Transacional: Resend SDK / Marketing: Brevo (consentimento separado)
20. **Como checkout/webhooks entram?** → Adapter externo; fluxo webhook → receipt → payment → entitlement
21. **Como logs protegem PII?** → Pino com `redact` obrigatório antes de produção
22. **Como analytics protege conteúdo?** → Allowlist de eventos; sem dados Classe C/D; sem conteúdo íntimo
23. **Como migrations funcionam?** → Versionadas via Supabase CLI; local → review → preview → produção
24. **Como Preview funciona?** → Vercel Preview por branch; banco isolado (Branching ou staging)
25. **Como rollback funciona?** → App: deployment anterior Vercel; banco: migration corretiva coordenada
26. **Qual sequência pós-ADR?** → PJ-03A → PJ-03B → PJ-03C → PJ-03D → PJ-04 → Produtos

---

## Nota sobre Trilha MA / Codex

```
repo atual:    portal-caminho-da-consciencia
branch:        docs/minuto-anterior-ma01
HEAD:          afbf3749cc92b8d04120346a8bafc484a0808ecb
```

Esta trilha é documental. Depois da fundação:
- Não migrar histórico Git desnecessariamente
- Transportar SPEC/contrato aprovado para o novo repo da Plataforma
- Começar código do domínio O Minuto Anterior no `portal-caminho-da-consciencia-app`
- Não transformar branch institucional em branch de código do novo app

---

## Nota final

> **Este ADR não existe para escolher mais tecnologia. Existe para transformar o que foi comprovado nos gates PJ-00 a PJ-01V.1 em uma única arquitetura oficial, simples, segura, extensível e executável para todo o Portal.**

Ao ser aprovado, qualquer chat de produto deverá conseguir receber um Integration Contract e implementar seu domínio sem criar outro app, outro Vercel, outro Supabase, outro Auth, outro sistema de entitlement ou outra fundação.

---

**SEM COMMIT. SEM PUSH. SEM INFRA EXTERNA.**  
Aguardando auditoria do ChatGPT.
