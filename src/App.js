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

function App() {
  const savedTransactions = localStorage.getItem(STORAGE_KEY)
  const startingTransactions = savedTransactions
    ? JSON.parse(savedTransactions)
    : initialTransactions

  const [transactions, setTransactions] = useState(startingTransactions)

  function saveToLocalStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  function createTransaction(transaction) {
    const newTransactions = [
      { ...transaction, id: Date.now() },
      ...transactions
    ]
    setTransactions(newTransactions)
    saveToLocalStorage(newTransactions)
  }

  function updateTransaction(id, transaction) {
    const newTransactions = transactions.map((currentTransaction) =>
      currentTransaction.id === id ? { ...transaction, id } : currentTransaction
    )
    setTransactions(newTransactions)
    saveToLocalStorage(newTransactions)
  }

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
