import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#49617a',
      dark: '#314357',
      light: '#7e93a7',
    },
    secondary: {
      main: '#9b8068',
      dark: '#705a48',
      light: '#d1b9a4',
    },
    background: {
      default: '#f5f7fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#16202a',
      secondary: '#4a5b6b',
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 750,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 20px 45px rgba(31, 47, 70, 0.08)',
        },
      },
    },
  },
});
