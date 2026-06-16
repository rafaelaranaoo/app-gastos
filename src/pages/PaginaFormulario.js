import { useNavigate, useParams } from 'react-router-dom'
import CabecalhoPagina from '../components/cabecalhoPagina'
import FormularioLancamento from '../components/formularioLancamento'
import PaginaErro from './paginaErro'

// Serve para abrir o formulario de cadastro ou edicao.
function PaginaFormulario({ aoSalvar, buscarTransacao }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const editando = Boolean(id)
  const transacao = editando ? buscarTransacao(id) : null

  if (editando && !transacao) {
    return <PaginaErro />
  }

  // Serve para salvar e voltar para a listagem.
  function enviarFormulario(dados) {
    if (editando) {
      aoSalvar(id, dados)
    } else {
      aoSalvar(dados)
    }

    navigate('/lancamentos')
  }

  return (
    <>
      <CabecalhoPagina
        titulo={editando ? 'Editar lancamento' : 'Novo lancamento'}
        subtitulo="Formulario simples sem envio para API"
      />
      <FormularioLancamento
        valoresIniciais={transacao}
        aoEnviar={enviarFormulario}
        textoBotao={editando ? 'Salvar alteracoes' : 'Salvar lancamento'}
      />
    </>
  )
}

export default PaginaFormulario
