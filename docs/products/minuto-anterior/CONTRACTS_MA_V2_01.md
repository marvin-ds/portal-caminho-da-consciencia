# CONTRACTS MA-V2-01 — O Minuto Anterior MVP V2.0.0

**GATE:** MA-V2-01 — Baseline Documental e Contratos
**STATUS:** proposto para auditoria
**DATA:** 15/09/2026
**PRODUTO:** O Minuto Anterior
**OWNER SPEC:** `SPEC-MINUTO-001 — MVP V2.0.0`
**OWNER SPEC STATUS:** `PROPOSTA PARA APROVACAO`
**PRODUCT_ID:** `minute_before_free_v1`
**OFFER_ID:** `minute_before_free_v1`
**PAGE_ID:** `minute_before_landing_v1`
**VARIANT_ID INICIAL:** `ma_general_v1`

---

# 1. Escopo deste contrato

Este documento reconcilia os contratos historicos MA-01 com a arquitetura transversal atual. Ele nao cria DDL, migrations, codigo, rotas, deploy, projeto Vercel, projeto Supabase ou infra propria.

O objetivo e definir o limite exato entre:

- dominio especifico do produto O Minuto Anterior;
- capacidades transversais ja pertencentes a Plataforma / Shared Kernel / Meu Caminho.

---

# 2. Classificacao dos contratos historicos

| Contrato historico | Classificacao | Observacao |
|---|---|---|
| IDs `product_id`, `offer_id`, `page_id`, `variant_id` | PRESERVAR | IDs permanecem iguais na V2 |
| Experiencia em seis perguntas | ADAPTAR | Mantem estrutura, remove e-mail/login antes do valor |
| Session lifecycle `started/in_progress/completed/abandoned/deleted` | PRESERVAR | `expired` continua fora do status principal de sessao |
| Resultado deterministico | PRESERVAR | Sem LLM, score, diagnostico ou perfil |
| Momento Espelho | PRESERVAR | Continua como principal momento de valor |
| Folha Meu Minuto Anterior | PRESERVAR | HTML/print; sem PDF server-side inicial |
| Repeticao | PRESERVAR | Nova sessao, sem comparacao automatica |
| Captura de e-mail antes da experiencia | DESCARTAR | V2 exige primeiro valor sem e-mail obrigatorio |
| Resend para entrega inicial do resultado por e-mail | ADAPTAR | Comunicacao transacional so quando necessaria em gate proprio |
| Brevo marketing | ADAPTAR | Somente pos-valor, opt-in valido, sem Classe D |
| Contacts | SUBSTITUIDO POR TRANSVERSAL | Shared Kernel e proprietario |
| Consents | SUBSTITUIDO POR TRANSVERSAL | Shared Kernel e proprietario |
| Privacy requests | SUBSTITUIDO POR TRANSVERSAL | Shared Kernel e proprietario |
| Identity claims | SUBSTITUIDO POR TRANSVERSAL | Produto consome claim server-side |
| Audit generico | SUBSTITUIDO POR TRANSVERSAL | Produto emite eventos tecnicos sanitizados conforme padrao |
| Communication dispatches generico | SUBSTITUIDO POR TRANSVERSAL | Produto nao cria fundacao de comunicacao |
| Retencao 30/90 dias da V1 | EM ABERTO | Nao restaurar automaticamente; decidir por categoria antes de Production |
| `q4_other_text` limite numerico | EM ABERTO | SPEC V2 nao fixa numero final |

---

# 3. Ownership — Produto versus Shared Kernel

| Area | Owner | Regra |
|---|---|---|
| Seis perguntas | Minuto Anterior | Produto define fluxo, copy, validacao funcional e ordem |
| Sessao pre-auth | Minuto Anterior | Produto materializa dominio especifico no MA-V2-02/03 |
| Respostas | Minuto Anterior | Conteudo intimo permanece no dominio do produto |
| Resultado | Minuto Anterior | Deterministico, derivado das respostas e copy fixa |
| Momento Espelho | Minuto Anterior | Nao e interpretacao automatica |
| Folha | Minuto Anterior | Renderizacao/print do resultado |
| Feedback especifico | Minuto Anterior | Apenas feedback do produto, sem virar perfil |
| Auth | Plataforma | Magic Link/passwordless transversal |
| Accounts | Plataforma | Nao criado pelo produto |
| Contacts | Shared Kernel | Produto consome quando necessario |
| Identity links | Shared Kernel | Produto nao redefine ownership global |
| Identity claims | Shared Kernel | Produto usa claim server-side |
| Consents | Shared Kernel | Produto referencia purposes aprovados |
| Privacy requests | Shared Kernel | Produto respeita e integra quando aplicavel |
| Audit | Shared Kernel | Produto nao cria audit generico |
| Communication | Shared Kernel | Produto nao cria motor transacional generico |
| Meu Caminho | Meu Caminho | Agrega estado/continuidade, nao duplica textos intimos |

---

# 4. Contrato pre-auth V2

Fluxo canonico:

```text
visitante
-> sessao anonima/pre-auth
-> experiencia
-> resultado
-> conclusao valida
```

Sem:

- login obrigatorio;
- e-mail obrigatorio;
- marketing obrigatorio.

Depois do valor:

```text
opcao de guardar
-> identidade
-> Magic Link
-> identity claim
-> ownership
-> Meu Caminho
```

Regra central:

```text
LOGIN_REQUIRED_BEFORE_FIRST_VALUE = NO
EMAIL_REQUIRED_BEFORE_FIRST_VALUE = NO
```

---

# 5. Ownership e claim

E-mail igual nao e prova de ownership.

Associacao de registro intimo exige:

- token opaco forte;
- hash persistido, nao token bruto;
- TTL;
- single use;
- validacao server-side;
- idempotencia;
- auditabilidade;
- protecao contra replay;
- conta autenticada antes da associacao privada.

Contrato:

```text
authenticated account
+ valid claim
+ server-side ownership operation
= private ownership
```

Nao usar como prova suficiente:

- `contact_id` sozinho;
- e-mail coincidente;
- assertion do browser;
- URL conhecida;
- token reutilizado.

---

# 6. Dominio conceitual de dados do Minuto

Sem DDL neste gate.

| Entidade conceitual | Finalidade | Owner | Classe de dados | Lifecycle | RLS | Relacao pre-auth | Relacao pos-claim | Persistencia |
|---|---|---|---|---|---|---|---|---|
| `minute_before_sessions` | Execucao da experiencia | Produto | operacional + vinculos minimos | `started/in_progress/completed/abandoned/deleted` | sim | cria e acompanha sessao anonima | pode receber ownership apos claim | necessaria |
| `minute_before_answers` | Respostas por etapa | Produto | Classe D quando texto livre/intimo | segue sessao; apagavel por retencao/privacidade | sim | grava progresso conforme contrato | permanece no dominio do produto | necessaria para resultado/retomada |
| `minute_before_results` | Snapshot deterministico | Produto | Classe D quando contem reflexoes/resultado pessoal | criado na conclusao; retenção a definir | sim | acessivel por fluxo aprovado | agregavel ao Meu Caminho sem duplicar conteudo | provavel |
| `minute_before_signals` | Sinais estruturados nao interpretativos | Produto | operacional ou derivada minimizada | criado por evento/estado | sim | pode existir sem conta | pode alimentar agregacao minimizada | avaliar no MA-V2-02 |
| `minute_before_feedback` | Feedback especifico da experiencia | Produto | operacional/avaliativo; evitar texto intimo livre | apos resultado | sim | opcional | pode ser agregado sem Classe D | avaliar no MA-V2-02 |

Modelagem fisica fica para MA-V2-02. Nao decidir agora entre tabela normalizada, snapshot, JSONB deliberado ou outra estrutura.

---

# 7. Classe de dados

Classe D — intimos / alta protecao:

- respostas abertas;
- resultado pessoal;
- reflexoes;
- episodios relatados;
- pensamentos relatados;
- frase final;
- snapshot de resultado quando incluir autorrelato.

Operacional, conforme classificacao futura:

- IDs tecnicos;
- status;
- timestamps;
- versao da experiencia;
- completion state;
- eventos sanitizados.

---

# 8. Meu Caminho agrega, nao duplica

Meu Caminho pode conhecer:

- `experience_id`;
- `display_name`;
- `presentation_status`;
- `started_at`;
- `completed_at`;
- `last_activity`;
- acao legitima disponivel;
- existencia de registro/resultado;
- ponte segura para retomada/visualizacao quando autorizada.

Meu Caminho nao deve receber:

- texto de Q1;
- texto de Q2;
- texto de Q3;
- texto livre Q5;
- Q6;
- snapshot completo;
- conteudo intimo;
- token bruto;
- frase interna.

O dominio do Minuto permanece proprietario do conteudo intimo.

---

# 9. Resultado deterministico

O MVP nao usa LLM para interpretar respostas.

Resultado:

```text
respostas da pessoa
+ labels neutras
+ copy fixa aprovada
```

Proibido:

- score;
- diagnostico;
- perfil;
- causa;
- Ponto de Interrupcao automatico;
- recomendacao psicologica;
- interpretacao espiritual automatica;
- promessa clinica, financeira ou espiritual.

---

# 10. Analytics

Contrato apenas; sem implementacao neste gate.

Eventos conceituais possiveis:

```text
minute_before_landing_view
minute_before_cta_click
minute_before_started
minute_before_step_completed
minute_before_completed
minute_before_result_viewed
minute_before_save_started
minute_before_claim_completed
minute_before_repeat_started
```

Os nomes finais devem seguir convencao real no gate de analytics.

Nunca enviar:

- resposta;
- texto livre;
- e-mail;
- frase interna;
- frase final;
- episode data;
- Classe D;
- token bruto;
- conteudo do resultado.

---

# 11. Logging

Pode logar:

- IDs tecnicos;
- event names;
- status;
- correlation ID;
- erro sanitizado.

Nao pode logar:

- respostas;
- raw tokens;
- Magic Link;
- OTP;
- Authorization;
- cookies;
- conteudo intimo;
- e-mail sem necessidade;
- resultado pessoal.

---

# 12. Retencao

Nao restaurar automaticamente os prazos antigos de 30/90 dias.

Estado:

```text
EM ABERTO PARA DECISAO ANTES DE PRODUCTION
```

Devem ser definidos separadamente:

- sessao incompleta;
- sessao concluida nao reivindicada;
- sessao reivindicada;
- respostas;
- resultado;
- sinais agregados;
- feedback;
- audit trail tecnico.

Retencao nao bloqueia MA-V2-02 em ambiente de desenvolvimento, desde que nenhuma policy de producao seja assumida como final.

---

# 13. Dependencias por gate

| Gate | Dependencia | Estado | Bloqueia? |
|---|---|---|---|
| MA-V2-02 | Source of truth Git do app | READY: `0de8a391bb675cfe75a6e1bd7d8781f51f9c4641` | nao |
| MA-V2-02 | Convencao de migrations | READY parcial: padrao Supabase existe no app | nao |
| MA-V2-02 | Supabase dev/Preview | READY para dev local; Preview/Production a validar em gate proprio | nao para dev |
| MA-V2-02 | Padroes RLS | READY parcial: migrations e negative tests existentes | nao |
| MA-V2-02 | Padrao de testes DB | READY parcial: `apps/web/supabase/tests` existente | nao |
| MA-V2-03 | Dominio MA-V2-02 | PENDING | sim |
| MA-V2-03 | Mecanismo seguro pre-auth | PENDING design/implementacao | sim |
| MA-V2-03 | Padrao server-side | READY parcial no app | nao |
| MA-V2-04 | Session engine | PENDING MA-V2-03 | sim |
| MA-V2-04 | Persistencia de respostas | PENDING MA-V2-02/03 | sim |
| MA-V2-04 | Contratos de validacao | READY conceitual; fisico a fechar | nao |
| MA-V2-05 | Respostas persistidas | PENDING MA-V2-04 | sim |
| MA-V2-05 | Renderer deterministico | PENDING | sim |
| MA-V2-05 | Persistencia suficiente | PENDING | sim |
| MA-V2-06 | Magic Link | READY transversal | nao |
| MA-V2-06 | Identity claim | READY transversal, adaptar ao dominio | nao |
| MA-V2-06 | Ownership | READY parcial, precisa contrato especifico | nao para planejar; sim para concluir |
| MA-V2-06 | Meu Caminho integration contract | PENDING especifico do produto | sim |
| MA-V2-07 | Resend/transacional | APPROVED transversal; configuracao operacional a validar | sim se houver envio real |
| MA-V2-07 | Brevo/marketing | nao necessario para primeiro valor | nao |
| MA-V2-08 | Landing publica | Home referencia produto; rota inexistente | nao, gate proprio |
| MA-V2-08 | Claim/Meu Caminho | nao deve bloquear landing | nao |
| MA-V2-09 | Retencao por categoria | PENDING decisao antes de Production | sim para Production |
| MA-V2-09 | Analytics allowlist | PENDING | sim para analytics live |
| MA-V2-10 | Negative tests | PENDING implementacao | sim para aceite tecnico |

---

# 14. Escopo exato do MA-V2-02

Objetivo:

```text
DOMINIO DE DADOS ESPECIFICO DO MINUTO
```

Arquivos previstos, no repo app e somente quando autorizado:

- migrations Supabase especificas `minute_before_*`;
- database types gerados se o fluxo do repo exigir;
- negative tests SQL do dominio;
- documento/checkpoint do gate se a trilha exigir.

Limites:

- nao criar `contacts`;
- nao criar `accounts`;
- nao criar consents genericos;
- nao criar `identity_claims`;
- nao criar audit generico;
- nao criar delivery generico;
- nao criar communication generico;
- nao criar Auth;
- nao criar Supabase novo;
- nao implementar UI;
- nao implementar rota;
- nao implementar landing.

Testes previstos:

- lint/validacao Supabase disponivel;
- negative tests de RLS;
- teste de isolamento anon/authenticated conforme padrao existente;
- validacao de que Classe D nao fica exposta por SELECT direto indevido.

Criterios de aceite:

- DDL minimo e justificado;
- RLS por padrao;
- ownership/pre-auth modelado sem e-mail como prova;
- entidades transversais apenas referenciadas;
- sem duplicar Shared Kernel;
- sem migrar para producao sem gate proprio;
- sem conteudo intimo em analytics/logs/marketing.

---

# 15. Fora de escopo

MA-V2-01 nao autoriza:

- codigo funcional;
- migrations;
- SQL;
- rota;
- formulario;
- landing;
- Vercel;
- Netlify;
- DNS;
- deploy;
- alteracao de app repo;
- alteracao de Shared Kernel;
- alteracao de Meu Caminho;
- alteracao de CANONs ou SPECs transversais.
