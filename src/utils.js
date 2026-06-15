export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export function formatCurrency(value) {
  return currencyFormatter.format(Number(value || 0));
}

export function formatDate(value) {
  if (!value) {
    return '';
  }

  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

export function calculateTotals(transactions) {
  const income = transactions
    .filter((transaction) => transaction.type === 'Receita')
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'Despesa')
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const pending = transactions
    .filter((transaction) => transaction.status === 'Pendente')
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  return {
    income,
    expenses,
    pending,
    balance: income - expenses
  };
}

export function groupExpensesByCategory(transactions) {
  const grouped = transactions
    .filter((transaction) => transaction.type === 'Despesa')
    .reduce((result, transaction) => {
      const current = result[transaction.category] || 0;
      return {
        ...result,
        [transaction.category]: current + Number(transaction.amount)
      };
    }, {});

  return Object.entries(grouped)
    .map(([category, amount]) => ({ category, amount }))
    .sort((left, right) => right.amount - left.amount);
}
