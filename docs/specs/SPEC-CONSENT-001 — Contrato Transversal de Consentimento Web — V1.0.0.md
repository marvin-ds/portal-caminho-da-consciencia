# PORTAL CAMINHO DA CONSCIÊNCIA

## SPEC-CONSENT-001 — Contrato Transversal de Consentimento Web

| Campo | Informação |
|---|---|
| **Código** | `SPEC-CONSENT-001` |
| **Tipo** | Especificação Técnica e Operacional Transversal |
| **Status** | **APROVADA** |
| **Versão** | **1.0.0** |
| **Data de criação** | **22/09/2026** |
| **Última atualização** | **22/09/2026** |
| **Autoridade de aprovação** | **Marcos Vinicius** |
| **Projeto** | **Portal Caminho da Consciência** |
| **Escopo** | Consentimento browser-side entre o site institucional e o app, Consent Mode v2, continuidade cross-subdomain, migração do legado e limites para mensuração futura |
| **Precedência** | Subordinada ao `CANON-00` a `CANON-07`, às regras vigentes de privacidade, segurança, mensuração e arquitetura técnica |
| **Documentos relacionados** | `MAPA-00`, `SPEC-STACK-00`, `SPEC-MENSURACAO-00`, `SPEC-MEU-CAMINHO-001` |
| **Substitui** | O uso isolado de `localStorage["portal_consent"]` como fonte operacional de consentimento no institucional |
| **Regra de leitura** | Esta SPEC governa o contrato transversal de consentimento browser-side. Não redefine autenticação, compra, entitlement, atribuição econômica ou política jurídica geral do Portal. |

---

# 1. FINALIDADE

Esta SPEC define o contrato único de consentimento browser-side utilizado por:

- `portalcaminhodaconsciencia.com.br`
- `app.portalcaminhodaconsciencia.com.br`

Sua finalidade é garantir que a escolha da pessoa sobre tecnologias opcionais de análise e publicidade seja:

- explícita;
- preservada entre os dois hosts;
- revogável;
- tecnicamente consistente;
- aplicada antes da execução das tags correspondentes;
- separada de autenticação, compra e funcionamento essencial do produto.

O contrato existe para evitar:

- decisões de consentimento independentes entre site e app;
- concessão implícita de consentimento;
- armazenamento contraditório em múltiplas fontes;
- instalação de mensuração antes da decisão;
- uso de autenticação ou banco como requisito para visitantes anônimos;
- mistura entre consentimento browser-side e outros registros de relacionamento ou privacidade.

---

# 2. DOMÍNIOS COBERTOS

O contrato abrange:

```text
portalcaminhodaconsciencia.com.br
app.portalcaminhodaconsciencia.com.br
```

A decisão deve ser compartilhada entre os dois por cookie first-party no domínio pai.

Não utilizar para sincronização:

```text
query string
localStorage compartilhado
Supabase
Auth
account_id
contact_id
email
fingerprint
```

# 3. FONTE OPERACIONAL DA VERDADE NO NAVEGADOR

A fonte operacional browser-side é exclusivamente:

```text
portal_consent_v1
```

Tipo:

```text
first-party parent-domain cookie
```

Contrato:

```ini
COOKIE_NAME = portal_consent_v1
DOMAIN = portalcaminhodaconsciencia.com.br
PATH = /
SAMESITE = Lax
HTTPONLY = NO
MAX_AGE = 180 dias
VERSION = 1
```

Em produção HTTPS:

```ini
Secure = YES
```

Em desenvolvimento/localhost fora do domínio do Portal:

```ini
Domain = omitido
```

O cookie não é mecanismo de autenticação.

# 4. PAYLOAD V1

Estrutura normativa:

```json
{
  "version": 1,
  "analytics": "granted | denied",
  "ads": "granted | denied",
  "ad_user_data": "granted | denied",
  "ad_personalization": "granted | denied",
  "updated_at": "ISO-8601"
}
```

Serialização:

```text
encodeURIComponent(JSON.stringify(payload))
```

Todos os campos são obrigatórios.

Qualquer uma das condições abaixo invalida o cookie:

```text
JSON inválido
versão diferente de 1
propriedade obrigatória ausente
valor diferente de granted/denied
updated_at inválido
```

Cookie inválido deve ser tratado como inexistente.

Nenhum valor deve ser inferido silenciosamente.

# 5. DADOS PROIBIDOS NO COOKIE

O cookie não pode conter:

```text
email
nome
user_id
account_id
contact_id
order_id
transaction_id
gclid
gbraid
wbraid
IP
fingerprint
auth token
session token
qualquer segredo
```

updated_at é permitido e não constitui identificador da pessoa.

# 6. GOOGLE CONSENT MODE V2

O mapeamento oficial é:

```text
analytics
→ analytics_storage

ads
→ ad_storage

ad_user_data
→ ad_user_data

ad_personalization
→ ad_personalization
```

O estado default obrigatório em ambos os ambientes é:

```ini
analytics_storage = denied
ad_storage = denied
ad_user_data = denied
ad_personalization = denied
```

```ini
wait_for_update = 500
```

O default deve ocorrer antes de qualquer GTM ou tag que dependa de consentimento.

Ausência de decisão nunca significa consentimento.

# 7. ESTADO DESCONHECIDO

Quando não existir decisão válida:

```ini
CONSENT_DECISION = UNKNOWN
```

Comportamento:

```text
todos os estados permanecem denied
banner é exibido
nenhum consentimento é criado automaticamente
nenhum toggle opcional aparece pré-selecionado
```

Na tela de personalização:

```ini
Análise = OFF
Publicidade = OFF
```

Essa regra existe para impedir consentimento implícito ou padrão visual indutor.

# 8. INTERFACE DE ESCOLHA

A interface disponibiliza três ações:

```text
Aceitar todos
Recusar opcionais
Personalizar
```

## 8.1 Aceitar todos

Grava:

```ini
analytics = granted
ads = granted
ad_user_data = granted
ad_personalization = granted
```

## 8.2 Recusar opcionais

Grava:

```ini
analytics = denied
ads = denied
ad_user_data = denied
ad_personalization = denied
```

## 8.3 Personalizar

A interface apresenta duas categorias compreensíveis:

```text
Análise
Publicidade
```

Mapeamento:

```text
Análise
→ analytics

Publicidade
→ ads
→ ad_user_data
→ ad_personalization
```

Publicidade ligada:

```ini
ads = granted
ad_user_data = granted
ad_personalization = granted
```

Publicidade desligada:

```ini
ads = denied
ad_user_data = denied
ad_personalization = denied
```

Recursos estritamente necessários não fazem parte desses controles.

# 9. PRINCÍPIO DE UX

O consentimento deve respeitar:

```text
sem dark patterns
sem falsa obrigatoriedade
sem bloquear navegação
sem pré-seleção favorável a consentimento
sem esconder a opção de recusa
```

A pessoa deve poder aceitar, recusar ou personalizar de forma clara.

# 10. STARTUP

A sequência obrigatória de inicialização é:

```text
PAGE START
↓
Consent Mode default = denied
↓
ler portal_consent_v1
↓
validar payload
↓
se válido:
    consent update
senão:
    tentar migração do legado
↓
se migração válida:
    consent update
senão:
    permanecer denied
    mostrar banner
```

No institucional:

```text
Consent default
ANTES
GTM-WC2C397G
```

No app, a mesma fila dataLayer/gtag pode ser preparada, mas nenhum GTM ou GA4 é instalado por esta SPEC.

# 11. MIGRAÇÃO DO LEGADO

Fonte legada:

```text
localStorage["portal_consent"]
```

Valores reconhecidos:

```text
"granted"
"denied"
```

Migração:

```text
"granted"
→ todos os quatro estados granted

"denied"
→ todos os quatro estados denied
```

Valor ausente ou inválido:

```text
não migrar
não inferir decisão
permanecer denied
mostrar banner
```

# 12. PRECEDÊNCIA

A ordem de resolução é:

```text
1. portal_consent_v1 válido
2. portal_consent legado válido
3. UNKNOWN
```

Se o cookie V1 válido existir:

```text
ignorar legacy
```

A existência de um valor antigo de localStorage nunca pode sobrescrever uma decisão V1 válida.

# 13. REMOÇÃO DO LEGADO

Depois de uma migração válida:

```text
1. gravar portal_consent_v1
2. reler o cookie
3. validar gravação
4. remover localStorage["portal_consent"]
```

Se a gravação do novo cookie falhar:

```text
NÃO remover o legacy
```

Isso impede perda acidental da decisão existente.

# 14. CONTINUIDADE CROSS-SUBDOMAIN

Fluxo esperado:

```text
institucional
→ pessoa decide
→ parent-domain cookie
→ app lê a mesma decisão
```

E também:

```text
app
→ pessoa altera decisão
→ mesmo parent-domain cookie
→ institucional vê nova decisão no próximo carregamento
```

Não deve existir uma fonte concorrente de consentimento por aplicação.

# 15. ALTERAÇÃO E REVOGAÇÃO

A pessoa pode reabrir suas preferências posteriormente.

Ao alterar:

```text
1. gravar novo portal_consent_v1
2. validar gravação
3. executar consent update
4. atualizar comportamento browser-side
```

A revogação não pode exigir:

```text
logout
nova conta
nova compra
cancelamento de entitlement
```

Nem pode apagar ou impedir recursos estritamente necessários.

# 16. SEPARAÇÃO DE AUTENTICAÇÃO E PRODUTO

Consentimento de mensuração é independente de:

```text
Auth
sessão
entitlements
Meu Caminho
checkout
pagamento
purchase-intent
entrega de produto
segurança
preferências funcionais essenciais
```

Recusar tecnologias opcionais não pode impedir o funcionamento essencial de uma experiência adquirida.

# 17. RELAÇÃO COM public.consents

Existe em banco:

```text
public.consents
```

Essa tabela NÃO é a fonte browser-side desta SPEC.

Contrato:

```ini
BROWSER_SOURCE_OF_TRUTH =
portal_consent_v1
```

public.consents pode futuramente servir a um registro durável identificado, caso haja finalidade, modelo e implementação explicitamente aprovados.

Não sincronizar automaticamente o cookie com essa tabela.

Não exigir autenticação para decidir consentimento de tags.

# 18. ATRIBUIÇÃO FIRST-PARTY

A existência de:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
gclid
gbraid
wbraid
```

na infraestrutura de atribuição não significa automaticamente autorização para transmissão a terceiros.

Regra:

```text
FIRST_PARTY_ATTRIBUTION_STORAGE
≠
EXTERNAL_PROVIDER_DISPATCH_PERMISSION
```

A captura first-party e a autorização de envio são contratos distintos.

# 19. GOOGLE ADS SERVER-SIDE — REGRA FUTURA

Para futuro envio server-side de conversão ao Google Ads, a elegibilidade aprovada é:

```ini
ad_storage == granted
AND
ad_user_data == granted
```

ad_personalization controla personalização e não é requisito para simples contabilização de conversão.

analytics_storage é independente dessa autorização de Google Ads.

Esta regra define o contrato futuro, mas não autoriza implementação de dispatch nesta SPEC.

# 20. SNAPSHOT DE CONSENTIMENTO PARA MENSURAÇÃO FUTURA

Para que futuro dispatch server-side seja auditável, o fluxo econômico deverá carregar um snapshot da decisão de consentimento correspondente.

Direção aprovada:

```text
browser consent
→ checkout / purchase intent
→ consent snapshot
→ economic event / dispatch eligibility
```

Esse snapshot NÃO é implementado pelo Gate 2.

Sua implementação pertence a gate posterior de Measurement.

Não criar silenciosamente campos, tabelas ou regras adicionais nesta etapa.

# 21. GTM NO INSTITUCIONAL

O container institucional existente permanece:

```text
GTM-WC2C397G
```

Esta SPEC não cria novo container.

O GTM deve permanecer subordinado ao Consent Mode definido antes de seu carregamento.

# 22. GTM / GA4 NO APP

Nesta versão:

```ini
APP_GTM = ABSENT
APP_GA4 = ABSENT
```

O app pode preparar:

```text
window.dataLayer
window.gtag queue
Consent Mode default/update
```

Mas não deve carregar scripts externos de mensuração por causa desta SPEC.

A instalação de GTM/GA4 no app pertence ao gate seguinte.

# 23. META

Esta SPEC não autoriza:

```text
Meta CAPI
novo Meta Pixel
fbclid contract
identidade adicional
server-side Meta dispatch
```

Qualquer evolução nessa direção exige gate próprio.

No institucional, mecanismos já existentes permanecem condicionados à decisão aplicável de publicidade.

# 24. EVENTOS

Esta SPEC não cria automaticamente eventos como:

```text
begin_checkout
purchase
activation
experience_start
experience_resume
experience_complete
```

A existência do contrato de consentimento não equivale à autorização para criar novos eventos.

Cada evento futuro deve possuir owner, fonte, payload, momento, deduplicação e requisito de consentimento definidos.

# 25. BROWSER PURCHASE

Permanece a decisão:

```ini
BROWSER_PURCHASE = NO
```

O navegador não é fonte econômica autoritativa de compra.

A origem econômica continua sendo o webhook Eduzz.

# 26. PRIVACIDADE E SEGURANÇA

O contrato deve preservar:

```text
minimização de dados
ausência de PII no cookie
ausência de segredo
controle da pessoa
revogabilidade
separação entre necessidade funcional e mensuração opcional
```

Não transformar consentimento de cookies em consentimento amplo para qualquer finalidade futura.

# 27. TESTES MÍNIMOS OBRIGATÓRIOS

A implementação deve comprovar:

```text
valid cookie all granted
valid cookie all denied
mixed states
invalid JSON
wrong version
missing property
invalid enum
unknown = denied
legacy granted migration
legacy denied migration
legacy invalid safe
cookie precedence
legacy cleanup after successful write
180-day Max-Age
SameSite=Lax
Path=/
parent Domain em Production
Domain omitido em localhost
Secure em HTTPS
revocation
preferences reopen
unknown customization OFF
existing decision reflected
```

# 28. CRITÉRIOS DE NÃO REGRESSÃO

A implementação não pode alterar indevidamente:

```text
Auth
Meu Caminho
Antes do Aperto
commerce
webhook
purchase-intent
entitlements
RLS
Measurement econômico
GTM institucional existente
```

# 29. GATES RELACIONADOS

Sequência aprovada:

```text
GATE 1
First-party attribution persistence
= CLOSED

GATE 2
Cross-subdomain consent contract
= ESTA SPEC

GATE 3
GTM / GA4 no app
= somente depois do Gate 2

Gates posteriores
server-side dispatch com consent snapshot
```

# 30. IMPLEMENTAÇÃO V1.0.0

Repositório institucional:

```ini
branch:
feat/consent-contract-v1

PR:
#13
```

Repositório app:

```ini
branch:
feat/consent-contract-v1

PR:
#12
```

A V1.0.0 implementa:

```text
parent-domain cookie
Consent Mode default denied
legacy migration
cross-subdomain continuity
accept all
decline optional
customize
revocation
preferences reopen
app bootstrap sem GTM/GA4
```

# 31. FORA DE ESCOPO DA V1.0.0

Não pertence a esta implementação:

```text
GTM/GA4 no app
Meta CAPI
fbclid
Google Data Manager dispatch
outbox
cron
consent snapshot persistido no purchase-intent
uso runtime de public.consents
mudança jurídica ampla de política de privacidade
```

# 32. DEFINITION OF DONE

O Gate 2 só pode ser encerrado quando houver:

```text
SPEC aprovada materializada
+
implementação institucional validada
+
implementação app validada
+
PRs revisados
+
merge
+
deploy
+
smoke cross-subdomain em Production
+
documentação sincronizada
+
MAPA-00 atualizado
```

# 33. ESTADO DE APROVAÇÃO

A arquitetura desta SPEC foi explicitamente aprovada por Marcos Vinicius.

Estado:

```ini
SPEC-CONSENT-001 V1.0.0 = APROVADA
```

Ela passa a ser o documento proprietário do contrato transversal de consentimento web do Portal Caminho da Consciência.

# HISTÓRICO DE VERSÕES

| Versão | Data | Alteração | Aprovado por |
|---|---|---|---|
| 1.0.0 | 22/09/2026 | Primeira versão do contrato transversal de consentimento browser-side, parent-domain cookie, Consent Mode v2, migração do legado, continuidade entre institucional e app, regras de revogação e limites para mensuração futura. | Marcos Vinicius |

**FIM — SPEC-CONSENT-001 — Contrato Transversal de Consentimento Web — V1.0.0 — APROVADA**
