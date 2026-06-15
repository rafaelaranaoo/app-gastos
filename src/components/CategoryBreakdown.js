import { Box, LinearProgress, Paper, Stack, Typography } from '@mui/material';
import { formatCurrency, groupExpensesByCategory } from '../utils';

function CategoryBreakdown({ transactions }) {
  const expensesByCategory = groupExpensesByCategory(transactions);
  const total = expensesByCategory.reduce((sum, item) => sum + item.amount, 0);

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
      <Typography variant="h6">Distribuição</Typography>
      <Stack spacing={2} sx={{ mt: 2 }}>
        {expensesByCategory.map((item) => {
          const percent = total > 0 ? (item.amount / total) * 100 : 0;

          return (
            <Box key={item.category}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2" fontWeight={700}>
                  {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Math.round(percent)}%
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={percent}
                sx={{
                  mt: 0.8,
                  height: 8,
                  borderRadius: 8,
                  bgcolor: '#e8eeec'
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {formatCurrency(item.amount)}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
}

export default CategoryBreakdown;
