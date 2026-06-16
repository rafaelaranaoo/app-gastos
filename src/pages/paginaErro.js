import HomeIcon from '@mui/icons-material/Home'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Componente: PaginaErro
 * Descrição: Exibe página de erro 404 quando rota não é encontrada.
 */
function PaginaErro() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        border: '1px solid',
        borderColor: 'divider',
        textAlign: 'center'
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Página não encontrada</Typography>
        <Typography color="text.secondary">
          A rota acessada não existe nesta interface.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          startIcon={<HomeIcon />}
        >
          Voltar ao dashboard
        </Button>
      </Stack>
    </Paper>
  )
}

export default PaginaErro
