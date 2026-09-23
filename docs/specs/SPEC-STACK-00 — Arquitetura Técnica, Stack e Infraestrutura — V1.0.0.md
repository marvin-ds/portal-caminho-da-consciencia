# PORTAL CAMINHO DA CONSCIÊNCIA

## SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura

| Campo | Informação |
|---|---|
| **Código** | `SPEC-STACK-00` |
| **Tipo** | Especificação Técnica Transversal |
| **Status** | **APROVADO** |
| **Versão** | **1.1.0** |
| **Data de criação** | **14/09/2026** |
| **Última atualização** | **22/09/2026** |
| **Autoridade de aprovação** | **Marcos Vinicius** |
| **Projeto** | **Portal Caminho da Consciência** |
| **Escopo** | Arquitetura técnica, stack, infraestrutura, ambientes, identidade, dados, storage, segurança, pagamentos, comunicação, analytics, observabilidade, desenvolvimento, deploy e contratos transversais |
| **Precedência** | Subordinado ao `CANON-00` e aos `CANON-01` a `CANON-07` conforme seus domínios |
| **Substitui** | Passa a ser a referência técnica atual para os temas aqui especificados e substitui, dentro deste escopo, decisões incompatíveis do antigo “Documento 05 — Arquitetura Técnica, Dados e Ecossistema Digital — V2.3” |
| **Referências de origem** | CÂNONs vigentes do projeto; arquitetura técnica anterior auditada; estado técnico já implementado; decisões técnicas explicitamente reafirmadas no planejamento atual |
| **Documentos subordinados esperados** | ADRs técnicos, SPECs de produto/sistema, contratos de integração, modelos de dados, migrations, runbooks, protocolos de segurança e documentação operacional |

---

# 1. FINALIDADE

Esta especificação define a arquitetura técnica transversal do **Portal Caminho da Consciência**.

Sua função é responder:

> **Qual arquitetura, stack, infraestrutura e conjunto de contratos técnicos sustentam o Portal público, a Plataforma central, o Meu Caminho e as experiências digitais do projeto?**

Esta SPEC não redefine:

- identidade do Portal;
- arquitetura do Método Padrão Interrompido;
- público;
- jornada;
- produtos;
- promessas;
- linguagem editorial;
- limites éticos.

Esses assuntos pertencem aos respectivos CÂNONs e SPECs.

Esta SPEC também não deve se transformar em:

- catálogo de produtos;
- roadmap comercial;
- documento de preços;
- documentação de uma experiência específica;
- schema detalhado de todas as tabelas;
- manual de um fornecedor específico;
- registro de estado operacional corrente.

O objetivo é estabelecer uma arquitetura técnica estável o suficiente para orientar desenvolvimento, sem congelar decisões de implementação que devam permanecer evolutivas.

---

# 2. PRINCÍPIO CENTRAL

A tecnologia deve sustentar a experiência do Portal sem se tornar a própria experiência.

A arquitetura deve obedecer ao princípio:

> **menor complexidade capaz de sustentar adequadamente a experiência, a segurança, a privacidade e a evolução previsível do Portal.**

Outro princípio transversal:

> **preservar por padrão decisões técnicas anteriores já implementadas, validadas ou suficientemente analisadas quando não houver conflito com os CÂNONs vigentes, risco relevante ou ganho claro que justifique mudança.**

Mudança técnica não é objetivo por si mesma.

---

# 3. HIERARQUIA E GOVERNANÇA

Esta SPEC é subordinada ao núcleo canônico do projeto.

Quando houver conflito:

1. decisão explícita posterior de Marcos Vinicius;
2. `CANON-00`;
3. CÂNON especializado aplicável;
4. esta SPEC;
5. ADRs e SPECs subordinadas;
6. documentação operacional;
7. implementação histórica ou referência anterior.

A arquitetura anterior é utilizada como **referência técnica auditada**, não como autoridade concorrente.

Nenhuma decisão técnica desta SPEC pode alterar silenciosamente:

- o Método;
- a Jornada do Portal;
- os limites de atuação;
- os produtos;
- a identidade;
- a comunicação;
- as regras de privacidade e segurança dos CÂNONs.

---

# 4. ESTADOS UTILIZADOS NESTA SPEC

## APROVADO

Decisão técnica vigente para esta arquitetura.

## IMPLEMENTADO

Já existe no estado real do projeto e foi validado em operação ou implementação.

## EM IMPLEMENTAÇÃO

Decisão aprovada e já em execução técnica, mas ainda não concluída.

## EM TESTE

Existe implementação ou integração sendo validada.

## ABERTO

Decisão técnica ainda não fechada.

## FUTURO / SOB NECESSIDADE

Só deverá ser decidido ou implementado quando a necessidade real justificar.

---

# 5. ARQUITETURA-MÃE

A arquitetura estrutural é:

> **1 Portal público + 1 Plataforma central + 1 backend central compartilhado + serviços externos controlados.**

Representação:

```text
AQUISIÇÃO / CONTEÚDO / BUSCA / REDES / INDICAÇÃO
                         │
                         ▼
┌─────────────────────────────────────────────┐
│           PORTAL PÚBLICO — NETLIFY         │
│                                             │
│ institucional                               │
│ páginas públicas                            │
│ conteúdo                                    │
│ SEO                                         │
│ páginas de produto/entrada                  │
│ analytics público                           │
└─────────────────────┬───────────────────────┘
                      │
          acesso / cadastro / compra /
          início de experiência
                      │
                      ▼
┌─────────────────────────────────────────────┐
│       PLATAFORMA CENTRAL — VERCEL          │
│                                             │
│ Meu Caminho                                 │
│ autenticação                                │
│ experiências dinâmicas                      │
│ acessos privados                            │
│ progresso e estados quando pertinentes      │
│ entregas                                    │
│ APIs e webhooks                             │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────┐
│                 SUPABASE                    │
│                                             │
│ PostgreSQL                                  │
│ Auth                                        │
│ Row Level Security                          │
│ Storage                                     │
│ dados / ownership / histórico               │
└─────────────────────────────────────────────┘

        ↙                    ↓                    ↘
 CHECKOUT EXTERNO         RESEND               BREVO
 pagamentos              auth/transacional    marketing
```

Regra:

> **nenhum novo produto ou experiência cria automaticamente novo Vercel, Supabase, Auth, banco, domínio de aplicação ou infraestrutura transversal própria.**

Infraestrutura independente exige justificativa técnica, operacional, jurídica ou de segurança suficiente.

---

# 6. CAMADA PÚBLICA

## 6.1. Hospedagem

**Tecnologia:** Netlify
**Estado:** `APROVADO / IMPLEMENTADO`

Responsabilidades principais:

- domínio institucional;
- páginas públicas;
- conteúdo;
- páginas institucionais;
- páginas de produtos e experiências públicas;
- SEO;
- metadata;
- canonical;
- sitemap;
- robots;
- páginas de entrada e conversão;
- analytics e tags do ambiente público;
- encaminhamento para checkout;
- encaminhamento para a Plataforma.

O Portal público não deve ser transformado em aplicação autenticada apenas por conveniência técnica.

---

## 6.2. Domínio institucional

**Domínio principal:**

```text
portalcaminhodaconsciencia.com.br
```

**Estado:** `APROVADO / IMPLEMENTADO`

---

# 7. PLATAFORMA CENTRAL

## 7.1. Hospedagem

**Tecnologia:** Vercel
**Estado:** `APROVADO / EM IMPLEMENTAÇÃO`

A Plataforma central concentra:

- Meu Caminho;
- autenticação;
- conta;
- experiências dinâmicas;
- estados de experiência;
- entregas privadas;
- histórico quando pertinente;
- progressão quando pertinente;
- APIs;
- webhooks;
- integrações server-side;
- serviços transversais.

---

## 7.2. Domínio da aplicação

```text
app.portalcaminhodaconsciencia.com.br
```

**Estado:** `APROVADO`

A Plataforma deve permanecer uma aplicação central.

---

# 8. REPOSITÓRIOS

## 8.1. Portal público

```text
repo: marvin-ds/portal-caminho-da-consciencia
host: Netlify
branch de produção: main
```

**Estado:** `IMPLEMENTADO`

---

## 8.2. Plataforma central

```text
repo: portal-caminho-da-consciencia-app
host: Vercel
```

**Estado:** `APROVADO / EM IMPLEMENTAÇÃO`

A separação em dois repositórios representa fronteira de responsabilidade:

- público/institucional;
- aplicação/plataforma.

Não criar um repositório completo por produto sem necessidade real.

---

# 9. FUNDAÇÃO DA PLATAFORMA

## 9.1. MakerKit Lite

**Decisão:** preservar **MakerKit Lite** como fundação técnica da Plataforma.

```text
modo: Fundação Direta / Template Copy controlado
base histórica aprovada: c5cba64391a80620309c4178163dc2df42568d1b
licença: MIT
```

**Estado:** `APROVADO / EM IMPLEMENTAÇÃO`

Motivo:

- decisão já analisada;
- implementação já avançou;
- fundação compatível com a arquitetura atual;
- não existe motivo técnico ou canônico para recomeçar.

Regra:

> o MakerKit é fundação de código, não autoridade arquitetural permanente.

O Portal pode evoluir além do template sem manter dependência operacional obrigatória do upstream.

---

# 10. STACK DA APLICAÇÃO

Baseline técnico aprovado:

```text
framework: Next.js
runtime: Node.js 24.x
package manager: pnpm 11.18.0
workspace/monorepo: Turborepo
foundation: MakerKit Lite
hosting: Vercel
```

A referência anterior registrava Next.js `16.3.0`.

Versões exatas podem receber atualização técnica quando:

- houver necessidade de segurança;
- houver incompatibilidade;
- houver suporte encerrado;
- o upgrade for validado.

Mudança de patch/minor tecnicamente compatível não exige alteração canônica.

Mudança estrutural de framework ou runtime exige ADR.

---

# 11. BACKEND CENTRAL — SUPABASE

## 11.1. Decisão principal

> **Manter 1 único projeto Supabase canônico de produção para toda a Plataforma.**

**Estado:** `APROVADO / EM IMPLEMENTAÇÃO`

Responsabilidades:

- PostgreSQL;
- Supabase Auth;
- Row Level Security;
- Storage;
- identidade;
- contratos transversais;
- domínios específicos das experiências;
- ownership;
- histórico necessário;
- auditoria técnica conforme domínio.

Um projeto único não significa dados misturados.

---

## 11.2. Critério para futura separação

A decisão só deverá ser reaberta diante de motivo demonstrável, como:

- exigência jurídica;
- necessidade de isolamento físico;
- trust boundaries administrativos incompatíveis;
- blast radius inaceitável;
- restrição de escala;
- disponibilidade independente necessária;
- limitação concreta da plataforma;
- risco de segurança que não possa ser adequadamente mitigado por separação lógica.

Não separar projetos apenas por organização visual ou por produto.

---

# 12. SHARED KERNEL

A Plataforma poderá compartilhar capacidades transversais como:

```text
IDENTITY
PRIVACY
COMMERCE
ACCESS
DELIVERY
COMMUNICATION
AUDIT
```

Entidades conceituais possíveis:

```text
IDENTITY
- auth.users
- accounts
- contacts
- identity_links

PRIVACY
- consents
- privacy_requests

COMMERCE
- products
- offers
- orders
- payments
- payment_events
- webhook_receipts

ACCESS
- entitlements
- enrollments

DELIVERY
- deliveries
- delivery_assets

COMMUNICATION
- communication_dispatches

AUDIT
- audit_events
```

Esta lista representa **contratos transversais**, não autorização automática para criar todas as tabelas.

Regra:

> **compartilhar infraestrutura sem misturar significado.**

---

# 13. DOMÍNIOS ESPECÍFICOS

Cada produto ou experiência pode possuir seu próprio domínio de dados.

Isso pode incluir:

- tabelas próprias;
- estados próprios;
- regras próprias;
- arquivos próprios;
- consentimentos específicos;
- políticas RLS próprias;
- contratos de entrega próprios.

A existência de um domínio específico não autoriza criar:

- Auth próprio;
- Supabase próprio;
- Vercel próprio;
- sistema de pagamento próprio;
- identidade paralela.

Novos domínios são criados quando a experiência aprovada exigir.

Nomes históricos de domínios de produtos não são preservados nesta SPEC como obrigação arquitetural.

---

# 14. AUTENTICAÇÃO — V1

## 14.1. Decisão da V1

```text
Magic Link / Passwordless = ON
Password Auth = OFF
Google OAuth = OUT V1
MFA = disponível, não obrigatório
```

**Estado:** `APROVADO`

Entrada pública:

```text
/entrar
```

A decisão é deliberadamente específica da **V1**.

Ela não significa:

> o Portal nunca terá senha, OAuth, passkeys ou outros fatores.

---

## 14.2. Evolução pós-V1

Versões posteriores devem avaliar a autenticação com base em:

- segurança;
- facilidade de uso;
- recuperação de conta;
- entregabilidade;
- mobile;
- acessibilidade;
- suporte;
- fraude/abuso;
- maturidade das opções disponíveis.

Podem ser considerados futuramente:

- password;
- Google OAuth;
- passkeys;
- MFA obrigatório para determinados perfis;
- outros provedores.

Essa decisão permanece aberta por versão.

---

# 15. IDENTIDADE E CLAIMING

Autenticação responde:

> **quem é esta pessoa?**

Autorização responde:

> **o que esta pessoa pode acessar?**

Esses conceitos devem permanecer separados.

Quando existir registro criado antes da autenticação, utilizar um fluxo seguro de claiming.

Modelo aprovado:

```text
registro pré-auth
↓
claim token opaco forte
↓
hash persistido + TTL + uso único
↓
Magic Link
↓
identidade verificada
↓
claim server-side idempotente
↓
associação auditada
```

Regra:

> **conteúdo privado ou sensível nunca deve ser associado a uma conta apenas por coincidência de e-mail.**

---

# 16. AUTORIZAÇÃO E ENTITLEMENTS

Login não concede automaticamente acesso a produto ou experiência.

A Plataforma deve representar explicitamente os direitos de acesso.

Separação conceitual:

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

Entitlement pode ser:

- concedido;
- validado;
- alterado;
- revogado;
- auditado.

A regra exata pertence ao contrato de integração de cada oferta.

---

# 17. DADOS E MODELAGEM

Princípios gerais:

- IDs estáveis;
- `created_at` e `updated_at` quando pertinentes;
- migrations versionadas;
- sem alterações manuais silenciosas em produção;
- evitar duplicação de identidade;
- separar contato, conta, pedido, pagamento e acesso;
- JSONB somente quando deliberado;
- não utilizar JSON como fuga de modelagem;
- não armazenar dado íntimo sem finalidade;
- taxonomias relevantes devem ser versionáveis;
- modelo de dados deve acompanhar necessidades reais.

Nenhuma taxonomia metodológica antiga deve ser incorporada automaticamente ao banco.

---

# 18. CLASSIFICAÇÃO DE DADOS

## Classe A — Públicos

Exemplos:

- conteúdo publicado;
- páginas;
- metadata pública.

## Classe B — Operacionais internos

Exemplos:

- status;
- IDs internos;
- logs minimizados;
- referências técnicas.

## Classe C — Dados pessoais

Exemplos:

- nome;
- e-mail;
- telefone;
- transações;
- dados cadastrais necessários.

## Classe D — Íntimos / alta proteção

Exemplos:

- relatos pessoais;
- respostas abertas;
- conteúdo de auto-observação;
- registros individuais;
- material de experiências privadas;
- espiritualidade relatada;
- áudios personalizados;
- conteúdo que revele aspectos íntimos da jornada.

## Classe E — Materiais proprietários de terceiros

Exemplos:

- apostilas;
- protocolos;
- símbolos;
- comandos;
- materiais protegidos de formações ou terceiros.

Regra:

> **Classe E não deve se tornar corpus técnico do Portal, schema autoral, dataset, embeddings ou engine de software sem direito explícito e decisão específica.**

---

# 19. PRIVACIDADE POR NECESSIDADE

Antes de coletar ou persistir informação:

1. por que precisamos dela?
2. por quanto tempo?
3. quem precisa acessar?
4. qual consequência se vazar?
5. pode ser evitada?
6. pode ser minimizada?
7. precisa ser persistida?
8. precisa existir em ambiente não produtivo?

Princípio:

> **o fato de ser tecnicamente possível armazenar algo não significa que devemos armazenar.**

---

# 20. ROW LEVEL SECURITY

Se Supabase é o backend central, RLS é parte obrigatória da arquitetura.

Regras:

- RLS por padrão nas tabelas expostas;
- ownership explícito;
- negative tests obrigatórios para dados privados;
- User A não acessa dados de User B;
- `anon` não acessa PII sem motivo explícito;
- compra/pagamento não pode ser alterado pelo cliente;
- `service_role` somente server-side;
- admin fora do browser público;
- políticas devem ser verificáveis.

Segurança não é considerada validada apenas porque RLS está habilitado.

---

# 21. FRONTEIRA CLIENTE / SERVIDOR

Regra estrutural:

> **nenhum dado ou operação sensível pode depender exclusivamente da confiança no cliente.**

A arquitetura pode permitir acesso cliente → Supabase quando:

- RLS for suficiente;
- o dado for apropriado;
- a operação for segura;
- não houver segredo;
- não houver necessidade de confiança server-side adicional.

Devem ser server-side quando necessário:

- uso de `service_role`;
- concessão de entitlement;
- processamento de webhook;
- ownership sensível;
- geração de acesso privado quando exigir validação adicional;
- operações administrativas;
- reconciliação financeira;
- outras operações privilegiadas.

---

# 22. STORAGE

Materiais privados devem utilizar storage privado.

Persistir preferencialmente:

```text
object_path
metadata necessária
ownership
```

Não persistir URL assinada permanente.

Acesso privado:

```text
usuário autenticado
↓
ownership/autorização
↓
signed URL ou mecanismo equivalente
↓
TTL curto
```

**Signed URLs** permanecem decisão técnica aprovada enquanto atenderem à necessidade.

---

# 23. AMBIENTES

Arquitetura mínima:

## LOCAL

- desenvolvimento;
- Supabase CLI/Docker quando aplicável;
- dados fictícios por padrão;
- nenhum segredo de produção.

## PREVIEW

- Vercel Preview;
- variáveis separadas;
- dados de teste;
- banco não deve depender do `service_role` de produção.

## PRODUCTION

- Vercel Production;
- Supabase Production canônico;
- dados reais;
- controles de segurança completos.

A estratégia exata para banco de Preview pode utilizar:

- Supabase Branching;
- staging isolado;
- outra solução equivalente.

**Estado:** `ABERTO / decisão operacional futura`.

Não reabre a decisão de 1 Supabase canônico de produção.

---

# 24. SECRETS

Nunca versionar:

- API keys;
- `service_role`;
- webhook secrets;
- credenciais SMTP;
- tokens;
- senhas;
- cookies;
- secrets de providers.

Secrets devem permanecer em mecanismos apropriados de ambiente/secret management.

Produção, Preview e Local devem usar credenciais separadas quando o risco justificar.

---

# 25. PAGAMENTOS

## 25.1. Arquitetura

O checkout permanece externo.

A Plataforma deve integrar provedores por **adapter**, evitando acoplamento desnecessário do núcleo.

Fluxo conceitual:

```text
checkout externo
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

---

## 25.2. Provedor atual

**Eduzz**

**Estado:** `EM TESTE`

A Eduzz já está sendo utilizada e o webhook está em teste com o **Meu Caminho**.

A Eduzz deve ser tratada como:

> **provedor operacional atualmente em validação prática.**

A arquitetura não fica acoplada permanentemente à Eduzz.

Se a integração atender adequadamente:

- confiabilidade;
- webhook;
- reconciliação;
- pagamentos;
- reembolsos;
- operação;
- suporte;

ela pode permanecer como provider vigente.

**Fornecedor definitivo:** `ABERTO`.

---

# 26. WEBHOOKS

Integrações críticas devem ser idempotentes quando houver risco de repetição.

Para pagamentos:

- validar assinatura;
- utilizar raw body quando o provider exigir;
- armazenar `event_id`;
- impedir processamento duplicado;
- registrar receipt;
- permitir retry seguro;
- mapear estados relevantes;
- separar recebimento do evento de processamento pesado quando necessário;
- permitir reconciliação.

Estados exatos dependem do provider.

---

# 27. PURCHASE

Regra:

> **`purchase` representa compra efetivamente confirmada.**

Nunca usar como `purchase`:

- clique;
- abertura de checkout;
- página de obrigado sem validação;
- início de WhatsApp;
- declaração do cliente.

A confirmação deve ter fonte confiável, como:

- webhook;
- API do checkout;
- reconciliação autorizada.

---

# 28. E-MAIL

Arquitetura vigente:

```text
AUTH
Supabase Auth + Resend SMTP

TRANSACTIONAL
Resend API / SDK

MARKETING
Brevo
```

**Estado:** `APROVADO`

Regras:

- autenticação e transacional não dependem do consentimento de marketing quando necessários à prestação do serviço;
- marketing exige base/consentimento apropriado;
- mensagens privadas não devem transportar conteúdo íntimo além do necessário;
- falhas de envio devem ser tratáveis e auditáveis quando operacionalmente relevantes.

---

# 29. ANALYTICS PÚBLICO

Stack atual:

```text
Google Tag Manager
Google Analytics 4
Consent Mode v2
Conversion Linker
Meta Pixel
dataLayer
Google Ads quando aplicável
```

**Estado:** `IMPLEMENTADO`

Eventos existentes incluem:

```text
page_view
scroll_depth
section_view
offer_cta_click
whatsapp_click
```

`whatsapp_click` representa intenção comercial on-site, não venda.

---

# 30. ANALYTICS DA PLATAFORMA

Na Plataforma autenticada, usar **allowlist explícita**.

Exemplos possíveis:

```text
experience_started
step_completed
delivery_viewed
completed
```

Nomes finais podem variar por domínio.

Nunca enviar para analytics/publicidade:

- relato pessoal;
- resposta aberta;
- intake íntimo;
- conteúdo privado;
- texto de mapeamento;
- conteúdo espiritual individual;
- áudio;
- Classe D;
- PII textual desnecessária.

Regra:

> **medir comportamento sem exportar a intimidade da jornada.**

---

## 30.1. Topologia implementada — App Analytics (Gate 3B)

**Estado:** `IMPLEMENTADO`

```text
GTM container (app dedicado): GTM-K9PGRL4Z
GTM version publicada:        2 — "App analytics base — consent-safe"

GA4 property:                 552234318
GA4 stream:                   15826431027
GA4 measurement ID:           G-DDW67F2LBW
Enhanced Measurement:         DISABLED

Consent Mode:                 via portal_consent_v1
```

Decisões fixas desta topologia:

- GTM do app é **dedicado** — separado do GTM do site institucional;
- `app_page_view` é o evento custom browser-side de navegação explicitamente allowlisted e implementado neste gate (eventos lifecycle automáticos do GA4 como `session_start`, `first_visit` e `user_engagement` podem ocorrer sem serem bloqueados);
- **Enhanced Measurement desabilitado** para evitar disparo automático de eventos não auditados;
- sanitização de metadata ativa globalmente: query string e hash não exportados; `page_location` = origin + pathname normalizado; `page_referrer` = origin ou vazio; `page_title` = valor genérico; valores sensíveis (tokens, intent_code, PII, texto livre) não exportados;
- `purchase` **não é disparado browser-side no app** — fonte econômica é exclusivamente server-side via webhook Eduzz (`invoice_paid`);
- Meta Pixel **ausente** no app;
- tag de conversão Google Ads **ausente** no app.

Contrato detalhado em `SPEC-MENSURACAO-00`.

---

# 31. CONSENTIMENTO DIGITAL

Consentimentos devem ser separados conforme finalidade.

Podem existir, quando aplicáveis:

- analytics;
- publicidade;
- marketing;
- contato;
- tratamento de dados para entrega;
- participação em prática específica;
- uso de depoimento;
- outros consentimentos definidos por produto.

Um consentimento não substitui automaticamente outro.

---

# 32. LOGS E OBSERVABILIDADE

Stack aprovada para logs da Plataforma:

```text
Pino
```

**Estado:** `APROVADO`

Antes de produção, PII redaction é obrigatória.

Nunca logar:

- senha;
- OTP;
- token completo;
- cookie;
- Authorization;
- secret;
- conteúdo íntimo;
- respostas privadas;
- áudio;
- conteúdo sensível de experiências.

Podem ser logados, quando apropriado:

- webhook;
- job;
- erro API;
- evento técnico de auth;
- envio de e-mail;
- entitlement;
- deploy;
- correlation ID.

Alertas só devem existir quando houver ação concreta possível.

---

# 33. BACKUP E RESTAURAÇÃO

Arquitetura mínima:

- migrations no Git;
- backups do provedor;
- export crítico conforme risco;
- runbook de restauração;
- teste de restauração quando o volume e criticidade dos dados justificarem.

Regra:

> **backup só é confiável quando existe caminho conhecido de restauração.**

Detalhes de frequência e retenção pertencem ao runbook/ADR correspondente.

---

# 34. RETENÇÃO E EXCLUSÃO

Cada domínio precisa definir:

- finalidade;
- prazo;
- obrigação de histórico;
- necessidade de acesso posterior;
- possibilidade de exclusão;
- tratamento de revogação;
- impacto em auditoria/pagamento.

A SPEC geral não define um prazo único para todos os dados.

Dados íntimos não devem ser guardados indefinidamente por padrão.

---

# 35. AUTOMAÇÃO

Princípio:

> **automatizar o que já entendemos.**

A automação é adequada para funções como:

- confirmação;
- status;
- liberação;
- notificações;
- entrega;
- sincronização;
- tarefas repetitivas;
- operações administrativas.

Não automatizar silenciosamente funções que dependam legitimamente de:

- interpretação humana;
- decisão metodológica;
- percepção contextual;
- facilitação;
- discernimento;
- leitura espiritual/energética humana.

Human-in-the-loop é decisão deliberada de produto e segurança quando necessário.

---

# 36. IA NA ARQUITETURA

IA pode apoiar:

- desenvolvimento;
- revisão;
- formatação;
- QA;
- síntese operacional;
- tarefas administrativas autorizadas;
- assistência técnica.

IA não recebe autoridade para:

- redefinir produto;
- redefinir método;
- diagnosticar;
- fingir ser Marcos;
- inventar leitura humana;
- atribuir mensagens espirituais;
- automatizar prática cuja essência dependa legitimamente de facilitação humana.

Dados enviados a modelos devem respeitar:

- minimização;
- finalidade;
- privacidade;
- propriedade intelectual;
- necessidade real.

---

# 37. DESENVOLVIMENTO ASSISTIDO POR IA

Ferramentas atualmente compatíveis com a operação:

- ChatGPT;
- Codex;
- Claude Code;
- PowerShell;
- Git/GitHub.

A hierarquia para agentes técnicos é:

1. decisões humanas aprovadas;
2. CÂNONs;
3. esta SPEC e demais SPECs vigentes;
4. ADRs aplicáveis;
5. estado real do repositório;
6. CURRENT/documentação operacional;
7. testes e logs;
8. recomendação do agente.

Agentes não alteram silenciosamente decisões superiores.

---

# 38. GIT E FLUXO DE DESENVOLVIMENTO

Convenções preservadas:

```text
main
feat/*
fix/*
refactor/*
docs/*
chore/*
hotfix/*
```

Fluxo recomendado:

```text
INVENTÁRIO
↓
ESCOPO
↓
BRANCH
↓
IMPLEMENTAÇÃO
↓
TESTES
↓
PREVIEW quando necessário
↓
VALIDAÇÃO
↓
MERGE
↓
PRODUÇÃO
↓
VALIDAÇÃO
↓
REGISTRO OPERACIONAL
```

Commits devem preferencialmente ser:

- pequenos;
- reversíveis;
- coerentes;
- explicáveis.

Evitar `git add .` sem revisão consciente.

---

# 39. CI/CD E DEPLOY

Princípios:

- produção somente após validação proporcional ao risco;
- Preview para mudanças relevantes;
- evitar deploys de produção cosméticos e fragmentados;
- consolidar mudanças quando isso reduz custo e risco;
- build/test devem impedir erros óbvios antes da produção;
- mudanças críticas de Auth, RLS, pagamento, tracking, privacidade ou migration exigem gate técnico adequado.

Detalhes de pipeline podem evoluir sem alterar a arquitetura-mãe.

---

# 40. MOBILE FIRST

Mobile first é obrigatório para:

- Portal;
- Meu Caminho;
- experiências;
- formulários;
- entregas;
- fluxos privados.

Referências mínimas de validação:

```text
360 px
375 px
430 px
768 px
desktop
```

Verificar:

- zero overflow;
- legibilidade;
- áreas tocáveis;
- teclado;
- safe area;
- formulário;
- navegação;
- carregamento.

---

# 41. ACESSIBILIDADE

Baseline:

- HTML semântico;
- labels;
- foco visível;
- navegação por teclado;
- contraste adequado;
- alt text;
- não depender apenas de cor;
- redução de movimento quando aplicável;
- erros compreensíveis.

Acessibilidade é requisito de qualidade, não melhoria opcional.

---

# 42. PERFORMANCE

Princípios:

- JavaScript apenas quando necessário;
- imagens otimizadas;
- lazy loading quando adequado;
- cache;
- fontes controladas;
- evitar dependências grandes sem função;
- reduzir scripts de terceiros;
- observar experiência móvel.

Performance faz parte da experiência do Portal.

---

# 43. TERCEIROS

Todo terceiro aumenta potencialmente:

- dependência;
- custo;
- superfície de privacidade;
- risco;
- falha;
- lock-in.

Antes de integrar:

1. existe necessidade?
2. há alternativa já presente na stack?
3. que dados recebe?
4. como falha?
5. como removemos?
6. qual custo?
7. qual impacto de privacidade?

---

# 44. FORNECEDORES E LOCK-IN

Lock-in não é proibido.

Deve ser deliberado.

A stack atual aceita dependência razoável de:

- Netlify;
- Vercel;
- Supabase;
- Resend;
- Brevo;
- checkout externo.

Essa dependência é aceitável enquanto:

- reduzir complexidade;
- não comprometer propriedade dos dados;
- existir exportabilidade suficiente;
- custo permanecer adequado;
- segurança permanecer adequada;
- benefício operacional superar o custo de abstração.

Não criar abstração complexa apenas para um futuro hipotético de migração.

---

# 45. O QUE NÃO PERTENCE A ESTA SPEC

Devem ficar fora desta SPEC:

- preço de produtos;
- nome/status de ofertas específicas;
- SLA comercial específico;
- conteúdo de experiências;
- protocolos humanos;
- roteiro de sessões;
- taxonomias metodológicas não aprovadas;
- funil obrigatório;
- roadmap comercial;
- decisões editoriais;
- copy;
- calendário de conteúdo;
- schema completo de cada produto;
- política detalhada de cada experiência;
- especificações de práticas específicas.

Esses itens pertencem a documentos proprietários.

---

# 46. REGRAS PARA NOVOS PRODUTOS E EXPERIÊNCIAS

Ao aprovar um novo produto ou experiência, a primeira pergunta técnica é:

> **ele pode ser integrado à Plataforma existente?**

Por padrão:

- sim para identidade;
- sim para Auth;
- sim para pagamentos;
- sim para entitlement;
- sim para comunicação;
- sim para auditabilidade;
- sim para Storage quando apropriado;
- domínio funcional separado quando necessário.

Nova infraestrutura só é criada mediante justificativa.

---

# 47. JORNADA E ARQUITETURA

A Plataforma deve suportar a Jornada canônica:

```text
DESCOBRIR
→ RECONHECER
→ MAPEAR
→ TRABALHAR
→ INTEGRAR
→ APROFUNDAR
```

Mas não deve codificá-la como funil obrigatório.

A arquitetura deve permitir:

- entradas diferentes;
- acesso direto quando legítimo;
- produtos autônomos;
- conclusão legítima;
- nenhum próximo passo;
- múltiplas trajetórias.

Não criar dependência técnica artificial entre produtos apenas porque a Jornada possui uma lógica de profundidade.

---

# 48. MÉTODO E SOFTWARE

A arquitetura oficial do Método é:

```text
RECONHECER
→ MAPEAR
→ LOCALIZAR
→ TRABALHAR
→ ALINHAR
→ EXPERIMENTAR
→ INTEGRAR
→ REAVALIAR
```

O software pode suportar movimentos do Método.

Ele não deve assumir que:

- toda experiência executa todas as etapas;
- toda etapa precisa virar tabela;
- o Método deve virar workflow rígido;
- interpretação humana deve ser automatizada.

Se etapas metodológicas forem persistidas digitalmente, devem refletir a versão canônica vigente e possuir versionamento adequado.

---

# 49. SEGURANÇA POR DESIGN

Segurança deve existir desde a arquitetura.

Aplicar proporcionalmente:

- menor privilégio;
- isolamento;
- RLS;
- ownership;
- server-side;
- validação;
- logs minimizados;
- secrets;
- auditoria;
- testes negativos;
- backup;
- restore;
- idempotência.

Regra:

> **“provavelmente ninguém acessará” não é controle de segurança.**

---

# 50. TESTES MÍNIMOS

Cada domínio deve definir sua própria estratégia, mas a Plataforma deve possuir cobertura proporcional para fluxos críticos.

Categorias esperadas:

- build;
- lint/typecheck quando configurados;
- unitários para lógica relevante;
- integração;
- Auth;
- RLS;
- negative tests;
- Storage/ownership;
- webhook/idempotência;
- entitlement;
- fluxos de pagamento;
- smoke tests;
- responsividade básica.

Não exigir teste artificial apenas para aumentar métrica de cobertura.

---

# 51. ESTADO TÉCNICO DE REFERÊNCIA NA CRIAÇÃO DESTA SPEC

## Implementado

- Portal público;
- Netlify;
- domínio institucional;
- repositório institucional;
- Git/GitHub;
- branch de produção;
- GTM (site institucional);
- GA4 (site institucional);
- Consent Mode v2 (site institucional);
- Conversion Linker;
- Meta Pixel (site institucional);
- `dataLayer`;
- eventos públicos principais;
- integração GA4/Google Ads;
- `whatsapp_click` como conversão secundária;
- GTM dedicado do app (`GTM-K9PGRL4Z`);
- GA4 stream dedicado do app (`G-DDW67F2LBW` / stream 15826431027 na propriedade 552234318);
- `app_page_view` no allowlist do app;
- sanitização de metadata privada do app;
- convenções de Git e gates;
- validações técnicas locais já realizadas em partes da arquitetura.

## Aprovado / em implementação

- Plataforma central;
- Vercel;
- domínio `app`;
- repo da Plataforma;
- MakerKit Lite;
- Next.js;
- Node.js;
- pnpm;
- Turborepo;
- Supabase;
- 1 projeto Supabase de produção;
- Shared Kernel;
- Auth V1;
- Magic Link;
- RLS;
- identity claiming;
- Storage privado;
- signed URLs;
- Pino;
- Resend;
- Brevo;
- entitlements;
- adapters;
- webhooks.

## Em teste

- Eduzz;
- webhook de pagamento integrado ao Meu Caminho.

## Aberto

- provider definitivo de checkout;
- estratégia de banco para Preview/staging;
- política detalhada de retenção por domínio;
- frequência e processo final de backup;
- arquitetura de admin interno, se necessária;
- PWA, se necessária;
- outras integrações que ainda não possuem necessidade aprovada.

---

# 52. DECISÕES FECHADAS

1. **1 Portal público no Netlify.**
2. **1 Plataforma central no Vercel.**
3. **1 projeto Supabase canônico de produção para a Plataforma.**
4. **Nenhum produto cria infraestrutura transversal paralela por padrão.**
5. **MakerKit Lite permanece como fundação da Plataforma.**
6. **Next.js + Node.js + pnpm + Turborepo permanecem como baseline.**
7. **Auth V1 por Magic Link/passwordless.**
8. **Password Auth fora da V1.**
9. **Google OAuth fora da V1.**
10. **Autenticação pós-V1 permanece evolutiva.**
11. **RLS por padrão.**
12. **Negative tests para isolamento privado.**
13. **Storage privado por padrão para entregas pessoais.**
14. **Signed URLs sob demanda para acesso temporário quando aplicável.**
15. **Identity claiming seguro e server-side.**
16. **Checkout externo desacoplado por adapter.**
17. **Eduzz é o provider atual em teste, não provider definitivo obrigatório.**
18. **Compra confirmada é a fonte de verdade de `purchase`.**
19. **Order, payment, entitlement, enrollment, progress, completion e delivery são conceitos distintos.**
20. **Resend para Auth/transacional e Brevo para marketing.**
21. **Analytics público preservado.**
22. **Analytics autenticado usa allowlist e não recebe conteúdo íntimo.**
23. **Pino permanece para logs com redaction obrigatória.**
24. **Local, Preview e Production permanecem separados.**
25. **Mobile first permanece obrigatório.**
26. **IA não substitui silenciosamente interpretação/facilitação humana quando isso fizer parte da experiência.**
27. **Privacidade, minimização e segurança são requisitos arquiteturais.**

---

# 53. DECISÕES ABERTAS

## 53.1. Provider definitivo de checkout

Atual:

```text
Eduzz = EM TESTE
```

Decidir após evidência operacional.

---

## 53.2. Banco de Preview

Avaliar:

- Supabase Branching;
- staging dedicado;
- alternativa equivalente.

Critério:

> isolamento suficiente com menor complexidade e custo adequado.

---

## 53.3. Retenção

Definir por domínio conforme dados reais.

---

## 53.4. Backup

Formalizar runbook, frequência e testes conforme criticidade.

---

## 53.5. Admin interno

Só construir quando operação real demonstrar necessidade.

---

## 53.6. PWA / app móvel

Não é requisito atual.

Somente reavaliar quando:

- frequência;
- notificações;
- offline;
- retenção;

justificarem.

---

# 54. CRITÉRIO PARA ALTERAR A STACK

Uma tecnologia já aprovada ou implementada só deve ser substituída quando houver evidência suficiente de pelo menos um destes fatores:

- conflito com CÂNON;
- problema de segurança;
- incompatibilidade;
- obsolescência;
- custo inadequado;
- incapacidade técnica;
- risco operacional;
- lock-in prejudicial;
- experiência significativamente pior;
- manutenção desproporcional;
- alternativa claramente superior com benefício maior que o custo de migração.

Preferência ou novidade não são motivos suficientes.

---

# 55. ADR OBRIGATÓRIO

Mudanças estruturais relevantes devem gerar ADR.

Exemplos:

- trocar Supabase;
- dividir banco de produção;
- trocar Next.js;
- substituir Vercel;
- substituir Netlify;
- mudar modelo de Auth;
- mover Storage;
- introduzir microserviços;
- mudar arquitetura de identidade;
- trocar estratégia estrutural de pagamentos;
- alterar fronteira de segurança.

Mudanças operacionais reversíveis não exigem necessariamente ADR.

---

# 56. CRITÉRIO DE ACEITE DESTA SPEC

A `SPEC-STACK-00` foi aprovada considerando os seguintes critérios:

1. Marcos aprovar explicitamente sua versão;
2. não houver conflito conhecido com `CANON-00` a `CANON-07`;
3. decisões herdadas estiverem corretamente separadas de decisões abertas;
4. estado implementado e arquitetura futura não estiverem misturados;
5. produtos específicos não governarem a arquitetura transversal;
6. a topologia Netlify + Vercel + Supabase estiver documentada corretamente;
7. a decisão de Supabase único estiver explícita;
8. a decisão MakerKit estiver explícita;
9. Auth V1 estiver explicitamente limitada à V1;
10. Eduzz estiver documentada como integração em teste, não como fornecedor definitivo;
11. segurança, privacidade, dados, Storage, RLS e entitlements estiverem cobertos;
12. decisões futuras possuírem fronteira clara;
13. a implementação real puder ser auditada contra esta SPEC.

---

# 57. PRÓXIMOS DOCUMENTOS TÉCNICOS RECOMENDADOS

Esta SPEC não exige que todos sejam criados imediatamente.

Criar conforme necessidade:

```text
ADR-STACK-001 — decisão de topologia de banco Preview
ADR-COMMERCE-001 — integração de checkout/provider
SPEC-AUTH-00 — identidade, autenticação e claiming
SPEC-DATA-00 — shared kernel e convenções de dados
SPEC-SECURITY-00 — RLS, policies, negative tests e operação privilegiada
SPEC-COMMERCE-00 — orders, payments, webhooks e entitlements
SPEC-DELIVERY-00 — storage privado e entrega
RUNBOOK-BACKUP-00 — backup e restauração
RUNBOOK-INCIDENT-00 — incidentes técnicos
```

Criar apenas quando isso reduzir ambiguidade ou orientar implementação real.

---

# 58. REGRA FINAL

> **Preservar o que já funciona. Corrigir o que conflita. Reabrir somente o que realmente precisa ser reaberto.**

A arquitetura do Portal deve evoluir de forma incremental, segura e documentada.

A refundação canônica do projeto não exige refundação técnica automática.

A stack permanece subordinada à experiência, à privacidade, à segurança e à integridade do Portal Caminho da Consciência.

---

# 59. HISTÓRICO DE VERSÕES

| Versão | Data | Alteração | Aprovado por |
|---|---|---|---|
| `1.1.0` | 22/09/2026 | Registro da topologia implementada de analytics do app (Gate 3B): GTM-K9PGRL4Z, GA4 stream dedicado G-DDW67F2LBW, Enhanced Measurement desabilitado, allowlist `app_page_view`, sanitização de metadata privada, ausência de purchase browser-side, Meta e Google Ads conversion ausentes no app. Referência à `SPEC-MENSURACAO-00` adicionada. | **Marcos Vinicius** |
| `1.0.0` | 14/09/2026 | Criação inicial da `SPEC-STACK-00`, consolidando a arquitetura técnica anterior compatível com os novos CÂNONs e registrando as decisões atuais sobre Supabase único, MakerKit, Auth V1 e Eduzz em teste. | **Marcos Vinicius** |

---

**Fim — SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.1.0**
