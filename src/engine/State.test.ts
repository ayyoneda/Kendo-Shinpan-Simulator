import { describe, it, expect } from 'vitest';
import { SimulationStore } from './State';

describe('SimulationStore Procedures Extension', () => {
  it('initializes with COMBAT mode and competitors visible', () => {
    const store = new SimulationStore();
    expect(store.state.simulationMode).toBe('COMBAT');
    expect(store.state.competitorsVisible).toBe(true);
  });

  it('preserves mode and reset behavior cleanly', () => {
    const store = new SimulationStore();
    store.state.simulationMode = 'PROCEDURE';
    store.state.competitorsVisible = false;
    store.resetPositions();
    expect(store.state.simulationMode).toBe('COMBAT');
    expect(store.state.competitorsVisible).toBe(true);
  });
});
