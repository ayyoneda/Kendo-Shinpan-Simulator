import { describe, it, expect } from 'vitest';
import type { ProcedureStep, ProcedureChapter, RefereeVisualState, ProcedureConfig } from './types';
import type { EngineState, SimulationMode } from '../types';

describe('Procedure Types Contract', () => {
  it('validates a minimal ProcedureStep structure with ProcedureConfig and didactic flags', () => {
    const config: ProcedureConfig = {
      seatsSide: 'LEFT',
      rotationVariant: 'KOUTAI'
    };
    expect(config.seatsSide).toBe('LEFT');
    expect(config.rotationVariant).toBe('KOUTAI');

    const refereeState: RefereeVisualState = {
      x: 0,
      y: 4,
      heading: 0,
      flagsRolled: true,
      flagsInRightHand: true
    };
    expect(refereeState.flagsInRightHand).toBe(true);

    const step: ProcedureStep = {
      id: 'test_step',
      stepNumber: 1,
      totalSteps: 5,
      commandCall: 'Mae!',
      description: 'Test march',
      durationSec: 2.0,
      showTrapezoid: true,
      showTriangle: true,
      getTargets: (courtSize: number, cfg?: ProcedureConfig) => {
        const side = cfg?.seatsSide ?? 'LEFT';
        const startX = side === 'LEFT' ? -5 : 5;
        return {
          shushin: { x: startX, y: courtSize / 2, heading: 0, flagsRolled: true },
          fukushin1: { x: startX + 0.65, y: courtSize / 2, heading: 0, flagsRolled: true },
          fukushin2: { x: startX - 0.65, y: courtSize / 2, heading: 0, flagsRolled: true }
        };
      }
    };
    expect(step.commandCall).toBe('Mae!');
    expect(step.showTrapezoid).toBe(true);
    expect(step.showTriangle).toBe(true);

    const leftTargets = step.getTargets(10, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    expect(leftTargets.shushin.x).toBe(-5);

    const rightTargets = step.getTargets(10, { seatsSide: 'RIGHT', rotationVariant: 'REGULAR' });
    expect(rightTargets.shushin.x).toBe(5);

    const chapter: ProcedureChapter = {
      id: 'test_chap',
      titleKey: 'test',
      titleDefault: 'Test Chapter',
      steps: [step]
    };
    expect(chapter.steps).toHaveLength(1);
  });

  it('validates SimulationMode and competitorsVisible on EngineState type', () => {
    const mode: SimulationMode = 'PROCEDURE';
    expect(mode).toBe('PROCEDURE');

    const stateStub: Partial<EngineState> = {
      simulationMode: mode,
      competitorsVisible: false
    };
    expect(stateStub.simulationMode).toBe('PROCEDURE');
    expect(stateStub.competitorsVisible).toBe(false);
  });
});
