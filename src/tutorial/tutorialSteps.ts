export interface TutorialChapter {
  id: string;
  titleKey: string;
  icon: string;
}

export interface TutorialStep {
  id: string;
  chapterId: string;
  targetSelector: string | null;
  canvasArea?: { x: number; y: number; width: number; height: number }; // Relative percentage (0-100)
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  titleKey: string;
  descKey: string;
  actionTipKey?: string;
  requiredMode?: 'PROCEDURE' | 'COMBAT';
  highlightPadding?: number;
}

export const TUTORIAL_CHAPTERS: TutorialChapter[] = [
  { id: 'overview', titleKey: 'tutChapOverview', icon: 'fa-compass' },
  { id: 'procedures', titleKey: 'tutChapProcedures', icon: 'fa-scroll' },
  { id: 'combat', titleKey: 'tutChapCombat', icon: 'fa-fist-raised' }
];

export const TUTORIAL_STEPS: TutorialStep[] = [
  // Chapter 1: Visão Geral & Módulos
  {
    id: 'step_welcome',
    chapterId: 'overview',
    targetSelector: null,
    placement: 'center',
    titleKey: 'tutStepWelcomeTitle',
    descKey: 'tutStepWelcomeDesc',
    actionTipKey: 'tutStepWelcomeTip'
  },
  {
    id: 'step_mode_switch',
    chapterId: 'overview',
    targetSelector: '#btn-sim-procedure',
    placement: 'bottom',
    titleKey: 'tutStepModeSwitchTitle',
    descKey: 'tutStepModeSwitchDesc',
    actionTipKey: 'tutStepModeSwitchTip',
    highlightPadding: 8
  },
  {
    id: 'step_settings',
    chapterId: 'overview',
    targetSelector: '#controls-container',
    placement: 'right',
    titleKey: 'tutStepSettingsTitle',
    descKey: 'tutStepSettingsDesc',
    actionTipKey: 'tutStepSettingsTip',
    highlightPadding: 6
  },

  // Chapter 2: Procedimentos FIK
  {
    id: 'step_proc_panel',
    chapterId: 'procedures',
    targetSelector: '#procedure-widget',
    requiredMode: 'PROCEDURE',
    placement: 'left',
    titleKey: 'tutStepProcPanelTitle',
    descKey: 'tutStepProcPanelDesc',
    actionTipKey: 'tutStepProcPanelTip',
    highlightPadding: 6
  },
  {
    id: 'step_proc_controls',
    chapterId: 'procedures',
    targetSelector: '#proc-play-btn',
    requiredMode: 'PROCEDURE',
    placement: 'left',
    titleKey: 'tutStepProcControlsTitle',
    descKey: 'tutStepProcControlsDesc',
    actionTipKey: 'tutStepProcControlsTip',
    highlightPadding: 10
  },
  {
    id: 'step_proc_court',
    chapterId: 'procedures',
    targetSelector: null,
    requiredMode: 'PROCEDURE',
    canvasArea: { x: 35, y: 38, width: 30, height: 26 },
    placement: 'top',
    titleKey: 'tutStepProcCourtTitle',
    descKey: 'tutStepProcCourtDesc',
    actionTipKey: 'tutStepProcCourtTip'
  },

  // Chapter 3: Combate Reativo & Cenários
  {
    id: 'step_combat_intro',
    chapterId: 'combat',
    targetSelector: '#btn-sim-combat',
    requiredMode: 'COMBAT',
    placement: 'bottom',
    titleKey: 'tutStepCombatIntroTitle',
    descKey: 'tutStepCombatIntroDesc',
    actionTipKey: 'tutStepCombatIntroTip',
    highlightPadding: 8
  },
  {
    id: 'step_combat_drag',
    chapterId: 'combat',
    targetSelector: null,
    requiredMode: 'COMBAT',
    canvasArea: { x: 38, y: 40, width: 24, height: 22 },
    placement: 'top',
    titleKey: 'tutStepCombatDragTitle',
    descKey: 'tutStepCombatDragDesc',
    actionTipKey: 'tutStepCombatDragTip'
  },
  {
    id: 'step_combat_modes',
    chapterId: 'combat',
    targetSelector: '#mode-render-toggle-container',
    requiredMode: 'COMBAT',
    placement: 'bottom',
    titleKey: 'tutStepCombatModesTitle',
    descKey: 'tutStepCombatModesDesc',
    actionTipKey: 'tutStepCombatModesTip',
    highlightPadding: 6
  },
  {
    id: 'step_combat_scenarios',
    chapterId: 'combat',
    targetSelector: '#scenarios-widget',
    requiredMode: 'COMBAT',
    placement: 'left',
    titleKey: 'tutStepCombatScenariosTitle',
    descKey: 'tutStepCombatScenariosDesc',
    actionTipKey: 'tutStepCombatScenariosTip',
    highlightPadding: 6
  },
  {
    id: 'step_conclusion',
    chapterId: 'combat',
    targetSelector: '#help-btn',
    placement: 'bottom',
    titleKey: 'tutStepConclusionTitle',
    descKey: 'tutStepConclusionDesc',
    actionTipKey: 'tutStepConclusionTip',
    highlightPadding: 6
  }
];
