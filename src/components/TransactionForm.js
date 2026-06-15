import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CategorySelect from './CategorySelect';
import FormField from './FormField';
import PaymentMethodSelect from './PaymentMethodSelect';
import StatusSelect from './StatusSelect';
import TypeToggle from './TypeToggle';

const emptyTransaction = {
  description: '',
  type: 'Despesa',
  category: 'Alimentação',
  amount: '',
  date: '',
  paymentMethod: 'Pix',
  status: 'Pago',
  notes: ''
};

function TransactionForm({ initialValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState({
    ...emptyTransaction,
    ...initialValues
  });
  const [errors, setErrors] = useState({});

  function updateField(name, value) {
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    updateField(name, value);
  }

  function handleTypeChange(type) {
    setFormData((currentData) => ({
      ...currentData,
      type,
      category: type === 'Receita' ? 'Receita' : currentData.category,
      status: type === 'Receita' ? 'Recebido' : 'Pago'
    }));
  }

  function validate() {
    const nextErrors = {};

    if (!formData.description.trim()) {
      nextErrors.description = 'Informe uma descrição.';
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      nextErrors.amount = 'Informe um valor maior que zero.';
    }

    if (!formData.date) {
      nextErrors.date = 'Informe a data.';
    }

    if (!formData.category) {
      nextErrors.category = 'Selecione a categoria.';
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit({
      ...formData,
      amount: Number(formData.amount)
    });
  }

  return (
    <Paper
      elevation={0}
      sx={{ p: { xs: 2, sm: 3 }, border: '1px solid', borderColor: 'divider' }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }
          }}
        >
          <Box sx={{ gridColumn: '1 / -1' }}>
            <TypeToggle
              value={formData.type}
              onChange={handleTypeChange}
              error={errors.type}
            />
          </Box>
          <FormField
            label="Descrição"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            inputProps={{ maxLength: 60 }}
          />
          <FormField
            label="Valor"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            error={errors.amount}
            inputProps={{ min: 0, step: '0.01' }}
          />
          <CategorySelect
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
            disabled={formData.type === 'Receita'}
          />
          <FormField
            label="Data"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            InputLabelProps={{ shrink: true }}
          />
          <PaymentMethodSelect
            value={formData.paymentMethod}
            onChange={handleChange}
            error={errors.paymentMethod}
          />
          <StatusSelect
            value={formData.status}
            onChange={handleChange}
            error={errors.status}
          />
          <Box sx={{ gridColumn: '1 / -1' }}>
            <FormField
              label="Observações"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              minRows={3}
            />
          </Box>
        </Box>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          justifyContent="flex-end"
          spacing={1.5}
          sx={{ mt: 3 }}
        >
          <Button
            component={RouterLink}
            to="/lancamentos"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Cancelar
          </Button>
          <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
            {submitLabel}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default TransactionForm;
