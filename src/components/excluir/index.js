import { Button as BootstrapButton, Modal } from 'react-bootstrap'
import { formatCurrency } from '../../utils'

/**
 * Componente: ExcluirTransacao
 * Descrição: Modal para confirmar exclusão de transação.
 */
function ExcluirTransacao({ show, transaction, onHide, onConfirm }) {
  /**
   * Função: handleConfirm
   * Descrição: Chama a ação de exclusão e fecha o modal.
   */
  function handleConfirm() {
    if (transaction) {
      onConfirm(transaction.id)
    }
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Excluir lançamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {transaction ? (
          <p className="mb-0">
            Deseja excluir <strong>{transaction.description}</strong> no valor
            de <strong>{formatCurrency(transaction.amount)}</strong>?
          </p>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <BootstrapButton variant="outline-secondary" onClick={onHide}>
          Cancelar
        </BootstrapButton>
        <BootstrapButton variant="danger" onClick={handleConfirm}>
          Excluir
        </BootstrapButton>
      </Modal.Footer>
    </Modal>
  )
}

export default ExcluirTransacao
