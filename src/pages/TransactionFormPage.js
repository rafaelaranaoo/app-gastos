import { useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import TransactionForm from '../components/TransactionForm';
import NotFoundPage from './NotFoundPage';

function TransactionFormPage({ onSave, findTransaction }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const transaction = isEditing ? findTransaction(id) : null;

  if (isEditing && !transaction) {
    return <NotFoundPage />;
  }

  function handleSubmit(formData) {
    if (isEditing) {
      onSave(Number(id), formData);
    } else {
      onSave(formData);
    }

    navigate('/lancamentos');
  }

  return (
    <>
      <PageHeader
        title={isEditing ? 'Editar lançamento' : 'Novo lançamento'}
        subtitle="Formulário componentizado sem envio para API"
      />
      <TransactionForm
        initialValues={transaction}
        onSubmit={handleSubmit}
        submitLabel={isEditing ? 'Salvar alterações' : 'Salvar lançamento'}
      />
    </>
  );
}

export default TransactionFormPage;
