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
    modeCombat: "Combate Reativo",
    modeProcedures: "Procedimentos FIK",
    chapter_entry: "1. Entrada & Formação",
    chapter_rotation: "2. Rotação Regular (Sem Troca)",
    chapter_rotation_koutai: "2B. Rotação com Troca (Shinpan Koutai)",
    chapter_exit: "3. Encerramento & Saída",
    procSeatsLabel: "Assentos (Mesa):",
    procSeatsLeft: "Esquerda",
    procSeatsRight: "Direita",
    procRotLabel: "Modo Rotação:",
    procRotRegular: "Regular",
    procRotKoutai: "Troca",
    stepLabel: "Etapa",
    btnPrev: "Anterior",
    btnNext: "Próximo",
    btnPlay: "Reproduzir",
    btnPause: "Pausar",
    btnRestart: "Início",
    speedLabelProc: "Velocidade",
    pauseOnStepLabel: "Pausar a cada etapa (Didático)",
    procedureNote: "Procedimento oficial da FIK / AJKF. Competidores ocultos durante o protocolo.",
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
        btnProcReset: "Reiniciar",
    action_entry_rei: "Saudação conjunta (Rei)",
    action_koutai_mutual_rei: "Saudação mútua (Rei)",
    action_koutai_final_rei_separate: "Saudação à quadra",
    action_exit_rei: "Saudação final (Rei)",
    action_exit_sogo_ni_rei: "Sogo-ni-rei (Saudação mútua)",
    step_entry_lineup_desc: "Os 3 árbitros levantam-se dos assentos de arbitragem e perfilam-se do lado de fora da quadra, na ordem Fukushin - Shushin - Fukushin, com as bandeiras enroladas na mão direita (vermelha cobrindo a branca) ao lado do corpo.",
    step_entry_mae_desc: "Ao comando \"Mae\" do Shushin, o trio avança marchando em linha reta tangenciando a linha da quadra, mantendo a formação alinhada até atingir o centro da quadra.",
    step_entry_turn_court_desc: "No centro e logo atrás da linha de limite da quadra, os 3 árbitros giram 90º simultaneamente no próprio eixo, voltando-se para o interior da quadra (direção do Shomen).",
    step_entry_ippomae_desc: "Ao comando \"Ippomae\" do Shushin, os 3 árbitros avançam para dentro da quadra (a aproximadamente 1m da linha), entrando com a passada direita-esquerda-direita.",
    step_entry_rei_desc: "Ao comando \"Rei\" do Shushin, todos os árbitros fazem saudação conjunta em direção ao Shomen / interior da quadra.",
    step_entry_trapezoid_walk_desc: "O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a direção do movimento pelas \"pernas\" do trapézio isósceles (por dentro dos kaishisen), em linha reta, até atingir sua posição final (a aproximadamente 1m da linha). Nesta posição, há uma distância de aproximadamente 4m entre os dois Fukushin (relação geométrica).",
    step_entry_turn_inward_desc: "Os Fukushin giram estritamente para dentro em direção ao centro da quadra, estabelecendo a formação Padrão do triângulo.",
    step_entry_separate_flags_desc: "Na posição Padrão, os 3 árbitros separam as bandeiras simultaneamente nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).",
    step_rot_flags_right_desc: "Os árbitros juntam as bandeiras na mão direita ao lado do corpo, preparando-se para a rotação de posições.",
    step_rot_turn_dest_desc: "Os árbitros giram no próprio eixo em direção ao próximo vértice do triângulo.",
    step_rot_walk_desc: "Os 3 árbitros caminham em linha reta ao longo dos lados do triângulo isósceles em direção aos novos vértices, mantendo o olhar na direção da marcha.",
    step_rot_turn_center_desc: "Ao atingirem as novas posições, todos os árbitros giram no próprio eixo para dentro (sentido anti-horário) voltando-se para o centro da quadra.",
    step_rot_separate_flags_desc: "Os 3 árbitros separam simultaneamente as bandeiras nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).",
    step_koutai_flags_right_desc: "Os árbitros juntam as bandeiras na mão direita ao lado do corpo, preparando-se para a rotação de posições. O árbitro substituto aguarda ao lado de fora da quadra.",
    step_koutai_turn_dest_desc: "Os árbitros giram no próprio eixo em direção ao próximo vértice do triângulo.",
    step_koutai_walk_dest_desc: "Os 3 árbitros caminham em linha reta ao longo dos lados do triângulo isósceles em direção aos novos vértices, mantendo o olhar na direção da marcha.",
    step_koutai_reorient_desc: "Ao atingirem as novas posições, os árbitros que se mantêm viram-se para o centro da quadra, enquanto o árbitro que sairá (sainte) vira-se para o entrante do lado de fora e enrola as bandeiras (branca por dentro, vermelha por fora).",
    step_koutai_sub_enter_desc: "O árbitro substituto ingressa na quadra em direção ao sainte, sincronizando sua parada com o término do enrolar da bandeira pelo sainte.",
    step_koutai_mutual_rei_desc: "Os árbitros fazem saudação (Rei) entre eles.",
    step_koutai_exit_backwards_swap_desc: "O árbitro que está se retirando gira 90º no sentido horário e recua de costas (voltado para o interior da quadra) para fora da quadra, enquanto o substituto avança e assume a posição no triângulo.",
    step_koutai_final_rei_separate_desc: "O árbitro que está se retirando realiza a saudação (Rei) voltado para a quadra. Simultaneamente, os 3 árbitros na quadra separam as bandeiras nas duas mãos (Shushin com a vermelha na direita e a branca na esquerda, e os Fukushin com a branca na direita e a vermelha na esquerda).",
    step_exit_roll_flags_desc: "Ao término do combate e saudações dos competidores, todos os árbitros enrolam as bandeiras simultaneamente (branca por dentro, vermelha por fora) e as mantêm na mão direita ao lado do corpo.",
    step_exit_trapezoid_return_desc: "O Shushin permanece fixo no vértice. Os dois Fukushin caminham virados para a marcha pelas \"pernas\" do trapézio até o Shushin. O novo grupo de árbitros levanta-se dos assentos e perfila-se na borda de entrada da quadra.",
    step_exit_turn_inward_align_desc: "Ao chegarem ao lado do Shushin, ambos os Fukushin giram estritamente para dentro para ficarem voltados para a quadra, rigorosamente alinhados com o Shushin a aproximadamente 1m da linha.",
    step_exit_rei_desc: "Ao comando \"Rei\" do Shushin, o trio que está saindo faz saudação ao Shomen / interior da quadra.",
    step_exit_turn_sideways_desc: "Ao comando \"Hidari-muke\" (se os assentos estiverem à esquerda) ou \"Migi-muke\" (se à direita) do Shushin, os 3 árbitros giram 90º no próprio eixo, prontos para marchar em direção à saída.",
    step_exit_march_straight_desc: "Ao comando \"Mae\" do Shushin, o trio que encerra caminha em linha reta em direção à borda de saída da quadra. Simultaneamente, o novo grupo de árbitros, também ao comando de \"Mae\" do Shushin, avança pela lateral tangenciando a quadra até o centro de entrada.",
    step_exit_sogo_ni_rei_desc: "Assim que cruzam os limites da quadra, o trio que está saindo abre a formação de triângulo equilátero, viram-se entre si e realizam o Sogo-ni-rei, enquanto o novo trio está pronto no centro para iniciar.",
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
    modeCombat: "Reactive Combat",
    modeProcedures: "FIK Procedures",
    chapter_entry: "1. Entry & Formation",
    chapter_rotation: "2. Regular Rotation (No Sub)",
    chapter_rotation_koutai: "2B. Rotation with Substitution (Koutai)",
    chapter_exit: "3. Court Exit",
    procSeatsLabel: "Shinpan Seats:",
    procSeatsLeft: "Left",
    procSeatsRight: "Right",
    procRotLabel: "Rotation Mode:",
    procRotRegular: "Regular",
    procRotKoutai: "Sub (Koutai)",
    stepLabel: "Step",
    btnPrev: "Previous",
    btnNext: "Next",
    btnPlay: "Play",
    btnPause: "Pause",
    btnRestart: "Restart",
    speedLabelProc: "Speed",
    pauseOnStepLabel: "Pause at each step (Didactic)",
    procedureNote: "Official FIK / AJKF procedure. Competitors hidden during protocol.",
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
        btnProcReset: "Reset",
    action_entry_rei: "Joint Bow (Rei)",
    action_koutai_mutual_rei: "Mutual Bow (Rei)",
    action_koutai_final_rei_separate: "Bow to the Court",
    action_exit_rei: "Final Bow (Rei)",
    action_exit_sogo_ni_rei: "Sogo-ni-rei (Mutual Bow)",
    step_entry_lineup_desc: "The 3 referees stand up from the referee seats and line up outside the court in the order Fukushin - Shushin - Fukushin, holding the rolled flags in the right hand (red covering white) at the side of the body.",
    step_entry_mae_desc: "At the command \"Mae\" from the Shushin, the trio marches forward in a straight line along the court border, maintaining alignment until reaching the center of the court.",
    step_entry_turn_court_desc: "At the center and just behind the boundary line, all 3 referees turn 90º inward simultaneously on their own axis, facing inside the court towards the Shomen.",
    step_entry_ippomae_desc: "At the command \"Ippomae\" from the Shushin, the 3 referees advance inside the court (approx. 1m from the boundary line), stepping right-left-right.",
    step_entry_rei_desc: "At the command \"Rei\" from the Shushin, all referees bow together facing the Shomen / court interior.",
    step_entry_trapezoid_walk_desc: "The Shushin remains fixed at the vertex. The two Fukushin turn and march along the legs of the isosceles trapezoid (inside the kaishisen) in a straight line until reaching their final positions (approx. 1m from the boundary line), spaced approx. 4m apart.",
    step_entry_turn_inward_desc: "The Fukushin turn strictly inward towards the center of the court, establishing the Standard triangle formation.",
    step_entry_separate_flags_desc: "In the Standard position, all 3 referees separate the flags simultaneously in both hands (Shushin: red in right, white in left; Fukushin: white in right, red in left).",
    step_rot_flags_right_desc: "The referees bring both flags together into the right hand at the side of the body, preparing for position rotation.",
    step_rot_turn_dest_desc: "The referees turn on their own axis towards the next vertex of the triangle.",
    step_rot_walk_desc: "All 3 referees walk in straight lines along the sides of the isosceles triangle towards their new vertices, keeping their gaze in the direction of march.",
    step_rot_turn_center_desc: "Upon reaching their new positions, all referees turn inward on their axis (counter-clockwise) to face the center of the court.",
    step_rot_separate_flags_desc: "All 3 referees separate the flags simultaneously in both hands (Shushin: red in right, white in left; Fukushin: white in right, red in left).",
    step_koutai_flags_right_desc: "The referees bring the flags together in the right hand at the side of the body, preparing for rotation. The substitute referee waits outside the court.",
    step_koutai_turn_dest_desc: "The referees turn on their own axis towards the next vertex of the triangle.",
    step_koutai_walk_dest_desc: "The 3 referees walk in a straight line along the sides of the triangle towards their new vertices, looking towards the direction of march.",
    step_koutai_reorient_desc: "Upon reaching their new positions, the remaining referees face the court center, while the outgoing referee faces the incoming substitute outside and rolls the flags (white inside, red outside).",
    step_koutai_sub_enter_desc: "The substitute referee enters the court towards the outgoing referee, synchronizing stopping with the completion of flag rolling by the outgoing referee.",
    step_koutai_mutual_rei_desc: "The outgoing and incoming referees bow to each other (Mutual Rei).",
    step_koutai_exit_backwards_swap_desc: "The outgoing referee turns 90º clockwise and steps backward facing into the court to exit, while the substitute advances into position in the triangle.",
    step_koutai_final_rei_separate_desc: "The outgoing referee bows to the court. Simultaneously, the 3 referees on the court separate flags in both hands (Shushin: red in right, white in left; Fukushin: white in right, red in left).",
    step_exit_roll_flags_desc: "Upon conclusion of the match and competitor bows, all referees roll flags simultaneously (white inside, red outside) and hold them in the right hand at the side of the body.",
    step_exit_trapezoid_return_desc: "The Shushin remains fixed at the vertex. Both Fukushin turn and march along the legs of the trapezoid towards the Shushin. The incoming referee group stands up from their seats and lines up at the court entrance.",
    step_exit_turn_inward_align_desc: "Upon reaching the Shushin, both Fukushin turn strictly inward to face the court, rigorously aligned with the Shushin approx. 1m from the boundary line.",
    step_exit_rei_desc: "At the command \"Rei\" from the Shushin, the exiting trio bows together towards the Shomen / court interior.",
    step_exit_turn_sideways_desc: "At the command \"Hidari-muke\" (or \"Migi-muke\") from the Shushin, the 3 referees turn 90º on their axis, ready to march towards the exit.",
    step_exit_march_straight_desc: "At the command \"Mae\" from the Shushin, the exiting trio marches in a straight line towards the exit border. Simultaneously, the incoming referee group, also at the command \"Mae\", advances along the sideline to the entrance center.",
    step_exit_sogo_ni_rei_desc: "As soon as crossing the court boundary, the exiting trio forms an equilateral triangle, turns to face one another, and executes Sogo-ni-rei (mutual bow), while the new trio is ready at center.",
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
    modeCombat: "試合シミュレーション",
    modeProcedures: "FIK 審判手順",
    chapter_entry: "1. 試合場入場・初期位置",
    chapter_rotation: "2. 通常巡回（交代なし）",
    chapter_rotation_koutai: "2B. 審判員交代（巡回あり）",
    chapter_exit: "3. 試合場退場",
    procSeatsLabel: "審判員席（本部）:",
    procSeatsLeft: "左側",
    procSeatsRight: "右側",
    procRotLabel: "巡回・交代方式:",
    procRotRegular: "通常",
    procRotKoutai: "交代",
    stepLabel: "段階",
    btnPrev: "前へ",
    btnNext: "次へ",
    btnPlay: "再生",
    btnPause: "一時停止",
    btnRestart: "最初へ",
    speedLabelProc: "速度",
    pauseOnStepLabel: "各段階で一時停止（解説用）",
    procedureNote: "FIK公式審判手順。プロトコル実行中は競技者は非表示になります。",
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
        btnProcReset: "リセット",
    action_entry_rei: "正面への礼",
    action_koutai_mutual_rei: "相互の礼",
    action_koutai_final_rei_separate: "試合場への礼",
    action_exit_rei: "試合場・正面への礼",
    action_exit_sogo_ni_rei: "相互の礼（三人礼）",
    step_entry_lineup_desc: "3名の審判員は審判員席から立ち上がり、副審・主審・副審の順で試合場の外側に整列し、巻いた審判旗（赤が白を包む）を右手に持ち体の横に保持する。",
    step_entry_mae_desc: "主審の「前」の合図で、審判団は試合場境界線に沿って直進し、整列を保ったまま試合場の中央（境界線外側）まで進む。",
    step_entry_turn_court_desc: "中央の境界線直後にて、3名の審判員は一斉にその場で90度内向きに回転し、試合場内（正面の方向）を向く。",
    step_entry_ippomae_desc: "主審の「一歩前」の合図で、3名の審判員は右足・左足・右足の歩調で試合場内（境界線から約1m）へと前進する。",
    step_entry_rei_desc: "主審の「礼」の合図で、全審判員が正面（試合場内）に向かって一斉に礼を行う。",
    step_entry_trapezoid_walk_desc: "主審はその場（頂点）に留まる。2名の副審は進行方向を向き、等脚台形の脚（開始線の内側）に沿って直進し、境界線から約1mの定位置に到達する（両副審の間隔は約4m）。",
    step_entry_turn_inward_desc: "両副審は必ず内側（進行方向の内側）に向き直って試合場中央を向き、基本三角形（スタンダード隊形）を完成させる。",
    step_entry_separate_flags_desc: "基本位置において、3名の審判員は一斉に旗を両手に分ける（主審は右手に赤・左手に白、両副審は右手に白・左手に赤）。",
    step_rot_flags_right_desc: "審判員は旗を右手に束ねて体の横に保持し、位置交代の準備を整える。",
    step_rot_turn_dest_desc: "各審判員はその場で次の移動目標（三角形の次の頂点）に向けて向きを変える。",
    step_rot_walk_desc: "3名の審判員は等脚三角形の辺に沿って直進し、進行方向を見据えながら次の位置へと進む。",
    step_rot_turn_center_desc: "新たな位置に到達後、全審判員はその場で内向き（反時計回り）に回転し、試合場中央を向く。",
    step_rot_separate_flags_desc: "3名の審判員は一斉に旗を両手に分ける（主審は右手に赤・左手に白、副審は右手に白・左手に赤）。",
    step_koutai_flags_right_desc: "審判員は旗を右手に束ねて体の横に保持し、交代に備える。交代審判員は試合場外で待機する。",
    step_koutai_turn_dest_desc: "審判員はその場で次の頂点に向けて向きを変える。",
    step_koutai_walk_dest_desc: "3名の審判員は三角形の辺に沿って直進し、それぞれの移動位置へと進む。",
    step_koutai_reorient_desc: "定位置に到達後、留まる審判員は試合場中央を向き、退場する審判員は場外の交代審判員を向いて旗を巻く（白を内に、赤を外に）。",
    step_koutai_sub_enter_desc: "交代審判員は試合場内に入り退場審判員の前へ進み、旗を巻き終えるタイミングに合わせて停止する。",
    step_koutai_mutual_rei_desc: "退場審判員と交代審判員が互いに礼（相互の礼）を交わす。",
    step_koutai_exit_backwards_swap_desc: "退場審判員は時計回りに90度向きを変え、試合場内を向いたまま後退して場外へ退き、交代審判員が前進して定位置に着く。",
    step_koutai_final_rei_separate_desc: "退場審判員は試合場に向かって礼を行う。同時に場内の3名の審判員は一斉に旗を両手に分ける（主審：右赤・左白、副審：右白・左赤）。",
    step_exit_roll_flags_desc: "試合終了および選手の相互の礼の後、全審判員は同時に旗を巻き（白を内に、赤を外に）、右手に持って体の横に保持する。",
    step_exit_trapezoid_return_desc: "主審はその場に留まる。両副審は進行方向を向いて台形の脚に沿って主審の位置まで進む。次の審判団は審判員席から立ち上がり、入場位置に整列する。",
    step_exit_turn_inward_align_desc: "主審の両脇に到達後、両副審は必ず内側に向き直って試合場を向き、境界線から約1mの位置で主審と一直線に整列する。",
    step_exit_rei_desc: "主審の「礼」の合図で、退場する審判団は正面（試合場内）に向かって礼を行う。",
    step_exit_turn_sideways_desc: "主審の「左向け」（または「右向け」）の合図で、3名の審判員はその場で90度回転し、退場口へ向けて縦隊を整える。",
    step_exit_march_straight_desc: "主審の「前」の合図で退場する審判団は直進して退場口へ進む。同時に、次の審判団も主審の「前」の合図で境界線に沿って中央入口まで進む。",
    step_exit_sogo_ni_rei_desc: "試合場境界線を越えた直後、退場する審判団は正三角形に開き、互いに向き合って相互の礼（三人礼）を行い、次の審判団は中央で開始の準備を整える。",
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
