# SITE INSTITUCIONAL BASELINE PROTEGIDA
## Portal Caminho da Consciência

**STATUS:** FINALIZADO — PRODUCTION BASELINE PROTEGIDA  
**DATA DE FECHAMENTO:** 04/09/2026  
**VERSÃO:** V1.1

---

## Identidade

- **Marca:** Portal Caminho da Consciência
- **Método autoral:** Método Padrão Interrompido
- **Domínio oficial:** portalcaminhodaconsciencia.com.br
- **Hospedagem:** Netlify (camada institucional)
- **Repo:** github.com/marvin-ds/portal-caminho-da-consciencia
- **Branch de produção:** `main`
- **Vercel:** reservado para aplicações interativas, autenticação, APIs

---

## Rotas protegidas

| Rota | Arquivo | Status |
|---|---|---|
| `/` | `index.html` | ✅ LIVE — Home V1.2.1 finalizada |
| `/mapeamento/` | `mapeamento/index.html` | ✅ LIVE |
| `/termos-de-uso` | `termos-de-uso.html` | ✅ LIVE |
| `/politica-de-privacidade` | `politica-de-privacidade.html` | ✅ LIVE |
| `/favicon.ico` | `favicon.ico` | ✅ |
| `/robots.txt` | `robots.txt` | ✅ |
| `/sitemap.xml` | `sitemap.xml` | ✅ |

---

## Infraestruturas protegidas

- GTM (GTM-WC2C397G)
- GA4
- Meta Pixel
- Consent Mode v2
- Preferências de cookies (`#btn-pref-cookies` / `#portal-banner`)
- Canonical tags
- OG / Open Graph
- JSON-LD / Schema.org
- Tracking da Home (`PAGE_ID = portal_home_v1`, `VARIANT_ID = institutional_experiencia_viva_v1_2_1` no gate Home V1.2.1)
- Tracking do Mapeamento (`offer_id = mapping_pattern_interrupted_v1`)

---

## Oferta LIVE no fechamento

| Produto | offer_id | Preço | Status |
|---|---|---|---|
| Mapeamento Padrão Interrompido | `mapping_pattern_interrupted_v1` | R$197 | ✅ LIVE |

---

## Produtos em building / pilot

| Produto | Status |
|---|---|
| O Minuto Anterior | BUILDING |
| Antes do Aperto | BUILDING |
| Sessão Individual Sintonize Prosperidade | DESIGN_READY / PILOT_PENDING |

---

## Separação arquitetural vigente

- **Mapeamento Padrão Interrompido** e **Sessão Individual Sintonize Prosperidade** são ofertas distintas.
- A Sintonize NÃO é recurso interno do Mapeamento.
- A Mesa Radiônica Sintonize Prosperidade é metodologia específica de terceiros.

---

## Regra de proteção

Este documento **NÃO congela a evolução do Portal.**  
Ele define o estado que futuras implementações **não podem quebrar silenciosamente.**

---

## Evolução institucional — Home V1.2.1

**Gate:** Home Institucional V1.2.1 — Fechamento editorial da primeira dobra  
**Base:** Home V1.1.1 — Experiência Viva  
**Natureza da alteração:** editorial e semântica, sem redesign e sem reconstrução técnica.

Alterado conscientemente:

- copy institucional;
- representação pública da identidade do Portal;
- representação pública do Método Padrão Interrompido;
- segunda porta de entrada: expansão, espiritualidade e consciência;
- descrições da Jornada;
- posicionamento público de Marcos Vinicius;
- limites e nota de responsabilidade;
- SEO textual da Home;
- `VARIANT_ID` da Home.
- remoção da objeção antecipada sobre crença do fluxo principal da Home, preservando o tema apenas no FAQ.

Não alterado por este gate:

- arquitetura Netlify;
- rota `/mapeamento/`;
- preço do Mapeamento;
- oferta ativa;
- Consent Mode;
- arquitetura de tracking;
- stack;
- produtos em preparação;
- infraestrutura;
- imagens;
- movimento estrutural;
- páginas legais;
- privacidade;
- `robots.txt`;
- `sitemap.xml`;
- `favicon.ico`;
- `netlify.toml`.

Qualquer alteração nas rotas protegidas exige:

1. **CTX-00** — verificação de contexto obrigatória
2. **Justificativa explícita** na SPEC ou instrução de Marcos
3. **INSTITUTIONAL INTEGRATION GATE** quando a mudança vier de implementação de produto

---

## SHA de produção

| Campo | Valor |
|---|---|
| INSTITUTIONAL_BASELINE_BEFORE_FINALIZATION | `78769c3e619ad6a342dd7226834aa29b9691a7af` |
| FINAL_MAIN_HEAD | `341fe650a47d24171a8659f12729eac97f755ee1` |
| FINAL_NETLIFY_DEPLOY_ID | _verificar em painel Netlify após build_ |
| DATA | 04/09/2026 |

---

## Histórico operacional

| Versão | Data | Alteração |
|---|---|---|
| V1.2 | 15/09/2026 | Fechamento editorial Home V1.2.1: remoção da objeção antecipada sobre crença do fluxo principal, atualização de `VARIANT_ID` e verificador institucional. |
| V1.1 | 14/09/2026 | Registro do Gate Home V1.2.0 como evolução editorial/canônica da Home V1.1.1, preservando baseline técnica e rotas protegidas. |
| V1.0 | 04/09/2026 | Registro da baseline protegida da Home V1.1.1 e rotas institucionais. |
