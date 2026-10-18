import type { ProcedureChapter, ProcedureConfig } from './types';

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
        totalSteps: 7,
        commandCall: '',
        description: 'Alinhamento inicial dos 3 árbitros no exterior da quadra, perfilados em fila tangenciando a linha externa junto aos assentos de arbitragem (Shinpan-in seats). Bandeiras enroladas na mão direita.',
        durationSec: 1.0,
        holdSec: 0.5,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const heading = isLeft ? 0 : Math.PI;
          const sign = isLeft ? -1 : 1;
          const startX = sign * (courtSize / 2 + 0.5);
          return {
            shushin: { x: startX + sign * 0.7, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: startX, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: startX - sign * 0.7, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_mae',
        stepNumber: 2,
        totalSteps: 7,
        commandCall: 'Mae!',
        description: 'Ao comando "Mae!", os 3 árbitros marcham sincronizadamente em linha reta tangenciando a borda externa da quadra até atingirem o eixo central (alinhados com o vértice). Sem buscar o centro com o olhar.',
        durationSec: 2.4,
        holdSec: 0.8,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const heading = isLeft ? 0 : Math.PI;
          const sign = isLeft ? 1 : -1;
          return {
            shushin: { x: 0, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: sign * 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -sign * 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_turn_court',
        stepNumber: 3,
        totalSteps: 7,
        commandCall: '',
        description: 'No centro da quadra, o trio faz um quarto de volta sincronizado para dentro, perfilando-se lado a lado sobre a linha da quadra, virados para o Shomen / interior da quadra.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yBound = courtSize / 2;
          return {
            shushin: { x: 0, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_ippomae',
        stepNumber: 4,
        totalSteps: 7,
        commandCall: 'Ippomae!',
        description: 'Ao comando "Ippomae!", os 3 árbitros alinhados lado a lado dão um passo à frente com direita, esquerda, direita (~1m), parando dentro da quadra. O Shushin já ancora e fixa o vértice definitivo do triângulo isósceles!',
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
        stepNumber: 5,
        totalSteps: 7,
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
        stepNumber: 6,
        totalSteps: 7,
        commandCall: '',
        description: 'O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a direção do movimento pelas "pernas" do trapézio isósceles (por dentro dos kaishisen) até a base maior do triângulo (~4m).',
        durationSec: 3.0,
        holdSec: 0.8,
        showTrapezoid: true,
        showTriangle: true,
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
        stepNumber: 7,
        totalSteps: 7,
        commandCall: '',
        description: 'Os Fukushin giram estritamente para dentro (Always turn inward) em direção ao centro da quadra e separam as bandeiras em sincronia (vermelha na direita, branca na esquerda). Formação padrão estabelecida!',
        durationSec: 1.5,
        holdSec: 1.0,
        inwardTurn: true,
        showTrapezoid: true,
        showTriangle: true,
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
  // CAPÍTULO 2A: ROTAÇÃO REGULAR (SEM SUBSTITUIÇÃO)
  // =========================================================================
  {
    id: 'rotation',
    titleKey: 'chapter_rotation',
    titleDefault: '2. Rotação Regular (Sem Troca)',
    steps: [
      {
        id: 'rot_flags_right',
        stepNumber: 1,
        totalSteps: 3,
        commandCall: '',
        description: 'Ao final do tempo ou combate, todos os árbitros juntam ambas as bandeiras na mão direita sincronizadamente para iniciar a rotação triangular.',
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
        totalSteps: 3,
        commandCall: '',
        description: 'Marcha simultânea em linha reta pelos lados internos do triângulo no sentido horário (virados para a direção do movimento): Shushin vai para F1, F1 para F2, e F2 assume o posto de Shushin.',
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
        totalSteps: 3,
        commandCall: '',
        description: 'Todos giram para dentro em direção ao centro e separam as bandeiras em sincronia. A rotação padrão está concluída sem necessidade de troca.',
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
      }
    ]
  },

  // =========================================================================
  // CAPÍTULO 2B: ROTAÇÃO COM SUBSTITUIÇÃO (SHINPAN KOUTAI)
  // =========================================================================
  {
    id: 'rotation_koutai',
    titleKey: 'chapter_rotation_koutai',
    titleDefault: '2B. Rotação com Troca (Shinpan Koutai)',
    steps: [
      {
        id: 'koutai_walk_to_border',
        stepNumber: 1,
        totalSteps: 4,
        commandCall: '',
        description: 'O Shushin que deixará a quadra caminha até a posição do Fukushin. Ele NÃO vira para dentro da quadra: vira-se diretamente para a direita (em direção à borda por onde entrará o substituto) e enrola as bandeiras na mão direita.',
        durationSec: 2.5,
        holdSec: 0.5,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 0.8, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_sync_entry',
        stepNumber: 2,
        totalSteps: 4,
        commandCall: '',
        description: 'O árbitro entrante sincroniza sua marcha desde a borda. No exato instante em que para na posição de saudação, o árbitro que sai conclui o enrolamento das bandeiras junto à coxa direita.',
        durationSec: 2.2,
        holdSec: 0.8,
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
      },
      {
        id: 'koutai_mutual_rei',
        stepNumber: 3,
        totalSteps: 4,
        commandCall: 'Rei!',
        description: 'Os dois árbitros (sainte e entrante) realizam a saudação mútua (Rei) em sincronia, com bandeiras posicionadas na mão direita.',
        durationSec: 1.2,
        holdSec: 1.0,
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
      },
      {
        id: 'koutai_finish_swap',
        stepNumber: 4,
        totalSteps: 4,
        commandCall: '',
        description: 'O árbitro que sai recua de costas até a borda, vira-se para a quadra, faz Rei e se retira. O árbitro entrante assume a posição de Fukushin, desenrola as bandeiras e todos separam as bandeiras em sincronia.',
        durationSec: 2.8,
        holdSec: 1.0,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: courtSize / 2 + 1.5, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            substitute: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false }
          };
        }
      }
    ]
  },

  // =========================================================================
  // CAPÍTULO 3: ENCERRAMENTO E SAÍDA DO SHIAI-JO
  // =========================================================================
  {
    id: 'exit',
    titleKey: 'chapter_exit',
    titleDefault: '3. Encerramento e Saída da Quadra',
    steps: [
      {
        id: 'exit_roll_flags',
        stepNumber: 1,
        totalSteps: 6,
        commandCall: '',
        description: 'Ao término do combate e saudações dos competidores, todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro, vermelha por fora) e as mantêm na mão direita ao lado do corpo.',
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
        totalSteps: 6,
        commandCall: '',
        description: 'O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a direção do movimento pelas pernas do trapézio (por dentro dos kaishisen) de volta até a linha do Shushin.',
        durationSec: 2.8,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          const angleF1Return = Math.atan2(yVertex - yBase, 0.65 - xBase);
          const angleF2Return = Math.atan2(yVertex - yBase, -0.65 - (-xBase));
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: angleF1Return, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: angleF2Return, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_turn_inward_align',
        stepNumber: 3,
        totalSteps: 6,
        commandCall: '',
        description: 'Ao chegarem ao lado do Shushin, ambos os Fukushin giram estritamente para dentro (Always turn inward): F1 gira em sentido horário e F2 em sentido anti-horário em direção ao centro, alinhando-se lado a lado voltados para a quadra sem dar as costas.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          const angleF1Return = Math.atan2(yVertex - yBase, 0.65 - xBase);
          const angleF2Return = Math.atan2(yVertex - yBase, -0.65 - (-xBase));
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: {
              x: 0.65,
              y: yVertex,
              heading: -Math.PI / 2,
              headingDelta: (1.5 * Math.PI) - angleF1Return, // Inward: sentido horário através de PI
              flagsRolled: true,
              flagsInRightHand: true
            },
            fukushin2: {
              x: -0.65,
              y: yVertex,
              heading: -Math.PI / 2,
              headingDelta: -Math.PI / 2 - angleF2Return, // Inward: sentido anti-horário através de 0
              flagsRolled: true,
              flagsInRightHand: true
            }
          };
        }
      },
      {
        id: 'exit_rei_and_stepback',
        stepNumber: 4,
        totalSteps: 6,
        commandCall: 'Rei!',
        description: 'O trio perfilado lado a lado realiza a saudação final ("Rei!") e, em seguida, dá um passo recuado (~1m) em sincronia, retornando à linha externa da quadra.',
        durationSec: 1.6,
        holdSec: 0.8,
        getTargets: (courtSize: number) => {
          const yBound = courtSize / 2;
          return {
            shushin: { x: 0, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yBound, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_march_to_seats',
        stepNumber: 5,
        totalSteps: 6,
        commandCall: 'Hidari-muke, Mae!',
        description: 'Ao comando de virada ("Hidari-muke, Mae!" ou "Migi-muke, Mae!", conforme a mesa), o trio gira para a lateral e marcha em linha reta paralela à linha da quadra por fora até a área dos assentos.',
        durationSec: 2.6,
        holdSec: 0.8,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yMarch = courtSize / 2 + 0.45;
          const heading = isLeft ? Math.PI : 0;
          const sign = isLeft ? -1 : 1;
          const exitX = sign * (courtSize / 2 + 0.5);
          return {
            shushin: { x: exitX, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: exitX - sign * 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: exitX + sign * 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'exit_sogo_ni_rei',
        stepNumber: 6,
        totalSteps: 6,
        commandCall: 'Sogo-ni-rei!',
        description: 'Do lado de fora junto aos assentos, os 3 árbitros formam um triângulo equilátero, cada um voltado para o centro do triângulo, e realizam a saudação mútua (Sogo-ni-rei), concluindo o protocolo.',
        durationSec: 1.5,
        holdSec: 1.5,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const cx = sign * (courtSize / 2 + 1.0);
          const cy = courtSize / 2 + 1.2;
          const R = 0.55;

          // Vértices do triângulo equilátero:
          // Shushin no topo voltado para baixo: (cx, cy - R), heading = Math.PI / 2
          // F1 no canto inferior direito: (cx + R * cos30, cy + R * sin30), heading para centro
          // F2 no canto inferior esquerdo: (cx - R * cos30, cy + R * sin30), heading para centro
          const cos30 = Math.cos(Math.PI / 6);
          const sin30 = Math.sin(Math.PI / 6);

          const sX = cx;
          const sY = cy - R;
          const f1X = cx + R * cos30;
          const f1Y = cy + R * sin30;
          const f2X = cx - R * cos30;
          const f2Y = cy + R * sin30;

          return {
            shushin: { x: sX, y: sY, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: f1X, y: f1Y, heading: Math.atan2(cy - f1Y, cx - f1X), flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: f2X, y: f2Y, heading: Math.atan2(cy - f2Y, cx - f2X), flagsRolled: true, flagsInRightHand: true }
          };
        }
      }
    ]
  }
];
