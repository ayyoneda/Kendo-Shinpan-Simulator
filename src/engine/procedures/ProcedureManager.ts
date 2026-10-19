import { procedureChapters } from './definitions';
import type { ProcedureChapter, ProcedureConfig, ProcedureStep, RefereeVisualState, RotationVariant, ShinpanSeatsSide } from './types';
import type { SimulationStore } from '../State';
import type { Referee } from '../types';
import { angleDiff } from '../../math/utils';

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface RefereeSnapshot {
  x: number;
  y: number;
  heading: number;
  flagsRolled: boolean;
  flagsInRightHand: boolean;
}

interface StepSnapshot {
  shushin: RefereeSnapshot;
  fukushin1: RefereeSnapshot;
  fukushin2: RefereeSnapshot;
  substitute?: RefereeSnapshot;
}

export class ProcedureManager {
  private store: SimulationStore;
  private config: ProcedureConfig = {
    seatsSide: 'LEFT',
    rotationVariant: 'REGULAR'
  };
  private currentChapterIndex = 0;
  private currentStepIndex = 0;
  private stepElapsed = 0;
  private isPlayingActive = false;
  private playbackSpeed = 1.0;
  private pauseOnStep = true;
  private fromSnapshot: StepSnapshot | null = null;
  public substituteReferee: Referee | null = null;

  constructor(store: SimulationStore) {
    this.store = store;
    this.applyStepSnapshot(0, 0, true);
  }

  public getCurrentChapter(): ProcedureChapter {
    return procedureChapters[this.currentChapterIndex];
  }

  public getCurrentStep(): ProcedureStep {
    return this.getCurrentChapter().steps[this.currentStepIndex];
  }

  public getCurrentStepIndex(): number {
    return this.currentStepIndex;
  }

  public isPlaying(): boolean {
    return this.isPlayingActive;
  }

  public getPlaybackSpeed(): number {
    return this.playbackSpeed;
  }

  public setPlaybackSpeed(speed: number) {
    this.playbackSpeed = speed;
  }

  public setPauseOnStepComplete(val: boolean) {
    this.pauseOnStep = val;
  }

  public isPauseOnStepComplete(): boolean {
    return this.pauseOnStep;
  }

  public play() {
    if (this.getProgress() >= 1.0) {
      const chapter = this.getCurrentChapter();
      if (this.currentStepIndex < chapter.steps.length - 1) {
        this.nextStep();
      } else {
        this.reset();
      }
    }
    this.isPlayingActive = true;
  }

  public pause() {
    this.isPlayingActive = false;
  }

  public togglePlay() {
    if (this.isPlayingActive) this.pause();
    else this.play();
  }

  public getSeatsSide(): ShinpanSeatsSide {
    return this.config.seatsSide;
  }

  public setSeatsSide(side: ShinpanSeatsSide) {
    this.config.seatsSide = side;
    this.applyStepSnapshot(this.currentChapterIndex, this.currentStepIndex, true);
  }

  public getRotationVariant(): RotationVariant {
    return this.config.rotationVariant;
  }

  public setRotationVariant(v: RotationVariant) {
    this.config.rotationVariant = v;
    const curId = this.getCurrentChapter().id;
    if (curId === 'rotation' || curId === 'rotation_koutai') {
      this.setChapter(v === 'KOUTAI' ? 'rotation_koutai' : 'rotation');
    } else {
      this.applyStepSnapshot(this.currentChapterIndex, this.currentStepIndex, true);
    }
  }

  public getConfig(): ProcedureConfig {
    return { ...this.config };
  }

  public setChapter(chapterId: string) {
    let targetId = chapterId;
    if (chapterId === 'rotation' && this.config.rotationVariant === 'KOUTAI') {
      targetId = 'rotation_koutai';
    } else if (chapterId === 'rotation_koutai' && this.config.rotationVariant === 'REGULAR') {
      targetId = 'rotation';
    }

    const idx = procedureChapters.findIndex(c => c.id === targetId);
    if (idx !== -1) {
      this.currentChapterIndex = idx;
      this.currentStepIndex = 0;
      this.stepElapsed = 0;
      this.isPlayingActive = false;
      this.applyStepSnapshot(this.currentChapterIndex, 0, true);
    }
  }

  public nextStep() {
    const chapter = this.getCurrentChapter();
    if (this.getProgress() < 1.0) {
      this.applyStepSnapshot(this.currentChapterIndex, this.currentStepIndex, true);
    }
    if (this.currentStepIndex < chapter.steps.length - 1) {
      this.captureFromSnapshot();
      this.currentStepIndex++;
      this.stepElapsed = 0;
    } else {
      // Transition to next chapter
      let nextIdx = -1;
      if (chapter.id === 'entry') {
        nextIdx = procedureChapters.findIndex(c => c.id === (this.config.rotationVariant === 'KOUTAI' ? 'rotation_koutai' : 'rotation'));
      } else if (chapter.id === 'rotation' || chapter.id === 'rotation_koutai') {
        nextIdx = procedureChapters.findIndex(c => c.id === 'exit');
      }

      if (nextIdx !== -1) {
        this.currentChapterIndex = nextIdx;
        this.currentStepIndex = 0;
        this.stepElapsed = 0;
        this.applyStepSnapshot(this.currentChapterIndex, 0, true);
      }
    }
  }

  public prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.stepElapsed = 0;
      this.applyStepSnapshot(this.currentChapterIndex, this.currentStepIndex, true);
    } else {
      const curId = this.getCurrentChapter().id;
      let prevIdx = -1;
      if (curId === 'exit') {
        prevIdx = procedureChapters.findIndex(c => c.id === (this.config.rotationVariant === 'KOUTAI' ? 'rotation_koutai' : 'rotation'));
      } else if (curId === 'rotation' || curId === 'rotation_koutai') {
        prevIdx = procedureChapters.findIndex(c => c.id === 'entry');
      }

      if (prevIdx !== -1) {
        this.currentChapterIndex = prevIdx;
        this.currentStepIndex = procedureChapters[prevIdx].steps.length - 1;
        this.stepElapsed = 0;
        this.applyStepSnapshot(this.currentChapterIndex, this.currentStepIndex, true);
      }
    }
  }

  public reset() {
    this.currentStepIndex = 0;
    this.stepElapsed = 0;
    this.isPlayingActive = false;
    this.applyStepSnapshot(this.currentChapterIndex, 0, true);
  }

  public getProgress(): number {
    const step = this.getCurrentStep();
    if (step.durationSec <= 0) return 1.0;
    return Math.min(this.stepElapsed / step.durationSec, 1.0);
  }

  private captureFromSnapshot() {
    const { shushin, fukushin1, fukushin2 } = this.store.state;
    this.fromSnapshot = {
      shushin: {
        x: shushin.x,
        y: shushin.y,
        heading: shushin.heading ?? -Math.PI / 2,
        flagsRolled: shushin.flagsRolled ?? true,
        flagsInRightHand: shushin.flagsInRightHand ?? true
      },
      fukushin1: {
        x: fukushin1.x,
        y: fukushin1.y,
        heading: fukushin1.heading ?? -Math.PI / 2,
        flagsRolled: fukushin1.flagsRolled ?? true,
        flagsInRightHand: fukushin1.flagsInRightHand ?? true
      },
      fukushin2: {
        x: fukushin2.x,
        y: fukushin2.y,
        heading: fukushin2.heading ?? -Math.PI / 2,
        flagsRolled: fukushin2.flagsRolled ?? true,
        flagsInRightHand: fukushin2.flagsInRightHand ?? true
      }
    };
    if (this.substituteReferee) {
      this.fromSnapshot.substitute = {
        x: this.substituteReferee.x,
        y: this.substituteReferee.y,
        heading: this.substituteReferee.heading ?? Math.PI,
        flagsRolled: this.substituteReferee.flagsRolled ?? true,
        flagsInRightHand: this.substituteReferee.flagsInRightHand ?? true
      };
    }
  }

  private applyStepSnapshot(chapterIdx: number, stepIdx: number, instant: boolean) {
    const chapter = procedureChapters[chapterIdx];
    const step = chapter.steps[stepIdx];
    const courtSize = this.store.state.config.courtSize;
    const initialTargets = (instant && stepIdx === 0 && step.getInitialTargets)
      ? step.getInitialTargets(courtSize, this.config)
      : step.getTargets(courtSize, this.config);

    if (instant) {
      this.store.state.shushin.x = initialTargets.shushin.x;
      this.store.state.shushin.y = initialTargets.shushin.y;
      this.store.state.shushin.heading = initialTargets.shushin.heading;
      this.store.state.shushin.flagsRolled = initialTargets.shushin.flagsRolled;
      this.store.state.shushin.flagsInRightHand = initialTargets.shushin.flagsInRightHand;

      this.store.state.fukushin1.x = initialTargets.fukushin1.x;
      this.store.state.fukushin1.y = initialTargets.fukushin1.y;
      this.store.state.fukushin1.heading = initialTargets.fukushin1.heading;
      this.store.state.fukushin1.flagsRolled = initialTargets.fukushin1.flagsRolled;
      this.store.state.fukushin1.flagsInRightHand = initialTargets.fukushin1.flagsInRightHand;

      this.store.state.fukushin2.x = initialTargets.fukushin2.x;
      this.store.state.fukushin2.y = initialTargets.fukushin2.y;
      this.store.state.fukushin2.heading = initialTargets.fukushin2.heading;
      this.store.state.fukushin2.flagsRolled = initialTargets.fukushin2.flagsRolled;
      this.store.state.fukushin2.flagsInRightHand = initialTargets.fukushin2.flagsInRightHand;

      if (initialTargets.substitute) {
        this.substituteReferee = {
          x: initialTargets.substitute.x,
          y: initialTargets.substitute.y,
          color: '#eab308',
          label: 'Sub',
          radius: 0.3,
          heading: initialTargets.substitute.heading,
          flagsRolled: initialTargets.substitute.flagsRolled,
          flagsInRightHand: initialTargets.substitute.flagsInRightHand
        };
      } else {
        this.substituteReferee = null;
      }
      this.captureFromSnapshot();
    }
  }

  public update(dt: number) {
    if (!this.isPlayingActive) return;

    const step = this.getCurrentStep();
    const courtSize = this.store.state.config.courtSize;
    const targets = step.getTargets(courtSize, this.config);

    if (!this.fromSnapshot) {
      this.captureFromSnapshot();
    }

    this.stepElapsed += dt * this.playbackSpeed;
    const rawProgress = step.durationSec > 0 ? Math.min(this.stepElapsed / step.durationSec, 1.0) : 1.0;
    const t = easeInOutCubic(rawProgress);

    // Interpolate positions and headings
    this.interpolateReferee(this.store.state.shushin, this.fromSnapshot!.shushin, targets.shushin, t, rawProgress);
    this.interpolateReferee(this.store.state.fukushin1, this.fromSnapshot!.fukushin1, targets.fukushin1, t, rawProgress);
    this.interpolateReferee(this.store.state.fukushin2, this.fromSnapshot!.fukushin2, targets.fukushin2, t, rawProgress);

    if (targets.substitute) {
      if (!this.substituteReferee) {
        this.substituteReferee = {
          x: targets.substitute.x,
          y: targets.substitute.y,
          color: '#eab308',
          label: 'Sub',
          radius: 0.3,
          heading: targets.substitute.heading,
          flagsRolled: targets.substitute.flagsRolled,
          flagsInRightHand: targets.substitute.flagsInRightHand
        };
      }
      const fromSub = this.fromSnapshot!.substitute || targets.substitute;
      this.interpolateReferee(this.substituteReferee, fromSub, targets.substitute, t, rawProgress);
    } else {
      this.substituteReferee = null;
    }

    // Step completion check
    if (rawProgress >= 1.0) {
      const holdTime = step.holdSec ?? 0;
      if (this.stepElapsed >= step.durationSec + holdTime) {
        if (this.pauseOnStep) {
          this.isPlayingActive = false;
        } else {
          this.nextStep();
        }
      }
    }
  }

  private interpolateReferee(
    current: Referee,
    from: RefereeSnapshot | RefereeVisualState,
    to: RefereeVisualState,
    easedT: number,
    rawT: number
  ) {
    current.x = from.x + (to.x - from.x) * easedT;
    current.y = from.y + (to.y - from.y) * easedT;

    if (to.headingDelta !== undefined && from.heading !== undefined) {
      current.heading = from.heading + to.headingDelta * easedT;
    } else if (from.heading !== undefined && to.heading !== undefined) {
      const diff = angleDiff(from.heading, to.heading);
      current.heading = from.heading + diff * easedT;
    } else if (to.heading !== undefined) {
      current.heading = to.heading;
    }

    if (rawT >= 0.5) {
      current.flagsRolled = to.flagsRolled;
      current.flagsInRightHand = to.flagsInRightHand;
    } else {
      current.flagsRolled = from.flagsRolled;
      current.flagsInRightHand = from.flagsInRightHand;
    }
  }
}
