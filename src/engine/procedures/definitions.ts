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
        description: 'Os 3 árbitros levantam-se dos assentos de arbitragem (Shinpan-in seats) e perfilam-se lado a lado do lado de fora da quadra, na ordem Fukushin 2 - Shushin - Fukushin 1, com as bandeiras enroladas na mão direita (vermelha cobrindo a branca) ao lado do corpo.',
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
        commandCall: 'Mae!',
        description: 'Ao comando "Mae!", os 3 árbitros marcham na mesma velocidade, sem trocar de ordem (Fukushin 2 - Shushin - Fukushin 1), tangenciando a borda externa da quadra até o centro.',
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
        description: 'No centro da quadra, o trio gira para dentro virado para a quadra, mantendo os pés rigorosamente alinhados e logo atrás da linha externa.',
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
        totalSteps: 8,
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
        totalSteps: 8,
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
        totalSteps: 8,
        commandCall: '',
        description: 'Os Fukushin giram estritamente para dentro (Always turn inward) em direção ao centro da quadra, estabelecendo a formação Standard do triângulo. As bandeiras permanecem na mão direita ao lado do corpo.',
        durationSec: 1.5,
        holdSec: 0.8,
        inwardTurn: true,
        showTrapezoid: true,
        showTriangle: true,
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
        id: 'entry_separate_flags',
        stepNumber: 8,
        totalSteps: 8,
        commandCall: '',
        description: 'Na posição Standard, os 3 árbitros separam as bandeiras simultaneamente nas duas mãos (vermelha na direita, branca na esquerda). Formação inicial de combate concluída!',
        durationSec: 1.2,
        holdSec: 1.0,
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
        totalSteps: 5,
        commandCall: '',
        description: 'Ao final do tempo ou combate, todos os árbitros juntam ambas as bandeiras na mão direita sincronizadamente para iniciar a rotação triangular.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getInitialTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: false },
            fukushin1: { x: xBase, y: yBase, heading: Math.atan2(-yBase, -xBase), flagsRolled: false, flagsInRightHand: false },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: false }
          };
        },
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
        id: 'rot_turn_dest',
        stepNumber: 2,
        totalSteps: 5,
        commandCall: '',
        description: 'Antes de se deslocarem, os 3 árbitros giram no próprio lugar voltando-se rigorosamente para a direção do destino da rotação (sentido horário).',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        description: 'Marcha simultânea em linha reta pelos lados internos do triângulo no sentido horário até os novos postos: Shushin vai para F1, F1 para F2, e F2 assume o posto de Shushin.',
        durationSec: 2.8,
        holdSec: 0.5,
        showTriangle: true,
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
        id: 'rot_turn_center',
        stepNumber: 4,
        totalSteps: 5,
        commandCall: '',
        description: 'Nos novos postos, todos giram para dentro em direção ao centro da quadra, mantendo as duas bandeiras ainda na mão direita.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        description: 'Voltados para o centro, os 3 árbitros separam simultaneamente as bandeiras nas duas mãos. A rotação padrão está concluída!',
        durationSec: 1.2,
        holdSec: 1.0,
        showTriangle: true,
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
        id: 'koutai_flags_right',
        stepNumber: 1,
        totalSteps: 7,
        commandCall: '',
        description: 'Ao final do tempo ou combate, os árbitros juntam as duas bandeiras na mão direita sincronizadamente. O árbitro entrante aguarda do lado de fora da quadra.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getInitialTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
          const xBase = yVertex * 0.5;
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
        totalSteps: 7,
        commandCall: '',
        description: 'Antes de se deslocarem, os árbitros na quadra giram no lugar em direção ao destino. O árbitro entrante continua aguardando do lado de fora.',
        durationSec: 1.0,
        holdSec: 0.5,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: 0, y: yVertex, heading: Math.atan2(yBase - yVertex, xBase - 0), flagsRolled: false, flagsInRightHand: true },
            fukushin1: { x: xBase, y: yBase, heading: Math.PI, flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: -xBase, y: yBase, heading: Math.atan2(yVertex - yBase, 0 - (-xBase)), flagsRolled: false, flagsInRightHand: true },
            substitute: { x: courtSize / 2 + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_rotate_walk',
        stepNumber: 3,
        totalSteps: 7,
        commandCall: '',
        description: 'Marcha de rotação triangular: F2 assume o posto de Shushin, F1 vai para o posto de F2. O Shushin que sai caminha até o posto de F1, vira-se diretamente para a borda e começa a enrolar as bandeiras. O substituto permanece aguardando do lado de fora da quadra.',
        durationSec: 2.8,
        holdSec: 0.8,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        stepNumber: 4,
        totalSteps: 7,
        commandCall: 'Koutai!',
        description: 'O árbitro substituto ingressa na quadra em marcha reta em direção ao sainte, sincronizando sua parada com o término do enrolar da bandeira pelo sainte. Ambos param frente a frente a 1.2m de distância.',
        durationSec: 2.4,
        holdSec: 0.8,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        stepNumber: 5,
        totalSteps: 7,
        commandCall: 'Rei!',
        description: 'O árbitro sainte e o entrante realizam a saudação mútua (Rei) em sincronia, com as bandeiras posicionadas na mão direita.',
        durationSec: 1.2,
        holdSec: 1.0,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: yBase, heading: 0, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: -xBase, y: yBase, heading: Math.atan2(-yBase, xBase), flagsRolled: false, flagsInRightHand: true },
            fukushin2: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: false, flagsInRightHand: true },
            substitute: { x: xBase + 1.2, y: yBase, heading: Math.PI, flagsRolled: true, flagsInRightHand: true }
          };
        }
      },
      {
        id: 'koutai_exit_backwards_swap',
        stepNumber: 6,
        totalSteps: 7,
        commandCall: '',
        description: 'Após o rei, o sainte gira 90 graus no sentido horário e sai de costas em direção à borda do fundo (lado de cima na imagem), enquanto o entrante avança e toma a posição que o sainte ocupava.',
        durationSec: 2.5,
        holdSec: 0.8,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        stepNumber: 7,
        totalSteps: 7,
        commandCall: 'Rei!',
        description: 'O sainte, na borda externa, realiza a saudação (Rei) voltado para a quadra antes de se retirar. Simultaneamente, os 3 árbitros na quadra separam as bandeiras nas duas mãos de forma sincronizada.',
        durationSec: 1.5,
        holdSec: 1.2,
        showTriangle: true,
        getTargets: (courtSize: number) => {
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
          return {
            shushin: { x: xBase, y: -courtSize / 2 - 0.5, heading: Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
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
        description: 'Ao término do combate e saudações dos competidores, todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro, vermelha por fora) e as mantêm na mão direita ao lado do corpo. O próximo grupo de arbitragem aguarda sentado nos assentos.',
        durationSec: 1.2,
        holdSec: 0.5,
        getInitialTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
          const xBase = yVertex * 0.5;
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
        description: 'O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a marcha pelas pernas do trapézio até o Shushin. Simultaneamente, o novo grupo de árbitros levanta-se dos assentos e perfila-se na borda de entrada da quadra.',
        durationSec: 2.8,
        holdSec: 0.8,
        showTrapezoid: true,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        description: 'Ao chegarem ao lado do Shushin, ambos os Fukushin giram estritamente para dentro (Always turn inward) para ficarem voltados para a quadra, rigorosamente alinhados com o Shushin a 1m da linha. O novo grupo aguarda perfilado na borda.',
        durationSec: 1.2,
        holdSec: 0.8,
        inwardTurn: true,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const yVertex = courtSize / 2 - 1.0;
          const yBase = -yVertex;
          const xBase = yVertex * 0.5;
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
        commandCall: 'Rei!',
        description: 'Ao comando "Rei!", os 3 árbitros realizam a saudação final onde estão mesmo (no vértice, a 1m da linha), mantendo-se alinhados.',
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
            shushin: { x: 0, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: 0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: -0.65, y: yVertex, heading: -Math.PI / 2, flagsRolled: true, flagsInRightHand: true },
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
        commandCall: (cfg?: ProcedureConfig) => ((cfg?.seatsSide ?? 'LEFT') === 'LEFT' ? 'Hidari-muke!' : 'Migi-muke!'),
        description: 'Ao comando de virada ("Hidari-muke!" ou "Migi-muke!"), o trio gira 90º onde está mesmo (a 1m da linha da quadra), virando-se na direção de saída.',
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
        commandCall: 'Mae!',
        description: 'Ao comando "Mae!", o trio caminha em linha reta (a 1m da linha da quadra) até a linha de limite da quadra. Simultaneamente, o novo grupo avança marchando pela lateral até o centro.',
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
          return {
            shushin: { x: exitX, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin1: { x: exitX + 0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            fukushin2: { x: exitX - 0.65, y: yVertex, heading, flagsRolled: true, flagsInRightHand: true },
            nextGroup: {
              shushin: { x: 0, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: 0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: -0.65, y: yMarch, heading, flagsRolled: true, flagsInRightHand: true }
            }
          };
        }
      },
      {
        id: 'exit_sogo_ni_rei',
        stepNumber: 7,
        totalSteps: 7,
        commandCall: 'Sogo-ni-rei!',
        description: 'Assim que saem dos limites da quadra, o trio abre a formação de triângulo equilátero (primeiro abre 60º à direita, segundo 60º à esquerda e terceiro segue reto), viram-se entre si e realizam o Sogo-ni-rei, enquanto o novo trio está pronto no centro para iniciar.',
        durationSec: 1.5,
        holdSec: 1.5,
        getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
          const isLeft = (cfg?.seatsSide ?? 'LEFT') === 'LEFT';
          const sign = isLeft ? -1 : 1;
          const cx = sign * (courtSize / 2 + 0.9);
          const cy = courtSize / 2 - 1.0; // na mesma linha yVertex
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
            // Saindo pela esquerda (marcha para -x):
            // 1º (F2) abre 60º à sua direita (para -y)
            // 2º (Shushin) abre 60º à sua esquerda (para +y)
            // 3º (F1) segue reto (-x, mais próximo da linha)
            const f2X = cx - 0.5 * R;
            const f2Y = cy - R * sin60;
            const sX = cx - 0.5 * R;
            const sY = cy + R * sin60;
            const f1X = cx + R;
            const f1Y = cy;

            return {
              shushin: { x: sX, y: sY, heading: Math.atan2(cy - sY, cx - sX), flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: f1X, y: f1Y, heading: Math.PI, flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: f2X, y: f2Y, heading: Math.atan2(cy - f2Y, cx - f2X), flagsRolled: true, flagsInRightHand: true },
              nextGroup
            };
          } else {
            // Saindo pela direita (marcha para +x):
            // 1º (F1) abre 60º à sua direita (para +y)
            // 2º (Shushin) abre 60º à sua esquerda (para -y)
            // 3º (F2) segue reto (+x, mais próximo da linha)
            const f1X = cx + 0.5 * R;
            const f1Y = cy + R * sin60;
            const sX = cx + 0.5 * R;
            const sY = cy - R * sin60;
            const f2X = cx - R;
            const f2Y = cy;

            return {
              shushin: { x: sX, y: sY, heading: Math.atan2(cy - sY, cx - sX), flagsRolled: true, flagsInRightHand: true },
              fukushin1: { x: f1X, y: f1Y, heading: Math.atan2(cy - f1Y, cx - f1X), flagsRolled: true, flagsInRightHand: true },
              fukushin2: { x: f2X, y: f2Y, heading: 0, flagsRolled: true, flagsInRightHand: true },
              nextGroup
            };
          }
        }
      }
    ]
  }
];
