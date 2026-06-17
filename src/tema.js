import { createTheme } from '@mui/material/styles'

// Serve para definir cores e estilos padrao do Material UI.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#006d77',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#e76f51',
      contrastText: '#ffffff'
    },
    success: {
      main: '#2a9d8f'
    },
    warning: {
      main: '#e9c46a'
    },
    error: {
      main: '#d62828'
    },
    background: {
      default: '#f5f7f6',
      paper: '#ffffff'
    },
    text: {
      primary: '#24302f',
      secondary: '#65706f'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    },
    button: {
      textTransform: 'none',
      fontWeight: 700
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  }
})

export default theme
