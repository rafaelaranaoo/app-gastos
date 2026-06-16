import AddCardIcon from '@mui/icons-material/AddCard'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ExcluirTransacao from '../components/excluir'
import PageHeader from '../components/page'
import Tabela from '../components/tabela'

/**
 * Componente: PaginaTransacao
 * DescriÃ§Ã£o: Lista de transaÃ§Ãµes com opÃ§Ã£o de exclusÃ£o.
 * @param {Object} props
 * @param {Array} props.transactions
 * @param {Function} props.onDelete
 */
function PaginaTransacao({ transactions, onDelete }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  /**
   * Fecha o modal de confirmacao de exclusao e limpa a transacao selecionada.
   */
  function handleCloseModal() {
    setSelectedTransaction(null)
  }

  return (
    <>
      <PageHeader
        title="LanÃ§amentos"
        subtitle="Receitas e despesas cadastradas"
        action={
          <Button
            component={RouterLink}
            to="/lancamentos/novo"
            variant="contained"
            startIcon={<AddCardIcon />}
          >
            Novo lanÃ§amento
          </Button>
        }
      />
      <Tabela
        transactions={transactions}
        onRequestDelete={setSelectedTransaction}
      />
      <ExcluirTransacao
        show={Boolean(selectedTransaction)}
        transaction={selectedTransaction}
        onHide={handleCloseModal}
        onConfirm={onDelete}
      />
    </>
  )
}

export default PaginaTransacao
