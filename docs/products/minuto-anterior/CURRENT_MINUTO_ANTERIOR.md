# PORTAL CAMINHO DA CONSCIENCIA

## CURRENT — O Minuto Anterior — MA-V2-01

| Campo | Estado |
|---|---|
| Produto | O Minuto Anterior |
| Workstream | PRODUCT |
| Owner spec | `SPEC-MINUTO-001 — O Minuto Anterior — MVP V2.0.0` |
| Status da owner spec | `APROVADA / VIGENTE` |
| Aprovacao formal da V2 encontrada neste gate | SIM — decisao explicita de Marcos Vinicius em 15/09/2026 |
| SPEC historica preservada | `SPEC_MVP_V1.1.md` |
| Gate atual | `MA-V2-01 — Baseline Documental e Contratos` |
| Status do gate | PASS / fechado documentalmente |
| Repo documental | `marvin-ds/portal-caminho-da-consciencia` |
| Branch documental | `docs/minuto-anterior-ma-v2-01` |
| Repo de execucao futura | `marvin-ds/portal-caminho-da-consciencia-app` |
| App branch auditada | `main` |
| App source of truth | `LOCAL_HEAD_VALIDATED` |
| Future implementation base SHA | `0de8a391bb675cfe75a6e1bd7d8781f51f9c4641` |
| Implementacao real do produto | inexistente |
| Dominio `minute_before_*` | inexistente |
| Landing `/minuto-anterior` | inexistente; Home referencia como item em construcao |
| Deploy | nenhum neste gate |

---

# 1. Estado operacional

O MA-V2-00 demonstrou que a fundacao transversal da Plataforma ja existe em grau suficiente para a retomada documental do produto.

O MA-V2-01 registra que o bloqueio antigo `PLATFORM_DEPENDENCY` generico foi substituido por dependencias especificas por gate. O produto nao deve recriar Auth, Supabase, claiming, Identity, Privacy, Communication, Audit, Meu Caminho ou infra propria.

---

# 2. Fonte de verdade Git da Plataforma

Auditoria do repo:

```text
repo:
C:/Projetos/portal-caminho-da-consciencia-app

branch:
main

local HEAD:
0de8a391bb675cfe75a6e1bd7d8781f51f9c4641

origin/main:
0de8a391bb675cfe75a6e1bd7d8781f51f9c4641

ahead/behind:
0 / 0
```

Conclusao:

```text
APP_SOURCE_OF_TRUTH = LOCAL_HEAD_VALIDATED
```

A divergencia observada no MA-V2-00, em que o app local estava 13 commits a frente de `origin/main`, ja nao existe neste gate. A linha local e o remoto estao sincronizados.

---

# 3. SPEC V2

A SPEC V2 foi incorporada em:

```text
docs/products/minuto-anterior/SPEC-MINUTO-001_O_MINUTO_ANTERIOR_MVP_V2.0.0.md
```

Ela esta formalmente aprovada:

```text
APROVADA / VIGENTE
```

Autoridade de aprovacao:

```text
Marcos Vinicius
```

Data de aprovacao:

```text
15/09/2026
```

---

# 4. V1.1

A SPEC V1.1 permanece preservada em:

```text
docs/products/minuto-anterior/SPEC_MVP_V1.1.md
```

Classificacao operacional:

```text
HISTORICA / REFERENCIA
```

A V1.1 permanece como registro historico e ponto de rastreabilidade da trilha anterior. Quando houver divergencia, a SPEC-MINUTO-001 V2.0.0 governa o produto.

---

# 5. Implementacao

Estado atual:

- nenhum codigo funcional do Minuto Anterior foi criado;
- nenhuma migration foi criada;
- nenhuma tabela `minute_before_*` existe;
- nenhuma rota de app `/minuto-anterior` existe;
- nenhuma rota estatica institucional `/minuto-anterior` existe;
- nenhum deploy foi executado.

---

# 6. Proximos gates

| Gate | Objetivo | Estado |
|---|---|---|
| `MA-V2-02` | Dominio de dados especifico do Minuto | proximo gate recomendado apos auditoria |
| `MA-V2-03` | Session engine pre-auth | depende do dominio de dados |
| `MA-V2-04` | Experiencia guiada em seis perguntas | depende da session engine |
| `MA-V2-05` | Resultado, Folha e repeticao | depende de respostas e renderer deterministico |
| `MA-V2-06` | Claim e Meu Caminho | depende de Magic Link, identity claim e contrato de agregacao |
| `MA-V2-07` | Comunicacao | depende de decisao operacional transacional quando necessaria |
| `MA-V2-08` | Landing publica | pode ser planejada sem bloquear no claim |

---

# 7. Decisoes abertas

1. Prazos de retencao por categoria antes de Production.
2. Modelagem fisica final do dominio `minute_before_*` no MA-V2-02.
3. Se `entry_area_code` sera emitido em analytics ou ficara apenas internamente.
4. Limite numerico final de `q4_other_text`.

---

# 8. Stop conditions

Parar e pedir novo gate se qualquer proxima tarefa exigir:

- alterar CANONs ou SPECs transversais;
- alterar Auth, Identity, Claim, Privacy, Communication ou Audit transversais;
- criar Supabase proprio;
- criar app/repo proprio;
- alterar Home, SEO, Netlify, Vercel ou DNS;
- implementar outro produto;
- iniciar MA-V2-02 sem autorizacao apos auditoria deste gate.
