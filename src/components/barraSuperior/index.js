import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Chip, IconButton, Toolbar, Typography } from '@mui/material'
import { calcularResumo, formatarMoeda } from '../../utils'

// Serve para mostrar o topo da aplicacao e o saldo.
function BarraSuperior({ larguraMenu, aoClicarMenu, transacoes }) {
  const resumo = calcularResumo(transacoes)

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        width: { md: `calc(100% - ${larguraMenu}px)` },
        ml: { md: `${larguraMenu}px` }
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          edge="start"
          onClick={aoClicarMenu}
          sx={{ display: { md: 'none' } }}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Controle de Gastos
        </Typography>
        <Chip
          icon={<AccountBalanceWalletIcon />}
          color={resumo.saldo >= 0 ? 'success' : 'error'}
          label={formatarMoeda(resumo.saldo)}
        />
      </Toolbar>
    </AppBar>
  )
}

export default BarraSuperior
