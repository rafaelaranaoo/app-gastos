import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Menu({ item, onClick }) {
  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      end={item.path === '/'}
      onClick={onClick}
      sx={{
        mb: 0.5,
        borderRadius: 2,
        color: 'text.secondary',
        '&.active': {
          bgcolor: 'rgba(0, 109, 119, 0.11)',
          color: 'primary.main'
        },
        '&.active .MuiListItemIcon-root': {
          color: 'primary.main'
        }
      }}
    >
      <ListItemIcon sx={{ color: 'text.secondary', minWidth: 38 }}>
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{ fontWeight: 700, fontSize: 14 }}
      />
    </ListItemButton>
  )
}

export default Menu
