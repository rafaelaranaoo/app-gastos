import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { calculateTotals, formatCurrency } from '../../utils'

function TipsPanel({ transactions }) {
  const totals = calculateTotals(transactions)
  const savingRate =
    totals.income > 0 ? Math.max((totals.balance / totals.income) * 100, 0) : 0

  return (
    <Paper
      elevation={0}
      sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Avatar sx={{ bgcolor: 'warning.main', color: 'text.primary' }}>
          <LightbulbIcon />
        </Avatar>
        <Stack spacing={1}>
          <Typography variant="h6">Resumo do mês</Typography>
          <Typography color="text.secondary">
            Saldo atual de {formatCurrency(totals.balance)} e taxa de economia
            de {Math.round(savingRate)}%.
          </Typography>
          <Typography color="text.secondary">
            Há {formatCurrency(totals.pending)} em lançamentos pendentes.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default TipsPanel
