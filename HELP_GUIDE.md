# Kendo Shinpan Simulator — Guia do Simulador & Fundamentos (Textos de Ajuda)

> **Instruções para Revisão:**  
> Este documento reúne todos os textos explicativos contidos na janela modal de **Ajuda & Fundamentos** da ferramenta, organizados rigorosamente de acordo com as **7 abas didáticas** e suas respectivas seções.  
> Você pode editar os textos diretamente neste arquivo. Quando concluir sua revisão, basta salvar e me avisar para que eu atualize o código da aplicação e sincronize todas as versões (Português, Inglês e Japonês).

---

# [PT-BR] Versão em Português

## Aba 1: Módulos & Configurações

### 1.1 Visão Geral da Plataforma
Plataforma educacional interativa voltada ao estudo, visualização e aperfeiçoamento da arbitragem de Kendo. O simulador tem como objetivo proporcionar o domínio visual, espacial e regulamentar do posicionamento e deslocamento dos árbitros através de dois módulos complementares de alta fidelidade em *shiai-jo*.

### 1.2 Os Dois Módulos
* **1. Módulo de Procedimentos FIK:** Demonstração animada passo a passo da **coreografia protocolar oficial** da *International Kendo Federation* (FIK). Abrange a entrada em quadra, alinhamentos geométricos, saudações (*Rei*), rotações de postos, troca de árbitros (*Shinpan Koutai*) e saída.
* **2. Módulo de Combate Reativo:** Motor interativo em tempo real onde você arrasta os atletas **Shiro** (Branco) e **Aka** (Vermelho) pela quadra para observar como o trio de arbitragem (Shushin e dois Fukushin) ajusta instantaneamente suas posições, preservando o **triângulo isósceles** e eliminando pontos cegos.

### 1.3 Configurações Gerais (Cabeçalho Fixo do Painel Esquerdo)
* **Idioma / Language / 言語:** Comutador trilíngue instantâneo entre Português, Inglês e Japonês em todos os textos, descrições didáticas e comandos da ferramenta.
* **Dimensão da Quadra:** Permite selecionar **9 x 9 m**, **10 x 10 m** ou **11 x 11 m**, ajustando dinamicamente as proporções espaciais, linhas de limite e distâncias canônicas da FIK.

### 1.4 Painel Adaptativo
Ao alternar entre os módulos no topo da tela, o painel lateral esquerdo adapta-se automaticamente, exibindo as notas didáticas e protocolares no modo Procedimentos e os controles de depuração/visualização no modo Combate.

---

## Aba 2: Procedimentos FIK

### 2.1 Visão Geral do Módulo
Este módulo reproduz com rigor todos os movimentos, posições, comandos de voz e saudações do trio de arbitragem em *shiai-jo*, em conformidade com as regras oficiais da *International Kendo Federation* (FIK) e o manual *FIK Handbook for Kendo Shiai and Shinpan Management*.

### 2.2 Como Operar o Painel Flutuante de Procedimentos
* **Reprodução & Navegação:** Utilize **Reproduzir / Pausar** para rodar a animação contínua. Use **Anterior** e **Próximo** para examinar cada etapa individualmente.
* **Velocidade de Marcha:** Alterne entre **0.5x** (análise minuciosa de passadas), **1.0x** (velocidade real de seminário), **1.5x** e **2.0x**.
* **Pausa a cada Etapa (Didático):** Quando marcada, a animação pausa automaticamente ao final de cada etapa, permitindo ler o texto explicativo oficial e absorver os detalhes posturais.
* **Assentos da Mesa & Rotação:** Selecione **Esquerda** ou **Direita** para definir o lado dos assentos de arbitragem, e alterne o modo de rotação entre **Regular** e **Troca** (Shinpan Koutai).

### 2.3 Estrutura dos Três Capítulos Canônicos
* **1. Entrada & Formação (8 etapas):**  
  Perfilamento externo (Fukushin - Shushin - Fukushin) &rarr; Comando "Mae" e marcha tangencial retilínea &rarr; Giro simultâneo de 90° voltado para a quadra &rarr; Comando "Ippomae" e passada direita-esquerda-direita entrando na quadra (~1m da linha) &rarr; Comando "Rei" e saudação conjunta &rarr; Fukushin marcham em linha reta (por dentro dos kaishisen) enquanto o Shushin permanece fixo &rarr; Giro dos Fukushin estritamente para o interior da quadra &rarr; Separação simultânea das bandeiras.
* **2A. Rotação Regular (Sem Troca - 5 etapas):**  
  Junção das bandeiras na mão direita &rarr; Giro no próprio eixo em direção ao próximo vértice &rarr; Marcha retilínea ao longo dos lados do triângulo isósceles &rarr; Giro anti-horário para o centro da quadra &rarr; Separação simultânea das bandeiras.
* **2B. Rotação com Troca — Shinpan Koutai (8 etapas):**  
  Bandeiras na mão direita &rarr; Giro e deslocamento ao próximo vértice &rarr; Árbitros mantidos viram-se ao centro; o árbitro sainte vira-se para o substituto externo e enrola as bandeiras (branca por dentro, vermelha por fora) &rarr; Substituto ingressa na quadra sincronizado &rarr; Saudação mútua (Rei) &rarr; Sainte gira 90° e recua de costas voltado para a quadra &rarr; Saudação à quadra; árbitros atuantes fazem a separação simultânea das bandeiras em quadra.
* **3. Encerramento & Saída (7 etapas):**  
  Enrolar simultâneo das bandeiras (branca por dentro, vermelha por fora) &rarr; Fukushin retornam ao Shushin em linha reta (por dentro dos kaishisen) &rarr; Giro para dentro e alinhamento a 1m da linha &rarr; Comando "Rei" ao Shomen &rarr; Comando "Hidari-muke" ou "Migi-muke" &rarr; Comando "Mae" e marcha até fora da quadra, enquanto o novo trio entra &rarr; Dispersão em triângulo equilátero e saudação mútua externa (Sogo-ni-rei).

### 2.4 Regras Rigorosas de Porte das Bandeiras (Shinpanki)
* **Em Deslocamento (Marcha de Entrada, Rotação e Saída):** Ambas as bandeiras devem ser portadas *exclusivamente na mão direita*, ao lado do corpo; no caso da entrada e saída, as bandeiras devem estar enroladas (branca por dentro, vermelha por fora).
* **Em Posição de Combate:**
  * **Shushin:** Bandeira Vermelha na mão direita / Bandeira Branca na mão esquerda.
  * **Fukushin:** Bandeira Branca na mão direita / Bandeira Vermelha na mão esquerda.

---

## Aba 3: Combate Reativo

### 3.1 Visão Geral do Módulo
O módulo de Combate Reativo simula as leis cinemáticas de movimentação de um trio de arbitragem em resposta à ação contínua dos atletas na quadra de madeira.

### 3.2 Interação Prática & Reset
* **Interação Prática:** Clique e arraste diretamente os lutadores **W** (*Shiro* / Branco) e **R** (*Aka* / Vermelho) em qualquer direção na quadra. O trio de arbitragem reagirá automaticamente para manter o enquadramento isósceles.
* **Reset das Posições:** O botão **Resetar Posições** (no rodapé do painel esquerdo ou flutuante se recolhido) devolve instantaneamente os atletas aos seus *kaishisen* (marcas de início) e restaura o posicionamento padrão dos árbitros.

### 3.3 Os 2 Modos de Visualização
* **Modo Renderizado (Visualização Zenital Marcial):** Exibe a quadra em piso de madeira clássico com marcações brancas, atletas com uniforme de Kendo e *Tasuki* vermelho e branco nas costas, além dos três árbitros uniformizados portando suas bandeiras.
* **Modo Técnico (Diagrama Analítico & Depuração):** Focado no estudo das zonas matemáticas. Apresenta os círculos com letras de identificação (W, R, S, F1, F2), as linhas de visão, as áreas poligonais de cada árbitro e o painel Debug com medição angular e estados da máquina de movimentação.


---

## Aba 4: Lógica & Parâmetros

### 4.1 Lógica Cinemática
A movimentação do trio baseia-se em um modelo vetorial e angular que busca otimizar a visualização do *yuko-datotsu* através da manutenção de um triângulo isósceles com o centro dos atletas no centro do triângulo.

### 4.2 Suavização do Movimento (k)
O parâmetro **Suavização (k)** (ajustável de 1.0 a 15.0) controla a taxa de convergência inercial dos árbitros:
* **Valores Altos (8.0 a 15.0):** Resposta imediata e ágil, com menor inércia, ideal para acompanhar testes matemáticos rápidos.
* **Valor Padrão (5.0):** Balanço ideal que simula a passada fluida e a massa corporal de um árbitro humano em deslocamento.
* **Valores Baixos (1.0 a 3.0):** Alta inércia, gerando curvas de aproximação mais lentas e amortecidas.

### 4.3 Os 5 Limiares Angulares de Transição (Thresholds)
Em combate real, a linha entre os lutadores gira. Quando atinge ângulos críticos, o Fukushin transita de lado e o Shushin deixa temporariamente de ser o vértice do triângulo isósceles.
* **1. Entrada VERTEX (padrão 90°):** Ângulo de combate no qual um Fukushin inicia a transição suave em direção ao lado do Shushin.
* **2. Saída VERTEX &rarr; STANDARD (padrão 45°):** Limiar de retorno à formação padrão. Possui uma ampla histerese angular (de 90° para 45°) para evitar que os árbitros fiquem oscilando de um lado para o outro em combates na fronteira angular.
* **3. Entrada S_BASE (padrão 123°):** Ponto em que o Shushin transita para o outro lado.
* **4. Saída S_BASE &rarr; VERTEX (padrão 90°):** Limiar de retorno de S_BASE para a zona intermediária.
* **5. Entrada FLIP (padrão 135°):** Ponto em que o outro Fukushin transita para o outro lado, retornando o triângulo isósceles padrão (Shushin no vértice).

### 4.4 Estabilização Automática (Freeze) em Tsubazeriai
Quando os atletas entram em combate corpo a corpo (*tsubazeriai*) ou realizam múltiplos giros rápidos acumulados em curta distância, um árbitro humano não corre desordenadamente em círculos. O simulador replica esse comportamento: ao detectar alta rotação em curto raio, o motor aciona o estado **FROZEN**, mantendo as posições estáveis até que haja definição ou ruptura espacial.

---

## Aba 5: Cenários de Teste

### 5.1 Visão Geral das Baterias de Teste
O simulador conta com 8 rotinas automatizadas de trajetória cinemática no piso da quadra. Cada cenário foi desenvolvido para isolar e avaliar um comportamento específico da arbitragem:
* **1A: Giro Lento 360º:** Rotação contínua e suave dos competidores ao redor do centro do shiai-jo. Valida a rotação harmônica do trio e a preservação ininterrupta do triângulo isósceles em velocidade controlada.
* **1B: Teste Vertex:** Desloca os lutadores na fronteira angular de 90º para avaliar a entrada e saída suave do modo Vertex pelo Shushin, demonstrando a ausência de solavancos visuais.
* **1C: Teste S_BASE:** Conduz os atletas a uma rotação superior a 123º, comprovando a eficácia do Shushin atuando na base invertida e a cobertura angular dos dois Fukushin.
* **1D: Giro Reverso 360º:** Giro completo no sentido anti-horário com inversão imediata para o sentido horário, validando a histerese matemática e a simetria de resposta do algoritmo.
* **2: Taiatari Swap (Choque Corporal):** Simula um golpe com choque frontal violento onde os lutadores trocam de posição bruscamente em fração de segundo. Comprova a estabilidade dos árbitros sem giros descontrolados.
* **3: Tsubazeriai Pião:** Luta acirrada de tsubazeriai com giros rápidos acumulados em raio minúsculo. Demonstra o disparo imediato do estado Freeze, preservando os árbitros firmes e atentos.
* **4 & 5: Inversões Perto de 90º e 135º:** Oscilações deliberadas sobre as fronteiras de transição mais críticas, validando que a máquina de estados não apresenta ruídos ou comportamentos espúrios.

---

## Aba 6: Conceito Marcial

### 6.1 Filosofia da Arbitragem
> *"Acredito que o árbitro deve naturalizar sua movimentação até que ela se torne um reflexo espontâneo, liberando sua mente para manter-se límpida e focada no julgamento imediato do ippon."*  
> — **Adrian Yu Yoneda (Renshi 7º Dan)**

### 6.2 Shinpan-me: O Julgamento do Yuko-Datotsu
No Kendo, um ponto válido (*yuko-datotsu*) dura uma fração de segundo e requer a convergência simultânea de requisitos espirituais, técnicos e físicos: **Ki-Ken-Tai-Ichi** (união de espírito, espada e corpo), contato com a parte correta da *shinai* (*Datotsubu*) no local correto do *kendo-gu* do oponente (*Datotsubui*), ângulo de corte exato (*Hasuji*), postura digna e presença de espírito após o golpe (*Zanshin*).

Se o árbitro estiver em dúvida sobre onde se posicionar ou com a linha de visão obstruída, o momento do julgamento é irremediavelmente perdido.

### 6.3 A Sinergia do Trio de Arbitragem
O trio de arbitragem atua como um **organismo vivo e articulado**. O posicionamento incorreto ou a hesitação de um dos árbitros rompe imediatamente o equilíbrio do triângulo isósceles, forçando os outros dois colegas ao erro geométrico e criando pontos cegos.

Por isso, a formação de árbitros requer o domínio não apenas das regras escritas, mas da sensibilidade espacial coletiva sobre o *shiai-jo*.

---

## Aba 7: Disclaimer & Regras

### 7.1 Aviso Importante (Disclaimer Educacional)
Esta ferramenta foi desenvolvida por iniciativa pessoal e tem caráter estritamente didático e educacional. Baseando-se em modelos matemáticos e algorítmicos de cinemática computacional, não constitui uma verdade incontestável.

Em caso de dúvidas, busque sempre a orientação de seus senseis e árbitros experientes.

### 7.2 Referências Oficiais
* **Regulations of Kendo Shiai and Shinpan:** International Kendo Federation (FIK, Julho/2023).
* **Handbook for Kendo Shiai and Shinpan Management:** International Kendo Federation (FIK, Julho/2025).

### 7.3 Autoria & Contato
* **Idealização e desenvolvimento:** Adrian Yu Yoneda (Renshi 7º Dan Kendo / 5º Dan Iaido — São Paulo, Brasil).
* **Dúvidas, sugestões e colaborações para aprimoramento da ferramenta:** `adrian.yoneda@gmail.com`

---
---

# [EN] English Version

## Tab 1: Modules & Settings

### 1.1 Platform Overview
Interactive educational platform dedicated to the study, visualization, and enhancement of Kendo refereeing. The simulator aims to provide comprehensive visual, spatial, and regulatory mastery of referee positioning and movement across two complementary, high-fidelity modules on *shiai-jo*.

### 1.2 Two Modules
* **1. FIK Procedures Module:** Step-by-step animated demonstration of the **official protocol choreography** established by the *International Kendo Federation* (FIK). Covers court entry, geometric alignments, salutes (*Rei*), position rotations, referee substitution (*Shinpan Koutai*), and exit.
* **2. Reactive Combat Module:** Real-time interactive engine where you drag combatants **Shiro** (White) and **Aka** (Red) across the court to observe how the referee trio (Shushin and two Fukushin) dynamically adjusts positions, preserving the **isosceles triangle** and eliminating blind spots.

### 1.3 General Settings (Fixed Left Header)
* **Language / Idioma / 言語:** Instant trilingual switcher across English, Portuguese, and Japanese for all UI texts, educational notes, and commands.
* **Court Size:** Select between **9 x 9 m**, **10 x 10 m**, or **11 x 11 m**, dynamically scaling spatial proportions, boundary lines, and FIK canonical markers.

### 1.4 Adaptive Panel
Switching modules at the top dynamically adapts the left-hand panel: displaying didactic and protocol notes in Procedure Mode, and debug/visualization controls in Combat Mode.

---

## Tab 2: FIK Procedures

### 2.1 Module Overview
This module accurately reproduces all movements, positions, voice commands, and salutes of the referee trio on the *shiai-jo*, in compliance with the official rules of the *International Kendo Federation* (FIK) and the *FIK Handbook for Kendo Shiai and Shinpan Management*.

### 2.2 Floating Procedure Panel Controls
* **Playback & Stepping:** Use **Play / Pause** for continuous animation. Use **Prev** and **Next** to inspect each individual step.
* **Marching Speed:** Switch between **0.5x** (detailed footwork analysis), **1.0x** (real-time seminar pacing), **1.5x**, and **2.0x**.
* **Pause on Step (Didactic):** When checked, automatically pauses at the completion of each step to allow reading official guidance.
* **Seats Side & Rotation:** Select **Left** or **Right** for referee seats, and toggle rotation mode between **Regular** and **Substitution** (Shinpan Koutai).

### 2.3 Structure of the Three Canonical Chapters
* **1. Entry & Formation (8 steps):** Outside alignment (Fukushin - Shushin - Fukushin) &rarr; "Mae" command and straight tangential march &rarr; Simultaneous 90° turn facing the court &rarr; "Ippomae" command and right-left-right step entering the court (~1m from boundary line) &rarr; "Rei" command and mutual bow &rarr; Fukushin march straight ahead (inside the kaishisen) while Shushin remains fixed &rarr; Fukushin turn strictly toward court interior &rarr; Simultaneous flag separation.
* **2A. Regular Rotation (No Substitution - 5 steps):** Join flags in right hand &rarr; Turn on own axis toward next vertex &rarr; Straight march along the sides of the isosceles triangle &rarr; Counter-clockwise turn to court center &rarr; Simultaneous flag separation.
* **2B. Rotation with Substitution — Shinpan Koutai (8 steps):** Flags in right hand &rarr; Turn and move to next vertex &rarr; Continuing referees turn to center; exiting referee turns toward external substitute and rolls flags (white inside, red outside) &rarr; Substitute enters court in synchronization &rarr; Mutual bow (Rei) &rarr; Exiting referee turns 90° and steps backward facing the court &rarr; Salute to the court; active referees perform simultaneous flag separation on court.
* **3. Court Exit (7 steps):** Simultaneous flag rolling (white inside, red outside) &rarr; Fukushin return to Shushin in a straight line (inside the kaishisen) &rarr; Inward turn and 1m line alignment &rarr; "Rei" command to Shomen &rarr; "Hidari-muke" or "Migi-muke" command &rarr; "Mae" command and march out of the court while new trio enters &rarr; Equilateral triangle dispersal and mutual external bow (Sogo-ni-rei).

### 2.4 Strict Flag Protocol (Shinpanki)
* **In Movement (Entry, Rotation, and Exit March):** Both flags must be held *strictly in the right hand*, beside the body; in the case of entry and exit, flags must be rolled (white inside, red outside).
* **In Combat Position:**
  * **Shushin:** Red flag in right hand / White flag in left hand.
  * **Fukushin:** White flag in right hand / Red flag in left hand.

---

## Tab 3: Reactive Combat

### 3.1 Module Overview
Simulates the kinematic laws of referee movement in response to continuous competitor action on a wooden court.

### 3.2 Practical Interaction & Reset
* **Interaction:** Drag fighters **W** (*Shiro* / White) and **R** (*Aka* / Red) freely. The referee trio recalculates positions in real time to sustain the isosceles triangle.
* **Reset Positions:** The **Reset** button returns competitors to their *kaishisen* start marks and restores standard referee placement.

### 3.3 Visual Modes
* **Rendered Mode (Martial Top-Down View):** Displays the classic wooden flooring court with white markings, combatants in Kendo uniforms with red and white *Tasuki* on their backs, and the three uniformed referees carrying their flags.
* **Technical Mode (Analytical Diagram & Debug):** Focused on mathematical zones. Shows identification circles (W, R, S, F1, F2), sightlines, polygonal referee responsibility areas, and the Debug panel with angular measurements and state machine status.

---

## Tab 4: Logic & Parameters

### 4.1 Kinematic Logic
Referee trio movement is based on a vector and angular model that seeks to optimize the viewing of *yuko-datotsu* by maintaining an isosceles triangle with the center of the combatants at the center of the triangle.

### 4.2 Movement Smoothing (k)
Controls referee inertial convergence rate (adjustable from 1.0 to 15.0):
* **High values (8.0 to 15.0):** Agile, instantaneous response with minimal latency.
* **Default value (5.0):** Natural balance simulating human referee mass and fluid footwork.
* **Low values (1.0 to 3.0):** High inertia with slower, heavily damped approach arcs.

### 4.3 Five Angular Transition Thresholds
In live combat, the line between combatants rotates. When it reaches critical angles, the Fukushin transitions to the side and the Shushin temporarily ceases to be the apex of the isosceles triangle:
* **1. VERTEX Entry (default 90°):** Combat angle at which a Fukushin begins a smooth transition toward the Shushin's side.
* **2. VERTEX &rarr; STANDARD Exit (default 45°):** Return threshold to standard formation. Features a wide angular hysteresis (from 90° to 45°) to prevent referees from oscillating back and forth during borderline combat.
* **3. S_BASE Entry (default 123°):** Point at which the Shushin transitions to the opposite side.
* **4. S_BASE &rarr; VERTEX Exit (default 90°):** Return threshold from S_BASE to the intermediate zone.
* **5. FLIP Entry (default 135°):** Point at which the other Fukushin transitions to the opposite side, restoring the standard isosceles triangle (Shushin at the apex).

### 4.4 Automatic Freeze Stabilization in Tsubazeriai
When combatants engage in close infighting (*tsubazeriai*) or execute multiple rapid clustered spins over a short radius, a human referee does not run around erratically in circles. The simulator replicates this behavior: upon detecting high rotation in a tight radius, the engine triggers the **FROZEN** state, holding positions steady until spatial definition or breakup occurs.

---

## Tab 5: Test Scenarios

### 5.1 Automated Benchmark Battery
The simulator features 8 automated kinematic trajectory routines on the court floor. Each scenario was developed to isolate and evaluate a specific refereeing behavior:
* **1A: Slow 360º Spin:** Continuous smooth rotation evaluating harmonic trio tracking and unbroken triangle preservation at controlled speed.
* **1B: Vertex Test:** Tests Shushin's smooth entry and exit into the 90° Vertex mode without visual snapping.
* **1C: S_BASE Test:** Pushes rotation beyond 123°, verifying inverted base stability and the two Fukushin's angular coverage.
* **1D: Reverse 360º Spin:** Full counter-clockwise rotation immediately reversed clockwise, testing mathematical hysteresis and symmetry.
* **2: Taiatari Swap (Clash):** Simulates sudden frontal clash where combatants instantly swap positions in a split second, testing referee composure.
* **3: Tsubazeriai Spin:** Rapid close-range spinning testing immediate Freeze activation, keeping referees firm and observant.
* **4 & 5: Inversions Near 90º and 135º:** Deliberate oscillations along critical transition boundaries, confirming clean state machine behavior.

---

## Tab 6: Martial Concept

### 6.1 Refereeing Philosophy
> *"Referees must naturalize their physical movement until it becomes a spontaneous reflex, freeing their minds to remain serene and fully focused on the immediate evaluation of ippon."*  
> — **Adrian Yu Yoneda (Renshi 7th Dan)**

### 6.2 Shinpan-me: Judging Yuko-Datotsu
In Kendo, a valid point (*yuko-datotsu*) lasts a fraction of a second and requires the simultaneous convergence of spiritual, technical, and physical requirements: **Ki-Ken-Tai-Ichi** (unity of spirit, sword, and body), contact with the correct part of the *shinai* (*Datotsubu*) onto the correct target on the opponent's *kendo-gu* (*Datotsubui*), exact cutting angle (*Hasuji*), dignified posture, and alert composure following the strike (*Zanshin*).

If a referee is uncertain about where to position themselves or has an obstructed line of sight, the moment of judgment is irrecoverably lost.

### 6.3 The Synergy of the Referee Trio
The referee trio acts as a **living, articulate organism**. Incorrect positioning or hesitation by one referee immediately breaks the balance of the isosceles triangle, forcing the other two colleagues into geometric error and creating blind spots.

Therefore, referee development requires mastering not only the written rules, but a collective spatial sensitivity across the *shiai-jo*.

---

## Tab 7: Disclaimer & Rules

### 7.1 Important Disclaimer
This tool was developed through personal initiative for strictly didactic and educational purposes. Based on mathematical and computational kinematic models, it does not constitute an incontestable truth.

In case of doubt, always seek the guidance of your sensei and experienced referees.

### 7.2 Official References
* **Regulations of Kendo Shiai and Shinpan:** International Kendo Federation (FIK, July/2023).
* **Handbook for Kendo Shiai and Shinpan Management:** International Kendo Federation (FIK, July/2025).

### 7.3 Authorship & Contact
* **Concept & Development:** Adrian Yu Yoneda (Renshi 7th Dan Kendo / 5th Dan Iaido — São Paulo, Brazil).
* **Inquiries and feedback:** `adrian.yoneda@gmail.com`

---
---

# [JP] 日本語版

## 第1タブ: モジュールと基本設定

### 1.1 概要
剣道審判法の学習、可視化、および技術向上を目的とした対話型教育支援プラットフォームです。試合場（*shiai-jo*）における審判員の正確な位置取り、空間的連携、および規則運用の習得を目指し、2つの高精度な補完モジュールを提供します。

### 1.2 2つのモジュール
* **1. FIK公式所作モジュール:** 国際剣道連盟（FIK）の**公式所作規定**に基づく審判員の入退場、幾何学的整列、礼法（*Rei*）、巡回、審判員交代（*Shinpan Koutai*）を段階別に再現するアニメーション教材です。
* **2. 試合シミュレーション（対戦動作モジュール）:** 白（**Shiro**）と赤（**Aka**）の選手をリアルタイムにドラッグし、審判団（主審1名・副審2名）が**二等辺三角形**を維持しながら死角を無くす位置修正アルゴリズムを検証できます。

### 1.3 基本設定（左パネル上部）
* **言語切り替え (Idioma / Language / 言語):** 日本語・英語・ポルトガル語に即時切り替え。
* **試合場の広さ:** 9×9m、10×10m、11×11mから選択可能。

### 1.4 適応型パネル
上部のモジュール切り替えに応じ、左側パネルは自動的に最適化されます。所作モジュールでは公式解説と規則を表示し、試合シミュレーションでは各種設定とデバッグ情報を表示します。

---

## 第2タブ: FIK公式所作

### 2.1 概要
本モジュールは、国際剣道連盟（FIK）「剣道試合・審判規則」および「剣道試合・審判・運営の手引き」に厳格に準拠し、試合場（*shiai-jo*）における審判団のすべての動作、位置、号令、礼法を再現します。

### 2.2 操作パネル
* **再生・一時停止・コマ送り:** 各段階の個別確認。
* **速度設定:** 0.5倍速（足さばきの確認）、1.0倍速（実速度）、1.5倍速、2.0倍速。
* **段階ごとに一時停止:** チェックを入れると各段階終了時に自動停止し解説文を確認可能。
* **審判員席（本部）と交代設定:** 審判席の位置（左・右）および通常巡回／審判員交代の切り替え。

### 2.3 3つの章構成
* **1. 試合場入場・初期位置（8段階）:** 境界線外整列（副審・主審・副審） &rarr;「前」の号令で行進 &rarr; 境界線手前で90度内向き &rarr;「一歩前」（右・左・右で約1m進入）&rarr;「礼」&rarr; 副審は直線に前進（開始線の内側）し、主審はその場に待機 &rarr; 副審の内向き &rarr; 旗の同時分離。
* **2A. 通常巡回（交代なし - 5段階）:** 旗を右手で束ねる &rarr; 次の頂点へ向きを変える &rarr; 二等辺三角形の辺上を行進 &rarr; 試合場中央へ反時計回り旋回 &rarr; 旗の同時分離。
* **2B. 審判員交代（巡回あり - 8段階）:** 旗を右手で束ねる &rarr; 次の頂点へ移動 &rarr; 残る審判員は中央、交代審判員は外の交代員へ向き旗を巻く（白旗を内、赤旗を外）&rarr; 交代員の進入 &rarr; 相互の礼（Rei）&rarr; 交代審判員は90度向きを変え後退退場 &rarr; 試合場への礼、担当審判員は旗を同時に分離。
* **3. 試合場退場（7段階）:** 旗の同時巻き（白旗を内、赤旗を外）&rarr; 副審が直線（開始線内側）で主審位置へ戻る &rarr; 内向き1m整列 &rarr; 正面への礼 &rarr;「左向け／右向け」&rarr;「前」の号令で試合場外へ行進退場（次組が進入）&rarr; 正三角形での相互の礼（相図に礼）。

### 2.4 審判旗の所作
* **移動時（入退場・巡回・退場）:** 旗は*右手*のみに揃えて保持。入退場時は必ず巻いた状態（白旗を内、赤旗を外）とします。
* **試合位置:**
  * **主審:** 右手・赤旗 ／ 左手・白旗
  * **副審:** 右手・白旗 ／ 左手・赤旗

---

## 第3タブ: 対戦動作シミュレーション

### 3.1 概要
試合者の動きに応じた審判3名の幾何学的連携シミュレーション。

### 3.2 操作とリセット
* **操作:** W（白）および R（赤）の選手をドラッグ。
* **位置をリセット:** 選手を開始線へ戻し、審判員を初期二等辺三角形に配置。

### 3.3 表示モード
* **描画モード:** 白線のある木目調の試合場、紅白の襷を着けた剣道着姿の選手、正装で審判旗を保持する3名の審判員を表示します。
* **技術モード:** 数理的分析に特化。選手・審判員の識別円（W, R, S, F1, F2）、視線、各審判員の守備領域ポリゴン、角度計測および状態機械のデバッグ数値を表示します。

---

## 第4タブ: 力学・判定パラメータ

### 4.1 幾何学ロジック
選手2名の中心を二等辺三角形の中心に捉え、有効打突の見極め角度を最大化するベクトル・角度モデルに基づいています。

### 4.2 平滑化係数 (k)
審判員の追従速度・慣性を1.0〜15.0で調整（標準値: 5.0）。
* **高値 (8.0〜15.0):** 俊敏な即時追従。
* **標準値 (5.0):** 人間の審判員の足さばきと体重移動を再現する自然な追従。
* **低値 (1.0〜3.0):** 緩やかな追従。

### 4.3 5つの角度遷移しきい値
実際の試合では選手の攻防軸が回転します。臨界角度に達すると、副審がサイドを移行し、主審は一時的に二等辺三角形の頂点を離れます:
* **1. VERTEX 進入角 (標準 90°):** 副審の1名が主審の側方へ向けて滑らかに移行を開始する角度。
* **2. VERTEX &rarr; STANDARD 解除角 (標準 45°):** 標準隊形への復帰しきい値。境界付近での細かな揺らぎを防ぐため広いヒステリシスを設けています。
* **3. S_BASE 進入角 (標準 123°):** 主審が反対側へと完全に移行するポイント。
* **4. S_BASE &rarr; VERTEX 解除角 (標準 90°):** S_BASEから中間領域への復帰しきい値。
* **5. FLIP 進入角 (標準 135°):** もう1名の副審が反対側へと移行し、主審を頂点とする標準的な二等辺三角形隊形が復帰するポイント。

### 4.4 鍔迫り合い時の自動固定 (Freeze)
選手が鍔迫り合いに入ったり、狭い半径で連続して激しく旋回した場合、審判員が無駄に走り回るのを防ぐため、本シミュレーターはこの挙動を再現し、一時的に位置を固定（**FROZEN**）します。

---

## 第5タブ: 検証シナリオ

### 5.1 自動検証シナリオ
8種類の自動検証シナリオ（緩慢360度旋回、Vertexテスト、S_BASEテスト、反転旋回、体当たり位置入替、鍔迫り合い高速回転、90°・135°臨界反転）。

---

## 第6タブ: 武道理念・審判眼

### 6.1 理念
> 「審判員は移動を自然体で行い、意識を有効打突の見極めに集中させる必要があります。」  
> — **米田裕（教士七段）**

### 6.2 審判眼: 有効打突の見極め
剣道における有効打突（一本）は一瞬の出来事であり、精神的・技術的・身体的条件の同時充足が求められます。すなわち、**気剣体の一致**（気・剣・体の一致）、竹刀の適正な部位（**打突部**）による相手の剣道具の適正な部位（**打突部位**）への打撃、正確な刃筋（**刃筋正しく**）、そして打突後の充実した気魄と適正な姿勢（**残心**）です。

審判員が自身の位置取りに迷いを持ったり、視線が遮られたりすると、その判定の機は不可逆的に失われてしまいます。

### 6.3 審判団の協調（三位一体の連携）
審判員3名は**一つの生きた有機的組織**として機能します。1名の不適切な位置取りや躊躇は、直ちに二等辺三角形の均衡を崩し、他の2名の同僚を幾何学的誤りに追い込み、死角を生み出します。

そのため、審判員の育成には成文化された規則の習得だけでなく、試合場（*shiai-jo*）における集団的空間感覚の体得が不可欠です。

---

## 第7タブ: 免責事項・参考規定

### 7.1 免責事項
本ツールは個人開発の教育支援シミュレーターです。数理アルゴリズムに基づくため、絶対的な真理を主張するものではありません。

疑問点がある場合は、常に指導の先生方（sensei）や経験豊富な審判員にご相談ください。

### 7.2 公式参考規定
* **剣道試合・審判規則:** 国際剣道連盟（FIK、2023年7月）
* **剣道試合・審判・運営の手引き:** 国際剣道連盟（FIK、2025年7月）

### 7.3 考案・開発・連絡先
* **考案・開発:** 米田裕（剣道教士七段・居合道五段／ブラジル・サンパウロ）
* **連絡先・フィードバック:** `adrian.yoneda@gmail.com`
