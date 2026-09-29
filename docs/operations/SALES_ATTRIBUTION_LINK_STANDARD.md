# SALES_ATTRIBUTION_LINK_STANDARD

## Escopo

Este runbook operacionaliza o contrato transversal definido em `SPEC-MENSURACAO-00` para links first-party de origem em páginas públicas de venda do Portal.

Use quando uma página de venda precisar receber tráfego atribuído por canais como Instagram, YouTube, e-mail, WhatsApp ou campanhas pagas.

Não use para:

- experiências privadas;
- Meu Caminho;
- respostas do usuário;
- conteúdo íntimo;
- PII;
- parâmetros funcionais que não sejam tracking.

## Contrato de alias

Formato:

```text
/ir/{product_slug}-{source}
```

Cada alias deve declarar:

```text
product_slug
destination_path
source
medium
campaign
content opcional
term opcional
```

O alias deve redirecionar diretamente para `destination_path` com a atribuição permitida. Não crie HTML duplicado nem página intermediária visual.

## Parâmetros permitidos

Contrato transversal:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
gclid
gbraid
wbraid
```

`fbclid` não pertence ao contrato transversal. No institucional, ele só pode ser tratado por mecanismo Meta específico e consentido já aprovado.

## Implementação Netlify

Cadastrar aliases em `netlify.toml` usando redirects declarativos:

```toml
[[redirects]]
  from = "/ir/produto-x-instagram"
  to = "/produto-x/?utm_source=instagram&utm_medium=organic_social&utm_campaign=campanha&utm_content=bio"
  status = 302
  force = true
```

Manter `/ir/*` fora do sitemap e com `X-Robots-Tag: noindex, nofollow`.

## Implementação da landing

A landing deve carregar `js/portal-sales-attribution-v1.js` antes do script comercial da página.

Fluxo mínimo:

1. ler a allowlist de atribuição;
2. persistir em `sessionStorage["portal_attribution_v1"]` e confirmar a persistência;
3. decorar CTAs comerciais `.js-checkout-cta` com a atribuição preservada;
4. enviar somente metadados operacionais permitidos ao `dataLayer`;
5. executar cleanup visual com History API somente depois da persistência confirmada;
6. preservar path, hash e parâmetros funcionais desconhecidos.

Se a persistência falhar, mantenha os parâmetros de tracking na URL. Nessa condição, a URL menos limpa é o fallback seguro para não perder atribuição.

## Antes do Aperto

Aliases oficiais:

```text
/ir/antes-do-aperto-instagram
→ /antes-do-aperto/?utm_source=instagram&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=bio

/ir/antes-do-aperto-youtube
→ /antes-do-aperto/?utm_source=youtube&utm_medium=organic_social&utm_campaign=aa_evergreen&utm_content=channel_link
```

Canonical da oferta:

```text
https://portalcaminhodaconsciencia.com.br/antes-do-aperto/
```

## Testes mínimos

Validar:

1. alias Instagram;
2. alias YouTube;
3. acesso direto à landing;
4. landing com UTM manual;
5. landing com hash;
6. parâmetros desconhecidos preservados;
7. refresh depois do cleanup;
8. CTA de checkout com atribuição;
9. ausência de redirect loop;
10. mobile;
11. JS indisponível com redirect funcional e página carregável;
12. ausência de PII, resposta pessoal ou conteúdo íntimo nos parâmetros.
