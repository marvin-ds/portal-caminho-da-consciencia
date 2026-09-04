# ADR 0001 — Divisão Netlify, Vercel e Repositórios

**Status:** aprovado operacionalmente  
**Data:** 2026-09-03  
**Contexto:** auditoria técnica do repositório público do Portal Caminho da Consciência

## Decisão

O repositório `marvin-ds/portal-caminho-da-consciencia` permanece como camada pública institucional e comercial hospedada na Netlify.

A Vercel será usada para aplicações dinâmicas futuras somente quando houver necessidade real de rotas server-side, APIs, autenticação, estado de aplicação, Supabase, webhooks ou experiência interativa que uma página estática não resolva bem.

## Divisão

### Netlify

Usar para:

- site institucional;
- blog e conteúdo SEO;
- páginas de venda;
- páginas legais;
- landing pages de campanhas;
- assets públicos otimizados;
- tracking web público.

Domínio preferencial:

- `portalcaminhodaconsciencia.com.br`

### Vercel

Usar futuramente para:

- Radar;
- área autenticada;
- jornadas;
- reavaliações;
- painel do usuário;
- painel interno mínimo;
- APIs;
- webhooks;
- integrações com Supabase.

Domínio preferencial:

- `app.portalcaminhodaconsciencia.com.br`

## Repositórios

No estágio atual, manter repositórios separados é preferível a criar um monorepo prematuro.

Quando uma aplicação dinâmica for validada, criar um repositório próprio para ela, por exemplo:

```text
portal-caminho-da-consciencia-app
```

Um monorepo só deve ser considerado quando existirem múltiplas aplicações reais compartilhando componentes, configuração, autenticação, tracking ou domínio de negócio.

Estrutura futura possível:

```text
apps/
  radar/
  area-cliente/
  admin/
packages/
  ui/
  config/
  tracking/
  domain/
```

## Restrições

- Não migrar o site institucional para Vercel apenas por uniformidade.
- Não criar app antes de demanda real.
- Não colocar materiais Sintonize, dados de clientes, exports de CRM, prompts privados ou arquivos protegidos em repositórios públicos.
- Não tratar WhatsApp, analytics ou página de obrigado como confirmação de venda.
- Documentação canônica não pertence ao bundle público do site.

## Consequências

- O deploy institucional continua simples e barato na Netlify.
- Aplicações futuras nascem isoladas, com menor risco de acoplamento.
- O ecossistema evita virar uma coleção desorganizada de sites.
- A decisão de monorepo permanece condicionada a evidência de uso e compartilhamento real.
