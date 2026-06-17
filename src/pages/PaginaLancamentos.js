import AddCardIcon from '@mui/icons-material/AddCard'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import CabecalhoPagina from '../components/cabecalhoPagina'
import ModalExcluir from '../components/modalExcluir'
import TabelaLancamentos from '../components/tabelaLancamentos'

// Serve para mostrar a lista completa de lancamentos.
function PaginaLancamentos({ transacoes, aoExcluir }) {
  const [transacaoSelecionada, setTransacaoSelecionada] = useState(null)

  // Serve para fechar o modal de exclusao.
  function fecharModal() {
    setTransacaoSelecionada(null)
  }

  return (
    <>
      <CabecalhoPagina
        titulo="Lancamentos"
        subtitulo="Lista de receitas e despesas"
        acao={
          <Button
            component={RouterLink}
            to="/lancamentos/novo"
            variant="contained"
            startIcon={<AddCardIcon />}
          >
            Novo lancamento
          </Button>
        }
      />
      <TabelaLancamentos
        transacoes={transacoes}
        aoPedirExclusao={setTransacaoSelecionada}
      />
      <ModalExcluir
        mostrar={Boolean(transacaoSelecionada)}
        transacao={transacaoSelecionada}
        aoFechar={fecharModal}
        aoConfirmar={aoExcluir}
      />
    </>
  )
}

export default PaginaLancamentos
