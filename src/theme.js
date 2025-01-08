import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A259FF',
    },
    secondary: {
      main: '#F8AFA6',
    },
    background: {
      default: '#FAF4E8',
    },
    text: {
      primary: '#4B3A58',
      secondary: '#7B6B8A',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    fontSize: 16, // Base font size in pixels
    h1: {
      fontWeight: 700,
      fontSize: 32,
      color: '#4B3A58',
    },
    h2: {
      fontWeight: 600,
      fontSize: 24,
      color: '#4B3A58',
    },
    body1: {
      fontSize: 16,
      color: '#4B3A58',
    },
    button: {
      textTransform: 'none',
      fontSize: 10,
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#A259FF',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#8E49D6',
          },
        },
        outlinedPrimary: {
          borderColor: '#A259FF',
          color: '#A259FF',
          '&:hover': {
            borderColor: '#8E49D6',
            backgroundColor: 'rgba(162, 89, 255, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;
