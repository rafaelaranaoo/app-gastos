import { TextField } from '@mui/material'

// Serve para reaproveitar campos de texto do formulario.
function CampoFormulario({ erro, textoAjuda, ...props }) {
  return (
    <TextField
      fullWidth
      error={Boolean(erro)}
      helperText={erro || textoAjuda}
      {...props}
    />
  )
}

export default CampoFormulario
