import type { TutorialChapter, TutorialStep } from './tutorialSteps';

export interface TutorialOptions {
  chapters: TutorialChapter[];
  steps: TutorialStep[];
  translate: (key: string) => string;
  onStepChange?: (step: TutorialStep) => void;
  onFinish?: () => void;
  containerId?: string;
}

export class TutorialManager {
  private chapters: TutorialChapter[];
  private steps: TutorialStep[];
  private translate: (key: string) => string;
  private onStepChange?: (step: TutorialStep) => void;
  private onFinish?: () => void;

  private currentStepIndex = 0;
  private active = false;

  private rootEl: HTMLElement | null = null;
  private popoverEl: HTMLElement | null = null;
  private spotlightEl: SVGElement | null = null;
  private spotlightBorderEl: SVGElement | null = null;

  private boundOnKeyDown: (e: KeyboardEvent) => void;
  private boundOnResize: () => void;

  constructor(options: TutorialOptions) {
    this.chapters = options.chapters;
    this.steps = options.steps;
    this.translate = options.translate;
    this.onStepChange = options.onStepChange;
    this.onFinish = options.onFinish;

    this.boundOnKeyDown = this.handleKeyDown.bind(this);
    this.boundOnResize = this.handleResize.bind(this);
  }

  public isActive(): boolean {
    return this.active;
  }

  public getCurrentStepIndex(): number {
    return this.currentStepIndex;
  }

  public getTotalSteps(): number {
    return this.steps.length;
  }

  public getCurrentStep(): TutorialStep {
    return this.steps[this.currentStepIndex] || this.steps[0];
  }

  public getCurrentChapter(): TutorialChapter {
    const currentStep = this.getCurrentStep();
    return this.chapters.find(c => c.id === currentStep.chapterId) || this.chapters[0];
  }

  public start(chapterId?: string, stepIndex?: number): void {
    this.active = true;
    
    if (chapterId) {
      const idx = this.steps.findIndex(s => s.chapterId === chapterId);
      this.currentStepIndex = idx >= 0 ? idx : 0;
    } else if (typeof stepIndex === 'number' && stepIndex >= 0 && stepIndex < this.steps.length) {
      this.currentStepIndex = stepIndex;
    } else {
      this.currentStepIndex = 0;
    }

    if (typeof document !== 'undefined') {
      this.mountDOM();
      window.addEventListener('keydown', this.boundOnKeyDown);
      window.addEventListener('resize', this.boundOnResize);
    }

    this.renderCurrentStep();
  }

  public stop(): void {
    if (!this.active) return;
    this.active = false;

    if (typeof document !== 'undefined') {
      window.removeEventListener('keydown', this.boundOnKeyDown);
      window.removeEventListener('resize', this.boundOnResize);
      this.unmountDOM();
    }
  }

  public next(): void {
    if (!this.active) return;

    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.renderCurrentStep();
    } else {
      this.stop();
      if (this.onFinish) this.onFinish();
    }
  }

  public prev(): void {
    if (!this.active) return;

    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.renderCurrentStep();
    }
  }

  public jumpToStep(index: number): boolean {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
      if (this.active) {
        this.renderCurrentStep();
      }
      return true;
    }
    return false;
  }

  public jumpToChapter(chapterId: string): boolean {
    const idx = this.steps.findIndex(s => s.chapterId === chapterId);
    if (idx >= 0) {
      this.currentStepIndex = idx;
      if (this.active) {
        this.renderCurrentStep();
      }
      return true;
    }
    return false;
  }

  public setTranslator(translateFn: (key: string) => string): void {
    this.translate = translateFn;
    if (this.active && typeof document !== 'undefined') {
      this.renderCurrentStep();
    }
  }

  private renderCurrentStep(): void {
    const step = this.getCurrentStep();
    if (this.onStepChange) {
      this.onStepChange(step);
    }

    if (typeof document === 'undefined' || !this.rootEl) return;

    // Render popover content first so offsetHeight can be measured accurately
    requestAnimationFrame(() => {
      this.updatePopoverContent(step);
      this.updateSpotlight(step);
    });
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (!this.active) return;

    if (e.key === 'Escape') {
      this.stop();
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      this.next();
    } else if (e.key === 'ArrowLeft') {
      this.prev();
    }
  }

  private handleResize(): void {
    if (this.active && this.rootEl) {
      this.updateSpotlight(this.getCurrentStep());
    }
  }

  private mountDOM(): void {
    if (this.rootEl) return;

    const root = document.createElement('div');
    root.id = 'tutorial-root';
    root.className = 'fixed inset-0 z-[100] pointer-events-none select-none';

    // SVG Mask for Spotlight cutout
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'absolute inset-0 w-full h-full pointer-events-none');
    svg.innerHTML = `
      <defs>
        <mask id="tutorial-mask">
          <rect width="100%" height="100%" fill="white" />
          <rect id="tutorial-cutout" x="0" y="0" width="0" height="0" rx="14" ry="14" fill="black" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="rgba(0, 0, 0, 0.75)" mask="url(#tutorial-mask)" />
      <rect id="tutorial-spotlight-border" x="0" y="0" width="0" height="0" rx="14" ry="14" fill="none" stroke="#bc002d" stroke-width="2.5" class="tutorial-pulse" opacity="0" />
    `;

    // Popover Card (with pointer-events-auto and optimized backdrop blur)
    const popover = document.createElement('div');
    popover.id = 'tutorial-popover';
    popover.className = 'absolute w-[92vw] max-w-[420px] bg-[#18181b]/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4 text-gray-200 flex flex-col gap-3 transition-all duration-300 z-10 pointer-events-auto';

    root.appendChild(svg);
    root.appendChild(popover);
    document.body.appendChild(root);

    this.rootEl = root;
    this.popoverEl = popover;
    this.spotlightEl = svg.querySelector('#tutorial-cutout');
    this.spotlightBorderEl = svg.querySelector('#tutorial-spotlight-border');
  }

  private unmountDOM(): void {
    if (this.rootEl && this.rootEl.parentNode) {
      this.rootEl.parentNode.removeChild(this.rootEl);
    }
    this.rootEl = null;
    this.popoverEl = null;
    this.spotlightEl = null;
    this.spotlightBorderEl = null;
  }

  private getTargetRect(step: TutorialStep): { left: number; top: number; width: number; height: number; } | null {
    if (step.targetSelector) {
      const el = document.querySelector(step.targetSelector);
      if (el) {
        const b = el.getBoundingClientRect();
        return { left: b.left, top: b.top, width: b.width, height: b.height };
      }
    } else if (step.canvasArea) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      return {
        left: (step.canvasArea.x / 100) * w,
        top: (step.canvasArea.y / 100) * h,
        width: (step.canvasArea.width / 100) * w,
        height: (step.canvasArea.height / 100) * h
      };
    }
    return null;
  }

  private updateSpotlight(step: TutorialStep): void {
    if (!this.spotlightEl || !this.spotlightBorderEl) return;

    const rect = this.getTargetRect(step);
    const pad = step.highlightPadding || 8;

    if (rect && rect.width > 0 && rect.height > 0) {
      const x = Math.max(0, rect.left - pad);
      const y = Math.max(0, rect.top - pad);
      const width = rect.width + pad * 2;
      const height = rect.height + pad * 2;

      this.spotlightEl.setAttribute('x', x.toString());
      this.spotlightEl.setAttribute('y', y.toString());
      this.spotlightEl.setAttribute('width', width.toString());
      this.spotlightEl.setAttribute('height', height.toString());

      this.spotlightBorderEl.setAttribute('x', x.toString());
      this.spotlightBorderEl.setAttribute('y', y.toString());
      this.spotlightBorderEl.setAttribute('width', width.toString());
      this.spotlightBorderEl.setAttribute('height', height.toString());
      this.spotlightBorderEl.setAttribute('opacity', '1');

      this.positionPopoverAround(x, y, width, height, step.placement || 'bottom');
    } else {
      // Center placement or full viewport overlay
      this.spotlightEl.setAttribute('width', '0');
      this.spotlightEl.setAttribute('height', '0');
      this.spotlightBorderEl.setAttribute('opacity', '0');
      this.positionPopoverCenter();
    }
  }

  private positionPopoverCenter(): void {
    if (!this.popoverEl) return;
    this.popoverEl.style.top = '50%';
    this.popoverEl.style.left = '50%';
    this.popoverEl.style.transform = 'translate(-50%, -50%)';
  }

  private positionPopoverAround(x: number, y: number, w: number, h: number, preferred: string): void {
    if (!this.popoverEl) return;

    const pWidth = Math.min(420, window.innerWidth * 0.92);
    // Measure dynamic rendered height if available, fallback to 290
    const pHeight = this.popoverEl.offsetHeight > 50 ? this.popoverEl.offsetHeight : 290;
    const margin = 14;
    const bottomWidgetSafeZone = 90; // Avoid covering bottom widgets (scenarios widget, footer, reset)

    let posX = 0;
    let posY = 0;

    const fitsBottom = (y + h + pHeight + margin) < (window.innerHeight - bottomWidgetSafeZone);
    const fitsTop = (y - pHeight - margin) > 65; // leaves space below top switcher/controls

    if (preferred === 'top' && fitsTop) {
      posY = y - pHeight - margin;
      posX = x + w / 2 - pWidth / 2;
    } else if (preferred === 'bottom' && fitsBottom) {
      posY = y + h + margin;
      posX = x + w / 2 - pWidth / 2;
    } else if (preferred === 'left' && x - pWidth - margin > 0) {
      posX = x - pWidth - margin;
      posY = y + h / 2 - pHeight / 2;
    } else if (preferred === 'right' && x + w + pWidth + margin < window.innerWidth) {
      posX = x + w + margin;
      posY = y + h / 2 - pHeight / 2;
    } else {
      // Dynamic fallback: prioritize top if it avoids crowding bottom buttons
      if (fitsTop) {
        posY = y - pHeight - margin;
        posX = x + w / 2 - pWidth / 2;
      } else if (fitsBottom) {
        posY = y + h + margin;
        posX = x + w / 2 - pWidth / 2;
      } else if (y > window.innerHeight - (y + h)) {
        posY = Math.max(margin + 50, y - pHeight - margin);
        posX = x + w / 2 - pWidth / 2;
      } else {
        posY = Math.min(window.innerHeight - pHeight - margin - 20, y + h + margin);
        posX = x + w / 2 - pWidth / 2;
      }
    }

    // Clamp inside viewport
    posX = Math.max(margin, Math.min(window.innerWidth - pWidth - margin, posX));
    posY = Math.max(margin, Math.min(window.innerHeight - pHeight - margin - 15, posY));

    this.popoverEl.style.left = `${posX}px`;
    this.popoverEl.style.top = `${posY}px`;
    this.popoverEl.style.transform = 'none';
  }

  private updatePopoverContent(step: TutorialStep): void {
    if (!this.popoverEl) return;

    const total = this.steps.length;
    const currentNum = this.currentStepIndex + 1;
    const chapter = this.getCurrentChapter();

    const t = this.translate;

    // Build Chapter Tabs
    const chapterButtonsHtml = this.chapters.map(chap => {
      const isActive = chap.id === chapter.id;
      const activeClass = isActive
        ? 'bg-[#bc002d] text-white font-bold shadow-md'
        : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white';
      return `
        <button data-tut-chap="${chap.id}" class="tut-chap-btn py-1 px-2.5 rounded-lg text-[10px] sm:text-[11px] whitespace-nowrap transition cursor-pointer flex items-center gap-1 ${activeClass}">
          <i class="fas ${chap.icon}"></i>
          <span>${t(chap.titleKey) || chap.id}</span>
        </button>
      `;
    }).join('');

    const title = t(step.titleKey) || step.id;
    const desc = t(step.descKey) || '';
    const actionTip = step.actionTipKey ? (t(step.actionTipKey) || '') : '';

    const isFirst = this.currentStepIndex === 0;
    const isLast = this.currentStepIndex === total - 1;

    const nextLabel = isLast ? (t('tutBtnFinish') || 'Concluir') : (t('tutBtnNext') || 'Próximo');
    const prevLabel = t('tutBtnPrev') || 'Anterior';
    const skipLabel = t('tutBtnSkip') || 'Pular Tutorial';

    this.popoverEl.innerHTML = `
      <!-- Header with Chapter Switcher and Close -->
      <div class="flex items-center justify-between pb-2 border-b border-white/10 gap-2">
        <div class="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          ${chapterButtonsHtml}
        </div>
        <button id="tut-close-btn" class="text-gray-400 hover:text-white p-1 text-sm transition cursor-pointer" title="Fechar">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Step Counter & Title -->
      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between text-[11px] text-gray-400 font-semibold">
          <span class="text-blue-400 font-bold uppercase tracking-wider">
            ${t('tutStepLabel') || 'Passo'} ${currentNum} / ${total}
          </span>
          <span class="text-gray-400 flex items-center gap-1">
            <i class="fas ${chapter.icon} text-xs text-[#bc002d]"></i>
            ${t(chapter.titleKey)}
          </span>
        </div>
        <h3 class="text-base font-bold text-white m-0 leading-snug">${title}</h3>
      </div>

      <!-- Body Description -->
      <div class="text-xs text-gray-300 leading-relaxed overflow-y-auto max-h-[140px] custom-scrollbar pr-1">
        ${desc}
      </div>

      <!-- Action Tip Box (if available) -->
      ${actionTip ? `
        <div class="bg-[#bc002d]/15 border border-[#bc002d]/30 rounded-xl p-2.5 flex items-start gap-2 text-[11px] text-amber-200">
          <i class="fas fa-lightbulb text-amber-400 mt-0.5 flex-shrink-0"></i>
          <span class="leading-tight">${actionTip}</span>
        </div>
      ` : ''}

      <!-- Footer Navigation Controls -->
      <div class="flex items-center justify-between pt-2 border-t border-white/10 mt-1">
        <button id="tut-skip-btn" class="text-gray-400 hover:text-gray-200 text-[11px] font-medium transition cursor-pointer">
          ${skipLabel}
        </button>

        <div class="flex items-center gap-2">
          <button id="tut-prev-btn" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-xs transition cursor-pointer disabled:opacity-30 disabled:pointer-events-none" ${isFirst ? 'disabled' : ''}>
            <i class="fas fa-chevron-left mr-1 text-[10px]"></i> ${prevLabel}
          </button>
          <button id="tut-next-btn" class="px-4 py-1.5 rounded-lg bg-[#bc002d] hover:bg-red-800 text-white font-bold text-xs shadow-md transition transform active:scale-95 cursor-pointer flex items-center gap-1.5">
            ${nextLabel} <i class="fas ${isLast ? 'fa-check' : 'fa-chevron-right'} text-[10px]"></i>
          </button>
        </div>
      </div>
    `;

    // Wire popover button events
    const closeBtn = this.popoverEl.querySelector('#tut-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.stop());

    const skipBtn = this.popoverEl.querySelector('#tut-skip-btn');
    if (skipBtn) skipBtn.addEventListener('click', () => this.stop());

    const prevBtn = this.popoverEl.querySelector('#tut-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

    const nextBtn = this.popoverEl.querySelector('#tut-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Wire chapter jump buttons
    this.popoverEl.querySelectorAll('.tut-chap-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chapId = btn.getAttribute('data-tut-chap');
        if (chapId) {
          this.jumpToChapter(chapId);
        }
      });
    });
  }
}
