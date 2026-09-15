# PORTAL CAMINHO DA CONSCIÊNCIA

## SPEC-MINUTO-001 — O MINUTO ANTERIOR — MVP V2.0.0
### Experiência Gratuita de Reconhecimento, Integração com Meu Caminho e Plano de Implementação

| Campo | Informação |
|---|---|
| **Código** | `SPEC-MINUTO-001` |
| **Tipo** | Especificação de Produto / Experiência Digital Gratuita |
| **Versão** | `2.0.0` |
| **Data** | `14/09/2026` |
| **Status** | **APROVADA / VIGENTE** |
| **Autoridade de aprovação** | Marcos Vinicius |
| **Data de aprovação** | 15/09/2026 |
| **Projeto** | **Portal Caminho da Consciência** |
| **Produto / experiência** | **O Minuto Anterior** |
| **product_id preservado** | `minute_before_free_v1` |
| **offer_id preservado** | `minute_before_free_v1` |
| **page_id preservado** | `minute_before_landing_v1` |
| **variant_id inicial preservado** | `ma_general_v1` |
| **Tipo público** | Experiência digital gratuita / microexperiência guiada de auto-observação |
| **Função principal na Jornada** | **DESCOBRIR → RECONHECER** |
| **Duração-alvo** | aproximadamente **5–7 minutos** |
| **Primeiro valor percebido** | até aproximadamente **3 minutos** |
| **Core Value** | perceber pelo menos um movimento anterior que normalmente passaria despercebido |
| **IA interpretativa** | **NÃO** |
| **Login antes do primeiro valor** | **NÃO** |
| **E-mail obrigatório antes do primeiro valor** | **NÃO** |
| **Infraestrutura própria** | **NÃO** |
| **Integração transversal** | Plataforma central + Meu Caminho |
| **Precedência** | subordinada ao `CANON-00` a `CANON-07`, `SPEC-PORTFOLIO-00`, `SPEC-STACK-00` e `SPEC-MEU-CAMINHO-001` |
| **Substitui** | substitui a SPEC **O Minuto Anterior — MVP V1.1** dentro do seu escopo, mantendo-a como **HISTÓRICA / REFERÊNCIA** |
| **Base histórica** | SPEC MVP V1.1, Dossiê de Demanda MVP V1.0, ADR/Contracts MA-01 e handoff da trilha anterior |

---

# 0. REGRA DE LEITURA

Esta SPEC é uma **reincorporação controlada**, não uma reconstrução conceitual do produto.

A regra adotada é:

> **PRESERVAR o que continua correto → ADAPTAR o que conflita ou ficou desatualizado → SIMPLIFICAR quando a nova arquitetura transversal já resolve a função → MELHORAR somente quando houver ganho claro de experiência, segurança, privacidade ou coerência.**

Não se deve alterar o produto apenas porque existe uma nova documentação.

A refundação canônica do Portal não exige refundação automática da experiência.

---

# 1. EVOLUÇÃO DA SPEC

## 1.1. O que existia na V1.1

A SPEC anterior definiu profundamente:

- proposta;
- Core Value;
- experiência em seis perguntas;
- resultado determinístico;
- Momento Espelho;
- Folha Meu Minuto Anterior;
- repetição;
- privacidade;
- segurança;
- dados;
- Resend;
- Brevo;
- analytics;
- landing;
- testes;
- gates de implementação.

Ela também recebeu um addendum pós-Plataforma que já corrigia uma decisão importante:

> **O Minuto Anterior não teria app, Supabase, Auth ou infraestrutura próprios; o primeiro valor aconteceria sem login e Meu Caminho surgiria como continuidade opcional.**

## 1.2. O que mudou depois

Após a V1.1 foram aprovados:

- novo núcleo canônico `CANON-00` a `CANON-07`;
- nova arquitetura de portfólio;
- nova arquitetura técnica transversal;
- nova SPEC de Meu Caminho;
- novo princípio de agregação sem duplicação de dados íntimos;
- novo modelo cooperativo Claude Code / Codex;
- nova separação mais clara entre produto, Plataforma, Shared Kernel e domínio específico.

## 1.3. Consequência

A V1.1 não deve ser descartada.

Ela deve ser:

> **reclassificada como base histórica altamente aproveitável, corrigida apenas onde a nova documentação aprovada exige ou justifica.**

---

# 2. ESTADO REAL HERDADO DA TRILHA ANTERIOR

## 2.1. Concluído

Estavam concluídos e remotamente verificados:

- MA-00 — inventário inicial;
- MA-01 — arquitetura e contratos documentais;
- SPEC V1.1;
- Dossiê de Demanda;
- ADR MA-01;
- Contracts MA-01;
- branch documental publicada e verificada.

Referência histórica registrada:

```text
branch: docs/minuto-anterior-ma01
commit: c18323fce742d6ec722de952f37dcfa629c5aee6
```

## 2.2. Não implementado no último snapshot verificado

No último handoff da trilha, ainda NÃO existiam funcionalmente para O Minuto Anterior:

- landing publicada;
- rota dinâmica funcional;
- UI das seis perguntas;
- session engine;
- migrations específicas;
- tabelas específicas;
- RLS do domínio;
- Momento Espelho funcional;
- Folha funcional;
- repetição funcional;
- integração Resend do produto;
- integração Brevo do produto;
- analytics específicos;
- export/delete do domínio;
- E2E do produto;
- deploy do produto;
- produção.

## 2.3. Regra atual

Esse snapshot NÃO deve ser tratado como estado presente da Plataforma.

Meu Caminho e a infraestrutura transversal continuaram evoluindo.

Portanto, antes de qualquer código do Minuto:

> **o estado atual do repo, Supabase, Auth, claiming, RLS, migrations, Preview e Meu Caminho deve ser auditado novamente.**

---

# 3. MATRIZ DE REINCORPORAÇÃO DA V1.1

| Elemento da V1.1 | Decisão V2 | Motivo |
|---|---|---|
| Nome **O Minuto Anterior** | **PRESERVAR** | coerente e já integrado ao portfólio |
| `product_id`, `offer_id`, `page_id`, `variant_id` | **PRESERVAR** | estabilidade de identidade técnica |
| 5–7 minutos | **PRESERVAR** | escopo pequeno e coerente |
| Jornada DESCOBRIR → RECONHECER | **PRESERVAR** | canonicamente alinhado |
| Core Value | **PRESERVAR** | continua sendo a transformação mínima correta |
| 6 perguntas | **PRESERVAR COM AJUSTES DE COPY/TAXONOMIA** | mecanismo continua válido |
| Momento Espelho | **PRESERVAR** | principal pico de valor |
| Resultado determinístico | **PRESERVAR** | evita diagnóstico/inferência |
| IA interpretativa | **DESCARTADA NA V1** | desnecessária e incoerente com o objetivo |
| Score/perfil/tipo de padrão | **DESCARTADO** | incompatível com Método e ética |
| Folha imprimível | **PRESERVAR** | aumenta autonomia e materializa valor |
| PDF server-side no MVP | **NÃO IMPLEMENTAR** | complexidade desnecessária |
| Áudio opcional de Marcos | **PRESERVAR COMO OPCIONAL** | complementa sem bloquear |
| E-mail obrigatório antes da Q1 | **ADAPTAR — REMOVER** | valor antes da captura; minimização; menor atrito |
| Marketing opt-in | **PRESERVAR, MAS PÓS-VALOR** | consentimento separado |
| Resend | **PRESERVAR COMO INFRA TRANSVERSAL** | auth/transacional |
| Brevo | **PRESERVAR COMO INFRA TRANSVERSAL** | marketing consentido |
| Sequência M1–M3 dentro da SPEC | **RETIRAR DO NÚCLEO** | marketing não deve governar a experiência |
| `contacts`, `consents`, `privacy_requests`, audit, dispatches | **MOVER PARA SHARED KERNEL** | não pertencem ao domínio específico |
| `minute_before_*` | **PRESERVAR COMO DOMÍNIO ESPECÍFICO** | significado próprio da experiência |
| Token público de resultado como principal recuperação | **SIMPLIFICAR** | Meu Caminho passa a ser persistência de longo prazo |
| Reenvio público de resultado | **REAVALIAR / NÃO CORE** | impressão + claim reduzem necessidade |
| Repetição | **PRESERVAR** | valor próprio e aprendizado |
| Taxonomia de contexto antiga | **ADAPTAR** | alinhar ao mapa canônico de áreas da vida |
| “microprática de 7 dias” | **ADAPTAR** | observação opcional, sem transformar o gratuito em intervenção |
| Próximo produto automático | **NÃO IMPLEMENTAR** | progressão possível, não obrigatória |
| Feature flags de continuidade | **PRESERVAR COM RESTRIÇÕES** | origem/ação explícita, não análise de conteúdo íntimo |
| Analytics comportamental | **PRESERVAR** | sem conteúdo íntimo |
| Gates Claude ↔ Codex com auditor fixo | **SUBSTITUIR** | ambos são coimplementadores; usar Checkpoint de Continuidade |
| Gate amplo `PLATFORM_READY_FOR_MINUTE_BEFORE_MA02` | **SUBSTITUIR POR DEPENDÊNCIAS GRANULARES** | evitar bloquear o núcleo por componentes que só serão usados depois |

---

# 4. DECISÃO-MÃE DO PRODUTO

**O Minuto Anterior** é uma experiência digital gratuita, breve e autoguiada, na qual a pessoa escolhe **uma situação real**, volta alguns passos e observa elementos concretos que aconteceram antes da consequência que chamou sua atenção.

A experiência não busca explicar a pessoa.

Busca ajudá-la a perceber melhor um episódio.

A transformação mínima permanece:

> **“Uma coisa que aconteceu antes e que eu normalmente não observava foi…”**

---

# 5. JOB-TO-BE-DONE

> **Quando uma situação me incomoda, parece repetir ou simplesmente merece ser vista com mais atenção, eu uso O Minuto Anterior para reconstruir alguns momentos anteriores e tornar visível pelo menos um pensamento, ação, escolha, silêncio, adiamento ou movimento que eu normalmente não observaria — sem receber um diagnóstico, uma causa pronta ou uma interpretação sobre quem eu sou.**

---

# 6. PAPEL NA JORNADA

A função principal é:

> **DESCOBRIR → RECONHECER**

O produto pode utilizar perguntas estruturadas e ajudar a pessoa a perceber repetição.

Isso NÃO significa que o produto executa formalmente o movimento canônico **MAPEAR**.

O Mapeamento Padrão Interrompido continua sendo uma experiência distinta e mais profunda.

Regra:

> **O Minuto Anterior abre percepção. Não finge organizar o caso inteiro.**

---

# 7. FUNÇÃO NO PORTFÓLIO

O Minuto Anterior é a principal experiência gratuita interativa de baixo atrito da esteira atual.

Sua função é:

- entregar primeiro valor real;
- transformar conteúdo em experiência pessoal;
- demonstrar a lógica observacional do Portal sem dar aula sobre o Método;
- permitir uma primeira relação com a Plataforma;
- gerar aprendizagem agregada de produto;
- permitir continuidade quando a pessoa desejar.

Sua função econômica é **indireta**.

Ele pode gerar:

- relacionamento;
- opt-in;
- conta em Meu Caminho;
- retorno;
- interesse em outras experiências.

Mas:

> **o valor do gratuito deve permanecer completo mesmo se a pessoa nunca comprar nada.**

---

# 8. O QUE O MINUTO ANTERIOR NÃO É

Não é:

- terapia;
- diagnóstico;
- avaliação psicológica;
- ferramenta clínica;
- leitura energética;
- Mesa Radiônica;
- aplicação da Sintonize Prosperidade;
- quiz de personalidade;
- teste de perfil;
- score;
- descoberta automática de padrão;
- localização automática de Ponto de Interrupção;
- descoberta de causa raiz;
- sistema de IA interpretando relatos;
- minicurso;
- mecanismo de venda disfarçado.

---

# 9. PROMESSA LEGÍTIMA

Promessa pública recomendada:

> **Em poucos minutos, escolher uma situação real, voltar alguns passos e perceber pelo menos uma coisa que aconteceu antes e que talvez estivesse passando despercebida.**

Não prometer:

- resolver o problema;
- descobrir a causa;
- revelar bloqueio;
- identificar trauma;
- encontrar a origem espiritual;
- mudar comportamento automaticamente;
- interromper um padrão em cinco minutos;
- produzir resultado financeiro, relacional, profissional ou de saúde.

---

# 10. PRINCÍPIOS DE EXPERIÊNCIA

1. **Vida concreta antes do conceito.**
2. **Primeiro valor antes de cadastro obrigatório.**
3. **Uma pergunta por tela.**
4. **Pouca teoria.**
5. **TOM MARCOS.**
6. **Nenhuma interpretação automática.**
7. **A pessoa reconhece as próprias palavras no resultado.**
8. **Privacidade perceptível e linguagem humana.**
9. **Conclusão legítima sem próxima compra.**
10. **Guardar no Meu Caminho é opção, não barreira.**
11. **Repetir é permitido, mas não obrigatório.**
12. **A interface não deve parecer SaaS, formulário clínico ou teste psicológico.**

---

# 11. ARQUITETURA DA EXPERIÊNCIA V2

## 11.1. Fluxo principal

```text
LANDING PÚBLICA — NETLIFY
↓
CTA COMEÇAR
↓
EXPERIÊNCIA — VERCEL
↓
INTRO CURTA + PRIVACIDADE + ÁUDIO OPCIONAL
↓
INÍCIO ANÔNIMO / PRÉ-AUTH
↓
Q1 — SITUAÇÃO
↓
Q2 — O QUE ACONTECEU ANTES
↓
Q3 — FRASE / PENSAMENTO
↓
Q4 — O QUE VOCÊ FEZ
↓
Q5 — ALGO PARECIDO JÁ ACONTECEU?
↓
Q6 — MEU MINUTO ANTERIOR
↓
MOMENTO ESPELHO
↓
FOLHA / SALVAR COMO PDF / IMPRIMIR
↓
FEEDBACK CURTO
↓
OPÇÕES
├── encerrar
├── repetir com outra situação
├── guardar no Meu Caminho
└── explorar continuidade quando houver interesse explícito
```

## 11.2. Regra de identidade

Até o resultado:

> **nenhum login é obrigatório.**

Para obter o primeiro valor:

> **nenhum e-mail é obrigatório.**

Se a pessoa quiser guardar a experiência para retomar em outro dispositivo ou mantê-la em seu histórico:

```text
Guardar no Meu Caminho
↓
solicitar e-mail
↓
Magic Link
↓
identidade autenticada
↓
identity claim server-side
↓
ownership
↓
experiência aparece em Meu Caminho
```

---

# 12. CAPTURA E CONSENTIMENTO

## 12.1. Antes do primeiro valor

Não solicitar:

- nome;
- e-mail;
- telefone;
- gênero;
- idade;
- profissão;
- CPF;
- endereço.

Pode existir:

- sessão técnica anônima;
- cookie/session secret estritamente necessário;
- atribuição consentida quando aplicável;
- dados necessários à execução da experiência.

## 12.2. Após o resultado

Ao escolher **Guardar no Meu Caminho**, solicitar apenas o dado necessário ao fluxo de autenticação.

Para a V1:

> **e-mail.**

## 12.3. Marketing

Marketing deve permanecer separado.

Checkbox opcional, desmarcado:

> **Quero receber por e-mail conteúdos, exercícios e novidades do Portal Caminho da Consciência.**

A pessoa pode:

- guardar a experiência;
- usar Meu Caminho;
- receber mensagens transacionais necessárias;

sem aceitar marketing.

---

# 13. TEXTO DE CONFIANÇA ANTES DO EXERCÍCIO

Texto-base:

> **Leva cerca de 5 minutos.**
> Escolha uma situação real e observe alguns passos antes do que aconteceu.
> Não existe resposta certa e você não precisa conhecer o Método.
> Evite colocar nomes completos, documentos ou informações pessoais de outras pessoas.
> Esta experiência não é diagnóstico, terapia nem atendimento de emergência.

Versão final deve passar por revisão de TOM MARCOS antes de publicação.

---

# 14. PERGUNTAS — NÚCLEO PRESERVADO

## Q1 — O que aconteceu?

Objetivo:

> escolher um episódio real, específico e suficientemente recente para ser lembrado.

Copy-base:

> **Pense em uma situação que aconteceu recentemente e que chamou sua atenção, incomodou você ou pareceu familiar.**
> Não escolha “minha vida financeira” ou “meu relacionamento”. Escolha um episódio.

Campo livre:

> **Em uma frase, o que aconteceu?**

Limite recomendado:

```text
20–400 caracteres
```

### Área principal — opcional

A taxonomia V2 deve se alinhar ao mapa canônico de áreas da vida:

```text
emocional
saúde e autocuidado
relacionamentos
espiritualidade e sentido
financeira
profissional
tempo e liberdade
criatividade e expressão
outro
não sei / prefiro não classificar
```

Regra:

> **isso é contexto de auto-organização e aprendizagem agregada, não diagnóstico nem definição da pessoa.**

Identidade permanece dimensão transversal e não precisa virar opção obrigatória.

---

## Q2 — O que aconteceu antes?

Copy-base:

> **Agora volte um pouco.**
> Pode ser um minuto, algumas horas ou alguns dias. O que aconteceu antes de você perceber essa situação?

Campo livre:

> **Qual foi a primeira coisa que você consegue lembrar?**

Limite recomendado:

```text
20–500 caracteres
```

Distância temporal opcional:

```text
minutos
horas
mesmo dia
alguns dias
não sei
```

---

## Q3 — O que apareceu na sua cabeça?

Copy-base:

> **Você lembra do que pensou, disse para si ou teve vontade de dizer naquele momento?**
> Pode ser uma frase curta. Se não lembrar, pode seguir.

Campo opcional:

```text
0–240 caracteres
```

Exemplos discretos:

- “Depois eu vejo.”
- “Deixa comigo.”
- “Melhor não falar agora.”
- “Amanhã eu resolvo.”

Não sugerir interpretações.

---

## Q4 — O que você fez?

Objetivo:

> priorizar comportamento observável.

Copy-base:

> **O que você fez logo depois?**
> Escolha o que mais se aproxima. Não existe resposta certa ou errada.

Taxonomia `action_signal_v2`:

```text
adiei para depois
evitei olhar / verificar
aceitei / respondi rápido
fiquei em silêncio / não falei
comecei outra coisa
parei / recuei
fiz mais do que precisava
tentei resolver imediatamente
outro
não sei
```

Se `outro`, permitir texto curto opcional.

Regra:

> a escolha não vira rótulo psicológico.

---

## Q5 — Algo parecido já aconteceu?

Copy-base:

> **Sem tentar explicar por quê: você lembra de outra situação em que algo parecido apareceu?**

Opções:

```text
sim
talvez
não
não sei
```

Se `sim` ou `talvez`, campo opcional:

> **Em poucas palavras, qual situação veio à cabeça?**

Máximo recomendado:

```text
300 caracteres
```

Regra:

> uma segunda lembrança NÃO autoriza o sistema a declarar que existe um padrão.

---

## Q6 — Meu Minuto Anterior

Copy-base:

> **Agora complete com suas palavras:**

> **“Uma coisa que aconteceu antes e que eu normalmente não observava foi…”**

Campo obrigatório:

```text
20–360 caracteres
```

Ao concluir:

- persistir a resposta conforme política do domínio;
- gerar resultado determinístico;
- registrar conclusão sem conteúdo íntimo em analytics;
- mostrar o Momento Espelho imediatamente.

---

# 15. MOMENTO ESPELHO

O Momento Espelho continua sendo o principal pico de valor da experiência.

Estrutura:

> **A situação que você escolheu**
> `[Q1]`

> **Antes disso, você lembrou**
> `[Q2]`

> **Uma frase que apareceu**
> `[Q3, se preenchida]`

> **O que você fez**
> `[label neutra da Q4]`

> **Algo parecido já aconteceu?**
> `[Q5]`

Destaque principal:

> **Seu Minuto Anterior**
> `[Q6]`

Limite semântico:

> **Isso não prova uma causa e não define você. É apenas algo que agora ficou mais fácil de observar.**

---

# 16. OBSERVAÇÃO OPCIONAL DE CONTINUIDADE

A antiga “microprática de 7 dias” é adaptada.

Não existe obrigação de sete dias.

Texto-base:

> **Se fizer sentido, nos próximos dias apenas repare:**
> **algo parecido aparece antes de outra situação?**

Regra:

- não prescrever intervenção;
- não prometer mudança;
- não transformar o gratuito em mini-programa;
- não insinuar que a pessoa precisa continuar.

---

# 17. FOLHA “MEU MINUTO ANTERIOR”

A Folha permanece parte do MVP.

Função:

> materializar o resultado e permitir que a pessoa leve consigo o que percebeu sem depender de conta, e-mail ou compra.

Conteúdo:

- marca discreta;
- data;
- situação;
- antes disso;
- frase interna, quando houver;
- ação observável;
- percepção de repetição;
- Meu Minuto Anterior;
- observação opcional para próximos dias;
- nota de limites.

Implementação inicial:

- HTML;
- CSS de impressão;
- `@media print`;
- botão **Salvar / imprimir minha folha**;
- navegador permite salvar como PDF.

Não gerar PDF server-side no primeiro MVP sem evidência de necessidade.

---

# 18. ÁUDIO DE MARCOS

Permanece opcional.

Regras:

- não é necessário para compreender o exercício;
- sem autoplay;
- controles acessíveis;
- transcrição disponível;
- aproximadamente 2:30–4:00;
- versão final deve passar por TOM MARCOS.

O roteiro antigo pode ser reaproveitado, com revisão pontual para refletir a nova copy e a ausência de cadastro obrigatório antes do valor.

---

# 19. FINALIZAÇÃO E CONTINUIDADE

Após o resultado, apresentar primeiro ações que preservem autonomia.

Ordem recomendada:

1. **Salvar / imprimir minha folha**;
2. **Fazer novamente com outra situação**;
3. **Guardar no Meu Caminho**;
4. **Encerrar**.

Continuidade comercial, quando existir, deve ser secundária e contextual.

Pode existir um bloco discreto:

> **Se você quiser continuar olhando para isso com mais profundidade, existem outros caminhos no Portal.**

Ações possíveis poderão incluir, conforme contexto real e feature flag:

- conteúdos;
- Antes do Aperto;
- Mapeamento Padrão Interrompido;
- outras experiências aprovadas.

Regras:

- nenhuma oferta é obrigatória;
- não selecionar produto a partir de interpretação de texto íntimo;
- não usar Q1–Q6 para “diagnosticar” roteamento;
- origem de campanha, contexto estruturado e escolha explícita da pessoa podem ser utilizados quando necessário e documentado;
- “nenhum próximo passo” é saída válida.

---

# 20. INTEGRAÇÃO COM MEU CAMINHO

## 20.1. Princípio

Meu Caminho:

> **agrega e organiza. Não duplica o conteúdo íntimo do Minuto.**

## 20.2. Antes do claim

A experiência pode existir como registro pré-auth pertencente ao domínio do Minuto.

Meu Caminho ainda não precisa conhecê-la.

## 20.3. Depois do claim

Após autenticação e claim seguro, Meu Caminho pode conhecer:

```text
experience_id
display_name
presentation_status
completed_at / last_activity
primary_action
delivery/folha disponível, se aplicável
```

Não precisa receber cópia de:

- Q1;
- Q2;
- Q3;
- Q5 aberta;
- Q6;
- outros textos íntimos.

Quando a pessoa abrir a experiência, o domínio do Minuto entrega o conteúdo autorizado.

## 20.4. Apresentação

Exemplo de item:

```text
O Minuto Anterior
Concluído em 14/09/2026
Ação: Ver meu registro
```

Não apresentar:

- nível;
- progresso espiritual;
- perfil;
- padrão descoberto;
- “você está na etapa X da sua evolução”.

---

# 21. AUTH E IDENTITY CLAIM

A V1 utiliza a fundação aprovada:

```text
Supabase Auth
Magic Link / passwordless
Password OFF
Google OAuth fora da V1
```

Fluxo:

```text
sessão pré-auth
↓
resultado entregue
↓
usuário escolhe guardar
↓
claim token opaco forte
↓
hash persistido + TTL + uso único
↓
Magic Link
↓
identidade autenticada
↓
claim server-side idempotente
↓
ownership
↓
Meu Caminho
```

Regra crítica:

> **Nunca vincular conteúdo íntimo a uma conta apenas porque o e-mail coincide.**

---

# 22. INFRAESTRUTURA

## Portal público

```text
repo: marvin-ds/portal-caminho-da-consciencia
host: Netlify
route: /minuto-anterior
```

## Plataforma

```text
repo: portal-caminho-da-consciencia-app
host: Vercel
route: /minuto-anterior
```

## Backend

```text
Supabase canônico da Plataforma
```

## E-mail

```text
Auth: Supabase Auth + Resend SMTP
Transactional: Resend
Marketing: Brevo
```

Nenhum recurso abaixo será criado especificamente para o Minuto:

- novo Vercel;
- novo Supabase;
- novo Auth;
- novo repositório de aplicação;
- nova identidade paralela;
- novo sistema de privacidade;
- novo sistema de consentimento transversal.

---

# 23. FRONTEIRA DE DADOS

## 23.1. Shared Kernel — NÃO redefinir aqui

Pertencem à Plataforma, conforme implementação vigente:

- identidade;
- conta;
- contacts;
- consents;
- privacy requests;
- audit;
- communication dispatches;
- identity claims;
- attribution transversal quando existente;
- logs técnicos;
- Auth.

A SPEC do Minuto define apenas **como usa esses contratos**, não recria seus schemas.

## 23.2. Domínio específico do Minuto

O domínio deve conter apenas o necessário para a experiência.

Entidades conceituais:

```text
minute_before_sessions
minute_before_answers
minute_before_results
minute_before_signals
minute_before_feedback
```

Nomes finais devem seguir a convenção real do repo/banco depois da auditoria.

---

# 24. MODELO DE DADOS ESPECÍFICO — CONTRATO SEMÂNTICO

## `minute_before_sessions`

Responsabilidade:

- representar uma execução da experiência;
- suportar pré-auth;
- suportar associação posterior a ownership;
- controlar versão e estado.

Campos conceituais esperados:

```text
id
product_id
product_version
variant_id
status
entry_area_code opcional
started_at
completed_at opcional
last_step
created_at
updated_at
owner/claim reference quando aplicável
```

Não fixar foreign key transversal antes de auditar o Shared Kernel real.

## `minute_before_answers`

Responsabilidade:

- respostas às perguntas;
- Classe D;
- versionamento de pergunta/resposta.

Campos conceituais:

```text
id
session_id
question_key
answer_text opcional
answer_code opcional
answer_version
created_at
updated_at
```

## `minute_before_results`

Responsabilidade:

- snapshot do resultado exatamente como apresentado;
- versionamento;
- suporte à Folha e retomada.

Pode utilizar JSONB deliberadamente para snapshot.

## `minute_before_signals`

Somente sinais estruturados fornecidos pela própria pessoa ou produzidos deterministicamente.

Exemplos:

```text
entry_area=financial
action_signal=postponed
repetition=maybe
time_distance=hours
```

Não registrar inferências psicológicas.

## `minute_before_feedback`

Pergunta principal:

> **Esse exercício fez você perceber alguma coisa que normalmente passaria despercebida?**

Respostas:

```text
sim
em parte
não
```

Comentário aberto:

- opcional;
- não necessário no primeiro release se aumentar risco/complexidade.

---

# 25. CLASSIFICAÇÃO E PRIVACIDADE

As respostas abertas do Minuto são:

> **Classe D — íntimas / alta proteção.**

Não enviar para:

- GA4;
- Meta;
- dataLayer;
- Google Ads;
- Brevo;
- logs operacionais comuns;
- ferramentas de sessão que gravem conteúdo;
- sistemas externos não necessários.

Aplicar:

- minimização;
- least privilege;
- server-side para operações privilegiadas;
- redaction;
- RLS quando associado a identidade;
- negative tests;
- no-store quando aplicável;
- proteção contra IDOR.

---

# 26. RETENÇÃO

A política antiga de 90 dias era proposta histórica, não deve ser carregada automaticamente como regra vigente.

A política V2 deve ser fechada por este domínio antes de Production.

Ela precisa distinguir pelo menos:

1. sessão anônima incompleta;
2. sessão anônima concluída e não reivindicada;
3. sessão reivindicada em Meu Caminho;
4. sinais agregados/desidentificados;
5. logs/auditoria necessários;
6. consentimentos transversais.

Princípios obrigatórios:

- dados íntimos não permanecem indefinidamente por padrão;
- sessão não reivindicada deve possuir expiração;
- usuário autenticado deve ter caminho de privacidade conforme contrato transversal;
- apagamento não pode deixar cópias órfãs desnecessárias;
- agregação não pode permitir reidentificação indevida.

**DECISÃO AINDA NECESSÁRIA ANTES DE PRODUCTION:** prazos exatos por categoria.

---

# 27. RECUPERAÇÃO E RETOMADA

## 27.1. Durante a sessão anônima

Objetivo:

> sobreviver a refresh e pequenos abandonos sem exigir conta.

Usar mecanismo seguro compatível com o repo real, por exemplo:

- cookie HttpOnly + referência server-side;
- opaque resume token com hash;
- outro padrão equivalente já adotado pela Plataforma.

Não escolher mecanismo diferente apenas por preferência.

## 27.2. Longo prazo / outro dispositivo

A forma principal passa a ser:

> **Guardar no Meu Caminho.**

Isso reduz a necessidade de manter links públicos de resultado como arquitetura principal.

## 27.3. Link público/token de resultado

A arquitetura antiga de `/r#t=TOKEN` permanece uma **referência técnica válida**, mas não é obrigatória na V2.

Só implementar se uma necessidade real de recuperação pré-auth permanecer após o desenho final.

Se implementado:

- token >= 32 bytes;
- hash persistido;
- TTL;
- POST de resolução;
- `Cache-Control: no-store`;
- sem token em logs;
- rate limit;
- sem compartilhamento público.

---

# 28. E-MAIL TRANSACIONAL

Mensagens transacionais possíveis:

- Magic Link;
- confirmação de experiência guardada, se útil;
- aviso operacional necessário;
- recuperação autenticada, se existir.

Não enviar o conteúdo íntimo completo no corpo do e-mail.

Preferir:

> link seguro para a experiência em Meu Caminho.

O antigo e-mail T0 de “resultado concluído” deixa de ser obrigatório porque o resultado é entregue imediatamente antes de qualquer cadastro.

---

# 29. BREVO / MARKETING

Brevo recebe somente pessoas com base/consentimento apropriado.

Nunca recebe:

- Q1;
- Q2;
- Q3;
- Q5 aberta;
- Q6;
- snapshot;
- relato íntimo.

A sequência editorial/comercial de nutrição NÃO pertence ao núcleo desta SPEC.

Ela deverá ser definida em documento/campanha própria quando necessária.

Isso evita transformar o produto em funil automático.

---

# 30. ANALYTICS

## 30.1. Princípio

> **medir comportamento sem exportar intimidade.**

## 30.2. Eventos recomendados

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
minute_before_repeat_start
minute_before_feedback_submit
minute_before_save_to_path_click
minute_before_claim_started
minute_before_claim_completed
minute_before_next_step_click
```

## 30.3. Parâmetros permitidos

Somente allowlist, por exemplo:

```text
product_id
product_version
variant_id
step_number
entry_area_code quando consentido e considerado adequado
source/medium/campaign
origin surface
action type
```

## 30.4. Proibido

Nunca enviar:

- textos livres;
- resultado;
- e-mail;
- nome;
- conteúdo espiritual individual;
- conteúdo íntimo;
- token;
- session secret.

---

# 31. LANDING PÚBLICA — DIREÇÃO V2

A landing continua curta.

Sua função é:

> **fazer a pessoa compreender a experiência e começar.**

Não é página de vendas longa.

## Hero recomendado

Eyebrow:

> **EXPERIÊNCIA GRATUITA • CERCA DE 5 MINUTOS**

Headline:

> **O problema costuma aparecer no final. O convite aqui é olhar alguns passos antes.**

Subheadline:

> Escolha uma situação real. Em poucos minutos, **O Minuto Anterior** ajuda você a voltar um pouco e perceber algo que talvez estivesse passando despercebido.

CTA:

> **COMEÇAR O MINUTO ANTERIOR**

Microcopy:

> Gratuito. Sem cartão. Sem cadastro obrigatório para começar.

## Reconhecimento

Preservar a força das cenas concretas da V1.1:

- mês apertou;
- conversa virou discussão;
- prazo chegou;
- agenda ficou impossível;
- projeto ficou parado.

Mas sempre como exemplos, não diagnósticos.

## Nova percepção

Preservar:

> **O que aconteceu antes?**

E exemplos pequenos:

- “depois eu vejo”;
- “deixa comigo”;
- mensagem apagada;
- aplicativo aberto e fechado;
- arquivo adiado.

## Privacidade

Explicar:

> **Você pode fazer a experiência sem criar uma conta. Se quiser guardar depois, poderá vinculá-la ao Meu Caminho. Suas respostas não são enviadas como conteúdo para plataformas de anúncios ou marketing.**

## FAQ mínimo

- Preciso conhecer o Método? **Não.**
- Isso é terapia? **Não.**
- É Mesa Radiônica ou Sintonize? **Não.**
- Vou descobrir a causa do problema? **Não é essa a proposta.**
- Preciso acreditar em espiritualidade? **Não. Esta experiência começa pela observação de uma situação concreta.**
- Quanto tempo leva? **aproximadamente 5–7 minutos.**
- Preciso criar conta? **Não para fazer e receber o resultado na hora.**
- Como guardo? **Opcionalmente, no Meu Caminho.**
- Posso repetir? **Sim.**

---

# 32. TOM E IDENTIDADE VISUAL

Aplicar integralmente a identidade vigente do Portal.

Direção:

> **premium, sóbria, quente, espiritual, contemporânea e humana.**

Paleta-base:

```text
Azul Noite Profundo #1A1938
Dourado Bronze #C9A25D
Creme Quente #F3EADA
Dourado Champagne #F5DAB1
Marrom Tinta #2B211B
Ouro Profundo #9B7840
```

Tipografia:

- títulos: Cormorant Garamond;
- leitura: Lora;
- sans funcional: utilizar a família vigente da aplicação quando necessária, sem inventar uma família oficial nova.

A interface não deve parecer:

- template SaaS;
- formulário hospitalar;
- quiz gamificado;
- estética esotérica genérica;
- app neon/místico.

---

# 33. ACESSIBILIDADE E MOBILE FIRST

Validar no mínimo:

```text
360 px
375 px
430 px
768 px
desktop
```

Requisitos:

- zero overflow;
- foco visível;
- teclado;
- labels;
- áreas tocáveis adequadas;
- contraste;
- erros claros;
- progresso compreensível;
- não depender apenas de cor;
- áudio com transcript;
- sem autoplay;
- redução de movimento quando aplicável.

---

# 34. SEGURANÇA

Requisitos mínimos:

- validação server-side;
- rate limiting onde necessário;
- limites de tamanho;
- sanitização/escaping;
- `service_role` somente server-side;
- RLS e ownership após claim;
- anonymous access sem SELECT direto a conteúdo íntimo;
- CSRF/origin protections conforme padrão do repo;
- headers apropriados;
- `no-store` em respostas privadas quando aplicável;
- tokens e session secrets nunca em logs;
- negative tests;
- cross-user isolation.

---

# 35. SAFETY / LIMITES

A experiência não é adequada para:

- emergência;
- risco imediato;
- diagnóstico;
- crise que exija atendimento profissional imediato;
- decisão médica, jurídica ou financeira especializada.

A copy não deve:

- espiritualizar sofrimento grave;
- dizer que a pessoa “atraiu” o problema;
- afirmar que um comportamento prova um bloqueio;
- afirmar que uma escolha revela trauma;
- concluir causa energética;
- transformar repetição em identidade.

---

# 36. MÉTRICAS DE PRODUTO

Não validar apenas por leads.

Métricas principais:

- `landing_to_cta_rate`;
- `cta_to_start_rate`;
- `start_to_complete_rate`;
- `median_completion_time`;
- `step_dropoff_rate`;
- `perceived_value_yes_or_partly`;
- `sheet_print_rate`;
- `repeat_start_rate`;
- `save_to_path_rate`;
- `claim_completion_rate`;
- `next_step_click_rate`;
- `marketing_opt_in_rate`;
- erros/abandono técnicos;
- privacy request rate quando aplicável.

Não definir meta arbitrária antes de baseline real.

---

# 37. HIPÓTESES DE VALIDAÇÃO

## H1 — Início

A proposta é compreendida com atrito suficientemente baixo para a pessoa começar.

## H2 — Reconhecimento

A pessoa consegue escolher um episódio real e avançar sem teoria adicional.

## H3 — Core Value

A pessoa consegue completar a frase final sem interpretação externa.

## H4 — Momento Espelho

Ver suas próprias respostas organizadas produz valor percebido.

## H5 — Autonomia

A Folha tem valor mesmo sem cadastro e sem compra.

## H6 — Repetição

Parte das pessoas escolhe voluntariamente fazer novamente.

## H7 — Continuidade

Parte das pessoas considera útil guardar a experiência em Meu Caminho.

## H8 — Profundidade legítima

Algumas pessoas demonstram interesse em continuar sem necessidade de CTA agressivo.

## H9 — Dados

Os sinais estruturados geram aprendizado sem exigir leitura ou exportação de conteúdo íntimo.

---

# 38. DEPENDÊNCIAS TRANSVERSAIS

## Dependências necessárias para iniciar o núcleo do produto

- repo da Plataforma confirmado;
- branch/base de implementação confirmada;
- convenção de migrations confirmada;
- Supabase de desenvolvimento/Preview disponível;
- padrão de operações server-side conhecido;
- padrão de logging/redaction conhecido;
- convenções de testes conhecidas.

## Dependências que podem bloquear somente a integração com Meu Caminho

- Magic Link operacional;
- identity claim transversal;
- ownership;
- audit do claim;
- agregação Meu Caminho;
- rota de experiência autenticada.

Regra:

> **não bloquear toda a construção do núcleo por dependências que só são necessárias depois do primeiro valor.**

---

# 39. COORDENAÇÃO COM SPEC-MEU-CAMINHO-001

Com a aprovação desta SPEC, O Minuto Anterior pode ser confirmado como:

> **candidato prioritário à primeira integração do Gate MC-09.**

Entretanto:

- a experiência continua sendo produto/domínio próprio;
- Meu Caminho não implementa suas perguntas;
- o domínio não implementa Auth/claim próprio;
- a integração deve ser feita por contrato.

O Gate de integração deve ser coordenado entre a trilha `MA-V2` e o `MC-09`.

---

# 40. NOVA SEQUÊNCIA DE GATES

## MA-V2-00 — AUDITORIA DE REINCORPORAÇÃO

**Somente leitura.**

Objetivo:

- confirmar estado real atual;
- localizar documentos V1.1/ADR/Contracts;
- verificar se algo do Minuto foi implementado após o handoff;
- mapear dependências da Plataforma.

Saída:

```text
PRESERVAR
ADAPTAR
SUBSTITUIR
DESCARTAR
EM ABERTO
```

---

## MA-V2-01 — BASELINE DOCUMENTAL E CONTRATOS

Objetivo:

- substituir referências antigas pelos CÂNONs/SPECs atuais;
- preservar IDs;
- reconciliar ADR/Contracts com esta V2;
- registrar dependências reais;
- definir branch de implementação.

Sem feature nova.

---

## MA-V2-02 — DOMÍNIO DE DADOS

Implementar somente o domínio específico:

- sessions;
- answers;
- results;
- signals;
- feedback quando aprovado;
- constraints;
- indexes;
- migrations;
- policies/operations necessárias;
- fixtures fictícias;
- DB tests.

Não recriar Shared Kernel.

---

## MA-V2-03 — SESSION ENGINE PRÉ-AUTH

Implementar:

- início anônimo;
- create/resume;
- refresh-safe;
- validação;
- limites;
- privacy-safe logging;
- rate limit adequado;
- attribution mínima segura.

---

## MA-V2-04 — EXPERIÊNCIA GUIADA

Implementar:

- intro;
- seis perguntas;
- uma pergunta por tela;
- progresso;
- save por etapa;
- validações;
- copy;
- acessibilidade;
- áudio/transcript slot.

---

## MA-V2-05 — RESULTADO / FOLHA / REPETIÇÃO

Implementar:

- snapshot determinístico;
- Momento Espelho;
- limite semântico;
- print view;
- repeat;
- feedback;
- encerramento sem oferta obrigatória.

Nesse gate, uma pessoa já deve conseguir obter valor completo sem conta.

---

## MA-V2-06 — MEU CAMINHO / CLAIM

**Depende da fundação transversal correspondente.**

Implementar:

- Guardar no Meu Caminho;
- captura de e-mail somente aqui;
- Magic Link;
- claim;
- ownership;
- agregação;
- acesso autenticado ao registro;
- replay/expiry/race tests.

---

## MA-V2-07 — COMUNICAÇÃO

Implementar somente mensagens realmente necessárias:

- Auth;
- confirmação/retomada quando útil;
- erros operacionais necessários.

Brevo:

- apenas opt-in;
- sem sequência comercial obrigatória neste gate.

---

## MA-V2-08 — LANDING PÚBLICA

Repo institucional.

Implementar:

- `/minuto-anterior`;
- copy V2;
- CTA para app;
- identidade;
- SEO;
- metadata;
- consent/tracking público;
- message match;
- mobile first.

---

## MA-V2-09 — PRIVACIDADE / RETENÇÃO / ANALYTICS

Fechar:

- prazos de retenção;
- exclusão/exportação via contratos transversais;
- analytics allowlist;
- PII leak tests;
- no-store/noindex quando aplicável;
- runbook mínimo de incidentes do domínio.

---

## MA-V2-10 — QA / SECURITY / E2E

Testar:

- unit;
- DB;
- RLS/ownership;
- integration;
- E2E anônimo;
- E2E claim;
- cross-user isolation;
- mobile;
- a11y;
- rate limits;
- token/session leak;
- PII leak;
- print;
- analytics;
- e-mail;
- error states.

---

## MA-V2-11 — PREVIEW DE ACEITE

Validar com pessoas de teste:

- clareza;
- tempo;
- copy;
- confiança;
- mobile;
- valor percebido;
- salvar no Meu Caminho;
- estados vazios/erro.

---

## MA-V2-12 — PRODUCTION READINESS

Verificar:

- migrations;
- secrets;
- Vercel;
- Supabase;
- Auth URLs;
- Resend;
- Netlify;
- domínio;
- privacy links;
- rollback;
- logs/redaction;
- monitoramento mínimo;
- smoke plan.

---

## MA-V2-13 — PRODUCTION

Somente após aprovação explícita.

Deploy controlado + smoke tests.

---

## MA-V2-14 — APRENDIZADO

Leitura inicial recomendada:

- 72h;
- 7 dias;
- 14 dias;

sem transformar esses marcos em verdade estatística automática.

Decisões possíveis:

```text
MANTER
SIMPLIFICAR
CORRIGIR
TESTAR VARIANTE
ADIAR FUNCIONALIDADE
NÃO ESCALAR
```

---

# 41. CHECKPOINT DE CONTINUIDADE

Claude Code e Codex são coimplementadores.

Não existe auditor fixo do outro.

A cada alternância:

- branch;
- HEAD;
- git status;
- arquivos alterados;
- migrations;
- testes executados;
- PASS/FAIL;
- pendências;
- próxima ação exata;
- riscos.

Nenhum agente deve assumir contexto por adivinhação.

---

# 42. CRITÉRIOS DE ACEITE DO MVP V2

O MVP é considerado funcionalmente pronto quando:

1. a landing é compreensível rapidamente;
2. a pessoa começa sem login e sem e-mail obrigatório;
3. consegue concluir as seis perguntas;
4. refresh não destrói o progresso dentro do desenho aprovado;
5. o resultado aparece imediatamente;
6. o resultado é 100% determinístico;
7. não existe score, perfil, diagnóstico ou inferência de padrão;
8. a Folha funciona sem conta;
9. repetir funciona;
10. guardar no Meu Caminho é opcional;
11. claim é seguro e server-side;
12. nenhuma associação ocorre apenas por e-mail coincidente;
13. Meu Caminho não duplica textos íntimos;
14. marketing é opcional;
15. raw answers não chegam a GA4/Meta/Brevo/logs;
16. RLS/ownership/negative tests passam;
17. cross-user isolation passa;
18. mobile passa em 360/375/430;
19. acessibilidade básica passa;
20. privacy/retention estão definidos antes de Production;
21. não existe uso de Sintonize ou prática energética dentro do exercício;
22. não existe claim terapêutico ou clínico;
23. analytics usa allowlist;
24. existe rollback;
25. documentação e Checkpoint estão sincronizados.

---

# 43. CRITÉRIO DE PRODUTO BEM-SUCEDIDO

O Minuto Anterior NÃO é considerado validado porque gerou cadastros.

A validação precisa observar:

- uso;
- conclusão;
- percepção final;
- valor percebido;
- repetição;
- vontade de guardar;
- continuidade legítima;
- privacidade;
- operabilidade;
- segurança;
- qualidade da experiência.

A pergunta mais importante permanece:

> **A pessoa percebeu algo que normalmente passaria despercebido?**

---

# 44. O QUE NÃO CONSTRUIR NO MVP

- IA interpretativa;
- comparação automática entre sessões;
- perfil de padrão;
- score;
- dashboard analítico para o usuário;
- recomendação automática por texto íntimo;
- “diagnóstico” de bloqueio;
- localização automática de Ponto de Interrupção;
- PDF server-side sem necessidade;
- compartilhamento público do resultado;
- gamificação;
- streak;
- ranking;
- comunidade;
- chat;
- engine espiritual;
- automação de facilitação de Marcos;
- app/Vercel/Supabase/Auth próprio;
- painel admin complexo sem necessidade real.

---

# 45. DECISÕES PRESERVADAS DA V1.1

Continuam válidas como decisão de produto nesta proposta:

- nome;
- gratuidade;
- duração curta;
- seis perguntas;
- Core Value;
- Momento Espelho;
- resultado determinístico;
- ausência de IA interpretativa;
- ausência de score/diagnóstico;
- Folha;
- repetição;
- áudio opcional;
- mobile first;
- acessibilidade;
- privacidade perceptível;
- respostas íntimas fora de analytics/marketing;
- nenhum uso de Sintonize;
- nenhuma infraestrutura própria;
- integração opcional com Meu Caminho após primeiro valor.

---

# 46. MUDANÇAS ESTRUTURAIS DA V2

A V2 altera de forma consciente:

1. hierarquia documental;
2. classificação pública do produto, reduzindo ênfase em “lead magnet”;
3. retirada do e-mail obrigatório antes do valor;
4. captura de identidade somente para guardar/continuar;
5. Shared Kernel como proprietário de identidade, consent, privacy, communication e claim;
6. domínio de dados do Minuto reduzido ao significado específico;
7. taxonomia de área alinhada ao CANON-03;
8. microprática de sete dias convertida em observação opcional;
9. sequência de marketing retirada do núcleo da SPEC;
10. recuperação de longo prazo centrada em Meu Caminho;
11. token público de resultado deixa de ser obrigatório;
12. novo modelo cooperativo Claude Code/Codex;
13. dependências de Plataforma passam a ser granulares;
14. gates reescritos para permitir construção do primeiro valor sem esperar recursos transversais tardios.

---

# 47. DECISÕES AINDA EM ABERTO

Antes de Production ainda precisam ser explicitamente fechados:

- prazos exatos de retenção por categoria;
- se haverá recuperação anônima além da sessão atual;
- se `/r#t=TOKEN` ainda é necessário;
- se comentário aberto no feedback entra no MVP;
- copy final de consentimento/legal;
- copy final da landing;
- roteiro final do áudio;
- quais próximas experiências aparecerão como continuidade e em quais condições;
- se `entry_area_code` será enviado a analytics ou mantido apenas internamente;
- estratégia exata de Preview do banco, conforme decisão transversal.

Nenhuma dessas lacunas impede a aprovação da arquitetura desta SPEC.

Elas devem ser fechadas no gate proprietário antes de Production.

---

# 48. CRITÉRIO DE APROVAÇÃO DESTA SPEC

A SPEC estará apta a substituir a V1.1 quando Marcos aprovar explicitamente que:

1. o núcleo das seis perguntas permanece;
2. o Core Value permanece;
3. o e-mail deixa de ser obrigatório antes do resultado;
4. Meu Caminho passa a ser a persistência/continuidade principal;
5. o domínio específico não recria Shared Kernel;
6. a taxonomia de contexto passa a se alinhar ao CANON-03;
7. a continuidade comercial não é automática;
8. os novos gates substituem a sequência anterior;
9. o último estado técnico conhecido continua sendo tratado como histórico até nova auditoria;
10. a V1.1 passa a ser histórica/referência após sincronização documental.

---

# 49. PRIMEIRA AÇÃO APÓS APROVAÇÃO

Não começar diretamente a programar.

Executar:

> **MA-V2-00 — Auditoria de Reincorporação somente leitura.**

Objetivo:

> **descobrir o que mudou tecnicamente desde o último handoff e qual é o menor caminho seguro para implementar o núcleo do produto usando a Plataforma atual.**

---

# 50. COMANDO INICIAL PARA CLAUDE CODE OU CODEX — MA-V2-00

```text
Você está iniciando o Gate MA-V2-00 — Auditoria de Reincorporação do produto O Minuto Anterior, do Portal Caminho da Consciência.

OBJETIVO
Realizar uma auditoria SOMENTE LEITURA do estado atual da implementação, comparando:
1. estado real do repositório e infraestrutura;
2. SPEC-MINUTO-001 — O Minuto Anterior — MVP V2.0.0;
3. SPEC-MEU-CAMINHO-001 vigente;
4. SPEC-STACK-00 vigente;
5. SPEC-PORTFOLIO-00 vigente;
6. CANON-00 a CANON-07;
7. documentos históricos do Minuto V1.1, ADR MA-01 e Contracts MA-01.

IMPORTANTE
- Claude Code e Codex são coimplementadores.
- Não audite o outro agente; audite o estado técnico.
- NÃO ALTERE ARQUIVOS.
- NÃO CRIE MIGRATIONS.
- NÃO CORRIJA CÓDIGO.
- NÃO ATUALIZE DEPENDÊNCIAS.
- NÃO FAÇA MERGE.
- NÃO FAÇA PUSH.
- NÃO FAÇA DEPLOY.
- NÃO ALTERE VERCEL, SUPABASE, NETLIFY OU PRODUCTION.

CONTEXTO DE PRODUTO APROVADO PARA A AUDITORIA
- O Minuto Anterior continua sendo experiência gratuita de 5–7 minutos.
- Jornada principal: DESCOBRIR → RECONHECER.
- Core Value: “Uma coisa que aconteceu antes e que eu normalmente não observava foi...”
- seis perguntas preservadas com revisão V2.
- resultado determinístico, sem IA interpretativa.
- sem score, diagnóstico, perfil ou localização automática de Ponto de Interrupção.
- sem login antes do primeiro valor.
- sem e-mail obrigatório antes do primeiro valor.
- Guardar no Meu Caminho ocorre somente depois do resultado.
- Magic Link/claim são transversais; não criar Auth próprio.
- respostas abertas são Classe D.
- Meu Caminho agrega; não duplica conteúdo íntimo.
- o domínio do Minuto não recria contacts, consents, privacy, audit ou communication do Shared Kernel.
- nenhuma infraestrutura própria de app/Vercel/Supabase/Auth.

AUDITAR

A. GIT / BASELINE
- repo;
- branch;
- HEAD;
- origin;
- git status;
- branches relevantes;
- stashes;
- commits posteriores ao último snapshot histórico.

B. DOCUMENTOS HISTÓRICOS DO MINUTO
Localizar e registrar estado de:
- SPEC MVP V1.1;
- Dossiê de Demanda;
- ADR MA-01;
- Contracts MA-01;
- branches docs/minuto-anterior-*;
- qualquer código ou documento minute_before_* criado posteriormente.

C. ESTADO FUNCIONAL DO MINUTO
Confirmar por evidência se existem ou não:
- landing pública;
- rota /minuto-anterior no app;
- UI das 6 perguntas;
- session engine;
- migrations;
- tabelas minute_before_*;
- policies/RLS;
- resultado;
- folha;
- repeat;
- analytics;
- e-mail;
- integração Meu Caminho;
- testes;
- Preview;
- Production.

D. DEPENDÊNCIAS TRANSVERSAIS
Confirmar estado REAL de:
- Supabase canônico;
- migration conventions;
- Magic Link;
- accounts/identity;
- identity claim;
- ownership;
- audit;
- consents/privacy;
- RLS conventions;
- Pino/redaction;
- Resend;
- Brevo;
- Meu Caminho aggregation;
- rotas autenticadas;
- Vercel Preview/Production.

E. FRONTEIRA DE DADOS
Verificar se qualquer implementação anterior duplicou ou planejou duplicar:
- contacts;
- consents;
- privacy_requests;
- audit;
- communication_dispatches;
- identity_claims;
- outros componentes agora transversais.

F. TESTES
Executar apenas testes NÃO DESTRUTIVOS existentes e pertinentes.
Registrar comando e resultado.

CLASSIFICAR CADA ITEM
- PRESERVAR
- ADAPTAR
- SUBSTITUIR
- DESCARTAR
- EM ABERTO

SAÍDA OBRIGATÓRIA

# MA-V2-00 — RELATÓRIO DE AUDITORIA

1. Baseline Git
2. Estado real do produto
3. Estado real da Plataforma necessário ao produto
4. Documentos históricos encontrados
5. Código específico do Minuto encontrado
6. Banco/migrations encontrados
7. Estado do Auth/Claim
8. Estado do Meu Caminho necessário à integração
9. Estado de Resend/Brevo
10. Estado de analytics/logs
11. Testes executados e resultados
12. Matriz PRESERVAR/ADAPTAR/SUBSTITUIR/DESCARTAR/EM ABERTO
13. Divergências contra a SPEC V2
14. Riscos
15. Bloqueadores reais
16. Dependências que NÃO precisam bloquear o núcleo
17. Arquivos provavelmente afetados no MA-V2-01/02
18. Menor plano seguro de execução
19. Recomendação objetiva do próximo gate

FINALIZAR INFORMANDO
- branch;
- HEAD;
- git status final;
- comandos executados;
- confirmação explícita de que nenhum arquivo foi alterado.
```

---

# 51. REGRA FINAL

> **O Minuto Anterior não existe para dizer à pessoa quem ela é. Existe para ajudá-la a perceber melhor algo que aconteceu.**
>
> **A experiência entrega valor antes de pedir continuidade. O resultado nasce das palavras da própria pessoa. Meu Caminho organiza aquilo que ela decide guardar. A Plataforma protege os dados sem tomar posse do significado.**
>
> **O produto termina legitimamente no próprio Momento Espelho. Qualquer passo depois disso é possibilidade, não obrigação.**

---

# HISTÓRICO DE VERSÕES

| Versão | Data | Alteração | Status |
|---|---|---|---|
| `1.0` | 03/09/2026 | Primeira especificação executável do produto | HISTÓRICA |
| `1.1` | 05/09/2026 | Integração do contrato pós-Plataforma / Meu Caminho | HISTÓRICA / REFERÊNCIA |
| `2.0.0` | 14/09/2026 | Reincorporação à nova documentação canônica; integração com SPEC-PORTFOLIO, SPEC-STACK e SPEC-MEU-CAMINHO; captura pós-valor; fronteira de Shared Kernel; novos gates e novo modelo de continuidade técnica | APROVADA / VIGENTE em 15/09/2026 por Marcos Vinicius |

---

**FIM — SPEC-MINUTO-001 — O MINUTO ANTERIOR — MVP V2.0.0**
