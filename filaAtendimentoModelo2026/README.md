# Sistema de Controle de Atendimento (Fila)

Este projeto é um sistema de gerenciamento de fila de atendimento desenvolvido em JavaScript, utilizando conceitos de estruturas de dados (Fila Circular) e armazenamento local (localStorage).

## Funcionalidades

- **Adicionar à Fila**: Registra um novo atendimento com Nome e CPF. A data e hora de entrada são geradas automaticamente.
- **Atender**: Remove a primeira pessoa da fila, calcula o tempo de espera e exibe os dados do atendimento (entrada, saída e duração).
- **Painel de Atendimento**: Uma página separada que exibe em tempo real o último cliente atendido, utilizando `localStorage` para comunicação entre abas.
- **Buscar por CPF**: Localiza a posição de uma pessoa na fila através do seu CPF.
- **Lista em Tempo Real**: Exibe visualmente todos os componentes da fila.

## Estrutura do Projeto

- `index.html`: Página principal de gerenciamento.
- `painel.html`: Painel para exibição do último atendimento.
- `style.css`: Estilização básica e personalizada.
- `model/`: Contém as classes `Atendimento` e `Fila`.
- `controller/`: Contém a lógica de controle da interface (`filaController.js` e `painelController.js`).
- `utils.js`: Funções utilitárias para manipulação de data, hora e cálculos.

## Como Executar

1. Abra o arquivo `index.html` em seu navegador.
2. Adicione alguns clientes à fila.
3. Clique em "Abrir Painel" para visualizar o painel em uma nova aba.
4. Ao clicar em "Atender" na página principal, o painel será atualizado automaticamente em 1 segundo.
