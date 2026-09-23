# Portal Caminho da Consciência

Site institucional público e base documental transversal do **Portal Caminho da Consciência**.

O projeto organiza desenvolvimento pessoal e espiritual, reconhecimento de padrões recorrentes e caminhos conscientes de transformação a partir do **Método Padrão Interrompido**.

## Este Repositório

Este repositório contém o site institucional público e a documentação transversal do projeto.

- Host: Netlify
- Domínio: https://portalcaminhodaconsciencia.com.br
- Produção: branch `main`
- Repo: `marvin-ds/portal-caminho-da-consciencia`

A aplicação autenticada, Meu Caminho, APIs e integrações de plataforma vivem em repositório separado e são hospedadas na Vercel.

## Arquitetura

| Superfície | Onde vive | Host |
|---|---|---|
| Portal público | este repositório | Netlify |
| Plataforma / app | repo separado | Vercel |
| Backend | Supabase | Supabase |

Detalhes técnicos transversais ficam em `docs/specs/SPEC-STACK-00 — Arquitetura Técnica, Stack e Infraestrutura — V1.1.0.md`.

## Método

Método Padrão Interrompido:

```text
RECONHECER
→ MAPEAR
→ LOCALIZAR
→ TRABALHAR
→ ALINHAR
→ EXPERIMENTAR
→ INTEGRAR
→ REAVALIAR
```

Conceito estruturante:

```text
Ponto de Interrupção
```

## Jornada

```text
DESCOBRIR
→ RECONHECER
→ MAPEAR
→ TRABALHAR
→ INTEGRAR
→ APROFUNDAR
```

## Documentação

- `docs/canonical/MAPA-00 — Índice Mestre e Estado Documental do Projeto.md` — ponto inicial de navegação documental.
- `docs/canonical/CANON-00` a `docs/canonical/CANON-07` — núcleo normativo vigente.
- `docs/specs/` — especificações oficiais subordinadas aos CANONs.
- `docs/operations/` — estado operacional, guardrails e handoff.
- `docs/reference/pending-review/` — legado preservado sem autoridade canônica.

## Regra de Desenvolvimento

Produtos e Meu Caminho possuem trilhas, chats/sessões, SPECs e checkpoints próprios.

Este repositório institucional não deve receber implementação de app, autenticação, Supabase ou internals de produto sem gate explícito e escopo correto.

Mudanças que atravessem mais de uma trilha devem voltar para governança transversal antes de implementação.
