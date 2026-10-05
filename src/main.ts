import './style.css';
import { SimulationStore } from './engine/State';
import { Engine } from './engine/Engine';
import { CanvasRenderer } from './renderer/CanvasRenderer';
import { Vector2D } from './math/vector';

// State and Engine
const store = new SimulationStore();
const engine = new Engine(store);

// Canvas Renderer
const canvas = document.getElementById('kendoCanvas') as HTMLCanvasElement;
const renderer = new CanvasRenderer(canvas);

// Resize handler
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  renderer.resize(width, height, dpr);
}
window.addEventListener('resize', onResize);
onResize();

// UI Elements
const showTriangle = document.getElementById('show-triangle') as HTMLInputElement;
const showDirection = document.getElementById('show-direction') as HTMLInputElement;
const showTrails = document.getElementById('show-trails') as HTMLInputElement;
const showDebug = document.getElementById('show-debug') as HTMLInputElement;

const debugPanel = document.getElementById('debug-panel') as HTMLElement;
const debugAngle = document.getElementById('debug-angle') as HTMLElement;
const debugMode = document.getElementById('debug-mode') as HTMLElement;
const debugFlag = document.getElementById('debug-flag') as HTMLElement;
const debugFreeze = document.getElementById('debug-freeze') as HTMLElement;

const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;

// Panel toggle
const controlsContainer = document.getElementById('controls-container') as HTMLElement;
const togglePanelBtn = document.getElementById('toggle-panel-btn') as HTMLButtonElement;
const openPanelBtn = document.getElementById('open-panel-btn') as HTMLButtonElement;

togglePanelBtn.addEventListener('click', () => {
  controlsContainer.classList.add('collapsed');
  setTimeout(() => openPanelBtn.classList.remove('hidden'), 300);
});

openPanelBtn.addEventListener('click', () => {
  openPanelBtn.classList.add('hidden');
  controlsContainer.classList.remove('collapsed');
});

// Bind UI Toggles
showTriangle.addEventListener('change', (e) => {
  renderer.showTriangle = (e.target as HTMLInputElement).checked;
});
showDirection.addEventListener('change', (e) => {
  renderer.showDirection = (e.target as HTMLInputElement).checked;
});
showTrails.addEventListener('change', (e) => {
  renderer.showTrails = (e.target as HTMLInputElement).checked;
  if (!renderer.showTrails) renderer.clearTrails();
});
showDebug.addEventListener('change', (e) => {
  const isDebug = (e.target as HTMLInputElement).checked;
  debugPanel.classList.toggle('hidden', !isDebug);
});

resetBtn.addEventListener('click', () => {
  store.resetPositions();
  renderer.clearTrails();
});

// Pointer Interaction (Drag)
const HALF_COURT = 5;

function isHit(p: Vector2D, ent: Vector2D, r: number, isTouch: boolean): boolean {
  const hitDist = isTouch ? r * 2.5 : r * 1.5;
  const dx = p.x - ent.x;
  const dy = p.y - ent.y;
  return Math.hypot(dx, dy) <= hitDist;
}

canvas.addEventListener('pointerdown', (e) => {
  canvas.setPointerCapture(e.pointerId);
  const p = renderer.toMeters(e.clientX, e.clientY);
  const isTouch = (e.pointerType === 'touch');

  if (isHit(p, store.state.red, store.state.red.radius, isTouch)) {
    store.state.red.dragging = true;
    e.preventDefault();
  } else if (isHit(p, store.state.white, store.state.white.radius, isTouch)) {
    store.state.white.dragging = true;
    e.preventDefault();
  }
});

canvas.addEventListener('pointermove', (e) => {
  const p = renderer.toMeters(e.clientX, e.clientY);
  const isTouch = (e.pointerType === 'touch');

  const clamp = (v: number) => Math.min(Math.max(v, -HALF_COURT), HALF_COURT);

  renderer.hoveredEnt = null;

  if (store.state.red.dragging) {
    store.state.red.x = clamp(p.x);
    store.state.red.y = clamp(p.y);
    renderer.hoveredEnt = store.state.red;
  } else if (store.state.white.dragging) {
    store.state.white.x = clamp(p.x);
    store.state.white.y = clamp(p.y);
    renderer.hoveredEnt = store.state.white;
  } else {
    if (isHit(p, store.state.red, store.state.red.radius, isTouch)) {
      renderer.hoveredEnt = store.state.red;
    } else if (isHit(p, store.state.white, store.state.white.radius, isTouch)) {
      renderer.hoveredEnt = store.state.white;
    }
  }

  canvas.style.cursor = renderer.hoveredEnt ? 'move' : 'crosshair';
});

canvas.addEventListener('pointerup', () => {
  store.state.red.dragging = false;
  store.state.white.dragging = false;
  renderer.hoveredEnt = null;
});

// Animation Loop
let lastTs: number | null = null;
let debugAcc = 0;

function animate(ts: DOMHighResTimeStamp) {
  if (!lastTs) lastTs = ts;
  const dt = Math.min((ts - lastTs) / 1000, 0.05);
  lastTs = ts;
  debugAcc += dt;

  engine.update(ts);
  renderer.pushTrails(store.state);
  renderer.render(store.state);

  // Update Debug UI periodically
  if (showDebug.checked && debugAcc > 0.1) {
    debugAcc = 0;
    debugAngle.textContent = `${Math.round(store.state.angles.combatRadSmoothed * 180 / Math.PI)}°`;
    debugMode.textContent = store.state.formationMode;
    debugFlag.textContent = store.state.flag.toString();
    debugFreeze.textContent = store.state.arbiterState;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
