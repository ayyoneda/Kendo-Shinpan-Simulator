import type { EngineState, SimulationConfig } from './types';

export const defaultConfig: SimulationConfig = {
  speed: 8.0,
  turnRadius: 4.0,
  smoothK: 5.0,
  enterVertex: 90,
  exitVertex: 45,
  enterSBase: 123,
  exitSBase: 90,
  enterFlip: 135,
  exitFlip: 130,
  tsubaActiveDist: 1.2,
  freezeTimeMs: 300,
  freezeWindowMs: 200,
  freezeAngleRad: Math.PI * 0.5,
};

export class SimulationStore {
  public state: EngineState;

  constructor() {
    this.state = this.getInitialState();
  }

  public getInitialState(): EngineState {
    return {
      config: { ...defaultConfig },
      white: { x: -1.4, y: 0, radius: 0.4, color: '#ffffff', border: '#333', label: 'W', dragging: false },
      red:   { x: 1.4,  y: 0, radius: 0.4, color: '#cc0000', border: '#fff', label: 'R', dragging: false },
      shushin:   { x: 0,   y: 4,  color: '#2563eb', label: 'S',  radius: 0.3 },
      fukushin1: { x: 2.6, y: -4, color: '#fbbf24', label: 'F1', radius: 0.3 },
      fukushin2: { x: -2.6,y: -4, color: '#22c55e', label: 'F2', radius: 0.3 },
      formationMode: 'STANDARD',
      arbiterState: 'STABLE',
      flag: 1,
      formationScale: 1.0,
      angles: {
        shushinAbs: 0,
        fukushin1Abs: 0,
        fukushin2Abs: 0,
        combatRadSmoothed: 0
      }
    };
  }

  public resetPositions() {
    const init = this.getInitialState();
    this.state.white = init.white;
    this.state.red = init.red;
    this.state.shushin = init.shushin;
    this.state.fukushin1 = init.fukushin1;
    this.state.fukushin2 = init.fukushin2;
    this.state.formationMode = init.formationMode;
    this.state.arbiterState = init.arbiterState;
    this.state.flag = init.flag;
    this.state.formationScale = init.formationScale;
    this.state.angles = init.angles;
  }
}
