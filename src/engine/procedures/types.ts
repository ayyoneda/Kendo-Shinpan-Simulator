export interface RefereeVisualState {
  x: number;
  y: number;
  heading?: number;
  flagsRolled?: boolean;
  flagsInRightHand?: boolean;
}

export interface ProcedureStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  commandCall?: string;
  description: string;
  durationSec: number;
  holdSec?: number;
  inwardTurn?: boolean;
  getTargets: (courtSize: number) => {
    shushin: RefereeVisualState;
    fukushin1: RefereeVisualState;
    fukushin2: RefereeVisualState;
    substitute?: RefereeVisualState;
  };
}

export interface ProcedureChapter {
  id: string;
  titleKey: string;
  titleDefault: string;
  steps: ProcedureStep[];
}
