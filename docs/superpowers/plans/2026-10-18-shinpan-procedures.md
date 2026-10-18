# FIK Shinpan Procedures & Choreography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the official FIK/AJKF Shinpan Procedures and Choreographies (Court Entry, Rotation, Substitution, and Exit) with a chaptered stepper, command callouts, and dynamic geometry scaling in the Kendo Shinpan Simulator.

**Architecture:** A dedicated, fully decoupled `ProcedureManager` subsystem controls referee positions, headings, flag states, and didactic text based on canonical geometry derived from `courtSize`. In `simulationMode = 'PROCEDURE'`, competitors are hidden and the active combat physics in `Engine.ts` is bypassed, strictly preserving Chat 1 and Chat 2 boundaries.

**Tech Stack:** TypeScript, Vitest, HTML5 Canvas, Vanilla CSS / Tailwind (preserving existing design system).

**Spec:** [docs/superpowers/specs/2026-10-18-shinpan-procedures-design.md](file:///c:/IA/Kendo%20Shinpan%20Simulator/docs/superpowers/specs/2026-10-18-shinpan-procedures-design.md)

---

## Global Constraints

- Never modify the mathematical combat logic, angle calculation, or flip transition in `src/engine/Engine.ts`.
- Preserves 100% of existing CSS variables, glassmorphism aesthetics, and responsive layout from Chat 2.
- Official rules source is strictly `corpus/fik/regulations/2023-07-26/` and `Procedimento_Coreografia_Shinpan.pptx`.
- Zero heavy third-party dependencies added to `package.json`.
- All automated tests run via `npx vitest run`.

---

## Review Focus

1. **Shushin Vertex Anchor:** Shushin must not move during Chapter 1 Steps 3 through 5 (remains anchored at $(0, y_{\text{vertex}})$ after *Ippomae*).
2. **Kaishisen Clearance:** Fukushin trajectories along trapezoid legs must pass inside kaishisen boundaries ($|x| < 1.4\text{m}$).
3. **Dynamic Court Scaling:** Coordinates must scale linearly with `courtSize` ($9\text{m} \le L \le 11\text{m}$) without visual clipping.
4. **Clean Mode Switching:** Switching between `COMBAT` and `PROCEDURE` modes must cleanly show/hide fighters and preserve referee state without engine corruption.
5. **Koutai Synchronization:** Incoming substitute referee arrival must synchronize with outgoing referee completing flag roll-up on hip before *Rei*.

---

### Task 1: Types & State Modeling

**Files:**
- Create: `src/engine/procedures/types.ts`
- Modify: `src/engine/types.ts`
- Test: `src/engine/procedures/types.test.ts`

**Interfaces:**
- Produces: `SimulationMode`, `RefereeVisualState`, `ProcedureStep`, `ProcedureChapter`

- [ ] **Step 1: Write the failing test**
Create `src/engine/procedures/types.test.ts` testing structure validity and type contracts.

```typescript
import { describe, it, expect } from 'vitest';
import type { ProcedureStep, ProcedureChapter, RefereeVisualState } from './types';

describe('Procedure Types Contract', () => {
  it('validates a minimal ProcedureStep structure', () => {
    const step: ProcedureStep = {
      id: 'test_step',
      stepNumber: 1,
      totalSteps: 5,
      commandCall: 'Mae!',
      description: 'Test march',
      durationSec: 2.0,
      getTargets: (courtSize: number) => ({
        shushin: { x: 0, y: courtSize / 2 - 1, heading: 0, flagsRolled: true },
        fukushin1: { x: 0.65, y: courtSize / 2 - 1, heading: 0, flagsRolled: true },
        fukushin2: { x: -0.65, y: courtSize / 2 - 1, heading: 0, flagsRolled: true }
      })
    };
    expect(step.commandCall).toBe('Mae!');
    const targets = step.getTargets(10);
    expect(targets.shushin.y).toBe(4);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run src/engine/procedures/types.test.ts`
Expected: FAIL (cannot find module `./types`)

- [ ] **Step 3: Implement minimal types in `src/engine/procedures/types.ts` and modify `src/engine/types.ts`**
Create `src/engine/procedures/types.ts`:
```typescript
export interface RefereeVisualState {
  x: number;
  y: number;
  heading?: number;
  flagsRolled?: boolean;
  flagsInRightHand?: boolean;
}

export interface ProcedureStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  commandCall?: string;
  description: string;
  durationSec: number;
  holdSec?: number;
  inwardTurn?: boolean;
  getTargets: (courtSize: number) => {
    shushin: RefereeVisualState;
    fukushin1: RefereeVisualState;
    fukushin2: RefereeVisualState;
    substitute?: RefereeVisualState;
  };
}

export interface ProcedureChapter {
  id: string;
  titleKey: string;
  titleDefault: string;
  steps: ProcedureStep[];
}
```

Extend `src/engine/types.ts` non-destructively:
Add `export type SimulationMode = 'COMBAT' | 'PROCEDURE';` and add `simulationMode: SimulationMode; competitorsVisible: boolean;` to `EngineState`.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run src/engine/procedures/types.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/engine/types.ts src/engine/procedures/types.ts src/engine/procedures/types.test.ts
git commit -m "feat(procedures): add ProcedureStep, Chapter and SimulationMode types"
```

---

### Task 2: Canonical Definitions & Geometrical Formulas

**Files:**
- Create: `src/engine/procedures/definitions.ts`
- Test: `src/engine/procedures/definitions.test.ts`

**Interfaces:**
- Consumes: `ProcedureChapter`, `ProcedureStep` from `./types`
- Produces: `procedureChapters: ProcedureChapter[]` (Chapter 1: Entrada, Chapter 2: Rotação & Troca, Chapter 3: Saída)

- [ ] **Step 1: Write the failing test for canonical geometry**
Create `src/engine/procedures/definitions.test.ts` verifying:
1. Chapter 1 Step 3 (*Ippomae*) establishes Shushin at $(0, y_{\text{vertex}})$.
2. Chapter 1 Step 5 (Trapezoid legs) keeps Shushin strictly at $(0, y_{\text{vertex}})$ while Fukushin 1 moves to $(x_{\text{base}}, y_{\text{base}})$ and Fukushin 2 moves to $(-x_{\text{base}}, y_{\text{base}})$.
3. Fukushin trajectories pass inside $|x| < 1.4\text{m}$.
4. Chapter 2 Rotation completes a full 3-referee cycle along internal straight lines.
5. Chapter 3 Exit brings Fukushin back to the $1.30\text{m}$ base beside Shushin.

```typescript
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

    expect(step3?.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step4?.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step5?.getTargets(courtSize).shushin.y).toBeCloseTo(yVertex);
    expect(step5?.getTargets(courtSize).shushin.x).toBeCloseTo(0);
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
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run src/engine/procedures/definitions.test.ts`
Expected: FAIL (cannot find module `./definitions`)

- [ ] **Step 3: Implement `src/engine/procedures/definitions.ts`**
Implement the 3 chapters with precise calculations:
- `entry`:
  1. `entry_lineup`: external lineup $y = L/2 + 1.5$, Shushin at $x=0$, F1 at $+0.65$, F2 at $-0.65$, flags rolled.
  2. `entry_mae`: march to outer boundary line $y = L/2$.
  3. `entry_ippomae`: 1m step in, Shushin lands on $(0, y_{\text{vertex}})$, F1 at $(+0.65, y_{\text{vertex}})$, F2 at $(-0.65, y_{\text{vertex}})$.
  4. `entry_rei`: $15^\circ$ bow facing shomen.
  5. `entry_trapezoid_walk`: Shushin stays at $(0, y_{\text{vertex}})$. F1 walks straight to $(+x_{\text{base}}, y_{\text{base}})$, F2 walks straight to $(-x_{\text{base}}, y_{\text{base}})$.
  6. `entry_turn_inward`: turn inward, unroll/separate flags.
- `rotation`:
  1. `rot_flags_right`: flags held in right hand.
  2. `rot_walk`: clockwise straight inner walk (Shushin $\to$ F1, F1 $\to$ F2, F2 $\to$ Shushin).
  3. `rot_settle`: turn inward, separate flags.
  4. `rot_koutai`: outgoing Shushin-turned-Fukushin meets incoming substitute with synchronized arrival and *Rei*.
- `exit`:
  1. `exit_roll_flags`: all 3 roll flags together.
  2. `exit_trapezoid_return`: Shushin stays at $(0, y_{\text{vertex}})$; F1 & F2 walk back to $(\pm 0.65, y_{\text{vertex}})$.
  3. `exit_turn_inward_rei`: turn inward, *Rei!*.
  4. `exit_turn_seats`: turn to shinpan seats (*Hidari/Migi-muke*).
  5. `exit_march`: march out coordinated (*Mae!*).

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run src/engine/procedures/definitions.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/engine/procedures/definitions.ts src/engine/procedures/definitions.test.ts
git commit -m "feat(procedures): implement canonical definitions for FIK chapters and steps"
```

---

### Task 3: ProcedureManager State Machine & Playback Engine

**Files:**
- Create: `src/engine/procedures/ProcedureManager.ts`
- Test: `src/engine/procedures/ProcedureManager.test.ts`

**Interfaces:**
- Consumes: `procedureChapters` from `./definitions`, `SimulationStore` from `../State`
- Produces: `ProcedureManager` class with `update(dt, state)`, `play()`, `pause()`, `nextStep()`, `prevStep()`, `setChapter(id)`, `reset()`

- [ ] **Step 1: Write the failing test for ProcedureManager**
Create `src/engine/procedures/ProcedureManager.test.ts` testing step transitions, playback interpolation, and speed adjustments.

```typescript
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

  it('initializes on Chapter 1, Step 1 in paused state', () => {
    expect(manager.getCurrentChapter().id).toBe('entry');
    expect(manager.getCurrentStepIndex()).toBe(0);
    expect(manager.isPlaying()).toBe(false);
  });

  it('can advance to next step and retreat to previous step', () => {
    manager.nextStep();
    expect(manager.getCurrentStepIndex()).toBe(1);
    manager.prevStep();
    expect(manager.getCurrentStepIndex()).toBe(0);
  });

  it('interpolates positions smoothly over duration', () => {
    manager.setChapter('entry');
    manager.play();
    const initialY = store.state.shushin.y;
    manager.update(0.5); // dt = 0.5s
    // Shushin position should interpolate toward target
    expect(store.state.shushin.y).not.toBe(initialY);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run src/engine/procedures/ProcedureManager.test.ts`
Expected: FAIL (cannot find module `./ProcedureManager`)

- [ ] **Step 3: Implement `src/engine/procedures/ProcedureManager.ts`**
Implement state machine with:
- `currentChapterIndex: number`
- `currentStepIndex: number`
- `stepProgress: number` ($0 \le t \le 1$)
- `isPlaying: boolean`
- `pauseOnStepComplete: boolean` (default: true for didactic step-by-step mode)
- `playbackSpeed: number` (0.5, 1.0, 1.5)
- Smooth ease-in-out cubic easing function for interpolation.
- Orientation (`heading`) interpolation using shortest angular path.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run src/engine/procedures/ProcedureManager.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/engine/procedures/ProcedureManager.ts src/engine/procedures/ProcedureManager.test.ts
git commit -m "feat(procedures): implement ProcedureManager playback state machine"
```

---

### Task 4: Store & State Integration

**Files:**
- Modify: `src/engine/State.ts`
- Test: `src/engine/State.test.ts` (or add tests to ensure clean state initialization)

**Interfaces:**
- Produces: `state.simulationMode`, `state.competitorsVisible`, and updated `resetPositions()`

- [ ] **Step 1: Write test for state extension in `src/engine/State.test.ts`**
```typescript
import { describe, it, expect } from 'vitest';
import { SimulationStore } from './State';

describe('SimulationStore Procedures Extension', () => {
  it('initializes with COMBAT mode and competitors visible', () => {
    const store = new SimulationStore();
    expect(store.state.simulationMode).toBe('COMBAT');
    expect(store.state.competitorsVisible).toBe(true);
  });

  it('preserves mode and reset behavior cleanly', () => {
    const store = new SimulationStore();
    store.state.simulationMode = 'PROCEDURE';
    store.state.competitorsVisible = false;
    store.resetPositions();
    expect(store.state.simulationMode).toBe('COMBAT');
    expect(store.state.competitorsVisible).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run src/engine/State.test.ts`
Expected: FAIL

- [ ] **Step 3: Update `src/engine/State.ts`**
Add default properties to `getInitialState()`:
- `simulationMode: 'COMBAT'`
- `competitorsVisible: true`
Update `resetPositions()` accordingly.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run src/engine/State.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add src/engine/State.ts src/engine/State.test.ts
git commit -m "feat(state): integrate simulationMode and competitorsVisible into SimulationStore"
```

---

### Task 5: CanvasRenderer Modular Extensions

**Files:**
- Modify: `src/renderer/CanvasRenderer.ts`
- Test: Build verification (`npm run build`) & Vitest test suite

**Interfaces:**
- Consumes: `state.competitorsVisible`, `referee.heading`, `procedureActiveStep`
- Produces: Visual rendering of referee explicit heading, hiding of competitors, command bubbles, and subtle dashed geometric lines (trapezoid and inner rotation lines)

- [ ] **Step 1: Write or check renderer tests / build**
Run: `npx vitest run` to ensure no regressions.

- [ ] **Step 2: Update `src/renderer/CanvasRenderer.ts`**
- In `render()`:
  - If `state.competitorsVisible === false`, skip drawing `state.white` and `state.red`.
- In `drawEntity()`:
  - If `(ent as Referee).heading !== undefined`, use that heading for the directional triangle / RPG sprite rotation instead of always calculating angle to fighters.
- Add helper method `drawProcedureAnnotations(step: ProcedureStep, state: EngineState)`:
  - Render subtle dashed line for trapezoid legs if in Chapter 1.
  - Render speech bubble above Shushin if `step.commandCall` is present (e.g. *"Mae!"*, *"Ippomae!"*, *"Rei!"*).

- [ ] **Step 3: Run build and tests**
Run: `npm run build && npx vitest run`
Expected: PASS with zero TypeScript or build errors.

- [ ] **Step 4: Commit**
```bash
git add src/renderer/CanvasRenderer.ts
git commit -m "feat(renderer): add competitor visibility toggle, heading support and procedure callouts"
```

---

### Task 6: UI Glassmorphism Panel, Stepper Controls & Main Loop Integration

**Files:**
- Modify: `index.html`
- Modify: `src/i18n.ts`
- Modify: `src/main.ts`

**Interfaces:**
- Consumes: `ProcedureManager`, UI elements
- Produces: Integrated Mode Switcher `[ Modo Combate ] | [ Procedimentos Oficiais FIK ]`, Glassmorphic Chapter Tabs, Stepper Bar, Speed controls, Didactic text card, and loop coordination.

- [ ] **Step 1: Add i18n keys to `src/i18n.ts`**
Add entries for `procedures`, `chapters`, `commands`, and didactic descriptions in Portuguese, English, and Japanese.

- [ ] **Step 2: Add Procedure Glass Panel in `index.html`**
Add a sleek floating glass container `#procedures-panel` with:
- Chapter tabs: `[ 1. Entrada & Formação ] [ 2. Rotação & Troca ] [ 3. Saída ]`
- Command badge + Didactic explanation box.
- Stepper controls: `[ |◀ Início ] [ ◀ Passo ] [ ▶ Play / ⏸ Pause ] [ Passo ▶ ]`
- Speed selector: `0.5x`, `1.0x`, `1.5x`
- Step-by-step checkbox toggle: `Pausar a cada comando`.

- [ ] **Step 3: Connect `ProcedureManager` in `src/main.ts`**
- Initialize `const procedureManager = new ProcedureManager(store);`
- In `animate()` loop:
  - If `store.state.simulationMode === 'PROCEDURE'`:
    - `procedureManager.update(dt);`
    - Do NOT call `scenarioRunner.update()`.
    - Do NOT let `engine.update()` override referee procedure coordinates.
  - Else (`COMBAT`):
    - Run standard `scenarioRunner` and `engine.update()` exactly as before.
- Bind event listeners for UI buttons, chapter tabs, and mode switcher.

- [ ] **Step 4: Verify with automated tests and production build**
Run: `npm run build && npx vitest run`
Expected: PASS

- [ ] **Step 5: Manual browser verification via Browser Subagent**
Inspect the UI in the browser:
- Test switching to Procedure Mode.
- Verify competitors disappear.
- Step through Chapter 1 (Mae -> Ippomae -> Rei -> Formação -> Giro).
- Check that Shushin remains at $(0, 4)$ and Fukushins open to $\pm 2$.
- Step through Chapter 2 and Chapter 3.
- Switch back to Combat Mode and verify fighter dragging and referee re-alignment work normally.

- [ ] **Step 6: Commit**
```bash
git add index.html src/i18n.ts src/main.ts
git commit -m "feat(ui): integrate FIK shinpan procedures panel and controls"
```
