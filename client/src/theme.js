import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B8860B', // Golden color for primary elements
      light: '#D4AF37',
      dark: '#8B6914',
    },
    secondary: {
      main: '#2F4F4F', // Dark slate for secondary elements
    },
    background: {
      default: '#FDF5E6', // Cream background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2F4F4F',
      secondary: '#696969',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '3.5rem',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 24px',
        },
        contained: {
          backgroundColor: '#B8860B',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#8B6914',
          },
        },
        outlined: {
          borderColor: '#B8860B',
          color: '#B8860B',
          '&:hover': {
            borderColor: '#8B6914',
            backgroundColor: 'rgba(184, 134, 11, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme; 