# Comprehensive Implementation Plan: Kendo Shinpan Educational App & AI Assistant

## 1. Executive Summary & Critical Feasibility Analysis

### 1.1 The "AI-Centered" Architecture: Critique & Reality Check

Relying **exclusively** on an AI (LLM) to drive the entire application—such as dynamically rendering canvas graphics, computing referee movement paths, or interpreting geometric field rules on the fly—is **not recommended** for the following reasons:

1. **Strict Determinism vs. LLM Probabilities**:
   Kendo Shiai & Shinpan regulations require 100% strict adherence to FIK rules. Referee rotations (Figure 5), substitutions (Figures 6–7), group alternations (Figure 8), and flag signals (Table 1) follow fixed geometric paths and formal protocols. If an LLM generates these paths or rules dynamically, it risks **hallucinations** or spatial inaccuracies that could mislead referee candidates preparing for official exams.
2. **Latency & Latency-per-Interaction**:
   Querying an LLM for every UI movement or canvas frame rate update introduces 500ms–2000ms network latency and unnecessary API costs.
3. **Cost Efficiency**:
   Running geometric math through LLM tokens for simple interactive visual elements wastes tokens.

### 1.2 The Recommended Solution: "Determinism-First, AI-Enhanced"

The most robust, cost-effective, and state-of-the-art architecture is a **Hybrid Single Page Application (SPA)**:

- **Core Engine (100% Deterministic & Offline)**: HTML5 Canvas, Vanilla JS, and the compiled `regulations_db.json` (131 KB). Handles all math, referee field-of-view triangles, distance thresholds, 1/2/4-court layout rendering, step-by-step rotation animations (Figures 1–8), and flag gesture animations with 0 ms latency.
- **AI Layer (Intelligent RAG Assistant)**: Powered by a lightweight RAG (Retrieval-Augmented Generation) pipeline over `regulations_db.json` (`nodes.yaml`, `relationships.yaml`, `glossary-links.yaml`). Handles natural language Q&A, hypothetical scenario reasoning, and multilingual rule explanations in PT, EN, and JP.

---

## 2. AI Model Selection & Cost-Effectiveness Recommendation

Within the **Antigravity IDE** model ecosystem:

| Model | Reasoning Level | Speed / Latency | Context Window | Cost Effectiveness | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Gemini 3.6 Flash** | High | Ultra Fast (~200ms) | 1,000,000+ tokens | **Best (Highest Value)** | **Recommended for Runtime RAG Q&A & Daily Development** |
| **Claude Sonnet 3.7** | High | Fast | 200,000 tokens | Excellent | Complex Code Architecture & Refactoring |
| **Claude Opus 4.6** | Maximum (Deep Think) | Moderate | 200,000 tokens | Premium / High | Deep Theoretical & Algorithmic Design |

### Recommendation: **Gemini 3.6 Flash**
- **Why for Runtime AI Rules Assistant?** The entire FIK regulation corpus (`regulations_db.json`, 131 KB) is approximately 35,000 tokens. Gemini 3.6 Flash can ingest the **entire FIK regulation database directly into prompt context** without truncation, delivering sub-second grounded answers at a tiny fraction of a cent per query.
- **Why for Development in Antigravity IDE?** Provides rapid response times for code generation, HTML/CSS layout, and JS canvas math verification.

---

## 3. Application Architecture & Module Breakdown

The application will be built as a responsive **Single Page Application (SPA)** with a top navigation bar, optimized for desktop browsers, mobile devices, and seamless embedding inside **Google Sites** via `<iframe>` or host scripts.

```
+-----------------------------------------------------------------------------------+
| Kendo Shinpan Educational Platform                                [PT | EN | JP] |
+-----------------------------------------------------------------------------------+
| [ 1. Simulator ] | [ 2. Procedures & Rotations ] | [ 3. Senkoku ] | [ 4. AI Rules ] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                active tab view                                   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Module 1: Shinpan Positioning Simulator (Refined v2.1.0)
- Interactive 2D Kendo Court with Shushin and two Fukushin avatars.
- Dynamic field-of-view triangles, combat angle displays, and kaishi-sen line indicators.
- Adjustable freeze & stalemate parameters (distance, time window, cumulative angle).
- Real-time warning overlays when referees fall out of ideal triangular geometry.

### Module 2: Procedures, Rotations & Multi-Court Layout Engine
- **Court Layout Switcher**:
  - 1-Court Detailed View.
  - 2-Court Championship Layout.
  - 4-Court Championship Layout.
  - Shinpan waiting seats (*Shinpan-seki*) placement selector (North, South, East, West per court).
- **Procedural Animations (FIK Regulations Figures 1–8)**:
  - *Figure 1 & 2*: Individual & Team Line-ups (Beginning & Ending of Shiai).
  - *Figure 3 & 4*: Referee Entry & Initial Positioning.
  - *Figure 5*: In-Match Clockwise Vertex Rotation.
  - *Figures 6 & 7*: Individual Shinpan Substitution (incoming/outgoing handover).
  - *Figure 8*: Full Panel Group Alternation (moving from waiting seats onto court).
- **Timeline & Playback Controls**:
  - Play / Pause, Previous Step, Next Step, Animation Speed Slider.
  - Synchronized side panel displaying official figure renders, article citations, and description text from `figures.yaml` and `relationships.yaml`.

### Module 3: Shinpan Actions & Senkoku Index
- Interactive visual grid covering all **Table 1** situations:
  - Yuko-datotsu (Men, Kote, Do, Tsuki, Torikeshi, Denial).
  - Match Management (Hajime, Yame, Wakare, Nihon-me, Shobu, Encho-hajime, Hantei, Hikiwake).
  - Penalties & Accidents (Hansoku 1/2, Sosai, Gogi, Injury/Accident 5-min rule).
- 2D Canvas flag gesture animations demonstrating exact flag arm angles (red/white).
- Audio / Pronunciation guide for verbal calls in PT, EN, and JP.

### Module 4: AI Rules Assistant & Offline Search
- **Client-Side Instant Search (100% Offline)**:
  - In-memory index over 69 nodes (39 Articles, 30 Subsidiary Rules) and 523 glossary terms.
  - Instant fuzzy search by article number, title, or keywords ("Wakare", "Hansoku", "Tsuru", "Men-himo").
- **AI Chat RAG Interface**:
  - Accepts user questions in natural language.
  - Grounded in `regulations_db.json` context to guarantee 100% accurate rule citations.
  - Explains complex situational edge cases (e.g. simultaneous boundary stepping + shinai dropping).

---

## 4. Database Schema & Corpus Integration

The project consumes the pre-compiled `regulations_db.json` generated from `corpus/fik/regulations/2023-07-26`:

- **Source Corpus Directory**: `corpus/fik/regulations/2023-07-26/`
  - `manifest.yaml` (Document metadata & structure)
  - `nodes.yaml` (69 canonical nodes with Article IDs, titles, anchors)
  - `figures.yaml` (23 figure assets, crop maps, descriptions)
  - `tables.yaml` (Table 1 Senkoku & flag motions)
  - `relationships.yaml` (28 structural cross-references)
  - `glossary-links.yaml` (523 technical term linkages)
  - `text/*.md` (Verified Markdown streams)
- **Compilation Tool**: `build_db_bundle.py`
- **Compiled Output**: `regulations_db.json` (131.46 KB)

---

## 5. Multi-Language & Google Sites Integration

The application maintains full compatibility with Google Sites sandboxed embeds:

1. **Auto-Language Detection Order**:
   - `window.SHINPAN_DEFAULT_LANG` (Explicit embed variable).
   - URL query parameter (`?lang=en`, `?lang=jp`, `?lang=pt`).
   - URL hash (`#en`, `#jp`, `#pt`).
   - Parent page referrer / URL path (`/en`, `/jp`, `/pt-br`).
   - HTML `<html lang="...">` attribute.
   - Browser `navigator.language`.
2. **Embed Snippet Template for Google Sites**:
   ```html
   <script>
     window.SHINPAN_DEFAULT_LANG = 'en'; // Set 'en', 'jp', or 'pt' per subpage
   </script>
   <!-- Complete App HTML & Bundle embedded below -->
   ```

---

## 6. Phased Implementation Roadmap

### Phase 1: Core SPA Framework & Refined Simulator (Days 1–2)
- [x] Analyze corpus database & build compilation script `build_db_bundle.py`.
- [x] Create `regulations_db.json`.
- [ ] Build SPA container with Top Navigation Bar & Language Switcher.
- [ ] Embed and refine Simulator in Tab 1.

### Phase 2: Procedures & Rotations Module (Days 3–4)
- [ ] Build Multi-Court Canvas Engine (1, 2, and 4 court layouts with seat placement options).
- [ ] Program pathfinding & position keyframes for Figures 1–8.
- [ ] Build Timeline Playback Controller (Play/Pause, Step, Speed).
- [ ] Implement synchronized regulation text & figure display panel.

### Phase 3: Senkoku & Signals Index (Days 5–6)
- [ ] Parse Table 1 data into interactive visual grid cards.
- [ ] Program 2D flag gesture canvas animations for all referee calls.
- [ ] Add audio pronunciation triggers and trilingual call text.

### Phase 4: AI Rules Assistant & Search Engine (Days 7–8)
- [ ] Implement client-side instant search over `regulations_db.json`.
- [ ] Build RAG context formatting utility for user queries.
- [ ] Create AI Chat Interface component with streaming / response handler.

### Phase 5: Verification & Packaging (Days 9–10)
- [ ] Test syntax cleanliness with `check_js.py` and `parse_js.py`.
- [ ] Test headless browser initialization via Edge (`inspect_dom_state.py`).
- [ ] Verify Google Sites iframe embedding in PT, EN, and JP.

---

*Document generated for Codex & AI Coding Assistant integration.*
