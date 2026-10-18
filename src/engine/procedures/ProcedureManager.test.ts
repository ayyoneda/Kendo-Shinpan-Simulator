import { describe, it, expect, beforeEach } from 'vitest';
import { ProcedureManager } from './ProcedureManager';
import { SimulationStore } from '../State';

describe('ProcedureManager', () => {
  let store: SimulationStore;
  let manager: ProcedureManager;

  beforeEach(() => {
    store = new SimulationStore();
    manager = new ProcedureManager(store);
  });

  it('initializes on Chapter 1 (entry), Step 0 in paused state', () => {
    expect(manager.getCurrentChapter().id).toBe('entry');
    expect(manager.getCurrentStepIndex()).toBe(0);
    expect(manager.isPlaying()).toBe(false);
  });

  it('can advance to next step and retreat to previous step', () => {
    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(1);
    expect(manager.getCurrentStep().id).toBe('entry_mae');

    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(2);
    expect(manager.getCurrentStep().id).toBe('entry_ippomae');

    manager.prevStep();
    expect(manager.getCurrentStepIndex()).toBe(1);
  });

  it('can switch chapters and reset step index', () => {
    manager.setChapter('rotation');
    expect(manager.getCurrentChapter().id).toBe('rotation');
    expect(manager.getCurrentStepIndex()).toBe(0);

    manager.setChapter('exit');
    expect(manager.getCurrentChapter().id).toBe('exit');
    expect(manager.getCurrentStepIndex()).toBe(0);
  });

  it('interpolates positions smoothly over duration', () => {
    manager.setChapter('entry');
    manager.nextStep(); // on entry_mae
    manager.play();
    expect(manager.isPlaying()).toBe(true);

    const initialY = store.state.shushin.y;
    manager.update(0.5); // advance 0.5s
    expect(store.state.shushin.y).not.toBe(initialY);
  });

  it('auto-pauses at end of step when pauseOnStepComplete is true', () => {
    manager.setPauseOnStepComplete(true);
    manager.setChapter('entry');
    manager.nextStep(); // step 1 (entry_mae, duration 2.2s)
    manager.play();

    // Advance beyond duration
    manager.update(3.0);
    expect(manager.isPlaying()).toBe(false);
    expect(manager.getCurrentStepIndex()).toBe(1);
  });

  it('respects playback speed multiplier', () => {
    manager.setPlaybackSpeed(2.0);
    expect(manager.getPlaybackSpeed()).toBe(2.0);
  });
});
