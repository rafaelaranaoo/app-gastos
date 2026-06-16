import { Button, Modal } from 'react-bootstrap'
import { formatarMoeda } from '../../utils'

// Serve para confirmar a exclusao de um lancamento.
function ModalExcluir({ mostrar, transacao, aoFechar, aoConfirmar }) {
  // Serve para excluir e fechar o modal.
  function confirmar() {
    if (transacao) {
      aoConfirmar(transacao.id)
    }
    aoFechar()
  }

  return (
    <Modal show={mostrar} onHide={aoFechar} centered>
      <Modal.Header closeButton>
        <Modal.Title>Excluir lancamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {transacao ? (
          <p className="mb-0">
            Deseja excluir <strong>{transacao.descricao}</strong> no valor de{' '}
            <strong>{formatarMoeda(transacao.valor)}</strong>?
          </p>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={aoFechar}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={confirmar}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalExcluir
