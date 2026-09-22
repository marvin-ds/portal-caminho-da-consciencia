# PORTAL CAMINHO DA CONSCIÊNCIA

## SPEC-MENSURACAO-00 — Tracking, Atribuição, Conversões, Commerce e Go-Live Comercial — V1.0.0

| Campo | Informação |
| :---- | :---- |
| **Código** | `SPEC-MENSURACAO-00` |
| **Tipo** | Especificação transversal de mensuração, atribuição, conversões e readiness comercial |
| **Status** | **APROVADO POR MARCOS VINICIUS** |
| **Versão** | `1.0.0` |
| **Data** | `16/09/2026` |
| **Deadline operacional** | **21/09/2026** |
| **Projeto** | Portal Caminho da Consciência |
| **Workstream primário** | `TRANSVERSAL` |
| **Workstreams dependentes** | `PRODUCT`, `MEU_CAMINHO`, `INSTITUTIONAL` |
| **Agentes** | Claude Code e Codex como coimplementadores em alternância |
| **Owner transversal** | `CANON-00` \+ `CANON-06` \+ `CANON-07` \+ `SPEC-STACK-00` \+ `SPEC-PORTFOLIO-00` |
| **Objetivo** | Garantir que ofertas autorizadas possam entrar em operação com mensuração confiável de origem → visita → intenção → checkout → pagamento → acesso/entrega, sem duplicidade, sem PII em analytics e sem falsos positivos de conversão |
| **Subordinação** | Esta SPEC não altera CANONs, SPECs de produto, SPEC-MEU-CAMINHO-001 nem SPEC-STACK-00 |
| **Regra de isolamento** | Cada produto implementa seu delta na própria trilha. Dependências compartilhadas retornam como `TRANSVERSAL_DEPENDENCY` ou `PLATFORM_DEPENDENCY` |

---

# 1\. FINALIDADE

Esta SPEC define o contrato transversal que deve estar operacional até 21/09/2026 para que o Portal Caminho da Consciência possa:

1. colocar ofertas autorizadas em produção;  
2. medir aquisição orgânica e paga;  
3. preservar UTMs e identificadores de clique quando tecnicamente e legalmente aplicáveis;  
4. diferenciar intenção, lead, checkout, pagamento, compra e reembolso;  
5. alimentar GA4, Google Ads e Meta sem duplicar conversões;  
6. reconciliar compra com o Commerce/Access da Plataforma;  
7. construir uma baseline confiável antes da aceleração de mídia;  
8. permitir que Claude Code e Codex alternem sem perda de contexto;  
9. impedir que páginas de obrigado, cliques ou WhatsApp sejam tratados como venda;  
10. preservar privacidade, consentimento, RLS, ownership e isolamento entre produtos.

Princípio:

> **Medir comportamento que muda decisão — sem transformar sinal de intenção em venda e sem exportar intimidade.**

---

# 2\. ESCOPO ATÉ 21/09/2026

## 2.1 P0 — deve estar pronto para venda

Até 21/09, o contrato deve estar implementado e validado para:

1. **Antes do Aperto**  
2.   
3.   
4. **Mapeamento Padrão Interrompido**  
5. **Sessão Individual Sintonize Prosperidade**  
   - formato assíncrono;  
   - formato ao vivo, se realmente disponibilizado comercialmente.

## 2.2 P1 — contrato definido; implementar somente se a trilha estiver production-ready

6. **O Minuto Anterior**

Por ser gratuito, não gera `purchase`. Seu contrato envolve experiência, captura opcional, `sign_up` e `generate_lead` somente quando houver fato correspondente.

## 2.3 P2 — contrato pré-definido, sem lançamento por esta SPEC

7. **Ciclo Padrão Interrompido — 21 dias**  
8. **Acompanhamento Individual Premium**

Esta SPEC NÃO autoriza lançar esses produtos.

Os contratos de tracking ficam pré-definidos para impedir futura reinvenção, mas `product_id`, `offer_id`, preço público, página e checkout continuam subordinados às SPECs próprias.

## 2.4 Ofertas combinadas / pacotes

Esta SPEC NÃO cria pacote Mapeamento \+ Sintonize nem qualquer bundle.

Se uma oferta combinada for aprovada em trilha própria, deverá receber:

- `offer_id` próprio;  
- preço aprovado;  
- regra de entrega;  
- mapping de checkout;  
- contrato de entitlement;  
- regra de atribuição;  
- teste E2E.

Até isso ocorrer:

> **NÃO INVENTAR BUNDLE PARA FINS DE TRACKING.**

---

# 3\. FONTES E REGRAS SUPERIORES

Aplicar, nesta ordem:

1. decisão explícita posterior de Marcos Vinicius;  
2. CANON-00;  
3. CANON especializado aplicável;  
4. SPEC-STACK-00;  
5. SPEC-PORTFOLIO-00;  
6. SPEC-MEU-CAMINHO-001 quando a implementação tocar Commerce, Access, identity, entitlement ou continuidade;  
7. SPEC vigente do produto;  
8. esta SPEC de mensuração;  
9. ADRs, contratos, runbooks e documentação operacional;  
10. estado real do código, configuração, providers e testes.

Se houver conflito:

> **PARAR E REPORTAR.**

---

# 4\. TOPOLOGIA DA MENSURAÇÃO

CONTEÚDO / ANÚNCIO

↓

LANDING / PÁGINA DE OFERTA

↓

dataLayer / GTM

↓

GA4 \+ Meta Pixel conforme consentimento

↓

CTA

↓

CHECKOUT EXTERNO

↓

PROVIDER

↓

PAGAMENTO CONFIRMADO

↓

WEBHOOK / RECONCILIAÇÃO

↓

PAYMENT

↓

ENTITLEMENT

↓

ENROLLMENT / CASE / EXPERIÊNCIA quando aplicável

↓

MEU CAMINHO / ENTREGA

Mensuração não deve inverter essa hierarquia.

Especialmente:

click ≠ lead

lead ≠ checkout

checkout ≠ payment

payment ≠ entitlement

entitlement ≠ enrollment

purchase ≠ thank\_you\_view

---

# 5\. SOURCE OF TRUTH

## 5.1 Compra

A fonte de verdade de uma compra é:

> **pagamento efetivamente confirmado por fonte confiável.**

Aceitáveis:

- webhook verificado do provider;  
- API confiável do checkout;  
- reconciliação autorizada.

Não aceitáveis:

- clique;  
- abertura do checkout;  
- página de obrigado;  
- WhatsApp;  
- formulário;  
- declaração manual do cliente sem reconciliação.

## 5.2 Estado interno

A Plataforma deve manter separados:

order

payment

payment\_event

webhook\_receipt

entitlement

enrollment

delivery

Não colapsar conceitos para simplificar analytics.

## 5.3 Analytics

Analytics consome projeções do estado operacional.

Analytics NÃO é o banco autoritativo de:

- pagamento;  
- acesso;  
- ownership;  
- entitlement;  
- entrega.

---

# 6\. CONTRATO UNIVERSAL DE EVENTOS

## 6.1 Eventos públicos existentes — preservar

page\_view

scroll\_depth

section\_view

offer\_cta\_click

whatsapp\_click

Semântica:

| Evento | Significado |
| :---- | :---- |
| `page_view` | visita |
| `scroll_depth` | profundidade de consumo |
| `section_view` | exposição relevante |
| `offer_cta_click` | intenção intermediária |
| `whatsapp_click` | intenção comercial on-site |

`whatsapp_click` NÃO é lead confirmado e NÃO é compra.

## 6.2 Eventos GA4 recomendados a acrescentar quando houver fato real

view\_item

begin\_checkout

generate\_lead

sign\_up

purchase

refund

Regras:

- `view_item`: pessoa visualizou a oferta/produto mensurável;  
- `begin_checkout`: iniciou de fato a transição para o checkout;  
- `generate_lead`: um lead foi criado/confirmado por envio de formulário ou solicitação equivalente;  
- `sign_up`: uma conta/cadastro foi concluído;  
- `purchase`: pagamento confirmado;  
- `refund`: reembolso confirmado.

Não criar `generate_lead` a partir de `whatsapp_click`.

## 6.3 Eventos da Plataforma autenticada

Usar allowlist.

Exemplos possíveis:

experience\_started

step\_completed

delivery\_viewed

completed

Cada produto decide se/como usa.

Nunca exportar conteúdo íntimo.

---

# 7\. PARÂMETROS UNIVERSAIS

## 7.1 Contexto de oferta

Quando aplicável:

product\_id

product\_name

offer\_id

offer\_name

page\_id

variant\_id

cta\_location

cta\_text

page\_path

value

currency

Moeda padrão para ofertas brasileiras:

BRL

## 7.2 Purchase

Mínimo:

transaction\_id

value

currency

product\_id

offer\_id

Para GA4 ecommerce, preferir também:

items: \[

  {

    item\_id,

    item\_name,

    item\_variant,

    price,

    quantity

  }

\]

Regras:

- `transaction_id` único por transação;  
- nunca vazio;  
- nunca conter PII;  
- mesmo pagamento não pode gerar múltiplos purchases lógicos.

## 7.3 Lead

Permitidos:

lead\_type

product\_id

offer\_id

origin\_surface

Não enviar para GA4/Meta como parâmetro aberto:

- nome;  
- e-mail;  
- telefone;  
- texto de formulário;  
- intenção íntima;  
- conteúdo de intake.

---

# 8\. PRODUCT REGISTRY — IDENTIFICADORES

Antes de implementar, o agente deve reconciliar cada identificador com a SPEC vigente e o estado real.

## 8.1 O Minuto Anterior

product\_id \= minute\_before\_free\_v1

offer\_id   \= minute\_before\_free\_v1

page\_id    \= minute\_before\_landing\_v1

variant\_id \= ma\_general\_v1

## 8.2 Antes do Aperto

Identificador de referência já materializado:

product\_id \= before\_the\_squeeze\_v1

Os demais IDs devem ser lidos da SPEC vigente/código real.

Não inventar se a trilha já tiver definido valores posteriores.

## 8.3 Mapeamento Padrão Interrompido

product\_id \= mapping\_pattern\_interrupted\_v2

offer\_id   \= mapping\_pattern\_interrupted\_v2

page\_id    \= mapping

variant\_id \= mapping\_v2\_base

Preço vigente:

R$ 197

R$ 297 continua hipótese, não preço público vigente.

## 8.4 Sintonize Prosperidade

product\_id \= sintonize\_prosperity\_individual\_v1

offer\_id   \= sintonize\_individual\_v1

Formato padrão:

async

Formato opcional:

live

Para tracking:

variant\_id \= async

ou

variant\_id \= live

Não criar segundo `product_id` apenas por mudança de formato.

Se o provider exigir ofertas externas distintas, manter mappings externos distintos apontando para o mesmo domínio de produto.

## 8.5 Ciclo 21 dias

product\_id \= TBD\_BY\_OWNER\_SPEC

offer\_id   \= TBD\_BY\_OWNER\_SPEC

Não inventar nesta SPEC.

## 8.6 Premium

product\_id \= TBD\_BY\_OWNER\_SPEC

offer\_id   \= TBD\_BY\_OWNER\_SPEC

Não inventar nesta SPEC.

---

# 9\. CONTRATO DE UTM

## 9.1 Parâmetros

Preservar quando tecnicamente aplicável:

utm\_source

utm\_medium

utm\_campaign

utm\_content

utm\_term

gclid

gbraid

wbraid

`fbclid` pode ser preservado no redirecionamento quando presente, sem tratá-lo como identidade da pessoa.

## 9.2 Regras

- valores em lowercase quando controlados pelo Portal;  
- sem acentos;  
- sem espaços;  
- usar `-` ou `_` de forma consistente;  
- não colocar PII;  
- não usar UTM como `customer_id`;  
- não usar `gclid` como identidade da pessoa;  
- não sobrescrever uma UTM válida durante a mesma navegação sem motivo.

## 9.3 Padrão recomendado

### YouTube orgânico

utm\_source=youtube

utm\_medium=organic\_video

utm\_campaign=always\_on\_portal

utm\_content=\<asset\_id\>

### YouTube Comunidade

utm\_source=youtube

utm\_medium=community

utm\_campaign=always\_on\_portal

utm\_content=\<post\_id\>

### Instagram orgânico

utm\_source=instagram

utm\_medium=organic\_social

utm\_campaign=always\_on\_portal

utm\_content=\<asset\_id\>

### Meta Ads

utm\_source=meta

utm\_medium=paid\_social

utm\_campaign=\<product\_slug\>\_\<objective\>\_\<yyyy\_mm\>

utm\_content=\<creative\_id\>

### Google Ads

utm\_source=google

utm\_medium=cpc

utm\_campaign=\<campaign\_slug\>

utm\_content=\<ad\_or\_asset\_id\>

utm\_term=\<keyword\_when\_applicable\>

Manter auto-tagging ativo para Google Ads.

### E-mail

utm\_source=brevo

utm\_medium=email

utm\_campaign=\<sequence\_or\_broadcast\>

utm\_content=\<link\_id\>

### WhatsApp owned

utm\_source=whatsapp

utm\_medium=owned\_message

utm\_campaign=\<context\>

utm\_content=\<message\_or\_link\_id\>

---

# 10\. PROPAGAÇÃO PARA CHECKOUT EXTERNO

Todo CTA de compra deve:

1. ler UTMs/click IDs presentes;  
2. preservar apenas allowlist;  
3. anexar parâmetros permitidos ao checkout;  
4. manter URL válida;  
5. evitar dupla codificação;  
6. evitar PII;  
7. não quebrar affiliate params legítimos já existentes;  
8. registrar `offer_cta_click`;  
9. registrar `begin_checkout` somente no início real do redirecionamento.

Se existir ID interno estável, opaco e não sensível antes do checkout, pode ser usado como `external_id` do provider.

Se NÃO existir:

> **NÃO usar e-mail, telefone, UTM ou gclid como `external_id`.**

---

# 11\. EDUZZ — CONTRATO OPERACIONAL PARA 21/09

Eduzz permanece provider em validação prática.

Antes do go-live, cada oferta paga P0 deve confirmar:

provider \= Eduzz

provider\_product\_id \= REAL

provider\_offer\_or\_link \= REAL

checkout\_url \= REAL

webhook\_mapping \= REAL

Não reutilizar produto de teste como produção sem validação explícita.

## 11.1 Novo Checkout

Preferir o checkout atual quando compatível.

Validar que:

- Meta Pixel está configurado no produto/checkout correto;  
- UTMs chegam ao checkout;  
- `Purchase` do provider ocorre somente após confirmação de pagamento;  
- evento possui valor/moeda/produto coerentes;  
- webhook chega ao endpoint correto;  
- retry é idempotente.

## 11.2 Meta no checkout

Quando o Meta Pixel estiver configurado no Eduzz, usar o provider para o funil do próprio checkout.

Não disparar outro `Purchase` browser-side no Portal para a mesma venda.

## 11.3 Google Ads no checkout

Regra anti-duplicação:

> **uma compra não pode alimentar duas ações PRIMÁRIAS equivalentes no Google Ads.**

Arquitetura preferencial:

GA4 purchase

→ key event

→ import Google Ads

Se já existir pixel direto do Google Ads no Eduzz, auditar.

Escolher UM como fonte primária de bidding.

O outro, se mantido, deve ser:

- secundário;  
- diagnóstico;  
- ou desativado.

Nunca deixar ambos como primários sem decisão explícita e prova de não duplicidade.

---

# 12\. GA4 — CONFIGURAÇÃO

## 12.1 Confirmar

- propriedade correta;  
- Web Stream correto;  
- domínio institucional correto;  
- vínculo Google Ads correto;  
- auto-tagging Google Ads;  
- DebugView;  
- Realtime;  
- eventos existentes;  
- custom dimensions realmente necessárias;  
- ausência de PII.

## 12.2 Key events

Configurar/confirmar:

purchase \= key event

generate\_lead \= key event somente se o fluxo de lead existir

`purchase` deve ser prioridade.

`begin_checkout`, `offer_cta_click` e `whatsapp_click` são sinais de intenção, não venda.

## 12.3 Transaction ID

Toda compra deve chegar com `transaction_id` único.

Testar duplicação.

O mesmo `transaction_id` não deve inflar receita.

---

# 13\. GOOGLE ADS

Até 21/09:

1. GA4 e Google Ads vinculados;  
2. auto-tagging ativo;  
3. `purchase` disponível/importado;  
4. `purchase` validado em teste controlado;  
5. `whatsapp_click` permanece secundário;  
6. `generate_lead` pode ser secundário até existir campanha de lead;  
7. nenhuma ação intermediária pode substituir compra como objetivo econômico.

Antes de qualquer campanha de vendas Google:

- escolher `purchase` como ação primária;  
- confirmar que não existe duplicate primary conversion;  
- confirmar valor dinâmico;  
- confirmar moeda BRL.

Se `purchase` foi criado/importado via GA4 e aparece como secundário por padrão, promover para primário somente após E2E PASS.

---

# 14\. META

## 14.1 Portal

Meta Pixel público deve respeitar consentimento.

Eventos públicos úteis:

PageView

ViewContent quando aplicável

Lead somente em lead confirmado

Não enviar:

- intake;  
- relato;  
- dados íntimos;  
- conteúdo espiritual;  
- respostas abertas.

## 14.2 Checkout

No provider, validar pelo menos:

PageView

FormInteraction quando disponível

AddPaymentInfo quando disponível

InitiateCheckout

Purchase

`Purchase` deve representar pagamento confirmado.

## 14.3 Deduplicação

Não criar `Purchase` adicional no Portal se Eduzz já envia o mesmo fato de compra.

Se no futuro for implementada Conversions API server-side:

- usar `event_id`;  
- desenhar deduplicação;  
- tratar como gate próprio;  
- não acrescentar nesta deadline sem necessidade.

---

# 15\. CONSENT MODE E PRIVACIDADE

Chave atual de consentimento:

portal\_consent

Validar comportamento real.

Google Consent Mode deve representar:

analytics\_storage

ad\_storage

ad\_user\_data

ad\_personalization

Padrão esperado antes de consentimento:

denied

quando essa for a implementação adotada.

Testar:

1. visitante novo;  
2. aceitar;  
3. recusar;  
4. reload;  
5. navegação;  
6. Meta;  
7. GA4;  
8. Google Ads;  
9. checkout externo.

Importante:

- consentimento do Portal não deve ser presumido como consentimento universal do checkout externo;  
- verificar comportamento do provider;  
- não copiar dados íntimos para analytics;  
- não logar tokens, secrets ou payloads sensíveis.

---

# 16\. BASELINE — O QUE CONGELAR ANTES DA MÍDIA

Criar:

docs/operations/measurement/BASELINE\_2026-09-20.md

Data de corte:

20/09/2026 23:59 America/Sao\_Paulo

ou imediatamente antes do primeiro real investido, se ocorrer antes.

## 16.1 Baseline técnico

Registrar:

- main SHA institucional;  
- main SHA app;  
- deploy Netlify;  
- deploy Vercel aplicável;  
- GTM container ID;  
- GTM version publicada;  
- GA4 property/stream IDs;  
- Google Ads account ID;  
- conversões existentes;  
- Meta Pixel ID(s);  
- consent key;  
- provider;  
- webhooks;  
- endpoints;  
- mappings dos produtos;  
- checkout URLs;  
- IDs externos do provider;  
- eventos por superfície.

Secrets NÃO entram no documento.

## 16.2 Baseline comercial

Para cada produto P0:

- page URL;  
- preço;  
- checkout URL;  
- status;  
- provider ID;  
- sales count até baseline;  
- gross revenue até baseline;  
- refund count;  
- page sessions;  
- `offer_cta_click`;  
- `begin_checkout`;  
- purchases;  
- CVR observado, mesmo que zero.

## 16.3 Baseline de canais — registrar manualmente

Em 16/09, contexto conhecido:

YouTube subscribers ≈ 3.100

nova linha editorial ≈ 10 dias

views da nova fase ≈ 1.900

origem predominante \= Shorts

Instagram followers ≈ 3.000

nova linha editorial ≈ 10 dias

Reels ≈ 30 views médios

origem histórica \= espiritualidade/orações

No corte de 20/09, atualizar valores reais.

---

# 17\. DEFINITION OF LIVE

Uma oferta só pode ser declarada `LIVE` se TODOS os itens aplicáveis estiverem PASS:

## 17.1 Oferta

- nome correto;  
- preço correto;  
- descrição correta;  
- promessa ética;  
- entrega definida;  
- política comercial aplicável;  
- suporte identificado.

## 17.2 Página

- URL de produção;  
- CTA correto;  
- mobile;  
- legal links;  
- sem conteúdo de teste;  
- `offer_id` correto;  
- tracking correto;  
- checkout correto.

## 17.3 Commerce

- provider product correto;  
- offer/mapping correto;  
- checkout ativo;  
- valor correto;  
- moeda correta;  
- webhook correto;  
- idempotência;  
- payment;  
- entitlement;  
- enrollment/case quando aplicável;  
- reversão/refund quando aplicável.

## 17.4 Tracking

- page view;  
- offer CTA;  
- begin checkout;  
- provider checkout;  
- purchase confirmado;  
- transaction ID;  
- value;  
- currency;  
- UTM;  
- Google;  
- Meta;  
- consent.

## 17.5 Entrega

- comprador consegue acessar ou iniciar o fluxo legítimo;  
- e-mail/claim quando aplicável;  
- nenhum comprador real depende de manipulação manual não documentada.

Se qualquer item crítico falhar:

NOT\_LIVE

---

# 18\. PRODUTO 1 — ANTES DO APERTO

## 18.1 Identidade

product\_id \= before\_the\_squeeze\_v1

função \= primeira compra / low ticket

preço vigente \= R$ 97

Ler SPEC vigente da trilha antes de implementar.

## 18.2 Eventos mínimos

Página:

page\_view

view\_item

section\_view

offer\_cta\_click

begin\_checkout

Se existir lead real antes da compra:

generate\_lead

Compra:

purchase

Reembolso:

refund

App/experiência:

eventos próprios somente por allowlist e sem conteúdo íntimo.

## 18.3 E2E obrigatório

landing

→ CTA

→ checkout

→ pagamento controlado

→ webhook

→ payment

→ entitlement

→ account/claim

→ enrollment

→ Meu Caminho

→ Antes do Aperto disponível

## 18.4 Não pode acontecer

- `purchase` por thank-you page;  
- exercício enviado a analytics;  
- resposta de diário enviada a Meta/GA4;  
- checkout sem UTM;  
- entitlement antes de payment confirmado, salvo fluxo explicitamente aprovado.

---

# 19\. PRODUTO 2 — MAPEAMENTO PADRÃO INTERROMPIDO

## 19.1 Identidade

product\_id \= mapping\_pattern\_interrupted\_v2

offer\_id \= mapping\_pattern\_interrupted\_v2

page\_id \= mapping

variant\_id \= mapping\_v2\_base

preço \= R$ 197

## 19.2 Eventos mínimos

page\_view

view\_item

section\_view

offer\_cta\_click

begin\_checkout

purchase

refund

Se existir formulário de solicitação antes da compra:

generate\_lead

Somente depois do submit confirmado.

WhatsApp continua:

whatsapp\_click

e NÃO vira `generate_lead`.

## 19.3 E2E

/mapeamento

→ CTA

→ checkout

→ payment confirmado

→ webhook

→ entitlement

→ mapping\_case

→ intake privado

→ fluxo humano

Tracking deve parar antes de conteúdo íntimo.

## 19.4 Proibido em analytics

- episódios;  
- respostas do intake;  
- hipóteses;  
- possíveis Pontos de Interrupção;  
- relatório;  
- áudio;  
- texto livre.

---

# 20\. PRODUTO 3 — SESSÃO INDIVIDUAL SINTONIZE PROSPERIDADE

## 20.1 Identidade

product\_id \= sintonize\_prosperity\_individual\_v1

offer\_id \= sintonize\_individual\_v1

Variants:

async

live

Referências comerciais aprovadas:

async \= R$ 297

live  \= R$ 397

Formato ao vivo não deve ser comunicado como mais eficaz.

## 20.2 Eventos mínimos

page\_view

view\_item

section\_view

offer\_cta\_click

begin\_checkout

purchase

refund

Se houver qualificação prévia:

generate\_lead

somente após envio confirmado.

## 20.3 Parâmetros

product\_id

offer\_id

variant\_id

value

currency

## 20.4 E2E

Assíncrona:

landing

→ variant async

→ checkout

→ purchase

→ entitlement

→ intake/consent

→ status operacional

→ trabalho humano

→ delivery privada

Ao vivo:

landing

→ variant live

→ checkout

→ purchase

→ entitlement

→ intake/consent

→ agenda

→ sessão humana

→ delivery/integração

## 20.5 Proibido em analytics

- intenção pessoal;  
- respostas de anamnese;  
- leitura energética;  
- crenças/medos/faltas;  
- perguntas individuais;  
- resultados da Mesa;  
- áudio;  
- conteúdo espiritual individual.

---

# 21\. PRODUTO 4 — O MINUTO ANTERIOR

## 21.1 Identidade

product\_id  \= minute\_before\_free\_v1

offer\_id    \= minute\_before\_free\_v1

page\_id     \= minute\_before\_landing\_v1

variant\_id  \= ma\_general\_v1

preço       \= gratuito

## 21.2 Sem purchase

Nunca emitir:

purchase

## 21.3 Eventos específicos já definidos pela trilha

Preservar os eventos próprios aprovados, incluindo os relevantes para:

- landing;  
- start;  
- steps;  
- complete;  
- result;  
- repeat;  
- feedback;  
- save to Meu Caminho;  
- claim.

## 21.4 Lead e sign-up

Primeiro valor NÃO exige e-mail.

Se a pessoa guardar no Meu Caminho:

sign\_up

quando o cadastro/claim for concluído.

Se houver consentimento comercial explícito e registro de lead real:

generate\_lead

Não usar `sign_up` como sinônimo de consentimento de marketing.

---

# 22\. PRODUTO 5 — CICLO PADRÃO INTERROMPIDO 21 DIAS

Status:

FUTURE / OWNER SPEC REQUIRED

Contrato futuro mínimo:

view\_item

offer\_cta\_click

begin\_checkout

purchase

refund

Mais eventos de experiência serão definidos pela SPEC do produto.

Esta SPEC não define:

- product\_id;  
- offer\_id;  
- preço final;  
- página;  
- checkout.

---

# 23\. PRODUTO 6 — ACOMPANHAMENTO PREMIUM

Status:

FUTURE / OWNER SPEC REQUIRED

Se venda for precedida por candidatura/qualificação:

generate\_lead

qualify\_lead

disqualify\_lead

working\_lead

close\_convert\_lead

podem ser usados quando o processo comercial real existir.

Não implementar funil fictício antes da oferta existir.

---

# 24\. MATRIZ DE CONVERSÃO

| Ação | GA4 | Google Ads | Meta | Fonte |
| :---- | :---- | :---- | :---- | :---- |
| Página | `page_view` | não primária | `PageView` | browser |
| Oferta vista | `view_item` | não primária | `ViewContent` quando aplicável | browser |
| CTA | `offer_cta_click` | observação | opcional/custom | browser |
| WhatsApp | `whatsapp_click` | secundária | não Purchase | browser |
| Lead confirmado | `generate_lead` | secundária inicialmente | `Lead` | submit confirmado |
| Checkout iniciado | `begin_checkout` | observação | checkout provider | redirect/provider |
| Pagamento | `purchase` | **primária após E2E** | `Purchase` | confirmação confiável |
| Reembolso | `refund` | ajuste/observação | conforme integração | provider/backend |

---

# 25\. TESTES E2E OBRIGATÓRIOS

## 25.1 Consentimento

TC-01: visitante novo / nenhum consentimento.

TC-02: aceitar.

TC-03: recusar.

TC-04: reload e navegação.

## 25.2 UTM

TC-10: YouTube organic UTM.

TC-11: Instagram organic UTM.

TC-12: Meta paid UTM.

TC-13: Google UTM \+ click IDs sintéticos somente para transporte.

TC-14: UTM chega ao checkout sem corrupção.

## 25.3 Lead

TC-20: submit válido gera 1 lead.

TC-21: erro de submit não gera lead.

TC-22: WhatsApp click não gera lead.

## 25.4 Checkout

TC-30: CTA gera intenção.

TC-31: redirect válido.

TC-32: checkout recebe produto certo.

TC-33: valor e moeda corretos.

TC-34: abandono não gera purchase.

## 25.5 Purchase

TC-40: pagamento controlado aprovado.

TC-41: webhook recebido.

TC-42: receipt persistido.

TC-43: payment criado/atualizado.

TC-44: entitlement concedido.

TC-45: purchase emitido exatamente uma vez.

TC-46: transaction\_id correto.

TC-47: valor correto.

TC-48: produto/offer corretos.

## 25.6 Idempotência

TC-50: replay do mesmo webhook.

Resultado esperado:

0 compra duplicada

0 entitlement duplicado

0 purchase lógico duplicado

## 25.7 Refund

TC-60: reembolso controlado quando provider/ambiente permitir.

Validar:

- refund;  
- payment state;  
- entitlement/reversal conforme contrato;  
- analytics sem receita inflada.

## 25.8 Privacidade

TC-70: dataLayer sem PII.

TC-71: GA4 sem texto íntimo.

TC-72: Meta sem texto íntimo.

TC-73: logs sem secret/token/body sensível.

---

# 26\. EVIDÊNCIAS OBRIGATÓRIAS

Cada gate deve guardar:

- screenshot/print técnico quando necessário;  
- GTM preview/tag assistant quando aplicável;  
- GA4 DebugView;  
- GA4 Realtime;  
- webhook receipt;  
- payment row anonimizada;  
- entitlement row anonimizada;  
- provider transaction ID;  
- Meta Test Events / evidência equivalente;  
- Google Ads conversion status;  
- UTM final no checkout;  
- logs redigidos.

NUNCA versionar:

- e-mail real de cliente;  
- telefone;  
- CPF;  
- secrets;  
- tokens;  
- payload integral com PII.

---

# 27\. CRITÉRIO DE PARIDADE

Antes do go-live, uma compra controlada deve reconciliar:

1 provider transaction

\=

1 payment confirmado

\=

1 entitlement válido

\=

1 purchase lógico

Pode haver diferença temporal entre plataformas de analytics.

Não pode haver diferença lógica de contagem.

Criar tabela de reconciliação de teste:

| Fonte | Transaction | Value | Product | Resultado |
| :---- | :---- | ----: | :---- | :---- |
| Provider | ... | ... | ... | PASS |
| Webhook | ... | ... | ... | PASS |
| Payment | ... | ... | ... | PASS |
| Entitlement | ... | ... | ... | PASS |
| GA4 | ... | ... | ... | PASS |
| Google Ads | ... | ... | ... | PASS/DELAYED |
| Meta | ... | ... | ... | PASS/DELAYED |

---

# 28\. BASELINE DE PRODUÇÃO

Criar também:

docs/operations/measurement/E2E\_GO\_LIVE\_MATRIX\_2026-09-21.md

Por produto:

PRODUCT

OWNER SPEC

PAGE

CHECKOUT

PAYMENT

WEBHOOK

ENTITLEMENT

UTM

GA4

GOOGLE ADS

META

CONSENT

MOBILE

LEGAL

SUPPORT

STATUS

Estados:

PASS

FAIL

BLOCKED

N/A

Nenhum “quase”.

---

# 29\. CRONOGRAMA 16/09 → 21/09

## 16/09 — T0 INVENTÁRIO TRANSVERSAL

Read-only.

Auditar:

- dois repos;  
- branches;  
- main;  
- GTM;  
- GA4;  
- Meta;  
- Google Ads;  
- Eduzz;  
- product mappings;  
- checkout URLs;  
- webhooks;  
- product IDs;  
- consent;  
- UTMs;  
- eventos;  
- páginas.

Saída:

TRACK-00 — BASELINE AUDIT REPORT

Nenhuma correção neste gate.

## 17/09 — T1 CONTRATO COMPARTILHADO

Implementar somente componentes realmente transversais:

- helper UTM;  
- allowlist;  
- checkout URL builder;  
- dataLayer schema;  
- event utilities;  
- documentação de event contract;  
- testes unitários.

Não tocar produto específico sem trilha própria.

## 18/09 — T2 PRODUTOS P0

Executar, um a um:

TRACK-AA — Antes do Aperto

TRACK-MAP — Mapeamento

TRACK-SINT — Sintonize

Cada um em sua trilha/branch própria.

## 19/09 — T3 COMMERCE \+ PROVIDER \+ PLATAFORMA

Validar:

- provider mappings;  
- webhook;  
- idempotência;  
- payment;  
- entitlement;  
- claim/account;  
- enrollment/case;  
- refund path.

Mudança shared kernel exige `PLATFORM_DEPENDENCY`.

## 20/09 — T4 E2E E BASELINE

Executar matriz completa.

Congelar baseline.

Zero mídia real antes do E2E econômico PASS.

## 21/09 — T5 GO-LIVE

Somente produtos PASS.

Publicar/ativar:

- páginas;  
- checkouts;  
- tracking;  
- conversões;  
- campanhas autorizadas.

Fazer smoke após produção.

---

# 30\. ALTERNÂNCIA CLAUDE CODE / CODEX

Claude Code e Codex são coimplementadores.

Não existe “Claude \= implementador” e “Codex \= auditor” permanente.

## 30.1 Antes de alternar

Gerar:

\# CHECKPOINT DE CONTINUIDADE

repo:

workstream:

domain:

owner\_spec:

branch:

HEAD:

origin\_main:

objetivo:

feito:

arquivos:

migrations:

config externa:

testes:

evidências:

pendências:

blockers:

próximo gate:

riscos:

working\_tree:

## 30.2 Ao assumir

O novo agente deve:

1. ler SPEC;  
2. ler último checkpoint;  
3. confirmar repo/branch/HEAD;  
4. executar testes mínimos não destrutivos;  
5. comparar estado real;  
6. continuar somente se consistente.

Se inconsistente:

HANDOFF\_DIVERGENCE

e parar.

---

# 31\. EXTERNAL ACCOUNT ACTION

Claude Code/Codex não devem inventar configuração externa.

Quando uma ação exigir painel/credencial:

MANUAL\_ACCOUNT\_ACTION\_REQUIRED

provider:

account:

screen/action:

value to configure:

secret required:

validation after action:

Exemplos:

- publicar versão GTM;  
- marcar key event;  
- importar conversão Google Ads;  
- inserir Meta Pixel na Eduzz;  
- configurar webhook;  
- configurar pixel Google Ads;  
- ativar checkout.

Depois da ação humana, agente retoma e valida.

---

# 32\. REPOSITÓRIOS E BOUNDARIES

## Institucional

marvin-ds/portal-caminho-da-consciencia

Netlify

Responsável por:

- páginas públicas;  
- dataLayer público;  
- CTA;  
- UTM;  
- links de checkout;  
- consentimento;  
- GTM bootstrap.

## Plataforma

marvin-ds/portal-caminho-da-consciencia-app

Vercel

Supabase

Responsável por:

- webhook;  
- orders/payments;  
- entitlement;  
- identity;  
- enrollment;  
- delivery;  
- eventos server-side quando aprovados.

Não colocar lógica de Commerce no site estático.

---

# 33\. STOP CONDITIONS

Parar se:

- repo errado;  
- owner SPEC não identificada;  
- product ID conflita;  
- provider ID desconhecido;  
- preço diverge da SPEC;  
- checkout aponta para produto de teste;  
- webhook não validado;  
- purchase depende só de página de obrigado;  
- duas ações de Google Ads contam a mesma compra como primária;  
- Meta duplica Purchase;  
- transaction\_id é instável;  
- PII aparece em dataLayer;  
- conteúdo íntimo aparece em analytics;  
- consentimento quebra;  
- Production exige secret não configurado;  
- RLS/ownership falha;  
- entitlement não é idempotente;  
- alteração invade outra trilha;  
- um produto não está realmente pronto para live.

---

# 34\. CRITÉRIO DE ACEITE TRANSVERSAL

Até 21/09, para cada produto P0:

PAGE               PASS

OFFER              PASS

CHECKOUT            PASS

UTM                 PASS

CONSENT             PASS

GA4                 PASS

GOOGLE ADS          PASS

META                PASS

WEBHOOK             PASS

PAYMENT             PASS

ENTITLEMENT         PASS

E2E                 PASS

MOBILE              PASS

LEGAL               PASS

SUPPORT             PASS

BASELINE            PASS

Qualquer item crítico `FAIL`:

NOT\_LIVE

---

# 35\. NÃO OBJETIVOS

Esta SPEC não autoriza:

- criar novo produto;  
- criar bundle;  
- alterar preço;  
- mudar promessa;  
- mudar Método;  
- criar novo Supabase;  
- criar novo Vercel;  
- trocar checkout provider;  
- criar CRM novo;  
- implementar CAPI sem gate;  
- implementar Enhanced Conversions sem necessidade;  
- criar modelo avançado first-touch/last-touch custom;  
- centralizar conteúdo íntimo;  
- modificar SPEC de produto.

---

# 36\. SAÍDA FINAL DE 21/09

Gerar:

\# TRACKING & COMMERCIAL GO-LIVE REPORT — 21/09/2026

Conteúdo obrigatório:

1. baseline técnico;  
2. baseline comercial;  
3. GTM version;  
4. GA4 state;  
5. Google Ads state;  
6. Meta state;  
7. Eduzz state;  
8. UTMs;  
9. purchase;  
10. lead;  
11. checkout;  
12. consent;  
13. produto por produto;  
14. matriz E2E;  
15. paridade;  
16. blockers;  
17. itens live;  
18. itens not-live;  
19. rollback;  
20. SHAs/deploys;  
21. campanhas liberadas/não liberadas.

---

# 37\. CRITÉRIO DE SUCESSO

A implementação estará pronta quando for possível responder, com evidência:

> **“De qual conteúdo/anúncio esta pessoa veio, qual oferta viu, se iniciou checkout, se pagou, qual produto comprou, qual valor foi confirmado e se recebeu o acesso correto — sem usar clique como venda, sem contar compra duas vezes e sem exportar o conteúdo íntimo da experiência.”**

---

# 38\. HISTÓRICO

| Versão | Data | Alteração | Status |
| :---- | :---- | :---- | :---- |
| `1.0.0` | 16/09/2026 | Primeira consolidação transversal de tracking, atribuição, conversões, commerce, baseline e readiness comercial para go-live de 21/09/2026 | **APROVADO POR MARCOS VINICIUS** |

---

**FIM — SPEC-MENSURACAO-00 — Tracking, Atribuição, Conversões, Commerce e Go-Live Comercial — V1.0.0**  
