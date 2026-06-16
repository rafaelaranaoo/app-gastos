import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'

// Serve para criar cada link do menu lateral.
function LinkMenu({ link, aoClicar }) {
  return (
    <ListItemButton
      component={NavLink}
      to={link.rota}
      end={link.rota === '/'}
      onClick={aoClicar}
      sx={{
        mb: 0.5,
        borderRadius: 2,
        '&.active': {
          bgcolor: 'rgba(0, 109, 119, 0.12)',
          color: 'primary.main'
        }
      }}
    >
      <ListItemIcon sx={{ minWidth: 38 }}>{link.icone}</ListItemIcon>
      <ListItemText primary={link.texto} />
    </ListItemButton>
  )
}

export default LinkMenu
