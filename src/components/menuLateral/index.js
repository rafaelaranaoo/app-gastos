import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AddCardIcon from '@mui/icons-material/AddCard'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { Box, Divider, Drawer, List, Stack, Typography } from '@mui/material'
import LinkMenu from '../linkMenu'

// Serve para guardar os links do menu.
const links = [
  { texto: 'Dashboard', rota: '/', icone: <DashboardIcon /> },
  { texto: 'Lancamentos', rota: '/lancamentos', icone: <ReceiptLongIcon /> },
  { texto: 'Novo lancamento', rota: '/lancamentos/novo', icone: <AddCardIcon /> }
]

// Serve para mostrar a navegacao lateral.
function MenuLateral({ larguraMenu, abertoNoCelular, aoFechar }) {
  const conteudo = (
    <Stack sx={{ height: '100%' }}>
      <Box sx={{ px: 3, py: 2.5 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              display: 'grid',
              placeItems: 'center'
            }}
          >
            <AccountBalanceWalletIcon />
          </Box>
          <Box>
            <Typography variant="h6">Gastos+</Typography>
            <Typography variant="caption" color="text.secondary">
              CRUD financeiro
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <List sx={{ px: 1.5, py: 2 }}>
        {links.map((link) => (
          <LinkMenu key={link.rota} link={link} aoClicar={aoFechar} />
        ))}
      </List>
    </Stack>
  )

  return (
    <Box component="nav" sx={{ width: { md: larguraMenu }, flexShrink: 0 }}>
      <Drawer
        variant="temporary"
        open={abertoNoCelular}
        onClose={aoFechar}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: larguraMenu }
        }}
      >
        {conteudo}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: larguraMenu }
        }}
      >
        {conteudo}
      </Drawer>
    </Box>
  )
}

export default MenuLateral
