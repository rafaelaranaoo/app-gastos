import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import initialTransactions from './data/initialTransactions';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import TransactionFormPage from './pages/TransactionFormPage';
import BudgetPage from './pages/BudgetPage';
import NotFoundPage from './pages/NotFoundPage';
import theme from './theme';

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const orderedTransactions = useMemo(() => {
    return [...transactions].sort((left, right) => {
      return new Date(right.date) - new Date(left.date);
    });
  }, [transactions]);

  function createTransaction(transaction) {
    setTransactions((currentTransactions) => [
      {
        ...transaction,
        id: Date.now()
      },
      ...currentTransactions
    ]);
  }

  function updateTransaction(id, transaction) {
    setTransactions((currentTransactions) =>
      currentTransactions.map((currentTransaction) =>
        currentTransaction.id === id
          ? { ...transaction, id }
          : currentTransaction
      )
    );
  }

  function deleteTransaction(id) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  function findTransaction(id) {
    return transactions.find((transaction) => transaction.id === Number(id));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <AppShell transactions={transactions}>
          <Routes>
            <Route
              path="/"
              element={<DashboardPage transactions={orderedTransactions} />}
            />
            <Route
              path="/lancamentos"
              element={
                <TransactionsPage
                  transactions={orderedTransactions}
                  onDelete={deleteTransaction}
                />
              }
            />
            <Route
              path="/lancamentos/novo"
              element={<TransactionFormPage onSave={createTransaction} />}
            />
            <Route
              path="/lancamentos/:id/editar"
              element={
                <TransactionFormPage
                  onSave={updateTransaction}
                  findTransaction={findTransaction}
                />
              }
            />
            <Route
              path="/orcamento"
              element={<BudgetPage transactions={orderedTransactions} />}
            />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AppShell>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
