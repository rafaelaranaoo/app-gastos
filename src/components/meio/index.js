import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { paymentMethods } from '../../data/transacoes'

/**
 * Componente: MeioPagamento
 * Descrição: Select para escolha da forma de pagamento.
 */
function MeioPagamento({ value, onChange, error }) {
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel id="payment-method-label">Forma de pagamento</InputLabel>
      <Select
        labelId="payment-method-label"
        id="paymentMethod"
        name="paymentMethod"
        label="Forma de pagamento"
        value={value}
        onChange={onChange}
      >
        {paymentMethods.map((paymentMethod) => (
          <MenuItem key={paymentMethod} value={paymentMethod}>
            {paymentMethod}
          </MenuItem>
        ))}
      </Select>
      {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  )
}

export default MeioPagamento
