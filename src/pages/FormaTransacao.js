import { useNavigate, useParams } from 'react-router-dom'
import PageHeader from '../components/page'
import Formulario from '../components/formulario'
import PaginaErro from './paginaErro'

/**
 * Componente: FormaTransacao
 * Descrição: Página para criar ou editar transações, usa `Formulario`.
 * @param {Object} props
 * @param {Function} props.onSave
 * @param {Function} [props.findTransaction]
 */
function FormaTransacao({ onSave, findTransaction }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)
  const transaction = isEditing ? findTransaction(id) : null

  if (isEditing && !transaction) {
    return <PaginaErro />
  }

  /**
   * Função: handleSubmit
   * Descrição: Trata envio do formulário, cria ou atualiza transação.
   * @param {Object} formData
   */
  function handleSubmit(formData) {
    if (isEditing) {
      onSave(Number(id), formData)
    } else {
      onSave(formData)
    }

    navigate('/lancamentos')
  }

  return (
    <>
      <PageHeader
        title={isEditing ? 'Editar lançamento' : 'Novo lançamento'}
        subtitle="Formulário componentizado sem envio para API"
      />
      <Formulario
        initialValues={transaction}
        onSubmit={handleSubmit}
        submitLabel={isEditing ? 'Salvar alterações' : 'Salvar lançamento'}
      />
    </>
  )
}

export default FormaTransacao
