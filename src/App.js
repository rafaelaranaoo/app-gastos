import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import transacoesIniciais from './data/transacoes'
import PaginaDashboard from './pages/paginaDashboard'
import PaginaErro from './pages/paginaErro'
import PaginaFormulario from './pages/PaginaFormulario'
import PaginaLancamentos from './pages/PaginaLancamentos'
import tema from './tema'

// Serve para identificar onde os dados ficam salvos no navegador.
const STORAGE_KEY = 'transacoes'

// Serve para carregar dados salvos ou usar os dados iniciais.
function carregarTransacoes() {
  const salvas = localStorage.getItem(STORAGE_KEY)
  return salvas ? JSON.parse(salvas) : transacoesIniciais
}

// Serve como componente principal da aplicacao.
function App() {
  const [transacoes, setTransacoes] = useState(carregarTransacoes)

  // Serve para atualizar a tela e salvar no localStorage.
  function salvarTransacoes(novaLista) {
    setTransacoes(novaLista)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista))
  }

  // Serve para cadastrar um novo lancamento.
  function criarTransacao(transacao) {
    const novaLista = [{ ...transacao, id: Date.now() }, ...transacoes]
    salvarTransacoes(novaLista)
  }

  // Serve para editar um lancamento existente.
  function editarTransacao(id, transacaoEditada) {
    const novaLista = transacoes.map((transacao) =>
      transacao.id === Number(id)
        ? { ...transacaoEditada, id: Number(id) }
        : transacao
    )
    salvarTransacoes(novaLista)
  }

  // Serve para excluir um lancamento.
  function excluirTransacao(id) {
    const novaLista = transacoes.filter((transacao) => transacao.id !== id)
    salvarTransacoes(novaLista)
  }

  // Serve para encontrar um lancamento pelo id.
  function buscarTransacao(id) {
    return transacoes.find((transacao) => transacao.id === Number(id))
  }

  // Serve para mostrar os lancamentos mais recentes primeiro.
  const transacoesOrdenadas = [...transacoes].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  )

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <HashRouter>
        <Layout transacoes={transacoesOrdenadas}>
          <Routes>
            <Route
              path="/"
              element={<PaginaDashboard transacoes={transacoesOrdenadas} />}
            />
            <Route
              path="/lancamentos"
              element={
                <PaginaLancamentos
                  transacoes={transacoesOrdenadas}
                  aoExcluir={excluirTransacao}
                />
              }
            />
            <Route
              path="/lancamentos/novo"
              element={<PaginaFormulario aoSalvar={criarTransacao} />}
            />
            <Route
              path="/lancamentos/:id/editar"
              element={
                <PaginaFormulario
                  aoSalvar={editarTransacao}
                  buscarTransacao={buscarTransacao}
                />
              }
            />
            <Route path="/404" element={<PaginaErro />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
