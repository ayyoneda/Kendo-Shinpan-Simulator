import type { ProcedureChapter } from './types';

export const procedureChapters: ProcedureChapter[] = [
  // =========================================================================
  // CAPÍTULO 1: ENTRADA NO SHIAI-JO E FORMAÇÃO INICIAL
  // =========================================================================
  {
    id: 'entry',
    titleKey: 'chapter_entry',
    titleDefault: '1. Entrada no Shiai-jo e Formação',
    steps: [
      {
        id: 'entry_lineup',
        stepNumber: 1,
        totalSteps: 6,
        commandCall: '',
        description: 'Alinhamento inicial dos 3 árbitros no exterior da quadra, perfilados lado a lado no mesmo lado das cadeiras de arbitragem. Bandeiras enroladas na mão direita.',
        durationSec: 1.0,
        holdSec: 0.5,
        getTargets: (courtSize: number) => {
          const yBoundary = courtSize / 2;
          const yStart = yBoundary + 1.5;
          return {
            shushin: { x: 0, y: yStart, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yStart, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yStart, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_mae',
        stepNumber: 2,
        totalSteps: 6,
        commandCall: 'Mae!',
        description: 'Ao comando "Mae!", os 3 árbitros marcham sincronizadamente (8 a 10 passos) em linha reta até a borda externa da quadra. Sem buscar o centro com o olhar.',
        durationSec: 2.2,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yBoundary = courtSize / 2;
          return {
            shushin: { x: 0, y: yBoundary, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yBoundary, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yBoundary, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_ippomae',
        stepNumber: 3,
        totalSteps: 6,
        commandCall: 'Ippomae!',
        description: 'Ao comando "Ippomae!", dão um passo à frente com direita, esquerda, direita (~1m), parando dentro da linha. O Shushin já ancora e fixa o vértice definitivo do triângulo isósceles!',
        durationSec: 1.5,
        holdSec: 1.0,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_rei',
        stepNumber: 4,
        totalSteps: 6,
        commandCall: 'Rei!',
        description: 'Ao comando "Rei!", todos os árbitros inclinam o tronco (15º) em saudação conjunta em direção ao Shomen / interior da quadra.',
        durationSec: 1.2,
        holdSec: 1.0,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_trapezoid_walk',
        stepNumber: 5,
        totalSteps: 6,
        commandCall: '',
        description: 'O Shushin permanece firme no vértice. Os dois Fukushin caminham em linha reta pelas "pernas" do trapézio isósceles (por dentro dos kaishisen) até a base maior do triângulo.',
        durationSec: 3.0,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          const angleF1 = Math.atan2(yBase - yVertex, xBase - 0.65);
          const angleF2 = Math.atan2(yBase - yVertex, -xBase - (-0.65));
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: angleF1, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: angleF2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_turn_inward',
        stepNumber: 6,
        totalSteps: 6,
        commandCall: '',
        description: 'Todos giram estritamente para dentro (Always turn inward) em direção ao centro da quadra e separam as bandeiras em sincronia (vermelha na direita, branca na esquerda para o Shushin).',
        durationSec: 1.5,
        holdSec: 1.0,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false }
          };
        }
      }
    ]
  },

  // =========================================================================
  // CAPÍTULO 2: ROTAÇÃO E ALTERNÂNCIA DOS ÁRBITROS
  // =========================================================================
  {
    id: 'rotation',
    titleKey: 'chapter_rotation',
    titleDefault: '2. Rotação e Alternância dos Árbitros',
    steps: [
      {
        id: 'rot_flags_right',
        stepNumber: 1,
        totalSteps: 4,
        commandCall: '',
        description: 'Ao final do tempo ou combate, todos os árbitros juntam ambas as bandeiras na mão direita para preparar a rotação triangular.',
        durationSec: 1.0,
        holdSec: 0.5,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_walk',
        stepNumber: 2,
        totalSteps: 4,
        commandCall: '',
        description: 'Marcha simultânea em linha reta pelos lados internos do triângulo (caminho mais interno que o de entrada). Shushin vai para F1, F1 para F2, e F2 assume o posto de Shushin.',
        durationSec: 2.8,
        holdSec: 0.5,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: yBase, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_settle',
        stepNumber: 3,
        totalSteps: 4,
        commandCall: '',
        description: 'Todos giram para dentro em direção ao centro e separam as bandeiras em sincronia. A rotação padrão está concluída.',
        durationSec: 1.5,
        holdSec: 1.0,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false }
          };
        }
      },
      {
        id: 'rot_koutai',
        stepNumber: 4,
        totalSteps: 4,
        commandCall: '',
        description: 'Alternância (Shinpan Koutai): o árbitro saintete enrola as bandeiras na mão direita; o entrante sincroniza a marcha para parar exatamente quando o saintete conclui. Ambos trocam Rei, o saintete recua de costas e o novo árbitro assume.',
        durationSec: 3.0,
        holdSec: 1.5,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            substitute: { x: xBase + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      }
    ]
  },

  // =========================================================================
  // CAPÍTULO 3: SAÍDA DO SHIAI-JO
  // =========================================================================
  {
    id: 'exit',
    titleKey: 'chapter_exit',
    titleDefault: '3. Saída do Shiai-jo',
    steps: [
      {
        id: 'exit_roll_flags',
        stepNumber: 1,
        totalSteps: 5,
        commandCall: '',
        description: 'Todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro) e as seguram na mão direita ao lado do corpo.',
        durationSec: 1.2,
        holdSec: 0.5,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_trapezoid_return',
        stepNumber: 2,
        totalSteps: 5,
        commandCall: '',
        description: 'O Shushin permanece firme na linha de saída. Os dois Fukushin caminham de volta em linha reta pelas pernas do trapézio (por dentro dos kaishisen) até perfilarem ao lado do Shushin.',
        durationSec: 3.0,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_turn_inward_rei',
        stepNumber: 3,
        totalSteps: 5,
        commandCall: 'Rei!',
        description: 'Todos giram estritamente para dentro (Always turn inward) virando-se para o interior do Shiai-jo e executam o Rei conjunto.',
        durationSec: 1.5,
        holdSec: 1.0,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_turn_seats',
        stepNumber: 4,
        totalSteps: 5,
        commandCall: 'Hidari-muke!',
        description: 'Ao comando "Hidari-muke!" (ou "Migi-muke", conforme os assentos da mesa), todos giram em direção às cadeiras de arbitragem.',
        durationSec: 1.2,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: Math.PI, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: Math.PI, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_march',
        stepNumber: 5,
        totalSteps: 5,
        commandCall: 'Mae!',
        description: 'Ao comando "Mae!", marcham em sincronia para fora da quadra (com troca de grupo se aplicável, onde a próxima equipe entra sincronizada).',
        durationSec: 2.5,
        holdSec: 1.0,
        getTargets: (courtSize: number) => {
          const yBoundary = courtSize / 2;
          const yExit = yBoundary + 2.0;
          return {
            shushin: { x: -2.5, y: yExit, heading: Math.PI, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -1.85, y: yExit, heading: Math.PI, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -3.15, y: yExit, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      }
    ]
  }
];
