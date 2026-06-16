import { Stack, Typography } from '@mui/material'

// Serve para mostrar titulo, subtitulo e botao da pagina.
function CabecalhoPagina({ titulo, subtitulo, acao }) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent="space-between"
      alignItems={{ xs: 'stretch', sm: 'center' }}
      sx={{ mb: 3 }}
    >
      <div>
        <Typography variant="h4">{titulo}</Typography>
        {subtitulo ? (
          <Typography color="text.secondary">{subtitulo}</Typography>
        ) : null}
      </div>
      {acao}
    </Stack>
  )
}

export default CabecalhoPagina
