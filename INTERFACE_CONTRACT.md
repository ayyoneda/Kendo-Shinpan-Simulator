# Kendo Shinpan Simulator - Interface Contract

Este documento atua como uma ponte de comunicação entre as sessões de desenvolvimento de **Física/Engine** e **Design/UI**. 

## Regras de Divisão
- **Equipe de UI/Design**: Responsável pelos componentes React, CSS, aparência, feedback visual e acessibilidade. **NÃO deve modificar a lógica da Engine (`src/engine/`)**. 
- **Equipe de Física/Engine**: Responsável pela matemática, interpolação, motor de estado e regra de negócios (FIK). **NÃO deve misturar lógica de renderização com lógica matemática**.

---

## 📝 Fila de Requisições de UI para a Engine
*Se a interface precisar de uma nova variável no estado global (Zustand) que dependa de cálculos físicos ou temporais, a equipe de UI deve descrever a necessidade abaixo para que a equipe de Física implemente.*

### Exemplo de Requisição (Modelo)
- **Data**: DD/MM/YYYY
- **Solicitação**: `isWalking` (boolean) para cada árbitro.
- **Motivo**: Necessário para animar os passos (CSS keyframes) apenas quando o árbitro estiver em movimento.
- **Status**: [PENDENTE] / [CONCLUÍDO]

### Requisições Ativas
*(Nenhuma requisição pendente no momento)*

---

## 📦 Variáveis Atuais Disponíveis (Zustand)
A UI já pode consumir as seguintes variáveis calculadas e expostas pelo `store.ts`:

- `state.shushin`, `state.fukushin1`, `state.fukushin2`: Posições `(x, y)` suavizadas.
- `state.angles.shushinAbs`, `fukushin1Abs`, `fukushin2Abs`: Ângulo absoluto de rotação de cada árbitro, apontando para o centro da ação.
- `state.formationMode`: Formação atual do trio (`STANDARD`, `VERTEX`, `S_BASE`).
- `state.flag`: Bandeira predominante (`1` ou `2`) ditando a orientação Red-Right/White-Left.
- `state.flipState.active`: Indica se os árbitros estão rodando a animação compulsória de inversão de bandeiras.

---
*Nota: Ao transitar entre as sessões de chat, basta pedir para a IA revisar este arquivo.*
