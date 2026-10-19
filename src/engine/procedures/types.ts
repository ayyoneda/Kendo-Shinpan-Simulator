export type ShinpanSeatsSide = 'LEFT' | 'RIGHT';
export type RotationVariant = 'REGULAR' | 'KOUTAI';

export interface ProcedureConfig {
  seatsSide: ShinpanSeatsSide;
  rotationVariant: RotationVariant;
}

export interface RefereeVisualState {
  x: number;
  y: number;
  heading?: number;
  headingDelta?: number;
  flagsRolled?: boolean;
  flagsInRightHand?: boolean;
}

export interface ProcedureStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  commandCall?: string | ((config?: ProcedureConfig) => string);
  description: string;
  durationSec: number;
  holdSec?: number;
  inwardTurn?: boolean;
  showTrapezoid?: boolean;
  showTriangle?: boolean;
  getInitialTargets?: (courtSize: number, config?: ProcedureConfig) => {
    shushin: RefereeVisualState;
    fukushin1: RefereeVisualState;
    fukushin2: RefereeVisualState;
    substitute?: RefereeVisualState;
    nextGroup?: {
      shushin: RefereeVisualState;
      fukushin1: RefereeVisualState;
      fukushin2: RefereeVisualState;
    };
  };
  getTargets: (courtSize: number, config?: ProcedureConfig) => {
    shushin: RefereeVisualState;
    fukushin1: RefereeVisualState;
    fukushin2: RefereeVisualState;
    substitute?: RefereeVisualState;
    nextGroup?: {
      shushin: RefereeVisualState;
      fukushin1: RefereeVisualState;
      fukushin2: RefereeVisualState;
    };
  };
}

export interface ProcedureChapter {
  id: string;
  titleKey: string;
  titleDefault: string;
  steps: ProcedureStep[];
}
