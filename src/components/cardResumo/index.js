import { Paper, Stack, Typography } from '@mui/material'

// Serve para mostrar um numero de resumo no dashboard.
function CardResumo({ titulo, valor, cor = 'primary.main' }) {
  return (
    <Paper
      elevation={0}
      sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}
    >
      <Stack spacing={0.5}>
        <Typography color="text.secondary">{titulo}</Typography>
        <Typography variant="h5" color={cor}>
          {valor}
        </Typography>
      </Stack>
    </Paper>
  )
}

export default CardResumo
