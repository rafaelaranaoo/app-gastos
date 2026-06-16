import { Box, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import { formatCurrency, groupExpensesByCategory } from '../../utils'

const monthlyBudgets = {
  Alimentação: 900,
  Moradia: 1800,
  Transporte: 450,
  Educação: 350,
  Saúde: 500,
  Lazer: 400
}

function BudgetProgress({ transactions }) {
  const expensesByCategory = groupExpensesByCategory(transactions)

  const rows = Object.entries(monthlyBudgets).map(([category, limit]) => {
    const spent =
      expensesByCategory.find((item) => item.category === category)?.amount || 0

    return {
      category,
      limit,
      spent,
      percent: Math.min((spent / limit) * 100, 100)
    }
  })

  return (
    <Paper
      elevation={0}
      sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}
    >
      <Typography variant="h6">Orçamento mensal</Typography>
      <Stack spacing={2.2} sx={{ mt: 2 }}>
        {rows.map((row) => (
          <Box key={row.category}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              spacing={0.5}
              sx={{ mb: 0.8 }}
            >
              <Typography variant="body2" fontWeight={700}>
                {row.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatCurrency(row.spent)} de {formatCurrency(row.limit)}
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={row.percent}
              color={row.percent >= 85 ? 'secondary' : 'primary'}
              sx={{ height: 10, borderRadius: 8, bgcolor: '#e8eeec' }}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  )
}

export default BudgetProgress
