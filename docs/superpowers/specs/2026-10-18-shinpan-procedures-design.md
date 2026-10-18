# Kendo Shinpan Simulator — Procedimentos e Coreografias FIK (Design Spec)

**Data:** 18 de Outubro de 2026  
**Autor:** Antigravity (Pair Programming com Prof. Adrian Yoneda — Renshi 7º Dan)  
**Status:** Aprovado  
**Fonte Oficial de Referência:** `corpus/fik/regulations/2023-07-26/` (Figuras 1 a 18 e Diretrizes FIK) e `Procedimento_Coreografia_Shinpan.pptx`.

---

## 1. Visão Geral e Fronteiras de Responsabilidade

O **Kendo Shinpan Simulator** é um ambiente interativo para ensino e treinamento do protocolo de arbitragem de Kendo. O projeto é dividido em responsabilidades estritas entre frentes de trabalho:

- **Chat 1 (Física/Motor):** Cuida exclusivamente de `src/engine/Engine.ts`, lidando com a reatividade contínua e dinâmica dos árbitros aos competidores (modo combate ativo).
- **Chat 2 (UI/UX):** Cuida da estética geral, design *Glassmorphism*, paleta de cores HSL e renderização gráfica em `src/renderer/CanvasRenderer.ts`.
- **ESTE MÓDULO (Procedimentos e Coreografias FIK):** Implementa os rituais canônicos e sequências pré-roteirizadas da arbitragem da Federação Internacional de Kendo (FIK / AJKF), desativando os competidores e controlando a posição, orientação e comandos verbais dos árbitros com precisão geométrica e temporal.

### Regra de Ouro
A lógica de combate de `Engine.ts` não é modificada. O `ProcedureManager` atua de forma modular e independente quando o simulador está em `simulationMode = 'PROCEDURE'`.

---

## 2. Fundamentos Geométricos e Canônicos

### 2.1. Sistema de Coordenadas e Parametrização por `courtSize` ($L$)
- **Centro do Shiai-jo:** $(0, 0)$.
- **Kaishisen:** Linhas de partida dos competidores posicionadas em $x = \pm 1,4\text{m}$ (distância total entre elas = $2,8\text{m}$).
- **Vértice do Triângulo Isósceles:**
  $$y_{\text{vertex}} = \frac{L}{2} - 1,0$$
  Para quadra padrão de $10\text{m} \times 10\text{m}$, $y_{\text{vertex}} = 4,0\text{m}$.
- **Base Maior do Triângulo (Posição Padrão dos Fukushin):**
  $$y_{\text{base}} = -y_{\text{vertex}} = -(L/2 - 1,0)$$
  $$x_{\text{base}} = y_{\text{vertex}} \times 0,5$$
  Para quadra $10\text{m}$, Fukushin 1 fica em $(+2,0, -4,0)$ e Fukushin 2 em $(-2,0, -4,0)$ (distância entre eles = $4,0\text{m}$).
- **Base Menor do Trapézio Isósceles (Fila de Entrada/Saída na Borda):**
  - Shushin no centro: $(0, y_{\text{vertex}})$.
  - Fukushin 1: $(+0,65, y_{\text{vertex}})$.
  - Fukushin 2: $(-0,65, y_{\text{vertex}})$.
  - Distância entre centros dos Fukushin = $1,30\text{m}$ (considerando ombro médio de $0,50\text{m}$ e espaço de $0,15\text{m}$ entre ombros).

---

## 3. Especificação dos 3 Capítulos Canônicos

### Capítulo 1: Entrada no Shiai-jo e Tomada de Formação (*Entering & Taking Formation*)
1. **Passo 1 (Fila de Espera Externa):**
   - Os 3 árbitros alinham-se fora da quadra no mesmo lado dos assentos de arbitragem (*shinpan-in seats*), em $y = L/2 + 1,5$, com Shushin no centro e Fukushins em $x = \pm 0,65\text{m}$.
   - Ambas as bandeiras enroladas (*shinpanki*) com a branca por dentro e presas na mão direita ao lado do corpo.
2. **Passo 2 (Marcha Inicial — `Mae!`):**
   - Comando verbal: *"Mae!"*.
   - Marcha em sincronia (8 a 10 passos) avançando até a borda externa da linha limite ($y = L/2$).
3. **Passo 3 (Adentrar a Quadra — `Ippomae!`):**
   - Comando verbal: *"Ippomae!"*.
   - Passo à frente com perna direita, esquerda, direita ($\sim 1\text{m}$), parando logo dentro da linha limite.
   - **Fixação do Vértice:** Ao parar do *Ippomae*, **o Shushin já atinge e ancora o vértice definitivo do triângulo isósceles** em $(0, y_{\text{vertex}})$. Ele **não** se desloca mais na tomada de formação.
4. **Passo 4 (Saudação Conjunta — `Rei!`):**
   - Comando verbal: *"Rei!"*.
   - Reverência coordenada de $15^\circ$ em direção ao interior do Shiai-jo / Shomen.
5. **Passo 5 (Abertura pelas Pernas do Trapézio):**
   - O Shushin permanece firme no vértice $(0, y_{\text{vertex}})$.
   - Fukushin 1 e 2 caminham em linha reta pelas "pernas" do trapézio isósceles (passando por dentro dos *kaishisen*) de suas posições iniciais $(\pm 0,65, y_{\text{vertex}})$ até as extremidades da base maior do triângulo $(\pm x_{\text{base}}, y_{\text{base}})$.
6. **Passo 6 (Giro para o Centro e Preparo das Bandeiras):**
   - Todos os árbitros giram estritamente **para dentro** (*Always turn inward*) para encarar o centro da quadra / competidores.
   - Separação sincronizada das bandeiras: Shushin segura vermelha na direita e branca na esquerda; Fukushins invertem conforme a regra FIK.
   - A orientação corporal converge para o centro de combate.

---

### Capítulo 2: Rotação e Alternância dos Árbitros (*Rotation & Substitution*)
1. **Passo 1 (Recolhimento das Bandeiras):**
   - Todos os 3 árbitros juntam ambas as bandeiras na mão direita.
2. **Passo 2 (Marcha de Rotação Triangular):**
   - Todos caminham em linha reta simultaneamente ao longo dos lados internos do triângulo (caminho mais interno que a perna do trapézio de entrada) no sentido horário:
     - Shushin $\to$ Fukushin 1 $(+x_{\text{base}}, y_{\text{base}})$.
     - Fukushin 1 $\to$ Fukushin 2 $(-x_{\text{base}}, y_{\text{base}})$.
     - Fukushin 2 $\to$ Shushin $(0, y_{\text{vertex}})$.
3. **Passo 3 (Fixação e Abertura em Sincronia):**
   - Ao chegarem aos respectivos postos, giram para dentro e separam as bandeiras em sincronia.
4. **Passo 4 (Alternância / Shinpan Koutai pós-rotação):**
   - O árbitro que atuou como Shushin e rodou para a posição de Fukushin desloca-se ligeiramente para recepcionar o árbitro substituto entrante e enrola as bandeiras (branca por dentro).
   - **Sincronia Temporal Canônica:** O árbitro substituto marcha a partir da borda da quadra com temporização calculada para que, **no exato instante em que ele atinge a posição de parada para o Rei, o árbitro saintete acabou de prender as bandeiras enroladas na mão direita ao lado do corpo** (sem tempo ocioso de espera).
   - Ambos trocam *Rei* simultaneamente.
   - O árbitro saintete recua de costas (*walks out backwards*) até a borda externa e executa *Rei* voltado para a quadra ao sair.
   - O árbitro entrante assume a posição e desenrola as bandeiras; todos sincronizam a abertura.

---

### Capítulo 3: Saída do Shiai-jo (*Leaving the Shiai-jo*)
1. **Passo 1 (Enrolamento Conjunto das Bandeiras):**
   - Todos os árbitros enrolam as bandeiras simultaneamente e as mantêm na mão direita ao lado do corpo.
2. **Passo 2 (Retorno pelas Pernas do Trapézio):**
   - O Shushin permanece firme em sua posição de vértice $(0, y_{\text{vertex}})$.
   - Apenas os dois Fukushin caminham de volta em linha reta pelas pernas do trapézio (passando por dentro dos *kaishisen*) de $(\pm x_{\text{base}}, y_{\text{base}})$ até perfilarem ao lado do Shushin em $(\pm 0,65, y_{\text{vertex}})$.
3. **Passo 3 (Giro para Dentro e Saudação):**
   - Todos giram para dentro (*Always turn inward*) perfilando-se ombro a ombro voltados para fora da quadra.
   - Comando verbal: *"Rei!"* (saudação conjunta).
4. **Passo 4 (Giro em Direção aos Assentos):**
   - Comando verbal: *"Hidari-muke"* ou *"Migi-muke"* (conforme a localização dos assentos de arbitragem).
   - Todos executam o quarto de volta coordenado.
5. **Passo 5 (Marcha de Saída — `Mae!`):**
   - Comando verbal: *"Mae!"*.
   - Marcha em sincronia para fora da área (com suporte a sincronização de entrada do próximo grupo de árbitros).

---

## 4. Arquitetura de Software e Modelo de Dados

### 4.1. Arquivos e Módulos
- `src/engine/procedures/types.ts`: Definições tipadas de etapas, capítulos e estados visuais.
- `src/engine/procedures/definitions.ts`: Banco canônico de capítulos e etapas com fórmulas matemáticas dependentes de `courtSize`.
- `src/engine/procedures/ProcedureManager.ts`: Máquina de estados finita, interpolação de waypoints e controle de playback.
- `src/engine/types.ts`: Extensão do `EngineState` (`simulationMode: 'COMBAT' | 'PROCEDURE'`, `competitorsVisible: boolean`).
- `src/renderer/CanvasRenderer.ts`: Ajuste para respeitar `competitorsVisible` e desenhar callouts/balões de comando e trajetórias tracejadas.
- `src/main.ts`: Integração no loop de animação e ligação com o painel de UI.

### 4.2. Estrutura de Tipos

```typescript
export interface RefereeStepState {
  x: number;
  y: number;
  heading?: number;          // Ângulo em radianos
  flagsRolled?: boolean;     // Bandeiras enroladas
  flagsInRightHand?: boolean;// Ambas na mão direita
}

export interface ProcedureStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  commandCall?: string;      // Ex: "Mae!", "Ippomae!", "Rei!"
  description: string;      // Texto didático do corpus/slides
  durationSec: number;      // Tempo de deslocamento (segundos)
  holdSec?: number;          // Tempo de pausa/espera no final
  getTargets: (courtSize: number) => {
    shushin: RefereeStepState;
    fukushin1: RefereeStepState;
    fukushin2: RefereeStepState;
    substitute?: RefereeStepState;
  };
}

export interface ProcedureChapter {
  id: string;
  titleKey: string;          // Chave i18n / título descritivo
  steps: ProcedureStep[];
}
```

---

## 5. Interface do Usuário (UI/UX) — Controles de Vidro (*Glassmorphism*)

1. **Seletor de Modo Principal:**
   - Tabs superiores no painel: `[ Combate Reativo ]` e `[ Procedimentos Oficiais FIK ]`.
2. **Navegador de Capítulos (Glass Tabs):**
   - `[ 1. Entrada & Formação ]`
   - `[ 2. Rotação & Alternância ]`
   - `[ 3. Saída da Quadra ]`
3. **Stepper Didático Flutuante:**
   - Indicador de passo: `Passo X de Y: <Título do Passo>`.
   - Balão de comando: 🗣️ *"Comando Verbal"* e caixa de texto com instrução técnica do manual.
   - Controles de mídia: `[ |◀ Início ]`, `[ ◀ Anterior ]`, `[ ▶ Play / ⏸ Pause ]`, `[ Próximo ▶ ]`.
   - Seletor de velocidade: `0.5x`, `1.0x`, `1.5x`.
   - Checkbox: `[x] Pausar a cada comando (Modo Didático / Seminário)`.
4. **Renderização no Canvas:**
   - Ocultação suave de Shiro e Aka durante o modo de procedimentos.
   - Exibição de balão translúcido flutuante com a ordem emitida pelo Shushin.
   - Linhas tracejadas sutis ilustrando o trapézio de formação e o triângulo isósceles.

---

## 6. Plano de Testes e Verificação

### 6.1. Testes Automatizados (`vitest`)
- Testes unitários para validar que:
  1. O Shushin não altera suas coordenadas $(0, y_{\text{vertex}})$ entre o passo de *Ippomae* e a formação completa.
  2. As posições finais dos Fukushin no final do Capítulo 1 equivalem com precisão milimétrica aos pontos canônicos da formação padrão para qualquer `courtSize` ($9\text{m}, 10\text{m}, 11\text{m}$).
  3. A rotação do Capítulo 2 preserva a congruência do triângulo isósceles.
  4. A saída (Capítulo 3) devolve os 3 árbitros à base menor do trapézio ($1,30\text{m}$) e à borda externa.

### 6.2. Verificação Manual no Navegador
- Validação visual da fluidez dos movimentos e da orientação das cabeças dos árbitros.
- Validação da alternância entre modo Combate e Procedimentos sem resíduos de estado.
