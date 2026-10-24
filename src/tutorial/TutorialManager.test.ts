import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TutorialManager } from './TutorialManager';
import { TUTORIAL_CHAPTERS, TUTORIAL_STEPS } from './tutorialSteps';
import type { TutorialStep } from './tutorialSteps';

describe('TutorialManager', () => {
  let manager: TutorialManager;
  let onStepChange: (step: TutorialStep) => void;
  let onFinish: () => void;
  let mockStepChange: ReturnType<typeof vi.fn>;
  let mockFinish: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockStepChange = vi.fn();
    mockFinish = vi.fn();
    onStepChange = mockStepChange as unknown as (step: TutorialStep) => void;
    onFinish = mockFinish as unknown as () => void;
    manager = new TutorialManager({
      chapters: TUTORIAL_CHAPTERS,
      steps: TUTORIAL_STEPS,
      translate: (key) => key,
      onStepChange,
      onFinish
    });
  });

  it('starts inactive', () => {
    expect(manager.isActive()).toBe(false);
    expect(manager.getCurrentStepIndex()).toBe(0);
  });

  it('starts at step 0 and triggers onStepChange', () => {
    manager.start();
    expect(manager.isActive()).toBe(true);
    expect(manager.getCurrentStepIndex()).toBe(0);
    expect(manager.getCurrentStep().id).toBe('step_welcome');
    expect(mockStepChange).toHaveBeenCalledWith(manager.getCurrentStep());
  });

  it('advances through steps with next() and retreats with prev()', () => {
    manager.start();
    manager.next();
    expect(manager.getCurrentStepIndex()).toBe(1);
    expect(manager.getCurrentStep().id).toBe('step_mode_switch');

    manager.next();
    expect(manager.getCurrentStepIndex()).toBe(2);

    manager.prev();
    expect(manager.getCurrentStepIndex()).toBe(1);
  });

  it('does not retreat past 0 with prev()', () => {
    manager.start();
    expect(manager.getCurrentStepIndex()).toBe(0);
    manager.prev();
    expect(manager.getCurrentStepIndex()).toBe(0);
  });

  it('can jump directly to a chapter', () => {
    manager.start();
    
    // Jump to procedures chapter
    const jumpedProc = manager.jumpToChapter('procedures');
    expect(jumpedProc).toBe(true);
    expect(manager.getCurrentChapter().id).toBe('procedures');
    expect(manager.getCurrentStep().chapterId).toBe('procedures');
    expect(manager.getCurrentStep().id).toBe('step_proc_panel');

    // Jump to combat chapter
    const jumpedCombat = manager.jumpToChapter('combat');
    expect(jumpedCombat).toBe(true);
    expect(manager.getCurrentChapter().id).toBe('combat');
    expect(manager.getCurrentStep().chapterId).toBe('combat');
    expect(manager.getCurrentStep().id).toBe('step_combat_intro');
  });

  it('can start directly at a specific chapter', () => {
    manager.start('combat');
    expect(manager.isActive()).toBe(true);
    expect(manager.getCurrentChapter().id).toBe('combat');
    expect(manager.getCurrentStep().id).toBe('step_combat_intro');
  });

  it('triggers onFinish when advancing past the final step', () => {
    manager.start();
    const totalSteps = TUTORIAL_STEPS.length;
    manager.jumpToStep(totalSteps - 1);
    expect(manager.getCurrentStepIndex()).toBe(totalSteps - 1);

    manager.next();
    expect(mockFinish).toHaveBeenCalledTimes(1);
    expect(manager.isActive()).toBe(false);
  });

  it('stops and cleans up when stop() is called', () => {
    manager.start();
    expect(manager.isActive()).toBe(true);

    manager.stop();
    expect(manager.isActive()).toBe(false);
  });
});
