# Documentacao do Projeto

## Tema

Controle de gastos pessoais.

## Descricao

O projeto e uma interface React de CRUD para cadastrar, listar, editar e excluir lancamentos financeiros. A aplicacao usa estado local do React e salva os dados no `localStorage` do navegador.

## Como Rodar

1. Abra a pasta do projeto no terminal.
2. Instale as dependencias:

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

## Link do Repositorio Git

```text
https://github.com/rafaelaranaoo/app-gastos
```

## Rota Implementada

A rota principal criada para o formulario e:

```text
/#/lancamentos/novo
```

Ela aparece no menu lateral como "Novo lancamento". O projeto usa `react-router-dom` com `HashRouter`.

## Formulario Componentizado

O formulario de lancamento financeiro foi dividido em componentes:

- `FormularioLancamento`
- `CampoFormulario`
- `SeletorFormulario`
- `AlternadorTipo`

O formulario possui campos, botoes e validacao simples, mas nao envia dados para API.

## Componentes Criados

O projeto possui 13 componentes principais:

1. `Layout`
2. `BarraSuperior`
3. `MenuLateral`
4. `LinkMenu`
5. `CabecalhoPagina`
6. `CardResumo`
7. `TabelaLancamentos`
8. `LinhaLancamento`
9. `ModalExcluir`
10. `FormularioLancamento`
11. `CampoFormulario`
12. `SeletorFormulario`
13. `AlternadorTipo`

## Paginas

1. `PaginaDashboard`
2. `PaginaLancamentos`
3. `PaginaFormulario`
4. `PaginaErro`

## Bases Visuais Utilizadas

- Material UI: usado para menu, barra superior, cards, tabela, botoes e campos.
- React-Bootstrap Modal: usado para o modal de confirmacao de exclusao no CRUD.

## Declaracao de Uso de IAGen

Utilizamos o GPT-5.5 para auxiliar na estruturação do projeto, na correção de bugs e nos ajustes de ideias durante o desenvolvimento da aplicação. Também utilizamos o Stitch IA como apoio para buscar referências visuais e modelos de interface, servindo de base para a organização do layout do projeto.


