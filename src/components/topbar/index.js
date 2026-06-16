import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import { calculateTotals, formatCurrency } from '../../utils'

function Topbar({ drawerWidth, onMenuClick, transactions }) {
  const totals = calculateTotals(transactions)

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` }
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { md: 'none' } }}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="h6" noWrap>
            Controle de Gastos Pessoais
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Painel financeiro mensal
          </Typography>
        </Box>
        <Chip
          icon={<AccountBalanceWalletIcon />}
          color={totals.balance >= 0 ? 'success' : 'error'}
          label={formatCurrency(totals.balance)}
          sx={{ fontWeight: 700 }}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
