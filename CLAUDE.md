# Governança Documental — Portal Caminho da Consciência

## Ponto de Entrada

Iniciar decisões estruturais por:

`docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md`

`MAPA-00` é índice, navegação e estado documental. Ele não é autoridade normativa superior aos CANONs.

## Hierarquia de Autoridade

```text
Decisão explícita posterior de Marcos Vinicius
↓
CANON-00                            ← constituição, governança e fonte da verdade
↓
CANON especializado aplicável       ← CANON-01 a CANON-07
↓
SPEC aplicável                      ← transversal, Meu Caminho ou produto específico
↓
ADR / contrato / runbook / operação
↓
implementação
```

Se houver conflito entre implementação e documento normativo vigente, a implementação é candidata a correção. Se houver conflito entre documentos de níveis diferentes, prevalece a fonte superior.

## Document Ownership

| Assunto | Owner documental |
|---|---|
| Governança | `CANON-00` |
| Identidade | `CANON-01` |
| Método | `CANON-02` |
| Público | `CANON-03` |
| Comunicação | `CANON-04` |
| Jornada / ecossistema | `CANON-05` |
| Ética | `CANON-06` |
| Operação / qualidade | `CANON-07` |
| Portfólio | `SPEC-PORTFOLIO-00` |
| Stack transversal | `SPEC-STACK-00` |
| Meu Caminho | `SPEC-MEU-CAMINHO-001` |
| Produto específico | SPEC daquele produto |

## Documentos Canônicos (`docs/canonical/`)

| Arquivo | Função |
|---|---|
| `MAPA-00 — Índice Mestre e Estado Documental do Projeto.md` | Índice mestre e ponto inicial de navegação documental |
| `CANON-00 — Constituição, Governança e Fonte da Verdade.md` | Constituição, governança e fonte da verdade |
| `CANON-01 — Identidade, Essência, Posicionamento e Fundamentos.md` | Identidade, essência, posicionamento e fundamentos |
| `CANON-02 — Método Padrão Interrompido — Arquitetura Oficial.md` | Método Padrão Interrompido e arquitetura oficial |
| `CANON-03 — Público, Dores, Desejos e Mapa de Transformação.md` | Público, dores, desejos e mapa de transformação |
| `CANON-04 — Comunicação, Conteúdo e Linguagem Editorial.md` | Comunicação, conteúdo e linguagem editorial |
| `CANON-05 — Jornada do Portal, Produtos e Ecossistema.md` | Jornada do Portal, produtos e ecossistema |
| `CANON-06 — Ética, Segurança, Limites e Regras de Promessas.md` | Ética, segurança, limites e regras de promessas |
| `CANON-07 — Operação, Produção, Validação e Controle de Qualidade.md` | Operação, produção, validação e controle de qualidade |

## Especificações Oficiais (`docs/specs/`)

SPECs em `docs/specs/` são documentos oficiais subordinados aos CANONs. Elas governam detalhes de portfólio, Meu Caminho, stack e infraestrutura quando não houver conflito com `CANON-00` a `CANON-07`.

| Arquivo | Função |
|---|---|
| `SPEC-PORTFOLIO-00 — Esteira de Produtos, Arquitetura Comercial e Integração com Meu Caminho — V1.0.0.md` | Esteira de produtos, arquitetura comercial e integração com Meu Caminho |
| `SPEC-MEU-CAMINHO-001 — Área Pessoal de Continuidade “Meu Caminho” — V2.0.0.md` | Arquitetura funcional e auditoria obrigatória de Meu Caminho |
| `SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.0.0.md` | Stack, integrações, decisões técnicas abertas e infraestrutura |

## Referências Legadas (`docs/reference/pending-review/`)

Documentos em `docs/reference/pending-review/` são referências legadas sem autoridade canônica. Eles estão preservados para auditoria futura e não podem alterar `CANON-00` a `CANON-07`.

## Documentos Operacionais (`docs/operations/`)

- `CURRENT.md` — estado operacional transversal do projeto.
- `WORKSTREAM_ISOLATION_AND_HANDOFF.md` — isolamento de trilhas, dependências e continuidade entre agentes.
- `SITE_INSTITUCIONAL_BASELINE.md` — baseline protegida do site institucional.
- `EXECUTION_CONTEXT_AND_SITE_GUARDRAILS.md` — verificação de contexto, classificação de superfície e guardrails.

## Início de Sessão

Ler `CURRENT.md`, iniciar por `MAPA-00` e consultar os CANONs/SPECs relevantes à tarefa. Responder internamente:

```text
GATE ATUAL:
OBJETIVO:
WORKSTREAM:
DOMÍNIO:
OWNER_SPEC:
BRANCH:
ESTADO DO REPOSITÓRIO:
BLOCKERS:
DOCUMENTOS RELEVANTES:
CRITÉRIO DE APROVAÇÃO:
```

## Durante a Sessão

- Para roteiro, hook, vídeo, anúncio, revisão ou auditoria editorial: consultar `MAPA-00`, `CANON-03`, `CANON-04` e `CANON-06`.
- Para portfólio, esteira, preço, hipótese comercial ou arquitetura de oferta: consultar `SPEC-PORTFOLIO-00`.
- Para stack, app, Vercel, Supabase, Auth, Storage, RLS, checkout ou infraestrutura: consultar `SPEC-STACK-00` e usar o repo correto.
- Para Meu Caminho: usar trilha própria e `SPEC-MEU-CAMINHO-001`.
- Para produto específico: usar chat/sessão, branch/worktree e SPEC próprios daquele produto.
- Não produzir texto genérico de IA. Não inventar tom corporativo. Consultar `CANON-04`.
- Trabalhar por gates. Não misturar mudanças não relacionadas.
- Nunca iniciar automaticamente o próximo gate sem autorização humana.

## CURRENT Transversal

`CURRENT.md` geral só deve ser atualizado quando houver:

- decisão transversal;
- mudança global;
- alteração de arquitetura;
- integração documental;
- novo gate transversal;
- blocker que atravesse trilhas;
- mudança real de estado institucional geral.

Sessão de produto atualiza checkpoint/current próprio do produto. Sessão de Meu Caminho atualiza checkpoint próprio de Meu Caminho.

## Alternância Claude Code / Codex

Claude Code e Codex são coimplementadores. Dentro da mesma trilha, um pode continuar o trabalho do outro.

Antes da troca, quando houver trabalho em andamento, registrar `CHECKPOINT DE CONTINUIDADE` com:

- repo;
- branch;
- HEAD;
- objetivo;
- feito;
- arquivos;
- migrations;
- testes;
- pendências;
- próximo passo;
- riscos.

Não tratar automaticamente um agente como auditor do outro; auditoria precisa ser pedida ou fazer parte do gate.

## Stop Conditions

Parar e reportar antes de editar se:

- owner documental não estiver claro;
- repo estiver errado;
- branch não corresponder à trilha;
- mudança invadir outra trilha;
- houver conflito com CANON;
- for necessária decisão de Marcos;
- Production estiver envolvida sem gate;
- requisito transversal surgir dentro de produto;
- houver risco de reintroduzir namespace proibido;
- o escopo pedir implementação de app dentro do repo institucional.

## Conflito Canônico — Reportar Antes de Agir

```text
POSSÍVEL CONFLITO CANÔNICO
Documento:
Trecho:
Problema:
Impacto:
Sugestão:
```

Aguardar decisão. Após decisão humana, atualizar o documento correspondente em gate próprio.

## Estados Válidos

`FECHADO` | `ABERTO` | `EM ANDAMENTO` | `PENDENTE` | `BLOCKED` | `APROVADO` | `REJEITADO` | `HIPÓTESE`

Nunca registrar hipótese como decisão fechada. Nunca registrar ação planejada como executada.

## Quando Alterar CANON-00 a CANON-07

Somente após decisão explícita de Marcos. Registrar versão, data, decisão e impacto nos demais documentos.
