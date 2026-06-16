import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Chip,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { formatCurrency, formatDate } from '../../utils'

const statusColors = {
  Pago: 'success',
  Recebido: 'success',
  Pendente: 'warning'
}

function TransactionRow({ transaction, onRequestDelete, hideActions }) {
  const amountColor =
    transaction.type === 'Receita' ? 'success.main' : 'secondary.main'

  return (
    <TableRow hover>
      <TableCell>
        <Typography fontWeight={700}>{transaction.description}</Typography>
        <Typography variant="caption" color="text.secondary">
          {transaction.paymentMethod}
        </Typography>
      </TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell>{formatDate(transaction.date)}</TableCell>
      <TableCell>
        <Chip
          label={transaction.status}
          color={statusColors[transaction.status] || 'default'}
          size="small"
          variant="outlined"
        />
      </TableCell>
      <TableCell align="right">
        <Typography fontWeight={700} color={amountColor}>
          {transaction.type === 'Receita' ? '+' : '-'}
          {formatCurrency(transaction.amount)}
        </Typography>
      </TableCell>
      {!hideActions ? (
        <TableCell align="right">
          <Stack direction="row" spacing={0.5} justifyContent="flex-end">
            <Tooltip title="Editar">
              <IconButton
                component={RouterLink}
                to={`/lancamentos/${transaction.id}/editar`}
                size="small"
                aria-label={`Editar ${transaction.description}`}
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Excluir">
              <IconButton
                size="small"
                color="error"
                onClick={() => onRequestDelete(transaction)}
                aria-label={`Excluir ${transaction.description}`}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </TableCell>
      ) : null}
    </TableRow>
  )
}

export default TransactionRow
