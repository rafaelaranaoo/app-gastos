/**
 * Formatter de moeda para pt-BR (BRL)
 * Usado por `formatCurrency` para formatar números.
 */
export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

/**
 * Função: formatCurrency
 * Descrição: Converte um valor numérico em string formatada como moeda BRL.
 * @param {number|string} value - Valor a ser formatado
 * @returns {string} Valor formatado como moeda
 */
export function formatCurrency(value) {
  return currencyFormatter.format(Number(value || 0))
}

/**
 * Função: formatDate
 * Descrição: Formata uma data no formato ISO (YYYY-MM-DD) para DD/MM/YYYY.
 * @param {string} value - Data em formato YYYY-MM-DD
 * @returns {string} Data formatada para exibição
 */
export function formatDate(value) {
  if (!value) {
    return ''
  }

  const [year, month, day] = value.split('-')
  return `${day}/${month}/${year}`
}

/**
 * Função: calculateTotals
 * Descrição: Calcula totais de receitas, despesas, pendentes e saldo.
 * @param {Array} transactions - Lista de transações
 * @returns {{income:number,expenses:number,pending:number,balance:number}}
 */
export function calculateTotals(transactions) {
  const income = transactions
    .filter((transaction) => transaction.type === 'Receita')
    .reduce((total, transaction) => total + Number(transaction.amount), 0)

  const expenses = transactions
    .filter((transaction) => transaction.type === 'Despesa')
    .reduce((total, transaction) => total + Number(transaction.amount), 0)

  const pending = transactions
    .filter((transaction) => transaction.status === 'Pendente')
    .reduce((total, transaction) => total + Number(transaction.amount), 0)

  return {
    income,
    expenses,
    pending,
    balance: income - expenses
  }
}

/**
 * Função: groupExpensesByCategory
 * Descrição: Agrupa despesas por categoria e retorna lista ordenada por valor.
 * @param {Array} transactions - Lista de transações
 * @returns {Array<{category:string,amount:number}>}
 */
export function groupExpensesByCategory(transactions) {
  const grouped = transactions
    .filter((transaction) => transaction.type === 'Despesa')
    .reduce((result, transaction) => {
      const current = result[transaction.category] || 0
      return {
        ...result,
        [transaction.category]: current + Number(transaction.amount)
      }
    }, {})

  return Object.entries(grouped)
    .map(([category, amount]) => ({ category, amount }))
    .sort((left, right) => right.amount - left.amount)
}
