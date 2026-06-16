import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Box } from '@mui/material'
import { calculateTotals, formatCurrency } from '../../utils'
import StatCard from '../stat'

/**
 * Componente: TipoContabil
 * Descrição: Painel com cards de resumo (Receitas, Despesas, Saldo, Pendências).
 * @param {Object} props
 * @param {Array} props.transactions
 */
function TipoContabil({ transactions }) {
  const totals = calculateTotals(transactions)

  const cards = [
    {
      title: 'Receitas',
      value: formatCurrency(totals.income),
      helper: 'Entradas cadastradas',
      color: 'success.main',
      icon: <TrendingUpIcon />
    },
    {
      title: 'Despesas',
      value: formatCurrency(totals.expenses),
      helper: 'Saídas cadastradas',
      color: 'secondary.main',
      icon: <TrendingDownIcon />
    },
    {
      title: 'Saldo',
      value: formatCurrency(totals.balance),
      helper: 'Receitas menos despesas',
      color: totals.balance >= 0 ? 'primary.main' : 'error.main',
      icon: <AccountBalanceWalletIcon />
    },
    {
      title: 'Pendências',
      value: formatCurrency(totals.pending),
      helper: 'Pagamentos pendentes',
      color: 'warning.main',
      icon: <PendingActionsIcon />
    }
  ]

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(4, minmax(0, 1fr))'
        },
        mb: 3
      }}
    >
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </Box>
  )
}

export default TipoContabil
