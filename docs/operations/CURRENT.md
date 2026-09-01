# CURRENT — Portal Caminho da Consciência
> Documento operacional vivo. Atualizar sempre que o estado mudar.
> Não contrariar documentos canônicos 01–05.

---

## GATE ATUAL

### GATE R3 — Validação Comercial do Mapeamento Padrão Interrompido — ABERTO (2026-08-31)

**Objetivo:** Gerar as primeiras conversas reais com potenciais clientes, validar se a linguagem da página gera interesse qualificado, e fechar a primeira compra do Mapeamento Padrão Interrompido.

**Pergunta do gate:** A página de conversão produz conversas via WhatsApp com pessoas que se encaixam no perfil e estão dispostas a investir R$ 197?

**Branch:** `main`

**Etapa atual:** R3C — Especificação da campanha Search concluída. Execução deliberadamente adiada — sem gasto ativo.

---

## GATE R3B — Configuração de Conversões no Google Ads — ✅ APROVADO (2026-08-31)

### O que foi feito

| Item | Estado |
|---|---|
| Ação de conversão `whatsapp_click` criada no Google Ads | ✅ |
| Origem: Google Analytics (GA4) — propriedade Portal Caminho da Consciência | ✅ |
| Categoria: Contatos | ✅ |
| Valor: Não usar valor | ✅ |
| Contagem: Uma conversão (deduplicada por sessão) | ✅ |
| Janela de conversão de clique: 90 dias (padrão) | ✅ |
| Otimização: Ação secundária — não incluída em "Conversões", apenas em "Todas as conversões" | ✅ |
| `offer_cta_click`: NÃO criado como conversão no Ads (GA4 only, conforme especificado) | ✅ |

### Configuração verificada

| Campo | Valor |
|---|---|
| Nome | Portal Caminho da Consciência (web) whatsapp_click |
| Código do tipo de conversão | 7741395980 |
| Data de criação | 31/08/2026 |
| Otimização de ações | Contatos, Ação secundária |
| Valor | Não usar valor |
| Origem | Google Analytics (GA4) |
| Evento do GA4 | whatsapp_click |
| Propriedade GA4 | Portal Caminho da Consciência |
| Contagem | Uma conversão |
| Janela de conversão de clique | 90 dias |
| Conta Google Ads | 918-471-6756 Reconexão Terapias |

### Decisões registradas

- `purchase` e `close_convert_lead`: NÃO configurados — aguardam integração real de pagamento
- Ação secundária = aparece apenas em "Todas as conversões", nunca em "Conversões" (não afeta otimização de lances)

---

## GATE R3C — Configuração Search — ESPECIFICAÇÃO CONCLUÍDA / EXECUÇÃO ADIADA (2026-08-31)

**Objetivo:** Criar a campanha Search no Google Ads conforme spec abaixo. Execução adiada deliberadamente — nenhum gasto iniciado. Retomar quando houver decisão de ativar tráfego pago.

**Status:** READY TO IMPLEMENT — blockers: nenhum.

**Critério de aprovação:** Campanha criada pausada, revisada por Marcos, ativada com R$30/dia.

**Branch:** `main`

### Especificação aprovada

#### Campanha
| Campo | Valor |
|---|---|
| Nome | GADS_SEARCH_MAPEAMENTO_PADRAO_BR_V1 |
| Objetivo | Leads |
| Tipo | Pesquisa |
| Conversão de lance | `whatsapp_click` — secundária, NÃO usada como meta de lance |
| Redes | Pesquisa Google: ON — Parceiros de pesquisa: OFF — Display: OFF |
| Estratégia de lances | Maximizar cliques + CPC máx. R$2,50–R$4,00 |
| Orçamento | R$30/dia |
| Localização | Brasil — Pessoas presentes ou regularmente na localização |
| Idioma | Português |
| Horário | Todos os dias, 06h–23h |
| Públicos | Observação apenas — nunca restringir tráfego inicial |
| URL final | https://portalcaminhodaconsciencia.com.br/ |
| Template de rastreamento | `utm_source=google&utm_medium=cpc&utm_campaign=gads_search_mapeamento_padrao_br_v1&utm_content={creative}&utm_term={keyword}` |
| Auto-tagging | Ligado (preservar gclid) |

#### Grupos de anúncios e palavras-chave

**Grupo 1 — Padrões que se repetem** (correspondência frase e exata)
```
"padrões repetitivos na vida" / [padrões repetitivos na vida]
"padrões que se repetem" / [padrões que se repetem]
"como quebrar padrões" / [como quebrar padrões]
"como mudar padrões repetitivos" / [como mudar padrões repetitivos]
"porque repito os mesmos padrões" / [porque repito os mesmos padrões]
"como parar de repetir padrões" / [como parar de repetir padrões]
"quebrar padrões emocionais" / [quebrar padrões emocionais]
"mudar padrões de comportamento" / [mudar padrões de comportamento]
```

**Grupo 2 — Autoconhecimento / clareza** (correspondência frase e exata)
```
"autoconhecimento profundo" / [autoconhecimento profundo]
"como entender meus padrões" / [como entender meus padrões]
"entender padrões da minha vida" / [entender padrões da minha vida]
"como me conhecer melhor" / [como me conhecer melhor]
"desenvolvimento pessoal e espiritual" / [desenvolvimento pessoal e espiritual]
"expansão da consciência" / [expansão da consciência]
"desenvolvimento da consciência" / [desenvolvimento da consciência]
```

**Grupo 3 — Espiritualidade aplicada** (correspondência frase e exata, usar com cautela)
```
"desenvolvimento espiritual" / [desenvolvimento espiritual]
"como desenvolver espiritualidade" / [como desenvolver espiritualidade]
"autoconhecimento espiritual" / [autoconhecimento espiritual]
"expansão espiritual" / [expansão espiritual]
"caminho espiritual" / [caminho espiritual]
"consciência espiritual" / [consciência espiritual]
```

#### Palavras negativas iniciais (nível campanha)
```
grátis, gratuito, pdf, livro, resumo, curso gratuito, faculdade, tcc,
artigo científico, significado, frase, frases, imagem, imagens, download,
apostila, wiki, wikipedia, teste grátis, vaga, emprego, salário, profissão,
psicólogo, psicologia, psiquiatra, terapia, tratamento, diagnóstico,
doença, transtorno, ansiedade, depressão, remédio, medicamento,
mesa radiônica grátis, curso mesa radiônica, como fazer mesa radiônica,
radiestesia curso, pêndulo comprar, mesa radiônica comprar
```

#### RSAs (2 por grupo)

**RSA 1 — Reconhecimento**
Títulos: "Você Repete os Mesmos Padrões?" | "Entenda o Que Continua Voltando" | "Mapeamento Padrão Interrompido" | "Veja Onde o Padrão Se Repete" | "O Cenário Muda. O Padrão Volta." | "Compreenda Seus Padrões" | "Um Novo Olhar Para Sua Vida" | "Portal Caminho da Consciência" | "Mapeamento Individual" | "Desenvolvimento Com Consciência"
Desc 1: Algumas situações mudam, mas certas repetições continuam. Conheça um mapeamento individual para observar onde isso aparece na sua vida.
Desc 2: Organize sinais, conexões e prioridades para compreender melhor aquilo que continua voltando. Atendimento individual por R$197.

**RSA 2 — Método**
Títulos: "Método Padrão Interrompido" | "Identifique o Que Se Repete" | "Veja Onde Isso Aparece" | "Entenda Conexões Entre Áreas" | "Um Caminho de Mais Clareza" | "Mapeamento Individual R$197" | "Relatório + Áudio Personalizado" | "Portal Caminho da Consciência"
Desc 1: Um processo estruturado de observação para reconhecer repetições, conexões e próximos passos de forma mais consciente.
Desc 2: Mapeamento individual com relatório e áudio personalizado. Conheça a proposta e fale pelo WhatsApp.

#### Assets
- **Sitelinks:** "Como Funciona" | "O Que Você Recebe" | "Para Quem É" | "Sobre o Método"
- **Callouts:** "Atendimento Individual" | "Relatório Personalizado" | "Áudio Personalizado" | "Entrega em Até 48h" | "Pagamento Único" | "Método Próprio"
- **Structured snippet (Serviços):** "Mapeamento Individual" | "Relatório Personalizado" | "Áudio de Devolutiva" | "Orientação Inicial"

#### Regra de avaliação
- **Diário:** termos de pesquisa, negativas, erros, CPC absurdo
- **Após 72h:** impressões, CTR, CPC, sessões, offer_cta_click, whatsapp_click
- **Após 7 dias:** gasto, CTR, CPC médio, termos, taxa página→WhatsApp, conversas, leads qualificados, vendas
- **Diagnóstico:** CTR <3% = mensagem/palavra fraca | CTR 4–7% = aceitável | CTR >7% = sinal forte | muitos cliques + zero WhatsApp = problema de intenção ou página

### Estado de criação

| Item | Estado |
|---|---|
| Spec aprovada por Marcos | ✅ |
| Tracking pronto (whatsapp_click configurado) | ✅ |
| Campanha criada na interface | AGUARDA DECISÃO DE ATIVAR TRÁFEGO |
| Grupos, keywords, RSAs, assets, negativas | AGUARDA DECISÃO DE ATIVAR TRÁFEGO |
| Campanha ativada | AGUARDA DECISÃO DE ATIVAR TRÁFEGO |

> Nota: o alerta "Turn off ad blockers" observado durante acesso automatizado não foi confirmado como problema real no browser do operador — não é blocker do projeto.

---

## GATE R3A — Camada de Mensuração GTM + GA4 — ✅ CONCLUÍDO (2026-08-31)

### O que foi feito

| Item | Estado |
|---|---|
| GTM instalado no `index.html` (GTM-WC2C397G) | ✅ |
| Consent Mode v2 — defaults negados antes de qualquer tag | ✅ |
| GTM noscript no `<body>` | ✅ |
| `getUtms()` captura UTMs + gclid/gbraid/wbraid | ✅ |
| `session_context` push ao carregar página | ✅ |
| `section_view` — IntersectionObserver 9 seções (30% threshold) | ✅ |
| `scroll_depth` — thresholds 25/50/75/90 | ✅ |
| `offer_cta_click` — dataLayer.push nos CTAs | ✅ |
| `whatsapp_click` — dataLayer.push nos links WA | ✅ |
| Commit e push para `main` (HEAD: dc89c76) | ✅ |

### GTM Container — Versão 2 (publicada 31/08/2026)

| Item | Valor |
|---|---|
| Container ID | GTM-WC2C397G |
| GA4 Measurement ID | G-2C2WWT3ZQG |
| Versão publicada | 2 — Ativa |
| Tags | GA4 Configuration, offer_cta_click, scroll_depth, section_view, whatsapp_click, Conversion Linker |
| Acionadores | Custom Event para cada evento (4 total) |
| Variável | dlv - cta_local (Data Layer Variable) |

---

## DECISÕES FECHADAS (Gate R3)

| Decisão | Valor |
|---|---|
| Canal de validação | WhatsApp direto (sem checkout automatizado) |
| Preço de teste | R$ 197 |
| Critério mínimo de sucesso | Pelo menos 1 conversa qualificada + 1 compra confirmada |
| Próximo passo após aprovação | Gate R4 — definir a jornada pós-compra |

---

## ESTADO DO GATE R3

| Item | Estado |
|---|---|
| Página em produção | ✅ — https://portalcaminhodaconsciencia.com.br |
| Camada GTM + GA4 publicada (R3A) | ✅ — GTM-WC2C397G Versão 2 ativa |
| Conversão `whatsapp_click` configurada no Ads (R3B) | ✅ — Código 7741395980, Ação secundária |
| Campanha Search criada e validada (R3C) | ABERTO |
| Primeiro tráfego orgânico/direto | PENDENTE |
| Primeira conversa via WhatsApp | PENDENTE |
| Primeira compra confirmada | PENDENTE |
| Avaliação de copy e ajustes | PENDENTE |

---

## BLOCKERS

Nenhum blocker ativo.

---

## GATE R2 — Oferta Inicial e Página de Conversão — ✅ APROVADO (2026-08-31)

**Aprovação:** Marcos — "R2B — PREVIEW APPROVED ✅" → R2C validado em produção.

### Checklist de produção (R2C) — todos aprovados

| Item | Resultado |
|---|---|
| Nova página servida em produção | ✅ |
| HTTPS válido | ✅ |
| Título: "Mapeamento Padrão Interrompido \| Portal Caminho da Consciência" | ✅ |
| Canonical: https://portalcaminhodaconsciencia.com.br | ✅ |
| OG title e OG URL corretos | ✅ |
| JSON-LD presente | ✅ |
| Meta Pixel 1566666134485463 ativo | ✅ |
| Meta Pixel 4659045990859789 ativo | ✅ |
| ViewContent disparando no page load | ✅ |
| offer_cta_click implementado | ✅ |
| whatsapp_click implementado | ✅ |
| Número WhatsApp 55013996083913 correto | ✅ |
| Zero referência a SEU_NUMERO | ✅ |
| Zero referência a "Anjos da Prosperidade" | ✅ |
| 9 seções presentes (hero→cta-final) | ✅ |
| Footer presente | ✅ |
| Zero erros críticos de console | ✅ |
| Overflow horizontal | ✅ (falso positivo no sandbox — mobile validado em R2B) |
| main local/remoto sincronizados | ✅ (HEAD: 8a9aac6) |

### Deploy de produção

| Item | Valor |
|---|---|
| Deploy ID | 6a95bbb85b045b000863b705 |
| Estado | ready |
| Branch | main |
| HEAD no deploy | 8a9aac6 |
| Domínio | https://portalcaminhodaconsciencia.com.br |

### Estado final do Gate R2

| Item | Estado |
|---|---|
| R2A — Auditoria da página atual | ✅ |
| R2A — Aprovação do plano de mudança | ✅ |
| Branch `feat/gate-r2-*` criada | ✅ |
| R2B — Nova copy implementada | ✅ |
| R2B — Identidade visual aplicada | ✅ |
| R2B — CTA + WhatsApp funcionando | ✅ |
| R2B — Tracking implementado | ✅ |
| R2B — SEO completo | ✅ |
| R2B — Mobile validado | ✅ |
| R2B — Deploy Preview gerado e aprovado | ✅ |
| Merge em `main` (--ff-only) | ✅ |
| R2C — Deploy de produção validado | ✅ |
| CURRENT.md atualizado | ✅ |

---

## GATE R1 — Rename Foundation — ✅ APROVADO (2026-08-31)

| Item | Estado |
|---|---|
| GitHub renomeado para `portal-caminho-da-consciencia` | ✅ |
| Pasta local renomeada | ✅ |
| Remote local atualizado | ✅ |
| Branch de migração criada e mergeada | ✅ |
| `index.html` — título, OG, navbar, footer, copyright | ✅ |
| `README.md` — conteúdo canônico | ✅ |
| Netlify vinculado ao repo correto | ✅ |
| Docs canônicos 01–05 em `/docs/canonical/` | ✅ |
| Assets de marca em `/assets/brand/` | ✅ |
| `CLAUDE.md` criado na raiz | ✅ |
| Merge PR #1 em `main` | ✅ |
| Domínio `portalcaminhodaconsciencia.com.br` ativo | ✅ |

---

## LINKS E REFERÊNCIAS

- Repositório: https://github.com/marvin-ds/portal-caminho-da-consciencia
- Netlify project: https://app.netlify.com/projects/portal-caminho-da-consciencia
- Produção: https://portalcaminhodaconsciencia.com.br (ativo, DNS propagado 2026-08-31)
- Domínio antigo: https://portalanjosdaprosperidade.com.br (em desativação)
- Deploy Preview R2B: https://6a9594058a0be08aa0146e88--portal-caminho-da-consciencia.netlify.app
- GTM: https://tagmanager.google.com/#/container/accounts/6374341210/containers/262801474
- GA4 Property: G-2C2WWT3ZQG (Stream ID: 15534016121)
