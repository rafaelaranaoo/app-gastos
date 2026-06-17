import HomeIcon from '@mui/icons-material/Home'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

// Serve para mostrar uma mensagem quando a rota nao existe.
function PaginaErro() {
  return (
    <Paper elevation={0} sx={{ p: 4, border: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">Pagina nao encontrada</Typography>
        <Typography color="text.secondary">
          A rota acessada nao existe nesta aplicacao.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" startIcon={<HomeIcon />}>
          Voltar ao dashboard
        </Button>
      </Stack>
    </Paper>
  )
}

export default PaginaErro
