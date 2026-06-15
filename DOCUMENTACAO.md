# Documentação do Projeto

## Tema

Controle de gastos pessoais.

## Descrição

O projeto é uma interface React de CRUD para cadastrar, listar, editar e excluir lançamentos financeiros. A aplicação usa dados locais em estado React, sem envio para API, atendendo à proposta de criar a tela e a experiência inicial da aplicação.

## Como Rodar

1. Abra a pasta do projeto no terminal.
2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npm start
```

4. Acesse:

```text
http://localhost:3000
```

Opcionalmente, para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Link do Repositório Git

```text
https://github.com/rafaelaranaoo/app-gastos
```

## Rota Implementada

A rota principal criada para o formulário é:

```text
/#/lancamentos/novo
```

Ela também aparece no menu lateral como "Novo lançamento". O projeto usa `react-router-dom` com `HashRouter`.

## Formulário Componentizado

O formulário de lançamento financeiro foi dividido em componentes:

- `TransactionForm`
- `FormField`
- `TypeToggle`
- `CategorySelect`
- `PaymentMethodSelect`
- `StatusSelect`

O formulário possui campos, botões e validação visual simples, mas não envia dados para API.

## Componentes Criados

O projeto possui mais de 12 componentes. Principais componentes:

1. `AppShell`
2. `Topbar`
3. `Sidebar`
4. `MenuLink`
5. `PageHeader`
6. `SummaryCards`
7. `StatCard`
8. `SpendingChart`
9. `CategoryBreakdown`
10. `BudgetProgress`
11. `TipsPanel`
12. `TransactionsTable`
13. `TransactionRow`
14. `DeleteTransactionModal`
15. `EmptyState`
16. `TransactionForm`
17. `FormField`
18. `TypeToggle`
19. `CategorySelect`
20. `PaymentMethodSelect`
21. `StatusSelect`

## Bases Visuais Utilizadas

- Material UI Dashboard Template: usado como referência para o layout com menu lateral, barra superior, cards de indicadores e áreas de conteúdo.
- React-Bootstrap Modal: usado para o modal de confirmação de exclusão no CRUD.

## Declaração de Uso de IAGen

Foi utilizada Inteligência Artificial Generativa no processo de desenvolvimento para apoiar:

- organização da estrutura inicial do projeto React;
- criação dos componentes reutilizáveis;
- definição das rotas;
- implementação da interface CRUD em estado local;
- criação da documentação de execução e entrega.

O código foi revisado e ajustado para atender aos requisitos do trabalho: React sem Vite, mínimo de 12 componentes, rota para acesso ao formulário, formulário componentizado e ausência de integração com API.

## Entrega em Zip

O arquivo final deve conter o código do projeto, este documento e o `README.md`, sem a pasta `node_modules`.
