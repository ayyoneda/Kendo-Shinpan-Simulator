import { Vector2D } from './vector';

export const radToDeg = (rad: number): number => (rad * 180 / Math.PI);

export const normalizeAngle = (deg: number): number => {
  let angle = deg % 360;
  if (angle > 180) angle -= 360;
  else if (angle <= -180) angle += 360;
  return angle;
};

export function angleDiff(a: number, b: number): number {
  return Math.atan2(Math.sin(b - a), Math.cos(b - a));
}

export function moveAngleTowards(curr: number, target: number, maxDeltaRad: number): number {
  const d = angleDiff(curr, target);
  if (Math.abs(d) <= maxDeltaRad) return target;
  return curr + Math.sign(d) * maxDeltaRad;
}

export function expDamp(curr: Vector2D, target: Vector2D, k: number, dt: number): boolean {
  const factor = 1 - Math.exp(-k * dt);
  curr.x += (target.x - curr.x) * factor;
  curr.y += (target.y - curr.y) * factor;
  const dx = target.x - curr.x;
  const dy = target.y - curr.y;
  return (dx * dx + dy * dy) < 1e-6;
}

export function moveTowards(curr: Vector2D, target: Vector2D, maxDelta: number): boolean {
  const dx = target.x - curr.x;
  const dy = target.y - curr.y;
  const d = Math.hypot(dx, dy);
  if (d <= maxDelta || d === 0) {
    curr.x = target.x;
    curr.y = target.y;
    return true;
  }
  const s = maxDelta / d;
  curr.x += dx * s;
  curr.y += dy * s;
  return false;
}
