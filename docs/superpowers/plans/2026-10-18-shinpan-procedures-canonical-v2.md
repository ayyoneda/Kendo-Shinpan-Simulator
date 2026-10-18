# FIK Shinpan Procedures Canonical V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the 12 canonical FIK referee procedure enhancements instructed by Prof. Adrian Yoneda (side entry march from Shinpan-in seats, aligned "Ippomae!", didactic trapezoid/triangle geometry, `shinpan_entrada` sprites, regular vs. substitution rotation variants, movement-directed Fukushin heading, parallel exit march, and equilateral triangle *Sogo-ni-rei*).

**Architecture:** Extend `ProcedureConfig` and `ProcedureStep` types, rewrite `definitions.ts` with parametric left/right seat formulas and rotation variants, enhance `ProcedureManager` to support seat/variant toggles, update `CanvasRenderer` to render chairs, didactic geometry and `shinpan_entrada` sprites while suppressing competitor trails, and wire UI controls in `index.html` / `main.ts` with auto-rendered mode.

**Tech Stack:** TypeScript, HTML5 Canvas, Vanilla CSS / Tailwind, Vitest.

**Spec:** [`docs/superpowers/specs/2026-10-18-shinpan-procedures-canonical-v2.md`](file:///c:/IA/Kendo%20Shinpan%20Simulator/docs/superpowers/specs/2026-10-18-shinpan-procedures-canonical-v2.md)

---

## Global Constraints
- Preserve `src/engine/Engine.ts` unchanged (Chat 1's domain).
- Preserve existing Glassmorphism aesthetics and HSL color scheme (Chat 2's domain).
- Zero heavyweight dependencies.
- All code must build cleanly with strict TypeScript (`tsc && vite build`).
- Full unit test coverage for mathematical formulas and transitions.

## Review Focus
1. Referees marching horizontally at "Mae!" must tangence the outside court line ($y = \text{courtSize}/2 + 0.4\text{m}$) without cutting inside the court before "Ippomae!".
2. At "Ippomae!", all 3 referees must step forward together in alignment (~1m) into the court, keeping Shushin in the center and Fukushins at $\pm 0.65\text{m}$.
3. Fukushin headings during trapezoid expansion and return must face the direction of the movement vector, turning inward only after arriving at the base.
4. Shinpan-in seats (3 chairs) must render outside the court cleanly on the selected side (left or right) without visual clipping.
5. In Shinpan Koutai, the leaving referee must turn to the side (toward the entering referee) and roll flags synchronously with the entering referee's halt for *Rei*.

---

### Task 1: Extend Types with ProcedureConfig and Didactic Geometry Flags

**Files:**
- Modify: `src/engine/procedures/types.ts`
- Modify: `src/engine/procedures/types.test.ts`

- [ ] Add `ProcedureConfig` interface with `seatsSide: 'LEFT' | 'RIGHT'` and `rotationVariant: 'REGULAR' | 'KOUTAI'`.
- [ ] Add `showTrapezoid?: boolean` and `showTriangle?: boolean` to `ProcedureStep`.
- [ ] Update `ProcedureStep.getTargets` signature to accept `(courtSize: number, config?: ProcedureConfig)`.
- [ ] Update `types.test.ts` to test type conformance.
- [ ] Run `npx vitest run src/engine/procedures/types.test.ts` and commit.

---

### Task 2: Implement Canonical Definitions for Chapter 1, 2, and 3 with Left/Right Seats & Rotation Variants

**Files:**
- Modify: `src/engine/procedures/definitions.ts`
- Modify: `src/engine/procedures/definitions.test.ts`

- [ ] Rewrite **Chapter 1 (Entrada)**:
  - Step 1: Initial lineup next to seats (left $x < 0$ or right $x > 0$), flags rolled on right hand, facing along line.
  - Step 2: *"Mae!"* (Horizontal march of 8-10 steps tangencing court line outside to $x = 0$).
  - Step 3: Turn toward court (side by side over boundary line).
  - Step 4: *"Ippomae!"* (Aligned advance of 1m into court, Shushin anchors vertex, F1/F2 beside Shushin).
  - Step 5: *"Rei!"* (Salutation of the trio).
  - Step 6: Trapezoid opening (Shushin fixed at vertex; F1 & F2 walk along trapezoid legs facing movement direction; `showTrapezoid = true`, `showTriangle = true`).
  - Step 7: Standard formation completion (Fukushins turn inward to center, trio separates flags red right, white left).
- [ ] Rewrite **Chapter 2 (Rotação & Troca)**:
  - Provide both variants dynamically or two sub-chapters:
    - *Regular Rotation:* Trio brings flags to right hand, walks clockwise along triangle sides facing movement, turns inward, deploys flags in sync.
    - *Alternation (Shinpan Koutai):* Leaving referee walks to Fukushin position, turns to side toward entering referee, rolls flags; entering substitute referee arrives in sync with flags rolled; both Rei; leaving referee exits backwards; entering referee assumes position and unrolls flags.
- [ ] Rewrite **Chapter 3 (Saída da Quadra)**:
  - Step 1: Fukushins return along trapezoid legs facing movement direction to Shushin at vertex.
  - Step 2: Upon arriving beside Shushin, both Fukushin turn inward (*Always turn inward*): F1 turns clockwise toward the center/Shushin, F2 turns counter-clockwise toward the center/Shushin, aligning side by side facing the court.
  - Step 3: *"Rei!"* at vertex line.
  - Step 4: Trio steps back 1m to boundary line.
  - Step 5: *"Hidari Muke, Mae!"* / *"Migi Muke, Mae!"* (Turn toward seats and march straight along line outside).
  - Step 6: *Sogo-ni-rei* (Trio forms equilateral triangle outside court facing center and bows mutually).
- [ ] Write unit tests in `definitions.test.ts` testing 9m, 10m, and 11m courts for both `LEFT` and `RIGHT` seat configurations.
- [ ] Run `npx vitest run src/engine/procedures/definitions.test.ts` and commit.

---

### Task 3: Update ProcedureManager with Configuration State and Slices

**Files:**
- Modify: `src/engine/procedures/ProcedureManager.ts`
- Modify: `src/engine/procedures/ProcedureManager.test.ts`

- [ ] Add `config: ProcedureConfig` to `ProcedureManager` with default `{ seatsSide: 'LEFT', rotationVariant: 'KOUTAI' }`.
- [ ] Expose `setSeatsSide(side: 'LEFT' | 'RIGHT')` and `setRotationVariant(v: 'REGULAR' | 'KOUTAI')`.
- [ ] Pass `this.config` into `step.getTargets(courtSize, this.config)`.
- [ ] Ensure `applyStepSnapshot` and `update` recompute targets correctly when configuration changes.
- [ ] Add tests in `ProcedureManager.test.ts` for switching seat side and rotation variant.
- [ ] Run `npx vitest run src/engine/procedures/ProcedureManager.test.ts` and commit.

---

### Task 4: Enhance CanvasRenderer with Shinpan-in Seats, Didactic Geometry, shinpan_entrada Sprites & Trail Cleanliness

**Files:**
- Modify: `src/renderer/CanvasRenderer.ts`

- [ ] Load `imgShinpanEntradaS`, `imgShinpanEntradaF1`, `imgShinpanEntradaF2` from `assets/shinpan_entrada/`.
- [ ] In `drawEntity`, check if referee has `flagsInRightHand` or `flagsRolled` (or is substitute referee); if so, render with `shinpan_entrada` sprite where red flag covers white on right hip.
- [ ] In `drawTrails` and `pushTrails`, check `state.competitorsVisible !== false` before recording/rendering `'white'` and `'red'` trails.
- [ ] Implement `drawShinpanSeats(courtSize: number, side: 'LEFT' | 'RIGHT')`: render 3 folding chairs with seats/backrests and `"Shinpan-in seats"` label outside the court.
- [ ] In `drawProcedureGuides(state)`: only draw the trapezoid and isosceles triangle when `this.procedureActiveStep?.showTrapezoid` or `showTriangle` is true. Do not render the combat triangle in procedure mode.
- [ ] Run `npx vitest run` to ensure no regression and commit.

---

### Task 5: UI Integration with Seat Toggle, Rotation Variant Selector, Auto-Rendered Mode & i18n

**Files:**
- Modify: `index.html`
- Modify: `src/i18n.ts`
- Modify: `src/main.ts`

- [ ] In `index.html`:
  - Add seat side toggle buttons in `#procedure-widget` header: `[ 💺 Esquerda ] [ 💺 Direita ]`.
  - Add rotation variant toggle buttons in Chapter 2 header or tab bar.
- [ ] In `src/i18n.ts`:
  - Add translations for seat side (`Assentos: Esquerda / Direita`), rotation variants, and detailed step descriptions for all new steps in PT, EN, and JP.
- [ ] In `src/main.ts`:
  - When `setSimulationMode('PROCEDURE')`:
    - Force `renderer.isRPGMode = true` (Rendered Mode).
    - Disable or hide technical mode toggle during procedures.
  - Wire listeners for seat side toggle and rotation variant toggle.
  - When seat side or rotation variant changes, refresh procedure manager targets and redraw.
- [ ] Run `npm run build` and `npx vitest run` to ensure zero errors and commit.

---

### Task 6: Full Verification and Walkthrough

**Files:**
- Test Suite: all vitest test files
- Production Bundle: `npm run build`

- [ ] Run all unit tests: `npx vitest run`.
- [ ] Run production build: `npm run build`.
- [ ] Verify both Left and Right seat entries, regular rotation, substitution rotation, and Sogo-ni-rei.
- [ ] Deliver comprehensive summary and walkthrough report to the user.
