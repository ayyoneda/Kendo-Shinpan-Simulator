# Kendo Shinpan Simulator — Revisão Editorial dos Textos dos Procedimentos FIK

Este documento reúne **todos os textos** (títulos, comandos vocais, descrições detalhadas e notas de regulamento) apresentados na ferramenta durante os **Procedimentos Oficiais FIK**.

> **Como utilizar este arquivo:**
> 1. Revise e edite os textos diretamente abaixo em cada seção `[SUA REVISÃO / AJUSTES AQUI]`.
> 2. Salve ou envie o conteúdo revisado para que seja incorporado diretamente nas definições canônicas da ferramenta (`src/engine/procedures/definitions.ts` e arquivos de internacionalização `i18n.ts`).

---

## Sumário
- [Capítulo 1: Entrada em Quadra (Etapas 1.1 a 1.8)](#capítulo-1-entrada-em-quadra)
- [Capítulo 2A: Rotação Regular — Sem Troca (Etapas 2A.1 a 2A.5)](#capítulo-2a-rotação-regular--sem-troca)
- [Capítulo 2B: Rotação com Substituição — Shinpan Koutai (Etapas 2B.1 a 2B.7)](#capítulo-2b-rotação-com-substituição--shinpan-koutai)
- [Capítulo 3: Término do Combate e Saída da Quadra (Etapas 3.1 a 3.7)](#capítulo-3-término-do-combate-e-saída-da-quadra)

---

## Capítulo 1: Entrada em Quadra

### Etapa 1.1
- **ID:** `entry_lineup`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Alinhamento Inicial junto aos Assentos
- **Descrição Atual:**
  > Os 3 árbitros levantam-se dos assentos de arbitragem (*Shinpan-in seats*) e perfilam-se lado a lado do lado de fora da quadra, na ordem Fukushin 2 - Shushin - Fukushin 1, com as bandeiras enroladas na mão direita (vermelha cobrindo a branca) ao lado do corpo.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.2
- **ID:** `entry_walk_border`
- **Comando Vocal (*Command Call*):** `"Mae!"`
- **Título Atual:** Marcha Lateral até o Centro
- **Descrição Atual:**
  > Ao comando "Mae!" do Shushin, o trio avança marchando em linha reta tangenciando a linha da quadra, mantendo a formação alinhada até atingir o centro da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.3
- **ID:** `entry_turn_court`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro para o Interior da Quadra
- **Descrição Atual:**
  > No centro e logo atrás da linha de limite da quadra, os 3 árbitros giram 90º simultaneamente no próprio eixo, voltando-se para o interior da quadra (direção do Shomen).
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.4
- **ID:** `entry_advance_one_step`
- **Comando Vocal (*Command Call*):** `"Ippomae!"`
- **Título Atual:** Avanço Conjunto de Um Passo
- **Descrição Atual:**
  > Ao comando "Ippomae!", os 3 árbitros dão um passo à frente entrando juntos na quadra (a 1m da linha de limite), perfilados na base menor do trapézio (1.30m entre Fukushin). O Shushin já atinge aqui a posição final de vértice do triângulo.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.5
- **ID:** `entry_rei`
- **Comando Vocal (*Command Call*):** `"Rei!"`
- **Título Atual:** Saudação Inicial (Rei)
- **Descrição Atual:**
  > Ao comando "Rei!", todos os árbitros inclinam o tronco (15º) em saudação conjunta em direção ao Shomen / interior da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.6
- **ID:** `entry_trapezoid_walk`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Marcha pelas Pernas do Trapézio
- **Descrição Atual:**
  > O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a direção do movimento pelas "pernas" do trapézio isósceles (por dentro dos kaishisen) até a base maior do triângulo (~4m).
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.7
- **ID:** `entry_turn_inward`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro para o Centro (Standard)
- **Descrição Atual:**
  > Os Fukushin giram estritamente para dentro (Always turn inward) em direção ao centro da quadra, estabelecendo a formação Standard do triângulo. As bandeiras permanecem na mão direita ao lado do corpo.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 1.8
- **ID:** `entry_separate_flags`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Separação das Shinpanki
- **Descrição Atual:**
  > Na posição Standard, os 3 árbitros separam as bandeiras simultaneamente nas duas mãos (vermelha na direita, branca na esquerda). Formação inicial de combate concluída!
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

## Capítulo 2A: Rotação Regular — Sem Troca

### Etapa 2A.1
- **ID:** `rot_flags_right`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Recolhimento das Bandeiras
- **Descrição Atual:**
  > Todos os árbitros juntam e enrolam as bandeiras simultaneamente na mão direita ao lado do corpo, preparando-se para a rotação de posições.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2A.2
- **ID:** `rot_turn_dest`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro para a Direção do Destino
- **Descrição Atual:**
  > Os árbitros giram no próprio eixo em direção ao próximo vértice do triângulo no sentido horário (Shushin -> F1, F1 -> F2, F2 -> Shushin), antes de iniciar a caminhada.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2A.3
- **ID:** `rot_walk`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Marcha da Rotação
- **Descrição Atual:**
  > Os 3 árbitros caminham em linha reta ao longo dos lados do triângulo isósceles em direção aos novos vértices, mantendo o olhar na direção da marcha.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2A.4
- **ID:** `rot_turn_center`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro para o Centro (Standard)
- **Descrição Atual:**
  > Ao atingirem as novas posições, todos os árbitros giram no próprio eixo voltando-se para o centro da quadra, mantendo as bandeiras na mão direita.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2A.5
- **ID:** `rot_separate_flags`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Separação das Shinpanki
- **Descrição Atual:**
  > Voltados para o centro na nova formação, os 3 árbitros separam simultaneamente as bandeiras nas duas mãos (vermelha na direita, branca na esquerda). Rotação concluída!
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

## Capítulo 2B: Rotação com Substituição — Shinpan Koutai

### Etapa 2B.1
- **ID:** `koutai_flags_right`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Recolhimento das Bandeiras
- **Descrição Atual:**
  > Os árbitros na quadra recolhem e enrolam as bandeiras na mão direita ao lado do corpo. O árbitro substituto aguarda do lado de fora da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.2
- **ID:** `koutai_turn_dest`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro para a Direção do Destino
- **Descrição Atual:**
  > Os árbitros giram no próprio eixo em direção às posições da rotação no sentido horário. O árbitro substituto aguarda do lado de fora da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.3
- **ID:** `koutai_rotate_walk`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Marcha dos Árbitros e Posicionamento do Sainte
- **Descrição Atual:**
  > Os árbitros caminham para seus novos vértices. O árbitro que sai (sainte) chega à posição de rotação e vira-se diretamente para a borda externa onde o substituto aguarda. O substituto permanece aguardando do lado de fora da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.4
- **ID:** `koutai_sub_enter`
- **Comando Vocal (*Command Call*):** `"Koutai!"`
- **Título Atual:** Entrada Sincronizada do Substituto
- **Descrição Atual:**
  > O árbitro substituto ingressa na quadra em marcha reta em direção ao sainte, sincronizando sua parada com o término do enrolar da bandeira pelo sainte. Ambos param frente a frente a 1.2m de distância.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.5
- **ID:** `koutai_mutual_rei`
- **Comando Vocal (*Command Call*):** `"Rei!"`
- **Título Atual:** Saudação Mútua (Sogo-ni-rei entre Sainte e Entrante)
- **Descrição Atual:**
  > Sainte e substituto inclinam o tronco (15º) executando a saudação mútua (Rei) a 1.2m de distância.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.6
- **ID:** `koutai_exit_backwards_swap`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Saída de Costas pelo Fundo e Substituição
- **Descrição Atual:**
  > O sainte gira 90º no sentido horário e recua de costas (voltado para o interior da quadra) até a borda externa do fundo (y = -5.5m), enquanto o substituto avança e assume a posição no triângulo.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 2B.7
- **ID:** `koutai_final_rei_separate`
- **Comando Vocal (*Command Call*):** `"Rei!"`
- **Título Atual:** Rei do Sainte e Preparação das Shinpanki
- **Descrição Atual:**
  > O sainte, na borda externa do fundo, realiza a saudação (Rei) voltado para a quadra antes de se retirar. Simultaneamente, os 3 árbitros na quadra separam as bandeiras nas duas mãos de forma sincronizada voltados para o centro.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

## Capítulo 3: Término do Combate e Saída da Quadra

### Etapa 3.1
- **ID:** `exit_roll_flags`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Enrolamento das Shinpanki
- **Descrição Atual:**
  > Ao término do combate e saudações dos competidores, todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro, vermelha por fora) e as mantêm na mão direita ao lado do corpo. O próximo grupo de arbitragem aguarda sentado nos assentos.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.2
- **ID:** `exit_fukushin_walk`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Retorno pelas Pernas do Trapézio & Alinhamento do Novo Grupo
- **Descrição Atual:**
  > O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a marcha pelas "pernas" do trapézio até o Shushin. Simultaneamente, o novo grupo de árbitros levanta-se dos assentos e perfila-se na borda de entrada da quadra.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.3
- **ID:** `exit_turn_inward`
- **Comando Vocal (*Command Call*):** `""` *(Nenhum)*
- **Título Atual:** Giro Interno e Alinhamento
- **Descrição Atual:**
  > Ao chegarem ao lado do Shushin, ambos os Fukushin giram estritamente para dentro (Always turn inward) para ficarem voltados para a quadra, rigorosamente alinhados com o Shushin a 1m da linha. O novo grupo aguarda perfilado na borda.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.4
- **ID:** `exit_rei`
- **Comando Vocal (*Command Call*):** `"Rei!"`
- **Título Atual:** Saudação Final (Rei)
- **Descrição Atual:**
  > Ao comando "Rei!", o trio que está saindo inclina o tronco em saudação final ao Shomen / interior da quadra exatamente onde estão posicionados.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.5
- **ID:** `exit_turn_out`
- **Comando Vocal (*Command Call*):** `"Hidari Muke / Migi Muke!"`
- **Título Atual:** Giro para a Saída (Hidari/Migi-muke)
- **Descrição Atual:**
  > Ao comando "Hidari-muke!" (se os assentos estiverem à esquerda) ou "Migi-muke!" (se à direita), os 3 árbitros giram 90º no próprio eixo, perfilados na ordem Fukushin 2 - Shushin - Fukushin 1, prontos para marchar em direção à saída.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.6
- **ID:** `exit_walk_out`
- **Comando Vocal (*Command Call*):** `"Mae!"`
- **Título Atual:** Marcha de Saída e Entrada do Próximo Trio
- **Descrição Atual:**
  > Ao comando "Mae!", o trio que encerra caminha em linha reta (a 1m da linha) em direção à borda de saída da quadra. Simultaneamente, o novo grupo de árbitros avança pela lateral tangenciando a quadra até o centro de entrada.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```

---

### Etapa 3.7
- **ID:** `exit_sogo_ni_rei`
- **Comando Vocal (*Command Call*):** `"Sogo-ni-rei!"`
- **Título Atual:** Saída dos Limites e Sogo-ni-rei
- **Descrição Atual:**
  > Assim que cruzam os limites da quadra, o trio abre a formação de triângulo equilátero (primeiro abre 60º à direita, segundo 60º à esquerda e terceiro segue reto), viram-se entre si e realizam o Sogo-ni-rei, enquanto o novo trio está pronto no centro para iniciar.
- **[SUA REVISÃO / AJUSTES AQUI]:**
  ```text
  
  ```
