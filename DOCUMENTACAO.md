# Documentação do Projeto

## Tema

Controle de gastos pessoais.

## Descrição

O projeto é uma interface React de CRUD para cadastrar, listar, editar e excluir lançamentos financeiros. A aplicação usa dados locais em estado React, sem envio para API.

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

Principais componentes:

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
