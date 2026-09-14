# PORTAL CAMINHO DA CONSCIÊNCIA
## Especificação Transversal — Plataforma da Jornada “Meu Caminho” — Arquitetura de Execução Aprovada — V1.1

**STATUS:** canônico transversal de execução — pós-PJ-02  
**DATA:** 05/09/2026  
**SUBSTITUI:** Especificação Transversal — Plataforma da Jornada “Meu Caminho” — MakerKit Lite + Construção Própria — V1.0  
**FONTE DE VERDADE ARQUITETURAL:** ADR-PLATAFORMA-JORNADA-001 — PJ-02 — APROVADO  
**REGRA:** esta SPEC governa a execução transversal da Plataforma. Não substitui as SPECs funcionais dos produtos.

> **1 Portal público + 1 Plataforma da Jornada. Compartilhar infraestrutura. Não misturar significado.**

---

# 0. FUNÇÃO

Esta SPEC converte a antiga arquitetura investigativa da Plataforma da Jornada em arquitetura de execução aprovada.

Ela existe para impedir que cada produto crie:

- novo repo;
- novo Vercel;
- novo Supabase;
- novo Auth;
- novo sistema de entitlement;
- nova fundação transversal.

Também impede o erro oposto: transformar a Plataforma em banco genérico que mistura dados íntimos de experiências diferentes.

---

# 1. ARQUITETURA-MÃE

## 1.1. Portal público

```text
repo:   portal-caminho-da-consciencia
host:   Netlify
domain: portalcaminhodaconsciencia.com.br
```

Responsabilidades:

- institucional;
- SEO;
- marketing;
- landing pages;
- páginas comerciais;
- páginas legais;
- conteúdo público;
- documentação canônica/ADRs no repositório, sem exposição no bundle público.

## 1.2. Plataforma da Jornada

```text
repo:   portal-caminho-da-consciencia-app
host:   Vercel
domain: app.portalcaminhodaconsciencia.com.br
```

Responsabilidades:

- Meu Caminho;
- Auth;
- experiências dinâmicas;
- estado e progresso;
- entregas privadas;
- webhooks;
- integração dos produtos;
- contratos transversais.

O repo, projeto Vercel, Supabase de produção e DNS podem ainda não existir/configurados. A arquitetura está aprovada; a materialização acontece por gates.

---

# 2. MEU CAMINHO

**Meu Caminho** é o nome aprovado para a experiência autenticada da V1.

Não é:

- produto;
- etapa nova da Jornada;
- LMS;
- catálogo;
- marketplace;
- comunidade.

É:

> **a interface digital da Jornada da pessoa dentro do Portal.**

Deve responder:

- onde a pessoa está;
- o que está ativo;
- de onde continuar;
- o que recebeu;
- seus registros;
- qual a próxima ação legítima.

Áreas iniciais possíveis:

- Meu Caminho;
- Minhas Experiências;
- Meus Registros;
- Minhas Entregas;
- Minha Conta;
- Privacidade e Dados.

A interface prioriza o que a pessoa possui, está realizando ou precisa fazer agora. Não usar como vitrine agressiva de upsell.

---

# 3. FUNDAÇÃO MAKERKIT

```text
MakerKit Lite
Modo A — Fundação Direta
commit-base: c5cba64391a80620309c4178163dc2df42568d1b
licença: MIT
estratégia: Template Copy controlado
```

Após bootstrap:

- preservar LICENSE MIT;
- registrar origem em `UPSTREAM.md`;
- remover dependência operacional obrigatória do upstream;
- remover marketing/demo SaaS;
- adaptar shell para Meu Caminho;
- manter somente capacidades úteis.

A fundação está fechada em **Modo A — Fundação Direta**.

---

# 4. LOCKFILE E VERSÕES COMPROVADAS

O lockfile original do MakerKit auditado não é baseline.

Baseline:

```text
MakerKit c5cba64
+ package specs estáveis
+ lockfile regenerado
+ validação técnica
```

Versões comprovadas:

```text
Next.js 16.3.0
@next/bundle-analyzer 16.3.0
```

---

# 5. RUNTIME E MONOREPO

```text
Node.js 24.x
pnpm 11.18.0
Turborepo
```

Compatibilidade pnpm 11.18.0 + Vercel será validada no PJ-03C.

Turborepo permanece como decisão.

Packages existentes úteis `@kit/*` podem ser preservados.

Packages `@portal/*` devem ser criados sob demanda por responsabilidades coesas.

---

# 6. ROTAS CANÔNICAS DA V1

## Público — Netlify

```text
/
 /sobre/
 /metodo/
 /minuto-anterior/
 /antes-do-aperto/
 /mapeamento/
 /sintonize/
 /privacidade/
 /termos/
```

## App — Vercel

```text
/
 /entrar
 /auth/*

 /minuto-anterior
 /minuto-anterior/resultado/*

 /meu-caminho
 /meu-caminho/experiencias
 /meu-caminho/registros
 /meu-caminho/entregas
 /meu-caminho/conta

 /meu-caminho/antes-do-aperto/*
 /meu-caminho/mapeamento/*
 /meu-caminho/sintonize/*
```

O `/home` demo do MakerKit será convertido para `/meu-caminho`.

---

# 7. SUPABASE

> **1 projeto Supabase canônico de produção para toda a Plataforma.**

Responsabilidades:

- Supabase Auth;
- PostgreSQL;
- RLS;
- Storage;
- shared kernel;
- domínios de produtos.

Nenhum produto cria Supabase próprio.

## 7.1. Ambientes

```text
LOCAL
Supabase CLI + Docker
dados fictícios

PREVIEW
Vercel Preview
banco isolado
sem production service_role

PRODUCTION
Vercel Production
Supabase Production canônico
```

Supabase Branching versus staging isolado permanece decisão operacional futura baseada em plano/custo.

---

# 8. AUTH V1

```text
Magic Link / passwordless = ON
Password Auth = OFF
Google OAuth = OUT V1
MFA = disponível, não obrigatório
```

Entrada pública:

> `/entrar`

Password OFF implica:

- sem cadastro por senha;
- sem reset de senha;
- sem alteração de senha;
- testes E2E adaptados para Magic Link.

Retorno contextual deve ser preservado.

---

# 9. CAPTCHA

Não classificar CAPTCHA como defeituoso.

Política:

- Local/Test: OFF;
- Preview: conforme necessidade;
- Production: anti-abuso quando exposição pública justificar.

Comportamento da UI será configurado e validado no gate de Auth.

---

# 10. IDENTIDADE

Distinguir:

- visitante;
- contato;
- identidade autenticada;
- profile/account;
- comprador;
- pessoa com entitlement;
- participante/enrollment.

Contratos:

```text
auth.users
accounts
contacts
identity_links
```

Contato não é usuário autenticado.

---

# 11. IDENTITY CLAIMING

Para O Minuto Anterior:

```text
experiência pública
↓
registro pré-auth
↓
claim token opaco
↓
Magic Link
↓
identidade verificada
↓
claim server-side idempotente
↓
registro associado
↓
Meu Caminho
```

Requisitos:

- token criptograficamente forte;
- hash persistido;
- TTL;
- uso único;
- ownership;
- auditoria;
- idempotência;
- nunca claim sensível apenas por coincidência de e-mail.

---

# 12. SHARED KERNEL

```text
IDENTITY
auth.users
accounts
contacts
identity_links

PRIVACY
consents
privacy_requests

COMMERCE
products
offers
orders
payments
payment_events
webhook_receipts

ACCESS
entitlements
enrollments

DELIVERY
deliveries
delivery_assets

COMMUNICATION
communication_dispatches

AUDIT
audit_events
```

A lista é contrato conceitual. Packages/tabelas entram quando os gates exigirem.

---

# 13. SEPARAÇÕES OBRIGATÓRIAS

```text
order
≠
payment
≠
entitlement
≠
enrollment
≠
progress
≠
completion
≠
delivery
```

`contact_id` sozinho não concede acesso privado.

Acesso privado requer account autenticada + ownership + autorização server-side.

---

# 14. DOMÍNIOS PRIVADOS

Infraestrutura é compartilhada; conteúdo íntimo não é misturado.

Domínios:

```text
minute_before_*
before_the_squeeze_*
mapping_*
sintonize_*
```

Dados específicos permanecem em contratos próprios.

---

# 15. STORAGE

Privado por padrão para entregas pessoais.

Persistir:

```text
object_path
metadata
```

Não persistir signed URL permanente.

Signed URL:

- on-demand;
- TTL curto;
- ownership server-side;
- helper compartilhado.

---

# 16. RLS E SEGURANÇA

Obrigatório:

- RLS por padrão;
- negative tests;
- User A não acessa User B;
- anon sem PII;
- service_role server-only;
- policies por domínio;
- ownership explícito;
- migration review;
- rollback definido.

---

# 17. LOGGING

Pino permanece.

Antes de produção:

> **PII redaction obrigatória.**

Nunca logar:

- tokens;
- cookies;
- Authorization;
- passwords;
- OTP;
- respostas íntimas;
- Mapeamento;
- Sintonize.

---

# 18. E-MAIL

```text
AUTH          → Supabase Auth + Resend SMTP
TRANSACTIONAL → Resend SDK/API
MARKETING     → Brevo
```

Marketing depende de consentimento próprio.

---

# 19. CHECKOUT E WEBHOOKS

Checkout externo.

Provider ainda não fechado.

Usar adapter.

```text
checkout
↓
webhook
↓
webhook_receipt
↓
payment_event
↓
payment
↓
entitlement
↓
enrollment quando necessário
```

Webhook:

- assinatura;
- raw body quando necessário;
- event_id;
- idempotência;
- retry-safe;
- resposta dentro do SLA do provider.

---

# 20. ANALYTICS

Plataforma autenticada usa allowlist.

Exemplos:

- `experience_started`;
- `step_completed`;
- `delivery_viewed`;
- `completed`.

Proibido enviar:

- respostas;
- reflexões;
- intake;
- conteúdo de Mapeamento;
- conteúdo Sintonize;
- Classe D;
- PII em texto.

---

# 21. CONTRATOS DOS PRODUTOS

## 21.1. O Minuto Anterior

```text
Landing pública Netlify
↓
Vercel /minuto-anterior
↓
sem login obrigatório
↓
primeiro valor
↓
resultado
↓
opção guardar
↓
Magic Link
↓
identity claim
↓
Meu Caminho
```

Sem entitlement.

## 21.2. Antes do Aperto

```text
payment
↓
entitlement
↓
enrollment
↓
Meu Caminho
↓
Dia 1–7
↓
completion
```

## 21.3. Mapeamento 2.0

```text
payment
↓
entitlement
↓
mapping case
↓
intake privado
↓
trabalho humano
↓
status
↓
delivery privada
↓
reavaliação
```

## 21.4. Sintonize

```text
payment
↓
entitlement
↓
intake + consentimento
↓
sessão humana/manual
↓
status
↓
Registro da Sua Sessão
↓
áudio
↓
integração
↓
D7
```

Sintonize continua não automatizável em sua operação radiestésica.

---

# 22. O QUE NÃO CONSTRUIR AGORA

- LMS completo;
- catálogo de cursos;
- marketplace;
- gamificação;
- ranking;
- certificados;
- comunidade;
- feed social;
- app nativo;
- multi-tenancy B2B;
- billing próprio completo;
- construtor de cursos;
- automações espirituais;
- IA interpretando Mapeamentos ou Sintonize;
- features apenas porque MakerKit as oferece.

---

# 23. GATES PÓS-ADR

```text
DOC-SYNC aprovado
↓
commit/push documental
↓
PJ-03A — Bootstrap local
↓
PJ-03B — Supabase Foundation
↓
PJ-03C — Vercel Preview
↓
PJ-03D — Identity/Auth Core
↓
PJ-04 — Security / Shared Kernel
↓
Integration Contracts dos produtos
```

# 24. ESTADO OPERACIONAL

Nesta V1.1:

- arquitetura = APROVADA;
- repo app = definido, ainda não criado;
- projeto Vercel = definido, ainda não criado;
- Supabase produção = definido, ainda não criado;
- DNS app = definido, ainda não configurado;
- Magic Link = aprovado, ainda não configurado em produção;
- PJ-03A = bloqueado até DOC-SYNC aprovado + commit/push.

---

# 25. CRITÉRIO FINAL

> **Meu Caminho organiza continuidade. Os produtos entregam transformação. A Plataforma compartilha infraestrutura sem transformar pessoas, registros e experiências em dados genéricos.**

**FIM — SPEC TRANSVERSAL V1.1**
