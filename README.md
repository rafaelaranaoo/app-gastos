# Controle de Gastos Pessoais

Interface React de um CRUD para controle de gastos pessoais. O projeto foi criado sem Vite e sem Vue, usando React com `react-scripts`, Material UI para o layout de dashboard e React-Bootstrap para o modal de confirmação.

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie a aplicação:

```bash
npm start
```

3. Acesse no navegador:

```text
http://localhost:3000
```

Também é possível validar a versão de produção:

```bash
npm run build
npm run preview
```

## Rotas

- `/#/` - dashboard
- `/#/lancamentos` - listagem do CRUD
- `/#/lancamentos/novo` - formulário componentizado
- `/#/lancamentos/:id/editar` - edição de lançamento
- `/#/orcamento` - orçamento por categoria

## Bibliotecas usadas

- React
- React Router DOM
- Material UI
- React-Bootstrap
- Bootstrap

## Observação para entrega

Ao gerar o arquivo `.zip`, não inclua a pasta `node_modules`.
