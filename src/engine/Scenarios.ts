import { SimulationStore } from './State';

export type ScenarioPhase = {
  durationSec: number;
  getAngle: (t: number) => number;
  getDistance: (t: number) => number;
};

export const scenarios: Record<string, ScenarioPhase> = {
  '1A: Giro Lento 360º': {
    durationSec: 6.0,
    getAngle: (t) => (t / 6.0) * Math.PI * 2,
    getDistance: () => 2.5,
  },
  '1B: Teste Vertex': {
    durationSec: 5.0,
    getAngle: (t) => {
      const maxRad = 105 * (Math.PI / 180);
      if (t < 2.5) return (t / 2.5) * maxRad;
      return maxRad - ((t - 2.5) / 2.5) * maxRad;
    },
    getDistance: () => 2.5,
  },
  '1C: Teste S_BASE': {
    durationSec: 6.0,
    getAngle: (t) => {
      const maxRad = 130 * (Math.PI / 180);
      if (t < 3.0) return (t / 3.0) * maxRad;
      return maxRad - ((t - 3.0) / 3.0) * maxRad;
    },
    getDistance: () => 2.5,
  },
  '1D: Giro Reverso 360º': {
    durationSec: 6.0,
    getAngle: (t) => -(t / 6.0) * Math.PI * 2,
    getDistance: () => 2.5,
  },
  '2: Taiatari Swap': {
    durationSec: 1.0,
    getAngle: (t) => {
      if (t < 0.2) return 0;
      if (t < 0.7) return ((t - 0.2) / 0.5) * Math.PI;
      return Math.PI;
    },
    getDistance: () => 0.8,
  },
  '3: Tsubazeriai Pião': {
    durationSec: 1.5,
    getAngle: (t) => {
      if (t < 0.2) return 0;
      if (t < 1.2) return ((t - 0.2) / 1.0) * Math.PI * 2;
      return Math.PI * 2;
    },
    getDistance: () => 0.8,
  },
  '4: Inversão perto de 90º': {
    durationSec: 1.5,
    getAngle: (t) => {
      const base = 85 * (Math.PI / 180);
      if (t < 0.2) return base;
      if (t < 1.2) return base + ((t - 0.2) / 1.0) * Math.PI;
      return base + Math.PI;
    },
    getDistance: () => 0.8,
  },
  '5: Inversão perto de 135º': {
    durationSec: 1.5,
    getAngle: (t) => {
      const base = 130 * (Math.PI / 180);
      if (t < 0.2) return base;
      if (t < 1.2) return base + ((t - 0.2) / 1.0) * Math.PI;
      return base + Math.PI;
    },
    getDistance: () => 0.8,
  }
};

export class ScenarioRunner {
  private activeId: string | null = null;
  private startTs: number = 0;

  start(id: string, ts: number) {
    if (scenarios[id]) {
      this.activeId = id;
      this.startTs = ts;
    }
  }

  stop() {
    this.activeId = null;
  }

  update(store: SimulationStore, ts: number) {
    if (!this.activeId) return;
    const scenario = scenarios[this.activeId];
    const t = ts - this.startTs;

    if (t > scenario.durationSec) {
      this.activeId = null;
      return;
    }

    const ang = scenario.getAngle(t);
    const dist = scenario.getDistance(t);

    store.state.red.x = Math.cos(ang) * dist / 2;
    store.state.red.y = Math.sin(ang) * dist / 2;
    store.state.white.x = -Math.cos(ang) * dist / 2;
    store.state.white.y = -Math.sin(ang) * dist / 2;
  }

  isActive() {
    return this.activeId !== null;
  }
}
