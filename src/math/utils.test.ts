import { describe, it, expect } from 'vitest';
import { normalizeAngle, angleDiff, expDamp } from './utils';

describe('normalizeAngle', () => {
  it('should normalize angles to -180...180', () => {
    expect(normalizeAngle(190)).toBe(-170);
    expect(normalizeAngle(-190)).toBe(170);
    expect(normalizeAngle(360)).toBe(0);
    expect(normalizeAngle(450)).toBe(90);
  });
});

describe('angleDiff', () => {
  it('should return the shortest signed difference in radians', () => {
    // Math.PI = 180 degrees.
    // Diff from 0 to PI/2 is PI/2
    expect(angleDiff(0, Math.PI / 2)).toBeCloseTo(Math.PI / 2);
    // Diff from PI/2 to 0 is -PI/2
    expect(angleDiff(Math.PI / 2, 0)).toBeCloseTo(-Math.PI / 2);
    
    // Cross boundary:
    const a1 = 3 * Math.PI / 4; // 135 deg
    const a2 = -3 * Math.PI / 4; // -135 deg
    // 135 to -135 is shortest path: +90 deg or PI/2
    expect(angleDiff(a1, a2)).toBeCloseTo(Math.PI / 2);
  });
});

describe('expDamp', () => {
  it('should move curr towards target exponentially and return true if arrived', () => {
    const curr = { x: 0, y: 0 };
    const target = { x: 10, y: 0 };
    const k = 5.0;
    const dt = 0.1;
    
    const arrived1 = expDamp(curr, target, k, dt);
    expect(curr.x).toBeGreaterThan(0);
    expect(curr.x).toBeLessThan(10);
    expect(arrived1).toBe(false);

    // After many steps, it should arrive
    let arrived = false;
    for (let i = 0; i < 50; i++) {
      arrived = expDamp(curr, target, k, dt);
    }
    expect(arrived).toBe(true);
    expect(curr.x).toBeCloseTo(10);
  });
});
