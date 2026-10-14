import './style.css';
import { SimulationStore } from './engine/State';
import { Engine } from './engine/Engine';
import { CanvasRenderer } from './renderer/CanvasRenderer';
import type { Vector2D } from './math/vector';
import { i18n } from './i18n';
import { ScenarioRunner, scenarios } from './engine/Scenarios';

// State and Engine
const store = new SimulationStore();
const engine = new Engine(store);
const scenarioRunner = new ScenarioRunner();

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

// UI Elements: Panel & Controls
const controlsContainer = document.getElementById('controls-container') as HTMLElement;
const togglePanelBtn = document.getElementById('toggle-panel-btn') as HTMLButtonElement;
const openPanelBtn = document.getElementById('open-panel-btn') as HTMLButtonElement;
const floatingResetBtn = document.getElementById('floating-reset-btn') as HTMLButtonElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;

// Help Modal Elements
const helpBtn = document.getElementById('help-btn') as HTMLButtonElement;
const panelHelpBtn = document.getElementById('panel-help-btn') as HTMLButtonElement;
const helpModal = document.getElementById('help-modal') as HTMLElement;
const helpModalClose = document.getElementById('help-modal-close') as HTMLButtonElement;
const helpModalBottomClose = document.getElementById('help-modal-bottom-close') as HTMLButtonElement;
const helpTabContent = document.getElementById('help-tab-content') as HTMLElement;

// Mode Toggles & Sections
const btnModeTech = document.getElementById('btn-mode-tech') as HTMLButtonElement;
const btnModeRpg = document.getElementById('btn-mode-rpg') as HTMLButtonElement;
const techAdvancedSection = document.getElementById('tech-advanced-section') as HTMLElement;
const techLegend = document.getElementById('tech-legend') as HTMLElement;
const renderedLegend = document.getElementById('rendered-legend') as HTMLElement;

// Debug UI
const debugPanel = document.getElementById('debug-panel') as HTMLElement;
const debugAngle = document.getElementById('debug-angle') as HTMLElement;
const debugMode = document.getElementById('debug-mode') as HTMLElement;
const debugFlag = document.getElementById('debug-flag') as HTMLElement;
const debugFreeze = document.getElementById('debug-freeze') as HTMLElement;
const debugS = document.getElementById('debug-s') as HTMLElement;
const debugF1 = document.getElementById('debug-f1') as HTMLElement;
const debugF2 = document.getElementById('debug-f2') as HTMLElement;

// Floating Scenarios Widget Elements
const scenariosExpanded = document.getElementById('scenarios-expanded') as HTMLElement;
const scenariosExpandBtn = document.getElementById('scenarios-expand-btn') as HTMLButtonElement;
const scenariosCollapseBtn = document.getElementById('scenarios-collapse-btn') as HTMLButtonElement;
const scenarioStopBtnCompact = document.getElementById('scenario-stop-btn-compact') as HTMLButtonElement;
const scenarioStopBtnExpanded = document.getElementById('scenario-stop-btn-expanded') as HTMLButtonElement;
const scenarioChipsContainer = document.getElementById('scenario-chips') as HTMLElement;
const scenarioExpandedList = document.getElementById('scenario-expanded-list') as HTMLElement;

// Sliders: Exactly 6 sliders maintained
const bindSlider = (id: string, valId: string, suffix: string, setter: (v: number) => void) => {
  const el = document.getElementById(id) as HTMLInputElement | null;
  const valEl = document.getElementById(valId) as HTMLElement | null;
  if (!el || !valEl) return;
  el.addEventListener('input', () => {
    valEl.textContent = el.value + suffix;
    setter(parseFloat(el.value));
  });
};

bindSlider('slide-smooth', 'val-smooth', '', v => store.state.config.smoothK = v);
bindSlider('slide-enter-vertex', 'val-enter-vertex', '°', v => store.state.config.enterVertex = v);
bindSlider('slide-exit-vertex', 'val-exit-vertex', '°', v => store.state.config.exitVertex = v);
bindSlider('slide-enter-sbase', 'val-enter-sbase', '°', v => store.state.config.enterSBase = v);
bindSlider('slide-exit-sbase', 'val-exit-sbase', '°', v => store.state.config.exitSBase = v);
bindSlider('slide-enter-flip', 'val-enter-flip', '°', v => {
  store.state.config.enterFlip = v;
  store.state.config.exitFlip = v - 5;
});

// i18n and Language Detection
let currentLang = 'pt';
const langSelect = document.getElementById('lang-select') as HTMLSelectElement;
const courtSelect = document.getElementById('court-select') as HTMLSelectElement;

function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  const parseLang = (l: string) => {
    l = l.toLowerCase();
    if (l.startsWith('ja') || l.startsWith('jp')) return 'jp';
    if (l.startsWith('en')) return 'en';
    if (l.startsWith('pt')) return 'pt';
    return null;
  };

  if (langParam) {
    const matched = parseLang(langParam);
    if (matched) return matched;
  }
  
  const navLang = navigator.language || '';
  const matchedNav = parseLang(navLang);
  return matchedNav || 'pt';
}

currentLang = detectLanguage();
if (langSelect) langSelect.value = currentLang;

// Help Modal Tabs & Content
let activeHelpTab = 'usage';

function renderHelpTabContent() {
  const s = i18n[currentLang];
  if (!helpTabContent) return;
  if (activeHelpTab === 'usage') helpTabContent.innerHTML = s.helpUsageBody;
  else if (activeHelpTab === 'modes') helpTabContent.innerHTML = s.helpModesBody;
  else if (activeHelpTab === 'viz') helpTabContent.innerHTML = s.helpVizBody;
  else if (activeHelpTab === 'advanced') helpTabContent.innerHTML = s.helpAdvancedBody;
  else if (activeHelpTab === 'scenarios') helpTabContent.innerHTML = s.helpScenariosBody;
  else if (activeHelpTab === 'concept') helpTabContent.innerHTML = s.helpConceptBody;
  else if (activeHelpTab === 'disclaimer') helpTabContent.innerHTML = s.helpDisclaimerBody;
}

function setActiveHelpTab(tab: string) {
  activeHelpTab = tab;
  document.querySelectorAll('.help-tab-btn').forEach(btn => {
    const t = btn.getAttribute('data-tab');
    if (t === tab) {
      btn.className = 'help-tab-btn px-3 py-1.5 rounded-lg bg-[#bc002d] text-white transition whitespace-nowrap cursor-pointer';
    } else {
      btn.className = 'help-tab-btn px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition whitespace-nowrap cursor-pointer';
    }
  });
  renderHelpTabContent();
}

function openHelpModal(tab: string = 'usage') {
  setActiveHelpTab(tab);
  if (helpModal) helpModal.classList.remove('hidden');
}

function closeHelpModal() {
  if (helpModal) helpModal.classList.add('hidden');
}

if (helpBtn) helpBtn.addEventListener('click', () => openHelpModal('usage'));
if (panelHelpBtn) panelHelpBtn.addEventListener('click', () => openHelpModal('usage'));
if (helpModalClose) helpModalClose.addEventListener('click', closeHelpModal);
if (helpModalBottomClose) helpModalBottomClose.addEventListener('click', closeHelpModal);

if (helpModal) {
  helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) closeHelpModal();
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && helpModal && !helpModal.classList.contains('hidden')) {
    closeHelpModal();
  }
});

document.querySelectorAll('.help-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab') || 'usage';
    setActiveHelpTab(tab);
  });
});

// Mode Visuals Management
function applyModeVisuals() {
  const isRpg = renderer.isRPGMode;
  const s = i18n[currentLang];
  const tipBody = document.getElementById('ui-tip-body');

  if (isRpg) {
    btnModeRpg.classList.replace('text-gray-400', 'text-white');
    btnModeRpg.classList.add('bg-[#bc002d]', 'shadow-lg');
    btnModeRpg.classList.remove('hover:text-white');

    btnModeTech.classList.replace('text-white', 'text-gray-400');
    btnModeTech.classList.remove('bg-[#bc002d]', 'shadow-lg');
    btnModeTech.classList.add('hover:text-white');

    // Rendered Mode: clean tatame, only triangle and movement trails
    renderer.showTriangle = true;
    renderer.showSquareS = false;
    renderer.showSquareF1 = false;
    renderer.showSquareF2 = false;
    renderer.showNames = false;
    renderer.showDirection = false;
    renderer.showTrails = true;

    if (techAdvancedSection) techAdvancedSection.style.display = 'none';
    if (debugPanel) debugPanel.classList.add('hidden');
    if (techLegend) techLegend.classList.add('hidden');
    if (renderedLegend) renderedLegend.classList.remove('hidden');

    if (tipBody) tipBody.innerHTML = s.tipBodyRendered;
  } else {
    btnModeTech.classList.replace('text-gray-400', 'text-white');
    btnModeTech.classList.add('bg-[#bc002d]', 'shadow-lg');
    btnModeTech.classList.remove('hover:text-white');

    btnModeRpg.classList.replace('text-white', 'text-gray-400');
    btnModeRpg.classList.remove('bg-[#bc002d]', 'shadow-lg');
    btnModeRpg.classList.add('hover:text-white');

    // Technical Mode: full geometric diagram and referee zones
    renderer.showTriangle = true;
    renderer.showSquareS = true;
    renderer.showSquareF1 = true;
    renderer.showSquareF2 = true;
    renderer.showNames = true;
    renderer.showDirection = true;
    renderer.showTrails = true;

    if (techAdvancedSection) techAdvancedSection.style.display = 'block';
    if (debugPanel) debugPanel.classList.remove('hidden');
    if (techLegend) techLegend.classList.remove('hidden');
    if (renderedLegend) renderedLegend.classList.add('hidden');

    if (tipBody) tipBody.innerHTML = s.tipBody;
  }
}

// Scenarios Floating Widget Setup (Option A)
const scenarioChipLabels: Record<string, string> = {
  '1A: Giro Lento 360º': '1A',
  '1B: Teste Vertex': '1B',
  '1C: Teste S_BASE': '1C',
  '1D: Giro Reverso 360º': '1D',
  '2: Taiatari Swap': '2',
  '3: Tsubazeriai Pião': '3',
  '4: Inversão perto de 90º': '4',
  '5: Inversão perto de 135º': '5',
};

function getScenarioTranslatedTitle(id: string): string {
  const s = i18n[currentLang];
  if (id === '1A: Giro Lento 360º') return s.scen1A;
  if (id === '1B: Teste Vertex') return s.scen1B;
  if (id === '1C: Teste S_BASE') return s.scen1C;
  if (id === '1D: Giro Reverso 360º') return s.scen1D;
  if (id === '2: Taiatari Swap') return s.scen2;
  if (id === '3: Tsubazeriai Pião') return s.scen3;
  if (id === '4: Inversão perto de 90º') return s.scen4;
  if (id === '5: Inversão perto de 135º') return s.scen5;
  return id;
}

let activeScenarioId: string | null = null;

function updateScenarioActiveUI() {
  const currentActive = scenarioRunner.getActiveId();
  activeScenarioId = currentActive;

  document.querySelectorAll<HTMLButtonElement>('.scenario-chip-btn').forEach(btn => {
    const scId = btn.getAttribute('data-scenario');
    if (scId === currentActive) {
      btn.className = "scenario-chip-btn px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#bc002d] text-white border border-red-400 shadow-md transition scale-105 cursor-pointer";
    } else {
      btn.className = "scenario-chip-btn px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/10 transition cursor-pointer";
    }
  });

  document.querySelectorAll<HTMLButtonElement>('.scenario-list-btn').forEach(btn => {
    const scId = btn.getAttribute('data-scenario');
    if (scId === currentActive) {
      btn.className = "scenario-list-btn w-full text-left px-3 py-1.5 bg-[#bc002d]/30 border border-red-500/70 rounded text-white font-semibold transition text-xs shadow-sm cursor-pointer";
    } else {
      btn.className = "scenario-list-btn w-full text-left px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-gray-300 hover:text-white font-medium transition text-xs shadow-sm cursor-pointer";
    }
  });
}

function initScenariosWidget() {
  if (!scenarioChipsContainer || !scenarioExpandedList) return;
  scenarioChipsContainer.innerHTML = '';
  scenarioExpandedList.innerHTML = '';

  for (const scenarioId of Object.keys(scenarios)) {
    const shortLabel = scenarioChipLabels[scenarioId] || scenarioId.substring(0, 2);
    
    // Compact chip button
    const chip = document.createElement('button');
    chip.className = "scenario-chip-btn px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/10 transition cursor-pointer";
    chip.setAttribute('data-scenario', scenarioId);
    chip.textContent = shortLabel;
    chip.title = getScenarioTranslatedTitle(scenarioId);
    chip.onclick = () => {
      renderer.clearTrails();
      scenarioRunner.start(scenarioId, performance.now() / 1000);
      updateScenarioActiveUI();
    };
    scenarioChipsContainer.appendChild(chip);

    // Expanded card button
    const listBtn = document.createElement('button');
    listBtn.className = "scenario-list-btn w-full text-left px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-gray-300 hover:text-white font-medium transition text-xs shadow-sm cursor-pointer";
    listBtn.setAttribute('data-scenario', scenarioId);
    listBtn.textContent = getScenarioTranslatedTitle(scenarioId);
    listBtn.onclick = () => {
      renderer.clearTrails();
      scenarioRunner.start(scenarioId, performance.now() / 1000);
      updateScenarioActiveUI();
    };
    scenarioExpandedList.appendChild(listBtn);
  }
}

if (scenariosExpandBtn) {
  scenariosExpandBtn.addEventListener('click', () => {
    if (scenariosExpanded) scenariosExpanded.classList.remove('hidden');
  });
}
if (scenariosCollapseBtn) {
  scenariosCollapseBtn.addEventListener('click', () => {
    if (scenariosExpanded) scenariosExpanded.classList.add('hidden');
  });
}

const stopScenario = () => {
  scenarioRunner.stop();
  updateScenarioActiveUI();
};

if (scenarioStopBtnCompact) scenarioStopBtnCompact.addEventListener('click', stopScenario);
if (scenarioStopBtnExpanded) scenarioStopBtnExpanded.addEventListener('click', stopScenario);

// Update UI Strings for Translations
function updateUIStrings() {
  const s = i18n[currentLang];
  
  const setHtml = (id: string, html: string) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  const setText = (id: string, txt: string) => { const e = document.getElementById(id); if (e) e.textContent = txt; };

  setText('ui-app-title', s.title);
  setHtml('ui-lang-label', `<i class="fas fa-language"></i> ${s.langLabel}`);
  setHtml('ui-court-label', `<i class="fas fa-ruler-combined"></i> ${s.courtSize}`);
  setText('ui-description', s.description);
  
  setText('btn-mode-tech', s.modeTech);
  setText('btn-mode-rpg', s.modeRpg);

  // Button tooltips & labels
  setText('ui-help-btn-label', currentLang === 'jp' ? '使い方' : (currentLang === 'en' ? 'Help' : 'Ajuda'));
  if (helpBtn) helpBtn.title = s.helpBtnTooltip;
  if (panelHelpBtn) panelHelpBtn.title = s.helpBtnTooltip;
  if (resetBtn) resetBtn.title = s.resetTooltip;
  if (floatingResetBtn) floatingResetBtn.title = s.resetTooltip;
  if (openPanelBtn) openPanelBtn.title = s.openPanelTooltip;
  if (togglePanelBtn) togglePanelBtn.title = s.closePanelTooltip;

  setText('ui-label-legend', s.labelLegend);
  setText('ui-leg-white', s.legWhite);
  setText('ui-leg-red', s.legRed);
  setText('ui-leg-s', s.legS);
  setText('ui-leg-f1', s.legF1);
  setText('ui-leg-f2', s.legF2);
  setText('ui-leg-kenshi-shiro', s.legKenshiShiro);
  setText('ui-leg-kenshi-aka', s.legKenshiAka);
  setText('ui-leg-shinpan-trio', s.legShinpanTrio);
  
  setText('ui-advanced-title', s.advancedTitle);
  setText('ui-advanced-section-motion', s.advancedSectionMotion);
  setText('ui-smooth-label', s.smoothLabel);
  
  setText('ui-advanced-section-thresholds', s.advancedSectionThresholds);
  setText('ui-th-enter-vertex', s.thEnterVertex);
  setText('ui-th-exit-vertex', s.thExitVertex);
  setText('ui-th-enter-sbase', s.thEnterSbase);
  setText('ui-th-exit-sbase', s.thExitSbase);
  setText('ui-th-enter-flip', s.thEnterFlip);
  
  setText('ui-advanced-note', s.advancedNote);
  setText('ui-tip-title', s.tipTitle);
  setHtml('ui-tip-body', renderer.isRPGMode ? s.tipBodyRendered : s.tipBody);
  
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

  // Floating scenarios widget strings
  setText('ui-scenarios-compact-title', s.scenariosCompactTitle);
  setText('ui-scenarios-expanded-title', s.scenariosExpandedTitle);
  setText('ui-stop-label-expanded', s.stopScenario);
  if (scenarioStopBtnCompact) scenarioStopBtnCompact.title = s.stopScenarioTooltip;
  if (scenarioStopBtnExpanded) scenarioStopBtnExpanded.title = s.stopScenarioTooltip;
  if (scenariosExpandBtn) scenariosExpandBtn.title = s.expandScenariosTooltip;
  if (scenariosCollapseBtn) scenariosCollapseBtn.title = s.collapseScenariosTooltip;

  // Refresh scenario buttons in widget
  document.querySelectorAll<HTMLButtonElement>('.scenario-chip-btn').forEach(btn => {
    const scId = btn.getAttribute('data-scenario');
    if (scId) btn.title = getScenarioTranslatedTitle(scId);
  });
  document.querySelectorAll<HTMLButtonElement>('.scenario-list-btn').forEach(btn => {
    const scId = btn.getAttribute('data-scenario');
    if (scId) btn.textContent = getScenarioTranslatedTitle(scId);
  });

  // Help modal
  setText('help-modal-title', s.helpModalTitle);
  setText('help-modal-bottom-close', s.helpCloseBtn);
  setText('tab-btn-usage', s.helpTabUsage);
  setText('tab-btn-modes', s.helpTabModes);
  setText('tab-btn-viz', s.helpTabViz);
  setText('tab-btn-advanced', s.helpTabAdvanced);
  setText('tab-btn-scenarios', s.helpTabScenarios);
  setText('tab-btn-concept', s.helpTabConcept);
  setText('tab-btn-disclaimer', s.helpTabDisclaimer);
  renderHelpTabContent();
}

initScenariosWidget();
updateUIStrings();
applyModeVisuals();

if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    currentLang = (e.target as HTMLSelectElement).value;
    updateUIStrings();
    if (currentLang === 'jp') {
      document.body.classList.add('lang-jp');
    } else {
      document.body.classList.remove('lang-jp');
    }
  });
}

if (currentLang === 'jp') document.body.classList.add('lang-jp');

if (courtSelect) {
  courtSelect.addEventListener('change', (e) => {
    const size = parseFloat((e.target as HTMLSelectElement).value);
    store.state.config.courtSize = size;
    store.resetPositions();
    renderer.clearTrails();
  });
}

// Collapsible Panel Events
if (togglePanelBtn) {
  togglePanelBtn.addEventListener('click', () => {
    controlsContainer.classList.add('collapsed');
    setTimeout(() => {
      openPanelBtn.classList.remove('hidden');
      floatingResetBtn.classList.remove('hidden');
    }, 300);
  });
}

if (openPanelBtn) {
  openPanelBtn.addEventListener('click', () => {
    openPanelBtn.classList.add('hidden');
    floatingResetBtn.classList.add('hidden');
    controlsContainer.classList.remove('collapsed');
  });
}

const handleReset = () => {
  scenarioRunner.stop();
  store.resetPositions();
  renderer.clearTrails();
  updateScenarioActiveUI();
};

if (resetBtn) resetBtn.addEventListener('click', handleReset);
if (floatingResetBtn) floatingResetBtn.addEventListener('click', handleReset);

// Mode Toggle Events
btnModeTech.addEventListener('click', () => {
  renderer.isRPGMode = false;
  applyModeVisuals();
});

btnModeRpg.addEventListener('click', () => {
  renderer.isRPGMode = true;
  applyModeVisuals();
});

// Pointer Interaction
function isHit(p: Vector2D, ent: Vector2D, r: number, isTouch: boolean): boolean {
  const hitDist = isTouch ? r * 2.5 : r * 1.5;
  return Math.hypot(p.x - ent.x, p.y - ent.y) <= hitDist;
}

canvas.addEventListener('pointerdown', (e) => {
  scenarioRunner.stop();
  updateScenarioActiveUI();
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
  const half = store.state.config.courtSize / 2;
  const clamp = (v: number) => Math.min(Math.max(v, -half), half);
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

  scenarioRunner.update(store, ts / 1000);
  if (!scenarioRunner.isActive() && activeScenarioId !== null) {
    updateScenarioActiveUI();
  }

  engine.update(ts);
  renderer.pushTrails(store.state);
  renderer.render(store.state);

  if (!renderer.isRPGMode && debugAcc > 0.1) {
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
