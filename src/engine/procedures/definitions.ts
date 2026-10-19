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
        totalSteps: 8,
        commandCall: '',
        description: 'Os 3 árbitros levantam-se dos assentos de arbitragem e perfilam-se do lado de fora da quadra, na ordem Fukushin - Shushin - Fukushin, com as bandeiras enroladas na mão direita (vermelha cobrindo a branca) ao lado do corpo.',
        durationSec: 1.8,
        holdSec: 0.8,
        getInitialTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const ySeat = courtSize / 2 + 1.0;
          const centerX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: centerX, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: centerX + 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: centerX - 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        },
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const heading = isLeft ? 0 : Math.PI;
          const sign = isLeft ? -1 : 1;
          const startX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: startX, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: startX + 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: startX - 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_mae',
        stepNumber: 2,
        totalSteps: 8,
        commandCall: 'Mae',
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Mae" do Shushin, o trio avança marchando em linha reta tangenciando a linha da quadra, mantendo a formação alinhada até atingir o centro da quadra.',
        durationSec: 2.4,
        holdSec: 0.8,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const heading = isLeft ? 0 : Math.PI;
          return {
            shushin: { x: 0, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_turn_court',
        stepNumber: 3,
        totalSteps: 8,
        commandCall: '',
        description: 'No centro e logo atrás da linha de limite da quadra, os 3 árbitros giram 90º simultaneamente no próprio eixo, voltando-se para o interior da quadra (direção do Shomen).',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        getTargets: (courtSize: number) => {
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          return {
            shushin: { x: 0, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_ippomae',
        stepNumber: 4,
        totalSteps: 8,
        commandCall: 'Ippomae',
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Ippomae" do Shushin, os 3 árbitros avançam para dentro da quadra (a aproximadamente 1m da linha), entrando com a passada direita-esquerda-direita.',
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
        totalSteps: 8,
        commandCall: 'Rei',
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Rei" do Shushin, todos os árbitros fazem saudação conjunta em direção ao Shomen / interior da quadra.',
        durationSec: 1.2,
        holdSec: 1.0,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true }
          };
        }
      },
      {
        id: 'entry_trapezoid_walk',
        stepNumber: 6,
        totalSteps: 8,
        commandCall: '',
        description: 'O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a direção do movimento pelas "pernas" do trapézio isósceles (por dentro dos kaishisen), em linha reta, até atingir sua posição final (a aproximadamente 1m da linha). Nesta posição, há uma distância de aproximadamente 4m entre os dois Fukushin (relação geométrica).',
        durationSec: 3.0,
        holdSec: 0.8,
        showTrapezoid: true,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0; // Distância fixa de 4.0m entre Fukushins
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
        totalSteps: 8,
        commandCall: '',
        description: 'Os Fukushin giram estritamente para dentro em direção ao centro da quadra, estabelecendo a formação Padrão do triângulo.',
        durationSec: 1.5,
        holdSec: 0.8,
        inwardTurn: true,
        showTrapezoid: true,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'entry_separate_flags',
        stepNumber: 8,
        totalSteps: 8,
        commandCall: '',
        description: 'Na posição Padrão, os 3 árbitros separam as bandeiras simultaneamente nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).',
        durationSec: 1.2,
        holdSec: 1.0,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
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
        totalSteps: 5,
        commandCall: '',
        description: 'Os árbitros juntam as bandeiras na mão direita ao lado do corpo, preparando-se para a rotação de posições.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getInitialTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false }
          };
        },
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_turn_dest',
        stepNumber: 2,
        totalSteps: 5,
        commandCall: '',
        description: 'Os árbitros giram no próprio eixo em direção ao próximo vértice do triângulo.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_walk',
        stepNumber: 3,
        totalSteps: 5,
        commandCall: '',
        description: 'Os 3 árbitros caminham em linha reta ao longo dos lados do triângulo isósceles em direção aos novos vértices, mantendo o olhar na direção da marcha.',
        durationSec: 2.8,
        holdSec: 0.5,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_turn_center',
        stepNumber: 4,
        totalSteps: 5,
        commandCall: '',
        description: 'Ao atingirem as novas posições, todos os árbitros giram no próprio eixo para dentro (sentido anti-horário) voltando-se para o centro da quadra.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'rot_separate_flags',
        stepNumber: 5,
        totalSteps: 5,
        commandCall: '',
        description: 'Os 3 árbitros separam simultaneamente as bandeiras nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).',
        durationSec: 1.2,
        holdSec: 1.0,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
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
        id: 'koutai_flags_right',
        stepNumber: 1,
        totalSteps: 8,
        commandCall: '',
        description: 'Os árbitros juntam as bandeiras na mão direita ao lado do corpo, preparando-se para a rotação de posições. O árbitro substituto aguarda ao lado de fora da quadra.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getInitialTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        },
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_turn_dest',
        stepNumber: 2,
        totalSteps: 8,
        commandCall: '',
        description: 'Os árbitros giram no próprio eixo em direção ao próximo vértice do triângulo.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: 0, y: yVertex, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_walk_dest',
        stepNumber: 3,
        totalSteps: 8,
        commandCall: '',
        description: 'Os 3 árbitros caminham em linha reta ao longo dos lados do triângulo isósceles em direção aos novos vértices, mantendo o olhar na direção da marcha.',
        durationSec: 2.8,
        holdSec: 0.6,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_reorient',
        stepNumber: 4,
        totalSteps: 8,
        commandCall: '',
        description: 'Ao atingirem as novas posições, os árbitros que se mantêm viram-se para o centro da quadra, enquanto o árbitro que sairá (sainte) vira-se para o entrante do lado de fora e enrola as bandeiras (branca por dentro, vermelha por fora).',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_sub_enter',
        stepNumber: 5,
        totalSteps: 8,
        commandCall: '',
        vocalizationType: 'SILENT_ACTION',
        actionNote: 'Entrada silenciosa do árbitro substituto',
        description: 'O árbitro substituto ingressa na quadra em direção ao sainte, sincronizando sua parada com o término do enrolar da bandeira pelo sainte.',
        durationSec: 2.4,
        holdSec: 0.8,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            substitute: { x: xBase + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_mutual_rei',
        stepNumber: 6,
        totalSteps: 8,
        commandCall: '',
        vocalizationType: 'SILENT_ACTION',
        actionNote: 'Saudação mútua silenciosa (Rei)',
        description: 'Os árbitros fazem saudação (Rei) entre eles.',
        durationSec: 1.2,
        holdSec: 1.0,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            substitute: { x: xBase + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true, isBowing: true }
          };
        }
      },
      {
        id: 'koutai_exit_backwards_swap',
        stepNumber: 7,
        totalSteps: 8,
        commandCall: '',
        description: 'O árbitro que está se retirando gira 90º no sentido horário e recua de costas (voltado para o interior da quadra) para fora da quadra, enquanto o substituto avança e assume a posição no triângulo.',
        durationSec: 2.5,
        holdSec: 0.8,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: -courtSize / 2 - 0.5, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            substitute: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_final_rei_separate',
        stepNumber: 8,
        totalSteps: 8,
        commandCall: '',
        vocalizationType: 'SILENT_ACTION',
        actionNote: 'Saudação à quadra e separação das shinpanki',
        description: 'O árbitro que está se retirando realiza a saudação (Rei) voltado para a quadra. Simultaneamente, os 3 árbitros na quadra separam as bandeiras nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).',
        durationSec: 1.5,
        holdSec: 1.2,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          return {
            shushin: { x: xBase, y: -courtSize / 2 - 0.5, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
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
        totalSteps: 7,
        commandCall: '',
        description: 'Ao término do combate e saudações dos competidores, todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro, vermelha por fora) e as mantêm na mão direita ao lado do corpo.',
        durationSec: 1.2,
        holdSec: 0.5,
        getInitialTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          const ySeat = courtSize / 2 + 1.0;
          const centerX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false },
            nextGroup: {
              shushin: { x: centerX, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: centerX + 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: centerX - 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
            }
          };
        },
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          const ySeat = courtSize / 2 + 1.0;
          const centerX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: true, flagsInRightHand: true },
            nextGroup: {
              shushin: { x: centerX, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: centerX + 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: centerX - 0.55, y: ySeat, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_trapezoid_return',
        stepNumber: 2,
        totalSteps: 7,
        commandCall: '',
        description: 'O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a marcha pelas "pernas" do trapézio até o Shushin. O novo grupo de árbitros levanta-se dos assentos e perfila-se na borda de entrada da quadra.',
        durationSec: 2.8,
        holdSec: 0.8,
        showTrapezoid: true,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          const angleF1Return = Math.atan2(yVertex - yBase, 0.65 - xBase);
          const angleF2Return = Math.atan2(yVertex - yBase, -0.65 - (-xBase));
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const nextHeading = isLeft ? 0 : Math.PI;
          const startX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: angleF1Return, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: angleF2Return, flagsRolled: true, flagsInRightHand: true },
            nextGroup: {
              shushin: { x: startX, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: startX + 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: startX - 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_turn_inward_align',
        stepNumber: 3,
        totalSteps: 7,
        commandCall: '',
        description: 'Ao chegarem ao lado do Shushin, ambos os Fukushin giram estritamente para dentro para ficarem voltados para a quadra, rigorosamente alinhados com o Shushin a aproximadamente 1m da linha.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = 2.0;
          const angleF1Return = Math.atan2(yVertex - yBase, 0.65 - xBase);
          const angleF2Return = Math.atan2(yVertex - yBase, -0.65 - (-xBase));
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const nextHeading = isLeft ? 0 : Math.PI;
          const startX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: {
              x: 0.65,
              y: yVertex,
              heading: -Math.PI / 2,
              headingDelta: (1.5 * Math.PI) - angleF1Return,
              flagsRolled: true,
              flagsInRightHand: true
            },
            fukushin2: {
              x: -0.65,
              y: yVertex,
              heading: -Math.PI / 2,
              headingDelta: -Math.PI / 2 - angleF2Return,
              flagsRolled: true,
              flagsInRightHand: true
            },
            nextGroup: {
              shushin: { x: startX, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: startX + 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: startX - 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_rei',
        stepNumber: 4,
        totalSteps: 7,
        commandCall: 'Rei',
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Rei" do Shushin, o trio que está saindo faz saudação ao Shomen / interior da quadra.',
        durationSec: 1.2,
        holdSec: 0.8,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const nextHeading = isLeft ? 0 : Math.PI;
          const startX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true, isBowing: true },
            nextGroup: {
              shushin: { x: startX, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: startX + 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: startX - 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_turn_sideways',
        stepNumber: 5,
        totalSteps: 7,
        commandCall: (cfg?: ProcedureConfig) => ((cfg?.seatsSide ?? 'LEFT') === 'LEFT' ? 'Hidari-muke' : 'Migi-muke'),
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Hidari-muke" (se os assentos estiverem à esquerda) ou "Migi-muke" (se à direita) do Shushin, os 3 árbitros giram 90º no próprio eixo, prontos para marchar em direção à saída.',
        durationSec: 1.0,
        holdSec: 0.6,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const heading = isLeft ? Math.PI : 0;
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const nextHeading = isLeft ? 0 : Math.PI;
          const startX = sign * (courtSize / 2 + 0.6);
          return {
            shushin: { x: 0, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            nextGroup: {
              shushin: { x: startX, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: startX + 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: startX - 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_march_straight',
        stepNumber: 6,
        totalSteps: 7,
        commandCall: 'Mae',
        vocalizationType: 'VOICE_LOW',
        description: 'Ao comando "Mae" do Shushin, o trio que encerra caminha em linha reta em direção à borda de saída da quadra. Simultaneamente, o novo grupo de árbitros, também ao comando de "Mae" do Shushin, avança pela lateral tangenciando a quadra até o centro de entrada.',
        durationSec: 2.6,
        holdSec: 0.8,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const yVertex = courtSize / 2 - 1.0;
          const heading = isLeft ? Math.PI : 0;
          const sign = isLeft ? -1 : 1;
          const exitX = sign * (courtSize / 2 + 0.3);
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;
          const nextHeading = isLeft ? 0 : Math.PI;
          return {
            shushin: { x: exitX, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: exitX + 0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: exitX - 0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            nextGroup: {
              shushin: { x: 0, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: 0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: -0.65, y: yMarch, heading: nextHeading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_sogo_ni_rei',
        stepNumber: 7,
        totalSteps: 7,
        commandCall: '',
        description: 'Assim que cruzam os limites da quadra, o trio que está saindo abre a formação de triângulo equilátero, viram-se entre si e realizam o Sogo-ni-rei, enquanto o novo trio está pronto no centro para iniciar.',
        durationSec: 1.5,
        holdSec: 1.5,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const cx = sign * (courtSize / 2 + 0.9);
          const cy = courtSize / 2 - 1.0;
          const R = 0.55;
          const sin60 = Math.sin(Math.PI / 3);
          const yBound = courtSize / 2;
          const yMarch = yBound + 0.45;

          const nextGroup = {
            shushin: { x: 0, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yMarch, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true }
          };

          if (isLeft) {
            const f2X = cx - 0.5 * R;
            const f2Y = cy - R * sin60;
            const sX = cx - 0.5 * R;
            const sY = cy + R * sin60;
            const f1X = cx + R;
            const f1Y = cy;

            return {
              shushin: { x: sX, y: sY, heading: Math.atan2(cy - sY, cx - sX), flagsRolled: true, flagsInRightHand: true, isBowing: true },
              fukushin1: { x: f1X, y: f1Y, heading: Math.PI, flagsRolled: true, flagsInRightHand: true, isBowing: true },
              fukushin2: { x: f2X, y: f2Y, heading: Math.atan2(cy - f2Y, cx - f2X), flagsRolled: true, flagsInRightHand: true, isBowing: true },
              nextGroup
            };
          } else {
            const f1X = cx + 0.5 * R;
            const f1Y = cy + R * sin60;
            const sX = cx + 0.5 * R;
            const sY = cy - R * sin60;
            const f2X = cx - R;
            const f2Y = cy;

            return {
              shushin: { x: sX, y: sY, heading: Math.atan2(cy - sY, cx - sX), flagsRolled: true, flagsInRightHand: true, isBowing: true },
              fukushin1: { x: f1X, y: f1Y, heading: Math.atan2(cy - f1Y, cx - f1X), flagsRolled: true, flagsInRightHand: true, isBowing: true },
              fukushin2: { x: f2X, y: f2Y, heading: 0, flagsRolled: true, flagsInRightHand: true, isBowing: true },
              nextGroup
            };
          }
        }
      }
    ]
  }
];
