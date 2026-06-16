import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import ConfereEstado from '../confere'
import TransactionRow from '../transaction'

/**
 * Componente: Tabela
 * Descrição: Exibe transações em tabela e trata estado vazio.
 */
function Tabela({
  transactions,
  onRequestDelete,
  hideActions = false,
  compact = false
}) {
  if (transactions.length === 0) {
    return <ConfereEstado />
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <Table size={compact ? 'small' : 'medium'}>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Valor</TableCell>
            {!hideActions ? <TableCell align="right">Ações</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              onRequestDelete={onRequestDelete}
              hideActions={hideActions}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tabela
