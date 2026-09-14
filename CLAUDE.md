# Governança Documental — Portal Caminho da Consciência

## Hierarquia de autoridade

```
MAPA-00                             ← indice mestre e ponto inicial de navegacao
↓
CANON-00                            ← constituicao, governanca e fonte da verdade
↓
CANON-01                            ← identidade, essencia, posicionamento e fundamentos
↓
CANON-02                            ← metodo Padrao Interrompido
↓
CANON-03                            ← publico, dores, desejos e mapa de transformacao
↓
CANON-04                            ← comunicacao, conteudo e linguagem editorial
↓
CANON-05                            ← jornada do Portal, produtos e ecossistema
↓
CANON-06                            ← etica, seguranca, limites e promessas
↓
CANON-07                            ← operacao, producao, validacao e qualidade
↓
CURRENT.md                          ← estado operacional, nao contrariar CANON-00 a CANON-07
```

Para decisões estruturais do Portal Caminho da Consciência, iniciar por `docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md`.
A fonte normativa vigente é `CANON-00` a `CANON-07`, mantida em `docs/canonical/`.

## Documentos canônicos (`docs/canonical/`)

| Arquivo | Função |
|---|---|
| `MAPA-00 — Índice Mestre e Estado Documental do Projeto.md` | Indice mestre e ponto inicial de navegacao documental |
| `CANON-00 — Constituição, Governança e Fonte da Verdade.md` | Constituicao, governanca e fonte da verdade |
| `CANON-01 — Identidade, Essência, Posicionamento e Fundamentos.md` | Identidade, essencia, posicionamento e fundamentos |
| `CANON-02 — Método Padrão Interrompido — Arquitetura Oficial.md` | Metodo Padrao Interrompido e arquitetura oficial |
| `CANON-03 — Público, Dores, Desejos e Mapa de Transformação.md` | Publico, dores, desejos e mapa de transformacao |
| `CANON-04 — Comunicação, Conteúdo e Linguagem Editorial.md` | Comunicacao, conteudo e linguagem editorial |
| `CANON-05 — Jornada do Portal, Produtos e Ecossistema.md` | Jornada do Portal, produtos e ecossistema |
| `CANON-06 — Ética, Segurança, Limites e Regras de Promessas.md` | Etica, seguranca, limites e regras de promessas |
| `CANON-07 — Operação, Produção, Validação e Controle de Qualidade.md` | Operacao, producao, validacao e controle de qualidade |

## Especificações oficiais (`docs/specs/`)

SPECs em `docs/specs/` sao documentos oficiais subordinados aos CANONs. Elas governam detalhes de portfólio, Meu Caminho, stack e infraestrutura quando nao houver conflito com `CANON-00` a `CANON-07`.

| Arquivo | Função |
|---|---|
| `SPEC-PORTFOLIO-00 — Esteira de Produtos, Arquitetura Comercial e Integração com Meu Caminho — V1.0.0.md` | Esteira de produtos, arquitetura comercial e integração com Meu Caminho |
| `SPEC-MEU-CAMINHO-001 — Área Pessoal de Continuidade “Meu Caminho” — V2.0.0.md` | Arquitetura funcional e auditoria obrigatória de Meu Caminho |
| `SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.0.0.md` | Stack, integrações, decisões técnicas abertas e infraestrutura |

## Referencias legadas (`docs/reference/pending-review/`)

Documentos em `docs/reference/pending-review/` sao referencias legadas sem autoridade canonica. Eles estao preservados apenas para auditoria futura e nao podem alterar `CANON-00` a `CANON-07`.

## Documentos operacionais (`docs/operations/`)

- `CURRENT.md` — estado real do projeto agora: gate, branch, HEAD, deploys, blockers, pendências e próximos passos.
- `SITE_INSTITUCIONAL_BASELINE.md` — baseline protegida do site institucional; rotas, arquivos, infra e SHAs de produção.
- `EXECUTION_CONTEXT_AND_SITE_GUARDRAILS.md` — guardrails obrigatórios para Claude Code e todos os agentes: CTX-00, classificação de superfície (INSTITUTIONAL_NETLIFY / PRODUCT_APP_VERCEL), arquivos protegidos, regras de staging e Sintonize.

## Regras para Claude Code e agentes de IA

### Início de sessão
Ler `CURRENT.md`, iniciar por `MAPA-00` e consultar os documentos `CANON-00` a `CANON-07` relevantes à tarefa. Responder internamente:
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
- Para qualquer tarefa de roteiro, hook, Short, vídeo longo, anúncio, revisão ou auditoria editorial: iniciar por `MAPA-00` e consultar os CANONs relevantes, especialmente `CANON-03`, `CANON-04` e `CANON-06`.
- `CANON-00` a `CANON-07` sao relativamente estaveis. Nao altera-los automaticamente.
- Se houver conflito entre código e documento canônico, o código é o candidato a correção.
- Se houver conflito entre `CURRENT.md` e `CANON-00` a `CANON-07`, prevalece o documento canonico.
- Não produzir texto genérico de IA. Não inventar tom corporativo. Ver Doc 04.
- Não criar tabelas, alterar autenticação, mudar deploy ou arquitetura sem consultar `MAPA-00`, os CANONs técnicos/operacionais vigentes e `SPEC-STACK-00` quando aplicável.
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

### Quando alterar CANON-00 a CANON-07
Somente após decisão explícita de Marcos. Registrar versão, data, decisão e impacto nos demais documentos.
