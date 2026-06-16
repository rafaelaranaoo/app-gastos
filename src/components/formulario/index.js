import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveIcon from '@mui/icons-material/Save'
import { Box, Button, Paper, Stack } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import SelecaoCategoria from '../selecao'
import TopicosFormulario from '../topicosformulario'
import MeioPagamento from '../meio'
import Status from '../status'
import TypeToggle from '../type'

const emptyTransaction = {
  description: '',
  type: 'Despesa',
  category: 'Alimentação',
  amount: '',
  date: '',
  paymentMethod: 'Pix',
  status: 'Pago',
  notes: ''
}

/**
 * Componente: Formulario
 * Descrição: Formulário de criação/edição de transações.
 */
function Formulario({ initialValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState({
    ...emptyTransaction,
    ...initialValues
  })
  const [errors, setErrors] = useState({})

  /**
   * Função: updateField
   * Descrição: Atualiza um campo específico do formulário.
   */
  function updateField(name, value) {
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }))
  }

  /**
   * Função: handleChange
   * Descrição: Manipulador genérico para inputs controlados.
   */
  function handleChange(event) {
    const { name, value } = event.target
    updateField(name, value)
  }

  /**
   * Função: handleTypeChange
   * Descrição: Atualiza campos dependentes ao mudar o tipo (Receita/Despesa).
   */
  function handleTypeChange(type) {
    setFormData((currentData) => ({
      ...currentData,
      type,
      category: type === 'Receita' ? 'Receita' : currentData.category,
      status: type === 'Receita' ? 'Recebido' : 'Pago'
    }))
  }

  /**
   * Função: validate
   * Descrição: Valida os campos do formulário e retorna objeto de erros.
   */
  function validate() {
    const nextErrors = {}

    if (!formData.description.trim()) {
      nextErrors.description = 'Informe uma descrição.'
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      nextErrors.amount = 'Informe um valor maior que zero.'
    }

    if (!formData.date) {
      nextErrors.date = 'Informe a data.'
    }

    if (!formData.category) {
      nextErrors.category = 'Selecione a categoria.'
    }

    return nextErrors
  }

  /**
   * Função: handleSubmit
   * Descrição: Trata o envio do formulário, valida e chama `onSubmit`.
   */
  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    onSubmit({
      ...formData,
      amount: Number(formData.amount)
    })
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
          <TopicosFormulario
            label="Descrição"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            inputProps={{ maxLength: 60 }}
          />
          <TopicosFormulario
            label="Valor"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            error={errors.amount}
            inputProps={{ min: 0, step: '0.01' }}
          />
          <SelecaoCategoria
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
            disabled={formData.type === 'Receita'}
          />
          <TopicosFormulario
            label="Data"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            InputLabelProps={{ shrink: true }}
          />
          <MeioPagamento
            value={formData.paymentMethod}
            onChange={handleChange}
            error={errors.paymentMethod}
          />
          <Status
            value={formData.status}
            onChange={handleChange}
            error={errors.status}
          />
          <Box sx={{ gridColumn: '1 / -1' }}>
            <TopicosFormulario
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
  )
}

export default Formulario
