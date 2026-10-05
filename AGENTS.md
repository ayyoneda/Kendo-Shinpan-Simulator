# Kendo Shinpan Simulator — Regras e Diretrizes do Projeto

Este repositório contém o **Kendo Shinpan Simulator** (Simulador Interativo de Movimentação de Arbitragem), concebido e orientado pelo Prof. Adrian Yoneda (Renshi 7º Dan — Brasil).

## 1. Visão e Integração da Plataforma
- Esta ferramenta integra a **Plataforma Educacional Integrada de Kendo**, operando em conjunto com o *Nihon Kendo Kata Studio*.
- **Padrão de Publicação:** O código deve ser uma aplicação web estática modular de alta performance, hospedada via **GitHub Pages** e incorporada por URL no Google Sites oficial (`https://sites.google.com/view/kendo-shinpan-simulator`).

## 2. Fidelidade Canônica Marcial (AJKF / FIK)
- A lógica de movimentação, transição e limites angulares deve respeitar rigorosamente:
  1. *FIK Regulations of Kendo Shiai and Shinpan* (Jul/2023);
  2. *FIK Handbook for Kendo Shiai and Shinpan Management* (2025);
  3. Diretrizes de manutenção do triângulo isósceles, minimização de pontos cegos e divisão de responsabilidade entre Shushin e Fukushin.

## 3. Diretrizes de Engenharia e Boas Práticas
- **Modularização:** Desacoplar a lógica matemática (cálculo de vetores, ângulos de visão e transições dos árbitros) do renderizador visual (Canvas/SVG) e da interface de controles (HTML/CSS).
- **Testes Automatizados:** Implementar testes unitários para a matemática de movimentação e transição de zonas.
- **Responsividade e Standalone:** A ferramenta deve funcionar fluidamente tanto em tela cheia (para projeção em seminários e tablets) quanto dentro de um *iframe* do Google Sites.
- **Zero Dependências Pesadas:** Manter o código leve, rápido e sem dependências desnecessárias.
