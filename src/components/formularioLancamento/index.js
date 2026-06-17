import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveIcon from '@mui/icons-material/Save'
import { Box, Button, Paper, Stack } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { categorias, formasPagamento, statusTransacao } from '../../data/transacoes'
import AlternadorTipo from '../alternadorTipo'
import CampoFormulario from '../campoFormulario'
import SeletorFormulario from '../seletorFormulario'

// Serve como estado inicial do formulario.
const formularioVazio = {
  descricao: '',
  tipo: 'Despesa',
  categoria: 'Alimentacao',
  valor: '',
  data: '',
  formaPagamento: 'Pix',
  status: 'Pago',
  observacoes: ''
}

// Serve para cadastrar ou editar um lancamento.
function FormularioLancamento({ valoresIniciais, aoEnviar, textoBotao }) {
  const [dados, setDados] = useState({ ...formularioVazio, ...valoresIniciais })
  const [erros, setErros] = useState({})

  // Serve para atualizar os campos digitados.
  function atualizarCampo(event) {
    const { name, value } = event.target
    setDados((dadosAtuais) => ({ ...dadosAtuais, [name]: value }))
  }

  // Serve para ajustar categoria e status ao mudar o tipo.
  function atualizarTipo(tipo) {
    setDados((dadosAtuais) => ({
      ...dadosAtuais,
      tipo,
      categoria: tipo === 'Receita' ? 'Receita' : dadosAtuais.categoria,
      status: tipo === 'Receita' ? 'Recebido' : 'Pago'
    }))
  }

  // Serve para conferir campos obrigatorios.
  function validar() {
    const novosErros = {}

    if (!dados.descricao.trim()) {
      novosErros.descricao = 'Informe a descricao.'
    }

    if (!dados.valor || Number(dados.valor) <= 0) {
      novosErros.valor = 'Informe um valor maior que zero.'
    }

    if (!dados.data) {
      novosErros.data = 'Informe a data.'
    }

    return novosErros
  }

  // Serve para validar e enviar os dados para a pagina.
  function enviar(event) {
    event.preventDefault()
    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      return
    }

    aoEnviar({ ...dados, valor: Number(dados.valor) })
  }

  return (
    <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
      <Box component="form" onSubmit={enviar}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }
          }}
        >
          <Box sx={{ gridColumn: '1 / -1' }}>
            <AlternadorTipo value={dados.tipo} onChange={atualizarTipo} />
          </Box>
          <CampoFormulario
            label="Descricao"
            name="descricao"
            value={dados.descricao}
            onChange={atualizarCampo}
            erro={erros.descricao}
          />
          <CampoFormulario
            label="Valor"
            name="valor"
            type="number"
            value={dados.valor}
            onChange={atualizarCampo}
            erro={erros.valor}
          />
          <SeletorFormulario
            label="Categoria"
            name="categoria"
            value={dados.categoria}
            onChange={atualizarCampo}
            opcoes={categorias}
            disabled={dados.tipo === 'Receita'}
          />
          <CampoFormulario
            label="Data"
            name="data"
            type="date"
            value={dados.data}
            onChange={atualizarCampo}
            erro={erros.data}
            InputLabelProps={{ shrink: true }}
          />
          <SeletorFormulario
            label="Forma de pagamento"
            name="formaPagamento"
            value={dados.formaPagamento}
            onChange={atualizarCampo}
            opcoes={formasPagamento}
          />
          <SeletorFormulario
            label="Status"
            name="status"
            value={dados.status}
            onChange={atualizarCampo}
            opcoes={statusTransacao}
          />
          <Box sx={{ gridColumn: '1 / -1' }}>
            <CampoFormulario
              label="Observacoes"
              name="observacoes"
              value={dados.observacoes}
              onChange={atualizarCampo}
              multiline
              minRows={3}
            />
          </Box>
        </Box>
        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={1.5} justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button component={RouterLink} to="/lancamentos" variant="outlined" startIcon={<ArrowBackIcon />}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
            {textoBotao}
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}

export default FormularioLancamento
