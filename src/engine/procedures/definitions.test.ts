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

  it('verifies Chapter 2B Shinpan Koutai has 5 steps, substitute referee, and initial rotation walk', () => {
    const koutai = procedureChapters.find(c => c.id === 'rotation_koutai')!;
    const courtSize = 10;
    expect(koutai.steps).toHaveLength(5);

    // Step 1: flags in right hand
    const step1 = koutai.steps.find(s => s.id === 'koutai_flags_right')!;
    const targets1 = step1.getTargets(courtSize);
    expect(targets1.substitute).toBeDefined();
    expect(targets1.shushin.flagsInRightHand).toBe(true);
    expect(step1.showTriangle).toBe(true);

    // Step 2: initial rotation walk with Shushin facing incoming substitute directly
    const step2 = koutai.steps.find(s => s.id === 'koutai_rotate_walk')!;
    const targets2 = step2.getTargets(courtSize);
    expect(targets2.shushin.heading).toBeCloseTo(0); // facing incoming sub at border
    expect(targets2.shushin.flagsRolled).toBe(true);
    expect(step2.showTriangle).toBe(true);

    // All steps in Chapter 2B have showTriangle: true
    for (const s of koutai.steps) {
      expect(s.showTriangle).toBe(true);
    }
  });

  it('verifies Chapter 2A Regular Rotation plots triangle on all steps', () => {
    const rot = procedureChapters.find(c => c.id === 'rotation')!;
    expect(rot.steps).toHaveLength(3);
    for (const s of rot.steps) {
      expect(s.showTriangle).toBe(true);
    }
  });

  it('verifies Chapter 1 Entry maintains F2-S-F1 order, constant speed, and feet aligned behind line', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const courtSize = 10;
    const yBound = courtSize / 2;

    const lineupStep = entry.steps.find(s => s.id === 'entry_lineup')!;
    const maeStep = entry.steps.find(s => s.id === 'entry_mae')!;
    const turnCourtStep = entry.steps.find(s => s.id === 'entry_turn_court')!;

    const tLineup = lineupStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    const tMae = maeStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    const tTurn = turnCourtStep.getTargets(courtSize);

    // Order from left to right along X is Fukushin 2 < Shushin < Fukushin 1
    expect(tLineup.fukushin2.x).toBeLessThan(tLineup.shushin.x);
    expect(tLineup.shushin.x).toBeLessThan(tLineup.fukushin1.x);

    expect(tMae.fukushin2.x).toBeLessThan(tMae.shushin.x);
    expect(tMae.shushin.x).toBeLessThan(tMae.fukushin1.x);

    // Velocity / Distance traveled is identical for all 3 (no order swapping)
    const dxS = tMae.shushin.x - tLineup.shushin.x;
    const dxF1 = tMae.fukushin1.x - tLineup.fukushin1.x;
    const dxF2 = tMae.fukushin2.x - tLineup.fukushin2.x;
    expect(dxS).toBeCloseTo(dxF1, 2);
    expect(dxS).toBeCloseTo(dxF2, 2);

    // In turn_court, they stay aligned behind the boundary line (y > yBound)
    expect(tTurn.shushin.y).toBeGreaterThan(yBound);
    expect(tTurn.fukushin1.y).toBeCloseTo(tTurn.shushin.y, 2);
    expect(tTurn.fukushin2.y).toBeCloseTo(tTurn.shushin.y, 2);
  });

  it('verifies Chapter 3 Exit brings Fukushin back, plots trapezoid, bows in place, turns sideways, and marches straight', () => {
    const exit = procedureChapters.find(c => c.id === 'exit')!;
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4
    expect(exit.steps).toHaveLength(7);

    // Step 2: returns along trapezoid legs with showTrapezoid: true
    const returnStep = exit.steps.find(s => s.id === 'exit_trapezoid_return')!;
    expect(returnStep.showTrapezoid).toBe(true);
    const targetsReturn = returnStep.getTargets(courtSize);
    expect(targetsReturn.shushin.x).toBeCloseTo(0);
    expect(targetsReturn.shushin.y).toBeCloseTo(yVertex);
    expect(targetsReturn.fukushin1.x).toBeCloseTo(0.65);
    expect(targetsReturn.fukushin1.y).toBeCloseTo(yVertex);
    expect(targetsReturn.fukushin2.x).toBeCloseTo(-0.65);
    expect(targetsReturn.fukushin2.y).toBeCloseTo(yVertex);

    // Step 3: inward turn alignment
    const inwardStep = exit.steps.find(s => s.id === 'exit_turn_inward_align')!;
    const targetsInward = inwardStep.getTargets(courtSize);
    expect(targetsInward.fukushin1.headingDelta).toBeGreaterThan(0);
    expect(targetsInward.fukushin2.headingDelta).toBeLessThan(0);
    expect(targetsInward.shushin.y).toBeCloseTo(yVertex);
    expect(targetsInward.fukushin1.y).toBeCloseTo(yVertex);
    expect(targetsInward.fukushin2.y).toBeCloseTo(yVertex);

    // Step 4: Rei in place at yVertex (no stepback)
    const reiStep = exit.steps.find(s => s.id === 'exit_rei')!;
    const targetsRei = reiStep.getTargets(courtSize);
    expect(targetsRei.shushin.y).toBeCloseTo(yVertex);
    expect(targetsRei.fukushin1.y).toBeCloseTo(yVertex);
    expect(targetsRei.fukushin2.y).toBeCloseTo(yVertex);

    // Step 5: turn sideways in place at yVertex
    const turnStep = exit.steps.find(s => s.id === 'exit_turn_sideways')!;
    const targetsTurnLeft = turnStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    expect(targetsTurnLeft.shushin.heading).toBeCloseTo(Math.PI);
    expect(targetsTurnLeft.shushin.y).toBeCloseTo(yVertex);

    // Step 6: march straight along yVertex (1m from border)
    const marchStep = exit.steps.find(s => s.id === 'exit_march_straight')!;
    const targetsMarchLeft = marchStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    expect(targetsMarchLeft.shushin.y).toBeCloseTo(yVertex);
    expect(targetsMarchLeft.fukushin1.y).toBeCloseTo(yVertex);
    expect(targetsMarchLeft.fukushin2.y).toBeCloseTo(yVertex);
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

