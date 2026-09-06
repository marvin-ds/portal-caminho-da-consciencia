# CONTRACTS MA-01 — O Minuto Anterior MVP V1.1

**GATE:** MA-01 — ADR + Product/Tech Contracts
**STATUS:** proposto para auditoria
**DATA:** 04/09/2026
**MODE:** docs/contracts only
**SPEC_VERSION:** MVP V1.1
**SPEC_STATUS:** CURRENT PRODUCT SPEC
**V1.0:** SUPERSEDED
**PRODUCT_ID:** `minute_before_free_v1`
**OFFER_ID:** `minute_before_free_v1`
**PAGE_ID:** `minute_before_landing_v1`
**VARIANT_ID INICIAL:** `ma_general_v1`

---

# 1. Escopo

Este documento define contratos conceituais para o MVP, sem migrations, código, infraestrutura, repo novo ou deploy.

Único objetivo: deixar claro o que a implementação futura deve preservar em produto, dados, privacidade, eventos e integrações.

---

# 2. IDs

| ID | Formato | Responsabilidade | Observação |
|---|---|---|---|
| `product_id` | string versionada | produto | `minute_before_free_v1` |
| `offer_id` | string versionada | oferta | `minute_before_free_v1` |
| `page_id` | string versionada | landing | `minute_before_landing_v1` |
| `variant_id` | string versionada | message match | inicial: `ma_general_v1` |
| `session_id` | UUID | app/backend | identifica uma execução |
| `contact_id` | UUID | app/backend | identifica contato quando houver e-mail |
| `result_id` | UUID | app/backend | identifica snapshot de resultado |

IDs físicos de banco, Vercel, Supabase e auth pertencem à Plataforma da Jornada / Meu Caminho e não são definidos por este produto.

---

# 3. Session lifecycle

Estados mínimos:

```text
started
in_progress
completed
abandoned
deleted
```

Transições permitidas:

```text
started -> in_progress
started -> abandoned
started -> deleted
in_progress -> completed
in_progress -> abandoned
in_progress -> deleted
completed -> deleted
```

Regras:

- `completed` exige Q6 válida;
- `started` indica sessão criada e experiência iniciada;
- `in_progress` indica pelo menos uma etapa/resposta persistida e experiência ainda não concluída;
- `abandoned` indica sessão iniciada, não concluída e considerada abandonada por regra operacional/TTL a ser definida posteriormente;
- `deleted` indica sessão marcada/processada como excluída conforme fluxo de privacidade/retenção;
- repetição cria nova sessão;
- não há comparação automática entre sessões no MVP;
- autenticação não é obrigatória para o primeiro valor.

`expired` não é status principal de `minute_before_sessions`. Expiração pertence ao contrato de acesso ao resultado/token:

```text
TOKEN_ACCESS_STATE / RESULT_ACCESS = valid / expired / rotated_or_revoked
```

---

# 4. Question contract

| ID | Finalidade | Tipo | Obrigatório | Limites | Conteúdo íntimo | Analytics | Brevo | Resend | Retenção prevista |
|---|---|---|---|---|---|---|---|---|---|
| `q1_context` | contexto de entrada | enum | sim | taxonomia V1 | baixo/médio | somente label aprovada, se permitido | não | não | 90 dias se ligado à sessão |
| `q1_text` | situação concreta | texto curto | sim | 20–400 chars | sim | não | não | somente no resultado transacional, se necessário | 90 dias |
| `q2_time_distance` | distância temporal | enum | opcional | taxonomia V1 | baixo | somente label aprovada, se permitido | não | não | 90 dias se ligado à sessão |
| `q2_text` | movimento anterior lembrado | texto | sim | 20–500 chars | sim | não | não | somente no resultado transacional, se necessário | 90 dias |
| `q3_text` | frase/pensamento | texto | opcional | 0–240 chars | sim | não | não | somente no resultado transacional, se necessário | 90 dias |
| `q4_action_signal` | ação observável | enum | sim | taxonomia V1 | médio | somente label aprovada, se permitido | não | não | 90 dias se ligado à sessão |
| `q4_other_text` | ação outra | optional short text | opcional | exact_max_length: TBD; SPEC does not define numeric limit | sim | não | não | somente no resultado transacional, se necessário | 90 dias |
| `q5_repetition` | repetição percebida | enum | sim | sim/talvez/não/não sei | médio | somente label aprovada, se permitido | não | não | 90 dias se ligado à sessão |
| `q5_text` | situação semelhante | texto | opcional | até 300 chars | sim | não | não | somente no resultado transacional, se necessário | 90 dias |
| `q6_final_sentence` | síntese própria | texto | sim | 20–360 chars | sim | não | não | somente no resultado transacional, se necessário | 90 dias |

Qualquer campo livre é proibido em GA4, GTM, Meta, Google Ads e Brevo.

---

# 5. Result contract

O Momento Espelho é determinístico e contém:

1. situação escolhida;
2. antes disso;
3. frase que apareceu, se preenchida;
4. ação observável;
5. repetição percebida;
6. Meu Minuto Anterior;
7. limite semântico;
8. microprática de 7 dias;
9. continuidade opcional.

Proibido no resultado:

- score;
- nível;
- perfil;
- diagnóstico;
- causa raiz;
- interpretação automática;
- inferência espiritual;
- rótulo psicológico.

---

# 6. Consent contract

Consentimentos separados:

```text
experience_delivery
marketing_email
analytics
```

Regras:

- `experience_delivery` abrange executar a experiência, salvar, recuperar, reenviar e proteger a operação;
- marketing é opcional, independente e desmarcado;
- analytics segue Consent Mode v2 e política vigente;
- texto, versão, origem e timestamp devem ser registráveis;
- marketing nunca é condição para usar o gratuito.
- `marketing_email` permanece optional, unchecked e independent from free experience.

---

# 7. Attribution contract

Parâmetros permitidos:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
gclid
gbraid
wbraid
landing_page
variant_id
referrer
```

Regras:

- preservar atribuição landing -> app quando possível;
- não anexar respostas pessoais a parâmetros de atribuição;
- não enviar e-mail em URL;
- não usar conteúdo íntimo em campanhas, audiences ou tags.
- distinguir `INTERNAL ATTRIBUTION STORAGE` de `ANALYTICS EMISSION`;
- nem todo campo armazenado internamente precisa ser enviado ao analytics;
- `referrer` deve ser tratado quando aplicável;
- aplicar consentimento e minimização vigentes.

---

# 8. Analytics event contract

| Evento | Trigger | Finalidade | Parâmetros permitidos | Proibido | Consentimento |
|---|---|---|---|---|---|
| `minute_before_landing_view` | visualização da landing | aquisição | `product_id`, `offer_id`, `page_id`, `variant_id`, origem permitida | PII/respostas | conforme Consent Mode |
| `minute_before_cta_click` | clique no CTA | intenção | IDs, `cta_location`, origem permitida | PII/respostas | conforme Consent Mode |
| `minute_before_start` | sessão iniciada | funil | IDs, `variant_id` | e-mail/respostas | conforme Consent Mode |
| `minute_before_step_view` | etapa exibida | drop-off | IDs, `step_id`, `step_index` | conteúdo da resposta | conforme Consent Mode |
| `minute_before_step_complete` | etapa concluída | progresso | IDs, `step_id`, `step_index` | conteúdo da resposta | conforme Consent Mode |
| `minute_before_audio_play` | play no áudio | uso de apoio | IDs, `audio_version` | e-mail/respostas | conforme Consent Mode |
| `minute_before_complete` | Q6 válida e conclusão | core value | IDs, tempo agregado, steps concluídos | texto de Q6/resultado | conforme Consent Mode |
| `minute_before_result_view` | resultado visto | entrega | IDs, `result_status` | resultado/conteúdo | conforme Consent Mode |
| `minute_before_sheet_print` | impressão/salvar folha | valor percebido | IDs, `print_view` | conteúdo da folha | conforme Consent Mode |
| `minute_before_result_resend` | reenvio solicitado | utilidade | IDs, status operacional | e-mail em claro/respostas | conforme Consent Mode + base transacional |
| `minute_before_repeat_start` | nova sessão | repetição | IDs, `repeat=true` | comparação/conteúdo | conforme Consent Mode |
| `minute_before_feedback_submit` | feedback de valor | aprendizagem | IDs, resposta estruturada aprovada | texto livre sensível | conforme Consent Mode |
| `minute_before_next_step_click` | clique de continuidade | progressão | IDs, `next_step_type`, `cta_location` | conteúdo íntimo | conforme Consent Mode |

Parâmetros globais proibidos em todos os eventos:

- email;
- name;
- raw token;
- `q1_text`;
- `q2_text`;
- `q3_text`;
- `q4_other_text`;
- `q5_text`;
- `q6_final_sentence`;
- free text;
- personal descriptions;
- relationship reports;
- spiritual reports.

`entry_context_coarse` só pode ir para analytics quando classificação e consentimento permitirem. Caso contrário, permanece apenas internamente.

---

# 9. Token/result access contract

Regras mínimas:

- token aleatório com pelo menos 32 bytes;
- banco armazena apenas hash SHA-256;
- TTL inicial: 30 dias;
- token nunca em logs;
- fluxo preferencial: `https://app.portalcaminhodaconsciencia.com.br/r#t=TOKEN`;
- browser abre `/r` sem segredo na requisição inicial;
- JS lê `#t=TOKEN`;
- browser envia token via POST ao endpoint de resolução;
- servidor calcula/consulta hash;
- servidor valida TTL/status;
- servidor retorna somente o resultado autorizado;
- resultado com `noindex,nofollow`;
- resultado com `Cache-Control: no-store`;
- referrer restritivo;
- token inválido/expirado falha com segurança;
- reenvio rate-limited e idempotente.
- fallback por query string somente como exceção futura documentada.

---

# 10. Retention contract

Política inicial de MVP, sujeita a revisão jurídica:

```text
token: 30 dias
free-text identificável/result snapshot: 90 dias
consent/audit: conforme necessidade legal
dados agregados/deidentificados: conforme base válida
```

Esta seção não é parecer jurídico. A política final deve ser revisada antes de produção.

---

# 11. Repeat contract

Nova execução:

```text
new session
same contact when identifiable
no automatic comparison
no automatic inference
```

O MVP pode permitir repetir a experiência, mas não deve criar histórico interpretativo nem sugerir padrões entre sessões.

---

# 12. Integration status

## App repo

```text
APP_REPO = portal-caminho-da-consciencia-app
APP_REPO_STATUS = DEFINED / NOT YET MATERIALIZED
APP_HOSTING = Vercel
APP_DOMAIN = app.portalcaminhodaconsciencia.com.br
```

Nenhum repo será criado no MA-01. O Minuto Anterior não possui app, Vercel ou repo próprios.

## Platform foundation

```text
PLATFORM_FOUNDATION = MakerKit Lite Mode A
AUTH_V1 = Magic Link / passwordless
PASSWORD_AUTH = OFF
GOOGLE_OAUTH_V1 = OUT OF SCOPE
```

O produto pode implementar apenas seu domínio específico em gate futuro. Não pode alterar Shared Kernel, Auth, Identity, Supabase transversal, Vercel, DNS ou fundação da Plataforma.

## Supabase

```text
PLATFORM_SUPABASE = ONE CANONICAL PRODUCTION PROJECT
SUPABASE_STATUS = ARCHITECTURALLY DEFINED / INFRASTRUCTURE NOT YET MATERIALIZED
```

Nenhum project ref, migration ou schema físico é definido no MA-01.

## Resend

```text
HUMAN_CONFIRMED = EXISTS
TECHNICAL_CONFIGURATION = PARTIALLY/NOT VERIFIED
```

## Brevo

```text
HUMAN_CONFIRMED = EXISTS
TECHNICAL_CONFIGURATION = PARTIALLY/NOT VERIFIED
```

Brevo receives no raw answers.

Permitido mediante marketing opt-in válido e classificação/consentimento compatíveis:

```text
EMAIL
PRODUCT
VARIANT
ENTRY_CONTEXT when allowed
COMPLETED
CREATED_AT
```

Não enviar ao Brevo:

- `q1_text`;
- `q2_text`;
- `q3_text`;
- `q4_other_text`;
- `q5_text`;
- `q6_final_sentence`;
- result snapshot;
- raw token.

---

# 13. Privacy/access contract

O browser não possui acesso público direto às tabelas/estruturas que armazenam dados Classe C/D ou respostas íntimas.

```text
anon:
NO direct SELECT of intimate data
NO direct UPDATE of intimate data
```

Operações necessárias devem passar por:

```text
server-side API only
```

`service_role`:

```text
server-side only
never exposed to browser
```

Resultado:

```text
resolved through opaque token
minimum necessary scope
```

MA-01 não implementa RLS; apenas formaliza este contrato.

---

# 14. Pre-auth, identity claim and ownership contract

## Value before login

```text
LOGIN_REQUIRED_BEFORE_FIRST_VALUE = NO
```

Meu Caminho não pode bloquear iniciar, responder, concluir ou ver o primeiro resultado. Auth é continuidade opcional.

## Canonical flow

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

## Entity separation

Separar obrigatoriamente:

```text
pre_auth_session
contact
authenticated_account
ownership
identity_claim
```

Uma sessão pré-auth pode existir sem `auth.users`. Ela não ganha propriedade permanente apenas por e-mail.

## Identity claim

Quando a pessoa optar por guardar o resultado:

- gerar claim token forte;
- armazenar somente hash;
- aplicar TTL;
- permitir uso único;
- restringir ao registro/sessão;
- resolver server-side;
- ser idempotente;
- registrar trilha de auditoria mínima;
- associar propriedade somente após autenticação válida.

Nunca associar registro íntimo a conta apenas porque o e-mail pré-auth é igual ao e-mail autenticado.

## Ownership

```text
authenticated account
+
valid claim
+
server-side ownership operation
=
private ownership
```

Não usar como prova suficiente:

- `contact_id` sozinho;
- igualdade de e-mail sozinha;
- assertion do browser sozinha.

## RLS negative tests contract

Antes de produção, a implementação deverá provar:

- usuário A não lê dados do usuário B;
- usuário A não altera dados do usuário B;
- token inválido não cria ownership;
- token expirado não cria ownership;
- token reutilizado não cria novo vínculo;
- `contact_id`/e-mail sozinho não concede acesso;
- ownership é aplicada server-side;
- dados íntimos não têm acesso direto por browser/anon.

MA-01 não implementa RLS nem migrations; apenas formaliza o contrato.

## Meu Caminho

Após claim e auth, Meu Caminho poderá exibir estado simples, retomada, resultado ou repetição conforme contratos futuros.

Não implementar neste gate:

- dashboard;
- catálogo;
- entitlement;
- Journey Core;
- Shared Kernel;
- Auth foundation;
- Identity foundation.

Se qualquer uma dessas capacidades for necessária, registrar `PLATFORM_DEPENDENCY`.

---

# 15. Open issues

## OI-MA01-01

Definir limite numérico conservador de `q4_other_text` antes da implementação de Q4.

```text
q4_other_text
type: optional short text
exact_max_length: TBD
authority: SPEC does not define numeric limit
must_be_closed_before: MA-04 implementation
```

Este ponto não bloqueia o fechamento documental do MA-01.

---

# 16. Out of scope

MA-01 não autoriza:

- implementação;
- app;
- repo;
- Supabase;
- migration;
- Vercel;
- DNS;
- Resend/Brevo config;
- Netlify config;
- landing;
- alteração dos canônicos 00–06;
- alteração de Home, `/mapeamento` ou outras páginas;
- alteração de outro produto;
- alteração da fundação de Meu Caminho / Plataforma da Jornada;
- alteração de Shared Kernel, Auth, Identity, Supabase transversal, Vercel, DNS ou infra;
- commit/push/deploy.
