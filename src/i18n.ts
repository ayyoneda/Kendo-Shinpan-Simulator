export const i18n: Record<string, Record<string, string>> = {
  pt: {
    title: "Kendo Shinpan",
    langLabel: "Idioma",
    courtSize: "Dimensão da Quadra",
    description: "Simulação da movimentação do trio de arbitragem (Shinpan) baseada no posicionamento dos atletas.",
    labelViz: "Visualização",
    checkTriangle: "Triângulo dos Árbitros",
    checkAxis: "Eixo/Quadrado Dinâmico",
    checkLabels: "Mostrar Rótulos",
    checkDebug: "Modo Debug (Lógica)",
    checkDirection: "Indicadores de Direção",
    checkTrails: "Trilhas de Movimento",
    tipTitle: "Dica rápida",
    tipBody: 'Arraste <b>W</b> e <b>R</b>. Ative "Eixo/Quadrado" para visualizar zonas. O Debug mostra ângulos e estado.',
    tipBodyRendered: 'Arraste os competidores pela quadra para observar a movimentação e o posicionamento do trio de arbitragem.',
    labelAngles: "Ângulos ABSOLUTOS (Centro)",
    angleCombat: "Ângulo de Combate:",
    flagLabel: "Flag:",
    modeLabel: "Mode:",
    refS: "Shushin (S):",
    refF1: "Fukushin 1 (F1):",
    refF2: "Fukushin 2 (F2):",
    labelLegend: "Legenda",
    legWhite: "Branco (Esq)",
    legRed: "Vermelho (Dir)",
    legS: "Shushin (Principal)",
    legF1: "Fukushin 1",
    legF2: "Fukushin 2",
    legKenshiShiro: "Atleta Branco (Shiro)",
    legKenshiAka: "Atleta Vermelho (Aka)",
    legShinpanTrio: "Trio de Arbitragem",
    advancedTitle: "Avançado",
    advancedSubtitle: "parâmetros",
    advancedSectionMotion: "Movimento",
    advancedSectionThresholds: "Thresholds",
    speedLabel: "Velocidade (m/s)",
    radiusLabel: "Raio de giro (m)",
    smoothLabel: "Suavização (k)",
    thEnterVertex: "Entrar VERTEX (°)",
    thExitVertex: "Sair VERTEX → STANDARD (°)",
    thEnterSbase: "Entrar S_BASE (°)",
    thExitSbase: "Sair S_BASE → VERTEX (°)",
    thEnterFlip: "Entrar FLIP (°)",
    thExitFlip: "Sair FLIP (°)",
    advancedNote: 'Ajusta o "feeling" do movimento e os thresholds. A suavização (k) controla a resposta: alto = ágil, baixo = fluido.',
    btnReset: "Resetar Posições",
    stable: "Estável",
    frozen: "Congelado",
    checkSquareS: "Área do Shushin",
    checkSquareF1: "Área do Fukushin 1",
    checkSquareF2: "Área do Fukushin 2",
    advancedSectionFreeze: "Congelamento",
    freezeDist: "Distância de tsubazeriai (m)",
    freezeWindow: "Janela temporal (ms)",
    freezeAngle: "Rotação acumulada (°)",
    freezeTime: "Duração do congelamento (ms)",
    scaleLabel: "Escala:",
    author: "Desenvolvido por: Adrian Yoneda",
    scenariosTitle: "Cenários de Movimentação",
    scenariosCompactTitle: "Cenários:",
    scenariosExpandedTitle: "Cenários de Teste",
    stopScenario: "Parar",
    stopScenarioTooltip: "Parar Cenário Ativo",
    expandScenariosTooltip: "Ver Lista Completa de Cenários",
    collapseScenariosTooltip: "Recolher Lista de Cenários",
    scen1A: "1A: Giro Lento 360º",
    scen1B: "1B: Teste Vertex",
    scen1C: "1C: Teste S_BASE",
    scen1D: "1D: Giro Reverso 360º",
    scen2: "2: Taiatari Swap",
    scen3: "3: Tsubazeriai Pião",
    scen4: "4: Inversão perto de 90º",
    scen5: "5: Inversão perto de 135º",
    modeTech: "Modo Técnico",
    modeRpg: "Modo Renderizado",
    resetTooltip: "Resetar Posições",
    openPanelTooltip: "Abrir Configurações",
    closePanelTooltip: "Recolher Painel",
    helpBtnTooltip: "Ajuda & Diretrizes",
    helpModalTitle: "Guia do Simulador & Fundamentos",
    helpCloseBtn: "Fechar Guia",
    helpTabUsage: "Como Usar",
    helpTabModes: "Modos de Visão",
    helpTabViz: "Zonas & Geometria",
    helpTabAdvanced: "Parâmetros",
    helpTabScenarios: "Cenários",
    helpTabConcept: "Conceito Marcial",
    helpTabDisclaimer: "Disclaimer & Regras",
    helpUsageBody: `<p class="mb-3"><strong>Interação Básica:</strong> Clique e arraste os atletas (Branco / Vermelho) pela quadra para observar como o trio de arbitragem reage e se movimenta dinamicamente.</p>
<p class="mb-3"><strong>O Triângulo Isósceles:</strong> Os três árbitros (Shushin e dois Fukushin) devem manter um triângulo que enquadra a ação dos lutadores, mantendo os competidores sempre em seu campo visual e minimizando pontos cegos.</p>
<p><strong>Responsividade:</strong> Você pode ajustar a dimensão da quadra (9x9m, 10x10m, 11x11m) no cabeçalho e resetar as posições a qualquer momento através do botão de reset.</p>`,
    helpModesBody: `<p class="mb-3"><strong>Modo Técnico:</strong> Exibição puramente diagramática e vetorial. Apresenta os círculos com identificação (W, R, S, F1, F2), as áreas de atuação de cada árbitro e o painel de depuração em tempo real com leitura dos ângulos e estados matemáticos.</p>
<p class="mb-3"><strong>Modo Renderizado:</strong> Visualização zenital (top-down) realista sobre a quadra. Utiliza sprites em pixel art dos competidores (com Tasuki vermelho e branco nas costas) e dos três árbitros com uniforme oficial e shinpanki.</p>`,
    helpVizBody: `<ul class="space-y-2 list-disc list-inside">
<li><strong>Triângulo dos Árbitros:</strong> Linha tracejada que conecta os 3 árbitros, evidenciando o triângulo isósceles.</li>
<li><strong>Eixo / Quadrado Dinâmico:</strong> Eixo central da disputa entre os lutadores e quadrado móvel formado pela união das áreas dos árbitros.</li>
<li><strong>Áreas do Shushin e Fukushin:</strong> Regiões poligonais que ilustram a fatia de responsabilidade de movimentação de cada árbitro (metade inferior para o shushin e os dois triângulos diagonais de cada fukushin).</li>
<li><strong>Indicadores de Direção:</strong> Vetores apontando para onde cada participante está direcionando seu olhar/postura.</li>
<li><strong>Trilhas de Movimento:</strong> Rastros que registram as curvas de deslocamento dos árbitros pela quadra.</li>
<li><strong>Modo Debug:</strong> Exibe ângulos absolutos, modo de máquina de estados (STANDARD, VERTEX, S_BASE, FLIP) e status de congelamento.</li>
</ul>`,
    helpAdvancedBody: `<div class="space-y-3">
<p><strong>Movimento:</strong></p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>Suavização (k):</strong> Calibra a inércia e o tempo de resposta do trio de arbitragem. Valores altos tornam a reação imediata; valores baixos geram movimentação fluida e natural.</li>
</ul>
<p><strong>Thresholds de Transição (5 Limiares Angulares):</strong> Limites em graus que determinam as transições de formação (quando temporariamente o Shushin deixa de ser o vértice do triângulo isósceles), respeitando as áreas de atuação e mantendo a visibilidade dos competidores:</p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>Entrada Vertex (padrão 90°):</strong> Ângulo de combate no qual o Shushin começa a transitar para a base do triângulo.</li>
<li><strong>Retorno de Vertex (padrão 45°):</strong> Limiar para retornar à formação Standard com histerese para evitar oscilações.</li>
<li><strong>Entrada S_Base (padrão 123°):</strong> Ponto em que o Shushin assume a base invertida.</li>
<li><strong>Retorno de S_Base (padrão 90°):</strong> Retorno de S_Base para Vertex.</li>
<li><strong>Entrada Flip (padrão 135°):</strong> Inversão de quadrante para preservar a geometria sem cruzar árbitros.</li>
</ul>
<p><strong>Estabilização Interna (Freeze):</strong> Em situações de corpo a corpo (<em>tsubazeriai</em>) ou giros rápidos acumulados, o motor estabiliza automaticamente os árbitros para evitar oscilações desnecessárias na quadra.</p>
</div>`,
    helpScenariosBody: `<p class="mb-3">O simulador oferece 8 baterias de teste automatizadas para demonstrar comportamentos típicos e avaliar a física da arbitragem:</p>
<ul class="space-y-1.5 list-disc list-inside text-xs">
<li><strong>1A: Giro Lento 360º:</strong> Avalia a rotação contínua e a preservação do triângulo.</li>
<li><strong>1B: Teste Vertex:</strong> Simula a entrada e saída do modo Vertex.</li>
<li><strong>1C: Teste S_BASE:</strong> Validação da zona base do Shushin.</li>
<li><strong>1D: Giro Reverso 360º:</strong> Verifica a histerese angular na rotação em sentido horário/anti-horário.</li>
<li><strong>2: Taiatari Swap:</strong> Troca rápida de posição entre os lutadores (choque corporal).</li>
<li><strong>3: Tsubazeriai Pião:</strong> Rotação rápida em curta distância (ativação do freeze).</li>
<li><strong>4 e 5: Inversões perto de 90º e 135º:</strong> Estudo de transição crítica nos limiares de inversão.</li>
</ul>`,
    helpConceptBody: `<p class="mb-3"><em>"Acredito que o árbitro deve naturalizar sua movimentação para liberar sua mente para o julgamento correto do ippon."</em></p>
<p class="mb-3">Um posicionamento incorreto ocasiona pontos cegos. Os árbitros devem se movimentar para maximizar as oportunidades de enxergar com clareza. O trio atua em sinergia: o mau posicionamento de um compromete a posição dos outros dois.</p>
<p>Como as oportunidades presenciais de treinamento de movimentação em seminários são escassas, este simulador interativo foi concebido para transformar regras teóricas em visualização prática e dinâmica.</p>`,
    helpDisclaimerBody: `<div class="p-3 bg-red-950/40 border border-red-800/40 rounded-lg mb-3">
<strong class="text-red-400 block mb-1">Aviso Importante (Disclaimer):</strong>
<p class="text-xs leading-relaxed text-gray-300">Esta ferramenta foi desenvolvida por iniciativa pessoal e não constitui uma verdade absoluta. Por basear-se em modelos matemáticos e algorítmicos, pode apresentar comportamentos imprecisos em situações extremas. Em caso de dúvidas, busque sempre o senso crítico e a orientação de árbitros experientes e mestres graduados.</p>
</div>
<p class="text-xs mb-2"><strong>Referências Canônicas:</strong></p>
<ul class="text-xs list-disc list-inside space-y-1 text-gray-400">
<li>Regulations of Kendo Shiai and Shinpan (FIK, Jul/2023)</li>
<li>Handbook for Kendo Shiai and Shinpan Management (FIK, Jul/2025)</li>
</ul>
<div class="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
<p><strong>Autor:</strong> Adrian Yu Yoneda (Renshi 7º Dan / Iaido 5º Dan — São Paulo, Brasil)</p>
<p>Dúvidas e feedbacks: <em>adrian.yoneda@gmail.com</em></p>
</div>`
  },
  en: {
    title: "Kendo Shinpan",
    langLabel: "Language",
    courtSize: "Court Size",
    description: "Simulation of referee (Shinpan) movement based on competitor positioning.",
    labelViz: "Visualization",
    checkTriangle: "Referees Triangle",
    checkAxis: "Combat Axis / Dynamic Square",
    checkLabels: "Show Labels",
    checkDebug: "Debug Mode (Logic)",
    checkDirection: "Directional Indicators",
    checkTrails: "Motion Trails",
    tipTitle: "Quick tip",
    tipBody: 'Drag <b>W</b> and <b>R</b>. Enable "Axis/Square" to visualize zones. Debug shows angles and state.',
    tipBodyRendered: 'Drag the competitors across the court to observe the referee team\'s movement and positioning.',
    labelAngles: "ABSOLUTE Angles (Center)",
    angleCombat: "Combat Angle:",
    flagLabel: "Flag:",
    modeLabel: "Mode:",
    refS: "Shushin (S):",
    refF1: "Fukushin 1 (F1):",
    refF2: "Fukushin 2 (F2):",
    labelLegend: "Legend",
    legWhite: "White (Left)",
    legRed: "Red (Right)",
    legS: "Shushin (Chief)",
    legF1: "Fukushin 1",
    legF2: "Fukushin 2",
    legKenshiShiro: "White Athlete (Shiro)",
    legKenshiAka: "Red Athlete (Aka)",
    legShinpanTrio: "Referee Team",
    advancedTitle: "Advanced",
    advancedSubtitle: "parameters",
    advancedSectionMotion: "Motion",
    advancedSectionThresholds: "Thresholds",
    speedLabel: "Speed (m/s)",
    radiusLabel: "Turn radius (m)",
    smoothLabel: "Smoothing (k)",
    thEnterVertex: "Enter VERTEX (°)",
    thExitVertex: "Exit VERTEX → STANDARD (°)",
    thEnterSbase: "Enter S_BASE (°)",
    thExitSbase: "Exit S_BASE → VERTEX (°)",
    thEnterFlip: "Enter FLIP (°)",
    thExitFlip: "Exit FLIP (°)",
    advancedNote: "Adjusts movement feel and thresholds. Smoothing (k): high = snappy, low = fluid.",
    btnReset: "Reset Positions",
    stable: "Stable",
    frozen: "Frozen",
    checkSquareS: "Shushin Area",
    checkSquareF1: "Fukushin 1 Area",
    checkSquareF2: "Fukushin 2 Area",
    advancedSectionFreeze: "Freeze",
    freezeDist: "Tsubazeriai distance (m)",
    freezeWindow: "Time window (ms)",
    freezeAngle: "Accumulated rotation (°)",
    freezeTime: "Freeze duration (ms)",
    scaleLabel: "Scale:",
    author: "Developed by: Adrian Yoneda (Brazil)",
    scenariosTitle: "Movement Scenarios",
    scenariosCompactTitle: "Scenarios:",
    scenariosExpandedTitle: "Test Scenarios",
    stopScenario: "Stop",
    stopScenarioTooltip: "Stop Active Scenario",
    expandScenariosTooltip: "Show Full Scenario List",
    collapseScenariosTooltip: "Collapse Scenario List",
    scen1A: "1A: Slow 360º Turn",
    scen1B: "1B: Vertex Test",
    scen1C: "1C: S_BASE Test",
    scen1D: "1D: Reverse 360º Turn",
    scen2: "2: Taiatari Swap",
    scen3: "3: Tsubazeriai Spin",
    scen4: "4: Inversion near 90º",
    scen5: "5: Inversion near 135º",
    modeTech: "Technical Mode",
    modeRpg: "Rendered Mode",
    resetTooltip: "Reset Positions",
    openPanelTooltip: "Open Settings",
    closePanelTooltip: "Collapse Panel",
    helpBtnTooltip: "Help & Guidelines",
    helpModalTitle: "Simulator Guide & Guidelines",
    helpCloseBtn: "Close Guide",
    helpTabUsage: "How to Use",
    helpTabModes: "Viewing Modes",
    helpTabViz: "Zones & Geometry",
    helpTabAdvanced: "Parameters",
    helpTabScenarios: "Scenarios",
    helpTabConcept: "Martial Concept",
    helpTabDisclaimer: "Disclaimer & Rules",
    helpUsageBody: `<p class="mb-3"><strong>Basic Interaction:</strong> Click and drag the competitors (White / Red) across the court to observe how the referee trio reacts dynamically.</p>
<p class="mb-3"><strong>Isosceles Triangle:</strong> The three referees (Shushin and two Fukushin) must maintain an isosceles triangle framing the competitors, keeping the combatants in their field of view and minimizing blind spots.</p>
<p><strong>Court Resizing:</strong> You can choose 9x9m, 10x10m or 11x11m court size at any time, and reset the layout via the reset button.</p>`,
    helpModesBody: `<p class="mb-3"><strong>Technical Mode:</strong> Diagrammatic vector display with geometric markers (W, R, S, F1, F2), sightlines, referee triangle, combat axes, referee areas of responsibility, and real-time state machine debug values.</p>
<p class="mb-3"><strong>Rendered Mode:</strong> Realistic top-down court on wooden dojo floor. Features authentic pixel art sprites for athletes (with red and white tasuki ribbon markings on the back) and referees holding official flags.</p>
<p><strong>Canonical Referees:</strong> In accordance with FIK rules, the Shushin holds the red flag in the right hand while Fukushin mirror the flags symmetrically for harmonious signaling.</p>`,
    helpVizBody: `<ul class="space-y-2 list-disc list-inside">
<li><strong>Referee Triangle:</strong> Dashed line connecting the 3 referees, forming the core isosceles triangle.</li>
<li><strong>Dynamic Combat Axis / Square:</strong> Central confrontation line between combatants and mobile bounding square formed by the referee sectors.</li>
<li><strong>Shushin and Fukushin Areas:</strong> Polygonal regions illustrating each referee's movement responsibility (lower half for the Shushin and diagonal triangles for each Fukushin).</li>
<li><strong>Directional Indicators:</strong> Sight vectors indicating where each person is looking.</li>
<li><strong>Motion Trails:</strong> Traces displaying referee positioning paths.</li>
<li><strong>Debug Mode:</strong> Real-time numerical display of angles, state machines (STANDARD, VERTEX, S_BASE, FLIP) and freeze status.</li>
</ul>`,
    helpAdvancedBody: `<div class="space-y-3">
<p><strong>Motion:</strong></p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>Smoothing (k):</strong> Calibrates inertia and response time of the referee trio: higher values yield snappy, instantaneous reactions; lower values produce fluid, natural movement.</li>
</ul>
<p><strong>Transition Thresholds (5 Angular Limits):</strong> Angular boundaries in degrees that govern formation transitions (when the Shushin temporarily transitions away from the apex of the isosceles triangle), adhering to referee areas of responsibility while maintaining clear sightlines of the competitors:</p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>Enter Vertex (default 90°):</strong> Combat angle where Shushin begins transitioning toward the triangle base.</li>
<li><strong>Exit Vertex (default 45°):</strong> Hysteresis threshold to return to Standard formation smoothly.</li>
<li><strong>Enter S_Base (default 123°):</strong> Angle where Shushin assumes the inverted base position.</li>
<li><strong>Exit S_Base (default 90°):</strong> Return from S_Base back to Vertex.</li>
<li><strong>Enter Flip (default 135°):</strong> Quadrant inversion to maintain geometry without crossing referee paths.</li>
</ul>
<p><strong>Internal Stabilization (Freeze):</strong> In clinch situations (<em>tsubazeriai</em>) or accumulated rapid spins, the engine automatically stabilizes referee positions to eliminate erratic movements.</p>
</div>`,
    helpScenariosBody: `<p class="mb-3">The simulator offers 8 automated test routines for motion analysis and demonstrations:</p>
<ul class="space-y-1.5 list-disc list-inside text-xs">
<li><strong>1A: Slow 360º Turn:</strong> Demonstrates steady rotational tracking.</li>
<li><strong>1B: Vertex Test:</strong> Evaluates entry and exit from Vertex mode.</li>
<li><strong>1C: S_BASE Test:</strong> Verifies the Shushin base quadrant.</li>
<li><strong>1D: Reverse 360º Turn:</strong> Tests clockwise vs counter-clockwise angular hysteresis.</li>
<li><strong>2: Taiatari Swap:</strong> Fast position exchange between competitors (body collision).</li>
<li><strong>3: Tsubazeriai Spin:</strong> Close combat rapid spinning (triggers freeze).</li>
<li><strong>4 & 5: Inversions near 90º and 135º:</strong> Critical transition threshold validations.</li>
</ul>`,
    helpConceptBody: `<p class="mb-3"><em>"Referees must naturalize their movement to free their minds for accurate and immediate judging of ippon."</em></p>
<p class="mb-3">Poor positioning causes blind spots. The referee team acts as a single synchronized unit: poor positioning by one compromises the positioning of the other two.</p>
<p>Because live seminar opportunities are rare, this simulator was designed to translate theoretical guidelines into dynamic, visual practice.</p>`,
    helpDisclaimerBody: `<div class="p-3 bg-red-950/40 border border-red-800/40 rounded-lg mb-3">
<strong class="text-red-400 block mb-1">Important Disclaimer:</strong>
<p class="text-xs leading-relaxed text-gray-300">This educational tool was developed through personal initiative. Being algorithmic and mathematical, it may show irregular behavior in extreme situations. Always apply critical judgment and seek mentorship from senior referees.</p>
</div>
<p class="text-xs mb-2"><strong>Canonical References:</strong></p>
<ul class="text-xs list-disc list-inside space-y-1 text-gray-400">
<li>Regulations of Kendo Shiai and Shinpan (FIK, Jul/2023)</li>
<li>Handbook for Kendo Shiai and Shinpan Management (FIK, Jul/2025)</li>
</ul>
<div class="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
<p><strong>Author:</strong> Adrian Yu Yoneda (Renshi 7th Dan / Iaido 5th Dan — Brazil)</p>
<p>Contact & feedback: <em>adrian.yoneda@gmail.com</em></p>
</div>`
  },
  jp: {
    title: "剣道審判シミュレーター",
    langLabel: "言語",
    courtSize: "試合場の広さ",
    description: "試合者の位置に基づいた審判員（審判団）の動きのシミュレーション。",
    labelViz: "表示設定",
    checkTriangle: "審判の三角形",
    checkAxis: "試合ライン／ダイナミックスクエア",
    checkLabels: "ラベル表示",
    checkDebug: "デバッグ（論理）",
    checkDirection: "方向インジケーター",
    checkTrails: "移動軌跡",
    tipTitle: "使い方",
    tipBody: "<b>W</b> と <b>R</b> をドラッグ。ゾーン確認は「試合ライン／ダイナミックスクエア」。デバッグで角度と状態を表示。",
    tipBodyRendered: "コート上の選手をドラッグして、審判団の動きとポジショニングを確認できます。",
    labelAngles: "絶対角度（中心）",
    angleCombat: "試合軸の角度:",
    flagLabel: "フラグ:",
    modeLabel: "モード:",
    refS: "主審 (S):",
    refF1: "副審1 (F1):",
    refF2: "副審2 (F2):",
    labelLegend: "凡例",
    legWhite: "白（左）",
    legRed: "赤（右）",
    legS: "主審",
    legF1: "副審1",
    legF2: "副審2",
    legKenshiShiro: "白選手（白襷）",
    legKenshiAka: "赤選手（赤襷）",
    legShinpanTrio: "審判団（3名）",
    advancedTitle: "詳細",
    advancedSubtitle: "パラメータ",
    advancedSectionMotion: "動き",
    advancedSectionThresholds: "しきい値",
    speedLabel: "速度 (m/s)",
    radiusLabel: "旋回半径 (m)",
    smoothLabel: "平滑化 (k)",
    thEnterVertex: "VERTEX 進入角 (°)",
    thExitVertex: "VERTEX→STANDARD (°)",
    thEnterSbase: "S_BASE 進入角 (°)",
    thExitSbase: "S_BASE→VERTEX (°)",
    thEnterFlip: "FLIP 進入角 (°)",
    thExitFlip: "FLIP 解除角 (°)",
    advancedNote: '直進・旋回の"感覚"としきい値を調整。平滑化(k)：高=機敏、低=なめらか。',
    btnReset: "位置をリセット",
    stable: "安定",
    frozen: "固定",
    checkSquareS: "主審エリア",
    checkSquareF1: "副審1エリア",
    checkSquareF2: "副審2エリア",
    advancedSectionFreeze: "固定判定",
    freezeDist: "鍔迫り合い距離 (m)",
    freezeWindow: "時間ウィンドウ (ms)",
    freezeAngle: "累積回転角 (°)",
    freezeTime: "固定時間 (ms)",
    scaleLabel: "スケール:",
    author: "開発: 米田裕（ブラジル）",
    scenariosTitle: "移動シナリオ",
    scenariosCompactTitle: "シナリオ:",
    scenariosExpandedTitle: "テストシナリオ",
    stopScenario: "停止",
    stopScenarioTooltip: "実行中のシナリオを停止",
    expandScenariosTooltip: "シナリオ一覧を展開",
    collapseScenariosTooltip: "シナリオ一覧を折りたたむ",
    scen1A: "1A: ゆっくり360度回転",
    scen1B: "1B: VERTEX テスト",
    scen1C: "1C: S_BASE テスト",
    scen1D: "1D: 逆360度回転",
    scen2: "2: 体当たり入れ替わり",
    scen3: "3: 鍔迫り合いスピン",
    scen4: "4: 90度付近での入れ替わり",
    scen5: "5: 135度付近での入れ替わり",
    modeTech: "テクニカルモード",
    modeRpg: "レンダリングモード",
    resetTooltip: "位置をリセット",
    openPanelTooltip: "設定パネルを開く",
    closePanelTooltip: "パネルを閉じる",
    helpBtnTooltip: "ヘルプとガイドライン",
    helpModalTitle: "シミュレーター手引と基本理念",
    helpCloseBtn: "閉じる",
    helpTabUsage: "使い方",
    helpTabModes: "表示モード",
    helpTabViz: "ゾーンと幾何学",
    helpTabAdvanced: "パラメータ",
    helpTabScenarios: "シナリオ",
    helpTabConcept: "審判の理念",
    helpTabDisclaimer: "免責事項・規定",
    helpUsageBody: `<p class="mb-3"><strong>基本操作:</strong> 試合者（白・赤）をドラッグして移動させると、審判3名（主審1名・副審2名）が連携して二等辺三角形を保つ様子を観察できます。</p>
<p class="mb-3"><strong>二等辺三角形の維持:</strong> 審判団は常に死角を最小化し、有効打突を正確に視認できる位置関係を維持します。</p>
<p><strong>試合場設定:</strong> ヘッダーから試合場の広さ（9m, 10m, 11m）を変更でき、リセットボタンで初期位置に戻せます。</p>`,
    helpModesBody: `<p class="mb-3"><strong>テクニカルモード:</strong> 幾何学的・論理的な表示。各位置（W, R, S, F1, F2）、視線ベクトル、審判三角形、戦闘軸、審判担当エリア、状態機械（Debug）のリアルタイム数値を表示します。</p>
<p class="mb-3"><strong>レンダリングモード:</strong> 板張りの試合場を俯瞰するリアルなドット絵表示。背中に白襷・赤襷を着けた試合者と、正規の紅白旗を持つ審判員が表示されます。</p>
<p><strong>旗の保持規則:</strong> FIK規則に基づき、主審は右手に赤旗・左手に白旗を持ち、副審は対称的に構えます。</p>`,
    helpVizBody: `<ul class="space-y-2 list-disc list-inside">
<li><strong>審判の三角形:</strong> 3名の審判を結ぶ点線（二等辺三角形の可視化）。</li>
<li><strong>試合ライン／ダイナミックスクエア:</strong> 試合者間の攻防軸および各審判エリアの統合によって形成される可動スクエア。</li>
<li><strong>主審・副審の担当エリア:</strong> 各審判の移動責任範囲を示す多角形領域（下半分が主審、上部対角の2つの三角形が各副審のエリア）。</li>
<li><strong>方向インジケーター:</strong> 各参加者の視線・身体の向き。</li>
<li><strong>移動軌跡:</strong> 審判員の移動経路のトレース。</li>
<li><strong>デバッグモード:</strong> 角度、遷移モード（STANDARD, VERTEX, S_BASE, FLIP）、固定判定を表示。</li>
</ul>`,
    helpAdvancedBody: `<div class="space-y-3">
<p><strong>動き:</strong></p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>平滑化係数 (k):</strong> 慣性と反応速度を調整。高＝機敏で即座の反応、低＝滑らかで自然な追従。</li>
</ul>
<p><strong>遷移しきい値（5つの角度しきい値）:</strong> 隊形遷移の角度しきい値（主審が一時的に二等辺三角形の頂点を離れる際、各審判の担当エリアを尊重し、試合者の視認性を確保するための角度基準）:</p>
<ul class="space-y-1 list-disc list-inside text-xs pl-2 text-gray-300">
<li><strong>VERTEX 進入角（初期値 90°）:</strong> 主審が三角形の底辺側へ移動を開始する角度。</li>
<li><strong>VERTEX 解除角（初期値 45°）:</strong> STANDARD モードへ復帰するための安全ヒステリシス。</li>
<li><strong>S_BASE 進入角（初期値 123°）:</strong> 主審が反転底辺へ完全に移行する角度。</li>
<li><strong>S_BASE 解除角（初期値 90°）:</strong> S_BASE から VERTEX への復帰角。</li>
<li><strong>FLIP 進入角（初期値 135°）:</strong> 審判同士が交差することなく隊形幾何学を維持するための象限反転角。</li>
</ul>
<p><strong>内部安定化 (Freeze):</strong> 鍔迫り合いや急激な回転時、審判団が無駄に激しく動かないよう自動で位置を一時安定化します。</p>
</div>`,
    helpScenariosBody: `<p class="mb-3">動きの検証と教育のための8種類の自動シナリオ:</p>
<ul class="space-y-1.5 list-disc list-inside text-xs">
<li><strong>1A: ゆっくり360度回転:</strong> 通常の追従旋回。</li>
<li><strong>1B: VERTEX テスト:</strong> VERTEXモードへの進入・解除。</li>
<li><strong>1C: S_BASE テスト:</strong> 主審の基本位置検証。</li>
<li><strong>1D: 逆360度回転:</strong> 時計回り・反時計回りのヒステリシス検証。</li>
<li><strong>2: 体当たり入れ替わり:</strong> 瞬時の位置交換（体当たり）。</li>
<li><strong>3: 鍔迫り合いスピン:</strong> 近距離回転と固定判定。</li>
<li><strong>4・5: 90度／135度付近の入れ替わり:</strong> 臨界角での遷移検証。</li>
</ul>`,
    helpConceptBody: `<p class="mb-3"><em>「審判員は移動を自然体で行い、意識を有効打突の見極めに集中させる必要があります。」</em></p>
<p class="mb-3">不適切な位置取りは死角を生みます。審判3名は緊密に連携しており、1名の位置取りの乱れが他の2名の適切な位置取りを妨げます。</p>
<p>講習会等の機会が限られる中、理論を直感的・動的に学習するために本シミュレーターは開発されました。</p>`,
    helpDisclaimerBody: `<div class="p-3 bg-red-950/40 border border-red-800/40 rounded-lg mb-3">
<strong class="text-red-400 block mb-1">免責事項 (Disclaimer):</strong>
<p class="text-xs leading-relaxed text-gray-300">本ツールは個人開発の教育支援シミュレーターです。数理アルゴリズムに基づくため、極端な条件下では不自然な挙動を示す場合があります。判断に迷う際は必ず高段者・経験豊富な審判員の指導を仰いでください。</p>
</div>
<p class="text-xs mb-2"><strong>参考公式規定:</strong></p>
<ul class="text-xs list-disc list-inside space-y-1 text-gray-400">
<li>剣道試合・審判規則（国際剣道連盟 FIK、2023年7月）</li>
<li>剣道試合・審判・運営の手引き（国際剣道連盟 FIK、2025年7月）</li>
</ul>
<div class="mt-3 pt-3 border-t border-white/10 text-xs text-gray-400">
<p><strong>開発者:</strong> 米田裕 Adrian Yoneda（教士七段・居合道五段／ブラジル・サンパウロ）</p>
<p>連絡先: <em>adrian.yoneda@gmail.com</em></p>
</div>`
  }
};
