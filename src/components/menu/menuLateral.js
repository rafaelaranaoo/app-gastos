import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AddCardIcon from '@mui/icons-material/AddCard'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import SavingsIcon from '@mui/icons-material/Savings'
import {
  Box,
  Divider,
  Drawer,
  List,
  Stack,
  Typography
} from '@mui/material'
import Menu from './index'

const navigation = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <DashboardIcon />
  },
  {
    label: 'Lançamentos',
    path: '/lancamentos',
    icon: <ReceiptLongIcon />
  },
  {
    label: 'Novo lançamento',
    path: '/lancamentos/novo',
    icon: <AddCardIcon />
  },
  {
    label: 'Orçamento',
    path: '/orcamento',
    icon: <SavingsIcon />
  }
]

function MenuLateral({ drawerWidth, mobileOpen, onDrawerToggle }) {
  const drawerContent = (
    <Stack sx={{ height: '100%' }}>
      <Box sx={{ px: 3, py: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
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
            <Typography variant="h6" lineHeight={1.1}>
              Gastos+
            </Typography>
            <Typography variant="caption" color="text.secondary">
              CRUD financeiro
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <List sx={{ px: 1.5, py: 2 }}>
        {navigation.map((item) => (
          <Menu key={item.path} item={item} onClick={onDrawerToggle} />
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ px: 3, py: 2.5 }}>
        <Typography variant="body2" fontWeight={700}>
          Trabalho React
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Interface CRUD sem integração com API
        </Typography>
      </Box>
    </Stack>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider'
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}

export default MenuLateral
