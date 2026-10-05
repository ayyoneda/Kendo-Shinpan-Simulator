# Plano de Implementação v2 — Plataforma Educacional de Kendo Shinpan

**Data:** 18 de agosto de 2026  
**Idioma inicial do produto:** inglês  
**Estratégia:** núcleo determinístico, conteúdo oficial rastreável e IA como assistente  
**Documento substituído:** este arquivo é uma nova proposta e não altera o `IMPLEMENTATION_PLAN.md` original.

---

## 1. Explicação simples para quem não é desenvolvedor

### 1.1 O que será construído

A plataforma terá quatro partes principais:

1. Um simulador visual do posicionamento dos competidores e árbitros.
2. Animações dos procedimentos, rotações, substituições e sinais dos árbitros.
3. Uma biblioteca pesquisável das regras, figuras e tabelas oficiais.
4. Um assistente de IA que explica o conteúdo e sempre mostra de onde veio a resposta.

### 1.2 O que a IA pode e não pode decidir

A IA pode escrever código, organizar telas, preparar testes, localizar trechos das regras e produzir explicações preliminares. Ela não deve decidir sozinha qual é a interpretação correta de uma regra, se uma animação representa corretamente um procedimento ou se uma tradução pode ser tratada como oficial.

Em termos simples:

- As regras e imagens oficiais são a fonte principal.
- As lógicas matemáticas do simulador são modelos educacionais.
- A IA ajuda a encontrar e explicar informações.
- Uma pessoa aprova os pontos importantes antes de cada lançamento.

### 1.3 O que significa “determinístico”

Determinístico significa que, diante da mesma situação, o programa sempre produz o mesmo resultado. Por exemplo, a trajetória de uma animação é previamente definida e testada. Ela não é inventada pela IA cada vez que o usuário aperta “Play”.

Isso é importante porque movimentos, posições, sequências e citações precisam ser previsíveis.

### 1.4 O que é o corpus

O corpus é a biblioteca organizada que contém o texto das regras, artigos, figuras, tabelas, relações e termos técnicos. Ele é a fonte de conhecimento do aplicativo.

O corpus será produzido, revisado e atualizado em outro chat. Este projeto apenas consumirá uma versão aprovada dele. O aplicativo não deverá alterar o corpus original.

### 1.5 O que é o bundle

O bundle é uma cópia preparada do corpus para o aplicativo. Ele reúne somente os dados necessários, em um formato fácil de carregar e pesquisar.

Uma comparação simples:

- O corpus é o arquivo mestre completo.
- O bundle é a edição preparada para uso no aplicativo.
- O aplicativo lê o bundle, mas não muda o arquivo mestre.

### 1.6 Como o Google Sites será usado

O aplicativo deverá ser publicado em um endereço próprio, por exemplo:

```text
https://exemplo.com/shinpan/?lang=en
```

Depois, esse endereço será incorporado ao Google Sites. A versão recomendada não depende de colocar uma variável JavaScript na página do Google Sites.

O idioma será informado diretamente no endereço do aplicativo:

```text
?lang=en
?lang=pt-BR
?lang=ja
```

A chave usada para acessar a IA nunca ficará dentro do HTML público. O navegador enviará a pergunta para um serviço protegido, e esse serviço conversará com o modelo de IA.

### 1.7 Resultado esperado por etapa

- Primeiro: produto confiável em inglês, sem chat de IA.
- Depois: busca offline e citações.
- Em seguida: assistente de IA com respostas controladas.
- Futuramente: tradução revisada para português e ingestão do documento oficial japonês.

---

## 2. Objetivo do produto

Criar uma plataforma educacional responsiva para estudo de Kendo Shiai e Shinpan, com visualizações interativas, procedimentos guiados, conteúdo normativo rastreável e um assistente de IA com respostas fundamentadas.

O produto deve ajudar no estudo. Ele não deve se apresentar como substituto de formação oficial, instrutores, comissões de arbitragem ou documentos publicados pelas entidades responsáveis.

---

## 3. Decisões já tomadas

### 3.1 Escopo inicial

- Conteúdo normativo somente em inglês.
- Interface inicialmente em inglês.
- Português será uma tradução editorial futura, sujeita a revisão humana.
- Japonês será adicionado após a ingestão e revisão do documento oficial japonês.
- O corpus continuará sendo mantido em outro fluxo de trabalho.
- Este projeto não alterará diretamente o corpus canônico.

### 3.2 Arquitetura

- Simulações, geometrias, sequências e gestos: código determinístico.
- Busca local: funcionamento offline sobre dados previamente preparados.
- Explicações abertas e cenários: IA com recuperação de fontes e citações.
- Integração com IA: realizada por backend protegido, nunca por chave secreta no navegador.
- Google Sites: incorporação por URL de uma aplicação publicada separadamente.

### 3.3 Aprovações humanas obrigatórias

Uma pessoa deverá aprovar:

- versão final do corpus;
- mapeamento entre regras, figuras, tabelas e animações;
- distinção entre regra oficial e modelo pedagógico;
- movimentos, trajetórias e gestos;
- conjunto de perguntas e respostas usado nas avaliações;
- traduções futuras;
- publicação pública e direitos de uso do conteúdo.

---

## 4. Fora do escopo inicial

- Tradução completa para português.
- Conteúdo normativo completo em japonês.
- Reconhecimento automático de vídeo de lutas.
- Avaliação automática de desempenho de árbitros por câmera.
- Geração dinâmica de movimentos por IA.
- Funcionamento offline do chat gerativo.
- Certificação oficial ou promessa de precisão absoluta.

Esses itens poderão ser planejados depois que a versão inglesa estiver estável.

---

## 5. Fontes e classificação do conteúdo

Todo conteúdo apresentado deverá pertencer a uma das categorias abaixo.

### 5.1 Oficial

Texto, tabela, figura ou informação diretamente sustentada por uma fonte oficial identificada. Deve ter versão, página, artigo ou identificador de citação.

### 5.2 Tradução editorial

Tradução criada para facilitar o estudo, mas que não é uma publicação oficial. Deve mostrar claramente o idioma e o status de revisão.

### 5.3 Explicação pedagógica

Resumo, exemplo ou explicação produzida para tornar a regra mais fácil de entender. Deve apontar para a fonte que a sustenta e não pode ser apresentada como citação literal.

### 5.4 Modelo ou lógica do simulador

Escolha matemática usada para transformar conceitos em movimento na tela, como distâncias de referência, ângulos, velocidades, suavização e prevenção de colisões.

Cada parâmetro deverá guardar:

- nome;
- valor;
- unidade;
- motivo da escolha;
- fonte, quando houver;
- classificação `official`, `expert-approved`, `pedagogical` ou `experimental`;
- pessoa e data de aprovação.

Parâmetros experimentais não devem aparecer ao aluno como regras oficiais.

---

## 6. Contrato entre corpus, bundle e aplicativo

### 6.1 Regra principal

O corpus é a fonte canônica. O bundle é sempre gerado a partir de uma versão identificada do corpus. O aplicativo nunca corrige silenciosamente o conteúdo recebido.

### 6.2 Conteúdo mínimo do bundle

O bundle preparado para o aplicativo deverá conter:

- metadados do documento e da versão;
- identificadores canônicos;
- textos divididos em unidades citáveis;
- artigos e regras subsidiárias;
- seções das guidelines;
- tabelas com todas as linhas estruturadas;
- figuras com metadados, descrições e caminhos de assets;
- relações revisadas entre artigos, tabelas e figuras;
- termos e vínculos de glossário;
- mapa de citações;
- idioma e status de cada conteúdo;
- classificação entre oficial e editorial;
- hashes ou outra forma de verificar integridade;
- versão do schema do bundle.

### 6.3 Requisitos da geração

- Processo reproduzível: mesma entrada gera a mesma saída.
- Caminhos relativos e portáveis.
- Nenhuma instalação automática de dependência durante a geração.
- Nenhum caminho fixo específico de uma máquina.
- Erro explícito quando um arquivo obrigatório estiver ausente.
- Validação automática antes da publicação.
- Relatório contendo contagens, avisos e arquivos usados.

### 6.4 Política de atualização

Uma nova versão do bundle só poderá ser aceita quando:

1. o corpus tiver um identificador de versão;
2. as validações do corpus tiverem passado;
3. as relações necessárias estiverem revisadas;
4. o gerador do bundle tiver passado nos testes;
5. a aplicação tiver passado nos testes de regressão com o novo bundle;
6. uma pessoa aprovar a atualização.

---

## 7. Arquitetura da aplicação

```text
Corpus canônico aprovado
          |
          v
Gerador e validador do bundle
          |
          v
Bundle versionado e somente leitura
          |
          +-------------------------+
          |                         |
          v                         v
Aplicação web determinística   Serviço de perguntas com IA
          |                         |
          +------------+------------+
                       v
              Interface do usuário
                       |
                       v
               Embed no Google Sites
```

### 7.1 Frontend

Responsável por:

- navegação;
- Canvas e animações;
- leitura do bundle;
- busca local;
- apresentação das citações;
- acessibilidade;
- interface do chat;
- funcionamento responsivo.

Recomendação: dividir o código em módulos e gerar arquivos estáticos para publicação. O protótipo de arquivo HTML único pode continuar como referência, mas não deve crescer indefinidamente como um único arquivo.

### 7.2 Backend do assistente

Responsável por:

- proteger a chave da API;
- limitar volume de uso;
- recuperar trechos relevantes;
- montar a pergunta para o modelo;
- validar o formato da resposta;
- registrar métricas sem guardar dados pessoais desnecessários;
- bloquear respostas sem evidência suficiente.

### 7.3 Hospedagem e Google Sites

O aplicativo deverá ser hospedado fora do Google Sites e incorporado por URL. A hospedagem deverá permitir que o domínio real usado pelo Google Sites mostre a aplicação dentro de um frame.

Antes da publicação, verificar:

- regras `Content-Security-Policy` e `frame-ancestors`;
- ausência de bloqueio por `X-Frame-Options`;
- tamanho e rolagem no embed;
- funcionamento em desktop e celular;
- carregamento de assets;
- parâmetros de idioma;
- comunicação por `postMessage`, somente se realmente necessária;
- CORS do backend de IA.

Não presumir que scripts ou variáveis da página principal estarão disponíveis dentro do aplicativo incorporado.

---

## 8. Módulos funcionais

### 8.1 Módulo 1 — Simulador de posicionamento

Funcionalidades:

- Shushin, dois Fukushin e dois competidores;
- movimentação interativa dos competidores;
- visualização do triângulo e campo visual;
- trilhas de movimento;
- reset e reprodução de cenários;
- separação visual entre valores oficiais e heurísticos;
- modo técnico avançado escondido por padrão.

Requisitos adicionais:

- centralizar parâmetros em arquivo próprio;
- documentar a origem de cada parâmetro;
- criar testes matemáticos para transformações, limites e transições;
- mostrar aviso de que a simulação é um modelo pedagógico.

### 8.2 Módulo 2 — Procedimentos e rotações

Usar os identificadores completos do conjunto de figuras. Por exemplo, `guidelines:figure-005`, e não apenas “Figure 5”, pois há figuras com o mesmo número em conjuntos diferentes.

Primeiro conjunto:

- Guidelines Figures 1–4: alinhamento e posições iniciais;
- Guidelines Figure 5: rotação dos Shinpan-in;
- Guidelines Figure 6: alternância completa, tipo A;
- Guidelines Figure 7: substituição individual, tipo B;
- Guidelines Figure 8: alternância em grupo.

Cada animação deverá conter:

- estados discretos aprovados;
- posição inicial e final;
- trajetória entre estados;
- instrução textual;
- figura de referência;
- citação;
- status de revisão humana;
- controles de play, pausa, anterior, próximo e velocidade.

### 8.3 Módulo 3 — Senkoku e sinais

- Índice baseado nas linhas estruturadas da Table 1.
- Associação com Guidelines Figures 9–18.
- Filtro por situação, chamada e gesto.
- Exibição do termo japonês usado na arbitragem.
- Áudio de pronúncia separado de traduções explicativas.
- Animações criadas a partir de keyframes aprovados, não inferidas em tempo real pela IA.

O inglês explicará o significado, mas não substituirá indevidamente a chamada japonesa por uma “chamada em inglês”.

### 8.4 Módulo 4 — Biblioteca e busca offline

- Busca por artigo, regra, termo, figura, tabela e palavra-chave.
- Resultados com título, trecho, fonte e link interno.
- Filtros por tipo de conteúdo.
- Tolerância a variações de escrita de termos japoneses romanizados.
- Funcionamento sem conexão após o carregamento dos assets locais.

### 8.5 Módulo 5 — Assistente de IA

O assistente deverá:

- responder inicialmente apenas em inglês;
- usar somente as fontes recuperadas do corpus aprovado;
- apresentar citações verificáveis;
- diferenciar texto da fonte e explicação;
- dizer quando não há informação suficiente;
- evitar transformar práticas pedagógicas em regras oficiais;
- avisar quando uma pergunta exige interpretação de especialista;
- nunca prometer precisão absoluta.

Formato conceitual da resposta:

```json
{
  "answer": "...",
  "answer_type": "source_summary | pedagogical_explanation | insufficient_evidence",
  "citations": [
    {
      "source_id": "...",
      "label": "...",
      "anchor": "..."
    }
  ],
  "limitations": ["..."]
}
```

---

## 9. Estratégia de recuperação e IA

### 9.1 Antes da IA

A busca deve funcionar sozinha. Se o chat estiver indisponível, o usuário ainda conseguirá encontrar e ler os trechos relevantes.

### 9.2 Recuperação

Combinar, conforme resultado das avaliações:

- pesquisa lexical;
- normalização de termos;
- busca por identificador e número de artigo;
- sinônimos controlados do glossário;
- eventualmente embeddings, se produzirem ganho comprovado.

### 9.3 Resposta gerada

O modelo recebe somente os trechos necessários, seus identificadores e instruções claras. Enviar todo o JSON em todas as perguntas pode ser usado como experimento, mas não deve ser chamado de RAG e não deve ser adotado sem comparar qualidade, custo e latência.

### 9.4 Política de abstention

O sistema responderá “não há evidência suficiente no corpus” quando:

- nenhuma fonte relevante for encontrada;
- as fontes encontradas forem contraditórias;
- a pergunta depender de uma versão não ingerida;
- a resposta exigiria criar uma regra ausente;
- a confiança de recuperação ficar abaixo do limite aprovado.

---

## 10. Idiomas

### 10.1 Inglês — primeira versão

- Fonte normativa principal.
- Interface e respostas da IA em inglês.
- Avaliações e casos de teste escritos primeiro em inglês.

### 10.2 Português — versão futura

- Criar tradução editorial por unidade citável.
- Manter vínculo com o identificador inglês correspondente.
- Registrar tradutor, revisor, data e status.
- Mostrar claramente que é tradução quando não houver publicação oficial equivalente.
- Não misturar tradução não revisada ao corpus de produção.

### 10.3 Japonês — versão futura

- Ingerir o documento oficial japonês como fonte própria.
- Preservar paginação, versão e checksum.
- Criar correspondências entre as unidades inglesas e japonesas sem presumir equivalência perfeita.
- Revisar diferenças de estrutura e terminologia.
- Usar `ja` como código técnico padrão do idioma; aceitar `jp` apenas como alias de compatibilidade, se necessário.

---

## 11. Qualidade e testes

### 11.1 Corpus e bundle

- Arquivos obrigatórios presentes.
- YAML e JSON válidos.
- IDs únicos.
- Todas as referências resolvidas.
- Textos citáveis associados aos nodes.
- Todas as linhas de tabelas incluídas.
- Assets e descrições de figuras incluídos ou resolvíveis.
- Glossário e vínculos incluídos.
- Bundle reproduzível.
- Hashes conferidos.

### 11.2 Núcleo determinístico

- Testes unitários de geometria.
- Testes de transições de estado.
- Testes de limites da quadra.
- Testes de cada passo das animações.
- Casos para telas pequenas e diferentes densidades de pixel.
- Comparação visual aprovada das figuras e animações.

### 11.3 Busca e RAG

Ampliar a avaliação atual para um conjunto representativo. Meta inicial recomendada: pelo menos 100 casos antes da versão pública, distribuídos entre:

- pergunta direta;
- termos técnicos;
- múltiplos artigos;
- figuras e tabelas;
- cenários compostos;
- perguntas sem resposta no corpus;
- perguntas ambíguas;
- tentativa de induzir uma regra inexistente;
- verificação exata de citações.

Medir separadamente:

- recuperação da fonte correta;
- precisão da citação;
- fidelidade da resposta à fonte;
- capacidade de não responder quando necessário;
- clareza pedagógica;
- custo e latência.

### 11.4 Aplicação

- Testes de navegação.
- Testes em Chrome, Edge, Firefox e Safari quando possível.
- Testes mobile e touch.
- Acessibilidade por teclado.
- Contraste, textos alternativos e redução de movimento.
- Teste real incorporado no Google Sites.
- Teste com internet lenta e chat indisponível.

---

## 12. Segurança, privacidade e custos

- Nenhuma chave secreta no frontend.
- Backend com limite de uso e tamanho de pergunta.
- Proteção contra instruções maliciosas enviadas pelo usuário.
- O conteúdo recuperado será tratado como dados, não como novas instruções para o modelo.
- Não registrar perguntas pessoais sem necessidade e consentimento.
- Registrar consumo por ambiente e por versão.
- Definir limite mensal de custo e alerta.
- Disponibilizar busca offline quando o limite do chat for atingido.

---

## 13. Estratégia de desenvolvimento com Codex

### 13.1 Modelo recomendado

Usar `gpt-5.6-terra` como modelo principal pelo equilíbrio entre qualidade e custo.

- `medium`: implementação comum, testes e correções locais.
- `high`: arquitetura, corpus/bundle, geometria, RAG e auditorias.
- `gpt-5.6-sol`: revisão pontual de problemas especialmente difíceis.
- Não usar esforço máximo como padrão.

### 13.2 Forma de trabalho

- Uma tarefa pequena por vez.
- Critério de conclusão antes de iniciar a tarefa.
- Alterações revisáveis e reversíveis.
- Testes executados depois de cada mudança.
- Commits pequenos e descritivos.
- Nenhuma alteração simultânea no mesmo arquivo por chats diferentes.
- Aprovação humana nos gates definidos neste documento.

### 13.3 O que melhora a assertividade da IA

- arquivos menores e bem separados;
- nomes claros;
- schema documentado;
- testes automáticos;
- exemplos válidos e inválidos;
- regras de aprovação explícitas;
- histórico Git disponível;
- corpus congelado durante a implementação do bundle.

---

## 14. Roadmap faseado

Os prazos abaixo consideram uma pessoa conduzindo o trabalho com forte apoio de IA. Revisões humanas podem alterar o calendário.

### Fase 0 — Preparação e governança — 1 a 3 dias

- Confirmar escopo inglês.
- Definir repositório e estratégia de branches.
- Registrar direitos e restrições de publicação.
- Definir categorias `official`, `editorial`, `pedagogical` e `experimental`.
- Criar lista de aprovações humanas.

**Gate humano 0:** aprovar escopo, restrições e categorias.

### Fase 1 — Corpus inglês final — realizada no chat do corpus

- Concluir a revisão faseada descrita na Seção 17.
- Corrigir relações e lacunas.
- Ampliar avaliações de recuperação.
- Gerar um release candidate imutável.

**Gate humano 1:** aprovar a versão canônica inglesa.

### Fase 2 — Bundle confiável — realizada a partir do corpus congelado

- Definir schema.
- Implementar gerador portátil.
- Incluir conteúdo completo necessário ao aplicativo.
- Criar validações e relatório.
- Comparar bundle com corpus.

**Gate humano 2:** aprovar schema, relatório e amostras do bundle.

### Fase 3 — Fundação da aplicação — 3 a 5 dias

- Criar estrutura modular.
- Importar o simulador atual.
- Remover dependências externas desnecessárias.
- Criar navegação e carregamento do bundle.
- Preparar testes automáticos.

**Gate humano 3:** aprovar interface básica e funcionamento offline.

### Fase 4 — Simulador revisado — 4 a 7 dias

- Separar parâmetros das regras.
- Classificar heurísticas.
- Criar testes de geometria.
- Melhorar acessibilidade e mobile.

**Gate humano 4:** aprovar a lógica pedagógica e seus avisos.

### Fase 5 — Procedimentos e sinais — 7 a 12 dias

- Implementar Guidelines Figures 1–8.
- Implementar Table 1 e Guidelines Figures 9–18.
- Criar timelines e keyframes.
- Vincular cada etapa às citações.

**Gate humano 5:** aprovar cada sequência e gesto.

### Fase 6 — Biblioteca e busca offline — 3 a 6 dias

- Criar índice.
- Criar tela de resultados.
- Validar links e citações.
- Executar casos de recuperação.

**Gate humano 6:** aprovar resultados de busca e métricas.

### Fase 7 — Assistente de IA — 5 a 10 dias

- Criar backend protegido.
- Implementar recuperação.
- Implementar formato estruturado de resposta.
- Implementar abstention.
- Executar avaliação de geração e fidelidade.

**Gate humano 7:** aprovar respostas, citações, recusas e custos.

### Fase 8 — Google Sites e lançamento beta — 3 a 5 dias

- Publicar aplicação em ambiente de teste.
- Incorporar no Google Sites por URL.
- Validar frame, mobile, acessibilidade, CORS e erros.
- Criar aviso educacional e informações de versão.

**Gate humano 8:** autorizar o beta.

### Fase 9 — Idiomas adicionais — futura

- Traduzir e revisar português.
- Ingerir documento oficial japonês.
- Criar alinhamento entre idiomas.
- Reexecutar todas as avaliações por idioma.

---

## 15. Critérios de conclusão da primeira versão pública

- Corpus inglês com release aprovado.
- Direitos de publicação esclarecidos para o uso pretendido.
- Bundle completo, reproduzível e validado.
- Nenhuma chave secreta no navegador.
- Todos os procedimentos e sinais aprovados por uma pessoa qualificada.
- Heurísticas claramente identificadas.
- Busca offline funcional.
- Assistente capaz de citar e de se abster.
- Avaliações de recuperação e geração aprovadas.
- Testes de acessibilidade, mobile e Google Sites aprovados.
- Versão, fonte e limitações visíveis ao usuário.

---

## 16. Recomendação sobre chats e forks

### 16.1 Corpus

Realizar a revisão final no mesmo chat em que o corpus foi criado. Esse chat contém as decisões, correções e contexto histórico necessários.

### 16.2 Bundle

Não desenvolver o bundle em paralelo enquanto o corpus ainda está mudando. Primeiro gerar e aprovar um release candidate do corpus.

Depois disso, fazer um fork ou abrir um novo chat dedicado ao bundle é uma boa escolha, desde que ele parta de:

- uma versão ou commit identificado;
- um corpus congelado;
- um schema acordado;
- uma lista clara de arquivos de entrada e saída.

O fork deve ser usado para separar responsabilidades, não para editar simultaneamente o mesmo corpus.

### 16.3 Trabalho paralelo seguro

Antes do congelamento, somente estes trabalhos podem ocorrer em paralelo com baixo risco:

- desenho de casos de teste;
- revisão somente leitura;
- protótipo de interface sem copiar dados definitivos;
- documentação da arquitetura.

Não executar em paralelo:

- correções do corpus e geração do bundle final;
- alterações no schema e implementação do consumidor;
- edições da mesma tabela, relação ou figura em dois chats.

---

## 17. Passo a passo para a revisão final do corpus inglês

Esta seção deverá ser executada no chat responsável pelo corpus.

### Etapa A — Inventário e congelamento provisório

Objetivo: descobrir exatamente o que existe e impedir que arquivos mudem durante a auditoria.

1. Listar fontes, textos, nodes, figuras, tabelas, relações, glossário, exports, testes e validadores.
2. Conferir se todos os caminhos citados pelo manifesto existem.
3. Registrar arquivos ausentes e relatórios antigos.
4. Criar uma versão ou commit de auditoria.
5. Não corrigir conteúdo ainda; primeiro produzir o diagnóstico.

**Aprovação:** confirmar que o inventário está completo.

### Etapa B — Fidelidade textual

Objetivo: confirmar que o texto inglês corresponde à fonte oficial.

1. Conferir página por página.
2. Verificar títulos, artigos, numeração, notas e continuidade entre colunas.
3. Registrar cada correção com página e motivo.
4. Revalidar âncoras e linhas dos nodes.
5. Diferenciar texto oficial de notas editoriais.

**Aprovação:** aceitar o texto canônico inglês.

### Etapa C — Figuras e tabelas

Objetivo: garantir que imagens e dados estruturados representam a fonte.

1. Conferir conjunto, número, título e página de cada figura.
2. Conferir crops e descrições.
3. Comparar cada célula das tabelas com o PDF.
4. Resolver referências entre linhas de tabela e figuras.
5. Usar IDs que incluam o conjunto, evitando ambiguidade entre `regulations` e `guidelines`.

**Aprovação:** aceitar inventário, crops, descrições e dados estruturados.

### Etapa D — Relações e glossário

Objetivo: concluir o trabalho ainda marcado como rascunho.

1. Revisar semanticamente as 28 relações existentes.
2. Procurar relações explícitas que ainda não foram registradas.
3. Classificar definições como oficiais, editoriais ou pendentes.
4. Confirmar os 95 termos e 523 vínculos.
5. Registrar termos ambíguos e aliases de romanização.

**Aprovação:** retirar o status `draft` somente dos itens revisados.

### Etapa E — Exports e integridade

Objetivo: garantir que todos os produtos derivados possam ser recriados.

1. Recriar JSONL, SQLite, JSON-LD, Markdown, HTML e mapa de citações.
2. Verificar que nenhum export está mais novo que sua fonte sem explicação.
3. Conferir contagens, hashes e IDs entre formatos.
4. Executar os validadores a partir de um ambiente limpo.
5. Guardar comandos, versões e resultados.

**Aprovação:** aceitar o relatório de integridade.

### Etapa F — Avaliação de recuperação

Objetivo: provar que a busca encontra as fontes corretas.

1. Corrigir os dois casos atualmente problemáticos.
2. Aumentar gradualmente o conjunto de 13 para pelo menos 100 casos.
3. Incluir consultas fáceis, difíceis, ambíguas e sem resposta.
4. Verificar artigos, guidelines, figuras, tabelas e glossário.
5. Revisar manualmente uma amostra dos resultados.

**Aprovação:** aceitar métricas e casos de teste.

### Etapa G — Avaliação das respostas geradas

Objetivo: verificar a etapa ainda não avaliada no corpus atual.

1. Criar respostas esperadas ou critérios claros para cada caso.
2. Testar fidelidade, citações e abstention.
3. Separar resumo de fonte e interpretação pedagógica.
4. Incluir cenários que não podem ser resolvidos pelo corpus.
5. Registrar erros recorrentes e ajustar recuperação ou prompts.

**Aprovação:** aceitar o comportamento do assistente sobre o corpus inglês.

### Etapa H — Release candidate

Objetivo: entregar uma versão estável para gerar o bundle.

1. Atualizar manifesto e changelog.
2. Registrar limitações conhecidas.
3. Registrar situação dos direitos de uso.
4. Gerar hashes finais.
5. Criar tag, versão ou commit imutável.
6. Produzir relatório final para aprovação humana.

**Aprovação:** declarar a versão como fonte para o bundle, sem afirmar precisão absoluta.

---

## 18. Prompts sugeridos para o chat do corpus

### Prompt 1 — Auditoria inicial sem alterações

```text
Quero preparar a revisão final confiável do corpus inglês de FIK Regulations 2023-07-26.

Nesta primeira etapa, faça somente uma auditoria de leitura. Não altere nenhum arquivo.

1. Leia o manifesto e inventarie fontes, textos, nodes, figures, tables, relationships, glossary, validation, exports, tools e testes RAG.
2. Verifique se todos os caminhos citados pelo manifesto realmente existem.
3. Compare as contagens declaradas com as contagens reais.
4. Identifique relatórios desatualizados, referências quebradas, itens draft e validações que não podem ser reproduzidas.
5. Separe problemas de estrutura, fidelidade ao PDF, semântica, direitos e avaliação RAG.
6. Entregue um relatório priorizado e um plano de correção faseado.

Não faça correções até eu revisar e aprovar o diagnóstico.
```

### Prompt 2 — Fidelidade textual

```text
Com base no diagnóstico aprovado, execute somente a fase de fidelidade textual do corpus inglês.

Use o PDF oficial como autoridade. Compare página por página os streams de regulations, subsidiary rules e guidelines. Verifique texto, títulos, números, ordem, notas, layout em colunas e âncoras.

Para cada mudança, registre arquivo, página do PDF, conteúdo anterior, conteúdo corrigido e motivo. Não altere figures, tables, relationships, glossary, exports ou bundle nesta fase.

Depois das correções, execute validações estruturais pertinentes e entregue um relatório para minha aprovação. Não marque a fase como concluída sem mostrar evidências.
```

### Prompt 3 — Figuras e tabelas

```text
Execute agora a revisão final de figures e tables do corpus, sem trabalhar no bundle ou na aplicação.

Confira contra o PDF: conjunto da figura, número, título, página, crop, metadata e description. Nas tabelas, confira cada linha e célula, inclusive valores repetidos como “same as above”, listas em etapas e referências a figuras.

Garanta que todos os IDs diferenciem claramente figures de regulations e figures de guidelines. Produza uma matriz de cobertura mostrando cada figura/tabela, fonte, asset, descrição, relações e status de revisão.

Pare para minha aprovação antes de atualizar o status final da fase.
```

### Prompt 4 — Relações e glossário

```text
Faça a revisão semântica final de relationships e glossary do corpus inglês.

1. Revise individualmente as relações atualmente draft e confirme se fonte, destino, tipo e evidência estão corretos.
2. Procure referências explícitas ainda ausentes.
3. Confirme que o glossário contém 95 termos e 523 links, ou explique qualquer mudança.
4. Diferencie official_definition, editorial_summary e pending terminology review.
5. Revise aliases e termos ambíguos.

Não transforme resumo editorial em definição oficial. Entregue uma lista de decisões que exigem aprovação humana antes de mudar qualquer status para reviewed.
```

### Prompt 5 — Evals de recuperação e geração

```text
Amplie a avaliação do corpus inglês em duas camadas separadas: recuperação e geração.

Primeiro, corrija e explique os dois casos que falham no baseline atual. Depois proponha um conjunto de pelo menos 100 casos equilibrados entre artigos, subsidiary rules, guidelines, figures, tables, glossary, cenários compostos, ambiguidades e perguntas sem resposta.

Para recuperação, registre fontes esperadas e métricas. Para geração, avalie fidelidade à fonte, precisão das citações, separação entre conteúdo oficial e explicação, e capacidade de dizer que não há evidência suficiente.

Não ajuste os testes apenas para favorecer o mecanismo atual. Mostre falhas e resultados completos para aprovação humana.
```

### Prompt 6 — Release candidate final

```text
Prepare um release candidate final do corpus inglês, sem gerar ainda o bundle da aplicação.

Reexecute todas as validações a partir de um ambiente limpo. Atualize manifesto, changelog, status, limitações conhecidas, direitos de uso, contagens e hashes. Confirme que todos os exports e relatórios podem ser reproduzidos.

Entregue um relatório final contendo: versão, commit/tag, fontes, arquivos gerados, testes executados, métricas, avisos restantes e itens que dependem de aprovação humana.

Não use expressões como “100% preciso”. Só declare pronto para bundle depois da minha aprovação explícita.
```

---

## 19. Prompt sugerido para criação do bundle

Recomendação: usar este prompt somente depois de aprovado e congelado o release candidate do corpus. Preferencialmente, executar em um fork ou chat dedicado que parta desse checkpoint.

```text
Quero criar o bundle de aplicação a partir do release candidate aprovado do corpus inglês. Trabalhe somente sobre a versão/commit [INFORMAR IDENTIFICADOR]. Não altere o conteúdo canônico do corpus para facilitar o gerador.

Primeira etapa — auditoria e desenho, sem editar:

1. Leia o manifesto, schemas, textos, nodes, guideline sections, figures, descriptions, tables e seus dados, relationships, glossary, glossary links, citation map e validações.
2. Proponha um schema versionado para um bundle somente leitura destinado a uma aplicação web.
3. O bundle deve incluir conteúdo citável, dados completos das tabelas, metadados e descrições das figuras, relações revisadas, termos e links do glossário, idioma, status, proveniência, classificações official/editorial e hashes.
4. Identifique o que será embutido, o que continuará como asset separado e como cada caminho será resolvido.
5. Proponha validações de completude e igualdade semântica entre corpus e bundle.

Pare e aguarde minha aprovação do schema.

Segunda etapa — após minha aprovação:

1. Implemente um gerador determinístico e portátil, usando caminhos relativos.
2. Não instale dependências automaticamente e não use caminhos específicos da máquina.
3. Adicione schema, testes, validação e documentação do comando de geração.
4. Faça o processo falhar claramente quando uma entrada obrigatória estiver ausente.
5. Gere relatório com versão do corpus, versão do schema, contagens, arquivos, hashes, avisos e duração.
6. Compare automaticamente nodes, chunks, tabelas, figuras, relações, glossário e citações entre corpus e bundle.
7. Execute todos os testes e entregue o diff e o relatório para revisão humana.

Não altere o aplicativo nesta tarefa e não declare o bundle pronto antes da minha aprovação.
```

---

## 20. Riscos principais e resposta planejada

| Risco | Impacto | Resposta |
|---|---|---|
| Conteúdo tratado como oficial sem ser | Alto | Classificação explícita e aprovação humana |
| Relação ou figura ambígua | Alto | IDs com conjunto, revisão semântica e testes |
| Alucinação do assistente | Alto | Citações, fontes restritas e abstention |
| Corpus mudar durante geração do bundle | Alto | Release congelado e execução sequencial |
| Chave de IA exposta no HTML | Alto | Backend protegido |
| Direito de publicação indefinido | Alto | Não liberar publicamente até esclarecer |
| Heurística parecer regra | Alto | Metadados, avisos e modo técnico separado |
| Tradução alterar o significado | Alto | Tradução por unidade e revisão humana |
| Embed do Google Sites falhar | Médio | Hospedagem externa e teste real antecipado |
| Custos de IA crescerem | Médio | Limites, métricas e busca offline |
| Código monolítico ficar difícil de revisar | Médio | Modularização e testes desde a fundação |

---

## 21. Próxima ação recomendada

1. Enviar o Prompt 1 ao chat do corpus.
2. Revisar e aprovar o diagnóstico retornado.
3. Executar as Etapas B a H sequencialmente.
4. Congelar uma versão aprovada do corpus inglês.
5. Criar um fork ou chat dedicado para o bundle usando o prompt da Seção 19.
6. Somente depois integrar o novo bundle à aplicação.

