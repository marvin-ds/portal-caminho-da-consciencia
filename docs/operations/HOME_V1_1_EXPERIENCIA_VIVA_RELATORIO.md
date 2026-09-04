# HOME V1.1 — Experiência Viva

**Branch:** `feat/home-experiencia-viva-v1`  
**Baseline:** `060888b2dd8dc01b0fe0d7f04c1b60806796be8b`  
**Status:** implementado localmente para QA, sem produção automática

## Fase 0 — Baseline

- Partida confirmada em `main`, sincronizada com `origin/main`.
- Working tree limpo, exceto `.claude/settings.local.json` local/intocado.
- Branch criada: `feat/home-experiencia-viva-v1`.
- Tamanho inicial de `index.html`: `45032` bytes.
- Tamanho atual de `index.html`: `52258` bytes.
- Screenshots locais:
  - `docs/operations/qa/home-v1.1/baseline-desktop.png`
  - `docs/operations/qa/home-v1.1/baseline-mobile-390.png`
  - `docs/operations/qa/home-v1.1/after-mobile-390-revealed.png`

## Mudanças de Copy e Arquitetura

- H1 preservado exatamente.
- Hero recebeu nova subheadline.
- CTA primário permanece para `/mapeamento/`.
- CTA secundário mudou para `Ver por onde começar` e aponta para `#comece`.
- Eyebrows/nomenclaturas internas removidas da apresentação visual.
- Reconhecimento deixou de parecer conjunto de cards pesados.
- Portal foi simplificado.
- Método foi reduzido para três movimentos explicativos públicos.
- Ponto de Interrupção passa a aparecer depois da demonstração.
- Jornada virou timeline/caminho.
- FAQ reduzido para quatro perguntas.
- Responsabilidade ficou mais curta e menos jurídica.
- Footer passou a usar assinatura: `Perceber o que se repete. Caminhar com mais consciência.`

## Roteador

Ordem implementada:

1. `O Minuto Anterior`
   - `offer_id`: `minute_before_free_v1`
   - estado: `building`
   - badge: `Gratuito`
   - sem link
   - sem tracking comercial
2. `ANTES DO APERTO`
   - `offer_id`: `before_the_squeeze_v1`
   - estado: `building`
   - sem preço
   - sem link
   - sem tracking comercial
3. `Mapeamento Padrão Interrompido`
   - `offer_id`: `mapping_pattern_interrupted_v1`
   - estado: `live`
   - CTA: `Conhecer o Mapeamento`
   - rota: `/mapeamento/`

Sintonize foi removida do roteador e mantida apenas como explicação institucional.

## Imagens

- Novo asset criado para o hero:
  - `assets/images/home/hero-cenario-v2.webp`
  - formato: `1600x900`
  - origem: ImageGen built-in
- Foto atual de Marcos foi mantida, mas com proporção e carregamento corrigidos na Home:
  - largura mobile controlada;
  - altura limitada;
  - não ocupa tela inteira.

## Movimento

- Sem bibliotecas externas.
- Header sticky compacta após rolagem.
- Indicador de progresso de leitura adicionado.
- Reveal progressivo por `IntersectionObserver`.
- Stagger discreto.
- Parallax leve apenas no hero.
- Cards de oferta têm hover/active suaves.
- Conteúdo continua visível sem JavaScript; `motion-ready` só é aplicado pelo JS.
- `prefers-reduced-motion` desativa reveal/parallax/transições relevantes.

## Tracking e Consentimento

- `PAGE_ID`: `portal_home_v1`
- `VARIANT_ID`: `institutional_experiencia_viva_v1_1`
- Eventos preservados:
  - `session_context`
  - `section_view`
  - `scroll_depth`
  - `offer_cta_click`
- Cards `building` não possuem CTA nem disparam `offer_cta_click`.
- Consent Mode default denied preservado.
- `granted -> denied` continua recarregando a página.

## QA Local

Rotas:

| Item | Resultado |
|---|---|
| `/` | PASS |
| `/mapeamento/` | PASS |
| `/favicon.ico` | PASS |
| `/robots.txt` | PASS |
| `/sitemap.xml` | PASS |
| `/assets/images/home/hero-cenario-v2.webp` | PASS |

Breakpoints:

| Largura | Resultado |
|---:|---|
| 360 | PASS |
| 375 | PASS |
| 390 | PASS |
| 430 | PASS |
| 768 | PASS |
| 1366 | PASS |

Testes complementares:

- Sem overflow: PASS
- H1 único: PASS
- Roteador em ordem correta: PASS
- Cards `building` sem links: PASS
- Home sem preço do Mapeamento: PASS
- CTA principal para `/mapeamento/`: PASS
- Menu mobile: PASS
- FAQ: PASS
- Anchor `#comece`: PASS
- Sem JavaScript: PASS
- Reduced motion: PASS
- Teclado no menu: PASS
- `/mapeamento/` preservado: PASS

## Riscos e Pendências

- BAIXA: foto de Marcos ainda usa o asset existente; a SPEC descreve uma nova fotografia como preferencial.
- BAIXA: widget de acessibilidade não foi encontrado no HTML atual, então a correção de posicionamento ficou como não aplicável localmente.
- BAIXA: validação 4G real depende de teste humano em smartphone.

## Próxima Fase

Commit controlado, push da branch e Netlify Deploy Preview para auditoria, sem produção automática.
