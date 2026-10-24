export const i18n: Record<string, Record<string, string>> = {
  pt: {
    title: "Kendo Shinpan",
    langLabel: "Idioma / Language / 言語",
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
    author: "Idealização e desenvolvimento: Adrian Yu Yoneda",
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
    sectionGlobalLabel: "Configurações Gerais",
    procCtxTitle: "Diretrizes & Protocolo FIK",
    procCtxDesc: "Coreografia protocolar de arbitragem em shiai-jo, conforme normas da FIK.",
    procCtxFlagsTitle: "Porte das Bandeiras (Shinpanki)",
    procCtxShushin: "<strong>Shushin:</strong> Direita Vermelha / Esquerda Branca",
    procCtxFukushin: "<strong>Fukushin:</strong> Direita Branca / Esquerda Vermelha",
    procCtxMovement: "<strong>Entrada / Rotação / Saída:</strong> Na mão direita (Vermelha cobre a Branca).",
    procCtxGeomTitle: "Geometria de posicionamento dos Shinpan-in",
    procCtxGeomTriangle: "Triângulo isósceles com vértices a ~1,0 m da borda da quadra.",
    procCtxGeomFukushin: "Fukushin: distância aproximada de 4,0 m entre eles, por relação geométrica.",
    procCtxTip: '<i class="fas fa-info-circle text-[#bc002d] mr-1"></i> Utilize o painel flutuante à direita para navegar entre capítulos, etapas e velocidade.',
    helpModalTitle: "Guia do Simulador & Fundamentos",
    helpCloseBtn: "Fechar Guia",
    helpTabGlobal: "Módulos & Configurações",
    helpTabProcedures: "Procedimentos FIK",
    helpTabCombat: "Combate Reativo",
    helpTabAdvanced: "Lógica & Parâmetros",
    helpTabScenarios: "Cenários de Teste",
    helpTabConcept: "Conceito Marcial",
    helpTabDisclaimer: "Disclaimer & Regras",
    helpGlobalBody: `<div class="space-y-4">
  <div class="bg-gradient-to-r from-[#bc002d]/20 to-transparent p-4 rounded-xl border border-[#bc002d]/30">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-globe text-[#bc002d]"></i> Visão Geral da Plataforma Kendo Shinpan Simulator
    </h3>
    <p class="text-xs text-gray-300 mt-1.5 leading-relaxed">
      Plataforma educacional interativa voltada ao estudo, visualização e aperfeiçoamento da arbitragem de Kendo. O simulador tem como objetivo proporcionar o domínio visual, espacial e regulamentar do posicionamento e deslocamento dos árbitros através de dois módulos complementares de alta fidelidade em <em>shiai-jo</em>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#bc002d] text-white flex items-center justify-center text-xs">1</span>
        <span>Módulo de Procedimentos FIK</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        Demonstração animada passo a passo da <strong>coreografia protocolar oficial</strong> da <em>International Kendo Federation</em> (FIK). Abrange a entrada em quadra, alinhamentos geométricos, saudações (<em>Rei</em>), rotações de postos, troca de árbitros (<em>Shinpan Koutai</em>) e saída.
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-xs">2</span>
        <span>Módulo de Combate Reativo</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        Motor interativo em tempo real onde você arrasta os atletas <strong>Shiro</strong> (Branco) e <strong>Aka</strong> (Vermelho) pela quadra para observar como o trio de arbitragem (Shushin e dois Fukushin) ajusta instantaneamente suas posições, preservando o <strong>triângulo isósceles</strong> e eliminando pontos cegos.
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-amber-400"></i> Configurações Gerais (Cabeçalho Fixo do Painel Esquerdo)
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-language text-blue-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">Idioma / Language / 言語:</strong>
          Comutador trilingue instantâneo entre Português, Inglês e Japonês em todos os textos, descrições didáticas e comandos da ferramenta.
        </div>
      </div>
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-ruler-combined text-green-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">Dimensão da Quadra:</strong>
          Permite selecionar <strong>9 x 9 m</strong>, <strong>10 x 10 m</strong> ou <strong>11 x 11 m</strong>, ajustando dinamicamente as proporções espaciais, linhas de limite e distâncias canônicas da FIK.
        </div>
      </div>
    </div>
  </div>

  <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2">
    <i class="fas fa-info-circle text-amber-400 mt-0.5 flex-shrink-0"></i>
    <span><strong>Painel Adaptativo:</strong> Ao alternar entre os módulos no topo da tela, o painel lateral esquerdo adapta-se automaticamente, exibindo as notas didáticas e protocolares no modo Procedimentos e os controles de depuração/visualização no modo Combate.</span>
  </div>
</div>`,
    helpProceduresBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-scroll text-[#bc002d]"></i> Guia do Módulo de Procedimentos FIK
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      Este módulo reproduz com rigor todos os movimentos, posições, comandos de voz e saudações do trio de arbitragem em <em>shiai-jo</em>, em conformidade com as regras oficiais da <em>International Kendo Federation</em> (FIK) e o manual <em>FIK Handbook for Kendo Shiai and Shinpan Management</em>.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-gamepad text-[#bc002d]"></i> Como Operar o Painel Flutuante de Procedimentos
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-play text-green-400"></i> Reprodução & Navegação:</strong>
        Utilize <strong>Reproduzir / Pausar</strong> para rodar a animação contínua. Use <strong>Anterior</strong> e <strong>Próximo</strong> para examinar cada etapa individualmente.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-tachometer-alt text-blue-400"></i> Velocidade de Marcha:</strong>
        Alterne entre <strong>0.5x</strong> (análise minuciosa de passadas), <strong>1.0x</strong> (velocidade real de seminário), <strong>1.5x</strong> e <strong>2.0x</strong>.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-check-square text-amber-400"></i> Pausa a cada Etapa (Didático):</strong>
        Quando marcada, a animação pausa automaticamente ao final de cada etapa, permitindo ler o texto explicativo oficial e absorver os detalhes posturais.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-chair text-purple-400"></i> Assentos da Mesa & Rotação:</strong>
        Selecione <strong>Esquerda</strong> ou <strong>Direita</strong> para definir o lado dos assentos de arbitragem, e alterne o modo de rotação entre <strong>Regular</strong> e <strong>Troca</strong> (Shinpan Koutai).
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-list-ol text-blue-400"></i> Estrutura dos Três Capítulos Canônicos
    </h4>
    <div class="space-y-3 text-xs text-gray-300">
      <div class="border-l-2 border-[#bc002d] pl-3 py-0.5">
        <strong class="text-white block font-semibold">1. Entrada & Formação (8 etapas):</strong>
        Perfilamento externo (Fukushin - Shushin - Fukushin) &rarr; Comando "Mae" e marcha tangencial retilínea &rarr; Giro simultâneo de 90° voltado para a quadra &rarr; Comando "Ippomae" e passada direita-esquerda-direita entrando na quadra (~1m da linha) &rarr; Comando "Rei" e saudação conjunta &rarr; Fukushin marcham em linha reta (por dentro dos kaishisen) enquanto o Shushin permanece fixo &rarr; Giro dos Fukushin estritamente para o interior da quadra &rarr; Separação simultânea das bandeiras.
      </div>
      <div class="border-l-2 border-amber-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">2A. Rotação Regular (Sem Troca - 5 etapas):</strong>
        Junção das bandeiras na mão direita &rarr; Giro no próprio eixo em direção ao próximo vértice &rarr; Marcha retilínea ao longo dos lados do triângulo isósceles &rarr; Giro anti-horário para o centro da quadra &rarr; Separação simultânea das bandeiras.
      </div>
      <div class="border-l-2 border-green-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">2B. Rotação com Troca — Shinpan Koutai (8 etapas):</strong>
        Bandeiras na mão direita &rarr; Giro e deslocamento ao próximo vértice &rarr; Árbitros mantidos viram-se ao centro; o árbitro sainte vira-se para o substituto externo e enrola as bandeiras (branca por dentro, vermelha por fora) &rarr; Substituto ingressa na quadra sincronizado &rarr; Saudação mútua (Rei) &rarr; Sainte gira 90° e recua de costas voltado para a quadra &rarr; Saudação à quadra; árbitros atuantes fazem a separação simultânea das bandeiras em quadra.
      </div>
      <div class="border-l-2 border-purple-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">3. Encerramento & Saída (7 etapas):</strong>
        Enrolar simultâneo das bandeiras (branca por dentro, vermelha por fora) &rarr; Fukushin retornam ao Shushin em linha reta (por dentro dos kaishisen) &rarr; Giro para dentro e alinhamento a 1m da linha &rarr; Comando "Rei" ao Shomen &rarr; Comando "Hidari-muke" ou "Migi-muke" &rarr; Comando "Mae" e marcha até fora da quadra, enquanto o novo trio entra &rarr; Dispersão em triângulo equilátero e saudação mútua externa (Sogo-ni-rei).
      </div>
    </div>
  </div>

  <div class="bg-black/40 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs">
    <h4 class="font-bold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
      <i class="fas fa-flag text-amber-400"></i> Regras Rigorosas de Porte das Bandeiras (Shinpanki)
    </h4>
    <ul class="space-y-1.5 text-gray-300 list-disc list-inside">
      <li><strong>Em Deslocamento (Marcha de Entrada, Rotação e Saída):</strong> Ambas as bandeiras devem ser portadas <em>exclusivamente na mão direita</em>, ao lado do corpo; no caso da entrada e saída, as bandeiras devem estar enroladas (branca por dentro, vermelha por fora).</li>
      <li><strong>Em Posição de Combate:</strong>
        <ul class="pl-4 mt-1 space-y-1 list-none">
          <li>&bull; <strong class="text-white">Shushin:</strong> Bandeira Vermelha na mão direita / Bandeira Branca na mão esquerda.</li>
          <li>&bull; <strong class="text-white">Fukushin:</strong> Bandeira Branca na mão direita / Bandeira Vermelha na mão esquerda.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>`,
    helpCombatBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-fist-raised text-[#2563eb]"></i> Guia do Módulo de Combate Reativo
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      O módulo de Combate Reativo simula as leis cinemáticas de movimentação de um trio de arbitragem em resposta à ação contínua dos atletas na quadra de madeira.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-hand-pointer text-blue-400"></i> Interação Prática</strong>
      <p class="leading-relaxed">
        Clique e arraste diretamente os lutadores <strong>W</strong> (<em>Shiro</em> / Branco) e <strong>R</strong> (<em>Aka</em> / Vermelho) em qualquer direção na quadra. O trio de arbitragem reagirá automaticamente para manter o enquadramento isósceles.
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-undo-alt text-[#bc002d]"></i> Reset das Posições</strong>
      <p class="leading-relaxed">
        O botão <strong>Resetar Posições</strong> (no rodapé do painel esquerdo ou flutuante se recolhido) devolve instantaneamente os atletas aos seus <em>kaishisen</em> (marcas de início) e restaura o posicionamento padrão dos árbitros.
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-layer-group text-green-400"></i> Os 2 Modos de Visualização
    </h4>
    <div class="space-y-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">Modo Renderizado (Visualização Zenital Marcial):</strong>
        Exibe a quadra em piso de madeira clássico com marcações brancas, atletas com uniforme de Kendo e <em>Tasuki</em> vermelho e branco nas costas, além dos três árbitros uniformizados portando suas bandeiras.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">Modo Técnico (Diagrama Analítico & Depuração):</strong>
        Focado no estudo das zonas matemáticas. Apresenta os círculos com letras de identificação (W, R, S, F1, F2), as linhas de visão, as áreas poligonais de cada árbitro e o painel Debug com medição angular e estados da máquina de movimentação.
      </div>
    </div>
  </div>
</div>`,
    helpAdvancedBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-[#bc002d]"></i> Lógica Cinemática & Parâmetros Avançados
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      A movimentação do trio baseia-se em um modelo vetorial e angular que busca otimizar a visualização do <em>yuko-datotsu</em> através da manutenção de um triângulo isósceles com o centro dos atletas no centro do triângulo.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-wave-square text-blue-400"></i> Suavização do Movimento (k)
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      O parâmetro <strong>Suavização (k)</strong> (ajustável de 1.0 a 15.0) controla a taxa de convergência inercial dos árbitros:
    </p>
    <ul class="space-y-1 text-xs text-gray-300 list-disc list-inside pl-2">
      <li><strong>Valores Altos (8.0 a 15.0):</strong> Resposta imediata e ágil, com menor inércia, ideal para acompanhar testes matemáticos rápidos.</li>
      <li><strong>Valor Padrão (5.0):</strong> Balanço ideal que simula a passada fluida e a massa corporal de um árbitro humano em deslocamento.</li>
      <li><strong>Valores Baixos (1.0 a 3.0):</strong> Alta inércia, gerando curvas de aproximação mais lentas e amortecidas.</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-compass text-amber-400"></i> Os 5 Limiares Angulares de Transição (Thresholds)
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      Em combate real, a linha entre os lutadores gira. Quando atinge ângulos críticos, o Fukushin transita de lado e o Shushin deixa temporariamente de ser o vértice do triângulo isósceles:
    </p>
    <div class="space-y-2 text-xs text-gray-300">
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">1. Entrada VERTEX (padrão 90°):</strong> Ângulo de combate no qual um Fukushin inicia a transição suave em direção ao lado do Shushin.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">2. Saída VERTEX &rarr; STANDARD (padrão 45°):</strong> Limiar de retorno à formação padrão. Possui uma ampla histerese angular (de 90° para 45°) para evitar que os árbitros fiquem oscilando de um lado para o outro em combates na fronteira angular.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">3. Entrada S_BASE (padrão 123°):</strong> Ponto em que o Shushin transita para o outro lado.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">4. Saída S_BASE &rarr; VERTEX (padrão 90°):</strong> Limiar de retorno de S_BASE para a zona intermediária.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">5. Entrada FLIP (padrão 135°):</strong> Ponto em que o outro Fukushin transita para o outro lado, retornando o triângulo isósceles padrão (Shushin no vértice).
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-snowflake text-cyan-400"></i> Estabilização Automática (Freeze) em Tsubazeriai
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      Quando os atletas entram em combate corpo a corpo (<em>tsubazeriai</em>) ou realizam múltiplos giros rápidos acumulados em curta distância, um árbitro humano não corre desordenadamente em círculos. O simulador replica esse comportamento: ao detectar alta rotação em curto raio, o motor aciona o estado <strong>FROZEN</strong>, mantendo as posições estáveis até que haja definição ou ruptura espacial.
    </p>
  </div>
</div>`,
    helpScenariosBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-play-circle text-[#bc002d]"></i> Bateria de Cenários de Teste Automatizados
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      O simulador conta com 8 rotinas automatizadas de trajetória cinemática no piso da quadra. Cada cenário foi desenvolvido para isolar e avaliar um comportamento específico da arbitragem.
    </p>
  </div>

  <div class="space-y-2.5 text-xs text-gray-300">
    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1A</span>
        <span>Giro Lento 360º</span>
      </div>
      <p class="leading-relaxed">
        Rotação contínua e suave dos competidores ao redor do centro do shiai-jo. Valida a rotação harmônica do trio e a preservação ininterrupta do triângulo isósceles em velocidade controlada.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1B</span>
        <span>Teste Vertex</span>
      </div>
      <p class="leading-relaxed">
        Desloca os lutadores na fronteira angular de 90º para avaliar a entrada e saída suave do modo Vertex pelo Shushin, demonstrando a ausência de solavancos visuais.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1C</span>
        <span>Teste S_BASE</span>
      </div>
      <p class="leading-relaxed">
        Conduz os atletas a uma rotação superior a 123º, comprovando a eficácia do Shushin atuando na base invertida e a cobertura angular dos dois Fukushin.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1D</span>
        <span>Giro Reverso 360º</span>
      </div>
      <p class="leading-relaxed">
        Giro completo no sentido anti-horário com inversão imediata para o sentido horário, validando a histerese matemática e a simetria de resposta do algoritmo.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">2</span>
        <span>Taiatari Swap (Choque Corporal)</span>
      </div>
      <p class="leading-relaxed">
        Simula um golpe com choque frontal violento onde os lutadores trocam de posição bruscamente em fração de segundo. Comprova a estabilidade dos árbitros sem giros descontrolados.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">3</span>
        <span>Tsubazeriai Pião</span>
      </div>
      <p class="leading-relaxed">
        Luta acirrada de tsubazeriai com giros rápidos acumulados em raio minúsculo. Demonstra o disparo imediato do estado Freeze, preservando os árbitros firmes e atentos.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">4 & 5</span>
        <span>Inversões Perto de 90º e 135º</span>
      </div>
      <p class="leading-relaxed">
        Oscilações deliberadas sobre as fronteiras de transição mais críticas, validando que a máquina de estados não apresenta ruídos ou comportamentos espúrios.
      </p>
    </div>
  </div>
</div>`,
    helpConceptBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-yin-yang text-[#bc002d]"></i> Conceito Marcial & Filosofia da Arbitragem
    </h3>
    <blockquote class="border-l-4 border-[#bc002d] pl-4 italic text-xs text-gray-200 py-1 leading-relaxed bg-black/20 rounded-r-lg">
      "Acredito que o árbitro deve naturalizar sua movimentação até que ela se torne um reflexo espontâneo, liberando sua mente para manter-se límpida e focada no julgamento imediato do ippon."
      <span class="block text-right text-gray-400 font-semibold mt-1 not-italic">— Adrian Yu Yoneda (Renshi 7º Dan)</span>
    </blockquote>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-eye text-amber-400"></i> Shinpan-me: O Julgamento do Yuko-Datotsu
    </h4>
    <p class="leading-relaxed">
      No Kendo, um ponto válido (<em>yuko-datotsu</em>) dura uma fração de segundo e requer a convergência simultânea de requisitos espirituais, técnicos e físicos: <strong>Ki-Ken-Tai-Ichi</strong> (união de espírito, espada e corpo), contato com a parte correta da <em>shinai</em> (<em>Datotsubu</em>) no local correto do <em>kendo-gu</em> do oponente (<em>Datotsubui</em>), ângulo de corte exato (<em>Hasuji</em>), postura digna e presença de espírito após o golpe (<em>Zanshin</em>).
    </p>
    <p class="leading-relaxed">
      Se o árbitro estiver em dúvida sobre onde se posicionar ou com a linha de visão obstruída, o momento do julgamento é irremediavelmente perdido.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-project-diagram text-blue-400"></i> A Sinergia do Trio de Arbitragem
    </h4>
    <p class="leading-relaxed">
      O trio de arbitragem atua como um <strong>organismo vivo e articulado</strong>. O posicionamento incorreto ou a hesitação de um dos árbitros rompe imediatamente o equilíbrio do triângulo isósceles, forçando os outros dois colegas ao erro geométrico e criando pontos cegos.
    </p>
    <p class="leading-relaxed">
      Por isso, a formação de árbitros requer o domínio não apenas das regras escritas, mas da sensibilidade espacial coletiva sobre o <em>shiai-jo</em>.
    </p>
  </div>
</div>`,
    helpDisclaimerBody: `<div class="space-y-4">
  <div class="p-4 bg-red-950/40 border border-red-800/40 rounded-xl space-y-2">
    <strong class="text-red-400 text-sm font-bold flex items-center gap-2">
      <i class="fas fa-exclamation-triangle"></i> Aviso Importante (Disclaimer Educacional)
    </strong>
    <p class="text-xs leading-relaxed text-gray-300">
      Esta ferramenta foi desenvolvida por iniciativa pessoal e tem caráter estritamente didático e educacional. Baseando-se em modelos matemáticos e algorítmicos de cinemática computacional, não constitui uma verdade incontestável.
    </p>
    <p class="text-xs leading-relaxed text-gray-300">
      Em caso de dúvidas, busque sempre a orientação de seus senseis e árbitros experientes.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-book text-amber-400"></i> Referências Oficiais
    </h4>
    <ul class="space-y-1.5 list-disc list-inside pl-2">
      <li><strong>Regulations of Kendo Shiai and Shinpan:</strong> International Kendo Federation (FIK, Julho/2023).</li>
      <li><strong>Handbook for Kendo Shiai and Shinpan Management:</strong> International Kendo Federation (FIK, Julho/2025).</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-400">
    <div class="flex items-center gap-2 text-white font-semibold">
      <i class="fas fa-user-tie text-[#bc002d]"></i> Autoria & Contato
    </div>
    <p>
      <strong>Idealização e desenvolvimento:</strong> Adrian Yu Yoneda (Renshi 7º Dan Kendo / 5º Dan Iaido — São Paulo, Brasil).
    </p>
    <p>
      Dúvidas, sugestões e colaborações para aprimoramento da ferramenta: <a href="mailto:adrian.yoneda@gmail.com" class="text-blue-400 underline hover:text-blue-300">adrian.yoneda@gmail.com</a>
    </p>
  </div>
</div>`,
    // Tutorial Strings
    tutChapOverview: "Visão Geral",
    tutChapProcedures: "Procedimentos FIK",
    tutChapCombat: "Combate Reativo",
    tutBtnNext: "Próximo",
    tutBtnPrev: "Anterior",
    tutBtnFinish: "Concluir",
    tutBtnSkip: "Pular Tutorial",
    tutStepLabel: "Passo",
    tutBtnOpenTutorial: "Tutorial Guiado",
    tutWelcomeToastTitle: "Bem-vindo ao Kendo Shinpan Simulator!",
    tutWelcomeToastDesc: "Deseja fazer um tour rápido de 1 minuto para conhecer as ferramentas e funções?",
    tutWelcomeToastStart: "Iniciar Tour",
    tutWelcomeToastDismiss: "Agora não",
    tutStepWelcomeTitle: "Bem-vindo ao Simulador",
    tutStepWelcomeDesc: "Esta plataforma educacional interativa foi concebida para o estudo, visualização e aperfeiçoamento da arbitragem de Kendo. Você aprenderá a navegar entre os procedimentos oficiais da FIK e o combate reativo.",
    tutStepWelcomeTip: "Você pode usar as abas acima para pular entre capítulos ou navegar sequencialmente usando 'Próximo'.",
    tutStepModeSwitchTitle: "Comutador de Módulos",
    tutStepModeSwitchDesc: "No topo da tela, você alterna entre os dois grandes módulos da plataforma: 'Procedimentos FIK' (coreografia protocolar de entrada, rotação e saída) e 'Combate Reativo' (física interativa com os atletas).",
    tutStepModeSwitchTip: "Clique nos botões a qualquer momento para alternar o modo de estudo.",
    tutStepSettingsTitle: "Painel de Configurações Gerais",
    tutStepSettingsDesc: "No painel lateral esquerdo, você pode alternar instantaneamente o idioma da ferramenta (Português, Inglês e Japonês) e ajustar a dimensão oficial da quadra (9x9m, 10x10m ou 11x11m).",
    tutStepSettingsTip: "O botão de recolher (seta) permite minimizar o painel para liberar a visão da quadra.",
    tutStepProcPanelTitle: "Capítulos de Procedimentos FIK",
    tutStepProcPanelDesc: "O painel flutuante à direita organiza a coreografia oficial da FIK em 3 capítulos canônicos: 1. Entrada & Formação, 2. Rotação (Regular ou Troca/Koutai) e 3. Encerramento & Saída.",
    tutStepProcPanelTip: "Você também pode alternar o lado dos assentos da mesa (Esquerda ou Direita) e o modo de rotação (Regular vs Troca).",
    tutStepProcControlsTitle: "Controles de Reprodução & Pausa Didática",
    tutStepProcControlsDesc: "Avance passo a passo usando 'Anterior' e 'Próximo', ou clique em 'Reproduzir' para rodar a animação contínua. Alterne a velocidade da marcha (0.5x, 1.0x, 1.5x, 2.0x).",
    tutStepProcControlsTip: "Mantenha 'Pausar a cada etapa' marcado para estudar detalhadamente o texto e a postura de cada fase.",
    tutStepProcCourtTitle: "Visualização Marcial & Comandos de Voz",
    tutStepProcCourtDesc: "Na quadra, observe o deslocamento sincronizado dos árbitros, o porte rigoroso das bandeiras (Shinpanki) e os comandos vocais oficiais da FIK exibidos no crachá (como 'Mae', 'Ippomae' e 'Rei').",
    tutStepProcCourtTip: "Repare como as bandeiras permanecem juntas na mão direita durante os deslocamentos e só se separam na formação final.",
    tutStepCombatIntroTitle: "Módulo de Combate Reativo",
    tutStepCombatIntroDesc: "No modo de Combate Reativo, o foco é a física de arbitragem em tempo real: como o Shushin e os dois Fukushin reagem dinamicamente à movimentação dos atletas para manter a visibilidade do Yuko-datotsu.",
    tutStepCombatIntroTip: "O triângulo isósceles garante que sempre haja pelo menos dois árbitros com visão desobstruída do golpe.",
    tutStepCombatDragTitle: "Interação Prática: Arraste os Atletas",
    tutStepCombatDragDesc: "Clique e arraste os lutadores Shiro (Branco) e Aka (Vermelho) diretamente na quadra. Observe como o trio de arbitragem calcula novos vetores e ajusta suas posições sem cruzar a linha de visão um do outro.",
    tutStepCombatDragTip: "Experimente girar os lutadores em torno do centro para observar a transição de vértices e o modo de histerese.",
    tutStepCombatModesTitle: "Modo Técnico vs Modo Renderizado",
    tutStepCombatModesDesc: "No topo, você pode alternar entre o 'Modo Renderizado' (visão artística com piso de madeira, uniformes e bandeiras) e o 'Modo Técnico' (diagrama analítico com cones de visão, áreas poligonais e painel de depuração de ângulos).",
    tutStepCombatModesTip: "No Modo Técnico, abra a seção Parâmetros no painel esquerdo para ajustar a suavização e os ângulos de transição.",
    tutStepCombatScenariosTitle: "Cenários Automáticos de Teste",
    tutStepCombatScenariosDesc: "No canto inferior direito, o widget flutuante de Cenários permite executar baterias pré-programadas de situações reais de combate: Giro Lento 360°, Teste Vertex, Taiatari Swap e Tsubazeriai (empurrão e giro).",
    tutStepCombatScenariosTip: "Clique nas pílulas (1A, 1B, 2, 3...) para disparar qualquer cenário com um único clique.",
    tutStepConclusionTitle: "Pronto para Explorar!",
    tutStepConclusionDesc: "Você conheceu os principais recursos do Kendo Shinpan Simulator! Para aprofundar-se nos fundamentos teóricos e regulamentares da FIK, consulte o botão 'Ajuda' no canto superior direito a qualquer momento.",
    tutStepConclusionTip: "Você pode reiniciar este tutorial guiado a qualquer momento clicando no botão 'Tutorial Guiado'."
  },
  en: {
    title: "Kendo Shinpan",
    langLabel: "Idioma / Language / 言語",
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
    author: "Concept & development: Adrian Yu Yoneda",
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
    sectionGlobalLabel: "General Settings",
    procCtxTitle: "FIK Protocol & Guidelines",
    procCtxDesc: "Official protocol choreography of refereeing on shiai-jo, per FIK regulations.",
    procCtxFlagsTitle: "Flag Protocol (Shinpanki)",
    procCtxShushin: "<strong>Shushin:</strong> Right Red / Left White",
    procCtxFukushin: "<strong>Fukushin:</strong> Right White / Left Red",
    procCtxMovement: "<strong>Entry / Rotation / Exit:</strong> In right hand (Red covering White).",
    procCtxGeomTitle: "Referee Positioning Geometry (Shinpan-in)",
    procCtxGeomTriangle: "Isosceles triangle with vertices ~1.0 m from the court boundary.",
    procCtxGeomFukushin: "Fukushin: approximate 4.0 m distance between them, by geometric relationship.",
    procCtxTip: '<i class="fas fa-info-circle text-[#bc002d] mr-1"></i> Use the floating panel on the right to navigate chapters, steps, and speed.',
    helpModalTitle: "Simulator Guide & Guidelines",
    helpCloseBtn: "Close Guide",
    helpTabGlobal: "Modules & Settings",
    helpTabProcedures: "FIK Procedures",
    helpTabCombat: "Reactive Combat",
    helpTabAdvanced: "Logic & Parameters",
    helpTabScenarios: "Test Scenarios",
    helpTabConcept: "Martial Concept",
    helpTabDisclaimer: "Disclaimer & Rules",
    helpGlobalBody: `<div class="space-y-4">
  <div class="bg-gradient-to-r from-[#bc002d]/20 to-transparent p-4 rounded-xl border border-[#bc002d]/30">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-globe text-[#bc002d]"></i> Kendo Shinpan Simulator Overview
    </h3>
    <p class="text-xs text-gray-300 mt-1.5 leading-relaxed">
      Interactive educational platform dedicated to the study, visualization, and enhancement of Kendo refereeing. The simulator aims to provide comprehensive visual, spatial, and regulatory mastery of referee positioning and movement across two complementary, high-fidelity modules on <em>shiai-jo</em>.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#bc002d] text-white flex items-center justify-center text-xs">1</span>
        <span>FIK Procedures Module</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        Step-by-step animated demonstration of the <strong>official protocol choreography</strong> established by the <em>International Kendo Federation</em> (FIK). Covers court entry, geometric alignments, salutes (<em>Rei</em>), position rotations, referee substitution (<em>Shinpan Koutai</em>), and exit.
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-xs">2</span>
        <span>Reactive Combat Module</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        Real-time interactive engine where you drag combatants <strong>Shiro</strong> (White) and <strong>Aka</strong> (Red) across the court to observe how the referee trio (Shushin and two Fukushin) dynamically repositions to maintain the <strong>isosceles triangle</strong> and extinguish blind spots.
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-amber-400"></i> General Settings (Fixed Left Header)
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-language text-blue-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">Idioma / Language / 言語:</strong>
          Instant trilingual switcher across Portuguese, English, and Japanese for all UI text, step explanations, and command badges.
        </div>
      </div>
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-ruler-combined text-green-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">Court Size:</strong>
          Select between <strong>9 x 9 m</strong>, <strong>10 x 10 m</strong>, or <strong>11 x 11 m</strong>, dynamically adjusting court bounds and canonical FIK geometric distances.
        </div>
      </div>
    </div>
  </div>

  <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2">
    <i class="fas fa-info-circle text-amber-400 mt-0.5 flex-shrink-0"></i>
    <span><strong>Adaptive Panel:</strong> When toggling modules via the top bar, the left panel automatically adapts, presenting didactic protocol notes in Procedures mode and interactive debug controls in Combat mode.</span>
  </div>
</div>`,
    helpProceduresBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-scroll text-[#bc002d]"></i> FIK Procedures Module Guide
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      This module accurately reproduces all movements, positions, voice commands, and salutes of the referee trio on the <em>shiai-jo</em>, in compliance with the official rules of the <em>International Kendo Federation</em> (FIK) and the <em>FIK Handbook for Kendo Shiai and Shinpan Management</em>.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-gamepad text-[#bc002d]"></i> Operating the Floating Stepper Controls
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-play text-green-400"></i> Playback & Navigation:</strong>
        Use <strong>Play / Pause</strong> for continuous playback. Use <strong>Prev</strong> and <strong>Next</strong> to inspect each step individually.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-tachometer-alt text-blue-400"></i> March Speed:</strong>
        Toggle between <strong>0.5x</strong> (step footwork inspection), <strong>1.0x</strong> (standard seminar speed), <strong>1.5x</strong>, and <strong>2.0x</strong>.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-check-square text-amber-400"></i> Pause on Each Step (Didactic):</strong>
        When enabled, automatically pauses at the completion of each step, allowing you to read the detailed official note and verify postural alignment.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-chair text-purple-400"></i> Seats & Rotation Mode:</strong>
        Choose <strong>Left</strong> or <strong>Right</strong> for referee table positioning, and toggle rotation between <strong>Regular</strong> and <strong>Substitution</strong> (Shinpan Koutai).
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-list-ol text-blue-400"></i> Three Canonical Chapters Breakdown
    </h4>
    <div class="space-y-3 text-xs text-gray-300">
      <div class="border-l-2 border-[#bc002d] pl-3 py-0.5">
        <strong class="text-white block font-semibold">1. Entrance & Formation (8 steps):</strong>
        External line-up (Fukushin - Shushin - Fukushin) &rarr; "Mae" command and straight tangential march &rarr; Simultaneous 90° turn facing the court &rarr; "Ippomae" command and right-left-right step entering the court (~1m from boundary line) &rarr; "Rei" command and mutual bow &rarr; Fukushin march straight ahead (inside the kaishisen) while Shushin remains fixed &rarr; Fukushin turn strictly toward court interior &rarr; Simultaneous flag separation.
      </div>
      <div class="border-l-2 border-amber-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">2A. Regular Rotation (Without Substitution - 5 steps):</strong>
        Flags gathered in right hand &rarr; Axis turn toward next vertex &rarr; Straight-line march along triangle sides &rarr; Counter-clockwise turn toward center &rarr; Simultaneous flag separation.
      </div>
      <div class="border-l-2 border-green-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">2B. Referee Substitution — Shinpan Koutai (8 steps):</strong>
        Flags in right hand &rarr; Turn and move to next vertex &rarr; Continuing referees turn to center; exiting referee turns toward external substitute and rolls flags (white inside, red outside) &rarr; Substitute enters court in synchronization &rarr; Mutual bow (Rei) &rarr; Exiting referee turns 90° and steps backward facing the court &rarr; Salute to the court; active referees perform simultaneous flag separation on court.
      </div>
      <div class="border-l-2 border-purple-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">3. Closing & Exit (7 steps):</strong>
        Simultaneous flag rolling (white inside, red outside) &rarr; Fukushin return to Shushin in a straight line (inside the kaishisen) &rarr; Inward turn and 1m line alignment &rarr; "Rei" command to Shomen &rarr; "Hidari-muke" or "Migi-muke" command &rarr; "Mae" command and march out of the court while new trio enters &rarr; Equilateral triangle dispersal and mutual external bow (Sogo-ni-rei).
      </div>
    </div>
  </div>

  <div class="bg-black/40 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs">
    <h4 class="font-bold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
      <i class="fas fa-flag text-amber-400"></i> Strict Flag Handling Rules (Shinpanki)
    </h4>
    <ul class="space-y-1.5 text-gray-300 list-disc list-inside">
      <li><strong>During Movement (Entrance, Rotation, and Exit):</strong> Both flags must be held <em>strictly in the right hand</em>, beside the body; in the case of entry and exit, flags must be rolled (white inside, red outside).</li>
      <li><strong>During Active Combat:</strong>
        <ul class="pl-4 mt-1 space-y-1 list-none">
          <li>&bull; <strong class="text-white">Shushin:</strong> Red Flag in right hand / White Flag in left hand.</li>
          <li>&bull; <strong class="text-white">Fukushin:</strong> White Flag in right hand / Red Flag in left hand.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>`,
    helpCombatBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-fist-raised text-[#2563eb]"></i> Reactive Combat Module Guide
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      The Reactive Combat module models the kinematic laws governing referee positioning in response to the fast-paced actions of two competitors on the wooden floor.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-hand-pointer text-blue-400"></i> Direct Interaction</strong>
      <p class="leading-relaxed">
        Click and drag competitors <strong>W</strong> (<em>Shiro</em> / White) and <strong>R</strong> (<em>Aka</em> / Red) anywhere on the court. The referee trio will automatically reposition to maintain the isosceles triangle.
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-undo-alt text-[#bc002d]"></i> Position Reset</strong>
      <p class="leading-relaxed">
        The <strong>Reset Positions</strong> button (in the left footer or floating when collapsed) returns competitors immediately to the central <em>kaishisen</em> markers and resets referee formations.
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-layer-group text-green-400"></i> The 2 Viewing Modes
    </h4>
    <div class="space-y-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">Rendered Mode (Martial Top-Down View):</strong>
        Displays the classic wooden flooring court with white markings, combatants in Kendo uniforms with red and white <em>Tasuki</em> on their backs, and the three uniformed referees carrying their flags.
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">Technical Mode (Analytical Diagram & Debug):</strong>
        Focused on mathematical zones. Shows identification circles (W, R, S, F1, F2), sightlines, polygonal referee responsibility areas, and the Debug panel with angular measurements and state machine status.
      </div>
    </div>
  </div>
</div>`,
    helpAdvancedBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-[#bc002d]"></i> Kinematic Logic & Advanced Parameters
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      Referee trio movement is based on a vector and angular model that seeks to optimize the viewing of <em>yuko-datotsu</em> by maintaining an isosceles triangle with the center of the combatants at the center of the triangle.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-wave-square text-blue-400"></i> Movement Smoothing (k)
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      Controls referee inertial convergence rate (adjustable from 1.0 to 15.0):
    </p>
    <ul class="space-y-1 text-xs text-gray-300 list-disc list-inside pl-2">
      <li><strong>High values (8.0 to 15.0):</strong> Agile, instantaneous response with minimal latency.</li>
      <li><strong>Default value (5.0):</strong> Natural balance simulating human referee mass and fluid footwork.</li>
      <li><strong>Low values (1.0 to 3.0):</strong> High inertia with slower, heavily damped approach arcs.</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-compass text-amber-400"></i> The 5 Angular Transition Thresholds
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      In live combat, the line between combatants rotates. When it reaches critical angles, the Fukushin transitions to the side and the Shushin temporarily ceases to be the apex of the isosceles triangle:
    </p>
    <div class="space-y-2 text-xs text-gray-300">
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">1. VERTEX Entry (default 90°):</strong> Combat angle at which a Fukushin begins a smooth transition toward the Shushin's side.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">2. VERTEX &rarr; STANDARD Exit (default 45°):</strong> Return threshold to standard formation. Features a wide angular hysteresis (from 90° to 45°) to prevent referees from oscillating back and forth during borderline combat.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">3. S_BASE Entry (default 123°):</strong> Point at which the Shushin transitions to the opposite side.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">4. S_BASE &rarr; VERTEX Exit (default 90°):</strong> Return threshold from S_BASE to the intermediate zone.
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">5. FLIP Entry (default 135°):</strong> Point at which the other Fukushin transitions to the opposite side, restoring the standard isosceles triangle (Shushin at the apex).
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-snowflake text-cyan-400"></i> Automatic Freeze Stabilization in Tsubazeriai
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      When combatants engage in close infighting (<em>tsubazeriai</em>) or execute multiple rapid clustered spins over a short radius, a human referee does not run around erratically in circles. The simulator replicates this behavior: upon detecting high rotation in a tight radius, the engine triggers the <strong>FROZEN</strong> state, holding positions steady until spatial definition or breakup occurs.
    </p>
  </div>
</div>`,
    helpScenariosBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-play-circle text-[#bc002d]"></i> Automated Test Scenarios Battery
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      The simulator provides 8 automated kinematic routines across the court floor. Each scenario was designed to validate specific aspects of refereeing movement.
    </p>
  </div>

  <div class="space-y-2.5 text-xs text-gray-300">
    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1A</span>
        <span>Slow 360º Turn</span>
      </div>
      <p class="leading-relaxed">
        Smooth, continuous rotation around the shiai-jo center. Demonstrates harmonious trio rotation and triangle maintenance at controlled speed.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1B</span>
        <span>Vertex Test</span>
      </div>
      <p class="leading-relaxed">
        Shifts competitors across the 90º threshold to verify smooth entry and exit from Vertex mode by the Shushin.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1C</span>
        <span>S_BASE Test</span>
      </div>
      <p class="leading-relaxed">
        Drives competitors beyond 123º to confirm Shushin inverted base positioning and Fukushin angular coverage.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1D</span>
        <span>Reverse 360º Turn</span>
      </div>
      <p class="leading-relaxed">
        Full counter-clockwise spin immediately reversing clockwise, validating mathematical hysteresis and algorithmic symmetry.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">2</span>
        <span>Taiatari Swap (Body Collision)</span>
      </div>
      <p class="leading-relaxed">
        Simulates an abrupt position swap between competitors in a split second, proving referee stability without erratic spins.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">3</span>
        <span>Tsubazeriai Spin</span>
      </div>
      <p class="leading-relaxed">
        Close clinch combat rapidly spinning within a tiny radius, triggering the Freeze mechanism to maintain referee composure.
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">4 & 5</span>
        <span>Inversions Near 90º and 135º</span>
      </div>
      <p class="leading-relaxed">
        Deliberate oscillations right on critical boundary angles, confirming state-machine stability without jitter.
      </p>
    </div>
  </div>
</div>`,
    helpConceptBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-yin-yang text-[#bc002d]"></i> Martial Concept & Refereeing Philosophy
    </h3>
    <blockquote class="border-l-4 border-[#bc002d] pl-4 italic text-xs text-gray-200 py-1 leading-relaxed bg-black/20 rounded-r-lg">
      "Referees must naturalize their physical movement until it becomes a spontaneous reflex, freeing their minds to remain serene and fully focused on the immediate evaluation of ippon."
      <span class="block text-right text-gray-400 font-semibold mt-1 not-italic">— Adrian Yu Yoneda (Renshi 7th Dan)</span>
    </blockquote>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-eye text-amber-400"></i> Shinpan-me: Judging Yuko-Datotsu
    </h4>
    <p class="leading-relaxed">
      In Kendo, a valid point (<em>yuko-datotsu</em>) lasts a fraction of a second and requires the simultaneous convergence of spiritual, technical, and physical requirements: <strong>Ki-Ken-Tai-Ichi</strong> (unity of spirit, sword, and body), contact with the correct part of the <em>shinai</em> (<strong>Datotsubu</strong>) onto the correct target on the opponent's <em>kendo-gu</em> (<strong>Datotsubui</strong>), exact cutting angle (<strong>Hasuji</strong>), dignified posture, and alert composure following the strike (<strong>Zanshin</strong>).
    </p>
    <p class="leading-relaxed">
      If a referee is uncertain about where to position themselves or has an obstructed line of sight, the moment of judgment is irrecoverably lost.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-project-diagram text-blue-400"></i> The Synergy of the Referee Trio
    </h4>
    <p class="leading-relaxed">
      The referee trio acts as a <strong>living, articulate organism</strong>. Incorrect positioning or hesitation by one referee immediately breaks the balance of the isosceles triangle, forcing the other two colleagues into geometric error and creating blind spots.
    </p>
    <p class="leading-relaxed">
      Therefore, referee development requires mastering not only the written rules, but a collective spatial sensitivity across the <em>shiai-jo</em>.
    </p>
  </div>
</div>`,
    helpDisclaimerBody: `<div class="space-y-4">
  <div class="p-4 bg-red-950/40 border border-red-800/40 rounded-xl space-y-2">
    <strong class="text-red-400 text-sm font-bold flex items-center gap-2">
      <i class="fas fa-exclamation-triangle"></i> Important Disclaimer
    </strong>
    <p class="text-xs leading-relaxed text-gray-300">
      This tool was developed through personal initiative for strictly didactic and educational purposes. Based on mathematical and computational kinematic models, it does not constitute an incontestable truth.
    </p>
    <p class="text-xs leading-relaxed text-gray-300">
      In case of doubt, always seek the guidance of your sensei and experienced referees.
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-book text-amber-400"></i> Official References
    </h4>
    <ul class="space-y-1.5 list-disc list-inside pl-2">
      <li><strong>Regulations of Kendo Shiai and Shinpan:</strong> International Kendo Federation (FIK, July/2023).</li>
      <li><strong>Handbook for Kendo Shiai and Shinpan Management:</strong> International Kendo Federation (FIK, July/2025).</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-400">
    <div class="flex items-center gap-2 text-white font-semibold">
      <i class="fas fa-user-tie text-[#bc002d]"></i> Authorship & Contact
    </div>
    <p>
      <strong>Concept & Development:</strong> Adrian Yu Yoneda (Renshi 7th Dan Kendo / 5th Dan Iaido — São Paulo, Brazil).
    </p>
    <p>
      Inquiries and feedback: <a href="mailto:adrian.yoneda@gmail.com" class="text-blue-400 underline hover:text-blue-300">adrian.yoneda@gmail.com</a>
    </p>
  </div>
</div>`,
    // Tutorial Strings
    tutChapOverview: "Overview",
    tutChapProcedures: "FIK Procedures",
    tutChapCombat: "Reactive Combat",
    tutBtnNext: "Next",
    tutBtnPrev: "Back",
    tutBtnFinish: "Finish",
    tutBtnSkip: "Skip Tutorial",
    tutStepLabel: "Step",
    tutBtnOpenTutorial: "Guided Tutorial",
    tutWelcomeToastTitle: "Welcome to Kendo Shinpan Simulator!",
    tutWelcomeToastDesc: "Would you like a quick 1-minute guided tour to explore the tools and features?",
    tutWelcomeToastStart: "Start Tour",
    tutWelcomeToastDismiss: "Not now",
    tutStepWelcomeTitle: "Welcome to the Simulator",
    tutStepWelcomeDesc: "This interactive educational platform is designed for studying, visualizing, and mastering Kendo refereeing. You will learn to navigate between official FIK procedures and reactive combat.",
    tutStepWelcomeTip: "You can use the chapter tabs above to jump between sections or navigate sequentially using 'Next'.",
    tutStepModeSwitchTitle: "Module Switcher",
    tutStepModeSwitchDesc: "At the top of the screen, switch between the platform's two core modules: 'FIK Procedures' (protocol choreography of entry, rotation, and exit) and 'Reactive Combat' (interactive physics with athletes).",
    tutStepModeSwitchTip: "Click the buttons at any time to switch study modes.",
    tutStepSettingsTitle: "General Settings Panel",
    tutStepSettingsDesc: "In the left side panel, instantly change the language (Portuguese, English, Japanese) and adjust the official court dimension (9x9m, 10x10m, or 11x11m).",
    tutStepSettingsTip: "The collapse arrow button minimizes the panel for a clean court view.",
    tutStepProcPanelTitle: "FIK Procedures Chapters",
    tutStepProcPanelDesc: "The floating right panel organizes official FIK choreography into 3 canonical chapters: 1. Entry & Formation, 2. Rotation (Regular or Koutai Swap), and 3. Closing & Exit.",
    tutStepProcPanelTip: "You can also switch the seat table side (Left or Right) and rotation mode (Regular vs Koutai).",
    tutStepProcControlsTitle: "Playback Controls & Step Pause",
    tutStepProcControlsDesc: "Step through the choreography using 'Prev' and 'Next', or press 'Play' for continuous animation. Adjust marching speed (0.5x, 1.0x, 1.5x, 2.0x).",
    tutStepProcControlsTip: "Keep 'Pause on each step' checked to thoroughly review the official text and posture at each phase.",
    tutStepProcCourtTitle: "Martial Dojo View & Voice Commands",
    tutStepProcCourtDesc: "On the court, observe synchronized referee displacement, strict flag handling (Shinpanki), and official vocalization commands (such as 'Mae', 'Ippomae', and 'Rei').",
    tutStepProcCourtTip: "Notice how flags are held together in the right hand during movement and only split upon final positioning.",
    tutStepCombatIntroTitle: "Reactive Combat Module",
    tutStepCombatIntroDesc: "In Reactive Combat mode, the focus is real-time referee kinematics: how Shushin and both Fukushin adapt dynamically to competitors' movement to maintain visibility of Yuko-datotsu.",
    tutStepCombatIntroTip: "The isosceles triangle ensures at least two referees always maintain an unobstructed view of strikes.",
    tutStepCombatDragTitle: "Hands-on: Drag the Competitors",
    tutStepCombatDragDesc: "Click and drag Shiro (White) and Aka (Red) fighters directly on the court. Observe how referees compute new vectors and adjust positions smoothly.",
    tutStepCombatDragTip: "Try rotating the fighters around the center to see referee vertex transitions and angle hysteresis in action.",
    tutStepCombatModesTitle: "Technical vs Rendered Mode",
    tutStepCombatModesDesc: "At the top, switch between 'Rendered Mode' (artistic view with wooden dojo, uniforms, and flags) and 'Technical Mode' (analytical diagram with vision cones, zones, and debug angle readouts).",
    tutStepCombatModesTip: "In Technical Mode, expand the Parameters section in the left panel to test motion smoothing and angle thresholds.",
    tutStepCombatScenariosTitle: "Automated Test Scenarios",
    tutStepCombatScenariosDesc: "In the bottom right corner, the Scenarios widget runs pre-programmed batteries of real combat situations: 360° Slow Spin, Vertex Test, Taiatari Swap, and Tsubazeriai clinch.",
    tutStepCombatScenariosTip: "Click the chips (1A, 1B, 2, 3...) to trigger any test scenario with one click.",
    tutStepConclusionTitle: "Ready to Explore!",
    tutStepConclusionDesc: "You have explored the core features of Kendo Shinpan Simulator! To dive deeper into FIK theoretical foundations and regulations, click the 'Help' button anytime in the top right corner.",
    tutStepConclusionTip: "You can restart this guided tour at any time by clicking the 'Guided Tutorial' button."
  },
  jp: {
    title: "剣道審判シミュレーター",
    langLabel: "Idioma / Language / 言語",
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
    author: "考案・開発: 米田裕",
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
    sectionGlobalLabel: "基本設定",
    procCtxTitle: "FIK公式所作・規定",
    procCtxDesc: "国際剣道連盟（FIK）の公式規則に基づく試合場（shiai-jo）での審判所作。",
    procCtxFlagsTitle: "審判旗の所作（旗の保持）",
    procCtxShushin: "<strong>主審:</strong> 右手・赤 / 左手・白",
    procCtxFukushin: "<strong>副審:</strong> 右手・白 / 左手・赤",
    procCtxMovement: "<strong>入退場・交代時:</strong> 右手に保持（赤旗で白旗を巻く）。",
    procCtxGeomTitle: "審判員の配置幾何学",
    procCtxGeomTriangle: "二等辺三角形の各頂点は境界線から約1.0mに位置。",
    procCtxGeomFukushin: "副審間: 幾何学的関係に基づき約4.0m間隔。",
    procCtxTip: '<i class="fas fa-info-circle text-[#bc002d] mr-1"></i> 右側の浮動パネルで章・段階の切り替えや再生速度を操作できます。',
    helpModalTitle: "シミュレーター手引と基本理念",
    helpCloseBtn: "閉じる",
    helpTabGlobal: "モジュールと基本設定",
    helpTabProcedures: "FIK公式所作",
    helpTabCombat: "対戦動作シミュレーション",
    helpTabAdvanced: "力学・判定パラメータ",
    helpTabScenarios: "検証シナリオ",
    helpTabConcept: "武道理念・審判眼",
    helpTabDisclaimer: "免責事項・参考規定",
    helpGlobalBody: `<div class="space-y-4">
  <div class="bg-gradient-to-r from-[#bc002d]/20 to-transparent p-4 rounded-xl border border-[#bc002d]/30">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-globe text-[#bc002d]"></i> 剣道審判シミュレーター 概要
    </h3>
    <p class="text-xs text-gray-300 mt-1.5 leading-relaxed">
      剣道審判法の学習、可視化、および技術向上を目的とした対話型教育支援プラットフォームです。試合場（<em>shiai-jo</em>）における審判員の正確な位置取り、空間的連携、および規則運用の習得を目指し、2つの高精度な補完モジュールを提供します。
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#bc002d] text-white flex items-center justify-center text-xs">1</span>
        <span>FIK公式所作モジュール</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        国際剣道連盟（FIK）の<strong>公式所作規定</strong>に基づく審判員の入退場、幾何学的整列、礼法（<em>Rei</em>）、巡回、審判員交代（<em>Shinpan Koutai</em>）を段階別に再現するアニメーション教材です。
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2">
      <div class="flex items-center gap-2 font-bold text-sm text-white">
        <span class="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-xs">2</span>
        <span>対戦動作シミュレーション</span>
      </div>
      <p class="text-xs text-gray-300 leading-relaxed">
        白（<strong>Shiro</strong>）と赤（<strong>Aka</strong>）の選手をリアルタイムにドラッグし、審判団（主審1名・副審2名）が<strong>二等辺三角形</strong>を維持しながら死角を無くす位置修正アルゴリズムを検証できます。
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-amber-400"></i> 基本設定（左パネル固定ヘッダー）
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-language text-blue-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">Idioma / Language / 言語:</strong>
          日本語・ポルトガル語・英語を即座に切り替え可能です。
        </div>
      </div>
      <div class="flex items-start gap-2 bg-black/40 p-2.5 rounded-lg border border-white/5">
        <i class="fas fa-ruler-combined text-green-400 mt-0.5"></i>
        <div>
          <strong class="text-white block">試合場の広さ:</strong>
          <strong>9 x 9 m</strong>、<strong>10 x 10 m</strong>、<strong>11 x 11 m</strong> から選択可能で、FIK規定の幾何学的寸法が自動適応されます。
        </div>
      </div>
    </div>
  </div>

  <div class="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2">
    <i class="fas fa-info-circle text-amber-400 mt-0.5 flex-shrink-0"></i>
    <span><strong>適応型パネル:</strong> 画面上部のモジュール切り替えに連動し、左パネルが自動で「所作解説カード」または「対戦操作・デバッグ設定」に切り替わります。</span>
  </div>
</div>`,
    helpProceduresBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-scroll text-[#bc002d]"></i> FIK公式所作モジュール手引
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      本モジュールは、国際剣道連盟（FIK）「剣道試合・審判規則」および「剣道試合・審判・運営の手引き」に厳格に準拠し、試合場（<em>shiai-jo</em>）における審判団のすべての動作、位置、号令、礼法を再現します。
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-gamepad text-[#bc002d]"></i> コントロールパネルの操作方法
    </h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-play text-green-400"></i> 再生と段階移動:</strong>
        <strong>再生／一時停止</strong>で連続再生。「前へ」「次へ」で1段階ずつ詳細に確認できます。
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-tachometer-alt text-blue-400"></i> 行進速度:</strong>
        <strong>0.5x</strong>（歩法の詳細確認）、<strong>1.0x</strong>（講習会基準）、<strong>1.5x</strong>、<strong>2.0x</strong>に切り替え可能です。
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-check-square text-amber-400"></i> 段階ごとに一時停止（学習用）:</strong>
        有効にすると各段階の完了時に自動停止し、解説文と姿勢を落ち着いて確認できます。
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white flex items-center gap-1.5 mb-1"><i class="fas fa-chair text-purple-400"></i> 審判員席・交代設定:</strong>
        審判員席の位置（<strong>左</strong>／<strong>右</strong>）および交代方法（<strong>通常</strong>／<strong>交代・三人礼</strong>）を選択できます。
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-list-ol text-blue-400"></i> 公式3章の構成
    </h4>
    <div class="space-y-3 text-xs text-gray-300">
      <div class="border-l-2 border-[#bc002d] pl-3 py-0.5">
        <strong class="text-white block font-semibold">第1章: 入場と定位置への移動（全8段階）</strong>
        場外整列（副審・主審・副審） &rarr;「前」の号令で行進 &rarr; 境界線手前で90度内向き &rarr;「一歩前」（右・左・右で約1m進入）&rarr;「礼」&rarr; 副審は直線に前進（開始線の内側）し、主審はその場に待機 &rarr; 副審の内向き &rarr; 旗の同時分離。
      </div>
      <div class="border-l-2 border-amber-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">第2章A: 通常の巡回交代（全5段階）</strong>
        旗を右手にまとめる &rarr; 次の頂点へ向き直る &rarr; 三角形の辺に沿って直進 &rarr; 反時計回りに中央を向く &rarr; 旗を分ける。
      </div>
      <div class="border-l-2 border-green-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">第2章B: 審判員交代・三人礼（全8段階）</strong>
        旗を右手で束ねる &rarr; 次の頂点へ移動 &rarr; 残る審判員は中央、交代審判員は外の交代員へ向き旗を巻く（白旗を内、赤旗を外）&rarr; 交代員の進入 &rarr; 相互の礼（Rei）&rarr; 交代審判員は90度向きを変え後退退場 &rarr; 試合場への礼、担当審判員は旗を同時に分離。
      </div>
      <div class="border-l-2 border-purple-500 pl-3 py-0.5">
        <strong class="text-white block font-semibold">第3章: 試合終了と退場（全7段階）</strong>
        旗の同時巻き（白旗を内、赤旗を外）&rarr; 副審が直線（開始線内側）で主審位置へ戻る &rarr; 内向き1m整列 &rarr; 正面への礼 &rarr;「左向け／右向け」&rarr;「前」の号令で試合場外へ行進退場（次組が進入）&rarr; 正三角形での相互の礼（相図に礼）。
      </div>
    </div>
  </div>

  <div class="bg-black/40 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs">
    <h4 class="font-bold text-white flex items-center gap-1.5 text-xs uppercase tracking-wider">
      <i class="fas fa-flag text-amber-400"></i> 審判旗の保持規則（厳格規定）
    </h4>
    <ul class="space-y-1.5 text-gray-300 list-disc list-inside">
      <li><strong>移動時（入退場・巡回・退場）:</strong> 旗は<em>右手</em>のみに揃えて保持。入退場時は必ず巻いた状態（白旗を内、赤旗を外）とします。</li>
      <li><strong>試合中:</strong>
        <ul class="pl-4 mt-1 space-y-1 list-none">
          <li>&bull; <strong class="text-white">主審:</strong> 右手に赤旗／左手に白旗。</li>
          <li>&bull; <strong class="text-white">副審:</strong> 右手に白旗／左手に赤旗。</li>
        </ul>
      </li>
    </ul>
  </div>
</div>`,
    helpCombatBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-fist-raised text-[#2563eb]"></i> 対戦動作シミュレーション手引
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      板張りの試合場における選手2名の激しい動きに対し、審判団がどのように二等辺三角形を保ち続けるかを数理モデルで再現します。
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-hand-pointer text-blue-400"></i> 直感的な操作</strong>
      <p class="leading-relaxed">
        選手<strong>W</strong>（白）および<strong>R</strong>（赤）をドラッグして動かすと、審判団が三角形を維持するように即座に追従します。
      </p>
    </div>

    <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
      <strong class="text-white text-sm flex items-center gap-1.5"><i class="fas fa-undo-alt text-[#bc002d]"></i> 位置のリセット</strong>
      <p class="leading-relaxed">
        「位置をリセット」ボタンで、選手を開始線（開始位置）に戻し、審判団の隊形を初期状態に戻します。
      </p>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-layer-group text-green-400"></i> 2つの表示モード
    </h4>
    <div class="space-y-2.5 text-xs text-gray-300">
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">描画モード:</strong>
        白線のある木目調の試合場、紅白の襷を着けた剣道着姿の選手、正装で審判旗を保持する3名の審判員を表示します。
      </div>
      <div class="bg-black/40 p-2.5 rounded-lg border border-white/5">
        <strong class="text-white block font-semibold mb-1">技術モード:</strong>
        数理的分析に特化。選手・審判員の識別円（W, R, S, F1, F2）、視線、各審判員の守備領域ポリゴン、角度計測および状態機械のデバッグ数値を表示します。
      </div>
    </div>
  </div>
</div>`,
    helpAdvancedBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-sliders-h text-[#bc002d]"></i> 幾何学ロジックと詳細パラメータ
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      選手2名の中心を二等辺三角形の中心に捉え、有効打突の見極め角度を最大化するベクトル・角度モデルに基づいています。
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-wave-square text-blue-400"></i> 平滑化係数 (k)
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      審判員の追従速度・慣性を1.0〜15.0で調整（標準値: 5.0）。
    </p>
    <ul class="space-y-1 text-xs text-gray-300 list-disc list-inside pl-2">
      <li><strong>高値 (8.0〜15.0):</strong> 俊敏な即時追従。</li>
      <li><strong>標準値 (5.0):</strong> 人間の審判員の足さばきと体重移動を再現する自然な追従。</li>
      <li><strong>低値 (1.0〜3.0):</strong> 緩やかな追従。</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-compass text-amber-400"></i> 5つの角度遷移しきい値
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      実際の試合では選手の攻防軸が回転します。臨界角度に達すると、副審がサイドを移行し、主審は一時的に二等辺三角形の頂点を離れます:
    </p>
    <div class="space-y-2 text-xs text-gray-300">
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">1. VERTEX 進入角 (標準 90°):</strong> 副審の1名が主審の側方へ向けて滑らかに移行を開始する角度。
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">2. VERTEX &rarr; STANDARD 解除角 (標準 45°):</strong> 標準隊形への復帰しきい値。境界付近での細かな揺らぎを防ぐため広いヒステリシスを設けています。
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">3. S_BASE 進入角 (標準 123°):</strong> 主審が反対側へと完全に移行するポイント。
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">4. S_BASE &rarr; VERTEX 解除角 (標準 90°):</strong> S_BASEから中間領域への復帰しきい値。
      </div>
      <div class="bg-black/40 p-2 rounded-lg border border-white/5">
        <strong class="text-white">5. FLIP 進入角 (標準 135°):</strong> もう1名の副審が反対側へと移行し、主審を頂点とする標準的な二等辺三角形隊形が復帰するポイント。
      </div>
    </div>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-snowflake text-cyan-400"></i> 鍔迫り合い時の自動固定 (Freeze)
    </h4>
    <p class="text-xs text-gray-300 leading-relaxed">
      選手が鍔迫り合いに入ったり、狭い半径で連続して激しく旋回した場合、審判員が無駄に走り回るのを防ぐため、本シミュレーターはこの挙動を再現し、一時的に位置を固定（<strong>FROZEN</strong>）します。
    </p>
  </div>
</div>`,
    helpScenariosBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-play-circle text-[#bc002d]"></i> 自動検証シナリオ一覧
    </h3>
    <p class="text-xs text-gray-300 leading-relaxed">
      審判員の動きを検証するための8種類の自動動作シナリオを搭載しています。
    </p>
  </div>

  <div class="space-y-2.5 text-xs text-gray-300">
    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1A</span>
        <span>ゆっくり360度回転</span>
      </div>
      <p class="leading-relaxed">
        試合場中央を中心とする一定速度の旋回追従。二等辺三角形の維持を検証します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1B</span>
        <span>VERTEX テスト</span>
      </div>
      <p class="leading-relaxed">
        90度付近の臨界角での滑らかなVERTEXモードへの進入・解除を検証します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1C</span>
        <span>S_BASE テスト</span>
      </div>
      <p class="leading-relaxed">
        123度以上の回転で主審が反転底辺へ移行する際の副審の視野カバーを検証します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">1D</span>
        <span>逆360度回転</span>
      </div>
      <p class="leading-relaxed">
        時計回りから反時計回りへの即時反転によるヒステリシスの安定性を検証します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">2</span>
        <span>体当たり入れ替わり</span>
      </div>
      <p class="leading-relaxed">
        瞬時の位置交換（体当たり）による審判団の安定したポジショニングを検証します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">3</span>
        <span>鍔迫り合いスピン</span>
      </div>
      <p class="leading-relaxed">
        近距離での急旋回により固定判定（Freeze）が作動する様子を確認します。
      </p>
    </div>

    <div class="bg-white/5 p-3 rounded-xl border border-white/10">
      <div class="flex items-center gap-2 font-bold text-white text-xs mb-1">
        <span class="px-2 py-0.5 rounded bg-[#bc002d] text-white font-mono text-[11px]">4 & 5</span>
        <span>90度・135度付近の往復</span>
      </div>
      <p class="leading-relaxed">
        臨界角の微小振動に対する状態機械の安定性を検証します。
      </p>
    </div>
  </div>
</div>`,
    helpConceptBody: `<div class="space-y-4">
  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3">
    <h3 class="text-base font-bold text-white flex items-center gap-2">
      <i class="fas fa-yin-yang text-[#bc002d]"></i> 剣道審判の武道理念
    </h3>
    <blockquote class="border-l-4 border-[#bc002d] pl-4 italic text-xs text-gray-200 py-1 leading-relaxed bg-black/20 rounded-r-lg">
      「審判員は移動を自然体で行い、意識を有効打突の見極めに集中させる必要があります。」
      <span class="block text-right text-gray-400 font-semibold mt-1 not-italic">— 米田裕（教士七段）</span>
    </blockquote>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-eye text-amber-400"></i> 審判眼: 有効打突の見極め
    </h4>
    <p class="leading-relaxed">
      剣道における有効打突（<em>有効打突</em>）は一瞬の出来事であり、精神的・技術的・身体的条件の同時充足が求められます。すなわち、<strong>気剣体の一致</strong>（気・剣・体の一致）、竹刀の適正な部位（<strong>打突部</strong>）による相手の剣道具の適正な部位（<strong>打突部位</strong>）への打撃、正確な刃筋（<strong>刃筋正しく</strong>）、そして打突後の充実した気魄と適正な姿勢（<strong>残心</strong>）です。
    </p>
    <p class="leading-relaxed">
      審判員が自身の位置取りに迷いを持ったり、視線が遮られたりすると、その判定の機は不可逆的に失われてしまいます。
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-project-diagram text-blue-400"></i> 審判団の協調（三位一体の連携）
    </h4>
    <p class="leading-relaxed">
      審判員3名は<strong>一つの生きた有機的組織</strong>として機能します。1名の不適切な位置取りや躊躇は、直ちに二等辺三角形の均衡を崩し、他の2名の同僚を幾何学的誤りに追い込み、死角を生み出します。
    </p>
    <p class="leading-relaxed">
      そのため、審判員の育成には成文化された規則の習得だけでなく、試合場（<em>shiai-jo</em>）における集団的空間感覚の体得が不可欠です。
    </p>
  </div>
</div>`,
    helpDisclaimerBody: `<div class="space-y-4">
  <div class="p-4 bg-red-950/40 border border-red-800/40 rounded-xl space-y-2">
    <strong class="text-red-400 text-sm font-bold flex items-center gap-2">
      <i class="fas fa-exclamation-triangle"></i> 免責事項
    </strong>
    <p class="text-xs leading-relaxed text-gray-300">
      本ツールは個人開発の教育支援シミュレーターです。数理アルゴリズムに基づくため、絶対的な真理を主張するものではありません。
    </p>
    <p class="text-xs leading-relaxed text-gray-300">
      疑問点がある場合は、常に指導の先生方（sensei）や経験豊富な審判員にご相談ください。
    </p>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-300">
    <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
      <i class="fas fa-book text-amber-400"></i> 公式参考規定
    </h4>
    <ul class="space-y-1.5 list-disc list-inside pl-2">
      <li><strong>剣道試合・審判規則:</strong> 国際剣道連盟（FIK、2023年7月）</li>
      <li><strong>剣道試合・審判・運営の手引き:</strong> 国際剣道連盟（FIK、2025年7月）</li>
    </ul>
  </div>

  <div class="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs text-gray-400">
    <div class="flex items-center gap-2 text-white font-semibold">
      <i class="fas fa-user-tie text-[#bc002d]"></i> 考案・開発・連絡先
    </div>
    <p>
      <strong>考案・開発:</strong> 米田裕（剣道教士七段・居合道五段／ブラジル・サンパウロ）
    </p>
    <p>
      連絡先・フィードバック: <a href="mailto:adrian.yoneda@gmail.com" class="text-blue-400 underline hover:text-blue-300">adrian.yoneda@gmail.com</a>
    </p>
  </div>
</div>`,
    // Tutorial Strings
    tutChapOverview: "概要・基本",
    tutChapProcedures: "FIK所作手順",
    tutChapCombat: "動的試合",
    tutBtnNext: "次へ",
    tutBtnPrev: "前へ",
    tutBtnFinish: "完了",
    tutBtnSkip: "スキップ",
    tutStepLabel: "ステップ",
    tutBtnOpenTutorial: "ガイド付きチュートリアル",
    tutWelcomeToastTitle: "剣道審判シミュレーターへようこそ！",
    tutWelcomeToastDesc: "1分間のクイックガイドツアーで主要な機能と操作方法を確認しますか？",
    tutWelcomeToastStart: "ツアーを開始",
    tutWelcomeToastDismiss: "今はしない",
    tutStepWelcomeTitle: "シミュレーターへようこそ",
    tutStepWelcomeDesc: "本システムは剣道審判法の学習・視覚化・向上のための教育プラットフォームです。FIK公式所作手順と動的リアクティブ試合の操作を体験します。",
    tutStepWelcomeTip: "上部の章タブでセクション間をジャンプするか、「次へ」で順に進めることができます。",
    tutStepModeSwitchTitle: "モジュール切り替え",
    tutStepModeSwitchDesc: "画面上部で「FIK所作手順」（入退場・交代・位置移動の公式プロトコル）と「動的試合」（選手の動きに追従する審判三角形の物理挙動）を切り替えます。",
    tutStepModeSwitchTip: "いつでもボタンをクリックして学習モードを切り替えられます。",
    tutStepSettingsTitle: "全体設定パネル",
    tutStepSettingsDesc: "左側のパネルで言語（日本語・英語・ポルトガル語）や試合場サイズ（9×9m、10×10m、11×11m）を瞬時に変更できます。",
    tutStepSettingsTip: "矢印ボタンでパネルを折りたたみ、試合場全体を広く表示できます。",
    tutStepProcPanelTitle: "FIK所作手順の章選択",
    tutStepProcPanelDesc: "右側の浮動パネルは公式所作を3つの章（1. 入場・整列、2. 交代・ローテーション、3. 閉会・退場）に整理しています。",
    tutStepProcPanelTip: "審判席の位置（左/右）や交代方式（通常/交代）も選択可能です。",
    tutStepProcControlsTitle: "再生制御とステップ一時停止",
    tutStepProcControlsDesc: "「前へ」「次へ」で1段階ずつ確認するか、「再生」で連続アニメーションを実行します。歩行速度（0.5x〜2.0x）も調整可能です。",
    tutStepProcControlsTip: "「段階ごとに一時停止」を有効にすると、各所作の公式解説をじっくり読めます。",
    tutStepProcCourtTitle: "道場所作と号令の可視化",
    tutStepProcCourtDesc: "試合場では審判員の同期した歩行、正しい旗（審判旗）の保持、そして「前」「一歩前」「礼」などの公式号令がバッジで表示されます。",
    tutStepProcCourtTip: "移動中は旗を右手に束ねて持ち、定位置についてから左右に開く点に注目してください。",
    tutStepCombatIntroTitle: "動的試合モジュール",
    tutStepCombatIntroDesc: "動的試合モードでは、有効打突の判定視覚を確保するため、選手の動きに対して主審と2名の副審が動的に二等辺三角形を維持する挙動をシミュレートします。",
    tutStepCombatIntroTip: "二等辺三角形の維持により、常に最低2名の審判が打突を正確に視認できます。",
    tutStepCombatDragTitle: "操作体験：選手をドラッグ",
    tutStepCombatDragDesc: "試合場内の白（Shiro）と赤（Aka）の選手をクリック＆ドラッグしてみてください。審判団が互いの視線を遮らずに位置を微調整する様子が確認できます。",
    tutStepCombatDragTip: "中心付近で選手を旋回させると、頂点交代（VERTEX/S_BASE）の切り替えが確認できます。",
    tutStepCombatModesTitle: "テクニカル vs レンダード表示",
    tutStepCombatModesDesc: "画面上部で、木目道場や道着・旗を描画する「レンダード表示」と、視界コーンや数理デバッグ角を表示する「テクニカル表示」を切り替えられます。",
    tutStepCombatModesTip: "テクニカル表示では、左パネルのパラメータから追従速度や切り替え角度の調整が可能です。",
    tutStepCombatScenariosTitle: "自動テストシナリオ",
    tutStepCombatScenariosDesc: "右下のシナリオウィジェットから、360度旋回、頂点テスト、体当たり交代、鍔迫り合いなど、実際の試合で起こる典型的な動作テストを実行できます。",
    tutStepCombatScenariosTip: "チップ（1A、1B、2、3...）をクリックするだけで、即座にシナリオが再生されます。",
    tutStepConclusionTitle: "準備完了！自由に体験してください",
    tutStepConclusionDesc: "これで主要な機能の確認は完了です！FIKの公式ルールや詳細な理論解説は、右上にある「ヘルプ」ボタンからいつでも参照できます。",
    tutStepConclusionTip: "「ガイド付きチュートリアル」ボタンからいつでもこのツアーを再開できます。"
  }
};
