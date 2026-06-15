import AddCardIcon from '@mui/icons-material/AddCard';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CategoryBreakdown from '../components/CategoryBreakdown';
import PageHeader from '../components/PageHeader';
import SpendingChart from '../components/SpendingChart';
import SummaryCards from '../components/SummaryCards';
import TipsPanel from '../components/TipsPanel';
import TransactionsTable from '../components/TransactionsTable';

function DashboardPage({ transactions }) {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Resumo dos lançamentos cadastrados"
        action={
          <Button
            component={RouterLink}
            to="/lancamentos/novo"
            variant="contained"
            startIcon={<AddCardIcon />}
          >
            Novo lançamento
          </Button>
        }
      />
      <SummaryCards transactions={transactions} />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', lg: '1.6fr 1fr' },
          mb: 3
        }}
      >
        <SpendingChart transactions={transactions} />
        <CategoryBreakdown transactions={transactions} />
      </Box>
      <Stack spacing={2}>
        <TipsPanel transactions={transactions} />
        <Box>
          <Typography variant="h6" sx={{ mb: 1.5 }}>
            Lançamentos recentes
          </Typography>
          <TransactionsTable
            transactions={recentTransactions}
            hideActions
            compact
          />
        </Box>
      </Stack>
    </>
  );
}

export default DashboardPage;
