import { SimulationStore } from './State';
import type { Vector2D } from '../math/vector';
import { radToDeg, normalizeAngle, angleDiff, moveAngleTowards, expDamp, moveTowards } from '../math/utils';
import type { FormationMode } from './types';

const D_REF = 4;
const ANGLE_LOCAL_BASE = 33 * Math.PI / 180;
const POS_X_LOCAL = D_REF * Math.sin(ANGLE_LOCAL_BASE);
const POS_Y_LOCAL = D_REF * Math.cos(ANGLE_LOCAL_BASE);

export const FORMATION_STANDARD = { shushin:{x:0,y:4}, fukushin1:{x:2.6,y:-4}, fukushin2:{x:-2.6,y:-4} };
export const FORMATION_F1_VERTEX = { shushin:{x:POS_X_LOCAL,y:POS_Y_LOCAL}, fukushin1:{x:0,y:-D_REF}, fukushin2:{x:-POS_X_LOCAL,y:POS_Y_LOCAL} };
export const FORMATION_F2_VERTEX = { shushin:{x:-POS_X_LOCAL,y:POS_Y_LOCAL}, fukushin1:{x:POS_X_LOCAL,y:POS_Y_LOCAL}, fukushin2:{x:0,y:-D_REF} };
export const FORMATION_F2_VERTEX_S_BASE = { shushin:{x:POS_X_LOCAL,y:-POS_Y_LOCAL}, fukushin1:{x:-POS_X_LOCAL,y:-POS_Y_LOCAL}, fukushin2:{x:0,y:D_REF} };
export const FORMATION_F1_VERTEX_S_BASE = { shushin:{x:-POS_X_LOCAL,y:-POS_Y_LOCAL}, fukushin1:{x:0,y:D_REF}, fukushin2:{x:POS_X_LOCAL,y:-POS_Y_LOCAL} };

const HALF_COURT = 5;
const KAISHISEN_DIST = 1.4;
const SAFETY_MARGIN = 1.5;
const REFEREE_FIGHTER_MIN_DIST = 1.0;
const TSUBA_MIN_DIST = 0.8;

const FLIP_CONFIRM_MS = 180;
const FLIP_COOLDOWN_MS = 450;
const FLIP_HOLD_RESET_FRAMES = 4;

export class Engine {
  public store: SimulationStore;
  
  // Internal state not serialized
  private freezeUntilTs = 0;
  private lastCombatAngle: number | null = null;
  private arbiterFrozen = false;
  private combatAngleAccum = 0;
  private lastFreezeCheckTs = 0;
  
  private targetAngle = 0;
  private lastTs: number | null = null;
  
  // Flip State
  private flipState = {
    active: false,
    toFlag: 2,
    toAngle: 0,
    toWorld: null as any,
    waypoints: null as any,
    waypointDone: false
  };
  
  private flipHoldStartTs: number | null = null;
  private flipCooldownUntilTs = 0;
  private lastFlipRawAngle: number | null = null;
  private flipBelowExitFrames = 0;
  private spinLockUntilTs = 0;

  constructor(store: SimulationStore) {
    this.store = store;
  }

  public update(ts: number) {
    if (this.lastTs === null) this.lastTs = ts;
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;

    this.applyTsubazeriaiConstraint();
    this.updateArbiterFreeze(ts);

    if (!this.arbiterFrozen) {
      this.updateReferees(dt, ts);
    }
  }

  private applyTsubazeriaiConstraint() {
    const { state } = this.store;
    const dx = state.red.x - state.white.x;
    const dy = state.red.y - state.white.y;
    const d = Math.hypot(dx, dy);
    if (d === 0 || d >= TSUBA_MIN_DIST) return;

    const mx = (state.red.x + state.white.x) / 2;
    const my = (state.red.y + state.white.y) / 2;
    const nx = dx / d;
    const ny = dy / d;
    const h = TSUBA_MIN_DIST / 2;

    state.white.x = mx - nx * h;
    state.white.y = my - ny * h;
    state.red.x = mx + nx * h;
    state.red.y = my + ny * h;
  }

  private updateArbiterFreeze(ts: number) {
    const { state } = this.store;
    const dx = state.red.x - state.white.x;
    const dy = state.red.y - state.white.y;
    const dist = Math.hypot(dx, dy);

    if (dist > state.config.tsubaActiveDist) {
      this.arbiterFrozen = false;
      state.arbiterState = 'STABLE';
      this.lastCombatAngle = null;
      this.combatAngleAccum = 0;
      this.lastFreezeCheckTs = ts;
      return;
    }

    const ang = Math.atan2(dy, dx);

    if (this.arbiterFrozen) {
      if (ts > this.freezeUntilTs) {
        this.arbiterFrozen = false;
        state.arbiterState = 'STABLE';
        this.combatAngleAccum = 0;
        this.lastFreezeCheckTs = ts;
      }
      this.lastCombatAngle = ang;
      return;
    }

    if (this.lastCombatAngle === null) {
      this.lastCombatAngle = ang;
      this.combatAngleAccum = 0;
      this.lastFreezeCheckTs = ts;
      return;
    }

    const da = Math.abs(angleDiff(this.lastCombatAngle, ang));
    this.combatAngleAccum += da;

    if (ts - this.lastFreezeCheckTs > state.config.freezeWindowMs) {
      this.combatAngleAccum = 0;
      this.lastFreezeCheckTs = ts;
    }

    if (this.combatAngleAccum > state.config.freezeAngleRad) {
      this.arbiterFrozen = true;
      state.arbiterState = 'FROZEN';
      this.freezeUntilTs = ts + state.config.freezeTimeMs;
      this.cancelFlip();
      this.combatAngleAccum = 0;
      this.lastFreezeCheckTs = ts;
    }

    this.lastCombatAngle = ang;
  }

  private cancelFlip() {
    this.flipState.active = false;
    this.flipState.toWorld = null;
    this.flipState.waypoints = null;
    this.flipState.waypointDone = false;
    this.flipHoldStartTs = null;
    this.lastFlipRawAngle = null;
    this.flipBelowExitFrames = 0;
  }

  private updateReferees(dt: number, ts: number) {
    const { state } = this.store;
    const midX = (state.white.x + state.red.x) / 2;
    const midY = (state.white.y + state.red.y) / 2;

    const dxWorld = state.red.x - state.white.x;
    const dyWorld = state.red.y - state.white.y;
    const fighterDist = Math.hypot(dxWorld, dyWorld);

    const REF_MOVE_SPEED = state.config.speed;
    const REF_ANG_SPEED = state.config.speed / Math.max(0.1, state.config.turnRadius);

    const maxStep = REF_MOVE_SPEED * dt;
    const maxAng = REF_ANG_SPEED * dt;
    const fighters = [state.white, state.red];

    const pre = this.computeCombatAngles(
      this.flipState.active ? this.flipState.toFlag : state.flag,
      dxWorld, dyWorld
    );

    if (this.flipState.active) {
      this.processFlipState(dt, ts, pre, midX, midY, fighterDist, maxStep, maxAng, fighters);
      return;
    }

    let axisAngVel = 0;
    if (this.lastFlipRawAngle !== null && dt > 0) {
      axisAngVel = Math.abs(angleDiff(this.lastFlipRawAngle, pre.combatRadTarget)) / dt;
    }
    this.lastFlipRawAngle = pre.combatRadTarget;

    const SPIN_LOCK_ANGVEL = 2.5; // ~140 deg/s
    const SPIN_LOCK_LINGER_MS = 200;
    if (axisAngVel > SPIN_LOCK_ANGVEL) {
      this.spinLockUntilTs = ts + SPIN_LOCK_LINGER_MS;
    }
    const isSpinLocked = ts < this.spinLockUntilTs;

    const rawAngle = pre.combatRadTarget;
    const absDeg = Math.abs(pre.combatDegRaw);
    
    // Frontal sweep distance (linear distance without wrapping around the back)
    let tgtDeg = radToDeg(this.targetAngle) % 360;
    if (tgtDeg > 180) tgtDeg -= 360;
    if (tgtDeg < -180) tgtDeg += 360;
    
    const dAngToTargetDeg = radToDeg(angleDiff(this.targetAngle, rawAngle));
    const crossedBack = Math.abs(tgtDeg + dAngToTargetDeg) > 180;

    const wantsFlip = (absDeg > state.config.enterFlip) || crossedBack;
    const canExitFlip = (absDeg < state.config.exitFlip) && !crossedBack;

    if (canExitFlip) {
      this.flipBelowExitFrames++;
      if (this.flipBelowExitFrames >= FLIP_HOLD_RESET_FRAMES) {
        this.flipHoldStartTs = null;
      }
    } else {
      this.flipBelowExitFrames = 0;
    }

    const canConsiderFlip = (ts >= this.flipCooldownUntilTs);

    if (!isSpinLocked && canConsiderFlip && wantsFlip) {
      if (this.flipHoldStartTs === null) this.flipHoldStartTs = ts;
    }

    const isFlipConfirming = this.flipHoldStartTs !== null;

    if (!isSpinLocked && !isFlipConfirming) {
      const dAng = angleDiff(this.targetAngle, rawAngle);
      this.targetAngle += dAng * (1 - Math.exp(-state.config.smoothK * dt));
    }

    const { activeFormation, mode } = this.computeRefereeFormation(this.targetAngle, state.formationMode);

    if (!isSpinLocked && !isFlipConfirming) {
      state.formationMode = mode;
    }

    if (!isSpinLocked && canConsiderFlip && wantsFlip) {

      if (this.flipHoldStartTs !== null && (ts - this.flipHoldStartTs) >= FLIP_CONFIRM_MS) {
        this.flipHoldStartTs = null;
        this.flipCooldownUntilTs = ts + FLIP_COOLDOWN_MS;

          this.flipState.active = true;
          this.flipState.toFlag = state.flag + 1;
          this.flipState.toAngle = pre.combatRadTarget + Math.PI;
          this.flipState.toAngle = Math.atan2(Math.sin(this.flipState.toAngle), Math.cos(this.flipState.toAngle));

          const ca2 = Math.cos(this.flipState.toAngle);
          const sa2 = Math.sin(this.flipState.toAngle);

          this.flipState.toWorld = {
            shushin: this.transformLocalToWorld(FORMATION_STANDARD.shushin, midX, midY, ca2, sa2),
            fukushin1: this.transformLocalToWorld(FORMATION_STANDARD.fukushin1, midX, midY, ca2, sa2),
            fukushin2: this.transformLocalToWorld(FORMATION_STANDARD.fukushin2, midX, midY, ca2, sa2)
          };

          const AVOID_RADIUS = 1.2;
          let needsWaypoint = false;
          const refs = ['shushin', 'fukushin1', 'fukushin2'] as const;
          
          for (const rk of refs) {
            if (this.segmentIntersectsCircle(
              state[rk].x, state[rk].y,
              this.flipState.toWorld[rk].x, this.flipState.toWorld[rk].y,
              midX, midY, AVOID_RADIUS
            )) {
              needsWaypoint = true;
              break;
            }
          }

          if (needsWaypoint) {
            this.flipState.waypoints = {} as any;
            for (const rk of refs) {
              if (this.segmentIntersectsCircle(
                state[rk].x, state[rk].y,
                this.flipState.toWorld[rk].x, this.flipState.toWorld[rk].y,
                midX, midY, AVOID_RADIUS
              )) {
                this.flipState.waypoints[rk] = this.arcWaypoint(
                  state[rk].x, state[rk].y,
                  this.flipState.toWorld[rk].x, this.flipState.toWorld[rk].y,
                  midX, midY, AVOID_RADIUS + 0.3
                );
              } else {
                this.flipState.waypoints[rk] = { ...this.flipState.toWorld[rk] };
              }
            }
            this.flipState.waypointDone = false;
          } else {
            this.flipState.waypoints = null;
            this.flipState.waypointDone = false;
          }
          return;
        }
      }



    const ca_tgt = Math.cos(this.targetAngle);
    const sa_tgt = Math.sin(this.targetAngle);

    const fScale = this.computeFormationScale(fighterDist);
    state.formationScale = fScale;
    
    const scaledTf = this.scaleFormation(activeFormation, fScale);

    let tgtS = this.transformLocalToWorld(scaledTf.shushin, midX, midY, ca_tgt, sa_tgt);
    let tgtF1 = this.transformLocalToWorld(scaledTf.fukushin1, midX, midY, ca_tgt, sa_tgt);
    let tgtF2 = this.transformLocalToWorld(scaledTf.fukushin2, midX, midY, ca_tgt, sa_tgt);

    tgtS = this.applyCollisionAvoidance(tgtS, fighters);
    tgtF1 = this.applyCollisionAvoidance(tgtF1, fighters);
    tgtF2 = this.applyCollisionAvoidance(tgtF2, fighters);

    tgtS = this.softClampPos(tgtS);
    tgtF1 = this.softClampPos(tgtF1);
    tgtF2 = this.softClampPos(tgtF2);

    expDamp(state.shushin, tgtS, state.config.smoothK, dt);
    expDamp(state.fukushin1, tgtF1, state.config.smoothK, dt);
    expDamp(state.fukushin2, tgtF2, state.config.smoothK, dt);

    if (!isSpinLocked) {
      state.angles.combatRadSmoothed = moveAngleTowards(
        state.angles.combatRadSmoothed,
        rawAngle,
        maxAng
      );
    }

    this.updateRefereeAngles(midX, midY);
  }

  private processFlipState(
    _dt: number, _ts: number, pre: any,
    midX: number, midY: number, fighterDist: number,
    maxStep: number, maxAng: number, fighters: Vector2D[]
  ) {
    const { state } = this.store;
    this.flipHoldStartTs = null;
    this.lastFlipRawAngle = null;
    this.flipBelowExitFrames = 0;

    this.flipState.toAngle = pre.combatRadTarget;
    const ca2 = Math.cos(this.flipState.toAngle);
    const sa2 = Math.sin(this.flipState.toAngle);
    const fScale = this.computeFormationScale(fighterDist);
    state.formationScale = fScale;
    const scaledTf = this.scaleFormation(FORMATION_STANDARD, fScale);

    this.flipState.toWorld = {
      shushin: this.softClampPos(this.applyCollisionAvoidance(this.transformLocalToWorld(scaledTf.shushin, midX, midY, ca2, sa2), fighters)),
      fukushin1: this.softClampPos(this.applyCollisionAvoidance(this.transformLocalToWorld(scaledTf.fukushin1, midX, midY, ca2, sa2), fighters)),
      fukushin2: this.softClampPos(this.applyCollisionAvoidance(this.transformLocalToWorld(scaledTf.fukushin2, midX, midY, ca2, sa2), fighters))
    };

    if (this.flipState.waypoints && !this.flipState.waypointDone) {
      const wp = this.flipState.waypoints;
      const doneS = moveTowards(state.shushin, wp.shushin, maxStep);
      const doneF1 = moveTowards(state.fukushin1, wp.fukushin1, maxStep);
      const doneF2 = moveTowards(state.fukushin2, wp.fukushin2, maxStep);
      if (doneS && doneF1 && doneF2) this.flipState.waypointDone = true;
    } else {
      state.angles.combatRadSmoothed = moveAngleTowards(
        state.angles.combatRadSmoothed,
        this.flipState.toAngle,
        maxAng
      );

      const okS = moveTowards(state.shushin, this.flipState.toWorld.shushin, maxStep);
      const okF1 = moveTowards(state.fukushin1, this.flipState.toWorld.fukushin1, maxStep);
      const okF2 = moveTowards(state.fukushin2, this.flipState.toWorld.fukushin2, maxStep);

      const angOk = Math.abs(angleDiff(state.angles.combatRadSmoothed, this.flipState.toAngle)) < 1e-4;

      if (okS && okF1 && okF2 && angOk) {
        this.flipState.active = false;
        this.flipState.waypoints = null;
        this.flipState.waypointDone = false;
        state.flag = this.flipState.toFlag;
        state.formationMode = 'STANDARD';
        this.targetAngle = this.flipState.toAngle;
      }
    }
    this.updateRefereeAngles(midX, midY);
  }

  private updateRefereeAngles(midX: number, midY: number) {
    const { state } = this.store;
    state.angles.shushinAbs = normalizeAngle(radToDeg(Math.atan2(state.shushin.y - midY, state.shushin.x - midX)));
    state.angles.fukushin1Abs = normalizeAngle(radToDeg(Math.atan2(state.fukushin1.y - midY, state.fukushin1.x - midX)));
    state.angles.fukushin2Abs = normalizeAngle(radToDeg(Math.atan2(state.fukushin2.y - midY, state.fukushin2.x - midX)));
  }

  private computeCombatAngles(flagCandidate: number, dxWorld: number, dyWorld: number) {
    const dx = (flagCandidate % 2 === 1) ? dxWorld : -dxWorld;
    const dy = (flagCandidate % 2 === 1) ? dyWorld : -dyWorld;
    const combatRadTarget = Math.atan2(dy, dx);
    const combatDegRaw = radToDeg(combatRadTarget);
    return { combatRadTarget, combatDegRaw };
  }

  private computeRefereeFormation(targetAngleRad: number, prevMode: FormationMode) {
    const tgtDeg = radToDeg(targetAngleRad);
    const absA = Math.abs(tgtDeg);
    let mode = prevMode;
    const { config } = this.store.state;

    if (absA <= config.enterFlip) {
      if (mode === 'S_BASE') {
        if (absA <= config.exitSBase) mode = 'VERTEX';
      } else {
        if (absA >= config.enterSBase) mode = 'S_BASE';
      }

      if (mode !== 'S_BASE') {
        if (mode === 'VERTEX') {
          if (absA < config.exitVertex) mode = 'STANDARD';
        } else {
          if (absA > config.enterVertex) mode = 'VERTEX';
        }
      }
    }

    let activeFormation;
    if (mode === 'STANDARD') activeFormation = FORMATION_STANDARD;
    else if (mode === 'VERTEX') activeFormation = (tgtDeg > 0) ? FORMATION_F1_VERTEX : FORMATION_F2_VERTEX;
    else activeFormation = (tgtDeg > 0) ? FORMATION_F2_VERTEX_S_BASE : FORMATION_F1_VERTEX_S_BASE;

    return { activeFormation, mode };
  }

  private computeFormationScale(fighterDist: number) {
    const nominal = KAISHISEN_DIST * 2;
    const rawScale = Math.min(1.0, fighterDist / nominal);
    return 0.85 + 0.15 * rawScale;
  }

  private scaleFormation(tf: Record<string, Vector2D>, scale: number) {
    return {
      shushin: { x: tf.shushin.x * scale, y: tf.shushin.y * scale },
      fukushin1: { x: tf.fukushin1.x * scale, y: tf.fukushin1.y * scale },
      fukushin2: { x: tf.fukushin2.x * scale, y: tf.fukushin2.y * scale }
    };
  }

  private transformLocalToWorld(local: Vector2D, midX: number, midY: number, ca: number, sa: number) {
    const rx = local.x * ca - local.y * sa;
    const ry = local.x * sa + local.y * ca;
    return { x: midX + rx, y: midY + ry };
  }

  private applyCollisionAvoidance(tgt: Vector2D, fighters: Vector2D[]) {
    for (const f of fighters) {
      const dx = tgt.x - f.x;
      const dy = tgt.y - f.y;
      const d = Math.hypot(dx, dy);
      if (d > 0 && d < REFEREE_FIGHTER_MIN_DIST) {
        const push = (REFEREE_FIGHTER_MIN_DIST - d) / d;
        tgt = { x: tgt.x + dx * push, y: tgt.y + dy * push };
      }
    }
    return tgt;
  }

  private softClampAxis(v: number, limit: number, margin: number) {
    if (v > limit) {
      const overflow = v - limit;
      return limit + margin * (1 - Math.exp(-overflow / margin));
    }
    if (v < -limit) {
      const overflow = -v - limit;
      return -(limit + margin * (1 - Math.exp(-overflow / margin)));
    }
    return v;
  }

  private softClampPos(pos: Vector2D) {
    return {
      x: this.softClampAxis(pos.x, HALF_COURT, SAFETY_MARGIN),
      y: this.softClampAxis(pos.y, HALF_COURT, SAFETY_MARGIN)
    };
  }

  private segmentIntersectsCircle(x1: number, y1: number, x2: number, y2: number, cx: number, cy: number, r: number) {
    const dx = x2 - x1, dy = y2 - y1;
    const fx = x1 - cx, fy = y1 - cy;
    const a = dx*dx + dy*dy;
    if (a < 1e-9) return Math.hypot(fx, fy) < r;
    const b = 2*(fx*dx + fy*dy);
    const c = fx*fx + fy*fy - r*r;
    let disc = b*b - 4*a*c;
    if (disc < 0) return false;
    disc = Math.sqrt(disc);
    const t1 = (-b - disc) / (2*a);
    const t2 = (-b + disc) / (2*a);
    return (t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1) || (t1 < 0 && t2 > 1);
  }

  private arcWaypoint(x1: number, y1: number, x2: number, y2: number, blockX: number, blockY: number, safeR: number) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) return { x: x1, y: y1 };
    const perpX = -dy / len, perpY = dx / len;
    const w1 = { x: blockX + perpX * safeR, y: blockY + perpY * safeR };
    const w2 = { x: blockX - perpX * safeR, y: blockY - perpY * safeR };
    const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
    const d1 = Math.hypot(w1.x - midX, w1.y - midY);
    const d2 = Math.hypot(w2.x - midX, w2.y - midY);
    return d1 < d2 ? w1 : w2;
  }
}
