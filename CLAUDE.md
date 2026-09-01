# Governança Documental — Portal Caminho da Consciência

## Hierarquia de autoridade

```
00 Matriz de Governança Conceitual  ← fronteiras de autoria, PI e linguagem (transversal)
↓
01 Fundacional / Estratégico        ← autoridade estratégica máxima
↓
02 Jornada / Produtos
↓
03 Editorial / Aquisição
03.A Regra Complementar — Percepção Antes da Explicação  ← lida em conjunto com 03
03.B Mapa Editorial Mestre — Big Ideas, Cenas, Soluções, Oferta, Ganchos e Arquitetura de Aquisição  ← lido em conjunto com 03 e 03.A
↓
04 Identidade / Comunicação
↓
05 Arquitetura Técnica
↓
CURRENT.md                          ← estado operacional, não contrariar 00–05
```

> **Nota transitória:** O Doc 00 foi criado após análise dos materiais da formação Sintonize Prosperidade. Em conflitos sobre autoria, propriedade intelectual, fronteiras Portal/Padrão Interrompido/Sintonize, 8 Prosperidades, protocolos e posicionamento de Marcos, o Doc 00 prevalece sobre os demais até a revisão coordenada dos Docs 01–05.

## Documentos canônicos (`docs/canonical/`)

| Arquivo | Função |
|---|---|
| `00-matriz-governanca-conceitual.md` | Fronteiras de autoria, PI, Sintonize, Radar, linguagem público/interno |
| `01-fundacional-estrategico.md` | Propósito, visão, posicionamento, método, princípios |
| `02-jornada-produtos-servicos-protocolos.md` | Jornada do cliente, ofertas, entregáveis, protocolos |
| `03-sistema-editorial-aquisicao-experimentacao.md` | Conteúdo, funil, SEO, YouTube, CTAs, métricas |
| `03a-regra-complementar-percepcao-antes-da-explicacao.md` | Arquitetura psicológica do conteúdo — percepção antes da explicação; lida em conjunto com 03 |
| `03b-mapa-editorial-mestre.md` | Big Ideas, Cenas, Soluções, Oferta, Ganchos e Arquitetura de Aquisição V1.0; lido em conjunto com 03 e 03.A |
| `04-identidade-voz-espiritualidade-comunicacao.md` | Design, paleta, tipografia, voz, claims, compliance |
| `05-arquitetura-tecnica-dados-ecossistema.md` | Infra, banco, deploy, integrações, LGPD, segurança |

## Documento operacional (`docs/operations/`)

`CURRENT.md` — estado real do projeto agora: gate, branch, HEAD, deploys, blockers, pendências e próximos passos.

## Regras para Claude Code e agentes de IA

### Início de sessão
Ler `CURRENT.md` + documentos canônicos relevantes à tarefa. Responder internamente:
```
GATE ATUAL:
OBJETIVO:
BRANCH:
ESTADO DO REPOSITÓRIO:
BLOCKERS:
DOCUMENTOS CANÔNICOS RELEVANTES:
CRITÉRIO DE APROVAÇÃO:
```

### Durante a sessão
- Para qualquer tarefa de roteiro, hook, Short, vídeo longo, anúncio, revisão ou auditoria editorial: ler **Documento 03 + Documento 03.A + Documento 03.B em conjunto**. O Documento 03 define o sistema editorial geral; o Documento 03.A esclarece que a arquitetura psicológica de percepção não deve ser transformada em fórmula rígida de roteiro; o Documento 03.B é o Mapa Editorial Mestre com Big Ideas, Cenas, Soluções, Oferta, Ganchos e Arquitetura de Aquisição.
- Documentos 01–05 são relativamente estáveis. Não alterá-los automaticamente.
- Se houver conflito entre código e documento canônico, o código é o candidato a correção.
- Se houver conflito entre `CURRENT.md` e 01–05, prevalece o documento canônico.
- Não produzir texto genérico de IA. Não inventar tom corporativo. Ver Doc 04.
- Não criar tabelas, alterar autenticação, mudar deploy ou arquitetura sem consultar Doc 05.
- Trabalhar por gates. Não misturar mudanças não relacionadas.

### Conflito canônico — reportar antes de agir
```
POSSÍVEL CONFLITO CANÔNICO
Documento:
Trecho:
Problema:
Impacto:
Sugestão:
```
Aguardar decisão. Após decisão humana, atualizar o documento correspondente.

### Fim de sessão
Atualizar `CURRENT.md` com estado verificável:
```
O que foi feito:
O que ficou pendente:
Branch:
HEAD:
Working tree:
Build/preview:
Blockers:
Próxima ação:
```
Se gate encerrado: registrar `GATE X — APROVADO ✅` e abrir o próximo.

### Estados válidos no CURRENT.md
`FECHADO` | `ABERTO` | `EM ANDAMENTO` | `PENDENTE` | `BLOCKED` | `APROVADO` | `REJEITADO` | `HIPÓTESE`

Nunca registrar hipótese como decisão fechada. Nunca registrar ação planejada como executada.

### Quando alterar Documentos 01–05
Somente após decisão explícita de Marcos. Registrar versão, data, decisão e impacto nos demais documentos.
