import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { transactionStatus } from '../../data/transacoes'

function Status({ value, onChange, error }) {
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel id="status-label">Status</InputLabel>
      <Select
        labelId="status-label"
        id="status"
        name="status"
        label="Status"
        value={value}
        onChange={onChange}
      >
        {transactionStatus.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
      {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  )
}

export default Status
