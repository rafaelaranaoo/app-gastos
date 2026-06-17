import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

// Serve para reaproveitar campos de selecao do formulario.
function SeletorFormulario({ label, name, value, onChange, opcoes, erro, disabled }) {
  return (
    <FormControl fullWidth error={Boolean(erro)} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} label={label} onChange={onChange}>
        {opcoes.map((opcao) => (
          <MenuItem key={opcao} value={opcao}>
            {opcao}
          </MenuItem>
        ))}
      </Select>
      {erro ? <FormHelperText>{erro}</FormHelperText> : null}
    </FormControl>
  )
}

export default SeletorFormulario
