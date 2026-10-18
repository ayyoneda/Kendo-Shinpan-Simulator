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
    expect(manager.getCurrentStep().id).toBe('entry_lineup');
    expect(manager.isPlaying()).toBe(false);
  });

  it('can advance to next step and retreat to previous step through canonical steps', () => {
    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(1);
    expect(manager.getCurrentStep().id).toBe('entry_mae');

    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(2);
    expect(manager.getCurrentStep().id).toBe('entry_turn_court');

    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(3);
    expect(manager.getCurrentStep().id).toBe('entry_ippomae');

    manager.prevStep();
    expect(manager.getCurrentStepIndex()).toBe(2);
    expect(manager.getCurrentStep().id).toBe('entry_turn_court');
  });

  it('can switch chapters and respect rotationVariant routing', () => {
    // Default REGULAR: 'rotation' chapter is active
    manager.setChapter('rotation');
    expect(manager.getCurrentChapter().id).toBe('rotation');
    expect(manager.getCurrentStepIndex()).toBe(0);

    // Switch to KOUTAI: active chapter switches to 'rotation_koutai'
    manager.setRotationVariant('KOUTAI');
    expect(manager.getCurrentChapter().id).toBe('rotation_koutai');

    // Switch to exit
    manager.setChapter('exit');
    expect(manager.getCurrentChapter().id).toBe('exit');
    expect(manager.getCurrentStepIndex()).toBe(0);

    // Going backwards from exit with KOUTAI goes to rotation_koutai
    manager.prevStep();
    expect(manager.getCurrentChapter().id).toBe('rotation_koutai');
  });

  it('supports seatsSide toggle (LEFT vs RIGHT)', () => {
    expect(manager.getSeatsSide()).toBe('LEFT');
    manager.setSeatsSide('RIGHT');
    expect(manager.getSeatsSide()).toBe('RIGHT');

    // On RIGHT side, Shushin starts at positive x
    expect(store.state.shushin.x).toBeGreaterThan(0);

    manager.setSeatsSide('LEFT');
    expect(store.state.shushin.x).toBeLessThan(0);
  });

  it('interpolates positions smoothly over duration', () => {
    manager.setChapter('entry');
    manager.nextStep(); // on entry_mae (moves laterally along X)
    manager.play();
    expect(manager.isPlaying()).toBe(true);

    const initialX = store.state.shushin.x;
    manager.update(0.5); // advance 0.5s
    expect(store.state.shushin.x).not.toBe(initialX);
  });

  it('auto-pauses at end of step when pauseOnStepComplete is true', () => {
    manager.setPauseOnStepComplete(true);
    manager.setChapter('entry');
    manager.nextStep(); // step 1 (entry_mae, duration 2.4s + hold 0.8s = 3.2s)
    manager.play();

    // Advance beyond duration + hold
    manager.update(3.5);
    expect(manager.isPlaying()).toBe(false);
    expect(manager.getCurrentStepIndex()).toBe(1);
  });

  it('respects playback speed multiplier', () => {
    manager.setPlaybackSpeed(2.0);
    expect(manager.getPlaybackSpeed()).toBe(2.0);
  });

  it('interpolates headingDelta properly during inward turn', () => {
    manager.setChapter('exit');
    // Step 0: exit_roll_flags
    // Step 1: exit_trapezoid_return
    // Step 2: exit_turn_inward_align
    manager.nextStep(); // step 1
    manager.nextStep(); // step 2 (exit_turn_inward_align)
    manager.play();

    const startH1 = store.state.fukushin1.heading ?? 0;
    const startH2 = store.state.fukushin2.heading ?? 0;

    manager.update(0.3); // partway through inward turn

    // F1 heading should have increased (clockwise), F2 should have decreased (counter-clockwise)
    expect(store.state.fukushin1.heading).toBeGreaterThan(startH1);
    expect(store.state.fukushin2.heading).toBeLessThan(startH2);
  });
});

