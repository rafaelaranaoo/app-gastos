import { TextField } from '@mui/material'

/**
 * Componente: TopicosFormulario
 * Descrição: Campo de texto reutilizável para formulários.
 */
function TopicosFormulario({ label, name, value, onChange, error, helperText, ...props }) {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error || helperText}
      {...props}
    />
  )
}

export default TopicosFormulario
