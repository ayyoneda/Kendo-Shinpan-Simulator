import type { EngineState, Fighter, Referee } from '../engine/types';
import type { Vector2D } from '../math/vector';
import type { ProcedureStep } from '../engine/procedures/types';

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dpr = 1;
  private width = 0;
  private height = 0;
  public scale = 40;
  public centerX = 0;
  public centerY = 0;

  private floorCacheCanvas: HTMLCanvasElement;
  private floorCacheCtx: CanvasRenderingContext2D | null = null;
  private floorCacheValid = false;
  
  public isRPGMode = false;
  private imgKenshi: HTMLImageElement | null = null;
  private imgKenshiShiro: HTMLImageElement | null = null;
  private imgKenshiAka: HTMLImageElement | null = null;
  // Shushin sprites (Red in right hand, White in left hand)
  private imgShinpanS: HTMLImageElement | null = null;
  private imgShinpanF1: HTMLImageElement | null = null;
  private imgShinpanF2: HTMLImageElement | null = null;
  // Fukushin sprites (Red in left hand, White in right hand)
  private imgShinpanFukushinS: HTMLImageElement | null = null;
  private imgShinpanFukushinF1: HTMLImageElement | null = null;
  private imgShinpanFukushinF2: HTMLImageElement | null = null;
  // Entrada / Saída / Rotação sprites (flags together in right hand, only red visible)
  private imgShinpanEntradaS: HTMLImageElement | null = null;
  private imgShinpanEntradaF1: HTMLImageElement | null = null;
  private imgShinpanEntradaF2: HTMLImageElement | null = null;
  // Rei / Bowing sprites
  private imgShinpanReiS: HTMLImageElement | null = null;
  private imgShinpanReiF1: HTMLImageElement | null = null;
  private imgShinpanReiF2: HTMLImageElement | null = null;
  private imgFloor: HTMLImageElement | null = null;

  // Visual config
  public showTriangle = true;
  public showSquareS = false;
  public showSquareF1 = false;
  public showSquareF2 = false;
  public showNames = true;
  public showDirection = true;
  public showTrails = false;
  public procedureActiveStep: ProcedureStep | null = null;
  public procedureSubstituteReferee: Referee | null = null;
  public procedureNextGroupReferees: { shushin: Referee; fukushin1: Referee; fukushin2: Referee } | null = null;
  public showProcedureGuides = true;
  public procedureSeatsSide: 'LEFT' | 'RIGHT' = 'LEFT';
  public currentLang: string = 'pt';

  private trails: Record<string, Vector2D[]> = {
    white: [], red: [], shushin: [], fukushin1: [], fukushin2: []
  };
  private TRAIL_LENGTH = 30;
  public hoveredEnt: Fighter | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error("Could not get 2d context");
    this.ctx = ctx;

    this.floorCacheCanvas = document.createElement('canvas');
    this.floorCacheCtx = this.floorCacheCanvas.getContext('2d', { alpha: false });

    const base = import.meta.env.BASE_URL || '/';
    this.imgKenshi = new Image(); this.imgKenshi.src = base + 'assets/kenshi_3.png';
    this.imgKenshiShiro = new Image(); this.imgKenshiShiro.src = base + 'assets/kenshi_shiro.png';
    this.imgKenshiAka = new Image(); this.imgKenshiAka.src = base + 'assets/kenshi_aka.png';
    this.imgShinpanS = new Image(); this.imgShinpanS.src = base + 'assets/shinpan_3.png';
    this.imgShinpanF1 = new Image(); this.imgShinpanF1.src = base + 'assets/shinpan_4.png';
    this.imgShinpanF2 = new Image(); this.imgShinpanF2.src = base + 'assets/shinpan_5.png';
    this.imgShinpanFukushinS = new Image(); this.imgShinpanFukushinS.src = base + 'assets/shinpan_fukushin/shinpan_3.png';
    this.imgShinpanFukushinF1 = new Image(); this.imgShinpanFukushinF1.src = base + 'assets/shinpan_fukushin/shinpan_4.png';
    this.imgShinpanFukushinF2 = new Image(); this.imgShinpanFukushinF2.src = base + 'assets/shinpan_fukushin/shinpan_5.png';
    this.imgShinpanEntradaS = new Image(); this.imgShinpanEntradaS.src = base + 'assets/shinpan_entrada/shinpan_3.png';
    this.imgShinpanEntradaF1 = new Image(); this.imgShinpanEntradaF1.src = base + 'assets/shinpan_entrada/shinpan_4.png';
    this.imgShinpanEntradaF2 = new Image(); this.imgShinpanEntradaF2.src = base + 'assets/shinpan_entrada/shinpan_5.png';
    this.imgShinpanReiS = new Image(); this.imgShinpanReiS.src = base + 'assets/shinpan_rei/shinpan_3.png';
    this.imgShinpanReiF1 = new Image(); this.imgShinpanReiF1.src = base + 'assets/shinpan_rei/shinpan_4.png';
    this.imgShinpanReiF2 = new Image(); this.imgShinpanReiF2.src = base + 'assets/shinpan_rei/shinpan_5.png';
    this.imgFloor = new Image(); this.imgFloor.src = base + 'assets/floor.jpg';
  }

  public resize(width: number, height: number, dpr: number) {
    this.width = width;
    this.height = height;
    this.dpr = dpr;
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.centerX = width / 2;
    // slightly below center
    this.centerY = height / 2 + 30;

    // Responsive scale
    this.scale = Math.min(width, height) / 14;

    this.floorCacheValid = false;
  }

  public toScreenInto(mX: number, mY: number, out: Vector2D): Vector2D {
    out.x = this.centerX + mX * this.scale;
    out.y = this.centerY + mY * this.scale;
    return out;
  }

  public toMeters(sX: number, sY: number): Vector2D {
    return {
      x: (sX - this.centerX) / this.scale,
      y: (sY - this.centerY) / this.scale
    };
  }

  public pushTrails(state: EngineState) {
    if (!this.showTrails) return;
    if (state.competitorsVisible === false) {
      this.trails.white = [];
      this.trails.red = [];
    } else {
      this.pushTrail('white', state.white);
      this.pushTrail('red', state.red);
    }
    this.pushTrail('shushin', state.shushin);
    this.pushTrail('fukushin1', state.fukushin1);
    this.pushTrail('fukushin2', state.fukushin2);
  }

  private pushTrail(key: string, v: Vector2D) {
    this.trails[key].push({ x: v.x, y: v.y });
    if (this.trails[key].length > this.TRAIL_LENGTH) {
      this.trails[key].shift();
    }
  }

  public clearTrails() {
    for (const k of Object.keys(this.trails)) {
      this.trails[k] = [];
    }
  }

  public render(state: EngineState) {
    this.drawFloor();
    this.drawCourt(state.config.courtSize);

    if (state.simulationMode === 'PROCEDURE') {
      this.drawShinpanSeats(state.config.courtSize, this.procedureSeatsSide);
      this.drawProcedureGuides(state);
    } else {
      this.drawGuides(state);
    }

    this.drawTrails(state);

    if (state.competitorsVisible !== false) {
      this.drawEntity(state.white, false, state);
      this.drawEntity(state.red, false, state);
    }
    this.drawEntity(state.shushin, true, state);
    this.drawEntity(state.fukushin1, true, state);
    this.drawEntity(state.fukushin2, true, state);
    if (this.procedureSubstituteReferee) {
      this.drawEntity(this.procedureSubstituteReferee, true, state);
    }
    if (this.procedureNextGroupReferees) {
      this.drawEntity(this.procedureNextGroupReferees.shushin, true, state);
      this.drawEntity(this.procedureNextGroupReferees.fukushin1, true, state);
      this.drawEntity(this.procedureNextGroupReferees.fukushin2, true, state);
    }
    this.drawProcedureCallouts(state);
  }

  private rebuildFloorCache() {
    if (!this.floorCacheCtx) return;
    const fc = this.floorCacheCanvas;
    const fctx = this.floorCacheCtx;
    const dpr = this.dpr;

    fc.width = Math.round(this.width * dpr);
    fc.height = Math.round(this.height * dpr);
    fctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    fctx.fillStyle = '#b5845a';
    fctx.fillRect(0, 0, this.width, this.height);

    fctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
    fctx.lineWidth = 1.5;

    const plankW = 0.5 * this.scale;
    const offset = (this.centerX % plankW) - plankW;

    fctx.beginPath();
    for (let x = offset; x < this.width; x += plankW) {
      fctx.moveTo(x, 0);
      fctx.lineTo(x, this.height);
    }
    fctx.stroke();

    fctx.lineWidth = 0.5;
    const grainSpacing = plankW * 3;
    for (let x = offset; x < this.width; x += plankW) {
      let yPos = 0;
      while (yPos < this.height) {
        const grainLen = (0.4 + Math.sin(x * 3.7 + yPos * 0.3) * 0.4) * plankW;
        const opacity = 0.03 + Math.abs(Math.sin(x * 1.3 + yPos * 0.7)) * 0.05;
        fctx.strokeStyle = `rgba(0,0,0,${opacity.toFixed(3)})`;
        fctx.beginPath();
        fctx.moveTo(x, yPos);
        fctx.lineTo(x + grainLen, yPos);
        fctx.stroke();
        yPos += grainSpacing * (0.6 + Math.sin(x * 2.1 + yPos) * 0.4);
      }
    }

    const cx = this.width / 2, cy = this.height / 2;
    const maxR = Math.hypot(cx, cy);
    const vignette = fctx.createRadialGradient(cx, cy, maxR * 0.3, cx, cy, maxR * 1.1);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.45)');
    fctx.fillStyle = vignette;
    fctx.fillRect(0, 0, this.width, this.height);

    this.floorCacheValid = true;
  }

  private drawFloor() {
    if (this.imgFloor && this.imgFloor.complete) {
      const pattern = this.ctx.createPattern(this.imgFloor, 'repeat');
      if (pattern) {
        this.ctx.save();
        // A quadra tem 10x10. A textura representa 8 metros reais conforme solicitado.
        const imgPhysicalSizeMeters = 8.0; 
        const patternScale = (imgPhysicalSizeMeters * this.scale) / this.imgFloor.width;
        
        const matrix = new DOMMatrix().scale(patternScale, patternScale);
        pattern.setTransform(matrix);
        
        this.ctx.fillStyle = pattern;
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.restore();
      } else {
        this.ctx.drawImage(this.imgFloor, 0, 0, this.width, this.height);
      }
      return;
    }
    if (!this.floorCacheValid) this.rebuildFloorCache();
    this.ctx.drawImage(
      this.floorCacheCanvas,
      0, 0,
      this.floorCacheCanvas.width,
      this.floorCacheCanvas.height,
      0, 0,
      this.width,
      this.height
    );
  }

  private drawCourt(courtSize: number) {
    const HALF_COURT = courtSize / 2;
    const SAFETY_MARGIN = 1.5;
    const KAISHISEN_DIST = 1.4;

    const p1 = this.toScreenInto(-HALF_COURT, -HALF_COURT, {x:0, y:0});
    const size = this.toScreenInto(HALF_COURT, HALF_COURT, {x:0, y:0}).x - p1.x;

    const safeP1 = this.toScreenInto(-(HALF_COURT + SAFETY_MARGIN), -(HALF_COURT + SAFETY_MARGIN), {x:0,y:0});
    const safeSize = this.toScreenInto(HALF_COURT + SAFETY_MARGIN, HALF_COURT + SAFETY_MARGIN, {x:0,y:0}).x - safeP1.x;
    
    this.ctx.fillStyle = 'rgba(220, 180, 130, 0.35)';
    this.ctx.fillRect(safeP1.x, safeP1.y, safeSize, safeSize);

    this.ctx.save();
    this.ctx.shadowColor = 'rgba(0,0,0,0.4)';
    this.ctx.shadowBlur = 24;
    this.ctx.fillStyle = 'rgba(200, 160, 100, 0.25)';
    this.ctx.fillRect(p1.x, p1.y, size, size);
    this.ctx.shadowBlur = 0;
    this.ctx.restore();

    this.ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    this.ctx.lineWidth = Math.max(3, 0.12 * this.scale);
    this.ctx.strokeRect(p1.x, p1.y, size, size);

    const c = this.toScreenInto(0, 0, {x:0, y:0});
    const xSize = 0.14 * this.scale;
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    this.ctx.beginPath();
    this.ctx.moveTo(c.x - xSize, c.y - xSize); this.ctx.lineTo(c.x + xSize, c.y + xSize);
    this.ctx.moveTo(c.x + xSize, c.y - xSize); this.ctx.lineTo(c.x - xSize, c.y + xSize);
    this.ctx.stroke();

    const kX = KAISHISEN_DIST * this.scale;
    const kLen = 0.15 * this.scale;
    this.ctx.lineWidth = Math.max(3, 0.1 * this.scale);
    this.ctx.strokeStyle = 'rgba(255,255,255,0.92)';
    this.ctx.beginPath();
    this.ctx.moveTo(c.x - kX, c.y - kLen); this.ctx.lineTo(c.x - kX, c.y + kLen);
    this.ctx.moveTo(c.x + kX, c.y - kLen); this.ctx.lineTo(c.x + kX, c.y + kLen);
    this.ctx.stroke();
  }

  private drawGuides(state: EngineState) {
    if (!this.showTriangle && !this.showSquareS && !this.showSquareF1 && !this.showSquareF2) return;

    const midX = (state.white.x + state.red.x) / 2;
    const midY = (state.white.y + state.red.y) / 2;
    const hs = (state.config.courtSize / 2) - 1;

    const s  = this.toScreenInto(state.shushin.x,   state.shushin.y,   {x:0,y:0});
    const f1 = this.toScreenInto(state.fukushin1.x, state.fukushin1.y, {x:0,y:0});
    const f2 = this.toScreenInto(state.fukushin2.x, state.fukushin2.y, {x:0,y:0});

    if (this.showTriangle) {
      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(37, 99, 235, 0.4)';
      this.ctx.fillStyle = 'rgba(37, 99, 235, 0.05)';
      this.ctx.setLineDash([8, 8]);
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y); this.ctx.lineTo(f1.x, f1.y); this.ctx.lineTo(f2.x, f2.y);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
    }

    if (this.showSquareS) {
      this.ctx.fillStyle = 'rgba(37, 99, 235, 0.15)';
      const pS1 = this.toScreenInto(midX - hs, midY, {x:0,y:0});
      this.ctx.fillRect(pS1.x, pS1.y, (hs*2)*this.scale, hs*this.scale);
    }

    if (this.showSquareF1) {
      this.ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
      this.ctx.beginPath();
      const pM1  = this.toScreenInto(midX + hs, midY - hs, {x:0,y:0});
      const pF1T = this.toScreenInto(midX + hs, midY + hs, {x:0,y:0});
      const pF1R = this.toScreenInto(midX - hs, midY - hs, {x:0,y:0});
      this.ctx.moveTo(pM1.x, pM1.y); this.ctx.lineTo(pF1T.x, pF1T.y); this.ctx.lineTo(pF1R.x, pF1R.y);
      this.ctx.closePath(); this.ctx.fill();
    }

    if (this.showSquareF2) {
      this.ctx.fillStyle = 'rgba(34, 197, 94, 0.2)';
      this.ctx.beginPath();
      const pM2  = this.toScreenInto(midX - hs, midY - hs, {x:0,y:0});
      const pF2T = this.toScreenInto(midX - hs, midY + hs, {x:0,y:0});
      const pF2L = this.toScreenInto(midX + hs, midY - hs, {x:0,y:0});
      this.ctx.moveTo(pM2.x, pM2.y); this.ctx.lineTo(pF2T.x, pF2T.y); this.ctx.lineTo(pF2L.x, pF2L.y);
      this.ctx.closePath(); this.ctx.fill();
    }

    if (this.showSquareS || this.showSquareF1 || this.showSquareF2) {
      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
      this.ctx.lineWidth = 2;

      const qtl = this.toScreenInto(midX - hs, midY - hs, {x:0,y:0});
      this.ctx.strokeRect(qtl.x, qtl.y, (hs*2)*this.scale, (hs*2)*this.scale);

      this.ctx.setLineDash([5, 5]);
      this.ctx.beginPath();

      const pM1  = this.toScreenInto(midX + hs, midY - hs, {x:0,y:0});
      const pF1T = this.toScreenInto(midX + hs, midY + hs, {x:0,y:0});
      const pF1R = this.toScreenInto(midX - hs, midY - hs, {x:0,y:0});

      const pM2  = this.toScreenInto(midX - hs, midY - hs, {x:0,y:0});
      const pF2T = this.toScreenInto(midX - hs, midY + hs, {x:0,y:0});
      const pF2L = this.toScreenInto(midX + hs, midY - hs, {x:0,y:0});

      this.ctx.moveTo(pF2L.x, pF2L.y); this.ctx.lineTo(pF1R.x, pF1R.y);
      this.ctx.moveTo(pM1.x, pM1.y);   this.ctx.lineTo(pF1T.x, pF1T.y);
      this.ctx.moveTo(pM2.x, pM2.y);   this.ctx.lineTo(pF2T.x, pF2T.y);

      this.ctx.stroke();
      this.ctx.restore();
    }
  }

  private drawTrails(state?: EngineState) {
    if (!this.showTrails) return;
    const hideCompetitors = state?.competitorsVisible === false;
    const keys = hideCompetitors
      ? ['shushin', 'fukushin1', 'fukushin2']
      : ['white', 'red', 'shushin', 'fukushin1', 'fukushin2'];
    const colors: Record<string, string> = {
      white:    '200,200,200',
      red:      '204,0,0',
      shushin:  '37,99,235',
      fukushin1:'251,191,36',
      fukushin2:'34,197,94'
    };

    for (const key of keys) {
      const trail = this.trails[key];
      if (!trail || trail.length < 2) continue;
      for (let i = 1; i < trail.length; i++) {
        const alpha = (i / trail.length) * 0.45;
        const radius = Math.max(1, (i / trail.length) * 4);
        const sp = this.toScreenInto(trail[i].x, trail[i].y, {x:0,y:0});
        this.ctx.beginPath();
        this.ctx.arc(sp.x, sp.y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${colors[key]},${alpha.toFixed(3)})`;
        this.ctx.fill();
      }
    }
  }

  private drawEntity(ent: Fighter | Referee, isRef: boolean, state: EngineState) {
    const p = this.toScreenInto(ent.x, ent.y, {x:0,y:0});
    const r = (ent.radius || 0.3) * this.scale;

    const isCompetitor = (ent === state.white || ent === state.red);
    const isHover = isCompetitor && (this.hoveredEnt === ent || (ent as Fighter).dragging);

    if (this.isRPGMode) {
      let img: HTMLImageElement | null = null;
      const isRef = ent === state.shushin || ent === state.fukushin1 || ent === state.fukushin2 || ent === this.procedureSubstituteReferee ||
        (this.procedureNextGroupReferees && (ent === this.procedureNextGroupReferees.shushin || ent === this.procedureNextGroupReferees.fukushin1 || ent === this.procedureNextGroupReferees.fukushin2));
      const ref = ent as Referee;

      const isNextGroupS = this.procedureNextGroupReferees && ent === this.procedureNextGroupReferees.shushin;
      const isNextGroupF1 = this.procedureNextGroupReferees && ent === this.procedureNextGroupReferees.fukushin1;
      const isNextGroupF2 = this.procedureNextGroupReferees && ent === this.procedureNextGroupReferees.fukushin2;

      if (ent === state.white) {
        img = this.imgKenshiShiro || this.imgKenshi;
      } else if (ent === state.red) {
        img = this.imgKenshiAka || this.imgKenshi;
      } else if (isRef) {
        let charId = 3;
        if (ent === state.fukushin1 || isNextGroupF1) {
          charId = 4;
        } else if (ent === state.fukushin2 || isNextGroupF2) {
          charId = 5;
        } else {
          charId = 3;
        }

        const isBowing = ref.isBowing === true;
        const isFlagsInRightHand = ref.flagsRolled === true || ref.flagsInRightHand === true;
        const isShushinRole = (state.simulationMode === 'PROCEDURE') ? (ent.y > 0) : (ent === state.shushin);

        if (isBowing) {
          if (charId === 3) img = this.imgShinpanReiS;
          else if (charId === 4) img = this.imgShinpanReiF1;
          else img = this.imgShinpanReiF2;
        } else if (isFlagsInRightHand) {
          if (charId === 3) img = this.imgShinpanEntradaS;
          else if (charId === 4) img = this.imgShinpanEntradaF1;
          else img = this.imgShinpanEntradaF2;
        } else if (isShushinRole) {
          if (charId === 3) img = this.imgShinpanS;
          else if (charId === 4) img = this.imgShinpanF1;
          else img = this.imgShinpanF2;
        } else {
          // Fukushin em combate: bandeira vermelha na mão esquerda e branca na mão direita
          if (charId === 3) img = this.imgShinpanFukushinS;
          else if (charId === 4) img = this.imgShinpanFukushinF1;
          else img = this.imgShinpanFukushinF2;
        }
      }

      if (img && img.complete) {
        let facingAngle = 0;
        const midX = (state.white.x + state.red.x) / 2;
        const midY = (state.white.y + state.red.y) / 2;

        if (ent === state.white) {
          facingAngle = Math.atan2(state.red.y - ent.y, state.red.x - ent.x);
        } else if (ent === state.red) {
          facingAngle = Math.atan2(state.white.y - ent.y, state.white.x - ent.x);
        } else if ((ent as Referee).heading !== undefined) {
          facingAngle = (ent as Referee).heading!;
        } else {
          facingAngle = Math.atan2(midY - ent.y, midX - ent.x);
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        // Sprite default is pointing UP (Math.PI/2 relative to right).
        this.ctx.rotate(facingAngle + Math.PI / 2);

        // Mantém a proporção real da imagem top-down
        // Dimensão calibrada em 0.75m para árbitros normais e 0.58m para o sprite de Rei (mantém pés e tronco com tamanho idêntico)
        const isBowing = ref.isBowing === true;
        const physicalWidth = (isBowing ? 0.58 : 0.75) * this.scale;
        let pivotYRatio = 0.5;

        if (isCompetitor) {
          pivotYRatio = 0.69;
        } else if (isBowing) {
          pivotYRatio = 0.48; // Alinha os pés exatamente no mesmo ponto de apoio dos sprites naturais
        } else if (ent === state.shushin || ent === this.procedureSubstituteReferee || isNextGroupS) {
          pivotYRatio = 0.44;
        } else if (ent === state.fukushin1 || isNextGroupF1) {
          pivotYRatio = 0.41;
        } else if (ent === state.fukushin2 || isNextGroupF2) {
          pivotYRatio = 0.42;
        }

        const physicalHeight = physicalWidth * (img.height / img.width);

        this.ctx.drawImage(
          img,
          -physicalWidth / 2,
          -physicalHeight * pivotYRatio,
          physicalWidth,
          physicalHeight
        );
        this.ctx.restore();
        return;
      }
    }

    if (isHover) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, r * 1.35, 0, Math.PI*2);
      this.ctx.fillStyle = 'rgba(255,255,255,0.10)';
      this.ctx.fill();
      this.ctx.strokeStyle = 'rgba(0,0,0,0.25)';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
      this.ctx.restore();
    }

    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y + r*0.22, r * 1.05, 0, Math.PI*2);
    this.ctx.fillStyle = 'rgba(0,0,0,0.28)';
    this.ctx.fill();

    if (this.showDirection) {
      let facingAngle;
      const midX = (state.white.x + state.red.x) / 2;
      const midY = (state.white.y + state.red.y) / 2;

      if (ent === state.white) {
        facingAngle = Math.atan2(state.red.y - ent.y, state.red.x - ent.x);
      } else if (ent === state.red) {
        facingAngle = Math.atan2(state.white.y - ent.y, state.white.x - ent.x);
      } else if ((ent as Referee).heading !== undefined) {
        facingAngle = (ent as Referee).heading!;
      } else {
        facingAngle = Math.atan2(midY - ent.y, midX - ent.x);
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(facingAngle);

      const noseLen = r * 1.55;
      const noseWidth = r * 0.55;
      this.ctx.beginPath();
      this.ctx.moveTo(noseLen, 0);
      this.ctx.lineTo(r * 0.7, -noseWidth * 0.5);
      this.ctx.lineTo(r * 0.7,  noseWidth * 0.5);
      this.ctx.closePath();
      this.ctx.fillStyle = isRef ? 'rgba(255,255,255,0.75)' : (ent.color === '#ffffff' ? 'rgba(80,80,80,0.8)' : 'rgba(255,255,255,0.75)');
      this.ctx.fill();
      this.ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      this.ctx.restore();
    }

    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, r, 0, Math.PI*2);
    this.ctx.fillStyle = ent.color;
    this.ctx.fill();

    this.ctx.strokeStyle = (ent as Fighter).border || 'rgba(0,0,0,0.3)';
    this.ctx.lineWidth = isRef ? 2 : 3;
    this.ctx.stroke();

    if (this.showNames && ent.label) {
      this.ctx.fillStyle = isRef ? 'white' : (ent.color === '#ffffff' ? 'black' : 'white');
      this.ctx.font = `bold ${Math.max(12, r * 0.9)}px 'Segoe UI', Arial`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(ent.label, p.x, p.y);
    }
  }

  private drawShinpanSeats(courtSize: number, side: 'LEFT' | 'RIGHT') {
    const isLeft = side === 'LEFT';
    const sign = isLeft ? -1 : 1;
    const ySeat = courtSize / 2 + 1.0;
    const centerX = sign * (courtSize / 2 + 0.6);
    const chairOffsets = [-0.55, 0, 0.55];

    this.ctx.save();
    for (let i = 0; i < 3; i++) {
      const cx = centerX + chairOffsets[i];
      const sp = this.toScreenInto(cx, ySeat, {x:0, y:0});
      const chairW = 0.40 * this.scale;
      const chairH = 0.38 * this.scale;

      // Chair shadow
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      this.ctx.fillRect(sp.x - chairW / 2 + 2, sp.y - chairH / 2 + 3, chairW, chairH);

      // Chair cushion
      this.ctx.fillStyle = '#1e293b';
      this.ctx.strokeStyle = '#94a3b8';
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.roundRect(sp.x - chairW / 2, sp.y - chairH / 2, chairW, chairH, 3);
      this.ctx.fill();
      this.ctx.stroke();

      // Backrest
      const backrestH = 0.08 * this.scale;
      this.ctx.fillStyle = '#0f172a';
      this.ctx.beginPath();
      this.ctx.roundRect(sp.x - chairW / 2, sp.y + chairH / 2 - backrestH, chairW, backrestH, 2);
      this.ctx.fill();
      this.ctx.stroke();
    }

    // Label
    const midSp = this.toScreenInto(centerX, ySeat + 0.32, {x:0, y:0});
    this.ctx.font = '600 10px system-ui, sans-serif';
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('Shinpan-in Seats', midSp.x, midSp.y);

    this.ctx.restore();
  }

  private drawProcedureGuides(state: EngineState) {
    if (state.simulationMode !== 'PROCEDURE' || !this.showProcedureGuides || !this.procedureActiveStep) return;

    const yVertex = state.config.courtSize / 2 - 1.0;
    const yBase = -yVertex;
    const xBase = 2.0; // Distância fixa canônica de 4.0m entre Fukushin

    // Draw Isosceles Trapezoid if requested by didactic step
    if (this.procedureActiveStep.showTrapezoid) {
      const topF1 = this.toScreenInto(0.65, yVertex, {x:0, y:0});
      const topF2 = this.toScreenInto(-0.65, yVertex, {x:0, y:0});
      const baseF1 = this.toScreenInto(xBase, yBase, {x:0, y:0});
      const baseF2 = this.toScreenInto(-xBase, yBase, {x:0, y:0});

      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(234, 179, 8, 0.70)';
      this.ctx.fillStyle = 'rgba(234, 179, 8, 0.06)';
      this.ctx.setLineDash([6, 6]);
      this.ctx.lineWidth = 1.75;

      // Full polygon fill & stroke
      this.ctx.beginPath();
      this.ctx.moveTo(topF2.x, topF2.y);
      this.ctx.lineTo(topF1.x, topF1.y);
      this.ctx.lineTo(baseF1.x, baseF1.y);
      this.ctx.lineTo(baseF2.x, baseF2.y);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      // Dimension badges
      this.ctx.setLineDash([]);
      this.ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';

      // Shorter base badge: 1.30 m
      const topMidX = (topF1.x + topF2.x) / 2;
      const topMidY = topF1.y - 14;
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(topMidX - 26, topMidY - 9, 52, 18);
      this.ctx.strokeStyle = 'rgba(234, 179, 8, 0.9)';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(topMidX - 26, topMidY - 9, 52, 18);
      this.ctx.fillStyle = '#fef08a';
      this.ctx.fillText('1.30 m', topMidX, topMidY);

      // Larger base badge: 4.0 m
      const baseMidX = (baseF1.x + baseF2.x) / 2;
      const baseMidY = baseF1.y + 14;
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.fillRect(baseMidX - 26, baseMidY - 9, 52, 18);
      this.ctx.strokeStyle = 'rgba(234, 179, 8, 0.9)';
      this.ctx.strokeRect(baseMidX - 26, baseMidY - 9, 52, 18);
      this.ctx.fillStyle = '#fef08a';
      this.ctx.fillText('4.0 m', baseMidX, baseMidY);

      this.ctx.restore();
    }

    // Draw Isosceles Triangle if requested by didactic step
    if (this.procedureActiveStep.showTriangle) {
      const vS = this.toScreenInto(0, yVertex, {x:0, y:0});
      const bF1 = this.toScreenInto(xBase, yBase, {x:0, y:0});
      const bF2 = this.toScreenInto(-xBase, yBase, {x:0, y:0});

      this.ctx.save();
      this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.70)';
      this.ctx.fillStyle = 'rgba(59, 130, 246, 0.05)';
      this.ctx.setLineDash([8, 8]);
      this.ctx.lineWidth = 1.75;

      this.ctx.beginPath();
      this.ctx.moveTo(vS.x, vS.y);
      this.ctx.lineTo(bF1.x, bF1.y);
      this.ctx.lineTo(bF2.x, bF2.y);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.restore();
    }
  }

  private formatLowVoiceCall(call: string): string {
    if (this.currentLang === 'jp') {
      const jpMap: Record<string, string> = {
        'Mae': '前',
        'Ippomae': '一歩前',
        'Rei': '礼',
        'Hidari-muke': '左向け',
        'Migi-muke': '右向け'
      };
      const text = jpMap[call] || call;
      return `🤫「${text}」（小声）`;
    }
    if (this.currentLang === 'en') {
      return `🤫 "${call}" (low voice)`;
    }
    return `🤫 "${call}" (voz baixa)`;
  }

  private formatActionNote(stepId: string, note: string): string {
    if (this.currentLang === 'jp') {
      const jpMap: Record<string, string> = {
        'entry_rei': '正面への礼',
        'koutai_mutual_rei': '相互の礼',
        'koutai_final_rei_separate': '試合場への礼',
        'exit_rei': '試合場・正面への礼',
        'exit_sogo_ni_rei': '相互の礼（三人礼）'
      };
      return jpMap[stepId] || note;
    }
    if (this.currentLang === 'en') {
      const enMap: Record<string, string> = {
        'entry_rei': 'Joint Bow (Rei)',
        'koutai_mutual_rei': 'Mutual Bow (Rei)',
        'koutai_final_rei_separate': 'Bow to the Court',
        'exit_rei': 'Final Bow (Rei)',
        'exit_sogo_ni_rei': 'Mutual Group Bow (Sogo-ni-rei)'
      };
      return enMap[stepId] || note;
    }
    return note;
  }

  private drawProcedureCallouts(state: EngineState) {
    if (state.simulationMode !== 'PROCEDURE' || !this.procedureActiveStep) return;
    const step = this.procedureActiveStep;
    const call = typeof step.commandCall === 'function'
      ? step.commandCall({ seatsSide: this.procedureSeatsSide, rotationVariant: 'REGULAR' })
      : step.commandCall;

    const vocalType = step.vocalizationType || (call ? 'VOICE_LOUD' : undefined);

    let text = '';
    let bgColor = 'rgba(15, 23, 42, 0.9)';
    let strokeColor = 'rgba(59, 130, 246, 0.7)';
    let anchorX = state.shushin.x;
    let anchorY = state.shushin.y;

    if (vocalType === 'VOICE_LOUD' && call) {
      text = `🗣️ "${call}"`;
      bgColor = 'rgba(15, 23, 42, 0.9)';
      strokeColor = 'rgba(59, 130, 246, 0.75)';
    } else if (vocalType === 'VOICE_LOW' && call) {
      text = this.formatLowVoiceCall(call);
      bgColor = 'rgba(30, 41, 59, 0.9)';
      strokeColor = 'rgba(234, 179, 8, 0.75)';
    } else if (vocalType === 'SILENT_ACTION' && step.actionNote) {
      text = `🤫 ${this.formatActionNote(step.id, step.actionNote)}`;
      bgColor = 'rgba(6, 78, 59, 0.9)';
      strokeColor = 'rgba(16, 185, 129, 0.75)';
      if (step.id === 'koutai_final_rei_separate') {
        // Posicionado estritamente sobre o sainte do lado de fora da quadra, sem cobri-lo
        anchorX = state.shushin.x;
        anchorY = state.shushin.y;
      } else if (step.id === 'koutai_mutual_rei' && this.procedureSubstituteReferee) {
        anchorX = (state.shushin.x + this.procedureSubstituteReferee.x) / 2;
        anchorY = (state.shushin.y + this.procedureSubstituteReferee.y) / 2;
      }
    } else {
      return;
    }

    const renderBubble = (ax: number, ay: number, txt: string, bg: string, stroke: string, yOffset = 48) => {
      const sp = this.toScreenInto(ax, ay, { x: 0, y: 0 });
      const bubbleY = sp.y - yOffset;

      this.ctx.save();
      this.ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
      const metrics = this.ctx.measureText(txt);
      const padX = 14;
      const h = 28;
      const w = metrics.width + padX * 2;
      const x = sp.x - w / 2;
      const y = bubbleY - h / 2;

      this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
      this.ctx.shadowBlur = 12;
      this.ctx.fillStyle = bg;
      this.ctx.strokeStyle = stroke;
      this.ctx.lineWidth = 1.5;

      this.ctx.beginPath();
      this.ctx.roundRect(x, y, w, h, 8);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = '#ffffff';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(txt, sp.x, bubbleY);
      this.ctx.restore();
    };

    const bubbleOffset = (step.id === 'koutai_final_rei_separate') ? 56 : 48;
    renderBubble(anchorX, anchorY, text, bgColor, strokeColor, bubbleOffset);

    // Etapa 3.6: ambos o Shushin do grupo que sai e o Shushin do grupo que entra vocalizam "Mae" (baixo)
    if (step.id === 'exit_march_straight' && this.procedureNextGroupReferees) {
      renderBubble(
        this.procedureNextGroupReferees.shushin.x,
        this.procedureNextGroupReferees.shushin.y,
        this.formatLowVoiceCall('Mae'),
        bgColor,
        strokeColor
      );
    }
  }
}
