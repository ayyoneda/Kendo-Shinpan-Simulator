import './style.css';
import { SimulationStore } from './engine/State';
import { Engine } from './engine/Engine';
import { CanvasRenderer } from './renderer/CanvasRenderer';
import type { Vector2D } from './math/vector';
import { i18n } from './i18n';

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

// UI Elements: Panel & Basic Toggles
const controlsContainer = document.getElementById('controls-container') as HTMLElement;
const togglePanelBtn = document.getElementById('toggle-panel-btn') as HTMLButtonElement;
const openPanelBtn = document.getElementById('open-panel-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;

// Toggles
const checkTriangle = document.getElementById('show-triangle') as HTMLInputElement;
const checkAxis = document.getElementById('show-axis') as HTMLInputElement;
const checkSquareS = document.getElementById('show-square-s') as HTMLInputElement;
const checkSquareF1 = document.getElementById('show-square-f1') as HTMLInputElement;
const checkSquareF2 = document.getElementById('show-square-f2') as HTMLInputElement;
const checkLabels = document.getElementById('show-labels') as HTMLInputElement;
const checkDirection = document.getElementById('show-direction') as HTMLInputElement;
const checkTrails = document.getElementById('show-trails') as HTMLInputElement;
const checkDebug = document.getElementById('show-debug') as HTMLInputElement;

// Debug UI
const debugPanel = document.getElementById('debug-panel') as HTMLElement;
const debugAngle = document.getElementById('debug-angle') as HTMLElement;
const debugMode = document.getElementById('debug-mode') as HTMLElement;
const debugFlag = document.getElementById('debug-flag') as HTMLElement;
const debugFreeze = document.getElementById('debug-freeze') as HTMLElement;
const debugS = document.getElementById('debug-s') as HTMLElement;
const debugF1 = document.getElementById('debug-f1') as HTMLElement;
const debugF2 = document.getElementById('debug-f2') as HTMLElement;

// Sliders and Value Displays
const bindSlider = (id: string, valId: string, suffix: string, setter: (v: number) => void) => {
  const el = document.getElementById(id) as HTMLInputElement;
  const valEl = document.getElementById(valId) as HTMLElement;
  el.addEventListener('input', () => {
    valEl.textContent = el.value + suffix;
    setter(parseFloat(el.value));
  });
};

bindSlider('slide-speed', 'val-speed', '', v => store.state.config.speed = v);
bindSlider('slide-radius', 'val-radius', '', v => store.state.config.turnRadius = v);
bindSlider('slide-smooth', 'val-smooth', '', v => store.state.config.smoothK = v);
bindSlider('slide-enter-vertex', 'val-enter-vertex', '', v => store.state.config.enterVertex = v);
bindSlider('slide-exit-vertex', 'val-exit-vertex', '', v => store.state.config.exitVertex = v);
bindSlider('slide-enter-sbase', 'val-enter-sbase', '', v => store.state.config.enterSBase = v);
bindSlider('slide-exit-sbase', 'val-exit-sbase', '', v => store.state.config.exitSBase = v);
bindSlider('slide-enter-flip', 'val-enter-flip', '', v => store.state.config.enterFlip = v);
bindSlider('slide-exit-flip', 'val-exit-flip', '', v => store.state.config.exitFlip = v);
bindSlider('slide-freeze-dist', 'val-freeze-dist', '', v => store.state.config.tsubaActiveDist = v);
bindSlider('slide-freeze-window', 'val-freeze-window', '', v => store.state.config.freezeWindowMs = v);
bindSlider('slide-freeze-angle', 'val-freeze-angle', '°', v => store.state.config.freezeAngleRad = v * Math.PI / 180);
bindSlider('slide-freeze-time', 'val-freeze-time', '', v => store.state.config.freezeTimeMs = v);

// i18n
let currentLang = 'pt';
const langSelect = document.getElementById('lang-select') as HTMLSelectElement;

function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && i18n[langParam.toLowerCase()]) return langParam.toLowerCase();
  const navLang = (navigator.language || '').toLowerCase();
  if (navLang.startsWith('ja')) return 'jp';
  if (navLang.startsWith('en')) return 'en';
  return 'pt';
}

currentLang = detectLanguage();
langSelect.value = currentLang;

function updateUIStrings() {
  const s = i18n[currentLang];
  
  const setHtml = (id: string, html: string) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  const setText = (id: string, txt: string) => { const e = document.getElementById(id); if (e) e.textContent = txt; };

  setText('ui-app-title', s.title);
  setHtml('ui-lang-label', `<i class="fas fa-language"></i> ${s.langLabel}`);
  setText('ui-description', s.description);
  setText('ui-label-viz', s.labelViz);
  setText('ui-check-triangle', s.checkTriangle);
  setText('ui-check-axis', s.checkAxis);
  setText('ui-check-square-s', s.checkSquareS);
  setText('ui-check-square-f1', s.checkSquareF1);
  setText('ui-check-square-f2', s.checkSquareF2);
  setText('ui-check-labels', s.checkLabels);
  setText('ui-check-direction', s.checkDirection);
  setText('ui-check-trails', s.checkTrails);
  setText('ui-check-debug', s.checkDebug);
  
  setText('ui-label-legend', s.labelLegend);
  setText('ui-leg-white', s.legWhite);
  setText('ui-leg-red', s.legRed);
  setText('ui-leg-s', s.legS);
  setText('ui-leg-f1', s.legF1);
  setText('ui-leg-f2', s.legF2);
  
  setText('ui-advanced-title', s.advancedTitle);
  setText('ui-advanced-section-motion', s.advancedSectionMotion);
  setText('ui-speed-label', s.speedLabel);
  setText('ui-radius-label', s.radiusLabel);
  setText('ui-smooth-label', s.smoothLabel);
  
  setText('ui-advanced-section-thresholds', s.advancedSectionThresholds);
  setText('ui-th-enter-vertex', s.thEnterVertex);
  setText('ui-th-exit-vertex', s.thExitVertex);
  setText('ui-th-enter-sbase', s.thEnterSbase);
  setText('ui-th-exit-sbase', s.thExitSbase);
  setText('ui-th-enter-flip', s.thEnterFlip);
  setText('ui-th-exit-flip', s.thExitFlip);
  
  setText('ui-advanced-section-freeze', s.advancedSectionFreeze);
  setText('ui-freeze-dist', s.freezeDist);
  setText('ui-freeze-window', s.freezeWindow);
  setText('ui-freeze-angle', s.freezeAngle);
  setText('ui-freeze-time', s.freezeTime);
  
  setText('ui-advanced-note', s.advancedNote);
  setText('ui-tip-title', s.tipTitle);
  setHtml('ui-tip-body', s.tipBody);
  
  setText('ui-label-angles', s.labelAngles);
  setText('ui-angle-combat', s.angleCombat);
  setText('ui-mode-label', s.modeLabel);
  setText('ui-flag-label', s.flagLabel);
  const freezeLabel = document.getElementById('ui-freeze-label');
  if (freezeLabel) freezeLabel.textContent = currentLang === 'jp' ? '状態:' : 'Freeze:';
  
  setText('ui-ref-s', s.refS);
  setText('ui-ref-f1', s.refF1);
  setText('ui-ref-f2', s.refF2);
  
  setText('ui-btn-reset', s.btnReset);
  setText('ui-author', s.author);
}

updateUIStrings();

langSelect.addEventListener('change', (e) => {
  currentLang = (e.target as HTMLSelectElement).value;
  updateUIStrings();
  if (currentLang === 'jp') {
    document.body.classList.add('lang-jp');
  } else {
    document.body.classList.remove('lang-jp');
  }
});

if (currentLang === 'jp') document.body.classList.add('lang-jp');

// Events
togglePanelBtn.addEventListener('click', () => {
  controlsContainer.classList.add('collapsed');
  setTimeout(() => openPanelBtn.classList.remove('hidden'), 300);
});
openPanelBtn.addEventListener('click', () => {
  openPanelBtn.classList.add('hidden');
  controlsContainer.classList.remove('collapsed');
});

// Bind UI Toggles
checkTriangle.addEventListener('change', e => renderer.showTriangle = (e.target as HTMLInputElement).checked);
checkSquareS.addEventListener('change', e => renderer.showSquareS = (e.target as HTMLInputElement).checked);
checkSquareF1.addEventListener('change', e => renderer.showSquareF1 = (e.target as HTMLInputElement).checked);
checkSquareF2.addEventListener('change', e => renderer.showSquareF2 = (e.target as HTMLInputElement).checked);
checkAxis.addEventListener('change', e => {
  const ch = (e.target as HTMLInputElement).checked;
  checkSquareS.checked = ch;
  checkSquareF1.checked = ch;
  checkSquareF2.checked = ch;
  renderer.showSquareS = ch;
  renderer.showSquareF1 = ch;
  renderer.showSquareF2 = ch;
});
checkLabels.addEventListener('change', e => renderer.showNames = (e.target as HTMLInputElement).checked);
checkDirection.addEventListener('change', e => renderer.showDirection = (e.target as HTMLInputElement).checked);
checkTrails.addEventListener('change', e => {
  renderer.showTrails = (e.target as HTMLInputElement).checked;
  if (!renderer.showTrails) renderer.clearTrails();
});
checkDebug.addEventListener('change', e => {
  const isDebug = (e.target as HTMLInputElement).checked;
  debugPanel.classList.toggle('hidden', !isDebug);
});

resetBtn.addEventListener('click', () => {
  store.resetPositions();
  renderer.clearTrails();
});

// Pointer Interaction
const HALF_COURT = 5;
function isHit(p: Vector2D, ent: Vector2D, r: number, isTouch: boolean): boolean {
  const hitDist = isTouch ? r * 2.5 : r * 1.5;
  return Math.hypot(p.x - ent.x, p.y - ent.y) <= hitDist;
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
    if (isHit(p, store.state.red, store.state.red.radius, isTouch)) renderer.hoveredEnt = store.state.red;
    else if (isHit(p, store.state.white, store.state.white.radius, isTouch)) renderer.hoveredEnt = store.state.white;
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

  if (checkDebug.checked && debugAcc > 0.1) {
    debugAcc = 0;
    const s = i18n[currentLang];
    
    debugAngle.textContent = `${Math.round(store.state.angles.combatRadSmoothed * 180 / Math.PI)}°`;
    debugMode.textContent = store.state.formationMode;
    debugFlag.textContent = store.state.flag.toString();
    debugFreeze.textContent = store.state.arbiterState === 'FROZEN' ? s.frozen : s.stable;
    
    debugS.textContent = `${store.state.angles.shushinAbs.toFixed(1)}°`;
    debugF1.textContent = `${store.state.angles.fukushin1Abs.toFixed(1)}°`;
    debugF2.textContent = `${store.state.angles.fukushin2Abs.toFixed(1)}°`;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
