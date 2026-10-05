# Reestruturação Modular do Kendo Shinpan Simulator (Vite + TypeScript)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the monolithic HTML prototype into a robust, testable, and modular Vite + TypeScript application, preserving the exact FIK/AJKF mathematical logic.

**Architecture:** A strict Model-View-Controller/Engine separation. Pure functions for math and geometry (`src/math`), a centralized State Machine / Physics Engine (`src/engine`), an independent Canvas Renderer (`src/renderer`), and a decoupled UI (`src/ui`). All code written in TypeScript.

**Tech Stack:** Vite, TypeScript, TailwindCSS (configured via PostCSS), Vitest (for unit testing the math and engine).

**Spec:** Refactoring of `ferramenta_shinpan_v2.1.0.html` according to the canonical rules in `AGENTS.md`.

## Global Constraints

- Must maintain strict FIK/AJKF isosceles triangle and blind-spot minimization rules exactly as they exist in v2.1.0.
- Zero heavy runtime UI dependencies (Tailwind must be built, no CDNs for production).
- The `corpus` folder must remain untouched.
- Old files must be moved to an `archive/` folder.

## Review Focus

- The exponential damping calculation must produce identical fluid movements as the prototype. Test: `test_expDamp()`.
- The FLIP threshold hysteresis (accumulator) must trigger exactly as the prototype. Test: `test_flipStateMachine()`.
- The tsubazeriai freeze constraint must activate at the correct distance. Test: `test_tsubazeriaiConstraint()`.
- The Vite build must successfully bundle the application for GitHub Pages (no base path issues).

---

### Task 1: Reorganização do Diretório e Setup do Vite

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`
- Create: `index.html`, `src/main.ts`, `src/style.css`
- Move: All old `.html`, `.py`, `.js` to `archive/`

**Interfaces:**
- Consumes: N/A
- Produces: A running Vite development server with Tailwind configured.

- [ ] **Step 1: Mover arquivos antigos para `archive/`**
```bash
mkdir archive
# (Mover manualmente ou via comando os arquivos antigos, mantendo corpus e AGENTS.md na raiz)
```

- [ ] **Step 2: Inicializar o projeto Vite (Vanilla TS)**
```bash
npx -y create-vite@latest . --template vanilla-ts
```

- [ ] **Step 3: Instalar TailwindCSS e dependências**
```bash
npm install -D tailwindcss postcss autoprefixer vitest
npx tailwindcss init -p
```

- [ ] **Step 4: Configurar `tailwind.config.js` e `style.css`**
Adicionar diretivas `@tailwind` no CSS e configurar os paths em `content`.

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: setup vite, typescript, tailwind and vitest. archive old files"
```

---

### Task 2: Core Matemático e Testes (TDD)

**Files:**
- Create: `src/math/utils.ts`
- Create: `src/math/vector.ts`
- Create: `src/math/utils.test.ts`

**Interfaces:**
- Produces: `normalizeAngle(deg: number): number`, `expDamp(curr: Vector2D, target: Vector2D, k: number, dt: number): boolean`, `angleDiff(a: number, b: number): number`.

- [ ] **Step 1: Write failing tests em `src/math/utils.test.ts`**
```typescript
import { describe, it, expect } from 'vitest';
import { normalizeAngle } from './utils';

describe('normalizeAngle', () => {
  it('should normalize angles to -180...180', () => {
    expect(normalizeAngle(190)).toBe(-170);
    expect(normalizeAngle(-190)).toBe(170);
  });
});
```

- [ ] **Step 2: Run test (deve falhar pois a função não existe)**
```bash
npx vitest run src/math/utils.test.ts
```

- [ ] **Step 3: Implementar a matemática**
Traduzir as funções `normalizeAngle`, `angleDiff`, e `expDamp` do `ferramenta_shinpan_v2.1.0.html` para TypeScript em `src/math/utils.ts`.

- [ ] **Step 4: Run test to pass**
```bash
npx vitest run src/math/utils.test.ts
```

- [ ] **Step 5: Commit**
```bash
git add src/math
git commit -m "feat(math): implement and test core geometry utilities"
```

---

### Task 3: Engine de Simulação (Gestão de Estado)

**Files:**
- Create: `src/engine/types.ts` (interfaces TS)
- Create: `src/engine/State.ts` (Store global da simulação)
- Create: `src/engine/Engine.ts` (Loop de cálculo)

**Interfaces:**
- Consumes: `src/math/utils.ts`
- Produces: `Engine.update(dt: number, ts: number)`, `Engine.getState(): SimulationState`

- [ ] **Step 1: Definir as tipagens no `src/engine/types.ts`**
Extrair os tipos do objeto `state` original: `Vector2D`, `Fighter`, `Referee`, `FormationMode`.

- [ ] **Step 2: Criar a classe/store `State.ts`**
Inicializar as posições padrão dos lutadores e árbitros.

- [ ] **Step 3: Implementar o `Engine.ts`**
Portar as funções `updateReferees`, `computeTargetsForFlag`, `updateArbiterFreeze` garantindo que não manipulem o DOM, apenas modifiquem o `State`.

- [ ] **Step 4: Write e Run test de inicialização do Motor**
Garantir que ao instanciar, os árbitros começam nas posições padrão.

- [ ] **Step 5: Commit**
```bash
git add src/engine
git commit -m "feat(engine): implement state machine and physics update loop"
```

---

### Task 4: Renderizador (Canvas)

**Files:**
- Create: `src/renderer/Renderer.ts`

**Interfaces:**
- Consumes: `SimulationState` do Engine.
- Produces: `Renderer.draw(state: SimulationState)`

- [ ] **Step 1: Escrever a classe `Renderer`**
Ela recebe o contexto 2D (`CanvasRenderingContext2D`).

- [ ] **Step 2: Portar `drawFloor`, `drawCourt` e `buildFloorCache`**
Usar as variáveis de escala e dpi do Estado.

- [ ] **Step 3: Portar o desenho das entidades (`drawEntity`) e guias**
Isolar o desenho do "Nariz/Indicador de Direção".

- [ ] **Step 4: Integrar no `main.ts`**
Fazer o mock do `requestAnimationFrame` em `main.ts` que chama `Engine.update()` e `Renderer.draw()`. Verificar visualmente no navegador.

- [ ] **Step 5: Commit**
```bash
git add src/renderer src/main.ts
git commit -m "feat(renderer): implement canvas rendering layer"
```

---

### Task 5: Camada de UI e Interatividade

**Files:**
- Create: `src/ui/UI.ts`
- Create: `src/ui/i18n.ts`

**Interfaces:**
- Consumes: `Engine` (para enviar atualizações de state como Thresholds).
- Produces: Listeners para mouse/touch no canvas. Painel HTML atualizado.

- [ ] **Step 1: Mover o dicionário de i18n**
Criar `src/ui/i18n.ts` exportando a lógica de tradução.

- [ ] **Step 2: Reconstruir o Painel HTML no `index.html`**
Copiar os blocos HTML (painel lateral de vidro) com as classes do Tailwind.

- [ ] **Step 3: Implementar Drag and Drop dos Lutadores**
Criar listeners de `mousedown`, `mousemove` e `mouseup` no Canvas que disparam a atualização nas coordenadas `W` e `R` do `State`.

- [ ] **Step 4: Ligar os Sliders e Checkboxes**
Adicionar listeners nos inputs que enviam valores para o `Engine` (ex: `Engine.setSpeed()`).

- [ ] **Step 5: Commit**
```bash
git add src/ui index.html
git commit -m "feat(ui): implement controls, drag/drop, and localization"
```
