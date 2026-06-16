import AddCardIcon from '@mui/icons-material/AddCard'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ExcluirTransacao from '../components/excluir'
import PageHeader from '../components/page'
import Tabela from '../components/tabela'

function PaginaTransacao({ transactions, onDelete }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  function handleCloseModal() {
    setSelectedTransaction(null)
  }

  return (
    <>
      <PageHeader
        title="Lançamentos"
        subtitle="Receitas e despesas cadastradas"
        action={
          <Button
            component={RouterLink}
            to="/lancamentos/novo"
            variant="contained"
            startIcon={<AddCardIcon />}
          >
            Novo lançamento
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
