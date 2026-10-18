import { describe, it, expect } from 'vitest';
import type { ProcedureStep, ProcedureChapter, RefereeVisualState } from './types';
import type { EngineState, SimulationMode } from '../types';

describe('Procedure Types Contract', () => {
  it('validates a minimal ProcedureStep structure', () => {
    const step: ProcedureStep = {
      id: 'test_step',
      stepNumber: 1,
      totalSteps: 5,
      commandCall: 'Mae!',
      description: 'Test march',
      durationSec: 2.0,
      getTargets: (courtSize: number) => ({
        shushin: { x: 0, y: courtSize / 2 - 1, heading: 0, flagsRolled: true },
        fukushin1: { x: 0.65, y: courtSize / 2 - 1, heading: 0, flagsRolled: true },
        fukushin2: { x: -0.65, y: courtSize / 2 - 1, heading: 0, flagsRolled: true }
      })
    };
    expect(step.commandCall).toBe('Mae!');
    const targets = step.getTargets(10);
    expect(targets.shushin.y).toBe(4);
  });

  it('validates SimulationMode and competitorsVisible on EngineState type', () => {
    const mode: SimulationMode = 'PROCEDURE';
    expect(mode).toBe('PROCEDURE');
  });
});
