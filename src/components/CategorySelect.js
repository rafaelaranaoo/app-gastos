import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { categories } from '../data/initialTransactions';

function CategorySelect({ value, onChange, error, disabled }) {
  return (
    <FormControl fullWidth error={Boolean(error)} disabled={disabled}>
      <InputLabel id="category-label">Categoria</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        name="category"
        label="Categoria"
        value={value}
        onChange={onChange}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  );
}

export default CategorySelect;
