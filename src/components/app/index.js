import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import MenuLateral from '../menu/menuLateral'
import Topbar from '../topbar'

const drawerWidth = 260

/**
 * Componente: AppShell
 * Descrição: Estrutura de layout da aplicação com `Topbar` e `MenuLateral`.
 */
function AppShell({ children, transactions }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  /**
   * Alterna a abertura do menu lateral em telas menores.
   */
  function handleDrawerToggle() {
    setMobileOpen((currentValue) => !currentValue)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Topbar
        drawerWidth={drawerWidth}
        onMenuClick={handleDrawerToggle}
        transactions={transactions}
      />
      <MenuLateral
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          width: { md: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Box
          sx={{
            px: { xs: 2, sm: 3, lg: 4 },
            py: { xs: 2, sm: 3 },
            maxWidth: 1280,
            mx: 'auto'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default AppShell
