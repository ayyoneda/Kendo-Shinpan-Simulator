import { describe, it, expect } from 'vitest';
import { procedureChapters } from './definitions';

describe('Procedure Chapters Canonical Definitions', () => {
  it('contains the 3 official FIK chapters', () => {
    expect(procedureChapters).toHaveLength(3);
    expect(procedureChapters.map(c => c.id)).toEqual(['entry', 'rotation', 'exit']);
  });

  it('guarantees Shushin stays anchored at vertex in Chapter 1 Steps 3 through 5', () => {
    const entry = procedureChapters[0];
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4.0

    const step3 = entry.steps.find(s => s.id === 'entry_ippomae');
    const step4 = entry.steps.find(s => s.id === 'entry_rei');
    const step5 = entry.steps.find(s => s.id === 'entry_trapezoid_walk');

    expect(step3).toBeDefined();
    expect(step4).toBeDefined();
    expect(step5).toBeDefined();

    expect(step3!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step4!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step5!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step5!.getTargets(courtSize).shushin.x).toBeCloseTo(0);
  });

  it('verifies Fukushin walk legs form trapezoid expanding from 1.30m to ~4.0m', () => {
    const entry = procedureChapters[0];
    const courtSize = 10;
    const step3 = entry.steps.find(s => s.id === 'entry_ippomae')!;
    const step5 = entry.steps.find(s => s.id === 'entry_trapezoid_walk')!;

    const t3 = step3.getTargets(courtSize);
    const dist3 = Math.abs(t3.fukushin1.x - t3.fukushin2.x);
    expect(dist3).toBeCloseTo(1.30, 2);

    const t5 = step5.getTargets(courtSize);
    const dist5 = Math.abs(t5.fukushin1.x - t5.fukushin2.x);
    expect(dist5).toBeCloseTo(4.0, 1);
  });

  it('verifies Chapter 2 Rotation completes a full 3-referee cycle', () => {
    const rot = procedureChapters[1];
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4
    const xBase = yVertex * 0.5; // 2
    const yBase = -yVertex; // -4

    const rotWalk = rot.steps.find(s => s.id === 'rot_walk')!;
    const targets = rotWalk.getTargets(courtSize);

    // Shushin moved to Fukushin 1's position (+2, -4)
    expect(targets.shushin.x).toBeCloseTo(xBase);
    expect(targets.shushin.y).toBeCloseTo(yBase);

    // Fukushin 1 moved to Fukushin 2's position (-2, -4)
    expect(targets.fukushin1.x).toBeCloseTo(-xBase);
    expect(targets.fukushin1.y).toBeCloseTo(yBase);

    // Fukushin 2 moved to Shushin's vertex (0, 4)
    expect(targets.fukushin2.x).toBeCloseTo(0);
    expect(targets.fukushin2.y).toBeCloseTo(yVertex);
  });

  it('verifies Chapter 3 Exit brings Fukushin back to the 1.30m base beside Shushin', () => {
    const exit = procedureChapters[2];
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4

    const returnStep = exit.steps.find(s => s.id === 'exit_trapezoid_return')!;
    const targets = returnStep.getTargets(courtSize);

    // Shushin is still anchored at the vertex line
    expect(targets.shushin.x).toBeCloseTo(0);
    expect(targets.shushin.y).toBeCloseTo(yVertex);

    // Fukushin returned beside Shushin
    expect(targets.fukushin1.x).toBeCloseTo(0.65);
    expect(targets.fukushin1.y).toBeCloseTo(yVertex);
    expect(targets.fukushin2.x).toBeCloseTo(-0.65);
    expect(targets.fukushin2.y).toBeCloseTo(yVertex);

    const dist = Math.abs(targets.fukushin1.x - targets.fukushin2.x);
    expect(dist).toBeCloseTo(1.30, 2);
  });

  it('scales correctly for different court sizes (9m and 11m)', () => {
    const entry = procedureChapters[0];
    const step5 = entry.steps.find(s => s.id === 'entry_trapezoid_walk')!;

    // 9m court
    const t9 = step5.getTargets(9);
    expect(t9.shushin.y).toBeCloseTo(3.5);
    expect(t9.fukushin1.x).toBeCloseTo(1.75);
    expect(t9.fukushin1.y).toBeCloseTo(-3.5);

    // 11m court
    const t11 = step5.getTargets(11);
    expect(t11.shushin.y).toBeCloseTo(4.5);
    expect(t11.fukushin1.x).toBeCloseTo(2.25);
    expect(t11.fukushin1.y).toBeCloseTo(-4.5);
  });
});
