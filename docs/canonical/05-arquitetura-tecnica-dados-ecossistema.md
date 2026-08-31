# PORTAL CAMINHO DA CONSCIÊNCIA
## Arquitetura Técnica, Dados e Ecossistema Digital

**Documento Canônico V1.0 • 30/08/2026**

> “Tecnologia a serviço da transformação. Não o contrário.”

# 0. Função deste documento

Este é o documento canônico de arquitetura técnica do Portal Caminho da Consciência. Ele define como site, aplicações, dados, integrações, automações, pagamentos, analytics, autenticação e desenvolvimento assistido por inteligência artificial devem ser organizados para sustentar o negócio sem criar complexidade antes da demanda.

O documento não substitui especificações de implementação de cada aplicação. Ele estabelece princípios, fronteiras, nomes, responsabilidades, padrões mínimos e critérios de decisão que devem ser respeitados por humanos, ChatGPT, Claude Code, Codex e demais agentes de desenvolvimento.

## 0.1. Regra superior

> Tarefa primeiro. Evidência de demanda depois. Tecnologia somente quando melhora uma entrega, reduz risco, aumenta capacidade ou produz informação útil para decisão.

- Nenhum aplicativo deve existir apenas porque é tecnicamente possível construí-lo.
- Nenhuma automação deve ocultar da equipe o que está acontecendo com clientes, pagamentos ou dados.
- Nenhum agente de IA pode alterar propósito, posicionamento, claims, jornada ou arquitetura comercial sem decisão humana registrada.
- Dados pessoais devem ser coletados apenas quando houver finalidade clara, consentimento ou outra base legítima aplicável.
- Produção, preview e desenvolvimento devem permanecer separados.
- Segredos nunca devem ser versionados no GitHub.
- Toda integração crítica deve possuir caminho de verificação, idempotência quando aplicável e possibilidade de auditoria.
- A arquitetura deve permitir crescimento sem transformar Marcos em gargalo operacional.

## 0.2. Papel deste documento dentro do conjunto canônico

| Documento | Responsabilidade |
| --- | --- |
| 01 — Fundacional e Estratégico | Define propósito, identidade estratégica, método, negócio e metas. |
| 02 — Jornada, Produtos, Serviços e Protocolos | Define o que a pessoa recebe e como progride no ecossistema. |
| 03 — Sistema Editorial, Aquisição e Experimentação | Define comunicação, aquisição, testes e métricas editoriais/comerciais. |
| 04 — Identidade, Voz, Espiritualidade e Comunicação | Define como Portal e Marcos devem parecer, soar e comunicar com responsabilidade. |
| 05 — Arquitetura Técnica, Dados e Ecossistema Digital | Define a infraestrutura técnica, dados, integrações e regras de desenvolvimento. |
| 06 — CURRENT, Decisões e Plano Operacional Vivo | Registra estado real, links, branches, bloqueios, métricas e próximos gates. |

# PARTE I — PRINCÍPIOS DE ARQUITETURA

## 1. Arquitetura orientada ao negócio

O Portal Caminho da Consciência não será organizado como uma coleção de sites e aplicativos independentes. A arquitetura deve refletir uma única jornada de cliente e uma única inteligência de negócio, mesmo quando diferentes produtos utilizarem tecnologias ou domínios distintos.

> Conteúdo → captura de intenção → clareza inicial → mapeamento → intervenção/prática → reavaliação → continuidade.

Cada componente técnico deve responder a pelo menos uma dessas etapas.

## 1.1. Princípios de simplicidade

- usar páginas estáticas quando páginas estáticas resolvem;
- usar aplicação quando estado, autenticação, dados ou personalização justificarem;
- usar banco de dados apenas para informação que precisa persistir, ser consultada ou auditada;
- usar fila/cron apenas quando existir tarefa assíncrona real;
- usar CRM de forma mínima antes de criar um CRM próprio;
- evitar microserviços enquanto um monólito modular ou poucas aplicações independentes forem suficientes;
- não duplicar cadastros, leads, clientes e eventos em sistemas sem chave de reconciliação.

## 1.2. Separação por responsabilidade

| Camada | Função principal | Tecnologia preferencial inicial |
| --- | --- | --- |
| Presença pública | site, páginas, blog, SEO, conteúdo institucional | Netlify ou equivalente |
| Aplicações interativas | Radar, jornadas, áreas autenticadas, experiências dinâmicas | Vercel + framework web |
| Dados e autenticação | usuários, sessões, respostas, compras, entitlement, histórico | Supabase ou equivalente |
| Pagamentos | checkout, confirmação de compra, reembolso | Eduzz/Nutror ou plataforma vigente |
| Relacionamento | e-mail, WhatsApp, CRM e segmentação | serviços especializados + banco canônico |
| Analytics | eventos, aquisição, produto e receita | analytics web + eventos próprios |
| Código e documentação técnica | versionamento, PRs, histórico | GitHub |
| IA de desenvolvimento | análise, geração, revisão e automação assistida | Claude Code, Codex, ChatGPT com supervisão humana |

## 2. Fonte de verdade

Cada tipo de informação deve possuir uma fonte principal de verdade. Duplicações podem existir por conveniência operacional, mas nunca sem saber qual sistema prevalece quando há divergência.

| Informação | Fonte canônica |
| --- | --- |
| Código | GitHub |
| Estado operacional atual | Documento 06 — CURRENT |
| Identidade e claims | Documentos 01 e 04 |
| Arquitetura de produto | Documento 02 |
| Usuário autenticado e dados de produto | Supabase/banco de produção |
| Compra aprovada/reembolsada | plataforma de pagamento + cópia reconciliada no banco |
| Eventos de produto | pipeline de analytics/eventos |
| Conteúdo editorial publicado | canal/plataforma + registro operacional quando necessário |
| Segredos | gestores de variáveis das plataformas; nunca Git |

---

# PARTE II — REPOSITÓRIOS, GIT E AMBIENTES

## 3. Repositório principal do Portal

O repositório institucional principal passa a adotar a nova identidade do projeto.

| Elemento | Padrão canônico |
| --- | --- |
| Repositório GitHub | marvin-ds/portal-caminho-da-consciencia |
| Pasta local Windows | C:\Projetos\portal-caminho-da-consciencia |
| Branch de produção | main |
| Branches de mudança | feat/*, fix/*, refactor/*, docs/* |
| Deploy institucional | Netlify |
| Nome público | Portal Caminho da Consciência |

O histórico Git deve ser preservado. Mudança de nome de marca não é motivo para recriar repositório ou apagar histórico.

## 3.1. Padrão de branches

- feat/<tema> — nova funcionalidade;
- fix/<tema> — correção;
- refactor/<tema> — reestruturação sem mudança comercial intencional;
- docs/<tema> — documentação versionada;
- chore/<tema> — manutenção técnica;
- hotfix/<tema> — correção emergencial de produção.

Mudanças estratégicas ou de identidade devem ser realizadas em branch dedicada, com preview antes de merge em main.

## 3.2. Commits

Preferir commits pequenos, explicáveis e reversíveis. Cada commit deve responder: o que mudou, por que mudou e qual parte do sistema foi afetada.

> feat(radar): persist result snapshot
> fix(auth): prevent open redirect after magic link
> refactor(brand): migrate public identity to Portal Caminho da Consciência

## 3.3. Arquivos locais de agentes

Diretórios e arquivos criados localmente por Claude Code, Codex ou outros agentes devem ser avaliados antes de serem versionados. Não executar git add . de forma indiscriminada quando houver .claude, .agents, skills-lock.json, caches ou artefatos semelhantes não classificados.

## 4. Ambientes

| Ambiente | Objetivo | Regra |
| --- | --- | --- |
| Local | desenvolvimento e testes rápidos | pode usar dados fictícios/seed; nunca dados reais desnecessários |
| Preview | validação integrada antes de produção | URL própria; variáveis separadas; nunca assumir que preview = produção |
| Production | clientes reais e dados reais | mudanças apenas após gate e verificação |

## 4.1. Gate mínimo de produção

- working tree conhecido e revisado;
- branch correta;
- build passa;
- lint passa quando existente;
- testes relevantes passam;
- preview validado;
- variáveis verificadas;
- links e CTAs testados;
- analytics crítico verificado;
- rollback compreendido;
- CURRENT atualizado quando a mudança for relevante.

---

# PARTE III — NETLIFY, VERCEL, DOMÍNIOS E DNS

## 5. Netlify — camada institucional

Netlify é a camada preferencial para o site institucional, páginas públicas e conteúdos que não exigem aplicação autenticada complexa. O projeto deve ser renomeado para a nova marca sem recriação desnecessária do site, preservando histórico de deploy e configurações.

| Item | Diretriz |
| --- | --- |
| Project name | portal-caminho-da-consciencia |
| Production branch | main |
| Deploy previews | habilitados para branches/PRs quando possível |
| Build | definido pelo repositório; sem comandos manuais secretos |
| Variáveis | configuradas no painel/CLI seguro, nunca no Git |
| Domínio | domínio novo a ser definido e configurado; domínio antigo pode servir como redirect durante migração |

## 5.1. Migração de domínio

A troca de marca não exige desligamento imediato de ativos antigos. Quando o domínio principal novo for definido, o domínio anterior deve permanecer, quando tecnicamente e economicamente adequado, como ativo de redirecionamento e proteção de marca.

1. Definir e registrar o novo domínio principal.
2. Configurar DNS e certificado.
3. Atualizar canonical, sitemap, robots, metadata e schema.
4. Criar redirecionamentos permanentes das URLs antigas equivalentes.
5. Atualizar Google Search Console e ferramentas de analytics.
6. Manter monitoramento de 404 e tráfego residual.
7. Somente descontinuar ativos antigos quando não houver valor de proteção, SEO ou navegação.

## 6. Vercel — aplicações interativas

Vercel deve hospedar aplicações que realmente se beneficiem de framework full-stack, rotas de API, autenticação, server functions e integração estreita com Supabase.

- Radar/Mapa da Repetição, se transformado em aplicação dinâmica;
- área autenticada de jornadas/protocolos digitais;
- painel de histórico/reavaliação;
- APIs públicas controladas;
- webhooks quando tecnicamente apropriado e protegidos.

Não mover o site institucional para Vercel apenas por uniformidade tecnológica. A decisão deve considerar custo de migração, necessidade real e manutenção.

## 7. Domínios e subdomínios

A arquitetura de domínios deve ser simples e legível. Um único domínio principal deve concentrar autoridade de marca sempre que possível.

| Uso | Exemplo de padrão |
| --- | --- |
| Institucional | dominio-principal.com.br |
| Aplicação autenticada | app.dominio-principal.com.br |
| Radar | radar.dominio-principal.com.br ou /radar |
| Jornadas | app.dominio-principal.com.br/jornadas/... |
| Links de campanha | preferir URLs do domínio principal com UTMs |
| Domínio antigo | redirect para correspondente novo |

Os exemplos acima não definem o domínio definitivo; a decisão de domínio deve ser registrada no CURRENT.

---

# PARTE IV — ECOSSISTEMA DE APLICAÇÕES

## 8. Regra de produto digital

Cada aplicação deve existir porque uma etapa da jornada do cliente exige persistência, personalização, histórico, automação ou interação que uma página simples não entrega bem.

## 9. Radar / Mapa da Repetição

O Radar é o principal candidato a instrumento digital gratuito de clareza inicial. Sua função não é diagnosticar nem medir energia. Ele organiza respostas fornecidas pela própria pessoa e devolve um mapa observacional que ajuda a perceber padrões e áreas de concentração.

## 9.1. Arquitetura funcional mínima

- landing/convite;
- início do Radar;
- perguntas objetivas e abertas;
- cálculo/classificação transparente baseado nas respostas;
- resultado com linguagem de auto-observação;
- captura de e-mail somente quando houver finalidade clara;
- snapshot histórico quando a pessoa optar por manter acompanhamento;
- CTA coerente para próxima etapa: conteúdo, Mapeamento ou prática.

## 9.2. Eventos mínimos do Radar

- radar_view
- radar_cta_click
- radar_start
- radar_question_progress
- radar_complete
- radar_result_view
- radar_next_step_click

Nomes finais podem mudar, mas o funil deve permitir medir abandono, conclusão e intenção após resultado.

## 10. Mapeamento Padrão Interrompido

No início, o Mapeamento pode permanecer operacionalmente humano e assíncrono. Não transformar a leitura/mapeamento em software antes de entender quais dados, perguntas, relatórios e entregáveis realmente produzem valor.

O sistema deve evoluir progressivamente para apoiar coleta, organização, geração assistida de relatório, entrega, histórico e reavaliação, sem automatizar a interpretação humana antes de ela estar suficientemente estruturada.

## 11. Protocolos digitais e jornadas

Protocolos e jornadas podem ganhar camada digital para melhorar aderência e continuidade. A aplicação deve registrar prática e progressão apenas na medida necessária para a experiência.

- conteúdo do dia/etapa;
- instrução da prática;
- check-in simples;
- registro opcional de percepção;
- continuidade/progresso;
- reavaliação ao final;
- próximo passo sugerido de forma não coercitiva.

## 11.1. Não transformar espiritualidade em score

O sistema não deve produzir notas de “evolução espiritual”, “nível de consciência”, “frequência” ou outras métricas apresentadas como objetivas. Quando houver escala, ela deve medir apenas autoavaliação declarada e deixar isso explícito.

## 12. Área do cliente

Uma área autenticada só deve ser criada quando houver mais de um motivo concreto para a pessoa retornar: histórico, jornada ativa, materiais comprados, reavaliação, comunidade ou continuidade. Login sem valor recorrente é complexidade inútil.

---

# PARTE V — DADOS, SUPABASE E MODELAGEM

## 13. Supabase como base inicial

Supabase é a plataforma preferencial inicial para banco PostgreSQL, autenticação e recursos associados quando aplicações do Portal exigirem persistência estruturada. A escolha pode ser revista no futuro, mas não deve ser trocada sem problema concreto.

## 13.1. Princípios de modelagem

- chaves estáveis e timestamps;
- uso de enums apenas quando domínio for realmente controlado;
- separar pessoa/usuário, compra, entitlement, jornada e eventos;
- não armazenar JSON genérico quando dados importantes precisam de consulta/validação;
- usar JSONB quando a flexibilidade for deliberada e documentada;
- auditar transições críticas como pagamento e entitlement;
- evitar apagar histórico que seja necessário para reconciliação, suporte ou segurança.

## 13.2. Domínios de dados sugeridos

| Domínio | Exemplos de entidades |
| --- | --- |
| Identidade | profiles, identities, consents |
| Aquisição | leads, lead_sources, campaign_attribution |
| Radar | radar_sessions, radar_answers, radar_results, radar_snapshots |
| Comercial | orders, order_events, refunds, entitlements |
| Produtos | products, offers, product_versions |
| Jornadas | journeys, enrollments, steps, checkins |
| Mapeamento | mapping_requests, mapping_inputs, mapping_deliveries, reassessments |
| Comunicação | email_dispatches, notification_preferences |
| Operação | audit_events, webhook_receipts, jobs |

Os nomes são uma arquitetura de referência, não migrations autorizadas. Cada schema deve ser criado apenas quando o produto correspondente estiver aprovado.

## 13.3. Row Level Security

RLS deve ser ativada em tabelas expostas por APIs do Supabase. O padrão é negar por padrão e liberar apenas operações necessárias.

- usuário lê apenas seus próprios dados;
- usuário não altera compra ou entitlement;
- webhooks usam credenciais de servidor;
- anon não acessa dados pessoais;
- relatórios públicos exigem token próprio, expiração e minimização de dados;
- ações administrativas ficam fora do cliente/browser.

## 13.4. Migrações

Toda alteração de schema deve ser versionada em migrations. Não fazer alterações manuais permanentes em produção que não existam no código.

---

# PARTE VI — AUTENTICAÇÃO, AUTORIZAÇÃO E SEGURANÇA

## 14. Autenticação

A experiência deve reduzir fricção. Magic link por e-mail é uma opção preferencial quando adequado, evitando exigir senha quando não houver benefício claro.

## 14.1. Fluxo de acesso

> Compra/convite → entitlement → magic link ou sessão → claim idempotente → onboarding → produto adquirido.

O fluxo deve impedir open redirect, reaproveitamento indevido de tokens e concessão de acesso sem confirmação da origem autorizada.

## 15. Autorização

Autenticação responde “quem é a pessoa”. Autorização responde “o que ela pode acessar”. Não usar apenas existência de login como autorização para produtos pagos.

- entitlement por produto/oferta;
- estados de acesso claros: active, refunded/revoked, expired quando aplicável;
- claim idempotente;
- checagem server-side para recursos protegidos;
- logs de concessão/revogação relevantes.

## 16. Segredos e variáveis

- nunca commitar API keys, service role keys, webhook secrets, SMTP passwords, tokens ou credenciais;
- usar .env.local ignorado no desenvolvimento;
- usar variáveis protegidas em Netlify/Vercel/Supabase;
- rotacionar segredo imediatamente quando houver suspeita de exposição;
- não colar segredos em prompts de IA quando não forem necessários.

## 17. LGPD e minimização

O Portal deve coletar o mínimo necessário para a finalidade informada. Respostas de auto-observação, espiritualidade, hábitos e relatos pessoais podem ser percebidos como íntimos mesmo quando não forem dados sensíveis por definição legal específica; portanto merecem cuidado elevado.

- informar finalidade;
- evitar campos “conte sua vida” sem necessidade;
- limitar acesso interno;
- definir retenção;
- permitir correção/exclusão quando aplicável;
- não usar respostas individuais em publicidade sem consentimento explícito;
- não enviar dados pessoais desnecessários para modelos de IA.

---

# PARTE VII — CRM, LEADS E RELACIONAMENTO

## 18. CRM mínimo viável

Nos primeiros ciclos, o Portal não precisa construir CRM próprio. Deve haver apenas uma visão confiável do caminho do lead até a compra e continuidade.

| Campo mínimo | Exemplo |
| --- | --- |
| Identificação | nome/e-mail/WhatsApp quando fornecido |
| Origem | YouTube, Google Search, Instagram, direto, indicação |
| Campanha | UTM source/medium/campaign/content/term |
| Interesse | Radar, Mapeamento, protocolo, jornada, comunidade |
| Estágio | lead, conversa, checkout, comprador, reembolso, continuidade |
| Consentimentos | e-mail/WhatsApp e registro temporal quando necessário |
| Última ação relevante | Radar concluído, conversa, compra, reavaliação |

## 18.1. Regra de identidade

Sempre que possível, usar e-mail normalizado ou identificador interno como chave de reconciliação entre sistemas. Telefone e parâmetros de campanha não devem ser usados isoladamente como identidade principal.

## 19. E-mail e WhatsApp

Comunicação deve ser útil, consentida e compatível com a etapa da jornada. O objetivo não é criar uma máquina de mensagens, e sim continuidade.

- resultado/entrega solicitada;
- instruções de acesso;
- lembretes de prática quando opt-in;
- reavaliação;
- conteúdo relacionado ao interesse declarado;
- oferta do próximo passo quando coerente.

---

# PARTE VIII — ANALYTICS, ATRIBUIÇÃO E MÉTRICAS

## 20. Princípio de analytics

> Medir comportamento que ajuda a decidir. Não instrumentar eventos apenas porque uma ferramenta permite.

## 20.1. Camadas de eventos

| Camada | Exemplos |
| --- | --- |
| Aquisição | page_view, content_view, cta_click, lead_submit |
| Radar | start, complete, result_view, next_step_click |
| Comercial | checkout_start, purchase, refund |
| Acesso | access_granted, claim_complete, onboarding_complete |
| Produto | step_view, checkin_complete, journey_complete |
| Retenção | d3_active, d7_active, d14_active, reassessment_complete |
| Receita/LTV | upsell_purchase, recurrence_started, recurrence_cancelled |

## 20.2. Convenção de evento

- nomes em snake_case;
- um evento representa uma ação observável;
- parâmetros descrevem contexto, não duplicam novos eventos desnecessariamente;
- IDs pessoais não devem ser enviados como texto aberto para plataformas publicitárias;
- valores financeiros devem ter moeda e valor definidos;
- purchase deve vir de confirmação confiável, não apenas da página de obrigado.

## 20.3. Atribuição

Preservar UTMs, gclid e identificadores equivalentes quando tecnicamente permitidos e necessários. A atribuição deve sobreviver ao clique até compra sempre que possível, mas nunca justificar coleta excessiva.

## 21. Painel de gestão

O painel mínimo deve responder semanalmente:

- quantas pessoas chegaram por canal;
- quantas demonstraram intenção;
- quantas compraram;
- quanto custou adquirir cada compra quando houver mídia;
- qual produto converte e retém;
- onde há abandono;
- qual é a receita, margem e reembolso;
- qual etapa exige mais horas humanas.

---

# PARTE IX — PAGAMENTOS, WEBHOOKS E ENTITLEMENT

## 22. Plataforma de pagamentos

Eduzz/Nutror pode permanecer como stack comercial inicial enquanto atender checkout, pagamento, produto e acesso com confiabilidade. Mudança de plataforma só deve ocorrer por problema real de conversão, custo, operação ou integração.

## 23. Webhooks

Webhooks são entrada de confiança controlada e devem ser tratados como sistema crítico.

- validar assinatura/HMAC quando disponível;
- usar raw body quando o algoritmo exigir;
- registrar receipt com idempotency key/event id;
- aceitar reenvio sem duplicar compra/acesso;
- mapear estados aprovados, cancelados, reembolsados e chargebacks;
- responder rapidamente e processar tarefas pesadas de forma assíncrona quando necessário;
- não confiar em dados enviados pelo navegador para conceder acesso pago.

## 24. Pedido e entitlement

Pedido e direito de acesso são conceitos diferentes. O banco deve conseguir responder: o que foi comprado, qual evento aprovou, qual acesso foi concedido e por que ele continua ou deixou de estar válido.

## 24.1. Reconciliação

Deve existir rotina manual ou automática capaz de comparar compras na plataforma com orders/entitlements locais e corrigir divergências documentadas.

---

# PARTE X — AUTOMAÇÕES, NOTIFICAÇÕES E IA OPERACIONAL

## 25. Regra de automação

Automatizar apenas uma tarefa já compreendida. O processo deve funcionar manualmente antes de ser ocultado por uma automação complexa.

## 25.1. Bons candidatos

- e-mail de resultado do Radar;
- magic link e acesso após compra;
- lembretes opt-in de jornada;
- reavaliação ao final de um ciclo;
- etiquetagem de origem/campanha;
- alerta de webhook falho;
- relatórios internos periódicos;
- sincronização controlada de CRM.

## 25.2. Maus candidatos iniciais

- interpretação espiritual autônoma sem supervisão;
- produção automática de mapeamento individual definitivo;
- mensagens comerciais em massa sem contexto;
- automação que concede/revoga acesso sem trilha de auditoria;
- agentes com permissão ampla de alteração de produção sem aprovação.

## 26. Notificações

Notificação é parte do produto apenas quando ajuda a pessoa a concluir algo que ela escolheu fazer. E-mail é o canal padrão inicial; push e WhatsApp só devem ser adicionados quando houver benefício e consentimento claros.

## 27. IA em atendimento e entrega

IA pode apoiar organização, síntese, personalização de linguagem, geração de rascunhos e QA. Ela não deve fingir ser Marcos nem apresentar interpretação espiritual automatizada como leitura humana realizada.

---

# PARTE XI — DESENVOLVIMENTO COM CLAUDE CODE, CODEX E CHATGPT

## 28. Hierarquia de autoridade

1. Documentos canônicos e decisões humanas fechadas.
2. Estado real do repositório e produção.
3. Especificação/gate da tarefa atual.
4. Testes, logs e evidências.
5. Sugestões dos agentes.

Quando uma sugestão de IA conflitar com uma decisão canônica, a IA deve apontar o conflito e não sobrescrever silenciosamente a decisão.

## 29. Modelo de trabalho por Gate

> Inspecionar → propor → executar em branch → testar → mostrar evidência → preview → aprovar → merge → deploy → validar → registrar.

## 29.1. Prompt mínimo para agentes

- contexto e objetivo;
- arquivos/documentos canônicos relevantes;
- escopo permitido;
- arquivos/áreas proibidas;
- critérios de aceitação;
- testes obrigatórios;
- regras de segurança;
- formato do relatório final;
- proibição de assumir sucesso sem evidência.

## 29.2. Regras destrutivas

- não force-push em branch compartilhada sem autorização explícita;
- não reset --hard para resolver divergência sem diagnóstico;
- não apagar banco, projeto, domínio ou deploy como “limpeza”;
- não executar migrations destrutivas sem backup/plano de rollback;
- não substituir arquivos em massa sem inventário;
- não renomear IDs internos estáveis por estética;
- não modificar produção diretamente quando preview é possível.

## 29.3. Claude Code e Codex

Claude Code e Codex podem atuar como pares de implementação e auditoria. Para mudanças críticas, é desejável que um implemente e outro revise, desde que a duplicação não aumente complexidade sem benefício.

| Papel | Exemplo |
| --- | --- |
| Agente implementador | faz inventário, altera código e executa testes |
| Agente revisor | procura regressões, segurança, references antigas e divergências |
| Humano | aprova decisões, escopo, claims, mudança de produção e trade-offs |

## 30. PowerShell como console operacional

No ambiente Windows local, PowerShell é o console operacional preferencial. Comandos devem ser fornecidos em blocos pequenos, executados um por vez quando houver risco, e sempre com confirmação de diretório/repositório antes de operações Git relevantes.

> Get-Location
> git status -sb
> git remote -v
> git branch --show-current

---

# PARTE XII — OBSERVABILIDADE, BACKUP E RECUPERAÇÃO

## 31. Logs

Logs devem tornar falhas investigáveis sem expor dados pessoais ou segredos.

- webhook recebido/aceito/rejeitado;
- falha de entrega de e-mail;
- falha em job/cron;
- erro de autenticação relevante;
- erro de API;
- falha de concessão de entitlement;
- correlation/request id quando útil.

## 32. Alertas

Alertas devem existir para eventos que exigem ação, não para cada erro transitório. Prioridades iniciais: produção indisponível, webhook de pagamento falhando, taxa anormal de erro e falha repetida de e-mail/acesso.

## 33. Backup

- usar backups oferecidos pelo provedor quando disponíveis;
- exportar dados críticos periodicamente de acordo com volume e risco;
- guardar migrations e schema no Git;
- documentar restauração;
- não considerar backup válido sem saber como restaurá-lo.

## 34. Continuidade

O ecossistema deve tolerar falhas parciais. Se analytics cair, compra não pode parar. Se CRM falhar, entitlement não pode depender dele. Se um e-mail não for entregue, deve haver forma de reenviar o acesso.

---

# PARTE XIII — ROADMAP TÉCNICO DE 90 DIAS

## 35. Dias 1–30 — Fundação e migração controlada

- finalizar rename de repositório, pasta local e projeto Netlify;
- auditar referências à marca antiga no código;
- fechar domínio principal novo ou registrar explicitamente que permanece pendente;
- preservar redirects e ativos antigos necessários;
- documentar stack real no README e CURRENT;
- instrumentar eventos mínimos do site/oferta;
- garantir captura de UTMs nos principais CTAs;
- evitar novo app antes de validar oferta inicial;
- padronizar fluxo Git/Preview/Production;
- classificar arquivos locais .claude/.agents/skills antes de versionar.

## Gate 35

A identidade técnica deve estar coerente, produção estável e nenhuma mudança de marca pode ter apagado histórico, configurações ou rastreabilidade.

## 36. Dias 31–60 — Dados comerciais e MVP de instrumentação

- estruturar modelo mínimo de leads/compras/atribuição;
- integrar checkout/webhook se a oferta estiver vendendo;
- criar entitlement apenas quando produto digital exigir acesso;
- consolidar dashboard de aquisição e vendas;
- criar MVP do Radar somente se conteúdo/oferta indicarem demanda;
- definir política de consentimento e retenção para dados do Radar;
- automatizar entrega repetitiva já validada.

## Gate 36

Deve ser possível seguir um cliente de origem até compra e entrega sem depender de reconstrução manual caótica.

## 37. Dias 61–90 — Produto, continuidade e escala inicial

- evoluir Radar se ele provar valor de aquisição/qualificação;
- implementar reavaliação e histórico onde houver uso real;
- criar área autenticada somente se houver valor recorrente;
- automatizar journeys/protocolos que já tenham processo claro;
- criar rotinas de reconciliação e alertas;
- medir CAC, conversão, ativação, retenção e horas humanas;
- priorizar correções de funil antes de novas features.

## Gate 37

A arquitetura só avança para maior sofisticação se houver receita, uso e aprendizado que justifiquem o custo de manter essa sofisticação.

---

# PARTE XIV — DECISÕES ABERTAS E HIPÓTESES

## 38. Decisões ainda não fechadas

1. Domínio principal definitivo da nova marca e estratégia completa de redirecionamento.
2. Forma final de hospedagem do site institucional após a migração de marca: manter Netlify ou revisar apenas se houver motivo técnico.
3. Momento exato de desenvolvimento do novo Radar/MVP dentro do ecossistema Portal Caminho da Consciência.
4. Se aplicações futuras ficarão no mesmo repositório, em monorepo ou em repositórios separados.
5. CRM/automação externa a adotar quando o volume justificar.
6. Plataforma de e-mail transacional definitiva.
7. Política formal de retenção/exclusão de dados pessoais.
8. Arquitetura de comunidade e identidade do usuário entre comunidade e apps.
9. Necessidade futura de PWA/app móvel.
10. Necessidade e momento de camada administrativa própria.

## 38.1. Decisões fechadas

- A marca principal é Portal Caminho da Consciência.
- O repositório institucional adota portal-caminho-da-consciencia.
- O histórico Git deve ser preservado.
- Netlify continua como infraestrutura institucional inicial enquanto não houver razão concreta para mudança.
- Vercel é preferencial para aplicações dinâmicas quando necessário.
- Supabase é a base inicial preferencial para autenticação e dados estruturados de aplicações.
- GitHub é a fonte de verdade do código.
- Claude Code, Codex e ChatGPT são ferramentas de desenvolvimento sob governança humana.
- IA não substitui decisão estratégica, legitimidade espiritual ou entrega humana quando esta fizer parte da oferta.
- Venda e demanda vêm antes de plataforma complexa.

---

# PARTE XV — SÍNTESE CANÔNICA

## 39. Arquitetura em uma frase

> Um ecossistema digital simples, rastreável e progressivo, no qual tecnologia acompanha o Caminho da Consciência sem se tornar o próprio caminho.

## 39.1. O que construímos primeiro

Aquilo que ajuda a pessoa a reconhecer, avançar, comprar, receber e continuar com clareza.

## 39.2. O que construímos depois

Automação, personalização, histórico, comunidade e escala — somente quando a experiência e a demanda mostrarem que são necessárias.

## 39.3. O que nunca devemos perder

- a pessoa antes do sistema;
- o propósito antes da ferramenta;
- a clareza antes da automação;
- a segurança antes da velocidade;
- a rastreabilidade antes da conveniência;
- a privacidade antes da curiosidade por dados;
- a evidência real antes da sofisticação;
- a voz humana antes da produção automática.

## 40. Regra final para tecnologia

> Não desenvolver porque podemos. Desenvolver quando sabemos qual problema estamos resolvendo, para quem, com qual evidência e como saberemos se funcionou.

## 40.1. Governança

Este documento deve ser alterado quando houver mudança deliberada de arquitetura, plataforma, segurança, fonte de verdade, política de dados ou regra de desenvolvimento. Mudanças operacionais de URLs, branches, deploys, variáveis e estado corrente pertencem ao Documento 06 — CURRENT.

Toda alteração canônica deve registrar versão, data, decisão que motivou a mudança e impacto nos demais documentos.

Fim do Documento 05 — Arquitetura Técnica, Dados e Ecossistema Digital.
