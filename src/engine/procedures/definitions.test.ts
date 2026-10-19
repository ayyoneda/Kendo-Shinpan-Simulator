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

  it('verifies Chapter 1 Entry has 8 steps: step 7 turns inward and step 8 separates flags', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const courtSize = 10;
    expect(entry.steps).toHaveLength(8);

    const step7 = entry.steps[6];
    expect(step7.id).toBe('entry_turn_inward');
    const t7 = step7.getTargets(courtSize);
    // In step 7, they turned to center, but flags are STILL in right hand / rolled
    expect(t7.shushin.flagsInRightHand).toBe(true);
    expect(t7.fukushin1.flagsInRightHand).toBe(true);
    expect(t7.fukushin2.flagsInRightHand).toBe(true);

    const step8 = entry.steps[7];
    expect(step8.id).toBe('entry_separate_flags');
    const t8 = step8.getTargets(courtSize);
    // In step 8, flags are separated into both hands
    expect(t8.shushin.flagsInRightHand).toBe(false);
    expect(t8.shushin.flagsRolled).toBe(false);
    expect(t8.fukushin1.flagsInRightHand).toBe(false);
    expect(t8.fukushin1.flagsRolled).toBe(false);
    expect(t8.fukushin2.flagsInRightHand).toBe(false);
    expect(t8.fukushin2.flagsRolled).toBe(false);
  });

  it('verifies Chapter 2A Regular Rotation has 5 steps: flags right, turn dest, walk, turn center, separate flags', () => {
    const rot = procedureChapters.find(c => c.id === 'rotation')!;
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4
    const xBase = yVertex * 0.5; // 2
    const yBase = -yVertex; // -4
    expect(rot.steps).toHaveLength(5);

    // Step 1: flags to right hand (in place)
    const step1 = rot.steps[0];
    expect(step1.id).toBe('rot_flags_right');
    const t1 = step1.getTargets(courtSize);
    expect(t1.shushin.flagsInRightHand).toBe(true);

    // Step 2: turn to destination in place (no translation yet)
    const step2 = rot.steps[1];
    expect(step2.id).toBe('rot_turn_dest');
    const t2 = step2.getTargets(courtSize);
    expect(t2.shushin.x).toBeCloseTo(0);
    expect(t2.shushin.y).toBeCloseTo(yVertex);
    expect(t2.shushin.heading).toBeCloseTo(Math.atan2(yBase - yVertex, xBase - 0));
    expect(t2.fukushin1.x).toBeCloseTo(xBase);
    expect(t2.fukushin1.y).toBeCloseTo(yBase);
    expect(t2.fukushin1.heading).toBeCloseTo(Math.PI);

    // Step 3: translation along triangle sides
    const step3 = rot.steps[2];
    expect(step3.id).toBe('rot_walk');
    const t3 = step3.getTargets(courtSize);
    expect(t3.shushin.x).toBeCloseTo(xBase);
    expect(t3.shushin.y).toBeCloseTo(yBase);
    expect(t3.fukushin1.x).toBeCloseTo(-xBase);
    expect(t3.fukushin1.y).toBeCloseTo(yBase);
    expect(t3.fukushin2.x).toBeCloseTo(0);
    expect(t3.fukushin2.y).toBeCloseTo(yVertex);

    // Step 4: turn to center in place (flags still in right hand)
    const step4 = rot.steps[3];
    expect(step4.id).toBe('rot_turn_center');
    const t4 = step4.getTargets(courtSize);
    expect(t4.shushin.flagsInRightHand).toBe(true);
    expect(t4.shushin.heading).toBeCloseTo(Math.atan2(-yBase, -xBase));

    // Step 5: separate flags in both hands
    const step5 = rot.steps[4];
    expect(step5.id).toBe('rot_separate_flags');
    const t5 = step5.getTargets(courtSize);
    expect(t5.shushin.flagsInRightHand).toBe(false);
    expect(t5.fukushin1.flagsInRightHand).toBe(false);
    expect(t5.fukushin2.flagsInRightHand).toBe(false);

    for (const s of rot.steps) {
      expect(s.showTriangle).toBe(true);
    }
  });

  it('verifies Chapter 2B Shinpan Koutai has 7 steps with separated entrance, mutual rei, backward exit to top border, and final rei', () => {
    const koutai = procedureChapters.find(c => c.id === 'rotation_koutai')!;
    const courtSize = 10;
    const yVertex = courtSize / 2 - 1; // 4
    const xBase = yVertex * 0.5; // 2
    const yBase = -yVertex; // -4
    expect(koutai.steps).toHaveLength(7);

    // Step 1: flags in right hand, substitute waits outside
    const step1 = koutai.steps[0];
    expect(step1.id).toBe('koutai_flags_right');
    const t1 = step1.getTargets(courtSize);
    expect(t1.substitute).toBeDefined();
    expect(t1.substitute!.x).toBeGreaterThan(courtSize / 2);

    // Step 2: turn in place to destination
    const step2 = koutai.steps[1];
    expect(step2.id).toBe('koutai_turn_dest');
    const t2 = step2.getTargets(courtSize);
    expect(t2.shushin.x).toBeCloseTo(0);
    expect(t2.substitute!.x).toBeGreaterThan(courtSize / 2);

    // Step 3: walk and sainte turns to border; substitute still waits outside
    const step3 = koutai.steps[2];
    expect(step3.id).toBe('koutai_rotate_walk');
    const t3 = step3.getTargets(courtSize);
    expect(t3.shushin.x).toBeCloseTo(xBase);
    expect(t3.shushin.y).toBeCloseTo(yBase);
    expect(t3.shushin.heading).toBeCloseTo(0); // facing border
    expect(t3.substitute!.x).toBeGreaterThan(courtSize / 2); // still waiting outside!

    // Step 4: substitute enters and halts 1.2m in front
    const step4 = koutai.steps[3];
    expect(step4.id).toBe('koutai_sub_enter');
    expect(step4.commandCall).toBe('Koutai!');
    const t4 = step4.getTargets(courtSize);
    expect(t4.substitute!.x).toBeCloseTo(xBase + 1.2);

    // Step 5: mutual Rei
    const step5 = koutai.steps[4];
    expect(step5.id).toBe('koutai_mutual_rei');
    expect(step5.commandCall).toBe('Rei!');

    // Step 6: sainte exits backward to top border (y <= -5.0) and entrante takes position
    const step6 = koutai.steps[5];
    expect(step6.id).toBe('koutai_exit_backwards_swap');
    const t6 = step6.getTargets(courtSize);
    expect(t6.shushin.y).toBeLessThanOrEqual(-courtSize / 2); // top/back border
    expect(t6.shushin.heading).toBeCloseTo(Math.PI / 2); // facing down towards court
    expect(t6.substitute!.x).toBeCloseTo(xBase);
    expect(t6.substitute!.y).toBeCloseTo(yBase);

    // Step 7: sainte bows to court, 3 referees separate flags
    const step7 = koutai.steps[6];
    expect(step7.id).toBe('koutai_final_rei_separate');
    const t7 = step7.getTargets(courtSize);
    expect(t7.fukushin1.flagsInRightHand).toBe(false);
    expect(t7.fukushin2.flagsInRightHand).toBe(false);
    expect(t7.substitute!.flagsInRightHand).toBe(false);

    for (const s of koutai.steps) {
      expect(s.showTriangle).toBe(true);
    }
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

  it('verifies Chapter 3 Sogo-ni-rei forms an equilateral triangle right at the exit line', () => {
    const exit = procedureChapters.find(c => c.id === 'exit')!;
    const courtSize = 10;

    const sogoStep = exit.steps.find(s => s.id === 'exit_sogo_ni_rei')!;
    const targetsLeft = sogoStep.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });

    // Center is outside the court boundary (courtSize/2 = 5.0)
    expect(Math.abs(targetsLeft.shushin.x)).toBeGreaterThan(courtSize / 2);

    // Distances between all 3 referees form an equilateral triangle
    const dS_F1 = Math.hypot(targetsLeft.shushin.x - targetsLeft.fukushin1.x, targetsLeft.shushin.y - targetsLeft.fukushin1.y);
    const dS_F2 = Math.hypot(targetsLeft.shushin.x - targetsLeft.fukushin2.x, targetsLeft.shushin.y - targetsLeft.fukushin2.y);
    const dF1_F2 = Math.hypot(targetsLeft.fukushin1.x - targetsLeft.fukushin2.x, targetsLeft.fukushin1.y - targetsLeft.fukushin2.y);

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

  it('verifies Step 1.1 starts seated at the Shinpan-in seats and moves to initial lineup', () => {
    const entry = procedureChapters.find(c => c.id === 'entry')!;
    const step1 = entry.steps[0];
    const courtSize = 10;
    expect(step1.getInitialTargets).toBeDefined();

    const initial = step1.getInitialTargets!(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });
    const targets = step1.getTargets(courtSize, { seatsSide: 'LEFT', rotationVariant: 'REGULAR' });

    // Starts at the chairs (y = courtSize/2 + 1.0 = 6.0)
    expect(initial.shushin.y).toBeCloseTo(6.0);
    expect(initial.shushin.heading).toBeCloseTo(-Math.PI / 2);

    // Moves to the border lineup (y = courtSize/2 + 0.45 = 5.45)
    expect(targets.shushin.y).toBeCloseTo(5.45);
    expect(targets.shushin.heading).toBeCloseTo(0);
  });

  it('verifies Chapter 3 coordinates the incoming referee group from seats to court entrance', () => {
    const exit = procedureChapters.find(c => c.id === 'exit')!;
    const courtSize = 10;
    const cfg = { seatsSide: 'LEFT' as const, rotationVariant: 'REGULAR' as const };

    // Step 1: nextGroup is seated at chairs
    const step1 = exit.steps[0];
    const t1 = step1.getTargets(courtSize, cfg);
    expect(t1.nextGroup).toBeDefined();
    expect(t1.nextGroup!.shushin.y).toBeCloseTo(6.0);

    // Step 2: nextGroup stands up and lines up at the side border
    const step2 = exit.steps[1];
    const t2 = step2.getTargets(courtSize, cfg);
    expect(t2.nextGroup).toBeDefined();
    expect(t2.nextGroup!.shushin.y).toBeCloseTo(5.45);

    // Step 6: nextGroup marches along side border to the center (x = 0)
    const step6 = exit.steps[5];
    const t6 = step6.getTargets(courtSize, cfg);
    expect(t6.nextGroup).toBeDefined();
    expect(t6.nextGroup!.shushin.x).toBeCloseTo(0);
    expect(t6.nextGroup!.shushin.y).toBeCloseTo(5.45);

    // Step 7: nextGroup faces the court at center (heading = -PI/2)
    const step7 = exit.steps[6];
    const t7 = step7.getTargets(courtSize, cfg);
    expect(t7.nextGroup).toBeDefined();
    expect(t7.nextGroup!.shushin.heading).toBeCloseTo(-Math.PI / 2);
  });
});

