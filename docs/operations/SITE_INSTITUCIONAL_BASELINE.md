# SITE INSTITUCIONAL BASELINE PROTEGIDA
## Portal Caminho da Consciência

**STATUS:** FINALIZADO — PRODUCTION BASELINE PROTEGIDA  
**DATA DE FECHAMENTO:** 04/09/2026  
**VERSÃO:** V1.0

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
| `/` | `index.html` | ✅ LIVE — Home V1.1.1 |
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
- Preferências de cookies (`#btn-pref-cookies` / `#pcc-banner`)
- Canonical tags
- OG / Open Graph
- JSON-LD / Schema.org
- Tracking da Home (`PAGE_ID = portal_home_v1`, `VARIANT_ID = institutional_experiencia_viva_v1_1`)
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

Qualquer alteração nas rotas protegidas exige:

1. **CTX-00** — verificação de contexto obrigatória
2. **Justificativa explícita** na SPEC ou instrução de Marcos
3. **INSTITUTIONAL INTEGRATION GATE** quando a mudança vier de implementação de produto

---

## SHA de produção

| Campo | Valor |
|---|---|
| INSTITUTIONAL_BASELINE_BEFORE_FINALIZATION | `78769c3e619ad6a342dd7226834aa29b9691a7af` |
| FINAL_MAIN_HEAD | _a preencher após merge final_ |
| FINAL_NETLIFY_DEPLOY_ID | _a preencher após deploy_ |
| DATA | 04/09/2026 |
