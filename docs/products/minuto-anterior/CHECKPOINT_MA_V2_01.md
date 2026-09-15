# CHECKPOINT DE CONTINUIDADE — MINUTO ANTERIOR

| Campo | Valor |
|---|---|
| Data | 15/09/2026 |
| Agente | Codex |
| Gate | `MA-V2-01 — Baseline Documental e Contratos` |
| Branch | `docs/minuto-anterior-ma-v2-01` |
| Owner spec | `SPEC-MINUTO-001 — O Minuto Anterior — MVP V2.0.0` |
| Owner spec status | `PROPOSTA PARA APROVACAO` |
| Repo institucional base | `9fe938ca46a627a242e1affa60f7532afb70a1ed` |
| App repo base futura | `0de8a391bb675cfe75a6e1bd7d8781f51f9c4641` |
| App source of truth | `LOCAL_HEAD_VALIDATED` |

---

# 1. Trabalho concluido

- Investigado o estado do repo app apos o MA-V2-00.
- Confirmado que a divergencia anterior de 13 commits nao existe mais.
- Incorporada a SPEC V2 como documento de produto sem promover seu status.
- Preservada a SPEC V1.1 historica.
- Criado CURRENT especifico do Minuto Anterior.
- Criados contratos MA-V2-01 para separar dominio do produto e responsabilidades transversais.
- Definido escopo minimo do MA-V2-02.

---

# 2. Arquivos

| Arquivo | Acao |
|---|---|
| `SPEC-MINUTO-001_O_MINUTO_ANTERIOR_MVP_V2.0.0.md` | incorporado como proposta |
| `SPEC_MVP_V1.1.md` | preservado sem alteracao |
| `CURRENT_MINUTO_ANTERIOR.md` | criado |
| `CONTRACTS_MA_V2_01.md` | criado |
| `CHECKPOINT_MA_V2_01.md` | criado |

---

# 3. Decisoes registradas

1. A V2 e o alvo documental da retomada, mas segue pendente de aprovacao formal.
2. A V1.1 permanece historica/referencia, condicionada a aprovacao formal da V2.
3. O app repo esta sincronizado com `origin/main`.
4. A base futura de implementacao e `0de8a391bb675cfe75a6e1bd7d8781f51f9c4641`, salvo nova mudanca antes do MA-V2-02.
5. O Minuto implementara apenas dominio especifico.
6. Shared Kernel/Plataforma continuam donos de Auth, Identity, Claim, Privacy, Communication, Audit e estruturas transversais.

---

# 4. Testes e validacoes

Executados somente comandos documentais e Git.

Nao foram executados testes E2E, banco, build ou deploy porque o gate e documental e nao altera codigo funcional.

---

# 5. Blockers

Para MA-V2-02:

- aprovacao/revisao humana do MA-V2-01;
- confirmacao de que a base app `0de8a391bb675cfe75a6e1bd7d8781f51f9c4641` segue atual no momento de iniciar;
- autorizacao explicita para migrar para o repo app e criar dominio de dados.

Antes de Production:

- aprovacao formal da SPEC V2;
- retencao por categoria;
- analytics allowlist;
- politica de privacy/claim completa;
- QA/security/E2E.

---

# 6. Proxima acao recomendada

Auditar este gate. Se aprovado, autorizar um MA-V2-02 novo e pequeno:

```text
DOMINIO DE DADOS ESPECIFICO DO MINUTO
```

Nao iniciar MA-V2-02 automaticamente.
