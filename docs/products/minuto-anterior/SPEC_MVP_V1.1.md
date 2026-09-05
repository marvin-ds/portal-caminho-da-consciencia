# PORTAL CAMINHO DA CONSCIÊNCIA
## Especificação de Produto e Implementação — **O Minuto Anterior** — MVP V1.1


> **ESCOPO: exclusivo do produto O Minuto Anterior — NÃO É REGRA TRANSVERSAL.** Esta especificação não deve ser aplicada a outros produtos salvo quando um contrato transversal aprovado for explicitamente referenciado.

**STATUS:** especificação de produto/feature pronta para implementação por gates  
**DATA:** 03/09/2026  
**PRODUCT_ID:** `minute_before_free_v1`  
**NOME PÚBLICO:** **O Minuto Anterior**  
**SLUG DE OFERTA:** `/minuto-anterior`  
**TIPO:** produto digital gratuito / experiência guiada / lead magnet interativo  
**FUNÇÃO PRINCIPAL NA JORNADA:** **DESCOBRIR → RECONHECER**  
**PRÓXIMO PASSO POSSÍVEL:** observação autônoma, Produto Dinheiro, Mapeamento Padrão Interrompido ou nenhum produto adicional  
**DOCUMENTO-PAI DE PRODUTO:** Documento 02.A — Framework Canônico de Construção, Validação e Escala de Produtos e Ofertas — V1.0  
**DOCUMENTOS SUPERIORES:** Documento 00 — Governança Conceitual; Documento 01 — Fundacional Estratégico; Documento 02 — Jornada, Produtos, Serviços e Protocolos  
**DOCUMENTOS RELACIONADOS:** Documento 03 — Editorial e Aquisição; Documento 03.A — Percepção Antes da Explicação; Documento 03.F — Páginas, Ofertas e Message Match; Documento 04 — Identidade e Voz; Documento 05 — Arquitetura Técnica; Documento 06 — CURRENT

> **O problema aparece no final. O Minuto Anterior convida a pessoa a voltar alguns passos e perceber algo que normalmente passa despercebido.**

---

# 0. FUNÇÃO DESTA ESPECIFICAÇÃO

Este documento transforma **O Minuto Anterior** de ideia de produto em uma especificação executável para:

- oferta;
- página de conversão;
- experiência interativa;
- conteúdo e lógica do exercício;
- resultado personalizado determinístico;
- Folha **Meu Minuto Anterior**;
- persistência e reenvio;
- repetição da experiência;
- Supabase;
- Vercel;
- Resend;
- Brevo;
- LGPD, privacidade e retenção;
- analytics e atribuição;
- testes;
- segurança;
- observabilidade;
- implementação por gates com alternância entre **Claude Code** e **Codex**;
- critérios de aceite;
- pós-lançamento e validação.

Este documento é uma **spec de produto/feature**, não um novo documento canônico numerado. Ele deve viver preferencialmente em:

```text
/docs/products/minuto-anterior/SPEC_MVP_V1.md
```

ou estrutura equivalente validada no Gate 0.

---

# 1. DECISÃO-MÃE DO PRODUTO

## 1.1. O que estamos construindo

**O Minuto Anterior** será uma experiência online guiada, mobile first, de aproximadamente **5–7 minutos**, na qual a pessoa escolhe uma situação real recente, reconstrói alguns momentos anteriores e termina com uma frase própria que sintetiza algo que antes poderia estar passando despercebido.

Não será:

- e-book;
- minicurso;
- quiz de personalidade;
- diagnóstico;
- leitura energética;
- Mesa Radiônica;
- aplicação de Sintonize Prosperidade;
- interpretação clínica;
- “descoberta da causa raiz”;
- ferramenta de IA que diz à pessoa qual é seu padrão.

## 1.2. Resultado mínimo que define sucesso

A experiência cumpriu sua função quando a pessoa consegue completar, de forma honesta, a frase:

> **“Uma coisa que aconteceu antes e que eu normalmente não observava foi…”**

Esse é o **Core Value** do produto.

## 1.3. Job-to-be-Done

> **Quando uma situação incomoda, trava ou parece estar acontecendo de novo, a pessoa usa O Minuto Anterior para voltar alguns minutos, horas ou dias, reconstruir o que aconteceu e identificar pelo menos um movimento observável que normalmente passaria despercebido — sem precisar conhecer o Método, fazer um curso longo ou encontrar uma explicação definitiva.**

## 1.4. Transformação

### Antes

> “Isso aconteceu de novo.”

### Depois

> “Consigo enxergar melhor como cheguei até aqui e percebi pelo menos uma coisa que aconteceu antes.”

### Não prometemos

- que esse movimento causou a consequência;
- que ele é um padrão definitivo;
- que a pessoa vai agir diferente automaticamente;
- que a situação será resolvida;
- que descobrimos causa espiritual, psicológica, energética ou clínica.

---

# 2. PAPEL NA JORNADA E NA ESTEIRA

Arquitetura principal:

> **CONTEÚDO / SEARCH / ANÚNCIO → O MINUTO ANTERIOR → OBSERVAÇÃO → PRODUTO POR DOR OU MAPEAMENTO, QUANDO PERTINENTE**

Na Jornada:

> **DESCOBRIR → RECONHECER**

A experiência pode tocar levemente **MAPEAR**, mas não substitui o Mapeamento Padrão Interrompido.

## 2.1. Objetivos simultâneos

O produto precisa cumprir cinco funções ao mesmo tempo:

1. **entregar valor real em minutos**;
2. **demonstrar a lógica autoral do Portal sem dar aula sobre o Método**;
3. **gerar lead com consentimento claro**;
4. **produzir dados estruturados úteis para aprendizagem de produto**;
5. **gerar desejo legítimo de aprofundamento**, sem pressão artificial.

## 2.2. Regra de progressão

A saída da experiência pode ser:

- observar por 7 dias e não comprar nada;
- fazer novamente com outra situação;
- conhecer o Produto Dinheiro, quando estiver operacional e a origem/contexto for aderente;
- conhecer o Mapeamento Padrão Interrompido, quando a pessoa quiser compreender melhor o próprio caso;
- consumir mais conteúdo;
- encerrar ali.

> **A esteira oferece continuidade. Nunca fabrica necessidade.**

---

# 3. PRINCÍPIOS DE EXPERIÊNCIA — PADRÃO “15/10”

O produto deve ser pequeno, mas não parecer pobre. O encantamento deve vir de **precisão, simplicidade, beleza, humanidade e sensação de descoberta**.

## 3.1. Os 10 princípios de encantamento

1. **Começar rápido:** nenhum onboarding longo.
2. **Valor antes de teoria:** a pessoa trabalha uma situação real desde o início.
3. **Uma pergunta por tela:** foco cognitivo.
4. **Progresso visível:** sensação de avanço sem gamificação infantil.
5. **Texto humano:** TOM MARCOS, sem voz de app genérico.
6. **Resultado construído com as próprias palavras da pessoa.**
7. **Nenhuma interpretação inventada por IA.**
8. **Privacidade perceptível:** a pessoa entende que suas respostas não serão usadas para “diagnosticá-la”.
9. **Resultado salvável e reenviável.**
10. **Fechamento que abre uma pergunta maior:** “Se isso apareceu aqui, será que algo parecido aparece em outros momentos?”

## 3.2. Momento de encantamento principal — “Momento Espelho”

Ao final, a interface reconstrói de modo elegante e determinístico:

> **A situação que você escolheu:** `[situação]`  
> **Antes disso, você percebeu:** `[movimento anterior]`  
> **Uma frase que apareceu foi:** `[frase interna]`  
> **O que você fez:** `[ação]`  
> **E você marcou que:** `[repetição]`

Depois:

> **Seu Minuto Anterior**  
> `[frase final escrita pela pessoa]`

E imediatamente:

> **Não é uma causa. Não é um diagnóstico. É apenas algo que agora ficou mais visível.**

Esse contraste é a essência do produto.

## 3.3. Segunda camada de encantamento — desejo de aprofundamento

Depois do resultado:

> **“Agora vem uma pergunta diferente: isso aconteceu só aqui ou existe algo parecido em outros episódios?”**

CTA suave:

> **Fazer novamente com outra situação**

CTA de profundidade, secundário:

> **Quero entender melhor o meu caso**

Nunca usar:

> “Descobrimos seu padrão. Compre agora.”

---

# 4. ARQUITETURA DA EXPERIÊNCIA

## 4.1. Duração-alvo

- **TTFV — primeiro valor percebido:** até 3 minutos;
- **Core Value:** até 7 minutos;
- **Minimum Effective Dose:** 6 perguntas + síntese final;
- **áudio:** opcional, 2:30–4:00 min, não bloqueia a experiência.

## 4.2. Fluxo macro

```text
LANDING
  ↓
CTA COMEÇAR
  ↓
CAPTURA DE E-MAIL + CONSENTIMENTOS
  ↓
INTRO CURTA / ÁUDIO OPCIONAL
  ↓
Q1 SITUAÇÃO
  ↓
Q2 O QUE ACONTECEU ANTES
  ↓
Q3 FRASE / PENSAMENTO
  ↓
Q4 AÇÃO OBSERVÁVEL
  ↓
Q5 REPETIÇÃO
  ↓
Q6 MEU MINUTO ANTERIOR
  ↓
RESULTADO / MOMENTO ESPELHO
  ↓
FOLHA MEU MINUTO ANTERIOR
  ↓
REENVIAR / FAZER NOVAMENTE / PRÓXIMO PASSO
```

---

# 5. ONBOARDING E CAPTURA

## 5.1. Dados mínimos

**Obrigatório:**

- e-mail.

**Não coletar no MVP:**

- nome completo;
- telefone;
- data de nascimento;
- endereço;
- CPF;
- profissão;
- sexo;
- estado civil.

Se, no futuro, nome próprio melhorar de forma mensurável a experiência, avaliar como campo opcional separado.

## 5.2. Texto de confiança antes do início

> **Leva cerca de 5 minutos.**  
> Você vai escolher uma situação real e olhar alguns passos antes do que aconteceu.  
> Não existe resposta certa. Você não precisa conhecer o Método nem acreditar em espiritualidade.  
> Evite incluir nomes completos, documentos ou informações pessoais de terceiros.

## 5.3. Consentimentos

### Necessário para a experiência

A interface deve explicar a finalidade do tratamento dos dados para:

- executar a experiência;
- salvar o resultado;
- permitir recuperação/reenvio;
- proteger a operação;
- produzir indicadores agregados, quando aplicável e documentado.

A base legal e o texto jurídico final devem ser revisados antes de produção; **marketing não pode ser condição para usar o gratuito**.

### Marketing — opcional e desmarcado

> ☐ **Quero receber por e-mail conteúdos, exercícios e próximos passos do Portal Caminho da Consciência.**

Regras:

- nunca pré-marcar;
- registrar versão do texto;
- timestamp;
- origem;
- IP somente se houver finalidade e política compatível;
- marketing opt-in independente da entrega transacional.

## 5.4. Double Opt-In

Recomendação operacional:

- a entrega do resultado ocorre via **Resend**, independentemente do marketing opt-in;
- se a pessoa marcar marketing, integrar com **Brevo**;
- preferencialmente usar Double Opt-In quando a configuração/experiência comercial justificar;
- a sequência de marketing só inicia após confirmação quando DOI estiver ativo.

---

# 6. CONTEÚDO DAS 6 PERGUNTAS

## Q1 — O que aconteceu?

**Objetivo:** escolher um episódio real, específico e recente.

Texto:

> **Pense em uma situação que aconteceu recentemente e que incomodou você.**  
> Não escolha “minha vida financeira” ou “meu relacionamento”. Escolha um episódio.

### Campo estruturado: contexto

`entry_context`

Opções de referência V1:

- dinheiro;
- trabalho;
- relacionamento;
- família;
- projeto/decisão;
- rotina/prioridades;
- espiritualidade/prática pessoal;
- outro.

**Observação:** isso é taxonomia operacional de entrada, não diagnóstico nem “Territórios definitivos” do Método.

### Campo livre curto

> **Em uma frase, o que aconteceu?**

Regras:

- 20–400 caracteres;
- contador visível;
- sem rich text;
- escapar HTML;
- texto de ajuda: “Não inclua nomes completos ou dados de terceiros.”

---

## Q2 — O que aconteceu antes?

**Objetivo:** reconstrução simples.

Texto:

> **Agora volte um pouco.**  
> Pode ser um minuto, algumas horas ou até alguns dias. O que aconteceu antes de você perceber o problema?

### Campo estruturado opcional: distância temporal

- minutos;
- horas;
- mesmo dia;
- alguns dias;
- não sei.

### Campo livre

> **Qual foi a primeira coisa que você consegue lembrar?**

20–500 caracteres.

---

## Q3 — O que apareceu na sua cabeça?

**Objetivo:** tornar uma frase interna observável sem interpretá-la.

Texto:

> **Você lembra do que pensou ou disse para si nesse momento?**  
> Pode ser uma frase curta. Se não lembrar, pode seguir sem preencher.

Campo livre opcional, 0–240 caracteres.

Exemplos discretos:

- “Depois eu vejo.”
- “Deixa comigo.”
- “Amanhã eu faço.”
- “Melhor não falar agora.”

---

## Q4 — O que você fez?

**Objetivo:** priorizar comportamento observável.

Texto:

> **O que você fez logo depois?**  
> Escolha o que mais se aproxima. Não existe resposta “boa” ou “ruim”.

### `action_signal_v1`

- adiei para depois;
- evitei olhar / verificar;
- aceitei / respondi rápido;
- fiquei em silêncio / não falei;
- comecei outra coisa;
- parei / recuei;
- fiz mais do que precisava;
- tentei resolver imediatamente;
- outro;
- não sei.

Se `outro`, campo curto opcional.

**Regra central:** o sistema não converte a seleção em rótulo psicológico.

---

## Q5 — Isso já aconteceu de forma parecida?

Texto:

> **Sem tentar explicar por quê: você lembra de outra situação em que algo parecido aconteceu?**

Opções:

- sim;
- talvez;
- não;
- não sei.

Se `sim/talvez`, campo opcional:

> **Em poucas palavras, qual situação veio à cabeça?**

Máximo 300 caracteres.

---

## Q6 — Meu Minuto Anterior

Texto:

> **Agora complete com suas palavras:**

> **“Uma coisa que aconteceu antes e que eu normalmente não observava foi…”**

Campo obrigatório, 20–360 caracteres.

Ao enviar:

- persistir a conclusão;
- gerar snapshot do resultado;
- emitir evento `minute_before_complete` sem conteúdo pessoal;
- mostrar resultado imediatamente.

---

# 7. RESULTADO — “MEU MINUTO ANTERIOR”

## 7.1. O resultado NÃO é um score

Não mostrar:

- nota;
- nível;
- percentual;
- perfil;
- “tipo de padrão”;
- diagnóstico;
- interpretação automática.

## 7.2. Resultado determinístico

O resultado é composto exclusivamente por:

- respostas fornecidas;
- labels neutras previamente aprovadas;
- textos editoriais fixos do Portal.

Nenhuma IA é necessária no MVP.

## 7.3. Estrutura visual

### Cabeçalho

> **Seu Minuto Anterior**  
> Uma situação. Alguns passos para trás. Uma coisa que agora ficou mais visível.

### Bloco 1 — A situação

`q1_text`

### Bloco 2 — Antes disso

`q2_text`

### Bloco 3 — A frase que apareceu

`q3_text` — esconder se vazio.

### Bloco 4 — O que você fez

Label humanizada do `action_signal_v1` + texto de outro, se houver.

### Bloco 5 — Isso já apareceu antes?

Resposta Q5 + nota curta, sem inferência.

### Bloco 6 — Seu Minuto Anterior

Destaque visual principal:

> `[q6_final_sentence]`

### Bloco 7 — Limite semântico

> **Isso não prova uma causa e não define você. É apenas um movimento que agora ficou mais fácil de observar.**

### Bloco 8 — microprática de 7 dias

> **Na próxima vez, não tente consertar tudo na hora. Apenas observe:**  
> **isso apareceu de novo antes da consequência?**

### Bloco 9 — continuidade

Primário:

> **Fazer novamente com outra situação**

Secundário:

> **Quero entender melhor o meu caso**

Contextual, via feature flag:

> **Conhecer a experiência sobre dinheiro**

somente quando Produto Dinheiro estiver operacional e o contexto/origem justificar.

---

# 8. FOLHA “MEU MINUTO ANTERIOR”

## 8.1. Função

Não é bônus. É a materialização do resultado.

## 8.2. MVP

Criar rota/página de impressão:

```text
/minuto-anterior/folha
```

ou equivalente privado.

A folha deve caber em **uma página A4** com:

- marca discreta;
- data;
- situação;
- antes;
- frase interna;
- ação;
- repetição;
- Meu Minuto Anterior;
- microprática dos próximos dias;
- rodapé de limites.

## 8.3. Não gerar PDF server-side no primeiro MVP

Preferir:

- HTML responsivo;
- CSS `@media print`;
- botão **Salvar / imprimir minha folha**;
- navegador permite “Salvar como PDF”.

Vantagens:

- menos dependências;
- menos custo;
- menor superfície de falha;
- evita attachment pesado no e-mail.

Adicionar PDF server-side somente se dados reais mostrarem necessidade.

---

# 9. ÁUDIO EXPLICATIVO DE MARCOS

## 9.1. Regra

O áudio é opcional e complementa a experiência. Ele não pode ser necessário para entender o exercício.

## 9.2. Padrão técnico

- duração: 2:30–4:00;
- MP3/AAC web-friendly;
- preload metadata;
- controles nativos ou acessíveis;
- transcrição em texto disponível;
- sem autoplay;
- arquivo versionado por conteúdo: `minuto-anterior-intro-v1.mp3`.

## 9.3. Roteiro V1 sugerido

> “Antes de começar, eu quero te pedir uma coisa simples: não tenta explicar a sua vida inteira agora. Pensa só numa situação que aconteceu recentemente e que incomodou você. Pode ser dinheiro, trabalho, uma conversa, uma decisão que você adiou, qualquer coisa concreta. A gente costuma perceber o problema quando ele já está visível. O convite aqui é outro: voltar alguns passos e ver o que aconteceu antes. Talvez você perceba uma frase que disse para si, uma coisa que evitou olhar, um ‘depois eu vejo’, um ‘deixa comigo’, um silêncio. Isso não significa que você encontrou a causa. E também não significa que aquilo define você. É só uma forma de enxergar com mais detalhe algo que talvez passasse despercebido. Faz o exercício com calma, sem procurar a resposta perfeita. No final, você vai ter uma folha simples com o seu Minuto Anterior para guardar e observar nos próximos dias.”

Antes de gravação, passar pelo TOM MARCOS e leitura em voz alta.

---

# 10. ARQUITETURA TÉCNICA RECOMENDADA

## 10.1. Separação de camadas

### Site institucional / landing

- permanece na infraestrutura institucional atual, inicialmente Netlify;
- URL preferencial:

```text
https://portalcaminhodaconsciencia.com.br/minuto-anterior
```

### Aplicação

- **Next.js**;
- **Vercel**;
- subdomínio preferencial:

```text
https://app.portalcaminhodaconsciencia.com.br/minuto-anterior
```

### Banco / backend de dados

- **Supabase / PostgreSQL**;
- RLS por padrão;
- acesso de dados íntimos somente server-side;
- service role nunca no browser.

### Transacional

- **Resend**.

### Marketing / sequência

- **Brevo**.

## 10.2. Decisão de repositório — pré-checagem obrigatória

O Gate 0 deve verificar se já existe um repo/app reutilizável.

Se não existir, recomendação:

```text
portal-caminho-da-consciencia-app
```

como aplicação compartilhável para futuras experiências do Portal, em vez de um repo descartável exclusivo do Minuto Anterior.

**Não criar repo novo sem inventário.**

---

# 11. ARQUITETURA DE ROTAS — REFERÊNCIA

```text
/minuto-anterior                  → onboarding/app
/minuto-anterior/exercicio        → fluxo guiado
/minuto-anterior/resultado        → shell de resultado
/minuto-anterior/folha            → print view
/minuto-anterior/repetir          → nova sessão
/r                                → resolver resultado via token no fragment

/api/minuto-anterior/session      POST create/resume
/api/minuto-anterior/answer       POST save answer
/api/minuto-anterior/complete     POST finalize + snapshot
/api/minuto-anterior/result       POST resolve token
/api/minuto-anterior/resend       POST resend result
/api/minuto-anterior/repeat       POST create linked session
/api/privacy/delete               POST privacy request
/api/privacy/export               POST privacy request
/api/webhooks/resend              POST webhook receiver
/api/integrations/brevo           internal/server only
```

Nomes finais podem mudar após inspeção do repo, preservando semântica.

---

# 12. MODELO DE DADOS — PROPOSTA V1

## 12.1. Princípio

Separar:

- identidade;
- consentimento;
- sessão;
- conteúdo íntimo;
- resultado;
- sinais estruturados;
- aquisição;
- comunicação;
- auditoria.

## 12.2. `contacts`

```text
id uuid pk
email_normalized citext unique not null
created_at timestamptz
updated_at timestamptz
last_seen_at timestamptz
status text
```

Não armazenar nome se não for necessário.

## 12.3. `consents`

```text
id uuid pk
contact_id uuid fk
purpose text
status text                 -- granted / withdrawn
policy_version text
copy_version text
granted_at timestamptz
withdrawn_at timestamptz null
source text
variant_id text null
metadata jsonb minimal
```

Purposes V1:

- `experience_delivery`
- `marketing_email`
- `analytics` quando aplicável à lógica própria de consentimento

## 12.4. `minute_before_sessions`

```text
id uuid pk
contact_id uuid fk
product_id text default minute_before_free_v1
product_version text
status text                -- started / in_progress / completed / abandoned / deleted
entry_context text null
variant_id text
started_at timestamptz
completed_at timestamptz null
last_step smallint
raw_retention_until timestamptz
created_at timestamptz
updated_at timestamptz
```

## 12.5. `minute_before_answers`

```text
id uuid pk
session_id uuid fk
question_key text
answer_text text null
answer_code text null
answer_version text
created_at timestamptz
updated_at timestamptz
```

Regras:

- respostas de Classe D;
- sem acesso público direto;
- limites de tamanho aplicados no backend;
- não logar conteúdo.

## 12.6. `minute_before_results`

```text
id uuid pk
session_id uuid unique fk
result_version text
snapshot_jsonb jsonb
public_token_hash text unique
public_token_expires_at timestamptz
created_at timestamptz
```

`snapshot_jsonb` é deliberado para preservar o resultado exatamente como foi entregue naquela versão.

## 12.7. `minute_before_signals`

Dados estruturados, sem inferência de IA:

```text
id uuid pk
session_id uuid fk
signal_type text
signal_code text
signal_version text
source text          -- user_selected / system_fixed
created_at timestamptz
```

Exemplos:

```text
entry_context=money
action_signal=avoid_checking
repetition=yes
time_distance=hours
```

## 12.8. `attribution_touches`

```text
id uuid pk
contact_id uuid null
session_id uuid null
touch_type text       -- first / current
source text null
medium text null
campaign text null
content text null
term text null
gclid text null
gbraid text null
wbraid text null
landing_page text null
referrer text null
created_at timestamptz
```

Definir retenção específica e não tratar parâmetros de campanha como identidade da pessoa.

## 12.9. `communication_dispatches`

```text
id uuid pk
contact_id uuid
session_id uuid null
provider text          -- resend / brevo
message_type text
provider_message_id text null
status text
idempotency_key text unique
sent_at timestamptz null
delivered_at timestamptz null
failed_at timestamptz null
created_at timestamptz
```

## 12.10. `webhook_receipts`

```text
id uuid pk
provider text
event_id text
signature_valid boolean
event_type text
payload_minimized jsonb
received_at timestamptz
processed_at timestamptz null
status text
unique(provider, event_id)
```

Não persistir conteúdo integral de e-mail se não houver necessidade.

## 12.11. `product_feedback`

```text
id uuid pk
session_id uuid fk
perceived_value text    -- yes / partly / no
comment text null
created_at timestamptz
```

Pergunta V1:

> **Esse exercício fez você perceber alguma coisa que normalmente passaria despercebida?**

- sim;
- em parte;
- não.

## 12.12. `privacy_requests`

```text
id uuid pk
contact_id uuid null
request_type text       -- access / export / delete / correct
status text
requested_at timestamptz
completed_at timestamptz null
```

---

# 13. RLS E ACESSO

Como o MVP não exige login:

- browser **não lê tabelas de dados íntimos diretamente**;
- anon não recebe SELECT/UPDATE em Classe C/D;
- APIs server-side fazem operações necessárias;
- service role somente em ambiente server-side;
- resultado é resolvido por token opaco e escopo mínimo;
- admin somente server-side/interno;
- não criar painel admin público no MVP.

## 13.1. Regra de token

- gerar no servidor com pelo menos 32 bytes aleatórios;
- nunca usar UUID simples como segredo de acesso;
- armazenar apenas hash SHA-256 do token;
- token expira em **30 dias** no MVP;
- reenvio pode emitir novo token e invalidar/rotacionar o anterior, conforme implementação.

## 13.2. Melhoria de privacidade — token em fragmento

Preferência:

```text
https://app.portalcaminhodaconsciencia.com.br/r#t=TOKEN
```

O fragmento não é enviado automaticamente ao servidor na requisição HTTP inicial, reduzindo exposição em logs/referrers.

Fluxo:

1. página `/r` carrega sem segredo no servidor;
2. JS lê `#t`;
3. envia token por POST para endpoint de resolução;
4. servidor valida hash + TTL;
5. resposta usa `Cache-Control: no-store`.

Fallback para query string só se necessário e com redaction/log policy.

---

# 14. POLÍTICA DE RETENÇÃO V1 — PROPOSTA OPERACIONAL

**Precisa de revisão jurídica antes de produção.**

Proposta inicial:

- token de acesso: 30 dias;
- respostas livres identificáveis: 90 dias;
- snapshot de resultado identificável: 90 dias;
- sinais agregados/desidentificados: podem ser retidos por prazo maior para aprendizagem do produto;
- consentimento/auditoria: manter pelo período necessário para demonstrar a relação e atender obrigações aplicáveis;
- contato de marketing no Brevo: até opt-out/limpeza operacional conforme política definida;
- contato transacional mínimo no Supabase: enquanto houver finalidade de recuperação/privacidade, com política expressa.

## 14.1. Job de retenção

Criar rotina segura para:

- identificar registros vencidos;
- apagar/anonymizar Classe D;
- preservar apenas sinais agregados não reidentificáveis quando permitido;
- registrar execução de retenção sem armazenar conteúdo apagado.

No MVP inicial, pode ser job manual documentado antes de automatizar, desde que a política seja operacionalmente cumprida.

---

# 15. RESEND — E-MAIL TRANSACIONAL

## 15.1. Responsabilidades

Resend envia somente mensagens necessárias para a experiência:

- resultado concluído;
- link de recuperação;
- reenvio solicitado;
- eventualmente aviso operacional crítico.

## 15.2. Template T0 — entrega

**Assunto:** Seu Minuto Anterior está aqui

Estrutura:

> Você terminou o exercício.  
> Seu resultado continua disponível por um período limitado.
>
> **Ver meu Minuto Anterior**
>
> Se quiser, salve ou imprima sua Folha e observe nos próximos dias se algo parecido aparece novamente.
>
> Este exercício não é diagnóstico nem uma explicação definitiva sobre você.

## 15.3. Reenvio

Botão dentro do resultado:

> **Reenviar meu resultado por e-mail**

Regras:

- usa o e-mail já associado;
- não pede novo endereço;
- resposta genérica;
- rate limit;
- idempotência;
- registrar dispatch.

## 15.4. Webhooks

Receber eventos relevantes:

- sent;
- delivered;
- bounced;
- complained/failed quando disponível.

Requisitos:

- validar assinatura;
- deduplicar por `event_id`;
- idempotência;
- payload minimizado;
- retry/replay suportável;
- não misturar webhook com regra de marketing.

## 15.5. DNS de e-mail

Antes de produção:

- domínio/remetente validado;
- SPF/DKIM configurados conforme provedor;
- DMARC recomendado;
- endereço de resposta válido;
- testes de deliverability reais.

---

# 16. BREVO — MARKETING E SEQUÊNCIA

## 16.1. Regra superior

**Brevo nunca recebe respostas íntimas.**

Enviar apenas dados mínimos, por exemplo:

```text
EMAIL
PRODUCT = MINUTO_ANTERIOR
VARIANT = GENERAL / MONEY / ...
ENTRY_CONTEXT = MONEY / WORK / ...
COMPLETED = TRUE/FALSE
CREATED_AT
```

Não enviar:

- `q1_text`;
- `q2_text`;
- frase interna;
- segunda situação;
- resultado textual;
- relato pessoal.

## 16.2. Entrada no Brevo

Somente se marketing opt-in válido.

Preferência:

- lista/segmento próprio do Minuto Anterior;
- consent group, se disponível na conta;
- Double Opt-In quando configurado como política;
- prova de consentimento mantida também no Supabase.

## 16.3. Sequência V1

### E-mail M1 — D+1

**Assunto:** Você percebeu isso de novo?

Função:

- lembrar sem vender;
- reforçar microprática.

Mensagem-base:

> Ontem você voltou alguns passos antes de uma situação. Hoje, não precisa repetir o exercício inteiro. Só observe uma coisa: aquele movimento apareceu de novo em algum momento?

CTA:

> **Fazer O Minuto Anterior novamente**

### E-mail M2 — D+3

**Assunto:** E se o cenário mudar, mas o movimento voltar?

Função:

- introduzir repetição sem diagnosticar.

Mensagem-base:

> Às vezes a situação muda: dinheiro, trabalho, uma conversa, um projeto. Isso não significa automaticamente que exista a mesma causa. Mas quando um movimento parecido aparece mais de uma vez, vale colocar os episódios lado a lado.

CTA:

> **Observar outra situação**

### E-mail M3 — D+5

**Assunto:** Perceber é o começo

Função:

- abrir a profundidade.

Mensagem-base:

> O exercício ajuda a perceber. Quando a pergunta passa a ser “como isso acontece no meu caso?”, o próximo nível é organizar mais de um episódio, comparar o que se repete e localizar o que merece atenção primeiro.

CTA condicional:

> **Conhecer o Mapeamento Padrão Interrompido**

Se Produto Dinheiro estiver publicado e a pessoa entrou por contexto financeiro, experimentar rota correspondente via feature flag.

### E-mail M4 — opcional D+8

Somente se dados indicarem valor. Não incluir no primeiro lançamento por obrigação.

---

# 17. ANALYTICS E EVENTOS

## 17.1. Regra

Analytics mede comportamento, **não conteúdo íntimo**.

## 17.2. Eventos V1

```text
minute_before_landing_view
minute_before_cta_click
minute_before_start
minute_before_step_view
minute_before_step_complete
minute_before_audio_play
minute_before_complete
minute_before_result_view
minute_before_sheet_print
minute_before_result_resend
minute_before_repeat_start
minute_before_feedback_submit
minute_before_next_step_click
```

## 17.3. Parâmetros permitidos

```text
product_id
product_version
variant_id
step_number
entry_context_coarse
source
medium
campaign
cta_location
next_step_type
```

**Nota conservadora:** `entry_context_coarse` só deve ir para analytics se a classificação e consentimento vigentes permitirem. Se houver dúvida, manter apenas internamente no Supabase.

## 17.4. Proibido no dataLayer/GA4/Meta

- e-mail;
- nome;
- texto livre;
- frase interna;
- descrição da situação;
- relato de relacionamento;
- conteúdo espiritual;
- resposta pessoal.

## 17.5. KPIs

### Aquisição

- landing → CTA;
- CTA → start;
- custo por start, quando houver mídia;
- origem/variant.

### Produto

- start → complete;
- drop-off por etapa;
- tempo mediano de conclusão;
- % que responde “sim/em parte” ao valor percebido;
- print/save;
- repeat rate.

### Continuidade

- next_step_click;
- clique para Dinheiro;
- clique para Mapeamento;
- futura compra atribuída;
- unsubscribe da sequência.

---

# 18. ATRIBUIÇÃO

Preservar:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- `gclid`;
- `gbraid`;
- `wbraid`;
- landing page;
- variant.

## 18.1. Variantes V1 previstas

```text
ma_general_v1
ma_money_v1
ma_procrastination_v1
ma_relationship_v1
```

**Não publicar quatro variantes de uma vez sem tráfego/hipótese.** A arquitetura aceita variantes; a operação começa com base geral e ativa variantes quando existe origem clara.

---

# 19. SEGURANÇA E ANTIABUSO

## 19.1. Formulário

- validação client + server;
- tamanho máximo por campo;
- escaping;
- sem HTML;
- honeypot;
- rate limit por IP/session;
- proteção adicional (ex.: challenge) somente se abuso justificar.

## 19.2. APIs

- POST para mutações;
- CSRF strategy compatível com arquitetura;
- Origin/Referer checks quando apropriado;
- secrets server-side;
- rate limits;
- respostas sem vazamento de existência de e-mail;
- idempotency keys para complete/resend/webhooks.

## 19.3. Resultado

- `noindex,nofollow`;
- `Cache-Control: no-store`;
- não compartilhar publicamente;
- sem botão de social share;
- token com TTL;
- referrer policy restritiva;
- evitar segredo em logs.

## 19.4. Headers

Configurar e validar, conforme compatibilidade:

- HSTS;
- CSP;
- `frame-ancestors`;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- permissions policy mínima.

## 19.5. Logs

Nunca logar:

- e-mail completo sem necessidade;
- respostas;
- token bruto;
- payload de sessão íntima.

Criar função de redaction para erros.

---

# 20. LGPD E PRIVACIDADE — REQUISITOS DE PRODUTO

Antes do deploy:

- Política de Privacidade atualizada;
- finalidade específica do produto;
- operador/controlador mapeados;
- fornecedores listados quando aplicável;
- retenção definida;
- consentimento de marketing separado;
- mecanismo de revogação;
- mecanismo de exportação/acesso;
- mecanismo de exclusão;
- versão de política/consentimento persistida;
- contato para direitos do titular;
- procedimento interno de incidente.

## 20.1. UX de privacidade

Na experiência, link discreto:

> **Como seus dados são usados**

Resumo em linguagem humana:

> Usamos suas respostas para gerar e recuperar o seu resultado. Elas não são enviadas para plataformas de anúncios e não são usadas para “diagnosticar” você. Dados agregados podem ajudar o Portal a entender quais situações aparecem com mais frequência, conforme nossa Política de Privacidade.

Texto jurídico final deve ser validado antes de produção.

---

# 21. RECUPERAÇÃO, INTERRUPÇÃO E REENTRADA

Esse ponto é obrigatório e foi acrescentado para evitar uma experiência frágil.

## 21.1. Sessão interrompida

- salvar progresso após cada etapa;
- cookie/sessão opaca com TTL curto;
- ao voltar no mesmo dispositivo, oferecer:

> **Continuar de onde parei**

- nunca perder respostas por refresh simples.

## 21.2. E-mail de recuperação

Não enviar automaticamente se a pessoa não concluiu, a menos que:

- haja base/consentimento adequado;
- a regra esteja documentada;
- o produto demonstre necessidade.

No MVP, priorizar recuperação local e resultado final por e-mail.

## 21.3. Repetir experiência

No resultado:

> **Fazer novamente com outra situação**

Cria nova `minute_before_session`, associada ao mesmo contato.

**V1 não compara automaticamente duas sessões para inferir padrão.**

V1.1 poderá mostrar comparações puramente estruturadas, se houver evidência e aprovação:

> “Nas duas experiências, você selecionou ‘adiar’ como algo que aconteceu antes.”

Sempre com limite:

> “Isso é uma repetição observada, não uma explicação definitiva.”

---

# 22. ACESSIBILIDADE E MOBILE FIRST

Validar prioritariamente:

- 360 px;
- 375 px;
- 430 px;
- 768 px;
- desktop.

Requisitos:

- WCAG AA como direção mínima;
- contraste suficiente;
- foco visível;
- navegação por teclado;
- labels reais;
- `aria-live` apenas quando necessário;
- erros associados ao campo;
- botão com área de toque adequada;
- progresso não dependente apenas de cor;
- áudio com transcrição;
- `prefers-reduced-motion` respeitado;
- fontes e tamanhos legíveis;
- sem carrosséis horizontais essenciais;
- resultado imprimível.

---

# 23. PERFORMANCE

Metas de referência:

- página inicial leve;
- sem bibliotecas grandes sem necessidade;
- imagens otimizadas;
- áudio `preload=metadata`;
- respostas não bloqueadas por tracking;
- App Router/SSR/Server Components somente onde fizer sentido;
- nenhum script de marketing deve impedir o exercício;
- resultado rápido após Q6.

Evitar no MVP:

- animação 3D;
- vídeo background;
- Lottie pesado;
- PDF server-side;
- IA generativa;
- dashboard admin sofisticado;
- login;
- PWA.

---

# 24. OBSERVABILIDADE

MVP mínimo:

- Vercel logs;
- Supabase logs;
- tabela de webhook receipts;
- contagem de erros por endpoint sem PII;
- alerta manual/automatizado para falha grave de e-mail, se simples;
- health check da app;
- teste sintético básico do fluxo crítico antes de cada release.

Sentry ou ferramenta equivalente entra somente se volume/erro justificar.

---

# 25. TESTES

## 25.1. Unitários

Testar:

- normalização de e-mail;
- token/hash/TTL;
- validação de respostas;
- mapper de labels;
- geração do snapshot;
- geração de `action_signal`;
- idempotência;
- rate limit helpers;
- attribution parser;
- privacy redaction.

## 25.2. Banco

- migrations versionadas;
- constraints;
- RLS/negação de anon;
- acesso server-only;
- TTL/retention queries;
- idempotência webhook;
- deletion cascade deliberada.

Se o projeto já usa pgTAP, manter padrão.

## 25.3. Integração

- criar sessão;
- salvar cada etapa;
- refresh/retomar;
- concluir;
- gerar resultado;
- resolver token válido;
- rejeitar token expirado;
- reenvio;
- webhook duplicate;
- Brevo apenas com opt-in.

## 25.4. E2E

Cenários obrigatórios:

1. geral → conclui sem áudio;
2. geral → usa áudio;
3. dinheiro → conclui;
4. relacionamento → campos opcionais vazios;
5. refresh no passo 3 → continua;
6. abandona → retorna no mesmo dispositivo;
7. resultado → folha → print;
8. resultado → reenvio;
9. marketing unchecked → não cria contato marketing;
10. marketing checked → fluxo Brevo;
11. token inválido/expirado;
12. exclusão de dados;
13. mobile 360;
14. teclado/accessibility smoke test.

## 25.5. Fixture de privacidade

Criar dados fictícios com textos sensíveis simulados e confirmar que:

- não chegam ao analytics;
- não aparecem em logs;
- não chegam ao Brevo;
- não aparecem no webhook Resend além do necessário.

---

# 26. PÁGINA DE CONVERSÃO — VERSÃO BASE V1

**VARIANT_ID:** `ma_general_v1`

Objetivo: cadastro com baixa fricção e início imediato.

A página deve ser curta. Ela não é uma página de vendas longa de low ticket.

---

## SEÇÃO 1 — HERO

**Eyebrow:**

> **EXERCÍCIO GRATUITO • CERCA DE 5 MINUTOS**

**Headline:**

> # **Talvez o problema que você percebeu agora tenha começado um pouco antes.**

**Subheadline:**

> Escolha uma situação real da sua vida. Em poucos minutos, **O Minuto Anterior** ajuda você a voltar alguns passos e perceber uma coisa que talvez estivesse passando despercebida.

**Bullets curtos:**

- sem precisar conhecer o Método;
- sem diagnóstico;
- sem tentar explicar sua vida inteira.

**CTA:**

> **QUERO FAZER O EXERCÍCIO GRATUITO**

Microcopy:

> Você recebe seu resultado na hora e pode enviá-lo para o seu e-mail.

---

## SEÇÃO 2 — RECONHECIMENTO

**Título:**

> ## **Às vezes você só percebe quando já chegou no final.**

Copy:

> O mês apertou.  
> A conversa virou discussão.  
> O prazo chegou.  
> A agenda ficou impossível.  
> O projeto ficou parado outra vez.
>
> Quando a consequência aparece, parece que tudo aconteceu de uma vez.
>
> Mas existe uma pergunta simples que quase nunca fazemos:

Destaque:

> **O que aconteceu antes?**

---

## SEÇÃO 3 — NOVA PERCEPÇÃO

**Título:**

> ## **O problema aparece no final. A observação pode começar antes.**

Copy:

> Talvez tenha existido um “depois eu vejo”.  
> Um “deixa comigo” antes de olhar a agenda.  
> Uma mensagem que você escreveu e apagou.  
> Um aplicativo que abriu e fechou.  
> Um arquivo que ficou para amanhã.
>
> Isso não prova que esses movimentos causaram o que aconteceu.  
> Mas pode valer a pena percebê-los.

---

## SEÇÃO 4 — MICRODEMONSTRAÇÃO

**Título:**

> ## **Teste por alguns segundos.**

Copy:

> Pense na última situação que incomodou você.  
> Agora volte algumas horas ou dias.
>
> **Qual foi a primeira pequena coisa que você consegue lembrar?**

Ponte:

> É exatamente daí que O Minuto Anterior começa.

CTA:

> **COMEÇAR AGORA — É GRATUITO**

---

## SEÇÃO 5 — O QUE ACONTECE

**Título:**

> ## **Uma situação. Seis perguntas. Uma coisa mais visível.**

Passos:

**1. Escolha um episódio real**  
Não “minha vida”. Uma situação.

**2. Volte alguns passos**  
Minutos, horas ou dias.

**3. Observe o que pensou e fez**  
Sem procurar uma explicação perfeita.

**4. Veja se algo parecido já aconteceu**  
Sem concluir a causa.

**5. Complete seu Minuto Anterior**  
Com suas próprias palavras.

**6. Receba sua folha**  
Para guardar e observar nos próximos dias.

---

## SEÇÃO 6 — O QUE VOCÊ RECEBE

**Título:**

> ## **No final, você terá o seu “Meu Minuto Anterior”.**

Copy:

> Uma folha simples com:

- a situação escolhida;
- o que aconteceu antes;
- a frase que apareceu;
- o que você fez;
- se algo parecido já aconteceu;
- a coisa que agora ficou mais visível;
- uma pequena observação para os próximos dias.

Destaque:

> **Não é uma análise sobre quem você é. É um registro do que você acabou de perceber.**

---

## SEÇÃO 7 — PARA QUEM É

**Título:**

> ## **Pode fazer sentido para você se…**

- alguma situação parece estar acontecendo “de novo”;
- você só costuma perceber quando o problema já ficou grande;
- sabe dar nome ao problema, mas nunca observou como chega até ele;
- quer começar por uma experiência simples, sem mergulhar em teoria.

**Não é para:**

- buscar diagnóstico;
- descobrir causa espiritual definitiva;
- substituir orientação médica, psicológica, jurídica ou financeira;
- receber uma promessa de mudança garantida.

---

## SEÇÃO 8 — PRIVACIDADE / CONFIANÇA

**Título:**

> ## **É uma experiência pessoal. Seus dados devem ser tratados como tal.**

Copy V1:

> Suas respostas são usadas para realizar e recuperar a experiência. Elas não são enviadas como conteúdo para plataformas de anúncios. Você também pode escolher separadamente se quer receber conteúdos do Portal por e-mail.

Link:

> **Como usamos seus dados**

---

## SEÇÃO 9 — CTA / FORMULÁRIO

**Título:**

> ## **Escolha uma situação. O resto leva poucos minutos.**

Campo:

> **Seu melhor e-mail**

Consentimento necessário em linguagem clara + link política.

Marketing opcional, unchecked.

CTA:

> **COMEÇAR O MINUTO ANTERIOR**

Microcopy:

> Gratuito. Sem cartão. Cerca de 5 minutos.

---

## SEÇÃO 10 — FAQ

### Preciso entender o Método Padrão Interrompido?

Não. O exercício foi feito para começar por uma situação real, não pela teoria.

### Isso é terapia?

Não. É uma experiência de auto-observação e organização de uma situação.

### É Mesa Radiônica ou Sintonize Prosperidade?

Não. O Minuto Anterior é uma experiência autoral do Portal vinculada à lógica do Método Padrão Interrompido.

### Vou descobrir a causa do meu problema?

Não é essa a proposta. A ideia é observar com mais detalhe o que aconteceu antes.

### Preciso acreditar em espiritualidade?

Não.

### Quanto tempo leva?

A experiência foi desenhada para aproximadamente 5–7 minutos.

### Posso fazer de novo?

Sim. Inclusive com outra situação.

### Meu resultado fica salvo?

Você poderá acessar o resultado por um link seguro durante o prazo informado e reenviá-lo para o seu e-mail.

---

## SEÇÃO 11 — FECHAMENTO

**Título:**

> ## **Você já sabe o que aconteceu. Agora experimente olhar um pouco antes.**

Copy:

> Talvez você não encontre uma resposta definitiva.  
> Talvez encontre algo melhor para começar: **uma coisa que agora consegue perceber.**

CTA:

> **FAZER O EXERCÍCIO GRATUITO**

---

# 27. VARIANTES DE MESSAGE MATCH — PRONTAS PARA FUTURO TESTE

## `ma_money_v1`

Headline:

> **O dinheiro apertou de novo. O que aconteceu antes de você perceber?**

Sub:

> Em poucos minutos, reconstrua uma situação financeira real e observe o que aconteceu antes do aperto ficar visível.

## `ma_procrastination_v1`

Headline:

> **Você deixou para depois de novo. O que aconteceu no momento anterior?**

## `ma_relationship_v1`

Headline:

> **A conversa explodiu agora. Mas quando você percebeu pela primeira vez que algo estava incomodando?**

Regra:

- variantes mudam entrada;
- experiência central permanece a mesma;
- `entry_context` pode vir pré-selecionado, mas sempre editável;
- não criar variante sem hipótese e tráfego correspondente.

---

# 28. FASES DE IMPLEMENTAÇÃO — ALTERNÂNCIA CLAUDE CODE × CODEX

## 28.1. Regra operacional obrigatória

Em cada gate:

1. **Agente Primário implementa.**
2. **Agente Secundário audita sem alterar silenciosamente.**
3. Se FAIL: Primário corrige.
4. Secundário revalida.
5. Só após PASS abre o próximo gate.
6. No gate seguinte, os papéis de primário e secundário se invertem.

> **Nenhum agente implementa dois gates consecutivos.**

## 28.2. Handoff obrigatório

Manter:

```text
/docs/products/minuto-anterior/HANDOFF.md
```

Campos:

```text
GATE:
PRIMARY_AGENT:
REVIEW_AGENT:
BRANCH:
HEAD:
SCOPE_DONE:
TESTS_RUN:
EVIDENCE:
OPEN_ISSUES:
OUT_OF_SCOPE:
ROLLBACK:
STATUS: PASS/FAIL
NEXT_GATE:
```

---

# GATE MA-00 — INVENTÁRIO E CONTRATOS

**Primário:** Claude Code  
**Auditor:** Codex

Objetivo:

- confirmar estado real;
- não criar estrutura em cima de suposição.

Pré-checagens:

```powershell
Get-Location
git status -sb
git remote -v
git branch --show-current
git rev-parse HEAD
git rev-list --left-right --count origin/main...main
```

Inventariar:

- repo institucional;
- páginas atuais;
- stack real do site;
- GTM/Consent atual;
- existência ou não de app repo;
- Vercel projects;
- Supabase existente ou novo necessário;
- domínios/subdomínios;
- Resend/Brevo já configurados ou não;
- políticas de privacidade atuais;
- variáveis e secrets existentes sem expô-los.

Saída:

- arquitetura final confirmada;
- decisão repo/site/app;
- lista de gaps;
- nenhuma feature implementada.

**Gate PASS:** estado real documentado e divergências resolvidas.

---

# GATE MA-01 — ADR + CONTRATOS DE PRODUTO/TÉCNICOS

**Primário:** Codex  
**Auditor:** Claude Code

Entregar:

- ADR de arquitetura;
- rotas;
- contratos API;
- estados da sessão;
- taxonomias V1;
- esquema de erros;
- event taxonomy;
- política de token;
- política de retenção proposta;
- feature flags;
- data classification.

Sem UI final ainda.

**PASS:** contratos revisados e nenhum dado íntimo planejado para analytics/Brevo.

---

# GATE MA-02 — SUPABASE / MIGRATIONS / RLS / FIXTURES

**Primário:** Claude Code  
**Auditor:** Codex

Implementar:

- migrations;
- tabelas;
- indexes;
- constraints;
- RLS;
- funções necessárias;
- fixtures fictícias;
- testes DB.

Regras:

- anon não lê Classe C/D;
- service role server-only;
- migrations reversíveis quando possível;
- nenhuma resposta real em local/preview.

**PASS:** testes DB e RLS negativos aprovados.

---

# GATE MA-03 — APP SHELL + SESSION ENGINE + SECURITY BASE

**Primário:** Codex  
**Auditor:** Claude Code

Implementar:

- Next.js app shell;
- layout/identidade;
- session create/resume;
- cookies seguros;
- backend validation;
- rate-limit base;
- attribution capture;
- error redaction;
- security headers.

**PASS:** sessão sobrevive refresh, sem respostas íntimas em logs.

---

# GATE MA-04 — EXPERIÊNCIA GUIADA 6 PASSOS

**Primário:** Claude Code  
**Auditor:** Codex

Implementar:

- onboarding;
- consent UI;
- perguntas;
- progress indicator;
- save por etapa;
- validações;
- accessibility;
- microcopy;
- áudio placeholder + transcript slot.

**PASS:** E2E até Q6 em mobile 360/375/430 e teclado.

---

# GATE MA-05 — RESULTADO + MOMENTO ESPELHO + FOLHA + REPETIÇÃO

**Primário:** Codex  
**Auditor:** Claude Code

Implementar:

- snapshot determinístico;
- result page;
- token hash/TTL;
- fragment token resolver;
- print view;
- repeat experience;
- feedback 1 pergunta;
- next-step feature flags.

**PASS:** nenhuma interpretação fora das respostas; token inválido/expirado falha com segurança.

---

# GATE MA-06 — RESEND TRANSACTIONAL

**Primário:** Claude Code  
**Auditor:** Codex

Implementar:

- domínio/remetente;
- template T0;
- reenvio;
- idempotência;
- rate-limit;
- webhook signed receiver;
- dispatch status.

**PASS:** envio/entrega/bounce testados sem conteúdo íntimo indevido.

---

# GATE MA-07 — BREVO MARKETING

**Primário:** Codex  
**Auditor:** Claude Code

Implementar:

- sync somente opt-in;
- contact attributes mínimos;
- list/segment;
- DOI se decisão operacional aprovada;
- sequência M1–M3;
- unsubscribe/suppression test.

**PASS:** unchecked = zero marketing contact; raw answers nunca saem do Supabase.

---

# GATE MA-08 — TRACKING + ATTRIBUTION + CONSENT MODE

**Primário:** Claude Code  
**Auditor:** Codex

Implementar:

- eventos V1;
- dataLayer safe;
- variant/source params;
- consent-aware firing;
- dashboards mínimos;
- testes de ausência de PII.

**PASS:** DevTools/GTM/GA4 confirmam apenas payload permitido.

---

# GATE MA-09 — PÁGINA DE CONVERSÃO BASE

**Primário:** Codex  
**Auditor:** Claude Code

Repo institucional.

Implementar:

- `/minuto-anterior`;
- copy V1 desta spec;
- identidade visual;
- CTA → app;
- message match;
- SEO/canonical/OG;
- consent/cookie compatível;
- tracking;
- mobile first.

Não publicar variantes ainda, apenas infra/feature ready.

**PASS:** landing → app preserva atribuição e variant.

---

# GATE MA-10 — PRIVACIDADE, RETENÇÃO, EXPORTAÇÃO E EXCLUSÃO

**Primário:** Claude Code  
**Auditor:** Codex

Implementar/fechar:

- política/links;
- consent ledger;
- export request;
- delete request;
- raw retention job/manual runbook;
- deletion test;
- noindex result;
- incident runbook mínimo.

**PASS:** pedido de exclusão de fixture percorre todo o fluxo previsto.

---

# GATE MA-11 — QA INTEGRADO / SEGURANÇA / E2E

**Primário:** Codex  
**Auditor:** Claude Code

Rodar:

- unit;
- DB;
- integration;
- E2E;
- mobile;
- a11y;
- security smoke;
- rate-limit;
- token leak checks;
- PII leak checks;
- email;
- GTM/consent;
- print.

**PASS:** zero blocker P0/P1.

---

# GATE MA-12 — RELEASE CANDIDATE E PRODUÇÃO

**Primário:** Claude Code  
**Auditor:** Codex

Processo:

- working tree limpa;
- branches sincronizadas;
- preview aprovado;
- um deploy de produção por repo necessário;
- DNS/subdomain validado;
- smoke real;
- e-mail real de teste;
- mobile real;
- CURRENT atualizado com HEAD/deploy/data.

**PASS:** fluxo produção completo landing → result → email → repeat.

---

# GATE MA-13 — 72H / 7D / 14D — APRENDIZADO

**Primário:** Codex  
**Auditor:** Claude Code

Não é gate de código por padrão.

Ler:

- start rate;
- completion;
- drop-offs;
- TTFV real;
- perceived value;
- resend;
- repeat;
- next-step clicks;
- opt-in marketing;
- complaints/bounces;
- bugs;
- linguagem espontânea de feedback.

Decidir:

- manter;
- simplificar;
- corrigir pergunta;
- testar variante;
- acrescentar comparação entre sessões;
- não escalar.

---

# 29. CRITÉRIOS DE ACEITE DO MVP

O MVP só é considerado **APROVADO** se:

1. landing está clara em 10 segundos;
2. CTA funciona;
3. e-mail é o único dado pessoal obrigatório;
4. marketing é opcional;
5. experiência completa em aproximadamente 5–7 minutos para maioria dos testers;
6. refresh não perde progresso;
7. resultado aparece imediatamente;
8. resultado usa apenas respostas + copy fixa;
9. Folha cabe em 1 página;
10. link de resultado é seguro e expira;
11. reenvio funciona;
12. repetição funciona;
13. Resend funciona;
14. Brevo recebe somente opt-ins;
15. raw answers não chegam a Brevo/GA4/Meta;
16. RLS/server-only access aprovados;
17. rate limits aprovados;
18. LGPD minimum flow operacional;
19. mobile 360/375/430 aprovado;
20. acessibilidade básica aprovada;
21. nenhum uso de Sintonize;
22. nenhum claim diagnóstico;
23. tracking preserva origem/variant;
24. CURRENT atualizado;
25. existe rollback.

---

# 30. MÉTRICAS E GATES DE PRODUTO

Não definir “sucesso” apenas por leads.

## 30.1. Hipóteses a validar

H1 — A promessa gera intenção suficiente para começar.  
H2 — 6 perguntas são curtas o bastante para concluir.  
H3 — o Momento Espelho produz percepção útil.  
H4 — a Folha aumenta valor percebido.  
H5 — parte relevante das pessoas deseja repetir.  
H6 — parte das pessoas quer aprofundar sem CTA agressivo.  
H7 — dados estruturados geram aprendizado real de produto.

## 30.2. Métricas

- `landing_to_cta_rate`;
- `cta_to_start_rate`;
- `start_to_complete_rate`;
- `median_completion_time`;
- `step_dropoff_rate`;
- `perceived_value_yes_or_partly`;
- `result_resend_rate`;
- `sheet_print_rate`;
- `repeat_start_rate`;
- `next_step_click_rate`;
- `marketing_opt_in_rate`;
- `email_bounce_rate`;
- `privacy_request_rate`.

Não cravar metas arbitrárias antes da primeira amostra. Criar baseline e evoluir.

---

# 31. APRENDIZADO AGREGADO — O QUE PODEMOS MAPEAR

O objetivo não é “descobrir padrões das pessoas”. É entender **quais situações e movimentos auto-relatados aparecem com mais frequência**.

Exemplos internos:

- contextos de entrada;
- ação selecionada antes da consequência;
- tempo entre movimento e consequência;
- presença de repetição percebida;
- origem/variant;
- taxa de conclusão por contexto;
- próximo passo escolhido.

Relatórios internos devem usar agregação e thresholds mínimos para evitar reidentificação.

Não publicar:

> “31% das pessoas têm bloqueio financeiro.”

Forma aceitável, se base e amostra forem adequadas:

> “Entre as experiências concluídas, X% selecionaram ‘adiar’ como uma ação que aconteceu antes da situação escolhida.”

Ainda assim, interpretar com cautela por viés de seleção.

---

# 32. O QUE FOI ACRESCENTADO ALÉM DO BRIEF ORIGINAL

Para deixar o produto realmente robusto, esta spec incorporou pontos que poderiam passar despercebidos:

1. **resume de sessão sem login**;
2. **token por fragmento para reduzir exposição em logs**;
3. **hash do token no banco**;
4. **retenção de dados íntimos separada de sinais agregados**;
5. **taxonomia versionada e não diagnóstica**;
6. **nenhuma IA no resultado V1**;
7. **“Momento Espelho” como pico de encantamento**;
8. **Folha via print CSS antes de PDF server-side**;
9. **marketing desacoplado da entrega**;
10. **Double Opt-In como opção operacional forte**;
11. **Brevo sem raw answers**;
12. **Resend com webhook/idempotência**;
13. **antiabuso/reenvio rate-limited**;
14. **sem botão de compartilhamento público**;
15. **privacidade em linguagem humana dentro da experiência**;
16. **feature flags para próximo passo**;
17. **repetição da experiência desde o MVP**;
18. **comparação entre sessões adiada até evidência**;
19. **feedback de valor percebido de uma pergunta**;
20. **alternância formal Claude/Codex com auditoria cruzada**;
21. **PII leak tests**;
22. **recuperação, exclusão e exportação como parte do produto**;
23. **áudio com transcript e sem autoplay**;
24. **noindex/no-store em resultado**;
25. **documentação de handoff por gate**.

---

# 33. PROMPT BASE PARA CLAUDE CODE

Usar como cabeçalho em gates em que Claude for primário:

> Você está implementando um gate do produto **O Minuto Anterior** do Portal Caminho da Consciência.  
> Antes de alterar qualquer arquivo, leia a SPEC do produto, Documento 00 quando houver fronteira conceitual, Documento 05 para arquitetura técnica, Documento 06 CURRENT e o estado real do repositório.  
> Faça inventário antes de implementação.  
> Não altere estratégia, claims, taxonomias, fluxo de produto ou escopo silenciosamente.  
> Não use materiais Sintonize.  
> Não envie PII ou respostas íntimas para analytics, logs, Brevo ou ferramentas externas.  
> Escopo do gate: `[COLAR]`.  
> Critérios de aceite: `[COLAR]`.  
> Escopo proibido: tudo que não estiver explicitamente autorizado.  
> Execute testes, apresente evidências, liste arquivos alterados, branch, HEAD, rollback e pendências.  
> Não faça merge/push/deploy fora do gate autorizado.

---

# 34. PROMPT BASE PARA CODEX

Usar como cabeçalho em gates em que Codex for primário:

> Atue como engenheiro principal deste gate do produto **O Minuto Anterior**, obedecendo à SPEC e à documentação canônica do Portal.  
> Primeiro confirme repo, branch, working tree, HEAD e escopo.  
> Não suponha infraestrutura.  
> Preserve mobile first, segurança, LGPD, privacidade e message match.  
> Não implemente IA de interpretação.  
> Não exponha service role, tokens, PII ou respostas íntimas.  
> Não altere decisões canônicas.  
> Escopo do gate: `[COLAR]`.  
> Critérios de aceite: `[COLAR]`.  
> Ao final, entregue evidências objetivas: testes, outputs, arquivos, migrations, riscos, rollback, HEAD e status PASS/FAIL.  
> Não avance ao gate seguinte.

---

# 35. PROMPT DE AUDITORIA PARA O AGENTE SECUNDÁRIO

> Audite o gate `[ID]` do produto **O Minuto Anterior**.  
> Não reimplemente por preferência pessoal.  
> Compare estritamente: SPEC → diff → testes → evidências → critérios de aceite.  
> Procure especialmente: mudança de escopo, PII leak, RLS fraca, token exposto, claims indevidos, raw answers em analytics/Brevo/logs, regressão mobile, ausência de idempotência, consentimento acoplado, perda de atribuição, falha de acessibilidade, ausência de rollback.  
> Saída obrigatória: PASS ou FAIL.  
> Se FAIL, liste issues numeradas com severidade, evidência e correção mínima necessária.  
> Não altere arquivos sem autorização explícita.

---

# 36. REFERÊNCIAS TÉCNICAS EXTERNAS — NÃO CANÔNICAS

Consultar documentação oficial atual no momento de cada gate, especialmente:

- Vercel Functions / Next.js;
- Supabase Row Level Security;
- Resend Webhooks;
- Brevo Contacts API;
- Brevo Double Opt-In;
- Brevo Consent Groups, quando habilitado na conta.

As APIs e SDKs podem evoluir. A SPEC define **comportamento e segurança esperados**, não congela versão de SDK.

---

# 37. DEFINIÇÃO FINAL DE “PRONTO”

**O Minuto Anterior V1 não está pronto quando o código compila.**

Está pronto quando uma pessoa que nunca ouviu falar do Portal consegue:

1. chegar por uma dor real;
2. entender a proposta em segundos;
3. começar sem medo e sem burocracia;
4. atravessar seis perguntas simples;
5. perceber algo antes invisível;
6. ver suas próprias palavras organizadas com elegância;
7. guardar o resultado;
8. confiar que seus dados foram tratados com respeito;
9. querer observar novamente;
10. pensar espontaneamente:

> **“Se eu percebi isso em cinco minutos, o que mais eu ainda não estou vendo?”**

Esse pensamento — e não um upsell agressivo — é o sinal de que o produto cumpriu sua função comercial e transformacional.

---

# 38. SÍNTESE EXECUTIVA

> **O Minuto Anterior é uma experiência digital gratuita de 5–7 minutos que transforma uma consequência percebida em uma observação mais detalhada do que aconteceu antes.**
>
> **Stack:** landing institucional + Next.js/Vercel + Supabase + Resend + Brevo.  
> **Resultado:** determinístico, sem IA, salvável, reenviável e repetível.  
> **Dados:** mínimos, classificados, protegidos e úteis para aprendizagem agregada.  
> **Jornada:** Descobrir → Reconhecer.  
> **Encantamento:** Momento Espelho + Folha Meu Minuto Anterior + continuidade sem pressão.  
> **Implementação:** gates alternados Claude Code ↔ Codex, com auditoria cruzada obrigatória.  
> **Regra superior:** percepção antes da explicação; valor antes do próximo produto; privacidade antes da curiosidade por dados.

> **Fim da Especificação de Produto e Implementação — O Minuto Anterior — MVP V1.0.**


---

# ADDENDUM INTEGRADO PÓS-PJ-02 — CONTRATO TRANSVERSAL DA PLATAFORMA

**DATA:** 05/09/2026  
**FONTE:** ADR-PLATAFORMA-JORNADA-001 — APROVADO  
**REGRA:** este bloco altera apenas a integração técnica transversal. Toda a experiência funcional, copy, TTFV, UX e limites anteriores permanecem válidos.

## Arquitetura obrigatória

```text
Landing pública
Netlify
↓
Experiência
Vercel /minuto-anterior
↓
SEM LOGIN obrigatório
↓
primeiro valor
↓
resultado
↓
opção de guardar
↓
Magic Link
↓
identity claim
↓
Meu Caminho
```

### Regras

- O Minuto Anterior é domínio da Plataforma `portal-caminho-da-consciencia-app`.
- Não criar app, Vercel, Supabase ou Auth próprios.
- Não exigir entitlement.
- Registro pré-auth pode existir antes de `auth.users`.
- Associação posterior exige claim token opaco forte, hash persistido, TTL, uso único, ownership, auditoria e operação server-side idempotente.
- Nunca associar registro íntimo apenas por coincidência de e-mail.
- Auth V1: Magic Link/passwordless; password OFF; Google OAuth fora da V1.
- Dados íntimos não entram em analytics/logs/marketing.
- RLS e negative tests obrigatórios quando o registro estiver associado a identidade.
- Meu Caminho é opção de continuidade depois do primeiro valor, nunca barreira de entrada.

## Gate técnico

A implementação deste contrato ocorre somente depois da fundação transversal pós-PJ-02 e dos gates correspondentes da Plataforma.
