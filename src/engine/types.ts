import { Vector2D } from '../math/vector';

export type FormationMode = 'STANDARD' | 'VERTEX' | 'S_BASE';
export type ArbiterState = 'STABLE' | 'FROZEN';

export interface Fighter extends Vector2D {
  radius: number;
  color: string;
  border: string;
  label: string;
  dragging?: boolean;
}

export interface Referee extends Vector2D {
  radius: number;
  color: string;
  label: string;
}

export interface SimulationConfig {
  speed: number;
  turnRadius: number;
  smoothK: number;
  enterVertex: number;
  exitVertex: number;
  enterSBase: number;
  exitSBase: number;
  enterFlip: number;
  exitFlip: number;
  tsubaActiveDist: number;
  freezeTimeMs: number;
  freezeWindowMs: number;
  freezeAngleRad: number;
}

export interface EngineState {
  config: SimulationConfig;
  white: Fighter;
  red: Fighter;
  shushin: Referee;
  fukushin1: Referee;
  fukushin2: Referee;
  formationMode: FormationMode;
  arbiterState: ArbiterState;
  flag: number;
  formationScale: number;
  angles: {
    shushinAbs: number;
    fukushin1Abs: number;
    fukushin2Abs: number;
    combatRadSmoothed: number;
  };
}
