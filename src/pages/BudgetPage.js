import { Box } from '@mui/material';
import BudgetProgress from '../components/BudgetProgress';
import CategoryBreakdown from '../components/CategoryBreakdown';
import PageHeader from '../components/PageHeader';
import TipsPanel from '../components/TipsPanel';

function BudgetPage({ transactions }) {
  return (
    <>
      <PageHeader
        title="Orçamento"
        subtitle="Limites mensais por categoria"
      />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', lg: '1.5fr 1fr' },
          mb: 2
        }}
      >
        <BudgetProgress transactions={transactions} />
        <CategoryBreakdown transactions={transactions} />
      </Box>
      <TipsPanel transactions={transactions} />
    </>
  );
}

export default BudgetPage;
