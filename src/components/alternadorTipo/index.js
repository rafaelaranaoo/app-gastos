import { FormControl, FormHelperText, FormLabel, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { tipos } from '../../data/transacoes'

// Serve para escolher entre despesa e receita.
function AlternadorTipo({ value, onChange, erro }) {
  // Serve para impedir que o tipo fique vazio.
  function mudarTipo(_, novoValor) {
    if (novoValor) {
      onChange(novoValor)
    }
  }

  return (
    <FormControl fullWidth error={Boolean(erro)}>
      <FormLabel sx={{ mb: 1 }}>Tipo</FormLabel>
      <ToggleButtonGroup fullWidth exclusive value={value} onChange={mudarTipo}>
        {tipos.map((tipo) => (
          <ToggleButton key={tipo} value={tipo}>
            {tipo}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {erro ? <FormHelperText>{erro}</FormHelperText> : null}
    </FormControl>
  )
}

export default AlternadorTipo
