import { describe, it, expect } from 'vitest';
import { SimulationStore } from './State';
import { Engine } from './Engine';

describe('Engine', () => {
  it('should initialize correctly with default state', () => {
    const store = new SimulationStore();
    const engine = new Engine(store);

    expect(store.state.formationMode).toBe('STANDARD');
    expect(store.state.shushin.y).toBe(4);
    
    // Simulate first update
    engine.update(16);

    // Should stay stable initially
    expect(store.state.arbiterState).toBe('STABLE');
    expect(store.state.shushin.x).toBeCloseTo(0, 1);
  });

  it('should apply tsubazeriai constraint', () => {
    const store = new SimulationStore();
    const engine = new Engine(store);

    // Place fighters very close
    store.state.white.x = 0;
    store.state.white.y = 0;
    store.state.red.x = 0.2;
    store.state.red.y = 0;

    engine.update(16);

    const dx = store.state.red.x - store.state.white.x;
    const dy = store.state.red.y - store.state.white.y;
    const dist = Math.hypot(dx, dy);

    expect(dist).toBeGreaterThanOrEqual(0.8);
  });
});
