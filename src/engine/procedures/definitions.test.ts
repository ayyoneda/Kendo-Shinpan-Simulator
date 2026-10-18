import { describe, it, expect } from 'vitest';
import { procedureChapters } from './definitions';

describe('Procedure Chapters Canonical Definitions V2', () => {
  it('contains the 4 official FIK chapter definitions', () => {
    expect(procedureChapters).toHaveLength(4);
    expect(procedureChapters.map(c => c.id)).toEqual(['entry', 'rotation', 'rotation_koutai', 'exit']);
  });

  it('guarantees Shushin stays anchored at vertex in Chapter 1 Steps 4 through 6', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4.0

    const step4 = entry.steps.find(s => s.id === 'entry_ippomae');
    const step5 = entry.steps.find(s => s.id === 'entry_rei');
    const step6 = entry.steps.find(s => s.id === 'entry_trapezoid_walk');

    expect(step4).toBeDefined();
    expect(step5).toBeDefined();
    expect(step6).toBeDefined();

    expect(step4!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step5!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step6!.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step6!.getTargets(courtSize).shushin.x).toBeCloseTo(0);
  });

  it('verifies Chapter 1 initial lineup respects LEFT and RIGHT seatsSide', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const courtSize = 10;

    const lineupStep = entry.steps.find(s => s.id === 'entry_lineup')!;
    const leftTargets = lineupStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    const rightTargets = lineupStep.getTargets(courtSize, { seatsSide: 'RIGHT', rotationVariant: 'REGULAR' });

    // LEFT side: x < 0, heading = 0 (facing right/east)
    expect(leftTargets.shushin.x).toBeLessThan(0);
    expect(leftTargets.shushin.heading).toBeCloseTo(0);

    // RIGHT side: x > 0, heading = Math.PI (facing left/west)
    expect(rightTargets.shushin.x).toBeGreaterThan(0);
    expect(rightTargets.shushin.heading).toBeCloseTo(Math.PI);
  });

  it('verifies Fukushin walk legs form trapezoid expanding from 1.30m to ~4.0m', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const courtSize = 10;
    const step4 = entry.steps.find(s => s.id === 'entry_ippomae')!;
    const step6 = entry.steps.find(s => s.id === 'entry_trapezoid_walk')!;

    const t4 = step4.getTargets(courtSize);
    const dist4 = Math.abs(t4.fukushin1.x - t4.fukushin2.x);
    expect(dist4).toBeCloseTo(1.30, 2);

    const t6 = step6.getTargets(courtSize);
    const dist6 = Math.abs(t6.fukushin1.x - t6.fukushin2.x);
    expect(dist6).toBeCloseTo(4.0, 1);
  });

  it('verifies Chapter 2 Regular Rotation completes a full 3-referee cycle', () => {
    const rot = procedureChapters.find(c => c.id === 'rotation')!;
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

  it('verifies Chapter 2B Shinpan Koutai involves substitute referee and rolled flags', () => {
    const koutai = procedureChapters.find(c => c.id === 'rotation_koutai')!;
    const courtSize = 10;
    const step1 = koutai.steps.find(s => s.id === 'koutai_walk_to_border')!;
    const targets1 = step1.getTargets(courtSize);

    expect(targets1.substitute).toBeDefined();
    expect(targets1.shushin.flagsRolled).toBe(true);
    expect(targets1.shushin.heading).toBeCloseTo(0); // facing border
  });

  it('verifies Chapter 3 Exit brings Fukushin back to 1.30m base and enforces strict inward turns', () => {
    const exit = procedureChapters.find(c => c.id === 'exit')!;
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4

    const returnStep = exit.steps.find(s => s.id === 'exit_trapezoid_return')!;
    const targetsReturn = returnStep.getTargets(courtSize);

    // Shushin is anchored at vertex line
    expect(targetsReturn.shushin.x).toBeCloseTo(0);
    expect(targetsReturn.shushin.y).toBeCloseTo(yVertex);

    // Fukushin returned beside Shushin
    expect(targetsReturn.fukushin1.x).toBeCloseTo(0.65);
    expect(targetsReturn.fukushin1.y).toBeCloseTo(yVertex);
    expect(targetsReturn.fukushin2.x).toBeCloseTo(-0.65);
    expect(targetsReturn.fukushin2.y).toBeCloseTo(yVertex);

    // Inward turn step
    const inwardStep = exit.steps.find(s => s.id === 'exit_turn_inward_align')!;
    const targetsInward = inwardStep.getTargets(courtSize);

    // F1 turns clockwise (positive headingDelta), F2 turns counter-clockwise (negative headingDelta)
    expect(targetsInward.fukushin1.headingDelta).toBeGreaterThan(0);
    expect(targetsInward.fukushin2.headingDelta).toBeLessThan(0);
  });

  it('verifies Chapter 3 Sogo-ni-rei forms an equilateral triangle outside near seats', () => {
    const exit = procedureChapters.find(c => c.id === 'exit')!;
    const courtSize = 10;

    const sogoStep = exit.steps.find(s => s.id === 'exit_sogo_ni_rei')!;
    const targets = sogoStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });

    // Center is outside the court boundary (courtSize/2 = 5.0)
    expect(targets.shushin.y).toBeGreaterThan(5.0);

    // Distances between all 3 referees form an equilateral triangle
    const dS_F1 = Math.hypot(targets.shushin.x - targets.fukushin1.x, targets.shushin.y - targets.fukushin1.y);
    const dS_F2 = Math.hypot(targets.shushin.x - targets.fukushin2.x, targets.shushin.y - targets.fukushin2.y);
    const dF1_F2 = Math.hypot(targets.fukushin1.x - targets.fukushin2.x, targets.fukushin1.y - targets.fukushin2.y);

    expect(dS_F1).toBeCloseTo(dS_F2, 2);
    expect(dS_F1).toBeCloseTo(dF1_F2, 2);
  });

  it('scales correctly for different court sizes (9m and 11m)', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const step6 = entry.steps.find(s => s.id === 'entry_trapezoid_walk')!;

    // 9m court
    const t9 = step6.getTargets(9);
    expect(t9.shushin.y).toBeCloseTo(3.5);
    expect(t9.fukushin1.x).toBeCloseTo(1.75);
    expect(t9.fukushin1.y).toBeCloseTo(-3.5);

    // 11m court
    const t11 = step6.getTargets(11);
    expect(t11.shushin.y).toBeCloseTo(4.5);
    expect(t11.fukushin1.x).toBeCloseTo(2.25);
    expect(t11.fukushin1.y).toBeCloseTo(-4.5);
  });
});

