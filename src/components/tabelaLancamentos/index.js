import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import LinhaLancamento from '../linhaLancamento'

// Serve para listar os lancamentos em formato de tabela.
function TabelaLancamentos({ transacoes, aoPedirExclusao, esconderAcoes = false }) {
  if (transacoes.length === 0) {
    return (
      <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
        <Typography>Nenhum lancamento cadastrado.</Typography>
      </Paper>
    )
  }

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Descricao</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Valor</TableCell>
            {!esconderAcoes ? <TableCell align="right">Acoes</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {transacoes.map((transacao) => (
            <LinhaLancamento
              key={transacao.id}
              transacao={transacao}
              aoPedirExclusao={aoPedirExclusao}
              esconderAcoes={esconderAcoes}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabelaLancamentos
