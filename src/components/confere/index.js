import InboxIcon from '@mui/icons-material/Inbox'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function ConfereEstado() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        border: '1px dashed',
        borderColor: 'divider',
        textAlign: 'center'
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <InboxIcon color="disabled" sx={{ fontSize: 52 }} />
        <Typography variant="h6">Nenhum lançamento cadastrado</Typography>
        <Typography color="text.secondary">
          Cadastre receitas e despesas para acompanhar o saldo.
        </Typography>
        <Button
          component={RouterLink}
          to="/lancamentos/novo"
          variant="contained"
        >
          Novo lançamento
        </Button>
      </Stack>
    </Paper>
  )
}

export default ConfereEstado
