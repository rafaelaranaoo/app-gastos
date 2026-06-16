import { FormControl, FormHelperText, FormLabel, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { transactionTypes } from '../../data/transacoes'

/**
 * Componente: TypeToggle
 * Descrição: Toggle para selecionar o tipo de transação (Receita/Despesa).
 */
function TypeToggle({ value, onChange, error }) {
  /**
   * Função: handleChange
   * Descrição: Encaminha mudança de valor para o `onChange` se houver novo valor.
   */
  function handleChange(_, newValue) {
    if (newValue) {
      onChange(newValue)
    }
  }

  return (
    <FormControl fullWidth error={Boolean(error)}>
      <FormLabel sx={{ mb: 1 }}>Tipo</FormLabel>
      <ToggleButtonGroup
        exclusive
        fullWidth
        color="primary"
        value={value}
        onChange={handleChange}
      >
        {transactionTypes.map((type) => (
          <ToggleButton key={type} value={type}>
            {type}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  )
}

export default TypeToggle
