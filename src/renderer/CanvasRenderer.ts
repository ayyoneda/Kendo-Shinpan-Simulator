import type { EngineState, Fighter, Referee } from '../engine/types';
import type { Vector2D } from '../math/vector';

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
  private imgShinpanS: HTMLImageElement | null = null;
  private imgShinpanF1: HTMLImageElement | null = null;
  private imgShinpanF2: HTMLImageElement | null = null;
  private imgFloor: HTMLImageElement | null = null;

  // Visual config
  public showTriangle = true;
  public showSquareS = false;
  public showSquareF1 = false;
  public showSquareF2 = false;
  public showNames = true;
  public showDirection = true;
  public showTrails = false;

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
    this.imgShinpanS = new Image(); this.imgShinpanS.src = base + 'assets/shinpan_3.png';
    this.imgShinpanF1 = new Image(); this.imgShinpanF1.src = base + 'assets/shinpan_4.png';
    this.imgShinpanF2 = new Image(); this.imgShinpanF2.src = base + 'assets/shinpan_5.png';
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
    this.pushTrail('white', state.white);
    this.pushTrail('red', state.red);
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
    this.drawGuides(state);
    this.drawTrails();

    this.drawEntity(state.white, false, state);
    this.drawEntity(state.red, false, state);
    this.drawEntity(state.shushin, true, state);
    this.drawEntity(state.fukushin1, true, state);
    this.drawEntity(state.fukushin2, true, state);
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
    const hs = 4.0;

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

  private drawTrails() {
    if (!this.showTrails) return;
    const keys = ['white', 'red', 'shushin', 'fukushin1', 'fukushin2'];
    const colors: Record<string, string> = {
      white:    '200,200,200',
      red:      '204,0,0',
      shushin:  '37,99,235',
      fukushin1:'251,191,36',
      fukushin2:'34,197,94'
    };

    for (const key of keys) {
      const trail = this.trails[key];
      if (trail.length < 2) continue;
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
      if (isCompetitor) {
        img = this.imgKenshi;
      } else if (ent === state.shushin) {
        img = this.imgShinpanS;
      } else if (ent === state.fukushin1) {
        img = this.imgShinpanF1;
      } else if (ent === state.fukushin2) {
        img = this.imgShinpanF2;
      }

      if (img && img.complete) {
        let facingAngle = 0;
        const midX = (state.white.x + state.red.x) / 2;
        const midY = (state.white.y + state.red.y) / 2;

        if (ent === state.white) {
          facingAngle = Math.atan2(state.red.y - ent.y, state.red.x - ent.x);
        } else if (ent === state.red) {
          facingAngle = Math.atan2(state.white.y - ent.y, state.white.x - ent.x);
        } else {
          facingAngle = Math.atan2(midY - ent.y, midX - ent.x);
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        // Sprite default is pointing UP (Math.PI/2 relative to right).
        this.ctx.rotate(facingAngle + Math.PI / 2);

        // Mirror Fukushin flags (swap red and white)
        const isFukushin = ent === state.fukushin1 || ent === state.fukushin2;
        if (isFukushin) {
          this.ctx.scale(-1, 1);
        }

        // Mantém a proporção real da imagem top-down
        // O usuário pediu: aumentar a dimensão em 50% (de 0.5 para 0.75 metros visuais)
        const physicalWidth = 0.75 * this.scale;
        let pivotYRatio = 0.5;

        if (isCompetitor) {
          // kenshi_3 tem os ombros em ~68.8%
          pivotYRatio = 0.69;
        } else if (ent === state.shushin) {
          // shinpan_3 girado tem ombros em ~45.6%
          pivotYRatio = 0.46;
        } else if (ent === state.fukushin1) {
          // shinpan_4 girado tem ombros em ~41.0%
          pivotYRatio = 0.41;
        } else if (ent === state.fukushin2) {
          // shinpan_5 girado tem ombros em ~40.5%
          pivotYRatio = 0.40;
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
}
