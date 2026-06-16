import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/app'
import initialTransactions from './data/transacoes'
import PaginaDashboard from './pages/paginaDashboard'
import PaginaTransacao from './pages/paginaTransacao'
import FormaTransacao from './pages/FormaTransacao'
import PaginaOrcamento from './pages/paginaOrcamento'
import PaginaErro from './pages/paginaErro'
import theme from './tema'

const STORAGE_KEY = 'transactions'

/**
 * Componente raiz da aplicação
 * Gerencia o estado de `transactions` e rotas da aplicação.
 */
function App() {
  const savedTransactions = localStorage.getItem(STORAGE_KEY)
  const startingTransactions = savedTransactions
    ? JSON.parse(savedTransactions)
    : initialTransactions

  const [transactions, setTransactions] = useState(startingTransactions)

  /**
   * Função: saveToLocalStorage
   * Descrição: Persiste a lista de transações no `localStorage`.
   * @param {Array} data - Lista de transações
   */
  function saveToLocalStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  /**
   * Função: createTransaction
   * Descrição: Cria uma nova transação e persiste o estado.
   * @param {Object} transaction - Objeto de transação a ser adicionado
   */
  function createTransaction(transaction) {
    const newTransactions = [
      { ...transaction, id: Date.now() },
      ...transactions
    ]
    setTransactions(newTransactions)
    saveToLocalStorage(newTransactions)
  }

  /**
   * Função: updateTransaction
   * Descrição: Atualiza uma transação existente por `id`.
   * @param {number|string} id - Identificador da transação
   * @param {Object} transaction - Novos dados da transação
   */
  function updateTransaction(id, transaction) {
    const newTransactions = transactions.map((currentTransaction) =>
      currentTransaction.id === id ? { ...transaction, id } : currentTransaction
    )
    setTransactions(newTransactions)
    saveToLocalStorage(newTransactions)
  }

  /**
   * Função: deleteTransaction
   * Descrição: Remove uma transação pelo `id`.
   * @param {number|string} id - Identificador da transação a remover
   */
  function deleteTransaction(id) {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    )
    setTransactions(newTransactions)
    saveToLocalStorage(newTransactions)
  }

  const orderedTransactions = [...transactions].sort(
    (left, right) => new Date(right.date) - new Date(left.date)
  )

  /**
   * Função: findTransaction
   * Descrição: Encontra uma transação pelo `id`.
   * @param {number|string} id - Identificador da transação
   * @returns {Object|undefined} Transação encontrada ou `undefined`
   */
  function findTransaction(id) {
    return transactions.find((transaction) => transaction.id === Number(id))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <AppShell transactions={transactions}>
          <Routes>
            <Route
              path="/"
              element={<PaginaDashboard transactions={orderedTransactions} />}
            />
            <Route
              path="/lancamentos"
              element={
                <PaginaTransacao
                  transactions={orderedTransactions}
                  onDelete={deleteTransaction}
                />
              }
            />
            <Route
              path="/lancamentos/novo"
              element={<FormaTransacao onSave={createTransaction} />}
            />
            <Route
              path="/lancamentos/:id/editar"
              element={
                <FormaTransacao
                  onSave={updateTransaction}
                  findTransaction={findTransaction}
                />
              }
            />
            <Route
              path="/orcamento"
              element={<PaginaOrcamento transactions={orderedTransactions} />}
            />
            <Route path="/404" element={<PaginaErro />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AppShell>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
