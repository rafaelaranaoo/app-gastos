import { Box } from '@mui/material'
import BudgetProgress from '../components/budget'
import CategoryBreakdown from '../components/category'
import PageHeader from '../components/page'
import TipsPanel from '../components/tips'

function PaginaOrcamento({ transactions }) {
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
  )
}

export default PaginaOrcamento
