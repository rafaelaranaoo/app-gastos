import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import BarraSuperior from '../barraSuperior'
import MenuLateral from '../menuLateral'

// Serve para definir a largura do menu lateral.
const larguraMenu = 240

// Serve para organizar menu, topo e conteudo da pagina.
function Layout({ children, transacoes }) {
  const [menuAberto, setMenuAberto] = useState(false)

  // Serve para abrir e fechar o menu no celular.
  function alternarMenu() {
    setMenuAberto((valorAtual) => !valorAtual)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <BarraSuperior
        larguraMenu={larguraMenu}
        aoClicarMenu={alternarMenu}
        transacoes={transacoes}
      />
      <MenuLateral
        larguraMenu={larguraMenu}
        abertoNoCelular={menuAberto}
        aoFechar={alternarMenu}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${larguraMenu}px)` }
        }}
      >
        <Toolbar />
        <Box sx={{ maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
