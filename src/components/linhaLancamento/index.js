import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Chip, IconButton, TableCell, TableRow, Tooltip, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { formatarData, formatarMoeda } from '../../utils'

// Serve para mostrar uma linha da tabela de lancamentos.
function LinhaLancamento({ transacao, aoPedirExclusao, esconderAcoes }) {
  const corValor = transacao.tipo === 'Receita' ? 'success.main' : 'secondary.main'

  return (
    <TableRow hover>
      <TableCell>
        <Typography fontWeight={700}>{transacao.descricao}</Typography>
        <Typography variant="caption" color="text.secondary">
          {transacao.formaPagamento}
        </Typography>
      </TableCell>
      <TableCell>{transacao.categoria}</TableCell>
      <TableCell>{formatarData(transacao.data)}</TableCell>
      <TableCell>
        <Chip label={transacao.status} size="small" />
      </TableCell>
      <TableCell align="right">
        <Typography fontWeight={700} color={corValor}>
          {transacao.tipo === 'Receita' ? '+' : '-'}
          {formatarMoeda(transacao.valor)}
        </Typography>
      </TableCell>
      {!esconderAcoes ? (
        <TableCell align="right">
          <Tooltip title="Editar">
            <IconButton
              component={RouterLink}
              to={`/lancamentos/${transacao.id}/editar`}
              size="small"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Excluir">
            <IconButton
              color="error"
              size="small"
              onClick={() => aoPedirExclusao(transacao)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </TableCell>
      ) : null}
    </TableRow>
  )
}

export default LinhaLancamento
