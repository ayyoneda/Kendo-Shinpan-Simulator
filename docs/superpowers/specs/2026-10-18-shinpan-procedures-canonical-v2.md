# Kendo Shinpan Simulator — Especificação Canônica V2: Procedimentos Oficiais FIK

**Data:** 18 de Outubro de 2026  
**Autor:** Antigravity (com base nas diretrizes e feedbacks do Prof. Adrian Yoneda — Renshi 7º Dan)  
**Status:** Proposta de Design para Aprovação  
**Branch:** `feat/fik-shinpan-procedures`  
**Documentos de Referência:**
1. *FIK Regulations of Kendo Shiai and Shinpan* (Jul/2023)
2. *FIK Handbook for Kendo Shiai and Shinpan Management* (2025)
3. `Procedimento_Coreografia_Shinpan.pptx` (Adrian Yoneda)
4. Assets de Sprites de Entrada: `public/assets/shinpan_entrada/`

---

## 1. Visão Geral e Objetivos do Refinamento

O simulador atingiu a arquitetura básica de máquina de estados e renderização desobstruída. Esta revisão V2 incorpora os 12 aprimoramentos canônicos instruídos pelo Prof. Adrian Yoneda para garantir que a coreografia reflita exatamente a prática real de torneios e seminários oficiais da FIK/AJKF:

1. **Modo Renderizado exclusivo em Procedimentos:** Ao entrar em Procedimentos FIK, a visualização é fixada no Modo Renderizado (pixel art zenital), ocultando ou desabilitando o Modo Técnico.
2. **Remoção do triângulo fixo e exibição temporária de guias didáticos:** O triângulo contínuo de combate é desligado. O trapézio isósceles (base menor 1,30m, pernas dentro dos kaishisen, base maior ~4m) e o triângulo isósceles são desenhados apenas durante os passos explicativos da formação.
3. **Limpeza de resíduos de competidores:** Remoção de rastros e pontos residuais dos competidores ocultos.
4. **Sprites oficiais com bandeiras na mão direita (`shinpan_entrada`):** Uso dos sprites de `assets/shinpan_entrada/` (onde apenas a bandeira vermelha aparece por cima da branca enrolada na mão direita) durante toda a marcha inicial, alinhamento, saída e no árbitro substituto.
5. **Entrada lateral tangenciando a quadra por fora:** Os árbitros iniciam na lateral exterior da quadra junto aos *Shinpan-in seats*, marchando paralelamente à linha da quadra ao comando *"Mae!"* até o centro.
6. **Opção de assentos à Esquerda ou à Direita:** Toggle na interface para demonstrar a entrada com assentos no lado esquerdo ou no lado direito, desenhando as cadeiras (*Shinpan-in seats*) no canvas.
7. **O comando "Ippomae!" com o trio alinhado lado a lado:** Os 3 árbitros viram para a quadra sobre a linha e avançam juntos (portanto, alinhados lado a lado) 1m para dentro da quadra antes da saudação.
8. **Rotação com duas condições educativas:**
   - *Condição A:* Rotação regular sem substituição (o trio gira no sentido horário e vira para o centro).
   - *Condição B:* Rotação com substituição (*Shinpan Koutai*), onde o árbitro que sai não vira para dentro, mas se volta para a direita na direção do árbitro entrante e enrola as bandeiras sincronizadamente.
9. **Sprite do árbitro entrante:** O árbitro substituto utiliza o sprite de entrada com bandeiras enroladas na mão direita.
10. **Fukushin caminham virados para a direção do movimento:** Durante a abertura do trapézio e o retorno no final, os Fukushin caminham voltados para o vetor de deslocamento (não virados para a linha).
11. **Comandos de virada na saída ("Hidari Muke / Migi Muke, Mae!") e marcha reta:** Na saída, os árbitros viram para o lado dos assentos (esquerda ou direita) e marcham em linha reta paralela à linha da quadra por fora.
12. **Sogo-ni-rei pós-saída:** Ao chegarem do lado de fora junto aos assentos, os 3 árbitros formam um triângulo equilátero, virados para o centro, e realizam a saudação mútua (*Sogo-ni-rei*).

---

## 2. Arquitetura de Dados e Configurações

### 2.1 Configuração de Procedimento no State
Adicionamos ao estado da simulação as opções didáticas de contexto:
```typescript
export interface ProcedureConfig {
  seatsSide: 'LEFT' | 'RIGHT';          // Lado dos assentos da arbitragem
  rotationVariant: 'REGULAR' | 'KOUTAI'; // Rotação sem ou com substituição
}
```

### 2.2 Estrutura de Capítulos e Sub-Cenários

1. **Capítulo 1: Entrada no Shiai-jo e Formação Inicial (6 a 7 passos)**
   - *Passo 1: Alinhamento Inicial junto aos Assentos:* Trio perfilado lado a lado na lateral externa da quadra (à esquerda ou à direita, conforme `seatsSide`), bandeiras enroladas na mão direita, voltados na direção da marcha.
   - *Passo 2: "Mae!" (Marcha Lateral Externa):* Marcha de 8 a 10 passos tangenciando a linha da quadra por fora até atingir o eixo central ($x = 0$).
   - *Passo 3: Giro para a Quadra:* O trio faz um quarto de volta sincronizado, ficando perfilado lado a lado sobre a linha da quadra voltado para o Shomen/interior.
   - *Passo 4: "Ippomae!" (Avanço Conjunto de 1m):* Ao comando, o trio avança junto 1m para dentro da quadra (Shushin em $x=0$, F1 em $+0.65$, F2 em $-0.65$, $y = y_{\text{vertex}}$).
   - *Passo 5: "Rei!" (Saudação Inicial):* Saudação coordenada dos 3 árbitros.
   - *Passo 6: Abertura do Trapézio Isósceles:* O Shushin **permanece fixo** no vértice. Os Fukushins viram na direção do movimento e marcham em linha reta pelas pernas do trapézio (por dentro dos kaishisen) até a base maior (~4m). Exibição visual das linhas guia do trapézio e triângulo.
   - *Passo 7: Formação Padrão & Desfraldar Bandeiras:* Os Fukushins fazem o giro interno (*Always turn inward*) em direção ao centro e os 3 árbitros separam as bandeiras sincronizadamente (vermelha na direita, branca na esquerda).

2. **Capítulo 2: Rotação & Substituição**
   - **Variante A: Rotação Regular (Sem Troca):**
     - *Passo 1: Recolher Bandeiras:* Os 3 árbitros juntam as duas bandeiras na mão direita sincronizadamente (sprites mudam para `shinpan_entrada`).
     - *Passo 2: Marcha de Rotação:* Caminham em linha reta no sentido horário para a próxima posição do triângulo, virados para a direção do movimento.
     - *Passo 3: Giro Interno e Prontidão:* Viram para o centro da quadra e separam as bandeiras nas duas mãos sincronizadamente.
   - **Variante B: Rotação com Substituição (Shinpan Koutai):**
     - *Passo 1: Deslocamento do Shushin para Fukushin:* O árbitro que sai caminha até o posto do Fukushin, mas **não vira para dentro** da quadra; vira-se para a direita (em direção à borda onde o substituto entrará) e enrola as bandeiras na mão direita ao lado do corpo.
     - *Passo 2: Entrada do Substituto & Sincronia:* O 4º árbitro (sprite de entrada) avança da borda. No exato instante em que ele atinge a posição de saudação, o árbitro que sai terminou de posicionar a bandeira enrolada na coxa.
     - *Passo 3: Saudação Mútua (Rei):* Os dois árbitros fazem a reverência mútua.
     - *Passo 4: Saída do Antigo e Assunção do Novo:* O árbitro que sai recua de costas até a borda, vira e sai da quadra (fazendo Rei para a quadra). O novo árbitro assume a posição e desenrola as bandeiras; todos separam as bandeiras em sincronia.

3. **Capítulo 3: Encerramento e Saída da Quadra (5 a 6 passos)**
   - *Passo 1: Retorno pelo Trapézio:* Após a saudação final do combate e recolhimento das bandeiras na mão direita, os Fukushins caminham pelas pernas do trapézio (virados para a direção do movimento) de volta ao lado do Shushin (que permanece no vértice).
   - *Passo 2: Giro para Dentro (Always Turn Inward):* Ao atingirem a linha do vértice ao lado do Shushin, **ambos giram para dentro**: Fukushin 1 gira no sentido horário (para a esquerda/centro) e Fukushin 2 gira no sentido anti-horário (para a direita/centro), alinhando-se virados para a quadra sem que nenhum dê as costas para o centro.
   - *Passo 3: "Rei!" (Saudação Final do Trio):* Os 3 árbitros alinhados lado a lado no vértice realizam a reverência.
   - *Passo 4: Recuo para a Linha da Quadra:* O trio recua 1m em sincronia para a linha externa da quadra.
   - *Passo 5: Comando de Virada e Marcha Externa:* Comando *"Hidari Muke, Mae!"* (se assentos à esquerda) ou *"Migi Muke, Mae!"* (se assentos à direita). O trio vira para a lateral e marcha em linha reta tangenciando a quadra por fora até a área dos assentos.
   - *Passo 6: Sogo-ni-rei:* Do lado de fora junto aos assentos, o trio forma um triângulo equilátero, cada um voltado para o centro do triângulo, e realizam o *Sogo-ni-rei* (saudação mútua).

---

## 3. Renderização Visual no Canvas (`CanvasRenderer.ts`)

1. **Shinpan-in Seats (Cadeiras dos Árbitros):**
   - Renderização vetorial precisa de 3 cadeiras dobráveis estilo torneio (assento e encosto azul-marinho/preto com estrutura de suporte) posicionadas na margem externa da quadra:
     - Se `seatsSide === 'LEFT'`: $x = -(\text{courtSize}/2 + 0.6\text{m})$, espaçadas ao longo de $y$.
     - Se `seatsSide === 'RIGHT'`: $x = +(\text{courtSize}/2 + 0.6\text{m})$.
   - Rótulo discreto em tipografia técnica: `"Shinpan-in seats"`.
2. **Sprites com Bandeiras na Mão Direita (`shinpan_entrada`):**
   - Imagens carregadas:
     - `assets/shinpan_entrada/shinpan_3.png`
     - `assets/shinpan_entrada/shinpan_4.png`
     - `assets/shinpan_entrada/shinpan_5.png`
   - Critério de seleção: se o árbitro está em marcha de entrada, com bandeiras recolhidas (`flagsRolled: true` ou `flagsInRightHand: true`) ou é o substituto entrante, o renderizador desenha automaticamente o sprite da pasta `shinpan_entrada` (bandeira vermelha visível sobre a branca enrolada na mão direita).
3. **Ilustração Didática Temporária do Trapézio e Triângulo:**
   - Linhas exibidas **somente** no Passo de Abertura do Trapézio / Formação:
     - Trapézio Isósceles com base menor de $1.30\text{m}$, pernas tracejadas passando por dentro dos kaishisen ($|x| \le 1.4\text{m}$), e base maior de $\approx 4\text{m}$.
     - Triângulo Isósceles tracejado conectando o Shushin no vértice aos dois Fukushin na base.
   - Em todos os outros passos (marcha, saudação, saída, combate), as linhas geométricas permanecem invisíveis para não poluir a apresentação marcial.
4. **Supressão de Resíduos dos Competidores:**
   - `drawTrails()` ignora competidores quando `competitorsVisible === false`.
   - Limpeza total de rastros ao alternar modos.

---

## 4. Interface de Usuário & Painel de Controle

1. **Travamento no Modo Renderizado:**
   - Ao selecionar "Procedimentos FIK", a interface desativa o botão de Modo Técnico e ativa `renderer.isRPGMode = true`.
2. **Seletores Didáticos no Topo do Painel de Procedimentos:**
   - **Lado dos Assentos:** `[ 💺 Esquerda ] [ 💺 Direita ]`
   - **Variante de Rotação (no Cap. 2):** `[ 🔄 Rotação Regular ] [ 👥 Com Substituição (Koutai) ]`
3. **Manutenção do Painel Lateral Direito:**
   - O painel permanece na lateral direita (`top-16 right-4 w-[350px]`), com botão de minimizar para pílula compacta e auto-recolhimento do painel esquerdo.

---

## 5. Plano de Testes Automatizados (TDD)

1. Testes unitários para cálculo paramétrico de coordenadas das entradas esquerda e direita (`definitions.test.ts`).
2. Testes de heading durante a marcha dos Fukushin na perna do trapézio (virados para a trajetória) e giro interno (*turn inward*).
3. Testes da variante de rotação sem troca e com troca (substituto sincronizado).
4. Teste da formação do triângulo equilátero no *Sogo-ni-rei*.
5. Verificação visual no navegador e build de produção sem erros de TypeScript.
