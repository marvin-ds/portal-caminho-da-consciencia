# PORTAL CAMINHO DA CONSCIÊNCIA

## SPEC-MEU-CAMINHO-001 — ÁREA PESSOAL DE CONTINUIDADE “MEU CAMINHO”

### Arquitetura Funcional, Privacidade, Auditoria, Integração e Plano de Execução

| Campo | Informação |
|---|---|
| **Código** | `SPEC-MEU-CAMINHO-001` |
| **Tipo** | Especificação de Sistema / Infraestrutura de Jornada |
| **Versão** | `2.0.0` |
| **Data** | `14/09/2026` |
| **Status** | **APROVADO** |
| **Projeto** | Portal Caminho da Consciência |
| **Sistema** | Meu Caminho |
| **Autoridade de aprovação** | Marcos Vinicius |
| **Precedência** | Subordinada aos `CANON-00` a `CANON-07` |
| **Origem** | Refundação e reincorporação controlada da Plataforma da Jornada anteriormente planejada |
| **Referência histórica principal** | Especificação Transversal — Plataforma da Jornada “Meu Caminho” — V1.1, de 05/09/2026 |
| **Substituição** | Com a aprovação desta SPEC, a V1.1 anterior passa a permanecer somente como **HISTÓRICA / REFERÊNCIA** |
| **Primeira ação obrigatória** | Auditoria técnica do estado real da implementação por Claude Code |
| **Implementação** | Trabalho cooperativo e alternável entre Claude Code e Codex |

---

# 0. REGRA DE LEITURA DESTA SPEC

Esta SPEC deve ser executada como:

> **AUDITAR → COMPARAR → PRESERVAR → CORRIGIR → COMPLETAR → TESTAR → SINCRONIZAR → INTEGRAR → VALIDAR → PRODUÇÃO**

Ela não autoriza reconstrução automática da plataforma.

Ela também não autoriza continuar cegamente a implementação anterior.

O princípio é:

> **preservar tudo aquilo que continua correto, seguro e coerente; alterar somente aquilo que o novo projeto exige ou que a auditoria demonstrar estar incompleto, incorreto ou desatualizado.**

---

# 1. EVOLUÇÃO DO PROJETO

## 1.1. Fase anterior

Antes da refundação atual do Portal Caminho da Consciência, foi desenvolvida uma arquitetura técnica para uma Plataforma da Jornada denominada **Meu Caminho**.

Essa arquitetura definiu e iniciou componentes importantes, incluindo:

- repositório próprio para a aplicação;
- aplicação Next.js;
- MakerKit Lite como fundação;
- Turborepo;
- Vercel Preview;
- Supabase;
- autenticação passwordless por Magic Link;
- identidade;
- contatos;
- identity linking;
- identity claiming;
- consentimentos;
- RLS;
- regras de ownership;
- Commerce;
- webhooks;
- integração inicial com checkout externo;
- entitlements;
- separação entre compra, pagamento, acesso e participação;
- princípios para storage privado;
- princípios para entrega privada;
- princípios de analytics seguro.

Parte relevante dessa fundação já foi implementada e testada.

---

## 1.2. Refundação do Portal

Posteriormente, o projeto passou por uma refundação estrutural.

Foram criados novos documentos canônicos que redefiniram e organizaram:

- governança;
- identidade;
- Método Padrão Interrompido;
- público;
- comunicação;
- Jornada do Portal;
- produtos e ecossistema;
- ética;
- segurança;
- operação;
- produção;
- validação;
- controle de qualidade.

Com isso, documentos técnicos anteriores deixaram de possuir autoridade automática.

Eles passaram a ser:

> **REFERÊNCIA HISTÓRICA até análise e reincorporação.**

---

## 1.3. Reavaliação do Meu Caminho

A reavaliação concluiu que o conceito central do Meu Caminho é fortemente compatível com o novo projeto.

O novo Portal continua necessitando de uma camada pessoal capaz de organizar:

- experiências;
- acessos;
- materiais;
- entregas;
- continuidade;
- retomada;
- histórico;
- estados operacionais;
- integração.

Portanto, não existe justificativa para eliminar o Meu Caminho.

Também não existe justificativa para reconstruir automaticamente sua fundação técnica.

---

## 1.4. Decisões já aprovadas na nova fase

Foram explicitamente aprovadas as seguintes decisões:

### DECISÃO 1 — REINCORPORAÇÃO DA BASE EXISTENTE

> **A base técnica existente será reincorporada ao novo projeto.**

Não será realizada reconstrução do zero sem evidência técnica concreta que justifique tal decisão.

---

### DECISÃO 2 — REAPROVAÇÃO DA ARQUITETURA TÉCNICA

Permanece a arquitetura geral:

```text
PORTAL PÚBLICO
Netlify
portal institucional
        │
        │
        ▼
PLATAFORMA / MEU CAMINHO
Vercel
aplicação autenticada
        │
        │
        ▼
BACKEND / DADOS
Supabase
```

A arquitetura continua baseada em:

> **1 Portal público + 1 Plataforma da Jornada + infraestrutura compartilhada sem misturar significado entre produtos e experiências.**

---

### DECISÃO 3 — ARQUITETURA FUNCIONAL V1

Meu Caminho terá quatro áreas funcionais principais:

```text
MEU CAMINHO
├── Meu Caminho
├── Experiências
├── Entregas
└── Conta
```

Não existirá na V1 uma área global independente denominada **Meus Registros**.

Registros pessoais permanecerão prioritariamente contextualizados dentro das experiências que os originaram.

Privacidade e Dados ficarão dentro da área **Conta**.

---

### DECISÃO 4 — PRIVACIDADE E DADOS

Meu Caminho funcionará como:

> **camada de agregação, organização e acesso**

e não como:

> **repositório genérico que copia todo o conteúdo pessoal existente no ecossistema.**

Conteúdo íntimo permanece no domínio da experiência que o originou.

Meu Caminho pode conhecer estados e referências necessários para organizar a jornada sem precisar conhecer o conteúdo íntimo correspondente.

---

### DECISÃO 5 — PRIMEIRA EXPERIÊNCIA DE INTEGRAÇÃO

Existe uma experiência gratuita anteriormente planejada que será reavaliada.

Seu status nesta SPEC é:

> **EM ANÁLISE — CANDIDATA PRIORITÁRIA À PRIMEIRA INTEGRAÇÃO**

Nenhuma implementação específica dessa experiência deve ser assumida como vigente antes de sua reanálise.

---

# 2. DEFINIÇÃO OFICIAL DO MEU CAMINHO

> **Meu Caminho é a infraestrutura pessoal de continuidade do Portal Caminho da Consciência. É o espaço onde cada pessoa acessa e acompanha aquilo que efetivamente faz parte da sua própria jornada: experiências, práticas, produtos, materiais, entregas, estados, histórico e possibilidades legítimas de continuidade.**
>
> **Sua função é facilitar acesso, organização, retomada, integração e continuidade, sem transformar a trajetória da pessoa em uma sequência obrigatória de consumo.**

---

# 3. O QUE O MEU CAMINHO É

Meu Caminho é:

- área pessoal autenticada;
- infraestrutura de jornada;
- organizador de acessos;
- ponto de retomada;
- interface de continuidade;
- central de entregas privadas;
- histórico de experiências;
- porta de entrada para experiências pertencentes àquela pessoa;
- camada de apresentação de estados relevantes.

---

# 4. O QUE O MEU CAMINHO NÃO É

Meu Caminho não é:

- produto independente;
- nova etapa da Jornada do Portal;
- LMS tradicional;
- catálogo geral;
- marketplace;
- vitrine permanente;
- funil de upsell;
- rede social;
- comunidade;
- sistema de ranking;
- sistema de evolução espiritual;
- gamificação;
- prontuário;
- sistema clínico;
- banco genérico de relatos;
- controlador central do conteúdo íntimo de todos os produtos.

---

# 5. CRITÉRIO CENTRAL DE PRODUTO

Toda funcionalidade do Meu Caminho deve responder positivamente:

> **Isso ajuda a pessoa a acessar, compreender, retomar, integrar ou continuar aquilo que legitimamente pertence à sua própria jornada?**

Se a resposta for não:

> **a funcionalidade provavelmente não pertence ao núcleo da V1.**

---

# 6. PRINCÍPIO DE EXPERIÊNCIA

A sensação desejada é:

> **“Aqui está aquilo que faz parte do meu caminho. Eu consigo entender facilmente o que tenho, o que está acontecendo e se existe algo que posso fazer agora.”**

A experiência deve transmitir:

- clareza;
- tranquilidade;
- organização;
- continuidade;
- humanidade;
- autonomia;
- segurança.

Não deve transmitir:

- pressão;
- competição;
- obrigação de avançar;
- excesso de informação;
- sensação de sistema corporativo;
- sensação de catálogo comercial.

---

# 7. ARQUITETURA FUNCIONAL V1

## 7.1. Navegação principal

A V1 deverá conter apenas:

```text
Meu Caminho
Experiências
Entregas
Conta
```

A implementação deve priorizar:

- mobile first;
- clareza;
- poucas decisões por tela;
- hierarquia visual evidente;
- continuidade contextual.

---

# 8. ÁREA 1 — MEU CAMINHO

`/meu-caminho`

É a página inicial autenticada.

Não deve funcionar como dashboard corporativo.

Sua função é responder:

> **“O que está acontecendo no meu caminho agora?”**

---

## 8.1. Estrutura adaptativa

A Home pode possuir, quando aplicável:

### AGORA

A ação legítima mais relevante.

Exemplos:

- continuar uma experiência;
- iniciar algo disponível;
- responder algo necessário;
- acessar uma entrega;
- retomar uma prática;
- nenhuma ação necessária.

---

### EM ANDAMENTO

Mostra experiências realmente ativas.

Cada item deve permitir retomada direta.

---

### ENTREGAS RECENTES

Aparece somente quando existir algo relevante.

---

### SEU CAMINHO ATÉ AQUI

Resumo discreto de experiências concluídas ou realizadas.

Não utilizar:

- pontos;
- rankings;
- níveis;
- streaks artificiais;
- medalhas;
- porcentagem de evolução pessoal.

---

# 9. “ONDE ESTOU” NÃO É NÍVEL DE EVOLUÇÃO

O Meu Caminho nunca deve afirmar:

- nível de consciência;
- nível espiritual;
- posição universal na Jornada;
- posição absoluta no Método;
- porcentagem de evolução;
- grau de transformação.

“Você está aqui” significa somente um estado concreto da experiência.

Exemplos:

```text
Ainda não iniciado
Disponível
Em andamento
Aguardando sua ação
Aguardando processamento humano
Entrega disponível
Concluído
```

---

# 10. PRÓXIMA AÇÃO ≠ PRÓXIMA OFERTA

Essa distinção é obrigatória.

## Próxima ação

Pertence ao núcleo do Meu Caminho.

Pode significar:

- continuar;
- responder;
- acessar;
- revisar;
- praticar;
- integrar;
- aguardar;
- concluir;
- nenhuma ação.

## Próxima oferta

Não pertence ao núcleo funcional da V1.

A V1 não deve possuir motor automático de cross-sell.

Não deve perguntar:

> “O que podemos vender agora?”

Deve perguntar:

> **“Existe alguma ação ou continuidade legitimamente pertinente?”**

---

# 11. ESTADO “NADA A FAZER AGORA”

O sistema deverá suportar explicitamente:

> **nenhuma ação necessária neste momento.**

Esse estado não é erro.

Não deve ser preenchido artificialmente por:

- oferta;
- recomendação;
- mensagem de urgência;
- tarefa fabricada.

---

# 12. ÁREA 2 — EXPERIÊNCIAS

`/meu-caminho/experiencias`

Reúne aquilo que efetivamente pertence à pessoa.

Não mostra o catálogo inteiro do Portal.

---

## 12.1. Organização recomendada

### Em andamento

Experiências com continuidade ativa.

### Disponíveis

Experiências pertencentes à pessoa, mas ainda não iniciadas ou disponíveis para uso.

### Concluídas

Experiências legitimamente finalizadas.

A apresentação poderá ser adaptada conforme necessidade real.

---

# 13. ESTADO DE APRESENTAÇÃO ≠ ESTADO DE DOMÍNIO

Cada produto ou experiência pode possuir estados internos próprios.

Exemplo:

```text
intake_received
human_review
delivery_preparation
delivery_ready
```

Meu Caminho não precisa mostrar esses termos técnicos.

Ele pode traduzir para:

```text
Em andamento
Aguardando processamento
Entrega disponível
```

Regra:

> **o domínio preserva precisão técnica; a interface preserva compreensão humana.**

---

# 14. PÁGINA DE UMA EXPERIÊNCIA

Estrutura conceitual:

```text
Experiência
├── estado atual
├── ação principal
├── conteúdo ou etapas pertinentes
├── materiais
├── registros pertencentes à experiência
├── entregas
└── histórico relevante
```

Nem toda experiência precisa possuir todos esses elementos.

A interface deve representar:

> **o que realmente existe naquele produto**

e não obrigar todos os produtos a imitar um LMS.

---

# 15. REGISTROS PESSOAIS

Não haverá na V1 um grande repositório transversal denominado “Meus Registros”.

Uma reflexão deve permanecer associada ao contexto que lhe dá significado.

Exemplos:

```text
resposta de exercício
→ domínio da experiência

intake
→ domínio da experiência

registro espiritual
→ domínio da experiência

reavaliação
→ domínio da experiência
```

Meu Caminho poderá saber que:

> “há um registro”

sem necessariamente armazenar, copiar ou ler:

> “o conteúdo daquele registro”.

---

# 16. ÁREA 3 — ENTREGAS

`/meu-caminho/entregas`

Entregas podem ser agregadas transversalmente porque a pergunta da pessoa pode ser:

> **“Onde está aquilo que recebi?”**

Tipos possíveis:

- áudio;
- PDF;
- devolutiva;
- relatório;
- material complementar;
- arquivo;
- registro produzido pelo Portal;
- outro ativo privado.

---

## 16.1. Metadados mínimos

A listagem pode utilizar:

- nome;
- tipo;
- experiência de origem;
- data de disponibilização;
- estado;
- ação de acesso.

Não expor conteúdo íntimo desnecessariamente na listagem.

---

# 17. ÁREA 4 — CONTA

`/meu-caminho/conta`

Concentra:

### Perfil

Dados básicos estritamente necessários.

### Acesso e segurança

Informações e ações relacionadas à identidade autenticada.

### Privacidade e dados

Consentimentos, informações e solicitações aplicáveis.

---

# 18. ARQUITETURA DE DADOS — PRINCÍPIO CENTRAL

> **Meu Caminho agrega. Não duplica.**

Sua camada transversal deve conhecer principalmente:

```text
quem é a pessoa
↓
a que possui acesso
↓
o que existe para ela
↓
qual o estado operacional
↓
qual ação está disponível
↓
quais entregas existem
```

Ela não precisa conhecer todo o conteúdo íntimo necessário para apresentar essas informações.

---

# 19. GRUPOS DE DADOS

## Identidade e conta

Exemplos:

- ID autenticado;
- e-mail;
- nome quando necessário;
- relação entre identidade e conta.

Compartilhados pela Plataforma.

---

## Acesso

Exemplos:

- produto;
- experiência;
- entitlement;
- enrollment;
- permissões.

Compartilhados pela Plataforma.

---

## Estado operacional

Exemplos:

- disponível;
- iniciado;
- última atividade;
- ação pendente;
- conclusão;
- entrega pronta.

Pode alimentar Meu Caminho.

---

## Conteúdo pessoal ou íntimo

Exemplos:

- relatos;
- respostas;
- reflexões;
- intake;
- interpretações;
- leituras;
- devolutivas;
- registros pessoais.

Permanece no domínio da experiência que o originou.

---

## Privacidade, consentimento e auditoria

Compartilhados somente quando houver finalidade concreta.

---

# 20. PRINCÍPIO DE MINIMIZAÇÃO

Antes de criar qualquer campo:

> **Precisamos realmente armazenar isso para entregar a experiência?**

Se não:

> **não criar.**

Antes de expor qualquer campo ao Meu Caminho:

> **Meu Caminho realmente precisa conhecer o conteúdo ou apenas seu estado?**

Preferir o estado sempre que for suficiente.

---

# 21. LEAST PRIVILEGE

Toda camada deve receber somente o acesso necessário.

### Pessoa autenticada

Acessa aquilo que lhe pertence.

### Sistema

Acessa somente aquilo necessário para executar a operação.

### Operação

Acesso conforme função real.

### Marcos

Conteúdo íntimo somente quando a experiência legitimamente exigir atuação humana de Marcos.

### Suporte técnico

Não deve ganhar acesso automático a conteúdo íntimo apenas por exercer suporte técnico.

---

# 22. OWNERSHIP

Nenhum recurso privado deve ser liberado apenas porque:

- um e-mail coincide;
- o frontend enviou um ID;
- existe uma URL conhecida;
- o usuário alterou um parâmetro.

A autorização deve ser verificada server-side.

---

# 23. RLS

RLS é obrigatório nos dados privados aplicáveis.

Testes mínimos:

```text
User A acessa recurso de A → permitido

User A acessa recurso de B → negado

User B acessa recurso de A → negado

anon acessa PII → negado

cliente manipula resource_id → negado
```

Negative tests são obrigatórios.

---

# 24. STORAGE PRIVADO

Entregas pessoais serão privadas por padrão.

Persistir:

```text
object_path
metadata
```

Não persistir URL pública ou signed URL permanente.

Fluxo:

```text
usuário autenticado
↓
solicita ativo
↓
servidor verifica ownership
↓
gera signed URL
↓
TTL curto
↓
acesso
```

---

# 25. LOGS

Proibido registrar em logs:

- tokens;
- cookies;
- `Authorization`;
- OTP;
- Magic Link;
- claim token;
- respostas íntimas;
- intake;
- relatos;
- conteúdo espiritual individual;
- devolutivas;
- arquivos pessoais.

PII redaction deve estar ativa antes de Production.

---

# 26. ANALYTICS

Analytics na área autenticada utilizará allowlist.

Eventos possíveis:

```text
experience_opened
experience_started
step_completed
delivery_opened
experience_completed
```

Somente implementar eventos que tenham função real.

Nunca enviar:

- respostas;
- relatos;
- reflexões;
- textos digitados;
- intake;
- conteúdo de entregas;
- PII textual.

---

# 27. ARQUITETURA TÉCNICA REAPROVADA

## Site público

```text
repo: portal-caminho-da-consciencia
host: Netlify
```

Responsabilidades predominantes:

- institucional;
- conteúdo público;
- SEO;
- páginas públicas;
- apresentação;
- conversão;
- páginas legais.

---

## Aplicação

```text
repo: portal-caminho-da-consciencia-app
host: Vercel
domain planejado: app.portalcaminhodaconsciencia.com.br
```

Responsabilidades:

- Meu Caminho;
- autenticação;
- experiências dinâmicas;
- estado;
- continuidade;
- entregas privadas;
- contratos de integração;
- webhooks quando pertinente.

---

## Backend

```text
Supabase
```

Responsabilidades:

- Auth;
- PostgreSQL;
- RLS;
- Storage;
- identidade;
- acesso;
- privacidade;
- shared kernel;
- domínios privados das experiências.

---

# 28. FUNDAÇÃO DE CÓDIGO

A fundação existente deverá ser preservada salvo evidência contrária da auditoria.

Estado esperado como referência:

```text
MakerKit Lite
Next.js
Turborepo
Node
pnpm
Supabase
Vercel
```

Não executar:

- migração de framework;
- atualização ampla de dependências;
- troca do template;
- reestruturação de monorepo;
- substituição de Auth;

apenas “porque existe uma versão mais nova”.

Qualquer alteração desse tipo necessita:

> problema concreto + impacto + recomendação + aprovação.

---

# 29. AUTH

A arquitetura anteriormente implementada utiliza:

```text
Supabase Auth
Magic Link / passwordless
```

A auditoria deverá verificar o estado real.

Direção funcional:

```text
/entrar
↓
Magic Link
↓
sessão autenticada
↓
/meu-caminho
```

O destino autenticado padrão deve ser Meu Caminho.

Qualquer permanência do dashboard demo `/home` deverá ser investigada e removida ou redirecionada conforme necessidade.

---

# 30. IDENTIDADE

Preservar distinção entre:

```text
visitante
contato
identidade autenticada
account/profile
comprador
entitlement
participante/enrollment
```

Esses conceitos não devem ser colapsados.

---

# 31. IDENTITY CLAIMING

Quando houver necessidade de vincular um registro ou compra pré-auth a uma identidade:

```text
registro pré-auth
↓
claim token forte
↓
verificação de identidade
↓
claim server-side
↓
ownership
```

Requisitos:

- token forte;
- hash persistido;
- TTL;
- uso único;
- idempotência;
- proteção contra corrida;
- auditoria;
- nunca utilizar coincidência de e-mail como autorização suficiente.

---

# 32. COMMERCE

A infraestrutura já existente deve ser auditada e preservada quando correta.

Separações conceituais obrigatórias:

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

Commerce não define a experiência.

Ele apenas participa do acesso quando necessário.

---

# 33. E-MAIL

Manter separação conceitual:

```text
AUTH
→ mecanismo de autenticação

TRANSACTIONAL
→ mensagens necessárias à experiência

MARKETING
→ comunicação promocional dependente de consentimento apropriado
```

Comprar ou criar conta não deve conceder automaticamente consentimento de marketing.

---

# 34. PRIMEIRA AUDITORIA — OBRIGATÓRIA

Antes de qualquer alteração de código:

> **Claude Code deverá auditar o estado real do repositório e da infraestrutura.**

Essa auditoria não é uma auditoria sobre trabalho realizado pelo Codex.

Ela é:

> **auditoria do estado técnico atual do sistema contra esta nova SPEC e os CÂNONs vigentes.**

Claude Code e Codex são colaboradores na mesma implementação.

Nenhum deles ocupa função permanente de auditor do outro.

---

# 35. OBJETIVO DA AUDITORIA

Responder com evidência:

1. O que realmente existe?
2. O que está funcionando?
3. O que foi parcialmente implementado?
4. O que existe apenas na documentação?
5. O que diverge da nova SPEC?
6. O que precisa ser preservado?
7. O que precisa ser adaptado?
8. O que precisa ser substituído?
9. O que pode ser removido?
10. O que ainda está em aberto?
11. Existem dívidas técnicas críticas?
12. Existem riscos de segurança ou privacidade?
13. Qual é o menor caminho seguro para continuar?

---

# 36. REGRA DA AUDITORIA

Durante o primeiro gate:

> **NÃO ALTERAR CÓDIGO.**

Permitido:

- ler;
- inspecionar;
- executar testes não destrutivos;
- verificar configuração;
- conferir branches;
- conferir migrations;
- mapear rotas;
- consultar documentação local;
- levantar problemas.

Não permitido:

- refatorar;
- corrigir;
- migrar;
- atualizar dependências;
- criar tabelas;
- remover arquivos;
- alterar configuração;
- mergear;
- publicar.

---

# 37. AUDITORIA — GIT E BASELINE

Claude Code deve registrar:

```text
repo correto
branch atual
HEAD atual
origin/main
working tree
branches existentes
tags relevantes
últimos commits
arquivos não versionados
arquivos modificados
stashes
```

Deve identificar qualquer diferença entre:

> estado documentado

e

> estado real.

---

# 38. AUDITORIA — DOCUMENTAÇÃO

Inspecionar:

- ADRs;
- CURRENT;
- README;
- specs;
- migrations;
- documentos operacionais;
- arquivos protegidos;
- documentação MakerKit/upstream;
- decisões técnicas registradas.

Classificar documentos antigos como:

```text
VIGENTE NO NOVO CONTEXTO
REFERÊNCIA
HISTÓRICO
DESATUALIZADO
CONFLITANTE
```

Sem reclassificar CÂNONs.

---

# 39. AUDITORIA — ROTAS

Mapear todas as rotas reais.

Confirmar especialmente:

```text
/entrar
/home
/meu-caminho
/auth/*
```

Identificar:

- redirects;
- guards;
- layouts;
- middleware/proxy;
- rotas demo;
- rotas órfãs;
- páginas MakerKit ainda expostas.

---

# 40. AUDITORIA — SHELL AUTENTICADO

Verificar:

- navegação;
- sidebar;
- header;
- mobile;
- branding;
- componentes demo;
- elementos SaaS;
- organizações/equipes se ainda existirem;
- billing demo;
- configurações MakerKit não utilizadas.

Objetivo:

> descobrir o que precisa ser removido ou adaptado para que a aplicação pareça Meu Caminho e não template SaaS.

---

# 41. AUDITORIA — AUTH

Verificar:

- Magic Link;
- callback;
- sessão;
- logout;
- redirecionamentos;
- proteção de rota;
- password auth;
- OAuth;
- MFA;
- CAPTCHA;
- templates;
- tratamento de erros.

Confirmar o que realmente está ON/OFF.

---

# 42. AUDITORIA — SUPABASE

Inventariar:

- migrations;
- tabelas;
- views;
- functions;
- triggers;
- policies;
- indexes;
- buckets;
- RPCs;
- secrets relevantes;
- ambiente local;
- Preview;
- Production, se existir.

---

# 43. AUDITORIA — IDENTIDADE E PRIVACIDADE

Verificar existência e uso real de estruturas equivalentes a:

```text
contacts
accounts
identity_links
identity_claims
consents
privacy_requests
audit_events
```

Não presumir nomes se o repositório tiver evoluído.

---

# 44. AUDITORIA — COMMERCE E ACCESS

Verificar estado real de:

```text
products
offers
orders
payments
payment_events
webhook_receipts
entitlements
enrollments
```

Verificar também:

- integração Eduzz existente;
- assinatura;
- HMAC;
- idempotência;
- eventos;
- reversão;
- pending entitlement;
- mappings.

---

# 45. AUDITORIA — DELIVERY

Confirmar se já existem:

- `deliveries`;
- `delivery_assets`;
- bucket privado;
- helper de signed URL;
- ownership;
- RLS;
- testes.

Se não existirem:

> registrar como pendência.

Não implementar durante auditoria.

---

# 46. AUDITORIA — E-MAIL

Confirmar estado real de:

- Supabase SMTP;
- Resend;
- Brevo;
- templates;
- transactional flow;
- variáveis de ambiente;
- envio de claim;
- mensagens de entrega.

---

# 47. AUDITORIA — LOGGING E OBSERVABILIDADE

Verificar:

- Pino;
- redaction;
- logs de Vercel;
- logs Supabase;
- possibilidade de PII;
- tokens;
- bodies de webhook;
- conteúdo de formulários.

Qualquer risco de exposição deve ser marcado como:

> **BLOQUEADOR DE PRODUCTION**

quando aplicável.

---

# 48. AUDITORIA — TESTES

Executar somente testes seguros existentes.

Inventariar:

- unit;
- integration;
- database;
- RLS negative tests;
- E2E;
- lint;
- typecheck;
- build.

Registrar:

```text
comando
resultado
pass/fail
erro encontrado
```

---

# 49. SAÍDA OBRIGATÓRIA DA AUDITORIA

Claude Code deverá produzir:

## A. BASELINE REAL

Estado comprovado.

## B. MATRIZ DE REINCORPORAÇÃO

Para cada item:

```text
PRESERVAR
ADAPTAR
SUBSTITUIR
DESCARTAR
EM ABERTO
```

## C. GAP ANALYSIS

Diferença entre implementação atual e esta SPEC.

## D. RISCOS

Classificados por impacto.

## E. BLOQUEADORES

Tudo que impede execução segura.

## F. PLANO DE CORREÇÃO

Na menor sequência possível.

## G. ARQUIVOS AFETADOS PREVISTOS

Sem alterar ainda.

## H. TESTES EXISTENTES

Com resultados.

## I. RECOMENDAÇÃO DO PRÓXIMO GATE

---

# 50. GATE MC-00 — AUDITORIA DE REINCORPORAÇÃO

Critério de aprovação:

- estado real conhecido;
- divergências mapeadas;
- nenhuma alteração feita;
- riscos identificados;
- plano de correção proposto;
- nenhuma suposição crítica escondida.

Saída:

> **RELATÓRIO MC-00**

Somente após revisão do relatório avançamos.

---

# 51. GATE MC-01 — RECONCILIAÇÃO DOCUMENTAL E BASELINE

Objetivo:

transformar o resultado da auditoria em baseline executável.

Executar:

1. revisar resultados;
2. confirmar itens PRESERVAR;
3. aprovar ADAPTAR;
4. aprovar SUBSTITUIR;
5. confirmar DESCARTAR;
6. resolver EM ABERTO que bloqueie implementação;
7. atualizar documentação operacional;
8. registrar commit baseline.

Critério:

> **nenhuma implementação nova começa antes de sabermos exatamente de qual estado estamos partindo.**

---

# 52. GATE MC-02 — SHELL MEU CAMINHO

Objetivo:

transformar a fundação autenticada em Meu Caminho.

Entregas:

```text
/meu-caminho
/meu-caminho/experiencias
/meu-caminho/entregas
/meu-caminho/conta
```

Ações:

- corrigir destino pós-login;
- remover ou redirecionar `/home`;
- remover shell SaaS desnecessário;
- adaptar navegação;
- aplicar identidade visual vigente;
- validar desktop e mobile;
- definir estados vazios;
- definir loading;
- definir error states;
- definir acesso negado.

Não integrar produtos ainda.

---

# 53. CRITÉRIO MC-02

Usuário autenticado deve:

```text
entrar
↓
chegar ao Meu Caminho
↓
navegar pelas quatro áreas
↓
não encontrar elementos de template/SaaS incompatíveis
```

---

# 54. GATE MC-03 — CAMADA DE AGREGAÇÃO

Construir a camada transversal mínima capaz de responder:

```text
quem sou
o que possuo
o que está ativo
o que posso continuar
o que recebi
```

Não copiar dados íntimos.

---

# 55. SERVIÇO DE AGREGAÇÃO

A implementação deve utilizar os padrões arquiteturais já existentes no repo.

Não criar nova arquitetura apenas por preferência.

O agregador deverá retornar dados de apresentação.

Exemplo conceitual:

```text
experience_id
display_name
presentation_status
primary_action
last_activity
delivery_count
```

Evitar retornar conteúdo íntimo quando ele não for necessário.

---

# 56. GATE MC-04 — EXPERIÊNCIAS

Implementar interface real de:

```text
Em andamento
Disponíveis
Concluídas
```

Criar contratos de apresentação que permitam que diferentes experiências possuam estados internos distintos.

---

# 57. GATE MC-05 — DELIVERY E STORAGE PRIVADO

Se a auditoria confirmar que ainda não existe:

implementar:

- delivery;
- delivery assets;
- bucket privado;
- upload seguro;
- metadata;
- signed URL on-demand;
- TTL curto;
- ownership;
- RLS;
- negative tests.

---

# 58. GATE MC-06 — CONTA E PRIVACIDADE

Implementar:

- dados mínimos do perfil;
- acesso;
- segurança;
- consentimentos aplicáveis;
- área de privacidade;
- solicitações de dados quando previstas.

Não inventar políticas de retenção.

Não criar coleta sem finalidade.

---

# 59. GATE MC-07 — HARDENING DE AUTH E CLAIM

Revalidar:

- Magic Link;
- callback;
- sessão;
- retorno contextual;
- claim;
- uso único;
- concorrência;
- idempotência;
- tentativa de replay;
- e-mail incorreto;
- claim inválido;
- claim expirado.

---

# 60. GATE MC-08 — COMUNICAÇÃO TRANSACIONAL

Implementar apenas aquilo que tiver função real.

Primeiros casos prováveis:

- vínculo/claim;
- acesso;
- entrega disponível;
- mensagens operacionais necessárias.

Separar marketing.

---

# 61. GATE MC-09 — PRIMEIRA EXPERIÊNCIA

**BLOQUEADO até reanálise da experiência gratuita candidata.**

Quando aprovada, criar SPEC própria de integração.

Fluxo ideal para uma experiência gratuita, se compatível:

```text
experiência pública
↓
primeiro valor
↓
registro pré-auth quando necessário
↓
opção de guardar
↓
Magic Link
↓
identity claim
↓
Meu Caminho
↓
retomada/histórico
```

Essa decisão não deve ser implementada antes da reanálise.

---

# 62. GATE MC-10 — SEGURANÇA E PRIVACIDADE

Executar revisão objetiva de:

- RLS;
- ownership;
- IDOR;
- signed URLs;
- service role;
- secrets;
- logs;
- analytics;
- claims;
- webhooks;
- conteúdo íntimo;
- acesso cruzado entre usuários.

---

# 63. TESTES NEGATIVOS OBRIGATÓRIOS

Exemplos:

```text
User A não lê experiência de B.

User A não baixa entrega de B.

User A não altera estado de B.

anon não lê PII.

URL antiga expirada não acessa asset.

claim token usado não funciona novamente.

claim token expirado falha.

resource_id modificado manualmente não concede acesso.

frontend não consegue elevar privilégio.
```

---

# 64. GATE MC-11 — E2E DA PLATAFORMA

Testar:

```text
login
↓
Meu Caminho
↓
Experiências
↓
retomada
↓
Entregas
↓
download seguro
↓
Conta
↓
logout
```

Após integração da primeira experiência:

```text
entrada
↓
uso
↓
claim
↓
login
↓
Meu Caminho
↓
retomada
```

---

# 65. GATE MC-12 — PREVIEW DE ACEITE

Preview deve validar:

- visual;
- responsividade;
- Auth;
- RLS;
- rotas;
- entrega;
- estados vazios;
- erros;
- acessibilidade básica;
- segurança;
- experiência real.

Nenhum problema crítico pode permanecer aberto.

---

# 66. GATE MC-13 — PRODUCTION READINESS

Production somente após:

- Supabase Production preparado;
- migrations revisadas;
- secrets exclusivos;
- Vercel Production configurado;
- domínio;
- DNS;
- Auth URLs;
- SMTP;
- transactional email;
- storage;
- backups;
- rollback;
- logs com redaction;
- analytics seguro;
- smoke test definido.

---

# 67. GATE MC-14 — PRODUCTION

Somente após aprovação explícita.

Não promover Preview para Production como efeito colateral de merge.

Após deploy:

- smoke test;
- login;
- Meu Caminho;
- acesso;
- ownership;
- delivery;
- logout;
- erros;
- logs;
- monitoramento inicial.

---

# 68. CLAUDE CODE E CODEX — MODELO DE TRABALHO

Claude Code e Codex atuam como:

> **dois agentes implementadores do mesmo projeto.**

Não existe relação permanente de:

```text
Claude implementa
Codex audita
```

nem:

```text
Codex implementa
Claude fiscaliza
```

A regra é:

> **o agente disponível assume a implementação a partir de um estado sincronizado e documentado.**

---

# 69. ALTERNÂNCIA ENTRE AGENTES

Quando um agente atingir:

- limite de uso;
- encerramento de sessão;
- necessidade operacional de troca;

a implementação deve parar em estado seguro.

Nunca transferir no meio de:

- migration incompleta;
- refactor quebrado;
- merge em andamento;
- deploy incerto;
- teste parcialmente corrigido sem registro.

---

# 70. CHECKPOINT DE CONTINUIDADE

Para não confundir com o conceito metodológico **Ponto de Interrupção**, esta SPEC denomina o handoff técnico:

> **CHECKPOINT DE CONTINUIDADE**

Ele representa o ponto operacional em que um agente interrompe seu trabalho, sincroniza tudo e permite que o outro continue.

---

# 71. CHECKPOINT — ESTADO OBRIGATÓRIO

Antes da troca:

```text
git status
branch
HEAD
origin correspondente
arquivos alterados
arquivos não versionados
último commit
```

Tudo deve ser conhecido.

---

# 72. CHECKPOINT — TESTES

Registrar:

- testes executados;
- testes aprovados;
- testes falhos;
- testes não executados;
- motivo.

Nunca escrever apenas:

> “testes OK”

sem informar quais.

---

# 73. CHECKPOINT — TRABALHO REALIZADO

Registrar:

```text
o que foi feito
por que foi feito
arquivos alterados
migrations criadas
configurações alteradas
decisões tomadas
```

---

# 74. CHECKPOINT — ESTADO FUNCIONAL

Registrar:

```text
o que funciona
o que não funciona
o que está incompleto
qual é o próximo passo exato
```

---

# 75. CHECKPOINT — PENDÊNCIAS

Separar:

```text
BLOCKER
IMPORTANTE
DEPOIS
```

Não ocultar problemas.

---

# 76. CHECKPOINT — COMMIT

Preferência:

> transferir trabalho em commit coerente e testado.

Se não puder:

registrar claramente por que existe working tree sujo e quais arquivos estão afetados.

Nunca permitir que o próximo agente descubra sozinho o significado de alterações locais.

---

# 77. TEMPLATE DE CHECKPOINT

```md
# CHECKPOINT DE CONTINUIDADE — MEU CAMINHO

Data:
Agente:
Gate:
Branch:
HEAD:

## Objetivo do gate

## O que foi concluído

## Arquivos alterados

## Banco / migrations

## Configuração / env

## Testes executados

### PASS
-

### FAIL
-

### NÃO EXECUTADOS
-

## Estado funcional atual

## Pendências

### BLOCKER
-

### IMPORTANTE
-

### DEPOIS
-

## Próxima ação exata

## Comando recomendado para retomada

## Observações de risco
```

---

# 78. REGRA PARA O AGENTE QUE ASSUME

O agente seguinte deve:

1. ler o Checkpoint;
2. conferir branch e HEAD;
3. executar `git status`;
4. verificar divergência;
5. executar os testes mínimos indicados;
6. somente então continuar.

Não deve reconstruir contexto por adivinhação.

---

# 79. PROIBIÇÃO DE REDUNDÂNCIA

Ao assumir:

não refazer tudo o que o agente anterior já fez apenas para “ter certeza”.

Validar o necessário.

Continuar de onde parou.

A finalidade do Checkpoint é exatamente evitar:

- retrabalho;
- regressão;
- interpretação diferente;
- duplicação;
- perda de decisões.

---

# 80. BRANCHES E ESCOPO

Cada gate deve possuir escopo controlado.

Evitar branch que simultaneamente:

- reestrutura Auth;
- cria produto;
- refaz design;
- muda Commerce;
- altera banco;
- atualiza dependências.

Mudanças adjacentes devem ser registradas e tratadas separadamente.

---

# 81. MIGRATIONS

Regra:

> **migration aplicada não deve ser silenciosamente reescrita.**

Novas alterações devem ser novas migrations conforme convenção vigente.

Toda migration relevante deve possuir:

- finalidade;
- forward path;
- impacto;
- rollback ou estratégia de reversão quando pertinente;
- testes.

---

# 82. PRODUÇÃO PROTEGIDA

Nenhum agente deve:

- alterar Production;
- publicar;
- configurar domínio;
- mudar segredo de Production;
- rodar migration de Production;
- apagar dados;

sem gate e autorização correspondentes.

---

# 83. DESIGN E IDENTIDADE

O Meu Caminho deve seguir a identidade visual canônica vigente do Portal.

Não copiar aparência SaaS do MakerKit.

A fundação técnica pode permanecer MakerKit.

A experiência visual deve ser Portal Caminho da Consciência.

Direção:

- premium;
- sóbria;
- quente;
- espiritual;
- contemporânea;
- humana.

Priorizar legibilidade e serenidade.

---

# 84. ACESSIBILIDADE

V1 deve incluir pelo menos:

- navegação por teclado;
- foco visível;
- labels adequados;
- semântica;
- contraste suficiente;
- estados não dependentes apenas de cor;
- loading compreensível;
- mensagens de erro úteis;
- áreas clicáveis adequadas em mobile.

---

# 85. ERROR STATES

Definir explicitamente:

- sessão expirada;
- acesso negado;
- recurso inexistente;
- entrega indisponível;
- erro de rede;
- erro de backend;
- claim inválido;
- claim expirado;
- ausência de experiências;
- ausência de entregas.

Não mostrar stack trace ou erro técnico ao usuário.

---

# 86. EMPTY STATES

Empty state não deve automaticamente vender.

Exemplo:

> “Você ainda não possui nenhuma experiência vinculada a esta conta.”

Pode oferecer explicação ou caminho legítimo.

Não:

> “Você está parado — compre algo para avançar.”

---

# 87. PERFORMANCE

Não otimizar prematuramente.

Mas evitar:

- queries N+1;
- carregar conteúdo íntimo desnecessariamente;
- grandes payloads;
- múltiplas chamadas redundantes;
- assets privados desnecessariamente regenerados.

A Home deve carregar apenas aquilo necessário para sua função.

---

# 88. NÃO CONSTRUIR NA V1

- LMS completo;
- catálogo global;
- marketplace;
- ranking;
- pontos;
- badges;
- streaks;
- certificados genéricos;
- comunidade;
- feed social;
- chat social;
- app nativo;
- multi-tenancy B2B;
- construtor de cursos;
- motor de recomendação comercial;
- IA interpretando conteúdo pessoal;
- IA imitando Marcos;
- automação espiritual;
- prontuário unificado;
- admin complexo sem necessidade comprovada.

---

# 89. HUMAN-IN-THE-LOOP

Quando uma experiência depender de:

- interpretação sensível;
- decisão metodológica;
- leitura contextual;
- trabalho espiritual humano;
- facilitação;

a Plataforma pode:

- organizar;
- receber;
- armazenar;
- encaminhar;
- mostrar estado;
- entregar resultado.

Não deve substituir silenciosamente Marcos.

---

# 90. CRITÉRIOS DE ACEITE DA V1

Meu Caminho V1 será considerado funcionalmente completo quando uma pessoa puder:

1. autenticar-se;
2. chegar diretamente ao Meu Caminho;
3. entender o que pertence à sua conta;
4. visualizar experiências;
5. iniciar ou retomar uma experiência quando aplicável;
6. entender estados de forma humana;
7. acessar entregas privadas;
8. acessar conta e privacidade;
9. não ver conteúdo pertencente a outra pessoa;
10. usar o sistema em mobile;
11. encontrar estados vazios compreensíveis;
12. receber erros seguros;
13. sair da conta;
14. retornar posteriormente e continuar.

---

# 91. CRITÉRIOS DE ACEITE TÉCNICO

Antes de Production:

```text
lint = PASS
typecheck = PASS
build = PASS
testes relevantes = PASS
RLS negative tests = PASS
Auth E2E = PASS
ownership E2E = PASS
signed URL tests = PASS
cross-user isolation = PASS
```

Qualquer exceção deve ser documentada e aprovada.

---

# 92. CRITÉRIO DE NÃO REGRESSÃO

A execução não pode quebrar capacidades existentes já validadas sem necessidade.

Especial atenção:

- Magic Link;
- identity claim;
- RLS;
- idempotência;
- webhooks;
- entitlement;
- Preview isolation.

---

# 93. DOCUMENTAÇÃO DEVE ACOMPANHAR CÓDIGO

Ao fechar cada gate relevante:

atualizar documentação operacional.

Não deixar:

> código novo + documentação velha.

Registrar:

- estado;
- decisão;
- implementação;
- testes;
- pendências;
- próximo gate.

---

# 94. DEFINITION OF DONE DE UM GATE

Um gate só está concluído quando:

```text
escopo implementado
+
testes previstos executados
+
problemas críticos corrigidos
+
documentação sincronizada
+
checkpoint claro
+
working tree conhecido
+
commit identificado
```

---

# 95. DÍVIDA DOCUMENTAL

Se uma decisão aprovada ainda não estiver incorporada ao documento proprietário:

registrar:

> **PENDENTE DE SINCRONIZAÇÃO DOCUMENTAL**

Não deixar essa condição indefinidamente.

---

# 96. DECISÕES AINDA EM ABERTO

Esta SPEC não define ainda:

- qual será a primeira experiência integrada;
- se a experiência gratuita anterior sobreviverá à reanálise;
- políticas finais de retenção;
- todos os textos legais;
- todos os consentimentos específicos dos futuros produtos;
- futuros produtos;
- cross-sell futuro;
- recomendação personalizada futura;
- funcionalidades de comunidade;
- IA em experiências.

Não inventar essas decisões durante implementação.

---

# 97. ORDEM EXECUTIVA COMPLETA

```text
MC-00
Auditoria real por Claude Code
        ↓
MC-01
Reconciliar baseline e documentação
        ↓
MC-02
Shell + rotas + navegação Meu Caminho
        ↓
MC-03
Agregação transversal mínima
        ↓
MC-04
Experiências
        ↓
MC-05
Entregas + Storage privado
        ↓
MC-06
Conta + Privacidade
        ↓
MC-07
Auth + Claim hardening
        ↓
MC-08
E-mail transacional
        ↓
REANÁLISE DA EXPERIÊNCIA GRATUITA
        ↓
MC-09
Primeira integração
        ↓
MC-10
Security / Privacy hardening
        ↓
MC-11
E2E
        ↓
MC-12
Preview de aceite
        ↓
MC-13
Production readiness
        ↓
APROVAÇÃO
        ↓
MC-14
Production
```

---

# 98. COMANDO INICIAL PARA CLAUDE CODE

Executar no repositório da Plataforma:

```text
Você está iniciando o Gate MC-00 do projeto Portal Caminho da Consciência.

OBJETIVO:
Realizar uma AUDITORIA TÉCNICA SOMENTE LEITURA do estado real da Plataforma / Meu Caminho antes da retomada da implementação.

IMPORTANTE:
Esta auditoria é sobre o estado do REPOSITÓRIO E DA INFRAESTRUTURA, não sobre trabalho de outra ferramenta. Claude Code e Codex são coimplementadores do mesmo sistema e podem alternar durante a execução futura.

NÃO ALTERE CÓDIGO.
NÃO CRIE MIGRATIONS.
NÃO CORRIJA PROBLEMAS.
NÃO ATUALIZE DEPENDÊNCIAS.
NÃO FAÇA MERGE.
NÃO FAÇA DEPLOY.
NÃO ALTERE VERCEL, SUPABASE OU PRODUCTION.

CONTEXTO NOVO APROVADO:

1. Meu Caminho é a infraestrutura pessoal de continuidade do Portal Caminho da Consciência.

2. A base técnica existente foi REINCORPORADA e deve ser preservada quando correta.

3. A arquitetura técnica geral foi REAPROVADA:
   - site público: Netlify;
   - aplicação / Meu Caminho: Vercel;
   - backend/dados: Supabase;
   - repo app existente deve ser preservado;
   - MakerKit/Next.js/Turborepo existentes não devem ser substituídos sem motivo concreto.

4. Arquitetura funcional V1:
   - Meu Caminho;
   - Experiências;
   - Entregas;
   - Conta.
   Não criar área global “Meus Registros”.
   Registros íntimos permanecem prioritariamente nos domínios das experiências.

5. Meu Caminho AGREGA, NÃO DUPLICA.
   Conteúdo íntimo não deve ser copiado para um banco genérico apenas para alimentar o dashboard.

6. Próxima ação não significa próxima oferta.
   Não existe motor de cross-sell na V1.

7. Segurança:
   - minimização;
   - least privilege;
   - ownership server-side;
   - RLS;
   - negative tests;
   - storage privado;
   - signed URLs curtas;
   - sem conteúdo íntimo em analytics/logs.

8. Existe uma experiência gratuita candidata à primeira integração, mas ela ainda será reanalisada. NÃO implementar nenhum produto agora.

AUDITAR:

A. GIT
- repo;
- branch;
- HEAD;
- origin/main;
- git status;
- branches;
- stashes;
- últimos commits;
- arquivos modificados/não versionados.

B. DOCUMENTAÇÃO
- ADRs;
- CURRENT;
- specs;
- READMEs;
- documentação MakerKit/upstream;
- arquivos operacionais.

C. APP
- estrutura do monorepo;
- packages;
- Next.js;
- MakerKit;
- rotas;
- layouts;
- middleware/proxy;
- /entrar;
- /home;
- /meu-caminho;
- redirects;
- shell autenticado;
- componentes demo/SaaS remanescentes.

D. AUTH
- Magic Link;
- Password;
- OAuth;
- MFA;
- CAPTCHA;
- callback;
- sessão;
- logout;
- return path.

E. SUPABASE
- migrations;
- tabelas;
- views;
- functions;
- triggers;
- indexes;
- policies;
- RLS;
- buckets;
- RPCs.

F. IDENTIDADE
- contacts;
- accounts;
- identity_links;
- identity_claims;
- consent;
- privacy;
- audit.

G. COMMERCE / ACCESS
- products;
- offers;
- orders;
- payments;
- payment_events;
- webhook_receipts;
- entitlement;
- enrollment;
- Eduzz;
- idempotência;
- reversões.

H. DELIVERY
- deliveries;
- delivery_assets;
- Storage;
- signed URLs;
- ownership.

I. E-MAIL
- Supabase SMTP;
- Resend;
- Brevo;
- transactional;
- claim delivery.

J. LOGS / ANALYTICS
- Pino;
- redaction;
- PII;
- tokens;
- bodies;
- eventos.

K. TESTES
Execute apenas testes locais/Preview NÃO DESTRUTIVOS já existentes:
- lint;
- typecheck;
- unit;
- integration;
- database;
- RLS;
- build;
- E2E apenas se puder rodar com segurança.

PARA CADA ELEMENTO, CLASSIFICAR:
- PRESERVAR
- ADAPTAR
- SUBSTITUIR
- DESCARTAR
- EM ABERTO

SAÍDA OBRIGATÓRIA:

# MC-00 — RELATÓRIO DE AUDITORIA

1. Baseline Git
2. Estado da arquitetura
3. Estado das rotas
4. Estado do shell
5. Estado do Auth
6. Estado do Supabase
7. Estado de identidade/claim
8. Estado de Commerce/Access
9. Estado de Delivery/Storage
10. Estado de e-mail
11. Estado de logs/analytics
12. Estado dos testes
13. Matriz PRESERVAR/ADAPTAR/SUBSTITUIR/DESCARTAR/EM ABERTO
14. Divergências contra a nova SPEC
15. Riscos
16. Bloqueadores
17. Dívidas técnicas
18. Arquivos provavelmente afetados no próximo gate
19. Menor plano seguro de correção
20. Recomendação objetiva para MC-01

NÃO IMPLEMENTE AS CORREÇÕES.

Finalize informando:
- branch;
- HEAD;
- git status final;
- comandos executados;
- testes realizados;
- confirmação explícita de que nenhum arquivo foi alterado.
```

---

# 99. COMANDO PADRÃO DE RETOMADA PARA CLAUDE CODE OU CODEX

```text
Você está assumindo a continuidade da implementação do Meu Caminho no Portal Caminho da Consciência.

Claude Code e Codex são coimplementadores do mesmo sistema. Não refaça o trabalho anterior e não trate o outro agente como objeto de auditoria.

PASSO 1 — Leia integralmente:
- SPEC-MEU-CAMINHO-001 vigente;
- último CHECKPOINT DE CONTINUIDADE;
- documentação operacional atualizada do gate.

PASSO 2 — Confirme:
- repo;
- branch;
- HEAD;
- git status;
- origin;
- migrations existentes.

PASSO 3 — Execute os testes mínimos indicados no checkpoint.

PASSO 4 — Compare o estado real com o checkpoint.
Se houver divergência, PARE e relate antes de implementar.

PASSO 5 — Execute SOMENTE o próximo escopo autorizado.

REGRAS:
- não ampliar escopo;
- não alterar arquitetura aprovada silenciosamente;
- não atualizar dependências sem necessidade;
- não criar novo Supabase/Vercel/Auth;
- não duplicar dados íntimos;
- não quebrar RLS;
- não usar coincidence de e-mail como ownership;
- não expor tokens/PII em logs;
- não tocar Production sem gate específico;
- preservar código correto já existente.

ANTES DE ENCERRAR:
1. execute testes;
2. registre resultados;
3. documente alterações;
4. confira git status;
5. faça commit coerente quando apropriado;
6. gere novo CHECKPOINT DE CONTINUIDADE.

O próximo agente deve conseguir continuar sem precisar reconstruir o raciocínio desta sessão.
```

---

# 100. CRITÉRIO FINAL DA SPEC

> **Meu Caminho organiza continuidade. As experiências preservam seus próprios significados. A infraestrutura é compartilhada sem transformar a pessoa em um conjunto genérico de dados.**

> **A pessoa deve encontrar aquilo que realmente pertence ao seu caminho — não tudo o que o Portal poderia vender.**

> **Tecnologia serve à experiência. Segurança participa do desenho. Dados íntimos permanecem contextualizados. Próxima ação não significa próxima compra.**

> **Claude Code e Codex trabalham sobre o mesmo estado técnico, alternando por meio de Checkpoints de Continuidade capazes de preservar contexto, código, testes, decisões e próximos passos sem regressão nem retrabalho.**

---

# 101. HISTÓRICO

| Versão | Data | Alteração | Status |
|---|---|---|---|
| `2.0.0` | 14/09/2026 | Refundação da SPEC do Meu Caminho à luz dos novos CÂNONs; reincorporação da base existente; reaprovação da arquitetura técnica; nova arquitetura funcional; nova política de dados; novo plano de gates; auditoria inicial; protocolo cooperativo Claude Code/Codex. | APROVADO |

---

**FIM — SPEC-MEU-CAMINHO-001 — V2.0.0**
