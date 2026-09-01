# PORTAL CAMINHO DA CONSCIÊNCIA
## Documento 05 — Arquitetura Técnica, Dados e Ecossistema Digital — V2.0

**STATUS CANÔNICO:** arquitetura técnica oficial, dados, integrações, mensuração, segurança, propriedade intelectual digital e regras de desenvolvimento assistido por IA  
**DATA:** 01/09/2026  
**HORIZONTE:** estado atual + primeiros 90 dias + arquitetura evolutiva de longo prazo  
**DOCUMENTOS SUPERIORES:** Documento 00 — Matriz de Governança Conceitual, Propriedade Intelectual e Posicionamento — V1.0; Documento 01 — Fundacional, Estratégico e Plano Executivo Canônico — V4.0  
**DOCUMENTOS RELACIONADOS:** Documento 02 — Jornada de Transformação, Produtos, Serviços e Protocolos — V2.0; Documento 03 — Sistema Editorial, Aquisição e Experimentação — V2.0; Documento 04 — Identidade, Voz, Espiritualidade e Diretrizes de Comunicação — V2.0; Documento 06 — CURRENT  
**SUBSTITUI:** Documento 05 — Arquitetura Técnica, Dados e Ecossistema Digital — V1.0

> **Tecnologia a serviço da transformação. Dados a serviço da decisão. IA a serviço da execução. Nenhuma ferramenta acima da pessoa, da autoria ou da verdade.**

---

# Mapa do documento

Esta V2.0 reescreve integralmente a arquitetura técnica do **Portal Caminho da Consciência** após:

- criação do Documento 00;
- atualização dos Documentos 01–04;
- migração pública da antiga marca para Portal Caminho da Consciência;
- definição do domínio principal `portalcaminhodaconsciencia.com.br`;
- renomeação do repositório e da pasta local;
- manutenção do site institucional no Netlify;
- publicação da nova página do **Mapeamento Padrão Interrompido — Individual — R$197**;
- adoção explícita de **mobile first** para site, aplicativos e experiências digitais;
- implementação de GTM, GA4, Consent Mode v2, Conversion Linker e eventos próprios;
- configuração de `whatsapp_click` como conversão secundária no Google Ads;
- definição de que o Google Search está tecnicamente preparado, mas com execução adiada;
- análise dos materiais oficiais da formação **Mesa Radiônica Sintonize Prosperidade**;
- criação de fronteiras rígidas para materiais proprietários de terceiros;
- definição de que Radar, IA, banco de dados e automações **não podem digitalizar, simular ou reproduzir a Sintonize**;
- decisão de aguardar conclusão formal da formação e prática controlada antes de automatizar qualquer parte da experiência Sintonize;
- decisão de não apresentar Marcos tecnicamente ou semanticamente como “terapeuta” em metadata, schema, perfis ou interfaces públicas.

O documento está organizado em dezessete partes:

1. função, precedência e princípios de arquitetura;
2. estado técnico atual e fontes de verdade;
3. repositórios, Git, documentação e ambientes;
4. Netlify, Vercel, DNS, domínios e economia de deploy;
5. aplicações e regra de produto digital;
6. Radar, Mapeamento, Sintonize e fronteiras de propriedade intelectual;
7. dados, Supabase, modelagem e classificação de informação;
8. privacidade, LGPD, consentimento e segurança;
9. CRM, leads, WhatsApp, aquisição e atribuição;
10. analytics, GTM, GA4, Google Ads e mensuração;
11. pagamentos, venda assistida, webhooks e entitlement;
12. automações, notificações e IA operacional;
13. desenvolvimento com Claude Code, Codex, ChatGPT e PowerShell;
14. observabilidade, backup, continuidade e incidentes;
15. arquitetura mobile first, acessibilidade, performance e qualidade;
16. roadmap técnico de 90 dias e critérios de gate;
17. decisões fechadas, abertas e síntese canônica.

---

# 0. Função deste documento

O Documento 00 responde:

> **o que pertence a quem e quais fronteiras de autoria, propriedade intelectual e uso são obrigatórias.**

O Documento 01 responde:

> **quem somos, por que existimos e qual é a direção estratégica.**

O Documento 02 responde:

> **o que a pessoa recebe e como progride na jornada.**

O Documento 03 responde:

> **como atraímos, comunicamos, testamos e aprendemos.**

O Documento 04 responde:

> **como o Portal e Marcos devem parecer, soar e se comunicar.**

Este Documento 05 responde:

> **como tecnologia, dados, código, integrações, analytics, pagamentos, automações e IA devem sustentar tudo isso sem criar complexidade prematura, risco indevido, apropriação de propriedade intelectual ou distorção da experiência humana.**

Este documento não substitui:

- especificação de uma feature;
- README de repositório;
- migrations;
- ADR técnico;
- plano de teste;
- runbook;
- CURRENT.

Ele estabelece:

- princípios;
- fronteiras;
- fontes de verdade;
- stack preferencial;
- regras de segurança;
- modelos de dados de referência;
- regras de mensuração;
- regras para IA;
- critérios de evolução.

---

## 0.1. Ordem de precedência

Quando houver conflito:

1. **Documento 00** prevalece em autoria, propriedade intelectual, Sintonize, protocolos de terceiros, Anjos Cabalísticos e materiais restritos;
2. **Documento 01** prevalece em propósito, posicionamento e princípios estratégicos;
3. **Documento 02** prevalece em jornada e produtos;
4. **Documento 03** prevalece em aquisição, editorial e experimentação;
5. **Documento 04** prevalece em identidade, voz, claims e apresentação pública;
6. este Documento 05 prevalece em arquitetura, segurança, dados, ambientes, integrações e desenvolvimento;
7. o **Documento 06 — CURRENT** registra o estado operacional verificável e pode dizer que algo planejado aqui ainda não existe.

> **Arquitetura de referência não é autorização automática de implementação.**

---

## 0.2. Regra superior de tecnologia

> **Tarefa primeiro. Necessidade depois. Evidência antes da sofisticação. Tecnologia somente quando melhora uma entrega, reduz risco, aumenta capacidade, preserva rastreabilidade ou produz informação útil para decisão.**

---

## 0.3. Regras imutáveis

- Nenhum aplicativo será criado apenas porque é possível.
- Nenhuma automação será criada antes de o processo manual ser compreendido.
- Nenhum banco será criado para armazenar dados que não precisam persistir.
- Nenhum agente de IA pode mudar estratégia, claims, produto ou autoria silenciosamente.
- Segredos nunca são versionados.
- Produção, preview e desenvolvimento permanecem separados.
- Todo sistema crítico deve ser auditável.
- Toda integração crítica deve ser idempotente quando houver risco de repetição.
- O sistema deve ser **mobile first**.
- Privacidade vem antes de curiosidade por dados.
- Analytics não recebe conteúdo íntimo de atendimentos.
- IA não finge ter realizado leitura humana.
- IA não pode produzir “diagnóstico energético”.
- Radar não mede energia, frequência, Hz ou nível de consciência.
- Sintonize não será digitalizada.
- Materiais proprietários da Sintonize não entram em repositório público, app, API, banco, embeddings ou dataset.
- As 8 Prosperidades Sintonize não viram schema autoral do Padrão Interrompido por padrão.
- Protocolos Sintonize não viram regras de software autoral.
- Marcos não será descrito em schema, metadata ou perfis como terapeuta clínico.
- `purchase` só representa compra confirmada.
- `whatsapp_click` não representa venda.
- PII não é enviada em texto aberto a plataformas de analytics/publicidade.
- Todo deploy de produção deve ter razão clara.
- Limites de consumo de plataforma fazem parte da arquitetura.
- O sistema deve crescer sem transformar Marcos em gargalo, mas sem automatizar aquilo que depende legitimamente de presença humana.

---

# PARTE I — ESTADO TÉCNICO ATUAL E FONTES DE VERDADE

# 1. Estado verificável em 01/09/2026

O estado operacional exato deve permanecer no CURRENT. Esta seção registra apenas a arquitetura consolidada que já influencia decisões futuras.

## 1.1. Marca e presença pública

- nome: **Portal Caminho da Consciência**;
- domínio principal: **portalcaminhodaconsciencia.com.br**;
- site institucional: Netlify;
- repositório institucional: `marvin-ds/portal-caminho-da-consciencia`;
- pasta local Windows: `C:\Projetos\portal-caminho-da-consciencia`;
- branch de produção: `main`;
- site atual: página pública estática orientada à oferta do Mapeamento;
- oferta publicada: **Mapeamento Padrão Interrompido — Individual — R$197**;
- CTA comercial atual: WhatsApp.

## 1.2. Mensuração atual

Implementados:

- Google Tag Manager;
- GA4;
- Consent Mode v2;
- Conversion Linker;
- Meta Pixel existente;
- eventos próprios via `dataLayer`;
- `offer_cta_click`;
- `scroll_depth`;
- `section_view`;
- `whatsapp_click`;
- Google Ads conectado ao GA4;
- `whatsapp_click` configurado como conversão secundária.

## 1.3. Mídia paga

- arquitetura Search especificada;
- campanha não é prioridade imediata;
- execução adiada deliberadamente;
- não existe blocker técnico canônico associado a ad blocker;
- ativação futura depende de decisão comercial e prontidão operacional.

## 1.4. Sintonize Prosperidade

- acesso oficial à formação confirmado;
- formação em fase final;
- certificação aguardando formalização;
- nenhuma automação, app ou produto digital derivado da Sintonize está autorizado;
- materiais analisados são fontes privadas de referência, não ativos de software.

---

# 2. Fontes de verdade

Cada tipo de informação possui uma fonte principal.

| Informação | Fonte canônica |
|---|---|
| fronteiras de autoria / PI | Documento 00 |
| propósito e estratégia | Documento 01 |
| jornada e produtos | Documento 02 |
| editorial e aquisição | Documento 03 |
| identidade, claims e voz | Documento 04 |
| arquitetura técnica | Documento 05 |
| estado operacional | Documento 06 — CURRENT |
| código | GitHub |
| histórico Git | GitHub + clone local |
| domínio / DNS | provedor de domínio + configuração vigente |
| deploy institucional | Netlify |
| eventos web | GTM / GA4 + código |
| campanha Ads | Google Ads |
| compra confirmada | plataforma de pagamento vigente, quando definida |
| dados de aplicação | banco de produção correspondente |
| segredos | secret managers / variáveis protegidas |
| material Sintonize | armazenamento privado autorizado, fora do repositório público |

Duplicação pode existir.

O sistema deve sempre saber qual fonte prevalece.

---

# 3. Princípio de arquitetura unificada

O ecossistema não deve virar uma coleção desorganizada de sites.

A arquitetura acompanha a jornada:

> **CONTEÚDO → INTENÇÃO → PÁGINA → WHATSAPP / LEAD → COMPRA → ENTREGA → PRÁTICA → REAVALIAÇÃO → CONTINUIDADE**

Quando existirem aplicações:

> **CONTEÚDO → RADAR → MAPEAMENTO → EXPERIÊNCIA → JORNADA → REAVALIAÇÃO**

Sintonize, quando integrada, entra como **metodologia de uma experiência**, não como camada técnica independente que precisa ser reproduzida digitalmente.

---

# PARTE II — REPOSITÓRIOS, GIT, DOCUMENTAÇÃO E AMBIENTES

# 4. Repositório institucional

| Elemento | Padrão canônico |
|---|---|
| GitHub | `marvin-ds/portal-caminho-da-consciencia` |
| Pasta Windows | `C:\Projetos\portal-caminho-da-consciencia` |
| Produção | `main` |
| Branch de feature | `feat/*` |
| Fix | `fix/*` |
| Refactor | `refactor/*` |
| Docs | `docs/*` |
| Chore | `chore/*` |
| Hotfix | `hotfix/*` |
| Hospedagem institucional | Netlify |

Mudança de marca não apaga histórico.

---

# 5. Estrutura documental

Estrutura preferencial:

```text
/docs
  /canonical
    00-matriz-governanca-conceitual.md
    01-fundacional-estrategico.md
    02-jornada-produtos-servicos-protocolos.md
    03-sistema-editorial-aquisicao-experimentacao.md
    04-identidade-voz-espiritualidade-comunicacao.md
    05-arquitetura-tecnica-dados-ecossistema.md

  /operations
    CURRENT.md
```

Regra:

> **Documento 00 deve ser lido primeiro por qualquer agente quando a tarefa tocar Sintonize, protocolos, 8 Prosperidades, Anjos, propriedade intelectual ou forma de apresentação de Marcos.**

---

# 6. Materiais que não pertencem ao repositório público

Não versionar:

- apostilas Sintonize;
- Guia Consultivo;
- fichas oficiais;
- protocolos oficiais;
- comandos;
- ativações;
- diagramas;
- gráficos;
- símbolos;
- imagens da Mesa;
- materiais dos 72 Anjos;
- materiais complementares protegidos;
- certificados com dados pessoais sem finalidade;
- arquivos privados de clientes;
- exports de CRM;
- respostas de formulários reais;
- secrets;
- dumps de banco.

O `.gitignore` deve proteger:

- `.env*` sensíveis;
- `.agents/`;
- caches;
- artifacts locais;
- dumps;
- materiais privados;
- arquivos temporários de IA.

---

# 7. Arquivos de agentes

Diretórios como:

- `.claude/`;
- `.agents/`;
- `skills-lock.json`;

devem ser classificados deliberadamente.

Não usar:

```text
git add .
```

sem revisar o que entrará no commit.

---

# 8. Branches e gates

Fluxo preferencial:

> **INSPECIONAR → DOCUMENTAR ESCOPO → BRANCH → IMPLEMENTAR → TESTAR → PREVIEW → VALIDAR → MERGE → PRODUÇÃO → VALIDAR → CURRENT**

Mudanças de identidade, tracking, pagamento, segurança ou página comercial exigem gate explícito.

---

# 9. Commits

Preferir commits:

- pequenos;
- reversíveis;
- coerentes;
- explicáveis.

Exemplos:

```text
feat(tracking): add consent-aware analytics events
fix(offer): correct whatsapp destination
docs(canonical): update technical architecture v2
refactor(brand): remove legacy naming
```

Não misturar:

- rebrand;
- tracking;
- copy;
- banco;
- infra;

num commit gigante sem necessidade.

---

# 10. Ambientes

| Ambiente | Uso | Regra |
|---|---|---|
| Local | desenvolvimento | dados fictícios por padrão |
| Preview | validação | variáveis separadas e URL própria |
| Production | público real | somente após gate |

## 10.1. Regra de dados

Local e preview não devem usar dados reais de cliente sem necessidade.

## 10.2. Regra de secrets

Secrets de produção não devem ser copiados para ambientes inferiores por conveniência.

---

# PARTE III — NETLIFY, VERCEL, DOMÍNIOS, DNS E ECONOMIA DE DEPLOY

# 11. Netlify — camada institucional

Netlify permanece como infraestrutura institucional inicial porque:

- o site atual é leve;
- não exige autenticação;
- não exige framework complexo;
- deploy está funcionando;
- migração desnecessária criaria custo sem valor imediato.

Projeto:

> **portal-caminho-da-consciencia**

Branch:

> **main**

---

# 12. Economia de deploy

Créditos e limites de plataforma são restrições arquiteturais reais.

Regras:

- evitar deploy de produção para ajuste cosmético isolado;
- consolidar mudanças localmente;
- usar preview somente quando necessário;
- preferir um único preview por gate;
- preferir um único deploy de produção por gate;
- excluir do bundle arquivos sem função pública;
- não enviar documentação canônica ao deploy;
- não publicar assets grandes não utilizados;
- usar cache de assets estáticos;
- monitorar consumo antes de criar pipelines excessivos.

Arquivos de documentação e materiais de marca que não são usados pelo site devem permanecer fora do bundle de produção por `.netlifyignore` ou mecanismo equivalente.

---

# 13. Deploy Preview

Preview existe para reduzir risco, não para gerar deploy a cada pequena edição.

Política:

- features relevantes: preview;
- correções locais simples antes de merge: consolidar;
- alteração crítica: preview obrigatório quando possível;
- evitar previews automáticos desnecessários em branches sem função.

Configuração exata permanece no CURRENT/Netlify.

---

# 14. Domínio principal

Decisão fechada:

> **portalcaminhodaconsciencia.com.br**

Toda presença pública deve convergir para esse domínio.

Atualizar quando aplicável:

- canonical;
- OG;
- JSON-LD;
- sitemap;
- robots;
- links de campanha;
- Search Console;
- e-mails;
- documentos;
- QR codes;
- perfis.

---

# 15. Domínio antigo

`portalanjosdaprosperidade.com.br`, quando mantido sob controle do projeto, deve ser tratado como ativo de:

- redirecionamento;
- proteção de marca antiga;
- SEO residual;
- prevenção de confusão.

Não deve servir conteúdo antigo concorrente.

Regra preferencial:

> **301 para a URL nova equivalente ou para a homepage quando não houver correspondência melhor.**

---

# 16. Vercel — aplicações dinâmicas futuras

Vercel é preferencial quando existir necessidade real de:

- rotas server-side;
- APIs;
- autenticação;
- funções;
- app state;
- Supabase;
- experiência dinâmica.

Possíveis aplicações:

- Radar;
- área autenticada;
- jornadas;
- reavaliações;
- painel do usuário;
- webhooks, quando a arquitetura justificar.

Não migrar o site institucional apenas por uniformidade.

---

# 17. Subdomínios

Padrão preferencial:

| Uso | Padrão |
|---|---|
| Institucional | `portalcaminhodaconsciencia.com.br` |
| Aplicação | `app.portalcaminhodaconsciencia.com.br` |
| Radar | `/radar` ou subdomínio se houver justificativa |
| Conteúdo | preferir domínio principal |
| Campanhas | domínio principal + UTMs |

Decidir subdomínio apenas quando existir aplicação.

---

# PARTE IV — APLICAÇÕES E REGRA DE PRODUTO DIGITAL

# 18. Regra de existência

Uma aplicação só deve existir se uma página simples não conseguir entregar bem:

- persistência;
- histórico;
- personalização;
- autenticação;
- reavaliação;
- progressão;
- automação;
- integração.

---

# 19. Ordem tecnológica

> **SERVIÇO MANUAL → PROCESSO COMPREENDIDO → DADOS NECESSÁRIOS → SUPORTE DIGITAL → AUTOMAÇÃO → ESCALA**

Nunca:

> **APP → procurar problema depois.**

---

# 20. Área autenticada

Criar somente quando a pessoa tiver razão real para voltar, como:

- jornada ativa;
- histórico;
- materiais;
- reavaliação;
- compras;
- comunidade.

Login sem valor recorrente é custo.

---

# 21. PWA / aplicativo móvel

Não é prioridade.

A arquitetura web deve ser mobile first e instalável somente quando:

- frequência de uso justificar;
- notificações agregarem valor;
- retenção exigir;
- experiência offline for útil.

---

# PARTE V — RADAR, MAPEAMENTO, SINTONIZE E PROPRIEDADE INTELECTUAL

# 22. Radar / Mapa da Repetição

O Radar é um futuro produto autoral de **autorrelato**.

Pode:

- receber respostas;
- classificar respostas com regras próprias;
- organizar temas;
- apontar áreas de observação;
- salvar histórico;
- comparar autorrelatos;
- gerar perguntas;
- sugerir próximos passos.

Não pode:

- medir energia;
- medir frequência;
- atribuir Hz;
- calcular “nível de consciência”;
- simular pêndulo;
- simular Mesa;
- declarar bloqueio como fato;
- usar a lista oficial Sintonize como base proprietária do Portal;
- reproduzir protocolos da formação.

---

# 23. Arquitetura mínima futura do Radar

Somente quando autorizado por demanda:

- landing;
- consentimento;
- perguntas;
- sessão;
- progresso;
- resultado;
- snapshot opcional;
- CTA;
- analytics.

Eventos de referência:

```text
radar_view
radar_start
radar_question_progress
radar_complete
radar_result_view
radar_next_step_click
```

Nomes finais dependem da implementação.

---

# 24. Domínios de vida no Radar

Não implementar a antiga lista das “8 Prosperidades do Padrão Interrompido”.

Até existir mapa autoral validado:

- usar domínios neutros;
- modelagem extensível;
- versionar taxonomia;
- não amarrar banco a conceitos que ainda estão abertos.

Exemplo conceitual:

```text
domain_id
domain_version
domain_label
source = portal_authored
```

Se algum dia houver uso explícito das 8 Prosperidades Sintonize:

- manter namespace separado;
- atribuir origem;
- não misturar com taxonomia autoral;
- revisar direitos de uso.

---

# 25. Mapeamento Padrão Interrompido

A versão inicial continua prioritariamente humana.

Tecnologia pode apoiar:

- formulário;
- organização;
- checklist;
- relatório;
- template autoral;
- entrega;
- histórico;
- reavaliação.

Tecnologia não deve:

- substituir interpretação humana sem decisão explícita;
- gerar leitura “como se Marcos tivesse feito”;
- criar causalidade;
- simular Sintonize;
- enviar dados íntimos a modelos sem minimização.

---

# 26. Sintonize Prosperidade — fronteira técnica

A Sintonize é metodologia de terceiros.

Regra canônica:

> **não digitalizar a metodologia.**

Isso inclui proibição de transformar em:

- app;
- workflow automático;
- engine de regras;
- dataset;
- embeddings;
- vector database;
- chatbot treinado na apostila;
- “copiloto Sintonize” persistente;
- API;
- pêndulo virtual;
- Mesa digital;
- automação de protocolos;
- banco de comandos;
- banco de Anjos derivado dos materiais para uso comercial próprio.

---

# 27. Materiais privados de formação

Se usados por Marcos para estudo:

- armazenamento privado;
- acesso restrito;
- fora do deploy;
- fora do Git público;
- fora do banco de produção do Portal;
- fora de logs;
- fora de prompts persistentes distribuíveis.

Claude Code/Codex não devem receber esses arquivos como parte permanente do repositório.

Quando uma tarefa precisar de uma conclusão derivada da formação:

> utilizar **Documento 00 + especificação autoral resumida**, não a apostila original como dependência de código.

---

# 28. Relatórios e conteúdo Sintonize

O sistema pode armazenar, quando legítimo e necessário:

- que uma experiência utilizou Sintonize;
- data;
- versão operacional interna;
- status de entrega;
- referências resumidas autorizadas.

Evitar armazenar em analytics:

- ferramenta espiritual específica acionada para uma pessoa;
- conteúdo íntimo da sessão;
- texto detalhado de crenças;
- informação sensível sem necessidade.

Relatório autoral do Portal não deve copiar modelo oficial.

---

# 29. Protocolos Sintonize

Não modelar protocolos oficiais como:

```text
protocol_steps
activation_commands
angel_rules
symbol_rules
```

em software autoral do Portal.

Protocolos Sintonize permanecem na esfera da prática habilitada.

---

# 30. Protocolos Padrão Interrompido

Se forem criados no futuro:

- autoria própria;
- versão própria;
- conteúdo próprio;
- documentação própria;
- consentimento próprio;
- schema próprio;
- testes próprios.

Exemplo futuro:

```text
protocol_id
protocol_version
objective
eligibility
steps
practice_requirements
reassessment_model
```

Somente depois de protocolo real existir.

---

# 31. Regra da certificação para software

A conclusão da certificação Sintonize:

- pode legitimar uso humano nos limites da formação;
- **não cria automaticamente direito de reprodução digital**;
- não autoriza copiar conteúdo para código;
- não autoriza treinar modelo;
- não autoriza disponibilizar material a terceiros.

---

# PARTE VI — DADOS, SUPABASE, MODELAGEM E CLASSIFICAÇÃO

# 32. Supabase como base preferencial futura

Supabase permanece opção preferencial para:

- PostgreSQL;
- auth;
- storage controlado;
- funções associadas;
- RLS.

Não criar projeto Supabase apenas porque a stack prevê um.

A implementação depende de produto real.

---

# 33. Princípios de modelagem

- IDs estáveis;
- `created_at` / `updated_at`;
- versionar taxonomias;
- separar lead, pessoa, compra e acesso;
- não usar JSON como fuga de modelagem;
- usar JSONB quando deliberado;
- não armazenar texto íntimo sem finalidade;
- manter trilha de pagamento;
- evitar deleção de histórico necessário a reconciliação;
- versionar migrations;
- não alterar produção manualmente sem migration.

---

# 34. Domínios de dados de referência

| Domínio | Entidades possíveis |
|---|---|
| Identidade | profiles, identities, consents |
| Aquisição | leads, lead_sources, attribution |
| Comercial | offers, orders, order_events, refunds |
| Mapeamento | mapping_requests, inputs, deliveries, reassessments |
| Radar | radar_sessions, answers, result_snapshots |
| Jornadas | journeys, enrollments, steps, checkins |
| Comunicação | dispatches, preferences |
| Operação | audit_events, webhook_receipts, jobs |
| Acesso | entitlements, claims |

São referências.

**Não são migrations autorizadas.**

---

# 35. Classificação de dados

## Classe A — Públicos

- conteúdo publicado;
- metadata;
- páginas.

## Classe B — Operacionais internos

- status de lead;
- IDs;
- campanha;
- logs sem PII excessiva.

## Classe C — Pessoais

- nome;
- e-mail;
- telefone;
- data de nascimento, se necessária;
- transações.

## Classe D — Íntimos / alta proteção

- relatos pessoais;
- espiritualidade;
- respostas de auto-observação;
- práticas;
- áudio personalizado;
- conteúdo de mapeamento.

## Classe E — Proprietários de terceiros

- apostilas;
- protocolos;
- símbolos;
- comandos;
- materiais Sintonize.

Classe E não pertence ao banco do produto.

---

# 36. Row Level Security

Se Supabase for usado:

- RLS por padrão;
- usuário vê somente seus dados;
- anon não acessa PII;
- compra não é editável pelo cliente;
- service role somente server-side;
- admin fora do browser;
- tokens públicos com TTL e escopo mínimo;
- storage com políticas.

---

# 37. Retenção

Cada domínio precisa de política.

Perguntas:

- por que guardar?
- por quanto tempo?
- quem acessa?
- como excluir?
- existe obrigação de histórico?
- o cliente precisa recuperar?

Não guardar indefinidamente por padrão.

---

# PARTE VII — PRIVACIDADE, LGPD, CONSENTIMENTO E SEGURANÇA

# 38. Minimização

Coletar somente o necessário.

Não criar campos como:

> “Conte toda sua história.”

sem necessidade.

---

# 39. Dados espirituais e íntimos

Mesmo quando uma classificação jurídica específica depender do contexto, o Portal deve tratar esses relatos com proteção elevada.

Evitar:

- analytics;
- logs;
- prompts externos;
- planilhas abertas;
- compartilhamento sem necessidade.

---

# 40. Consentimento

Consentimento deve ser granular quando necessário:

- cookies/analytics;
- publicidade;
- contato;
- prática espiritual;
- uso de dados para entrega;
- depoimento.

Um consentimento não substitui outro.

---

# 41. Consent Mode

A implementação Google deve manter Consent Mode compatível com a configuração vigente.

Categorias relevantes:

- `analytics_storage`;
- `ad_storage`;
- `ad_user_data`;
- `ad_personalization`.

A lógica real deve ser revisada quando CMP/banner evoluir.

---

# 42. Segredos

Nunca versionar:

- API key;
- service role;
- webhook secret;
- SMTP;
- token;
- senha;
- cookie;
- credencial.

Em prompts:

> nunca enviar segredo se a tarefa não exigir.

---

# 43. Autenticação

Quando houver área autenticada:

- magic link é opção preferencial inicial;
- proteger redirect;
- tokens de uso único/TTL;
- sessões seguras;
- rate limit;
- auditabilidade.

---

# 44. Autorização

Login não é entitlement.

Acesso a produto pago depende de:

- ordem válida;
- entitlement ativo;
- checagem server-side.

---

# 45. Segurança de formulário

Formulários públicos devem considerar:

- validação;
- anti-spam;
- rate limit;
- minimização;
- consentimento;
- armazenamento seguro;
- ausência de secrets no cliente.

---

# 46. Segurança de IA

Antes de enviar dados para modelo:

- remover PII não necessária;
- reduzir texto;
- verificar finalidade;
- evitar material proprietário;
- evitar dados íntimos se síntese puder ocorrer localmente/manual.

Nenhum modelo deve receber automaticamente todo histórico de um cliente.

---

# PARTE VIII — CRM, LEADS, WHATSAPP, AQUISIÇÃO E ATRIBUIÇÃO

# 47. CRM mínimo

Não construir CRM próprio agora.

Campos de referência:

```text
lead_id
created_at
name
email
phone
source
medium
campaign
content
term
gclid
gbraid
wbraid
landing_page
cta_location
lead_status
lead_quality
objection
disqualification_reason
offer_id
offer_value
payment_status
transaction_id
delivery_status
follow_up_status
```

Implementar somente o necessário para operação real.

---

# 48. Status comercial sugerido

```text
new
in_conversation
qualified
offer_presented
awaiting_payment
paid
intake_pending
in_delivery
delivered
reassessment
converted_next_step
not_qualified
no_response
not_purchased
cancelled
refunded
```

Isso pertence à futura operação R4, ainda não iniciada.

---

# 49. WhatsApp

O WhatsApp atual é CTA comercial.

Regras:

- número correto;
- mensagem pré-preenchida;
- UTM/atribuição preservada quando possível;
- evento `whatsapp_click`;
- não considerar clique como lead confirmado;
- não enviar conteúdo íntimo do WhatsApp para analytics.

---

# 50. Identidade de lead

Preferir:

- `lead_id` interno;
- e-mail/telefone normalizados quando fornecidos.

Não usar:

- `gclid` como identidade de pessoa;
- UTM como chave de cliente.

---

# 51. Atribuição

Objetivo:

> **ORIGEM → VISITA → CTA → WHATSAPP → LEAD → VENDA → RECEITA**

Preservar quando tecnicamente aplicável:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- `gclid`;
- `gbraid`;
- `wbraid`.

Não inventar persistência não implementada.

A implementação concreta deve ser registrada no CURRENT.

---

# 52. First touch e last touch

Arquitetura futura pode manter:

- first touch;
- last non-direct touch;
- current session touch.

Somente se:

- houver necessidade real;
- política de retenção definida;
- implementação auditável.

---

# PARTE IX — ANALYTICS, GTM, GA4, GOOGLE ADS E MENSURAÇÃO

# 53. Princípio

> **Medir comportamento que muda decisão.**

Não criar evento porque ferramenta permite.

---

# 54. Google Tag Manager

GTM é a camada central de orquestração de tags web do site institucional.

Regras:

- container publicado por versão;
- mudanças revisáveis;
- triggers nomeados;
- variáveis documentadas;
- evitar tags duplicadas;
- não colocar PII no `dataLayer`.

---

# 55. GA4

GA4 é o sistema principal de análise de aquisição e comportamento web.

Configuração atual existe e está publicada.

IDs específicos pertencem ao CURRENT/contas e não precisam ser tratados como decisões arquiteturais.

---

# 56. Eventos atuais

Eventos relevantes já implantados:

```text
page_view
scroll_depth
section_view
offer_cta_click
whatsapp_click
```

Semântica:

| Evento | Significado |
|---|---|
| `page_view` | visita |
| `scroll_depth` | profundidade de consumo |
| `section_view` | exposição a seção |
| `offer_cta_click` | intenção intermediária |
| `whatsapp_click` | intenção comercial on-site |

---

# 57. Parâmetros de CTA

Padrão desejado:

```text
cta_location
cta_text
offer_id
offer_name
value
currency
page_path
```

Não duplicar tudo como evento diferente.

---

# 58. Google Ads

`whatsapp_click` está configurado como **conversão secundária**.

Isso significa:

- serve para observação;
- não deve ser tratado como venda;
- não deve ser meta primária definitiva de Smart Bidding.

Conversão primária futura:

> pagamento confirmado / purchase

quando houver integração confiável.

---

# 59. Conversões futuras

Arquitetura recomendada:

```text
generate_lead
working_lead
qualify_lead
disqualify_lead
close_convert_lead
purchase
refund
```

Só implementar quando o processo comercial existir.

---

# 60. Purchase

`purchase` deve vir de:

- confirmação de checkout;
- webhook;
- reconciliação confiável.

Nunca:

- clique;
- página de obrigado isolada;
- abertura de WhatsApp.

Parâmetros:

```text
transaction_id
value
currency
offer_id
offer_name
```

---

# 61. Enhanced Conversions / offline

Futuro.

Somente quando houver:

- CRM;
- base legítima;
- dados normalizados;
- hashing conforme plataforma;
- consentimento/configuração adequada;
- reconciliação.

E-mail/telefone não devem ser enviados como texto aberto ao GA4.

---

# 62. Meta Pixel

O site possui Meta Pixel.

Regras:

- manter eventos úteis;
- evitar duplicidade;
- consentimento coerente;
- revisar futuramente necessidade de ambos os pixels existentes;
- IDs exatos pertencem ao CURRENT/configuração, não à arquitetura conceitual.

---

# 63. DataLayer

O `dataLayer` deve transportar contexto operacional não sensível.

Exemplo:

```javascript
dataLayer.push({
  event: "offer_cta_click",
  offer_id: "mapping_pattern_interrupted_v1",
  offer_name: "Mapeamento Padrão Interrompido",
  value: 197,
  currency: "BRL",
  cta_location: "hero"
});
```

Não enviar:

- nome;
- telefone;
- relato;
- pergunta espiritual;
- resposta de formulário.

---

# 64. Dashboard mínimo

Deve responder:

## Aquisição

- sessões;
- usuários;
- source/medium;
- campanha;
- landing page.

## Página

- scroll;
- section view;
- CTA rate;
- WhatsApp rate.

## Comercial futuro

- leads;
- qualificados;
- vendas;
- CAC;
- receita;
- ROAS;
- reembolso.

---

# PARTE X — PAGAMENTOS, VENDA ASSISTIDA, WEBHOOKS E ENTITLEMENT

# 65. Estado atual

A oferta pública conduz para WhatsApp.

A infraestrutura de pagamento definitiva do Mapeamento **não deve ser presumida neste documento como já integrada**.

O Gate R4 de operação comercial foi deliberadamente adiado até:

1. conclusão da formação Sintonize;
2. revisão documental;
3. definição da experiência;
4. decisão operacional.

---

# 66. Plataforma de pagamento futura

Critérios:

- checkout confiável;
- PIX/cartão;
- webhook;
- reembolso;
- export;
- taxas;
- tracking;
- suporte;
- integração.

Eduzz/Nutror podem ser avaliados se forem a plataforma vigente, mas não são obrigação canônica.

---

# 67. Webhooks

Quando existir checkout integrado:

- validar assinatura;
- usar raw body se exigido;
- `event_id`;
- idempotência;
- armazenar receipt;
- mapear aprovado/cancelado/reembolso/chargeback;
- responder rápido;
- processar pesado fora da request quando necessário.

---

# 68. Orders e entitlement

Separar:

- pedido;
- pagamento;
- direito de acesso.

Para serviço assíncrono sem área autenticada, entitlement pode não ser necessário.

Não construir camada de acesso se a oferta não exige.

---

# 69. Reconciliação

Quando existir integração:

> plataforma de pagamento ↔ banco local

deve poder ser reconciliada.

Nenhuma venda deve depender apenas de analytics.

---

# PARTE XI — AUTOMAÇÕES, NOTIFICAÇÕES E IA OPERACIONAL

# 70. Regra de automação

> **Automatizar o que já entendemos.**

Primeiro manual.

Depois:

- medir;
- padronizar;
- automatizar.

---

# 71. Bons candidatos futuros

- confirmação de formulário;
- e-mail de entrega;
- magic link;
- lembrete opt-in;
- reavaliação;
- classificação de origem;
- alerta de webhook;
- relatório interno;
- CRM sync.

---

# 72. Maus candidatos atuais

- interpretação espiritual autônoma;
- Sintonize automatizada;
- ativação automática;
- pêndulo virtual;
- protocolo Sintonize em software;
- relatório espiritual definitivo gerado sem revisão;
- mensagens em massa sem contexto;
- agente com acesso irrestrito à produção.

---

# 73. IA no Mapeamento

IA pode auxiliar:

- estruturar texto;
- resumir;
- detectar inconsistência;
- formatar;
- revisar voz;
- QA.

IA não pode:

- inventar observação;
- inventar ferramenta usada;
- inventar Sintonize;
- inventar anjo;
- apresentar um output como leitura realizada por Marcos.

---

# 74. IA e materiais Sintonize

Regra:

> **não criar base persistente de conhecimento da Sintonize dentro do ecossistema técnico do Portal.**

Se uma análise pontual for necessária:

- usar ambiente privado;
- não versionar material;
- produzir síntese autoral;
- apagar cópias de trabalho quando não forem necessárias;
- nunca publicar corpus.

---

# PARTE XII — DESENVOLVIMENTO COM CLAUDE CODE, CODEX, CHATGPT E POWERSHELL

# 75. Hierarquia de autoridade

1. decisões humanas fechadas;
2. Documento 00;
3. Documentos 01–05;
4. CURRENT;
5. estado real do repositório;
6. spec do gate;
7. testes/logs;
8. sugestões dos agentes.

Se houver conflito:

> **o agente aponta e para. Não reinterpreta silenciosamente.**

---

# 76. Leitura obrigatória por tipo de tarefa

## Marca / copy

Ler:

- 01;
- 03;
- 04;
- CURRENT.

## Produto

Ler:

- 00;
- 01;
- 02;
- 04;
- CURRENT.

## Sintonize / protocolos / Anjos

Ler:

- **00 primeiro**;
- 02;
- 04;
- CURRENT.

## Arquitetura técnica

Ler:

- 00 quando houver PI/Sintonize;
- 05;
- CURRENT;
- README.

---

# 77. Modelo por Gate

> **INVENTÁRIO → PLANO → APROVAÇÃO → BRANCH → IMPLEMENTAÇÃO → TESTE → EVIDÊNCIA → PREVIEW → APROVAÇÃO → MERGE → PRODUÇÃO → VALIDAÇÃO → CURRENT**

Não pular inventário em mudança sensível.

---

# 78. Prompt mínimo de implementação

Deve informar:

- objetivo;
- repo;
- branch;
- documentos;
- escopo permitido;
- escopo proibido;
- critérios de aceitação;
- testes;
- deploy policy;
- rollback;
- saída final.

---

# 79. Regras destrutivas

Não:

- `reset --hard` sem diagnóstico;
- force push sem autorização;
- apagar repo;
- apagar projeto Netlify;
- recriar domínio;
- migration destrutiva sem rollback;
- alterar produção diretamente quando preview resolve;
- `git add .` cego;
- sobrescrever documentação canônica por resumo.

---

# 80. Dois agentes

Quando o risco justificar:

- um implementa;
- outro audita.

Exemplos:

- auth;
- webhook;
- payment;
- RLS;
- consent;
- tracking crítico;
- migration;
- rebrand.

Não usar dois agentes só para aumentar burocracia.

---

# 81. PowerShell

Console preferencial no Windows.

Antes de Git:

```powershell
Get-Location
git status -sb
git remote -v
git branch --show-current
```

Comandos sensíveis:

- pequenos;
- um por vez;
- conferir saída.

---

# 82. Memória de agentes

Memória persistente deve guardar:

- decisões;
- caminhos;
- convenções;
- estado de formação;
- fronteiras de PI.

Não deve guardar:

- secrets;
- dados de cliente;
- material proprietário integral;
- conteúdo íntimo.

---

# PARTE XIII — OBSERVABILIDADE, BACKUP, CONTINUIDADE E INCIDENTES

# 83. Logs

Logar:

- webhook;
- job;
- erro API;
- auth relevante;
- envio de e-mail;
- entitlement;
- deploy;
- correlation ID.

Não logar:

- secrets;
- conteúdo íntimo;
- tokens completos;
- formulário inteiro.

---

# 84. Alertas

Criar alerta somente quando houver ação.

Prioridades futuras:

- produção indisponível;
- erro de webhook;
- erro repetido de pagamento;
- falha de entrega;
- erro elevado.

---

# 85. Backup

- migrations no Git;
- backups do provedor;
- export crítico conforme risco;
- runbook de restauração;
- testar restauração quando houver dados relevantes.

Backup não é “existe um botão de backup”.

---

# 86. Continuidade

Falhas devem ser desacopladas.

Exemplos:

- analytics cair não pode bloquear site;
- CRM cair não pode apagar venda;
- e-mail falhar deve permitir reenvio;
- webhook falhar deve aceitar replay;
- Netlify indisponível não deve destruir dados de aplicação.

---

# 87. Incidentes

Para incidente relevante registrar:

- início;
- impacto;
- causa;
- mitigação;
- correção;
- prevenção;
- dados afetados;
- necessidade de comunicação.

---

# PARTE XIV — MOBILE FIRST, ACESSIBILIDADE, PERFORMANCE E QUALIDADE

# 88. Mobile first é obrigatório

Todo site, app, Radar, jornada e área autenticada deve ser pensado primeiro para:

- 360 px;
- 375 px;
- 430 px;

depois:

- 768 px;
- desktop.

---

# 89. Critérios mínimos mobile

- zero overflow;
- corpo legível;
- CTA tocável;
- formulário confortável;
- teclado não quebra fluxo;
- safe area respeitada;
- card não exige zoom;
- navegação simples;
- carregamento razoável em rede móvel.

---

# 90. Acessibilidade

- HTML semântico;
- labels;
- foco;
- contraste;
- navegação por teclado;
- alt text;
- redução de movimento quando aplicável;
- não depender de cor;
- mensagens de erro compreensíveis.

---

# 91. Performance

Preferir:

- HTML/CSS simples;
- imagens otimizadas;
- JS mínimo;
- lazy loading;
- cache;
- fontes controladas;
- evitar pacotes enormes.

Performance é parte da conversão.

---

# 92. Terceiros

Cada script externo aumenta:

- peso;
- privacidade;
- risco;
- falha.

Adicionar somente quando benefício for claro.

---

# 93. QA técnico

Antes de produção:

- build;
- links;
- CTA;
- mobile;
- console;
- tracking;
- canonical;
- OG;
- JSON-LD;
- consent;
- formulário;
- WhatsApp;
- performance;
- references antigas;
- secrets;
- deploy bundle.

---

# PARTE XV — ROADMAP TÉCNICO DE 90 DIAS

# 94. Próximos 7 dias

Prioridade técnica:

1. preservar produção estável;
2. não criar nova aplicação;
3. manter tracking funcionando;
4. não ativar mídia paga por impulso;
5. concluir revisão documental;
6. não integrar Sintonize ao código;
7. não criar CRM próprio;
8. produzir conteúdo;
9. concluir formação;
10. registrar certificação somente quando formal.

Gate:

> **estabilidade + documentação + nenhuma complexidade desnecessária.**

---

# 95. Após certificação

Antes de tecnologia nova:

1. registrar qualificação;
2. definir experiência humana;
3. realizar prática controlada;
4. aprender formulário;
5. aprender relatório;
6. medir tempo;
7. registrar dúvidas;
8. decidir o que merece software.

Não construir app Sintonize.

---

# 96. Dias 1–30 após retomada operacional

Se a oferta for ativada:

- CRM mínimo;
- forma de pagamento;
- formulário;
- registro de origem;
- delivery tracking;
- venda confirmada;
- relatório autoral;
- registro de reavaliação;
- dashboard simples.

Gate:

> **seguir um lead até venda e entrega com clareza.**

---

# 97. Dias 31–60

Somente se houver demanda:

- webhook;
- purchase confiável;
- conversão offline;
- base de leads;
- dashboard;
- automação de tarefas repetitivas;
- Radar, se provar função.

Gate:

> **dados suficientes para decisões e automação de processo já entendido.**

---

# 98. Dias 61–90

Se receita e uso justificarem:

- app autenticado;
- histórico;
- jornada;
- reavaliação digital;
- alertas;
- reconciliação;
- analytics de produto;
- continuidade.

Gate:

> **sofisticação apenas se aumentar valor ou eficiência comprovável.**

---

# 99. O que não construir nos 90 dias sem evidência

- app nativo;
- marketplace;
- engine Sintonize;
- banco de Anjos;
- banco de crenças da formação;
- IA espiritual proprietária;
- scoring de consciência;
- frequência digital;
- CRM completo próprio;
- microserviços;
- certificação digital;
- comunidade tecnológica complexa;
- painel administrativo grande.

---

# PARTE XVI — CRITÉRIOS DE GATE E DECISÃO

# 100. Gate de nova aplicação

Perguntar:

1. qual problema resolve?
2. quem usa?
3. quantas vezes?
4. por que página simples não resolve?
5. quais dados precisa?
6. qual risco cria?
7. qual custo mensal?
8. qual métrica melhora?
9. existe demanda?
10. depende de PI de terceiro?
11. pode ser manual primeiro?

Se respostas forem fracas:

> **não construir.**

---

# 101. Gate de automação

Perguntar:

- processo manual é estável?
- entradas são conhecidas?
- erros são conhecidos?
- rollback existe?
- auditoria existe?
- falha é detectável?
- pessoa continua entendendo o que está acontecendo?

---

# 102. Gate de IA

Perguntar:

- qual tarefa a IA executa?
- precisa de dados pessoais?
- precisa de material proprietário?
- resultado será revisado?
- pode inventar algo?
- usuário pode interpretar como leitura humana?
- existe alternativa mais simples?

---

# 103. Gate de tracking

Perguntar:

- qual decisão o evento ajuda?
- já existe evento equivalente?
- contém PII?
- respeita consentimento?
- representa ação observável?
- semântica está correta?

---

# 104. Gate de produção

Checklist mínimo:

- branch correta;
- working tree conhecido;
- testes;
- preview quando necessário;
- mobile;
- console;
- links;
- tracking;
- privacy;
- rollback;
- deploy único planejado;
- CURRENT atualizado.

---

# PARTE XVII — DECISÕES FECHADAS, ABERTAS E SÍNTESE CANÔNICA

# 105. Decisões fechadas

1. marca: **Portal Caminho da Consciência**;
2. domínio: `portalcaminhodaconsciencia.com.br`;
3. repo: `marvin-ds/portal-caminho-da-consciencia`;
4. pasta local: `C:\Projetos\portal-caminho-da-consciencia`;
5. branch de produção: `main`;
6. Netlify permanece camada institucional;
7. Vercel é preferencial para aplicações dinâmicas futuras;
8. Supabase é preferencial quando persistência/auth forem necessários;
9. GitHub é fonte de verdade do código;
10. Documento 06 — CURRENT é fonte do estado operacional;
11. mobile first é obrigatório;
12. GTM + GA4 + Consent Mode + Conversion Linker estão na arquitetura vigente;
13. `whatsapp_click` é conversão secundária;
14. Search pago está preparado e adiado;
15. não existe blocker canônico de ad blocker;
16. oferta atual: Mapeamento Padrão Interrompido — R$197;
17. fluxo público atual: página → WhatsApp;
18. plataforma de pagamento definitiva do Mapeamento não é presumida como integrada;
19. Radar não é Mesa digital;
20. Sintonize não será digitalizada;
21. materiais Sintonize não entram em repo público, app, banco, embeddings ou dataset;
22. 8 Prosperidades Sintonize não são taxonomia autoral do método;
23. Protocolos Sintonize não serão reproduzidos em software autoral;
24. Marcos não será classificado tecnicamente como terapeuta clínico;
25. IA não substitui entrega humana quando esta faz parte da oferta;
26. automação vem depois de compreensão;
27. deploys devem respeitar economia de créditos e um gate por vez;
28. documentação canônica não pertence ao bundle público do site;
29. nenhuma nova app é prioridade nos próximos dias;
30. prioridade imediata do projeto permanece conteúdo + conclusão da formação.

---

# 106. Decisões abertas

1. plataforma de pagamento operacional do Mapeamento;
2. CRM inicial;
3. política formal de retenção;
4. momento do Radar;
5. mapa autoral definitivo de domínios;
6. Vercel project structure futura;
7. monorepo vs repos separados para apps;
8. e-mail transacional;
9. storage de relatórios;
10. área autenticada;
11. Enhanced Conversions;
12. importação offline de venda;
13. momento de `purchase`;
14. arquitetura de Jornada;
15. arquitetura de comunidade;
16. admin interno;
17. PWA;
18. integração comercial Sintonize;
19. quanto da operação humana deverá ser apoiada por software;
20. política de backup proporcional ao volume.

---

# 107. Arquitetura em uma frase

> **Um ecossistema digital simples, rastreável, mobile first e progressivo, no qual tecnologia acompanha o Caminho da Consciência sem se tornar o próprio caminho e sem apropriar aquilo que pertence a terceiros.**

---

# 108. O que construímos primeiro

Aquilo que ajuda a pessoa a:

- chegar;
- entender;
- conversar;
- comprar;
- receber;
- praticar;
- reavaliar.

---

# 109. O que construímos depois

- histórico;
- automação;
- personalização;
- app;
- comunidade;
- escala.

Somente quando dados e uso justificarem.

---

# 110. O que nunca devemos perder

- pessoa antes do sistema;
- propósito antes da ferramenta;
- clareza antes da automação;
- segurança antes da velocidade;
- privacidade antes da curiosidade;
- autoria antes da conveniência;
- evidência antes da sofisticação;
- mobile antes do ornamento;
- voz humana antes da produção automática;
- responsabilidade antes da conversão.

---

# 111. Regra final de tecnologia

> **Não desenvolver porque podemos. Desenvolver quando sabemos qual problema estamos resolvendo, para quem, com qual legitimidade, usando quais dados, respeitando quais direitos e como saberemos se funcionou.**

---

# 112. Governança da versão

Esta V2.0 substitui integralmente a V1.0.

Atualizar este documento apenas quando houver mudança deliberada em:

- arquitetura;
- plataforma;
- política de dados;
- segurança;
- propriedade intelectual digital;
- stack;
- autenticação;
- analytics;
- pagamento;
- regras de IA;
- princípios de ambiente/deploy.

Mudanças correntes pertencem ao CURRENT:

- HEAD;
- branch;
- deploy;
- IDs;
- URLs temporárias;
- consumo de créditos;
- status de campanha;
- certificação;
- variável de ambiente;
- incidente;
- próximo gate.

Toda revisão canônica deve registrar:

- versão;
- data;
- motivo;
- impacto nos demais documentos;
- necessidade de migração técnica.

> **Fim do Documento 05 — Arquitetura Técnica, Dados e Ecossistema Digital — V2.0.**
