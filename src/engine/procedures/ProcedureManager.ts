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
  isBowing: boolean;
}

interface StepSnapshot {
  shushin: RefereeSnapshot;
  fukushin1: RefereeSnapshot;
  fukushin2: RefereeSnapshot;
  substitute?: RefereeSnapshot;
  nextGroup?: {
    shushin: RefereeSnapshot;
    fukushin1: RefereeSnapshot;
    fukushin2: RefereeSnapshot;
  };
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
  public nextGroupReferees: { shushin: Referee; fukushin1: Referee; fukushin2: Referee } | null = null;

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
        flagsInRightHand: shushin.flagsInRightHand ?? true,
        isBowing: shushin.isBowing ?? false
      },
      fukushin1: {
        x: fukushin1.x,
        y: fukushin1.y,
        heading: fukushin1.heading ?? -Math.PI / 2,
        flagsRolled: fukushin1.flagsRolled ?? true,
        flagsInRightHand: fukushin1.flagsInRightHand ?? true,
        isBowing: fukushin1.isBowing ?? false
      },
      fukushin2: {
        x: fukushin2.x,
        y: fukushin2.y,
        heading: fukushin2.heading ?? -Math.PI / 2,
        flagsRolled: fukushin2.flagsRolled ?? true,
        flagsInRightHand: fukushin2.flagsInRightHand ?? true,
        isBowing: fukushin2.isBowing ?? false
      }
    };
    if (this.substituteReferee) {
      this.fromSnapshot.substitute = {
        x: this.substituteReferee.x,
        y: this.substituteReferee.y,
        heading: this.substituteReferee.heading ?? Math.PI,
        flagsRolled: this.substituteReferee.flagsRolled ?? true,
        flagsInRightHand: this.substituteReferee.flagsInRightHand ?? true,
        isBowing: this.substituteReferee.isBowing ?? false
      };
    }
    if (this.nextGroupReferees) {
      this.fromSnapshot.nextGroup = {
        shushin: {
          x: this.nextGroupReferees.shushin.x,
          y: this.nextGroupReferees.shushin.y,
          heading: this.nextGroupReferees.shushin.heading ?? Math.PI,
          flagsRolled: this.nextGroupReferees.shushin.flagsRolled ?? true,
          flagsInRightHand: this.nextGroupReferees.shushin.flagsInRightHand ?? true,
          isBowing: this.nextGroupReferees.shushin.isBowing ?? false
        },
        fukushin1: {
          x: this.nextGroupReferees.fukushin1.x,
          y: this.nextGroupReferees.fukushin1.y,
          heading: this.nextGroupReferees.fukushin1.heading ?? Math.PI,
          flagsRolled: this.nextGroupReferees.fukushin1.flagsRolled ?? true,
          flagsInRightHand: this.nextGroupReferees.fukushin1.flagsInRightHand ?? true,
          isBowing: this.nextGroupReferees.fukushin1.isBowing ?? false
        },
        fukushin2: {
          x: this.nextGroupReferees.fukushin2.x,
          y: this.nextGroupReferees.fukushin2.y,
          heading: this.nextGroupReferees.fukushin2.heading ?? Math.PI,
          flagsRolled: this.nextGroupReferees.fukushin2.flagsRolled ?? true,
          flagsInRightHand: this.nextGroupReferees.fukushin2.flagsInRightHand ?? true,
          isBowing: this.nextGroupReferees.fukushin2.isBowing ?? false
        }
      };
    }
  }

  private applyStepSnapshot(chapterIdx: number, stepIdx: number, instant: boolean) {
    const chapter = procedureChapters[chapterIdx];
    const step = chapter.steps[stepIdx];
    const courtSize = this.store.state.config.courtSize;
    const initialTargets = (instant && step.getInitialTargets)
      ? step.getInitialTargets(courtSize, this.config)
      : step.getTargets(courtSize, this.config);

    if (instant) {
      this.store.state.shushin.x = initialTargets.shushin.x;
      this.store.state.shushin.y = initialTargets.shushin.y;
      this.store.state.shushin.heading = initialTargets.shushin.heading;
      this.store.state.shushin.flagsRolled = initialTargets.shushin.flagsRolled;
      this.store.state.shushin.flagsInRightHand = initialTargets.shushin.flagsInRightHand;
      this.store.state.shushin.isBowing = initialTargets.shushin.isBowing ?? false;

      this.store.state.fukushin1.x = initialTargets.fukushin1.x;
      this.store.state.fukushin1.y = initialTargets.fukushin1.y;
      this.store.state.fukushin1.heading = initialTargets.fukushin1.heading;
      this.store.state.fukushin1.flagsRolled = initialTargets.fukushin1.flagsRolled;
      this.store.state.fukushin1.flagsInRightHand = initialTargets.fukushin1.flagsInRightHand;
      this.store.state.fukushin1.isBowing = initialTargets.fukushin1.isBowing ?? false;

      this.store.state.fukushin2.x = initialTargets.fukushin2.x;
      this.store.state.fukushin2.y = initialTargets.fukushin2.y;
      this.store.state.fukushin2.heading = initialTargets.fukushin2.heading;
      this.store.state.fukushin2.flagsRolled = initialTargets.fukushin2.flagsRolled;
      this.store.state.fukushin2.flagsInRightHand = initialTargets.fukushin2.flagsInRightHand;
      this.store.state.fukushin2.isBowing = initialTargets.fukushin2.isBowing ?? false;

      if (initialTargets.substitute) {
        this.substituteReferee = {
          x: initialTargets.substitute.x,
          y: initialTargets.substitute.y,
          color: '#eab308',
          label: 'Sub',
          radius: 0.3,
          heading: initialTargets.substitute.heading,
          flagsRolled: initialTargets.substitute.flagsRolled,
          flagsInRightHand: initialTargets.substitute.flagsInRightHand,
          isBowing: initialTargets.substitute.isBowing ?? false
        };
      } else {
        this.substituteReferee = null;
      }

      if (initialTargets.nextGroup) {
        this.nextGroupReferees = {
          shushin: {
            x: initialTargets.nextGroup.shushin.x,
            y: initialTargets.nextGroup.shushin.y,
            color: '#38bdf8',
            label: 'S₂',
            radius: 0.3,
            heading: initialTargets.nextGroup.shushin.heading,
            flagsRolled: initialTargets.nextGroup.shushin.flagsRolled,
            flagsInRightHand: initialTargets.nextGroup.shushin.flagsInRightHand,
            isBowing: initialTargets.nextGroup.shushin.isBowing ?? false
          },
          fukushin1: {
            x: initialTargets.nextGroup.fukushin1.x,
            y: initialTargets.nextGroup.fukushin1.y,
            color: '#38bdf8',
            label: 'F1₂',
            radius: 0.3,
            heading: initialTargets.nextGroup.fukushin1.heading,
            flagsRolled: initialTargets.nextGroup.fukushin1.flagsRolled,
            flagsInRightHand: initialTargets.nextGroup.fukushin1.flagsInRightHand,
            isBowing: initialTargets.nextGroup.fukushin1.isBowing ?? false
          },
          fukushin2: {
            x: initialTargets.nextGroup.fukushin2.x,
            y: initialTargets.nextGroup.fukushin2.y,
            color: '#38bdf8',
            label: 'F2₂',
            radius: 0.3,
            heading: initialTargets.nextGroup.fukushin2.heading,
            flagsRolled: initialTargets.nextGroup.fukushin2.flagsRolled,
            flagsInRightHand: initialTargets.nextGroup.fukushin2.flagsInRightHand,
            isBowing: initialTargets.nextGroup.fukushin2.isBowing ?? false
          }
        };
      } else {
        this.nextGroupReferees = null;
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

    if (targets.nextGroup) {
      if (!this.nextGroupReferees) {
        this.nextGroupReferees = {
          shushin: {
            x: targets.nextGroup.shushin.x,
            y: targets.nextGroup.shushin.y,
            color: '#38bdf8',
            label: 'S₂',
            radius: 0.3,
            heading: targets.nextGroup.shushin.heading,
            flagsRolled: targets.nextGroup.shushin.flagsRolled,
            flagsInRightHand: targets.nextGroup.shushin.flagsInRightHand
          },
          fukushin1: {
            x: targets.nextGroup.fukushin1.x,
            y: targets.nextGroup.fukushin1.y,
            color: '#38bdf8',
            label: 'F1₂',
            radius: 0.3,
            heading: targets.nextGroup.fukushin1.heading,
            flagsRolled: targets.nextGroup.fukushin1.flagsRolled,
            flagsInRightHand: targets.nextGroup.fukushin1.flagsInRightHand
          },
          fukushin2: {
            x: targets.nextGroup.fukushin2.x,
            y: targets.nextGroup.fukushin2.y,
            color: '#38bdf8',
            label: 'F2₂',
            radius: 0.3,
            heading: targets.nextGroup.fukushin2.heading,
            flagsRolled: targets.nextGroup.fukushin2.flagsRolled,
            flagsInRightHand: targets.nextGroup.fukushin2.flagsInRightHand
          }
        };
      }
      const fromNext = this.fromSnapshot!.nextGroup || targets.nextGroup;
      this.interpolateReferee(this.nextGroupReferees.shushin, fromNext.shushin, targets.nextGroup.shushin, t, rawProgress);
      this.interpolateReferee(this.nextGroupReferees.fukushin1, fromNext.fukushin1, targets.nextGroup.fukushin1, t, rawProgress);
      this.interpolateReferee(this.nextGroupReferees.fukushin2, fromNext.fukushin2, targets.nextGroup.fukushin2, t, rawProgress);
    } else {
      this.nextGroupReferees = null;
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
    const wasBowing = from.isBowing === true;
    const willBow = to.isBowing === true;
    const hasMovement = (
      Math.abs(from.x - to.x) > 0.01 ||
      Math.abs(from.y - to.y) > 0.01 ||
      (to.headingDelta !== undefined && Math.abs(to.headingDelta) > 0.01) ||
      (from.heading !== undefined && to.heading !== undefined && Math.abs(angleDiff(from.heading, to.heading)) > 0.05)
    );

    let moveEasedT = easedT;
    if (wasBowing && !willBow && hasMovement) {
      // Transição do Rei para o sprite natural antes de qualquer movimentação
      const unbowDelay = 0.20;
      if (rawT < unbowDelay) {
        moveEasedT = 0;
      } else {
        const adjustedRaw = (rawT - unbowDelay) / (1.0 - unbowDelay);
        moveEasedT = easeInOutCubic(Math.min(1.0, adjustedRaw));
      }
    }

    current.x = from.x + (to.x - from.x) * moveEasedT;
    current.y = from.y + (to.y - from.y) * moveEasedT;

    if (to.headingDelta !== undefined && from.heading !== undefined) {
      current.heading = from.heading + to.headingDelta * moveEasedT;
    } else if (from.heading !== undefined && to.heading !== undefined) {
      const diff = angleDiff(from.heading, to.heading);
      current.heading = from.heading + diff * moveEasedT;
    } else if (to.heading !== undefined) {
      current.heading = to.heading;
    }

    if (rawT >= 0.3) {
      current.flagsRolled = to.flagsRolled;
      current.flagsInRightHand = to.flagsInRightHand;
    } else {
      current.flagsRolled = from.flagsRolled;
      current.flagsInRightHand = from.flagsInRightHand;
    }

    // Lógica canônica de transição do Rei
    if (wasBowing && !willBow) {
      current.isBowing = false;
    } else if (!wasBowing && willBow) {
      if (hasMovement) {
        // Posicionar primeiro no triângulo e somente ao atingir a posição mudar para o Rei
        current.isBowing = rawT >= 1.0;
      } else {
        current.isBowing = true;
      }
    } else {
      current.isBowing = willBow;
    }
  }
}
