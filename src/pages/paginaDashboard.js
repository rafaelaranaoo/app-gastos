import AddCardIcon from '@mui/icons-material/AddCard'
import { Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import CabecalhoPagina from '../components/cabecalhoPagina'
import CardResumo from '../components/cardResumo'
import TabelaLancamentos from '../components/tabelaLancamentos'
import { calcularResumo, formatarMoeda } from '../utils'

// Serve para mostrar o resumo inicial do sistema.
function PaginaDashboard({ transacoes }) {
  const resumo = calcularResumo(transacoes)
  const ultimasTransacoes = transacoes.slice(0, 5)

  return (
    <>
      <CabecalhoPagina
        titulo="Dashboard"
        subtitulo="Resumo simples dos seus gastos"
        acao={
          <Button
            component={RouterLink}
            to="/lancamentos/novo"
            variant="contained"
            startIcon={<AddCardIcon />}
          >
            Novo lancamento
          </Button>
        }
      />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          mb: 3
        }}
      >
        <CardResumo titulo="Receitas" valor={formatarMoeda(resumo.receitas)} cor="success.main" />
        <CardResumo titulo="Despesas" valor={formatarMoeda(resumo.despesas)} cor="secondary.main" />
        <CardResumo titulo="Saldo" valor={formatarMoeda(resumo.saldo)} />
        <CardResumo titulo="Lancamentos" valor={resumo.totalLancamentos} />
      </Box>
      <TabelaLancamentos transacoes={ultimasTransacoes} esconderAcoes />
    </>
  )
}

export default PaginaDashboard
