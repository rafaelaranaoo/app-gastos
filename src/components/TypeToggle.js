import { FormControl, FormHelperText, FormLabel, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { transactionTypes } from '../data/initialTransactions';

function TypeToggle({ value, onChange, error }) {
  function handleChange(_, newValue) {
    if (newValue) {
      onChange(newValue);
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
  );
}

export default TypeToggle;
