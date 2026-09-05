# PORTAL CAMINHO DA CONSCIÊNCIA
## Addendum de Integração com a Plataforma da Jornada — Sessão Individual Sintonize Prosperidade — V1.2


> **ESCOPO: exclusivo do produto Sessão Individual Sintonize Prosperidade — NÃO É REGRA TRANSVERSAL.** Esta especificação não deve ser aplicada a outros produtos salvo quando um contrato transversal aprovado for explicitamente referenciado.

**STATUS:** complemento executivo pós-PJ-02  
**DATA:** 05/09/2026  
**DOCUMENTOS-BASE:** SPEC Sessão Individual Sintonize Prosperidade V1.0 + Addendum V1.1  
**FONTE DE VERDADE TÉCNICA:** ADR-PLATAFORMA-JORNADA-001 — APROVADO  
**REGRA:** este Addendum não altera formato assíncrono padrão, preços de validação, metodologia, limites, entregáveis ou D7 definidos no Addendum V1.1. Ele acrescenta apenas o contrato transversal da Plataforma.

---

# 1. FLUXO TRANSVERSAL

```text
payment
↓
entitlement
↓
intake + consentimento
↓
sessão humana/manual
↓
status
↓
Registro da Sua Sessão
↓
áudio
↓
integração
↓
D7
```

# 2. INFRAESTRUTURA

A Sintonize é domínio de:

> `portal-caminho-da-consciencia-app`

Não criar:

- app próprio;
- projeto Vercel próprio;
- Supabase próprio;
- Auth próprio;
- engine radiestésica.

# 3. DADOS PRIVADOS

Classe D / alta proteção:

- intenção;
- anamnese;
- perguntas;
- crenças/medos/faltas quando registradas;
- notas privadas;
- Registro da Sua Sessão;
- áudio;
- D7;
- demais conteúdos pessoais da sessão.

Separar conteúdo privado de dados comerciais e analytics.

# 4. STORAGE

- privado por padrão;
- persistir `object_path + metadata`;
- signed URLs geradas sob demanda;
- TTL curto;
- ownership server-side.

# 5. ACESSO

`contact_id` isolado não concede acesso.

Acesso privado requer:

- account autenticada;
- ownership;
- autorização server-side.

# 6. AUTH

V1:

```text
Magic Link / passwordless = ON
Password = OFF
Google OAuth = OUT V1
```

# 7. RLS

Obrigatório:

- RLS;
- negative tests;
- User A não acessa User B;
- anon sem PII;
- service_role server-only.

# 8. ANALYTICS

Pode registrar apenas eventos allowlisted de operação, por exemplo:

- intake_started;
- intake_submitted;
- delivery_viewed;
- d7_completed.

Nunca enviar conteúdo íntimo, Perguntas Divinas, leitura, notas ou PII textual.

# 9. NÃO AUTOMAÇÃO

A Plataforma não automatiza:

- Mesa;
- pêndulo;
- leitura;
- seleção radiestésica;
- diagnóstico;
- decisão de protocolo;
- conteúdo proprietário da formação.

Automação administrativa não é automação da Mesa.

# 10. MEU CAMINHO

Meu Caminho pode mostrar:

- sessão aguardando intake;
- intake recebido;
- sessão em preparação;
- entrega disponível;
- D7 pendente/concluído.

Não deve expor conteúdo íntimo no dashboard.

# 11. PRECEDÊNCIA

Em conflito:

1. Documento 00 para PI/autoria;
2. Documento 05 V2.2 e ADR para arquitetura;
3. SPEC V1.0 + Addendum V1.1 para produto;
4. este Addendum V1.2 para integração transversal.

**FIM — ADDENDUM V1.2**
