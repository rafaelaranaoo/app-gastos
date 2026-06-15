import AddCardIcon from '@mui/icons-material/AddCard';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import DeleteTransactionModal from '../components/DeleteTransactionModal';
import PageHeader from '../components/PageHeader';
import TransactionsTable from '../components/TransactionsTable';

function TransactionsPage({ transactions, onDelete }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  function handleCloseModal() {
    setSelectedTransaction(null);
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
      <TransactionsTable
        transactions={transactions}
        onRequestDelete={setSelectedTransaction}
      />
      <DeleteTransactionModal
        show={Boolean(selectedTransaction)}
        transaction={selectedTransaction}
        onHide={handleCloseModal}
        onConfirm={onDelete}
      />
    </>
  );
}

export default TransactionsPage;
