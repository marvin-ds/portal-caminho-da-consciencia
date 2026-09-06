# ADR MA-01 — Boundaries e contratos arquiteturais do MVP

**GATE:** MA-01 — ADR + Product/Tech Contracts
**STATUS:** proposto para auditoria
**DATA:** 04/09/2026
**PRODUTO:** O Minuto Anterior — MVP V1.1
**SPEC_VERSION:** MVP V1.1
**SPEC_STATUS:** CURRENT PRODUCT SPEC
**V1.0:** SUPERSEDED
**PRODUCT_ID:** `minute_before_free_v1`
**OFFER_ID:** `minute_before_free_v1`
**PAGE_ID:** `minute_before_landing_v1`
**VARIANT_ID INICIAL:** `ma_general_v1`

---

# 1. Decisão

O Minuto Anterior será documentado como uma feature/produto próprio da Plataforma da Jornada / Meu Caminho, com contratos definidos antes de qualquer implementação de aplicação, banco, infraestrutura ou landing.

Separação decidida:

- landing pública: `https://portalcaminhodaconsciencia.com.br/minuto-anterior`;
- aplicação dinâmica: `https://app.portalcaminhodaconsciencia.com.br/minuto-anterior`;
- landing: Netlify institucional;
- experiência dinâmica: Next.js/Vercel no repo definido `portal-caminho-da-consciencia-app`;
- dados: Supabase/PostgreSQL em um único projeto canônico de produção da Plataforma;
- fundação: MakerKit Lite — Modo A;
- autenticação V1: Magic Link/passwordless, sem password auth;
- e-mail transacional: Resend;
- marketing: Brevo somente com opt-in;
- analytics: GTM + GA4 + Consent Mode v2, sem conteúdo íntimo.

Esta ADR não cria app, repo, projeto Vercel, Supabase, DNS, migration, landing ou deploy.

---

# 2. Boundary institucional

## Netlify

O repositório institucional e a Netlify possuem futuramente:

- página pública de entrada;
- copy de conversão;
- SEO, canonical e Open Graph;
- CTA para a aplicação dinâmica;
- preservação de atribuição e `variant_id`;
- tracking público consent-aware.

O site institucional não deve receber código de aplicação dinâmica apenas para evitar uma segunda superfície.

## Vercel

A aplicação dinâmica futura possui:

- experiência guiada;
- estado de sessão;
- endpoints;
- validações server-side;
- resultado determinístico;
- folha imprimível;
- reenvio;
- repetição;
- integrações server-side com Supabase, Resend e Brevo.

---

# 3. Relação com Meu Caminho / Plataforma da Jornada

MA-01R incorpora as decisões arquiteturais já fechadas no PJ-02 sem alterar a fundação transversal.

Estado pós-PJ-02:

- `APP_REPO = portal-caminho-da-consciencia-app`;
- `APP_REPO_STATUS = DEFINED / NOT YET MATERIALIZED`;
- `APP_HOSTING = Vercel`;
- `APP_DOMAIN = app.portalcaminhodaconsciencia.com.br`;
- `PLATFORM_SUPABASE = ONE CANONICAL PRODUCTION PROJECT`;
- `SUPABASE_STATUS = ARCHITECTURALLY DEFINED / INFRASTRUCTURE NOT YET MATERIALIZED`;
- `PLATFORM_FOUNDATION = MakerKit Lite Mode A`;
- `AUTH_V1 = Magic Link / passwordless`;
- `PASSWORD_AUTH = OFF`;
- `GOOGLE_OAUTH_V1 = OUT OF SCOPE`.

O Minuto Anterior não possui app, Vercel, Supabase, Auth ou identidade próprios. Ele implementa apenas seu domínio específico dentro da aplicação da Plataforma, quando gate futuro autorizar código.

Fluxo canônico:

```text
Netlify landing
-> Vercel /minuto-anterior
-> experiência pública sem login obrigatório
-> primeiro valor
-> resultado
-> opção de guardar
-> Magic Link
-> identity claim
-> Meu Caminho
```

---

# 4. Boundary de valor e autenticação

O MVP preserva a regra:

> valor antes do login.

O Minuto Anterior não deve exigir autenticação para entregar o primeiro valor.

Fora do escopo do MVP/MA-01:

- área de membros;
- dashboard;
- histórico autenticado;
- entitlement;
- LMS;
- perfil;
- comunidade;
- Meu Caminho dentro da experiência.

Uma identidade futura pode ligar sessões depois, se PJ-02 definir esse contrato, mas a experiência inicial permanece autoguiada e de baixo atrito.

Contrato pós-PJ-02:

```text
LOGIN_REQUIRED_BEFORE_FIRST_VALUE = NO
```

Meu Caminho não pode bloquear início, respostas, conclusão ou primeiro resultado. Autenticação é apenas continuidade opcional.

Quando a pessoa optar por guardar o resultado, o vínculo deve seguir:

```text
pre-auth session -> identity claim -> Magic Link -> Meu Caminho
```

Nunca associar dado íntimo a uma conta apenas por igualdade de e-mail. Propriedade privada exige conta autenticada, claim válido e operação server-side.

---

# 5. Boundary de dados

## PII

- e-mail.

## Conteúdo íntimo / autorrelato

- situação escolhida;
- movimento anterior;
- frase interna;
- ação observável;
- repetição percebida;
- frase final;
- resultado/snapshot derivado das próprias respostas.

## Analytics permitido

Somente eventos comportamentais e parâmetros não sensíveis:

- IDs públicos de produto/oferta/página/variante;
- etapa do fluxo;
- origem/campanha permitida;
- estado agregado de progresso;
- escolhas estruturadas quando classificadas como não íntimas e aprovadas em contrato.

## Proibido em analytics, ads e marketing

- e-mail;
- respostas abertas;
- frase interna;
- resultado;
- descrições pessoais;
- qualquer conteúdo íntimo;
- tokens completos;
- dados que permitam reidentificação indevida.

---

# 6. Resend x Brevo

## Resend

Uso transacional:

- entrega do resultado;
- recuperação de acesso;
- reenvio solicitado;
- comunicação operacional necessária.

O Resend não deve ser usado como lista de marketing.

## Brevo

Uso de marketing/nutrição somente quando:

```text
marketing_opt_in = true
```

Regras:

- opt-in opcional;
- desmarcado por padrão;
- independente da entrega gratuita;
- sem respostas íntimas;
- sem resultado;
- sem frase final;
- sem conteúdo livre.

---

# 7. Determinismo e limites semânticos

O resultado do MVP é composto apenas por:

```text
respostas do usuário
+ labels neutros aprovados
+ copy fixa do Portal
```

Proibido:

- LLM interpretando o caso;
- scoring psicológico;
- perfil;
- diagnóstico;
- causa raiz;
- inferência espiritual;
- classificação oculta;
- promessa de resolução;
- uso de Sintonize ou Mesa Radiônica.

O limite semântico obrigatório é:

> Isso não prova uma causa e não define você. É apenas um movimento que agora ficou mais fácil de observar.

---

# 8. Supabase

Status MA-01R:

```text
PLATFORM_SUPABASE = ONE CANONICAL PRODUCTION PROJECT
SUPABASE_STATUS = ARCHITECTURALLY DEFINED / INFRASTRUCTURE NOT YET MATERIALIZED
```

MA-01R define apenas contratos conceituais do produto. Não define project ref, não cria projeto, não cria migrations e não congela schema físico.

Qualquer necessidade de tabela, RLS, storage, Auth, Shared Kernel ou helper transversal deve ser registrada como `PLATFORM_DEPENDENCY` até gate próprio.

---

# 9. Segurança e privacidade

Princípios:

- service role nunca no browser;
- conteúdo íntimo somente server-side;
- tokens aleatórios, com hash no banco;
- resultado privado com TTL;
- páginas de resultado `noindex`;
- `Cache-Control: no-store` para resultado;
- logs sem respostas íntimas;
- analytics sem PII;
- exportação/exclusão planejadas antes de produção.

---

# 10. Consequência desta ADR

O MA-01 autoriza seguir para contratos e implementação futura apenas depois de auditoria.

Não autoriza:

- criação de app;
- criação de repo;
- criação de infraestrutura;
- alteração do site institucional;
- alteração de canônicos 00–06;
- alteração de Meu Caminho;
- alteração da fundação transversal da Plataforma da Jornada;
- deploy;
- commit/push sem auditoria.

---

# 11. Execution governance override — 04/09/2026

A regra histórica de alternância automática entre Claude Code e Codex registrada na SPEC está superada pela decisão operacional vigente:

```text
ChatGPT define -> ambiente ativo executa -> ChatGPT audita -> mesmo ambiente continua.
```

Troca de ambiente somente por decisão explícita de Marcos, após sincronização completa.
