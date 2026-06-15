import { Box, Paper, Stack, Typography } from '@mui/material';
import { formatCurrency, groupExpensesByCategory } from '../utils';

function SpendingChart({ transactions }) {
  const expensesByCategory = groupExpensesByCategory(transactions).slice(0, 6);
  const maxAmount = Math.max(
    ...expensesByCategory.map((item) => item.amount),
    1
  );

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        border: '1px solid',
        borderColor: 'divider',
        height: '100%'
      }}
    >
      <Typography variant="h6">Despesas por categoria</Typography>
      <Stack spacing={1.7} sx={{ mt: 2 }}>
        {expensesByCategory.map((item) => {
          const width = `${Math.max((item.amount / maxAmount) * 100, 8)}%`;

          return (
            <Box key={item.category}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ mb: 0.6 }}
              >
                <Typography variant="body2" fontWeight={700}>
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatCurrency(item.amount)}
                </Typography>
              </Stack>
              <Box
                sx={{
                  height: 12,
                  borderRadius: 8,
                  bgcolor: '#e8eeec',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    width,
                    height: '100%',
                    borderRadius: 8,
                    bgcolor: 'primary.main'
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
}

export default SpendingChart;
