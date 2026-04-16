import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#e6eebe',
      main: '#2f3f20',
      dark: '#333333',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
  },
});
