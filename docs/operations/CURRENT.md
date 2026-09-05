# PORTAL CAMINHO DA CONSCIÊNCIA
## Documento 06 — CURRENT, Decisões e Plano Operacional Vivo — V2.5

**STATUS:** documento operacional vivo  
**DATA DE CORTE:** 05/09/2026  
**HORIZONTE:** estado atual + próximos 7–14 dias  
**FUNÇÃO:** manter Marcos, ChatGPT, Claude Code, Codex e demais agentes alinhados sobre o que é fato, o que está decidido, o que está pendente e qual é o próximo movimento  
**SUBSTITUI:** Documento 06 — CURRENT — V2.4

> **Onde estamos. O que já foi decidido. O que está pendente. Qual é o próximo movimento.**

---

# 0. Função deste documento

Este é o documento operacional vivo do **Portal Caminho da Consciência**.

Ele não substitui os Documentos 00 a 05.

Sua função é registrar somente o estado atual verificável e as decisões que governam a execução imediata:

- identidade vigente;
- versões canônicas;
- gates concluídos;
- gates adiados;
- oferta pública;
- estado técnico;
- formação Sintonize;
- prioridades;
- pendências;
- blockers reais;
- métricas;
- links;
- branches;
- deploys;
- próximos 7–14 dias.

O CURRENT deve permitir que qualquer agente autorizado responda rapidamente:

1. onde o projeto está agora;
2. o que está fechado;
3. o que ainda está aberto;
4. o que não deve ser implementado;
5. qual é a prioridade;
6. qual é o próximo gate;
7. quais fatos precisam ser verificados antes de agir.

---

## 0.1. Regra de atualização

Atualizar este arquivo quando houver:

- nova decisão fechada;
- certificação concluída;
- mudança de oferta;
- abertura/fechamento de gate;
- alteração de domínio, deploy ou repo;
- mudança de prioridade;
- blocker real;
- início/encerramento de campanha;
- mudança de tracking;
- implementação de checkout/CRM/Radar;
- alteração canônica relevante.

Não registrar:

- brainstorm;
- hipótese ainda não priorizada;
- detalhe já encerrado sem impacto;
- narrativa longa que pertence aos Documentos 00–05.

---

## 0.2. Regra de precedência

Quando houver conflito:

1. Documento 00 — autoria, propriedade intelectual, Sintonize, 8 Prosperidades, Protocolos Sintonize, Anjos e apresentação pública de Marcos;
2. Documento 01 — propósito e estratégia;
3. Documento 02 — jornada e produtos;
4. Documento 03 — editorial, aquisição e experimentação;
5. Documento 04 — identidade, voz, espiritualidade e claims;
6. Documento 05 — arquitetura técnica e dados;
7. CURRENT — estado operacional real.

> **O CURRENT pode dizer que algo previsto nos documentos canônicos ainda não existe. Ele não pode redefinir silenciosamente a estratégia.**

---

# PARTE I — SNAPSHOT ATUAL

# 1. Identidade vigente

**Marca principal:** Portal Caminho da Consciência  
**Método autoral:** Método Padrão Interrompido 2.0  
**Mecanismo central:** Ponto de Interrupção  
**Unidade prática:** Sequência Recorrente Observável

**7 movimentos:**

> **PERCEBER → RECONSTRUIR → COMPARAR → LOCALIZAR → ESCOLHER → EXPERIMENTAR → REAVALIAR**

**Jornada pública:**

> **DESCOBRIR → RECONHECER → MAPEAR → TRABALHAR → INTEGRAR → APROFUNDAR**

**Frase filosófica:**

> **O cenário muda. O padrão volta. A consciência pode mudar o caminho.**

**Regra comercial:**

> **dor visceral → consequências → travamento/bloqueio percebido → repetição → “de novo” → próximo passo.**

---

# 2. Arquitetura conceitual vigente

## Portal Caminho da Consciência

Ecossistema e caminho maior.

## Método Padrão Interrompido

Método autoral de 7 movimentos.

## Mapeamento Padrão Interrompido

Produto autoral de organização do caso. A especificação do **Mapeamento Padrão Interrompido 2.0** foi criada e sua construção segue em chat exclusivo. A oferta pública vigente continua governada pelo estado real do site/CURRENT até substituição deliberada.

## Mesa Radiônica Sintonize Prosperidade

Metodologia/ferramenta espiritual específica de terceiros. Formação informada como concluída.

A oferta específica já desenhada é:

> **Sessão Individual Sintonize Prosperidade**

Estado: `DESIGN_READY / PILOT_PENDING`.

Formato padrão: **assíncrono, individual, manual e à distância**.  
Modalidade ao vivo: **opcional**.

## Plataforma da Jornada / Meu Caminho

**PJ-02 / ADR-PLATAFORMA-JORNADA-001: APROVADO.**

Decisões fechadas:

- arquitetura: **1 Portal público + 1 Plataforma da Jornada**;
- experiência autenticada V1: **Meu Caminho**;
- repo institucional: `portal-caminho-da-consciencia` → Netlify → `portalcaminhodaconsciencia.com.br`;
- repo app: `portal-caminho-da-consciencia-app` → Vercel → `app.portalcaminhodaconsciencia.com.br`;
- MakerKit Lite: **Modo A — Fundação Direta**, commit `c5cba64391a80620309c4178163dc2df42568d1b`, MIT, Template Copy;
- runtime: Node.js 24.x + pnpm 11.18.0 + Turborepo;
- Supabase: **1 projeto canônico de produção para toda a Plataforma**;
- Auth V1: Magic Link/passwordless ON; Password OFF; Google OAuth fora da V1;
- shared kernel + domínios privados por produto;
- Storage privado + signed URLs curtas;
- e-mail: Supabase Auth/Resend SMTP + Resend transactional + Brevo marketing;
- checkout externo por adapter;
- RLS + negative tests obrigatórios;
- Pino com PII redaction obrigatória antes de produção.

Estado operacional:
- arquitetura = aprovada;
- repo app = definido, ainda não criado;
- Vercel = definido, ainda não criado;
- Supabase produção = definido, ainda não criado;
- DNS app = definido, ainda não configurado;
- Magic Link = aprovado, ainda não configurado em produção;
- **DOC-SYNC CANÔNICO = EM EXECUÇÃO**;
- **PJ-03A = BLOQUEADO até DOC-SYNC aprovado, auditado, commitado e enviado ao remoto**.

## Regra

> **Padrão Interrompido organiza, localiza, escolhe e reavalia. Sintonize pode trabalhar uma intenção ou ponto quando pertinente. Quem já procura Sintonize pode entrar diretamente na técnica sem obrigação de Mapeamento.**

---

# 3. Ofertas e arquitetura comercial atual

## Estado das principais ofertas

1. **O Minuto Anterior** — SPEC MVP V1.0 criada; produto gratuito em fluxo próprio de construção/implementação.
2. **ANTES DO APERTO** — SPEC V1.1; Gates **AA-00 Demanda ✅** e **AA-01 Oferta ✅**; construção restante em chat exclusivo.
3. **Mapeamento Padrão Interrompido 2.0** — SPEC de design/oferta/operação criada; construção em chat exclusivo; preço vigente do produto atual: R$197 até nova decisão.
4. **Sessão Individual Sintonize Prosperidade** — SPEC V1.0 + Addendum V1.1; `DESIGN_READY / PILOT_PENDING`.
5. **Ciclo Padrão Interrompido — 21 dias** — flagship futuro a pilotar depois da base operacional necessária.
6. **Premium** — aprofundamento seletivo futuro.

## Sintonize — arquitetura comercial fechada para piloto

### Assíncrona — padrão

- preço inicial de validação: **R$297**;
- aplicação manual por Marcos;
- sem chamada obrigatória;
- Registro da Sua Sessão;
- áudio personalizado de 5–10 min como referência;
- integração 7 dias;
- D7.

### Ao vivo — opcional

- hipótese inicial: **R$397**;
- agenda exclusiva e interação síncrona;
- não comunicar como mais eficaz.

### Rotas

- demanda direta pela técnica → Sintonize;
- Mapeamento → Sintonize como possibilidade consentida.

## Site institucional

Implementação avançada. Pendência reportada por Marcos: **revisão final em smartphone** antes do fechamento definitivo do gate correspondente. Preservar `/mapeamento` e não presumir novo estado de produção sem validação no chat técnico.

## Meta econômica

Meta final: **R$30.000 líquidos em 90 dias**.  
Meta operacional de planejamento: **aproximadamente R$45–47 mil de receita**, sujeita à margem real.

---

# 4. Prioridade atual

## P0

> **CONCLUIR E AUDITAR O DOC-SYNC PÓS-PJ-02 + MANTER PRODUTOS EM CHATS EXCLUSIVOS + COLOCAR O CALENDÁRIO DE CONTEÚDO EM PRODUÇÃO. PJ-03A PERMANECE BLOQUEADO ATÉ APROVAÇÃO DOCUMENTAL.**

Para Sintonize, a ordem é:

> **DOC-SYNC → SINT-00/SINT-P0 → SINT-01/SINT-P1 → 5–10 práticas → primeiras sessões pagas → página/live → aquisição.**

## Regra comercial

Porta 2 permanece forte para conversão; Porta 1 pode captar intenção direta por Mesa/Sintonize quando a oferta estiver `live`.

## Não é prioridade imediata

- comunidade;
- formação;
- catálogo de protocolos derivados;
- automação da Mesa Sintonize;
- grupos Sintonize antes de validar individual;
- novos produtos por dor antes dos gates do primeiro;
- reconstrução técnica complexa sem necessidade real.

---

# PARTE II — ARQUITETURA DOCUMENTAL

# 5. Documentos canônicos vigentes

| Documento | Versão vigente | Estado |
|---|---:|---|
| 00 — Governança Conceitual | V1.3 | mantido |
| 01 — Fundacional Estratégico | **V4.5** | arquitetura PJ-02 incorporada estrategicamente |
| 02 — Jornada, Produtos e Serviços | **V2.5** | Meu Caminho incorporado como camada transversal |
| 02.A — Framework de Produtos | V1.0 | mantido |
| 03 — Editorial e Aquisição | V2.2 | mantido |
| 03.A — Percepção Antes da Explicação | V1.0 | mantido |
| 03.B — Mapa Editorial | V1.2 | mantido |
| 03.C — Banco de Reels | V1.1 | mantido |
| 03.D — Prompts / Search / Copy | V2.2 | mantido |
| 03.E — Execução Editorial | V1.1 | mantido |
| 03.F — Páginas / Oferta / Conversão | V1.0 | mantido |
| 04 — Identidade e Comunicação | V2.3 | mantido |
| 05 — Arquitetura Técnica | **V2.2** | arquitetura definitiva pós-PJ-02 |
| 06 — CURRENT | **V2.5** | este arquivo |

**SPEC transversal vigente:** Plataforma da Jornada **Meu Caminho** — Arquitetura de Execução Aprovada — **V1.1**.

**SPECs de produto reconciliadas nesta rodada:**
- O Minuto Anterior — V1.1;
- ANTES DO APERTO — V1.2;
- Mapeamento Padrão Interrompido 2.0 — V1.1;
- Sintonize — SPEC V1.0 + Addendum V1.1 + Addendum de Integração V1.2.

Não criar novo Documento 07. A SPEC transversal V1.1 governa a execução técnica em conjunto com o Documento 05 V2.2 e o ADR aprovado.

---

# 6. Estado de incorporação no repositório

As versões canônicas atualizadas até esta revisão foram produzidas. **Antes de assumir que V4.4/V2.5/V2.5 já estão versionadas no GitHub, verificar o repositório.** O DOC-SYNC anterior da Sintonize não prova automaticamente a incorporação destas três novas versões.

Próxima ação documental recomendada:

> **GATE DOC-SYNC — incorporar/versionar o pacote canônico 00–06 no repositório, em mudança docs-only, sem alterar site ou produto.**

Critérios:

- inventário dos arquivos existentes;
- preservar histórico;
- substituir versões obsoletas deliberadamente;
- não apagar fontes necessárias sem registro;
- atualizar README documental se aplicável;
- atualizar CURRENT com commit/HEAD real;
- working tree limpo ao final.

---

# PARTE III — GATES

# 7. Gates concluídos

## R1 — Migração de Identidade e Fundação Técnica

**STATUS:** ✅ APROVADO

Concluído:

- nova marca;
- repo renomeado;
- pasta local renomeada;
- `origin` atualizado;
- documentação técnica inicial;
- regras de `.gitignore`;
- fundação da migração.

---

## R2 — Oferta Inicial e Página de Conversão

**STATUS:** ✅ APROVADO

Concluído:

- página nova publicada;
- Mapeamento Padrão Interrompido R$197;
- nova identidade visual;
- mobile first validado;
- CTA WhatsApp funcional;
- SEO, canonical, OG e JSON-LD;
- references antigas removidas;
- depoimentos não autorizados removidos;
- order bump removido;
- tracking de CTA implementado.

---

## R3A — Mensuração, GTM, GA4 e Consentimento

**STATUS:** ✅ APROVADO

Concluído:

- Google Tag Manager;
- GA4;
- Consent Mode v2;
- Conversion Linker;
- `dataLayer`;
- `offer_cta_click`;
- `scroll_depth`;
- `section_view`;
- `whatsapp_click`;
- estrutura de aquisição preparada.

---

## R3B — Conversões Google Ads

**STATUS:** ✅ APROVADO

Concluído:

- `whatsapp_click` configurado no Google Ads como conversão secundária;
- não utilizado como compra;
- arquitetura preparada para futura evolução para lead qualificado e venda.

---

# 8. Gates adiados / não iniciados

## R3C — Google Search

**STATUS:** READY TO IMPLEMENT / EXECUÇÃO ADIADA

A campanha Search foi especificada, mas não é prioridade imediata.

**Blocker técnico:** nenhum confirmado.

Não criar campanha agora apenas porque a especificação está pronta.

Reabrir quando houver decisão deliberada de investir em tráfego pago.

---

## Gates Plataforma da Jornada

```text
PJ-00       ✅ APROVADO
PJ-00Δ      ✅ APROVADO
PJ-01       ✅ APROVADO
PJ-01V      ✅ APROVADO
PJ-01V.1    ✅ APROVADO
PJ-02       ✅ APROVADO
ADR         ✅ APROVADO
```

**Estado atual:** DOC-SYNC CANÔNICO EM EXECUÇÃO.

**Próximo gate técnico:** PJ-03A — Bootstrap local.

**Gate:** BLOQUEADO até:
1. conclusão deste DOC-SYNC;
2. auditoria documental;
3. aprovação;
4. commit/push documental.

Sequência posterior:

```text
PJ-03A — Bootstrap local
PJ-03B — Supabase Foundation
PJ-03C — Vercel Preview
PJ-03D — Identity/Auth Core
PJ-04  — Security / Shared Kernel
Integration Contracts dos produtos
```

Não iniciar PJ-03A nesta rodada.

---

## R4 — Operação Comercial e Entrega

**STATUS:** PARCIALMENTE DESTRAVADO / EXECUÇÃO POR PRODUTO

A formação Sintonize e o design da Sessão Individual deixaram de ser blockers conceituais.

Para Sintonize, pré-condições remanescentes:

1. registrar certificado/documento e nomenclatura exata quando disponíveis;
2. fechar SINT-00/SINT-P0;
3. finalizar SINT-01/SINT-P1 com operação assíncrona;
4. executar 5–10 práticas;
5. validar SLA e tempo humano;
6. confirmar preço pago inicial;
7. definir pagamento/política comercial;
8. realizar primeiras sessões pagas controladas;
9. só então página `live` e aquisição ampliada.

A modalidade ao vivo é opcional e não é pré-condição para operação do produto padrão.

---

# PARTE IV — SINTONIZE PROSPERIDADE

# 9. Estado da formação e autorização

**Acesso oficial:** confirmado.

**Conclusão da formação:** informada por Marcos em 03/09/2026.

**Certificado/documento e nomenclatura exata:** registrar no CURRENT quando disponíveis.

**Autorização informada em 04/09/2026:** Marcos informou que sua formação/habilitação autoriza divulgar e aplicar a metodologia e os protocolos oficiais, utilizar os materiais necessários à prática e criar futuros protocolos/atendimentos baseados no curso, respeitando autoria e marca.

Consequência:

- a legitimidade de desenho da oferta está destravada;
- não ampliar titulação além do documento real;
- não confundir autorização de uso com transferência de autoria;
- não publicar/redistribuir material integral sem base correspondente.

---

# 10. Posicionamento profissional de Marcos

**FECHADO:**

> **Marcos não adotará “terapeuta” como identidade profissional pública.**

Posicionamento-base:

- fundador do Portal Caminho da Consciência;
- criador do Método Padrão Interrompido;
- condutor da Sessão Individual Sintonize Prosperidade, com qualificação pública somente na nomenclatura sustentada pelo certificado.

---

# 11. 8 Prosperidades

**FECHADO:**

1. Financeira;
2. Saúde;
3. Relacionamentos;
4. Emocional;
5. Espiritual;
6. Criativa;
7. Tempo e Liberdade;
8. Profissional.

Familiar/Ancestral não é uma das 8 Prosperidades oficiais.

---

# 12. Sessão Individual Sintonize Prosperidade

**STATUS:** `DESIGN_READY / PILOT_PENDING`.

## 12.1. Formato padrão

> **Assíncrono, individual, manual e à distância.**

Não exige videochamada.

## 12.2. Oferta de validação

- preço assíncrono: **R$297**;
- SLA inicial: até **2 dias úteis** após anamnese completa e pagamento confirmado, sujeito ao piloto;
- Registro da Sua Sessão;
- áudio personalizado 5–10 min como referência;
- integração de 7 dias;
- check-in D7.

## 12.3. Modalidade ao vivo

- opcional;
- hipótese inicial: **R$397**;
- diferença = agenda/interação/tempo humano;
- não comunicar maior eficácia.

## 12.4. Perguntas Divinas

Podem ser utilizadas quando cabíveis, mas deixam de ser destaque comercial central.

---

# 13. Rotas de entrada

## Direta

> **Search / conteúdo / indicação → Sintonize → qualificação → sessão**

Não exigir Mapeamento.

## Pós-Mapeamento

> **Mapeamento → Sintonize apresentada como possibilidade → consentimento → Brief de Encaminhamento → sessão**

O Mapeamento não determina protocolo ou leitura da Mesa.

---

# 14. Propriedade intelectual e protocolos

- Protocolos Sintonize oficiais = metodologia de terceiros;
- Protocolos Padrão Interrompido = autorais e separados;
- futuros protocolos derivados baseados na formação = somente depois da validação da Sessão Individual + DOC-SYNC, com autoria/origem documentadas.

Nenhum protocolo derivado novo deve ser lançado agora.

---

# 15. Privacidade Sintonize

Separar:

### Comercial

- nome/contato;
- origem;
- pagamento;
- status;
- consentimento administrativo.

### Privado da sessão

- intenção;
- relatos;
- Perguntas Divinas;
- crenças/medos/faltas;
- notas radiestésicas;
- Registro;
- áudio;
- D7.

Conteúdo privado não vai para GA4, Meta, Ads ou CRM de marketing.

---

# PARTE V — ESTADO TÉCNICO ATUAL

# 15. Repositório

**GitHub:**

`https://github.com/marvin-ds/portal-caminho-da-consciencia`

**Local:**

`C:\Projetos\portal-caminho-da-consciencia`

**Produção:** `main`

**Regra:**

Antes de qualquer novo gate técnico, verificar:

```powershell
Get-Location
git status -sb
git remote -v
git branch --show-current
git rev-parse HEAD
git rev-list --left-right --count origin/main...main
```

Não reutilizar hash antigo como se fosse atual.

---

# 16. Netlify

**Uso:** site institucional.

**Estado:** produção funcionando no domínio principal.

**Política de deploy:**

- testar local;
- consolidar correções;
- no máximo um Preview relevante por gate;
- um deploy de produção por gate;
- evitar gasto de créditos com ajustes sucessivos;
- documentação canônica fora do bundle público;
- assets não utilizados fora do deploy.

---

# 17. Domínios

**Principal:**

`portalcaminhodaconsciencia.com.br`

**Histórico:**

`portalanjosdaprosperidade.com.br`

O domínio histórico, quando mantido, deve funcionar como:

- proteção;
- redirect;
- SEO residual.

Não deve servir experiência antiga concorrente.

---

# 18. Mobile first

**FECHADO:**

Todo site, aplicativo, Radar, jornada ou produto digital deve ser projetado mobile first.

Validar prioritariamente:

- 360 px;
- 375 px;
- 430 px;
- 768 px;
- desktop.

---

# PARTE VI — TRACKING E MENSURAÇÃO

# 19. Infraestrutura vigente

Implementado:

- GTM;
- GA4;
- Consent Mode v2;
- Conversion Linker;
- Meta Pixel;
- eventos próprios.

Eventos principais:

```text
page_view
scroll_depth
section_view
offer_cta_click
whatsapp_click
```

---

# 20. Semântica comercial

**FECHADO:**

- `offer_cta_click` = intenção intermediária;
- `whatsapp_click` = intenção comercial on-site;
- `whatsapp_click` ≠ lead confirmado;
- `whatsapp_click` ≠ venda;
- `purchase` futuro = pagamento confirmado.

---

# 21. Conversões futuras

Somente quando operação existir:

```text
generate_lead
working_lead
qualify_lead
disqualify_lead
close_convert_lead
purchase
refund
```

Não implementar prematuramente.

---

# 22. Atribuição

Preservar quando tecnicamente aplicável:

- UTMs;
- `gclid`;
- `gbraid`;
- `wbraid`;
- landing page;
- CTA de origem.

Objetivo futuro:

> **origem → visita → CTA → WhatsApp → lead → venda → receita**

---

# PARTE VII — PRIORIDADES DOS PRÓXIMOS 7–14 DIAS

# 23. P0 — Sincronizar documentação canônica

- confirmar que o DOC-SYNC anterior da Sintonize foi incorporado corretamente ao repositório;
- incorporar **Documento 01 V4.4**, **Documento 02 V2.5** e **CURRENT V2.5** em mudança docs-only;
- preservar 00 V1.3, 02.A V1.0, família 03 vigente, 04 V2.3 e 05 V2.1;
- revisar links/referências ativas que apontem para 01 V4.3, 02 V2.3 ou CURRENT V2.3;
- **não criar Documento 05 V2.2 antes de PJ-00/PJ-02**.

---

# 24. P0 — DOC-SYNC PÓS-PJ-02

- reconciliar 01, 02, 05, SPEC transversal e SPECs dos quatro produtos;
- atualizar CURRENT por último;
- auditar conflitos e estados transitórios;
- não implementar infraestrutura;
- não iniciar PJ-03A;
- status esperado: **DOC-SYNC — READY FOR REVIEW**.

---

# 25. P0 — Mapeamento Padrão Interrompido 2.0

Fechar:

- formulário;
- estrutura de 2–3 episódios;
- Sequência Recorrente Observável;
- Ponto de Interrupção;
- Territórios provisórios;
- plano de observação;
- relatório/áudio;
- gate de próximo passo.

---

# 26. P0 — Produto Dinheiro

Construir MVP simples:

- nome;
- promessa delimitada;
- 5–7 áudios;
- exercícios;
- workbook;
- página de vendas;
- checkout;
- tracking;
- criativos Porta 2;
- política de reembolso/uso;
- gate de CAC e satisfação.

Preço inicial de referência: **R$97**, ainda sujeito ao teste.

---

# 27. P0 — Sintonize controlada

- incorporar SPEC V1.0 + Addendum V1.1;
- fechar operação assíncrona;
- finalizar anamnese, consentimento, Registro da Sua Sessão, áudio e D7;
- executar **5–10 práticas**, majoritariamente assíncronas;
- medir `T_leitura_anamnese`, `T_esclarecimento`, `T_preparo`, `T_mesa`, `T_registro`, `T_audio`, `T_D7`, `T_admin` e `T_total`;
- medir percepção de personalização e SLA;
- testar alguns casos ao vivo apenas para comparação;
- não automatizar leitura/aplicação da metodologia;
- não criar protocolos derivados nesta fase.

---

# 28. P1 — Conteúdo e aquisição

- continuar YouTube-first;
- revisar Calendário V4 para refletir Porta 2 comercial;
- manter Portas 1, 3 e 4 organicamente;
- usar Dinheiro e Procrastinação como territórios fortes de conteúdo;
- ativar Search pago apenas quando oferta/página estiverem alinhadas;
- medir compra, não apenas clique.

---

# PARTE VIII — DECISÕES FECHADAS

# 29. Decisões vigentes

- marca = Portal Caminho da Consciência;
- Método PI 2.0 com 7 movimentos;
- Sequência Recorrente Observável = unidade prática;
- Ponto de Interrupção = mecanismo central;
- jornada = Descobrir → Reconhecer → Mapear → Trabalhar → Integrar → Aprofundar;
- seis Territórios da Vida Real = mapa provisório a validar;
- Porta 2 = prioridade comercial;
- Porta 3 = forte porta orgânica de aprofundamento;
- Porta 1 pode converter diretamente para Sintonize quando a oferta estiver live;
- “bloqueio/travamento” = linguagem percebida, não diagnóstico;
- Sintonize = metodologia específica e oferta de intervenção possível, não componente obrigatório do Mapeamento;
- Sessão Individual Sintonize = `DESIGN_READY / PILOT_PENDING`;
- Sintonize padrão = assíncrona, manual, individual e à distância;
- Sintonize ao vivo = opcional;
- R$297 = preço inicial de validação assíncrono;
- R$397 = hipótese inicial ao vivo;
- Registro da Sua Sessão + áudio + integração 7 dias + D7 = entrega padrão assíncrona;
- Perguntas Divinas = secundárias comercialmente;
- existem rotas direta e pós-Mapeamento;
- protocolos derivados = congelados até validação da sessão individual + DOC-SYNC;
- O Minuto Anterior possui SPEC própria;
- ANTES DO APERTO possui AA-00 e AA-01 fechados;
- Mapeamento 2.0 possui SPEC e construção em fluxo próprio;
- Ciclo PI 21 dias = flagship futuro a validar;
- não criar novos protocolos autorais sem base de casos suficiente.
- Plataforma da Jornada = arquitetura transversal aprovada;
- Meu Caminho = nome aprovado da experiência autenticada V1;
- Meu Caminho não é novo produto nem nova etapa da Jornada;
- MakerKit Lite = Modo A / Fundação Direta;
- commit-base = `c5cba64391a80620309c4178163dc2df42568d1b`;
- 2 repos = institucional + app;
- 1 projeto Vercel para a Plataforma;
- 1 Supabase canônico de produção;
- Auth V1 = Magic Link/passwordless;
- PJ-02/ADR = aprovado;
- PJ-03A = bloqueado até DOC-SYNC aprovado;
- O Minuto Anterior continua sem login obrigatório antes do valor;
- ANTES DO APERTO é primeiro candidato forte ao shell autenticado completo;
- dados íntimos continuam separados por domínio;
- pedido ≠ pagamento ≠ entitlement ≠ enrollment ≠ progresso ≠ conclusão ≠ entrega;
- LMS genérico, marketplace, gamificação, comunidade e app nativo ficam fora da V1.

---

# 30. Abertas e relevantes

- titulação pública exata conforme certificado registrado;
- SLA definitivo Sintonize assíncrono;
- confirmação do preço R$297 depois de sessões pagas;
- preço definitivo do ao vivo;
- plataforma de pagamento Sintonize;
- agenda do ao vivo;
- política final de cancelamento/reagendamento;
- política de retenção do conteúdo privado;
- detalhes de implementação dos packages e migrations por gate, sem reabrir o Modo A aprovado;
- repo/monorepo definitivo da Plataforma;
- projeto Supabase definitivo/compartilhamento após inventário;
- modelo final de auth e identity linking;
- contratos finais de orders/payments/entitlements/enrollments/deliveries;
- namespaces finais de rotas, storage, ambientes e deploy;
- momento exato de ativação pública do Meu Caminho.
- momento de tornar a oferta Sintonize `live`;
- página Sintonize;
- Search Sintonize;
- primeiro protocolo derivado, somente após validação;
- validação dos seis Territórios após 20–30 Mapeamentos;
- piloto e preço final do Ciclo PI;
- desenho Premium.

---

# PARTE X — BLOCKERS E RISCOS

# 31. Blockers reais

**Nenhum blocker técnico crítico conhecido para manutenção do site ou produção de conteúdo.**

---

# 32. Pendências que não são blockers

## Registro documental da qualificação Sintonize

A conclusão da formação foi informada.

Permanece pendente, quando aplicável, registrar:

- certificado/documento;
- data;
- nomenclatura exata.

Isso não bloqueia prática controlada nem planejamento de oferta, mas bloqueia o uso público de uma titulação que ainda não esteja documentalmente sustentada.

## Google Search

Adiado por prioridade, não por falha técnica.

## R4

Adiado deliberadamente.

---

# 33. Riscos atuais

- publicar titulação não sustentada pelo documento disponível;
- misturar Sintonize com autoria do Portal;
- colocar material protegido no repo;
- digitalizar metodologia de terceiro;
- voltar a foco excessivo em prosperidade financeira;
- criar app antes de demanda;
- tratar clique no WhatsApp como venda;
- ativar mídia paga antes de oferta, página e message match estarem prontos;
- capturar keywords fora do escopo apenas por volume;
- produzir conteúdo espiritual genérico de IA;
- usar claims clínicos ou financeiros indevidos;
- deixar o CURRENT novamente ficar desatualizado.

---

# PARTE XI — MÉTRICAS VIVAS

# 34. Conteúdo

Acompanhar:

- publicações;
- viewed/swiped;
- retenção;
- duração média;
- CTR de longos;
- comentários de reconhecimento;
- compartilhamentos;
- inscritos;
- cliques;
- linguagem espontânea;
- temas vencedores;
- análise 24h/72h.

---

# 35. Página

Acompanhar:

- `page_view`;
- scroll;
- `section_view`;
- `offer_cta_click`;
- `whatsapp_click`;
- taxa página → WhatsApp;
- origem/campanha.

---

# 36. Comercial futuro

Quando R4 existir:

- leads;
- qualificados;
- ofertas;
- pagamentos;
- conversão;
- ticket;
- receita;
- reembolso;
- origem;
- CAC;
- tempo de Marcos.

---

# 37. Sintonize — piloto e validação

Registrar:

- `service_format`;
- número de práticas/pagas;
- `intake_clarity`;
- `clarification_required`;
- `intake_to_delivery_hours`;
- `delivery_on_time`;
- `human_minutes_total`;
- baseline pré-sessão;
- D7;
- satisfação;
- recomendação;
- percepção de personalização;
- desejo de continuidade;
- reembolso;
- margem por formato;
- fadiga/capacidade de Marcos.

---

# PARTE XII — LINKS E AMBIENTES

# 38. Links principais

**Site:**

`https://portalcaminhodaconsciencia.com.br`

**GitHub:**

`https://github.com/marvin-ds/portal-caminho-da-consciencia`

**Local:**

`C:\Projetos\portal-caminho-da-consciencia`

**Netlify:**

projeto da nova marca conectado ao site institucional; conferir nome/URL diretamente no painel antes de registrar dado transitório.

---

# 39. Branches

**Produção:** `main`

Cada gate deve registrar:

- branch;
- HEAD inicial;
- HEAD final;
- commits;
- working tree;
- local/remoto;
- preview;
- produção;
- rollback.

O hash atual deve ser lido do Git no início da sessão.

---

# PARTE XIII — REGRAS PARA AGENTES

# 40. Antes de qualquer tarefa

O agente deve identificar:

1. objetivo;
2. gate;
3. documentos relevantes;
4. estado real do repo;
5. escopo permitido;
6. escopo proibido;
7. risco;
8. critério de aceitação;
9. testes;
10. rollback.

---

# 41. Leitura obrigatória

Se a tarefa envolver:

- Sintonize;
- Anjos;
- 8 Prosperidades;
- protocolos;
- material de formação;
- posicionamento de Marcos;

> **ler Documento 00 primeiro.**

Se envolver tecnologia:

> **ler Documento 05 + CURRENT.**

Se envolver copy:

> **ler Documentos 01, 03, 04 + CURRENT.**

---

# 42. Proibições atuais

Nenhum agente está autorizado, sem nova decisão explícita, a:

- tornar a oferta Sintonize `live` antes dos gates de piloto/validação;
- adicionar Sintonize ao Mapeamento como obrigação;
- criar protocolo derivado antes do gate;
- automatizar a leitura/aplicação da Sintonize;
- iniciar Google Ads para cluster cuja oferta/página ainda não passou pelo gate;
- implementar checkout/CRM Sintonize sem decisão do gate operacional correspondente;
- versionar materiais da formação;
- copiar protocolos;
- criar banco de Anjos;
- inventar certificação;
- chamar Marcos de terapeuta;
- fazer deploy de produção desnecessário.

---

# PARTE XIV — DECISION LOG ATUALIZADO

# 43. Log resumido

| Data | Decisão / evento | Estado | Impacto |
|---|---|---|---|
| 30/08/2026 | Marca alterada para Portal Caminho da Consciência | FECHADO | marca, docs, site e repo |
| 30/08/2026 | “Caminho” permanece singular | FECHADO | posicionamento |
| 30/08/2026 | Padrão Interrompido permanece método autoral | FECHADO | produtos e conteúdo |
| 31/08/2026 | Gate R1 concluído | EXECUTADO | migração/fundação |
| 31/08/2026 | Domínio principal definido e publicado | EXECUTADO | SEO, site e marca |
| 31/08/2026 | Gate R2 aprovado | EXECUTADO | oferta/página |
| 01/09/2026 | Gate R3A aprovado | EXECUTADO | GTM/GA4/Consent |
| 01/09/2026 | Gate R3B aprovado | EXECUTADO | conversão secundária Ads |
| 01/09/2026 | R3C Search adiado | FECHADO COMO PRIORIDADE | mídia paga |
| 01/09/2026 | Acesso oficial à Sintonize confirmado | FATO | formação e futuro produto |
| 01/09/2026 | Marcos não usará “terapeuta” publicamente | FECHADO | comunicação |
| 01/09/2026 | Documento 00 adotado | FECHADO | governança e PI |
| 01/09/2026 | 8 Prosperidades corrigidas como estrutura Sintonize | FECHADO | método, produto e conteúdo |
| 01/09/2026 | Sintonize não será digitalizada | FECHADO | tecnologia e PI |
| 01/09/2026 | Docs 01–05 revisados | PRODUZIDO | pacote canônico |
| 01/09/2026 | CURRENT atualizado para V2.0 | PRODUZIDO | operação |
| 03/09/2026 | Conclusão da formação Sintonize informada por Marcos | FATO INFORMADO | habilita prática controlada e desenho de oferta |
| 03/09/2026 | Mapa Mestre de Palavras-Chave consolidado | PRODUZIDO | 315 termos; Search/SEO/YouTube/copy |
| 03/09/2026 | Arquitetura de quatro portas de aquisição adotada | FECHADO | técnica, intervenção, dor/repetição, compreensão |
| 03/09/2026 | Revisão incremental 00/01/02/03/03B/03D/04/06 | PRODUZIDO | harmonização documental |
| 04/09/2026 | Sessão Individual Sintonize Prosperidade especificada | PRODUZIDO | produto humano/manual em piloto |
| 04/09/2026 | Formato padrão Sintonize alterado para assíncrono | FECHADO | operação, oferta, capacidade |
| 04/09/2026 | Ao vivo definido como opcional | FECHADO | preço/agenda diferenciados |
| 04/09/2026 | R$297 assíncrono e R$397 ao vivo como referências de validação | FECHADO/HIPÓTESE | economia do piloto |
| 04/09/2026 | Registro + áudio + integração + D7 definidos como entrega padrão | FECHADO | experiência Sintonize |
| 04/09/2026 | Rotas direta e pós-Mapeamento definidas | FECHADO | jornada e message match |
| 04/09/2026 | Protocolos derivados congelados até validação + DOC-SYNC | FECHADO | governança |
| 05/09/2026 | PJ-02 / ADR-PLATAFORMA-JORNADA-001 aprovado | FECHADO | arquitetura definitiva da Plataforma |
| 05/09/2026 | DOC-SYNC canônico pós-PJ-02 iniciado | EM EXECUÇÃO | documentação |

---

# PARTE XV — PRÓXIMA AÇÃO

# 44. Próximo movimento recomendado

Existem três trilhas paralelas, sem conflito:

### Trilha A — produtos

Cada produto continua em seu chat exclusivo e em seus gates próprios. Não parar lançamento seguro apenas para esperar Meu Caminho.

### Trilha B — conteúdo

Finalizar preparação e colocar o Calendário de Conteúdos em produção, mantendo aprendizado 24h/72h.

### Trilha C — convergência transversal

Concluir e auditar este **DOC-SYNC CANÔNICO PÓS-PJ-02**. Somente após aprovação documental, commit e push liberar **PJ-03A — Bootstrap local**.

> **Produto continua andando. Convergência evita duplicação. Nenhuma implementação transversal antes do inventário/ADR.**

# 45. O que acontece depois

Se Dinheiro validar compra + margem + satisfação:

- aumentar gradualmente tráfego;
- usar compradores como fonte de linguagem e progressão;
- decidir Procrastinação;
- testar Mapeamento/Ciclo como continuidade.

Se Dinheiro não validar:

- revisar dor, promessa, página, produto e CAC antes de lançar o segundo tema.

---

# 46. Critério para mudar prioridade

Mudar prioridade quando houver evidência comercial superior, não porque surgiu nova ideia.

Indicadores:

- compras;
- margem;
- satisfação;
- conclusão;
- CAC;
- progressão;
- horas de Marcos;
- capacidade de escala.

---

# 47. Síntese operacional

> **Dor primeiro. Porta 2 converte. Porta 3 aprofunda. Ponto de Interrupção organiza o método. Sintonize intervém quando pertinente. Produto por dor cria escala. Ciclo PI cria ticket e transformação guiada. Reavaliação protege a qualidade.**

---

# 48. Governança do CURRENT

Este arquivo deve permanecer curto o suficiente para leitura no início de cada sessão relevante.

Quando crescer:

- arquivar histórico encerrado;
- manter estado atual;
- preservar decisões que ainda governam;
- remover tarefas concluídas do corpo principal;
- não duplicar os Documentos 00–05;
- atualizar links, gates e prioridades.

O CURRENT não deve virar memória infinita.

Deve permanecer:

> **um painel operacional textual do presente.**

---

# 49. Controle de versão — V2.5

**VERSÃO:** V2.5  
**DATA:** 04/09/2026  
**SUBSTITUI:** V2.3  
**MOTIVO:** reconciliar o estado operacional após aprovação do PJ-02 / ADR-PLATAFORMA-JORNADA-001 e registrar o DOC-SYNC como gate bloqueador de PJ-03A.  
**IMPACTO:** snapshot, versões canônicas, gates, decisões técnicas fechadas, sequência pós-ADR e contratos transversais dos produtos.

> **Fim do Documento 06 — CURRENT, Decisões e Plano Operacional Vivo — V2.5.**
