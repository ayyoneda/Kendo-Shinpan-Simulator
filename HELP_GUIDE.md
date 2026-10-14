# Kendo Shinpan Simulator — Guia de Ajuda e Fundamentos

> Este documento contém todos os textos exibidos no modal de **Ajuda & Diretrizes** do simulador.  
> Você pode editar os textos livremente neste arquivo. Quando terminar a revisão, me avise para que eu sincronize o conteúdo com o simulador e atualize as traduções.

---

# [PT-BR] Versão em Português

## 1. Como Usar
**Interação Básica:**  
Clique e arraste os atletas (Branco / Vermelho) pela quadra para observar como o trio de arbitragem reage e se movimenta dinamicamente.

**O Triângulo Isósceles:**  
Os três árbitros (Shushin e dois Fukushin) devem manter um triângulo isósceles que enquadra a ação dos lutadores, mantendo os competidores sempre em seu campo visual e minimizando pontos cegos.

**Responsividade:**  
Você pode ajustar a dimensão da quadra (9x9m, 10x10m, 11x11m) no cabeçalho e resetar as posições a qualquer momento através do botão de reset.

---

## 2. Modos de Visão
**Modo Técnico:**  
Exibição puramente diagramática e vetorial. Apresenta os círculos com identificação (W, R, S, F1, F2), as áreas de atuação de cada árbitro e o painel de depuração em tempo real com leitura dos ângulos e estados matemáticos.

**Modo Renderizado:**  
Visualização zenital (*top-down*) realista sobre a quadra. Utiliza sprites em pixel art dos competidores (com Tasuki vermelho e branco nas costas) e dos três árbitros com uniforme oficial e shinpanki.

---

## 3. Zonas & Geometria (Modo Técnico)
* **Triângulo dos Árbitros:** Linha tracejada que conecta os 3 árbitros, evidenciando o triângulo isósceles.
* **Eixo / Quadrado Dinâmico:** Eixo central da disputa entre os lutadores e quadrado móvel formado pela união das áreas dos árbitros.
* **Áreas do Shushin e Fukushin:** Regiões poligonais que ilustram a fatia de responsabilidade de movimentação de cada árbitro (metade inferior para o shushin e os dois triângulos diagonais de cada fukushin).
* **Indicadores de Direção:** Vetores apontando para onde cada participante está direcionando seu olhar/postura.
* **Trilhas de Movimento:** Rastros que registram as curvas de deslocamento dos árbitros pela quadra.
* **Modo Debug:** Exibe ângulos absolutos, modo de máquina de estados (STANDARD, VERTEX, S_BASE, FLIP) e status de congelamento.

---

## 4. Parâmetros Avançados
* **Movimento:**  
  * **Suavização (k):** Calibra a inércia e o tempo de resposta do trio de arbitragem. Valores altos tornam a reação imediata; valores baixos geram movimentação fluida e natural.
* **Thresholds de Transição (5 Limiares Angulares):**  
  Limites em graus que determinam as transições de formação (quando temporariamente o Shushin deixa de ser o vértice do triângulo isósceles), respeitando as áreas de atuação e mantendo a visibilidade dos competidores:
  * **Entrada Vertex (padrão 90°):** Ângulo de combate no qual o Shushin começa a transitar para a base do triângulo.
  * **Retorno de Vertex (padrão 45°):** Limiar para retornar à formação Standard com histerese para evitar oscilações.
  * **Entrada S_Base (padrão 123°):** Ponto em que o Shushin assume a base invertida.
  * **Retorno de S_Base (padrão 90°):** Retorno de S_Base para Vertex.
  * **Entrada Flip (padrão 135°):** Inversão de quadrante para preservar a geometria sem cruzar árbitros.
* **Estabilização Interna (Freeze):**  
  Em situações de corpo a corpo (*tsubazeriai*) ou giros rápidos acumulados, o motor estabiliza automaticamente os árbitros para evitar oscilações desnecessárias na quadra.

---

## 5. Cenários de Movimentação
O simulador oferece 8 baterias de teste automatizadas para demonstrar comportamentos típicos e avaliar a física da arbitragem:
* **1A: Giro Lento 360º:** Avalia a rotação contínua e a preservação do triângulo.
* **1B: Teste Vertex:** Simula a entrada e saída do modo Vertex.
* **1C: Teste S_BASE:** Validação da zona base do Shushin.
* **1D: Giro Reverso 360º:** Verifica a histerese angular na rotação em sentido horário/anti-horário.
* **2: Taiatari Swap:** Troca rápida de posição entre os lutadores (choque corporal).
* **3: Tsubazeriai Pião:** Rotação rápida em curta distância (ativação do freeze).
* **4 e 5: Inversões perto de 90º e 135º:** Estudo de transição crítica nos limiares de inversão.

---

## 6. Conceito Marcial
> *"Acredito que o árbitro deve naturalizar sua movimentação para liberar sua mente para o julgamento correto do ippon."*

Um posicionamento incorreto ocasiona pontos cegos. Os árbitros devem se movimentar para maximizar as oportunidades de enxergar com clareza. O trio atua em sinergia: o mau posicionamento de um compromete a posição dos outros dois.

Como as oportunidades presenciais de treinamento de movimentação em seminários são escassas, este simulador interativo foi concebido para transformar regras teóricas em visualização prática e dinâmica.

---

## 7. Disclaimer & Regras Canônicas
> **Aviso Importante (Disclaimer):**  
> Esta ferramenta foi desenvolvida por iniciativa pessoal e não constitui uma verdade absoluta. Por basear-se em modelos matemáticos e algorítmicos, pode apresentar comportamentos imprecisos em situações extremas. Em caso de dúvidas, busque sempre o senso crítico e a orientação de árbitros experientes e mestres graduados.

**Referências Canônicas:**
* *Regulations of Kendo Shiai and Shinpan* (FIK, Jul/2023)
* *Handbook for Kendo Shiai and Shinpan Management* (FIK, Jul/2025)

**Autor:**  
Adrian Yu Yoneda (Renshi 7º Dan / Iaido 5º Dan — São Paulo, Brasil)  
Dúvidas e feedbacks: `adrian.yoneda@gmail.com`

---
---

# [EN] English Version

## 1. How to Use
**Basic Interaction:**  
Click and drag the competitors (White / Red) across the court to observe how the referee trio reacts dynamically.

**Isosceles Triangle:**  
The three referees (Shushin and two Fukushin) must maintain an isosceles triangle framing the competitors, keeping the combatants in their field of view and minimizing blind spots.

**Court Resizing:**  
You can choose 9x9m, 10x10m or 11x11m court size at any time, and reset the layout via the reset button.

---

## 2. Viewing Modes
**Technical Mode:**  
Diagrammatic vector display with geometric markers (W, R, S, F1, F2), sightlines, referee triangle, combat axes, referee areas of responsibility, and real-time state machine debug values.

**Rendered Mode:**  
Realistic top-down court on wooden dojo floor. Features authentic pixel art sprites for athletes (with red and white tasuki ribbon markings on the back) and referees holding official flags.

**Canonical Referees:**  
In accordance with FIK rules, the Shushin holds the red flag in the right hand while Fukushin mirror the flags symmetrically for harmonious signaling.

---

## 3. Zones & Geometry (Technical Mode)
* **Referee Triangle:** Dashed line connecting the 3 referees, forming the core isosceles triangle.
* **Dynamic Combat Axis / Square:** Central confrontation line between combatants and mobile bounding square formed by the referee sectors.
* **Shushin and Fukushin Areas:** Polygonal regions illustrating each referee's movement responsibility (lower half for the Shushin and diagonal triangles for each Fukushin).
* **Directional Indicators:** Sight vectors indicating where each person is looking.
* **Motion Trails:** Traces displaying referee positioning paths.
* **Debug Mode:** Real-time numerical display of angles, state machines (STANDARD, VERTEX, S_BASE, FLIP) and freeze status.

---

## 4. Advanced Parameters
* **Motion:**  
  * **Smoothing (k):** Calibrates inertia and response time of the referee trio: higher values yield snappy, instantaneous reactions; lower values produce fluid, natural movement.
* **Transition Thresholds (5 Angular Limits):**  
  Angular boundaries in degrees that govern formation transitions (when the Shushin temporarily transitions away from the apex of the isosceles triangle), adhering to referee areas of responsibility while maintaining clear sightlines of the competitors:
  * **Enter Vertex (default 90°):** Combat angle where Shushin begins transitioning toward the triangle base.
  * **Exit Vertex (default 45°):** Hysteresis threshold to return to Standard formation smoothly.
  * **Enter S_Base (default 123°):** Angle where Shushin assumes the inverted base position.
  * **Exit S_Base (default 90°):** Return from S_Base back to Vertex.
  * **Enter Flip (default 135°):** Quadrant inversion to maintain geometry without crossing referee paths.
* **Internal Stabilization (Freeze):**  
  In clinch situations (*tsubazeriai*) or accumulated rapid spins, the engine automatically stabilizes referee positions to eliminate erratic movements.

---

## 5. Movement Scenarios
The simulator offers 8 automated test routines for motion analysis and demonstrations:
* **1A: Slow 360º Turn:** Demonstrates steady rotational tracking.
* **1B: Vertex Test:** Evaluates entry and exit from Vertex mode.
* **1C: S_BASE Test:** Verifies the Shushin base quadrant.
* **1D: Reverse 360º Turn:** Tests clockwise vs counter-clockwise angular hysteresis.
* **2: Taiatari Swap:** Fast position exchange between competitors (body collision).
* **3: Tsubazeriai Spin:** Close combat rapid spinning (triggers freeze).
* **4 & 5: Inversions near 90º and 135º:** Critical transition threshold validations.

---

## 6. Martial Concept
> *"Referees must naturalize their movement to free their minds for accurate and immediate judging of ippon."*

Poor positioning causes blind spots. The referee team acts as a single synchronized unit: poor positioning by one compromises the positioning of the other two.

Because live seminar opportunities are rare, this simulator was designed to translate theoretical guidelines into dynamic, visual practice.

---

## 7. Disclaimer & Canonical Rules
> **Important Disclaimer:**  
> This educational tool was developed through personal initiative. Being algorithmic and mathematical, it may show irregular behavior in extreme situations. Always apply critical judgment and seek mentorship from senior referees.

**Canonical References:**
* *Regulations of Kendo Shiai and Shinpan* (FIK, Jul/2023)
* *Handbook for Kendo Shiai and Shinpan Management* (FIK, Jul/2025)

**Author:**  
Adrian Yu Yoneda (Renshi 7th Dan / Iaido 5th Dan — Brazil)  
Contact & feedback: `adrian.yoneda@gmail.com`

---
---

# [JA] 日本語版

## 1. 使い方
**基本操作:**  
試合者（白・赤）をドラッグして移動させると、審判3名（主審1名・副審2名）が連携して二等辺三角形を保つ様子を観察できます。

**二等辺三角形の維持:**  
審判団は常に死角を最小化し、有効打突を正確に視認できる位置関係を維持します。

**試合場設定:**  
ヘッダーから試合場の広さ（9×9m, 10×10m, 11×11m）を変更でき、リセットボタンで初期位置に戻せます。

---

## 2. 表示モード
**テクニカルモード:**  
幾何学的・論理的な表示。各位置（W, R, S, F1, F2）、視線ベクトル、審判三角形、戦闘軸、審判担当エリア、状態機械（Debug）のリアルタイム数値を表示します。

**レンダリングモード:**  
板張りの試合場を俯瞰するリアルなドット絵表示。背中に白襷・赤襷を着けた試合者と、正規の紅白旗を持つ審判員が表示されます。

**旗の保持規則:**  
FIK規則に基づき、主審は右手に赤旗・左手に白旗を持ち、副審は対称的に構えます。

---

## 3. ゾーンと幾何学（テクニカルモード）
* **審判の三角形:** 3名の審判を結ぶ点線（二等辺三角形の可視化）。
* **試合ライン／ダイナミックスクエア:** 試合者間の攻防軸および各審判エリアの統合によって形成される可動スクエア。
* **主審・副審の担当エリア:** 各審判の移動責任範囲を示す多角形領域（下半分が主審、上部対角の2つの三角形が各副審のエリア）。
* **方向インジケーター:** 各参加者の視線・身体の向き。
* **移動軌跡:** 審判員の移動経路のトレース。
* **デバッグモード:** 角度、遷移モード（STANDARD, VERTEX, S_BASE, FLIP）、固定判定を表示。

---

## 4. 詳細パラメータ
* **動き:**  
  * **平滑化係数 (k):** 慣性と反応速度を調整。高＝機敏で即座の反応、低＝滑らかで自然な追従。
* **遷移しきい値（5つの角度しきい値）:**  
  隊形遷移の角度しきい値（主審が一時的に二等辺三角形の頂点を離れる際、各審判の担当エリアを尊重し、試合者の視認性を確保するための角度基準）:
  * **VERTEX 進入角（初期値 90°）:** 主審が三角形の底辺側へ移動を開始する角度。
  * **VERTEX 解除角（初期値 45°）:** STANDARD モードへ復帰するための安全ヒステリシス。
  * **S_BASE 進入角（初期値 123°）:** 主審が反転底辺へ完全に移行する角度。
  * **S_BASE 解除角（初期値 90°）:** S_BASE から VERTEX への復帰角。
  * **FLIP 進入角（初期値 135°）:** 審判同士が交差することなく隊形幾何学を維持するための象限反転角。
* **内部安定化 (Freeze):**  
  鍔迫り合いや急激な回転時、審判団が無駄に激しく動かないよう自動で位置を一時安定化します。

---

## 5. 移動シナリオ
動きの検証と教育のための8種類の自動シナリオ:
* **1A: ゆっくり360度回転:** 通常の追従旋回。
* **1B: VERTEX テスト:** VERTEXモードへの進入・解除。
* **1C: S_BASE テスト:** 主審の基本位置検証。
* **1D: 逆360度回転:** 時計回り・反時計回りのヒステリシス検証。
* **2: 体当たり入れ替わり:** 瞬時の位置交換（体当たり）。
* **3: 鍔迫り合いスピン:** 近距離回転と固定判定。
* **4・5: 90度／135度付近の入れ替わり:** 臨界角での遷移検証。

---

## 6. 審判の理念
> *「審判員は移動を自然体で行い、意識を有効打突の見極めに集中させる必要があります。」*

不適切な位置取りは死角を生みます。審判3名は緊密に連携しており、1名の位置取りの乱れが他の2名の適切な位置取りを妨げます。

講習会等の機会が限られる中、理論を直感的・動的に学習するために本シミュレーターは開発されました。

---

## 7. 免責事項・規定
> **免責事項 (Disclaimer):**  
> 本ツールは個人開発の教育支援シミュレーターです。数理アルゴリズムに基づくため、極端な条件下では不自然な挙動を示す場合があります。判断に迷う際は必ず高段者・経験豊富な審判員の指導を仰いでください。

**参考公式規定:**
* 剣道試合・審判規則（国際剣道連盟 FIK、2023年7月）
* 剣道試合・審判・運営の手引き（国際剣道連盟 FIK、2025年7月）

**開発者:**  
米田裕 Adrian Yoneda（教士七段・居合道五段／ブラジル・サンパウロ）  
連絡先: `adrian.yoneda@gmail.com`
